import{d as _,b as p,as as k,y as h,c as o,Z as x,s as n,t as m,B as z,v as s,G as g,gj as B,aY as w,T as R,e4 as I,bE as U,ak as $}from"./index-4a1c513c.js";const E=["src"],C=_({__name:"BalAsset",props:{address:{default:""},iconURI:{default:""},size:{default:24},button:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},setup(t){const a=t,{getToken:y}=p(),{resolve:u}=U(),{address:i}=k(a),r=h(!1),l=o(()=>y(i.value)),d=o(()=>{var e;return a.iconURI?u(a.iconURI):(e=l.value)!=null&&e.logoURI?u(l.value.logoURI):""}),b=o(()=>a.button?"button":"div"),v=o(()=>{var e;return{"aria-label":(e=l.value)==null?void 0:e.symbol,disabled:a.disabled}});return x(d,e=>{e!==""&&(r.value=!1)}),(e,c)=>{var f;return n(),m(I(s(b)),R({title:(f=s(l))==null?void 0:f.symbol,class:"inline-block leading-none rounded-full shadow-sm bal-asset",style:{width:`${t.size}px`,height:`${t.size}px`}},s(v),{style:{"margin-right":"7px"}}),{default:z(()=>[s(d)&&!s(r)?(n(),g("img",{key:0,src:s(d),alt:"icon",class:"bg-white rounded-full",onError:c[0]||(c[0]=A=>r.value=!0)},null,40,E)):s(i)?(n(),m(B,{key:1,address:s(i),size:t.size},null,8,["address","size"])):(n(),g("div",{key:2,class:"overflow-visible bg-gray-300 dark:bg-gray-700 rounded-full",style:w({width:`${t.size}px`,height:`${t.size}px`})},null,4))]),_:1},16,["title","style"])}}});const S=$(C,[["__scopeId","data-v-817af62a"]]);export{S as _};
//# sourceMappingURL=BalAsset-fe687731.js.map
