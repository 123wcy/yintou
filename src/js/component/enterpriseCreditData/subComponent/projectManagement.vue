<template>
    <div class="enterprise-apply">
        <div class="data-container">
            <h4 class="title">项目管理</h4>
            <form class="form">
                <div v-if=" enterType == 'Construction' ">
                    <div class="input-container">
                        <label for="projectManager" style="width:270px;height:50px">项目经理是否具备相应资质:</label>
                        <select v-model="projectManage.projectManager">
                            <option value="true">是</option>
                            <option value="false">否</option>
                        </select>
                    </div>

                    <div class="input-container">
                        <label for="projectSoftware" style="width:270px;height:50px">是否配备项目管理软件:</label>
                        <select v-model="projectManage.projectSoftware">
                            <option value="true">是</option>
                            <option value="false">否</option>
                        </select>
                    </div>

                    <div class="input-container">
                        <label for="projectAccidents" style="width:270px;height:50px">是否发生重大施工事故:</label>
                        <select v-model="projectManage.projectAccidents">
                            <option value="true">是</option>
                            <option value="false">否</option>
                        </select>
                    </div>
                </div>

                <div v-if=" enterType == 'Services' ">
                    <div class="input-container">
                        <label for="projectSystem" style="width:270px;height:50px">是否建立了完善的项目管理制度体系，包括时间、费用、质量、人力等管理体系:</label>
                        <select v-model="projectManage.projectSystem">
                            <option value="true">是</option>
                            <option value="false">否</option>
                        </select>
                    </div>

                    <div class="input-container">
                        <label for="projectImplement" style="width:270px;height:50px">项目执行过程中，是否按照建立的项目管理体系执行各项工作，并有完整的管理记录:</label>
                        <select v-model="projectManage.projectImplement">
                            <option value="true">是</option>
                            <option value="false">否</option>
                        </select>
                    </div>
                </div>


                <div class="input-container">
                    <label for="projectSm" style="width:270px;height:50px">项目管理水平情况:</label>
                    <textarea name="projectSm" id="projectSm" cols="30" rows="10" v-model="projectManage.projectSm"></textarea>
                    <span style="margin-left: 283px">不得超过2000个汉字!</span>
                </div>
            </form>
            <el-button type="primary" id="submit" @click="updateManageprojectInfo" v-if="hasData">提交</el-button>
            <el-button type="primary" id="submit" @click="insertManageprojectInfo" v-if="!hasData">提交</el-button>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            projectManage: {},
            hasData: false
        }
    },
    computed: {
        enterType() {
            return this.$store.store.state.enterType 
        }
    },
    created() {
        this.getManageprojectInfo()
    },
    methods: {
        // 获取信息
        getManageprojectInfo() {
            let enterid = localStorage.getItem('id')
            this.$http.get(`manageproject/find.action?user_id=${enterid}`).then(
                res => {
                    console.log(res.data)
                    if(res.data.responseDesc == '查询成功' && res.data.responseCode.length != 0){
                        this.projectManage = res.data.responseCode[0]
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
        updateManageprojectInfo() {
            let formData = JSON.stringify(this.projectManage)
            this.$http({
                url: 'manageproject/update.action',
                method: 'post',
                data: formData,

            }).then( res => {
                if( res.data.responseDesc == '修改成功' ) {
                    this.$message({
                        message: '更新成功',
                        type: 'success'
                    })
                }
                this.getManageprojectInfo()
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
        insertManageprojectInfo() {
            this.manageproject.userId = localStorage.getItem('id')
            let formData = JSON.stringify(this.manageproject)
            this.$http({
                url: 'manageproject/insert.action',
                method: 'post',
                data: formData
            }).then( res => {
                if( res.data.responseCode == 1 ) {
                    // 弹出消息框
                    this.$message( {
                        message: '添加成功',
                        type: 'success'
                    } )
                    this.getManageprojectInfo()  // 重新获取数据
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



