<template>
    <div class="enterprise-apply">
        <div class="data-container">
            <h4 class="title">
                股东之间的关联关系、近三年股东变化情况、控股股东基本情况介绍
            </h4>
            <form>
                <div class="subtitle">股东之间的关联关系、近三年股东变化情况、控股股东基本情况介绍 :</div>
                <textarea name="textarea" id="textarea" cols="30" rows="10" maxlength="2000" v-model="relationship.holderChange">
                </textarea>
                <span>不要超过2000个汉字!</span>
                <el-button type="primary" @click="updateRelationship" v-if="hasData">提 交</el-button>
                <el-button type="primary" @click="insertRelationship" v-if="!hasData">提 交</el-button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            relationship:{
            },
            hasData: false
        }
    },
    components: {
    },
    created() {
        this.getRelationship()
    },
    methods: {
        // 获取数据
        getRelationship() {
            let id = localStorage.getItem('id')
            this.$http.get(`/relationship/find.action?user_id=${id}`)
            .then( res => {
                if( res.data.responseDesc == '查询成功' && res.data.responseCode != 0 ){
                    this.relationship = res.data.responseCode[0]
                    this.hasData = true
                } else if(res.data.responseDesc == '查询成功' && res.data.responseCode.length == 0){
                    this.hasData = false
                }
            } ).catch( err => {
                console.log(err)
            } ) 
        },
        // 更新数据
        updateRelationship() {
            const formData = JSON.stringify(this.relationship)   
            this.updateInfo( 'relationship/update.action', formData, this.getRelationship)
        },
        //新增
        insertRelationship() {
            this.relationship.userId = localStorage.getItem('id')
            let formData = JSON.stringify(this.relationship)
            this.$http({
                url: 'relationship/insert.action',
                method: 'post',
                data: formData
            }).then( res => {
                if( res.data.responseCode == 1 ) {
                    // 弹出消息框
                    this.$message( {
                        message: '添加成功',
                        type: 'success'
                    } )
                    this.getRelationship()  // 重新获取数据
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
@import '../../../../css/form.scss';
@import '../../../../css/textarea.scss'

</style>

