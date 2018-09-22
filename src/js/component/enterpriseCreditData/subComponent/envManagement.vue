<template>
    <div class="enterprise-apply">
        <div class="data-container">
            <h4 class="title">环保管理</h4>
            <form class="form">
                <div class="input-container">
                    <label for="passEnviron" style="width:200px;height:50px">企业是否通过ISO14000系列等环保管理体系认证？:</label>
                    <select v-model="manageenvironInfo.passEnviron">
                        <option value="true">是</option>
                        <option value="false">否</option>
                    </select>
                </div>

                <div class="input-container">
                    <label for="environBook" style="width:200px;height:50px">是否能提供有效运行环保管理体系的书面材料证明？:</label>
                    <select v-model="manageenvironInfo.environBook">
                        <option value="true">是</option>
                        <option value="false">否</option>
                    </select>
                </div>

                <div class="input-container">
                    <label for="manageEnviron" style="width:200px;height:50px">环保管理水平情况描述:</label>
                    <textarea name="manageEnviron" id="manageEnviron" cols="30" rows="10" v-model="manageenvironInfo.manageEnviron"></textarea>
                    <span>不得超过2000个汉字!</span>
                </div>
            </form>
            <el-button type="primary" id="submit" @click="updateManageenvironInfo" v-if="hasData">提交</el-button>
            <el-button type="primary" id="submit" @click="insertManageenvironInfo" v-if="!hasData">提交</el-button>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            manageenvironInfo: {},
            hasData: false
        }
    },
    created() {
        this.getManageenvironInfo()
    },
    methods: {
        // 获取信息
        getManageenvironInfo() {
            let enterid = localStorage.getItem('id')
            this.$http.get(`manageenviron/find.action?user_id=${enterid}`).then(
                res => {
                    console.log(res.data)
                    if(res.data.responseDesc == '查询成功' && res.data.responseCode.length != 0){
                        this.manageenvironInfo = res.data.responseCode[0] 
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
        updateManageenvironInfo() {
            let formData = JSON.stringify(this.manageenvironInfo)
            this.$http({
                url: 'manageenviron/update.action',
                method: 'post',
                data: formData,

            }).then( res => {
                if( res.data.responseDesc == '修改成功' ) {
                    this.$message({
                        message: '更新成功',
                        type: 'success'
                    })
                }
                this.getManageenvironInfo()
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
        insertManageenvironInfo() {
            this.manageenvironInfo.userId = localStorage.getItem('id')
            let formData = JSON.stringify(this.manageenvironInfo)
            this.$http({
                url: 'manageenviron/insert.action',
                method: 'post',
                data: formData
            }).then( res => {
                if( res.data.responseCode == 1 ) {
                    // 弹出消息框
                    this.$message( {
                        message: '添加成功',
                        type: 'success'
                    } )
                    this.getManageenvironInfo()  // 重新获取数据
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



