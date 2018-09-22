<template>
    <div class="enterprise-apply">
        <!-- <applyTitle /> -->
        <!-- 表单部分 -->
        <div class="data-container">
            <h4 class="title">企业基本情况</h4>
            <form class="form">
                <div class="input-container">
                    <label for="legalRepresentative">法人代表人姓名:</label>
                    <input type="text" name="legalRepresentative" v-model="enterdata.legalRepresentative">
                </div>

                <div class="input-container">
                    <label for="residence">住所:</label>
                    <input type="text" name="residence" v-model="enterdata.residence">
                </div>

                <div class="input-container">
                    <label for="postalcode">邮政编码:</label>
                    <input type="text" name="postalcode" v-model="enterdata.postalcode">
                </div>

                <div class="input-container">
                    <label for="telephone">联系电话:</label>
                    <input type="text" name="telephone" v-model="enterdata.telephone">
                    <span>格式:区号-电话号码-分机,如:025-88888888-8888,区号必须输入,没有分机号可以不输入.或输入11位手机号码</span>
                </div>

                <div class="input-container">
                    <label for="registeredCapital">注册资本（万元）:</label>
                    <input type="text" name="registeredCapital" v-model="enterdata.registeredCapital">
                </div>

                <div class="input-container">
                    <label for="currency">经济类型</label>
                    <select name="currency" id="currency" v-model="enterdata.currency">
                        <option value="1">人民币</option>
                        <option value="2">美元</option>
                    </select>
                </div>

                <div class="input-container">
                    <label for="capitalCollection">实收资本（元）:</label>
                    <input type="text" name="capitalCollection" v-model="enterdata.capitalCollection">
                </div>

                <div class="input-container">
                    <label for="industryType">企业所处行业大类:</label>
                    <select v-model="enterdata.industryname">
                        <option value="农、林、牧、渔业">农、林、牧、渔业</option>
                        <option value="工业">工业</option>
                        <option value="建筑业">建筑业</option>
                        <option value="批发业">批发业</option>
                        <option value="零售业">零售业</option>
                        <option value="交通运输业">交通运输业</option>
                        <option value="仓储业">仓储业</option>
                        <option value="邮政业">邮政业</option>
                        <option value="住宿业">住宿业</option>
                        <option value="餐饮业">餐饮业</option>
                        <option value="信息传输业">信息传输业</option>
                        <option value="软件和信息技术服务业">软件和信息技术服务业</option>
                        <option value="房地产开发经营">房地产开发经营</option>
                        <option value="物业管理">物业管理</option>
                        <option value="租赁和商务服务业">租赁和商务服务业</option>
                        <option value="其他未列明行业">其他未列明行业</option>
                    </select>
                </div>

                <div class="input-container">
                    <label for="codeUnified">统一社会信用代码:</label>
                    <input type="text" name="codeUnified" v-model="enterdata.codeUnified">
                </div>

                <div class="input-container">
                    <label for="foundingTime">成立日期:</label>
                    <Datepicker class="datepicker" id="foundingTime" v-model="enterdata.foundingTime" language="zh" format="yyyy年MM月dd日"></Datepicker>  
                </div>

                <div class="input-container">
                    <label for="enterpriseBigsmall">从业人员:</label>
                    <input type="text" name="enterpriseBigsmall" v-model="enterdata.enterpriseBigsmall">
                </div>

                <div class="input-container">
                    <label for="businessScope">经营范围:</label>
                    <textarea name="businessScope" id="businessScope" cols="30" rows="10" v-model="enterdata.businessScope"></textarea>
                    <span>不得超过75个汉字</span>
                </div>

                <div class="input-container">
                    <label for="bigType">经济行业(一级):</label>
                    <select name="bigType" id="bigType" v-model="enterdata.bigType">
                        <option v-for="item in oneLevel" 
                                :value="item.industryName" 
                                :key="item.id">
                                {{item.industryName}}
                        </option>
                    </select>
                </div>

                <div class="input-container">
                    <label for="minorType">经济行业(二级):</label>
                    <select name="minorType" id="minorType" v-model="enterdata.minorType">
                        <option  v-for="item in twoLevel" 
                                 :value="item.industryName" 
                                 :key="item.id">
                                 {{item.industryName}}
                        </option>
                    </select>
                </div>

                <div class="input-container">
                    <label for="smallType">经济行业(三级):</label>
                    <select name="smallType" id="smallType" v-model="enterdata.smallType">
                        <option  v-for="item in threeLevel" 
                                 :value="item.industryName" 
                                 :key="item.id">
                                 {{item.industryName}}
                        </option>
                    </select>
                </div>

                <div class="input-container">
                    <label for="ssmalltype">经济行业(四级):</label>
                    <select name="ssmalltype" id="ssmalltype" v-model="enterdata.ssmalltype">
                        <option  v-for="item in fourLevel" 
                                 :value="item.industryName" 
                                 :key="item.id">
                                 {{item.industryName}}
                        </option>
                    </select>
                </div>

                <div class="input-container">
                    <label for="sssmalltype">经济行业(五级):</label>
                    <select name="sssmalltype" id="sssmalltype" v-model="enterdata.sssmalltype">
                        <option v-for="item in fiveLevel" 
                                :key="item.id" 
                                :value="item.industryName">
                                {{item.industryName}}
                        </option>
                    </select>
                    <span>不同行业的信用评价标准不同,请按大、中、小类依次选择企业主营业务所属行业！</span>
                </div>

                <div class="input-container">
                    <label for="enterpriseType">企业类型:</label>
                    <select name="enterpriseType" id="enterpriseType" v-model="enterdata.enterpriseType">
                        <option value="Services">服务类</option>
                        <option value="Construction">建筑类</option>
                        <option value="WholesaleAndRetailTrade">批发零售类</option>
                        <option value="MaterialEquipmentManufacturing">材料设备制造类</option>
                    </select>
                    <i>请按照营业执照上的企业类型进行选择</i>
                </div>

                <div class="input-container">
                    <label for="codeCertificate">组织机构代码:</label>
                    <input type="text" name="codeCertificate" v-model="enterdata.codeCertificate">
                    <span>请填写组织机构证上的代码,填写格式如:XXXXXXX-X,X代表数字或大写拉丁字母</span>
                </div>

                <div class="input-container">
                    <label for="accountOpening">基本开户行:</label>
                    <input type="text" name="accountOpening" v-model="enterdata.accountOpening">
                </div>

                <div class="input-container">
                    <label for="locanCard">贷款证号:</label>
                    <input type="text" name="locanCard" v-model="enterdata.locanCard">
                </div>

                <div class="input-container">
                    <label for="accountNumber">账号:</label>
                    <input type="text" name="accountNumber" v-model="enterdata.accountNumber">
                </div>

                <div class="input-container">
                    <label for="account">上传附件:</label>
                    <el-upload
                        class="upload-demo"
                        action="http://192.168.3.33:8080/YinTouXY/file/FileUpload.action"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        list-type="picture"
                        :file-list="fileList2"
                        :on-success="handleSuccess"
                        >
                        <el-button size="small" type="primary">点击上传</el-button>
                    </el-upload>
                </div>
                
                <input type="button" value="提交" id="btn" @click="dialogVisible = true"> 
            </form>
        </div>

        <!-- 对话框 -->

        <el-dialog
            title="确认提交"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose">
            <span>确定要提交吗</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="updateEnterInfo" v-if="hasData">确 定</el-button>
                <el-button type="primary" @click="insertEnterInfo" v-if="!hasData">确 定</el-button>
            </span> 
        </el-dialog>
    </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
