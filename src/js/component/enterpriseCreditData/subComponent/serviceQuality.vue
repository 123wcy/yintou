<template>
    <div class="enterprise-apply">
        <div class="data-container">
            <h4 class="title">服务质量</h4>
            <form class="form">
                <div v-if=" enterType == 'WholesaleAndRetailTrade' ">
                    <div class="input-container">
                        <label for="productCertification" style="width:270px;height:50px">主要代理产品是否需要进行强制认证？:</label>
                        <select v-model="servicequality.productCertification">
                            <option value="true">是</option>
                            <option value="false">否</option>
                        </select>
                    </div>

                    <div class="input-container">
                        <label for="iscertification" style="width:270px;height:50px">需要进行国家强制认证,是否通过验证？:</label>
                        <select v-model="servicequality.iscertification">
                            <option value="true">是</option>
                            <option value="false">否</option>
                        </select>
                    </div>

                    <div class="input-container">
                        <label for="qualityLicence" style="width:270px;height:50px">是否要求供应商提供主要代理产品的相关生产许可证？:</label>
                        <select v-model="servicequality.qualityLicence">
                            <option value="true">是</option>
                            <option value="false">否</option>
                        </select>
                    </div>

                    <div class="input-container">
                        <label for="qualityLicence" style="width:270px;height:50px">是否与厂商签订了涉及优惠政策、售后支持、供货保障等方面的协议？:</label>
                        <select v-model="servicequality.qualityLicence">
                            <option value="true">是</option>
                            <option value="false">否</option>
                        </select>
                    </div>
                    <div class="input-container">
                        <label for="productSm" style="width:270px;height:50px">主要代理产品通过国家强制性认证情况和主要代理产品的代理商级别以及厂商对其支持情况描述:</label>
                        <textarea name="productSm" id="productSm" cols="30" rows="10" v-model="servicequality.productSm"></textarea>
                        <span style="margin-left: 283px">不得超过2000个汉字!</span>
                    </div>
                </div>

                <div v-if="enterType == 'MaterialEquipmentManufacturing'">
                    <div class="input-container">
                        <label for="productSm" style="width:270px;height:50px">服务质量情况（涉及研发、制造、销售、安装、改造及维护保养服务等）描述:</label>
                        <textarea name="productSm" id="productSm" cols="30" rows="10" v-model="servicequality.productSm"></textarea>
                        <span style="margin-left: 283px">不得超过2000个汉字!</span>
                    </div>
                </div>
                
            </form>
            <el-button type="primary" id="submit" @click="updateServicequality" v-if="hasData">提交</el-button>
            <el-button type="primary" id="submit" @click="insertServicequality" v-if="!hasData">提交</el-button>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            servicequality: {},
            hasData: false
        }
    },
    computed: {
        enterType() {
            return this.$store.store.state.enterType 
        }
    },
    created() {
        this.getServicequality()
    },
    methods: {
        // 获取信息
        getServicequality() {
            let enterid = localStorage.getItem('id')
            this.$http.get(`servicequality/find.action?user_id=${enterid}`).then(
                res => {
                    console.log(res.data)
                    if(res.data.responseDesc == '查询成功' && res.data.responseCode.length != 0){
                        this.servicequality = res.data.responseCode[0]
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
        updateServicequality() {
            let formData = JSON.stringify(this.servicequality)
            this.$http({
                url: 'servicequality/update.action',
                method: 'post',
                data: formData,

            }).then( res => {
                if( res.data.responseDesc == '修改成功' ) {
                    this.$message({
                        message: '更新成功',
                        type: 'success'
                    })
                }
                this.getServicequality()
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
        insertServicequality() {
            this.servicequality.userId = localStorage.getItem('id')
            let formData = JSON.stringify(this.servicequality)
            this.$http({
                url: 'servicequality/insert.action',
                method: 'post',
                data: formData
            }).then( res => {
                if( res.data.responseCode == 1 ) {
                    // 弹出消息框
                    this.$message( {
                        message: '添加成功',
                        type: 'success'
                    } )
                    this.getServicequality()  // 重新获取数据
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



