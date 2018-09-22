<template>
    <div class="enterprise-apply">
        <div class="data-container">
        <h4 class="title">股东组成</h4>
        <div class="table-container">
            <el-button type="primary" id="add" @click="addItem">新增</el-button>
            <table border="1">
                <thead>
                    <tr>
                        <th>编号</th>
                        <th>股东名称或姓名</th>
                        <th>投资金额(万元)</th>
                        <th>币种</th>
                        <th>投资比例</th>
                        <th>股东类型</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-if="hasNoData">
                            <td colspan="7">暂无数据</td>
                    </tr>
                    <tr v-for="item in holderInfo" :key="item.id">
                        <td>{{item.id}}</td>
                        <td>{{item.holderName}}</td>
                        <td>{{item.holderMoney}}</td>
                        <td>{{item.currencyType}}</td>
                        <td>{{item.proportion}}</td>
                        <td>{{item.holderType}}</td>
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
                    <label for="holderName">股东名称或姓名:</label>
                    <input type="text" name="holderName" v-model="form.holderName">
                </div>

                <div class="input-container">
                    <label for="holderMoney">投资金额(万元):</label>
                    <input type="text" name="holderMoney" v-model="form.holderMoney">
                </div>

                <div class="input-container">
                    <label for="currencyType">币种:</label>
                    <input type="text" name="currencyType" v-model="form.currencyType">
                </div>

                <div class="input-container">
                    <label for="proportion">投资比例:</label>
                    <input type="text" name="proportion" id="proportion" v-model="form.proportion">
                </div>

                <div class="input-container">
                    <label for="holderType">股东类型:</label>
                    <select v-model="form.holderType">
                        <option value="公开市场挂牌交易企业">公开市场挂牌交易企业</option>
                        <option value="国有企业">国有企业</option>
                        <option value="国有控股企业（国有控股企业≥20%）">国有控股企业（国有控股企业≥20%）</option>
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
export default {
    data() {
        return {
            holderInfo: [],
            hasNoData: false,
            addFormVisible:false,
            form: {
                holderName: '',
                holderMoney: '',
                proportion: '',
                holderType: '',
                currencyType: ''
            },
            isUpdate: false,
            isInsert: true
        }
    },
    components: {
    },
    created() {
        this.getOwnershipStructure()
    },
    methods: {
        getOwnershipStructure() {
            let id = localStorage.getItem('id')
            this.$http.get(`holder/find.action?user_id=${id}`)
            .then( res => {
                    if( res.data.responseDesc == '查询成功' ) {
                        this.holderInfo = res.data.responseCode
                    } else {
                    }
                }
            ).then( () => {
                // 判断是否有数据
                if( this.holderInfo.length ) {
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
                url: 'holder/insert.action',
                method: 'post',
                data: formdata
            }).then( res => {
                if( res.data.responseCode == 1 ) {
                    console.log(res.data)
                    // 弹出消息框
                    this.$message( {
                        message: '增加成功',
                        type: 'success'
                    } )
                    this.getOwnershipStructure()  // 重新获取数据
                }else {
                    console.log(res.data)
                }
            } ).catch( err => {
                if( err ) {
                    console.log(err)
                    this.hasNoData = true
                    this.$message( {
                        message: '添加失败',
                        type: 'error'
                    } )
                }
            } )
            this.addFormVisible = false //关闭 dialog对话框
        },

        // 删除
        deleteItem(id) {
            this.$http({
                url: `holder/delete.action?id=${id}`,
                method: 'get'
            }).then( res => {
                if( res.data.responseCode == 0 ) {
                    // 弹出消息框
                    this.$message( {
                        message: '删除成功',
                        type: 'success'
                    } )
                    this.getOwnershipStructure()
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
                url: 'holder/update.action',
                method: 'post',
                data: formData
            }).then( res => {
                if( res.data.responseCode == 1 ) {
                    // 弹出消息框
                    this.$message( {
                        message: '修改成功',
                        type: 'success'
                    } )
                    this.getOwnershipStructure()  // 重新获取数据
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

