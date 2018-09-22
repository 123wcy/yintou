<template>
    <div class="data-container">
            <h4 class="title">
                {{title}}
            </h4>
            <form>
                <div class="subtitle">{{subtitle}}</div>
                <textarea name="textarea" id="textarea" cols="30" rows="10" maxlength="2000" v-model="textContent">
                </textarea>
                <span>不要超过2000个汉字!</span>
                <el-button type="primary">提 交</el-button>
            </form>
        </div>
</template>

<script>
export default {
    props: ['title','subtitle','textContent']
}
</script>

<style lang="scss" scoped>
@import '../../../../css/form.scss';
form {
    .subtitle {
        width: 734px;
        margin: 10px auto;
        font-size: 14px;
    }
    #textarea {
        width: 734px;
        height: 167px;
        resize: none;
        font-size: 12px;
        line-height: 20px;
        font-family: "Microsoft Yahei";
        color: #666;
        padding: 5px;
        box-sizing: border-box;
        letter-spacing: 1px;
        display: block;
        margin: 0 auto;
        position: relative;
    }
    span {
        display: block;
        text-align: left;
        padding-left: 60px;
        padding-top: 5px;
        font-size: 12px;
        color: #999;
        
    }
    button {
        display: block;
        float: right;
        margin-right: 60px;
        margin-top: 10px;
    }
    
}

</style>

