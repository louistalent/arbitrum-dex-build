import{d,c as a,o as _,f9 as f,aK as u,v as s,s as g,t as P,B as n,C as B,D as x,H as W,U as V,a8 as b,a6 as C}from"./index-4a1c513c.js";import{u as h,P as l}from"./usePoolWarning-b134504b.js";const k={class:"text-sm text-left"},$=d({__name:"PoolWarningTooltip",props:{pool:null},setup(r){const o=r,i=a(()=>o.pool.id),{t}=_(),{isAffectedBy:c}=h(i),e=a(()=>f(o.pool)&&!u(o.pool.id)?t("deprecatedPool.tooltip"):c(l.PoolProtocolFeeVulnWarning)?t(`poolWarnings.${l.PoolProtocolFeeVulnWarning}.tooltip`):"");return(v,y)=>{const p=b,m=C;return s(e)?(g(),P(m,{key:0,class:"mb-1 ml-2 text-red-500",name:"alert-circle",filled:"",size:"md"},{activator:n(()=>[B(p,{class:"mt-1",name:"alert-triangle",size:"md"})]),default:n(()=>[x("div",k,W(s(e)),1)]),_:1})):V("",!0)}}});export{$ as _};
//# sourceMappingURL=PoolWarningTooltip.vue_vue_type_script_setup_true_lang-c104e09b.js.map
