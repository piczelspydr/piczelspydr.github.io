import{S as t,i as s,s as e,j as l,k as r,l as o,n,o as a,d as h,p as c,f,r as i,v as u,a as p,q as g,b as d,y as m,z as v}from"./client.57197788.js";function E(t,s,e){const l=t.slice();return l[1]=s[e],l}function b(t){let s,e,p,g,d=t[1].title+"";return{c(){s=l("li"),e=l("a"),p=r(d),this.h()},l(t){s=o(t,"LI",{});var l=n(s);e=o(l,"A",{rel:!0,href:!0});var r=n(e);p=a(r,d),r.forEach(h),l.forEach(h),this.h()},h(){c(e,"rel","prefetch"),c(e,"href",g="blog/"+t[1].slug)},m(t,l){f(t,s,l),i(s,e),i(e,p)},p(t,s){1&s&&d!==(d=t[1].title+"")&&u(p,d),1&s&&g!==(g="blog/"+t[1].slug)&&c(e,"href",g)},d(t){t&&h(s)}}}function j(t){let s,e,u,j,x,q=t[0],y=[];for(let s=0;s<q.length;s+=1)y[s]=b(E(t,q,s));return{c(){s=p(),e=l("h1"),u=r("Recent posts"),j=p(),x=l("ul");for(let t=0;t<y.length;t+=1)y[t].c();this.h()},l(t){g('[data-svelte="svelte-hfp9t8"]',document.head).forEach(h),s=d(t),e=o(t,"H1",{});var l=n(e);u=a(l,"Recent posts"),l.forEach(h),j=d(t),x=o(t,"UL",{class:!0});var r=n(x);for(let t=0;t<y.length;t+=1)y[t].l(r);r.forEach(h),this.h()},h(){document.title="Blog",c(x,"class","svelte-1frg2tf")},m(t,l){f(t,s,l),f(t,e,l),i(e,u),f(t,j,l),f(t,x,l);for(let t=0;t<y.length;t+=1)y[t].m(x,null)},p(t,[s]){if(1&s){let e;for(q=t[0],e=0;e<q.length;e+=1){const l=E(t,q,e);y[e]?y[e].p(l,s):(y[e]=b(l),y[e].c(),y[e].m(x,null))}for(;e<y.length;e+=1)y[e].d(1);y.length=q.length}},i:m,o:m,d(t){t&&h(s),t&&h(e),t&&h(j),t&&h(x),v(y,t)}}}function x({params:t,query:s}){return this.fetch("blog.json").then(t=>t.json()).then(t=>({posts:t}))}function q(t,s,e){let{posts:l}=s;return t.$set=t=>{"posts"in t&&e(0,l=t.posts)},[l]}export default class extends t{constructor(t){super(),s(this,t,q,j,e,{posts:0})}}export{x as preload};
