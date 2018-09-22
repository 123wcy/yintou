<template lang="html">
    <div class="home-container">
        <Heador />
        <div class="main-container"> 
            <NavList /> 
            <Main />
        </div>
    </div>
</template>

<script>
import Heador from '../../public/header.vue'
import NavList from '../../public/navlist.vue'
import Main from '../../public/main.vue'
export default {
	components: {
        Heador,
        NavList,
        Main
	}
}
</script>

<style lang="scss">
body {
    background-color: #f2f2f2;
}
.main-container {
    width: 1366px;
    margin: 0 auto;
}
</style>



