import { createApp } from 'vue'
import App from './App.vue'

import {shoeApiInstance} from './api/api.js'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
})

createApp(App)
    .use(shoeApiInstance)
    .use(vuetify)
    .mount('#app')
