<template>
    <div class="content-container">
        <Title name="信用评分列表"/>
        <div class="table-display">
            <div class="choose">
                <span>选择企业</span>
                <el-select v-model="value" placeholder="请选择" @change="changeEnterType">
                    <el-option
                    v-for="item in options"
                    :key="item.userId"
                    :label="item.enterprisename"
                    :value="item.enterpriseType + '.' + item.userId">
                    </el-option>
                 </el-select>
                <el-button type="primary">确定</el-button>
                <!-- 材料设备制造类 -->
                <div class="table" v-if="enterTypeScore == 'MaterialEquipmentManufacturing'">
                    <MaterialTable :basicsituation="basicsituation" :basicname="basicname"/>
                </div>
                <!-- 批发零售类 -->
                <div class="table" v-if="enterTypeScore == 'WholesaleAndRetailTrade'">
                    <WholeSaleTable :basicsituation="basicsituation" :basicname="basicname"/>
                </div>
                
                <!-- 施工类 -->
                <div class="table" v-if="enterTypeScore == 'Construction'">
                    <Construction :basicsituation="basicsituation" :basicname="basicname"/>
                </div>

                <!-- 服务类 -->
                <div class="table" v-if="enterTypeScore == 'Services'">
                    <Services :basicsituation="basicsituation" :basicname="basicname"/>
                </div>

                <div class="score" v-if="enterTypeScore !=''">
                    <span style="font-weight:700;">总得分：{{totleScore}}</span>    
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
import Title from '../../../public/title.vue'
import MaterialTable from './materialTable.vue'
import WholeSaleTable from './wholeSaleTable.vue'
import Construction from './construction.vue'
import Services from './services.vue'
export default {
    data() {
        return {
            basicsituation: {},
            basicname: {},
            totleScore: 0,
            options: [],
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
        enterTypeScore() {
            return this.$store.store.state.enterTypeScore
        }
    },
    created() {
        this.getEnterName()
        // console.log(this.basicsituation)
    },
    destroyed() {
        this.$store.store.commit('changeTypeScore','')
    },
    methods: {
        getEnterName() {
            let id = JSON.parse(localStorage.getItem('USER_INFO')).id
            this.$http.get(`enter/findEntername.action?id=${id}`)
            .then( res => {
                if( res.status == 200 ) {
                    this.options = res.data.responseCode
                }
            } )
        },
        changeEnterType(sel) {
            let userId = sel.split('.')[1]
            let enterType = sel.split('.')[0]
            this.$http.get(`score/scorecount.action?user_id=${userId}&type=${enterType}`)
            .then( res => {
                this.basicsituation = res.data.responseCode.basicsituation
                this.basicname = res.data.responseCode.basicname
                // console.log(this.basicname)
            }).then( () => {
                let totleScore = 0
                for (const key in this.basicsituation) {
                    if (this.basicsituation.hasOwnProperty(key)) {
                        const element = this.basicsituation[key]
                        totleScore += element
                    }
                }
                this.totleScore = totleScore.toFixed(2)
            } )
            this.$store.store.commit('changeTypeScore',enterType)
        }
    },

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
                font-weight: 500;
                font-size: 18px;
                color: #666;
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

