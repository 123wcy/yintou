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
      <td rowspan="19">基本状况(17)</td>
      <td rowspan="4">基本条件(2)</td>
      <td rowspan="2">历史沿革(1)</td>
      <td>成立年限(年)(0.5)</td>
      <td>成立年限>=8年得0.5分;其余按(成立年限/8)*0.5计算</td>
      <td>0.5</td>
    </tr>

    <tr>
      <!-- <td></td> -->
      <!-- <td></td> -->
      <!-- <td></td> -->
      <td>股东背景(0.5)</td>
      <td>在公开市场(包括主板、中小板、创业板、新三板市场等)挂牌交易企业及国有、国有控制>=20%企业得0.5分;其余得0.25分</td>
      <td>0.5</td>
    </tr>

    <tr>
      <!-- <td></td> -->
      <!-- <td></td> -->
      <td rowspan="2">资本实力(1)</td>
      <td>实收资本(0.5)</td>
      <td>（实收资本/1000万元人民币）≥1得0.5分；其余：按（实收资本/1000万元人民币）×0.5计算值。</td>
      <td>0.5</td>
    </tr>

    <tr>
      <!-- <td></td> -->
      <!-- <td></td> -->
      <!-- <td></td> -->
      <td>净资产(0.5)</td>
      <td>净资产/实收资本（X）：X≥1.5得0.5分；1＜X＜1.5按插值（X-1）/（1.5-1）×0.5计算；X≤1得0分。</td>
      <td>0.5</td>
    </tr>

    <tr>
      <!-- <td></td> -->
      <!-- <td></td> -->
      <td rowspan="7">人力资源(6)</td>
      <td rowspan="4">高管人员(4)</td>
      <td>高管学历构成(0.5)</td>
      <td>高管人员包括法定代表人、总经理、财务总监。其学历和职称取最高者。得分规则：高管人员中具有本科及以上学历或中级以上职称的比例×0.5。</td>
      <td>0.5</td>
    </tr>

    <tr>
      <!-- <td></td> -->
      <!-- <td></td> -->
      <!-- <td></td> -->
      <td>高管从业年限(0.5)</td>
      <td>高管人员平均从业年限（X）：10年及以上得0.5分；10年以下按公式得分：（X/10）×0.5。</td>
      <td>0.5</td>
    </tr>

    <tr>
      <!-- <td></td> -->
      <!-- <td></td> -->
      <!-- <td></td> -->
      <td>高管变动情况(1)</td>
      <td>高管人员调出高管职位变动一次的，扣0.5分；变动两次及以上的，扣1分。</td>
      <td>1</td>
    </tr>

    <tr>
      <!-- <td></td> -->
      <!-- <td></td> -->
      <!-- <td></td> -->
      <td>高管信用状况(2)</td>
      <td>高管人员中，每少提供一份个人信用报告的，扣1分。近三年，高管人员中发生逾期的账户，有一条扣0.25分；发生90天以上逾期的账户，有一条扣0.5分。扣完为止。</td>
      <td>2</td>
    </tr>

    <tr>
      <!-- <td></td> -->
      <!-- <td></td> -->
      <td rowspan="3">管理和技术人员(2)</td>
      <td>管理人员学历构成(0.5)</td>
      <td>管理人员包括部门经理级别人员。其学历和职称取最高者。得分规则：管理人员中具有大专以上学历或中级职称以上人数比例×0.5。</td>
      <td>0.5</td>
    </tr>

    <tr>
      <!-- <td></td> -->
      <!-- <td></td> -->
      <!-- <td></td> -->
      <td>技术人员配置(0.5)</td>
      <td>根据行业资质管理规定，注册在公司，与公司签定劳动合同并在公司交纳社保的专业技术人员达到特定资质所需数量要求；无需资质要求的公司，与公司签定劳动合同并在公司交纳社保各类技术人员数量达到根据公司行业技术特点测算所需各类技术人员数量要求的。满足要求得0.5分，不满足得0分。</td>
      <td>0.5</td>
    </tr>

    <tr>
      <!-- <td></td> -->
      <!-- <td></td> -->
      <!-- <td></td> -->
      <td>管理和技术人员稳定性(1)</td>
      <td>管理、技术人员离职率（X）：X≤10%得1分； X≥50%得0分； 10%＜X＜50%按公式得分：1- (X×100-10)/(50-10)。</td>
      <td>1</td>
    </tr>

    <tr>
      <!-- <td></td> -->
      <td rowspan="8">管理能力(9)</td>
      <td>法人治理(1)</td>
      <td>法人治理结构及其运行情况(1)</td>
      <td>股东会、董事会、监事会均设置得0.3分；每少一会扣0.1分；三会会议纪要均完整得0.3分；缺少一会纪要扣0.1分；三会会议决议均有效执行得0.4分，一会会议制度未执行扣0.1分。</td>
      <td>1</td>
    </tr>

    <tr>
      <!-- <td></td> -->
      <!-- <td></td> -->
      <td>管理制度(1)</td>
      <td>制度建设与执行(1)</td>
      <td>各项制度（包括但不限于人事管理制度、仓储管理制度、销售采购管理、质量管理制度、安全管理制度、财务管理制度）是否制定并发布执行，各项制度制定完备得0.25分，各项制度由公司统一签署发布得0.5分，制度有执行证明得0.25分。</td>
      <td>1</td>
    </tr>

    <tr>
      <!-- <td></td> -->
      <!-- <td></td> -->
      <td>质量管理(1)</td>
      <td>质量管理体系认证通过和质量管理水平情况(1)</td>
      <td>通过质量管理体系认证且按期年检得1分；近三年有质量管理不良记录和未通过认证得0分。</td>
      <td>1</td>
    </tr>

    <tr>
      <!-- <td></td> -->
      <!-- <td></td> -->
      <td>服务管理(2)</td>
      <td>售后管理及服务水平(2)</td>
      <td style="text-align:left;">参与《商品售后服务评价体系》国家标准（GB/T27922－2011）星级认证的：达标级售后服务得1分，三星及以上得2分。未参与售后服务星级认证的：专门从事售后服务工作部门得0.5分，无专门的售后服务部门得0分；配置符合岗位要求并有相应资质水平的售后服务技术人员和业务人员得0.5分；在南京设有固定的售后服务场所得0.5分，南京无固定的售后服务场所得0分；售后服务管理实现电子化管理得0.3分，未实现电子化管理得0分；有售后服务档案记录得0.2分，无售后服务档案记录得0分。</td>
      <td>1</td>
    </tr>

    <tr>
      <!-- <td></td> -->
      <!-- <td></td> -->
      <td>强制认证(1)</td>
      <td>主要代理产品通过国家强制性认证情况、厂商对其支持情况（1）</td>
      <td>若代理产品需要进行强制认证，通过认证的，得1分，不通过认证的，得0分；若不需要强制认证，获得相关生产许可证的，得1分，不提供相关许可证的，得0分。</td>
      <td>1</td>
    </tr>

    <tr>
      <!-- <td></td> -->
      <!-- <td></td> -->
      <td>营销网络(1)</td>
      <td>营销网络以及管理水平情况(1)</td>
      <td>有3个营销网点的，得0.15分，3个-10个（含10个）的，得0.25分，10个以上的，得0.5分；南京地区有营销网点的额外增加0.05分；营销售网点得分最高为0.5分。有营销网点管理的具体办法得，得0.2分；提供近一年的“月度销售汇总表”的，得0.3分，无销售汇总表的，得0分。</td>
      <td>1</td>
    </tr>

    <tr>
      <!-- <td></td> -->
      <!-- <td></td> -->
      <td>环保管理(1)</td>
      <td>通过环保管理体系认证(1)</td>
      <td>通过环保管理体系认证且按期年检得1分；近三年有环保管理不良记录和未通过认证得0分。</td>
      <td>1</td>
    </tr>

    <tr>
      <!-- <td></td> -->
      <!-- <td></td> -->
      <td>经营许可(1)</td>
      <td>经营许可(1)</td>
      <td>应当获得，实际获得政府颁发经营许可证和生产商经销许可的，得1分；应当获得，实际未获得政府颁发经营许可证或生产商经销许可的，得0分。</td>
      <td>1</td>
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

