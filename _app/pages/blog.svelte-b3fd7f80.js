import{S as Q,i as R,s as Z,e as m,t as I,j as M,c as v,a as g,g as S,d as i,l as V,b,f as L,P as l,h as A,Z as z,R as G,Q as J,a7 as K,_ as O,$ as U}from"../chunks/vendor-33fc3901.js";function C(c,o,e){const n=c.slice();return n[1]=o[e],n}function N(c){let o,e,n,u=c[1].metadata.title+"",B,x,E,P=c[1].metadata.date+"",h,_,f,p=c[1].metadata.description+"",k,D,w;return{c(){o=m("a"),e=m("div"),n=m("h2"),B=I(u),x=M(),E=m("p"),h=I(P),_=M(),f=m("p"),k=I(p),D=M(),this.h()},l(d){o=v(d,"A",{href:!0});var r=g(o);e=v(r,"DIV",{class:!0});var s=g(e);n=v(s,"H2",{class:!0});var t=g(n);B=S(t,u),t.forEach(i),x=V(s),E=v(s,"P",{class:!0});var j=g(E);h=S(j,P),j.forEach(i),_=V(s),f=v(s,"P",{class:!0});var a=g(f);k=S(a,p),a.forEach(i),s.forEach(i),D=V(r),r.forEach(i),this.h()},h(){b(n,"class","text-xl text-teal text-underline font-bold"),b(E,"class","text-xs font-small"),b(f,"class","text-sm font-small italic"),b(e,"class","m-2 p-2 border-teal border-b-2 border-dashed hover:border-2 rounded-lg"),b(o,"href",w=`/posts/${c[1].url}.md`)},m(d,r){L(d,o,r),l(o,e),l(e,n),l(n,B),l(e,x),l(e,E),l(E,h),l(e,_),l(e,f),l(f,k),l(o,D)},p(d,r){r&1&&u!==(u=d[1].metadata.title+"")&&A(B,u),r&1&&P!==(P=d[1].metadata.date+"")&&A(h,P),r&1&&p!==(p=d[1].metadata.description+"")&&A(k,p),r&1&&w!==(w=`/posts/${d[1].url}.md`)&&b(o,"href",w)},d(d){d&&i(o)}}}function W(c){let o,e,n,u,B,x,E,P,h,_,f,p=c[0].length+"",k,D,w,d,r=c[0],s=[];for(let t=0;t<r.length;t+=1)s[t]=N(C(c,r,t));return{c(){o=M(),e=m("div"),n=m("h1"),u=I("Marcus Blog"),B=M(),x=m("p"),E=I("Tech \xB7 Life \xB7 Food"),P=M(),h=m("div"),_=m("p"),f=m("span"),k=I(p),D=I(" posts."),w=M();for(let t=0;t<s.length;t+=1)s[t].c();this.h()},l(t){z('[data-svelte="svelte-1tlxjg1"]',document.head).forEach(i),o=V(t),e=v(t,"DIV",{class:!0});var a=g(e);n=v(a,"H1",{class:!0});var $=g(n);u=S($,"Marcus Blog"),$.forEach(i),B=V(a),x=v(a,"P",{class:!0});var T=g(x);E=S(T,"Tech \xB7 Life \xB7 Food"),T.forEach(i),P=V(a),h=v(a,"DIV",{});var q=g(h);_=v(q,"P",{class:!0});var F=g(_);f=v(F,"SPAN",{class:!0});var y=g(f);k=S(y,p),y.forEach(i),D=S(F," posts."),F.forEach(i),w=V(q);for(let H=0;H<s.length;H+=1)s[H].l(q);q.forEach(i),a.forEach(i),this.h()},h(){document.title="Marcus Blog",b(n,"class","m-1 text-4xl font-big"),b(x,"class","text-base font-thin p-0 font-small underline"),b(f,"class","text-teal"),b(_,"class","text-left underline font-semibold text-base"),b(e,"class","w-1/2 flex flex-col m-auto items-center justify-center text-center mobile:w-full")},m(t,j){L(t,o,j),L(t,e,j),l(e,n),l(n,u),l(e,B),l(e,x),l(x,E),l(e,P),l(e,h),l(h,_),l(_,f),l(f,k),l(_,D),l(h,w);for(let a=0;a<s.length;a+=1)s[a].m(h,null)},p(t,[j]){if(j&1&&p!==(p=t[0].length+"")&&A(k,p),j&1){r=t[0];let a;for(a=0;a<r.length;a+=1){const $=C(t,r,a);s[a]?s[a].p($,j):(s[a]=N($),s[a].c(),s[a].m(h,null))}for(;a<s.length;a+=1)s[a].d(1);s.length=r.length}},i(t){d||G(()=>{d=O(e,U,{}),d.start()})},o:J,d(t){t&&i(o),t&&i(e),K(s,t)}}}async function ee({fetch:c}){return{props:{posts:await c("/blog.json").then(e=>e.json())}}}function X(c,o,e){let{posts:n}=o;return c.$$set=u=>{"posts"in u&&e(0,n=u.posts)},[n]}class te extends Q{constructor(o){super();R(this,o,X,W,Z,{posts:0})}}export{te as default,ee as load};
