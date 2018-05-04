<template>
    <div class="ro-questions" ref="wrap">
        <div class="ro-question-banner-wrap" v-if="banner" 
            @touchstart="noWhenBackground($event)"
            @touchmove="noWhenBackground($event)"
            @touchend="noWhenBackground($event)">
            <img class="ro-question-banner" :src="banner" />
        </div>
        <div class="ro-question" :key="question.id" v-for="(question, index) in questions">
            <div class="weui-cells__title">
                {{index + 1}}.{{question.caption}}<span class="ro-required-tag" v-if="required[question.id]"></span>
            </div>
            <component
                :is="question.type"
                :id="question.id"
                :source="question.source"
                :result="question.result" 
                :color="color"
                @item="setResult"
                @load="onStartLoad"
                @finish="onFinishLoad"
                @background="onBackground"
                @foreground="onForeground"
                @warn="onWarn"
                @validate="onValidate"
                @click="onClick">
            </component>
        </div>
        <div class="ro-questionnaire-submit-button">
            <MobileButton
                :name="mobileButtonName"
                :class="mobileButtonClass"
                :style="mobileButtonStyle"
                :is-block="true"
                :is-disabled="!(!disableSubmit && isComplete)"
                @click="onClickSubmit">
                {{submitHint}}
            </MobileButton>
        </div>
    </div>
</template>

<script>
    import {
        _Vue,
    } from './install.js';
    import MobileButton from '@forzoom/mobile-button';
    import ROChoice from './components/choice.js';
    import ROMultipleChoice from './components/multipleChoice.js';
    import ROAddressLocation from './components/addressLocation.vue';
    import ROTextarea from './components/textarea.vue';
    import ROUploader from './components/uploader.js';
    import ROPlaceholder from './components/placeholder.vue';
    import ROSelect from './components/select.vue';
    import ROInput from './components/input.vue';
    import ROSegment from './components/segment.vue';

    /**
     * 问卷
     */
    export default {
        name: 'ROQuestionnaire',
        components: {
            ROChoice,
            ROMultipleChoice,
            ROAddressLocation,
            ROTextarea,
            ROUploader,
            ROPlaceholder,
            ROSelect,
            ROInput,
            ROSegment,
            MobileButton,
        },
        props: {
            /**
             * banner链接，存在的情况下，将显示头部banner
             */
            banner: {
                type: String,
            },
            /**
             * 问卷数据
             */
            questions: {
                type: Array,
                default: function() {
                    return [];
                },
            },
            /**
             * 是否禁止提交
             */
            disableSubmit: {
                type: Boolean,
                default: false,
            },
            /**
             * 禁止提交时显示文本
             */
            disableHint: {
                type: String,
                default: '',
            },
            /**
             * 允许提交文本
             */
            allowHint: {
                type: String,
                default: '提交',
            },
            /**
             * 提醒填写文本
             */
            fillHint: {
                type: String,
                default: '未填写完整',
            },
            /**
             * 需要统一的颜色，将应用在
             *  ROChoice
             *  ROMultipleChoice
             */
            color: {
                required: true,
                type: String,
            },
            /**
             * - name
             */
            mobileButtonName: {
                type: String,
                default: '',
            },
            /**
             * mobileButton的样式
             */
            mobileButtonStyle: {
                type: [ Array, Object, ],
            },
            /**
             * mobileButton的样式类
             */
            mobileButtonClass: {
                type: [ Array, Object, ],
            },
            /**
             * 要求检查的required，包含类型 {type: 'equal', key, value}
             */
            requiredCondition: {
                type: Array,
                default() {
                    return [];
                },
            }
        },
        data: function() {
            return {
                background: false, // 是否在后台，即在弹窗之后，用来判断是否需要锁定touch事件 => no
                warnCount: 0, // 当前的warn的数量
            };
        },
        computed: {
            // 是否必填都已经填写完成
            isComplete: function() {
                console.log('in isComplete', this.warnCount);
                if (this.warnCount > 0) {
                    return false;
                }
                let result = true;
                for (let i = 0, len = this.questions.length; i < len; i++) {
                    const question = this.questions[i];
                    const qResult = question.result;
                    const isRequired = this.required[question.id];
                    if (isRequired && (qResult === '' || qResult === null || (Object.prototype.toString.call(qResult) === '[object Array]' && qResult.length === 0))) {
                        result = false;
                        break;
                    }
                }
                return result;
            },
            submitHint: function() {
                if (this.disableSubmit) {
                    return this.disableHint || ' ';
                }
                // 请求数据: 获取测试结果
                if (this.isComplete) {
                    return this.allowHint;
                } else {
                    return this.fillHint;
                }
            },
            /**
             * 最后的结果
             */
            result: function() {
                const data = {};
                this.questions.forEach(function(question) {
                    data[question.id] = question.result;
                });
                return data;
            },
            /**
             * 所有的required要求，默认没有要求
             */
            required() {
                const vm = this;

                const required = {};
                for (let i = 0, len = vm.questions.length; i < len; i++) {
                    const question = vm.questions[i];
                    required[question.id] = question.meta ? Boolean(question.meta.isRequired) : false;
                }

                // 当前的数据结果
                vm.requiredCondition.forEach(function(condition) {
                    switch (condition.type) {
                    case 'equal':
                        // 处理break
                        if (vm.result[condition.key] === condition.value) {
                            // 条件成立
                            required[condition.id] = condition.isRequired;
                        }
                        break;
                    }
                });

                console.log(required);
                return required;
            },
        },
        watch: {
            watchCount: function(val) {
                this.isComplete;
            },
        },
        methods: {
            /**
             * 设置数据
             *
             * @param patch 数据
             *  - id
             *  - result 结果
             */
            setResult: function(patch) {
                this.$emit('item', patch);
                for (let i = 0, len = this.questions.length; i < len; i++) {
                    const question = this.questions[i];
                    if (question.id === patch.id) {
                        if ('production' !== process.env.NODE_ENV) {
                            console.log('setResult', question.id, patch.result);
                        }
                        question.result = patch.result;
                        break;
                    }
                }
            },
            onStartLoad: function() {
                this.processing();
            },
            onFinishLoad: function() {
                this.finish();
            },
            onBackground: function() {
                this.goBackground();
            },
            onForeground: function() {
                this.goForeground();
            },
            onClickSubmit: function() {
                if (!this.disableSubmit && this.isComplete) {
                    this.$emit('submit', this.result);
                }
            },
            onWarn: function() {
                this.warnCount++;
            },
            onValidate: function() {
                this.warnCount--;
            },
            // 进入到后台
            goBackground: function() {
                this.background = true;
            },
            goForeground: function() {
                this.background = false;
            },
            noWhenBackground: function (e) {
                if (this.background) {
                    e.preventDefault();
                    return false;
                }
                return true;
            },

            /**
             * 点击事件
             */
            onClick(id) {
                this.$emit('click', id);
            },
        },
    };
</script>

<style lang="less">
    @import "./style/style.less";
    @import "./style/normalize-style.less";
    @import "./style/normalize-weui.less";
</style>