import Vue from "vue"
import Router from "vue-router"
import Home from "../js/component/Home/index.vue"
import userlistTable from "../js/component/UserManagement/subComponent/userlistTable.vue"
import indexTable from "../js/component/Home/subComponent/indexTable.vue"
import rolelistTable from "../js/component/UserManagement/subComponent/rolelistTable.vue"
import enterpriseListData from "../js/component/enterpriseCreditData/subComponent/enterpriseListData.vue"
import addEnterpriseData from "../js/component/enterpriseCreditData/subComponent/addEnterpriseData.vue"
import basicSituation from "../js/component/enterpriseCreditData/subComponent/basicSituation.vue"
import historyEvolution from "../js/component/enterpriseCreditData/subComponent/historyEvolution.vue"
import backgroundSituation from "../js/component/enterpriseCreditData/subComponent/backgroundSituation.vue"
import capitalStrength from "../js/component/enterpriseCreditData/subComponent/capitalStrength.vue"
import ownershipStructure from "../js/component/enterpriseCreditData/subComponent/ownershipStructure.vue"
import shareholdersSituation from "../js/component/enterpriseCreditData/subComponent/shareholderSituation.vue"
import branches from "../js/component/enterpriseCreditData/subComponent/branches.vue"
import executiveManagement from "../js/component/enterpriseCreditData/subComponent/executiveManagement.vue"
import middleManagement from "../js/component/enterpriseCreditData/subComponent/middleManagement.vue"
import techicalPerson from "../js/component/enterpriseCreditData/subComponent/technicalPerson.vue"
import techicalPersonInfo from "../js/component/enterpriseCreditData/subComponent/technicalPersonInfo.vue"
import employeeSituation from "../js/component/enterpriseCreditData/subComponent/employeeSituation.vue"
import corporateStructure from "../js/component/enterpriseCreditData/subComponent/corporateStructure.vue"
import managementSystem from "../js/component/enterpriseCreditData/subComponent/managementSystem.vue"
import qualityControl from "../js/component/enterpriseCreditData/subComponent/qualityControl.vue"
import envManagement from "../js/component/enterpriseCreditData/subComponent/envManagement.vue"
import qualificationInfo from "../js/component/enterpriseCreditData/subComponent/qualificationInfo.vue"
import safetyManagement from "../js/component/enterpriseCreditData/subComponent/safetyManagement.vue"
import serviceManagement from "../js/component/enterpriseCreditData/subComponent/serviceManagement.vue"
import industrialEnv from "../js/component/enterpriseCreditData/subComponent/industrialEnv.vue"
import industryStatus from "../js/component/enterpriseCreditData/subComponent/industryStatus.vue"
import technicalEquipment from "../js/component/enterpriseCreditData/subComponent/technicalEquipment.vue"
import ownMechanical from "../js/component/enterpriseCreditData/subComponent/ownMechanical.vue"
import rAndDCapabilibty from "../js/component/enterpriseCreditData/subComponent/rAndDCapability.vue"
import developCapability from "../js/component/enterpriseCreditData/subComponent/developCapability.vue"
import developStrategy from "../js/component/enterpriseCreditData/subComponent/developStrategy.vue"
import accountingSituation from "../js/component/enterpriseCreditData/subComponent/accountingSituation.vue"
import creditSituation from "../js/component/enterpriseCreditData/subComponent/creditSituation.vue"
import bankreference from "../js/component/enterpriseCreditData/subComponent/bankreference.vue"
import certification from "../js/component/enterpriseCreditData/subComponent/certification.vue"
import marketNetwork from "../js/component/enterpriseCreditData/subComponent/marketNetwork.vue"
import tenderCredit from "../js/component/enterpriseCreditData/subComponent/tenderCredit.vue"
import assetsLiability from "../js/component/enterpriseCreditData/subComponent/assetsLiability.vue"
import lossInformation from "../js/component/enterpriseCreditData/subComponent/lossInformation.vue"
import cashInformation from "../js/component/enterpriseCreditData/subComponent/cashInformation.vue"
import goverInvest from "../js/component/enterpriseCreditData/subComponent/goverInvest.vue"
import govermentSummary from "../js/component/enterpriseCreditData/subComponent/govermentSummary.vue"
import otherInvest from "../js/component/enterpriseCreditData/subComponent/otherInvest.vue"
import otherSummary from "../js/component/enterpriseCreditData/subComponent/otherSummary.vue"
import contractualDispute from "../js/component/enterpriseCreditData/subComponent/contractualDispute.vue"
import winProject from "../js/component/enterpriseCreditData/subComponent/winProject.vue"
import winProduct from "../js/component/enterpriseCreditData/subComponent/winProduct.vue"
import creditScoreList from "../js/component/enterCreditScore/subComponent/creditScoreList.vue"
import creditReportMaterialAudit from "../js/component/creditReportManagement/subComponent/creditReportMaterialAudit"
import creditReportOutput from "../js/component/creditReportManagement/subComponent/creditReportOutput"
import creditReportReview from "../js/component/creditReportManagement/subComponent/creditReportReview"
import creditReportProduction from "../js/component/creditReportManagement/subComponent/creditReportProduction"
import basicSituationIndexSystem from "../js/component/evaluationIndexSystem/subComponent/basicSituationIndexSystem/basicSituationIndexSystem"
import financialStatusIndicatorSystem from "../js/component/evaluationIndexSystem/subComponent/financialStatusIndicatorSystem/financialStatusIndicatorSystem"
import developmentCapacityIndexSystem from "../js/component/evaluationIndexSystem/subComponent/developmentCapacityIndexSystem/developmentCapacityIndexSystem"
import publicSupervisionIndexSystem from "../js/component/evaluationIndexSystem/subComponent/publicSupervisionIndexSystem/publicSupervisionIndexSystem"
import biddingSupervisionIndexSystem from "../js/component/evaluationIndexSystem/subComponent/biddingSupervisionIndexSystem/biddingSupervisionIndexSystem"
import creditRatingList from "../js/component/creditRatingPublicity/creditRatingList"
import performanceEvaluationStandardValue from "../js/component/performanceEvaluationStandardValue/performanceEvaluationStandardValue"
import Login from "../js/component/Login/index.vue"
import ProjectManagement from '../js/component/enterpriseCreditData/subComponent/projectManagement.vue'
import ServiceQuality from '../js/component/enterpriseCreditData/subComponent/serviceQuality.vue'
import Office from '../js/component/enterpriseCreditData/subComponent/office.vue'
import Potential from '../js/component/enterpriseCreditData/subComponent/potential.vue'
import Responsibility from '../js/component/enterpriseCreditData/subComponent/responsibility.vue'
import Register from '../js/component/Register/registered.vue'
import store from '../store/index.js'

