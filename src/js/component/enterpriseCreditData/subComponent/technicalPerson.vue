<template>
    <div class="enterprise-apply">

        <div class="data-container">
            <h4 class="title">执证专业技术人员</h4>
            <div class="table-container">
                <el-button type="primary" id="add" @click="addItem">新增</el-button>
                <table border="1">
                <thead>
                    <tr>
                        <th>编号</th>
                        <th>姓名</th>
                        <th>职位</th>   
                        <th>职业资格</th>                                             
                        <th>证书编号</th>
                        <th>专业</th>
                        <th>近三年是否变动？</th>
                        <th>个人信用记录</th>
                        <th>操作</th>
                    </tr>
                </thead>
                    <tbody>
                        <tr v-if="hasNoData">
                            <td colspan="9">暂无数据</td>
                        </tr>
                        <tr v-for="item in technicalInfo" :key="item.id">
                            <td>{{item.id}}</td>                            
                            <td>{{item.name}}</td>
                            <td>{{item.title}}</td>
                            <td>{{item.rankTitle}}</td>
                            <td>{{item.certificate}}</td>                            
                            <td>{{item.major}}</td>
                            <td>{{item.workChange}}</td>
                            <td>{{item.overdueNumber}}</td>
                            <td>
                                <el-button type="primary" plain @click="updateItem(item)">修改</el-button>
                                <el-button type="primary" plain @click="deleteItem(item.id)">删除</el-button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- 新增 dialog弹出框 -->
        <el-dialog title="执证技术人员信息" :visible.sync="addFormVisible">
            <form class="form">

                <div class="input-container">
                    <label for="name">姓名:</label>
                    <input type="text" name="name" v-model="form.name">
                </div>

                <div class="input-container">
                    <label for="title">职称:</label>
                    <input type="text" name="title" v-model="form.title">
                </div>

                <div class="input-container">
                    <label for="rankTitle">职称资格:</label>
                    <input type="text" name="rankTitle" id="rankTitle" v-model="form.rankTitle">
                </div>

                <div class="input-container">
                    <label for="major">专业:</label>
                    <input type="text" name="major" v-model="form.major">
                </div>

                <div class="input-container">
                    <label for="certificate">证书编号:</label>
                    <input type="text" name="certificate" v-model="form.certificate">
                </div>

                <div class="input-container">
                    <label for="workChange">近年是否有变动:</label>
                    <input type="text" name="workChange" v-model="form.workChange">
                </div>

                <div class="input-container">
                    <label for="overdueNumber">个人信用记录:</label>
                    <input type="text" name="overdueNumber" v-model="form.overdueNumber">
                </div>

            </form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="addFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="handleAdd" v-if="isInsert">确 定</el-button>
                <el-button type="primary" @click="handleUpdate" v-if="isUpdate">修 改</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            technicalInfo: [],
            hasNoData:true,
            form: {
                id: '',
                name: '',
                title: '',
                rankTitle: '',
                major: '',
                certificate: '',
                workChange: '',
                overdueNumber: '',
            },
            addFormVisible: false,
            isInsert: true,
            isUpdate: false
        }
    },
    components: {
    },
    created() {
        this.getTechnical()
    },
    methods: {
        // 获取信息
         getTechnical() {
            let enterid = localStorage.getItem('id')
            this.$http.get(`artisan/find.action?user_id=${enterid}`).then(
                res => {
                    if( res.data.responseDesc == '查询成功' ) {
                        this.technicalInfo = res.data.responseCode
                    }else {
                    }
                }
            ).then( () => {
                // 判断是否有数据
                if( this.technicalInfo.length ) {
                    this.hasNoData = false
                } else {
                    this.hasNoData = true
                }
            } ).catch( err => {
                // console.log(err)
                //捕捉错误
                this.hasNoData = true
                this.$message( {
                        message: '网络错误',
                        type: 'error'
                } )                   
            } )
            
        },
        // 新增
        addItem() {
            //弹出dialog对话框
            this.addFormVisible = true
            this.isInsert = true
            this.isUpdate = false
        },
        handleAdd() {
            this.form.userId = localStorage.getItem('id')
            delete this.form.id
            let formdata = JSON.stringify(this.form)
            // 提交新增
            this.$http({
                url: 'artisan/insert.action',
                method: 'post',
                data: formdata
            }).then( res => {
                if( res.data.responseCode == 1 ) {
                    // 弹出消息框
                    this.$message( {
                        message: '增加成功',
                        type: 'success'
                    } )
                    this.getTechnical()  // 重新获取数据
                }
            } ).catch( err => {
                this.$message( {
                        message: '添加失败',
                        type: 'error'
                } )
            } )
            this.addFormVisible = false //关闭 dialog对话框
        },

        // 删除
        deleteItem(id) {
            this.$http({
                url: `artisan/delete.action?id=${id}`,
                method: 'get'
            }).then( res => {
                if( res.data.responseCode == 0 ) {
                    // 弹出消息框
                    this.$message( {
                        message: '删除成功',
                        type: 'success'
                    } )
                    this.getTechnical()
                }
            } ).catch( err => {
                console.log( err )
            } )
        },
        // 修改
        updateItem(item) {
            this.addFormVisible = true
            this.form = item
            this.isUpdate = true
            this.isInsert = false
        },
        handleUpdate() {
            let formData = JSON.stringify(this.form)
            this.$http({
                url: 'artisan/update.action',
                method: 'post',
                data: formData
            }).then( res => {
                if( res.data.responseCode == 1 ) {
                    // 弹出消息框
                    this.$message( {
                        message: '修改成功',
                        type: 'success'
                    } )
                    this.getTechnical()  // 重新获取数据
                }
            } ).catch( err => {
                this.hasNoData = true
                this.$message( {
                        message: '修改失败',
                        type: 'error'
                } )
            } )
            this.addFormVisible = false //关闭 dialog对话框
        },
    }
}
</script>

<style lang="scss" scoped>
@import "../../../../css/form.scss";
@import "../../../../css/table.scss";
@import "../../../../css/dialog.scss";

</style>

