<template>
    <div class="weui-cells">
        <div class="weui-cell">
            <div class="weui-cell__bd">
                <div :class="['ro-text-view', {placeholder: currentValue === null || typeof currentValue === 'undefined'}]">{{map[currentValue] | placeholder(placeholder)}}{{source.disabled ? '(当前不可修改)' : ''}}</div>
                <select class="ro-select" v-model="currentValue" :disabled="source.disabled">
                    <option v-for="(item, index) in source.slots" :key="index" :value="item.value">{{item.text}}</option>
                </select>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        placeholder,
    } from './lib/utils';
    /**
     * 选择
     */
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
                        slots: [], // 所有的显示内容
                        placeholder: '', // 默认的显示内容
                        disabled: false, // 是否禁用
                    };
                },
            },
            // 最终的输出
            result: {
                type: String, // 输出的数据是一个string
                default: '',
            },
        },
        data: function() {
            return {
                currentValue: '', // 当前页面上显示的内容
            };
        },
        computed: {
            /**
             * value => text 的 map
             */
            map: function() {
                const result = {};
                this.source.slots.forEach(slot => {
                    result[slot.value] = slot.text;
                });
                return result;
            },
            /**
             * 当没有数据时候显示的内容
             */
            placeholder: function() {
                const text = this.map[this.currentValue] || '';
                return this.source ?
                    (this.source.disabled ?
                        `${text}(当前不可修改)` :
                        (this.source.placeholder || '点击选择')) :
                    '点击选择';
            },
        },
        filters: {
            placeholder,
        },
        watch: {
            /**
             * 更新数据
             */
            '$props.result': function() {
                this.currentValue = this.result;
            },
            /**
             * 发生变化需要通知外界
             */
            currentValue: function(val) {
                this.$emit('item', {
                    id: this.id,
                    result: val,
                });
            },
        },
        created: function() {
            this.currentValue = this.result;
        },
    };
</script>

<style lang="less">
    .ro-select {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
    }
</style>