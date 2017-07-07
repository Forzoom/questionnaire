<template>
    <div class="weui-cells weui-cells_form">
        <div class="weui-cell">
            <div class="weui-cell__bd">
                <textarea class="weui-textarea" :placeholder="source.placeholder" rows="3" v-model="val"></textarea>
                <div class="weui-textarea-counter"><span>{{val.length}}</span>/{{source.max}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ROTextarea',
        props: {
            id: {
                required: true,
                type: String,
            },
            source: {
                type: Object,
                default: function() {
                    return {
                        placeholder: '',
                        max: 200,
                    };
                },
            },
            result: {
                type: String,
                default: '',
            },
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
        watch: {
            '$props.result': function(value, oldValue) {
                if (value !== oldValue) {
                    if (value.length > this.source.max) {
                        this.val = value.substr(0, this.source.max);
                    } else {
                        this.val = value;
                    }
                }
            },
        },
    };
</script>