(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{32:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var s=c(22),a=c.n(s),n=c(7),i=(c(30),c(31),c(32),c(2)),j=c(20),b=c.n(j),r=c(3),l=function(){return Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("h1",{className:"title",children:"Home page"})})})},d=function(){return Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("h1",{className:"title",children:"Page not found"})})})},o=function(e){var t=e.tabs,c=Object(i.q)().userId,s=t.find((function(e){return e.id===c}));return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"tabs is-boxed",children:Object(r.jsx)("ul",{children:t.map((function(e){return Object(r.jsx)("li",{"data-cy":"Tab",className:s&&e.id===s.id?"is-active":"",children:Object(r.jsx)(n.b,{to:"/tabs/".concat(e.id),children:e.title})},e.id)}))})}),Object(r.jsx)("div",{className:"block","data-cy":"TabContent",children:s?s.content:"Please select a tab"})]})},x=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],h=function(){return Object(r.jsx)("div",{className:"section",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("h1",{className:"title",children:"Tabs page"}),Object(r.jsx)(o,{tabs:x})]})})},O=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("nav",{className:"navbar is-light is-fixed-top is-mobile has-shadow","data-cy":"Nav",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"navbar-brand",children:[Object(r.jsx)(n.c,{to:"/",className:function(e){var t=e.isActive;return b()("navbar-item",{"is-active":t})},children:"Home"}),Object(r.jsx)(n.c,{to:"/tabs",className:function(e){var t=e.isActive;return b()("navbar-item",{"is-active":t})},children:"Tabs"})]})})}),Object(r.jsxs)(i.d,{children:[Object(r.jsx)(i.b,{path:"/",element:Object(r.jsx)(l,{})}),Object(r.jsx)(i.b,{path:"tabs",element:Object(r.jsx)(h,{})}),Object(r.jsx)(i.b,{path:"/tabs/:userId",element:Object(r.jsx)(h,{})}),Object(r.jsx)(i.b,{path:"home",element:Object(r.jsx)(i.a,{to:"/"})}),Object(r.jsx)(i.b,{path:"*",element:Object(r.jsx)(d,{})})]})]})},m=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(O,{})})};a.a.render(Object(r.jsx)(n.a,{children:Object(r.jsx)(m,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.a37017d3.chunk.js.map