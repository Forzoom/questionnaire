// <template>
//     <div class="weui-cells weui-cells_radio">
//         <label v-for="choice in source" class="weui-cell weui-check__label" :for="`${id}_${choice.value}`">
//             <div class="weui-cell__bd">
//                 <p>{{choice.text}}</p>
//             </div>
//             <div class="weui-cell__ft" :style="{color: color}">
//                 <input type="radio" class="weui-check" :id="`${id}_${choice.value}`"  :value="choice.value" v-model="val">
//                 <span class="weui-icon-checked"></span>
//             </div>
//         </label>
//     </div>
// </template>


export default {
    name: 'ROChoice',
    props: {
        /**
         *
         */
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
        /**
         * 结果
         */
        result: {
            type: String,
        },
        /**
         * 勾选框所显示的颜色
         */
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
    render(h) {
        const vm = this;
        const labels = [];

        for (let i = 0, len = vm.source.length; i < len; i++) {
            const choice = vm.source[i];
            // 渲染bd
            const bd = h('div', {
                'class': [ 'weui-cell__bd', ],
            }, [
                h('p', {}, choice.text),
            ]);
            // 渲染ft
            const ft = h('div', {
                'class': [ 'weui-cell__ft', ],
                style: {
                    color: vm.color,
                },
            }, [
                // input
                h('input', {
                    'class': [ 'weui-check', ],
                    attrs: {
                        type: 'radio',
                        id: `${vm.id}_${choice.value}`,
                        value: choice.value,
                        // checked: false,
                    },
                    domProps: {
                        checked: choice.value === vm.val,
                    },
                }),
                // span
                h('span', {
                    'class': [ 'weui-icon-checked', ],
                }),
            ]);
            // label
            const label = h('label', {
                'class': [ 'weui-cell', 'weui-check__label', ],
                attrs: {
                    for: `${vm.id}_${choice.value}`,
                },
                on: {
                    click: function(val) {
                        vm.val = choice.value;
                    },
                },
            }, [
                bd,
                ft,
            ]);

            labels.push(label);
        }

        return h('div', {
            'class': [ 'weui-cells', 'weui-cells_radio', ],
        }, labels);
    },
};
