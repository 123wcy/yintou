<template>
    <div class="enterprise-apply">
        <div class="data-container">
            <h4 class="title">高管人员信息</h4>
            <div class="table-container"  style="overflow:auto">
                <el-button type="primary" id="add" @click="addItem">新增</el-button>
                <table border="1">
                <thead>
                    <tr>
                        <th>编号</th>
                        <th>职务名称</th>
                        <th>姓名</th>
                        <th>学历</th>
                        <th>年龄</th>
                        <th>职称</th>
                        <th>职称等级</th>
                        <th>工作简历</th>
                        <th>从业年限</th>
                        <th>近三年是否变动？</th>
                        <th>个人信用报告</th>
                        <th>逾期次数</th>
                        <th>90天以上逾期次数</th>
                        <th>操作</th>
                    </tr>
                </thead>
                    <tbody>
                        <tr v-if="hasNoData">
                            <td colspan="13">暂无数据</td>
                        </tr>
                        <tr v-for="item in executiveInfo" :key="item.id">
                            <td>{{item.id}}</td>
                            <td>{{item.postName}}</td>
                            <td>{{item.name}}</td>
                            <td>{{item.education}}</td>
                            <td>{{item.age}}</td>
                            <td>{{item.title}}</td>
                            <td>{{item.rankTitle}}</td>
                            <td style="text-align:left">{{item.workResume}}</td>
                            <td>{{item.workAge}}</td>
                            <td>{{item.workChange == '0'? '无变动':(item.workChange == '1'?'变动一次':'变动两次及以上')}}</td>
                            <td>{{item.creditReport}}</td>
                            <td>有{{item.overdueNumber}}条逾期记录</td>
                            <td>有{{item.ninetyNumber}}条90天以上逾期记录</td>
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
        <el-dialog title="高管人员信息" :visible.sync="addFormVisible">
            <form class="form">
                <div class="input-container">
                    <label for="postName">职务名称:</label>
                    <input type="text" name="postName" v-model="form.postName">
                </div>

                <div class="input-container">
                    <label for="name">姓名:</label>
                    <input type="text" name="name" v-model="form.name">
                </div>

                <div class="input-container">
                    <label for="education">学历:</label>
                    <select v-model="form.education">
                        <option value="硕士及以上">硕士及以上</option>
                        <option value="本科">本科</option>
                        <option value="专科">专科</option>
                        <option value="专科以下">专科以下</option>
                    </select>
                </div>

                <div class="input-container">
                    <label for="age">年龄:</label>
                    <input type="text" name="age" v-model="form.age">
                </div>

                <div class="input-container">
                    <label for="title">职称:</label>
                    <select v-model="form.title">
                        <option value="中级以上">中级以上</option>
                        <option value="中级以下">中级以下</option>
                    </select>
                </div>

                <div class="input-container">
                    <label for="rankTitle">职称等级:</label>
                    <input type="text" name="rankTitle" v-model="form.rankTitle">
                </div>

                <div class="input-container">
                    <label for="workResume">工作简历:</label>
                    <input type="text" name="workResume" v-model="form.workResume">
                </div>

                <div class="input-container">
                    <label for="workAge">从业年限:</label>
                    <input type="text" name="workAge" v-model="form.workAge">
                </div>

                <div class="input-container">
                    <label for="workChange">近三年变动次数？:</label>
                    <select v-model="form.workChange">
                        <option value="0">无变动</option>
                        <option value="1">变动一次</option>
                        <option value="2">变动两次及以上</option>
                    </select>
                </div>
                <div class="input-container">
                    <label for="overdueNumber">逾期次数:</label>
                    <select v-model="form.overdueNumber">
                        <option value="0">有0条逾期记录</option>
                        <option value="1">有1条逾期记录</option>
                        <option value="2">有2条逾期记录</option>
                        <option value="3">有3条逾期记录</option>
                        <option value="4">有4条逾期记录</option>
                        <option value="5">有5条逾期记录</option>
                        <option value="6">有6条逾期记录</option>
                        <option value="7">有7条逾期记录</option>
                        <option value="8">有8条及以上逾期记录</option>
                    </select>
                </div>
                <div class="input-container">
                    <label for="ninetyNumber">90天以上逾期次数:</label>
                    <select v-model="form.ninetyNumber">
                        <option value="0">有0条90天以上逾期记录</option>                        
                        <option value="1">有1条90天以上逾期记录</option>
                        <option value="2">有2条90天以上逾期记录</option>
                        <option value="3">有3条90天以上逾期记录</option>
                        <option value="4">有4条90天以上逾期记录</option>
                    </select>
                </div>

                <div class="input-container">
                    <label for="creditReport">个人信用报告:</label>
                    <input type="number" min="0" name="creditReport" v-model="form.creditReport">
                </div>

                <div class="input-container">
                    <label for="overdueNumber">信用记录:</label>
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
            executiveInfo: [],
            hasNoData: true,
            addFormVisible: false,
            form: {
                name: '',
                postName: '',
                age: '',
                education: '',
                title: '',
                rankTitle: '',
                workResume: '',
                workAge: '',
                workChange: '',
                creditReport: '',
                overdueNumber: ''
            },
            isInsert: true,
            isUpdate: false
        }
    },
    components: {
    },
    created() {
        this.getExecutive()
    },
    methods: {
        // 获取信息
         getExecutive() {
            let enterid = localStorage.getItem('id')
            this.$http.get(`executive/find.action?user_id=${enterid}`).then(
                res => {
                    if( res.data.responseDesc == '查询成功' ) {
                        this.executiveInfo = res.data.responseCode
                    }else {
                    }
                }
            ).then( () => {
                // 判断是否有数据
                if( this.executiveInfo.length ) {
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
                url: 'executive/insert.action',
                method: 'post',
                data: formdata
            }).then( res => {
                if( res.data.responseCode == 1 ) {
                    // 弹出消息框
                    this.$message( {
                        message: '增加成功',
                        type: 'success'
                    } )
                    this.getExecutive()  // 重新获取数据
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
                url: `executive/delete.action?id=${id}`,
                method: 'get'
            }).then( res => {
                if( res.data.responseCode == 0 ) {
                    // 弹出消息框
                    this.$message( {
                        message: '删除成功',
                        type: 'success'
                    } )
                    this.getExecutive()
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
                url: 'executive/update.action',
                method: 'post',
                data: formData
            }).then( res => {
                if( res.data.responseCode == 1 ) {
                    // 弹出消息框
                    this.$message( {
                        message: '修改成功',
                        type: 'success'
                    } )
                    this.getExecutive()  // 重新获取数据
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

