// 展赛管理
import CompetitionInfo from './competiton/competitioninfo'
import Signup from './competiton/signup'
import Award from './competiton/award'

// 查询统计
import Statistics from './statistics/statistics'

// 系统管理
import ResearchDict from './system/researchdict'

const components = {
    install(Vue) {
        CompetitionInfo.install(Vue)
        Signup.install(Vue)
        Award.install(Vue)

        Statistics.install(Vue)

        ResearchDict.install(Vue)
    }
}

export default components