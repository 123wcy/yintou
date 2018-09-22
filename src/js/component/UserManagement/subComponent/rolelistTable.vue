<template>
    <div class="content-container">
        <Title name="角色列表"/>
        <div class="table-display">
            <!-- 功能模块 -->
            <div class="features">
                <el-button type="primary" icon="el-icon-cancel">新增</el-button>
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
                prop="roleName"
                label="角色名"
                min-width="115"
                >
                </el-table-column>

                <el-table-column
                prop="permission"
                label="权限"
                min-width="330"
                >
                </el-table-column>

                <el-table-column
                prop="createTime"
                label="创建时间"
                min-width="137"
                >
                </el-table-column>

                <el-table-column
                label="启用/暂停"
                min-width="153"
                >
                    <template slot-scope="scope">
                        <el-switch
                            v-model="startOrPause"
                            active-color="#2db7f5"
                            inactive-color="#f2f2f2">
                        </el-switch>
                    </template>    
                </el-table-column>

                <el-table-column label="操作" min-width="139">
                    <template slot-scope="scope"> 
                        <el-button type="warning" plain>修改</el-button>
                        <el-button type="danger" plain>删除</el-button>
                    </template>
                </el-table-column>

            </el-table> -->
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>编号</th>
                        <th>角色名</th>
                        <th>权限</th>
                        <th>创建时间</th>
                        <th>启动/停用</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in userlist" :key="item.number">
                        <td><input type="checkbox"></td>
                        <td>{{item.number}}</td>
                        <td>{{item.roleName}}</td>
                        <td>{{item.permission}}</td>
                        <td>{{item.createTime}}</td>
                        <td>
                            <el-switch
                            v-model="startOrPause"
                            active-color="#2db7f5"
                            inactive-color="#f2f2f2">
                            </el-switch>
                        </td>
                        <td>
                            <el-button type="warning" plain>修改</el-button>
                            <el-button type="danger" plain>删除</el-button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <BottomFeature 
                :pageNum='pageNum' 
                :nextPage='nextPage' 
                :pageSize='pageSize'
                :previousPage='previousPage'
                :display='flag'/>
        </div>
    </div>
</template>

<script>
import Title from '../../../public/title.vue'
import BottomFeature from '../../../public/bottomFeature.vue'

export default {
    data() {
        return {
            userlist: [
                {
                    id: 1,
                    roleName: '超级用户',
                    permission: '查看编辑所有页面',
                    createTime: '2017-12-08 12:00',

                }
            ],
            multipleSelection: [],
            pageNum:0,
            pageSize:8,
            startOrPause: true,
            flag: true
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
        handleSwitch() {
            console.log(this.start)
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
        position: relative;
        .features {
            width: 100%;
            height: 60px;
            background-color: rgba(242,242,242,1);
            position: relative;
            button {
                position: absolute;
                top: 10px;
                right: 15px;
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