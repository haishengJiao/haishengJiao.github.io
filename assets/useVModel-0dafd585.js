import{h as s}from"./framework-c053e3d1.js";function a(r,t,u){return s({get(){return new Proxy(r[t],{set(e,n,o){return u("update:"+t,{...e,[n]:o}),!0}})},set(e){u("update:"+t,e)}})}export{a as u};
