<template>
    <div class="weui-cells">
        <div class="weui-cell">
            <div class="weui-cell__bd">
                <div :class="['ro-text-view', {placeholder: result === null || typeof result === 'undefined'}]" @click="onClick">{{source.text | placeholder(source.placeholder, '')}}</div>
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
                        placeholder: '', // 提示内容
                        text: '', // 显示的文本内容
                    };
                },
            },
            result: {},
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