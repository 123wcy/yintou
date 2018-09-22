import Vue from "vue"
import App from "./App.vue"
import router from "./router"
// url格式化
import querystring from 'querystring'
Vue.prototype.$qs = querystring

//导入ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import { Input, Button, Message } from 'element-ui'
Vue.component(Input.name, Input)
Vue.component(Button.name, Button)
Vue.component(Message.name, Message)
Vue.prototype.$message = Message

//注册axios
import Axios from 'axios'
//配置默认设置
Axios.defaults.baseURL = 'http://localhost:8080/YinTouXY/'
// Axios.defaults.withCredentials = true //携带cookie
Axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8'
Vue.prototype.$http = Axios

//字体图标样式
import './css/iconfont.css' 
//reset
import './css/reset.scss'

//导入全局方法
import {updateInfo} from './utils.js'
Vue.prototype.updateInfo = updateInfo

// 导入vuex
import store from './store/index.js'


//添加全局过滤器
Vue.filter('dateformat',function (timestamp) {
    var date = new Date(timestamp);
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
        return Y+M+D;
})
Vue.filter('typeformat',function( entertype ) {
    if( entertype == 'MaterialEquipmentManufacturing' ) {
        return '材料设备类'
    } else if ( entertype == 'WholesaleAndRetailTrade') {
        return '批发零售（贸易）类'
    } else if ( entertype == 'Construction' ) {
        return '施工类'
    } else if ( entertype == 'Services' ) {
        return '零售类'
    }
})
Vue.config.productionTip = false

new Vue({
    el: "#app",
    router,
    store,
    components: { App },
    template: "<App/>",
})
