import{S as L,i as Q,s as W,e as c,t as V,j as I,c as d,a as u,g as P,d as n,l as w,b as o,R as ee,Z as te,f as Y,P as r,T as Z,U as T,_ as se,p as H,n as B,o as le,u as ae,$ as F,m as re}from"../chunks/vendor-b9f242cd.js";function J(f,{speed:s=1}){if(!(f.childNodes.length===1&&f.childNodes[0].nodeType===Node.TEXT_NODE))throw new Error("This transition only works on elements with a single text node child");const l=f.textContent;return{duration:l.length/(s*.01),tick:a=>{const i=Math.trunc(l.length*a);f.textContent=l.slice(0,i)}}}function K(f){let s,e,l,t,a,i,y,p,$,b,N,R,g,_,j,q,D,C,x,E,S,h,M;return{c(){s=c("div"),e=c("div"),l=c("p"),t=V("Hello, I am"),a=I(),i=c("p"),y=V("Marcus Yong."),$=I(),b=c("p"),N=V("I am a software developer/engineer, game developer and hobby artist."),R=I(),g=c("div"),_=c("a"),j=V("Resume"),q=I(),D=c("div"),C=I(),x=c("div"),E=c("img"),this.h()},l(v){s=d(v,"DIV",{class:!0});var m=u(s);e=d(m,"DIV",{class:!0});var k=u(e);l=d(k,"P",{class:!0});var z=u(l);t=P(z,"Hello, I am"),z.forEach(n),a=w(k),i=d(k,"P",{class:!0});var A=u(i);y=P(A,"Marcus Yong."),A.forEach(n),$=w(k),b=d(k,"P",{class:!0});var G=u(b);N=P(G,"I am a software developer/engineer, game developer and hobby artist."),G.forEach(n),R=w(k),g=d(k,"DIV",{style:!0,class:!0});var O=u(g);_=d(O,"A",{href:!0,download:!0,class:!0});var U=u(_);j=P(U,"Resume"),U.forEach(n),O.forEach(n),k.forEach(n),q=w(m),D=d(m,"DIV",{class:!0}),u(D).forEach(n),C=w(m),x=d(m,"DIV",{class:!0});var X=u(x);E=d(X,"IMG",{src:!0,alt:!0,class:!0}),X.forEach(n),m.forEach(n),this.h()},h(){o(l,"class","ini-para svelte-ipkl6k"),o(i,"class","name svelte-ipkl6k"),o(b,"class","desc svelte-ipkl6k"),o(_,"href","docs/resume.pdf"),o(_,"download","marcus-resume"),o(_,"class","svelte-ipkl6k"),ee(g,"padding-top","2rem"),o(g,"class","svelte-ipkl6k"),o(e,"class","words svelte-ipkl6k"),o(D,"class","spacing svelte-ipkl6k"),te(E.src,S="assets/profile.jpg")||o(E,"src",S),o(E,"alt","profile picture here."),o(E,"class","svelte-ipkl6k"),o(x,"class","profile-pic svelte-ipkl6k"),o(s,"class","box svelte-ipkl6k")},m(v,m){Y(v,s,m),r(s,e),r(e,l),r(l,t),r(e,a),r(e,i),r(i,y),r(e,$),r(e,b),r(b,N),r(e,R),r(e,g),r(g,_),r(_,j),r(s,q),r(s,D),r(s,C),r(s,x),r(x,E),M=!0},i(v){M||(Z(()=>{p||(p=T(i,J,{},!0)),p.run(1)}),Z(()=>{h||(h=T(s,F,{},!0)),h.run(1)}),M=!0)},o(v){p||(p=T(i,J,{},!1)),p.run(0),h||(h=T(s,F,{},!1)),h.run(0),M=!1},d(v){v&&n(s),v&&p&&p.end(),v&&h&&h.end()}}}function ie(f){let s,e,l,t=f[0]&&K();return{c(){s=I(),e=c("div"),t&&t.c(),this.h()},l(a){se('[data-svelte="svelte-4vzef0"]',document.head).forEach(n),s=w(a),e=d(a,"DIV",{class:!0});var y=u(e);t&&t.l(y),y.forEach(n),this.h()},h(){document.title="Marcus Yong Portfolio",o(e,"class","svelte-ipkl6k")},m(a,i){Y(a,s,i),Y(a,e,i),t&&t.m(e,null),l=!0},p(a,[i]){a[0]?t?i&1&&H(t,1):(t=K(),t.c(),H(t,1),t.m(e,null)):t&&(re(),B(t,1,1,()=>{t=null}),le())},i(a){l||(H(t),l=!0)},o(a){B(t),l=!1},d(a){a&&n(s),a&&n(e),t&&t.d()}}}function oe(f,s,e){let l=!1;return ae(()=>e(0,l=!0)),[l]}class ce extends L{constructor(s){super();Q(this,s,oe,ie,W,{})}}export{ce as default};
