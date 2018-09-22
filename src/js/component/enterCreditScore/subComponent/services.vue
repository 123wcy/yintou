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
                <td rowspan="19">一、基本状况(16)</td>
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
                <td>（实收资本/500万元人民币）≥1得0.5分；其余：按（实收资本/500万元人民币）×0.5计算值。</td>
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
                <td>管理制度完备程度以及执行情况(1)</td>
                <td>各项制度（包括但不限于人事管理制度、业务管理制度、质量管理制度、安全管理制度、财务管理制度）是否制定并发布执行，各项制度制定完备得0.25分，各项制度由公司统一签署发布得0.5分，制度有执行证明得0.25分。</td>
                <td>1</td>
                <td style="color: #2db7f5">{{basicname.systemConstructionN}}</td>
                <td style="color: red">{{basicsituation.systemConstruction}}</td>
            </tr>
            
            <tr>
                <!-- <td></td> -->
                <!-- <td></td> -->
                <td rowspan="2">资质情况(3)</td>
                <td>主要业务资质等级(2)</td>
                <td>在公司主要经营业务所需资质中，若资质有等级划分，则有最高资质等级的得1分，每多一个一级得0.5分，每多一个二级得0.2分，累计不超过2分。</td>
                <td>2</td>
                <td style="color: #2db7f5">{{basicname.majorBusinessQualificationN}}</td>
                <td style="color: red">{{basicsituation.majorBusinessQualification}}</td>
            </tr>

            <tr>
                <!-- <td></td> -->
                <!-- <td></td> -->
                <!-- <td></td> -->
                <td>其他资质(1)</td>
                <td>除上述所计资质以外，每有一项与公司经营业务相关的资质得0.3分，累计不超过1分。</td>
                <td>1</td>
                <td style="color: #2db7f5">{{basicname.otherQualificationN}}</td>
                <td style="color: red">{{basicsituation.otherQualification}}</td>
            </tr>

            <tr>
                <!-- <td></td> -->
                <!-- <td></td> -->
                <td rowspan="2">项目管理(1)</td>
                <td>项目管理(0.5)</td>
                <td>建立了完善的项目管理制度体系，包括时间、费用、质量、人力等管理体系的，得0.5分；不完善的酌情扣分。</td>
                <td>0.5</td>
                <td style="color: #2db7f5">{{basicname.projectManagmentN}}</td>
                <td style="color: red">{{basicsituation.projectManagment}}</td>
            </tr>

            <tr>
                <!-- <td></td> -->
                <!-- <td></td> -->
                <!-- <td></td> -->
                <td>项目执行能力(0.5)</td>
                <td>项目执行过程中，按照建立的项目管理体系执行各项工作，并有完整的管理记录的，得0.5分；管理记录不完整的酌情扣分。</td>
                <td>0.5</td>
                <td style="color: #2db7f5">{{basicname.projectExeCapacityN}}</td>
                <td style="color: red">{{basicsituation.projectExeCapacity}}</td>
            </tr>

            <tr>
                <!-- <td></td> -->
                <!-- <td></td> -->
                <td>质量管理(1)</td>
                <td>质量管理体系认证通过和质量管理水平情况(1)</td>
                <td>通过质量管理体系认证且按期年检得1分；近三年有质量管理不良记录和未通过认证得0分。</td>
                <td>1</td>
                <td style="color: #2db7f5">{{basicname.qualityManagementCertN}}</td>
                <td style="color: red">{{basicsituation.qualityManagementCert}}</td>
            </tr>
            
            <tr>
                <!-- <td></td> -->
                <!-- <td></td> -->
                <td>安全管理(1)</td>
                <td>安全管理体系认证通过和安全管理水平情况(1)</td>
                <td>通过安全管理体系认证且按期年检得1分；近三年有安全管理不良记录和未通过认证得0分。</td>
                <td>1</td>
                <td style="color: #2db7f5">{{basicname.safetyQualityCertN}}</td>
                <td style="color: red">{{basicsituation.safetyQualityCert}}</td>
            </tr>
            


            <tr>
                <td rowspan="10">二、财务状况(20)</td>
                <td rowspan="4">债权债务(8)</td>
                <td>资产负债率(3)</td>
                <td>（负债总额/资产总额）×100%(3)</td>
                <td>≤优秀值，3分；≥较差值，0分；其余：先计算系数：A=（较差值－实际值）/（较差值－优秀值），得分：A×3。</td>
                <td>3</td>
                <td style="color: #2db7f5">{{basicname.assetLiabilityN}}</td>
                <td style="color: red">{{basicsituation.assetLiability}}</td>
            </tr>

            <tr>
                <!-- <td></td> -->
                <!-- <td></td> -->
                <td>现金流动负债比率(2)</td>
                <td>（年经营现金净流量/年末流动负债）×100%(2)</td>
                <td>≥优秀值，2分；≤较差值，0分；其余：先计算系数：A=（实际值－较差值）/（优秀值－较差值），得分：A×2。</td>
                <td>2</td>
                <td style="color: #2db7f5">{{basicname.cashFlowLiabilityN}}</td>
                <td style="color: red">{{basicsituation.cashFlowLiability}}</td>
            </tr>

            <tr>
                <!-- <td></td> -->
                <!-- <td></td> -->
                <td>速动比率(2)</td>
                <td>（流动资产-存货）/流动负债×100%(2)</td>
                <td>≥优秀值，2分；≤较差值，0分；其余：先计算系数：A=（实际值－较差值）/（优秀值－较差值），得分：A×2。</td>
                <td>2</td>
                <td style="color: #2db7f5">{{basicname.speedRatioN}}</td>
                <td style="color: red">{{basicsituation.speedRatio}}</td>
            </tr>

            <tr>
                <!-- <td></td> -->
                <!-- <td></td> -->
                <td>利息保障倍数(1)</td>
                <td>（利润总额+利息支出）/ 利息支出(1)</td>
                <td>≥优秀值，1分；≤较差值，0分；其余：先计算系数：A=（实际值－较差值）/（优秀值－较差值），得分：A×1。</td>
                <td>1</td>
                <td style="color: #2db7f5">{{basicname.interestMultiplierN}}</td>
                <td style="color: red">{{basicsituation.interestMultiplier}}</td>
            </tr>

            <tr>
                <!-- <td></td> -->
                <td rowspan="3">营运能力(6)</td>
                <td>总资产周转率(2)</td>
                <td>营业收入 / 平均资产总额(2)</td>
                <td>≥优秀值，2分；≤较差值，0分；其余：先计算系数：A=（实际值－较差值）/（优秀值－较差值），得分：A×2。</td>
                <td>2</td>
                <td style="color: #2db7f5">{{basicname.totalAssetTN}}</td>
                <td style="color: red">{{basicsituation.totalAssetT}}</td>
            </tr>

            <tr>
                <!-- <td></td> -->
                <!-- <td></td> -->
                <td>应收账款周转率(2)</td>
                <td>营业收入 / 平均应收账款余额(2)</td>
                <td>≥优秀值，2分；≤较差值，0分；其余：先计算系数：A=（实际值－较差值）/（优秀值－较差值），得分：A×2。</td>
                <td>2</td>
                <td style="color: #2db7f5">{{basicname.receivableTN}}</td>
                <td style="color: red">{{basicsituation.receivableT}}</td>
            </tr>

            <tr>
                <!-- <td></td> -->
                <!-- <td></td> -->
                <td>流动资产周转率(2)</td>
                <td>营业收入 / 平均流动资产总额(2)</td>
                <td>≥优秀值，2分；≤较差值，0分；其余：先计算系数：A=（实际值－较差值）/（优秀值－较差值），得分：A×2。</td>
                <td>2</td>
                <td style="color: #2db7f5">{{basicname.flowAssetTN}}</td>
                <td style="color: red">{{basicsituation.flowAssetT}}</td>
            </tr>

            <tr>
                <!-- <td></td> -->
                <td rowspan="3">盈利能力(6)</td>
                <td>净资产收益率(3)</td>
                <td>（净利润/平均净资产）×100%(3)</td>
                <td>≥优秀值，3分；≤较差值，0分；其余：先计算系数：A=（实际值－较差值）/（优秀值－较差值），得分：A×3。</td>
                <td>3</td>
                <td style="color: #2db7f5">{{basicname.netAssetYN}}</td>
                <td style="color: red">{{basicsituation.netAssetY}}</td>
            </tr>

            <tr>
                <!-- <td></td> -->
                <!-- <td></td> -->
                <td>销售(营业)收入利润率(2)</td>
                <td>（营业收入-营业成本-营业税金及附加）/ 营业收入×100%(2)</td>
                <td>≥优秀值，2分；≤较差值，0分；其余：先计算系数：A=（实际值－较差值）/（优秀值－较差值），得分：A×2。</td>
                <td>2</td>
                <td style="color: #2db7f5">{{basicname.inProfitmarginN}}</td>
                <td style="color: red">{{basicsituation.inProfitmargin}}</td>
            </tr>

            <tr>
                <!-- <td></td> -->
                <!-- <td></td> -->
                <td>盈余现金保障倍数(1)</td>
                <td>年经营现金净流量/净利润(1)</td>
                <td>≥优秀值，1分；≤较差值，0分；其余：先计算系数：A=（实际值－较差值）/（优秀值－较差值），得分：A×1。</td>
                <td>1</td>
                <td style="color: #2db7f5">{{basicname.cashGuaranteeN}}</td>
                <td style="color: red">{{basicsituation.cashGuarantee}}</td>
            </tr>

            <tr>
                <td rowspan="11">三、发展潜力(12)</td>
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
                <td rowspan="4">技术实力(4)</td>
                <td rowspan="2">办公条件(1)</td>
                <td>办公场所满足资质与业务发展要求（0.5）</td>
                <td style="text-align: left">办公场所能满足资质需求的，得0.25分，不满足的，得0分；办公场所仪器设备、计算机软件、专用软件配置齐全的，得0.25分，不齐全的，得0分。</td>
                <td>0.5</td>
                <td style="color: #2db7f5">{{basicname.equipmentOfficeN}}</td>
                <td style="color: red">{{basicsituation.equipmentOffice}}</td>
            </tr>

            <tr>
                <!-- <td></td> -->
                <!-- <td></td> -->
                <!-- <td></td> -->
                <td>固定资产成新率(0.5)</td>
                <td>固定资产成新率≥80%；得0.5分；固定资产成新率≤50％,得0分；50％＜固定资产成新率＜80％，得0.3分。</td>
                <td>0.5</td>
                <td style="color: #2db7f5">{{basicname.fixedAssetsTN}}</td>
                <td style="color: red">{{basicsituation.fixedAssetsT}}</td>
            </tr>


            <tr>
                <!-- <td></td> -->
                <!-- <td></td> -->
                <td>研发经费(1)</td>
                <td>最近三个财务年度研发费用占营业收入的比例（%）（1）</td>
                <td>研发费用比例=近三年的研发费用总额/近三年的销售收入总额。若为高新技术企业，直接给予满分。若不是高新技术企业，无研发费用的，得0分，有研发费用得分如下：1、最近一年销售收入小于5000万元的企业，比例≥4%，得1分；＜4%，先计算研发费占收入比率A=研发费/销售收入，得分=A/4%×0.5。2、最近一年销售收入在5，000万元至20，000万元的企业，比例≥3%，得1分；＜3%，先计算研发费占收入比率A=研发费/销售收入，得分=A/3%×0.5。3、最近一年销售收入在20，000万元以上的企业，比例≥2%得1分；＜2%，先计算研发费占收入比率A=研发费/销售收入，得分=A/2%×0.5。</td>
                <td>1</td>
                <td style="color: #2db7f5">{{basicname.researchFundsN}}</td>
                <td style="color: red">{{basicsituation.researchFunds}}</td>
            </tr>

            <tr>
                <!-- <td></td> -->
                <!-- <td></td> -->
                <td>研发成果(2)</td>
                <td>近三年取得发明专利、省（部）级以上科技奖项的情况（1）</td>
                <td>近三年未取得发明专利、著作权得0分；近三年取得发明专利、著作权得0.5分/项，累计不超过1分。</td>
                <td>1</td>
                <td style="color: #2db7f5">{{basicname.researchResultsN}}</td>
                <td style="color: red">{{basicsituation.researchResults}}</td>
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

