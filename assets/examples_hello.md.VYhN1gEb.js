import{a as h,Y as x,u as f,_ as b}from"./chunks/index.vue_vue_type_script_setup_true_lang.CjTB_519.js";import{u as v,a as y,p as S,d as N,i as O}from"./chunks/useImmer.DoxatzoQ.js";import{x as C,z as D,h as m,d as g,o as d,c as i,l as r,m as c,t as E,D as R,I as p,w as u,a as M}from"./chunks/framework.B_uwAT6x.js";function k(t){const s=h(),e=v(t,x),[n,o]=y(e.toJSON());C(n,l=>{s.transact(()=>{S(e,l)})});const a=()=>{o(N(e.toJSON()))};return e.observeDeep(a),D(()=>{e.unobserve(a)}),[m(()=>n.value),o]}const w="YJS_VUE___RECORD";function J(t){const[s,e]=k(w),n=m(()=>s.value[t]);function o(a){e(l=>{const _=O(a)?a(l[t]):a;l[t]=_})}return[n,o]}const P=["value"],V=g({__name:"index",setup(t){f("counter-example-yjs-vue-hello",{signaling:["wss://yjs-server.cccboy.com"]});const[s,e]=J("SHARED_NAME");return(n,o)=>(d(),i("div",null,[r("input",{style:{border:"1px solid black"},value:c(s),placeholder:"please enter",onInput:o[0]||(o[0]=a=>{const l=a.target;c(e)(l.value)})},null,40,P),r("p",null,"Hello, "+E(c(s)),1)]))}}),Y=r("h1",{id:"base-example",tabindex:"-1"},[M("base example "),r("a",{class:"header-anchor",href:"#base-example","aria-label":'Permalink to "base example"'},"​")],-1),T=JSON.parse('{"title":"base example","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"examples/hello.md","filePath":"examples/hello.md"}'),j={name:"examples/hello.md"},U=Object.assign(j,{setup(t){return(s,e)=>{const n=R("ClientOnly");return d(),i("div",null,[Y,p(n,null,{default:u(()=>[p(b,null,{default:u(()=>[p(V)]),_:1})]),_:1})])}}});export{T as __pageData,U as default};