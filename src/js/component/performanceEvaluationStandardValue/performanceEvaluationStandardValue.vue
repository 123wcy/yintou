<template>
    <div class="content-container">
        <Title name="信用等级列表"/>
        <div class="table-display">
            <!-- 功能模块 -->
            <div class="features">
                <el-input placeholder="按年份筛选" />
                <input class="input " placeholder="按行业筛选">
                <el-button type="primary" icon="el-icon-search">筛选</el-button>
                <el-button type="primary" icon="el-icon-cancel">取消</el-button>
                <el-button type="primary" icon="el-icon-search">导入</el-button>
                <el-button type="primary" icon="el-icon-cancel">导出</el-button>
            </div>

            <!-- 表格模块 -->
            <div class="table" v-if="proData.length">
                <tr class="tr">
                    <td style="width: 32px"></td>
                    <td style="width: 63px">行业一级</td>
                    <td style="width:78px">行业二级</td>
                    <td style="width:98px">行业三级</td>
                    <td style="width:35px">行业四级</td>
                    <td style="width:31px">行业五级</td>
                    <td style="width:73px">行业范围</td>
                    <td style="width:151px">项目</td>
                    <td style="width:42px">优秀值</td>
                    <td style="width:48px">良好值</td>
                    <td style="width:51px">平均值</td>
                    <td style="width:47px">较低值</td>
                    <td style="width:47px">较差值</td>
                    <td style="width:84px">年份</td>
                    <td style="width: 116px">操作</td>
                </tr>
                <table>
                    <tr v-for="(reportTitle, index) in proDataTitle" :class="{'white':index%2 != 0}" :key="reportTitle.id">
                        <td style="width: 32px">
                            <label for="">
                                <input type="checkbox" :value="index" v-model="selectArr">
                            </label>
                        </td>
                        <td style="width: 63px">{{reportTitle.industryLevel}}</td>
                        <td style="width:78px">{{reportTitle.industryTwo}}</td>
                        <td style="width:98px">{{reportTitle.industryThree}}</td>
                        <td style="width:35px">{{reportTitle.industryFour}}</td>
                        <td style="width:31px">{{reportTitle.industryFive}}</td>
                        <td style="width:73px">{{reportTitle.industryRange}}</td>
                        <td style="width:151px">{{reportTitle.project}}</td>
                        <td style="width:42px">{{reportTitle.excellentValue}}</td>
                        <td style="width:48px">{{reportTitle.goodValue}}</td>
                        <td style="width:51px">{{reportTitle.averageValue}}</td>
                        <td style="width:47px">{{reportTitle.lowerValue}}</td>
                        <td style="width:47px">{{reportTitle.poorValue}}</td>
                        <td style="width:84px">{{reportTitle.years}}</td>
                        <td style="width:116px">

                        </td>
                    </tr>
                    <tr v-for="(report, index) in proData" :class="{'white':index%2 != 1}" :key="report.id" :value="index">
                        <td style="width: 32px">
                            <label for="">
                                <input type="checkbox" :value="index" v-model="selectArr">
                            </label>
                        </td>
                        <td style="width: 63px">{{report.industryLevel}}</td>
                        <td style="width:78px">{{report.industryTwo}}</td>
                        <td style="width:98px">{{report.industryThree}}</td>
                        <td style="width:35px">{{report.industryFour}}</td>
                        <td style="width:31px">{{report.industryFive}}</td>
                        <td style="width:73px">{{report.industryRange}}</td>
                        <td style="width:151px">{{report.project}}</td>
                        <td style="width:42px">{{report.excellentValue}}</td>
                        <td style="width:48px">{{report.goodValue}}</td>
                        <td style="width:51px">{{report.averageValue}}</td>
                        <td style="width:47px">{{report.lowerValue}}</td>
                        <td style="width:47px">{{report.poorValue}}</td>
                        <td style="width:84px">{{report.years}}</td>
                        <td style="width:116px">
                            <el-button type="primary" plain @click="updateItem(report)">修改</el-button>
                            <el-button type="warning" plain @click="removeTodo(index)">删除</el-button>
                        </td>
                    </tr>
                </table>
            </div>
            <div class="table" v-else>
                <tr class="tr">
                    <td style="width: 32px"></td>
                    <td style="width: 63px">行业一级</td>
                    <td style="width:78px">行业二级</td>
                    <td style="width:98px">行业三级</td>
                    <td style="width:35px">行业四级</td>
                    <td style="width:31px">行业五级</td>
                    <td style="width:73px">行业范围</td>
                    <td style="width:151px">项目</td>
                    <td style="width:42px">优秀值</td>
                    <td style="width:48px">良好值</td>
                    <td style="width:51px">平均值</td>
                    <td style="width:47px">较低值</td>
                    <td style="width:47px">较差值</td>
                    <td style="width:84px">年份</td>
                    <td style="width: 116px">操作</td>
                </tr>
                <table>
                    <tr>
                        <td class="p">暂无数据</td></tr>
                </table>
            </div>
            <!--<label>-->
                <!--<input type="checkbox" class="checkbox" @click="selectAll" />全选-->
            <!--</label>-->
            <!--<button type="" @click="del">删除</button>-->
            <BottomFeature
                    :pageNum='pageNum'
                    :nextPage='nextPage'
                    :pageSize='pageSize'
                    :previousPage='previousPage'
                    :selectAll='selectAll'
                    :del='del'
                    :display='true'/>
        </div>
        <el-dialog title="修改" :visible.sync="addFormVisible">
            <form class="form">
                <div class="input-container">
                    <label for="project">项目:</label>
                    <input type="text" name="project" v-model="form.project">
                </div>

                <div class="input-container">
                    <label for="excellentValue">优秀值:</label>
                    <input type="text" name="excellentValue" v-model="form.excellentValue">
                </div>

                <div class="input-container">
                    <label for="goodValue">良好值:</label>
                    <input type="text" name="postChange4" v-model="form.goodValue">
                </div>

                <div class="input-container">
                    <label for="averageValue">平均值:</label>
                    <input type="text" name="postChange3" v-model="form.averageValue">
                </div>

                <div class="input-container">
                    <label for="lowerValue">较差值:</label>
                    <input type="text" name="postChange2" v-model="form.lowerValue">
                </div>

                <div class="input-container">
                    <label for="poorValue">较低值:</label>
                    <input type="text" name="postChange1" v-model="form.poorValue">
                </div>

                <div class="input-container">
                    <label for="years">年份:</label>
                    <input type="text" name="postChange1" v-model="form.years">
                </div>

            </form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="addFormVisible = false">取 消</el-button>
                <el-button type="primary"  v-if="isInsert">确 定</el-button>
                <el-button type="primary" @click="handleUpdate" v-if="isUpdate">修 改</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import Title from "../../public/title"
    import BottomFeature from "../../public/bottomFeature"
    import Datepicker from 'vuejs-datepicker'
    var  proData= [
        {
            industryLevel:'工业',
            industryTwo:'石油石化工业',
            industryThree:'天然原油和天然气开采业',
            industryFour:'',
            industryFive:'',
            industryRange:'全行业',
            project:'净资产收益率（%）',
            excellentValue:'17.6',
            goodValue:'14.1',
            averageValue:'10.5',
            lowerValue:'3.5',
            poorValue:'-3.9',
            years:'2014年',
            id:'2'
        },
        {
            industryLevel:'工业',
            industryTwo:'石油石化工业',
            industryThree:'天然原油和天然气开采业',
            industryFour:'',
            industryFive:'',
            industryRange:'全行业',
            project:'总资产报酬率（%）',
            excellentValue:'13.7',
            goodValue:'10.8',
            averageValue:'7.4',
            lowerValue:'2.6',
            poorValue:'-2.3',
            years:'2014年',
            id:'3'
        },
        {
            industryLevel:'工业',
            industryTwo:'石油石化工业',
            industryThree:'天然原油和天然气开采业',
            industryFour:'',
            industryFive:'',
            industryRange:'全行业',
            project:'销售（营业）利润率（%）',
            excellentValue:'25.9',
            goodValue:'20',
            averageValue:'13.5',
            lowerValue:'4.3',
            poorValue:'-1.1',
            years:'2014年',
            id:'4'
        },
        {
            industryLevel:'工业',
            industryTwo:'石油石化工业',
            industryThree:'天然原油和天然气开采业',
            industryFour:'',
            industryFive:'',
            industryRange:'全行业',
            project:'盈余现金保障倍数',
            excellentValue:'6.5',
            goodValue:'4.2',
            averageValue:'1.7',
            lowerValue:'0.5',
            poorValue:'-0.8',
            years:'2014年',
            id:'1'
        },
        {
            industryLevel:'工业',
            industryTwo:'石油石化工业',
            industryThree:'天然原油和天然气开采业',
            industryFour:'',
            industryFive:'',
            industryRange:'全行业',
            project:'成本费用利润率（%）',
            excellentValue:'16.6',
            goodValue:'12.9',
            averageValue:'7.2',
            lowerValue:'0.5',
            poorValue:'-7.1',
            years:'2014年',
            id:'5'
        },

        // {
        //     industryLevel:'工业',
        //     industryTwo:'石油石化工业',
        //     industryThree:'天然原油和天然气开采业',
        //     industryFour:'',
        //     industryFive:'',
        //     industryRange:'全行业',
        //     project:'一、盈利能力状况',
        //     excellentValue:'',
        //     goodValue:'',
        //     averageValue:'',
        //     lowerValue:'',
        //     poorValue:'',
        //     years:'',
        //     id:'1'
        // },

    ]
    export default {
        data() {
            return {
                userlist: [],
                multipleSelection: [],
                pageNum:0,
                pageSize:8,
                show: true,
                flag: true,
                proData:proData,
                selectArr: [],
                form: {
                    excellentValue: '',
                    goodValue: '',
                    averageValue: '',
                    lowerValue: '',
                    poorValue: '',
                    years: '',
                    project: ''
                },
                addFormVisible: false,
                hasNoData: false,
                isUpdate: false,
                isInsert: true,
                formLabelWidth: '120px',
                proDataTitle: [
                    {
                        industryLevel:'工业',
                        industryTwo:'石油石化工业',
                        industryThree:'天然原油和天然气开采业',
                        industryFour:'',
                        industryFive:'',
                        industryRange:'全行业',
                        project:'一、盈利能力状况',
                        excellentValue:'',
                        goodValue:'',
                        averageValue:'',
                        lowerValue:'',
                        poorValue:'',
                        years:'',
                    },
                    // {
                    //     industryLevel:'工业',
                    //     industryTwo:'石油石化工业',
                    //     industryThree:'天然原油和天然气开采业',
                    //     industryFour:'',
                    //     industryFive:'',
                    //     industryRange:'全行业',
                    //     project:'资本收益率（%）',
                    //     excellentValue:'19.4',
                    //     goodValue:'16',
                    //     averageValue:'12.4',
                    //     lowerValue:'4.8',
                    //     poorValue:'0.1',
                    //     years:'2014年',
                    //     id:'1'
                    // },
                ]

            }
        },
        created() {
            this.$http.get('/api/home').then(function(response) {
                response = response.body;
                this.proData = response.data;
            })
        },
        methods: {
            del() {
                let arr = [];
                var len = this.proData.length;
                for (var i = 0; i < len; i++) {
                    if (this.selectArr.indexOf(i)>=0) {
                        console.log(this.selectArr.indexOf(i))
                    }else{
                        arr.push(proData[i])
                    }
                }
                this.proData = arr;
                this.selectArr = []
            },
            selectAll(event) {
                var _this = this;
                console.log(event.currentTarget)
                if (!event.currentTarget.checked) {
                    this.selectArr = [];
                } else { //实现全选
                    _this.selectArr = [];
                    _this.proData.forEach(function (item, i) {
                        _this.selectArr.push(i);
                    });
                }
            },
            removeTodo: function (index) {
                this.proData.splice(index, 1)
            },
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
                this.$http.get(`http://192.168.3.33:8080/YinTouXY/user/showpage.action?pageNum=${this.pageNum}&pageSize=${this.pageSize}`)
                    .then( res => {
                    let userlist = res.data.responseCode.fac
                    console.log(userlist)
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
            //修改
            updateItem(report) {
                this.addFormVisible = true
                this.form = report
                this.isUpdate = true
                this.isInsert = false
            },
            handleUpdate() {
                let formData = JSON.stringify(this.form)
                this.$http({
                    url: 'history/update.action',
                    method: 'post',
                    data: formData
                }).then( res => {
                    if( res.data.responseCode == 1 ) {
                    // 弹出消息框
                    this.$message( {
                        message: '修改成功',
                        type: 'success'
                    } )
                    this.getHistory()  // 重新获取数据
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
        },
        components:{
            Title,
            BottomFeature,
            Datepicker
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
                .input {
                    border-radius: 4px;
                    border: 1px solid #dcdfe6;
                    height: 34px;
                    width: 190px;
                    left:224px;
                    top: 12px;
                    position: absolute;
                    padding-left: 8px;
                }
                input::-webkit-input-placeholder {
                    color: #c0c4cc;
                }
                input :hover {
                    border-color:#2db7f5;
                }
                button {
                    position: absolute;
                }
                button:first-of-type {
                    top: 10px;
                    left: 434px;
                }
                button:nth-of-type(2) {
                    top: 10px;
                    left: 533px;
                }
                button:nth-of-type(3) {
                    top: 10px;
                    left: 770px;
                }
                button:nth-of-type(4) {
                    top: 10px;
                    left: 880px;
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
                background-color: #fff;
                overflow: auto;
                td {
                    padding-top: 20px;
                    padding-bottom: 20px;
                    overflow: auto;
                }
                .p {
                    font-size: 14px;
                    font-weight: 400;
                    color: #909399;
                    width: 1005px;

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
            .el-button--danger.is-plain {
                border:1px solid #2db7f5;
                &:hover {
                    background-color: #2db7f5;
                }
            }
            .el-button--primary.is-plain {
                border:1px solid #ffcc33;
                color:#ffcc33;
                &:hover {
                    background-color: #ffcc33;
                    color: #fff;
                }
            }
            .el-button--warning.is-plain {
                border:1px solid #ff3300;
                color: #ff3300;
                &:hover {
                    background-color: #ff3300;
                    color: #fff;
                }
            }
        }

    }
    .white {
        background-color:rgba(242, 242, 242, 1);
    }
    .red {
        color: red;
    }
    /*.feature-bottom {*/
        /*display: block;*/
        /*box-sizing: border-box;*/
        /*width: 100%;*/
        /*position: absolute;*/
        /*left: 0;*/
        /*bottom:0;*/
        /*color: #666;*/
        /*line-height: 50px;*/
        /*border-top: 1px solid rgba(228,228,228,1);*/
        /*padding:0 10px;*/
        /*> button {*/
            /*border: none;*/
            /*background-color: transparent;*/
            /*margin: 0;*/
            /*padding: 7px 7px !important;*/
            /*&:hover {*/
                /*color: #999;*/
            /*}*/
            /*&:focus {*/
                /*color: inherit;*/
            /*}*/
            /*&:last-of-type {*/
                /*margin-right: 30px;*/
            /*}*/
        /*}*/
        /*span {*/
            /*font-size: 12px;*/
        /*}*/
    /*}*/
    /*.flip-page {*/
        /*position: absolute;*/
        /*top: 0;*/
        /*right: 10px;*/
        /*button {*/
            /*width: 77px;*/
            /*height: 30px;*/
            /*padding: 0;*/
            /*text-align: center;*/
            /*margin-left: 10px;*/
            /*border-radius: 4px;*/
        /*}*/
    /*}*/
</style>