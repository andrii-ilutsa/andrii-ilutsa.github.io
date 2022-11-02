"use strict";(self["webpackChunkLuxeon_web"]=self["webpackChunkLuxeon_web"]||[]).push([[564],{7988:function(t,e,s){s.d(e,{Z:function(){return c}});var r=function(){var t=this,e=t._self._c;return e(t.type,{tag:"component",staticClass:"btn",class:{"icon-btn":!t.text,loading:t.isLoading},attrs:{href:t.href},on:{click:t.clickEvent}},[e("span",{class:"btn-icon "+t.icon}),t.text?e("span",{staticClass:"btn-text"},[t._v(t._s(t.text))]):t._e(),e("div",{staticClass:"loader line-scale-pulse-out"},[e("div"),e("div"),e("div"),e("div"),e("div")])])},a=[],o={props:{icon:String,text:String,isLoading:Boolean,href:String},computed:{type(){return this.href?"a":"button"}},methods:{clickEvent(t){this.$emit("click",t)}}},n=o,i=s(1001),l=(0,i.Z)(n,r,a,!1,null,null,null),c=l.exports},4728:function(t,e,s){s.d(e,{Z:function(){return c}});var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"page-title"},[e("div",{staticClass:"wrapper"},[e("div",{staticClass:"title"},[t._v(t._s(t.title))]),e("ul",{staticClass:"breadcrumbs"},[e("li",[e("router-link",{attrs:{to:"/"}},[t._v(t._s(t.itemTexts.home[t.lang]))])],1),t._l(t.breadcrumbs,(function(s,r){return e("li",{key:r},[e("span",{staticClass:"fas fa-chevron-right"}),e("router-link",{attrs:{to:t.getHref(r)}},[t._v(t._s(t.getName(s,r)))])],1)}))],2)])])},a=[],o={data(){return{itemTexts:{home:{ua:"Головна",ru:"Главная",en:"Home"},about:{ua:"О нас",ru:"О нас",en:"About"},faq:{ua:"Питання та відповіді",ru:"Вопросы и ответы",en:"FAQ"},contacts:{ua:"Контакти",ru:"Контакты",en:"Contacts"},favorites:{ua:"Обране",ru:"Избранное",en:"Favorites"},cart:{ua:"Кошик",ru:"Корзина",en:"Cart"},categories:{ua:"Категоріі",ru:"Категории",en:"Categories"}}}},props:{title:String},computed:{breadcrumbs(){return this.$route.fullPath.split("/").slice(1)},lang(){return this.$store.getters["getSelectedLang"]}},methods:{getHref(t){let e="/",s=this.$route.fullPath.split("/").slice(1);for(let r=0;r<=t;r++)0!=r&&(e+="/"),e+=s[r];return e},getName(t,e){return 0==e?this.itemTexts[t][this.lang]:1==e?this.$store.getters["getCategoryById"](t).name[this.lang]:2==e?this.$store.getters["getProductById"](t).name[this.lang]:void 0}}},n=o,i=s(1001),l=(0,i.Z)(n,r,a,!1,null,null,null),c=l.exports},9851:function(t,e,s){s.d(e,{Z:function(){return c}});var r=function(){var t=this,e=t._self._c;return Object.keys(t.generalContent).length?e("div",{staticClass:"questions-form"},[e("div",{staticClass:"wrapper"},[e("div",{staticClass:"qf-container"},[e("h2",{staticClass:"title"},[t._v(t._s(t.generalContent.callbackForm.title[t.lang]))]),e("p",{staticClass:"text",domProps:{innerHTML:t._s(t.generalContent.callbackForm.text[t.lang])}}),e("div",{staticClass:"qf-field"},[e("input",{attrs:{type:"text",placeholder:t.generalContent.callbackForm.placeholder[t.lang]}}),t._m(0)])])])]):t._e()},a=[function(){var t=this,e=t._self._c;return e("button",{staticClass:"send"},[e("span",{staticClass:"fas fa-arrow-circle-right"})])}],o={props:{category:Object},computed:{generalContent(){return this.$store.getters["getGeneralPageContent"]},lang(){return this.$store.getters["getSelectedLang"]}}},n=o,i=s(1001),l=(0,i.Z)(n,r,a,!1,null,null,null),c=l.exports},7564:function(t,e,s){s.r(e),s.d(e,{default:function(){return x}});var r=function(){var t=this,e=t._self._c;return Object.keys(t.pageContent).length?e("div",{staticClass:"cart-view"},[e("page-title",{attrs:{title:t.pageContent.pageTitle[t.lang]}}),e("div",{staticClass:"wrapper"},[t.products.length&&"done"!=t.orderStatus?e("div",{staticClass:"flex-row-12"},[e("div",{staticClass:"flex-col xs-12 md-7"},[e("div",{staticClass:"products-list"},t._l(t.products,(function(s,r){return e("cart-product-card",{key:r,attrs:{product:s,index:r},on:{changeValue:t.changeValue}})})),1)]),e("div",{staticClass:"flex-col xs-12 md-5"},[e("div",{staticClass:"cart-form"},[e("h4",{staticClass:"title"},[t._v(t._s(t.pageContent.form.title[t.lang]))]),e("div",{staticClass:"c-form"},[e("div",{staticClass:"field-item"},[e("label",{attrs:{for:""}},[t._v(t._s(t.pageContent.form.fields.name[t.lang]))]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.order.name,expression:"order.name"}],class:{err:t.isFormEmpty&&!t.order.name.length},attrs:{type:"text",placeholder:t.pageContent.form.fields.name[t.lang]},domProps:{value:t.order.name},on:{input:function(e){e.target.composing||t.$set(t.order,"name",e.target.value)}}}),t.isFormEmpty&&!t.order.name.length?e("p",{staticClass:"err-msg"},[t._v(t._s(t.pageText.formFieldErrMsg[t.lang]))]):t._e()]),e("div",{staticClass:"field-item"},[e("label",{attrs:{for:""}},[t._v(t._s(t.pageContent.form.fields.phone[t.lang]))]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.order.phone,expression:"order.phone"}],class:{err:t.isFormEmpty&&!t.order.phone.length},attrs:{type:"text",placeholder:t.pageContent.form.fields.phone[t.lang]},domProps:{value:t.order.phone},on:{input:function(e){e.target.composing||t.$set(t.order,"phone",e.target.value)}}}),t.isFormEmpty&&!t.order.phone.length?e("p",{staticClass:"err-msg"},[t._v(t._s(t.pageText.formFieldErrMsg[t.lang]))]):t._e()]),e("div",{staticClass:"field-item"},[e("label",{attrs:{for:""}},[t._v(t._s(t.pageContent.form.fields.email[t.lang]))]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.order.email,expression:"order.email"}],class:{err:t.isFormEmpty&&!t.order.email.length},attrs:{type:"text",placeholder:t.pageContent.form.fields.email[t.lang]},domProps:{value:t.order.email},on:{input:function(e){e.target.composing||t.$set(t.order,"email",e.target.value)}}}),t.isFormEmpty&&!t.order.email.length?e("p",{staticClass:"err-msg"},[t._v(t._s(t.pageText.formFieldErrMsg[t.lang]))]):t._e()]),e("div",{staticClass:"field-item"},[e("label",{attrs:{for:""}},[t._v(t._s(t.pageContent.form.fields.adress[t.lang]))]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.order.adress,expression:"order.adress"}],class:{err:t.isFormEmpty&&!t.order.adress.length},attrs:{type:"text",placeholder:t.pageContent.form.fields.adress[t.lang]},domProps:{value:t.order.adress},on:{input:function(e){e.target.composing||t.$set(t.order,"adress",e.target.value)}}}),t.isFormEmpty&&!t.order.adress.length?e("p",{staticClass:"err-msg"},[t._v(t._s(t.pageText.formFieldErrMsg[t.lang]))]):t._e()])]),e("div",{staticClass:"total-price"},[e("p",{staticClass:"text"},[t._v(t._s(t.pageContent.form.totalPriceText[t.lang])+":")]),e("p",{staticClass:"value"},[t._v(t._s(t.totalPrice)+" UAH")])]),e("div",{staticClass:"actions"},[e("app-button",{staticClass:"block",attrs:{icon:"fas fa-rocket",isLoading:"process"==t.orderStatus,text:t.pageContent.form.btnText[t.lang]},on:{click:function(e){return t.createOrder()}}})],1)])])]):t._e(),t.products.length||"done"==t.orderStatus?t._e():e("div",{staticClass:"msg"},[e("span",{staticClass:"fas fa-shopping-cart"}),e("p",[t._v(t._s(t.pageText.emptyCart[t.lang]))]),e("router-link",{staticClass:"btn",attrs:{to:{name:"categories"}}},[e("span",{staticClass:"btn-icon fas fa-list"}),e("span",{staticClass:"btn-text"},[t._v(t._s(t.pageText.catalogMoreBtn[t.lang]))])])],1),"done"==t.orderStatus?e("div",{staticClass:"msg"},[e("span",{staticClass:"fas fa-check-double"}),e("p",[t._v(t._s(t.pageText.doneOrder[t.lang]))]),e("router-link",{staticClass:"btn",attrs:{to:{name:"categories"}}},[e("span",{staticClass:"btn-icon fas fa-list"}),e("span",{staticClass:"btn-text"},[t._v(t._s(t.pageText.catalogMoreBtn[t.lang]))])])],1):t._e(),"error"==t.orderStatus?e("div",{staticClass:"msg"},[e("span",{staticClass:"fas fa-exclamation-triangle"}),e("p",[t._v(t._s(t.pageText.errorOrder[t.lang]))]),e("router-link",{staticClass:"btn",attrs:{to:{name:"categories"}}},[e("span",{staticClass:"btn-icon fas fa-list"}),e("span",{staticClass:"btn-text"},[t._v(t._s(t.pageText.catalogMoreBtn[t.lang]))])])],1):t._e()]),e("questions-form")],1):t._e()},a=[],o=s(7988),n=s(9851),i=s(4728),l=function(){var t=this,e=t._self._c;return e("div",{staticClass:"cart-product-card"},[e("div",{staticClass:"image"},[e("img",{attrs:{src:t.product.image}})]),e("div",{staticClass:"card-content"},[e("h3",{staticClass:"card-title"},[e("router-link",{attrs:{to:{name:"product",params:{categoryId:t.product.category,productId:t.product.code}}}},[t._v(" "+t._s(t.product.name[t.lang])+" ")])],1),e("div",{staticClass:"info"},[e("div",{staticClass:"item"},[e("p",{staticClass:"info-title"},[t._v(t._s(t.pageText.category[t.lang]))]),e("p",{staticClass:"info-value"},[t._v(t._s(t.category.name[t.lang]))])]),e("div",{staticClass:"item"},[e("p",{staticClass:"info-title"},[t._v(t._s(t.pageText.count[t.lang]))]),e("div",{staticClass:"count-field"},[e("button",{on:{click:function(e){t.count--}}},[t._v("-")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.count,expression:"count"}],attrs:{type:"number",min:"1",step:"1"},domProps:{value:t.count},on:{input:function(e){e.target.composing||(t.count=e.target.value)}}}),e("button",{on:{click:function(e){t.count++}}},[t._v("+")])])])]),e("div",{staticClass:"card-footer"},[e("div",{staticClass:"price"},[e("p",{staticClass:"value"},[t._v(t._s(t.product.cost)+" UAH")])]),e("div",{staticClass:"actions"},[e("app-button",{attrs:{icon:"fas fa-trash"},on:{click:t.removeProductFromCart}})],1)])])])},c=[],d={data(){return{count:1,pageText:{category:{ua:"Категорія",ru:"Категория",en:"Category"},count:{ua:"Кількість",ru:"Кол-во",en:"Count"}}}},props:{product:Object,index:Number},components:{AppButton:o.Z},watch:{count(t){this.count=Math.round(this.count),t<=1&&(this.count=1),this.$emit("changeValue",{index:this.index,count:this.count})},product(t){this.count=t.count}},computed:{lang(){return this.$store.getters["getSelectedLang"]},category(){return this.$store.getters["getCategoryById"](this.product.category)}},methods:{removeProductFromCart(){this.$store.dispatch("removeProductFromCart",this.index)}},created(){this.count=this.product.count}},u=d,p=s(1001),g=(0,p.Z)(u,l,c,!1,null,null,null),m=g.exports;const h=new Date;function v(t){return(h.getHours()<10?"0"+h.getHours():h.getHours())+":"+(h.getMinutes()<10?"0"+h.getMinutes():h.getMinutes())+t+(h.getDate()<10?"0"+h.getDate():h.getDate())+"."+(h.getMonth()+1<10?"0"+(h.getMonth()+1):h.getMonth()+1)+"."+h.getFullYear()}var f={data(){return{orderStatus:"none",isFormEmpty:!1,totalPrice:0,order:{name:"",phone:"",email:"",adress:""},products:[],pageText:{emptyCart:{ua:"Нажаль, кошик порожній",ru:"К сожалению, корзина пуста",en:"Sorry, but cart is empty"},doneOrder:{ua:"Замовлення успішно оформлено",ru:"Заказ был успешно оформлен",en:"Order has been successfully placed"},errorOrder:{ua:"Щось пішно не так. Спробуйте перезавантажити сторінку та замовити ще раз",ru:"Что-то пошло не так, попробуйте перезагрузить страницу и заказать снова",en:"Something went wrong, try reloading the page and ordering again"},catalogMoreBtn:{ua:"Перейти до каталогу",ru:"Перейти в каталог",en:"To catalog"},formFieldErrMsg:{ua:"Заповніть це поле",ru:"Заполните данное поле",en:"Fill this field"}}}},components:{QuestionsForm:n.Z,PageTitle:i.Z,AppButton:o.Z,CartProductCard:m},computed:{lang(){return this.$store.getters["getSelectedLang"]},pageContent(){return this.$store.getters["getCartPageContent"]},productsInCart(){return this.$store.getters["getProductsInCart"]}},watch:{productsInCart(){this.products=this.productsInCart}},methods:{openFilterWindow(){this.isFilterWindowOpen=!0},closeFilterWindow(){this.isFilterWindowOpen=!1},changeValue(t){this.products[t.index].count=t.count,this.updateTotalPrice(),this.$store.dispatch("replaceProductsInCart",this.products)},createOrder(){this.isFormEmpty=!0,this.order.name&&this.order.phone&&this.order.adress&&this.order.email&&(this.orderStatus="process",this.order.id="or"+Date.now(),this.order.date=v(" "),this.order.docName=this.order.date+" "+this.order.id,this.order.products=this.products,this.order.totalPrice=this.totalPrice,this.order.status={ready:!1,send:!1,done:!1,payed:!1},this.order.note="",this.$store.dispatch("sendCartOrder",this.order).then((()=>{this.orderStatus="done",this.$store.dispatch("replaceProductsInCart",[]),this.order={name:"",phone:"",email:"",adress:""}})).catch((t=>{this.orderStatus="error",console.error(t)})))},updateTotalPrice(){this.totalPrice=0,this.products.forEach((t=>{this.totalPrice+=parseFloat(t.cost)*parseFloat(t.count)}))}},created(){this.products=this.productsInCart,this.updateTotalPrice()}},C=f,_=(0,p.Z)(C,r,a,!1,null,null,null),x=_.exports}}]);
//# sourceMappingURL=564.54f36548.js.map