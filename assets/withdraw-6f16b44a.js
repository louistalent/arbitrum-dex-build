var Kt=Object.defineProperty;var Yt=(s,a,t)=>a in s?Kt(s,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[a]=t;var he=(s,a,t)=>(Yt(s,typeof a!="symbol"?a+"":a,t),t);import{_ as Ie}from"./BalLoadingBlock.vue_vue_type_style_index_0_lang-3fa460ee.js";import{a as rt,T as Ce,u as Zt,d as Ze,b as Jt}from"./usePoolTransfersGuard-b0534fb4.js";import{d as G,y as q,b as oe,aE as Y,aH as de,c as d,ba as ct,s as i,t as g,B as L,D as w,v as e,G as B,H as P,C as S,a1 as se,U as j,by as Ae,a8 as Te,ak as Se,as as $e,u as ne,p as le,aS as te,z as C,cl as ut,l as Xt,Z as ee,$ as _e,a0 as be,a2 as dt,F as J,o as pe,ag as pt,af as mt,aw as ea,O as ta,c9 as vt,ay as ht,aL as aa,aM as sa,cm as ft,a7 as Be,j as _t,c1 as wt,a6 as Fe,aC as xt,ah as gt,aD as ce,aF as kt,bZ as ae,bS as X,bT as Je,bU as ye,bV as ue,bW as Xe,bX as oa,cn as et,bY as na,P as la,bj as Me,aa as We,b_ as tt,co as bt,q as ia,c8 as yt,b$ as ra,c0 as ca,e as Oe,f as at,Q as st,cp as Ve,bP as ua,bQ as da,c2 as pa,aO as ma,aV as It,c3 as Le,c4 as va,c6 as ha,bp as fa,c5 as _a,c7 as ot,J as wa,az as xa,bR as nt,a as ga,_ as ka,cd as ba,ce as ya}from"./index-4a1c513c.js";import{_ as At}from"./useTransactionErrors-09c4ac25.js";import{_ as Tt}from"./BalCheckbox-b97e4661.js";import{c as Ia,d as Aa,_ as Ne}from"./TokenInput.vue_vue_type_script_setup_true_lang-d6685049.js";import{d as St,a as Et,o as lt}from"./validations-f14f6fca.js";import{_ as qe}from"./BalAsset-fe687731.js";import{a as Ee,u as Ta}from"./useWithdrawMath-4e11940a.js";import{_ as Sa}from"./BalAssetSet-1d81bc3d.js";import{_ as Pt}from"./BalCircle-e6fd1d55.js";import{_ as Ot}from"./BalActionSteps.vue_vue_type_script_setup_true_lang-78b4efb6.js";import{_ as $t}from"./ConfirmationIndicator.vue_vue_type_script_setup_true_lang-5746d56d.js";import{a as Ea,v as Pa}from"./swapper-7147db03.js";import{E as Oa}from"./exchange.service-4f09193f.js";import{_ as $a,a as Ba}from"./BalDataListRow.vue_vue_type_script_setup_true_lang-03b32597.js";import{u as Ma,R as it,a as Ra}from"./useRelayerApprovalTx-95afc1c6.js";import{H as La,R as Ca}from"./poolLiquidity-de5c7424.js";import{S as Va,_ as Fa}from"./SwapSettingsPopover.vue_vue_type_style_index_0_lang-1d919268.js";import{_ as Wa}from"./BalTabs.vue_vue_type_style_index_0_lang-df57e740.js";import"./usePoolQuery-b97c571a.js";import"./useQueryHelpers-8cb4e6d7.js";import"./numeral-7364357d.js";import"./useTokenHelpers-ddc69531.js";import"./tslib.es6-b45817b3.js";const Na={class:"group token-select-input selected selectable"},qa={class:"text-base font-medium"},Ga={key:0},Da={key:1},Ua={key:0,class:"flex justify-between items-center"},Ha={class:"flex items-center"},ja={key:1,class:"flex justify-between items-center"},za={class:"flex items-center"},Qa=G({__name:"WithdrawalTokenSelect",props:{pool:null,initToken:{default:"all"}},setup(s){const a=s,t=q(a.initToken),{getToken:o,nativeAsset:l}=oe(),{isProportional:n,tokenOut:r}=Ee(Y(a,"pool")),{isWethPool:p,isDeepPool:c}=de(Y(a,"pool")),x=d(()=>{var T;const h=ct(a.pool);return c.value?((T=a.pool)==null?void 0:T.mainTokens)||[]:p.value?[l.address,...h]:h}),u=d(()=>["all",...x.value]),_=d(()=>o(t.value)),I=d(()=>40+(x.value.length-2)*10);function A(h){return t.value==="all"||h==="all"?t.value===h:Ae(t.value,h)}function O(h){h==="all"?(n.value=!0,t.value="all"):(n.value=!1,t.value=h,r.value=h)}return(h,T)=>{const M=Sa,$=qe,y=Te,E=Ia;return i(),g(E,{options:e(u),minWidth:"44",onSelected:O},{activator:L(()=>[w("div",Na,[w("div",null,[e(n)?(i(),g(M,{key:0,addresses:e(x),width:50},null,8,["addresses"])):(i(),g($,{key:1,address:e(_).address,class:"mr-2 shadow"},null,8,["address"]))]),w("span",qa,[e(n)?(i(),B("span",Ga,"All tokens")):(i(),B("span",Da,P(e(_).symbol),1))]),S(y,{name:"chevron-down",size:"sm",class:"ml-2 text-blue-500 group-hover:text-pink-500 dark:text-blue-400 dark:group-hover:text-yellow-500 transition-colors"})])]),option:L(({option:m})=>{var f;return[m==="all"?(i(),B("div",Ua,[w("div",Ha,[S(M,{addresses:e(x),width:e(I)},null,8,["addresses","width"]),se(" "+P(h.$t("allTokens")),1)]),A(m)?(i(),g(y,{key:0,name:"check",class:"ml-2 text-blue-500 dark:text-blue-400"})):j("",!0)])):(i(),B("div",ja,[w("div",za,[S($,{address:m,class:"mr-2"},null,8,["address"]),se(" "+P((f=e(o)(m))==null?void 0:f.symbol),1)]),A(m)?(i(),g(y,{key:0,name:"check",class:"ml-2 text-blue-500 dark:text-blue-400"})):j("",!0)]))]}),_:1},8,["options"])}}});const Bt=Se(Qa,[["__scopeId","data-v-7afb757a"]]),Ka={class:"proportional-input"},Ya={class:"proportional-input-container"},Za={class:"flex"},Ja={class:"text-xl text-right grow font-numeric"},Xa={key:1},es={class:"flex mt-2 text-sm text-secondary"},ts={class:"text-right grow"},as={class:"token-amounts"},ss={class:"flex justify-between items-center"},os={class:"flex items-center"},ns={class:"flex flex-col leading-none"},ls={class:"text-lg font-medium"},is={key:0},rs={class:"flex flex-col items-end pl-2 text-right grow font-numeric"},cs={class:"text-xl break-words"},us={class:"text-sm text-gray-400"},ds=G({__name:"ProportionalWithdrawalInput",props:{pool:null,tokenAddresses:null,math:null},setup(s){const a=s,{propBptIn:t,bptBalance:o,hasBpt:l,fiatTotalLabel:n,fiatAmounts:r,proportionalAmounts:p,shouldFetchBatchSwap:c,loadingData:x}=$e(a.math),{slider:u}=Ee(Y(a,"pool")),{isWalletReady:_}=ne(),{missingPrices:I}=rt(),{getTokens:A}=oe(),{isStableLikePool:O}=de(Y(a,"pool")),{fNum:h}=le(),T=d(()=>te(a.pool)?A(a.pool.mainTokens||[]):A(ct(a.pool))),M=d(()=>{try{return l.value?C(t.value).div(o.value).times(100).integerValue(ut.ROUND_CEIL).toString():"100"}catch(m){return console.error(m),"0"}}),$=d(()=>{var m,f;return Object.values(((f=(m=a.pool)==null?void 0:m.onchain)==null?void 0:f.tokens)||[]).map(v=>v.weight)});function y(m){var v,b;const f=m/u.value.max*1e4;t.value=C(o.value).times(f).div(1e4).toFixed(((b=(v=a.pool)==null?void 0:v.onchain)==null?void 0:b.decimals)||18),c.value&&E()}const E=Xt.debounce(()=>{a.math.fetchExitData()},500);return ee(_,()=>{t.value=o.value}),_e(()=>{t.value=o.value}),(m,f)=>{const v=Ie,b=Aa,R=qe;return i(),B("div",null,[w("div",Ka,[w("div",Ya,[w("div",Za,[S(Bt,{pool:s.pool},null,8,["pool"]),w("div",Ja,[e(x)?(i(),g(v,{key:0,class:"float-right w-20 h-8"})):(i(),B("span",Xa,P(e(I)?"-":e(n)),1))])]),w("div",es,[w("span",null,P(m.$t("proportionalWithdrawal")),1),w("span",ts,P(e(M))+"%",1)]),S(b,{modelValue:e(u).val,"onUpdate:modelValue":[f[0]||(f[0]=V=>e(u).val=V),y],max:e(u).max,interval:e(u).interval,min:e(u).min,tooltip:"none",disabled:!e(l)},null,8,["modelValue","max","interval","min","disabled"])])]),w("div",as,[(i(!0),B(be,null,dt(e(T),(V,D,U)=>(i(),B("div",{key:D,class:"p-4 last:mb-0"},[w("div",ss,[w("div",os,[S(R,{address:D,class:"mr-2"},null,8,["address"]),w("div",ns,[w("span",ls,[se(P(V.symbol)+" ",1),e(O)?j("",!0):(i(),B("span",is,P(e(h)(e($)[U],{style:"percent",maximumFractionDigits:0})),1))])])]),w("div",rs,[e(x)?(i(),g(v,{key:0,class:"w-20 h-12"})):(i(),B(be,{key:1},[w("span",cs,P(e(h)(e(p)[U],e(J).token)),1),w("span",us,P(e(h)(e(r)[U],e(J).fiat)),1)],64))])])]))),128))])])}}});const ps=Se(ds,[["__scopeId","data-v-a2df4e80"]]),ms={key:1},vs=G({__name:"WithdrawActions",props:{pool:null,math:null},emits:["success","error"],setup(s,{emit:a}){const t=s,{t:o}=pe(),{getSigner:l,getProvider:n,blockNumber:r}=ne(),{addTransaction:p}=pt(),{txListener:c,getTxConfirmedAt:x}=mt(),{poolWeightsLabel:u}=de(Y(t,"pool")),{tokenOutIndex:_,tokensOut:I,batchRelayerApproval:A,txInProgress:O,tx:h,resetTxState:T}=Ee(Y(t,"pool")),{networkSlug:M}=_t(),{refetchBalances:$}=oe(),{bptIn:y,fiatTotalLabel:E,fiatTotal:m,amountsOut:f,exactOut:v,singleAssetMaxOut:b,batchSwap:R,batchSwapAmountsOutMap:V,batchSwapKind:D,shouldUseBatchRelayer:U,batchRelayerSwap:F,shouldFetchBatchSwap:xe}=$e(t.math),Q={label:o("withdraw.label"),loadingLabel:o("withdraw.preview.loadingLabel.withdraw"),confirmingLabel:o("confirming"),action:me,stepTooltip:o("withdraw.preview.tooltips.withdrawStep")},W=q([Q]),ge=new Oa(Y(t,"pool"));async function ke(Z){p({id:Z.hash,type:"tx",action:"withdraw",summary:o("transactionSummary.withdrawFromPool",[E.value,u(t.pool)]),details:{total:E.value,pool:t.pool}}),h.value.confirmed=await c(Z,{onTxConfirmed:async K=>{a("success",K),h.value.confirming=!1,h.value.receipt=K;const N=await x(K);h.value.confirmedAt=ht(N),aa(sa.Withdrawal,C(m.value).times(100).toNumber()||0),await $()},onTxFailed:()=>{h.value.confirming=!1}})}async function me(){var Z,K;try{let N;return h.value.init=!0,U.value&&F.value?N=await ea.batchRelayer.execute(F.value,n()):R.value?N=await Ea(R.value.swaps,R.value.assets,t.pool.address,y.value,V.value,D.value):N=await ge.exit(l(),f.value,I.value,ta(y.value,((K=(Z=t.pool)==null?void 0:Z.onchain)==null?void 0:K.decimals)||18),b.value?_.value:null,v.value),h.value.init=!1,h.value.confirming=!0,console.log("Receipt",N),ke(N),N}catch(N){throw h.value.init=!1,h.value.confirming=!1,console.error(N),new Error("Failed to submit withdrawal transaction.",{cause:N})}}function H(){T(),ft.push({name:"pool",params:{networkSlug:M,id:t.pool.id}})}return _e(()=>{U.value&&!A.isUnlocked.value&&W.value.unshift(A.action.value)}),ee(r,async()=>{xe.value&&!O.value&&(await t.math.fetchExitData(),R.value&&(R.value.assets.length===0||R.value.swaps.length===0)&&a("error"))}),(Z,K)=>{const N=Ot,ve=Be;return i(),g(vt,null,{default:L(()=>[!e(h).confirmed||!e(h).receipt?(i(),g(N,{key:0,actions:W.value},null,8,["actions"])):(i(),B("div",ms,[S($t,{txReceipt:e(h).receipt},null,8,["txReceipt"]),S(ve,{color:"gray",outline:"",block:"",class:"mt-2",onClick:H},{default:L(()=>[se(P(Z.$t("returnToPool")),1)]),_:1})]))]),_:1})}}}),Mt=G({__name:"WithdrawSummary",props:{pool:null,fiatTotal:null,priceImpact:null},setup(s){const{fNum:a}=le(),{currency:t}=wt();return(o,l)=>{const n=Fe,r=$a,p=Ba;return i(),g(p,{title:o.$t("summary")},{default:L(()=>[S(r,{label:o.$t("total")},{value:L(()=>[se(P(e(a)(s.fiatTotal,e(J).fiat))+" ",1),S(n,{text:o.$t("tooltips.withdraw.total",[e(t).toUpperCase()]),iconSize:"sm",class:"ml-2"},null,8,["text"])]),_:1},8,["label"]),S(r,{label:o.$t("priceImpact")},{value:L(()=>[se(P(e(a)(s.priceImpact,e(J).percent))+" ",1),S(n,{text:o.$t("tooltips.withdraw.priceImpact"),iconSize:"sm",width:"72",class:"ml-2"},null,8,["text"])]),_:1},8,["label"])]),_:1},8,["title"])}}}),hs={class:"flex items-center"},fs=G({__name:"WithdrawPreviewModal",props:{pool:null,math:null},emits:["close"],setup(s,{emit:a}){const t=s,{t:o}=pe(),{getToken:l}=oe(),{toFiat:n}=le(),{fullAmounts:r,priceImpact:p,resetMath:c}=$e(t.math),{tokensOut:x,maxSlider:u,resetTxState:_}=Ee(Y(t,"pool")),{account:I}=ne(),A=q(!1),O=q(p.value),h=d(()=>A.value?o("withdraw.preview.titles.confirmed"):o("withdraw.preview.titles.default")),T=d(()=>{const f={};return r.value.forEach((v,b)=>{E(b)&&(f[x.value[b]]=v)}),f}),M=d(()=>{const f={};return Object.keys(T.value).forEach(v=>{f[v]=l(v)}),f}),$=d(()=>{const f={};return Object.keys(T.value).forEach(v=>{f[v]=n(T.value[v],v)}),f}),y=d(()=>Object.values($.value).reduce((f,v)=>C(f).plus(v).toString(),"0"));function E(f){return C(r.value[f]).gt(0)}function m(){_(),A.value&&(c.value(),u()),a("close")}return ee(I,()=>a("close")),(f,v)=>{const b=Te,R=Pt,V=xt;return i(),g(V,{show:"",fireworks:A.value,onClose:m},{header:L(()=>[w("div",hs,[A.value?(i(),g(R,{key:0,size:"8",color:"green",class:"mr-2 text-white"},{default:L(()=>[S(b,{name:"check"})]),_:1})):j("",!0),w("h4",null,P(e(h)),1)])]),default:L(()=>[S(Ce,{amountMap:e(T),tokenMap:e(M),fiatAmountMap:e($),fiatTotal:e(y)},null,8,["amountMap","tokenMap","fiatAmountMap","fiatTotal"]),S(Mt,{pool:s.pool,fiatTotal:e(y),priceImpact:O.value},null,8,["pool","fiatTotal","priceImpact"]),S(vs,{pool:s.pool,math:s.math,class:"mt-4",onError:v[0]||(v[0]=D=>f.$emit("close")),onSuccess:v[1]||(v[1]=D=>A.value=!0)},null,8,["pool","math"])]),_:1},8,["fireworks"])}}}),_s={class:"data-table"},ws={class:"p-2"},xs={class:"data-table-number-col"},gs={class:"flex items-center"},ks={key:1},bs=G({__name:"WithdrawTotals",props:{math:null},setup(s){const a=s,{fNum:t}=le(),{priceImpact:o,highPriceImpact:l,loadingData:n}=$e(a.math),r=d(()=>({"bg-red-500 text-white divide-red-400 border-none":l.value}));return(p,c)=>{const x=Ie,u=Te,_=Fe;return i(),B("div",_s,[w("div",{class:gt(["data-table-row",e(r)])},[w("div",ws,P(p.$t("priceImpact")),1),w("div",xs,[w("div",gs,[e(n)?(i(),g(x,{key:0,class:"w-10 h-6"})):(i(),B("span",ks,P(e(t)(e(o),e(J).percent)),1)),S(_,{text:p.$t("withdraw.tooltips.priceImpact")},{activator:L(()=>[e(l)?(i(),g(u,{key:0,name:"alert-triangle",size:"xs",class:"-mb-px ml-1"})):(i(),g(u,{key:1,name:"info",size:"xs",class:"-mb-px ml-1 text-gray-400"}))]),_:1},8,["text"])])])],2)])}}});const ys=Se(bs,[["__scopeId","data-v-62a49ad7"]]),Is={key:2,class:"p-2 pb-2 mt-4 rounded-lg border dark:border-gray-700"},As={class:"mt-4"},Ts=G({__name:"WithdrawForm",props:{pool:null},setup(s){const a=s,t=q(!1),{t:o}=pe(),{isProportional:l,tokenOut:n,tokenOutIndex:r,highPriceImpactAccepted:p,validInput:c,maxSlider:x,tokensOut:u,error:_,parseError:I,setError:A,txInProgress:O}=Ee(Y(a,"pool")),h=Ta(Y(a,"pool"),l,u,n,r),{hasAmounts:T,highPriceImpact:M,singleAssetMaxes:$,tokenOutAmount:y,tokenOutPoolBalance:E,loadingData:m,bptBalance:f,initMath:v,resetMath:b}=h,{isWalletReady:R,startConnectWithInjectedProvider:V,isMismatchedNetwork:D}=ne(),U=d(()=>M.value?p.value:!0),F=d(()=>c.value&&U.value),xe=d(()=>[St(E.value,o("exceedsPoolBalance"))]);return ee(l,Q=>{Q&&(v(),x())}),ee(f,()=>{O.value||b()}),_e(()=>{l.value=!0,v(),x()}),(Q,W)=>{const ge=Tt,ke=At,me=Be;return i(),B("div",null,[e(l)?(i(),g(ps,{key:0,pool:s.pool,tokenAddresses:e(u),math:e(h)},null,8,["pool","tokenAddresses","math"])):(i(),g(Ne,{key:1,amount:e(y),"onUpdate:amount":W[0]||(W[0]=H=>ce(y)?y.value=H:null),isValid:e(c),"onUpdate:isValid":W[1]||(W[1]=H=>ce(c)?c.value=H:null),name:e(n),address:e(n),disableBalance:e($)[e(r)]==="-",customBalance:e($)[e(r)]||"0",rules:e(xe),balanceLabel:Q.$t("singleTokenMax"),balanceLoading:e(m),fixedToken:"",disableNativeAssetBuffer:""},{tokenSelect:L(()=>[S(Bt,{pool:s.pool,initToken:e(n)},null,8,["pool","initToken"])]),_:1},8,["amount","isValid","name","address","disableBalance","customBalance","rules","balanceLabel","balanceLoading"])),S(ys,{math:e(h),class:"mt-4"},null,8,["math"]),e(M)?(i(),B("div",Is,[S(ge,{modelValue:e(p),"onUpdate:modelValue":W[2]||(W[2]=H=>ce(p)?p.value=H:null),rules:[e(Et)(Q.$t("priceImpactCheckbox"))],name:"highPriceImpactAccepted",size:"sm",label:Q.$t("priceImpactAccept",[Q.$t("withdrawing")])},null,8,["modelValue","rules","label"])])):j("",!0),e(_)!==null?(i(),g(ke,{key:3,type:"error",title:e(I)(e(_)).title,description:e(I)(e(_)).description,class:"mt-4",block:"",actionLabel:"Dismiss",onActionClick:W[3]||(W[3]=H=>e(A)(null))},null,8,["title","description"])):j("",!0),w("div",As,[e(R)?(i(),g(me,{key:1,label:Q.$t("preview"),color:"gradient",disabled:!e(T)||!e(F)||e(D)||e(m),block:"",onClick:W[4]||(W[4]=H=>t.value=!0)},null,8,["label","disabled"])):(i(),g(me,{key:0,label:Q.$t("connectWallet"),color:"gradient",block:"",onClick:e(V)},null,8,["label","onClick"]))]),(i(),g(kt,{to:"#modal"},[t.value?(i(),g(fs,{key:0,pool:s.pool,math:e(h),onClose:W[5]||(W[5]=H=>t.value=!1)},null,8,["pool","math"])):j("",!0)]))])}}});var fe=(s=>(s[s.GivenIn=0]="GivenIn",s[s.GivenOut=1]="GivenOut",s))(fe||{});class Ss{constructor(a,t,o){he(this,"lastSwapRoute");this.pool=a,this.sdk=t,this.gasPriceService=o}async exit(a){const t=await a.signer.getAddress();if(await this.queryExit(a),!this.lastSwapRoute)throw new Error("Could not fetch swap route for join.");const o=this.getSwapAttributes(a.exitType,this.lastSwapRoute,a.slippageBsp,t),{kind:l,swaps:n,assets:r,funds:p,limits:c}=o.attributes;return Pa.batchSwap(l,n,r,p,c,a.transactionDeadline)}async queryExit(a){return a.exitType===fe.GivenIn?this.queryOutGivenIn(a):this.queryInGivenOut(a)}async queryOutGivenIn({bptIn:a,tokenInfo:t,amountsOut:o,signer:l}){const n=a,r=ae(t,this.pool.value.address),p=t[o[0].address];if(!r||!p)throw new Error("Missing critical token metadata.");if(!n||C(n).eq(0))return{amountsOut:{[p.address]:"0"},priceImpact:0};X.value||await Je();const c=lt(a,r.decimals),x=ye(c,r.decimals),u=await this.getGasPrice(l);this.lastSwapRoute=await this.sdk.swaps.findRouteGivenIn({tokenIn:r.address,tokenOut:this.formatAddressForSor(p.address),amount:x,gasPrice:u,maxPools:4});const _=ue(this.lastSwapRoute.returnAmount,p.decimals);if(C(_).eq(0))throw new Error("Not enough liquidity.");const I=this.calcPriceImpact(n,_,this.lastSwapRoute.marketSp);return{amountsOut:{[p.address]:_},priceImpact:I}}async queryInGivenOut({tokenInfo:a,amountsOut:t,signer:o}){const l=ae(a,this.pool.value.address),n=ae(a,t[0].address);if(!l||!n)throw new Error("Missing critical token metadata.");const r=t[0].value;if(!r||C(r).eq(0))return{amountsOut:{},priceImpact:0};X.value||await Je();const p=lt(t[0].value,n.decimals),c=ye(p,n.decimals),x=await this.getGasPrice(o);this.lastSwapRoute=await this.sdk.swaps.findRouteGivenOut({tokenIn:l.address,tokenOut:this.formatAddressForSor(n.address),amount:c,gasPrice:x,maxPools:4});const u=ue(this.lastSwapRoute.returnAmount,l.decimals);if(C(u).eq(0))throw new Error("Not enough liquidity.");const _=this.calcPriceImpact(u,r,this.lastSwapRoute.marketSp);return{amountsOut:{[n.address]:r},priceImpact:_}}async getGasPrice(a){let t;const o=await this.gasPriceService.getGasPrice();if(o?t=o.price:t=(await a.getGasPrice()).toNumber(),!t)throw new Error("Failed to fetch gas price.");return Xe.from(t)}calcPriceImpact(a,t,o){const n=C(a).div(t).div(o).minus(1)||1;return Math.max(0,n.toNumber())}getSwapAttributes(a,t,o,l){const n=Xe.from(oa(60)),r=a===fe.GivenIn?et.SwapExactIn:et.SwapExactOut;return this.sdk.swaps.buildSwap({userAddress:l,swapInfo:t,kind:r,deadline:n,maxSlippage:o})}formatAddressForSor(a){return Ae(a,na)?la.ZeroAddress:a}}const Es=Me();class Ps{constructor(a,t,o){he(this,"lastExitRes");this.pool=a,this.sdk=t,this.gasPriceService=o}async exit(a){if(await this.queryExit(a),!this.lastExitRes)throw new Error("Could not query generalised exit");const t=new We(a.signer),{to:o,encodedCall:l}=this.lastExitRes;return t.raw.sendTransaction({to:o,data:l})}async queryExit({bptIn:a,signer:t,slippageBsp:o,relayerSignature:l,approvalActions:n,bptInValid:r}){var I;const p=ye(a||"0",((I=this.pool.value.onchain)==null?void 0:I.decimals)??18);if(p.lte(0))throw new Error("BPT in amount is 0.");const c=await t.getAddress(),x=o.toString(),u=r&&!n.length?tt.Static:tt.VaultModel;if(console.log({simulationType:u}),this.lastExitRes=await Es.pools.generalisedExit(this.pool.value.id,p.toString(),c,x,t,u,l).catch(A=>{throw console.error(A),new Error("Failed to query exit.")}),!this.lastExitRes)throw new Error("Failed to query exit.");return{priceImpact:C(ue(this.lastExitRes.priceImpact,18)).toNumber(),amountsOut:this.formatAmountsOut(this.lastExitRes)}}formatAmountsOut(a){const t={},o=bt(this.pool.value);return a.expectedAmountsOut.forEach((l,n)=>{const r=o.find(p=>Ae(p.address,a.tokensOut[n]));if(r){const p=ia(r.address),c=ue(l,r.decimals??18).toString();t[p]=c}}),t}}class Os{constructor(a,t,o){he(this,"lastExitRes");this.pool=a,this.sdk=t,this.gasPriceService=o}async exit(a){if(await this.queryExit(a),!this.lastExitRes)throw new Error("Failed to construct exit.");const t=new We(a.signer),{to:o,data:l}=this.lastExitRes;return t.raw.sendTransaction({to:o,data:l})}async queryExit(a){const{signer:t,tokenInfo:o,bptIn:l,slippageBsp:n,amountsOut:r}=a,p=!1,c=await t.getAddress(),x=n.toString(),u=await Me().pools.find(this.pool.value.id),_=ae(o,r[0].address);if(!u)throw new Error("Failed to find pool: "+this.pool.value.id);if(!_)throw new Error("Could not find exit token in pool tokens list.");const I=_.address,A=yt(this.pool.value.tokensList,I),O=ye(l,18).toString(),h=r.length===1?I.toLowerCase():void 0;if(this.lastExitRes=await u.buildExitExactBPTIn(c,O,x,p,h),!this.lastExitRes)throw new Error("Failed to construct exit.");const T=this.lastExitRes.expectedAmountsOut,M=await u.calcPriceImpact(T,O,!1),$=Number(ue(M,18)),y=this.normalizeAmountOut(T,A,_);return{amountsOut:{[I]:y},priceImpact:$}}normalizeAmountOut(a,t,o){const l=a[t];return ue(l,o.decimals).toString()}}class $s{constructor(a,t,o){he(this,"lastExitRes");this.pool=a,this.sdk=t,this.gasPriceService=o}async exit(a){if(await this.queryExit(a),!this.lastExitRes)throw new Error("Failed to construct exit.");const t=new We(a.signer),{to:o,data:l}=this.lastExitRes;return t.raw.sendTransaction({to:o,data:l})}async queryExit(a){const{signer:t,tokenInfo:o,slippageBsp:l,amountsOut:n}=a,r=await t.getAddress(),p=l.toString(),c=await Me().pools.find(this.pool.value.id),x=ae(o,n[0].address);if(!c)throw new Error("Failed to find pool: "+this.pool.value.id);if(!x)throw new Error("Could not find exit token in pool tokens list.");const u=x.address,_=yt(this.pool.value.tokensList,u),I=n[0].value,A=ye(I,x.decimals).toString(),O=this.getFullAmounts(this.pool.value.tokensList,_,A);if(this.lastExitRes=await c.buildExitExactTokensOut(r,this.pool.value.tokensList,O,p),!this.lastExitRes)throw new Error("Failed to construct exit.");const h=await c.calcPriceImpact(O,this.lastExitRes.expectedBPTIn,!1),T=Number(ue(h,18));return{amountsOut:{[u]:I},priceImpact:T}}getFullAmounts(a,t,o){const l=a.map(()=>"0");return l[t]=o||"0",l}}var re=(s=>(s[s.Swap=0]="Swap",s[s.Generalised=1]="Generalised",s[s.ExactOut=2]="ExactOut",s[s.ExactIn=3]="ExactIn",s))(re||{});class Bs{constructor(a,t=Me(),o=ra){he(this,"exitHandler");this.pool=a,this.sdk=t,this.gasPriceServ=o,this.exitHandler=this.setExitHandler(1)}setExitHandler(a){const{pool:t,sdk:o,gasPriceServ:l}=this,n=[t,o,l];switch(a){case 0:return this.exitHandler=new Ss(...n);case 1:return this.exitHandler=new Ps(...n);case 3:return this.exitHandler=new Os(...n);case 2:return this.exitHandler=new $s(...n);default:throw new Error(`Pool type not handled: ${t.value.poolType}`)}}async exit(a){return this.exitHandler.exit(a)}async queryExit(a){return this.exitHandler.queryExit(a)}}const Ms=s=>{const a=q(!1),t=q(!1),o=q(0),l=q(!1),n=q("0"),r=q(!0),p=q(""),c=Oe({address:"",value:"",max:"",valid:!0}),x=q([]),u=new Bs(s),{toFiat:_}=le(),{injectTokens:I,getTokens:A,prices:O,balanceFor:h}=oe(),{txState:T,txInProgress:M}=Zt(),{transactionDeadline:$}=ha(),{slippageBsp:y}=wt(),{getSigner:E}=ne(),m=Ma(it.BATCH_V4),{relayerSignature:f,relayerApprovalAction:v}=Ra(it.BATCH_V4),{isWeightedPool:b}=de(s),R=Ze(Ht,1e3),V=Ze(jt,1e3,{leading:!0}),D=d(()=>a.value&&!M.value),U=at(st.Pools.Exits.QueryExit(n,X,t,c),R,Oe({enabled:D,refetchOnWindowFocus:!1})),F=at(st.Pools.Exits.SingleAssetMax(X,t,Y(c,"address")),V,Oe({enabled:D,refetchOnWindowFocus:!1})),xe=d(()=>!X.value||U.isFetching.value),Q=d(()=>{var k;return(k=U.error.value)==null?void 0:k.message}),W=d(()=>F.isFetching.value||!D.value||!X.value),ge=d(()=>{var k;return(k=F.error.value)==null?void 0:k.message}),ke=d(()=>te(s.value)),me=d(()=>ke.value&&!t.value&&!(m.isUnlocked.value||f.value)),H=d(()=>me.value?[v.value]:[]),Z=d(()=>t.value&&te(s.value)&&Ve(s.value.poolType)),K=d(()=>Z.value?re.Swap:b.value&&t.value?Re.value?re.ExactIn:re.ExactOut:re.Generalised),N=d(()=>{let k=[];return k=te(s.value)?ua(s.value.tokens):s.value.tokensList,da(s.value.address,k)}),ve=d(()=>A([...N.value,s.value.address,...ie.value.map(k=>k.address)])),Ft=d(()=>{let k=[];return k=te(s.value)?bt(s.value):s.value.tokens,k.filter(z=>!Ae(z.address,s.value.address))}),ie=d(()=>t.value?[c]:x.value),Re=d(()=>C(c.value).eq(c.max)),De=d(()=>C(o.value).isGreaterThanOrEqualTo(La)),Wt=d(()=>C(o.value).isGreaterThanOrEqualTo(Ca)),Nt=d(()=>De.value?l.value:!0),Ue=d(()=>t.value&&!Re.value?fe.GivenOut:fe.GivenIn),He=d(()=>t.value&&Re.value?Pe.value:n.value),Pe=d(()=>h(s.value.address)),je=d(()=>C(Pe.value).gt(0)),ze=d(()=>ie.value.some(k=>C(k.value).gt(0))),qt=d(()=>C(n.value).gt(0)),Gt=d(()=>t.value?ie.value.every(k=>k.valid):r.value),Qe=d(()=>Object.fromEntries(ie.value.map(({address:k,value:z})=>[k,_(z,k)]))),Dt=d(()=>pa(Object.values(Qe.value)).toString()),Ut=d(()=>ma(s.value,n.value));async function Ht(){if(!X.value||t.value&&!ze.value||!t.value&&!qt.value)return null;u.setExitHandler(K.value);try{const k=await u.queryExit({exitType:Ue.value,bptIn:He.value,amountsOut:ie.value,signer:E(),slippageBsp:y.value,tokenInfo:ve.value,prices:O.value,approvalActions:H.value,bptInValid:r.value,relayerSignature:f.value,transactionDeadline:$});return o.value=k.priceImpact,x.value=Object.keys(k.amountsOut).map(z=>({address:z,value:k.amountsOut[z],max:"",valid:!0})),k}catch(k){throw ot(k),new Error("Failed to construct exit.",{cause:k})}}async function jt(){if(!X.value||!t.value||!je.value)return null;const k=Z.value?re.Swap:re.ExactIn;u.setExitHandler(k),c.max="";try{const z=await u.queryExit({exitType:fe.GivenIn,bptIn:Pe.value,amountsOut:[c],signer:E(),slippageBsp:y.value,tokenInfo:ve.value,prices:O.value,approvalActions:H.value,bptInValid:r.value,relayerSignature:f.value,transactionDeadline:$}),Ye=ae(z.amountsOut,c.address)||"0";return c.max=Ye,Ye}catch(z){throw ot(z),new Error("Failed to calculate max.",{cause:z})}}async function zt(){try{return p.value="",u.setExitHandler(K.value),u.exit({exitType:Ue.value,bptIn:He.value,amountsOut:ie.value,signer:E(),slippageBsp:y.value,tokenInfo:ve.value,prices:O.value,approvalActions:H.value,bptInValid:r.value,relayerSignature:f.value,transactionDeadline:$})}catch(k){throw p.value=k.message,new Error("Failed to submit exit transaction.",{cause:k})}}function Ke(){const k=fa(s.value.tokens);x.value=k.map(z=>({address:z,value:"0",max:"",valid:!0}))}function Qt(k){t.value=k}return ee(t,k=>{n.value="",u.setExitHandler(K.value),k||Ke()}),_e(()=>{I([...N.value,s.value.address]),u.setExitHandler(K.value),t.value||Ke()}),It(()=>{a.value=!0}),{txState:T,singleAmountOut:c,highPriceImpactAccepted:l,bptIn:n,bptInValid:r,pool:s,isSingleAssetExit:Le(t),propAmountsOut:Le(x),priceImpact:Le(o),exitTokenAddresses:N,exitTokens:Ft,isLoadingQuery:xe,isLoadingMax:W,highPriceImpact:De,rektPriceImpact:Wt,hasAcceptedHighPriceImpact:Nt,txInProgress:M,queryError:Q,maxError:ge,amountsOut:ie,validAmounts:Gt,hasAmountsOut:ze,bptBalance:Pe,hasBpt:je,fiatTotalOut:Dt,fiatValueIn:Ut,fiatAmountsOut:Qe,exitTokenInfo:ve,queryExitQuery:U,approvalActions:H,transactionDeadline:$,setIsSingleAssetExit:Qt,exit:zt}},Rt=Symbol(va.Providers.ExitPool);function Rs(s){const a=te(s.value)?Ms(s):{};return _a(Rt,a),a}function we(){return ca(Rt)}const Ls={class:"flex justify-between items-center p-4"},Cs={class:"flex items-center"},Vs={class:"flex flex-col leading-none"},Fs={class:"text-lg font-medium"},Ws={key:0},Ns={class:"flex w-52 text-sm text-gray-600 dark:text-gray-400"},qs={class:"truncate"},Gs={class:"flex flex-col flex-grow items-end pl-2 text-right font-numeric"},Ds={class:"text-xl font-medium break-words"},Us={class:"text-sm text-gray-600 dark:text-gray-400"},Hs=G({__name:"ProportionalWithdrawalTokenInfoV2",props:{token:null,weight:null,address:null,fiatAmountOut:null,loading:{type:Boolean},pool:null,value:null},setup(s){const a=s,{fNum:t}=le();return(o,l)=>{var p,c;const n=qe,r=Ie;return i(),B("div",Ls,[w("div",Cs,[S(n,{address:s.address,class:"mr-2"},null,8,["address"]),w("div",Vs,[w("div",Fs,[se(P((p=a.token)==null?void 0:p.symbol)+" ",1),!e(wa)(s.pool.poolType)&&!e(te)(s.pool)?(i(),B("span",Ws,P(e(t)(s.weight,{style:"percent",maximumFractionDigits:0})),1)):j("",!0)]),w("div",Ns,[w("span",qs,P((c=a.token)==null?void 0:c.name),1)])])]),w("div",Gs,[s.loading?(i(),g(r,{key:0,class:"w-20 h-12"})):(i(),B(be,{key:1},[w("span",Ds,P(e(t)(s.value,e(J).token)),1),w("span",Us,P(e(t)(s.fiatAmountOut||"0",e(J).fiat)),1)],64))])])}}}),js={class:"label"},zs={class:"label"},Qs={class:"token-amounts"},Ks=G({__name:"ProportionalWithdrawalInputV2",props:{pool:null},setup(s){const a=s,t=Oe({val:1e3,max:1e3,min:0,interval:1}),{isWalletReady:o}=ne(),{bptIn:l,bptInValid:n,bptBalance:r,hasBpt:p,isLoadingQuery:c,exitTokens:x,propAmountsOut:u,exitTokenInfo:_,fiatAmountsOut:I,fiatTotalOut:A}=we(),{t:O}=pe(),h=d(()=>({modelValue:t.val,max:t.max,interval:t.interval,min:t.min,tooltip:"none",disabled:!p.value}));function T(y){var m;const E=y/t.max*1e4;l.value=C(r.value).times(E).div(1e4).toFixed(((m=a.pool.onchain)==null?void 0:m.decimals)||18)}function M(y){const m=C(y).div(r.value).times(100).integerValue(ut.ROUND_CEIL).times(10).toNumber();m>t.max?t.val=t.max:m<t.min?t.val=t.min:t.val=m}function $(y){return x.value.find(E=>Ae(E.address,y))}return ee(o,()=>{l.value=r.value}),_e(()=>{l.value=r.value}),(y,E)=>(i(),B("div",null,[w("div",js,P(e(O)("youProvide")),1),S(Ne,{amount:e(l),"onUpdate:amount":[E[0]||(E[0]=m=>ce(l)?l.value=m:null),M],isValid:e(n),"onUpdate:isValid":E[1]||(E[1]=m=>ce(n)?n.value=m:null),address:s.pool.address,name:s.pool.address,class:"mb-4",fixedToken:"",slider:"",sliderProps:e(h),tokenValue:e(A),"onUpdate:slider":T},null,8,["amount","isValid","address","name","sliderProps","tokenValue"]),w("div",zs,P(e(O)("youReceive")),1),w("div",Qs,[(i(!0),B(be,null,dt(e(u),({address:m,value:f})=>{var v;return i(),g(Hs,{key:m,token:e(ae)(e(_),m),weight:((v=$(m))==null?void 0:v.weight)||"0",address:m,fiatAmountOut:e(ae)(e(I),m),loading:e(c),pool:s.pool,value:f,class:"last:mb-0"},null,8,["token","weight","address","fiatAmountOut","loading","pool","value"])}),128))])]))}});const Ys=Se(Ks,[["__scopeId","data-v-c5c92998"]]),Zs={class:"data-table"},Js={class:"p-2"},Xs={class:"data-table-number-col"},eo={class:"flex items-center"},to={key:1},ao=G({__name:"WithdrawTotalsV2",setup(s){const{fNum:a}=le(),{priceImpact:t,highPriceImpact:o,isLoadingQuery:l}=we(),n=d(()=>({"bg-red-500 dark:bg-red-500 text-white divide-red-400 border-none":o.value}));return(r,p)=>{const c=Ie,x=Te,u=Fe;return i(),B("div",Zs,[w("div",{class:gt(["data-table-row",e(n),"dark:bg-gray-800"])},[w("div",Js,P(r.$t("priceImpact")),1),w("div",Xs,[w("div",eo,[e(l)?(i(),g(c,{key:0,class:"w-10 h-6"})):(i(),B("span",to,P(e(a)(e(t),e(J).percent)),1)),S(u,{text:r.$t("withdraw.tooltips.priceImpact")},{activator:L(()=>[e(o)?(i(),g(x,{key:0,name:"alert-triangle",size:"xs",class:"-mb-px ml-1"})):(i(),g(x,{key:1,name:"info",size:"xs",class:"-mb-px ml-1 text-gray-400"}))]),_:1},8,["text"])])])],2)])}}});const so=Se(ao,[["__scopeId","data-v-b942df29"]]),oo={key:1},no=G({__name:"WithdrawActionsV2",props:{pool:null},emits:["success","error"],setup(s,{emit:a}){const t=s,{t:o}=pe(),{blockNumber:l}=ne(),{addTransaction:n}=pt(),{txListener:r,getTxConfirmedAt:p}=mt(),{poolWeightsLabel:c}=de(Y(t,"pool")),{networkSlug:x}=_t(),{fNum:u}=le(),{txState:_,txInProgress:I,exit:A,isLoadingQuery:O,queryExitQuery:h,fiatTotalOut:T,approvalActions:M}=we(),$={label:o("withdraw.label"),loadingLabel:o("withdraw.preview.loadingLabel.withdraw"),confirmingLabel:o("confirming"),action:m,stepTooltip:o("withdraw.preview.tooltips.withdrawStep")},y=q([...M.value,$]);async function E(v){n({id:v.hash,type:"tx",action:"withdraw",summary:o("transactionSummary.withdrawFromPool",[u(T.value,J.fiat),c(t.pool)]),details:{total:u(T.value,J.fiat),pool:t.pool}}),_.confirmed=await r(v,{onTxConfirmed:async b=>{a("success",b),_.confirming=!1,_.receipt=b;const R=await p(b);_.confirmedAt=ht(R)},onTxFailed:()=>{_.confirming=!1}})}async function m(){try{const v=await A();return _.confirming=!0,E(v),v}catch(v){throw _.confirming=!1,new Error("Failed to submit withdrawal transaction.",{cause:v})}finally{_.init=!1}}function f(){ft.push({name:"pool",params:{networkSlug:x,id:t.pool.id}})}return ee(l,()=>{!O.value&&!I.value&&h.refetch()}),(v,b)=>{const R=Ot,V=Be;return i(),g(vt,null,{default:L(()=>[!e(_).confirmed||!e(_).receipt?(i(),g(R,{key:0,actions:y.value},null,8,["actions"])):(i(),B("div",oo,[S($t,{txReceipt:e(_).receipt},null,8,["txReceipt"]),S(V,{color:"gray",outline:"",block:"",class:"mt-2",onClick:f},{default:L(()=>[se(P(v.$t("returnToPool")),1)]),_:1})]))]),_:1})}}}),lo={class:"flex items-center"},io=G({__name:"WithdrawPreviewModalV2",props:{pool:null},emits:["close"],setup(s,{emit:a}){const t=s,o=q(!1),{t:l}=pe(),{getToken:n}=oe(),{bptIn:r,fiatValueIn:p,fiatTotalOut:c,amountsOut:x,priceImpact:u,fiatAmountsOut:_,isSingleAssetExit:I}=we(),A=d(()=>o.value?l("withdraw.preview.titles.confirmed"):l("withdraw.preview.titles.default")),O=d(()=>!I.value),h=d(()=>({[t.pool.address]:r.value})),T=d(()=>({[t.pool.address]:n(t.pool.address)})),M=d(()=>({[t.pool.address]:p.value})),$=d(()=>{const m={};return x.value.forEach(f=>{m[f.address]=n(f.address)}),m}),y=d(()=>{const m={};return x.value.forEach(f=>{m[f.address]=f.value}),m});function E(){a("close")}return(m,f)=>{const v=Te,b=Pt,R=xt;return i(),g(R,{show:"",fireworks:o.value,onClose:E},{header:L(()=>[w("div",lo,[o.value?(i(),g(b,{key:0,size:"8",color:"green",class:"mr-2 text-white"},{default:L(()=>[S(v,{name:"check"})]),_:1})):j("",!0),w("h4",null,P(e(A)),1)])]),default:L(()=>[e(O)?(i(),g(Ce,{key:0,title:m.$t("investment.preview.titles.tokenIn"),amountMap:e(h),tokenMap:e(T),fiatAmountMap:e(M),fiatTotal:e(p)},null,8,["title","amountMap","tokenMap","fiatAmountMap","fiatTotal"])):j("",!0),S(Ce,{title:m.$t("investment.preview.titles.tokenOut"),class:"mt-4",amountMap:e(y),tokenMap:e($),fiatAmountMap:e(_),fiatTotal:e(c)},null,8,["title","amountMap","tokenMap","fiatAmountMap","fiatTotal"]),S(Mt,{pool:s.pool,fiatTotal:e(c),priceImpact:e(u)},null,8,["pool","fiatTotal","priceImpact"]),S(no,{pool:s.pool,class:"mt-4",onError:f[0]||(f[0]=V=>m.$emit("close")),onSuccess:f[1]||(f[1]=V=>o.value=!0)},null,8,["pool"])]),_:1},8,["fireworks"])}}}),ro={key:2,class:"p-2 pb-2 mt-4 rounded-lg border dark:border-gray-700"},co={class:"mt-4"},uo=G({__name:"WithdrawFormV2",setup(s){const a=q(!1),{t}=pe(),{veBalTokenInfo:o}=xa(),{wrappedNativeAsset:l}=oe(),{isWalletReady:n,startConnectWithInjectedProvider:r,isMismatchedNetwork:p}=ne(),{pool:c,isSingleAssetExit:x,singleAmountOut:u,isLoadingMax:_,queryError:I,maxError:A,isLoadingQuery:O,highPriceImpact:h,highPriceImpactAccepted:T,hasAcceptedHighPriceImpact:M,hasAmountsOut:$,validAmounts:y}=we(),E=d(()=>[St(u.max,t("exceedsPoolBalance"))]),m=d(()=>y.value&&M.value),f=d(()=>Ve(c.value.poolType)?[]:c.value.tokensList);return _e(()=>{u.address=Ve(c.value.poolType)?l.value.address:c.value.tokensList[0]}),(v,b)=>{var U;const R=Tt,V=At,D=Be;return i(),B("div",null,[e(x)?(i(),B(be,{key:1},[e(te)(e(c))?(i(),g(Ne,{key:0,isValid:e(u).valid,"onUpdate:isValid":b[0]||(b[0]=F=>e(u).valid=F),address:e(u).address,"onUpdate:address":b[1]||(b[1]=F=>e(u).address=F),amount:e(u).value,"onUpdate:amount":b[2]||(b[2]=F=>e(u).value=F),name:e(u).address,rules:e(E),customBalance:e(u).max||"0",balanceLabel:v.$t("max"),balanceLoading:e(_),disableNativeAssetBuffer:"",excludedTokens:[(U=e(o))==null?void 0:U.address,e(c).address],tokenSelectProps:{ignoreBalances:!0,subsetTokens:e(f)},ignoreWalletBalance:""},null,8,["isValid","address","amount","name","rules","customBalance","balanceLabel","balanceLoading","excludedTokens","tokenSelectProps"])):j("",!0)],64)):(i(),g(Ys,{key:0,pool:e(c)},null,8,["pool"])),S(so,{class:"mt-4"}),e(h)?(i(),B("div",ro,[S(R,{modelValue:e(T),"onUpdate:modelValue":b[3]||(b[3]=F=>ce(T)?T.value=F:null),rules:[e(Et)(v.$t("priceImpactCheckbox"))],name:"highPriceImpactAccepted",size:"sm",label:v.$t("priceImpactAccept",[v.$t("withdrawing")])},null,8,["modelValue","rules","label"])])):j("",!0),e(I)||e(A)?(i(),g(V,{key:3,type:"error",title:v.$t("thereWasAnError"),description:e(I)||e(A),class:"mt-4",block:""},null,8,["title","description"])):j("",!0),w("div",co,[e(n)?(i(),g(D,{key:1,label:v.$t("preview"),color:"gradient",disabled:!e($)||!e(m)||e(p)||e(O)||e(_),block:"",onClick:b[4]||(b[4]=F=>a.value=!0)},null,8,["label","disabled"])):(i(),g(D,{key:0,label:v.$t("connectWallet"),color:"gradient",block:"",onClick:e(r)},null,8,["label","onClick"]))]),(i(),g(kt,{to:"#modal"},[e(a)?(i(),g(io,{key:0,pool:e(c),onClose:b[5]||(b[5]=F=>a.value=!1)},null,8,["pool"])):j("",!0)]))])}}});var Lt=(s=>(s[s.PoolTokens=0]="PoolTokens",s[s.SingleToken=1]="SingleToken",s))(Lt||{});const Ge=[{value:0,label:nt.global.t("withdraw.tabs.poolTokens")},{value:1,label:nt.global.t("withdraw.tabs.singleToken")}],Ct=q(Ge[0].value);function po(){Ct.value=Ge[0].value}function Vt(){return{activeTab:Ct,resetTabs:po}}const mo=G({__name:"WithdrawPageTabs",setup(s){const{activeTab:a}=Vt(),{setIsSingleAssetExit:t}=we();return ee(a,o=>{t(o===Lt.SingleToken)}),(o,l)=>{const n=Wa;return i(),g(n,{modelValue:e(a),"onUpdate:modelValue":l[0]||(l[0]=r=>ce(a)?a.value=r:null),tabs:e(Ge),class:"p-0 m-0 -mb-px whitespace-nowrap",noPad:""},null,8,["modelValue","tabs"])}}}),vo={class:"w-full"},ho={class:"text-xs leading-none text-secondary"},fo={class:"flex justify-between items-center"},_o=G({__name:"WithdrawPage",props:{pool:null},setup(s){const a=s,t=d(()=>a.pool),{network:o}=ga,{isDeepPool:l}=de(t),{resetTabs:n}=Vt();return Rs(t),It(()=>n()),(r,p)=>{const c=ka;return i(),g(c,{shadow:"xl",exposeOverflow:"",noBorder:""},{header:L(()=>[w("div",vo,[w("div",ho,P(e(o).chainName),1),w("div",fo,[w("h4",null,P(r.$t("withdrawFromPool")),1),S(Fa,{context:e(Va).invest},null,8,["context"])]),e(l)?(i(),g(mo,{key:0})):j("",!0)])]),default:L(()=>[e(l)?(i(),g(uo,{key:0})):(i(),g(Ts,{key:1,pool:e(t)},null,8,["pool"]))]),_:1})}}}),wo={class:"px-4 sm:px-0 mx-auto max-w-md"},Ho=G({__name:"withdraw",setup(s){const{pool:a,poolDecorationQuery:t,loadingPool:o,transfersAllowed:l}=rt(),{isDeepPool:n}=de(a),{balanceQueryLoading:r}=oe();Jt(),ba(t.refetch,ya*20);const p=d(()=>n.value&&!X.value),c=d(()=>o.value||!l.value||p.value||r.value);return(x,u)=>{const _=Ie;return i(),B("div",wo,[e(c)||!e(a)?(i(),g(_,{key:0,class:"h-96"})):(i(),g(_o,{key:1,pool:e(a)},null,8,["pool"]))])}}});export{Ho as default};
//# sourceMappingURL=withdraw-6f16b44a.js.map
