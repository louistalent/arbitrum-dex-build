import{eM as O,u as h,c as u,M as L,a as c,cH as R,r as E,e as C,Q as x,f as W,j as _,o as b,eN as H,eO as V,Z as I,eP as P,y as i,af as F,ag as M,aa as N}from"./index-4a1c513c.js";const Q={refetchOnMount:!1,refetchOnWindowFocus:!1,refetchOnReconnect:!1,staleTime:O};function j(e,d={}){const{account:t,isWalletReady:s}=h(),{networkId:a}=_(),p=u(()=>s.value),v=u(()=>new L(c.network.addresses.vault,R.Vault__factory.abi,E.jsonProvider)),o=C(x.Account.RelayerApprovals(a,t,e)),f=async()=>e.value?await v.value.hasApprovedRelayer(t.value,e.value):!0,y=C({enabled:p,...Q,...d});return W(o,f,y)}var q=(e=>(e.COWSWAP="Cowswap",e.LIDO="Lido",e.BATCH="Batch",e.BATCH_V4="BATCH_V4",e))(q||{});const S={Cowswap:P,Lido:c.network.addresses.lidoRelayer,Batch:c.network.addresses.batchRelayer,BATCH_V4:c.network.addresses.batchRelayerV4},w=i("");function K(e){const{account:d,getSigner:t}=h(),{networkId:s}=_(),{t:a}=b(),{isGnosisSafeApp:p}=H(),{action:v}=Y(e),o={label:a("approveBatchRelayer"),loadingLabel:a("checkWallet"),confirmingLabel:a("approvingBatchRelayer"),stepTooltip:a("approveBatchRelayerTooltip"),action:y,isSignAction:!0},f=u(()=>p.value?v.value:o);async function y(){const r=S[e],n=t(),A=await n.getAddress(),g=await V.signRelayerApproval(r,A,n,R.Vault__factory.connect(c.network.addresses.vault,n));w.value=g}return I([d,s],()=>{w.value=""}),{relayerSignature:w,relayerApprovalAction:f}}const D=c.network.addresses.vault;function Y(e,d=i(!0)){const t=i(!1),s=i(!1),a=i(!1),{getSigner:p,account:v}=h(),o=i(S[e]),{txListener:f}=F(),{addTransaction:y}=M(),{t:r}=b(),n=j(o),A=u(()=>a.value||(d.value?!!n.data.value:!0)),g=u(()=>n.isLoading.value||n.isError.value),k=u(()=>({label:r("approveBatchRelayer"),loadingLabel:r("checkWallet"),confirmingLabel:r("approvingBatchRelayer"),stepTooltip:r("approveBatchRelayerTooltip"),action:T}));async function T(){try{t.value=!0;const B=await new N(p()).contract.sendTransaction({contractAddress:c.network.addresses.vault,abi:R.Vault__factory.abi,action:"setRelayerApproval",params:[v.value,o.value,!0]});return t.value=!1,s.value=!0,m(B),B}catch(l){return console.log(l),t.value=!1,s.value=!1,Promise.reject(l)}}async function m(l){y({id:l.hash,type:"tx",action:"approve",summary:r("transactionSummary.approveRelayer",[e]),details:{contractAddress:D,spender:o.value}}),a.value=await f(l,{onTxConfirmed:()=>{s.value=!1,n.refetch()},onTxFailed:()=>{s.value=!1}})}return{action:k,init:t,approve:T,approving:s,approved:a,isUnlocked:A,loading:g}}export{q as R,K as a,j as b,Y as u};
//# sourceMappingURL=useRelayerApprovalTx-95afc1c6.js.map
