import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './index.css'

const app = createApp(App)

app.directive('appear', {
    beforeMount(el) {
        el.classList.add('before-enter')
    },
    mounted(el) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    el.classList.add('enter')
                }
            })
        }, { threshold: 0.15 })
        observer.observe(el)
    }
})

app.use(createPinia())
app.use(router)

app.mount('#app')