import{d as i,c as u,s as c,G as f,D as s,aT as o,ah as a,v as r,ak as p}from"./index-4a1c513c.js";const _={class:"layout-container"},m=i({__name:"Col3Layout",props:{mobileGuttersFirst:{type:Boolean,default:!1},mobileGuttersLast:{type:Boolean,default:!1},mobileHideGutters:{type:Boolean,default:!1},offsetGutters:{type:Boolean,default:!1}},setup(d){const e=d,l=u(()=>({"order-1 lg:order-2":e.mobileGuttersFirst,"order-3 lg:order-2":e.mobileGuttersLast,"hidden lg:block":e.mobileHideGutters,"mt-6":e.offsetGutters})),n=u(()=>({"order-2":e.mobileGuttersFirst,"order-1 lg:order-2":e.mobileGuttersLast}));return(t,g)=>(c(),f("div",_,[s("div",{class:a(["gutter-col",r(l)])},[o(t.$slots,"gutterLeft",{},void 0,!0)],2),s("div",{class:a(["center-col",r(n)])},[o(t.$slots,"default",{},void 0,!0)],2),s("div",{class:a(["gutter-col",r(l)])},[o(t.$slots,"gutterRight",{},void 0,!0)],2)]))}});const G=p(m,[["__scopeId","data-v-3173a72a"]]);export{G as C};
//# sourceMappingURL=Col3Layout-4539059c.js.map
