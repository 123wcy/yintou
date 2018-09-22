<template>
    <div class="enterprise-apply">
        <div class="data-container">
            <h4 class="title">法人治理结构</h4>
            <form class="form">
                <div class="input-container">
                    <label for="supervisorsnum" style="width:200px;height:50px">监事会是否设置？:</label>
                    <select v-model="corporateInfo.supervisorsnum" id="one">
                        <option value="1">是</option>
                        <option value="0">否</option>
                    </select>
                </div>

                <div class="input-container">
                    <label for="supervisorsmeet" style="width:200px;height:50px">监事会会议是否按时召开？:</label>
                    <select v-model="corporateInfo.supervisorsmeet" id="two">
                        <option value="1">是</option>
                        <option value="0">否</option>
                    </select>
                </div>

                <div class="input-container">
                    <label for="supervisorsimpl" style="width:200px;height:50px">监事会会议是否有效执行？:</label>
                    <select v-model="corporateInfo.supervisorsimpl" id="three">
                        <option value="1">是</option>
                        <option value="0">否</option>
                    </select>
                </div>

                <div class="input-container">
                    <label for="shareholdernum" style="width:200px;height:50px">股东会是否设置？:</label>
                    <select v-model="corporateInfo.shareholdernum">
                        <option value="1">是</option>
                        <option value="0">否</option>
                    </select>
                </div>

                <div class="input-container">
                    <label for="shareholdermeet" style="width:200px;height:50px">股东会会议是否按时召开？:</label>
                    <select v-model="corporateInfo.shareholdermeet">
                        <option value="1">是</option>
                        <option value="0">否</option>
                    </select>
                </div>

                <div class="input-container">
                    <label for="shareholdeimpl" style="width:200px;height:50px">股东会会议是否有效执行？:</label>
                    <select v-model="corporateInfo.shareholdeimpl">
                        <option value="1">是</option>
                        <option value="0">否</option>
                    </select>
                </div>

                <div class="input-container">
                    <label for="boardnum" style="width:200px;height:50px">董事会是否设置？:</label>
                    <select v-model="corporateInfo.boardnum">
                        <option value="1">是</option>
                        <option value="0">否</option>
                    </select>
                </div>

                <div class="input-container">
                    <label for="boardmeet" style="width:200px;height:50px">董事会会议是否按时召开？:</label>
                    <select v-model="corporateInfo.boardmeet">
                        <option value="1">是</option>
                        <option value="0">否</option>
                    </select>
                </div>

                <div class="input-container">
                    <label for="boardimpl" style="width:200px;height:50px">董事会会议是否有效执行？:</label>
                    <select v-model="corporateInfo.boardimpl">
                        <option value="1">是</option>
                        <option value="0">否</option>
                    </select>
                </div>

                <div class="input-container">
                    <label for="governance" style="width:200px;height:50px">法人治理结构描述:</label>
                    <textarea name="governance" id="governance" cols="30" rows="10" v-model="corporateInfo.governance"></textarea>
                    <span>不得超过2000个汉字!</span>
                </div>
            </form>
            <el-button type="primary" id="submit" @click="updateEnterInfo" v-if="hasData">提交</el-button>
            <el-button type="primary" id="submit" @click="insertCorporateInfo" v-if="!hasData">提交</el-button>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            corporateInfo: {},
            hasData: false
        }
    },
    created() {
        this.getCorporateInfo()
    },
    components: {
    },
    methods: {
        // 获信息
        getCorporateInfo() {
            let enterid = localStorage.getItem('id')
            this.$http.get(`governance/find.action?user_id=${enterid}`).then(
                res => {
                    console.log(res.data)
                    if( res.data.responseDesc == '查询成功' && res.data.responseCode.length != 0 ){
                        this.corporateInfo = res.data.responseCode[0]
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
        updateEnterInfo() {
            let enterdata = JSON.stringify(this.corporateInfo)
            this.$http({
                url: 'governance/update.action',
                method: 'post',
                data: enterdata,

            }).then( res => {
                if( res.data.responseDesc == '修改成功' ) {
                    this.$message({
                        message: '更新成功',
                        type: 'success'
                    })
                }
                this.getCorporateInfo()
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
        insertCorporateInfo() {
            this.corporateInfo.userId = localStorage.getItem('id')
            let formData = JSON.stringify(this.corporateInfo)
            this.$http({
                url: 'governance/insert.action',
                method: 'post',
                data: formData
            }).then( res => {
                if( res.data.responseCode == 1 ) {
                    // 弹出消息框
                    this.$message( {
                        message: '添加成功',
                        type: 'success'
                    } )
                    this.getCorporateInfo()  // 重新获取数据
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



