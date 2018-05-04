// <template>
//     <div class="weui-cells weui-cells_checkbox">
//         <label v-for="choice in source" class="weui-cell weui-check__label" :for="`${id}_${choice.value}`">
//             <div class="weui-cell__hd" :style="{color: color}">
//                 <input type="checkbox" class="weui-check" :id="`${id}_${choice.value}`" :value="choice.value"  v-model="val">
//                 <i class="weui-icon-checked"></i>
//             </div>
//             <div class="weui-cell__bd">
//                 <p>{{choice.text}}</p>
//             </div>
//         </label>
//     </div>
// </template>

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
            default() {
                return [];
            },
        },
        color: '',
    },
    data: function() {
        return {
            // 最终的结果
            val: [],
        };
    },
    watch: {
        '$prop.result': function(val) {
            this.val = val;
        },
        val: function(val) {
            this.$emit('item', {
                id: this.id,
                result: val,
            });
        },
    },
    mounted: function() {
        this.val = this.result;
    },
    render: function(h) {
        var vm = this;
        var labels = [];

        for (let i = 0, len = vm.source.length; i < len; i++) {
            var choice = vm.source[i];
            // 渲染bd
            var hd = h('div', {
                'class': [ 'weui-cell__hd', ],
            }, [
                h('p', {}, choice.text),
            ]);
            // 渲染ft
            var bd = h('div', {
                'class': [ 'weui-cell__bd', ],
                style: {
                    color: vm.color,
                },
            }, [
                // input
                h('input', {
                    'class': [ 'weui-check', ],
                    attrs: {
                        type: 'checkbox',
                        id: `${vm.id}_${choice.value}`,
                        value: choice.value,
                        // checked: false,
                    },
                    domProps: {
                        checked: vm.val.indexOf(choice.value) !== -1,
                    },
                }),
                // span
                h('span', {
                    'class': [ 'weui-icon-checked', ],
                }),
            ]);
            // label
            var label = h('label', {
                'class': [ 'weui-cell', 'weui-check__label', ],
                attrs: {
                    for: `${vm.id}_${choice.value}`,
                },
                on: {
                    click: function toggle(e) {
                        var pos = vm.val.indexOf(choice.value);
                        // 已经存在的情况下
                        if (pos !== -1) {
                            vm.val.splice(pos, 1);
                        } else {
                            // 不存在的情况下
                            vm.val.push(choice.value);
                        }
                        e.preventDefault();
                    },
                },
            }, [
                hd,
                bd,
            ]);

            labels.push(label);
        }

        return h('div', {
            'class': [ 'weui-cells', 'weui-cells_checkbox', ],
        }, labels);
    },
};