Vue.use(Router)
const routes =  [
        {
            path: "/",
            redirect: '/home',
            component: Home,
            meta: {
                requireAuth: true,  // 进入这个路由是需要登录的
            },
            children: [
                {
                    path: "/home",
                    component: indexTable,
                    meta: {
                        requireAuth: true
                    }
                },
                {
                    path: "/userlist",
                    component: userlistTable,
                    meta: {
                        requireAuth: true
                    }
                },
                {
                    path: "/rolelist",
                    component: rolelistTable,
                    meta: {
                        requireAuth: true
                    }
                },
                {
                    path: "/listdata",
                    component: enterpriseListData,
                    meta: {
                        requireAuth: true
                    }
                },
                {
                    path: "/addenterprise",
                    component: addEnterpriseData,
                    meta: {
                        requireAuth: true
                    },
                    children: [
                        {
                            path: "basic",
                            component: basicSituation,
                            meta: {
                                requireAuth: true
                            }
                        },
                        {
                            path: "history",
                            component: historyEvolution,
                            meta: {
                                requireAuth: true
                            }
                        },
                        {
                            path: "background",
                            component: backgroundSituation,
                            meta: {
                                requireAuth: true
                            }
                        },
                        {
                            path: "capital",
                            component: capitalStrength,
                            meta: {
                                requireAuth: true
                            }
                        },
                        {
                            path: "structure",
                            component: ownershipStructure,
                            meta: {
                                requireAuth: true
                            }
                        },
                        {
                            path: "shareholders",
                            component: shareholdersSituation,
                            meta: {
                                requireAuth: true
                            }
                        },
                        {
                            path: "branches",
                            component: branches,
                            meta: {
                                requireAuth: true
                            }
                        },
                        {
                            path: "executive",
                            component: executiveManagement,
                            meta: {
                                requireAuth: true
                            }
                        },
                        {
                            path: "middle",
                            component: middleManagement,
                            meta: {
                                requireAuth: true
                            }
                        },
                        {
                            path: "techical",
                            component: techicalPerson,
                            meta: {
                                requireAuth: true
                            }
                        },
                        {
                            path: "techicalInfo",
                            component: techicalPersonInfo,
                            meta: {
                                requireAuth: true
                            }
                        },
                        {
                            path: "employeeInfo",
                            component: employeeSituation,
                            meta: {
                                requireAuth: true
                            }
                        },
                        {
                            path: "corporateStructure",
                            component: corporateStructure,
                            meta: {
                                requireAuth: true
                            }
                        },
                        {
                            path: "manageSystem",
                            component: managementSystem,
                            meta: {
                                requireAuth: true
                            }
                        },
                        {
                            path: "qualityControl",
                            component: qualityControl,
                            meta: {
                                requireAuth: true
                            }
                        },
                        {
                            path: "envManagement",
                            component: envManagement,
                            meta: {
                                requireAuth: true
                            }
                        },
                        {
                            path: "qualificationInfo",
                            component: qualificationInfo,
                            meta: {
                                requireAuth: true
                            }
                        },
                        {
                            path: "industrialEnv",
                            component: industrialEnv,
                            meta: {
                                requireAuth: true
                            }
                        },
                        {
                            path: "industryStatus",
                            component: industryStatus,
                            meta: {
                                requireAuth: true
                            }
                        },
                        {
                            path: "safetyManagement",
                            component: safetyManagement,
                            meta: {
                                requireAuth: true
                            }
                        },
                        {
                            path: "serviceManagement",
                            component: serviceManagement,
                            meta: {
                                requireAuth: true
                            }
                        },
                        {
                            path: "technicalEquipment",
                            component: technicalEquipment,
                            meta: {
                                requireAuth: true
                            }
                        },
                        {
                            path: "responsibility",
                            component: Responsibility,
                            meta: {
                                requireAuth: true
                            }
                        },
                        {
                            path: "ownMechanical",
                            component: ownMechanical,
                            meta: {
                                requireAuth: true
                            }
                        },
                        {
                            path: "projectManagement",
                            component: ProjectManagement,
                            meta: {
                                requireAuth: true
                            }
                        },
                        {
                            path: "serviceQuality",
                            component: ServiceQuality,
                            meta: {
                                requireAuth: true
                            }
                        },
                        {
                            path: "rAndDCapabilibty",
                            component: rAndDCapabilibty,
                            meta: {
                                requireAuth: true
                            }
                        },
                        {
                            path: "developCapability",
                            component: developCapability,
                            meta: {
                                requireAuth: true
                            }
                        },
                        {
                            path: "developStrategy",
                            component: developStrategy,
                            meta: {
                                requireAuth: true
                            }
                        },
                        {
                            path: "accountingSituation",
                            component: accountingSituation,
                            meta: {
                                requireAuth: true
                            }
                        },
                        {
                            path: "creditSituation",
                            component: creditSituation,
                            meta: {
                                requireAuth: true
                            }
                        },
                        {
                            path: "bankreference",
                            component: bankreference,
                            meta: {
                                requireAuth: true
                            }
                        },
                        {
                            path: "certification",
                            component: certification,
                            meta: {
                                requireAuth: true
                            }
                        },
                        {
                            path: "marketNetwork",
                            component: marketNetwork,
                            meta: {
                                requireAuth: true
                            }
                        },
                        {
                            path: "tenderCredit",
                            component: tenderCredit,
                            meta: {
                                requireAuth: true
                            }
                        },
                        {
                            path: "goverInvest",
                            component: goverInvest,
                            meta: {
                                requireAuth: true
                            }
                        },
                        {
                            path: "goverment",
                            component: govermentSummary,
                            meta: {
                                requireAuth: true
                            }
                        },
                        {
                            path: "otherinvest",
                            component: otherInvest,
                            meta: {
                                requireAuth: true
                            }
                        },
                        {
                            path: "otherSummary",
                            component: otherSummary,
                            meta: {
                                requireAuth: true
                            }
                        },
                        {
                            path: "contractualDispute",
                            component: contractualDispute,
                            meta: {
                                requireAuth: true
                            }
                        },
                        {
                            path: "winproject",
                            component: winProject,
                            meta: {
                                requireAuth: true
                            }
                        },
                        {
                            path: "office",
                            component: Office,
                            meta: {
                                requireAuth: true
                            }
                        },
                        {
                            path: "potential",
                            component: Potential,
                            meta: {
                                requireAuth: true
                            }
                        },
                        {
                            path: "winProduct",
                            component: winProduct,
                            meta: {
                                requireAuth: true
                            }
                        },
                        {
                            path: "assetsLiability",
                            component: assetsLiability,
                            meta: {
                                requireAuth: true
                            }
                        },
                        {
                            path: "lossInformation",
                            component: lossInformation,
                            meta: {
                                requireAuth: true
                            }
                        },
                        {
                            path: "cashinformation",
                            component: cashInformation,
                            meta: {
                                requireAuth: true
                            }
                        }
                    ]
                },
                {
                    path: "/creditscore",
                    component: creditScoreList,
                    meta: {
                        requireAuth: true
                    }
                },
                {
                    path:"/creditReportMaterialAudit",
                    component: creditReportMaterialAudit,
                    meta: {
                        requireAuth: true
                    }
                },
                {
                    path:"/creditReportOutput",
                    component: creditReportOutput,
                    meta: {
                        requireAuth: true
                    }
                },
                {
                    path:"/creditReportReview",
                    component: creditReportReview,
                    meta: {
                        requireAuth: true
                    }
                },
                {
                    path:"/creditReportProduction",
                    component: creditReportProduction,
                    meta: {
                        requireAuth: true
                    }
                },
                {
                    path:"/basicSituationIndexSystem",
                    component:basicSituationIndexSystem,
                    meta: {
                        requireAuth: true
                    }
                },
                {
                    path:"/financialStatusIndicatorSystem",
                    component:financialStatusIndicatorSystem,
                    meta: {
                        requireAuth: true
                    }
                },
                {
                    path:"/publicSupervisionIndexSystem",
                    component:publicSupervisionIndexSystem,
                    meta: {
                        requireAuth: true
                    }
                },
                {
                    path:"/developmentCapacityIndexSystem",
                    component:developmentCapacityIndexSystem,
                    meta: {
                        requireAuth: true
                    }
                },
                {
                    path:"/biddingSupervisionIndexSystem",
                    component:biddingSupervisionIndexSystem,
                    meta: {
                        requireAuth: true
                    }
                },
                {
                    path:"/creditRatingList",
                    component:creditRatingList,
                    meta: {
                        requireAuth: true
                    }
                },
                {
                    path:"/performanceEvaluationStandardValue",
                    component:performanceEvaluationStandardValue,
                    meta: {
                        requireAuth: true
                    }
                },
                // {
                //     path:"/",
                //     component:
                // },
                // {
                //     path:"/",
                //     component:
                // },
                // {
                //     path:"/",
                //     component:
                // },
                // {
                //     path:"/",
                //     component:
                // },
            ]
        },
  {
            path: "/login",
            component: Login
        },
        {
            path: "/register",
            component: Register
        }

    ]
const router = new Router({
    routes
})
router.beforeEach((to, from, next) => {
    let USER_INFO = localStorage.getItem('USER_INFO')
    if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
        if (USER_INFO) {  // 通过vuex state获取当前的token是否存在
            next();
        }
        else {
            next({
                path: '/login',
                query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        }
    }
    else {
        next();
    }
})

export default router
