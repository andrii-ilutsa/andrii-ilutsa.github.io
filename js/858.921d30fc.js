"use strict";(self["webpackChunkLuxeon_web"]=self["webpackChunkLuxeon_web"]||[]).push([[858],{7988:function(t,e,s){s.d(e,{Z:function(){return c}});var a=function(){var t=this,e=t._self._c;return e(t.type,{tag:"component",staticClass:"btn",class:{"icon-btn":!t.text,loading:t.isLoading},attrs:{href:t.href},on:{click:t.clickEvent}},[e("span",{class:"btn-icon "+t.icon}),t.text?e("span",{staticClass:"btn-text"},[t._v(t._s(t.text))]):t._e(),e("div",{staticClass:"loader line-scale-pulse-out"},[e("div"),e("div"),e("div"),e("div"),e("div")])])},n=[],i={props:{icon:String,text:String,isLoading:Boolean,href:String},computed:{type(){return this.href?"a":"button"}},methods:{clickEvent(t){this.$emit("click",t)}}},l=i,r=s(1001),o=(0,r.Z)(l,a,n,!1,null,null,null),c=o.exports},1269:function(t,e,s){s.d(e,{Z:function(){return c}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"page-title"},[e("div",{staticClass:"wrapper"},[e("div",{staticClass:"title"},[t._v(t._s(t.title))]),e("ul",{staticClass:"breadcrumbs"},[e("li",[e("router-link",{attrs:{to:"/"}},[t._v(t._s(t.itemTexts.home[t.lang]))])],1),t._l(t.breadcrumbs,(function(s,a){return e("li",{key:a},[e("span",{staticClass:"fas fa-chevron-right"}),e("router-link",{attrs:{to:t.getHref(a)}},[t._v(t._s(t.getName(s,a)))])],1)}))],2)])])},n=[],i={data(){return{itemTexts:{home:{ua:"Головна",ru:"Главная",en:"Home"},about:{ua:"О нас",ru:"О нас",en:"About"},faq:{ua:"Питання та відповіді",ru:"Вопросы и ответы",en:"FAQ"},contacts:{ua:"Контакти",ru:"Контакты",en:"Contacts"},favorites:{ua:"Обране",ru:"Избранное",en:"Favorites"},cart:{ua:"Кошик",ru:"Корзина",en:"Cart"},categories:{ua:"Категоріі",ru:"Категории",en:"Categories"},"image-storage":{ua:"Сховище зображень",ru:"Хранилище изображений",en:"Image storage"}}}},props:{title:String},computed:{breadcrumbs(){return this.$route.fullPath.split("/").slice(1)},lang(){return this.$store.getters["getSelectedLang"]}},methods:{getHref(t){let e="/",s=this.$route.fullPath.split("/").slice(1);for(let a=0;a<=t;a++)0!=a&&(e+="/"),e+=s[a];return e},getName(t,e){return 0==e?this.itemTexts[t][this.lang]:1==e?this.$store.getters["getCategoryById"](t).name[this.lang]:2==e?this.$store.getters["getProductById"](t).name[this.lang]:void 0}}},l=i,r=s(1001),o=(0,r.Z)(l,a,n,!1,null,null,null),c=o.exports},1858:function(t,e,s){s.r(e),s.d(e,{default:function(){return p}});var a=function(){var t=this,e=t._self._c;return Object.keys(t.pageContent).length?e("div",{staticClass:"contacts-view"},[e("page-title",{attrs:{title:t.pageContent.pageTitle[t.lang]}}),e("div",{staticClass:"wrapper"},[e("div",{staticClass:"c-container"},[e("div",{staticClass:"contacts-list"},[e("h3",{staticClass:"title"},[t._v(t._s(t.pageContent.contactsTitle[t.lang]))]),e("div",{staticClass:"flex-row-12"},[e("div",{staticClass:"flex-col xs-6 md-4"},[e("div",{staticClass:"contact-item"},[e("span",{staticClass:"fas fa-phone-volume"}),e("p",{staticClass:"value"},[t._v(t._s(t.pageContent.phone1.value))]),e("p",{staticClass:"sub-text"},[t._v(t._s(t.pageContent.phone1.description[t.lang]))])])]),e("div",{staticClass:"flex-col xs-6 md-4"},[e("div",{staticClass:"contact-item"},[e("span",{staticClass:"fas fa-phone-volume"}),e("p",{staticClass:"value"},[t._v(t._s(t.pageContent.phone2.value))]),e("p",{staticClass:"sub-text"},[t._v(t._s(t.pageContent.phone2.description[t.lang]))])])]),e("div",{staticClass:"flex-col xs-6 md-4"},[e("div",{staticClass:"contact-item"},[e("span",{staticClass:"fas fa-envelope"}),e("p",{staticClass:"value"},[t._v(t._s(t.pageContent.email.value))]),e("p",{staticClass:"sub-text"},[t._v(t._s(t.pageContent.email.description[t.lang]))])])]),e("div",{staticClass:"flex-col xs-6 md-4"},[e("div",{staticClass:"contact-item"},[e("span",{staticClass:"fas fa-clock"}),e("p",{staticClass:"value",domProps:{innerHTML:t._s(t.pageContent.workTime.value[t.lang])}})])])]),e("div",{staticClass:"description"},[e("p",{domProps:{innerHTML:t._s(t.pageContent.text[t.lang])}})])]),e("div",{staticClass:"contact-form"},[e("h4",{staticClass:"title"},[t._v(t._s(t.pageContent.formTitle[t.lang]))]),e("div",{staticClass:"c-form"},[e("div",{staticClass:"field-item"},[e("label",{attrs:{for:""}},[t._v(t._s(t.pageContent.formFields.name[t.lang]))]),e("input",{attrs:{type:"text",placeholder:t.pageContent.formFields.name[t.lang]}})]),e("div",{staticClass:"field-item"},[e("label",{attrs:{for:""}},[t._v(t._s(t.pageContent.formFields.email[t.lang]))]),e("input",{attrs:{type:"text",placeholder:t.pageContent.formFields.email[t.lang]}})]),e("div",{staticClass:"field-item"},[e("label",{attrs:{for:""}},[t._v(t._s(t.pageContent.formFields.msg[t.lang]))]),e("textarea",{attrs:{type:"text",placeholder:t.pageContent.formFields.msg[t.lang]}})])]),e("div",{staticClass:"actions"},[e("app-button",{attrs:{icon:"fas fa-paper-plane",text:t.pageContent.formBtnText[t.lang]}})],1)])])]),e("div",{staticClass:"map"},[e("iframe",{attrs:{src:t.pageContent.mapURL}})])],1):t._e()},n=[],i=s(1269),l=s(7988),r={data(){return{}},components:{PageTitle:i.Z,AppButton:l.Z},computed:{lang(){return this.$store.getters["getSelectedLang"]},pageContent(){return this.$store.getters["getContactsPageContent"]}}},o=r,c=s(1001),u=(0,c.Z)(o,a,n,!1,null,null,null),p=u.exports}}]);
//# sourceMappingURL=858.921d30fc.js.map