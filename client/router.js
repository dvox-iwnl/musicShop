import Vue from 'vue'
import VueRouter from 'vue-router'

import index from './src/components/index.vue'
import guitars from './src/components/guitars.vue'
import basses from './src/components/basses.vue'
import audio from './src/components/audio.vue'
import acoustics from './src/components/acoustics.vue'
import parts from './src/components/parts.vue'
import amps from './src/components/amps.vue'
import accessories from './src/components/accessories.vue'
import lifestyle from './src/components/lifestyle.vue'
import login from './src/components/login.vue'
import register from './src/components/register.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes:[
        {path:'/',redirect:'/index'},
        {path:'/index',component:index},
        {path:'/guitars',component:guitars},
        {path:'/basses',component:basses},
        {path:'/audio',component:audio},
        {path:'/acoustics',component:acoustics},
        {path:'/parts',component:parts},
        {path:'/amps',component:amps},
        {path:'/accessories',component:accessories},
        {path:'/lifestyle',component:lifestyle},
        {path:'/login',component:login},
        {path:'/register',component:register},
    ]
})

export default router