if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const l=e=>i(e,t),c={module:{uri:t},exports:o,require:l};s[t]=Promise.all(n.map((e=>c[e]||l(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-10500df8.css",revision:null},{url:"assets/main-d1362da6.js",revision:null},{url:"assets/style-96a942c1.css",revision:null},{url:"docs.html",revision:"0fc35761c25e6f0833c7500ad3e39dd1"},{url:"index.html",revision:"269490c47caaa302328ba09e098ad161"},{url:"registerSW.js",revision:"1dbed3e3184ea5738361c10fe6e4c218"},{url:"manifest.webmanifest",revision:"e276eff7db77928a89f2070cac28597b"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));