<template>
    <div class="weui-cells">
        <div class="weui-cell">
            <div class="weui-cell__bd">
                <div :class="['ro-text-view', {placeholder: result === null || typeof result === 'undefined'}]" @click="onClick">{{result | placeholder(source.placeholder)}}</div>
            </div>
        </div>
        <mt-popup v-model="visible" position="bottom" class="mint-datetime">
            <mt-picker :slots="generatedSlots" @change="onValueChange" ref="picker" :show-toolbar="true" :item-height="itemHeight">
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
    export default {
        name: 'ROSelect',
        props: {
            id: {
                required: true,
                type: String,
            },
            source: {
                type: Object,
                default: function() {
                    return {
                        slots: [],
                        placeholder: '', // 
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
                currentValue: '', // 当前页面上显示的内容
            };
        },
        computed: {
            generatedSlots: function() {
                return [{
                    flex: 1,
                    values: this.source.slots,
                }];
            },
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
        },
        filters: {
            placeholder,
        },
        methods: {
            /**
             * @param picker picker对象
             * @param value 各个slots中的数据
             */
            onValueChange: function(picker, values) {
                this.currentValue = values[0]
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
                // this.$refs.picker.open();
                this.visible = true;
            },
            close: function() {
                this.visible = false;
            },
        },
        mounted: function() {
            this.$nextTick(() => {
                this.$refs.picker.setSlotValue(0, this.source.slots[0]);
            });
        },
    };
</script>