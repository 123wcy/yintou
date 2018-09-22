<template>
    <div class="enterprise-apply">
        <div class="data-container">
            <h4 class="title">营销网络</h4>
            <form class="form">

                <div v-if="enterType == 'WholesaleAndRetailTrade'">
                        <div class="input-container">
                        <label for="dotNumber" style="width:200px;height:50px">营销网点数量:</label>
                        <input type="text" name="dotNumber" id="dotNumber" v-model="marketNetworkInfo.dotNumber"> 
                    </div>

                    <div class="input-container">
                        <label for="dotWay" style="width:200px;height:50px">是否有对营销网点的具体管理办法:</label>
                        <select v-model="marketNetworkInfo.dotWay">
                            <option value="true">是</option>
                            <option value="false">否</option>
                        </select>
                    </div>

                    <div class="input-container">
                        <label for="dotSale" style="width:200px;height:50px">是否可以提供上一年度各营销网点的“月度销售汇总表”:</label>
                        <select v-model="marketNetworkInfo.dotSale">
                            <option value="true">是</option>
                            <option value="false">否</option>
                        </select>
                    </div>

                    <div class="input-container">
                        <label for="dotNanjin" style="width:200px;height:50px">南京地区是否有营销网络点:</label>
                        <select v-model="marketNetworkInfo.dotNanjin">
                            <option value="true">是</option>
                            <option value="false">否</option>
                        </select>
                    </div> 
                </div> 

                <div v-if="enterType == 'MaterialEquipmentManufacturing'">
                    <div class="input-container">
                        <label for="dotPartnership" style="width:200px;height:50px">合作关系与成本控制水平:</label>
                        <select v-model="marketNetworkInfo.dotPartnership">
                            <option value="GOOD">与上下游建立了良好的合作关系与完善的营销网络，议价能力强</option>
                            <option value="PREFER">与上下游建立了稳定的合作关系，原材料及能源价格对企业生产的影响较小，成本控制能力较强</option>
                            <option value="NORMAL">与上下游建立了必要的合作，原材料及能源价格对企业生产的影响一般</option>
                            <option value="WEAK">营销水平与成本控制能力较差</option>
                        </select>
                    </div>
                </div> 

                <div class="input-container" style="margin-top:20px;">
                    <label for="dotDescribe" style="width:200px;height:50px;">营销网络以及管理水平情况描述:</label>
                    <textarea name="dotDescribe" id="dotDescribe" cols="30" rows="10" v-model="marketNetworkInfo.dotDescribe"></textarea>
                    <span style="margin-left: 214px">不得超过2000个汉字!</span>
                </div>
            </form>
            <el-button type="primary" id="submit" @click="updateMarketNetworkInfo" v-if="hasData">提交</el-button>
            <el-button type="primary" id="submit" @click="insertMarketNetworkInfo" v-if="!hasData">提交</el-button>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            marketNetworkInfo: {},
            hasData: false
        }
    },
    computed: {
        enterType() {
            return this.$store.store.state.enterType 
        }
    },
    created() {
        this.getMarketNetworkInfo()
    },
    methods: {
        // 获取信息
        getMarketNetworkInfo() {
            let enterid = localStorage.getItem('id')
            this.$http.get(`marketnetwork/find.action?user_id=${enterid}`).then(
                res => {
                    console.log(res.data)
                    if(res.data.responseDesc == '查询成功' && res.data.responseCode.length != 0){
                        this.marketNetworkInfo = res.data.responseCode[0] 
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
        updateMarketNetworkInfo() {
            let formData = JSON.stringify(this.marketNetworkInfo)
            this.$http({
                url: 'marketnetwork/update.action',
                method: 'post',
                data: formData,

            }).then( res => {
                if( res.data.responseDesc == '修改成功' ) {
                    this.$message({
                        message: '更新成功',
                        type: 'success'
                    })
                }
                this.getMarketNetworkInfo()
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
        insertMarketNetworkInfo() {
            this.marketNetworkInfo.userId = localStorage.getItem('id')
            let formData = JSON.stringify(this.marketNetworkInfo)
            this.$http({
                url: 'marketnetwork/insert.action',
                method: 'post',
                data: formData
            }).then( res => {
                if( res.data.responseCode == 1 ) {
                    // 弹出消息框
                    this.$message( {
                        message: '添加成功',
                        type: 'success'
                    } )
                    this.getMarketNetworkInfo()  // 重新获取数据
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



