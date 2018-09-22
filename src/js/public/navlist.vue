<template>
    <div class="nav-list fl">
        <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
        >

            <router-link to="/home">
                <el-menu-item index="1" id="first-item">
                    <template slot="title">
                        <span>首页</span>
                    </template>
                </el-menu-item>
            </router-link>

            <el-submenu index="2">
                <template slot="title">
                    <span>用户管理</span>
                </template>

                <router-link to="/userlist">
                    <el-menu-item index="2-1">用户列表</el-menu-item>
                </router-link>

                <router-link to="/rolelist">
                    <el-menu-item index="2-2">角色列表</el-menu-item>
                </router-link>
            </el-submenu>

            <el-submenu index="3">
                <template slot="title">
                    <span>企业信用数据</span>
                </template>
                <router-link to="/listdata">
                    <el-menu-item index="3-1">企业列表数据</el-menu-item>
                </router-link>
            </el-submenu>

            <el-submenu index="4">
                <template slot="title">
                    <span>企业信用评分</span>
                </template>
                    <router-link to="/creditscore">
                        <el-menu-item index="4-1">信用评分列表</el-menu-item>
                    </router-link>
            </el-submenu>

            <el-submenu index="5">
                <template slot="title">
                    <span>信用等级公示</span>
                </template>
                <router-link to="/creditRatingList">
                    <el-menu-item index="5-1">信用等级列表</el-menu-item>
                </router-link>
            </el-submenu>

            <el-submenu index="6">
                <template slot="title">
                    <span>评估指标体系</span>
                </template>
                    <router-link to="/basicSituationIndexSystem">
                        <el-menu-item index="6-1">基本情况指标体系</el-menu-item>
                    </router-link>
                    <router-link to="/financialStatusIndicatorSystem">
                        <el-menu-item index="6-2">财务状况指标体系</el-menu-item>
                    </router-link>
                    <router-link to="/developmentCapacityIndexSystem">
                        <el-menu-item index="6-3">发展能力指标体系</el-menu-item>
                    </router-link>
                    <router-link to="/publicSupervisionIndexSystem">
                        <el-menu-item index="6-4">公共监督指标体系</el-menu-item>
                    </router-link>
                    <router-link to="/biddingSupervisionIndexSystem">
                        <el-menu-item index="6-5">招投标监管指标体系</el-menu-item>
                    </router-link>
            </el-submenu>

            <el-submenu index="7">
                <template slot="title">
                    <span>绩效评价标准值</span>
                </template>
                    <router-link to="/performanceEvaluationStandardValue">
                        <el-menu-item index="7-1">绩效评价标准值</el-menu-item>
                    </router-link>
            </el-submenu>

            <el-submenu index="8">
                <template slot="title">
                    <span>信用报告制作管理</span>
                </template>
                    <router-link to="/creditReportMaterialAudit">
                    <el-menu-item index="8-1">信用报告材料审核</el-menu-item>
                    </router-link>
                    <router-link to="/creditReportOutput">
                        <el-menu-item index="8-2">信用报告输出</el-menu-item>
                    </router-link>
                    <router-link to="/creditReportReview">
                        <el-menu-item index="8-3">信用报告评审</el-menu-item>
                    </router-link>
                    <router-link to="/creditReportProduction">
                        <el-menu-item index="8-4">信用报告制作</el-menu-item>
                    </router-link>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
  export default {
    methods: {
        
    }
  }
</script>

<style lang="scss" scoped>
.nav-list {
    width: 240px;
    min-height: 710px;
    background-color: #fff;
    border: 1px solid #ddd;
    box-sizing: border-box;
    .el-menu-item {
        background-color: #f2f2f2;
    }
    #first-item {
        background-color: #fff;
        &:hover {
            background-color: #ecf5ff;
        }
    }
}

</style>

