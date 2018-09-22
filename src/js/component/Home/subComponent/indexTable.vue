<template>
    <div class="content-container">
        <!-- 标题 -->
        <Title name="首页"/>

        <div class="table-display">
            <!-- 功能模块 -->
            <div class="features">
                <el-input placeholder="按报告类型筛选" />
                <el-button type="primary" icon="el-icon-search">筛选</el-button>
                <el-button type="primary" icon="el-icon-cancel">取消</el-button>
                <el-button type="primary" icon="el-icon-refresh">排序</el-button>
            </div>

            <!-- 表格模块 -->
            <table>
                <thead>
                    <tr>
                        <th>编号</th>
                        <th>信用报告类型</th>
                        <th>等级</th>
                        <th>单位名称</th>
                        <th>评级日期</th>
                        <th>评级人</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in tableData" :key="item.number">
                        <td>{{item.number}}</td>
                        <td>{{item.type}}</td>
                        <td>{{item.level}}</td>
                        <td>{{item.name}}</td>
                        <td>{{item.date}}</td>
                        <td>{{item.ratingPeople}}</td>
                    </tr>
                </tbody>
            </table>

        </div>
    </div>
</template>

<script>
import Title from '../../../public/title.vue'
 export default {
    data() {
      return {
        tableData: [{
          number: '1',
          type: '批发零售类',
          level: 'A级',
          name: '单位名称',
          date: '日期',
          ratingPeople: '评级人'
        },
        {
          number: '2',
          type: '批发零售类',
          level: 'A级',
          name: '单位名称',
          date: '日期',
          ratingPeople: '评级人'
        },
        {
          number: '3',
          type: '批发零售类',
          level: 'A级',
          name: '单位名称',
          date: '日期',
          ratingPeople: '评级人'
        },
        {
          number: '4',
          type: '批发零售类',
          level: 'A级',
          name: '单位名称',
          date: '日期',
          ratingPeople: '评级人'
        }]
      }
    },
    components: {
        Title
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
        margin: 12px 0 0 36px;
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
            button:last-of-type {
                top: 10px;
                right: 30px;
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
    }
}

</style>

