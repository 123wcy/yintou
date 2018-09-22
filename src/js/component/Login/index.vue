<template>
<div class="login-container" ref="container">
    <section class="login">
        <div class="logo">
        </div>
        <h1 class="title">崟投企业信用评级系统</h1>
        <form>
            <el-input
                placeholder="请输入用户名称"
                v-model="user.userName">
                <i slot="prefix" class="iconfont icon-user"></i>
            </el-input>

            <el-input
                placeholder="请输入登录密码"
                type="password"
                v-model="user.password">
                <i slot="prefix" class="iconfont icon-password"></i>
            </el-input>
            <el-button type="primary" @click="handleLogin">登录</el-button>
            <router-link to="register"><span class="register">注册</span></router-link>
        </form>
    </section>
</div>
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    userName:'',
                    password:''
                }
            }
        },
        mounted() {
            // this.$refs.container.style.height = window.screen.availHeight + 'px'
            // console.log(window)
        },
        methods: {
            handleLogin() {
                let user = JSON.stringify(this.user)
                // this.$http.post('http://192.168.3.33:8080/YinTouXY/user/login.action',user).then( res =>{
                // console.log(res.data)
                // }).catch( err =>{
                //     console.log(err)
                // })
                this.$http({
                    method:'post',
                    url:'user/login.action',
                    data: user,
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    }
                }).then( res => {
                    if( res.data.responseDesc == '登陆成功' ) {
                        let userType = res.data.responseCode[0].userType
                        let storageItem = JSON.stringify(res.data.responseCode[0])
                        localStorage.setItem('USER_INFO',storageItem)
                        this.$message({
                            message: '登录成功！',
                            type: 'success'
                        })
                        setTimeout( () => {
                            this.$router.push('/home')
                        },2000 )
                    } else {
                        this.$message({
                            message: '登录失败',
                            type: 'error'
                        })
                    }
                } ).catch( (err) => {
                    if(err) {
                        this.$message({
                            type: 'error',
                            message: '登录失败'
                        })
                    }
                } )
            }
        }
    }
</script>

<style lang="scss" scoped>


.login-container {
    width: 100%;
    height: 800px;
    position: relative;
    background-color: #2db7f5;
    .login {
        width: 350px;
        height: 420px;
        border-radius: 10px;
        background-color: #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
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
            .el-input {
                width: 80% !important;
                height: 50px;
                margin: 20px auto;
                display: block;
            }
            i {
                padding-top: 8px;
                display: inline-block;
                font-size: 22px;
            }
            button {
                width: 80%;
                height: 50px;
                display: block;
                margin: 0 auto;
            }
            .register {
                float: right;
                margin: 20px 20px 10px 0;
                font-size: 14px;
                color: #2db7f5;
                text-decoration: underline
            }
        }
    }
}
</style>

