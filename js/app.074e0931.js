(function(){"use strict";var n={364:function(n,t,e){var o=e(963),a=e(252),i=e.p+"img/illustration-box-desktop.aec62988.svg";const r=(0,a._)("img",{class:"img-box",src:i,alt:""},null,-1);function s(n,t,e,o,i,s){const c=(0,a.up)("main-section"),d=(0,a.up)("footer-section");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(c),r,(0,a.Wm)(d)],64)}const c=n=>((0,a.dD)("data-v-32122ad2"),n=n(),(0,a.Cn)(),n),d={class:"attribution"},l=c((()=>(0,a._)("a",{href:"https://www.frontendmentor.io?ref=challenge",target:"_blank"},"Frontend Mentor",-1))),u=c((()=>(0,a._)("a",{href:"#"},"Yonnie Yang",-1)));function m(n,t,e,o,i,r){return(0,a.wg)(),(0,a.iD)("div",d,[(0,a.Uk)(" Challenge by "),l,(0,a.Uk)(". Coded by "),u,(0,a.Uk)(". ")])}var p={data(){return{}}},g=e(744);const f=(0,g.Z)(p,[["render",m],["__scopeId","data-v-32122ad2"]]);var v=f,w={components:{FooterSection:v},data(){return{faq:[{id:1,Question:"How many team members can I invite?",Answer:"You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan. ",Show:!1},{id:2,Question:"What is the maximum file upload size?",Answer:"No more than 2GB. All files in your account must fit your allotted storage space. ",Show:!1},{id:3,Question:"How do I reset my password?",Answer:"Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you. ",Show:!1},{id:4,Question:"Can I cancel my subscription?",Answer:"Yes! Send us a message and we’ll process your request no questions asked. Do you provide additional support? Chat and email support is available 24/7. Phone lines are open during normal business hours. ",Show:!1}]}},provide(){return{faq:this.faq}}};const h=(0,g.Z)(w,[["render",s]]);var b=h;const _={class:"main-section"};function q(n,t,e,o,i,r){const s=(0,a.up)("img-part"),c=(0,a.up)("data-part");return(0,a.wg)(),(0,a.iD)("section",_,[(0,a.Wm)(s),(0,a.Wm)(c)])}var y=e.p+"img/bg-pattern-desktop.f708e173.svg",O=e.p+"img/illustration-woman-online-desktop.e99d2ea3.svg",k=e.p+"img/bg-pattern-mobile.734d17d1.svg",C=e.p+"img/illustration-woman-online-mobile.4efb9984.svg";const I=(0,a.uE)('<div class="img-container" data-v-217222d0><img class="bg-pattern" src="'+y+'" alt="" data-v-217222d0><img class="img-woman" src="'+O+'" alt="" data-v-217222d0></div><div class="img-mobile-container" data-v-217222d0><img class="bg-pattern-moibile" src="'+k+'" alt="" data-v-217222d0><img class="img-woman-mobile" src="'+C+'" alt="" data-v-217222d0></div>',2);function D(n,t,e,o,a,i){return I}var S={};const x=(0,g.Z)(S,[["render",D],["__scopeId","data-v-217222d0"]]);var F=x;const j=n=>((0,a.dD)("data-v-c4c5f722"),n=n(),(0,a.Cn)(),n),A={class:"data-container"},P=j((()=>(0,a._)("h2",null,"FAQ",-1))),Q={class:"data-list"};function Y(n,t,e,o,i,r){const s=(0,a.up)("data-item");return(0,a.wg)(),(0,a.iD)("div",A,[P,(0,a._)("ul",Q,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.newFaq,(n=>((0,a.wg)(),(0,a.j4)(s,{class:"data-item",item:n,key:n.id,faq:i.newFaq,onToggleOpen:r.toggleOpen},null,8,["item","faq","onToggleOpen"])))),128))])])}var Z=e(577),T=e.p+"img/icon-arrow-down.723d8924.svg";const W=n=>((0,a.dD)("data-v-45511db2"),n=n(),(0,a.Cn)(),n),H=["id"],z={class:"question"},U={class:"aarow-container"},E=W((()=>(0,a._)("hr",null,null,-1)));function B(n,t,e,o,i,r){return(0,a.wg)(),(0,a.iD)("li",{id:i.id,onClick:t[0]||(t[0]=(...n)=>r.getIndex&&r.getIndex(...n))},[(0,a._)("div",z,[(0,a._)("p",{class:(0,Z.C_)(["question-p",this.item.Show?"open":""])},(0,Z.zw)(i.question),3),(0,a._)("span",U,[(0,a._)("img",{class:(0,Z.C_)(["aarow",this.item.Show?"active":""]),src:T,alt:"aarow"},null,2)])]),(0,a._)("p",{class:(0,Z.C_)(["answer",this.item.Show?"open":""])},(0,Z.zw)(i.answer),3),E],8,H)}var G={props:["item","faq","toggleOpen"],emits:["toggleOpen"],data(){return{question:this.item.Question,answer:this.item.Answer,id:this.item.id}},methods:{getIndex(){this.$emit("toggleOpen",this.id)}}};const K=(0,g.Z)(G,[["render",B],["__scopeId","data-v-45511db2"]]);var M=K,N={components:{DataItem:M},inject:["faq"],data(){return{newFaq:this.faq}},methods:{toggleOpen(n){this.newFaq=this.faq.map((t=>(t.id===n?t.Show=!t.Show:t.Show=!1,t)))}}};const $=(0,g.Z)(N,[["render",Y],["__scopeId","data-v-c4c5f722"]]);var J=$,L={components:{ImgPart:F,DataPart:J}};const R=(0,g.Z)(L,[["render",q],["__scopeId","data-v-1543d09a"]]);var V=R;const X=(0,o.ri)(b);X.component("main-section",V),X.mount("#app")}},t={};function e(o){var a=t[o];if(void 0!==a)return a.exports;var i=t[o]={exports:{}};return n[o](i,i.exports,e),i.exports}e.m=n,function(){var n=[];e.O=function(t,o,a,i){if(!o){var r=1/0;for(l=0;l<n.length;l++){o=n[l][0],a=n[l][1],i=n[l][2];for(var s=!0,c=0;c<o.length;c++)(!1&i||r>=i)&&Object.keys(e.O).every((function(n){return e.O[n](o[c])}))?o.splice(c--,1):(s=!1,i<r&&(r=i));if(s){n.splice(l--,1);var d=a();void 0!==d&&(t=d)}}return t}i=i||0;for(var l=n.length;l>0&&n[l-1][2]>i;l--)n[l]=n[l-1];n[l]=[o,a,i]}}(),function(){e.d=function(n,t){for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){e.p="/faq-accordion-card/"}(),function(){var n={143:0};e.O.j=function(t){return 0===n[t]};var t=function(t,o){var a,i,r=o[0],s=o[1],c=o[2],d=0;if(r.some((function(t){return 0!==n[t]}))){for(a in s)e.o(s,a)&&(e.m[a]=s[a]);if(c)var l=c(e)}for(t&&t(o);d<r.length;d++)i=r[d],e.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return e.O(l)},o=self["webpackChunkfaq_accordion_card_main"]=self["webpackChunkfaq_accordion_card_main"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=e.O(void 0,[998],(function(){return e(364)}));o=e.O(o)})();
//# sourceMappingURL=app.074e0931.js.map