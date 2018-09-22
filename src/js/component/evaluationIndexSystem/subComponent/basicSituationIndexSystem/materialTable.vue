<template>
  <table border="1" bordercolor="black">
    <thead>
    <tr>
      <td>一级指标</td>
      <td>二级指标</td>
      <td>三级指标</td>
      <td>四级指标</td>
      <td>评分标准</td>
      <td>分值</td>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td rowspan="19">基本状况(16)</td>
      <td rowspan="4">基本条件(2)</td>
      <td rowspan="2">历史沿革(1)</td>
      <td>成立年限(年)(0.5)</td>
      <td>成立年限>=10年得0.5分;其余按(成立年限/10)*0.5计算</td>
      <td>0.5</td>
      <!--<td style="color: #2db7f5">{{basicname.fixedNumberOfYearsN}}</td>-->
      <!--<td style="color: red">{{basicsituation.fixedNumberOfYears}}</td>-->
    </tr>

    <tr>
      <!-- <td></td> -->
      <!-- <td></td> -->
      <!-- <td></td> -->
      <td>股东背景(0.5)</td>
      <td>在公开市场(包括主板、中小板、创业板、新三板市场等)挂牌交易企业及国有、国有控制>=20%企业得0.5分;其余得0.25分</td>
      <td>0.5</td>
      <!--<td style="color: #2db7f5">{{basicname.shareholderBackgroundN}}</td>-->
      <!--<td style="color: red">{{basicsituation.shareholderBackground}}</td>-->
    </tr>

    <tr>
      <!-- <td></td> -->
      <!-- <td></td> -->
      <td rowspan="2">资本实力(1)</td>
      <td>实收资本(0.5)</td>
      <td>（实收资本/8000万元人民币）≥1得0.5分；其余：按（实收资本/8000万元人民币）×0.5计算值。</td>
      <td>0.5</td>
      <!--<td style="color: #2db7f5">{{basicname.realIncomeCapitalN}}</td>-->
      <!--<td style="color: red">{{basicsituation.realIncomeCapital}}</td>-->
    </tr>

    <tr>
      <!-- <td></td> -->
      <!-- <td></td> -->
      <!-- <td></td> -->
      <td>净资产(0.5)</td>
      <td>净资产/实收资本（X）：X≥1.5得0.5分；1＜X＜1.5按插值（X-1）/（1.5-1）×0.5计算；X≤1得0分。</td>
      <td>0.5</td>
      <!--<td style="color: #2db7f5">{{basicname.netAssetN}}</td>-->
      <!--<td style="color: red">{{basicsituation.netAsset}}</td>-->
    </tr>

    <tr>
      <!-- <td></td> -->
      <!-- <td></td> -->
      <td rowspan="7">人力资源(6)</td>
      <td rowspan="4">高管人员(4)</td>
      <td>高管学历构成(0.5)</td>
      <td>高管人员包括法定代表人、总经理、财务总监。其学历和职称取最高者。得分规则：高管人员中具有本科及以上学历或中级以上职称的比例×0.5。</td>
      <td>0.5</td>
      <!--<td style="color: #2db7f5">{{basicname.seniorExecutiveEducationalBackgroundN}}</td>-->
      <!--<td style="color: red">{{basicsituation.seniorExecutiveEducationalBackground}}</td>-->
    </tr>

    <tr>
      <!-- <td></td> -->
      <!-- <td></td> -->
      <!-- <td></td> -->
      <td>高管从业年限(0.5)</td>
      <td>高管人员平均从业年限（X）：10年及以上得0.5分；10年以下按公式得分：（X/10）×0.5。</td>
      <td>0.5</td>
      <!--<td style="color: #2db7f5">{{basicname.seniorExecutiveYearsN}}</td>-->
      <!--<td style="color: red">{{basicsituation.seniorExecutiveYears}}</td>-->
    </tr>

    <tr>
      <!-- <td></td> -->
      <!-- <td></td> -->
      <!-- <td></td> -->
      <td>高管变动情况(1)</td>
      <td>高管人员调出高管职位变动一次的，扣0.5分；变动两次及以上的，扣1分。</td>
      <td>1</td>
      <!--<td style="color: #2db7f5">{{basicname.changesInSeniorExecutivesN}}</td>-->
      <!--<td style="color: red">{{basicsituation.changesInSeniorExecutives}}</td>-->
    </tr>

    <tr>
      <!-- <td></td> -->
      <!-- <td></td> -->
      <!-- <td></td> -->
      <td>高管信用状况(2)</td>
      <td>高管人员中，每少提供一份个人信用报告的，扣1分。近三年，高管人员中发生逾期的账户，有一条扣0.25分；发生90天以上逾期的账户，有一条扣0.5分。扣完为止。</td>
      <td>2</td>
      <!--<td style="color: #2db7f5">{{basicname.executiveCreditStatusN}}</td>-->
      <!--<td style="color: red">{{basicsituation.executiveCreditStatus}}</td>-->
    </tr>

    <tr>
      <!-- <td></td> -->
      <!-- <td></td> -->
      <td rowspan="3">管理和技术人员(2)</td>
      <td>管理人员学历构成(0.5)</td>
      <td>管理人员包括部门经理级别人员。其学历和职称取最高者。得分规则：管理人员中具有大专以上学历或中级职称以上人数比例×0.5。</td>
      <td>0.5</td>
      <!--<td style="color: #2db7f5">{{basicname.managementEducationalBackgroundN}}</td>-->
      <!--<td style="color: red">{{basicsituation.managementEducationalBackground}}</td>-->
    </tr>

    <tr>
      <!-- <td></td> -->
      <!-- <td></td> -->
      <!-- <td></td> -->
      <td>技术人员配置(0.5)</td>
      <td>根据行业资质管理规定，注册在公司，与公司签定劳动合同并在公司交纳社保的专业技术人员达到特定资质所需数量要求；无需资质要求的公司，与公司签定劳动合同并在公司交纳社保各类技术人员数量达到根据公司行业技术特点测算所需各类技术人员数量要求的。满足要求得0.5分，不满足得0分。</td>
      <td>0.5</td>
      <!--<td style="color: #2db7f5">{{basicname.technicalStaffingN}}</td>-->
      <!--<td style="color: red">{{basicsituation.technicalStaffing}}</td>-->
    </tr>

    <tr>
      <!-- <td></td> -->
      <!-- <td></td> -->
      <!-- <td></td> -->
      <td>管理和技术人员稳定性(1)</td>
      <td>管理、技术人员离职率（X）：X≤10%得1分； X≥50%得0分； 10%＜X＜50%按公式得分：1- (X×100-10)/(50-10)。</td>
      <td>1</td>
      <!--<td style="color: #2db7f5">{{basicname.managementTechStabilityN}}</td>-->
      <!--<td style="color: red">{{basicsituation.managementTechStability}}</td>-->
    </tr>

    <tr>
      <!-- <td></td> -->
      <td rowspan="8">管理能力(8)</td>
      <td>法人治理(1)</td>
      <td>法人治理结构及其运行情况(1)</td>
      <td>股东会、董事会、监事会均设置得0.3分；每少一会扣0.1分；三会会议纪要均完整得0.3分；缺少一会纪要扣0.1分；三会会议决议均有效执行得0.4分，一会会议制度未执行扣0.1分。</td>
      <td>1</td>
      <!--<td style="color: #2db7f5">{{basicname.corporateGovernanceStructureN}}</td>-->
      <!--<td style="color: red">{{basicsituation.corporateGovernanceStructure}}</td>-->
    </tr>

    <tr>
      <!-- <td></td> -->
      <!-- <td></td> -->
      <td>管理制度(1)</td>
      <td>制度建设与执行(1)</td>
      <td>各项制度（包括但不限于人事管理制度、生产管理制度、销售采购管理制度、项目管理制度、质量管理制度、安全管理制度、财务管理制度）是否制定并发布执行，各项制度制定完备得0.25分，各项制度由公司统一签署发布得0.5分，制度有执行证明得0.25分。</td>
      <td>1</td>
      <!--<td style="color: #2db7f5">{{basicname.systemConstructionN}}</td>-->
      <!--<td style="color: red">{{basicsituation.systemConstruction}}</td>-->
    </tr>

    <tr>
      <!-- <td></td> -->
      <!-- <td></td> -->
      <td>产品认证(1)</td>
      <td>产品通过质量管理认证的情况(1)</td>
      <td>若国家需要对产品进行强制认证，通过认证得1分，不通过认证得0分；若不需要强制认证，获得相关生产许可证得1分，不提供相关许可证得0分。</td>
      <td>1</td>
      <!--<td style="color: #2db7f5">{{basicname.passQualityManagementSystemN}}</td>-->
      <!--<td style="color: red">{{basicsituation.passQualityManagementSystem}}</td>-->
    </tr>

    <tr>
      <!-- <td></td> -->
      <!-- <td></td> -->
      <td>服务管理(1)</td>
      <td>售后管理及服务水平(1)</td>
      <td>售后管理水平较差，得0.4分；售后管理制度齐备及指定人员负责，服务质量一般，得0.6分；售后管理制度齐备，有专门人员负责，服务质量较好，得0.8分；售后管理制度完善，人员配备充足，服务质量好，得1分。</td>
      <td>1</td>
      <!--<td style="color: #2db7f5">{{basicname.aftersaleServiceLevelN}}</td>-->
      <!--<td style="color: red">{{basicsituation.aftersaleServiceLevel}}</td>-->
    </tr>

    <tr>
      <!-- <td></td> -->
      <!-- <td></td> -->
      <td>营销网络(1)</td>
      <td>合作关系与成本控制(1)</td>
      <td>营销水平与成本控制能力较差，得0.4分；与上下游建立了必要的合作，原材料及能源价格对企业生产的影响一般，得0.6分；与上下游建立了稳定的合作关系，原材料及能源价格对企业生产的影响较小，成本控制能力较强，得0.8分；与上下游建立了良好的合作关系与完善的营销网络，议价能力强，得1分。</td>
      <td>1</td>
      <!--<td style="color: #2db7f5">{{basicname.partnershipAndCostControlN}}</td>-->
      <!--<td style="color: red">{{basicsituation.partnershipAndCostControl}}</td>-->
    </tr>

    <tr>
      <!-- <td></td> -->
      <!-- <td></td> -->
      <td>质量管理(1)</td>
      <td>质量管理认证(1)</td>
      <td>通过质量管理体系认证且按期年检得1分；近三年有质量管理不良记录和未通过认证得0分。</td>
      <td>1</td>
      <!--<td style="color: #2db7f5">{{basicname.qualityManagementCertN}}</td>-->
      <!--<td style="color: red">{{basicsituation.qualityManagementCert}}</td>-->
    </tr>

    <tr>
      <!-- <td></td> -->
      <!-- <td></td> -->
      <td>安全管理(1)</td>
      <td>安全质量标准化认证(1)</td>
      <td>通过安全管理体系认证且按期年检得1分；近三年有安全管理不良记录和未通过认证得0分。</td>
      <td>1</td>
      <!--<td style="color: #2db7f5">{{basicname.safetyQualityCertN}}</td>-->
      <!--<td style="color: red">{{basicsituation.safetyQualityCert}}</td>-->
    </tr>

    <tr>
      <!-- <td></td> -->
      <!-- <td></td> -->
      <td>环保管理(1)</td>
      <td>通过环保管理体系认证(1)</td>
      <td>通过环保管理体系认证且按期年检得1分；近三年有环保管理不良记录和未通过认证得0分。</td>
      <td>1</td>
      <!--<td style="color: #2db7f5">{{basicname.environmentalManagementCertN}}</td>-->
      <!--<td style="color: red">{{basicsituation.environmentalManagementCert}}</td>-->
    </tr>
    </tbody>
  </table>
</template>

<script>
  export default {

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

