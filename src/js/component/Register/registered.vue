<template>
  <div class="login-container">
    <section class="login">
		<div class="logo">
		</div>
		<h1 class="title">用户注册</h1>
		<p class="info">请您填写以下注册信息（带<span style="color: red;">*</span>号的是必须填写的内容）。</p>
		<form>
			<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="110px" class="demo-ruleForm">
				<el-form-item label="用户名" prop="userName">
					<el-input type="text" v-model="ruleForm2.userName" auto-complete="off" placeholder="4-16位字符，请使用英文字母a-z、A-Z，数字0-9，或下划线＿组成。"></el-input>
				</el-form-item>
				<el-form-item label="密码" prop="password">
					<el-input type="password" v-model="ruleForm2.password" auto-complete="off" placeholder="使用英文字母或数字，长度为6-16个字符，区分英文字母大小写。"></el-input>
				</el-form-item>
				<el-form-item label="确认密码" prop="checkPass">
					<el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="请再次输入密码"></el-input>
				</el-form-item>
				<el-form-item label="用户类型" prop="userType">
					<el-select v-model="ruleForm2.userType" placeholder="请选择用户类型">
						<el-option
						v-for="item in userType"
						:key="item.value"
						:label="item.label"
						:value="item.value">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="企业名称" prop="enterpriseName">
					<el-input type="text" v-model="ruleForm2.enterpriseName" auto-complete="off" placeholder="请输入企业的完整名称，须与工商营业执照上的企业名称一致！"></el-input>
				</el-form-item>
				<el-form-item label="企业类型" prop="enterpriseType">
					<el-select v-model="ruleForm2.enterpriseType" placeholder="请选择企业类型">
						<el-option
						v-for="item in options"
						:key="item.value"
						:label="item.label"
						:value="item.value">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="办公地址" prop="enterpriseAddress">
					<el-input type="text" v-model="ruleForm2.enterpriseAddress" auto-complete="off" placeholder="请输入办公地址"></el-input>
				</el-form-item>
				<el-form-item label="联系人姓名" prop="linkman">
					<el-input type="text" v-model="ruleForm2.linkman" auto-complete="off" placeholder="请填写真实姓名，以便联系！"></el-input>
				</el-form-item>
				<el-form-item label="固定电话" prop="telephone">
					<el-input type="text" v-model="ruleForm2.telephone" auto-complete="off" placeholder="例：025-88888888-8888，区号必须要输入，没有分机号可不输。"></el-input>
				</el-form-item>
				<el-form-item label="手机号码" prop="mobilephone">
					<el-input type="text" v-model="ruleForm2.mobilephone" auto-complete="off" placeholder="请输入11位手机号码！"></el-input>
				</el-form-item>
				<el-form-item label="邮箱" prop="email">
					<el-input type="text" v-model="ruleForm2.email" auto-complete="off" placeholder="请输入邮箱"></el-input>
				</el-form-item>
				<el-form-item label="QQ号码" prop="qq">
					<el-input type="text" v-model="ruleForm2.qq" auto-complete="off" placeholder="请输入QQ号码（选填）"></el-input>
				</el-form-item>
				<el-form-item label="微信号码" prop="wechat">
					<el-input type="text" v-model="ruleForm2.wechat" auto-complete="off" placeholder="请输入微信号码（选填）"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
					<el-button @click="resetForm('ruleForm2')">重置</el-button>
				</el-form-item>
			</el-form>
		</form>
      
    </section>
  </div>
