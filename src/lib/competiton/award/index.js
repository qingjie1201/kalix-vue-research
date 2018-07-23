import Award from './award.vue'
import awardAdd from './awardAdd.vue'
import awardSearch from './awardSearch.vue'
import awardView from './awardView.vue'

const components = [
    Award,
    awardAdd,
    awardSearch,
    awardView
]

const main = {
    install(Vue) {
        components.map((component) => {
            Vue.component(component.name, component)
        })
    }
}

export default main