export default {
    data() {
      return {
             enterdata: {
                codeUnified:'',
                residence: '',
                legalRepresentative: '',
                currency: '',
                registeredCapital: '',
                enterpriseType: '',
                businessScope: '',
                foundingTime: '',
                postalcode: '',
                telephone: '',
                codeCertificate: '',
                codeUnified: '',
                bigType: '',
                minorType: '',
                smallType: '',
                ssmalltype: '',
                sssmalltype: '',
                accountOpening: '',
                locanCard: '',
                accountNumber: '',
                userId: '',
                enterpriseBigsmall:'',
                capitalCollection:''
            },
            dialogVisible: false,
            fileList2: [],
            oneLevel: [],
            twoLevel: [],
            threeLevel: [],
            fourLevel: [],
            fiveLevel: [],
            hasData: false
      }
    },
    created() {
        let id = localStorage.getItem('id')
        this.enterdata.userId = id
        this.getInfo()
    },
    mounted() {
        this.getOneLevel()        
        this.getTwoLevel()
        this.getThreeLevel()
        this.getFourLevel()
        this.getFiveLevel()
    },
    components: {
        Datepicker
    },
    methods: {
        handleClose(done) {
            done()
        },
        handleRemove(file, fileList2) {
            console.log(file, fileList2);
        },
        handlePreview(file, fileList2) {
            console.log(file, fileList2);
        },
        handleSuccess(fileList2) {
            console.log(fileList2)
        },

        // 获取企业信息
        getInfo() {
            let enterid = localStorage.getItem('id')
            this.$http.get(`enter/find.action?user_id=${enterid}`).then(
                res => {
                    console.log(res.data)
                    if(res.data.responseDesc == '查询成功' && res.data.responseCode.length != 0){
                        this.enterdata = res.data.responseCode[0]
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
        // 更新企业信息
        updateEnterInfo() {
            let enterdata = JSON.stringify(this.enterdata)
            this.$http({
                url: 'enter/update.action',
                method: 'post',
                data: enterdata,

            }).then( res => {
                if( res.data.responseDesc == '修改成功' ) {
                    this.$message({
                        message: '更新成功',
                        type: 'success'
                    })
                }
                this.getInfo()
            }).catch( err => {
                if(err) {
                    this.$message({
                        message: '网络错误',
                        type: 'error'
                    })
                }
            })
            this.dialogVisible = false                                    
        },

        //新增
        insertEnterInfo() {
            this.enterdata.userId = localStorage.getItem('id')
            let formData = JSON.stringify(this.enterdata)
            this.$http({
                url: 'enter/insert.action',
                method: 'post',
                data: formData
            }).then( res => {
                if( res.data.responseCode == 1 ) {
                    // 弹出消息框
                    this.$message( {
                        message: '添加成功',
                        type: 'success'
                    } )
                    this.getInfo()  // 重新获取数据
                }
            } ).catch( err => {
                this.$message( {
                    message: '添加失败',
                    type: 'error'
                } )
            } )
            this.dialogVisible = false                        
        },

        //查询一级企业类型
        getOneLevel() {
            this.$http.get('level/onelevel.action')
            .then( res => {
                // console.log(res.data)
                if( res.data.responseCode.length != 0 ) {
                    this.oneLevel = res.data.responseCode
                }

            } )
        },
        //查询二级企业类型
        getTwoLevel() {
            const bigType = document.querySelector(`#bigType`)
            bigType.addEventListener('change', e => {
            const ev = e || window.event
            const target = ev.target || ev.srcElement
            const value = target.value
            let targetItem = this.oneLevel.filter( (item,index,array) => {
                return item.industryName == value
            } )
            let targetId = targetItem[0].id
            this.$http.get(`level/downlevel.action?id=${targetId}`)
            .then( res => {
                if( res.data.responseCode.length != 0 ) {
                    this.twoLevel = res.data.responseCode
                }
            } )
            .catch( err => {
                console.log(err)
            } )
            },false)
        },
        //查询三级企业
        getThreeLevel() {
            const minorType = document.querySelector('#minorType')
            const smallType = document.querySelector('#smallType')
            minorType.addEventListener('change', e => {
            const ev = e || window.event
            const target = ev.target || ev.srcElement
            const value = target.value
            let targetItem = this.twoLevel.filter( (item,index,array) => {
                return item.industryName == value
            } )
            let targetId = targetItem[0].id
            this.$http.get(`level/downlevel.action?id=${targetId}`)
            .then( res => {
                if( res.data.responseCode.length != 0 ) {
                    this.threeLevel = res.data.responseCode
                }else {
                    this.threeLevel = ''
                }
                
            } )
            .catch( err => {
                console.log(err)
            } )
            },false) 
        },
        //查询四级
        getFourLevel() {
            const smallType = document.querySelector('#smallType')
            const ssmalltype = document.querySelector('#ssmalltype')
            smallType.addEventListener('change', e => {
            const ev = e || window.event
            const target = ev.target || ev.srcElement
            const value = target.value
            let targetItem = this.threeLevel.filter( (item,index,array) => {
                return item.industryName == value
            } )
            let targetId = targetItem[0].id
            this.$http.get(`level/downlevel.action?id=${targetId}`)
            .then( res => {
                if( res.data.responseCode.length != 0 ) {
                    this.fourLevel = res.data.responseCode
                }else {
                    this.fourLevel = ''
                }
            } )
            .catch( err => {
                console.log(err)
            } )
            },false) 
        },
        //查询五级
        getFiveLevel() {
            const ssmalltype = document.querySelector('#ssmalltype')
            const sssmalltype = document.querySelector('#sssmalltype')
            ssmalltype.addEventListener('change', e => {
            const ev = e || window.event
            const target = ev.target || ev.srcElement
            const value = target.value
            let targetItem = this.fourLevel.filter( (item,index,array) => {
                return item.industryName == value
            } )
            let targetId = targetItem[0].id
            this.$http.get(`level/downlevel.action?id=${targetId}`)
            .then( res => {
                if( res.data.responseCode.length != 0 ) {
                    this.fiveLevel = res.data.responseCode
                }else {
                    this.fiveLevel = ''
                }
            } )
            .catch( err => {
                console.log(err)
            } )
            },false) 
        },

    }
}
</script>

<style lang="scss" scoped>
@import '../../../../css/form.scss';
</style>

