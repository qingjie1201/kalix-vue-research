import Statistics from './statistics.vue'

const components = [
    Statistics
]

const main = {
    install(Vue) {
        components.map((component) => {
            Vue.component(component.name, component)
        })
    }
}

export default main