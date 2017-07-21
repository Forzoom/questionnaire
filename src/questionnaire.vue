<template>
    <div class="ro-questions" ref="wrap">
        <div class="ro-question-banner-wrap" v-if="banner" 
            @touchstart="noWhenBackground($event)"
            @touchmove="noWhenBackground($event)"
            @touchend="noWhenBackground($event)"
        >
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
                @item="onUpdate"
                @load="onStartLoad"
                @finish="onFinishLoad"
                @background="onBackground"
                @foreground="onForeground"
                @warn="onWarn"
                @validate="onValidate"
                @dialog="onDialog"
            >
            </component>
        </div>
        <div class="ro-questionnaire-submit-button">
            <MobileButton
                :name="mobileButtonName"
                :is-block="true"
                :is-disabled="!(!disableSubmit && isComplete)"
                @click="onClickSubmit"
            >
                {{submitHint}}
            </MobileButton>
        </div>
        <div v-if="showLoading">
            <div class="weui-mask_transparent"></div>
            <div class="weui-toast">
                <i class="weui-loading weui-icon_toast"></i>
                <p class="weui-toast__content">数据加载中</p>
            </div>
        </div>
        <div v-if="showDialog">
            <div class="weui-mask"></div>
            <div class="weui-dialog">
                <div class="weui-dialog__hd"><strong class="weui-dialog__title">{{dialogTitle}}</strong></div>
                <div class="weui-dialog__bd">{{dialogContent}}</div>
                <div class="weui-dialog__ft">
                    <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary" @click="showDialog = false;">确定</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        _Vue,
    } from './install.js';
    import MobileButton from '@forzoom/mobile-button';
    import ROChoice from './choice.js';
    import ROMultipleChoice from './multipleChoice.js';
    import ROAddressLocation from './addressLocation.vue';
    import ROAddressPicker from './addressPicker.vue';
    import ROTextarea from './textarea.vue';
    import ROUploader from './uploader.js';
    import RODatePicker from './datePicker.vue';
    import ROSelect from './select.vue';
    import ROInput from './input.vue';
    import ROSegment from './segment.vue';
    export default {
        name: 'ROQuestionnaire',
        components: {
            ROChoice,
            ROMultipleChoice,
            ROAddressLocation,
            ROAddressPicker,
            ROTextarea,
            ROUploader,
            RODatePicker,
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
                default() {
                    return '';
                },
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
                showDialog: false, // 是否显示dialog
                showLoading: false, // 是否显示load
                background: false, // 是否在后台，即在弹窗之后，用来判断是否需要锁定touch事件 => no
                warnCount: 0, // 当前的warn的数量
                dialogTitle: null,
                dialogContent: null,
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
                    required[question.id] = Boolean(question.meta.isRequired);
                }

                console.log(vm.requiredCondition);

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
        mounted() {
            console.log(this.required);
        },
        methods: {
            onUpdate: function(patch) {
                for (let i = 0, len = this.questions.length; i < len; i++) {
                    const question = this.questions[i];
                    if (question.id === patch.id) {
                        if ('production' !== process.env.NODE_ENV) {
                            console.log(question.id, patch.result);
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
            onDialog: function(val) {
                this.dialogTitle = val.dialogTitle;
                this.dialogContent = val.dialogContent;
                this.showDialog = true;
            },
            // 显示load
            processing: function() {
                this.showLoading = true;
            },
            // 隐藏load
            finish: function() {
                this.showLoading = false;
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
        },
    };
</script>

<style lang="less">
    @import "./style/style.less";
    @import "./style/normalize-style.less";
    @import "./style/normalize-weui.less";
</style>