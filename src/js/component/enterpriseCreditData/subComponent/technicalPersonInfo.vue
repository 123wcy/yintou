<template>
    <div class="enterprise-apply">
        <div class="data-container">
            <h4 class="title">执证专业技术人员概述</h4>
            <form class="form">
                <div class="input-container">
                    <label for="ptitude" style="width:200px;height:50px">执证专业技术人员种类以及数量是否符合资质规定？:</label>
                    <select v-model="artisanSummary.ptitude">
                        <option value="true">是</option>
                        <option value="false">否</option>
                    </select>
                </div>

                <div class="input-container">
                    <label for="business" style="width:200px;height:50px">执证专业技术人员种类以及数量是否满足业务发展需要？：</label>
                    <select v-model="artisanSummary.business">
                        <option value="true">是</option>
                        <option value="false">否</option>
                    </select>
                </div>
            </form>
            <el-button type="primary" id="submit" @click="updateArtisanSummary" v-if="hasData">提交</el-button>
            <el-button type="primary" id="submit" @click="insertArtisanSummary" v-if="!hasData">提交</el-button>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            artisanSummary:{},
            hasData: false
        }
    },
    components: {
    },
    created() {
        this.getArtisanSummary()
    },
    methods: {
        getArtisanSummary() {
            let enterid = localStorage.getItem('id')
            this.$http.get(`artisansummary/find.action?user_id=${enterid}`).then(
                res => {
                    if(res.data.responseDesc == '查询成功' && res.data.responseCode.length != 0){
                        this.artisanSummary = res.data.responseCode[0]
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
        updateArtisanSummary() {
            this.artisanSummary.userId = localStorage.getItem('id')
            let formdata = JSON.stringify(this.artisanSummary)
            this.$http({
                url: 'artisansummary/update.action',
                method: 'post',
                data: formdata,

            }).then( res => {
                if( res.data.responseDesc == '修改成功' ) {
                    this.$message({
                        message: '更新成功',
                        type: 'success'
                    })
                }
                this.getArtisanSummary()
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
        insertArtisanSummary() {
            this.artisanSummary.userId = localStorage.getItem('id')
            let formData = JSON.stringify(this.artisanSummary)
            this.$http({
                url: 'artisansummary/insert.action',
                method: 'post',
                data: formData
            }).then( res => {
                if( res.data.responseCode == 1 ) {
                    // 弹出消息框
                    this.$message( {
                        message: '添加成功',
                        type: 'success'
                    } )
                    this.getArtisanSummary()  // 重新获取数据
                }
            } ).catch( err => {
                this.$message( {
                    message: '添加失败',
                    type: 'error'
                } )
            } )
        },
    }
}
</script>

<style lang="scss" scoped>
@import "../../../../css/form.scss";
#submit {
    display: block;
    margin: 10px auto;
}
</style>



