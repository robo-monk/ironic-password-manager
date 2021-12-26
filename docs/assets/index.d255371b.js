import{W as ee,v as G,c as I,S as M,i as E,s as F,e as d,t as v,a as S,b as te,d as W,f as p,g as O,n as J,h as C,j as Y,m as D,k,l as N,o as K,p as ne,q as oe,r as re}from"./vendor.831f0b6c.js";const se=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function o(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(r){if(r.ep)return;r.ep=!0;const a=o(r);fetch(r.href,a)}};se();const ie="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDlGNTA0MmJjNzk4RjQxOEJmNkMwZGNiMEExMjU5Y2FEM0RCOTRENzgiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NDA0NDg4MjM0NjYsIm5hbWUiOiJpcm9uaWMtcGFzc3dvcmQtbWFuYWdlciJ9.P4GyOS9rL29eRYQvmjocO3nZKcm9VKJO5fOPYgMj_mA",P=new ee({token:ie});function ce(n,e){return n.lastModifiedDate=new Date,n.name=e,n}async function ae(n,e){const o=[];for await(const t of P.list())(!e||e(t))&&(o.push(t),n&&n(t,o));return o}async function le(n,e=G()){console.log("[web3.storage] > putting",n,"as",e);const o=JSON.stringify(n),t=new Blob([o],{type:"application/json"});console.log("[web3.storage] > blob",t),console.log("[web3.storage] > uploading to IPFS..."),console.time("[web3.storage] > uploading to IPFS...");const r=await P.put([ce(t,e)],{name:e,maxRetries:3});console.timeEnd("[web3.storage] > uploading to IPFS..."),console.log("[web3.storage] > cid",r),console.log(`https://ipfs.io/ipfs/${r}/${e}`)}async function Q(n){const e=await P.get(n);return e.ok?await e.files():[]}async function ue(n,e=null){console.log("[web3.storage] > getting",n,"/",e),console.time("[web3.storage] > quering IPFS...");const o=await Q(n);console.timeEnd("[web3.storage] > quering IPFS..."),console.log("[web3.storage] > got",o.length,"files");const t=e===null?o[0]:o.find(l=>l.name===e),r=t?await t.text():null;let a=r;try{a=JSON.parse(r)}catch{console.warn("[web3.storage] > file is not a valid JSON")}return console.log("[web3.storage] > received:",a),a}var fe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",list:ae,put:le,getFiles:Q,get:ue});function T(n){return I.exports.SHA512(n).toString()}function U(n,e,o=3){let t=I.exports.AES.encrypt(n,e).toString();return o>0?U(t,e,o-1):t}function Z(n,e,o=3){let t=I.exports.AES.decrypt(n,e).toString(I.exports.enc.Utf8);return o>0?Z(t,e,o-1):t}function ge(n,e,o=3){return U(JSON.stringify(n),e,o)}function pe(n,e,o=3){let t={};try{t=JSON.parse(Z(n,e,o))}catch{console.warn("not a json obj")}return t}const $=localStorage,L="Ironic.",X="123";function B(){return $.getItem(L)?pe($.getItem(L),X,0):{}}function me(n){return $.setItem(L,ge(n,X,0))}function de(n){return B()[n]}function he(n,e){me(Object.assign(B(),{[e]:n}))}const _={replaceWith:"[$dot$]",replacee:"."};function z(...n){return n.map(e=>e.replaceAll(_.replacee,_.replaceWith)).join(_.replacee)}function we(n){return n.split(_.replacee).map(e=>e.replaceAll(_.replaceWith,_.replacee))}class b{constructor(e,o){this.name=e,this.description=o}static fromObj(e){return new b(e.name,e.description)}}function ve(n){let e,o,t=n[0].name+"",r,a,l,f=n[0].description+"",c;return{c(){e=d("div"),o=d("h2"),r=v(t),a=S(),l=d("p"),c=v(f),te(e,"class","service-wrapper svelte-1kxq0bf")},m(i,s){W(i,e,s),p(e,o),p(o,r),p(e,a),p(e,l),p(l,c)},p(i,[s]){s&1&&t!==(t=i[0].name+"")&&O(r,t),s&1&&f!==(f=i[0].description+"")&&O(c,f)},i:J,o:J,d(i){i&&C(e)}}}function be(n,e,o){let{service:t=new b}=e;return n.$$set=r=>{"service"in r&&o(0,t=r.service)},[t]}class _e extends M{constructor(e){super();E(this,e,be,ve,F,{service:0})}}function ye(n){let e,o,t=n[0].name+"",r,a,l,f,c,i,s=n[0].pk+"",g,m,u,h,R,x,j=n[0].sk+"",A;return{c(){e=d("div"),o=d("h2"),r=v(t),a=S(),l=d("p"),f=d("strong"),f.textContent="public key ",c=v(":  "),i=d("span"),g=v(s),m=S(),u=d("p"),h=d("strong"),h.textContent="secret key ",R=v(":  "),x=d("span"),A=v(j)},m(w,y){W(w,e,y),p(e,o),p(o,r),p(e,a),p(e,l),p(l,f),p(l,c),p(l,i),p(i,g),p(e,m),p(e,u),p(u,h),p(u,R),p(u,x),p(x,A)},p(w,[y]){y&1&&t!==(t=w[0].name+"")&&O(r,t),y&1&&s!==(s=w[0].pk+"")&&O(g,s),y&1&&j!==(j=w[0].sk+"")&&O(A,j)},i:J,o:J,d(w){w&&C(e)}}}function Se(n,e,o){let{account:t}=e;return n.$$set=r=>{"account"in r&&o(0,t=r.account)},[t]}class Oe extends M{constructor(e){super();E(this,e,Se,ye,F,{account:0})}}class q{constructor(e,o,t){this.name=e,this.sk=o,this.pk=t}sign(e){return T(z(this.sk,this.name,e))}confirm(e,o){return T(z(this.sk,this.name,o))===e}static fromObj(e){return new q(e.name,e.sk,e.pk)}}function V(n,e,o){const t=n.slice();return t[5]=e[o],t}function H(n){let e,o;return e=new _e({props:{service:n[5]}}),{c(){Y(e.$$.fragment)},m(t,r){D(e,t,r),o=!0},p(t,r){const a={};r&1&&(a.service=t[5]),e.$set(a)},i(t){o||(k(e.$$.fragment,t),o=!0)},o(t){N(e.$$.fragment,t),o=!1},d(t){K(e,t)}}}function ke(n){let e,o,t,r,a,l;r=new Oe({props:{account:n[1]}});let f=n[0],c=[];for(let s=0;s<f.length;s+=1)c[s]=H(V(n,f,s));const i=s=>N(c[s],1,1,()=>{c[s]=null});return{c(){e=d("main"),o=d("h1"),o.textContent="IPM",t=S(),Y(r.$$.fragment),a=S();for(let s=0;s<c.length;s+=1)c[s].c()},m(s,g){W(s,e,g),p(e,o),p(e,t),D(r,e,null),p(e,a);for(let m=0;m<c.length;m+=1)c[m].m(e,null);l=!0},p(s,[g]){const m={};if(g&2&&(m.account=s[1]),r.$set(m),g&1){f=s[0];let u;for(u=0;u<f.length;u+=1){const h=V(s,f,u);c[u]?(c[u].p(h,g),k(c[u],1)):(c[u]=H(h),c[u].c(),k(c[u],1),c[u].m(e,null))}for(re(),u=f.length;u<c.length;u+=1)i(u);ne()}},i(s){if(!l){k(r.$$.fragment,s);for(let g=0;g<f.length;g+=1)k(c[g]);l=!0}},o(s){N(r.$$.fragment,s),c=c.filter(Boolean);for(let g=0;g<c.length;g+=1)N(c[g]);l=!1},d(s){s&&C(e),K(r),oe(c,s)}}}function je(n,e,o){var c;window.web3=Object.assign(window.web3||{},{storage:fe});let{state:t=de("state")||{}}=e;(async()=>{web3.storage.list(i=>{console.log(i)},i=>i.name.length>10)})();async function r(i){return await web3.storage.list(s=>{console.log(s)},s=>{let[g,m,u]=we(s.name);return m===i.name&&i.confirm(u,g)})}async function a(i,s){var h;if(!s)return new Error("no account");((h=s.services)==null?void 0:h.includes(i.name))&&prompt(`A service named ${i.name} is already in your account!`);let g=G(),m=z(g,s.name,s.sign(g));return await web3.storage.put(i,m)}let{services:l=((c=t==null?void 0:t.services)==null?void 0:c.map(i=>b.fromObj(i)))||[new b("Twitter","warzone"),new b("Facebook","boomer memes"),new b("Github","microsoft slaves")]}=e,{account:f=q.fromObj((t==null?void 0:t.account)||{name:"robomonk",sk:"0x0850qjasdf092r9834ofa9df",pk:"0x0948520-853092842-204849"})}=e;return window.storeService=()=>{a(l[1],f)},window.getServices=async()=>{let i=await r(f);console.log(i)},n.$$set=i=>{"state"in i&&o(2,t=i.state),"services"in i&&o(0,l=i.services),"account"in i&&o(1,f=i.account)},n.$$.update=()=>{n.$$.dirty&3&&he({services:l,account:f},"state")},[l,f,t]}class Ie extends M{constructor(e){super();E(this,e,je,ke,F,{state:2,services:0,account:1})}}new Ie({target:document.getElementById("app")});