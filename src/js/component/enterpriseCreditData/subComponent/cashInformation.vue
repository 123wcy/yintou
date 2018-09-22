<template>
    <div class="enterprise-apply">
        <div class="data-container">
            <h4 class="title">现金流量信息</h4>
            <div class="table-container">
                <el-button type="primary" id="add" @click="addItem" style="margin-left: 42px;">新增</el-button>
                <div style="overflow-x:auto;padding:0 20px;">
                    <table border="1" style="width:95%">
                        <thead>
                            <tr>
                                <th>年度</th>
                                <th v-for="item in cashInformation" :key="item.id">{{item.yeat}}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>销售商品、提供劳务收到的现金</td>
                                <td v-for="item in cashInformation" :key="item.id">{{item.cashXslw}}</td>
                            </tr>
                            <tr>
                                <td>经营活动产生的现金流量净额</td>
                                <td v-for="item in cashInformation" :key="item.id">{{item.cashJyhd}}</td>
                            </tr>
                            <tr>
                                <td>投资活动产生的现金流量净额</td>
                                <td v-for="item in cashInformation" :key="item.id">{{item.cashTzhd}}</td>
                            </tr>
                            <tr>
                                <td>筹资活动产生的现金流量净额</td>
                                <td v-for="item in cashInformation" :key="item.id">{{item.cashCzhd}}</td>
                            </tr>
                            <tr>
                                <td>现金及现金等价物净增加额</td>
                                <td v-for="item in cashInformation" :key="item.id">{{item.cashXjdj}}</td>
                            </tr>
                            <tr>
                                <td>操作</td>
                                <td v-for="item in cashInformation" :key="item.id">
                                    <el-button type="primary" plain @click="updateItem(item)">修改</el-button>
                                    <el-button type="primary" plain @click="deleteItem(item.id)">删除</el-button>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>

            </div>
        </div>

        <!-- 新增 dialog弹出框 -->
        <el-dialog title="现金流量信息 单位金额（元）" :visible.sync="addFormVisible">
            <form class="form">
                <div class="input-container">
                    <label for="yeat">年度:</label>
                    <select v-model="form.yeat">
                        <option value="2014">2014</option>
                        <option value="2015">2015</option>
                        <option value="2016">2016</option>
                        <option value="2017">2017</option>
                    </select>
                </div>

                <div class="input-container">
                    <label for="cashXslw">销售商品、提供劳务收到的现金:</label>
                    <input type="text" name="cashXslw" v-model="form.cashXslw">
                </div>

                <div class="input-container">
                    <label for="cashJyhd">经营活动产生的现金流量净额:</label>
                    <input type="text" name="cashJyhd" v-model="form.cashJyhd">
                </div>

                <div class="input-container">
                    <label for="cashTzhd">投资活动产生的现金流量净额:</label>
                    <input type="text" name="cashTzhd" v-model="form.cashTzhd">
                </div>

                <div class="input-container">
                    <label for="cashCzhd">筹资活动产生的现金流量净额:</label>
                    <input type="text" name="cashCzhd" v-model="form.cashCzhd">
                </div>

                <div class="input-container">
                    <label for="cashXjdj">现金及现金等价物净增加额:</label>
                    <input type="text" name="cashXjdj" v-model="form.cashXjdj">
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
            cashInformation: [],
            form: { 
                yeat: '',
                cashXslw: '',
                cashJyhd: '',
                cashTzhd: '',
                cashCzhd: '',
                cashXjdj: ''
            },
            addFormVisible: false,
            formLabelWidth: '120px',
            hasNoData: false,
            isUpdate: false,
            isInsert: true
        }
    },
    components: {
    },
    created() {
        this.getCashInformation()
    },
    methods: {
        // 获取信息
         getCashInformation() {
            let enterid = localStorage.getItem('id')
            this.$http.get(`cashinformation/find.action?user_id=${enterid}`).then(
                res => {
                    console.log(res.data)
                    if( res.data.responseDesc == '查询成功' ) {
                        this.cashInformation = res.data.responseCode
                    }else {

                    }
                }
            ).then( () => {
                // 判断是否有数据
                if( this.cashInformation.length ) {
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
                url: 'cashinformation/insert.action',
                method: 'post',
                data: formdata
            }).then( res => {
                if( res.data.responseCode == 1 ) {
                    // 弹出消息框
                    this.$message( {
                        message: '增加成功',
                        type: 'success'
                    } )
                    this.getCashInformation()  // 重新获取数据
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
                url: `cashinformation/delete.action?id=${id}`,
                method: 'get'
            }).then( res => {
                if( res.data.responseCode == 0 ) {
                    // 弹出消息框
                    this.$message( {
                        message: '删除成功',
                        type: 'success'
                    } )
                    this.getCashInformation()
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
                url: 'cashinformation/update.action',
                method: 'post',
                data: formData
            }).then( res => {
                if( res.data.responseCode == 1 ) {
                    // 弹出消息框
                    this.$message( {
                        message: '修改成功',
                        type: 'success'
                    } )
                    this.getCashInformation()  // 重新获取数据
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
#ldzc {
    padding: 20px 0 10px 23px;
    font-size: 14px;
    font-weight: 700;
}
</style>

