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
        <td rowspan="10">财务状况(20)</td>
        <td rowspan="4">债权债务(8)</td>
        <td>资产负债率(3)</td>
        <td>（负债总额/资产总额）×100%(3)</td>
        <td>≤优秀值，3分；≥较差值，0分；其余：（较差值－实际值）/（较差值－优秀值）×3。</td>
        <td>3</td>
      </tr>

      <tr>
        <!-- <td></td> -->
        <!-- <td></td> -->
        <td>现金流动负债比率(2)</td>
        <td>（年经营现金净流量/年末流动负债）×100%(2)</td>
        <td>≥优秀值，2分；≤较差值，0分；其余：（实际值－较差值）/（优秀值－较差值）×2。</td>
        <td>2</td>
      </tr>

      <tr>
        <!-- <td></td> -->
        <!-- <td></td> -->
        <td>速动比率(2)</td>
        <td>（流动资产-存货）/流动负债×100%(2)</td>
        <td>≥优秀值，2分；≤较差值，0分；其余：（实际值－较差值）/（优秀值－较差值）×2。</td>
        <td>2</td>
      </tr>

      <tr>
        <!-- <td></td> -->
        <!-- <td></td> -->
        <td>已获利息倍数(1)</td>
        <td>（利润总额+利息支出）/ 利息支出(1)</td>
        <td>≥优秀值，1分；≤较差值，0分；其余：（实际值－较差值）/（优秀值－较差值）×1。</td>
        <td>1</td>
      </tr>

      <tr>
        <!-- <td></td> -->
        <td rowspan="3">营运能力(6)</td>
        <td>总资产周转率(2)</td>
        <td>营业收入 / 平均资产总额(2)</td>
        <td>≥优秀值，2分；≤较差值，0分；其余：（实际值－较差值）/（优秀值－较差值）×2。</td>
        <td>2</td>
      </tr>

      <tr>
        <!-- <td></td> -->
        <!-- <td></td> -->
        <td>应收账款周转率(2)</td>
        <td>营业收入 / 平均应收账款余额(2)</td>
        <td>≥优秀值，2分；≤较差值，0分；其余：（实际值－较差值）/（优秀值－较差值）×2。</td>
        <td>2</td>
      </tr>

      <tr>
        <!-- <td></td> -->
        <!-- <td></td> -->
        <td>流动资产周转率(2)</td>
        <td>营业收入 / 平均流动资产总额(2)</td>
        <td>≥优秀值，2分；≤较差值，0分；其余：（实际值－较差值）/（优秀值－较差值）×2。</td>
        <td>2</td>
      </tr>

      <tr>
        <!-- <td></td> -->
        <td rowspan="3">盈利能力(6)</td>
        <td>净资产收益率(3)</td>
        <td>（净利润/平均净资产）×100%(3)</td>
        <td>≥优秀值，3分；≤较差值，0分；其余：（实际值－较差值）/（优秀值－较差值）×3。</td>
        <td>3</td>
      </tr>

      <tr>
        <!-- <td></td> -->
        <!-- <td></td> -->
        <td>营业收入利润率(2)</td>
        <td>（营业收入-营业成本-营业税金及附加）/营业收入×100%(2)</td>
        <td>≥优秀值，2分；≤较差值，0分；其余：（实际值－较差值）/（优秀值－较差值）×2。</td>
        <td>2</td>
      </tr>

      <tr>
        <!-- <td></td> -->
        <!-- <td></td> -->
        <td>盈余现金保障倍数(1)</td>
        <td>年经营现金净流量/净利润(1)</td>
        <td>≥优秀值，1分；≤较差值，0分；其余：（实际值－较差值）/（优秀值－较差值）×1。</td>
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

