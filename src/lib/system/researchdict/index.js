import ResearchDict from './researchdict.vue'

const components = [
    ResearchDict
]

const main = {
    install(Vue) {
        components.map((component) => {
            Vue.component(component.name, component)
        })
    }
}

export default main