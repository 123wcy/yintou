<template>
    <div class="enterprise-apply">
        <div class="data-container">
            <h4 class="title">人民银行企业征信报告</h4>
            <div class="table-container">
                <el-button type="primary" id="add" @click="addItem">新增</el-button>
                <table border="1">
                <thead>
                    <tr>
                        <th>编号</th>
                        <th>项目类别</th>
                        <th>信贷类别</th>
                        <th>笔数</th>
                        <th>金额</th>
                        <th>操作</th>
                    </tr>
                </thead>
                    <tbody>
                        <tr v-if="hasNoData">
                            <td colspan="6">暂无数据</td>
                        </tr>
                        <tr v-for="item in bankreference" :key="item.id">
                            <td>{{item.id}}</td>
                            <td>{{item.project}}</td>
                            <td>{{item.type}}</td>
                            <td>{{item.number}}</td>
                            <td>{{item.money}}</td>
                            <td>
                                <el-button type="primary" plain @click="updateItem(item)">修改</el-button>
                                <el-button type="primary" plain @click="deleteItem(item.id)">删除</el-button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- 新增/修改 dialog弹出框 -->
        <el-dialog title="人民银行征信情况" :visible.sync="addFormVisible">
            <form class="form">
                <div class="input-container">
                    <label for="project">项目类别:</label>
                    <input type="text" name="project" v-model="form.project">
                </div>

                <div class="input-container">
                    <label for="type">信贷类别:</label>
                    <select name="type" id="type" v-model="form.type">
                        <option value="正常类">正常类</option>
                        <option value="关注类">关注类</option>
                        <option value="不良/违约类">不良/违约类</option>
                    </select>
                </div>

                <div class="input-container">
                    <label for="number">笔数:</label>
                    <input type="text" name="number" v-model="form.number">
                </div>

                <div class="input-container">
                    <label for="money">金额:</label>
                    <input type="text" name="changePmoneyroject" v-model="form.money">
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
            bankreference: [],
            addFormVisible: false,
            form: {
                project: '',
                type: '',
                number: '',
                money: ''
            },
            hasNoData: true,
            isInsert: true,
            isUpdate: false
        }
    },
    components: {
    },
    created() {
        this.getBankreference()
    },
    methods: {
        // 获取信息
         getBankreference() {
            let enterid = localStorage.getItem('id')
            this.$http.get(`bankreference/find.action?user_id=${enterid}`).then(
                res => {
                    console.log(res.data)
                    if( res.data.responseDesc == '查询成功' ) {
                        this.bankreference = res.data.responseCode
                    }else {
                    }
                }
            ).then( () => {
                // 判断是否有数据
                if( this.bankreference.length ) {
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
                url: 'bankreference/insert.action',
                method: 'post',
                data: formdata
            }).then( res => {
                if( res.data.responseCode == 1 ) {
                    // 弹出消息框
                    this.$message( {
                        message: '增加成功',
                        type: 'success'
                    } )
                    this.getBankreference()  // 重新获取数据
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
                url: `bankreference/delete.action?id=${id}`,
                method: 'get'
            }).then( res => {
                if( res.data.responseCode == 0 ) {
                    // 弹出消息框
                    this.$message( {
                        message: '删除成功',
                        type: 'success'
                    } )
                    this.getBankreference()
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
                url: 'bankreference/update.action',
                method: 'post',
                data: formData
            }).then( res => {
                if( res.data.responseCode == 1 ) {
                    // 弹出消息框
                    this.$message( {
                        message: '修改成功',
                        type: 'success'
                    } )
                    this.getBankreference()  // 重新获取数据
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
@import "../../../../css/dialog.scss"

</style>

