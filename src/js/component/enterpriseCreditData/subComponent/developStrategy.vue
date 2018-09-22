<template>
    <div class="enterprise-apply">
        <div class="data-container">
            <h4 class="title">发展战略</h4>
            <form class="form">
                <div class="input-container">
                    <label for="planning" style="width:200px;height:50px">是否编制了3年及以上发展规划？:</label>
                    <select v-model="strategyInfo.planning">
                        <option value="true">是</option>
                        <option value="false">否</option>
                    </select>
                </div>

                <div class="input-container">
                    <label for="measures" style="width:200px;height:50px">是否采取了发展规划的具体实施、保障和落实措施？:</label>
                    <select v-model="strategyInfo.measures">
                        <option value="true">是</option>
                        <option value="false">否</option>
                    </select>
                </div>

                <div class="input-container">
                    <label for="strategySm" style="width:200px;height:50px">发展规划编制、实施、保障和落实情况描述:</label>
                    <textarea name="strategySm" id="strategySm" cols="30" rows="10" v-model="strategyInfo.strategySm"></textarea>
                    <span>不得超过2000个汉字!</span>
                </div>
            </form>
            <el-button type="primary" id="submit" @click="updateStrategyInfo" v-if="hasData">提交</el-button>
            <el-button type="primary" id="submit" @click="insertStrategyInfo" v-if="!hasData">提交</el-button>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            strategyInfo: {},
            hasData: false
        }
    },
    created() {
        this.getStrategyInfo()
    },
    methods: {
        // 获取信息
        getStrategyInfo() {
            let enterid = localStorage.getItem('id')
            this.$http.get(`strategy/find.action?user_id=${enterid}`).then(
                res => {
                    console.log(res.data)
                    if(res.data.responseDesc == '查询成功' && res.data.responseCode.length != 0){
                        this.strategyInfo = res.data.responseCode[0] 
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
        updateStrategyInfo() {
            let formData = JSON.stringify(this.strategyInfo)
            this.$http({
                url: 'strategy/update.action',
                method: 'post',
                data: formData,

            }).then( res => {
                if( res.data.responseDesc == '修改成功' ) {
                    this.$message({
                        message: '更新成功',
                        type: 'success'
                    })
                }
                this.getStrategyInfo()
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
        insertStrategyInfo() {
            this.strategyInfo.userId = localStorage.getItem('id')
            let formData = JSON.stringify(this.strategyInfo)
            this.$http({
                url: 'strategy/insert.action',
                method: 'post',
                data: formData
            }).then( res => {
                if( res.data.responseCode == 1 ) {
                    // 弹出消息框
                    this.$message( {
                        message: '添加成功',
                        type: 'success'
                    } )
                    this.getStrategyInfo()  // 重新获取数据
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



