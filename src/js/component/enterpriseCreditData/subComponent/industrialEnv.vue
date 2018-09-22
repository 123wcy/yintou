<template>
    <div class="enterprise-apply">
        <div class="data-container">
            <h4 class="title">产业环境</h4>
            <form class="form">
                <div class="input-container">
                    <label for="negativeEffect" style="width:300px;height:50px">宏观经济形势、行业竞争、行业周期、行业政策等外部因素对企业是否有负面影响？:</label>
                    <select v-model="environmentInfo.negativeEffect">
                        <option value="1">是</option>
                        <option value="0">否</option>
                    </select>
                </div>

                <div class="input-container">
                    <label for="industrialStructure" style="width:300px;height:50px">属于国家产业结构调整目录下什么企业:</label>
                    <select v-model="environmentInfo.industrialStructure">
                        <option value="1">属于国家产业结构调整目录中国家鼓励发展产业</option>
                        <option value="2">属于国家产业结构调整目录中国家允许发展产业</option>
                        <option value="3">属于国家产业结构调整目录中国家限制发展产业</option>
                        <option value="4">属于国家产业结构调整目录中国家淘汰发展产业</option>
                    </select>
                </div>

                <div class="input-container" style="margin-top:20px;">
                    <label for="environSum" style="width:300px;height:50px;">宏观经济形势、行业竞争水平、行业周期、行业政策等外部因素及其对企业发展的影响情况:</label>
                    <textarea name="" id="" cols="30" rows="10" v-model="environmentInfo.environSum"></textarea>
                    <span style="margin-left: 314px">不得超过2000个汉字!</span>
                </div>
            </form>
            <el-button type="primary" id="submit" @click="updateEnvironmentInfo" v-if="hasData">提交</el-button>
            <el-button type="primary" id="submit" @click="insertEnvironmentInfo" v-if="!hasData">提交</el-button>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            environmentInfo: {},
            hasData: false
        }
    },
    created() {
        this.getEnvironmentInfo()
    },
    methods : {
        // 获取信息
        getEnvironmentInfo() {
            let enterid = localStorage.getItem('id')
            this.$http.get(`environment/find.action?user_id=${enterid}`).then(
                res => {
                    console.log(res.data)
                    if(res.data.responseDesc == '查询成功' && res.data.responseCode.length != 0){
                        this.environmentInfo = res.data.responseCode[0] 
                    }else {
                        return
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
        updateEnvironmentInfo() {
            let formData = JSON.stringify(this.environmentInfo)
            this.$http({
                url: 'environment/update.action',
                method: 'post',
                data: formData,

            }).then( res => {
                if( res.data.responseDesc == '修改成功' ) {
                    this.$message({
                        message: '更新成功',
                        type: 'success'
                    })
                }
                this.getEnvironmentInfo()
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
        insertEnvironmentInfo() {
            this.environmentInfo.userId = localStorage.getItem('id')
            let formData = JSON.stringify(this.environmentInfo)
            this.$http({
                url: 'environment/insert.action',
                method: 'post',
                data: formData
            }).then( res => {
                if( res.data.responseCode == 1 ) {
                    // 弹出消息框
                    this.$message( {
                        message: '添加成功',
                        type: 'success'
                    } )
                    this.getEnvironmentInfo()  // 重新获取数据
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



