<!--
描述：展赛管理
开发人：fj
开发日期：2017年9月06日
-->

<template lang="pug">
    kalix-search(title="获奖信息查询" v-bind:searchFields="searchFields")
</template>

<script type="text/ecmascript-6">

    export default {
        name: 'ResearchAwardSearch',
        data() {
            return {
                searchFields: [
                    {label: '获奖人', prop: 'awardName'}
                ]
            }
        },
        created() {
        },
        components: {},
        methods: {}
    }
</script>

<style scoped lang="stylus" type="text/stylus">
</style>
