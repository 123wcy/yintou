<template>
    <div class="title-container">
        <p class="title">{{name}}</p>
    </div>
</template>

<script>
    export default {
        props: ["name"]
    }
</script>

<style lang="scss" scoped>
.title-container {
    height: 50px;
    width: 100%;
    background-color: #fff;
    overflow: hidden;
    margin-bottom: 10px;
    .title {
        font-size: 16px;
        margin-left: 25px;
        margin-top: 15px;   
        border-left: 5px solid #2db7f5;
        font-weight: 700;
        color: #333;
        line-height: 20px;
        padding-left: 5px;
    }
}

</style>

