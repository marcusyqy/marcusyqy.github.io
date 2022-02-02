import{S as fl,i as hl,s as ml,e as o,t as a,j as r,c as l,a as p,g as n,d as s,l as u,b as d,f as i,P as e,Q as Rn}from"../../chunks/vendor-33fc3901.js";function vl(Xo){let y,os,L,ls,ps,F,cs,is,me,nt,rs,ve,ot,us,we,M,q,ds,ks,ye,P,W,fs,hs,G,ms,vs,Ee,lt,ws,be,b,ys,$,Es,bs,z,gs,_s,ge,pt,xs,_e,ct,Ss,xe,g,xt,Is,js,St,Cs,Ds,It,Os,Se,E,Ps,jt,Ts,Ks,Ct,As,Hs,Dt,Ns,Rs,Ie,V,tl=`<code class="language-undefined">route
\u251C\u2500\u2500 __layout.svelte
\u251C\u2500\u2500 about.svelte
\u251C\u2500\u2500 [slug].svelte
\u2514\u2500\u2500 index.svelte</code>`,je,k,Ls,Ot,Fs,Ms,Pt,qs,Ws,Tt,Gs,$s,Kt,zs,Vs,At,Bs,Js,Ht,Us,Zs,Nt,Qs,Ys,Rt,Xs,ta,Lt,ea,sa,Ft,aa,na,Ce,_,oa,Mt,la,pa,qt,ca,ia,De,it,ra,Oe,m,ua,Wt,da,ka,Gt,fa,ha,$t,ma,va,zt,wa,ya,Pe,B,el=`<code class="language-html"><span class="token comment">&lt;!--lib/Nav.svelte--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nav</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>home<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>HOME<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/about<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>about<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>about<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nav</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>`,Te,x,Ea,Vt,ba,ga,Bt,_a,xa,Ke,J,sl=`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">import</span> <span class="token string">'../app.scss'</span><span class="token punctuation">;</span>
	<span class="token keyword">import</span> Nav <span class="token keyword">from</span> <span class="token string">'$lib/Nav.svelte'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>g-app-wrapper<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nav</span> <span class="token punctuation">/></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>`,Ae,rt,Sa,He,K,Ia,Jt,ja,Ca,Ne,h,Da,Ut,Oa,Pa,Zt,Ta,Ka,Qt,Aa,Ha,Yt,Na,Ra,Xt,La,Fa,te,Ma,qa,Re,U,al=`<code class="language-js"><span class="token comment">// index.json.js</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	<span class="token comment">// our markdown files lie in src/posts.</span>
	<span class="token keyword">let</span> postTitles <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readdirSync</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">src/posts</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">fileName</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">getTitleFrom</span><span class="token punctuation">(</span>fileName<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> body <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>postTitles<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">return</span> <span class="token punctuation">&#123;</span> body <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`,Le,A,Wa,ee,Ga,$a,Fe,S,za,se,Va,Ba,ae,Ja,Ua,Me,Z,nl=`<code class="language-js"><span class="token comment">// [slug].json.js</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">&#123;</span> params <span class="token punctuation">&#125;</span></span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	<span class="token comment">// we could get the dynamic slug from the parameter of get.</span>
	<span class="token keyword">const</span> <span class="token punctuation">&#123;</span> slug <span class="token punctuation">&#125;</span> <span class="token operator">=</span> params<span class="token punctuation">;</span>

	<span class="token keyword">const</span> <span class="token punctuation">&#123;</span> metadata<span class="token punctuation">,</span> content <span class="token punctuation">&#125;</span> <span class="token operator">=</span> <span class="token function">process</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">src/posts/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>slug<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">.md</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> body <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span> metadata<span class="token punctuation">,</span> content <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">return</span> <span class="token punctuation">&#123;</span> body <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`,qe,I,Za,ne,Qa,Ya,oe,Xa,tn,We,Q,ol=`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">context</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">load</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">&#123;</span> page<span class="token punctuation">,</span> fetch <span class="token punctuation">&#125;</span></span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">const</span> slug <span class="token operator">=</span> page<span class="token punctuation">.</span>params<span class="token punctuation">.</span>slug<span class="token punctuation">;</span>
		<span class="token keyword">const</span> post <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>slug<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">.json</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">r</span><span class="token punctuation">)</span> <span class="token operator">=></span> r<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> <span class="token punctuation">&#123;</span>
			props<span class="token operator">:</span> <span class="token punctuation">&#123;</span> post <span class="token punctuation">&#125;</span>
		<span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
	<span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token comment">// post will have metadata and content</span>
	<span class="token keyword">export</span> <span class="token keyword">let</span> post<span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!--show the post html with @html--></span>
&#123;@html post.content&#125;</code>`,Ge,v,en,le,sn,an,pe,nn,on,ce,ln,pn,ie,cn,rn,$e,j,un,re,dn,kn,ue,fn,hn,ze,ut,mn,Ve,C,vn,Y,wn,yn,X,En,bn,Be,T,tt,gn,_n,et,xn,Sn,Je,st,ll=`<code class="language-js"><span class="token keyword">import</span> vfile <span class="token keyword">from</span> <span class="token string">'to-vfile'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> unified <span class="token keyword">from</span> <span class="token string">'unified'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> remarkParse <span class="token keyword">from</span> <span class="token string">'remark-parse'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> remark2rehype <span class="token keyword">from</span> <span class="token string">'remark-rehype'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> stringify <span class="token keyword">from</span> <span class="token string">'rehype-stringify'</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> processor <span class="token operator">=</span> <span class="token function">unified</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>remarkParse<span class="token punctuation">)</span> <span class="token comment">// parse into markdown syntax tree</span>
	<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>remark2rehype<span class="token punctuation">)</span> <span class="token comment">// convert to html syntax tree</span>
	<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>stringify<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// turn html syntax tree to html</span>

<span class="token comment">// process function will return the generated html string.</span>
<span class="token keyword">function</span> <span class="token function">process</span><span class="token punctuation">(</span><span class="token parameter">filename</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	<span class="token comment">// use vfile to read the file, could use fs if you like.</span>
	<span class="token keyword">return</span> processor<span class="token punctuation">.</span><span class="token function">processSync</span><span class="token punctuation">(</span>vfile<span class="token punctuation">.</span><span class="token function">readSync</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`,Ue,dt,In,Ze,H,jn,at,de,Cn,Dn,Qe,kt,On,Ye,ft,Pn,Xe,ht,Tn,ts,N,Kn,ke,An,Hn;return{c(){y=o("p"),os=a("Recently, SvelteKit is "),L=o("a"),ls=a("released in public beta"),ps=a(". And we could finally see what Rich Harris called \u201D"),F=o("a"),cs=a("Futuristic Web Development"),is=a("\u201D looks like. It\u2019s always better to learn with project, so I made a little blog (the one you are reading) with SvelteKit and deployed it on the Github Pages. And this series of posts are the things I learnt."),me=r(),nt=o("h2"),rs=a("Brief Intro of Svelte and SvelteKit"),ve=r(),ot=o("p"),us=a("For those who are not familiar with Svelte and SvelteKit:"),we=r(),M=o("p"),q=o("a"),ds=a("Svelte"),ks=a(" is a reactive Web component framework. Unlike traditionaly counterparts like React and Vue, Svelte does not use virtual dom (vdom). Instead, Svelte compiles the app to vanilla js during building. This results in an extreme small bundle size and blazing fast speed, as the app no longer contains runtime code and has get rid of the overheads of vdom relevant computation. In addition, Svelte is designed to be very close to plain HTML and CSS, which makes the code clean and easy to read."),ye=r(),P=o("p"),W=o("a"),fs=a("SvelteKit"),hs=a(" is the framework for building Svelte based app. With the help of "),G=o("a"),ms=a("Vite"),vs=a(", SvelteKit provides excellent developing experience."),Ee=r(),lt=o("h2"),ws=a("Minimal SvelteKit Tutorial"),be=r(),b=o("p"),ys=a("I\u2019m not going to introduce how to use Svelte in this series of posts, as the official doc has done a great job. As for SvelteKit, I will try to cover only the bits and bobs used for the blog app. Anyway, it\u2019s very recommended to go through the "),$=o("a"),Es=a("Svelte tutorial"),bs=a(" and the "),z=o("a"),gs=a("SvelteKit doc"),_s=a("."),ge=r(),pt=o("h3"),xs=a("Routing and Layout"),_e=r(),ct=o("p"),Ss=a("The blog site contains 3 types of pages:"),xe=r(),g=o("ul"),xt=o("li"),Is=a("index page: show the list of post titles"),js=r(),St=o("li"),Cs=a("post page: render markdown file into beautiful html"),Ds=r(),It=o("li"),Os=a("about page: show about information"),Se=r(),E=o("p"),Ps=a("In SvelteKit, we have a so-called "),jt=o("em"),Ts=a("a filesystem-based router"),Ks=a(". The files in "),Ct=o("code"),As=a("src/route"),Hs=a(" will correspond to the actual webpage. In our case, the folder structure of "),Dt=o("code"),Ns=a("src/route"),Rs=a(" would be:"),Ie=r(),V=o("pre"),je=r(),k=o("p"),Ls=a("where "),Ot=o("code"),Fs=a("about.svelte"),Ms=a(" will be "),Pt=o("code"),qs=a("xxx.com/about"),Ws=a(", "),Tt=o("code"),Gs=a("index.svelte"),$s=a(" will be "),Kt=o("code"),zs=a("xxx.com/"),Vs=a(". As for the "),At=o("code"),Bs=a("[slug].svelte"),Js=a(", it is a dynamic route, whose dynamic parameter is the "),Ht=o("code"),Us=a("slug"),Zs=a(" in the bracket. For example, we may have a generated "),Nt=o("code"),Qs=a("xxx.com/hello-world"),Ys=a(", then SvelteKit will use "),Rt=o("code"),Xs=a("[slug].svelte"),ta=a(" to generate this page and set "),Lt=o("code"),ea=a("slug"),sa=a(" to "),Ft=o("code"),aa=a("hello-world"),na=a("."),Ce=r(),_=o("p"),oa=a("The remaining "),Mt=o("code"),la=a("__layout.svelte"),pa=a(" file serves as the layout template, all other files will be rendered inside the "),qt=o("code"),ca=a("<slot></slot>"),ia=a(" of it."),De=r(),it=o("h3"),ra=a("Import Components"),Oe=r(),m=o("p"),ua=a("A typical use of the layout file is adding a navigation bar. In SvelteKit, we should put the extracted components in "),Wt=o("code"),da=a("src/lib"),ka=a(" and use the "),Gt=o("code"),fa=a("$lib/xxx"),ha=a(" to import them. In our case, I added a "),$t=o("code"),ma=a("Nav.svelte"),va=a(" in "),zt=o("code"),wa=a("src/lib"),ya=a(":"),Pe=r(),B=o("pre"),Te=r(),x=o("p"),Ea=a("And in "),Vt=o("code"),ba=a("__layout.svelte"),ga=a(", I can import the "),Bt=o("code"),_a=a("Nav"),xa=a(" component in this way:"),Ke=r(),J=o("pre"),Ae=r(),rt=o("h3"),Sa=a("EndPoints and Data Loading"),He=r(),K=o("p"),Ia=a("With routing, layout and components, we could build most of the blog. But there is one important question: how should we get the markdown file and render it to beautiful html? I\u2019ll talk about the details about how to parse the markdown file with "),Jt=o("code"),ja=a("remark"),Ca=a(" later. For now, let\u2019s take a step back: we need to understand how SvelteKit would load the data from server to browser."),Ne=r(),h=o("p"),Da=a("In SvelteKit, data are transfered in JSON format. For each page component that requires data, we need to create a corresponding "),Ut=o("code"),Oa=a(".json.js"),Pa=a(" as the endpoints. "),Zt=o("strong"),Ta=a("Endpoints"),Ka=a(" in SvelteKit are those "),Qt=o("code"),Aa=a(".js"),Ha=a(" (or "),Yt=o("code"),Na=a(".ts"),Ra=a(" if you are using TypeScript) files that contains functions for HTTP methods. For example, in the index page, we need to get the list of post titles from the server (assume we are hosting the app with a server instead of generating static pages), therefore, we need to create a "),Xt=o("code"),La=a("index.json.js"),Fa=a(" file with a "),te=o("code"),Ma=a("get"),qa=a(" function:"),Re=r(),U=o("pre"),Le=r(),A=o("p"),Wa=a("Notive that because the endpoints will be run on the server, we can use libraries like "),ee=o("code"),Ga=a("fs"),$a=a("."),Fe=r(),S=o("p"),za=a("And for the "),se=o("code"),Va=a("[slug].svelte"),Ba=a(" page, we will also have a "),ae=o("code"),Ja=a("[slug].json.js"),Ua=a(" to get the post html:"),Me=r(),Z=o("pre"),qe=r(),I=o("p"),Za=a("Now we have the function that supply the data, we can use the "),ne=o("code"),Qa=a("load"),Ya=a(" function to load them. Take "),oe=o("code"),Xa=a("[slug].svelte"),tn=a(" as example, we will add"),We=r(),Q=o("pre"),Ge=r(),v=o("p"),en=a("to the top of the "),le=o("code"),sn=a("[slug].svelte"),an=a(", so that the page could get data from "),pe=o("code"),nn=a("${slug}.json"),on=a(". And remember to add "),ce=o("code"),ln=a('context="module"'),pn=a(" to the script tag around "),ie=o("code"),cn=a("load"),rn=a(", as we need the data load before the component is rendered."),$e=r(),j=o("p"),un=a("Similarly, we could add the "),re=o("code"),dn=a("load"),kn=a(" function to "),ue=o("code"),fn=a("index.svelte"),hn=a(" and this is the basic data stream in SvelteKit."),ze=r(),ut=o("h2"),mn=a("Parse and Render the markdown files"),Ve=r(),C=o("p"),vn=a("For this blog, I chose "),Y=o("a"),wn=a("remark"),yn=a(" as the markdown processor. It is one of the most popular markdown parser now and is the one that supports the great "),X=o("a"),En=a("Gatsby"),bn=a("."),Be=r(),T=o("p"),tt=o("a"),gn=a("remark"),_n=a(" is actually a part of the "),et=o("a"),xn=a("unifiedjs"),Sn=a(" ecosystem, a bunch of tools to help extracting the syntax tree or converting between content formats like markdown or html. To convert a markdown file into html, we could simply:"),Je=r(),st=o("pre"),Ue=r(),dt=o("p"),In=a("Notice that unifiedjs is organized with multi-repo pattern and all the packages imported in the above snippet are in separate repos."),Ze=r(),H=o("p"),jn=a("To get the title of the markdown file for index page, I added a metadata section to the markdown file. I\u2019m not sure if I did this in the correctly, so I\u2019m not going to describe my solution. If you have interest in parsing the metadata of the markdown, please refer to the "),at=o("a"),de=o("code"),Cn=a("markdown.js"),Dn=a(" file in the repo."),Qe=r(),kt=o("h2"),On=a("Conclusion"),Ye=r(),ft=o("p"),Pn=a("Hurray! We have built a blog app that runs locally. Next I will show you how to deploy the blog to Github Pages."),Xe=r(),ht=o("h2"),Tn=a("Tips"),ts=r(),N=o("p"),Kn=a("Some confusing errors could be solved by moving the dependencies to "),ke=o("code"),An=a("devDependencies"),Hn=a(" due to some bugs of Vite."),this.h()},l(t){y=l(t,"P",{});var c=p(y);os=n(c,"Recently, SvelteKit is "),L=l(c,"A",{href:!0,rel:!0});var Ln=p(L);ls=n(Ln,"released in public beta"),Ln.forEach(s),ps=n(c,". And we could finally see what Rich Harris called \u201D"),F=l(c,"A",{href:!0,rel:!0});var Fn=p(F);cs=n(Fn,"Futuristic Web Development"),Fn.forEach(s),is=n(c,"\u201D looks like. It\u2019s always better to learn with project, so I made a little blog (the one you are reading) with SvelteKit and deployed it on the Github Pages. And this series of posts are the things I learnt."),c.forEach(s),me=u(t),nt=l(t,"H2",{});var Mn=p(nt);rs=n(Mn,"Brief Intro of Svelte and SvelteKit"),Mn.forEach(s),ve=u(t),ot=l(t,"P",{});var qn=p(ot);us=n(qn,"For those who are not familiar with Svelte and SvelteKit:"),qn.forEach(s),we=u(t),M=l(t,"P",{});var Nn=p(M);q=l(Nn,"A",{href:!0,rel:!0});var Wn=p(q);ds=n(Wn,"Svelte"),Wn.forEach(s),ks=n(Nn," is a reactive Web component framework. Unlike traditionaly counterparts like React and Vue, Svelte does not use virtual dom (vdom). Instead, Svelte compiles the app to vanilla js during building. This results in an extreme small bundle size and blazing fast speed, as the app no longer contains runtime code and has get rid of the overheads of vdom relevant computation. In addition, Svelte is designed to be very close to plain HTML and CSS, which makes the code clean and easy to read."),Nn.forEach(s),ye=u(t),P=l(t,"P",{});var fe=p(P);W=l(fe,"A",{href:!0,rel:!0});var Gn=p(W);fs=n(Gn,"SvelteKit"),Gn.forEach(s),hs=n(fe," is the framework for building Svelte based app. With the help of "),G=l(fe,"A",{href:!0,rel:!0});var $n=p(G);ms=n($n,"Vite"),$n.forEach(s),vs=n(fe,", SvelteKit provides excellent developing experience."),fe.forEach(s),Ee=u(t),lt=l(t,"H2",{});var zn=p(lt);ws=n(zn,"Minimal SvelteKit Tutorial"),zn.forEach(s),be=u(t),b=l(t,"P",{});var mt=p(b);ys=n(mt,"I\u2019m not going to introduce how to use Svelte in this series of posts, as the official doc has done a great job. As for SvelteKit, I will try to cover only the bits and bobs used for the blog app. Anyway, it\u2019s very recommended to go through the "),$=l(mt,"A",{href:!0,rel:!0});var Vn=p($);Es=n(Vn,"Svelte tutorial"),Vn.forEach(s),bs=n(mt," and the "),z=l(mt,"A",{href:!0,rel:!0});var Bn=p(z);gs=n(Bn,"SvelteKit doc"),Bn.forEach(s),_s=n(mt,"."),mt.forEach(s),ge=u(t),pt=l(t,"H3",{});var Jn=p(pt);xs=n(Jn,"Routing and Layout"),Jn.forEach(s),_e=u(t),ct=l(t,"P",{});var Un=p(ct);Ss=n(Un,"The blog site contains 3 types of pages:"),Un.forEach(s),xe=u(t),g=l(t,"UL",{});var vt=p(g);xt=l(vt,"LI",{});var Zn=p(xt);Is=n(Zn,"index page: show the list of post titles"),Zn.forEach(s),js=u(vt),St=l(vt,"LI",{});var Qn=p(St);Cs=n(Qn,"post page: render markdown file into beautiful html"),Qn.forEach(s),Ds=u(vt),It=l(vt,"LI",{});var Yn=p(It);Os=n(Yn,"about page: show about information"),Yn.forEach(s),vt.forEach(s),Se=u(t),E=l(t,"P",{});var R=p(E);Ps=n(R,"In SvelteKit, we have a so-called "),jt=l(R,"EM",{});var Xn=p(jt);Ts=n(Xn,"a filesystem-based router"),Xn.forEach(s),Ks=n(R,". The files in "),Ct=l(R,"CODE",{});var to=p(Ct);As=n(to,"src/route"),to.forEach(s),Hs=n(R," will correspond to the actual webpage. In our case, the folder structure of "),Dt=l(R,"CODE",{});var eo=p(Dt);Ns=n(eo,"src/route"),eo.forEach(s),Rs=n(R," would be:"),R.forEach(s),Ie=u(t),V=l(t,"PRE",{class:!0});var pl=p(V);pl.forEach(s),je=u(t),k=l(t,"P",{});var f=p(k);Ls=n(f,"where "),Ot=l(f,"CODE",{});var so=p(Ot);Fs=n(so,"about.svelte"),so.forEach(s),Ms=n(f," will be "),Pt=l(f,"CODE",{});var ao=p(Pt);qs=n(ao,"xxx.com/about"),ao.forEach(s),Ws=n(f,", "),Tt=l(f,"CODE",{});var no=p(Tt);Gs=n(no,"index.svelte"),no.forEach(s),$s=n(f," will be "),Kt=l(f,"CODE",{});var oo=p(Kt);zs=n(oo,"xxx.com/"),oo.forEach(s),Vs=n(f,". As for the "),At=l(f,"CODE",{});var lo=p(At);Bs=n(lo,"[slug].svelte"),lo.forEach(s),Js=n(f,", it is a dynamic route, whose dynamic parameter is the "),Ht=l(f,"CODE",{});var po=p(Ht);Us=n(po,"slug"),po.forEach(s),Zs=n(f," in the bracket. For example, we may have a generated "),Nt=l(f,"CODE",{});var co=p(Nt);Qs=n(co,"xxx.com/hello-world"),co.forEach(s),Ys=n(f,", then SvelteKit will use "),Rt=l(f,"CODE",{});var io=p(Rt);Xs=n(io,"[slug].svelte"),io.forEach(s),ta=n(f," to generate this page and set "),Lt=l(f,"CODE",{});var ro=p(Lt);ea=n(ro,"slug"),ro.forEach(s),sa=n(f," to "),Ft=l(f,"CODE",{});var uo=p(Ft);aa=n(uo,"hello-world"),uo.forEach(s),na=n(f,"."),f.forEach(s),Ce=u(t),_=l(t,"P",{});var wt=p(_);oa=n(wt,"The remaining "),Mt=l(wt,"CODE",{});var ko=p(Mt);la=n(ko,"__layout.svelte"),ko.forEach(s),pa=n(wt," file serves as the layout template, all other files will be rendered inside the "),qt=l(wt,"CODE",{});var fo=p(qt);ca=n(fo,"<slot></slot>"),fo.forEach(s),ia=n(wt," of it."),wt.forEach(s),De=u(t),it=l(t,"H3",{});var ho=p(it);ra=n(ho,"Import Components"),ho.forEach(s),Oe=u(t),m=l(t,"P",{});var D=p(m);ua=n(D,"A typical use of the layout file is adding a navigation bar. In SvelteKit, we should put the extracted components in "),Wt=l(D,"CODE",{});var mo=p(Wt);da=n(mo,"src/lib"),mo.forEach(s),ka=n(D," and use the "),Gt=l(D,"CODE",{});var vo=p(Gt);fa=n(vo,"$lib/xxx"),vo.forEach(s),ha=n(D," to import them. In our case, I added a "),$t=l(D,"CODE",{});var wo=p($t);ma=n(wo,"Nav.svelte"),wo.forEach(s),va=n(D," in "),zt=l(D,"CODE",{});var yo=p(zt);wa=n(yo,"src/lib"),yo.forEach(s),ya=n(D,":"),D.forEach(s),Pe=u(t),B=l(t,"PRE",{class:!0});var cl=p(B);cl.forEach(s),Te=u(t),x=l(t,"P",{});var yt=p(x);Ea=n(yt,"And in "),Vt=l(yt,"CODE",{});var Eo=p(Vt);ba=n(Eo,"__layout.svelte"),Eo.forEach(s),ga=n(yt,", I can import the "),Bt=l(yt,"CODE",{});var bo=p(Bt);_a=n(bo,"Nav"),bo.forEach(s),xa=n(yt," component in this way:"),yt.forEach(s),Ke=u(t),J=l(t,"PRE",{class:!0});var il=p(J);il.forEach(s),Ae=u(t),rt=l(t,"H3",{});var go=p(rt);Sa=n(go,"EndPoints and Data Loading"),go.forEach(s),He=u(t),K=l(t,"P",{});var es=p(K);Ia=n(es,"With routing, layout and components, we could build most of the blog. But there is one important question: how should we get the markdown file and render it to beautiful html? I\u2019ll talk about the details about how to parse the markdown file with "),Jt=l(es,"CODE",{});var _o=p(Jt);ja=n(_o,"remark"),_o.forEach(s),Ca=n(es," later. For now, let\u2019s take a step back: we need to understand how SvelteKit would load the data from server to browser."),es.forEach(s),Ne=u(t),h=l(t,"P",{});var w=p(h);Da=n(w,"In SvelteKit, data are transfered in JSON format. For each page component that requires data, we need to create a corresponding "),Ut=l(w,"CODE",{});var xo=p(Ut);Oa=n(xo,".json.js"),xo.forEach(s),Pa=n(w," as the endpoints. "),Zt=l(w,"STRONG",{});var So=p(Zt);Ta=n(So,"Endpoints"),So.forEach(s),Ka=n(w," in SvelteKit are those "),Qt=l(w,"CODE",{});var Io=p(Qt);Aa=n(Io,".js"),Io.forEach(s),Ha=n(w," (or "),Yt=l(w,"CODE",{});var jo=p(Yt);Na=n(jo,".ts"),jo.forEach(s),Ra=n(w," if you are using TypeScript) files that contains functions for HTTP methods. For example, in the index page, we need to get the list of post titles from the server (assume we are hosting the app with a server instead of generating static pages), therefore, we need to create a "),Xt=l(w,"CODE",{});var Co=p(Xt);La=n(Co,"index.json.js"),Co.forEach(s),Fa=n(w," file with a "),te=l(w,"CODE",{});var Do=p(te);Ma=n(Do,"get"),Do.forEach(s),qa=n(w," function:"),w.forEach(s),Re=u(t),U=l(t,"PRE",{class:!0});var rl=p(U);rl.forEach(s),Le=u(t),A=l(t,"P",{});var ss=p(A);Wa=n(ss,"Notive that because the endpoints will be run on the server, we can use libraries like "),ee=l(ss,"CODE",{});var Oo=p(ee);Ga=n(Oo,"fs"),Oo.forEach(s),$a=n(ss,"."),ss.forEach(s),Fe=u(t),S=l(t,"P",{});var Et=p(S);za=n(Et,"And for the "),se=l(Et,"CODE",{});var Po=p(se);Va=n(Po,"[slug].svelte"),Po.forEach(s),Ba=n(Et," page, we will also have a "),ae=l(Et,"CODE",{});var To=p(ae);Ja=n(To,"[slug].json.js"),To.forEach(s),Ua=n(Et," to get the post html:"),Et.forEach(s),Me=u(t),Z=l(t,"PRE",{class:!0});var ul=p(Z);ul.forEach(s),qe=u(t),I=l(t,"P",{});var bt=p(I);Za=n(bt,"Now we have the function that supply the data, we can use the "),ne=l(bt,"CODE",{});var Ko=p(ne);Qa=n(Ko,"load"),Ko.forEach(s),Ya=n(bt," function to load them. Take "),oe=l(bt,"CODE",{});var Ao=p(oe);Xa=n(Ao,"[slug].svelte"),Ao.forEach(s),tn=n(bt," as example, we will add"),bt.forEach(s),We=u(t),Q=l(t,"PRE",{class:!0});var dl=p(Q);dl.forEach(s),Ge=u(t),v=l(t,"P",{});var O=p(v);en=n(O,"to the top of the "),le=l(O,"CODE",{});var Ho=p(le);sn=n(Ho,"[slug].svelte"),Ho.forEach(s),an=n(O,", so that the page could get data from "),pe=l(O,"CODE",{});var No=p(pe);nn=n(No,"${slug}.json"),No.forEach(s),on=n(O,". And remember to add "),ce=l(O,"CODE",{});var Ro=p(ce);ln=n(Ro,'context="module"'),Ro.forEach(s),pn=n(O," to the script tag around "),ie=l(O,"CODE",{});var Lo=p(ie);cn=n(Lo,"load"),Lo.forEach(s),rn=n(O,", as we need the data load before the component is rendered."),O.forEach(s),$e=u(t),j=l(t,"P",{});var gt=p(j);un=n(gt,"Similarly, we could add the "),re=l(gt,"CODE",{});var Fo=p(re);dn=n(Fo,"load"),Fo.forEach(s),kn=n(gt," function to "),ue=l(gt,"CODE",{});var Mo=p(ue);fn=n(Mo,"index.svelte"),Mo.forEach(s),hn=n(gt," and this is the basic data stream in SvelteKit."),gt.forEach(s),ze=u(t),ut=l(t,"H2",{});var qo=p(ut);mn=n(qo,"Parse and Render the markdown files"),qo.forEach(s),Ve=u(t),C=l(t,"P",{});var _t=p(C);vn=n(_t,"For this blog, I chose "),Y=l(_t,"A",{href:!0,rel:!0});var Wo=p(Y);wn=n(Wo,"remark"),Wo.forEach(s),yn=n(_t," as the markdown processor. It is one of the most popular markdown parser now and is the one that supports the great "),X=l(_t,"A",{href:!0,rel:!0});var Go=p(X);En=n(Go,"Gatsby"),Go.forEach(s),bn=n(_t,"."),_t.forEach(s),Be=u(t),T=l(t,"P",{});var he=p(T);tt=l(he,"A",{href:!0,rel:!0});var $o=p(tt);gn=n($o,"remark"),$o.forEach(s),_n=n(he," is actually a part of the "),et=l(he,"A",{href:!0,rel:!0});var zo=p(et);xn=n(zo,"unifiedjs"),zo.forEach(s),Sn=n(he," ecosystem, a bunch of tools to help extracting the syntax tree or converting between content formats like markdown or html. To convert a markdown file into html, we could simply:"),he.forEach(s),Je=u(t),st=l(t,"PRE",{class:!0});var kl=p(st);kl.forEach(s),Ue=u(t),dt=l(t,"P",{});var Vo=p(dt);In=n(Vo,"Notice that unifiedjs is organized with multi-repo pattern and all the packages imported in the above snippet are in separate repos."),Vo.forEach(s),Ze=u(t),H=l(t,"P",{});var as=p(H);jn=n(as,"To get the title of the markdown file for index page, I added a metadata section to the markdown file. I\u2019m not sure if I did this in the correctly, so I\u2019m not going to describe my solution. If you have interest in parsing the metadata of the markdown, please refer to the "),at=l(as,"A",{href:!0,rel:!0});var Bo=p(at);de=l(Bo,"CODE",{});var Jo=p(de);Cn=n(Jo,"markdown.js"),Jo.forEach(s),Bo.forEach(s),Dn=n(as," file in the repo."),as.forEach(s),Qe=u(t),kt=l(t,"H2",{});var Uo=p(kt);On=n(Uo,"Conclusion"),Uo.forEach(s),Ye=u(t),ft=l(t,"P",{});var Zo=p(ft);Pn=n(Zo,"Hurray! We have built a blog app that runs locally. Next I will show you how to deploy the blog to Github Pages."),Zo.forEach(s),Xe=u(t),ht=l(t,"H2",{});var Qo=p(ht);Tn=n(Qo,"Tips"),Qo.forEach(s),ts=u(t),N=l(t,"P",{});var ns=p(N);Kn=n(ns,"Some confusing errors could be solved by moving the dependencies to "),ke=l(ns,"CODE",{});var Yo=p(ke);An=n(Yo,"devDependencies"),Yo.forEach(s),Hn=n(ns," due to some bugs of Vite."),ns.forEach(s),this.h()},h(){d(L,"href","https://svelte.dev/blog/sveltekit-beta"),d(L,"rel","nofollow"),d(F,"href","https://www.youtube.com/watch?v=qSfdtmcZ4d0"),d(F,"rel","nofollow"),d(q,"href","https://svelte.dev/"),d(q,"rel","nofollow"),d(W,"href","https://kit.svelte.dev/"),d(W,"rel","nofollow"),d(G,"href","https://vitejs.dev/"),d(G,"rel","nofollow"),d($,"href","https://svelte.dev/tutorial/basics"),d($,"rel","nofollow"),d(z,"href","https://kit.svelte.dev/docs"),d(z,"rel","nofollow"),d(V,"class","language-undefined"),d(B,"class","language-html"),d(J,"class","language-html"),d(U,"class","language-js"),d(Z,"class","language-js"),d(Q,"class","language-html"),d(Y,"href","https://github.com/remarkjs/remark"),d(Y,"rel","nofollow"),d(X,"href","https://www.gatsbyjs.com/"),d(X,"rel","nofollow"),d(tt,"href","https://github.com/remarkjs/remark"),d(tt,"rel","nofollow"),d(et,"href","https://unifiedjs.com/"),d(et,"rel","nofollow"),d(st,"class","language-js"),d(at,"href","https://github.com/svelteland/svelte-kit-blog-demo/blob/main/src/lib/markdown.js"),d(at,"rel","nofollow")},m(t,c){i(t,y,c),e(y,os),e(y,L),e(L,ls),e(y,ps),e(y,F),e(F,cs),e(y,is),i(t,me,c),i(t,nt,c),e(nt,rs),i(t,ve,c),i(t,ot,c),e(ot,us),i(t,we,c),i(t,M,c),e(M,q),e(q,ds),e(M,ks),i(t,ye,c),i(t,P,c),e(P,W),e(W,fs),e(P,hs),e(P,G),e(G,ms),e(P,vs),i(t,Ee,c),i(t,lt,c),e(lt,ws),i(t,be,c),i(t,b,c),e(b,ys),e(b,$),e($,Es),e(b,bs),e(b,z),e(z,gs),e(b,_s),i(t,ge,c),i(t,pt,c),e(pt,xs),i(t,_e,c),i(t,ct,c),e(ct,Ss),i(t,xe,c),i(t,g,c),e(g,xt),e(xt,Is),e(g,js),e(g,St),e(St,Cs),e(g,Ds),e(g,It),e(It,Os),i(t,Se,c),i(t,E,c),e(E,Ps),e(E,jt),e(jt,Ts),e(E,Ks),e(E,Ct),e(Ct,As),e(E,Hs),e(E,Dt),e(Dt,Ns),e(E,Rs),i(t,Ie,c),i(t,V,c),V.innerHTML=tl,i(t,je,c),i(t,k,c),e(k,Ls),e(k,Ot),e(Ot,Fs),e(k,Ms),e(k,Pt),e(Pt,qs),e(k,Ws),e(k,Tt),e(Tt,Gs),e(k,$s),e(k,Kt),e(Kt,zs),e(k,Vs),e(k,At),e(At,Bs),e(k,Js),e(k,Ht),e(Ht,Us),e(k,Zs),e(k,Nt),e(Nt,Qs),e(k,Ys),e(k,Rt),e(Rt,Xs),e(k,ta),e(k,Lt),e(Lt,ea),e(k,sa),e(k,Ft),e(Ft,aa),e(k,na),i(t,Ce,c),i(t,_,c),e(_,oa),e(_,Mt),e(Mt,la),e(_,pa),e(_,qt),e(qt,ca),e(_,ia),i(t,De,c),i(t,it,c),e(it,ra),i(t,Oe,c),i(t,m,c),e(m,ua),e(m,Wt),e(Wt,da),e(m,ka),e(m,Gt),e(Gt,fa),e(m,ha),e(m,$t),e($t,ma),e(m,va),e(m,zt),e(zt,wa),e(m,ya),i(t,Pe,c),i(t,B,c),B.innerHTML=el,i(t,Te,c),i(t,x,c),e(x,Ea),e(x,Vt),e(Vt,ba),e(x,ga),e(x,Bt),e(Bt,_a),e(x,xa),i(t,Ke,c),i(t,J,c),J.innerHTML=sl,i(t,Ae,c),i(t,rt,c),e(rt,Sa),i(t,He,c),i(t,K,c),e(K,Ia),e(K,Jt),e(Jt,ja),e(K,Ca),i(t,Ne,c),i(t,h,c),e(h,Da),e(h,Ut),e(Ut,Oa),e(h,Pa),e(h,Zt),e(Zt,Ta),e(h,Ka),e(h,Qt),e(Qt,Aa),e(h,Ha),e(h,Yt),e(Yt,Na),e(h,Ra),e(h,Xt),e(Xt,La),e(h,Fa),e(h,te),e(te,Ma),e(h,qa),i(t,Re,c),i(t,U,c),U.innerHTML=al,i(t,Le,c),i(t,A,c),e(A,Wa),e(A,ee),e(ee,Ga),e(A,$a),i(t,Fe,c),i(t,S,c),e(S,za),e(S,se),e(se,Va),e(S,Ba),e(S,ae),e(ae,Ja),e(S,Ua),i(t,Me,c),i(t,Z,c),Z.innerHTML=nl,i(t,qe,c),i(t,I,c),e(I,Za),e(I,ne),e(ne,Qa),e(I,Ya),e(I,oe),e(oe,Xa),e(I,tn),i(t,We,c),i(t,Q,c),Q.innerHTML=ol,i(t,Ge,c),i(t,v,c),e(v,en),e(v,le),e(le,sn),e(v,an),e(v,pe),e(pe,nn),e(v,on),e(v,ce),e(ce,ln),e(v,pn),e(v,ie),e(ie,cn),e(v,rn),i(t,$e,c),i(t,j,c),e(j,un),e(j,re),e(re,dn),e(j,kn),e(j,ue),e(ue,fn),e(j,hn),i(t,ze,c),i(t,ut,c),e(ut,mn),i(t,Ve,c),i(t,C,c),e(C,vn),e(C,Y),e(Y,wn),e(C,yn),e(C,X),e(X,En),e(C,bn),i(t,Be,c),i(t,T,c),e(T,tt),e(tt,gn),e(T,_n),e(T,et),e(et,xn),e(T,Sn),i(t,Je,c),i(t,st,c),st.innerHTML=ll,i(t,Ue,c),i(t,dt,c),e(dt,In),i(t,Ze,c),i(t,H,c),e(H,jn),e(H,at),e(at,de),e(de,Cn),e(H,Dn),i(t,Qe,c),i(t,kt,c),e(kt,On),i(t,Ye,c),i(t,ft,c),e(ft,Pn),i(t,Xe,c),i(t,ht,c),e(ht,Tn),i(t,ts,c),i(t,N,c),e(N,Kn),e(N,ke),e(ke,An),e(N,Hn)},p:Rn,i:Rn,o:Rn,d(t){t&&s(y),t&&s(me),t&&s(nt),t&&s(ve),t&&s(ot),t&&s(we),t&&s(M),t&&s(ye),t&&s(P),t&&s(Ee),t&&s(lt),t&&s(be),t&&s(b),t&&s(ge),t&&s(pt),t&&s(_e),t&&s(ct),t&&s(xe),t&&s(g),t&&s(Se),t&&s(E),t&&s(Ie),t&&s(V),t&&s(je),t&&s(k),t&&s(Ce),t&&s(_),t&&s(De),t&&s(it),t&&s(Oe),t&&s(m),t&&s(Pe),t&&s(B),t&&s(Te),t&&s(x),t&&s(Ke),t&&s(J),t&&s(Ae),t&&s(rt),t&&s(He),t&&s(K),t&&s(Ne),t&&s(h),t&&s(Re),t&&s(U),t&&s(Le),t&&s(A),t&&s(Fe),t&&s(S),t&&s(Me),t&&s(Z),t&&s(qe),t&&s(I),t&&s(We),t&&s(Q),t&&s(Ge),t&&s(v),t&&s($e),t&&s(j),t&&s(ze),t&&s(ut),t&&s(Ve),t&&s(C),t&&s(Be),t&&s(T),t&&s(Je),t&&s(st),t&&s(Ue),t&&s(dt),t&&s(Ze),t&&s(H),t&&s(Qe),t&&s(kt),t&&s(Ye),t&&s(ft),t&&s(Xe),t&&s(ht),t&&s(ts),t&&s(N)}}}const yl={title:"Create Your Blog with SvelteKit",date:"2021-04-03T00:00:00.000Z",description:"It's time to rewrite your blog in SvelteKit!"};class El extends fl{constructor(y){super();hl(this,y,null,vl,ml,{})}}export{El as default,yl as metadata};