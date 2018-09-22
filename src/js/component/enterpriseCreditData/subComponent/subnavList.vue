<template>
    <div class="subnav fl">
        <dl>
            <dt>企业基本情况</dt>

            <router-link to="/addenterprise/basic" class="dd-link">
                <dd>企业基本情况</dd>
            </router-link>
        </dl>
        <dl>
            <dt>历史沿革</dt>
            <router-link to="/addenterprise/history" class="dd-link">
                <dd>历史沿革</dd>
            </router-link>

            <router-link to="/addenterprise/background" class="dd-link" >
                <dd>企业成立年限以及背景情况</dd>
            </router-link>
        </dl>
        <dl>
            <dt>资本实力</dt>
            <router-link to="/addenterprise/capital" class="dd-link" >
                <dd>资本实力</dd>
            </router-link>

            <router-link to="/addenterprise/structure" class="dd-link">
                <dd>股东组成</dd>
            </router-link>

            <router-link to="/addenterprise/shareholders" class="dd-link">
                <dd>股东之间的关联关系、近三年股东变化情况、控股股东基本情况介绍</dd>
            </router-link>
        </dl>
        <dl>
            <dt>分支机构</dt>
            <router-link to="/addenterprise/branches" class="dd-link">
                <dd>分支机构信息</dd>
            </router-link>
        </dl>
        <dl>
            <dt>人力资源</dt>
            <router-link to="/addenterprise/executive" class="dd-link">
                <dd>高管人员信息</dd>
            </router-link>

            <router-link to="/addenterprise/middle" class="dd-link">
                <dd>中层管理人员</dd>
            </router-link>

            <router-link to="/addenterprise/techical" class="dd-link">
                <dd>执证专业技术人员</dd>
            </router-link>

            <router-link to="/addenterprise/techicalInfo" class="dd-link">
                <dd>执证专业技术人员概述</dd>
            </router-link>
            <router-link to="/addenterprise/employeeInfo" class="dd-link"><dd>从业人员情况</dd></router-link>
        </dl>
        <dl>
            <dt>管理能力</dt>
            <router-link to="/addenterprise/corporateStructure" class="dd-link"><dd>法人治理结构</dd></router-link>
            <router-link to="/addenterprise/manageSystem" class="dd-link"><dd>管理制度</dd></router-link>
            <router-link to="/addenterprise/safetyManagement" class="dd-link" v-if = "enterType == 'MaterialEquipmentManufacturing' || enterType == 'Construction' || enterType == 'Services'"><dd>安全管理</dd></router-link>
            <router-link to="/addenterprise/qualityControl" class="dd-link"><dd>质量管理</dd></router-link>
            <router-link to="/addenterprise/envManagement" class="dd-link" v-if = "enterType == 'MaterialEquipmentManufacturing' || enterType == 'Construction' || enterType == 'WholesaleAndRetailTrade'"><dd>环保管理</dd></router-link>
            <router-link to="/addenterprise/serviceManagement" class="dd-link"><dd v-if="enterType == 'MaterialEquipmentManufacturing' || enterType == 'WholesaleAndRetailTrade'">服务管理</dd></router-link>
            <router-link to="/addenterprise/serviceQuality" class="dd-link"><dd v-if="enterType == 'MaterialEquipmentManufacturing' || enterType == 'WholesaleAndRetailTrade'">服务质量</dd></router-link>
            <router-link to="/addenterprise/projectManagement" class="dd-link"><dd v-if="enterType == 'Construction' || enterType == 'Services'">项目管理</dd></router-link>
            <router-link to="/addenterprise/marketnetwork" class="dd-link"><dd v-if="enterType == 'MaterialEquipmentManufacturing' || enterType == 'WholesaleAndRetailTrade'">营销网络</dd></router-link>
            <router-link to="/addenterprise/certification" class="dd-link"><dd v-if="enterType == 'MaterialEquipmentManufacturing' ">产品认证</dd></router-link>
        </dl>
        <dl>
            <dt>资质情况</dt>
            <router-link to="/addenterprise/qualificationInfo" class="dd-link"> <dd>资质信息</dd> </router-link>
        </dl>
        <dl>
            <dt>行业状况</dt>
            <router-link to="/addenterprise/industrialEnv" class="dd-link"><dd>产业环境</dd></router-link>
            <router-link to="/addenterprise/industryStatus" class="dd-link"><dd>行业地位</dd></router-link>
        </dl>
        <dl>
            <dt>技术实力</dt>
            <router-link to="/addenterprise/technicalEquipment" class="dd-link"><dd>技术装备</dd></router-link>
            <router-link to="/addenterprise/ownMechanical" class="dd-link"><dd>自有机械设备</dd></router-link>
            <router-link to="/addenterprise/rAndDCapabilibty" class="dd-link"><dd>研发能力</dd></router-link>
        </dl>

        <dl>
            <dt v-if="enterType == 'WholesaleAndRetailTrade' || enterType == 'Services'">经营实力</dt>
            <router-link to="/addenterprise/office" class="dd-link" v-if="enterType == 'WholesaleAndRetailTrade' || enterType == 'Services'"><dd>办公条件</dd></router-link>
            <router-link to="/addenterprise/potential" class="dd-link" v-if="enterType == 'WholesaleAndRetailTrade'"><dd>主营产品潜力</dd></router-link>
        </dl>

        <dl>
            <dt>发展能力</dt>
            <router-link to="/addenterprise/developCapability" class="dd-link"><dd>企业发展能力的评判与预测</dd></router-link>
        </dl>
        <dl>
            <dt>发展战略</dt>
            <router-link to="/addenterprise/developStrategy" class="dd-link"><dd>发展战略</dd></router-link>
        </dl>
        <dl>
            <dt>社会责任</dt>
            <router-link to="/addenterprise/responsibility" class="dd-link"><dd>社会责任</dd></router-link>
        </dl>
        <!-- <dl>
            <dt>会计制度、会计政策和质量</dt>
            <router-link to="/addenterprise/accountingSituation" class="dd-link"><dd>会计制度、会计政策和质量</dd></router-link>
        </dl> -->
        <dl>
            <dt>资产负债信息</dt>
            <router-link to="/addenterprise/assetsLiability" class="dd-link"><dd>资产负债信息</dd></router-link>
        </dl>
        <dl>
            <dt>损益信息</dt>
            <router-link to="/addenterprise/lossInformation" class="dd-link"><dd>损益信息</dd></router-link>
        </dl>
        <dl>
            <dt>现金流量信息</dt>
            <router-link to="/addenterprise/cashinformation" class="dd-link"><dd>现金流量信息</dd></router-link>
        </dl>
        <dl>
            <dt>公共信用记录</dt>
            <router-link to="/addenterprise/creditSituation" class="dd-link"><dd>注册地工商、税务、建设(质监)、人社、环保等行政主管部门记录的信用情况</dd></router-link>
            <router-link to="/addenterprise/bankreference" class="dd-link"><dd>人民银行信贷行为记录</dd></router-link>
        </dl>
        <dl>
            <dt>招标投标信用记录</dt>
            <router-link to="/addenterprise/tenderCredit" class="dd-link"><dd>招标投标信用记录</dd></router-link>
        </dl>
        <dl>
            <dt>合同履约情况</dt>
            <router-link to="/addenterprise/goverInvest" class="dd-link"><dd>政府投资、国有投资项目中标履约情况</dd></router-link>
            <router-link to="/addenterprise/goverment" class="dd-link"><dd>政府投资、国有投资项目中标履约情况说明</dd></router-link>
            <router-link to="/addenterprise/otherinvest" class="dd-link"><dd>其他项目履约情况</dd></router-link>
            <router-link to="/addenterprise/otherSummary" class="dd-link"><dd>其他项目履约情况说明</dd></router-link>
            <router-link to="/addenterprise/contractualDispute" class="dd-link"><dd>合同纠纷</dd></router-link>
        </dl>
        <dl>
            <dt>获奖情况</dt>
            <router-link to="/addenterprise/winproject" class="dd-link"><dd>近三年获奖工程</dd></router-link>
            <router-link to="/addenterprise/winproduct" class="dd-link" v-if="enterType == 'MaterialEquipmentManufacturing' || enterType == 'WholesaleAndRetailTrade'"><dd>近三年获奖产品</dd></router-link>
        </dl>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    computed: {
        enterType() {
            return this.$store.store.state.enterType 
        }
    },
    created() {
        
    },
    methods: {
        // 显示/隐藏子节点
        handleDtClick(e) {
            let linkList = document.getElementsByClassName('dd-link')
            let a = Array.from(e.target.parentNode.children)
            linkList = Array.from(linkList)
            a.splice(0,1)
            linkList.forEach( item => {
                item.style.display = 'none'
            })
            a.forEach( item => {
                item.style.display = 'block'
            })
        },
    },
    mounted() {
    //批量注册点击事件
        let dtList = document.getElementsByTagName('dt')
        dtList = Array.from(dtList)
        dtList.forEach( ( item, index ) => {
            item.addEventListener('click',this.handleDtClick)
        } )
        console.log(dtList)
        
    },
}

</script>

<style lang="scss" scoped>
.subnav {
    box-sizing: border-box;
    width: 245px;
    padding: 5px 10px;
    background-color: #fff;
    height: 960px;
    font-size: 14px;
    dl {
        background-color: rgb(242,242,242);
        dt {
            padding: 5px 20px;
            border-bottom: 1px solid rgb(201,201,201);
            line-height: 29px;
            cursor: pointer;
        }
        a {
            display: none;
        }
        dd {
            padding: 5px 30px;
            min-height: 30px;
            box-sizing: border-box;
            cursor: pointer;
            color: #2d87f5;
            background-color: #e9eaee;
            &:hover {
                background-color: #e4e4e4;
            }
        }
    }
}
</style>

