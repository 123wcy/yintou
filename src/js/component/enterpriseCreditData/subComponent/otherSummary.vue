<template>
    <div class="enterprise-apply">
        <div class="data-container">
            <h4 class="title">
                其他项目履约情况说明
            </h4>
            <form>
                <div class="subtitle">其他项目履约情况说明：</div>
                <textarea name="textarea" id="textarea" cols="30" rows="10" maxlength="2000" v-model="otherSummary.othersm">
                </textarea>
                <span>不要超过2000个汉字!</span>
                <el-button type="primary" @click="updataOtherSummary" v-if="hasData">提 交</el-button>
                <el-button type="primary" @click="insertOtherSummary" v-if="!hasData">提 交</el-button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            otherSummary:{},
            hasData: false
        }
    },
    components: {
    },
    created() {
        this.getOtherSummary()
    },
    methods: {
        //获取企业背景
        getOtherSummary() {
            let id = localStorage.getItem('id')
            this.$http.get(`othersm/find.action?user_id=${id}`)
            .then( res => {
                if( res.data.responseDesc == '查询成功' && res.data.responseCode != 0 ){
                    this.otherSummary = res.data.responseCode[0]
                    this.hasData = true
                } else if(res.data.responseDesc == '查询成功' && res.data.responseCode.length == 0){
                    this.hasData = false
                }
                
            } ).catch( err => {
                if (err) {
                    this.$message({
                        message: '网络错误',
                        type: 'error'
                    })
                }
            })
        },
        //更新企业背景
        updataOtherSummary() {
            let formData = JSON.stringify(this.otherSummary)
            this.updateInfo( 'othersm/update.action', formData, this.getOtherSummary)
        },
        //新增
        insertOtherSummary() {
            this.otherSummary.userId = localStorage.getItem('id')
            let formData = JSON.stringify(this.otherSummary)
            this.$http({
                url: 'othersm/insert.action',
                method: 'post',
                data: formData
            }).then( res => {
                if( res.data.responseCode == 1 ) {
                    // 弹出消息框
                    this.$message( {
                        message: '添加成功',
                        type: 'success'
                    } )
                    this.getOtherSummary()  // 重新获取数据
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
@import '../../../../css/form.scss';
@import '../../../../css/textarea.scss'

</style>

