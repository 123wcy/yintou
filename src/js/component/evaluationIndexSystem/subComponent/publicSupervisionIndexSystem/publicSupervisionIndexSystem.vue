<template>
    <div class="content-container">
        <Title name="公共监管指标体系"/>
      <div class="table-display">
        <div class="choose">
          <span>选择领域</span>
          <el-select v-model="value" placeholder="请选择" @change="changeEnterType">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-button type="primary" size="small">确定</el-button>

          <!-- 材料设备制造类 -->
          <div class="table" v-if="enterTypeTitle == 'MaterialEquipmentManufacturing'">
            <MaterialTable/>
          </div>
          <!-- 批发零售类 -->
          <div class="table" v-if="enterTypeTitle == 'WholesaleAndRetailTrade'">
            <WholeSaleTable/>
          </div>

          <!-- 施工类 -->
          <div class="table" v-if="enterTypeTitle == 'Construction'">
            <Construction/>
          </div>

          <!-- 服务类 -->
          <div class="table" v-if="enterTypeTitle == 'Services'">
            <Services/>
          </div>
          <!--<div class="score">-->
          <!--<span>总得分：{{totleScore}}</span>-->
          <!--</div>-->
        </div>
      </div>
    </div>
</template>

<script>
  import Title from '../../../../public/title'
  import MaterialTable from './materialTable.vue'
  import WholeSaleTable from './wholeSaleTable.vue'
  import Construction from './construction.vue'
  import Services from './services.vue'

  export default {
    data() {
      return {
        options:[{
          label:'材料设备制造类',
          value:'MaterialEquipmentManufacturing'
        },{
          label:'批发零售(贸易)类',
          value:'WholesaleAndRetailTrade'
        },{
          label:'施工类',
          value:'Construction'
        },{
          label:'服务类',
          value:'Services'
        }
        ],
        value: ''
      }
    },
    components: {
      Title,
      MaterialTable,
      WholeSaleTable,
      Construction,
      Services
    },
    computed: {
      enterTypeTitle() {
        return this.$store.store.state.enterTypeTitle
      }
    },
    destroyed() {
      this.$store.store.commit('changeTypeTitle','')
    },
    methods: {
      changeEnterType(sel) {
        this.$store.store.commit('changeTypeTitle',sel)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .content-container {
    width: 100%;
    height: 710px;
    background-color: #fff;
    margin-top: 10px;
    overflow: hidden;
    .table-display {
      width: 1000px;
      height: 612px;
      border: 1px solid #ccc;
      margin: 0 0 0 36px;
      overflow: hidden;
      background-color: #f2f2f2;
      position: relative;
      .choose {
        margin: 15px 0 15px 15px;
        span {
          font-weight: 700;
          color: #666;
          margin-right: 10px;
        }
        select {
          min-width: 180px;
          height: 28px;
          font-size: 16px;
          border-radius: 4px;
          vertical-align: bottom;
          margin-right: 10px;
        }
        .table {
          width: 886px;
          height: 460px;
          background-color: #fff;
          margin: 20px 0 0 40px;
          padding-top: 10px;
          font-size: 13px;
          overflow: scroll;

        }
      }
    }
    .score {
      span {
        color: #f00 !important;
      }
      text-align: right;
      padding-right: 50px;
      padding-top: 20px;
    }
  }
</style>
