<template>
<div>
    <table border="1" bordercolor="black">
        <thead>
            <tr>
                <td>一级指标</td>
                <td>二级指标</td>
                <td>三级指标</td>
                <td>四级指标</td>
                <td>评分标准</td>
                <td>分值</td>
                <td>评分依据</td>
                <td>得分</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td rowspan="19">一、基本状况(17)</td>
                <td rowspan="4">基本条件(2)</td>
                <td rowspan="2">历史沿革(1)</td>
                <td>成立年限(年)(0.5)</td>
                <td>成立年限>=8年得0.5分;其余按(成立年限/8)*0.5计算</td>
                <td>0.5</td>
                <td style="color: #2db7f5">{{basicname.fixedNumberOfYearsN}}</td>
                <td style="color: red">{{basicsituation.fixedNumberOfYears}}</td>
            </tr>

            <tr>
                <!-- <td></td> -->
                <!-- <td></td> -->
                <!-- <td></td> -->
                <td>股东背景(0.5)</td>
                <td>在公开市场(包括主板、中小板、创业板、新三板市场等)挂牌交易企业及国有、国有控制>=20%企业得0.5分;其余得0.25分</td>
                <td>0.5</td>
                <td style="color: #2db7f5">{{basicname.shareholderBackgroundN}}</td>
                <td style="color: red">{{basicsituation.shareholderBackground}}</td>
            </tr>

            <tr>
                <!-- <td></td> -->
                <!-- <td></td> -->
                <td rowspan="2">资本实力(1)</td>
                <td>实收资本(0.5)</td>
                <td>（实收资本/1000万元人民币）≥1得0.5分；其余：按（实收资本/1000万元人民币）×0.5计算值。</td>
                <td>0.5</td>
                <td style="color: #2db7f5">{{basicname.realIncomeCapitalN}}</td>
                <td style="color: red">{{basicsituation.realIncomeCapital}}</td>
            </tr>

            <tr>
                <!-- <td></td> -->
                <!-- <td></td> -->
                <!-- <td></td> -->
                <td>净资产(0.5)</td>
                <td>净资产/实收资本（X）：X≥1.5得0.5分；1＜X＜1.5按插值（X-1）/（1.5-1）×0.5计算；X≤1得0分。</td>
                <td>0.5</td>
                <td style="color: #2db7f5">{{basicname.netAssetN}}</td>
                <td style="color: red">{{basicsituation.netAsset}}</td>
            </tr>

            <tr>
                <!-- <td></td> -->
                <!-- <td></td> -->
                <td rowspan="7">人力资源(6)</td>
                <td rowspan="4">高管人员(4)</td>
                <td>高管学历构成(0.5)</td>
                <td>高管人员包括法定代表人、总经理、财务总监。其学历和职称取最高者。得分规则：高管人员中具有本科及以上学历或中级以上职称的比例×0.5。</td>
                <td>0.5</td>
                <td style="color: #2db7f5">{{basicname.seniorExecutiveEducationalBackgroundN}}</td>
                <td style="color: red">{{basicsituation.seniorExecutiveEducationalBackground}}</td>
            </tr>

            <tr>
                <!-- <td></td> -->
                <!-- <td></td> -->
                <!-- <td></td> -->
                <td>高管从业年限(0.5)</td>
                <td>高管人员平均从业年限（X）：10年及以上得0.5分；10年以下按公式得分：（X/10）×0.5。</td>
                <td>0.5</td>
                <td style="color: #2db7f5">{{basicname.seniorExecutiveYearsN}}</td>
                <td style="color: red">{{basicsituation.seniorExecutiveYears}}</td>
            </tr>

            <tr>
                <!-- <td></td> -->
                <!-- <td></td> -->
                <!-- <td></td> -->
                <td>高管变动情况(1)</td>
                <td>高管人员调出高管职位变动一次的，扣0.5分；变动两次及以上的，扣1分。</td>
                <td>1</td>
                <td style="color: #2db7f5">{{basicname.changesInSeniorExecutivesN}}</td>
                <td style="color: red">{{basicsituation.changesInSeniorExecutives}}</td>
            </tr>

            <tr>
                <!-- <td></td> -->
                <!-- <td></td> -->
                <!-- <td></td> -->
                <td>高管信用状况(2)</td>
                <td>高管人员中，每少提供一份个人信用报告的，扣1分。近三年，高管人员中发生逾期的账户，有一条扣0.25分；发生90天以上逾期的账户，有一条扣0.5分。扣完为止。</td>
                <td>2</td>
                <td style="color: #2db7f5">{{basicname.executiveCreditStatusN}}</td>
                <td style="color: red">{{basicsituation.executiveCreditStatus}}</td>
            </tr>

            <tr>
                <!-- <td></td> -->
                <!-- <td></td> -->
                <td rowspan="3">管理和技术人员(2)</td>
                <td>管理人员学历构成(0.5)</td>
                <td>管理人员包括部门经理级别人员。其学历和职称取最高者。得分规则：管理人员中具有大专以上学历或中级职称以上人数比例×0.5。</td>
                <td>0.5</td>
                <td style="color: #2db7f5">{{basicname.managementEducationalBackgroundN}}</td>
                <td style="color: red">{{basicsituation.managementEducationalBackground}}</td>
            </tr>

            <tr>
                <!-- <td></td> -->
                <!-- <td></td> -->
                <!-- <td></td> -->
                <td>技术人员配置(0.5)</td>
                <td>根据行业资质管理规定，注册在公司，与公司签定劳动合同并在公司交纳社保的专业技术人员达到特定资质所需数量要求；无需资质要求的公司，与公司签定劳动合同并在公司交纳社保各类技术人员数量达到根据公司行业技术特点测算所需各类技术人员数量要求的。满足要求得0.5分，不满足得0分。</td>
                <td>0.5</td>
                <td style="color: #2db7f5">{{basicname.technicalStaffingN}}</td>
                <td style="color: red">{{basicsituation.technicalStaffing}}</td>
            </tr>

            <tr>
                <!-- <td></td> -->
                <!-- <td></td> -->
                <!-- <td></td> -->
                <td>管理和技术人员稳定性(1)</td>
                <td>管理、技术人员离职率（X）：X≤10%得1分； X≥50%得0分； 10%＜X＜50%按公式得分：1- (X×100-10)/(50-10)。</td>
                <td>1</td>
                <td style="color: #2db7f5">{{basicname.managementTechStabilityN}}</td>
                <td style="color: red">{{basicsituation.managementTechStability}}</td>
            </tr>

            <tr>
                <!-- <td></td> -->
                <td rowspan="8">管理能力(9)</td>
                <td>法人治理(1)</td>
                <td>法人治理结构及其运行情况(1)</td>
                <td>股东会、董事会、监事会均设置得0.3分；每少一会扣0.1分；三会会议纪要均完整得0.3分；缺少一会纪要扣0.1分；三会会议决议均有效执行得0.4分，一会会议制度未执行扣0.1分。</td>
                <td>1</td>
                <td style="color: #2db7f5">{{basicname.corporateGovernanceStructureN}}</td>
                <td style="color: red">{{basicsituation.corporateGovernanceStructure}}</td>
            </tr>

            <tr>
                <!-- <td></td> -->
                <!-- <td></td> -->
                <td>管理制度(1)</td>
                <td>制度建设与执行(1)</td>
                <td>各项制度（包括但不限于人事管理制度、仓储管理制度、销售采购管理、质量管理制度、安全管理制度、财务管理制度）是否制定并发布执行，各项制度制定完备得0.25分，各项制度由公司统一签署发布得0.5分，制度有执行证明得0.25分。</td>
                <td>1</td>
                <td style="color: #2db7f5">{{basicname.systemConstructionN}}</td>
                <td style="color: red">{{basicsituation.systemConstruction}}</td>
            </tr>

            <tr>
                <!-- <td></td> -->
                <!-- <td></td> -->
                <td>质量管理(1)</td>
                <td>质量管理体系认证通过和质量管理水平情况(1)</td>
                <td>通过质量管理体系认证且按期年检得1分；近三年有质量管理不良记录和未通过认证得0分。</td>
                <td>1</td>
                <td style="color: #2db7f5">{{basicname.passQualityManagementSystemN}}</td>
                <td style="color: red">{{basicsituation.passQualityManagementSystem}}</td>
            </tr>

            <tr>
                <!-- <td></td> -->
                <!-- <td></td> -->
                <td>服务管理(2)</td>
                <td>售后管理及服务水平(2)</td>
                <td style="text-align:left;">参与《商品售后服务评价体系》国家标准（GB/T27922－2011）星级认证的：达标级售后服务得1分，三星及以上得2分。未参与售后服务星级认证的：专门从事售后服务工作部门得0.5分，无专门的售后服务部门得0分；配置符合岗位要求并有相应资质水平的售后服务技术人员和业务人员得0.5分；在南京设有固定的售后服务场所得0.5分，南京无固定的售后服务场所得0分；售后服务管理实现电子化管理得0.3分，未实现电子化管理得0分；有售后服务档案记录得0.2分，无售后服务档案记录得0分。</td>
                <td>1</td>
                <td style="color: #2db7f5">{{basicname.aftersaleServiceLevelN}}</td>
                <td style="color: red">{{basicsituation.aftersaleServiceLevel}}</td>
            </tr>
            
            <tr>
                <!-- <td></td> -->
                <!-- <td></td> -->
                <td>强制认证(1)</td>
                <td>主要代理产品通过国家强制性认证情况、厂商对其支持情况（1）</td>
                <td>若代理产品需要进行强制认证，通过认证的，得1分，不通过认证的，得0分；若不需要强制认证，获得相关生产许可证的，得1分，不提供相关许可证的，得0分。</td>
                <td>1</td>
                <td style="color: #2db7f5">{{basicname.forceCertN}}</td>
                <td style="color: red">{{basicsituation.forceCert}}</td>
            </tr>

            <tr>
                <!-- <td></td> -->
                <!-- <td></td> -->
                <td>营销网络(1)</td>
                <td>营销网络以及管理水平情况(1)</td>
                <td>有3个营销网点的，得0.15分，3个-10个（含10个）的，得0.25分，10个以上的，得0.5分；南京地区有营销网点的额外增加0.05分；营销售网点得分最高为0.5分。有营销网点管理的具体办法得，得0.2分；提供近一年的“月度销售汇总表”的，得0.3分，无销售汇总表的，得0分。</td>
                <td>1</td>
                <td style="color: #2db7f5">{{basicname.marketingNetworkN}}</td>
                <td style="color: red">{{basicsituation.marketingNetwork}}</td>
            </tr>

            <tr>
                <!-- <td></td> -->
                <!-- <td></td> -->
                <td>环保管理(1)</td>
                <td>通过环保管理体系认证(1)</td>
                <td>通过环保管理体系认证且按期年检得1分；近三年有环保管理不良记录和未通过认证得0分。</td>
                <td>1</td>
                <td style="color: #2db7f5">{{basicname.environmentalManagementCertN}}</td>
                <td style="color: red">{{basicsituation.environmentalManagementCert}}</td>
            </tr>

            <tr>
                <!-- <td></td> -->
                <!-- <td></td> -->
                <td>经营许可(1)</td>
                <td>经营许可(1)</td>
                <td>应当获得，实际获得政府颁发经营许可证和生产商经销许可的，得1分；应当获得，实际未获得政府颁发经营许可证或生产商经销许可的，得0分。</td>
                <td>1</td>
                <td style="color: #2db7f5">{{basicname.businessLicenseN}}</td>
                <td style="color: red">{{basicsituation.businessLicense}}</td>
            </tr>

            <tr>
                <td rowspan="10">二、财务状况(20)</td>
                <td rowspan="4">债权债务(8)</td>
                <td>资产负债率(3)</td>
                <td>（负债总额/资产总额）×100%(3)</td>
                <td>≤优秀值，3分；≥较差值，0分；其余：（较差值－实际值）/（较差值－优秀值）×3。</td>
                <td>3</td>
                <td style="color: #2db7f5">{{basicname.assetLiabilityN}}</td>
                <td style="color: red">{{basicsituation.assetLiability}}</td>
            </tr>

            <tr>
                <!-- <td></td> -->
                <!-- <td></td> -->
                <td>现金流动负债比率(2)</td>
                <td>（年经营现金净流量/年末流动负债）×100%(2)</td>
                <td>≥优秀值，2分；≤较差值，0分；其余：（实际值－较差值）/（优秀值－较差值）×2。</td>
                <td>2</td>
                <td style="color: #2db7f5">{{basicname.cashFlowLiabilityN}}</td>
                <td style="color: red">{{basicsituation.cashFlowLiability}}</td>
            </tr>

            <tr>
                <!-- <td></td> -->
                <!-- <td></td> -->
                <td>速动比率(2)</td>
                <td>（流动资产-存货）/流动负债×100%(2)</td>
                <td>≥优秀值，2分；≤较差值，0分；其余：（实际值－较差值）/（优秀值－较差值）×2。</td>
                <td>2</td>
                <td style="color: #2db7f5">{{basicname.speedRatioN}}</td>
                <td style="color: red">{{basicsituation.speedRatio}}</td>
            </tr>

            <tr>
                <!-- <td></td> -->
                <!-- <td></td> -->
                <td>已获利息倍数(1)</td>
                <td>（利润总额+利息支出）/ 利息支出(1)</td>
                <td>≥优秀值，1分；≤较差值，0分；其余：（实际值－较差值）/（优秀值－较差值）×1。</td>
                <td>1</td>
                <td style="color: #2db7f5">{{basicname.interestMultiplierN}}</td>
                <td style="color: red">{{basicsituation.interestMultiplier}}</td>
            </tr>

            <tr>
                <!-- <td></td> -->
                <td rowspan="3">营运能力(6)</td>
                <td>总资产周转率(2)</td>
                <td>营业收入 / 平均资产总额(2)</td>
                <td>≥优秀值，2分；≤较差值，0分；其余：（实际值－较差值）/（优秀值－较差值）×2。</td>
                <td>2</td>
                <td style="color: #2db7f5">{{basicname.totalAssetTN}}</td>
                <td style="color: red">{{basicsituation.totalAssetT}}</td>
            </tr>

            <tr>
                <!-- <td></td> -->
                <!-- <td></td> -->
                <td>应收账款周转率(2)</td>
                <td>营业收入 / 平均应收账款余额(2)</td>
                <td>≥优秀值，2分；≤较差值，0分；其余：（实际值－较差值）/（优秀值－较差值）×2。</td>
                <td>2</td>
                <td style="color: #2db7f5">{{basicname.receivableTN}}</td>
                <td style="color: red">{{basicsituation.receivableT}}</td>
            </tr>

            <tr>
                <!-- <td></td> -->
                <!-- <td></td> -->
                <td>流动资产周转率(2)</td>
                <td>营业收入 / 平均流动资产总额(2)</td>
                <td>≥优秀值，2分；≤较差值，0分；其余：（实际值－较差值）/（优秀值－较差值）×2。</td>
                <td>2</td>
                <td style="color: #2db7f5">{{basicname.flowAssetTN}}</td>
                <td style="color: red">{{basicsituation.flowAssetT}}</td>
            </tr>

            <tr>
                <!-- <td></td> -->
                <td rowspan="3">盈利能力(6)</td>
                <td>净资产收益率(3)</td>
                <td>（净利润/平均净资产）×100%(3)</td>
                <td>≥优秀值，3分；≤较差值，0分；其余：（实际值－较差值）/（优秀值－较差值）×3。</td>
                <td>3</td>
                <td style="color: #2db7f5">{{basicname.netAssetYN}}</td>
                <td style="color: red">{{basicsituation.netAssetY}}</td>
            </tr>

            <tr>
                <!-- <td></td> -->
                <!-- <td></td> -->
                <td>营业收入利润率(2)</td>
                <td>（营业收入-营业成本-营业税金及附加）/营业收入×100%(2)</td>
                <td>≥优秀值，2分；≤较差值，0分；其余：（实际值－较差值）/（优秀值－较差值）×2。</td>
                <td>2</td>
                <td style="color: #2db7f5">{{basicname.inProfitmarginN}}</td>
                <td style="color: red">{{basicsituation.inProfitmargin}}</td>
            </tr>

            <tr>
                <!-- <td></td> -->
                <!-- <td></td> -->
                <td>盈余现金保障倍数(1)</td>
                <td>年经营现金净流量/净利润(1)</td>
                <td>≥优秀值，1分；≤较差值，0分；其余：（实际值－较差值）/（优秀值－较差值）×1。</td>
                <td>1</td>
                <td style="color: #2db7f5">{{basicname.cashGuaranteeN}}</td>
                <td style="color: red">{{basicsituation.cashGuarantee}}</td>
            </tr>

            <tr>
                <td rowspan="9">三、发展潜力(12)</td>
                <td rowspan="2">行业状况(3)</td>
                <td>产业环境(1)</td>
                <td>宏观经济形势、行业竞争、行业周期、行业政策等外部因素对企业发展的影响情况(1)</td>
                <td>属于国家产业结构调整目录中国家鼓励发展产业，得1分；属于国家产业结构调整目录中国家允许发展产业，得0.7分；属于国家产业结构调整目录中国家限制发展产业，得0.4分；属于国家产业结构调整目录中国家淘汰发展产业，得0分。</td>
                <td>1</td>
                <td style="color: #2db7f5">{{basicname.indusEnvironmentN}}</td>
                <td style="color: red">{{basicsituation.indusEnvironment}}</td>
            </tr>

            <tr>
                <!-- <td></td> -->
                <!-- <td></td> -->
                <td>行业地位(2)</td>
                <td>企业产能、业务规模、经营业绩、员工人数、市场占有率等在其主营行业中所处地位(2)</td>
                <td>企业属于微型企业，得0.5分；小型企业，得1分；中型企业，得1.5分；大型企业，得2分。</td>
                <td>2</td>
                <td style="color: #2db7f5">{{basicname.industryStatusN}}</td>
                <td style="color: red">{{basicsituation.industryStatus}}</td>
            </tr>

            <tr>
                <!-- <td></td> -->
                <td rowspan="2">经营实力(3)</td>
                <td>办公条件(2)</td>
                <td>办公场所、办公设备、运输工具等满足业务发展需要的情况。</td>
                <td style="text-align: left">办公场所的产权属性属于自有的，得0.5分，属于租赁的，得0.25分；办公场所类型为商业用房的，得0.5分，商住两用房的，得0.25分，居民住房的，得0分。办公场所面积：100平方及以上的，得0.5分，100平方米以下的，得0.25分；运输工具自有且能满足业务发展需要的，得0,5分，运输设备租赁且能满足业务发展需要的，得0.25分。</td>
                <td>2</td>
                <td style="color: #2db7f5">{{basicname.equipmentOfficeN}}</td>
                <td style="color: red">{{basicsituation.equipmentOffice}}</td>
            </tr>

            <tr>
                <!-- <td></td> -->
                <!-- <td></td> -->
                <td>主营产品潜力(1)</td>
                <td>主营经销产品的市场占有率增长趋势以及所处的产品生命周期情况（1）</td>
                <td>上一年度，主营经销产品销售额占全部销售产品的销售比例在“80%以下的，得0.25分，在80%及以上的，得0.5分；近三年主营经销产品销售额占全部销售额比例呈上升趋势的，得0.5分，呈下降趋势的，得0分。</td>
                <td>1</td>
                <td style="color: #2db7f5">{{basicname.productPotentialN}}</td>
                <td style="color: red">{{basicsituation.productPotential}}</td>
            </tr>

            <tr>
                <!-- <td></td> -->
                <td rowspan="3">经营增长能力(3)</td>
                <td>销售（营业）增长率(1)</td>
                <td>本年度营业收入增长额/上年度营业收入×100%(1)</td>
                <td>≥优秀值，1分；≤较差值，0分；其余：先计算系数：A=（实际值－较差值）/（优秀值－较差值），得分：A×1。</td>
                <td>1</td>
                <td style="color: #2db7f5">{{basicname.salesGrowthN}}</td>
                <td style="color: red">{{basicsituation.salesGrowth}}</td>
            </tr>

            <tr>
                <!-- <td></td> -->
                <!-- <td></td> -->
                <td>销售（营业）利润增长率(1)</td>
                <td>（本年销售营业利润-上年销售营业利润）/上年销售营业利润×100%(1)</td>
                <td>≥优秀值，1分；≤较差值，0分；其余：先计算系数：A=（实际值－较差值）/（优秀值－较差值），得分：A×1。</td>
                <td>1</td>
                <td style="color: #2db7f5">{{basicname.profitGrowthN}}</td>
                <td style="color: red">{{basicsituation.profitGrowth}}</td>
            </tr>

            <tr>
                <!-- <td></td> -->
                <!-- <td></td> -->
                <td>资本积累率(1)</td>
                <td>（年末所有者权益-年初所有者权益）/年初所有者权益×100%(1)</td>
                <td>≥优秀值，1分；≤较差值，0分；其余：先计算系数：A=（实际值－较差值）/（优秀值－较差值），得分：A×1。</td>
                <td>1</td>
                <td style="color: #2db7f5">{{basicname.capitalRateN}}</td>
                <td style="color: red">{{basicsituation.capitalRate}}</td>
            </tr>

            <tr>
                <!-- <td></td> -->
                <td>发展战略(1)</td>
                <td>发展规划(1)</td>
                <td>发展战略与实施(1)</td>
                <td>近三年发展规划未制定，得0分；近三年发展规划切实可行且执行一般，得0.5分；近三年发展规划切实可行且执行良好，得1分。</td>
                <td>1</td>
                <td style="color: #2db7f5">{{basicname.developmentPlanningN}}</td>
                <td style="color: red">{{basicsituation.developmentPlanning}}</td>
            </tr>

            <tr>
                <!-- <td></td> -->
                <td>社会责任(2)</td>
                <td>社会责任履行(2)</td>
                <td>企业对社会的贡献以及所获奖励等(2)</td>
                <td>近三年获得人民政府或有关部门出具的公开表彰证明的，地市级每项计0.5分，省级每项计1分，国家级每项计2分。累计不超过2分。</td>
                <td>2</td>
                <td style="color: #2db7f5">{{basicname.socialResponsibilityN}}</td>
                <td style="color: red">{{basicsituation.socialResponsibility}}</td>
            </tr>

            <tr>
                <td rowspan="2">四、公共信用监管记录(23)</td>
                <td colspan="2">近三年在注册地工商、税务、建设、人社、环保、交通、水利等行政主管部门及司法机关记录的信用情况(19)</td>
                <td colspan="2">无书面调查结果的，缺少一个部门扣5分；
                有1条一般失信行为记录的，扣1分；有1条较重失信行为记录的，扣3分；有1条严重失信行为记录的，扣5分；
                有5条（含）以上一般失信行为记录，3条（含）以上较重失信行为记录，2条（含）以上严重失信行为记录的，本项不得分。（失信行为认定参考《江苏省社会法人失信惩戒办法(试行)》）</td>
                <td>19</td>
                <td style="color: #2db7f5">{{basicname.departmentRecordOfDisbeliefN}}</td>
                <td style="color: red">{{basicsituation.departmentRecordOfDisbelief}}</td>
            </tr>

            <tr>
                <!-- <td></td> -->
                <td colspan="2">人民银行企业征信报告(4)</td>
                <td>人民银行企业征信报告(4)</td>
                <td>近三年，信贷记录为：1、正常类：不扣分；2、关注类：每笔扣1分；3、不良/违约类：每笔扣4分。扣完为止。</td>
                <td>4</td>
                <td style="color: #2db7f5">{{basicname.reportOfThePeoplesBankOfEnterpriseN}}</td>
                <td style="color: red">{{basicsituation.reportOfThePeoplesBankOfEnterprise}}</td>
            </tr>

            <tr>
                <td rowspan="5">五、招投标监管信息(28)</td>
                <td>招标投标信用记录情况(15)</td>
                <td>近三年招标投标信用记录情况(15)</td>
                <td>招标投标信用记录情况(15)</td>
                <td>企业及其从业人员在招标投标方面的不良记录。涉及招投标处罚的，每条扣15分；涉及不良信用记录的，每条扣5分。扣完为止。</td>
                <td>15</td>
                <td style="color: #2db7f5">{{basicname.biddingCreditRecordingN}}</td>
                <td style="color: red">{{basicsituation.biddingCreditRecording}}</td>
            </tr>

            <tr>
                <!-- <td></td> -->
                <td rowspan="3">合同履约情况(10)</td>
                <td>建设工程中标项目履约情况(5)</td>
                <td>近三年所中标的政府投资、国有投资建设工程项目履约情况，包括质量、交货、服务等方面的履约情况(5)</td>
                <td>近三年未中标上述建设工程项目的，得0分。有一个项目并有完工证明的，得1分,无完工证明有履约情况说明的，得0.5分，最高得5分（以中标通知书为准）。</td>
                <td>5</td>
                <td style="color: #2db7f5">{{basicname.buildingProjectsPerformanceN}}</td>
                <td style="color: red">{{basicsituation.buildingProjectsPerformance}}</td>
            </tr>

            <tr>
                <!-- <td></td> -->
                <!-- <td></td> -->
                <td>其它项目中标履约情况(2)</td>
                <td>近三年其他项目履约情况，包括质量、交货、服务等方面的履约情况(2)</td>
                <td>近三年未中标上述建设工程项目的，得0分。有一个项目并有完工证明的，得0.5分，无完工证明有履约情况说明的，得0.25分，最高得2分（以中标通知书为准）。</td>
                <td>2</td>
                <td style="color: #2db7f5">{{basicname.otherProjectsPerformanceN}}</td>
                <td style="color: red">{{basicsituation.otherProjectsPerformance}}</td>
            </tr>

            <tr>
                <!-- <td></td> -->
                <!-- <td></td> -->
                <td>合同纠纷(3)</td>
                <td>近三年合同纠纷数目(3)</td>
                <td>近三年合同纠纷负主要责任的，有一起扣1分，扣完为止。</td>
                <td>3</td>
                <td style="color: #2db7f5">{{basicname.contactBotherN}}</td>
                <td style="color: red">{{basicsituation.contactBother}}</td>
            </tr>

            <tr>
                <!-- <td></td> -->
                <td>获奖情况(3)</td>
                <td>获奖工程(3)</td>
                <td>参与承建且竣工工程近三年获省及以上建筑工程奖项的，且在参建工程获奖名单中列明的（以取得证书的落款时间为准）。</td>
                <td>国家级的，有一个得3分；省级的，有一个得1.5分。累计不超过3分。</td>
                <td>3</td>
                <td style="color: #2db7f5">{{basicname.awardProjectsN}}</td>
                <td style="color: red">{{basicsituation.awardProjects}}</td>
            </tr>

                
        </tbody>
    </table>
</div>
</template>

<script>
export default {
    props:['basicsituation','basicname']
}
</script>

<style lang="scss" scoped>
 thead td {
    min-width: 76px;
    text-align: center;
    color: #666;
    font-weight: 700;
    height: 55px;
    vertical-align: middle;
    &:nth-of-type(7) {
        color: #2db7f5;
    }
    &:nth-of-type(8) {
        color: #f00;
    }
}
tbody td {
    text-align: center;
    padding: 10px;
    vertical-align: middle;
}
</style>

