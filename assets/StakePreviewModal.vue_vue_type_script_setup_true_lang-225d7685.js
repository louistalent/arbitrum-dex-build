import{d as C,p as O,s as _,t as g,B as s,C as o,a1 as V,H as i,D as h,v as t,F as S,a6 as sa,b as na,o as la,ag as ia,q as M,y as r,Z as U,c as G,ba as E,z as I,$ as ca,aO as B,fb as ra,U as y,a8 as ua,bc as da,a7 as pa,aV as ma,aF as fa,aC as ka}from"./index-4a1c513c.js";import{A as _a,_ as ga}from"./BalActionSteps.vue_vue_type_script_setup_true_lang-78b4efb6.js";import{_ as ha}from"./BalAssetSet-1d81bc3d.js";import{_ as va}from"./BalCircle-e6fd1d55.js";import{_ as $a}from"./ConfirmationIndicator.vue_vue_type_script_setup_true_lang-5746d56d.js";import{u as ba,A as wa}from"./useTokenApprovalActions-8e0c610b.js";import{_ as ya,a as Sa}from"./BalDataListRow.vue_vue_type_script_setup_true_lang-03b32597.js";import{u as W}from"./pool-staking.provider-fee39c11.js";const Aa={class:"lowercase"},Ta={class:"capitalize"},Ba={class:"capitalize"},Va=C({__name:"StakeSummary",props:{action:null,fiatValue:null,sharePercentage:null},setup(e){const{fNum:c}=O();return(a,u)=>{const d=sa,p=ya,m=Sa;return _(),g(m,{title:a.$t("summary")},{default:s(()=>[o(p,null,{label:s(()=>[V(i(a.$t("totalValueTo"))+"   ",1),h("span",Aa,i(e.action==="stake"?a.$t("stake"):a.$t("unstake"))+": ",1)]),value:s(()=>[h("span",Ta,i(t(c)(e.fiatValue,t(S).fiat)),1),o(d,{text:e.action==="stake"?a.$t("staking.stakeValueTooltip"):a.$t("staking.unstakeValueTooltip"),width:"40",textAlign:"center",class:"ml-2"},null,8,["text"])]),_:1}),o(p,{label:a.$t("staking.newTotalShare")},{value:s(()=>[h("span",Ba,i(t(c)(e.sharePercentage,t(S).percent)),1),o(d,{text:a.$t("staking.totalShareTooltip"),width:"40",textAlign:"center",class:"ml-2"},null,8,["text"])]),_:1},8,["label"])]),_:1},8,["title"])}}}),Ca={class:"py-2 px-4 rounded-lg border dark:border-gray-700 divide-y dark:divide-gray-700"},Pa={class:"text-secondary"},La=C({__name:"StakePreview",props:{pool:null,action:null},emits:["close","success"],setup(e,{emit:c}){const a=e,{balanceFor:u,getToken:d,refetchBalances:p}=na(),{fNum:m}=O(),{t:n}=la(),{addTransaction:P}=ia(),{stake:A,unstake:Z,stakedShares:L,refetchAllPoolStakingData:j,preferentialGaugeAddress:F}=W(),f=a.action==="stake"?u(M(a.pool.address)):L.value,{getTokenApprovalActionsForSpender:q}=ba(r([a.pool.address]),r([f]),wa.Staking),N={label:n("stake"),loadingLabel:n("staking.staking"),confirmingLabel:n("confirming"),action:()=>D(A),stepTooltip:n("staking.stakeTooltip")},x={label:n("unstake"),loadingLabel:n("staking.unstaking"),confirmingLabel:n("confirming"),action:()=>D(Z),stepTooltip:a.action==="restake"?n("staking.restakeTooltip"):n("staking.unstakeTooltip")},z=r(!1),v=r(!1),w=r(),$=r([]);U(()=>a.action,()=>{a.action==="stake"&&($.value=[N]),a.action==="unstake"&&($.value=[x]),a.action==="restake"&&($.value=[x,N])},{immediate:!0});const H=G(()=>E(a.pool).length*32/1.5),J=G(()=>a.action==="stake"&&(f==="0"||f==="")),K=r(I(I(L.value).plus(u(M(a.pool.address)))).div(a.pool.totalShares).toString());ca(async()=>{a.action!=="unstake"&&await X()});async function Q({receipt:l}){v.value=!0,w.value=l,await Promise.all([p(),j()]),c("success")}async function D(l){try{const k=await l();return P({id:k.hash,type:"tx",action:a.action,summary:n(`transactionSummary.${a.action}`,{pool:a.pool.symbol,amount:m(B(a.pool,f),S.fiat)}),details:{total:m(B(a.pool,f),S.fiat),pool:a.pool}}),k}catch(k){throw new Error(`Failed create ${a.action} transaction`,{cause:k})}}async function X(){const l=await ra(async()=>{if(F.value)return q(F.value)},z);l&&$.value.unshift(...l)}function Y(){v.value=!1,w.value=void 0,c("close")}return(l,k)=>{const aa=ua,ta=va,b=da,ea=ha,oa=ga,R=pa;return _(),g(b,{vertical:""},{default:s(()=>[o(b,{horizontal:"",spacing:"sm",align:"center"},{default:s(()=>[t(v)?(_(),g(ta,{key:0,size:"8",color:"green",class:"text-white"},{default:s(()=>[o(aa,{name:"check"})]),_:1})):y("",!0),h("h4",null,i(l.$t(`${e.action}`))+" "+i(l.$t("lpTokens")),1)]),_:1}),h("div",Ca,[o(b,{horizontal:"",justify:"between",align:"center"},{default:s(()=>[o(b,{vertical:"",spacing:"none"},{default:s(()=>{var T;return[h("h5",null,i(t(m)(t(f)))+" "+i(l.$t("lpTokens")),1),h("span",Pa,i((T=t(d)(e.pool.address))==null?void 0:T.symbol),1)]}),_:1}),o(ea,{addresses:t(E)(e.pool),width:t(H),size:32},null,8,["addresses","width"])]),_:1})]),o(Va,{action:e.action,fiatValue:t(B)(e.pool,t(f)),sharePercentage:t(K)},null,8,["action","fiatValue","sharePercentage"]),t(v)?y("",!0):(_(),g(oa,{key:0,actions:t($),isLoading:t(z),disabled:t(J),onSuccess:Q},null,8,["actions","isLoading","disabled"])),t(v)&&t(w)?(_(),g(b,{key:1,vertical:""},{default:s(()=>[o($a,{txReceipt:t(w)},null,8,["txReceipt"]),o(_a,{isVisible:t(v)},{default:s(()=>[e.action==="stake"?(_(),g(R,{key:0,color:"gradient",block:"",class:"mb-2",onClick:k[0]||(k[0]=T=>l.$router.push({name:"claim"}))},{default:s(()=>[V(i(l.$t("viewClaims")),1)]),_:1})):y("",!0),o(R,{color:"gray",outline:"",block:"",onClick:Y},{default:s(()=>[V(i(l.$t("close")),1)]),_:1})]),_:1},8,["isVisible"])]),_:1})):y("",!0)]),_:1})}}}),Ea=C({__name:"StakePreviewModal",props:{isVisible:{type:Boolean},pool:null,action:null},emits:["close","success"],setup(e,{emit:c}){const a=e,u=r(!1),{setCurrentPool:d}=W();function p(){u.value=!1,c("close")}function m(){u.value=!0,c("success")}return ma(()=>{d(a.pool.id)}),U(()=>a.pool,n=>{d(n.id)}),(n,P)=>{const A=ka;return _(),g(fa,{to:"#modal"},[o(A,{show:e.isVisible,fireworks:u.value,onClose:p},{default:s(()=>[o(La,{pool:e.pool,action:e.action,onClose:p,onSuccess:m},null,8,["pool","action"])]),_:1},8,["show","fireworks"])])}}});export{Ea as _};
//# sourceMappingURL=StakePreviewModal.vue_vue_type_script_setup_true_lang-225d7685.js.map
