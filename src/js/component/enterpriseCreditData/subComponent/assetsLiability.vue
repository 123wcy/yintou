<template>
    <div class="enterprise-apply">
        <div class="data-container">
            <h4 class="title">资产负债信息</h4>
            <div class="table-container">
                <el-button type="primary" id="add" @click="addItem" style="margin-left: 42px;">新增</el-button>
                <div style="overflow-x:auto;padding:0 20px;">
                    <table border="1" style="width:95%">
                        <thead>
                            <tr>
                                <th>年度</th>
                                <th v-for="item in balanceInfo" :key="item.id">{{item.yeat}}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="font-weight:700;">流动资产</td>
                                <td v-for="item in balanceInfo" :key="item.id"></td>
                            </tr>
                            <tr>
                                <td>货币资金</td>
                                <td v-for="item in balanceInfo" :key="item.id">{{item.asssetHbzj}}</td>
                            </tr>
                            <tr>
                                <td>短期投资</td>
                                <td v-for="item in balanceInfo" :key="item.id">{{item.asssetDxtz}}</td>
                            </tr>
                            <tr>
                                <td>应收票据</td>
                                <td v-for="item in balanceInfo" :key="item.id">{{item.asssetYspj}}</td>
                            </tr>
                            <tr>
                                <td>应收账款</td>
                                <td v-for="item in balanceInfo" :key="item.id">{{item.asssetYszk}}</td>
                            </tr>
                            <tr>
                                <td>应收账款净额</td>
                                <td v-for="item in balanceInfo" :key="item.id">{{item.asssetYszkje}}</td>
                            </tr>
                            <tr>
                                <td>预付款项</td>
                                <td v-for="item in balanceInfo" :key="item.id">{{item.asssetYfkx}}</td>
                            </tr>
                            <tr>
                                <td>其他应收款</td>
                                <td v-for="item in balanceInfo" :key="item.id">{{item.asssetQtyse}}</td>
                            </tr>
                            <tr>
                                <td>存货</td>
                                <td v-for="item in balanceInfo" :key="item.id">{{item.asssetCh}}</td>
                            </tr>
                            <tr>
                                <td>待摊费用</td>
                                <td v-for="item in balanceInfo" :key="item.id">{{item.asssetDtfy}}</td>
                            </tr>
                            <tr>
                                <td>一年内到期的长期债券投资</td>
                                <td v-for="item in balanceInfo" :key="item.id">{{item.asssetCqzjtz}}</td>
                            </tr>
                            <tr>
                                <td>其他流动资产</td>
                                <td v-for="item in balanceInfo" :key="item.id">{{item.asssetQtldzc}}</td>
                            </tr>
                            <tr>
                                <td>流动资产合计</td>
                                <td v-for="item in balanceInfo" :key="item.id"></td>
                            </tr>
                            <tr>
                                <td>长期投资</td>
                                <td v-for="item in balanceInfo" :key="item.id"></td>
                            </tr>
                            <tr>
                                <td>长期债权投资</td>
                                <td v-for="item in balanceInfo" :key="item.id">{{item.asssetCqzqtz}}</td>
                            </tr>
                            <tr>
                                <td>长期股权投资</td>
                                <td v-for="item in balanceInfo" :key="item.id">{{item.asssetCqgqtz}}</td>
                            </tr>
                            <tr>
                                <td>其他长期投资</td>
                                <td v-for="item in balanceInfo" :key="item.id">{{item.asssetQtcqtz}}</td>
                            </tr>
                            <tr>
                                <td>长期投资合计</td>
                                <td v-for="item in balanceInfo" :key="item.id"></td>
                            </tr>
                            <tr>
                                <td style="font-weight:700;">固定资产</td>
                                <td v-for="item in balanceInfo" :key="item.id"></td>
                            </tr>
                            <tr>
                                <td>固定资产原价</td>
                                <td v-for="item in balanceInfo" :key="item.id">{{item.asssetQdzcyj}}</td>
                            </tr>
                            <tr>
                                <td>固定资产净值</td>
                                <td v-for="item in balanceInfo" :key="item.id">{{item.asssetQdzcjz}}</td>
                            </tr>
                            <tr>
                                <td>在建工程</td>
                                <td v-for="item in balanceInfo" :key="item.id">{{item.asssetZjgc}}</td>
                            </tr>
                            <tr>
                                <td>工程物资</td>
                                <td v-for="item in balanceInfo" :key="item.id">{{item.asssetGcwz}}</td>
                            </tr>
                            <tr>
                                <td>固定资产清理</td>
                                <td v-for="item in balanceInfo" :key="item.id">{{item.asssetGdzcql}}</td>
                            </tr>
                            <tr>
                                <td>其他固定资产</td>
                                <td v-for="item in balanceInfo" :key="item.id">{{item.asssetQtgdzc}}</td>
                            </tr>
                            <tr>
                                <td>固定资产合计</td>
                                <td v-for="item in balanceInfo" :key="item.id"></td>
                            </tr>
                            <tr>
                                <td>无形资产及其他长期资产</td>
                                <td v-for="item in balanceInfo" :key="item.id"></td>
                            </tr>
                            <tr>
                                <td>无形资产</td>
                                <td v-for="item in balanceInfo" :key="item.id">{{item.asssetWxzc}}</td>
                            </tr>
                            <tr>
                                <td>长期待摊费用</td>
                                <td v-for="item in balanceInfo" :key="item.id">{{item.asssetCqdtfy}}</td>
                            </tr>
                            <tr>
                                <td>递延所得税资产</td>
                                <td v-for="item in balanceInfo" :key="item.id">{{item.asssetDysds}}</td>
                            </tr>
                            <tr>
                                <td>递延税款借项</td>
                                <td v-for="item in balanceInfo" :key="item.id">{{item.asssetDyxkjx}}</td>
                            </tr>
                            <tr>
                                <td>其他长期资产</td>
                                <td v-for="item in balanceInfo" :key="item.id">{{item.asssetWxqtcq}}</td>
                            </tr>
                            <tr>
                                <td>无形资产及其他长期资产合计</td>
                                <td v-for="item in balanceInfo" :key="item.id"></td>
                            </tr>
                            <tr>
                                <td>资产合计</td>
                                <td v-for="item in balanceInfo" :key="item.id"></td>
                            </tr>
                            <tr>
                                <td>流动负债</td>
                                <td v-for="item in balanceInfo" :key="item.id"></td>
                            </tr>
                            <tr>
                                <td>短期借款</td>
                                <td v-for="item in balanceInfo" :key="item.id">{{item.liabiliDzjk}}</td>
                            </tr>
                            <tr>
                                <td>应付票据</td>
                                <td v-for="item in balanceInfo" :key="item.id">{{item.liabiliYfpj}}</td>
                            </tr>
                            <tr>
                                <td>应付账款</td>
                                <td v-for="item in balanceInfo" :key="item.id">{{item.liabiliYfzk}}</td>
                            </tr>
                            <tr>
                                <td>预收款项</td>
                                <td v-for="item in balanceInfo" :key="item.id">{{item.liabiliYfkx}}</td>
                            </tr>
                            <tr>
                                <td>应付职工薪酬</td>
                                <td v-for="item in balanceInfo" :key="item.id">{{item.liabiliYfzgxc}}</td>
                            </tr>
                            <tr>
                                <td>应付福利费</td>
                                <td v-for="item in balanceInfo" :key="item.id">{{item.liabiliYfflf}}</td>
                            </tr>
                            <tr>
                                <td>应交税金</td>
                                <td v-for="item in balanceInfo" :key="item.id">{{item.liabiliYjsj}}</td>
                            </tr>
                            <tr>
                                <td>其他应交款</td>
                                <td v-for="item in balanceInfo" :key="item.id">{{item.liabiliQtyjk}}</td>
                            </tr>
                            <tr>
                                <td>应付利息</td>
                                <td v-for="item in balanceInfo" :key="item.id">{{item.liabiliYflx}}</td>
                            </tr>
                            <tr>
                                <td>应付股利</td>
                                <td v-for="item in balanceInfo" :key="item.id">{{item.liabiliYfgl}}</td>
                            </tr>
                            <tr>
                                <td>其他应付款</td>
                                <td v-for="item in balanceInfo" :key="item.id">{{item.liabiliQtyfk}}</td>
                            </tr>
                            <tr>
                                <td>预提费用</td>
                                <td v-for="item in balanceInfo" :key="item.id">{{item.liabiliYtfy}}</td>
                            </tr>
                            <tr>
                                <td>一年内到期的长期负债</td>
                                <td v-for="item in balanceInfo" :key="item.id">{{item.liabiliCxfz}}</td>
                            </tr>
                            <tr>
                                <td>其他流动负债</td>
                                <td v-for="item in balanceInfo" :key="item.id">{{item.liabiliQtldfz}}</td>
                            </tr>
                            <tr>
                                <td>流动负债合计</td>
                                <td v-for="item in balanceInfo" :key="item.id"></td>
                            </tr>
                            <tr>
                                <td>长期负债</td>
                                <td v-for="item in balanceInfo" :key="item.id"></td>
                            </tr>
                            <tr>
                                <td>长期借款</td>
                                <td v-for="item in balanceInfo" :key="item.id">{{item.liabiliCxjk}}</td>
                            </tr>
                            <tr>
                                <td>长期应付款</td>
                                <td v-for="item in balanceInfo" :key="item.id">{{item.liabiliCxyfk}}</td>
                            </tr>
                            <tr>
                                <td>专项应付款</td>
                                <td v-for="item in balanceInfo" :key="item.id">{{item.liabiliZxyfk}}</td>
                            </tr>
                            <tr>
                                <td>其他长期负债</td>
                                <td v-for="item in balanceInfo" :key="item.id">{{item.liabiliQtcqfz}}</td>
                            </tr>
                            <tr>
                                <td>长期负债合计</td>
                                <td v-for="item in balanceInfo" :key="item.id"></td>
                            </tr>
                            <tr>
                                <td>负债合计</td>
                                <td v-for="item in balanceInfo" :key="item.id"></td>
                            </tr>
                            <tr>
                                <td>股东权益</td>
                                <td v-for="item in balanceInfo" :key="item.id"></td>
                            </tr>
                            <tr>
                                <td>实收资本（股本）</td>
                                <td v-for="item in balanceInfo" :key="item.id">{{item.liabiliSszb}}</td>
                            </tr>
                            <tr>
                                <td>资本公积</td>
                                <td v-for="item in balanceInfo" :key="item.id">{{item.liabiliZbgj}}</td>
                            </tr>
                            <tr>
                                <td>盈余公积</td>
                                <td v-for="item in balanceInfo" :key="item.id">{{item.liabiliYygj}}</td>
                            </tr>
                            <tr>
                                <td>未分配利润</td>
                                <td v-for="item in balanceInfo" :key="item.id">{{item.liabiliWfplr}}</td>
                            </tr>
                            <tr>
                                <td>股东权益合计</td>
                                <td v-for="item in balanceInfo" :key="item.id"></td>
                            </tr>
                            <tr>
                                <td>负债和股东权益总计</td>
                                <td v-for="item in balanceInfo" :key="item.id"></td>
                            </tr>
                            <tr>
                                <td>操作</td>
                                <td v-for="item in balanceInfo" :key="item.id">
                                    <el-button type="primary" plain @click="updateItem(item)">修改</el-button>
                                    <el-button type="primary" plain @click="deleteItem(item.id)">删除</el-button>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <!-- 新增 dialog弹出框 -->
        <el-dialog title="新增 资产负债信息 金额单位（元）" :visible.sync="addFormVisible">
            <form class="form">
                <div class="input-container">
                    <label for="yeat">年度:</label>
                    <select v-model="form.yeat">
                        <option value="2014">2014</option>
                        <option value="2015">2015</option>
                        <option value="2016">2016</option>
                        <option value="2017">2017</option>
                    </select>
                </div>

                <div class="input-container">
                    <label for="preChange" style="font-weight:700;">流动资产</label>
                </div>

                <div class="input-container">
                    <label for="asssetHbzj">货币资金:</label>
                    <input type="text" name="asssetHbzj" v-model="form.asssetHbzj">
                </div>

                <div class="input-container">
                    <label for="asssetDxtz">短期投资:</label>
                    <input type="text" name="asssetDxtz" v-model="form.asssetDxtz">
                </div>

                <div class="input-container">
                    <label for="asssetYspj">应收票据:</label>
                    <input type="text" name="asssetYspj" v-model="form.asssetYspj">
                </div>

                <div class="input-container">
                    <label for="asssetYszk">应收账款:</label>
                    <input type="text" name="asssetYszk" v-model="form.asssetYszk">
                </div>

                <div class="input-container">
                    <label for="asssetYszkje">应收账款净额:</label>
                    <input type="text" name="asssetYszkje" v-model="form.asssetYszkje">
                </div>

                <div class="input-container">
                    <label for="asssetYfkx">预付款项:</label>
                    <input type="text" name="asssetYfkx" v-model="form.asssetYfkx">
                </div>

                <div class="input-container">
                    <label for="asssetQtyse">其他应收款:</label>
                    <input type="text" name="asssetQtyse" v-model="form.asssetQtyse">
                </div>

                <div class="input-container">
                    <label for="asssetCh">存货:</label>
                    <input type="text" name="asssetCh" v-model="form.asssetCh">
                </div>

                <div class="input-container">
                    <label for="asssetDtfy">待摊费用:</label>
                    <input type="text" name="asssetDtfy" v-model="form.asssetDtfy">
                </div>

                <div class="input-container">
                    <label for="asssetCqzjtz">一年内到期的长期债券投资:</label>
                    <input type="text" name="asssetCqzjtz" v-model="form.asssetCqzjtz">
                </div>

                <div class="input-container">
                    <label for="asssetQtldzc">其他流动资产:</label>
                    <input type="text" name="asssetQtldzc" v-model="form.asssetQtldzc">
                </div>

                <div class="input-container">
                    <label>流动资产合计:</label>
                    <p>{{handleAddLdzchj()}}</p>
                </div>

                <div class="input-container">
                    <label style="font-weight:700;">长期投资</label>
                </div>

                <div class="input-container">
                    <label for="asssetCqzqtz">长期债权投资:</label>
                    <input type="text" name="asssetCqzqtz" v-model="form.asssetCqzqtz">
                </div>

                <div class="input-container">
                    <label for="asssetCqgqtz">长期股权投资:</label>
                    <input type="text" name="asssetCqgqtz" v-model="form.asssetCqgqtz">
                </div>

                <div class="input-container">
                    <label for="asssetQtcqtz">其他长期投资:</label>
                    <input type="text" name="asssetQtcqtz" v-model="form.asssetQtcqtz">
                </div>

                <div class="input-container">
                    <label>长期投资合计:</label>
                    <p>{{handleAddCqtjhj()}}</p>
                </div>

                <div class="input-container">
                    <label style="font-weight:700;">固定资产</label>
                </div>

                <div class="input-container">
                    <label for="asssetQdzcyj">固定资产原价:</label>
                    <input type="text" name="asssetQdzcyj" v-model="form.asssetQdzcyj">
                </div>

                <div class="input-container">
                    <label for="asssetQdzcjz">固定资产净值:</label>
                    <input type="text" name="asssetQdzcjz" v-model="form.asssetQdzcjz">
                </div>

                <div class="input-container">
                    <label for="asssetZjgc">在建工程:</label>
                    <input type="text" name="asssetZjgc" v-model="form.asssetZjgc">
                </div>

                <div class="input-container">
                    <label for="asssetGcwz">工程物资:</label>
                    <input type="text" name="asssetGcwz" v-model="form.asssetGcwz">
                </div>

                <div class="input-container">
                    <label for="asssetGdzcql">固定资产清理:</label>
                    <input type="text" name="asssetGdzcql" v-model="form.asssetGdzcql">
                </div>

                <div class="input-container">
                    <label for="asssetQtgdzc">其他固定资产:</label>
                    <input type="text" name="asssetQtgdzc" v-model="form.asssetQtgdzc">
                </div>

                <div class="input-container">
                    <label>固定资产合计:</label>
                    <p>{{handleAddGdzchj()}}
                    </p>
                </div>

                <div class="input-container">
                    <label style="font-weight:700;">无形资产及其他长期资产</label>
                </div>

                <div class="input-container">
                    <label for="asssetWxzc">无形资产:</label>
                    <input type="text" name="asssetWxzc" v-model="form.asssetWxzc">
                </div>

                <div class="input-container">
                    <label for="asssetCqdtfy">长期待摊费用:</label>
                    <input type="text" name="asssetCqdtfy" v-model="form.asssetCqdtfy">
                </div>

                <div class="input-container">
                    <label for="asssetDysds">递延所得税资产:</label>
                    <input type="text" name="asssetDysds" v-model="form.asssetDysds">
                </div>

                <div class="input-container">
                    <label for="asssetDyxkjx">递延税款借项:</label>
                    <input type="text" name="asssetDyxkjx" v-model="form.asssetDyxkjx">
                </div>

                <div class="input-container">
                    <label for="asssetWxqtcq">其他长期资产:</label>
                    <input type="text" name="asssetWxqtcq" v-model="form.asssetWxqtcq">
                </div>

                <div class="input-container">
                    <label>无形资产及其他长期资产合计:</label>
                    <p>{{handleAddWxqthj()}}
                    </p>
                </div>

                <div class="input-container">
                    <label>资产合计:</label>
                    <p>{{handleAddLdzchj() + handleAddGdzchj() + handleAddCqtjhj() + handleAddWxqthj()}}</p>
                </div>

                <div class="input-container">
                    <label style="font-weight:700;">流动负债</label>
                </div>

                <div class="input-container">
                    <label for="liabiliDzjk">短期借款:</label>
                    <input type="text" name="liabiliDzjk" v-model="form.liabiliDzjk">
                </div>

                <div class="input-container">
                    <label for="liabiliYfpj">应付票据:</label>
                    <input type="text" name="liabiliYfpj" v-model="form.liabiliYfpj">
                </div>

                <div class="input-container">
                    <label for="liabiliYfzk">应付账款:</label>
                    <input type="text" name="liabiliYfzk" v-model="form.liabiliYfzk">
                </div>

                <div class="input-container">
                    <label for="liabiliYfkx">预收款项:</label>
                    <input type="text" name="liabiliYfkx" v-model="form.liabiliYfkx">
                </div>

                <div class="input-container">
                    <label for="liabiliYfzgxc">应付职工薪酬:</label>
                    <input type="text" name="liabiliYfzgxc" v-model="form.liabiliYfzgxc">
                </div>

                <div class="input-container">
                    <label for="liabiliYfflf">应付福利费:</label>
                    <input type="text" name="liabiliYfflf" v-model="form.liabiliYfflf">
                </div>

                <div class="input-container">
                    <label for="liabiliYjsj">应交税金:</label>
                    <input type="text" name="liabiliYjsj" v-model="form.liabiliYjsj">
                </div>

                <div class="input-container">
                    <label for="liabiliQtyjk">其他应交款:</label>
                    <input type="text" name="liabiliQtyjk" v-model="form.liabiliQtyjk">
                </div>

                <div class="input-container">
                    <label for="liabiliYflx">应付利息:</label>
                    <input type="text" name="liabiliYflx" v-model="form.liabiliYflx">
                </div>

                <div class="input-container">
                    <label for="liabiliYfgl">应付股利:</label>
                    <input type="text" name="liabiliYfgl" v-model="form.liabiliYfgl">
                </div>

                <div class="input-container">
                    <label for="liabiliQtyfk">其他应付款:</label>
                    <input type="text" name="liabiliQtyfk" v-model="form.liabiliQtyfk">
                </div>

                <div class="input-container">
                    <label for="liabiliYtfy">预提费用:</label>
                    <input type="text" name="liabiliYtfy" v-model="form.liabiliYtfy">
                </div>

                <div class="input-container">
                    <label for="liabiliCxfz">一年内到期的长期负债:</label>
                    <input type="text" name="liabiliCxfz" v-model="form.liabiliCxfz">
                </div>

                <div class="input-container">
                    <label for="liabiliQtldfz">其他流动负债:</label>
                    <input type="text" name="liabiliQtldfz" v-model="form.liabiliQtldfz">
                </div>

                <div class="input-container">
                    <label>流动负债合计:</label>
                    <p>{{handleAddLdfzhj()}}</p>
                </div>

                <div class="input-container">
                    <label style="font-weight:700;">长期负债</label>
                </div>

                <div class="input-container">
                    <label for="liabiliCxjk">长期借款:</label>
                    <input type="text" name="liabiliCxjk" v-model="form.liabiliCxjk">
                </div>

                <div class="input-container">
                    <label for="liabiliCxyfk">长期应付款:</label>
                    <input type="text" name="liabiliCxyfk" v-model="form.liabiliCxyfk">
                </div>

                <div class="input-container">
                    <label for="liabiliZxyfk">专项应付款:</label>
                    <input type="text" name="liabiliZxyfk" v-model="form.liabiliZxyfk">
                </div>

                <div class="input-container">
                    <label for="liabiliQtcqfz">其他长期负债:</label>
                    <input type="text" name="liabiliQtcqfz" v-model="form.liabiliQtcqfz">
                </div>

                <div class="input-container">
                    <label>长期负债合计:</label>
                    <p>{{handleAddCqfzhj()}}</p>
                </div>

                <div class="input-container">
                    <label>负债合计:</label>
                    <p>{{handleAddCqfzhj() + handleAddLdfzhj()}}</p>
                </div>

                <div class="input-container">
                    <label style="font-weight:700;">股东权益</label>
                </div>

                <div class="input-container">
                    <label for="liabiliSszb">实收资本（股本）:</label>
                    <input type="text" name="liabiliSszb" v-model="form.liabiliSszb">
                </div>

                <div class="input-container">
                    <label for="liabiliZbgj">资本公积:</label>
                    <input type="text" name="liabiliZbgj" v-model="form.liabiliZbgj">
                </div>

                <div class="input-container">
                    <label for="liabiliYygj">盈余公积:</label>
                    <input type="text" name="liabiliYygj" v-model="form.liabiliYygj">
                </div>

                <div class="input-container">
                    <label for="liabiliWfplr">未分配利润:</label>
                    <input type="text" name="liabiliWfplr" v-model="form.liabiliWfplr">
                </div>

                <div class="input-container">
                    <label>股东权益合计:</label>
                    <p>{{handleAddGdqyhj()}}</p>
                </div>

                <div class="input-container">
                    <label>负债和股东权益总计:</label>
                    <p>{{handleAddCqfzhj() + handleAddLdfzhj() + handleAddGdqyhj()}}</p>
                </div>
                

            </form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="addFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="handleAdd" v-if="isInsert">确 定</el-button>
                <el-button type="primary" @click="handleUpdate" v-if="isUpdate">修 改</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>

