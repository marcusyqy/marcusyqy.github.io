import{S as H,i as j,s as W,e as g,D as G,c as v,a as p,E as K,d as c,b as f,F as re,f as k,G as m,H as S,I as O,J as Q,K as M,L as F,M as J,N as R,p as q,n as B,B as oe,O as X,P as Y,v as L,j as I,w as P,l as T,x as D,y as ie,z as ue,Q as Z,A as N,m as fe,o as ce,u as _e,t as C,g as z,R as de,T as he,U as pe}from"../chunks/vendor-59e02a78.js";import{B as U}from"../chunks/boop-8b3c10f7.js";function me(i){let e,t,s,n,l,a,_;return{c(){e=g("button"),t=G("svg"),s=G("line"),n=G("line"),l=G("line"),this.h()},l(o){e=v(o,"BUTTON",{class:!0});var u=p(e);t=K(u,"svg",{width:!0,height:!0,class:!0});var r=p(t);s=K(r,"line",{id:!0,x1:!0,y1:!0,x2:!0,y2:!0,class:!0}),p(s).forEach(c),n=K(r,"line",{id:!0,x1:!0,y1:!0,x2:!0,y2:!0,class:!0}),p(n).forEach(c),l=K(r,"line",{id:!0,x1:!0,y1:!0,x2:!0,y2:!0,class:!0}),p(l).forEach(c),r.forEach(c),u.forEach(c),this.h()},h(){f(s,"id","top"),f(s,"x1","0"),f(s,"y1","2"),f(s,"x2","32"),f(s,"y2","2"),f(s,"class","svelte-1kiuhyr"),f(n,"id","middle"),f(n,"x1","0"),f(n,"y1","12"),f(n,"x2","32"),f(n,"y2","12"),f(n,"class","svelte-1kiuhyr"),f(l,"id","bottom"),f(l,"x1","0"),f(l,"y1","22"),f(l,"x2","32"),f(l,"y2","22"),f(l,"class","svelte-1kiuhyr"),f(t,"width","32"),f(t,"height","24"),f(t,"class","svelte-1kiuhyr"),f(e,"class","svelte-1kiuhyr"),re(e,"open",i[0])},m(o,u){k(o,e,u),m(e,t),m(t,s),m(t,n),m(t,l),a||(_=S(e,"click",i[1]),a=!0)},p(o,[u]){u&1&&re(e,"open",o[0])},i:O,o:O,d(o){o&&c(e),a=!1,_()}}}function ge(i,e,t){let{open:s=!1}=e;const n=()=>t(0,s=!s);return i.$$set=l=>{"open"in l&&t(0,s=l.open)},[s,n]}class ve extends H{constructor(e){super();j(this,e,ge,me,W,{open:0})}}function be(i){let e,t,s;const n=i[6].default,l=Q(n,i,i[5],null);return{c(){e=g("div"),t=g("div"),l&&l.c(),this.h()},l(a){e=v(a,"DIV",{id:!0,style:!0,class:!0});var _=p(e);t=v(_,"DIV",{id:!0,style:!0,class:!0});var o=p(t);l&&l.l(o),o.forEach(c),_.forEach(c),this.h()},h(){f(t,"id","menu"),M(t,"padding",i[3]),M(t,"padding-top",i[4]),f(t,"class","svelte-160uvkd"),f(e,"id","container"),M(e,"width",i[2]),M(e,"right",i[0]?"0px":"-"+i[2]),M(e,"transition","right "+i[1]+"s ease-in-out"),f(e,"class","svelte-160uvkd")},m(a,_){k(a,e,_),m(e,t),l&&l.m(t,null),s=!0},p(a,[_]){l&&l.p&&(!s||_&32)&&F(l,n,a,a[5],s?R(n,a[5],_,null):J(a[5]),null),(!s||_&8)&&M(t,"padding",a[3]),(!s||_&16)&&M(t,"padding-top",a[4]),(!s||_&4)&&M(e,"width",a[2]),(!s||_&5)&&M(e,"right",a[0]?"0px":"-"+a[2]),(!s||_&2)&&M(e,"transition","right "+a[1]+"s ease-in-out")},i(a){s||(q(l,a),s=!0)},o(a){B(l,a),s=!1},d(a){a&&c(e),l&&l.d(a)}}}function $e(i,e,t){let{$$slots:s={},$$scope:n}=e,{open:l}=e,{duration:a}=e,{width:_}=e,{padding:o}=e,{paddingTop:u}=e;return i.$$set=r=>{"open"in r&&t(0,l=r.open),"duration"in r&&t(1,a=r.duration),"width"in r&&t(2,_=r.width),"padding"in r&&t(3,o=r.padding),"paddingTop"in r&&t(4,u=r.paddingTop),"$$scope"in r&&t(5,n=r.$$scope)},[l,a,_,o,u,n,s]}class ye extends H{constructor(e){super();j(this,e,$e,be,W,{open:0,duration:1,width:2,padding:3,paddingTop:4})}}function ke(i){let e;const t=i[7].default,s=Q(t,i,i[10],null);return{c(){s&&s.c()},l(n){s&&s.l(n)},m(n,l){s&&s.m(n,l),e=!0},p(n,l){s&&s.p&&(!e||l&1024)&&F(s,t,n,n[10],e?R(t,n[10],l,null):J(n[10]),null)},i(n){e||(q(s,n),e=!0)},o(n){B(s,n),e=!1},d(n){s&&s.d(n)}}}function Ee(i){let e,t,s,n,l,a;const _=[i[1]];function o(h){i[8](h)}let u={};for(let h=0;h<_.length;h+=1)u=oe(u,_[h]);i[0]!==void 0&&(u.open=i[0]),e=new ve({props:u}),X.push(()=>Y(e,"open",o));const r=[i[2]];function b(h){i[9](h)}let E={$$slots:{default:[ke]},$$scope:{ctx:i}};for(let h=0;h<r.length;h+=1)E=oe(E,r[h]);return i[0]!==void 0&&(E.open=i[0]),n=new ye({props:E}),X.push(()=>Y(n,"open",b)),{c(){L(e.$$.fragment),s=I(),L(n.$$.fragment)},l(h){P(e.$$.fragment,h),s=T(h),P(n.$$.fragment,h)},m(h,d){D(e,h,d),k(h,s,d),D(n,h,d),a=!0},p(h,[d]){const y=d&2?ie(_,[ue(h[1])]):{};!t&&d&1&&(t=!0,y.open=h[0],Z(()=>t=!1)),e.$set(y);const A=d&4?ie(r,[ue(h[2])]):{};d&1024&&(A.$$scope={dirty:d,ctx:h}),!l&&d&1&&(l=!0,A.open=h[0],Z(()=>l=!1)),n.$set(A)},i(h){a||(q(e.$$.fragment,h),q(n.$$.fragment,h),a=!0)},o(h){B(e.$$.fragment,h),B(n.$$.fragment,h),a=!1},d(h){N(e,h),h&&c(s),N(n,h)}}}function we(i,e,t){let{$$slots:s={},$$scope:n}=e,{open:l=!1}=e,{duration:a=.4}=e,{width:_="300px"}=e,{padding:o="25px"}=e,{paddingTop:u="50px"}=e,r={duration:a},b={duration:a,width:_,padding:o,paddingTop:u};function E(d){l=d,t(0,l)}function h(d){l=d,t(0,l)}return i.$$set=d=>{"open"in d&&t(0,l=d.open),"duration"in d&&t(3,a=d.duration),"width"in d&&t(4,_=d.width),"padding"in d&&t(5,o=d.padding),"paddingTop"in d&&t(6,u=d.paddingTop),"$$scope"in d&&t(10,n=d.$$scope)},[l,r,b,a,_,o,u,s,E,h,n]}class qe extends H{constructor(e){super();j(this,e,we,Ee,W,{open:0,duration:3,width:4,padding:5,paddingTop:6})}}function Be(i){let e,t,s;function n(a){i[3](a)}let l={$$slots:{default:[Me]},$$scope:{ctx:i}};return i[1]!==void 0&&(l.open=i[1]),e=new qe({props:l}),X.push(()=>Y(e,"open",n)),{c(){L(e.$$.fragment)},l(a){P(e.$$.fragment,a)},m(a,_){D(e,a,_),s=!0},p(a,_){const o={};_&32&&(o.$$scope={dirty:_,ctx:a}),!t&&_&2&&(t=!0,o.open=a[1],Z(()=>t=!1)),e.$set(o)},i(a){s||(q(e.$$.fragment,a),s=!0)},o(a){B(e.$$.fragment,a),s=!1},d(a){N(e,a)}}}function Ae(i){let e,t,s,n,l,a,_,o,u,r,b,E,h;return s=new U({props:{boopParams:{scale:1.1,timing:200},$$slots:{default:[Ie]},$$scope:{ctx:i}}}),a=new U({props:{boopParams:{scale:1.1,timing:200},$$slots:{default:[Te]},$$scope:{ctx:i}}}),u=new U({props:{boopParams:{scale:1.1,timing:200},$$slots:{default:[Le]},$$scope:{ctx:i}}}),E=new U({props:{boopParams:{scale:1.1,timing:200},$$slots:{default:[Pe]},$$scope:{ctx:i}}}),{c(){e=g("ul"),t=g("li"),L(s.$$.fragment),n=I(),l=g("li"),L(a.$$.fragment),_=I(),o=g("li"),L(u.$$.fragment),r=I(),b=g("li"),L(E.$$.fragment),this.h()},l(d){e=v(d,"UL",{class:!0});var y=p(e);t=v(y,"LI",{class:!0});var A=p(t);P(s.$$.fragment,A),A.forEach(c),n=T(y),l=v(y,"LI",{class:!0});var V=p(l);P(a.$$.fragment,V),V.forEach(c),_=T(y),o=v(y,"LI",{class:!0});var $=p(o);P(u.$$.fragment,$),$.forEach(c),r=T(y),b=v(y,"LI",{class:!0});var w=p(b);P(E.$$.fragment,w),w.forEach(c),y.forEach(c),this.h()},h(){f(t,"class","letters svelte-154yqnx"),f(l,"class","letters svelte-154yqnx"),f(o,"class","letters svelte-154yqnx"),f(b,"class","letters svelte-154yqnx"),f(e,"class","nav-menu svelte-154yqnx")},m(d,y){k(d,e,y),m(e,t),D(s,t,null),m(e,n),m(e,l),D(a,l,null),m(e,_),m(e,o),D(u,o,null),m(e,r),m(e,b),D(E,b,null),h=!0},p(d,y){const A={};y&32&&(A.$$scope={dirty:y,ctx:d}),s.$set(A);const V={};y&32&&(V.$$scope={dirty:y,ctx:d}),a.$set(V);const $={};y&32&&($.$$scope={dirty:y,ctx:d}),u.$set($);const w={};y&32&&(w.$$scope={dirty:y,ctx:d}),E.$set(w)},i(d){h||(q(s.$$.fragment,d),q(a.$$.fragment,d),q(u.$$.fragment,d),q(E.$$.fragment,d),h=!0)},o(d){B(s.$$.fragment,d),B(a.$$.fragment,d),B(u.$$.fragment,d),B(E.$$.fragment,d),h=!1},d(d){d&&c(e),N(s),N(a),N(u),N(E)}}}function Me(i){let e,t,s,n,l,a,_,o,u,r,b,E,h,d,y,A,V;return{c(){e=g("a"),t=g("b"),s=C("About Me"),n=I(),l=g("a"),a=g("b"),_=C("Work"),o=I(),u=g("a"),r=g("b"),b=C("Blog"),E=I(),h=g("a"),d=g("b"),y=C("Contact"),this.h()},l($){e=v($,"A",{style:!0,href:!0,class:!0});var w=p(e);t=v(w,"B",{});var x=p(t);s=z(x,"About Me"),x.forEach(c),w.forEach(c),n=T($),l=v($,"A",{style:!0,href:!0,class:!0});var ee=p(l);a=v(ee,"B",{});var te=p(a);_=z(te,"Work"),te.forEach(c),ee.forEach(c),o=T($),u=v($,"A",{style:!0,href:!0,class:!0});var se=p(u);r=v(se,"B",{});var ne=p(r);b=z(ne,"Blog"),ne.forEach(c),se.forEach(c),E=T($),h=v($,"A",{style:!0,href:!0,class:!0});var le=p(h);d=v(le,"B",{});var ae=p(d);y=z(ae,"Contact"),ae.forEach(c),le.forEach(c),this.h()},h(){f(e,"style","padding-top:50px;font-size=1rem;"),f(e,"href","/about"),f(e,"class","svelte-154yqnx"),f(l,"style","padding-top:50px;font-size=1rem;"),f(l,"href","/work"),f(l,"class","svelte-154yqnx"),f(u,"style","padding-top:50px;font-size=1rem;"),f(u,"href","/blog"),f(u,"class","svelte-154yqnx"),f(h,"style","padding-top:50px;font-size=1rem;"),f(h,"href","/contact-me"),f(h,"class","svelte-154yqnx")},m($,w){k($,e,w),m(e,t),m(t,s),k($,n,w),k($,l,w),m(l,a),m(a,_),k($,o,w),k($,u,w),m(u,r),m(r,b),k($,E,w),k($,h,w),m(h,d),m(d,y),A||(V=[S(e,"click",i[2]),S(l,"click",i[2]),S(u,"click",i[2]),S(h,"click",i[2])],A=!0)},p:O,d($){$&&c(e),$&&c(n),$&&c(l),$&&c(o),$&&c(u),$&&c(E),$&&c(h),A=!1,de(V)}}}function Ie(i){let e,t,s;return{c(){e=g("a"),t=g("b"),s=C("About Me"),this.h()},l(n){e=v(n,"A",{href:!0,class:!0});var l=p(e);t=v(l,"B",{});var a=p(t);s=z(a,"About Me"),a.forEach(c),l.forEach(c),this.h()},h(){f(e,"href","/about"),f(e,"class","svelte-154yqnx")},m(n,l){k(n,e,l),m(e,t),m(t,s)},d(n){n&&c(e)}}}function Te(i){let e,t,s;return{c(){e=g("a"),t=g("b"),s=C("Work"),this.h()},l(n){e=v(n,"A",{href:!0,class:!0});var l=p(e);t=v(l,"B",{});var a=p(t);s=z(a,"Work"),a.forEach(c),l.forEach(c),this.h()},h(){f(e,"href","/work"),f(e,"class","svelte-154yqnx")},m(n,l){k(n,e,l),m(e,t),m(t,s)},d(n){n&&c(e)}}}function Le(i){let e,t,s;return{c(){e=g("a"),t=g("b"),s=C("Blog"),this.h()},l(n){e=v(n,"A",{href:!0,class:!0});var l=p(e);t=v(l,"B",{});var a=p(t);s=z(a,"Blog"),a.forEach(c),l.forEach(c),this.h()},h(){f(e,"href","/blog"),f(e,"class","svelte-154yqnx")},m(n,l){k(n,e,l),m(e,t),m(t,s)},d(n){n&&c(e)}}}function Pe(i){let e,t,s;return{c(){e=g("a"),t=g("b"),s=C("Contact"),this.h()},l(n){e=v(n,"A",{href:!0,class:!0});var l=p(e);t=v(l,"B",{});var a=p(t);s=z(a,"Contact"),a.forEach(c),l.forEach(c),this.h()},h(){f(e,"href","/contact-me"),f(e,"class","svelte-154yqnx")},m(n,l){k(n,e,l),m(e,t),m(t,s)},d(n){n&&c(e)}}}function De(i){let e,t,s,n;const l=[Ae,Be],a=[];function _(o,u){return o[0]?0:1}return t=_(i),s=a[t]=l[t](i),{c(){e=g("div"),s.c()},l(o){e=v(o,"DIV",{});var u=p(e);s.l(u),u.forEach(c)},m(o,u){k(o,e,u),a[t].m(e,null),n=!0},p(o,[u]){let r=t;t=_(o),t===r?a[t].p(o,u):(fe(),B(a[r],1,1,()=>{a[r]=null}),ce(),s=a[t],s?s.p(o,u):(s=a[t]=l[t](o),s.c()),q(s,1),s.m(e,null))},i(o){n||(q(s),n=!0)},o(o){B(s),n=!1},d(o){o&&c(e),a[t].d()}}}function Ne(i,e,t){let s=!1,n=!1;const l=()=>{t(1,n=!n)},a=o=>{o.matches?t(0,s=!1):(t(0,s=!0),t(1,n=!1))};_e(()=>{window.matchMedia("(max-width: 767px)").addListener(a)});function _(o){n=o,t(1,n)}return[s,n,l,_]}class Ve extends H{constructor(e){super();j(this,e,Ne,De,W,{})}}function Ce(i){let e,t,s;return{c(){e=g("a"),t=g("img"),this.h()},l(n){e=v(n,"A",{href:!0});var l=p(e);t=v(l,"IMG",{src:!0,alt:!0,class:!0}),l.forEach(c),this.h()},h(){he(t.src,s="assets/favicon-dark.png")||f(t,"src",s),f(t,"alt","Home"),f(t,"class","logo svelte-geo8lq"),f(e,"href","/")},m(n,l){k(n,e,l),m(e,t)},d(n){n&&c(e)}}}function ze(i){let e,t,s,n,l,a,_;return n=new U({props:{boopParams:{scale:1.2,timing:200},$$slots:{default:[Ce]},$$scope:{ctx:i}}}),a=new Ve({}),{c(){e=g("nav"),t=g("div"),s=g("div"),L(n.$$.fragment),l=I(),L(a.$$.fragment),this.h()},l(o){e=v(o,"NAV",{class:!0});var u=p(e);t=v(u,"DIV",{class:!0});var r=p(t);s=v(r,"DIV",{});var b=p(s);P(n.$$.fragment,b),b.forEach(c),l=T(r),P(a.$$.fragment,r),r.forEach(c),u.forEach(c),this.h()},h(){f(t,"class","flexibox svelte-geo8lq"),f(e,"class","svelte-geo8lq")},m(o,u){k(o,e,u),m(e,t),m(t,s),D(n,s,null),m(t,l),D(a,t,null),_=!0},p(o,[u]){const r={};u&1&&(r.$$scope={dirty:u,ctx:o}),n.$set(r)},i(o){_||(q(n.$$.fragment,o),q(a.$$.fragment,o),_=!0)},o(o){B(n.$$.fragment,o),B(a.$$.fragment,o),_=!1},d(o){o&&c(e),N(n),N(a)}}}class He extends H{constructor(e){super();j(this,e,null,ze,W,{})}}function je(i){let e,t,s,n,l,a,_;s=new He({});const o=i[1].default,u=Q(o,i,i[0],null);return{c(){e=g("link"),t=I(),L(s.$$.fragment),n=I(),l=g("div"),a=I(),u&&u.c(),this.h()},l(r){const b=pe('[data-svelte="svelte-nfys55"]',document.head);e=v(b,"LINK",{rel:!0,type:!0,href:!0}),b.forEach(c),t=T(r),P(s.$$.fragment,r),n=T(r),l=v(r,"DIV",{style:!0}),p(l).forEach(c),a=T(r),u&&u.l(r),this.h()},h(){f(e,"rel","icon"),f(e,"type","image/svg"),f(e,"href","/assets/favicon.svg"),M(l,"padding-top","2rem")},m(r,b){m(document.head,e),k(r,t,b),D(s,r,b),k(r,n,b),k(r,l,b),k(r,a,b),u&&u.m(r,b),_=!0},p(r,[b]){u&&u.p&&(!_||b&1)&&F(u,o,r,r[0],_?R(o,r[0],b,null):J(r[0]),null)},i(r){_||(q(s.$$.fragment,r),q(u,r),_=!0)},o(r){B(s.$$.fragment,r),B(u,r),_=!1},d(r){c(e),r&&c(t),N(s,r),r&&c(n),r&&c(l),r&&c(a),u&&u.d(r)}}}function We(i,e,t){let{$$slots:s={},$$scope:n}=e;return i.$$set=l=>{"$$scope"in l&&t(0,n=l.$$scope)},[n,s]}class Ge extends H{constructor(e){super();j(this,e,We,je,W,{})}}export{Ge as default};
