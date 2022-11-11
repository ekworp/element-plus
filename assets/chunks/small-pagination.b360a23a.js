import{h as U,k as s,r as u,o as c,c as S,a as o,b as t,f as g,g as P,F as $,q as w,s as T,w as C,d as k}from"../app.11bc8ada.js";const B=t("hr",{class:"my-4"},null,-1),E=U({__name:"auto-hide-pagination",setup(n){const r=s(!1);return(l,p)=>{const m=u("el-switch"),b=u("el-pagination");return c(),S("div",null,[o(m,{modelValue:r.value,"onUpdate:modelValue":p[0]||(p[0]=f=>r.value=f)},null,8,["modelValue"]),B,o(b,{"hide-on-single-page":r.value,total:5,layout:"prev, pager, next"},null,8,["hide-on-single-page"])])}}});var fe=Object.freeze(Object.defineProperty({__proto__:null,default:E},Symbol.toStringTag,{value:"Module"}));const N={};function F(n,r){const l=u("el-pagination");return c(),P(l,{background:"",layout:"prev, pager, next",total:1e3})}var W=g(N,[["render",F]]),he=Object.freeze(Object.defineProperty({__proto__:null,default:W},Symbol.toStringTag,{value:"Module"}));const q={},I=n=>(w("data-v-7f3b1e9e"),n=n(),T(),n),A={class:"example-pagination-block"},J=I(()=>t("div",{class:"example-demonstration"},"When you have few pages",-1)),D={class:"example-pagination-block"},G=I(()=>t("div",{class:"example-demonstration"},"When you have more than 7 pages",-1));function H(n,r){const l=u("el-pagination");return c(),S($,null,[t("div",A,[J,o(l,{layout:"prev, pager, next",total:50})]),t("div",D,[G,o(l,{layout:"prev, pager, next",total:1e3})])],64)}var K=g(q,[["render",H],["__scopeId","data-v-7f3b1e9e"]]),ye=Object.freeze(Object.defineProperty({__proto__:null,default:K},Symbol.toStringTag,{value:"Module"}));const v=n=>(w("data-v-dc8ccb72"),n=n(),T(),n),L={class:"flex items-center mb-4"},Q=k("default"),R=k("small"),X=k(" background: "),Y={class:"ml-4"},Z=k(" disabled: "),ee=v(()=>t("hr",{class:"my-4"},null,-1)),ae={class:"demo-pagination-block"},te=v(()=>t("div",{class:"demonstration"},"Total item count",-1)),oe={class:"demo-pagination-block"},ne=v(()=>t("div",{class:"demonstration"},"Change page size",-1)),le={class:"demo-pagination-block"},se=v(()=>t("div",{class:"demonstration"},"Jump to",-1)),re={class:"demo-pagination-block"},ue=v(()=>t("div",{class:"demonstration"},"All combined",-1)),_e=U({__name:"more-elements",setup(n){const r=s(5),l=s(5),p=s(5),m=s(4),b=s(100),f=s(100),V=s(100),_=s(!1),d=s(!1),i=s(!1),h=z=>{console.log(`${z} items per page`)},y=z=>{console.log(`current page: ${z}`)};return(z,e)=>{const j=u("el-radio-button"),M=u("el-radio-group"),O=u("el-switch"),x=u("el-pagination");return c(),S($,null,[t("div",L,[o(M,{modelValue:_.value,"onUpdate:modelValue":e[0]||(e[0]=a=>_.value=a),class:"mr-4"},{default:C(()=>[o(j,{label:!1},{default:C(()=>[Q]),_:1}),o(j,{label:!0},{default:C(()=>[R]),_:1})]),_:1},8,["modelValue"]),t("div",null,[X,o(O,{modelValue:d.value,"onUpdate:modelValue":e[1]||(e[1]=a=>d.value=a),class:"ml-2"},null,8,["modelValue"])]),t("div",Y,[Z,o(O,{modelValue:i.value,"onUpdate:modelValue":e[2]||(e[2]=a=>i.value=a),class:"ml-2"},null,8,["modelValue"])])]),ee,t("div",ae,[te,o(x,{"current-page":r.value,"onUpdate:current-page":e[3]||(e[3]=a=>r.value=a),"page-size":100,small:_.value,disabled:i.value,background:d.value,layout:"total, prev, pager, next",total:1e3,onSizeChange:h,onCurrentChange:y},null,8,["current-page","small","disabled","background"])]),t("div",oe,[ne,o(x,{"current-page":l.value,"onUpdate:current-page":e[4]||(e[4]=a=>l.value=a),"page-size":b.value,"onUpdate:page-size":e[5]||(e[5]=a=>b.value=a),"page-sizes":[100,200,300,400],small:_.value,disabled:i.value,background:d.value,layout:"sizes, prev, pager, next",total:1e3,onSizeChange:h,onCurrentChange:y},null,8,["current-page","page-size","small","disabled","background"])]),t("div",le,[se,o(x,{"current-page":p.value,"onUpdate:current-page":e[6]||(e[6]=a=>p.value=a),"page-size":f.value,"onUpdate:page-size":e[7]||(e[7]=a=>f.value=a),small:_.value,disabled:i.value,background:d.value,layout:"prev, pager, next, jumper",total:1e3,onSizeChange:h,onCurrentChange:y},null,8,["current-page","page-size","small","disabled","background"])]),t("div",re,[ue,o(x,{"current-page":m.value,"onUpdate:current-page":e[8]||(e[8]=a=>m.value=a),"page-size":V.value,"onUpdate:page-size":e[9]||(e[9]=a=>V.value=a),"page-sizes":[100,200,300,400],small:_.value,disabled:i.value,background:d.value,layout:"total, sizes, prev, pager, next, jumper",total:400,onSizeChange:h,onCurrentChange:y},null,8,["current-page","page-size","small","disabled","background"])])],64)}}});var de=g(_e,[["__scopeId","data-v-dc8ccb72"]]),ze=Object.freeze(Object.defineProperty({__proto__:null,default:de},Symbol.toStringTag,{value:"Module"}));const ie={};function ce(n,r){const l=u("el-pagination");return c(),P(l,{"page-size":20,"pager-count":11,layout:"prev, pager, next",total:1e3})}var pe=g(ie,[["render",ce]]),xe=Object.freeze(Object.defineProperty({__proto__:null,default:pe},Symbol.toStringTag,{value:"Module"}));const ge={};function ve(n,r){const l=u("el-pagination");return c(),S($,null,[o(l,{small:"",layout:"prev, pager, next",total:50}),o(l,{small:"",background:"",layout:"prev, pager, next",total:50,class:"mt-4"})],64)}var me=g(ge,[["render",ve]]),Se=Object.freeze(Object.defineProperty({__proto__:null,default:me},Symbol.toStringTag,{value:"Module"}));export{fe as _,he as a,ye as b,ze as c,xe as d,Se as e};
