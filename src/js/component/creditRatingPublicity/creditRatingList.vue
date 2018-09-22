<template>
    <div class="content-container">
        <Title name="信用等级列表"/>
        <div class="table-display">
            <!-- 功能模块 -->
            <div class="features">
                <el-input placeholder="按报告类型筛选" />
                <el-button type="primary" icon="el-icon-search">筛选</el-button>
                <el-button type="primary" icon="el-icon-cancel">取消</el-button>
            </div>

            <!-- 表格模块 -->
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>编号</th>
                        <th>信用报告类型</th>
                        <th>等级</th>
                        <th>单位名称</th>
                        <th>成立时间</th>
                        <th>评级日期</th>
                        <th>发布人</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(report, index) in proData" :class="{'white':index%2 != 1}" :key="report.id" :value="index">
                        <td><input type="checkbox" :value="index" v-model="selectArr"></td>
                        <td>{{index +1}}</td>
                        <td>{{report.creditStyle}}</td>
                        <td>{{report.grade}}</td>
                        <td>{{report.unit}}</td>
                        <td>{{report.time}}</td>
                        <td>{{report.date}}</td>
                        <td  :class="{'red':report.status ='待审核'}">{{report.publisher}}</td>
                        <td><el-button type="primary" plain @click="updateItem(report)">修改</el-button>
                            <el-button type="warning" plain @click="removeTodo(index)">删除</el-button>
                            <!--<button v-on:click="removeTodo(index)">-->
                            <!--删除-->
                            <!--</button>-->
                        </td>
                    </tr>
                </tbody>
            </table>
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
                    <label for="creditStyle">信用报告类型:</label>
                    <input type="text" name="creditStyle" v-model="form.creditStyle">
                </div>

                <div class="input-container">
                    <label for="grade">等级:</label>
                    <input type="text" name="grade" v-model="form.grade">
                </div>

                <div class="input-container">
                    <label for="unit">单位名称:</label>
                    <input type="text" name="unit" v-model="form.unit">
                </div>

                <div class="input-container">
                    <label for="time">成立时间:</label>
                    <input type="text" name="time" v-model="form.time">
                </div>

                <div class="input-container">
                    <label for="date">评级日期:</label>
                    <input type="text" name="date" v-model="form.date">
                </div>

                <div class="input-container">
                    <label for="publisher">发布人:</label>
                    <input type="text" name="publisher" v-model="form.publisher">
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
    var proData= [
        {
            creditStyle:'施工类1',
            grade:'AA级',
            unit:'中博信息技术研究院有限公司',
            time:'2017-12-05',
            date:'2017-12-05 12:00',
            publisher:'苗春华',
            id:'1'
        },
        {
            creditStyle:'施工类2',
            grade:'AA级',
            unit:'中博信息技术研究院有限公司',
            time:'2017-12-05',
            date:'2017-12-05 12:00',
            publisher:'苗春华',
            id:'2'
        },
        {
            creditStyle:'施工类3',
            grade:'AA级',
            unit:'中博信息技术研究院有限公司',
            time:'2017-12-05',
            date:'2017-12-05 12:00',
            publisher:'苗春华',
            id:'3'
        },
        {
            creditStyle:'施工类4',
            grade:'AA级',
            unit:'中博信息技术研究院有限公司',
            time:'2017-12-05',
            date:'2017-12-05 12:00',
            publisher:'苗春华',
            id:'4'
        },
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
                selectArr:[],
                form: {
                    creditStyle: '',
                    grade: '',
                    unit: '',
                    time: '',
                    date: '',
                    publisher: '',
                },
                addFormVisible: false,
                hasNoData: false,
                isUpdate: false,
                isInsert: true,
                formLabelWidth: '120px',

            }
        },
        created() {
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
            updateItem(report) {
                this.addFormVisible = true
                this.form = report
                this.isUpdate = true
                this.isInsert = false
            },
            //修改
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
            }
        table {
            width: 100%;
            color: #666;
            thead {
                tr {
                    border-bottom: 1px solid #ddd;
                    border-top: 1px solid #ddd;
                    background-color: #f2f2f2;
                    th {
                        text-align: center;
                        font-size: 14px;
                        padding: 15px 0;
                    }
                }
            }
            tbody {
                tr {
                    border-bottom: 1px solid #ddd;
                    &:nth-child(even) {
                        background-color: #f2f2f2;
                    }                    
                    td {
                        text-align: center;
                        font-size: 14px;
                        padding: 15px 0;                        
                    }
                }
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
    .red {
        color: red;
    }
</style>