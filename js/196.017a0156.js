"use strict";(self["webpackChunkLuxeon_web"]=self["webpackChunkLuxeon_web"]||[]).push([[196],{1269:function(t,e,a){a.d(e,{Z:function(){return u}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"page-title"},[e("div",{staticClass:"wrapper"},[e("div",{staticClass:"title"},[t._v(t._s(t.title))]),e("ul",{staticClass:"breadcrumbs"},[e("li",[e("router-link",{attrs:{to:"/"}},[t._v(t._s(t.itemTexts.home[t.lang]))])],1),t._l(t.breadcrumbs,(function(a,s){return e("li",{key:s},[e("span",{staticClass:"fas fa-chevron-right"}),e("router-link",{attrs:{to:t.getHref(s)}},[t._v(t._s(t.getName(a,s)))])],1)}))],2)])])},r=[],i={data(){return{itemTexts:{home:{ua:"Головна",ru:"Главная",en:"Home"},about:{ua:"О нас",ru:"О нас",en:"About"},faq:{ua:"Питання та відповіді",ru:"Вопросы и ответы",en:"FAQ"},contacts:{ua:"Контакти",ru:"Контакты",en:"Contacts"},favorites:{ua:"Обране",ru:"Избранное",en:"Favorites"},cart:{ua:"Кошик",ru:"Корзина",en:"Cart"},categories:{ua:"Категоріі",ru:"Категории",en:"Categories"},"image-storage":{ua:"Сховище зображень",ru:"Хранилище изображений",en:"Image storage"}}}},props:{title:String},computed:{breadcrumbs(){return this.$route.fullPath.split("/").slice(1)},lang(){return this.$store.getters["getSelectedLang"]}},methods:{getHref(t){let e="/",a=this.$route.fullPath.split("/").slice(1);for(let s=0;s<=t;s++)0!=s&&(e+="/"),e+=a[s];return e},getName(t,e){return 0==e?this.itemTexts[t][this.lang]:1==e?this.$store.getters["getCategoryById"](t).name[this.lang]:2==e?this.$store.getters["getProductById"](t).name[this.lang]:void 0}}},n=i,l=a(1001),o=(0,l.Z)(n,s,r,!1,null,null,null),u=o.exports},4196:function(t,e,a){a.r(e),a.d(e,{default:function(){return c}});var s=function(){var t=this,e=t._self._c;return t.imageStorage.length?e("div",{staticClass:"image-storage-view"},[e("page-title",{attrs:{title:t.pageContent.pageTitle[t.lang]}}),e("div",{staticClass:"wrapper"},[e("div",{staticClass:"image-list-section"},t._l(t.imageStorage,(function(a,s){return e("div",{key:s,staticClass:"image-item",class:{active:t.selectedCategory==s}},[e("div",{staticClass:"item-head",on:{click:function(e){t.selectedCategory==s?t.selectedCategory=-1:t.selectedCategory=s}}},[e("h4",{staticClass:"title"},[t._v(t._s(a.name+" ("+a.list.length+")"))]),t._m(0,!0)]),t.selectedCategory==s?e("div",{staticClass:"item-body"},[e("table",[e("tbody",t._l(a.list,(function(a,s){return e("tr",{key:s},[e("td",[e("img",{attrs:{src:a.url}})]),e("td",[e("p",{staticClass:"name"},[t._v(t._s(a.name))]),e("a",{attrs:{href:a.url,target:"_blank"}},[t._v(t._s(a.url))])]),e("td",[e("button",{on:{click:function(e){return t.toClipboard(a.url)}}},[e("span",{staticClass:"fas fa-copy"})])])])})),0)])]):t._e()])})),0)])],1):t._e()},r=[function(){var t=this,e=t._self._c;return e("button",{staticClass:"arrow"},[e("span",{staticClass:"fas fa-chevron-down"})])}],i=a(1269),n={data(){return{selectedCategory:-1,pageContent:{pageTitle:{ua:"Сховище зображень",ru:"Хранилище изображений",en:"Image storage"}}}},components:{PageTitle:i.Z},computed:{lang(){return this.$store.getters["getSelectedLang"]},imageStorage(){return this.$store.getters["getImageStorage"]}},methods:{toClipboard(t){let e=event.target;e.classList.add("active"),e.parentNode.classList.add("active"),setTimeout((()=>{e.classList.remove("active"),e.parentNode.classList.remove("active")}),2e3),navigator.clipboard&&navigator.clipboard.writeText(t).then((()=>{}))}},created(){this.$store.dispatch("fetchImageStorage")}},l=n,o=a(1001),u=(0,o.Z)(l,s,r,!1,null,null,null),c=u.exports}}]);
//# sourceMappingURL=196.017a0156.js.map