<template>
    <div class="weui-cells">
        <div class="weui-cell">
            <div class="weui-cell__bd">
                <div :class="['ro-text-view', {placeholder: result === null || typeof result === 'undefined'}]" @click="onClick">{{result | placeholder(source.placeholder)}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        placeholder,
    } from './lib/utils';

    /**
     * 日期选择
     */
    export default {
        name: 'ROPlaceholder',
        props: {
            id: {
                required: true,
                type: String,
            },
            source: {
                type: Object,
                default: function() {
                    return {
                        placeholder: '', // 默认显示提示内容
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
                /**
                 * 当前页面上显示的内容
                 */
                currentValue: null,
            };
        },
        watch: {
            /**
             * 检查变化
             */
            '$props.result': function(val) {
                if (val !== this.currentValue) {
                    this.currentValue = val;
                }
            },
        },
        filters: {
            placeholder,
        },
        methods: {
            onClick: function() {
                this.$emit('click', this.id);
            },
        },
    };
</script>