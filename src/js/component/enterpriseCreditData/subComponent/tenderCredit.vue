<template>
    <div class="enterprise-apply">
        <div class="data-container">
            <h4 class="title">招标投标信用记录</h4>
            <div class="table-container">
                <el-button type="primary" id="add" @click="addItem">新增</el-button>
                <table border="1">
                <thead>
                    <tr>
                        <th>编号</th>
                        <th>主要事实</th>
                        <th>类型</th>
                        <th>处罚部门</th>
                        <th>认定时间</th>
                        <th>主要后果</th>
                        <th>严重程度</th>
                        <th>操作</th>
                    </tr>
                </thead>
                    <tbody>
                        <tr v-if="hasNoData">
                            <td colspan="9">暂无数据</td>
                        </tr>
                        <tr v-for="item in tenderInfo" :key="item.id">
                            <td>{{item.id}}</td>
                            <td>{{item.mainFacts}}</td>
                            <td>{{item.type}}</td>
                            <td>{{item.deparName}}</td>
                            <td>{{item.date}}</td>
                            <td>{{item.consequence}}</td>
                            <td>{{item.severity}}</td>
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
        <el-dialog title="信用记录" :visible.sync="addFormVisible">
            <form class="form">
                <div class="input-container">
                    <label for="mainFacts">主要事实:</label>
                    <input type="text" name="mainFacts" v-model="form.mainFacts">
                </div>

                <div class="input-container">
                    <label for="type">类型:</label>
                    <input type="text" name="type" v-model="form.type">
                </div>

                <div class="input-container">
                    <label for="deparName">处罚部门:</label>
                    <input type="text" name="deparName" v-model="form.deparName">
                </div>

                <div class="input-container">
                    <label for="date">认定时间:</label>                    
                    <Datepicker class="datepicker" id="date" v-model="form.date" language="zh" format="yyyy年MM月dd日"></Datepicker>

                </div>

                <div class="input-container">
                    <label for="consequence">主要后果:</label>
                    <input type="text" name="consequence" v-model="form.consequence">
                </div>

                <div class="input-container">
                    <label for="severity">严重程度:</label>
                    <input type="text" name="v" v-model="form.severity">
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
            tenderInfo: [],
            hasNoData: true,
            form: {
                mainFacts: '',
                type: '',
                deparName: '',
                date: '',
                consequence: '',
                severity: ''            
            },
            addFormVisible: false,
            isInsert: true,
            isUpdate: false
        }
    },
    components: {
        Datepicker
    },
    created() {
        this.getTenderInfo()
    },
    methods: {
        // 获取信息
         getTenderInfo() {
            let enterid = localStorage.getItem('id')
            this.$http.get(`tender/find.action?user_id=${enterid}`).then(
                res => {
                    if( res.data.responseDesc == '查询成功' ) {
                        this.tenderInfo = res.data.responseCode
                    }else {
                    }
                }
            ).then( () => {
                // 判断是否有数据
                if( this.tenderInfo.length ) {
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
                url: 'tender/insert.action',
                method: 'post',
                data: formdata
            }).then( res => {
                if( res.data.responseCode == 1 ) {
                    // 弹出消息框
                    this.$message( {
                        message: '增加成功',
                        type: 'success'
                    } )
                    this.getTenderInfo()  // 重新获取数据
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
                url: `tender/delete.action?id=${id}`,
                method: 'get'
            }).then( res => {
                if( res.data.responseCode == 0 ) {
                    // 弹出消息框
                    this.$message( {
                        message: '删除成功',
                        type: 'success'
                    } )
                    this.getTenderInfo()
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
                url: 'tender/update.action',
                method: 'post',
                data: formData
            }).then( res => {
                if( res.data.responseCode == 1 ) {
                    // 弹出消息框
                    this.$message( {
                        message: '修改成功',
                        type: 'success'
                    } )
                    this.getTenderInfo()  // 重新获取数据
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
@import "../../../../css/dialog.scss"
</style>

