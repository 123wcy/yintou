<template>
    <div class="enterprise-apply">

        <div class="data-container">
            <h4 class="title">资质信息</h4>
            <div class="table-container">
                <el-button type="primary" id="add" @click="addItem">新增</el-button>
                <table border="1">
                <thead>
                    <tr>
                        <th>编号</th>
                        <th>资质名称</th>
                        <th>资质类型</th>
                        <th>资质等级</th>
                        <th>证书编号或文号</th>
                        <th>资质证发证机关</th>
                        <th>资质证有效期起始日期</th>
                        <th>资质证有效期终止日期</th>
                        <th>操作</th>
                    </tr>
                </thead>
                    <tbody>
                        <tr v-if="hasNoData">
                            <td colspan="9">暂无数据</td>
                        </tr>
                        <tr v-for="item in qualifications" :key="item.id">
                            <td>{{item.id}}</td>
                            <td>{{item.qualificationsName}}</td>
                            <td>{{item.qualificationsType}}</td>
                            <td>{{item.qualificationsGrade}}</td>
                            <td>{{item.qualificationsNumber}}</td>
                            <td>{{item.qualificationsOffice}}</td>
                            <td>{{item.firstDate | dateformat}}</td>
                            <td>{{item.endDate | dateformat}}</td>
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
        <el-dialog title="资质信息" :visible.sync="addFormVisible">
            <form class="form">
                <div class="input-container">
                    <label for="qualificationsName">资质名称:</label>
                    <input type="text" name="qualificationsName" v-model="form.qualificationsName">
                </div>

                <div class="input-container"  v-if="enterType == 'Construction'">
                    <label for="qualificationsType">资质类型:</label>
                    <select v-model="form.qualificationsType">
                        <option value="主项资质">主项资质</option>
                        <option value="增项资质">增项资质</option>
                    </select>
                </div>

                <div class="input-container"  v-if="enterType == 'Services'">
                    <label for="qualificationsType">资质类型:</label>
                    <select v-model="form.qualificationsType">
                        <option value="主要业务资质">主要业务资质</option>
                        <option value="其他资质">其他资质</option>
                    </select>
                </div>

                <div class="input-container">
                    <label for="qualificationsGrade">资质等级:</label>
                    <input type="text" name="qualificationsGrade" id="qualificationsGrade" v-model="form.qualificationsGrade">
                </div>

                <div class="input-container">
                    <label for="qualificationsNumber">证书编号或文号:</label>
                    <input type="text" name="qualificationsNumber" v-model="form.qualificationsNumber">
                </div>

                <div class="input-container">
                    <label for="qualificationsOffice">资质证发证机关:</label>
                    <input type="text" name="qualificationsOffice" v-model="form.qualificationsOffice">
                </div>

                <div class="input-container">
                    <label for="firstDate">资质证有效期起始日期:</label>
                    <Datepicker class="datepicker" id="firstDate" v-model="form.firstDate" language="zh" format="yyyy年MM月dd日"></Datepicker>
                </div>

                <div class="input-container">
                    <label for="endDate">资质证有效期终止日期:</label>
                    <Datepicker class="datepicker" id="endDate" v-model="form.endDate" language="zh" format="yyyy年MM月dd日"></Datepicker>

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
            qualifications: [],
            hasNoData: true,
            form : {
                qualificationsName: '',
                qualificationsType: '',
                qualificationsGrade: '',
                qualificationsNumber: '',
                qualificationsOffice: '',
                firstDate: '',
                endDate: ''
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
        this.getQualifications()
    },
    computed: {
        enterType() {
            return this.$store.store.state.enterType 
        }
    },
    methods: {
        // 获取信息
         getQualifications() {
            let enterid = localStorage.getItem('id')
            this.$http.get(`qualifications/find.action?user_id=${enterid}`).then(
                res => {
                    console.log(res.data)
                    if( res.data.responseDesc == '查询成功') {
                        this.qualifications = res.data.responseCode
                    }else {
                        return 
                    }
                }
            ).then( () => {
                // 判断是否有数据
                if( this.qualifications.length ) {
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
                url: 'qualifications/insert.action',
                method: 'post',
                data: formdata
            }).then( res => {
                if( res.data.responseCode == 1 ) {
                    // 弹出消息框
                    this.$message( {
                        message: '增加成功',
                        type: 'success'
                    } )
                    this.getQualifications()  // 重新获取数据
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
                url: `qualifications/delete.action?id=${id}`,
                method: 'get'
            }).then( res => {
                if( res.data.responseCode == 0 ) {
                    // 弹出消息框
                    this.$message( {
                        message: '删除成功',
                        type: 'success'
                    } )
                    this.getQualifications()
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
                url: 'qualifications/update.action',
                method: 'post',
                data: formData
            }).then( res => {
                if( res.data.responseCode == 1 ) {
                    // 弹出消息框
                    this.$message( {
                        message: '修改成功',
                        type: 'success'
                    } )
                    this.getQualifications()  // 重新获取数据
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

