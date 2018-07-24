<!--
描述：报名信息管理组件
开发人：fj
开发日期：2017年9月13日
-->
<template lang="pug">
    keep-alive
        kalix-table(bizKey="signup" title='报名信息列表' v-bind:tableFields="tableFields" v-bind:targetURL="targetURL"
        v-bind:bizDialog="bizDialog" v-bind:bizSearch="'ResearchSignupSearch'" v-bind:btnList="btnList"
        v-bind:dictDefine="dictDefine" v-bind:isFixedColumn="isFixedColumn")
</template>

<script type="text/ecmascript-6">
    import {ResearchCacheKey, SignupURL, ToolButtonList} from '../../config.toml'

    export default {
        name: 'kalix-research-signup',
        data() {
            return {
                dictDefine: [{ // 定义数据字典的显示
                    cacheKey: ResearchCacheKey,
                    type: '性别',
                    targetField: 'sexName',
                    sourceField: 'sex'
                }],
                btnList: ToolButtonList,
                targetURL: SignupURL,
                tableFields: [
                    {prop: 'competitionName', label: '展赛名称'},
                    {prop: 'name', label: '姓名'},
                    {prop: 'sexName', label: '性别'},
                    {prop: 'penName', label: '笔名'},
                    {prop: 'worksCnName', label: '作品中文名称'},
                    {prop: 'worksEnName', label: '作品英文名称'},
                    {prop: 'tutor', label: '指导教师'},
                    {prop: 'teamCnName', label: '团队中文名称'},
                    {prop: 'teamEnName', label: '团队英文名称'},
                    {prop: 'mobilePhone', label: '移动电话'},
                    {prop: 'postalAddress', label: '通讯地址'}
                ],
                bizDialog: [
                    {id: 'view', dialog: 'ResearchSignupView'},
                    {id: 'edit', dialog: 'ResearchSignupAdd'},
                    {id: 'add', dialog: 'ResearchSignupAdd'}
                ],
                isFixedColumn: true
            }
        },
        components: {}
    }
</script>

<style scoped lang="stylus">
</style>
