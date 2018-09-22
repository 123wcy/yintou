<template>
    <div class="enterprise-apply">
        <div class="data-container">
            <h4 class="title">
                企业成立年限以及背景情况
            </h4>
            <form class="form">
                <div class="input-container">
                    <label for="stateControl" style="width:300px;height:50px">是否公开市场挂牌交易及国有控制>=20:</label>
                    <select v-model="background.stateControl">
                        <option value="QuotedCompany">是</option>
                        <option value="Others">否</option>
                    </select>
                </div>

                <div class="input-container" style="margin-top:20px;">
                    <label for="summary" style="width:300px;height:50px;">企业成立年限以及背景情况:</label>
                    <textarea name="" id="" cols="30" rows="10" v-model="background.summary"></textarea>
                    <span style="margin-left: 314px">不得超过2000个汉字!</span>
                </div>
            </form>
            <el-button type="primary" id="submit" @click="insertBackground" v-if="!hasData">提 交</el-button>
            <el-button type="primary" id="submit" @click="updateBackground" v-if="hasData">提 交</el-button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            background:{
                summary: '',
                stateControl: ''

            },
            hasData: false
        }
    },
    components: {
    },
    created() {
        this.getBackground()
    },
    methods: {
        //获取企业背景
        getBackground() {
            let id = localStorage.getItem('id')
            this.$http.get(`/summary/find.action?user_id=${id}`)
            .then( res => {
                if( res.data.responseDesc == '查询成功' && res.data.responseCode != 0 ){
                    this.background = res.data.responseCode[0]
                    this.hasData = true
                    console.log(res.data)
                } else if(res.data.responseDesc == '查询成功' && res.data.responseCode.length == 0){
                    this.background.summary = '暂无数据'
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
        updateBackground() {
            let formData = JSON.stringify(this.background)
            this.updateInfo( 'summary/update.action', formData, this.getBackground)
        },
        //新增
        insertBackground() {
            this.background.userId = localStorage.getItem('id')
            let formData = JSON.stringify(this.background)
            this.$http({
                url: 'summary/insert.action',
                method: 'post',
                data: formData
            }).then( res => {
                if( res.data.responseCode == 1 ) {
                    // 弹出消息框
                    this.$message( {
                        message: '添加成功',
                        type: 'success'
                    } )
                    this.getBackground()  // 重新获取数据
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
#submit {
    display: block;
    margin: 10px auto;
}

</style>

