<template>
    <div class="enterprise-apply">
        <div class="data-container">
            <h4 class="title">社会责任</h4>
            <form class="form">
                <div class="input-container">
                    <label for="comdationDs" style="width:200px;height:50px">近三年获得人民政府或有关部门出具的表彰证明数量（地市级）:</label>
                    <input type="number" min="0" name="comdationDs" id="lastYear" v-model="responsibility.comdationDs">
                </div>

                <div class="input-container">
                    <label for="comdationSs" style="width:200px;height:50px">近三年获得人民政府或有关部门出具的表彰证明数量（省市级）:</label>
                    <input type="number" min="0" name="comdationSs" id="comdationSs" v-model="responsibility.comdationSs">
                </div>

                <div class="input-container">
                    <label for="comdationGj" style="width:200px;height:50px">近三年获得人民政府或有关部门出具的表彰证明数量（国家级）:</label>
                    <input type="number" min="0" name="comdationGj" id="comdationGj" v-model="responsibility.comdationGj">
                </div>
            </form>
            <el-button type="primary" id="submit" @click="updateResponsibility" v-if="hasData">提交</el-button>
            <el-button type="primary" id="submit" @click="insertResponsibility" v-if="!hasData">提交</el-button>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            responsibility: {},
            hasData: false
        }
    },
    computed: {
        enterType() {
            return this.$store.store.state.enterType 
        }
    },
    created() {
        this.getResponsibility()
    },
    methods: {
        // 获取信息
        getResponsibility() {
            let enterid = localStorage.getItem('id')
            this.$http.get(`responsibility/find.action?user_id=${enterid}`).then(
                res => {
                    console.log(res.data)
                    if(res.data.responseDesc == '查询成功' && res.data.responseCode.length != 0){
                        this.responsibility = res.data.responseCode[0]
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
        updateResponsibility() {
            let formData = JSON.stringify(this.responsibility)
            this.$http({
                url: 'responsibility/update.action',
                method: 'post',
                data: formData,

            }).then( res => {
                if( res.data.responseDesc == '修改成功' ) {
                    this.$message({
                        message: '更新成功',
                        type: 'success'
                    })
                }
                this.getResponsibility()
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
        insertResponsibility() {
            this.responsibility.userId = localStorage.getItem('id')
            let formData = JSON.stringify(this.responsibility)
            this.$http({
                url: 'responsibility/insert.action',
                method: 'post',
                data: formData
            }).then( res => {
                if( res.data.responseCode == 1 ) {
                    // 弹出消息框
                    this.$message( {
                        message: '添加成功',
                        type: 'success'
                    } )
                    this.getResponsibility()  // 重新获取数据
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



