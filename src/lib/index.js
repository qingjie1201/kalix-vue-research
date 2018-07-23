// 展赛管理
// 查询统计
// 系统管理
import ResearchDict from './system/researchdict'

const components = {
    install(Vue) {
        /*User.install(Vue)
        Role.install(Vue)
        WorkGroup.install(Vue)
        DataAuth.install(Vue)

        Org.install(Vue)
        OrgChart.install(Vue)
        OrgUser.install(Vue)
        Duty.install(Vue)*/

        ResearchDict.install(Vue)
    }
}

export default components