<template>
    <div class="enterprise-apply">
        <div class="data-container">
            <h4 class="title">近三年获奖产品</h4>
            <div class="table-container">
                <el-button type="primary" id="add" @click="addItem">新增</el-button>
                <table border="1">
                <thead>
                    <tr>
                        <th>编号</th>
                        <th>获奖产品</th>
                        <th>奖项及等级</th>
                        <th>奖项级别</th>
                        <th>颁奖部门</th>
                        <th>备注</th>
                        <th>操作</th>
                    </tr>
                </thead>
                    <tbody>
                        <tr v-if="hasNoData">
                            <td colspan="8">暂无数据</td>
                        </tr>
                        <tr v-for="item in winproductInfo" :key="item.id">
                            <td>{{item.id}}</td>
                            <td>{{item.winProject}}</td>
                            <td>{{item.winPrize}}</td>
                            <td>{{item.winType}}</td>
                            <td>{{item.winDepartment}}</td>
                            <td>{{item.remarks}}</td>
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
        <el-dialog title="近三年获奖产品" :visible.sync="addFormVisible">
            <form class="form">
                <div class="input-container">
                    <label for="winProject">获奖产品:</label>
                    <input type="text" name="winProject" v-model="form.winProject">
                </div>

                <div class="input-container">
                    <label for="winPrize">奖项及等级:</label>
                    <input type="text" name="winPrize" v-model="form.winPrize">
                </div>

                <div class="input-container">
                    <label for="type">奖级类别:</label>
                    <select name="type" id="type" v-model="form.winType">
                        <option value="省级">省级</option>
                        <option value="国家级">国家级</option>
                    </select>
                </div>

                <div class="input-container">
                    <label for="winDepartment">颁奖部门:</label>
                    <input type="text" name="winDepartment" v-model="form.winDepartment">
                </div>

                <div class="input-container">
                    <label for="remarks">备注:</label>
                    <input type="text" name="changePmoneyroject" v-model="form.remarks">
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
            winproductInfo: [],
            addFormVisible: false,
            form: {
                winProject: '',
                winPrize: '',
                winType: '',
                winDepartment: '',
                remarks: ''
            },
            hasNoData: true,
            isInsert: true,
            isUpdate: false
        }
    },
    components: {
        Datepicker
    },
    created() {
        this.getWinproductInfo()
    },
    methods: {
        // 获取信息
         getWinproductInfo() {
            let enterid = localStorage.getItem('id')
            this.$http.get(`winproduct/find.action?user_id=${enterid}`).then(
                res => {
                    console.log(res.data)
                    if( res.data.responseDesc == '查询成功' ) {
                        this.winproductInfo = res.data.responseCode
                    }else {
                    }
                }
            ).then( () => {
                // 判断是否有数据
                if( this.winproductInfo.length ) {
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
                url: 'winproduct/insert.action',
                method: 'post',
                data: formdata
            }).then( res => {
                if( res.data.responseCode == 1 ) {
                    // 弹出消息框
                    this.$message( {
                        message: '增加成功',
                        type: 'success'
                    } )
                    this.getWinproductInfo()  // 重新获取数据
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
                url: `winproduct/delete.action?id=${id}`,
                method: 'get'
            }).then( res => {
                if( res.data.responseCode == 0 ) {
                    // 弹出消息框
                    this.$message( {
                        message: '删除成功',
                        type: 'success'
                    } )
                    this.getWinproductInfo()
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
                url: 'winproduct/update.action',
                method: 'post',
                data: formData
            }).then( res => {
                if( res.data.responseCode == 1 ) {
                    // 弹出消息框
                    this.$message( {
                        message: '修改成功',
                        type: 'success'
                    } )
                    this.getWinproductInfo()  // 重新获取数据
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

