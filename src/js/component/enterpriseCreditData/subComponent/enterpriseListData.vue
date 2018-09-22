<template>
    <div class="content-container">
        <Title name="企业数据列表"/>
        <div class="table-display">
            <!-- 功能模块 -->
            <div class="features">
                <el-input placeholder="按报告类型筛选" />
                <el-button type="primary" icon="el-icon-search">筛选</el-button>
                <el-button type="primary" icon="el-icon-cancel">取消</el-button>

            </div>

            <!-- 表格模块 -->
             <!-- <el-table
                :data="userlist"
                tooltip-effect="dark"
                style="width: 100%"
                >
                <el-table-column
                prop="id"
                label="编号"
                width="53"
                >
                </el-table-column>

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
                        <el-button type="primary" plain>查看</el-button>
                        <el-button type="warning" plain @click="handleEdit(scope.row)">修改</el-button>
                    </template>
                </el-table-column>

            </el-table> -->
            <table>
                <thead>
                    <tr>
                        <th>编号</th>
                        <th>信用报告类型</th>
                        <th>报告申请编号</th>
                        <th>报告名称</th>
                        <th>提交时间</th>
                        <th>提交单位</th>
                        <th>资料状态</th>
                        <th>资料修改</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item,index) in userlist" :key="item.id">
                        <td>{{item.id}}</td>
                        <td>{{item.enterpriseType | typeformat}}</td>
                        <td>{{item.applicationNumber}}</td>
                        <td>{{item.enterpriseName}}</td>
                        <td>{{item.registerDate | dateformat}}</td>
                        <td>{{item.enterpriseName}}</td>
                        <td>{{item.status}}</td>
                        <td>
                            <el-button type="primary" plain>查看</el-button>
                            <el-button type="warning" plain @click="handleEdit(index)">修改</el-button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <BottomFeature 
                :pageNum='pageNum' 
                :nextPage='nextPage' 
                :pageSize='pageSize'
                :previousPage='previousPage'
                :display='flag'
                :totalNum='totalNum'/>
        </div>
    </div>
</template>

<script>
import Title from '../../../public/title.vue'
import BottomFeature from '../../../public/bottomFeature.vue'

export default {
    data() {
        return {
            userlist: [],
            multipleSelection: [],
            pageNum:0,
            pageSize:8,
            flag: false,
            enterInfo:[],
            totalNum: '',
        }
    },

    created() {
        this.getUserList()
    },

    methods: {
        
    //获取用户列表
        getUserList() {
            let userinfo = JSON.parse(localStorage.getItem('USER_INFO'))            
            this.$http.get(`user/showenterpage.action?pageNum=${this.pageNum}&pageSize=${this.pageSize}&id=${userinfo.id}&type=${userinfo.userType}`)
            .then( res => {
                let userlist = res.data.responseCode.fac
                this.totalNum = res.data.responseCode.totalCount
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
        handleEdit(index) {
            //路由跳转
            this.$router.push(`/addenterprise`)
            localStorage.setItem('id',this.userlist[index].id)
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
        position: relative;
        .features {
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
            .el-input {
                width: 200px;
                margin: 10px 10px;
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
        .el-button--primary.is-plain {
            border:1px solid #2db7f5;
            &:hover {
                background-color: #2db7f5;
            }
        }
        .el-button--warning.is-plain {
            border:1px solid #ffcc33;
            &:hover {
                background-color: #ffcc33;
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
</style>
