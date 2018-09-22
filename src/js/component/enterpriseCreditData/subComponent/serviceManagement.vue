<template>
    <div class="enterprise-apply">
        <div class="data-container">
            <h4 class="title">服务管理</h4>
            <form class="form">
                <div v-if="enterType == 'WholesaleAndRetailTrade'">
                    <div class="input-container">
                        <label for="starRating" style="width:270px;height:50px">是否参与了《商品售后服务评价体系》国家标准（GB/T27922－2011）星级认证？:</label>
                        <select v-model="manageserviceInfo.starRating">
                            <option value="true">是</option>
                            <option value="false">否</option>
                        </select>
                    </div>

                    <div class="input-container">
                        <label for="aftersaleService" style="width:270px;height:50px">是否有专门从事售后服务工作的部门:</label>
                        <select v-model="manageserviceInfo.aftersaleService">
                            <option value="true">是</option>
                            <option value="false">否</option>
                        </select>
                    </div>

                    <div class="input-container">
                        <label for="aftersalePeople" style="width:270px;height:50px">是否配置了符合岗位要求并有相应资质水平的售后服务技术人员和业务人员:</label>
                        <select v-model="manageserviceInfo.aftersalePeople">
                            <option value="true">是</option>
                            <option value="false">否</option>
                        </select>
                    </div>

                    <div class="input-container">
                        <label for="aftersaleAddress" style="width:270px;height:50px">是否在南京设有固定的售后服务场所:</label>
                        <select v-model="manageserviceInfo.aftersaleAddress">
                            <option value="true">是</option>
                            <option value="false">否</option>
                        </select>
                    </div>

                    <div class="input-container">
                        <label for="aftersaleElectronic" style="width:270px;height:50px">是否实现了售后服务电子化管理:</label>
                        <select v-model="manageserviceInfo.aftersaleElectronic">
                            <option value="true">是</option>
                            <option value="false">否</option>
                        </select>
                    </div>

                    <div class="input-container">
                        <label for="aftersaleRecord" style="width:270px;height:50px">是否建有售后服务档案记录:</label>
                        <select v-model="manageserviceInfo.aftersaleRecord">
                            <option value="true">是</option>
                            <option value="false">否</option>
                        </select>
                    </div>
                </div>

                <div v-if="enterType == 'MaterialEquipmentManufacturing'">
                    <div class="input-container">
                        <label for="aftersaleLevel" style="width:270px;height:50px">售后管理及服务水平:</label>
                        <select v-model="manageserviceInfo.aftersaleLevel">
                            <option value="GOOD">售后水平质量好</option>
                            <option value="PREFER">售后水平质量较好</option>
                            <option value="NORMAL">售后水平质量一般</option>
                            <option value="WEAK">售后水平质量较差</option>
                        </select>
                    </div>
                </div>

                <div class="input-container">
                    <label for="serviceQuality" style="width:270px;height:50px">服务质量:</label>
                    <textarea name="serviceQuality" id="serviceQuality" cols="30" rows="10" v-model="manageserviceInfo.serviceQuality"></textarea>
                </div>

                <div class="input-container">
                    <label for="briefIntroduction" style="width:270px;height:50px">主要产品销售区域内售后服务能力及水平情况:</label>
                    <textarea name="briefIntroduction" id="briefIntroduction" cols="30" rows="10" v-model="manageserviceInfo.briefIntroduction"></textarea>
                    <span style="margin-left:283px;">不得超过2000个汉字!</span>
                </div>
            </form>
            <el-button type="primary" id="submit" @click="updateManageserviceInfo" v-if="hasData">提交</el-button>
            <el-button type="primary" id="submit" @click="insertManageserviceInfo" v-if="!hasData">提交</el-button>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            manageserviceInfo: {},
            hasData: false
        }
    },
    computed: {
        enterType() {
            return this.$store.store.state.enterType 
        }
    },
    created() {
        this.getManageserviceInfo()
    },
    methods: {
        // 获取信息
        getManageserviceInfo() {
            let enterid = localStorage.getItem('id')
            this.$http.get(`manageservice/find.action?user_id=${enterid}`).then(
                res => {
                    console.log(res.data)
                    if(res.data.responseDesc == '查询成功' && res.data.responseCode.length != 0){
                        this.manageserviceInfo = res.data.responseCode[0]
                        this.hasData = true
                    }else if(res.data.responseDesc == '查询成功' && res.data.responseCode.length == 0){
                        this.hasData = false
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
        // 更新信息
        updateManageserviceInfo() {
            let formData = JSON.stringify(this.manageserviceInfo)
            this.$http({
                url: 'manageservice/update.action',
                method: 'post',
                data: formData,

            }).then( res => {
                if( res.data.responseDesc == '修改成功' ) {
                    this.$message({
                        message: '更新成功',
                        type: 'success'
                    })
                }
                this.getManageserviceInfo()
            }).catch( err => {
                if(err) {
                    this.$message({
                        message: '网络错误',
                        type: 'error'
                    })
                }
            })
        },
        //新增
        insertManageserviceInfo() {
            this.manageserviceInfo.userId = localStorage.getItem('id')
            let formData = JSON.stringify(this.manageserviceInfo)
            this.$http({
                url: 'manageservice/insert.action',
                method: 'post',
                data: formData
            }).then( res => {
                if( res.data.responseCode == 1 ) {
                    // 弹出消息框
                    this.$message( {
                        message: '添加成功',
                        type: 'success'
                    } )
                    this.getManageserviceInfo()  // 重新获取数据
                }
            } ).catch( err => {
                this.$message( {
                    message: '添加失败',
                    type: 'error'
                } )
            } )
        },
    },
    
}
</script>

<style lang="scss" scoped>
@import "../../../../css/form.scss";
#submit {
    display: block;
    margin: 10px auto;
}
textarea {
    padding: 5px 10px;
    font-family: "Microsoft Yahei";
    color: #666;
}
</style>



