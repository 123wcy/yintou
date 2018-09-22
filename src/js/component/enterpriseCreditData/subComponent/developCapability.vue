<template>
    <div class="enterprise-apply">
        <div class="data-container">
            <h4 class="title">
                企业发展能力的评判与预测
            </h4>
            <form>
                <div class="subtitle">企业发展能力的评判与预测</div>
                <textarea name="textarea" id="textarea" cols="30" rows="10" maxlength="2000" v-model="capacityInfo.capacitySum">
                </textarea>
                <span>不要超过2000个汉字!</span>
                <el-button type="primary" @click="updataCapacityInfo" v-if="hasData">提 交</el-button>
                <el-button type="primary" @click="insertCapacityInfo" v-if="!hasData">提 交</el-button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            capacityInfo: {},
            hasData: false
        }
    },
    created() {
        this.getCapacityInfo()
    },
    methods: {
        //获取数据
        getCapacityInfo() {
            let id = localStorage.getItem('id')
            this.$http.get(`capacity/find.action?user_id=${id}`)
            .then( res => {
                if( res.data.responseDesc == '查询成功' && res.data.responseCode != 0 ){
                    this.capacityInfo = res.data.responseCode[0]
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
        //更新数据
        updataCapacityInfo() {
            let formData = JSON.stringify(this.capacityInfo)
            this.updateInfo( 'capacity/update.action', formData, this.getCapacityInfo)
        },

        //新增
        insertCapacityInfo() {
            this.capacityInfo.userId = localStorage.getItem('id')
            let formData = JSON.stringify(this.capacityInfo)
            this.$http({
                url: 'capacity/insert.action',
                method: 'post',
                data: formData
            }).then( res => {
                if( res.data.responseCode == 1 ) {
                    // 弹出消息框
                    this.$message( {
                        message: '添加成功',
                        type: 'success'
                    } )
                    this.getCapacityInfo()  // 重新获取数据
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

