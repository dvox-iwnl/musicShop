import Vue from 'vue'
import router from './router'

import app from './src/components/app.vue'

import './node_modules/bootstrap/dist/css/bootstrap.css'
import './node_modules/bootstrap/dist/js/bootstrap.js'

var vm = new Vue({
    el:'#app',
    data:{},
    methods:{},
    render:function(createElement){
        return createElement(app)
    },
    router
})