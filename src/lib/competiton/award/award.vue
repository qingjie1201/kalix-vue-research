<!--
描述：获奖信息管理组件
开发人：fj
开发日期：2017年9月20日
-->
<template lang="pug">
    keep-alive
        kalix-table(bizKey="award" title='获奖信息列表'
        v-bind:tableFields="tableFields"
        v-bind:targetURL="targetURL"
        v-bind:buttonPermissionPrefix="buttonPermissionPrefix"
        v-bind:bizDialog="bizDialog"
        v-bind:bizSearch="'ResearchAwardSearch'"
        v-bind:btnList="btnList"
        v-bind:dictDefine="dictDefine"
        v-bind:isFixedColumn="isFixedColumn")
</template>

<script type="text/ecmascript-6">
    import {awardBtnPermissionPrefix, AwardURL, ResearchCacheKey, ToolButtonList} from '../../config.toml'
    /*import Cache from 'common/cache'*/

    export default {
        name: 'kalix-research-award',
        data() {
            return {
                dictDefine: [{ // 定义数据字典的显示
                    cacheKey: ResearchCacheKey,
                    type: '展赛类别',
                    targetField: 'competitionTypeName',
                    sourceField: 'competitionType'
                }],
                btnList: ToolButtonList,
                targetURL: AwardURL,
                buttonPermissionPrefix: awardBtnPermissionPrefix,
                tableFields: [
                    {prop: 'competitionName', label: '展赛名称', width: '350px'},
                    {prop: 'competitionTypeName', label: '展赛类别', width: '350px'},
                    {prop: 'awardName', label: '获奖人', width: '350px'},
                    {prop: 'awardLevel', label: '获奖级别', width: '350px'}
                ],
                bizDialog: [
                    {id: 'view', dialog: 'ResearchAwardView'},
                    {id: 'edit', dialog: 'ResearchAwardAdd'},
                    {id: 'add', dialog: 'ResearchAwardAdd'}
                ],
                isFixedColumn: true
            }
        },
        created() {
        },
        methods: {
            /*customRender(_data) {
                _data.forEach(function (e) {
                    let data = JSON.parse(Cache.get('RESEARCH-DICT-KEY'))
                    let item = data.filter(item => {
                        return item.type === '展赛类别' && item.value === e.competitionType * 1
                    })
                    if (item.length > 0) {
                        e.competitionName = item[0].label
                    }
                })
            }*/
        },
        components: {},
        mounted() {
        }
    }
</script>

<style scoped lang="stylus">
</style>
