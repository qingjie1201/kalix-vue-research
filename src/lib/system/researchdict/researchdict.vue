<!--
描述：科研管理-数据字典组件
开发人：sunlf
开发日期：2017年8月17日
-->

<template lang="pug">
    keep-alive
        kalix-base-dict(ref="baseTableRef" v-bind:bizKey="bizKey" v-bind:bizDialog="bizDialog"
        v-bind:targetURL="targetURL" v-bind:dialogOptions="dialogOptions")
</template>

<script type="text/ecmascript-6">
    import {ResearchDictsTypesListURL, ResearchDictsURL} from '../../config.toml'

    export default {
        name: 'kalix-research-researchdict',
        data() {
            return {
                dialogOptions: {
                    targetURL: ResearchDictsURL,
                    dictTypesListURL: ResearchDictsTypesListURL,
                    bizKey: 'dict'
                },
                bizKey: 'dict',
                targetURL: ResearchDictsURL,
                bizDialog: [
                    {id: 'view', dialog: 'basedictView'},
                    {id: 'edit', dialog: 'basedictAdd'},
                    {id: 'add', dialog: 'basedictAdd'}
                ]
            }
        },
        components: {},
        created() {
        },
        methods: {}
    }
</script>

<style scoped lang="stylus">
</style>
