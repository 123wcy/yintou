<template>
    <div class="enterprise-apply">
        <div class="data-container">
            <h4 class="title">合同纠纷</h4>
            <form class="form">
                <div class="input-container">
                    <label for="disputeNumber" style="width:200px;height:50px">近三年合同中有几起负主要责任的纠纷？:</label>
                    <select v-model="disputeInfo.disputeNumber">
                        <option value="0">0起</option>
                        <option value="1">1起</option>
                        <option value="2">2起</option>
                        <option value="3">3起及以上</option>
                    </select>
                </div>

                <div class="input-container">
                    <label for="disputesm" style="width:200px;height:50px">近三年合同纠纷以及解决情况:</label>
                    <textarea name="disputesm" id="disputesm" cols="30" rows="10" v-model="disputeInfo.disputesm"></textarea>
                    <span>不得超过2000个汉字!若无该项数据，可不填！</span>
                </div>
            </form>
            <el-button type="primary" id="submit" @click="updateDisputeInfo" v-if="hasData">提交</el-button>
            <el-button type="primary" id="submit" @click="insertDisputeInfo" v-if="!hasData">提交</el-button>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            disputeInfo: {},
            hasData: false
        }
    },
    created() {
        this.getDisputeInfo()
    },
    methods: {
        // 获取信息
        getDisputeInfo() {
            let enterid = localStorage.getItem('id')
            this.$http.get(`dispute/find.action?user_id=${enterid}`).then(
                res => {
                    console.log(res.data)
                    if(res.data.responseDesc == '查询成功' && res.data.responseCode.length != 0){
                        this.disputeInfo = res.data.responseCode[0] 
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
        updateDisputeInfo() {
            let formData = JSON.stringify(this.disputeInfo)
            this.$http({
                url: 'dispute/update.action',
                method: 'post',
                data: formData,

            }).then( res => {
                if( res.data.responseDesc == '修改成功' ) {
                    this.$message({
                        message: '更新成功',
                        type: 'success'
                    })
                }
                this.getDisputeInfo()
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
        insertDisputeInfo() {
            this.disputeInfo.userId = localStorage.getItem('id')
            let formData = JSON.stringify(this.disputeInfo)
            this.$http({
                url: 'dispute/insert.action',
                method: 'post',
                data: formData
            }).then( res => {
                if( res.data.responseCode == 1 ) {
                    // 弹出消息框
                    this.$message( {
                        message: '添加成功',
                        type: 'success'
                    } )
                    this.getDisputeInfo()  // 重新获取数据
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



