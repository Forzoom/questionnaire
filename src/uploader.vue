<template>
    <div class="weui-cells">
        <div class="weui-cell">
            <div class="weui-cell__bd">
                <WechatUploader
                    ref="uploader"
                    :size="source.size"
                    @add="onAdd"
                    @remove="onRemove"
                ></WechatUploader>
            </div>
        </div>
    </div>
</template>

<script>
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
        methods: {
            /**
             * 当新图片添加时触发，将serverId发送出去
             */
            onAdd({ serverId, }) {
                this.$emit('item', {
                    id: this.id,
                    result: serverId,
                });
            },
            /**
             * 当图片被删除时触发
             */
            onRemove() {
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
                    this.$refs.uploader.setImages([
                        {
                            image: val,
                            serverId: null,
                        },
                    ]);
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
    };
</script>