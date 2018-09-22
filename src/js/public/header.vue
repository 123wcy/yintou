<template>
    <div class="header-container">
        <header class="clearfix">
            <h1 class="logo fl">
                <img src="../../static/images/logo.png" alt="">
            </h1>

            <div class="account-info fr">
                <a href="javascript:;" class="fl">
                    账户设置
                </a>
                <a href="javascript:;" class="fr" @click="logout">退出登录</a>
            </div>
            
        </header>
    </div>
</template>

<script>
    export default {
       methods: {
           logout() {
               this.$http.post(`user/logout.action`)
               .then( res => {
                   if( res.data.responseDesc == '注销成功' ) {
                       localStorage.removeItem('USER_INFO')
                       this.$router.push('/login')
                   }
               } )
           }
       }
    }
</script>

<style lang="scss" scoped>
.header-container {
    width: 100%;
    height: 50px;
    background-color: #fff;
    .logo {
        margin-left: 40px;
        img {
            width: 112px;
            margin-top: 8px;
        }
    }
    .placeholder {
        width: 20%;
        height: 50px;
        background-color: #fff;
    }
    .account-info {
        a {
            display: block;
            width: 120px;
            height: 50px;
            line-height: 50px;
            text-align: center;
            font-size: 14px;
        }
        a:hover {
            background-color: #2db7f5;
            color: #fff;
        }
        i {
            font-size: 16px;
        }
    }
}
</style>

