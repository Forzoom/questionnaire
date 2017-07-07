<template>
    <div class="weui-cells">
        <div class="weui-cell">
            <div class="weui-cell__bd">
                <div 
                    class="ro-text-view" 
                    :class="{placeholder: result === null || typeof result === 'undefined'}" 
                    @click="onClick"
                >
                    {{result.join('') | placeholder(source.placeholder)}}
                </div>
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
    import rawAddress from './lib/address.js';
    // 通过rawAddress生成provinceList
    const provinceList = rawAddress.map(_ => _.n);
    export default {
        name: 'ROAddressPicker',
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
                type: Array,
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
            itemHeight: function() {
                return 36 * (window.devicePixelRatio || 1);
            },
        },
        watch: {
            visible: function(visible) {
                if (visible) {
                    this.$emit('background');
                } else {
                    this.$emit('foreground');
                }
            },
            /**
             * 尝试修改slots
             */
            currentValue: function(val, old) {
                const v = this.currentValue;
                this.generateSlots(val, old);
                this.$nextTick(() => {
                    const $picker = this.$refs.picker;
                    $picker.setSlotValue(0, v[0]);
                    $picker.setSlotValue(1, v[1]);
                })
            },
            '$props.result': function(v) {
                this.currentValue = v;
            },
        },
        methods: {
            /**
             * 当用户操作时更新currentValue
             *
             * @param picker picker对象
             * @param values 各个slots中的数据
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
                this.$emit('item', {
                    id: this.id,
                    result: this.currentValue,
                });
                this.close();
            },
            open: function() {
                this.visible = true;
            },
            close: function() {
                this.visible = false;
            },
			/**
             *
			 * @param {Array} oldValue
			 * @param {Array} newValue
			 */
			generateSlots: function(newValue, oldValue) {
            	const [oldProvince] = oldValue;
            	const [newProvince] = newValue;
            	if (oldProvince !== newProvince) {
            		let cityList = [];
            		for (let i = 0, len = rawAddress.length; i < len; i++) {
            			if (rawAddress[i].n === newProvince) {
            				cityList = rawAddress[i].c.map(_ => _.n);
                        }
                    }
					this.slots = [
						{
							flex: 1,
							values: provinceList,
						},
						{
							flex: 1,
							values: cityList,
						},
					];
                }
            },
        },
        filters: {
            placeholder,
        },
        mounted: function() {
            const vm = this;
            let currentValue = ['北京市', ''];
            if (Array.isArray(vm.result) && vm.result[0] != null && vm.result[0] != null) {
                currentValue = vm.result;
            }
            vm.currentValue = currentValue;
        },
    };
</script>