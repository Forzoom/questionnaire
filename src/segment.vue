<template>
    <div class="weui-cells">
        <div class="weui-cell">
            <div
                v-for="item in source"
                class="ro-segment-item"
                :style="{color: item.value == val ? color : 'rgba(53,53,53,1)', width: (100 / rowCount) + '%'}"
                @click="onClickItem(item.value)"
            >
                {{item.text}}
            </div>
        </div>
    </div>
</template>

<script>
    /**
     * 类似于radio
     *
     *  颜色默认使用黑色
     */
    export default {
        name: 'ROSegment',
        props: {
            id: {
                required: true,
                type: String,
            },
            source: {
                type: Array,
                default() {
                    return [];
                },
            },
            result: {
                type: String,
            },
            /**
             * 显示颜色
             */
            color: {
                type: String,
            },
        },
        data() {
            return {
                val: null,
            };
        },
        computed: {
            /**
             * 每行中显示的数量
             */
            rowCount() {
                const len = this.source.length;
                if (len === 2) {
                    return 2;
                }
                const mod4remain = len % 4;
                const mod3remain = len % 3;
                if (mod4remain === 0) {
                    return 4;
                }
                if (mod3remain === 0) {
                    return 3;
                }
                // 如果两者相同的情况下，选择4，让整个页面看起来更致密
                if (4 - mod4remain <= 3 - mod3remain) {
                    return 4;
                }
                return 3;
            },
        },
        watch: {
            /**
             * 当prop.result改变是，对应的val也需要改变
             */
            '$props.result': function(val) {
                this.val = val;
            },
        },
        methods: {
            /**
             * 点击按钮时的效果
             */
            onClickItem(val) {
                if (val !== this.val) {
                    console.log('emit');
                    this.$emit('item', {
                        id: this.id,
                        result: val,
                    });
                }
            },
        },
    };
</script>

<style>
    .ro-segment-item {
        float: left;
        text-align: center;
    }
</style>