<template>
    <div class="enterprise-apply">
        <div class="data-container">
            <h4 class="title">产品认证</h4>
            <form class="form">
                <div class="input-container">
                    <label for="compuCertification" style="width:200px;height:50px">产品是否需要进行国家强制认证:</label>
                    <select v-model="certificationInfo.compuCertification">
                        <option value="true">是</option>
                        <option value="false">否</option>
                    </select>
                </div>

                <div class="input-container">
                    <label for="licence" style="width:200px;height:50px">是否已获得相关生产许可证:</label>
                    <select v-model="certificationInfo.licence">
                        <option value="true">是</option>
                        <option value="false">否</option>
                    </select>
                </div>

                <div class="input-container" style="margin-top:20px;">
                    <label for="certificationDescribe" style="width:200px;height:50px;">通过国家强制性认证情况描述:</label>
                    <textarea name="certificationDescribe" id="certificationDescribe" cols="30" rows="10" v-model="certificationInfo.certificationDescribe"></textarea>
                    <span style="margin-left: 214px">不得超过2000个汉字!</span>
                </div>
            </form>
            <el-button type="primary" id="submit" @click="updateCertificationInfo" v-if="hasData">提交</el-button>
            <el-button type="primary" id="submit" @click="insertCertificationInfo" v-if="!hasData">提交</el-button>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            certificationInfo: {},
            hasData: false
        }
    },
    created() {
        this.getCertificationInfo()
    },
    methods: {
        // 获取信息
        getCertificationInfo() {
            let enterid = localStorage.getItem('id')
            this.$http.get(`certification/find.action?user_id=${enterid}`).then(
                res => {
                    console.log(res.data)
                    if(res.data.responseDesc == '查询成功' && res.data.responseCode.length != 0){
                        this.certificationInfo = res.data.responseCode[0] 
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
        updateCertificationInfo() {
            let formData = JSON.stringify(this.certificationInfo)
            this.$http({
                url: 'certification/update.action',
                method: 'post',
                data: formData,

            }).then( res => {
                if( res.data.responseDesc == '修改成功' ) {
                    this.$message({
                        message: '更新成功',
                        type: 'success'
                    })
                }
                this.getCertificationInfo()
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
        insertCertificationInfo() {
            this.certificationInfo.userId = localStorage.getItem('id')
            let formData = JSON.stringify(this.certificationInfo)
            this.$http({
                url: 'certification/insert.action',
                method: 'post',
                data: formData
            }).then( res => {
                if( res.data.responseCode == 1 ) {
                    // 弹出消息框
                    this.$message( {
                        message: '添加成功',
                        type: 'success'
                    } )
                    this.getCertificationInfo()  // 重新获取数据
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



