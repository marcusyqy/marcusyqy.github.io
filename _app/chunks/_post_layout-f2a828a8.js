import{S as V,i as k,s as q,E as z,e as y,t as g,j as S,c as b,a as E,g as j,l as C,d as m,a6 as A,b as I,f as J,P as r,h as H,H as N,I as R,J as w,p as B,R as F,_ as G,$ as K,n as L,a8 as O}from"./vendor-6bc76325.js";function Q(l){let e,a,f,h,n,u,_,o,P,c,Y,d;const D=l[4].default,s=z(D,l,l[3],null);return{c(){e=y("div"),a=y("h1"),f=g(l[0]),h=S(),n=y("span"),u=g("("),_=g(l[1]),o=g(")"),P=S(),c=y("div"),s&&s.c(),this.h()},l(t){e=b(t,"DIV",{class:!0});var i=E(e);a=b(i,"H1",{class:!0});var v=E(a);f=j(v,l[0]),h=C(v),n=b(v,"SPAN",{style:!0});var p=E(n);u=j(p,"("),_=j(p,l[1]),o=j(p,")"),p.forEach(m),v.forEach(m),P=C(i),c=b(i,"DIV",{class:!0});var M=E(c);s&&s.l(M),M.forEach(m),i.forEach(m),this.h()},h(){A(n,"font-size","1rem"),I(a,"class","font-bold underline text-justify text-2xl font-small"),I(c,"class","dummy p-4 svelte-12urx64"),I(e,"class","m-4")},m(t,i){J(t,e,i),r(e,a),r(a,f),r(a,h),r(a,n),r(n,u),r(n,_),r(n,o),r(e,P),r(e,c),s&&s.m(c,null),d=!0},p(t,[i]){(!d||i&1)&&H(f,t[0]),(!d||i&2)&&H(_,t[1]),s&&s.p&&(!d||i&8)&&N(s,D,t,t[3],d?w(D,t[3],i,null):R(t[3]),null)},i(t){d||(B(s,t),Y||F(()=>{Y=G(e,K,{}),Y.start()}),d=!0)},o(t){L(s,t),d=!1},d(t){t&&m(e),s&&s.d(t)}}}function T(l,e,a){let f,{$$slots:h={},$$scope:n}=e,{title:u}=e,{date:_}=e;return l.$$set=o=>{"title"in o&&a(0,u=o.title),"date"in o&&a(2,_=o.date),"$$scope"in o&&a(3,n=o.$$scope)},l.$$.update=()=>{l.$$.dirty&4&&a(1,f=O(_).format("MMM D, YYYY"))},[u,f,_,n,h]}class W extends V{constructor(e){super();k(this,e,T,Q,q,{title:0,date:2})}}export{W as P};