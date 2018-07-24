<!--
描述：展赛详细信息组件
开发人：fj
开发日期：2017年9月05日
-->
<template lang="pug">
    kalix-dialog.user-add(bizKey="competitionInfo" ref="kalixBizDialog" v-bind:formModel.sync="formModel" isView)
        div.el-form(slot="dialogFormSlot")
            div.s-flex
                el-form-item.s-flex_item(label="展赛名称" prop="name" v-bind:label-width="labelWidth")
                    el-input(v-model="formModel.name" readonly)
                div.dd
                el-form-item.s-flex_item(label="展赛类别" prop="type" v-bind:label-width="labelWidth")
                    kalix-dict-select(v-model="formModel.type" appName="research" dictType="展赛类别" disabled)
            div.s-flex
                el-form-item.s-flex_item(label="展赛地址" prop="address" v-bind:label-width="labelWidth")
                    el-input(v-model="formModel.address" readonly)
                div.dd
                el-form-item.s-flex_item(label="联系人员" prop="contactor" v-bind:label-width="labelWidth")
                    el-input(v-model="formModel.contactor" readonly)
            div.s-flex
                el-form-item.s-flex_item(label="联系电话" prop="phone" v-bind:label-width="labelWidth")
                    el-input(v-model="formModel.phone" readonly)
                div.dd
                el-form-item.s-flex_item(label="联系邮箱" prop="email" v-bind:label-width="labelWidth")
                    el-input(v-model="formModel.email" readonly)
            div.s-flex
                el-form-item.s-flex_item(label="征集开始时间" prop="collectionStartTime" v-bind:label-width="labelWidth")
                    kalix-date-picker(v-model="formModel.collectionStartTime" readonly)
                div.dd
                el-form-item.s-flex_item(label="征集结束时间" prop="collectionEndTime" v-bind:label-width="labelWidth")
                    kalix-date-picker(v-model="formModel.collectionEndTime" readonly)
            div.s-flex
                el-form-item.s-flex_item(label="初评开始时间" prop="preEvalStartTime" v-bind:label-width="labelWidth")
                    kalix-date-picker(v-model="formModel.preEvalStartTime" readonly)
                div.dd
                el-form-item.s-flex_item(label="初评结束时间" prop="preEvalEndTime" v-bind:label-width="labelWidth")
                    kalix-date-picker(v-model="formModel.preEvalEndTime" readonly)
            div.s-flex
                el-form-item.s-flex_item(label="终评开始时间" prop="lastEvalStartTime" v-bind:label-width="labelWidth")
                    kalix-date-picker(v-model="formModel.lastEvalStartTime" readonly)
                div.dd
                el-form-item.s-flex_item(label="终评结束时间" prop="lastEvalEndTime" v-bind:label-width="labelWidth")
                    kalix-date-picker(v-model="formModel.lastEvalEndTime" readonly)
            div.s-flex
                el-form-item.s-flex_item(label="展览开始时间" prop="compStartTime" v-bind:label-width="labelWidth")
                    kalix-date-picker(v-model="formModel.compStartTime" readonly)
                div.dd
                el-form-item.s-flex_item(label="展览结束时间" prop="compEndTime" v-bind:label-width="labelWidth")
                    kalix-date-picker(v-model="formModel.compEndTime" readonly)
            div.s-flex
                el-form-item.s-flex_item(label="作品内容要求" prop="contentNeed" v-bind:label-width="labelWidth")
                    el-input(type="textarea" v-model="formModel.contentNeed" readonly)
                div.dd
                el-form-item.s-flex_item(label="作品技术要求" prop="technologyNeed" v-bind:label-width="labelWidth")
                    el-input(type="textarea" v-model="formModel.technologyNeed" readonly)
            div.s-flex
                el-form-item.s-flex_item(label="展赛详细信息" prop="detail" v-bind:label-width="labelWidth")
                    el-input(type="textarea" v-model="formModel.detail" readonly)
                div.dd
                el-form-item.s-flex_item(label="展赛备注说明" prop="remark" v-bind:label-width="labelWidth")
                    el-input(type="textarea" v-model="formModel.remark" readonly)
            div.s-flex
                el-form-item.s-flex_item(label="报名表样式" prop="signupStyle" v-bind:label-width="labelWidth")
                    kalix-upload(v-model="formModel.signupStyle" v-bind:isImage="false" readonly style="width:100%")
</template>

<script type="text/ecmascript-6">
    import FormModel from './model'

    export default {
        name: 'ResearchCompetitionInfoView',
        data() {
            return {
                formModel: Object.assign({}, FormModel),
                labelWidth: '120px'
            }
        },
        components: {}
    }
</script>
