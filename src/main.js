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

import {createRouter, createWebHashHistory} from 'vue-router'
import {routes} from "./routes.js";

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

createApp(App)
    .use(shoeApiInstance)
    .use(vuetify)
    .use(router)
    .mount('#app')
