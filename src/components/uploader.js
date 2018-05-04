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
            type: Array, // [{ image, serverId, }]
        },
    },
    computed: {
        /**
         * 当前已经上传的图片的数量
         */
        imageCount: function() {
            return this.count;
        },
        /**
         * 总的可以上传的图片数量
         */
        imageSize: function() {
            return this.source.size;
        },
    },
    data: function() {
        return {
            // 当前已经上传的图片数量
            count: 0,
        };
    },
    methods: {
        /**
         * 当新图片添加时触发，将serverId发送出去
         */
        onAdd: function() {
            var images = this.$refs.uploader.getImages();
            this.count = images.length;
            this.$emit('item', {
                id: this.id,
                result: images,
            });
        },
        /**
         * 当图片被删除时触发
         */
        onRemove: function() {
            var images = this.$refs.uploader.getImages();
            this.count = images.length;
            this.$emit('item', {
                id: this.id,
                result: images,
            });
        },
        /**
         * 统一更新image
         *
         * @param {Array<{image, serverId}> images
         */
        updateImage: function(images) {
            this.count = images.length;
            this.$refs.uploader.setImages(images);
        }
    },
    mounted: function() {
        this.updateImage(this.result);
    },
    watch: {
        // 为了让result同步
        '$props.result': function(val) {
            this.updateImage(val);
        },
    },
    render: function(h) {
        var bd = h('div', {
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