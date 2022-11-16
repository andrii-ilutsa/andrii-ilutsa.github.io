"use strict";(self["webpackChunkLuxeon_web"]=self["webpackChunkLuxeon_web"]||[]).push([[94],{7988:function(t,e,s){s.d(e,{Z:function(){return c}});var a=function(){var t=this,e=t._self._c;return e(t.type,{tag:"component",staticClass:"btn",class:{"icon-btn":!t.text,loading:t.isLoading},attrs:{href:t.href},on:{click:t.clickEvent}},[e("span",{class:"btn-icon "+t.icon}),t.text?e("span",{staticClass:"btn-text"},[t._v(t._s(t.text))]):t._e(),e("div",{staticClass:"loader line-scale-pulse-out"},[e("div"),e("div"),e("div"),e("div"),e("div")])])},i=[],r={props:{icon:String,text:String,isLoading:Boolean,href:String},computed:{type(){return this.href?"a":"button"}},methods:{clickEvent(t){this.$emit("click",t)}}},n=r,l=s(1001),o=(0,l.Z)(n,a,i,!1,null,null,null),c=o.exports},1269:function(t,e,s){s.d(e,{Z:function(){return c}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"page-title"},[e("div",{staticClass:"wrapper"},[e("div",{staticClass:"title"},[t._v(t._s(t.title))]),e("ul",{staticClass:"breadcrumbs"},[e("li",[e("router-link",{attrs:{to:"/"}},[t._v(t._s(t.itemTexts.home[t.lang]))])],1),t._l(t.breadcrumbs,(function(s,a){return e("li",{key:a},[e("span",{staticClass:"fas fa-chevron-right"}),e("router-link",{attrs:{to:t.getHref(a)}},[t._v(t._s(t.getName(s,a)))])],1)}))],2)])])},i=[],r={data(){return{itemTexts:{home:{ua:"Головна",ru:"Главная",en:"Home"},about:{ua:"О нас",ru:"О нас",en:"About"},faq:{ua:"Питання та відповіді",ru:"Вопросы и ответы",en:"FAQ"},contacts:{ua:"Контакти",ru:"Контакты",en:"Contacts"},favorites:{ua:"Обране",ru:"Избранное",en:"Favorites"},cart:{ua:"Кошик",ru:"Корзина",en:"Cart"},categories:{ua:"Категоріі",ru:"Категории",en:"Categories"},"image-storage":{ua:"Сховище зображень",ru:"Хранилище изображений",en:"Image storage"}}}},props:{title:String},computed:{breadcrumbs(){return this.$route.fullPath.split("/").slice(1)},lang(){return this.$store.getters["getSelectedLang"]}},methods:{getHref(t){let e="/",s=this.$route.fullPath.split("/").slice(1);for(let a=0;a<=t;a++)0!=a&&(e+="/"),e+=s[a];return e},getName(t,e){return 0==e?this.itemTexts[t][this.lang]:1==e?this.$store.getters["getCategoryById"](t).name[this.lang]:2==e?this.$store.getters["getProductById"](t).name[this.lang]:void 0}}},n=r,l=s(1001),o=(0,l.Z)(n,a,i,!1,null,null,null),c=o.exports},547:function(t,e,s){s.d(e,{Z:function(){return c}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"product-card"},[t.isFavoritesCard?e("button",{staticClass:"favorites",on:{click:function(e){return t.removeFromFavorites()}}},[e("span",{staticClass:"fas fa-times"})]):t._e(),e("div",{staticClass:"image"},[e("img",{attrs:{src:t.product.image}})]),e("div",{staticClass:"card-title"},[t._v(t._s(t.product.name[t.lang]))]),e("div",{staticClass:"card-actions"},[e("router-link",{staticClass:"more",attrs:{to:{name:"product",params:{categoryId:t.product.category,productId:t.product.code}}}},[e("span",{staticClass:"text"},[t._v(t._s(t.buttonText[t.lang]))]),e("span",{staticClass:"fas fa-arrow-right"})])],1),e("p",{staticClass:"card-price"},[t._v(t._s(t.product.cost)+" UAH")])])},i=[],r={data(){return{buttonText:{ua:"Перейти",ru:"Перейти",en:"See more"}}},props:{product:Object,index:Number,isFavoritesCard:Boolean},computed:{lang(){return this.$store.getters["getSelectedLang"]}},methods:{removeFromFavorites(){this.$store.dispatch("removeProductFromFavorites",this.index)}}},n=r,l=s(1001),o=(0,l.Z)(n,a,i,!1,null,null,null),c=o.exports},9851:function(t,e,s){s.d(e,{Z:function(){return c}});var a=function(){var t=this,e=t._self._c;return Object.keys(t.generalContent).length?e("div",{staticClass:"questions-form"},[e("div",{staticClass:"wrapper"},[e("div",{staticClass:"qf-container"},[e("h2",{staticClass:"title"},[t._v(t._s(t.generalContent.callbackForm.title[t.lang]))]),e("p",{staticClass:"text",domProps:{innerHTML:t._s(t.generalContent.callbackForm.text[t.lang])}}),e("div",{staticClass:"qf-field"},[e("input",{attrs:{type:"text",placeholder:t.generalContent.callbackForm.placeholder[t.lang]}}),t._m(0)])])])]):t._e()},i=[function(){var t=this,e=t._self._c;return e("button",{staticClass:"send"},[e("span",{staticClass:"fas fa-arrow-circle-right"})])}],r={props:{category:Object},computed:{generalContent(){return this.$store.getters["getGeneralPageContent"]},lang(){return this.$store.getters["getSelectedLang"]}}},n=r,l=s(1001),o=(0,l.Z)(n,a,i,!1,null,null,null),c=o.exports},4094:function(t,e,s){s.r(e),s.d(e,{default:function(){return _}});var a=function(){var t=this,e=t._self._c;return t.products&&t.categoryInfo&&t.generalContent?e("div",{staticClass:"products-view"},[e("page-title",{attrs:{title:t.categoryInfo.name[t.lang]}}),e("div",{staticClass:"wrapper"},[e("div",{staticClass:"products-view-head"},[e("div",{staticClass:"cat-search-field"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],attrs:{type:"text",placeholder:t.generalContent.headerSearchFieldText[t.lang]},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}})]),e("div",{staticClass:"actions hidden-xs visible-sm"},[e("button",{staticClass:"action",class:{active:"list"===t.productsListType},on:{click:function(e){t.productsListType="list"}}},[e("span",{staticClass:"fas fa-list"})]),e("button",{staticClass:"action",class:{active:"grid"===t.productsListType},on:{click:function(e){t.productsListType="grid"}}},[e("span",{staticClass:"fas fa-grip-vertical"})])])]),e("div",{staticClass:"products-section"},[e("div",{staticClass:"filters-section",class:{active:t.isFilterWindowOpen}},[e("app-button",{staticClass:"close-btn",attrs:{icon:"fas fa-times"},on:{click:function(e){return t.closeFilterWindow()}}}),t.selectedFiltersInfo.length?e("div",{staticClass:"applied-filters"},[e("h3",{staticClass:"title"},[t._v("Примененные фильтры")]),e("div",{staticClass:"list"},t._l(t.selectedFiltersInfo,(function(s,a){return e("div",{key:a,staticClass:"item"},[e("span",{staticClass:"value"},[t._v(t._s(s.name[t.lang]))]),e("button",{staticClass:"close",on:{click:function(e){return t.filterTrigger(s)}}},[e("span",{staticClass:"fas fa-times"})])])})),0)]):t._e(),e("div",{staticClass:"filters-list"},[e("h4",{staticClass:"title"},[t._v("Фильтры")]),e("div",{staticClass:"list"},t._l(t.categoryInfo.list,(function(s,a){return e("div",{key:a,staticClass:"filter-box active"},[e("div",{staticClass:"filter-box-head",on:{click:t.toggleFilterBox}},[e("div",{staticClass:"fbh-title"},[t._v(t._s(s.name[t.lang]))]),t._m(0,!0)]),e("div",{staticClass:"filter-box-body"},t._l(s.list,(function(s,a){return e("div",{key:a,staticClass:"filter"},[e("input",{attrs:{type:"checkbox",id:"f"+s.id},on:{input:function(e){return t.filterTrigger(s)}}}),e("label",{attrs:{for:"f"+s.id}},[t._v(t._s(s.name[t.lang]))])])})),0)])})),0)])],1),e("div",{staticClass:"products-list"},[e("div",{staticClass:"filter-mobile-button"},[e("app-button",{staticClass:"block",attrs:{text:"Фильтры",icon:"fas fa-filter"},on:{click:function(e){return t.openFilterWindow()}}})],1),t.filteredProducts.length?["grid"===t.productsListType?e("div",{staticClass:"flex-row-12"},t._l(t.filteredProducts,(function(t,s){return e("div",{key:s,staticClass:"flex-col xs-12 sm-6"},[e("product-card",{attrs:{product:t}})],1)})),0):t._e(),"list"===t.productsListType?e("div",{staticClass:"flex-row-12"},t._l(t.filteredProducts,(function(t,s){return e("div",{key:s,staticClass:"flex-col xs-12"},[e("product-card-inline",{attrs:{product:t}})],1)})),0):t._e()]:[e("div",{staticClass:"msg"},[e("span",{staticClass:"fas fa-sad-tear"}),e("p",[t._v(t._s(t.pageText.emptyCatalogMsg[t.lang]))])])]],2)])]),e("questions-form")],1):t._e()},i=[function(){var t=this,e=t._self._c;return e("button",{staticClass:"collapse"},[e("span",{staticClass:"fas fa-chevron-down"})])}],r=(s(7658),s(7988)),n=s(9851),l=s(1269),o=s(547),c=function(){var t=this,e=t._self._c;return e("div",{staticClass:"product-card-inline"},[e("div",{staticClass:"image"},[e("img",{attrs:{src:t.product.image}})]),e("div",{staticClass:"card-content"},[e("h3",{staticClass:"card-title"},[t._v(t._s(t.product.name[t.lang]))]),e("p",{staticClass:"card-avaliable",class:{red:!t.product.isAvailable}},[t._v(t._s(t.product.isAvailable?t.statusText.available[t.lang]:t.statusText.notAvailable[t.lang]))]),e("div",{staticClass:"card-footer"},[e("div",{staticClass:"price"},[e("p",{staticClass:"value"},[t._v(t._s(t.product.cost)+" UAH")])]),e("div",{staticClass:"actions"},[e("router-link",{staticClass:"btn",attrs:{to:{name:"product",params:{categoryId:t.product.category,productId:t.product.code}}}},[e("span",{staticClass:"btn-icon fas fa-shopping-cart"}),e("span",{staticClass:"btn-text"},[t._v(t._s(t.buttonText[t.lang]))])])],1)])])])},u=[],d={data(){return{buttonText:{ua:"Перейти",ru:"Перейти",en:"See more"},statusText:{available:{ua:"В наявності",ru:"В наличии",en:"Available"},notAvailable:{ua:"Немає в наявності",ru:"Нет в наличии",en:"Not available"}}}},props:{product:Object},computed:{lang(){return this.$store.getters["getSelectedLang"]}}},p=d,g=s(1001),f=(0,g.Z)(p,c,u,!1,null,null,null),v=f.exports,C={data(){return{query:"",pageText:{emptyCatalogMsg:{ua:"Вибачте, але ми не можемо знайти товари по Вашому запиту",ru:"Извините, но мы не можем найти товары по Вашему запросу",en:"Sorry, but we cant find any products by your request"}},selectedFiltersId:[],selectedFiltersInfo:[],isFilterWindowOpen:!1,productsListType:"grid"}},components:{QuestionsForm:n.Z,PageTitle:l.Z,ProductCard:o.Z,AppButton:r.Z,ProductCardInline:v},computed:{lang(){return this.$store.getters["getSelectedLang"]},categoryInfo(){return this.$store.getters["getCategoryById"](this.$route.params.id)},products(){return this.$store.getters["getProductsByCategoryId"](this.$route.params.id)},generalContent(){return this.$store.getters["getGeneralPageContent"]},filteredProducts(){return this.selectedFiltersId.length||this.query.length?this.products.filter((t=>t.options.some((t=>-1!=this.selectedFiltersId.indexOf(t)))&&(~t.name["ua"].toLowerCase().indexOf(this.query.toLowerCase())||~t.name["ru"].toLowerCase().indexOf(this.query.toLowerCase())||~t.name["en"].toLowerCase().indexOf(this.query.toLowerCase())))):this.products}},methods:{openFilterWindow(){this.isFilterWindowOpen=!0},closeFilterWindow(){this.isFilterWindowOpen=!1},toggleFilterBox(t){t.target.closest(".filter-box").classList.toggle("active")},filterTrigger(t){let e=this.selectedFiltersId.indexOf(t.id);-1!=e?(this.selectedFiltersInfo.splice(e,1),this.selectedFiltersId.splice(e,1),document.querySelector(".filter-box input#f"+t.id).checked=!1):(this.selectedFiltersInfo.push(t),this.selectedFiltersId.push(t.id))}}},h=C,m=(0,g.Z)(h,a,i,!1,null,null,null),_=m.exports}}]);
//# sourceMappingURL=94.a0c2871f.js.map