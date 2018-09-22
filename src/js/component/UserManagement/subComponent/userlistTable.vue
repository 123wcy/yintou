<template>
    <div class="content-container">
        <Title name="用户列表"/>
        <div class="table-display">
            <!-- 功能模块 -->
            <div class="features">
                <el-input placeholder="按报告类型筛选" />
                <el-button type="primary" icon="el-icon-search">筛选</el-button>
                <el-button type="primary" icon="el-icon-cancel">取消</el-button>
            </div>

            <!-- 表格模块 -->
             <!-- <el-table
                ref="multipleTable"
                :data="userlist"
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChange" >

                <el-table-column
                type="selection"
                width="36">
                </el-table-column>

                <el-table-column
                prop="id"
                label="编号"
                min-width="36"
                >
                </el-table-column>

                <el-table-column
                prop="userName"
                label="用户名"
                min-width="43"
                >
                </el-table-column>

                <el-table-column
                prop="roleName"
                label="角色名"
                min-width="57"
                >
                </el-table-column>

                <el-table-column
                prop="enterpriseType"
                label="企业类型"
                min-width="76"
                >
                </el-table-column>

                <el-table-column
                prop="enterpriseName"
                label="企业名称"
                min-width="99"
                >
                </el-table-column>

                <el-table-column
                prop="enterpriseAddress"
                label="企业地址"
                min-width="104"
                >
                </el-table-column>

                <el-table-column
                prop="linkman"
                label="联系人"
                min-width="59"
                >
                </el-table-column>

                <el-table-column
                prop="telephone"
                label="电话"
                min-width="61"
                >
                </el-table-column>

                <el-table-column
                prop="mobilephone"
                label="手机"
                min-width="59"
                >
                </el-table-column>

                <el-table-column
                prop="email"
                label="邮箱"
                min-width="77"
                >
                </el-table-column>

                <el-table-column
                prop="applicationNumber"
                label="申请编号"
                min-width="92"
                >
                </el-table-column>

                <el-table-column
                prop="status"
                label="状态"
                min-width="62"
                >
                </el-table-column>

                <el-table-column label="操作" min-width="139">
                    <template slot-scope="scope"> 
                        <el-button type="primary" plain>审核</el-button>
                        <el-button type="warning" plain>修改</el-button>
                        <el-button type="danger" plain>删除</el-button>
                    </template>
                </el-table-column>

            </el-table> -->
            <div class="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>&nbsp;&nbsp;&nbsp;&nbsp;</th>
                            <th>编号</th>
                            <th>用户名</th>
                            <!-- <th>角色名</th> -->
                            <th>企业类型</th>
                            <th>企业名称</th>
                            <th>企业地址</th>
                            <th>联系人</th>
                            <th>电话</th>
                            <th>手机</th>
                            <th>邮箱</th>
                            <th>申请编号</th>
                            <th>状态</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in userlist" :key="item.id">
                            <td><input type="checkbox"></td>
                            <td>{{item.id}}</td>
                            <td>{{item.userName}}</td>
                            <!-- <td>{{item.roleName}}</td> -->
                            <td>{{item.enterpriseType | typeformat}}</td>
                            <td>{{item.enterpriseName}}</td>
                            <td>{{item.enterpriseAddress}}</td>
                            <td>{{item.linkman}}</td>
                            <td>{{item.telephone}}</td>
                            <td>{{item.mobilephone}}</td>
                            <td>{{item.email}}</td>
                            <td>{{item.applicationNumber}}</td>
                            <td>{{item.status}}</td>
                            <td>
                                <el-button type="primary" plain>审核</el-button>
                                <el-button type="warning" plain>修改</el-button>
                                <el-button type="danger" plain>删除</el-button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <BottomFeature 
                :pageNum='pageNum' 
                :nextPage='nextPage' 
                :pageSize='pageSize'
                :previousPage='previousPage'
                :display='true'/>
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
            flag: true,

        }
    },

    created() {
        this.getUserList()
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
            let userinfo = JSON.parse(localStorage.getItem('USER_INFO'))
            this.$http.get(`user/showpage.action?pageNum=${this.pageNum}&pageSize=${this.pageSize}&id=${userinfo.id}&type=${userinfo.userType}`)
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

        }
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
        background-color: #fff;
        position: relative;
        .table-container {
            overflow: auto;
            width: 100%;
            height: 80%;
        }
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
                        padding: 15px 10px;  
                        font-size: 12px;                      
                    }
                }
            }
        }
        .el-button+.el-button {
            margin: 0;
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