import{S as t,i as e,s,j as a,k as n,a as r,l as i,n as o,o as c,d as f,b as l,p as $,f as m,r as p,v as d,y as u,c as h,e as g,m as y,t as b,g as k,h as x}from"./client.c046f680.js";import{A as v}from"./Article.3b3f6879.js";function N(t){let e,s,h,g,y,b,k;return{c(){e=a("a"),s=a("h2"),h=n(t[0]),g=r(),y=a("p"),b=n(t[1]),this.h()},l(a){e=i(a,"A",{href:!0,class:!0});var n=o(e);s=i(n,"H2",{});var r=o(s);h=c(r,t[0]),r.forEach(f),g=l(n),y=i(n,"P",{});var $=o(y);b=c($,t[1]),$.forEach(f),n.forEach(f),this.h()},h(){$(e,"href",k="stories/"+t[2]),$(e,"class","svelte-3rjnvh")},m(t,a){m(t,e,a),p(e,s),p(s,h),p(e,g),p(e,y),p(y,b)},p(t,[s]){1&s&&d(h,t[0]),2&s&&d(b,t[1]),4&s&&k!==(k="stories/"+t[2])&&$(e,"href",k)},i:u,o:u,d(t){t&&f(e)}}}function A(t,e,s){let{title:a}=e,{description:n}=e,{linkName:r}=e;return t.$set=t=>{"title"in t&&s(0,a=t.title),"description"in t&&s(1,n=t.description),"linkName"in t&&s(2,r=t.linkName)},[a,n,r]}class j extends t{constructor(t){super(),e(this,t,A,N,s,{title:0,description:1,linkName:2})}}function w(t){let e,s;const a=new j({props:{title:"Labrynf",description:"A bit of text about Labrynf",linkName:"labrynf"}}),n=new j({props:{title:"Mymynd",description:"A bit of text about Mymynd",linkName:"mymynd"}});return{c(){h(a.$$.fragment),e=r(),h(n.$$.fragment)},l(t){g(a.$$.fragment,t),e=l(t),g(n.$$.fragment,t)},m(t,r){y(a,t,r),m(t,e,r),y(n,t,r),s=!0},p:u,i(t){s||(b(a.$$.fragment,t),b(n.$$.fragment,t),s=!0)},o(t){k(a.$$.fragment,t),k(n.$$.fragment,t),s=!1},d(t){x(a,t),t&&f(e),x(n,t)}}}function E(t){let e;const s=new v({props:{title:"Stories",$$slots:{default:[w]},$$scope:{ctx:t}}});return{c(){h(s.$$.fragment)},l(t){g(s.$$.fragment,t)},m(t,a){y(s,t,a),e=!0},p(t,[e]){const a={};1&e&&(a.$$scope={dirty:e,ctx:t}),s.$set(a)},i(t){e||(b(s.$$.fragment,t),e=!0)},o(t){k(s.$$.fragment,t),e=!1},d(t){x(s,t)}}}export default class extends t{constructor(t){super(),e(this,t,null,E,s,{})}}
