import{S as Q,i as R,s as Z,e as v,t as I,j as M,c as m,a as g,g as S,d as i,l as V,b,f as L,P as s,h as A,Z as z,R as G,Q as J,a7 as K,_ as O,$ as U}from"../chunks/vendor-33fc3901.js";function C(c,o,e){const n=c.slice();return n[1]=o[e],n}function N(c){let o,e,n,u=c[1].metadata.title+"",B,x,E,P=c[1].metadata.date+"",h,_,f,p=c[1].metadata.description+"",k,D,w;return{c(){o=v("a"),e=v("div"),n=v("h2"),B=I(u),x=M(),E=v("p"),h=I(P),_=M(),f=v("p"),k=I(p),D=M(),this.h()},l(d){o=m(d,"A",{href:!0});var r=g(o);e=m(r,"DIV",{class:!0});var l=g(e);n=m(l,"H2",{class:!0});var t=g(n);B=S(t,u),t.forEach(i),x=V(l),E=m(l,"P",{class:!0});var j=g(E);h=S(j,P),j.forEach(i),_=V(l),f=m(l,"P",{class:!0});var a=g(f);k=S(a,p),a.forEach(i),l.forEach(i),D=V(r),r.forEach(i),this.h()},h(){b(n,"class","text-xl text-teal text-underline font-bold"),b(E,"class","text-xs font-small"),b(f,"class","text-sm font-small italic"),b(e,"class","m-2 p-2 border-teal border-b-2 border-dashed hover:border-2 rounded-lg"),b(o,"href",w=`${c[1].url}`)},m(d,r){L(d,o,r),s(o,e),s(e,n),s(n,B),s(e,x),s(e,E),s(E,h),s(e,_),s(e,f),s(f,k),s(o,D)},p(d,r){r&1&&u!==(u=d[1].metadata.title+"")&&A(B,u),r&1&&P!==(P=d[1].metadata.date+"")&&A(h,P),r&1&&p!==(p=d[1].metadata.description+"")&&A(k,p),r&1&&w!==(w=`${d[1].url}`)&&b(o,"href",w)},d(d){d&&i(o)}}}function W(c){let o,e,n,u,B,x,E,P,h,_,f,p=c[0].length+"",k,D,w,d,r=c[0],l=[];for(let t=0;t<r.length;t+=1)l[t]=N(C(c,r,t));return{c(){o=M(),e=v("div"),n=v("h1"),u=I("Marcus Blog"),B=M(),x=v("p"),E=I("Tech \xB7 Life \xB7 Food"),P=M(),h=v("div"),_=v("p"),f=v("span"),k=I(p),D=I(" posts."),w=M();for(let t=0;t<l.length;t+=1)l[t].c();this.h()},l(t){z('[data-svelte="svelte-1tlxjg1"]',document.head).forEach(i),o=V(t),e=m(t,"DIV",{class:!0});var a=g(e);n=m(a,"H1",{class:!0});var $=g(n);u=S($,"Marcus Blog"),$.forEach(i),B=V(a),x=m(a,"P",{class:!0});var T=g(x);E=S(T,"Tech \xB7 Life \xB7 Food"),T.forEach(i),P=V(a),h=m(a,"DIV",{});var q=g(h);_=m(q,"P",{class:!0});var F=g(_);f=m(F,"SPAN",{class:!0});var y=g(f);k=S(y,p),y.forEach(i),D=S(F," posts."),F.forEach(i),w=V(q);for(let H=0;H<l.length;H+=1)l[H].l(q);q.forEach(i),a.forEach(i),this.h()},h(){document.title="Marcus Blog",b(n,"class","m-1 text-4xl font-big"),b(x,"class","text-base font-thin p-0 font-small underline"),b(f,"class","text-teal"),b(_,"class","text-left underline font-semibold text-base"),b(e,"class","w-1/2 flex flex-col m-auto items-center justify-center text-center mobile:w-full")},m(t,j){L(t,o,j),L(t,e,j),s(e,n),s(n,u),s(e,B),s(e,x),s(x,E),s(e,P),s(e,h),s(h,_),s(_,f),s(f,k),s(_,D),s(h,w);for(let a=0;a<l.length;a+=1)l[a].m(h,null)},p(t,[j]){if(j&1&&p!==(p=t[0].length+"")&&A(k,p),j&1){r=t[0];let a;for(a=0;a<r.length;a+=1){const $=C(t,r,a);l[a]?l[a].p($,j):(l[a]=N($),l[a].c(),l[a].m(h,null))}for(;a<l.length;a+=1)l[a].d(1);l.length=r.length}},i(t){d||G(()=>{d=O(e,U,{}),d.start()})},o:J,d(t){t&&i(o),t&&i(e),K(l,t)}}}async function ee({fetch:c}){return{props:{posts:await c("/blog.json").then(e=>e.json())}}}function X(c,o,e){let{posts:n}=o;return c.$$set=u=>{"posts"in u&&e(0,n=u.posts)},[n]}class te extends Q{constructor(o){super();R(this,o,X,W,Z,{posts:0})}}export{te as default,ee as load};
