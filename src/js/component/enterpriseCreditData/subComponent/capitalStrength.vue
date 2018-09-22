<template>
    <div class="enterprise-apply">
        <div class="data-container">
            <h4 class="title">
                资本实力
            </h4>
            <form>
                <div class="subtitle">资本实力 :</div>
                <textarea name="textarea" id="textarea" cols="30" rows="10" maxlength="2000" v-model="capitalStrength.capitalStrength">
                </textarea>
                <span>不要超过2000个汉字!</span>
                <el-button type="primary" @click="updataCapitalStrength" v-if="hasData">提 交</el-button>
                <el-button type="primary" @click="insertCapitalStrength" v-if="!hasData">提 交</el-button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            capitalStrength:{
                capitalStrength: ''
            },
            hasData: false
        }
    },
    components: {
    },
    created() {
        this.getCapitalStrength()
    },
    methods: {
        // 获取数据
        getCapitalStrength() {
            let id = localStorage.getItem('id')
            this.$http.get(`/strength/find.action?user_id=${id}`)
            .then( res => {
                if( res.data.responseDesc == '查询成功' && res.data.responseCode != 0 ){
                    this.capitalStrength = res.data.responseCode[0]
                    this.hasData = true
                    console.log(res.data)
                } else if(res.data.responseDesc == '查询成功' && res.data.responseCode.length == 0){
                    this.capitalStrength.capitalStrength = '暂无数据'
                    this.hasData = false
                }
            } ).catch( err => {
                console.log(err)
            } ) 
        },
        // 更新数据
        updataCapitalStrength() {
            const formData = JSON.stringify(this.capitalStrength)   
            this.updateInfo( 'strength/update.action', formData, this.getCapitalStrength)
        },
        //新增
        insertCapitalStrength() {
            this.capitalStrength.userId = localStorage.getItem('id')
            let formData = JSON.stringify(this.capitalStrength)
            this.$http({
                url: 'strength/insert.action',
                method: 'post',
                data: formData
            }).then( res => {
                if( res.data.responseCode == 1 ) {
                    // 弹出消息框
                    this.$message( {
                        message: '添加成功',
                        type: 'success'
                    } )
                    this.getCapitalStrength()  // 重新获取数据
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

