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
                {{index + 1}}.{{question.caption}}<span class="ro-required-tag" v-if="question.meta && question.meta.isRequired"></span>
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
    // import Vue from 'vue';
    import MobileButton from '@forzoom/mobile-button';
    import ROChoice from './choice.js';
    import ROMultipleChoice from './multipleChoice.js';
    import ROAddressLocation from './addressLocation.vue';
    import ROAddressPicker from './addressPicker.vue';
    import ROTextarea from './textarea.vue';
    import ROUploader from './uploader.vue';
    import RODatePicker from './datePicker.vue';
    import ROSelect from './select.vue';
    import ROInput from './input.vue';
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
            MobileButton,
        },
        props: {
            // banner链接
            banner: {
                type: String,
            },
            // 问卷数据
            questions: {
                type: Array,
                default: function() {
                    return [];
                },
            },
            // 是否禁止提交
            disableSubmit: {
                type: Boolean,
                default: false,
            },
            // 禁止提交时显示文本
            disableHint: {
                type: String,
                default: '',
            },
            // 允许提交文本
            allowHint: {
                type: String,
                default: '提交',
            },
            // 提醒填写文本
            fillHint: {
                type: String,
                default: '未填写完整',
            },
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
            isComplete: function() {
                console.log('in isComplete', this.warnCount);
                if (this.warnCount > 0) {
                    return false;
                }
                let result = true;
                for (let i = 0, len = this.questions.length; i < len; i++) {
                    const question = this.questions[i];
                    const meta = question.meta || {};
                    const qResult = question.result;
                    if (meta.isRequired && (qResult === '' || qResult === null || (Object.prototype.toString.call(qResult) === '[object Array]' && qResult.length === 0))) {
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
        },
        watch: {
            watchCount: function(val) {
                this.isComplete;
            },
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
                    const data = {};
                    this.questions.forEach(function(question) {
                        data[question.id] = question.result;
                    });
                    this.$emit('submit', data);
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