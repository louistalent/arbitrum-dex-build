import{d as z,aX as V,c as r,s as X,G as H,D as g,v as p,e as q,Q as J,n as ee,f as ae,fh as Q,a as F,c5 as te,c0 as oe,y as se,bf as re,b as ne,u as ue,fa as le,P as ie,by as ce,z as ge,c4 as de,N as m,ax as fe,q as ve}from"./index-4a1c513c.js";import{i as C}from"./useQueryHelpers-8cb4e6d7.js";const he={width:"24",height:"25",viewBox:"0 0 24 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"},pe=["id"],Ce=["stop-color"],ye=["stop-color"],we=["fill"],Ge=z({__name:"StarsIcon",props:{gradFrom:{default:"yellow"},gradTo:{default:"pink"}},setup(t){const o=t,{theme:n}=V(),l=r(()=>`stars-gradient-${o.gradFrom}-${o.gradTo}`);return(i,d)=>(X(),H("svg",he,[g("defs",null,[g("linearGradient",{id:p(l),x1:"24",y1:"-11.5",x2:"2.7273",y2:"16.3182",gradientUnits:"userSpaceOnUse"},[g("stop",{"stop-color":p(n).colors[t.gradTo][500]},null,8,Ce),g("stop",{offset:"1","stop-color":p(n).colors[t.gradFrom][500]},null,8,ye)],8,pe)]),g("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M21.7809 7.27232C20.6203 7.70216 19.7081 8.67468 19.305 9.91198L18.5527 12.2203C18.5419 12.2555 18.5111 12.2792 18.4764 12.2792C18.4417 12.2792 18.4109 12.2555 18.4001 12.2203L17.6479 9.91198C17.2447 8.67461 16.3323 7.70207 15.1716 7.27232L13.0065 6.47049C12.9742 6.45851 12.9525 6.42606 12.9525 6.38961C12.9525 6.35316 12.9742 6.32071 13.0065 6.30873L15.1716 5.5069C16.3323 5.07715 17.2447 4.10461 17.6479 2.86724L18.4001 0.558892C18.4109 0.523752 18.4417 0.5 18.4764 0.5C18.5111 0.5 18.5419 0.523752 18.5527 0.558892L19.305 2.86724C19.7081 4.10455 20.6203 5.07707 21.7809 5.5069L23.9461 6.30873C23.9783 6.32071 24 6.35316 24 6.38961C24 6.42606 23.9783 6.45851 23.9461 6.47049L21.7809 7.27232ZM12.2613 14.4746C10.6494 15.0717 9.38251 16.4224 8.82264 18.1409L7.77749 21.3469C7.76214 21.3952 7.71964 21.4276 7.67183 21.4276C7.62402 21.4276 7.58152 21.3952 7.56617 21.3469L6.52102 18.1409C5.96115 16.4224 4.69427 15.0717 3.08238 14.4746L0.0748959 13.361C0.0300526 13.3443 0 13.2993 0 13.2486C0 13.198 0.0300526 13.153 0.0748959 13.1363L3.08238 12.0227C4.69428 11.4256 5.96116 10.0749 6.52102 8.35643L7.56617 5.1504C7.58152 5.10213 7.62402 5.06965 7.67183 5.06965C7.71964 5.06965 7.76214 5.10213 7.77749 5.1504L8.82264 8.35643C9.38251 10.0749 10.6494 11.4256 12.2613 12.0227L15.2688 13.1363C15.3136 13.153 15.3437 13.198 15.3437 13.2486C15.3437 13.2993 15.3136 13.3443 15.2688 13.361L12.2613 14.4746ZM18.4025 22.6042C18.725 21.6144 19.4546 20.8364 20.383 20.4924L22.1159 19.851C22.1417 19.8414 22.1591 19.8154 22.1591 19.7862C22.1591 19.7571 22.1417 19.7311 22.1159 19.7215L20.383 19.0801C19.4546 18.7361 18.725 17.9581 18.4025 16.9683L17.8005 15.1217C17.7925 15.0925 17.7674 15.0725 17.7389 15.0725C17.7104 15.0725 17.6853 15.0925 17.6773 15.1217L17.0768 16.9683C16.754 17.9585 16.0237 18.7365 15.0948 19.0801L13.3634 19.7215C13.3376 19.7311 13.3202 19.7571 13.3202 19.7862C13.3202 19.8154 13.3376 19.8414 13.3634 19.851L15.0948 20.4924C16.0237 20.836 16.754 21.614 17.0768 22.6042L17.6773 24.4509C17.6853 24.48 17.7104 24.5 17.7389 24.5C17.7674 24.5 17.7925 24.48 17.8005 24.4509L18.4025 22.6042Z",fill:`url(#${p(l)})`},null,8,we)]))}});function Le(t,o={}){const n=q(J.Pool.Gauges(t)),l=r(()=>!!(t!=null&&t.value)&&!ee.value),i=r(()=>{var s,v;return{pool:{__args:{id:(s=t.value)==null?void 0:s.toLowerCase()},preferentialGauge:{id:!0},gauges:{id:!0,relativeWeightCap:!0}},liquidityGauges:{__args:{where:{poolAddress:(v=t.value)==null?void 0:v.toLowerCase()}},id:!0}}}),d=async()=>{try{return await Q({url:F.network.subgraphs.gauge,query:i.value})}catch(s){throw console.error(`Failed to fetch pool gauge for pool: ${t.value}`,{cause:s}),s}},f=q({enabled:l,refetchOnWindowFocus:!1,...o});return ae(n,d,f)}const me=t=>{const o=se(t),n=r(()=>o.value?re(o.value):void 0),{balanceFor:l}=ne(),{account:i,isWalletReady:d}=ue(),f=Le(n),{data:s,refetch:v}=f,{userGaugeSharesQuery:b,userBoostsQuery:S,stakedSharesQuery:k}=le(),{data:y,refetch:x}=b,{data:G,refetch:E}=S,{data:w,refetch:_,isRefetching:I}=k,W=r(()=>C(f)||d.value&&(C(k)||C(b)||C(S))),c=r(()=>{var e,a,u;return(u=(a=(e=s.value)==null?void 0:e.pool)==null?void 0:a.preferentialGauge)==null?void 0:u.id}),M=r(()=>{var e,a,u;return!!o.value&&((u=(a=(e=s.value)==null?void 0:e.liquidityGauges)==null?void 0:a[0])==null?void 0:u.id)!==void 0&&ie.Stakable.AllowList.includes(o.value)}),N=r(()=>{var e;return o.value&&((e=w==null?void 0:w.value)==null?void 0:e[o.value])||"0"}),O=r(()=>!G.value||!o.value?"1":G[o.value]),R=r(()=>{var e;return((e=s.value)==null?void 0:e.pool.gauges.map(a=>a.id))||[]}),T=r(()=>y.value?y.value.reduce((e,a)=>(e[a.gauge.id]=a.balance,e),{}):{}),A=r(()=>{if(!s.value||!y.value||!c.value)return!1;const e=c.value;return R.value.some(a=>!ce(a,e)&&ge(T.value[a]||"0").gt(0))});function $(e){o.value=e}async function D(){return Promise.all([v(),_(),x(),E()])}async function K(){if(!n.value)throw new Error("No pool to stake.");if(!c.value)throw new Error("No preferential gauge found for this pool.");console.log("poolAddress.value",n.value);const e=new m(c.value),a=fe(l(ve(n.value)));return await e.stake(a)}async function Z(){var P,B;if(!((B=(P=s.value)==null?void 0:P.pool)!=null&&B.gauges))throw new Error("Unable to unstake, no pool gauges");const a=(await Promise.all(s.value.pool.gauges.map(async h=>{const L=await new m(h.id).balance(i.value);return{...h,balance:L==null?void 0:L.toString()}}))).find(h=>h.balance!=="0");if(!a)throw new Error("Attempted to call unstake, user doesn't have any balance for any gauges.");const u=new m(a.id),j=await u.balance(i.value);return await u.unstake(j)}async function Y(e){try{return(await Q({url:F.network.subgraphs.gauge,query:{pool:{__args:{id:e.toLowerCase()},preferentialGauge:{id:!0}}}})).pool.preferentialGauge.id}catch(a){throw console.error(a),a}}return{isLoading:W,stakedShares:N,isStakablePool:M,boost:O,hasNonPrefGaugeBalance:A,isRefetchingStakedShares:I,refetchStakedShares:_,preferentialGaugeAddress:c,fetchPreferentialGaugeAddress:Y,setCurrentPool:$,refetchAllPoolStakingData:D,stake:K,unstake:Z}},U=Symbol(de.Providers.PoolStaking);function _e(t){te(U,me(t))}function Pe(){return oe(U)}export{Ge as _,_e as p,Pe as u};
//# sourceMappingURL=pool-staking.provider-fee39c11.js.map
