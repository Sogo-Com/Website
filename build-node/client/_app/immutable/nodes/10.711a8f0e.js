import{S as f,i as g,s as h,q as l,k as x,r as p,l as b,m as v,h as c,b as d,G as u,u as $,H as _,I as q}from"../chunks/index.c3d3dcff.js";import{p as y}from"../chunks/stores.836c598c.js";function A(o){let n,e,r,s=o[0].data.user+"",i,m;return{c(){n=l(`You are logged in Admin\r
\r
`),e=x("pre"),r=l("  "),i=l(s),m=l(`\r
`)},l(t){n=p(t,`You are logged in Admin\r
\r
`),e=b(t,"PRE",{});var a=v(e);r=p(a,"  "),i=p(a,s),m=p(a,`\r
`),a.forEach(c)},m(t,a){d(t,n,a),d(t,e,a),u(e,r),u(e,i),u(e,m)},p(t,[a]){a&1&&s!==(s=t[0].data.user+"")&&$(i,s)},i:_,o:_,d(t){t&&c(n),t&&c(e)}}}function E(o,n,e){let r;return q(o,y,s=>e(0,r=s)),console.log(r.data.user),[r]}class Y extends f{constructor(n){super(),g(this,n,E,A,h,{})}}export{Y as component};
