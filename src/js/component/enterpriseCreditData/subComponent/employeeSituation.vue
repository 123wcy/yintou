<template>
    <div class="enterprise-apply">
        <!-- 表单部分 -->
        <div class="data-container">
            <h4 class="title">从业人员情况</h4>
            <form class="form">
                <div class="input-container">
                    <label for="staffTotal">在册员工总数（全体人员）:</label>
                    <input type="text" name="staffTotal" v-model="staffInfo.staffTotal">
                </div>

                <div class="input-container">
                    <label for="fiveTotal">从业5年及以上的员工数量:</label>
                    <input type="text" name="fiveTotal" v-model="staffInfo.fiveTotal">
                </div>

                <div class="input-container">
                    <label for="specialtyLower">大学专科以下学历员工数量:</label>
                    <input type="text" name="specialtyLower" v-model="staffInfo.specialtyLower">
                </div>

                <div class="input-container">
                    <label for="specialty">大学专科学历员工数量:</label>
                    <input type="text" name="specialty" v-model="staffInfo.specialty">
                </div>

                <div class="input-container">
                    <label for="undergraduate">大学本科学历员工数量:</label>
                    <input type="text" name="undergraduate" v-model="staffInfo.undergraduate">
                </div>

                <div class="input-container">
                    <label for="graduate">研究生及以上学历员工数量:</label>
                    <input type="text" name="graduate" v-model="staffInfo.graduate">
                </div>

                <div class="input-container">
                    <label for="thirtyLower">30岁以下员工数量:</label>
                    <input type="text" name="thirtyLower" v-model="staffInfo.thirtyLower">
                </div>

                <div class="input-container">
                    <label for="thirtyFortyfive">30-45岁员工数量:</label>
                    <input type="text" name="thirtyFortyfive" v-model="staffInfo.thirtyFortyfive">
                </div>

                <div class="input-container">
                    <label for="fortyfiveAbove">45岁以上员工数量:</label>
                    <input type="text" name="fortyfiveAbove" v-model="staffInfo.fortyfiveAbove">
                </div>

                <div class="input-container">
                    <label for="primary">初级职称员工数量:</label>
                    <input type="text" name="primary" v-model="staffInfo.primary">
                </div>

                <div class="input-container">
                    <label for="intermediate">中级职称员工数量:</label>
                    <input type="text" name="intermediate" v-model="staffInfo.intermediate">
                </div>

                <div class="input-container">
                    <label for="senior">高级职称员工数量:</label>
                    <input type="text" name="senior" v-model="staffInfo.senior">
                </div>

                <div class="input-container">
                    <label for="threeofficeLower">任职3年及以下员工数量:</label>
                    <input type="text" name="threeofficeLower" v-model="staffInfo.threeofficeLower">
                </div>

                <div class="input-container">
                    <label for="threeofficeFive">任职3年-5年（含5年）员工数量:</label>
                    <input type="text" name="threeofficeFive" v-model="staffInfo.threeofficeFive">
                </div>

                <div class="input-container">
                    <label for="fiveofficeTen">任职5年-10年（含10年）员工数量:</label>
                    <input type="text" name="fiveofficeTen" v-model="staffInfo.fiveofficeTen">
                </div>

                <div class="input-container">
                    <label for="tenofficeAbove">任职10年以上员工数量:</label>
                    <input type="text" name="tenofficeAbove" v-model="staffInfo.tenofficeAbove">
                </div>
                <input type="button" value="提交" id="btn" @click="updateEnterInfo" v-if="hasData"> 
                <input type="button" value="提交" id="btn" @click="insertEnterInfo" v-if="!hasData"> 
            </form>
        </div>

    </div>
</template>

<script>
export default {
    data() {
      return {
            staffInfo: {
            },
            hasData: false
      }
    },
    created() {
        this.getStaffInfo()
    },
    methods: {
        // 获取信息
        getStaffInfo() {
            let enterid = localStorage.getItem('id')
            this.$http.get(`staff/find.action?user_id=${enterid}`).then(
                res => {
                    console.log(res.data)
                    if(res.data.responseDesc == '查询成功' && res.data.responseCode.length !=0 ){
                        this.staffInfo = res.data.responseCode[0]
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
        updateEnterInfo() {
            let formdata = JSON.stringify(this.staffInfo)
            this.$http({
                url: 'staff/update.action',
                method: 'post',
                data: formdata,

            }).then( res => {
                if( res.data.responseDesc == '修改成功' ) {
                    this.$message({
                        message: '更新成功',
                        type: 'success'
                    })
                }
                this.getStaffInfo()
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
        insertEnterInfo() {
            this.staffInfo.userId = localStorage.getItem('id')
            let formData = JSON.stringify(this.staffInfo)
            this.$http({
                url: 'staff/insert.action',
                method: 'post',
                data: formData
            }).then( res => {
                if( res.data.responseCode == 1 ) {
                    // 弹出消息框
                    this.$message( {
                        message: '添加成功',
                        type: 'success'
                    } )
                    this.getStaffInfo()  // 重新获取数据
                }
            } ).catch( err => {
                this.$message( {
                    message: '添加失败',
                    type: 'error'
                } )
            } )
        },
    },
    components: {
    },
    
}
</script>

<style lang="scss" scoped>
@import '../../../../css/form.scss';
.input-container {
    label: {
        width: 100px !important;
    }
}
</style>

