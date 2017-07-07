<template>
    <div class="weui-cells">
        <div class="weui-cell">
            <div class="weui-cell__bd">
                <div :class="['ro-text-view', {placeholder: result === null || typeof result === 'undefined'}]" @click="onClick">{{result | placeholder(source.placeholder)}}</div>
            </div>
        </div>
        <mt-popup v-model="visible" position="bottom" class="mint-datetime">
            <mt-picker :slots="slots" @change="onValueChange" ref="picker" :show-toolbar="true" :item-height="itemHeight">
                <span class="mint-datetime-action mint-datetime-cancel" @click="visible = false;$emit('cancel')" @touchstart="visible = false;$emit('cancel')">{{ cancelText }}</span>
                <span class="mint-datetime-action mint-datetime-confirm" @click="onConfirm" @touchstart="onConfirm">{{ confirmText }}</span>
            </mt-picker>
        </mt-popup>
    </div>
</template>

<script>
    import {
        placeholder,
    } from './lib/utils';
    // find MONTH_DAY fail in safari
    // const MONTH_DAY = [ null, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31, ];
    function isLeapYear (year) {
        return year % 4 === 0 && (year % 400 === 0 ? true : year % 100 !== 0);
    }
    // month
    function getMonthDay (year, month) {
        const MONTH_DAY = [ null, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31, ];
        if (isLeapYear(year) && month === 2) {
            return MONTH_DAY[month] + 1;
        }
        return MONTH_DAY[month];
    }
    function fillValues (rim) {
        const arr = [];
        for (let i = rim[0], len = rim[1]; i <= len; i++) {
            arr.push(`${i}`);
        }
        return arr;
    }
    export default {
        name: 'RODatePicker',
        props: {
            id: {
                required: true,
                type: String,
            },
            source: {
                type: Object,
                default: function() {
                    return {
                        placeholder: '', // 
                        date: new Date(),
                    };
                },
            },
            result: {
                type: String, // 输出的数据是一个string
            },
        },
        data: function() {
            return {
                visible: false, // 是否显示
                cancelText: '取消', // 
                confirmText: '确定',
                slots: [], // 需要使用代码来生成
                currentValue: [], // 当前页面上显示的内容
            };
        },
        computed: {
            // 原始数据
            rims: function() {
                const year = this.currentValue[0];
                const month = this.currentValue[1];
                const date = this.currentValue[2];
                const current = new Date();
                const rims = {
                    year: [1900, current.getFullYear()], // 到今年为止
                    month: [1, 12],
                    date: [1, 31],
                };
                // 修正正确的month数据
                rims.date[1] = getMonthDay(year, month);
                // 限制最大时间
                if (year === String(current.getFullYear())) {
                    rims.month[1] = String(current.getMonth() + 1); // 限制month
                    if (month === String(current.getMonth() + 1)) {
                        rims.date[1] = String(current.getDate()); // 限制date 
                    }
                }
                return rims;
            },
            itemHeight: function() {
                return 36 * (window.devicePixelRatio || 1);
            },
        },
        watch: {
            rims: function() {
                this.generateSlots();
            },
            visible: function(visible) {
                if (visible) {
                    this.$emit('background');
                } else {
                    this.$emit('foreground');
                }
            },
            '$props.result': function() {
                const v = this.currentValue;
                const $picker = this.$refs.picker;
                $picker.setSlotValue(0, `${v[0]}`);
                $picker.setSlotValue(1, `${v[1]}`);
                $picker.setSlotValue(2, `${v[2]}`);
            },
        },
        methods: {
            /**
             * @param picker picker对象
             * @param value 各个slots中的数据
             */
            onValueChange: function(picker, values) {
                this.currentValue = picker.$children.filter(child => child.currentValue !== undefined).map(child => child.currentValue);
            },
            onClick: function() {
                this.open();
            },
            onClickContainer: function() {
                this.close();
            },
            /**
             */
            onConfirm: function() {
                let value = this.currentValue.map((_) => parseInt(_));
                const year = value[0];
                const month = (value[1] < 10 ? '0' : '') + value[1];
                const date = (value[2] < 10 ? '0' : '') + value[2];
                this.$emit('item', {
                    id: this.id,
                    result: `${year}-${month}-${date}`,
                });
                this.close();
            },
            open: function() {
                this.visible = true;
            },
            close: function() {
                this.visible = false;
            },
            generateSlots: function() {
                const vm = this;
                const rims = vm.rims;
                vm.slots = [
                    {
                        flex: 1,
                        values: fillValues(rims.year),
                    },
                    {
                        flex: 1,
                        values: fillValues(rims.month),
                    },
                    {
                        flex: 1,
                        values: fillValues(rims.date),
                    },
                ];
            },
        },
        filters: {
            placeholder,
        },
        mounted: function() {
            const vm = this;
            let currentValue = null;
            if (/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(vm.result)) {
                currentValue = vm.currentValue = vm.result.split('-');
            } else {
                const current = vm.source.date || new Date();
                currentValue = vm.currentValue = [ current.getFullYear(), current.getMonth() + 1, current.getDate(), ];
            }
            vm.$nextTick(() => {
                const $picker = vm.$refs.picker;
                $picker.setSlotValue(0, `${currentValue[0]}`);
                $picker.setSlotValue(1, `${currentValue[1]}`);
                $picker.setSlotValue(2, `${currentValue[2]}`);
            });
        },
    };
</script>