<template>
    <div class="enterprise-apply">

        <div class="data-container">
            <h4 class="title">自有机械设备</h4>
            <div class="table-container">
                <el-button type="primary" id="add" @click="addItem">新增</el-button>
                <table border="1">
                <thead>
                    <tr>
                        <th>编号</th>
                        <th>自有机械设备名称</th>
                        <th>型号</th>
                        <th>产地</th>
                        <th>数量（台）</th>
                        <th>原值合计（万元）</th>
                        <th>净值合计（万元）</th>
                        <th>操作</th>
                    </tr>
                </thead>
                    <tbody>
                        <tr v-if="hasNoData">
                            <td colspan="8">暂无数据</td>
                        </tr>
                        <tr v-for="item in mechanicalInfo" :key="item.id">
                            <td>{{item.id}}</td>
                            <td>{{item.mechanicalName}}</td>
                            <td>{{item.mechanicalType}}</td>
                            <td>{{item.mechanicalPlace}}</td>
                            <td>{{item.number}}</td>
                            <td>{{item.originalValue}}</td>
                            <td>{{item.netWorth}}</td>
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
        <el-dialog title="自有机械设备" :visible.sync="addFormVisible">
            <form class="form">
                <div class="input-container">
                    <label for="mechanicalName">自有机械设备名称:</label>
                    <input type="text" name="mechanicalName" v-model="form.mechanicalName">
                </div>

                <div class="input-container">
                    <label for="mechanicalType">型号:</label>
                    <input type="text" name="mechanicalType" v-model="form.mechanicalType">
                </div>

                <div class="input-container">
                    <label for="mechanicalPlace">产地:</label>
                    <input type="text" name="mechanicalPlace" v-model="form.mechanicalPlace">                    
                </div>

                <div class="input-container">
                    <label for="number">数量（台）:</label>
                    <input type="text" name="number" v-model="form.number">
                </div>

                <div class="input-container">
                    <label for="originalValue">原值合计（万元）:</label>
                    <input type="text" name="originalValue" v-model="form.originalValue">
                </div>

                <div class="input-container">
                    <label for="netWorth">净值合计（万元）:</label>
                    <input type="text" name="netWorth" v-model="form.netWorth">
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
            mechanicalInfo:[],
            hasNoData: true,
            addFormVisible: false,
            form: {

            },
            isInsert: true,
            isUpdate: false
        }
    },
    components: {
    },
    created() {
        this.getmechanicalInfo()
    },
    methods: {
        // 获取信息
         getmechanicalInfo() {
            let enterid = localStorage.getItem('id')
            this.$http.get(`mechanical/find.action?user_id=${enterid}`).then(
                res => {
                    if( res.data.responseDesc == '查询成功' ) {
                        this.mechanicalInfo = res.data.responseCode
                    }else {
                    }
                }
            ).then( () => {
                // 判断是否有数据
                if( this.mechanicalInfo.length ) {
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
                url: 'mechanical/insert.action',
                method: 'post',
                data: formdata
            }).then( res => {
                if( res.data.responseCode == 1 ) {
                    // 弹出消息框
                    this.$message( {
                        message: '增加成功',
                        type: 'success'
                    } )
                    this.getmechanicalInfo()  // 重新获取数据
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
                url: `mechanical/delete.action?id=${id}`,
                method: 'get'
            }).then( res => {
                if( res.data.responseCode == 0 ) {
                    // 弹出消息框
                    this.$message( {
                        message: '删除成功',
                        type: 'success'
                    } )
                    this.getmechanicalInfo()
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
                url: 'mechanical/update.action',
                method: 'post',
                data: formData
            }).then( res => {
                if( res.data.responseCode == 1 ) {
                    // 弹出消息框
                    this.$message( {
                        message: '修改成功',
                        type: 'success'
                    } )
                    this.getmechanicalInfo()  // 重新获取数据
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

