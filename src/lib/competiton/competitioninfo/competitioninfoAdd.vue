<!--
描述：人员管理-学生维护-新增组件
开发人：fj
开发日期：2017年9月05日
-->

<template lang="pug">
    kalix-dialog.user-add(bizKey="competitionInfo" ref="kalixBizDialog" v-bind:formModel.sync="formModel" v-bind:targetURL="targetURL")
        div.el-form(slot="dialogFormSlot")
            div.s-flex
                el-form-item.s-flex_item(label="展赛名称" prop="name" v-bind:rules="rules.name" v-bind:label-width="labelWidth")
                    el-input(v-model="formModel.name")
                div.dd
                el-form-item.s-flex_item(label="展赛类别" prop="type" v-bind:label-width="labelWidth")
                    kalix-dict-select(v-model="formModel.type" appName="research" dictType="展赛类别")
            div.s-flex
                el-form-item.s-flex_item(label="展赛地址" prop="address" v-bind:label-width="labelWidth")
                    el-input(v-model="formModel.address")
                div.dd
                el-form-item.s-flex_item(label="联系人员" prop="contactor" v-bind:label-width="labelWidth")
                    el-input(v-model="formModel.contactor")
            div.s-flex
                el-form-item.s-flex_item(label="联系电话" prop="phone" v-bind:label-width="labelWidth")
                    el-input(v-model="formModel.phone")
                div.dd
                el-form-item.s-flex_item(label="联系邮箱" prop="email" v-bind:label-width="labelWidth")
                    el-input(v-model="formModel.email")
            div.s-flex
                el-form-item.s-flex_item(label="征集开始时间" prop="collectionStartTime" v-bind:label-width="labelWidth")
                    kalix-date-picker(v-model="formModel.collectionStartTime")
                div.dd
                el-form-item.s-flex_item(label="征集结束时间" prop="collectionEndTime" v-bind:label-width="labelWidth")
                    kalix-date-picker(v-model="formModel.collectionEndTime")
            div.s-flex
                el-form-item.s-flex_item(label="初评开始时间" prop="preEvalStartTime" v-bind:label-width="labelWidth")
                    kalix-date-picker(v-model="formModel.preEvalStartTime")
                div.dd
                el-form-item.s-flex_item(label="初评结束时间" prop="preEvalEndTime" v-bind:label-width="labelWidth")
                    kalix-date-picker(v-model="formModel.preEvalEndTime")
            div.s-flex
                el-form-item.s-flex_item(label="终评开始时间" prop="lastEvalStartTime" v-bind:label-width="labelWidth")
                    kalix-date-picker(v-model="formModel.lastEvalStartTime")
                div.dd
                el-form-item.s-flex_item(label="终评结束时间" prop="lastEvalEndTime" v-bind:label-width="labelWidth")
                    kalix-date-picker(v-model="formModel.lastEvalEndTime")
            div.s-flex
                el-form-item.s-flex_item(label="展览开始时间" prop="compStartTime" v-bind:label-width="labelWidth")
                    kalix-date-picker(v-model="formModel.compStartTime")
                div.dd
                el-form-item.s-flex_item(label="展览结束时间" prop="compEndTime" v-bind:label-width="labelWidth")
                    kalix-date-picker(v-model="formModel.compEndTime")
            div.s-flex
                el-form-item.s-flex_item(label="作品内容要求" prop="contentNeed" v-bind:label-width="labelWidth")
                    el-input(type="textarea" v-model="formModel.contentNeed")
                div.dd
                el-form-item.s-flex_item(label="作品技术要求" prop="technologyNeed" v-bind:label-width="labelWidth")
                    el-input(type="textarea" v-model="formModel.technologyNeed")
            div.s-flex
                el-form-item.s-flex_item(label="展赛详细信息" prop="detail" v-bind:label-width="labelWidth")
                    el-input(type="textarea" v-model="formModel.detail")
                div.dd
                el-form-item.s-flex_item(label="展赛备注说明" prop="remark" v-bind:label-width="labelWidth")
                    el-input(type="textarea" v-model="formModel.remark")
            div.s-flex
                el-form-item.s-flex_item(label="报名表样式" prop="signupStyle" v-bind:label-width="labelWidth")
                    kalix-upload(v-model="formModel.signupStyle" v-bind:isImage="false" style="width:100%")
</template>

<script type="text/ecmascript-6">
    import FormModel from './model'
    import {CompetitionInfoURL} from '../../config.toml'

    export default {
        name: 'ResearchCompetitionInfoAdd',
        data() {
            return {
                formModel: Object.assign({}, FormModel),
                rules: {
                    name: [{required: true, message: '请输入展赛名称', trigger: 'blur'}]
                },
                targetURL: CompetitionInfoURL,
                labelWidth: '120px'
            }
        },
        components: {},
        created() {
        },
        watch: {},
        methods: {}
    }
</script>

<style scoped lang="stylus">
    .dd
        width 50px
</style>
