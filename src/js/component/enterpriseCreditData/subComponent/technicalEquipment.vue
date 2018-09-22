<template>
    <div class="enterprise-apply">
        <div class="data-container">
            <h4 class="title">技术装备</h4>
            <form class="form">
                <div class="input-container">
                    <label for="equipmentRate" style="width:200px;">技术装备率（元/人）:</label>
                    <input type="text" v-model="equipmentInfo.equipmentRate"> <i>元/人</i>
                    <span style="margin-left: 214px">计算方法：自有机械设备净值 / 年末在册全部职工人数</span>
                </div>

                <div class="input-container">
                    <label for="productionProcess" style="width:200px;height:50px">是否有先进的生产工艺？:</label>
                    <select v-model="equipmentInfo.productionProcess">
                        <option value="true">是</option>
                        <option value="false">否</option>
                    </select>
                </div>

                <div class="input-container">
                    <label for="equipmentSm" style="width:200px;height:50px">技术装备情况描述:</label>
                    <textarea name="equipmentSm" id="equipmentSm" cols="30" rows="10" v-model="equipmentInfo.equipmentSm"></textarea>
                    <span style="margin-left:214px;">不得超过2000个汉字!</span>
                </div>
            </form>
            <el-button type="primary" id="submit" @click="updateEquipmentInfo" v-if="hasData">提交</el-button>
            <el-button type="primary" id="submit" @click="insertEquipmentInfo" v-if="!hasData">提交</el-button>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            equipmentInfo: {},
            hasData: false
        }
    },
    created() {
        this.getEquipmentInfo()
    },
    methods: {
        // 获取信息
        getEquipmentInfo() {
            let enterid = localStorage.getItem('id')
            this.$http.get(`equipment/find.action?user_id=${enterid}`).then(
                res => {
                    console.log(res.data)
                    if(res.data.responseDesc == '查询成功' && res.data.responseCode.length != 0){
                        this.equipmentInfo = res.data.responseCode[0]
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
        updateEquipmentInfo() {
            let formData = JSON.stringify(this.equipmentInfo)
            this.$http({
                url: 'equipment/update.action',
                method: 'post',
                data: formData,

            }).then( res => {
                if( res.data.responseDesc == '修改成功' ) {
                    this.$message({
                        message: '更新成功',
                        type: 'success'
                    })
                }
                this.getEquipmentInfo()
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
        insertEquipmentInfo() {
            this.equipmentInfo.userId = localStorage.getItem('id')
            let formData = JSON.stringify(this.equipmentInfo)
            this.$http({
                url: 'equipment/insert.action',
                method: 'post',
                data: formData
            }).then( res => {
                if( res.data.responseCode == 1 ) {
                    // 弹出消息框
                    this.$message( {
                        message: '添加成功',
                        type: 'success'
                    } )
                    this.getEquipmentInfo()  // 重新获取数据
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



