<!--
描述：展赛信息管理组件
开发人：fj
开发日期：2017年9月05日
-->
<template lang="pug">
    keep-alive
        kalix-table(bizKey="competitionInfo" title='展赛列表' v-bind:tableFields="tableFields" v-bind:targetURL="targetURL"
        v-bind:bizDialog="bizDialog" v-bind:bizSearch="'ResearchCompetitionInfoSearch'" v-bind:btnList="btnList"
        v-bind:dictDefine="dictDefine" v-bind:isFixedColumn="isFixedColumn")
</template>

<script type="text/ecmascript-6">
    import {ResearchCacheKey, CompetitionInfoURL, ToolButtonList} from '../../config.toml'

    export default {
        name: 'kalix-research-competitioninfo',
        data() {
            return {
                dictDefine: [{ // 定义数据字典的显示
                    cacheKey: ResearchCacheKey,
                    type: '展赛类别',
                    targetField: 'typeName',
                    sourceField: 'type'
                }],
                btnList: ToolButtonList,
                targetURL: CompetitionInfoURL,
                tableFields: [
                    {prop: 'name', label: '展赛名称'},
                    {prop: 'typeName', label: '展赛类别'},
                    {prop: 'address', label: '展赛地址'},
                    {prop: 'collectionStartTime', label: '作品征集开始时间'},
                    {prop: 'collectionEndTime', label: '作品征集结束时间'},
                    {prop: 'contactor', label: '联系人'},
                    {prop: 'phone', label: '联系人电话'},
                    {prop: 'email', label: '联系人邮箱'}
                ],
                bizDialog: [
                    {id: 'view', dialog: 'ResearchCompetitionInfoView'},
                    {id: 'edit', dialog: 'ResearchCompetitionInfoAdd'},
                    {id: 'add', dialog: 'ResearchCompetitionInfoAdd'}
                ],
                isFixedColumn: true
            }
        },
        components: {
        },
        created() {
        },
        mounted() {
        },
        activated() {
        },
        deactivated() {
        },
        methods: {}
    }
</script>

<style scoped lang="stylus">
</style>
