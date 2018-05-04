<template>
    <div class="weui-cells">
        <div :class="['weui-cell', {'weui-cell_warn': warn && !focus}]">
            <div class="weui-cell__bd">
                <input class="weui-input" v-if="source.type == 'text'" type="text" :pattern="source.pattern" :placeholder="source.placeholder" v-model="val"
                    @focus="onFocus"
                    @blur="onBlur"
                />
                <input class="weui-input" v-else-if="source.type == 'number'" type="number" :pattern="source.pattern" :placeholder="source.placeholder" v-model="val"
                    @focus="onFocus"
                    @blur="onBlur"
                />
            </div>
            <div v-if="warn && !focus" class="weui-cell__ft">
                <i class="weui-icon-warn"></i>
            </div>
        </div>
    </div>
</template>

<script>
    /**
     * 内容输入
     */
    export default {
        name: 'ROInput',
        props: {
            id: {
                required: true,
                type: String,
            },
            source: {
                required: true,
                type: Object,
                default: function() {
                    return {
                        placeholder: '',
                        type: 'text',
                        pattern: null,
                        inputValidator: null,
                        submitValidator: null,
                    };
                },
            },
            result: {
                type: String,
                default: '',
            },
        },
        data: function() {
            return {
                warn: false,
                focus: false,
            };
        },
        computed: {
            mergeSource: function() {
                return Object.assign({
                    placeholder: '',
                    type: 'text',
                    pattern: null,
                    inputValidator: null,
                    submitValidator: null,
                }, this.source);
            },
            val: {
                get: function() {
                    return this.result;
                },
                set: function(val) {
                    // 检测inputValidator
                    var source = this.mergeSource;
                    if ('production' !== process.env.NODE_ENV) {
                        console.log('inputValidator', source.inputValidator, !source.inputValidator.test(val));
                    }

                    // 将input中的值修正，使用之前的this.result
                    if (source.inputValidator && !source.inputValidator.test(val)) {
                        if ('production' !== process.env.NODE_ENV) {
                            console.log('try to modify this.val', this.val, this.result);
                        }
                        val = this.val = this.result;
                    }
                    // 
                    if (val !== this.result) {
                        this.$emit('item', {
                            id: this.id,
                            result: val,
                        });
                    }
                },
            },
        },
        methods: {
            onFocus: function() {
                this.focus = true;
            },
            onBlur: function() {
                this.focus = false;
                // 检测并且判断是否需要warn
                var source = this.mergeSource;
                if (source.submitValidator) {
                    if (!source.submitValidator.test(this.val) && !this.warn) {
                        this.warn = true;
                        this.$emit('warn');
                    } else if (source.submitValidator.test(this.val) && this.warn) {
                        this.warn = false;
                        this.$emit('validate');
                    }
                }
            },
        },
    };
</script>