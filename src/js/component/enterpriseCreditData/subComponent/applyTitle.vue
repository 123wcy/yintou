<template>
    <div class="apply-title">
        <h3 class="title">
            信用报告申请
        </h3>
        <p class="info">
            <span class="apply-id">
                申请编号: <i>{{applicationNum}}</i>   
            </span>
            <span class="enterprise-name">
                企业名称: <i>{{name}}</i>
            </span>
        </p>
    </div>
</template>

<script>
    export default {
        props: ['name','applicationNum']
    }
</script>

<style lang="scss" scoped>
.apply-title {
    width: 100%;
    height: 82px;
    background-color: #fff;
    overflow: hidden;   
    padding: 15px 0 0 20px;
    box-sizing: border-box;
    .title {
        font-size: 18px;
        font-weight: 700;
        color: #666;
        margin-bottom: 15px;
    }
    .info {
        font-size: 12px;
        font-weight: 700;
        i {
            color: #2db7f5;
        }
    }
}
</style>

