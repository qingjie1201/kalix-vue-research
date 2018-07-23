import Signup from './signup.vue'
import signupAdd from './signupAdd.vue'
import signupSearch from './signupSearch.vue'
import signupView from './signupView.vue'

const components = [
    Signup,
    signupAdd,
    signupSearch,
    signupView
]

const main = {
    install(Vue) {
        components.map((component) => {
            Vue.component(component.name, component)
        })
    }
}

export default main