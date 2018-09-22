<template>
    <div class="enterprise-apply">
        <div class="data-container">
            <h4 class="title">研发能力</h4>
            <form class="form">
                <div class="input-container">
                    <label for="newEnterprises" style="width:200px;height:50px">是否为高新技术企业？:</label>
                    <select v-model="rbcapabilityInfo.newEnterprises">
                        <option value="true">是</option>
                        <option value="false">否</option>
                    </select>
                </div>

                <div class="input-container">
                    <label for="previousYear" style="width:200px;height:50px">大前年年度研发费用投入（元）:</label>
                    <input type="text"  v-model="rbcapabilityInfo.previousYear">
                </div>

                <div class="input-container">
                    <label for="bigpreviousYear" style="width:200px;height:50px">前年年度研发费用投入（元）:</label>
                    <input type="text"  v-model="rbcapabilityInfo.bigpreviousYear">
                </div>

                <div class="input-container">
                    <label for="lastYear" style="width:200px;height:50px">去年年度研发费用投入（元）:</label>
                    <input type="text"  v-model="rbcapabilityInfo.lastYear">
                </div>

                <div class="input-container">
                    <label for="prove" style="width:200px;height:50px">以上研发费用投入是否能提供相关证明？:</label>
                    <select v-model="rbcapabilityInfo.prove">
                        <option value="true">是</option>
                        <option value="false">否</option>
                    </select>
                </div>

                <div class="input-container">
                    <label for="awards" style="width:200px;height:50px">近三年取得发明专利或者省（部）级以上科技奖项的数量：</label>
                    <input type="text" v-model="rbcapabilityInfo.awards" >
                </div>

                <div class="input-container">
                    <label for="rbcapabilitySm" style="width:200px;height:50px">研发投入和研发成果:</label>
                    <textarea name="rbcapabilitySm" id="rbcapabilitySm" cols="30" rows="10" v-model="rbcapabilityInfo.rbcapabilitySm"></textarea>
                    <span>不得超过2000个汉字!</span>
                </div>
            </form>
            <el-button type="primary" id="submit" @click="updateRbcapabilityInfo" v-if="hasData">提交</el-button>
            <el-button type="primary" id="submit" @click="insertRbcapabilityInfo" v-if="!hasData">提交</el-button>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            rbcapabilityInfo: {},
            hasData: false
        }
    },
    created() {
        this.getRbcapabilityInfo()
    },
    methods: {
        // 获取信息
        getRbcapabilityInfo() {
            let enterid = localStorage.getItem('id')
            this.$http.get(`rbcapability/find.action?user_id=${enterid}`).then(
                res => {
                    console.log(res.data)
                    if(res.data.responseDesc == '查询成功' && res.data.responseCode.length != 0){
                        this.rbcapabilityInfo = res.data.responseCode[0] 
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
        // 更新信息
        updateRbcapabilityInfo() {
            let formData = JSON.stringify(this.rbcapabilityInfo)
            this.$http({
                url: 'rbcapability/update.action',
                method: 'post',
                data: formData,

            }).then( res => {
                if( res.data.responseDesc == '修改成功' ) {
                    this.$message({
                        message: '更新成功',
                        type: 'success'
                    })
                }
                this.getRbcapabilityInfo()
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
        insertRbcapabilityInfo() {
            this.rbcapabilityInfo.userId = localStorage.getItem('id')
            let formData = JSON.stringify(this.rbcapabilityInfo)
            this.$http({
                url: 'rbcapability/insert.action',
                method: 'post',
                data: formData
            }).then( res => {
                if( res.data.responseCode == 1 ) {
                    // 弹出消息框
                    this.$message( {
                        message: '添加成功',
                        type: 'success'
                    } )
                    this.getRbcapabilityInfo()  // 重新获取数据
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



