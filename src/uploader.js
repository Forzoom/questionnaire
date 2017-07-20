// <template>
//     <div class="weui-cells">
//         <div class="weui-cell">
//             <div class="weui-cell__bd">
//                 <WechatUploader
//                     ref="uploader"
//                     :size="source.size"
//                     @add="onAdd"
//                     @remove="onRemove"
//                 >
//                 </WechatUploader>
//                 <div class="weui-textarea-counter"><span>{{imageCount}}</span>/{{imageSize}}</div>
//             </div>
//         </div>
//     </div>
// </template>

import {
    isUndef,
} from './lib/utils.js';
export default {
    name: 'ROUploader',
    props: {
        id: {
            required: true,
            type: String,
        },
        /**
         * - size 允许的最大数量，默认为1
         */
        source: {
            type: Object,
            default: function() {
                return {
                    size: 1,
                };
            },
        },
        result: {
            type: String, // 输出的数据是一个string
        },
    },
    computed: {
        /**
         * 当前已经上传的图片的数量
         */
        imageCount() {
            return this.count;
        },
        /**
         * 总的可以上传的图片数量
         */
        imageSize() {
            return this.source.size;
        },
    },
    data() {
        return {
            // 当前已经上传的图片数量
            count: 0,
        };
    },
    methods: {
        /**
         * 当新图片添加时触发，将serverId发送出去
         */
        onAdd({ serverId, }) {
            this.count++;
            this.$emit('item', {
                id: this.id,
                result: serverId,
            });
        },
        /**
         * 当图片被删除时触发
         */
        onRemove() {
            this.count--;
            this.$emit('item', {
                id: this.id,
                result: null,
            });
        },
        /**
         * 统一更新image
         */
        updateImage(val) {
            if (!isUndef(val) && val.indexOf('http') === 0) {
                this.$refs.uploader.removeAll();
                this.$refs.uploader.add(val, null);
            }
        }
    },
    mounted() {
        this.updateImage(this.result);
    },
    watch: {
        // 为了让result同步
        '$props.result': function(val) {
            this.updateImage(val);
        },
    },
    render(h) {
        const bd = h('div', {
            'class': [ 'weui-cell__bd', ],
        }, [
            h('WechatUploader', {
                ref: 'uploader',
                props: {
                    size: this.source.size,
                },
                on: {
                    add: this.onAdd,
                    remove: this.onRemove,
                },
            }),
            h('div', {
                'class': [ 'weui-textarea-counter', ],
            }, [
                h('span', {}, this.imageCount),
                `/${this.imageSize}`,
            ]),
        ]);
        return h('div', {
            'class': [ 'weui-cells', ],
        }, [
            h('div', {
                'class': [ 'weui-cell', ],
            }, [
                bd,
            ]),
        ]);
    },
};