</template>
<script>
  export default {
    data() {
		var validateUsername = ( rule,value,callback ) => {
			if (value === '' ) {
				callback( new Error('请输入用户名') )
			} else if ( !(/^[a-zA-Z0-9_]{4,16}$/.test( value )) ){
				callback( new Error('用户名格式：4-16位字符，请使用英文字母a-z、A-Z，数字0-9，或下划线＿组成') )
			} else if ( value !='' && /^[a-zA-Z0-9_]{4,16}$/.test( value ) ){
				this.$http.get(`user/validatename.action?username=${value}`)
				.then( res => {
					if( res.data.responseDesc == '账号可用' ) {
						callback()
					} else if ( res.data.responseDesc == '已存在相同账号' ){
						callback( new Error('用户名已被注册') )
					}
				} )
			}
		}
		var validatePass = (rule, value, callback) => {
			if (value === '') {
			callback(new Error('请输入密码'))
			} else if ( !(/^[0-9a-zA-Z]{6,16}$/.test( value )) ) {
				callback( new Error('密码格式：使用英文字母或数字，长度为6-16个字符，区分英文字母大小写。') )
			}else {
				if (this.ruleForm2.checkPass !== '') {
					this.$refs.ruleForm2.validateField('checkPass')
				}
				callback()
			}
		}
		var validatePass2 = (rule, value, callback) => {
			if (value === '') {
				callback(new Error('请再次输入密码'));
				} else if (value !== this.ruleForm2.password) {
				callback(new Error('两次输入密码不一致!'))
				} else {
				callback()
			}
		}
		var validateUserType = (rule, value, callback) => {
			if (value === '') {
				callback(new Error('请选择用户类型'))
			} else {
				callback()
			}
		}
		var validateEnterName = (rule, value, callback) => {
			if (value === '') {
				callback(new Error('请输入企业名称'))
			} else {
				callback()
			}
		}
		var validateEnterType = (rule, value, callback) => {
			if (value === '') {
				callback(new Error('请选择企业类型'))
			} else {
				callback()
			}
		}
		var validateAddress = (rule, value, callback) => {
			if (value === '') {
				callback(new Error('请输入办公地址'))
			} else {
				callback()
			}
		}
		var validateLinkName = (rule, value, callback) => {
			if (value === '') {
				callback(new Error('请填写真实姓名，以便联系'))
			} else {
				callback()
			}
		}
		var validateEmail = ( rule,value,callback ) => {
			if (value === '' ) {
				callback( new Error('请输入邮箱') )
			} else if ( !(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test( value )) ){
				callback( new Error('请输入正确格式的邮箱') )
			} else {
				callback()
			}
		}
		var validateLinkPhone = ( rule,value,callback ) => {
			if (value === '' ) {
				callback( new Error('请输入联系人固定电话') )
			} else if ( !(/^((0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/.test( value )) ){
				callback( new Error('例：025-88888888-8888，区号必须要输入，没有分机号可不输。') )
			} else {
				callback()
			}
		}
		var validateMobilePhone = ( rule,value,callback ) => {
			if (value === '' ) {
				callback( new Error('请输入手机号码') )
			} else if ( !(/^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/.test( value )) ){
				callback( new Error('请输入11位手机号码！') )
			} else {
				callback()
			}
		}
		return {
			ruleForm2: {
				userName: '',
				password: '',
				checkPass: '',
				enterpriseName: '',
				enterpriseType: '',
				enterpriseAddress: '',
				userType: '',
				linkman: '',
				telephone: '',
				mobilephone: '',
				qq: '',
				wechat: '',
				email: ''
			},
			rules2: {
				userName: [
					{required: true, validator: validateUsername, trigger: 'blur' }
				],
				password: [
					{required: true, validator: validatePass, trigger: 'blur' }
				],
				checkPass: [
					{required: true, validator: validatePass2, trigger: 'blur' }
				],
				userType: [
					{required: true, validator: validateUserType, trigger: 'change' }
				],
				enterpriseName: [
					{required: true, validator: validateEnterName, trigger: 'blur' }
				],
				enterpriseType: [
					{required: true, validator: validateEnterType, trigger: 'change' }
				],
				enterpriseAddress: [
					{required: true, validator: validateAddress, trigger: 'blur' }
				],
				linkman: [
					{required: true, validator: validateLinkName, trigger: 'blur' }
				],
				telephone: [
					{required: true, validator: validateLinkPhone, trigger: 'blur' }
				],
				mobilephone: [
					{required: true, validator: validateMobilePhone, trigger: 'blur' }
				],
				email: [
					{required: true, validator: validateEmail, trigger: 'blur'}
				]
			},
			options: [{
				value: 'MaterialEquipmentManufacturing',
				label: '材料设备类'
				}, {
				value: 'WholesaleAndRetailTrade',
				label: '批发零售（贸易）类'
				}, {
				value: 'Construction',
				label: '施工类'
				}, {
				value: 'Services',
				label: '服务类'
			}],
			userType: [{
				value: '0',
				label: '普通用户'
			},{
				value: '1',
				label: '公司员工'
			},{
				value: '2',
				label: '专家'
			}]

		}
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
			if (valid) {
				delete this.ruleForm2.checkPass
				// let formData = JSON.stringify(this.ruleForm2)
				let formData = JSON.stringify(this.ruleForm2)
				this.$http({
					method: 'post',
					url: 'user/insert.action',
					data: formData
				}).then( res => {
					if( res.data.responseDesc == '增加成功' ) {
						this.$message({
							message: '注册成功！2个工作日内审核完毕后方可登录',
							type: 'success',
							showClose: true
						})
						setTimeout( () => {     // 注册成功后,跳转到登录页面,延时2.5s
							this.$router.push('/login')
						},2500 )
					} else {
						this.$message({
							message: '注册失败',
							type: 'error',
							showClose: true
						})
					}
				} )
			} else {
				this.$message({
					type: 'error',
					message: '请检查注册信息是否符合要求'
				})
				return false;
			}
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style lang="scss" scoped>
  .login-container {
    width: 100%;
    background-color: #2db7f5;
	overflow: hidden;
	.info {
		font-size: 12px;
		color: #999;
		margin: 10px 0 10px 30px;
	}
	.el-form-item {
		text-align: center;
		.el-select {
			width: 100%;
		}
	}
    .login {
      width: 850px;
      border-radius: 10px;
      background-color: #fff;
	  overflow: hidden;
	  margin: 30px auto;
      .logo {
        background-image: url('../../../static/images/logo.png');
        background-size: cover;
        width: 177px;
        height: 55px;
        margin: 40px auto 20px auto;
      }
      .title {
        font-size: 24px;
        font-weight: 700;
        color: rgb(22, 155, 213);
        text-align: center;
      }
      form {
        width: 600px;
        display: block;
        margin: 20px auto;
		.prompt {
			display: inline-block;
			font-size: 12px;
			color: #ccc;
			height: 14px;
		}
      }
    }
  }
  
</style>

