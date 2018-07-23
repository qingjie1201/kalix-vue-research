import Competitioninfo from './competitioninfo.vue'
import competitioninfoAdd from './competitioninfoAdd.vue'
import competitioninfoSearch from './competitioninfoSearch.vue'
import competitioninfoView from './competitioninfoView.vue'

const components = [
    Competitioninfo,
    competitioninfoAdd,
    competitioninfoSearch,
    competitioninfoView
]

const main = {
    install(Vue) {
        components.map((component) => {
            Vue.component(component.name, component)
        })
    }
}

export default main