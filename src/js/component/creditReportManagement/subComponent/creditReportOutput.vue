<template>
    <div class="content-container">
        <Title name="信用报告输出"/>
        <div class="table-display">
            <!-- 功能模块 -->
            <div class="features">
                <el-input placeholder="按报告类型筛选" />
                <el-button type="primary" icon="el-icon-search">筛选</el-button>
                <el-button type="primary" icon="el-icon-cancel">取消</el-button>

            </div>

            <!-- 表格模块 -->
            <div class="table">
                <!--<el-table
                        :data="userlist"
                        tooltip-effect="dark"
                        style="width: 100%"
                >
                    <el-table-column

                            prop="index +1"
                            label="编号"
                            width="53"
                    >
                    {{index +1}}</el-table-column>

                    <el-table-column
                            prop="enterpriseType"
                            label="信用报告类型"
                            min-width="116"
                    >
                    </el-table-column>

                    <el-table-column
                            prop="applicationNumber"
                            label="报告申请编号"
                            min-width="163"
                    >
                    </el-table-column>

                    <el-table-column
                            prop="enterpriseName"
                            label="报告名称"
                            min-width="113"
                    >
                    </el-table-column>

                    <el-table-column
                            prop="registerDate"
                            label="提交时间"
                            min-width="145"
                    >
                    </el-table-column>

                    <el-table-column
                            prop="enterpriseName"
                            label="提交单位"
                            min-width="109"
                    >
                    </el-table-column>

                    <el-table-column
                            prop="status"
                            label="资料状态"
                            min-width="108"
                    >
                    </el-table-column>

                    <el-table-column label="资料修改" min-width="139">
                        <template slot-scope="scope">
                            <el-button type="primary" plain>初审</el-button>
                            <el-button type="warning" plain @click="handleEdit(scope.row)">终审</el-button>
                        </template>
                    </el-table-column>

                </el-table>-->
                <tr class="tr">
                    <td style="width: 35px"></td>
                    <td style="width: 55px">编号</td>
                    <td style="width:118px">信用报告类型</td>
                    <td style="width:165px">报告申请编号</td>
                    <td style="width:111px">企业单位</td>
                    <td style="width:147px">报告生成时间</td>
                    <td style="width: 115px">报告</td>
                    <td style="width:110px">资料状态</td>
                    <td style="width:141px">操作</td>
                </tr>
                <table>
                    <tr v-for="(report,index) in creditreportData" :class="{'white':index%2 != 0}">
                        <td style="width: 33px"> <input type="checkbox" :value="index" v-model="selectArr" style="display: none"></td>
                        <td style="width: 53px">{{index +1}}</td>
                        <td style="width: 116px">{{report.creditStyle}}</td>
                        <td style="width:163px">{{report.applicationNumber}}</td>
                        <td style="width:109px">{{report.unit}}</td>
                        <td style="width:145px">{{report.time}}</td>
                        <td style="width:113px">{{report.report}}</td>
                        <td style="width:108px"  :class="{'red':report.status ='待审核'}">{{report.status}}</td>
                        <td style="width:139px"><el-button type="primary" plain @click="addFormVisible = true">查看</el-button>
                            <el-button type="warning" plain @click="handleEdit(scope.row)">下载</el-button></td>
                    </tr>
                </table>

            </div>
            <BottomFeature
                    :pageNum='pageNum'
                    :nextPage='nextPage'
                    :pageSize='pageSize'
                    :previousPage='previousPage'
                    :display='flag'/>
        </div>
    </div>
    <!--<el-dialog :visible.sync="addFormVisible">
        <form  class="form">
            <div class="input-container">
                <label for="preChange">变更前事项:</label>
                <input type="text" name="preChange" v-model="form.preChange">
            </div>
        </form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="addFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="addFormVisible = false">确 定</el-button>
        </div>
    </el-dialog>-->
