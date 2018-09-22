<template>
    <div class="enterprise-apply">
        <div class="data-container">
            <h4 class="title">损益信息</h4>
            <div class="table-container">
                <el-button type="primary" id="add" @click="addItem" style="margin-left: 42px;">新增</el-button>
                <div style="overflow-x:auto;padding:0 20px;">
                    <table border="1" style="width:95%">
                        <thead>
                            <tr>
                                <th>年份</th>
                                <th v-for="item in lossInformation" :key="item.id">{{item.year}}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="font-weight:700;">营业收入</td>
                                <td v-for="item in lossInformation" :key="item.id">{{item.lossYysr}}</td>
                            </tr>
                            <tr>
                                <td>其它业务收入</td>
                                <td v-for="item in lossInformation" :key="item.id">{{item.lossQtywsr}}</td>
                            </tr>
                            <tr>
                                <td>减：营业成本</td>
                                <td v-for="item in lossInformation" :key="item.id">{{item.lossYycb}}</td>
                            </tr>
                            <tr>
                                <td>其它业务成本</td>
                                <td v-for="item in lossInformation" :key="item.id">{{item.lossQtywcb}}</td>
                            </tr>
                            <tr>
                                <td>营业税金及附加</td>
                                <td v-for="item in lossInformation" :key="item.id">{{item.lossYysj}}</td>
                            </tr>
                            <tr>
                                <td>销售费用</td>
                                <td v-for="item in lossInformation" :key="item.id">{{item.lossXsfy}}</td>
                            </tr>
                            <tr>
                                <td>管理费用</td>
                                <td v-for="item in lossInformation" :key="item.id">{{item.lossGlfy}}</td>
                            </tr>
                            <tr>
                                <td>财务费用</td>
                                <td v-for="item in lossInformation" :key="item.id">{{item.lossCwfy}}</td>
                            </tr>
                            <tr>
                                <td>利息支出</td>
                                <td v-for="item in lossInformation" :key="item.id">{{item.lossLxzc}}</td>
                            </tr>
                            <tr>
                                <td>资产减值损失</td>
                                <td v-for="item in lossInformation" :key="item.id">{{item.lossZcjzss}}</td>
                            </tr>
                            <tr>
                                <td style="font-weight:700;">营业利润</td>
                                <td v-for="item in lossInformation" :key="item.id"></td>
                            </tr>
                            <tr>
                                <td>加：投资收益</td>
                                <td v-for="item in lossInformation" :key="item.id">{{item.lossTzsy}}</td>
                            </tr>
                            <tr>
                                <td>补贴收入</td>
                                <td v-for="item in lossInformation" :key="item.id">{{item.lossBtsr}}</td>
                            </tr>
                            <tr>
                                <td>营业外收入</td>
                                <td v-for="item in lossInformation" :key="item.id">{{item.lossYywsr}}</td>
                            </tr>
                            <tr>
                                <td>减：营业外支出</td>
                                <td v-for="item in lossInformation" :key="item.id">{{item.lossYywzc}}</td>
                            </tr>
                            <tr>
                                <td>加：以前年度损益调整</td>
                                <td v-for="item in lossInformation" :key="item.id">{{item.lossYqndsy}}</td>
                            </tr>
                            <tr>
                                <td style="font-weight:700;">利润总额</td>
                                <td v-for="item in lossInformation" :key="item.id"></td>
                            </tr>
                            <tr>
                                <td>减：所得税费用</td>
                                <td v-for="item in lossInformation" :key="item.id">{{item.lossSdsfy}}</td>
                            </tr>
                            <tr>
                                <td style="font-weight:700;">净利润</td>
                                <td v-for="item in lossInformation" :key="item.id"></td>
                            </tr>
                            <tr>
                                <td>操作</td>
                                <td v-for="item in lossInformation" :key="item.id">
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
        <el-dialog title="损益信息 单位金额（元）" :visible.sync="addFormVisible">
            <form class="form">
                <div class="input-container">
                    <label for="year">年度:</label>
                    <select v-model="form.year">
                        <option value="2014">2014</option>
                        <option value="2015">2015</option>
                        <option value="2016">2016</option>
                        <option value="2017">2017</option>
                    </select>
                </div>

                <div class="input-container">
                    <label for="lossYysr">营业收入:</label>
                    <input type="text" name="lossYysr" v-model="form.lossYysr">
                </div>

                <div class="input-container">
                    <label for="lossQtywsr">其它业务收入:</label>
                    <input type="text" name="lossQtywsr" v-model="form.lossQtywsr">
                </div>

                <div class="input-container">
                    <label for="lossYycb">营业成本:</label>
                    <input type="text" name="lossYycb" v-model="form.lossYycb">
                </div>

                <div class="input-container">
                    <label for="lossQtywcb">其它业务成本:</label>
                    <input type="text" name="lossQtywcb" v-model="form.lossQtywcb">
                </div>

                <div class="input-container">
                    <label for="lossYysj">营业税金及附加:</label>
                    <input type="text" name="lossYysj" v-model="form.lossYysj">
                </div>

                <div class="input-container">
                    <label for="lossXsfy">销售费用:</label>
                    <input type="text" name="lossXsfy" v-model="form.lossXsfy">
                </div>

                <div class="input-container">
                    <label for="lossGlfy">管理费用:</label>
                    <input type="text" name="lossGlfy" v-model="form.lossGlfy">
                </div>

                <div class="input-container">
                    <label for="lossCwfy">财务费用:</label>
                    <input type="text" name="lossCwfy" v-model="form.lossCwfy">
                </div>

                <div class="input-container">
                    <label for="lossLxzc">利息支出:</label>
                    <input type="text" name="lossLxzc" v-model="form.lossLxzc">
                </div>

                <div class="input-container">
                    <label for="lossZcjzss">资产减值损失:</label>
                    <input type="text" name="lossZcjzss" v-model="form.lossZcjzss">
                </div>

                <div class="input-container">
                    <label for="lossTzsy">投资收益:</label>
                    <input type="text" name="lossTzsy" v-model="form.lossTzsy">
                </div>

                <div class="input-container">
                    <label for="lossBtsr">补贴收入:</label>
                    <input type="text" name="lossBtsr" v-model="form.lossBtsr">
                </div>

                <div class="input-container">
                    <label for="lossYywsr">营业外收入:</label>
                    <input type="text" name="lossYywsr" v-model="form.lossYywsr">
                </div>

                <div class="input-container">
                    <label for="lossYywzc">营业外支出:</label>
                    <input type="text" name="lossYywzc" v-model="form.lossYywzc">
                </div>

                <div class="input-container">
                    <label for="lossYqndsy">以前年度损益调整:</label>
                    <input type="text" name="lossYqndsy" v-model="form.lossYqndsy">
                </div>

                <div class="input-container">
                    <label for="lossSdsfy">所得税费用:</label>
                    <input type="text" name="lossSdsfy" v-model="form.lossSdsfy">
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
            lossInformation: [],
            form: { 
                year: '',
                lossYysr: '',
                lossQtywsr: '',
                lossYycb: '',
                lossQtywcb: '',
                lossYysj: '',
                lossXsfy: '',
                lossGlfy: '',
                lossCwfy: '',
                lossLxzc: '',
                lossZcjzss: '',
                lossTzsy: '',
                lossBtsr: '',
                lossYywsr: '',
                lossYywzc: '',
                lossYqndsy: '',
                lossSdsfy: ''
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
        this.getLossInformation()

    },
    methods: {
        // 获取信息
         getLossInformation() {
            let enterid = localStorage.getItem('id')
            this.$http.get(`lossinformation/find.action?user_id=${enterid}`).then(
                res => {
                    console.log(res.data)
                    if( res.data.responseDesc == '查询成功' ) {
                        this.lossInformation = res.data.responseCode
                    }else {

                    }
                }
            ).then( () => {
                // 判断是否有数据
                if( this.lossInformation.length ) {
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
                url: 'lossinformation/insert.action',
                method: 'post',
                data: formdata
            }).then( res => {
                if( res.data.responseCode == 1 ) {
                    // 弹出消息框
                    this.$message( {
                        message: '增加成功',
                        type: 'success'
                    } )
                    this.getLossInformation()  // 重新获取数据
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
                url: `lossinformation/delete.action?id=${id}`,
                method: 'get'
            }).then( res => {
                if( res.data.responseCode == 0 ) {
                    // 弹出消息框
                    this.$message( {
                        message: '删除成功',
                        type: 'success'
                    } )
                    this.getLossInformation()
                }
            } ).catch( err => {
                console.log( err )
            } )
        },

        handleAddLdzchj() {
            let ldzchj = Number(this.form.asssetHbzj) + 
                        Number(this.form.asssetDxtz) + 
                        Number(this.form.asssetYspj) +  
                        Number(this.form.asssetYszkje) + 
                        Number(this.form.asssetYfkx) + 
                        Number(this.form.asssetQtyse) + 
                        Number(this.form.asssetCh) + 
                        Number(this.form.asssetDtfy) + 
                        Number(this.form.asssetCqzjtz) + 
                        Number(this.form.asssetQtldzc)
            return  ldzchj
        },
        handleAddCqtjhj() {
            let cqtjhj =  Number(this.form.asssetCqzqtz) + 
                          Number(this.form.asssetCqgqtz) + 
                          Number(this.form.asssetQtcqtz)
            return cqtjhj
        },
        handleAddGdzchj() {
            let gdzchj =  
                         Number(this.form.asssetQdzcjz) + 
                         Number(this.form.asssetZjgc) +
                         Number(this.form.asssetGcwz) + 
                         Number(this.form.asssetGdzcql) + 
                         Number(this.form.asssetQtgdzc)
            return gdzchj
        },
        handleAddWxqthj() {
            let wxqthj = Number(this.form.asssetWxzc) + 
                         Number(this.form.asssetCqdtfy) + 
                         Number(this.form.asssetDysds) +
                         Number(this.form.asssetDyxkjx) + 
                         Number(this.form.asssetWxqtcq)
            return wxqthj
        },
        handleAddLdfzhj() {
            let ldfzhj = Number(this.form.liabiliDzjk) + 
                         Number(this.form.liabiliYfpj) + 
                         Number(this.form.liabiliYfzk) +
                         Number(this.form.liabiliYfkx) + 
                         Number(this.form.liabiliYfzgxc)+
                         Number(this.form.liabiliYfflf) + 
                         Number(this.form.liabiliYjsj) + 
                         Number(this.form.liabiliQtyjk) +
                         Number(this.form.liabiliYflx) + 
                         Number(this.form.liabiliYfgl) +
                         Number(this.form.liabiliQtyfk) +
                         Number(this.form.liabiliYtfy) +
                         Number(this.form.liabiliCxfz) +
                         Number(this.form.liabiliQtldfz) 
            return ldfzhj
        },
        handleAddCqfzhj() {
            let cqfzhj = Number(this.form.liabiliCxjk) + 
                         Number(this.form.liabiliCxyfk) + 
                         Number(this.form.liabiliZxyfk) +
                         Number(this.form.liabiliQtcqfz) 
            return cqfzhj
        },
        handleAddGdqyhj() {
            let gdqyhj = Number(this.form.liabiliSszb) + 
                         Number(this.form.liabiliZbgj) + 
                         Number(this.form.liabiliYygj) +
                         Number(this.form.liabiliWfplr) 
            return gdqyhj
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
                url: 'lossinformation/update.action',
                method: 'post',
                data: formData
            }).then( res => {
                if( res.data.responseCode == 1 ) {
                    // 弹出消息框
                    this.$message( {
                        message: '修改成功',
                        type: 'success'
                    } )
                    this.getLossInformation()  // 重新获取数据
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
@import "../../../../css/dialog.scss";
#ldzc {
    padding: 20px 0 10px 23px;
    font-size: 14px;
    font-weight: 700;
}
</style>