export default {
    data() {
        return {
            balanceInfo: [],
            form: { 
                yeat: '',
                asssetHbzj: '',
                asssetDxtz: '',
                asssetYspj: '',
                asssetYszk: '',
                asssetYszkje: '',
                asssetYfkx: '',
                asssetQtyse: '',
                asssetCh: '',
                asssetDtfy: '',
                asssetCqzjtz: '',
                asssetQtldzc: '',
                asssetCqzqtz: '',
                asssetCqgqtz: '',
                asssetQtcqtz: '',
                asssetQdzcyj: '',
                asssetQdzcjz: '',
                asssetZjgc: '',
                asssetGcwz: '',
                asssetGdzcql: '',
                asssetWxzc: '',
                asssetCqdtfy: '',
                asssetDysds: '',
                asssetDyxkjx: '',
                asssetWxqtcq: '',
                asssetQtgdzc: '',
                liabiliDzjk: '',
                liabiliYfpj: '',
                liabiliYfzk: '',
                liabiliYfkx: '',
                liabiliYfzgxc: '',
                liabiliYfflf: '',
                liabiliYjsj: '',
                liabiliQtyjk: '',
                liabiliYflx: '',
                liabiliYfgl: '',
                liabiliQtyfk: '',
                liabiliYtfy: '',
                liabiliCxfz: '',
                liabiliQtldfz: '',
                liabiliCxjk: '',
                liabiliCxyfk: '',
                liabiliZxyfk: '',
                liabiliQtcqfz: '',
                liabiliSszb: '',
                liabiliZbgj: '',
                liabiliYygj: '',
                liabiliWfplr: '',

            },
            addFormVisible: false,
            formLabelWidth: '120px',
            hasNoData: false,
            isUpdate: false,
            isInsert: true
        }
    },
    components: {
    },
    created() {
        this.getBalanceInfo()

    },
    methods: {
        // 获取信息
         getBalanceInfo() {
            let enterid = localStorage.getItem('id')
            this.$http.get(`balance/find.action?user_id=${enterid}`).then(
                res => {
                    console.log(res.data)
                    if( res.data.responseDesc == '查询成功' ) {
                        this.balanceInfo = res.data.responseCode
                    }else {

                    }
                }
            ).then( () => {
                // 判断是否有数据
                if( this.balanceInfo.length ) {
                    this.hasNoData = false
                } else {
                    this.hasNoData = true
                }
            } ).catch( err => {
                // console.log(err)
                //捕捉错误
                this.hasNoData = true
                this.$message( {
                        message: '网络错误',
                        type: 'error'
                } )                   
            } )
            
        },
        // 新增
        addItem() {
            //弹出dialog对话框
            this.addFormVisible = true
            this.isInsert = true
            this.isUpdate = false
        },
        handleAdd() {
            this.form.userId = localStorage.getItem('id')
            delete this.form.id                        
            let formdata = JSON.stringify(this.form)
            // 提交新增
            this.$http({
                url: 'balance/insert.action',
                method: 'post',
                data: formdata
            }).then( res => {
                if( res.data.responseCode == 1 ) {
                    // 弹出消息框
                    this.$message( {
                        message: '增加成功',
                        type: 'success'
                    } )
                    this.getBalanceInfo()  // 重新获取数据
                }
            } ).catch( err => {
                this.hasNoData = true
                this.$message( {
                        message: '添加失败',
                        type: 'error'
                } )
            } )
            this.addFormVisible = false //关闭 dialog对话框
            for (const key in object) {
                if (object.hasOwnProperty(key)) {
                    const element = object[key];
                    
                }
            }
        },

        // 删除
        deleteItem(id) {
            this.$http({
                url: `balance/delete.action?id=${id}`,
                method: 'get'
            }).then( res => {
                if( res.data.responseCode == 0 ) {
                    // 弹出消息框
                    this.$message( {
                        message: '删除成功',
                        type: 'success'
                    } )
                    this.getBalanceInfo()
                }
            } ).catch( err => {
                console.log( err )
            } )
        },

        // 修改
        updateItem(item) {
            this.addFormVisible = true
            this.form = item
            this.isUpdate = true
            this.isInsert = false
        },
        handleUpdate() {
            let formData = JSON.stringify(this.form)
            this.$http({
                url: 'balance/update.action',
                method: 'post',
                data: formData
            }).then( res => {
                if( res.data.responseCode == 1 ) {
                    // 弹出消息框
                    this.$message( {
                        message: '修改成功',
                        type: 'success'
                    } )
                    this.getBalanceInfo()  // 重新获取数据
                }
            } ).catch( err => {
                this.hasNoData = true
                this.$message( {
                        message: '修改失败',
                        type: 'error'
                } )
            } )
            this.addFormVisible = false //关闭 dialog对话框
        },

        handleAddLdzchj() {
            let ldzchj = Number(this.form.asssetHbzj) + 
                        Number(this.form.asssetDxtz) + 
                        Number(this.form.asssetYspj) +  
                        Number(this.form.asssetYszkje) + 
                        Number(this.form.asssetYfkx) + 
                        Number(this.form.asssetQtyse) + 
                        Number(this.form.asssetCh) + 
                        Number(this.form.asssetDtfy) + 
                        Number(this.form.asssetCqzjtz) + 
                        Number(this.form.asssetQtldzc)
            return  ldzchj
        },
        handleAddCqtjhj() {
            let cqtjhj =  Number(this.form.asssetCqzqtz) + 
                          Number(this.form.asssetCqgqtz) + 
                          Number(this.form.asssetQtcqtz)
            return cqtjhj
        },
        handleAddGdzchj() {
            let gdzchj =  
                         Number(this.form.asssetQdzcjz) + 
                         Number(this.form.asssetZjgc) +
                         Number(this.form.asssetGcwz) + 
                         Number(this.form.asssetGdzcql) + 
                         Number(this.form.asssetQtgdzc)
            return gdzchj
        },
        handleAddWxqthj() {
            let wxqthj = Number(this.form.asssetWxzc) + 
                         Number(this.form.asssetCqdtfy) + 
                         Number(this.form.asssetDysds) +
                         Number(this.form.asssetDyxkjx) + 
                         Number(this.form.asssetWxqtcq)
            return wxqthj
        },
        handleAddLdfzhj() {
            let ldfzhj = Number(this.form.liabiliDzjk) + 
                         Number(this.form.liabiliYfpj) + 
                         Number(this.form.liabiliYfzk) +
                         Number(this.form.liabiliYfkx) + 
                         Number(this.form.liabiliYfzgxc)+
                         Number(this.form.liabiliYfflf) + 
                         Number(this.form.liabiliYjsj) + 
                         Number(this.form.liabiliQtyjk) +
                         Number(this.form.liabiliYflx) + 
                         Number(this.form.liabiliYfgl) +
                         Number(this.form.liabiliQtyfk) +
                         Number(this.form.liabiliYtfy) +
                         Number(this.form.liabiliCxfz) +
                         Number(this.form.liabiliQtldfz) 
            return ldfzhj
        },
        handleAddCqfzhj() {
            let cqfzhj = Number(this.form.liabiliCxjk) + 
                         Number(this.form.liabiliCxyfk) + 
                         Number(this.form.liabiliZxyfk) +
                         Number(this.form.liabiliQtcqfz) 
            return cqfzhj
        },
        handleAddGdqyhj() {
            let gdqyhj = Number(this.form.liabiliSszb) + 
                         Number(this.form.liabiliZbgj) + 
                         Number(this.form.liabiliYygj) +
                         Number(this.form.liabiliWfplr) 
            return gdqyhj
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../../../css/form.scss";
@import "../../../../css/table.scss";
@import "../../../../css/dialog.scss";
#ldzc {
    padding: 20px 0 10px 23px;
    font-size: 14px;
    font-weight: 700;
}
</style>

