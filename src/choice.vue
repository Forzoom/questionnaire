<template>
    <div class="weui-cells weui-cells_radio">
        <label v-for="choice in source" class="weui-cell weui-check__label" :for="`${id}_${choice.value}`">
            <div class="weui-cell__bd">
                <p>{{choice.text}}</p>
            </div>
            <div class="weui-cell__ft" :style="{color: color}">
                <input type="radio" class="weui-check" :id="`${id}_${choice.value}`"  :value="choice.value" v-model="val">
                <span class="weui-icon-checked"></span>
            </div>
        </label>
    </div>
</template>

<script>
    export default {
        name: 'ROChoice',
        props: {
            id: {
                required: true,
                type: String,
            },
            // {value: string, text: string}
            source: {
                required: true,
                type: Array,
                default: function() {
                    return [];
                },
            },
            result: {
                type: String,
            },
            color: '', // 颜色
        },
        computed: {
            val: {
                get: function() {
                    return this.result;
                },
                set: function(val) {
                    this.$emit('item', {
                        id: this.id,
                        result: val,
                    });
                },
            },

        },
    };
</script>