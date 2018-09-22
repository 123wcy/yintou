<template>
    <div class="enterprise-apply">
        <div class="data-container">
            <h4 class="title">管理制度</h4>
            <form class="form">
                <div class="input-container">
                    <label for="systemComplete" style="width:200px;height:50px">各项制度是否完备？:</label>
                    <select v-model="managesystemInfo.systemComplete">
                        <option value="true">是</option>
                        <option value="false">否</option>
                    </select>
                </div>

                <div class="input-container">
                    <label for="systemPublish" style="width:200px;height:50px">制度是否公司统一签署发布？</label>
                    <select v-model="managesystemInfo.systemPublish">
                        <option value="true">是</option>
                        <option value="false">否</option>
                    </select>
                </div>

                <div class="input-container">
                    <label for="systemHavecert" style="width:200px;height:50px">制度是否有执行证明？:</label>
                    <select v-model="managesystemInfo.systemHavecert">
                        <option value="true">是</option>
                        <option value="false">否</option>
                    </select>
                </div>

                <div class="input-container">
                    <label for="manageSystem" style="width:200px;height:50px">企业管理制度执行情况说明:</label>
                    <textarea name="manageSystem" id="manageSystem" cols="30" rows="10" v-model="managesystemInfo.manageSystem"></textarea>
                    <span>不得超过2000个汉字!</span>
                </div>
            </form>
            <el-button type="primary" id="submit" @click="updateManagesystemInfo" v-if="hasData">提交</el-button>
            <el-button type="primary" id="submit" @click="insertManagesystemInfo" v-if="!hasData">提交</el-button>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            managesystemInfo: {},
            hasData: false
        }
    },
    components: {
    },
    created() {
        this.getManagesystemInfo()
    },
    methods: {
        // 获取信息
        getManagesystemInfo() {
            let enterid = localStorage.getItem('id')
            this.$http.get(`managesystem/find.action?user_id=${enterid}`).then(
                res => {
                    console.log(res.data)
                    if(res.data.responseDesc == '查询成功' && res.data.responseCode.length != 0){
                        this.managesystemInfo = res.data.responseCode[0]
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
        updateManagesystemInfo() {
            let formData = JSON.stringify(this.managesystemInfo)
            this.$http({
                url: 'managesystem/update.action',
                method: 'post',
                data: formData,

            }).then( res => {
                if( res.data.responseDesc == '修改成功' ) {
                    this.$message({
                        message: '更新成功',
                        type: 'success'
                    })
                }
                this.getManagesystemInfo()
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
        insertManagesystemInfo() {
            this.managesystemInfo.userId = localStorage.getItem('id')
            let formData = JSON.stringify(this.managesystemInfo)
            this.$http({
                url: 'managesystem/insert.action',
                method: 'post',
                data: formData
            }).then( res => {
                if( res.data.responseCode == 1 ) {
                    // 弹出消息框
                    this.$message( {
                        message: '添加成功',
                        type: 'success'
                    } )
                    this.getManagesystemInfo()  // 重新获取数据
                }
            } ).catch( err => {
                this.$message( {
                    message: '添加失败',
                    type: 'error'
                } )
            } )
        },
    }
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



