<template>
<div class="feature-bottom">
                <el-button @click="toggleSelection()" v-if="display">全选</el-button>
                <el-button @click="toggleSelection()" v-if="display">反选</el-button>
                <el-button @click="toggleSelection()" v-if="display">清除</el-button>
                <span class="pagenum">页码:{{pageNum + 1}}/1</span>
                <span class="quantity">总计:{{totalNum}}</span>
                <div class="flip-page batch-delete">
                    <el-button-group>
                        <el-button type="primary" icon="el-icon-delete">删除</el-button>
                        <el-button type="primary" @click="previousPage()" icon="el-icon-arrow-left">上一页</el-button>
                        <el-button type="primary" @click="nextPage()"><i class="el-icon-arrow-right el-icon--right"></i>下一页</el-button>
                    </el-button-group>
                </div>
            </div>
</template>

<script>
    export default {
        data() {
            return {
            
            }
        },
        props:['nextPage','previousPage','pageNum','pageSize','display','totalNum'],
        methods: {
            toggleSelection() {

            }
        }
    }
</script>

<style lang="scss" scoped>
.feature-bottom {
       display: block;
       box-sizing: border-box;
       width: 100%;
       position: absolute;
       left: 0;
       bottom:0;
       color: #666;
       line-height: 50px;
       border-top: 1px solid rgba(228,228,228,1);
       padding:0 10px;
       > button {
           border: none;
           background-color: transparent;
           margin: 0;
           padding: 7px 7px !important;
           &:hover {
               color: #999;
           }
           &:focus {
               color: inherit;
           }
           &:last-of-type {
               margin-right: 30px;
           }
       }
       span {
           font-size: 12px;
       }
   }
   .flip-page {
       position: absolute;
       top: 0;
       right: 10px;
       button {
           width: 77px;
           height: 30px;
           padding: 0;
           text-align: center;
           margin-left: 10px;
           border-radius: 4px;
       }
   }
</style>

