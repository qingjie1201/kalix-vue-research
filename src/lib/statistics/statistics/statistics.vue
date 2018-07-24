<!--
描述：科研管理-查询统计组件
开发人：hqj
开发日期：2018年07月23日
-->

<template lang="pug">
    div 正在构建...
        | {{targetURL}}
</template>

<script type="text/ecmascript-6">
    import {StatisticsPieURL} from '../../config.toml'

    export default {
        name: 'kalix-research-statistics',
        data() {
            return {
                targetURL: StatisticsPieURL
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