</template>
<script>
    import Title from '../../../public/title.vue'
    import BottomFeature from '../../../public/bottomFeature.vue'

    export default {
        data() {
            return {
                multipleSelection: [],
                pageNum:0,
                pageSize:8,
                flag: false,
                enterInfo:[],
                creditreportData: [
                    {
                        creditStyle:'施工类',
                        applicationNumber:'YT00320140516000072 ',
                        report:'',
                        time:'2017-12-05 12:00',
                        unit:'中博信息技术研究院有限公司',
                        status:'待审核',
                        applicationFirst:'初审',
                        applicationEnd:'终审'
                    },
                    {
                        creditStyle:'施工类',
                        applicationNumber:'YT00320140516000072 ',
                        report:'',
                        time:'2017-12-05 12:00',
                        unit:'中博信息技术研究院有限公司',
                        status:'待审核',
                        applicationFirst:'初审',
                        applicationEnd:'终审'
                    },
                    {
                        creditStyle:'施工类',
                        applicationNumber:'YT00320140516000072 ',
                        report:'',
                        time:'2017-12-05 12:00',
                        unit:'中博信息技术研究院有限公司',
                        status:'待审核',
                        applicationFirst:'初审',
                        applicationEnd:'终审'
                    },
                    {
                        creditStyle:'施工类',
                        applicationNumber:'YT00320140516000072 ',
                        report:'',
                        time:'2017-12-05 12:00',
                        unit:'中博信息技术研究院有限公司',
                        status:'待审核',
                        applicationFirst:'初审',
                        applicationEnd:'终审'
                    },
                    {
                        creditStyle:'施工类',
                        applicationNumber:'YT00320140516000072 ',
                        report:'',
                        time:'2017-12-05 12:00',
                        unit:'中博信息技术研究院有限公司',
                        status:'待审核',
                        applicationFirst:'初审',
                        applicationEnd:'终审'
                    }
                ]
            }
        },
        methods: {
            toggleSelection(rows) {
                if (rows) {
                    rows.forEach(row => {
                        this.$refs.multipleTable.toggleRowSelection(row);
                });
                } else {
                    this.$refs.multipleTable.clearSelection();
                }
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            //获取用户列表
            getUserList() {
                this.$http.get(`user/showpage.action?pageNum=${this.pageNum}&pageSize=${this.pageSize}`)
                    .then( res => {
                    let userlist = res.data.responseCode.fac
                    this.userlist = userlist
            } )
            },
            //下一页
            nextPage() {
                this.pageNum++
                this.getUserList()
            },
            //上一页
            previousPage() {
                this.pageNum--
                if(this.pageNum < 0) {
                    this.pageNum = 0
                }
                this.getUserList()
            },
            // 修改企业信息
            handleEdit(row) {
                //路由跳转
                this.$router.push(`/addenterprise`)
                localStorage.setItem('id',row.id)
                // this.getInfo(row.id)
            },
        },

        components: {
            Title,
            BottomFeature
        }
    }
</script>

<style lang="scss" scoped>
    .content-container {
        width: 100%;
        height: 710px;
        background-color: #fff;
        margin-top: 10px;
        overflow: hidden;
        .table-display {
            width: 1000px;
            height: 612px;
            border: 1px solid #ccc;
            margin: 0 0 0 36px;
            overflow: hidden;
            background-color: #f2f2f2;
            position: relative;
            .features {
                .el-input {
                    width: 200px;
                    margin: 10px 10px;
                }
                width: 100%;
                height: 60px;
                background-color: rgba(242,242,242,1);
                position: relative;
                button {
                    position: absolute;
                }
                button:first-of-type {
                    top: 10px;
                    left: 224px;
                }
                button:nth-of-type(2) {
                    top: 10px;
                    left: 325px;
                }
                button:nth-of-type(3) {
                    top: 10px;
                    right: 25px;
                }
            }
            .table {
                font-size:12px;
                .tr td{
                    padding-top: 12px;
                    padding-bottom: 12px;
                    font-weight: 700;
                    color: #666666;
                }
                td {
                    text-align: center;
                }
            }
            table {

                td {
                    padding-top: 20px;
                    padding-bottom: 20px;
                }
            }
            .el-button--primary.is-plain,.el-button--danger.is-plain,.el-button--warning.is-plain {
                width: 35px;
                height: 20px;
                font-size: 12px;
                text-align: center;
                padding: 0;
                background-color: transparent;
            }
            .el-button--primary.is-plain {
                border:1px solid #2db7f5;
                &:hover {
                    background-color: #2db7f5;
                }
            }
            .el-button--warning.is-plain {
                border:1px solid lawngreen;
                color: lawngreen;
                &:hover {
                    background-color:lawngreen;
                    color: #fff;
                }
            }
            .el-button--danger.is-plain {
                border:1px solid #ff3300;
                &:hover {
                    background-color: #ff3300;
                }
            }
        }

    }
    .white {
        background-color:#fff;
    }
    .red {
        color: red;
    }
    @import "../../../../css/form.scss";
    @import "../../../../css/table.scss";
    @import "../../../../css/dialog.scss";
</style>
