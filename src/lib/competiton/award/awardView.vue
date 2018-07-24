<!--
描述：报名信息组件
开发人：fj
开发日期：2017年9月13日
-->
<template lang="pug">
    kalix-dialog.user-add(bizKey="award" ref="kalixBizDialog" v-bind:form-model.sync="formModel" isView)
        div.el-form(slot="dialogFormSlot")
            div.s-flex
                el-form-item.s-flex_item(label="展赛信息" prop="competitionName" v-bind:label-width="labelWidth")
                    el-input(v-model="formModel.competitionName" readonly)
                el-form-item.s-flex_item(label="获奖人" prop="awardName" v-bind:label-width="labelWidth")
                    el-input(v-model="formModel.awardName" readonly)
            div.s-flex
                el-form-item.s-flex_item(label="获奖级别" prop="awardLevel" v-bind:label-width="labelWidth")
                    el-input(v-model="formModel.awardLevel" readonly)
                el-form-item.s-flex_item(label="备注" prop="remark" v-bind:label-width="labelWidth")
                    el-input(v-model="formModel.remark" readonly)
</template>

<script type="text/ecmascript-6">
    import FormModel from './model'

    export default {
        name: 'ResearchAwardView',
        data() {
            return {
                formModel: Object.assign({}, FormModel),
                labelWidth: '140px'
            }
        },
        created() {
        },
        components: {},
        methods: {}
    }
</script>
