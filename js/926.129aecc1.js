"use strict";(self["webpackChunkLuxeon_web"]=self["webpackChunkLuxeon_web"]||[]).push([[926],{4728:function(t,e,s){s.d(e,{Z:function(){return u}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"page-title"},[e("div",{staticClass:"wrapper"},[e("div",{staticClass:"title"},[t._v(t._s(t.title))]),e("ul",{staticClass:"breadcrumbs"},[e("li",[e("router-link",{attrs:{to:"/"}},[t._v(t._s(t.itemTexts.home[t.lang]))])],1),t._l(t.breadcrumbs,(function(s,a){return e("li",{key:a},[e("span",{staticClass:"fas fa-chevron-right"}),e("router-link",{attrs:{to:t.getHref(a)}},[t._v(t._s(t.getName(s,a)))])],1)}))],2)])])},n=[],r={data(){return{itemTexts:{home:{ua:"Головна",ru:"Главная",en:"Home"},about:{ua:"О нас",ru:"О нас",en:"About"},faq:{ua:"Питання та відповіді",ru:"Вопросы и ответы",en:"FAQ"},contacts:{ua:"Контакти",ru:"Контакты",en:"Contacts"},favorites:{ua:"Обране",ru:"Избранное",en:"Favorites"},cart:{ua:"Кошик",ru:"Корзина",en:"Cart"},categories:{ua:"Категоріі",ru:"Категории",en:"Categories"}}}},props:{title:String},computed:{breadcrumbs(){return this.$route.fullPath.split("/").slice(1)},lang(){return this.$store.getters["getSelectedLang"]}},methods:{getHref(t){let e="/",s=this.$route.fullPath.split("/").slice(1);for(let a=0;a<=t;a++)0!=a&&(e+="/"),e+=s[a];return e},getName(t,e){return 0==e?this.itemTexts[t][this.lang]:1==e?this.$store.getters["getCategoryById"](t).name[this.lang]:2==e?this.$store.getters["getProductById"](t).name[this.lang]:void 0}}},l=r,i=s(1001),o=(0,i.Z)(l,a,n,!1,null,null,null),u=o.exports},9851:function(t,e,s){s.d(e,{Z:function(){return u}});var a=function(){var t=this,e=t._self._c;return Object.keys(t.generalContent).length?e("div",{staticClass:"questions-form"},[e("div",{staticClass:"wrapper"},[e("div",{staticClass:"qf-container"},[e("h2",{staticClass:"title"},[t._v(t._s(t.generalContent.callbackForm.title[t.lang]))]),e("p",{staticClass:"text",domProps:{innerHTML:t._s(t.generalContent.callbackForm.text[t.lang])}}),e("div",{staticClass:"qf-field"},[e("input",{attrs:{type:"text",placeholder:t.generalContent.callbackForm.placeholder[t.lang]}}),t._m(0)])])])]):t._e()},n=[function(){var t=this,e=t._self._c;return e("button",{staticClass:"send"},[e("span",{staticClass:"fas fa-arrow-circle-right"})])}],r={props:{category:Object},computed:{generalContent(){return this.$store.getters["getGeneralPageContent"]},lang(){return this.$store.getters["getSelectedLang"]}}},l=r,i=s(1001),o=(0,i.Z)(l,a,n,!1,null,null,null),u=o.exports},7926:function(t,e,s){s.r(e),s.d(e,{default:function(){return g}});var a=function(){var t=this,e=t._self._c;return Object.keys(t.pageContent).length?e("div",{staticClass:"faq-view"},[e("page-title",{attrs:{title:t.pageContent.pageTitle[t.lang]}}),e("div",{staticClass:"wrapper"},[e("div",{staticClass:"faq-list"},t._l(t.pageContent.list,(function(s,a){return e("div",{key:a,staticClass:"faq-item",class:{active:t.selectedQuestion==a}},[e("div",{staticClass:"item-head",on:{click:function(e){t.selectedQuestion=a}}},[e("h4",{staticClass:"title"},[t._v(t._s(s.title[t.lang]))]),t._m(0,!0)]),t.selectedQuestion==a?e("div",{staticClass:"item-body"},[e("p",{staticClass:"text"},[t._v(t._s(s.text[t.lang]))])]):t._e()])})),0)]),e("questions-form")],1):t._e()},n=[function(){var t=this,e=t._self._c;return e("button",{staticClass:"arrow"},[e("span",{staticClass:"fas fa-chevron-down"})])}],r=s(9851),l=s(4728),i={data(){return{selectedQuestion:0}},components:{QuestionsForm:r.Z,PageTitle:l.Z},computed:{lang(){return this.$store.getters["getSelectedLang"]},pageContent(){return this.$store.getters["getFAQPageContent"]}}},o=i,u=s(1001),c=(0,u.Z)(o,a,n,!1,null,null,null),g=c.exports}}]);
//# sourceMappingURL=926.129aecc1.js.map