<template>
    <div class="enterprise-apply">
        <div class="data-container">
            <h4 class="title">其他项目中标履约情况</h4>
            <div class="table-container">
                <el-button type="primary" id="add" @click="addItem">新增</el-button>
                <table border="1">
                <thead>
                    <tr>
                        <th>编号</th>
                        <th>中标项目</th>
                        <th>业主方</th>
                        <th>业主方联系人</th>
                        <th>业主方联系电话</th>
                        <th>中标时间</th>
                        <th>中标金额（元）</th>
                        <th>履约情况是否良好</th>
                        <th>调查时间</th>
                        <th>调查方式</th>
                        <th>调查结果</th>
                        <th>有无完工证明</th>
                        <th>操作</th>
                    </tr>
                </thead>
                    <tbody>
                        <tr v-if="hasNoData">
                            <td colspan="13">暂无数据</td>
                        </tr>
                        <tr v-for="item in otherInvestInfo" :key="item.id">
                            <td>{{item.id}}</td>
                            <td>{{item.winningBid}}</td>
                            <td>{{item.ownerSide}}</td>
                            <td>{{item.ownerLink}}</td>
                            <td>{{item.ownerTelephone}}</td>
                            <td>{{item.bidTime}}</td>
                            <td>{{item.bidMoney}}</td>
                            <td>{{item.bidGood}}</td>
                            <td>{{item.investigationTime}}</td>
                            <td>{{item.investigationWay}}</td>
                            <td>{{item.investigationResult}}</td>
                            <td>{{item.letter}}</td>
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
                    <label for="winningBid">中标项目:</label>
                    <input type="text" name="winningBid" v-model="form.winningBid">
                </div>

                <div class="input-container">
                    <label for="ownerSide">业主方:</label>
                    <input type="text" name="ownerSide" v-model="form.ownerSide">
                </div>

                <div class="input-container">
                    <label for="ownerLink">业主方联系人:</label>
                    <input type="text" name="ownerLink" v-model="form.ownerLink">
                </div>

                <div class="input-container">
                    <label for="ownerTelephone">业主方联系电话:</label>
                    <input type="text" name="ownerTelephone" v-model="form.ownerTelephone">
                </div>

                <div class="input-container">
                    <label for="bidTime">中标时间:</label>                    
                    <Datepicker class="datepicker" id="bidTime" v-model="form.bidTime" language="zh" format="yyyy年MM月dd日"></Datepicker>
                </div>

                <div class="input-container">
                    <label for="bidMoney">中标金额（元）:</label>
                    <input type="text" name="bidMoney" v-model="form.bidMoney">
                </div>

                <div class="input-container">
                    <label for="bidGood">履约情况是否良好:</label>
                    <select v-model="form.bidGood">
                        <option value="1">是</option>
                        <option value="0">否</option>
                    </select>
                </div>

                <div class="input-container">
                    <label for="investigationTime">调查时间:</label>                    
                    <Datepicker class="datepicker" id="investigationTime" v-model="form.investigationTime" language="zh" format="yyyy年MM月dd日"></Datepicker>
                </div>

                <div class="input-container">
                    <label for="investigationWay">调查方式:</label>
                    <input type="text" name="investigationWay" v-model="form.investigationWay">
                </div>

                <div class="input-container">
                    <label for="investigationResult">调查结果:</label>
                    <input type="text" name="investigationResult" v-model="form.investigationResult">
                </div>

                <div class="input-container">
                    <label for="letter">有无完工证明:</label>
                    <select name="letter" id="letter" v-model="form.letter">
                        <option value="1">有完工证明</option>
                        <option value="0">无完工证明有履约情况</option>
                        <option value="2">都没有</option>
                    </select>
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
            otherInvestInfo: [],
            hasNoData: true,
            form: {
                winningBid: '',
                ownerSide: '',
                ownerLink: '',
                ownerTelephone: '',
                bidTime: '',
                bidMoney: '',
                bidGood: '',
                investigationTime: '',
                investigationWay: '',
                investigationResult: '',
                letter: ''         
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
        this.getOtherInvestInfo()
    },
    methods: {
        // 获取信息
         getOtherInvestInfo() {
            let enterid = localStorage.getItem('id')
            this.$http.get(`otherinvest/find.action?user_id=${enterid}`).then(
                res => {
                    if( res.data.responseDesc == '查询成功' ) {
                        console.log(res.data)
                        this.otherInvestInfo = res.data.responseCode
                    }else {
                    }
                }
            ).then( () => {
                // 判断是否有数据
                if( this.otherInvestInfo.length ) {
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
                url: 'otherinvest/insert.action',
                method: 'post',
                data: formdata
            }).then( res => {
                if( res.data.responseCode == 1 ) {
                    // 弹出消息框
                    this.$message( {
                        message: '增加成功',
                        type: 'success'
                    } )
                    this.getOtherInvestInfo()  // 重新获取数据
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
                url: `otherinvest/delete.action?id=${id}`,
                method: 'get'
            }).then( res => {
                if( res.data.responseCode == 0 ) {
                    // 弹出消息框
                    this.$message( {
                        message: '删除成功',
                        type: 'success'
                    } )
                    this.getOtherInvestInfo()
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
                url: 'otherinvest/update.action',
                method: 'post',
                data: formData
            }).then( res => {
                if( res.data.responseCode == 1 ) {
                    // 弹出消息框
                    this.$message( {
                        message: '修改成功',
                        type: 'success'
                    } )
                    this.getOtherInvestInfo()  // 重新获取数据
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

