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
        <td rowspan="2">公共信用监管记录(23)</td>
        <td colspan="2">近三年在注册地工商、税务、建设、人社、环保、交通、水利等行政主管部门及司法机关记录的信用情况(19)</td>
        <td colspan="2">无书面调查结果的，缺少一个部门扣5分；
          有1条一般失信行为记录的，扣1分；有1条较重失信行为记录的，扣3分；有1条严重失信行为记录的，扣5分；
          有5条（含）以上一般失信行为记录，3条（含）以上较重失信行为记录，2条（含）以上严重失信行为记录的，本项不得分。（失信行为认定参考《江苏省社会法人失信惩戒办法(试行)》）</td>
        <td>19</td>
      </tr>

      <tr>
        <!-- <td></td> -->
        <td colspan="2">人民银行企业征信报告(4)</td>
        <td>人民银行企业征信报告(4)</td>
        <td>近三年，信贷记录为：1、正常类：不扣分；2、关注类：每笔扣1分；3、不良/违约类：每笔扣4分。扣完为止。</td>
        <td>4</td>
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

