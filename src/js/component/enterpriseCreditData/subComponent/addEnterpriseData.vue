<template>
    <div class="add-enterprise clearfix">
        <subnavList />
        <div class="container fr">
            <applyTitle :name="enterInfo.enterpriseName" :applicationNum="enterInfo.applicationNumber"/>
            <router-view>
            </router-view>
        </div>
    </div>
</template>

<script>
import subnavList from './subnavList.vue'
import applyTitle from './applyTitle.vue'
export default {
    data() {
        return {
            enterInfo: {}
        }
    },
    created() {
        this.getInfo()
    },
    methods: {
        getInfo() {
            let enterid = localStorage.getItem('id')
            this.$http.get(`user/findentername.action?id=${enterid}`).then(
                res => {
                    if(res.data.responseDesc == '查询成功'){
                        this.enterInfo = res.data.responseCode[0]
                        this.$store.store.commit('changeType',this.enterInfo.enterpriseType)
                    }else {
                        return
                    }
                }
            ).catch( err => {
                if(err) {
                    this.$message({
                        message: '网络错误',
                        type: 'error'
                    })
                }
            } )
        },
    },
    components: {
        subnavList,
        applyTitle
    }
}
</script>

<style lang="scss" scoped>
.add-enterprise {
    margin-left: -10px;
    margin-bottom: 50px;
    .container {
        width: 860px;
    }
}
</style>

