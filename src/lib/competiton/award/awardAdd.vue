<!--
描述：获奖信息-新增组件
开发人：fj
开发日期：2017年9月20日
-->
<template lang="pug">
    kalix-dialog.user-add(bizKey="award"
    ref="kalixBizDialog"
    v-bind:formModel.sync="formModel"
    v-bind:targetURL="targetURL")
        div.el-form(slot="dialogFormSlot")
            div.s-flex
                el-form-item.s-flex_item(label="展赛信息" prop="competitionId" v-bind:rules="rules.competitionId" v-bind:label-width="labelWidth")
                    kalix-object-select2(v-model="formModel.competitionId" v-bind:objectsUrl="competitionInfoURL" v-on:objectSelected="competitionSelected")
                el-form-item.s-flex_item(label="获奖人" prop="signupId" v-bind:rules="rules.signupId" v-bind:label-width="labelWidth")
                    kalix-object-select2(v-model="formModel.signupId" v-bind:objectsUrl="signupUrl" v-bind:jsonStr="selectParams" v-on:objectSelected="signupSelected")
            div.s-flex
                el-form-item.s-flex_item(label="获奖级别" prop="awardLevel" v-bind:label-width="labelWidth")
                    el-input(v-model="formModel.awardLevel")
                el-form-item.s-flex_item(label="备注" prop="remark" v-bind:label-width="labelWidth")
                    el-input(v-model="formModel.remark")
</template>

<script type="text/ecmascript-6">
    import FormModel from './model'
    import {AwardURL, CompetitionInfoURL, SignupURL} from '../../config.toml'

    export default {
        name: 'ResearchAwardAdd',
        data() {
            return {
                competitionInfo: null,
                signup: null,
                formModel: Object.assign({}, FormModel),
                rules: {
                    competitionId: [{type: 'number', required: true, message: '请选择参加展赛名称', trigger: 'change'}],
                    signupId: [{type: 'number', required: true, message: '请选择获奖人', trigger: 'change'}]
                },
                targetURL: AwardURL,
                competitionInfoURL: CompetitionInfoURL,
                signupUrl: '',
                selectParams: {},
                labelWidth: '140px'
            }
        },
        mounted() {
            setTimeout(() => {
                if (this.formModel.competitionId) {
                    this.signupUrl = SignupURL
                    this.selectParams = {competitionId: this.formModel.competitionId}
                }
            }, 20)
        },
        components: {},
        methods: {
            competitionSelected(competition) {
                this.clearSignup()
                if (competition && !this.$M_IsEmptyObject(competition)) {
                    this.signupUrl = SignupURL
                    this.selectParams = {competitionId: competition.id}
                } else {
                    this.signupUrl = ''
                }
            },
            signupSelected(signup) {
                if (signup && !this.$M_IsEmptyObject(signup)) {
                    this.formModel.awardName = signup.name
                } else {
                    this.formModel.awardName = ''
                }
            },
            clearSignup() {
                this.formModel.signupId = ''
                this.formModel.awardName = ''
            }
        }
    }
</script>

<style scoped lang="stylus">
    @import "~@/assets/stylus/color.styl"
    .dd
        width 50px

    .line
        height 1px
        background-color br_color3
        margin-bottom 20px
</style>
