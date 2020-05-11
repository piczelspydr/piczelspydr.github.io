import{S as e,i as t,s as a,j as n,k as r,l as o,n as s,o as i,d as c,p as u,f as m,r as f,v as l,y as d,c as g,a as $,e as p,b as h,m as x,t as v,g as y,h as T,q as b}from"./client.8749bbbe.js";import{A as w}from"./Article.a6b45890.js";function k(e){let t,a,g,$;return{c(){t=n("div"),a=r('"'),g=r(e[0]),$=r('"'),this.h()},l(n){t=o(n,"DIV",{class:!0});var r=s(t);a=i(r,'"'),g=i(r,e[0]),$=i(r,'"'),r.forEach(c),this.h()},h(){u(t,"class","extract svelte-h2ogju")},m(e,n){m(e,t,n),f(t,a),f(t,g),f(t,$)},p(e,[t]){1&t&&l(g,e[0])},i:d,o:d,d(e){e&&c(t)}}}function q(e,t,a){let{extractText:n}=t;return e.$set=e=>{"extractText"in e&&a(0,n=e.extractText)},[n]}class I extends e{constructor(e){super(),t(this,e,q,k,a,{extractText:0})}}function L(e){let t,a,d,b,w,k,q;const L=new I({props:{extractText:e[0]}});return{c(){g(L.$$.fragment),t=$(),a=n("div"),d=$(),b=n("div"),w=n("a"),k=r(e[1]),this.h()},l(n){p(L.$$.fragment,n),t=h(n),a=o(n,"DIV",{class:!0}),s(a).forEach(c),d=h(n),b=o(n,"DIV",{class:!0});var r=s(b);w=o(r,"A",{href:!0,class:!0});var u=s(w);k=i(u,e[1]),u.forEach(c),r.forEach(c),this.h()},h(){u(a,"class","break svelte-brxk11"),u(w,"href",e[2]),u(w,"class","svelte-brxk11"),u(b,"class","author svelte-brxk11")},m(e,n){x(L,e,n),m(e,t,n),m(e,a,n),m(e,d,n),m(e,b,n),f(b,w),f(w,k),q=!0},p(e,[t]){const a={};1&t&&(a.extractText=e[0]),L.$set(a),(!q||2&t)&&l(k,e[1]),(!q||4&t)&&u(w,"href",e[2])},i(e){q||(v(L.$$.fragment,e),q=!0)},o(e){y(L.$$.fragment,e),q=!1},d(e){T(L,e),e&&c(t),e&&c(a),e&&c(d),e&&c(b)}}}function A(e,t,a){let{quoteText:n}=t,{author:r}=t,{authorLink:o}=t;return e.$set=e=>{"quoteText"in e&&a(0,n=e.quoteText),"author"in e&&a(1,r=e.author),"authorLink"in e&&a(2,o=e.authorLink)},[n,r,o]}class E extends e{constructor(e){super(),t(this,e,A,L,a,{quoteText:0,author:1,authorLink:2})}}function S(e){let t,a,u,l,b,w,k,q;const L=new I({props:{extractText:"Turn off your mind, relax and float downstream."}}),A=new E({props:{quoteText:"Turn off your mind, relax and float downstream.",author:"George Harrison"}});return{c(){t=n("p"),a=r("I work as a leader of a development scrum team, coaching Scrum and XP practices, whilst using my experiences to guide and validate clean and effective development styles. My passion lies in nurturing development teams into efficiently producing quality and creative solutions."),u=$(),g(L.$$.fragment),l=$(),b=n("p"),w=r("I began programming back in 1983 on a ZX Spectrum and progressed onto an Atari ST, developing assembly language games for fun. Upon leaving school in 1990 I didn’t achieve the required grades to progress my education and instead became a milkman for the next 18 years. Then, at 37, I decided to go to University, to pursue my ambitions as a software developer."),k=$(),g(A.$$.fragment)},l(e){t=o(e,"P",{});var n=s(t);a=i(n,"I work as a leader of a development scrum team, coaching Scrum and XP practices, whilst using my experiences to guide and validate clean and effective development styles. My passion lies in nurturing development teams into efficiently producing quality and creative solutions."),n.forEach(c),u=h(e),p(L.$$.fragment,e),l=h(e),b=o(e,"P",{});var r=s(b);w=i(r,"I began programming back in 1983 on a ZX Spectrum and progressed onto an Atari ST, developing assembly language games for fun. Upon leaving school in 1990 I didn’t achieve the required grades to progress my education and instead became a milkman for the next 18 years. Then, at 37, I decided to go to University, to pursue my ambitions as a software developer."),r.forEach(c),k=h(e),p(A.$$.fragment,e)},m(e,n){m(e,t,n),f(t,a),m(e,u,n),x(L,e,n),m(e,l,n),m(e,b,n),f(b,w),m(e,k,n),x(A,e,n),q=!0},p:d,i(e){q||(v(L.$$.fragment,e),v(A.$$.fragment,e),q=!0)},o(e){y(L.$$.fragment,e),y(A.$$.fragment,e),q=!1},d(e){e&&c(t),e&&c(u),T(L,e),e&&c(l),e&&c(b),e&&c(k),T(A,e)}}}function P(e){let t,a,n,r,o;const s=new E({props:{quoteText:"Turn off your mind, relax and float downstream.",author:"John Lennon",authorLink:"https://open.spotify.com/track/00oZhqZIQfL9P5CjOP6JsO?si=OFgcsf1LRayn7qYeQFRpuQ"}}),i=new I({props:{extractText:"Turn off your mind, relax and float downstream."}}),u=new E({props:{quoteText:"Turn off your mind, relax and float downstream.",author:"George Harrison"}}),f=new w({props:{title:"About",$$slots:{default:[S]},$$scope:{ctx:e}}});return{c(){t=$(),g(s.$$.fragment),a=$(),g(i.$$.fragment),n=$(),g(u.$$.fragment),r=$(),g(f.$$.fragment),this.h()},l(e){b('[data-svelte="svelte-1ine71f"]',document.head).forEach(c),t=h(e),p(s.$$.fragment,e),a=h(e),p(i.$$.fragment,e),n=h(e),p(u.$$.fragment,e),r=h(e),p(f.$$.fragment,e),this.h()},h(){document.title="About"},m(e,c){m(e,t,c),x(s,e,c),m(e,a,c),x(i,e,c),m(e,n,c),x(u,e,c),m(e,r,c),x(f,e,c),o=!0},p(e,[t]){const a={};1&t&&(a.$$scope={dirty:t,ctx:e}),f.$set(a)},i(e){o||(v(s.$$.fragment,e),v(i.$$.fragment,e),v(u.$$.fragment,e),v(f.$$.fragment,e),o=!0)},o(e){y(s.$$.fragment,e),y(i.$$.fragment,e),y(u.$$.fragment,e),y(f.$$.fragment,e),o=!1},d(e){e&&c(t),T(s,e),e&&c(a),T(i,e),e&&c(n),T(u,e),e&&c(r),T(f,e)}}}export default class extends e{constructor(e){super(),t(this,e,null,P,a,{})}}
