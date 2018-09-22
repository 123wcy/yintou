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
      <td rowspan="5">招投标监管信息(28)</td>
      <td>招标投标信用记录情况(15)</td>
      <td>近三年招标投标信用记录情况(15)</td>
      <td>招标投标信用记录情况(15)</td>
      <td>企业及其从业人员在招标投标方面的不良记录。涉及招投标处罚的，每条扣15分；涉及不良信用记录的，每条扣5分。扣完为止。</td>
      <td>15</td>
    </tr>

    <tr>
      <!-- <td></td> -->
      <td rowspan="3">合同履约情况(10)</td>
      <td>建设工程中标项目履约情况(5)</td>
      <td>近三年所中标的政府投资、国有投资建设工程项目履约情况，包括质量、交货、服务等方面的履约情况(5)</td>
      <td>近三年未中标上述建设工程项目的，得0分。有一个项目并有完工证明的，得1分,无完工证明有履约情况说明的，得0.5分，最高得5分（以中标通知书为准）。</td>
      <td>5</td>
    </tr>

    <tr>
      <!-- <td></td> -->
      <!-- <td></td> -->
      <td>其它项目中标履约情况(2)</td>
      <td>近三年其他项目履约情况，包括质量、交货、服务等方面的履约情况(2)</td>
      <td>近三年未中标上述建设工程项目的，得0分。有一个项目并有完工证明的，得0.5分，无完工证明有履约情况说明的，得0.25分，最高得2分（以中标通知书为准）。</td>
      <td>2</td>
    </tr>

    <tr>
      <!-- <td></td> -->
      <!-- <td></td> -->
      <td>合同纠纷(3)</td>
      <td>近三年合同纠纷数目(3)</td>
      <td>近三年合同纠纷负主要责任的，有一起扣1分，扣完为止。</td>
      <td>3</td>
    </tr>

    <tr>
      <!-- <td></td> -->
      <td>获奖情况(3)</td>
      <td>获奖工程(3)</td>
      <td>参与承建且竣工工程近三年获省及以上建筑工程奖项的，且在参建工程获奖名单中列明的（以取得证书的落款时间为准）。</td>
      <td>国家级的，有一个得3分；省级的，有一个得1.5分。累计不超过3分。</td>
      <td>3</td>
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

