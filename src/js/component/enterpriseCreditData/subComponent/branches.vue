<template>
    <div class="enterprise-apply">
        <div class="data-container">
            <h4 class="title">分支机构信息</h4>
            <div class="table-container">
                <el-button type="primary" id="add" @click="addItem">新增</el-button>
                <table border="1">
                <thead>
                    <tr>
                        <th>编号</th>
                        <th>与报告企业关系</th>
                        <th>分支机构中文名称</th>
                        <th>分支机构住所</th>
                        <th>分支机构电话号码</th>
                        <th>操作</th>
                    </tr>
                </thead>
                    <tbody>
                        <tr v-if="hasNoData">
                            <td colspan="6">暂无数据</td>
                        </tr>
                        <tr v-for="item in branchInfo" :key="item.id">
                            <td>{{item.id}}</td>
                            <td>{{item.branchRelationship}}</td>
                            <td>{{item.branchName}}</td>
                            <td>{{item.branchAddress}}</td>
                            <td>{{item.telephone}}</td>
                            <td>
                                <el-button type="primary" plain @click="updateItem(item)">修改</el-button>
                                <el-button type="primary" plain @click="deleteItem(item.id)">删除</el-button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- dialog框 -->
        <el-dialog title="新增 分支机构信息" :visible.sync="addFormVisible">
            <form class="form">
                <div class="input-container">
                    <label for="branchRelationship">与报告企业关系:</label>
                    <input type="text" name="branchRelationship" v-model="form.branchRelationship">
                </div>

                <div class="input-container">
                    <label for="branchName">分支机构中文名称:</label>
                    <input type="text" name="branchName" v-model="form.branchName">
                </div>

                <div class="input-container">
                    <label for="branchAddress">分支机构住所:</label>
                    <input type="text" name="branchAddress" id="branchAddress" v-model="form.branchAddress">
                </div>

                <div class="input-container">
                    <label for="telephone">变更分支机构电话号码项目:</label>
                    <input type="text" name="telephone" v-model="form.telephone">
                </div>
            </form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="addFormVisible = false">取 消</el-button>
                <el-button type="primary" v-if="isInsert" @click="handleAdd">确 定</el-button>
                <el-button type="primary" v-if="isUpdate" @click="handleUpdate">修 改</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            branchInfo: [],
            hasNoData: true,
            addFormVisible: false,
            form: {
                branchRelationship: '',
                branchName: '',
                branchAddress: '',
                telephone: ''
            },
            isUpdate: false,
            isInsert: true
        }
    },
    components: {
    },
    created() {
        this.getbranchInfo()
    },
    methods: {
        // 获取信息
        getbranchInfo() {
            let enterid = localStorage.getItem('id')
            this.$http.get(`branch/find.action?user_id=${enterid}`).then(
                res => {
                    if( res.data.responseDesc == '查询成功' ) {
                        this.branchInfo = res.data.responseCode
                    }else {
                    }
                }
            ).then( () => {
                // 判断是否有数据
                if( this.branchInfo.length ) {
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
                url: 'branch/insert.action',
                method: 'post',
                data: formdata
            }).then( res => {
                if( res.data.responseCode == 1 ) {
                    // 弹出消息框
                    this.$message( {
                        message: '增加成功',
                        type: 'success'
                    } )
                    this.getbranchInfo()  // 重新获取数据
                }
            } ).catch( err => {
                this.hasNoData = true
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
                url: `branch/delete.action?id=${id}`,
                method: 'get'
            }).then( res => {
                if( res.data.responseCode == 0 ) {
                    // 弹出消息框
                    this.$message( {
                        message: '删除成功',
                        type: 'success'
                    } )
                    this.getbranchInfo()
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
                url: 'branch/update.action',
                method: 'post',
                data: formData
            }).then( res => {
                if( res.data.responseCode == 1 ) {
                    // 弹出消息框
                    this.$message( {
                        message: '修改成功',
                        type: 'success'
                    } )
                    this.getbranchInfo()  // 重新获取数据
                }
            } ).catch( err => {
                this.hasNoData = true
                this.$message( {
                        message: '修改失败',
                        type: 'error'
                } )
            } )
            this.addFormVisible = false //关闭 dialog对话框
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../../../css/form.scss";
@import "../../../../css/table.scss";
@import "../../../../css/dialog.scss";
    

</style>

