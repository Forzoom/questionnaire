<template>
    <div class="weui-cells weui-cells_checkbox">
        <label v-for="choice in source" class="weui-cell weui-check__label" :for="`${id}_${choice.value}`">
            <div class="weui-cell__hd" :style="{color: color}">
                <input type="checkbox" class="weui-check" :id="`${id}_${choice.value}`" :value="choice.value"  v-model="val">
                <i class="weui-icon-checked"></i>
            </div>
            <div class="weui-cell__bd">
                <p>{{choice.text}}</p>
            </div>
        </label>
    </div>
</template>

<script>
    export default {
        name: 'ROMultiChoice',
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
                type: Array,
            },
            color: '',
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