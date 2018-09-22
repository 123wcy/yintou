<template>
    <div class="enterprise-apply">
        <div class="data-container">
            <h4 class="title">主营产品潜力</h4>
            <form class="form">
                <div class="input-container">
                    <label for="lastYear" style="width:200px;height:50px">去年主营经销产品销售额占全部销售产品的销售比例:</label>
                    <input type="text" name="lastYear" id="lastYear" v-model="potential.lastYear">
                </div>

                <div class="input-container">
                    <label for="previousYear" style="width:200px;height:50px">前年主营经销产品销售额占全部销售产品的销售比例:</label>
                    <input type="text" name="previousYear" id="previousYear" v-model="potential.previousYear">
                </div>

                <div class="input-container">
                    <label for="bigpreviousYear" style="width:200px;height:50px">大前年主营经销产品销售额占全部销售产品的销售比例:</label>
                    <input type="text" name="bigpreviousYear" id="bigpreviousYear" v-model="potential.bigpreviousYear">
                </div>

                <div class="input-container" style="margin-top:20px;">
                    <label for="potentialSm" style="width:200px;height:50px;">主营经销产品及其市场占有率、所处的产品生命周期情况描述:</label>
                    <textarea name="potentialSm" id="potentialSm" cols="30" rows="10" v-model="potential.potentialSm"></textarea>
                    <span style="margin-left: 214px">不得超过2000个汉字!</span>
                </div>
            </form>
            <el-button type="primary" id="submit" @click="updatePotential" v-if="hasData">提交</el-button>
            <el-button type="primary" id="submit" @click="insertPotential" v-if="!hasData">提交</el-button>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            potential: {},
            hasData: false
        }
    },
    computed: {
        enterType() {
            return this.$store.store.state.enterType 
        }
    },
    created() {
        this.getPotential()
    },
    methods: {
        // 获取信息
        getPotential() {
            let enterid = localStorage.getItem('id')
            this.$http.get(`potential/find.action?user_id=${enterid}`).then(
                res => {
                    console.log(res.data)
                    if(res.data.responseDesc == '查询成功' && res.data.responseCode.length != 0){
                        this.potential = res.data.responseCode[0]
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
        updatePotential() {
            let formData = JSON.stringify(this.potential)
            this.$http({
                url: 'potential/update.action',
                method: 'post',
                data: formData,

            }).then( res => {
                if( res.data.responseDesc == '修改成功' ) {
                    this.$message({
                        message: '更新成功',
                        type: 'success'
                    })
                }
                this.getPotential()
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
        insertPotential() {
            this.potential.userId = localStorage.getItem('id')
            let formData = JSON.stringify(this.potential)
            this.$http({
                url: 'potential/insert.action',
                method: 'post',
                data: formData
            }).then( res => {
                if( res.data.responseCode == 1 ) {
                    // 弹出消息框
                    this.$message( {
                        message: '添加成功',
                        type: 'success'
                    } )
                    this.getPotential()  // 重新获取数据
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



