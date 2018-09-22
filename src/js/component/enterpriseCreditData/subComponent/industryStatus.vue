<template>
    <div class="enterprise-apply">
        <div class="data-container">
            <h4 class="title">
                行业地位
            </h4>
            <form>
                <div class="subtitle">行业地位描述:</div>
                <textarea name="textarea" id="textarea" cols="30" rows="10" maxlength="2000" v-model="industrystatus.industrySum">
                </textarea>
                <span>不要超过2000个汉字!</span>
                <el-button type="primary" @click="updateIndustrystatus" v-if="hasData">提 交</el-button>
                <el-button type="primary" @click="insertIndustrystatus" v-if="!hasData">提 交</el-button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            industrystatus: {},
            hasData: false
        }
    },
    created() {
        this.getIndustrystatus()
    },
    methods: {
        // 获取信息
        getIndustrystatus() {
            let enterid = localStorage.getItem('id')
            this.$http.get(`industrystatus/find.action?user_id=${enterid}`).then(
                res => {
                    console.log(res.data)
                    if(res.data.responseDesc == '查询成功' && res.data.responseCode.length != 0){
                        this.industrystatus = res.data.responseCode[0] 
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
        updateIndustrystatus() {
            let formData = JSON.stringify(this.industrystatus)
            this.$http({
                url: 'industrystatus/update.action',
                method: 'post',
                data: formData,

            }).then( res => {
                if( res.data.responseDesc == '修改成功' ) {
                    this.$message({
                        message: '更新成功',
                        type: 'success'
                    })
                }
                this.getIndustrystatus()
            }).catch( err => {
                if(err) {
                    this.$message({
                        message: '网络错误',
                        type: 'error'
                    })
                }
            })
        },
        insertIndustrystatus() {
            this.industrystatus.userId = localStorage.getItem('id')
            let formData = JSON.stringify(this.industrystatus)
            this.$http({
                url: 'industrystatus/insert.action',
                method: 'post',
                data: formData
            }).then( res => {
                if( res.data.responseCode == 1 ) {
                    // 弹出消息框
                    this.$message( {
                        message: '添加成功',
                        type: 'success'
                    } )
                    this.getIndustrystatus()  // 重新获取数据
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
@import '../../../../css/form.scss';
@import '../../../../css/textarea.scss'


</style>

