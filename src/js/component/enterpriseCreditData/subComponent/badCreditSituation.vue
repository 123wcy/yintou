<template>
    <div class="enterprise-apply">
        <div class="data-container">
            <h4 class="title">其它行政、司法机关认定的不良信息情况</h4>
            <div class="table-container">
                <el-button type="primary" id="add">新增</el-button>
                <table border="1">
                <thead>
                    <tr>
                        <th>编号</th>
                        <th>主要事实</th>
                        <th>类型</th>
                        <th>处罚部门</th>
                        <th>认定时间</th>
                        <th>主要后果</th>
                        <th>严重程度</th>
                        <th>操作</th>
                    </tr>
                </thead>
                    <tbody>
                        <tr v-for="item in info" :key="item.id">
                            <td>{{item.id}}</td>
                            <td>{{item.shishi}}</td>
                            <td>{{item.leixing}}</td>
                            <td>{{item.bumen}}</td>
                            <td>{{item.shijian}}</td>
                            <td>{{item.houguo}}</td>
                            <td>{{item.chengdu}}</td>
                            <td>
                                <el-button type="primary" plain>修改</el-button>
                                <el-button type="primary" plain>删除</el-button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <el-button type="primary" id="submit">提交</el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            info: [
                {
                    id: '1',
                    shishi: '1',
                    leixing: '2',
                    bumen: '南京'
                },
                {
                    id: '2',
                    shishi: '3',
                    leixing: '2',
                    bumen: '北京'
                }]
        }
    },
    components: {
    },
    created() {
    }
}
</script>

<style lang="scss" scoped>
@import "../../../../css/form.scss";
@import "../../../../css/table.scss";
    

</style>

