<template>
    <div class="enterprise-apply">
        <div class="data-container">
            <h4 class="title">办公条件</h4>
            <form class="form">
                <div  v-if="enterType == 'WholesaleAndRetailTrade'">
                    <div class="input-container">
                        <label for="projectManager" style="width:270px;height:50px">办公场所的产权属性:</label>
                        <select v-model="office.officeSpace">
                            <option value="0">自有</option>
                            <option value="1">租赁</option>
                        </select>
                    </div>

                    <div class="input-container">
                        <label for="spaceType" style="width:270px;height:50px">办公场所类型:</label>
                        <select v-model="office.spaceType">
                            <option value="0">商业用房</option>
                            <option value="1">商住两用房</option>
                            <option value="2">居民住房</option>
                        </select>
                    </div>

                    <div class="input-container">
                        <label for="spaceArea" style="width:270px;height:50px">办公场所面积:</label>
                        <select v-model="office.spaceArea">
                            <option value="0">100平方及以上</option>
                            <option value="1">100平方米以下</option>
                        </select>
                    </div>
                    <div class="input-container">
                        <label for="projectAccidents" style="width:270px;height:50px">运输工具:</label>
                        <select v-model="office.conveyance">
                            <option value="0">自有且能满足业务发展需要</option>
                            <option value="1">租赁且能满足业务发展需要</option>
                        </select>
                    </div>
                </div>

                <div v-if="enterType == 'Services'">
                    <div class="input-container">
                        <label for="projectAccidents" style="width:270px;height:50px">办公场所能否满足资质需求:</label>
                        <select v-model="office.aptitudeDemand">
                            <option value="1">是</option>
                            <option value="0">否</option>
                        </select>
                    </div>
                    <div class="input-container">
                        <label for="projectAccidents" style="width:270px;height:50px">办公场所仪器设备、计算机软件、专用软件配置是否齐全:</label>
                        <select v-model="office.equipment">
                            <option value="1">是</option>
                            <option value="0">否</option>
                        </select>
                    </div>
                </div>
                
            </form>
            <el-button type="primary" id="submit" @click="updateOffice" v-if="hasData">提交</el-button>
            <el-button type="primary" id="submit" @click="insertOffice" v-if="!hasData">提交</el-button>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            office: {},
            hasData: false
        }
    },
    computed: {
        enterType() {
            return this.$store.store.state.enterType 
        }
    },
    created() {
        this.getOffice()
    },
    methods: {
        // 获取信息
        getOffice() {
            let enterid = localStorage.getItem('id')
            this.$http.get(`office/find.action?user_id=${enterid}`).then(
                res => {
                    console.log(res.data)
                    if(res.data.responseDesc == '查询成功' && res.data.responseCode.length != 0){
                        this.office = res.data.responseCode[0]
                        this.hasData = true
                    }else if(res.data.responseDesc == '查询成功' && res.data.responseCode.length == 0){
                        this.hasData = false
                    }
                }
            ).catch( err => {
                if(err) {
                    this.$message({
                        message: '网络错误',
                        type: 'error'
                    })
                }
            } )
        },
        // 更新信息
        updateOffice() {
            let formData = JSON.stringify(this.office)
            this.$http({
                url: 'office/update.action',
                method: 'post',
                data: formData,

            }).then( res => {
                if( res.data.responseDesc == '修改成功' ) {
                    this.$message({
                        message: '更新成功',
                        type: 'success'
                    })
                }
                this.getOffice()
            }).catch( err => {
                if(err) {
                    this.$message({
                        message: '网络错误',
                        type: 'error'
                    })
                }
            })
        },
        //新增
        insertOffice() {
            this.office.userId = localStorage.getItem('id')
            let formData = JSON.stringify(this.office)
            this.$http({
                url: 'office/insert.action',
                method: 'post',
                data: formData
            }).then( res => {
                if( res.data.responseCode == 1 ) {
                    // 弹出消息框
                    this.$message( {
                        message: '添加成功',
                        type: 'success'
                    } )
                    this.getOffice()  // 重新获取数据
                }
            } ).catch( err => {
                this.$message( {
                    message: '添加失败',
                    type: 'error'
                } )
            } )
        },
    },
    
}
</script>

<style lang="scss" scoped>
@import "../../../../css/form.scss";
#submit {
    display: block;
    margin: 10px auto;
}
textarea {
    padding: 5px 10px;
    font-family: "Microsoft Yahei";
    color: #666;
}
</style>



