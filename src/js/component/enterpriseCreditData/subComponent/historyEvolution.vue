<template>
    <div class="enterprise-apply">
        <div class="data-container">
            <h4 class="title">历史沿革</h4>
            <div class="table-container">
                <el-button type="primary" id="add" @click="addItem">新增</el-button>
                <table border="1">
                <thead>
                    <tr>
                        <th>编号</th>
                        <th>变更前事项</th>
                        <th>变更后事项</th>
                        <th>变更核准日期</th>
                        <th>变更项目</th>
                        <th>操作</th>
                    </tr>
                </thead>
                    <tbody>
                        <tr v-if="hasNoData">
                            <td colspan="6">暂无数据</td>
                        </tr>
                        <tr v-for="item in historyInfo" :key="item.id">
                            <td>{{item.id}}</td>
                            <td>{{item.preChange}}</td>
                            <td>{{item.postChange}}</td>
                            <td>{{item.changeDate}}</td>
                            <td>{{item.changeProject}}</td>
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
        <el-dialog title="历史沿革" :visible.sync="addFormVisible">
            <form class="form">
                <div class="input-container">
                    <label for="preChange">变更前事项:</label>
                    <input type="text" name="preChange" v-model="form.preChange">
                </div>

                <div class="input-container">
                    <label for="postChange">变更后事项:</label>
                    <input type="text" name="postChange" v-model="form.postChange">
                </div>

                <div class="input-container">
                    <label for="changeDate">变更核准日期:</label>
                    <Datepicker class="datepicker" id="foundingTime" v-model="form.changeDate" language="zh" format="yyyy年MM月dd日"></Datepicker>
                </div>

                <div class="input-container">
                    <label for="changeProject">变更项目:</label>
                    <input type="text" name="changeProject" v-model="form.changeProject">
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
import Datepicker from 'vuejs-datepicker'

export default {
    data() {
        return {
            historyInfo: [
            ],
            form: { 
                preChange: '',
                postChange: '',
                changeDate: '',
                changeProject: ''
            },
            addFormVisible: false,
            formLabelWidth: '120px',
            hasNoData: false,
            isUpdate: false,
            isInsert: true
        }
    },
    components: {
        Datepicker
    },
    created() {
        this.getHistory()
    },
    methods: {
        // 获取信息
         getHistory() {
            let enterid = localStorage.getItem('id')
            this.$http.get(`history/find.action?user_id=${enterid}`).then(
                res => {
                    if( res.data.responseDesc == '查询成功' ) {
                        this.historyInfo = res.data.responseCode
                    }else {
                    }
                }
            ).then( () => {
                // 判断是否有数据
                if( this.historyInfo.length ) {
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
                url: 'history/insert.action',
                method: 'post',
                data: formdata
            }).then( res => {
                if( res.data.responseCode == 1 ) {
                    // 弹出消息框
                    this.$message( {
                        message: '增加成功',
                        type: 'success'
                    } )
                    this.getHistory()  // 重新获取数据
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
                url: `history/delete.action?id=${id}`,
                method: 'get'
            }).then( res => {
                if( res.data.responseCode == 0 ) {
                    // 弹出消息框
                    this.$message( {
                        message: '删除成功',
                        type: 'success'
                    } )
                    this.getHistory()
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
                url: 'history/update.action',
                method: 'post',
                data: formData
            }).then( res => {
                if( res.data.responseCode == 1 ) {
                    // 弹出消息框
                    this.$message( {
                        message: '修改成功',
                        type: 'success'
                    } )
                    this.getHistory()  // 重新获取数据
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

