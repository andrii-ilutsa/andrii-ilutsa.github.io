"use strict";(self["webpackChunklexeon_admin"]=self["webpackChunklexeon_admin"]||[]).push([[138],{7289:function(t,e,n){n.d(e,{Z:function(){return i}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"input-lang-group"},[e("div",{staticClass:"input-group"},[e("span",{staticClass:"input-group-text"},[t._v("UA")]),t.isTextarea?t._e():e("input",{directives:[{name:"model",rawName:"v-model",value:t.content["ua"],expression:"content['ua']"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.content["ua"]},on:{input:[function(e){e.target.composing||t.$set(t.content,"ua",e.target.value)},function(e){return t.onChange()}]}}),t.isTextarea?e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content["ua"],expression:"content['ua']"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.content["ua"]},on:{input:[function(e){e.target.composing||t.$set(t.content,"ua",e.target.value)},function(e){return t.onChange()}]}}):t._e(),e("span",{staticClass:"input-group-text"},[t._v("RU")]),t.isTextarea?t._e():e("input",{directives:[{name:"model",rawName:"v-model",value:t.content["ru"],expression:"content['ru']"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.content["ru"]},on:{input:[function(e){e.target.composing||t.$set(t.content,"ru",e.target.value)},function(e){return t.onChange()}]}}),t.isTextarea?e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content["ru"],expression:"content['ru']"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.content["ru"]},on:{input:[function(e){e.target.composing||t.$set(t.content,"ru",e.target.value)},function(e){return t.onChange()}]}}):t._e(),e("span",{staticClass:"input-group-text"},[t._v("EN")]),t.isTextarea?t._e():e("input",{directives:[{name:"model",rawName:"v-model",value:t.content["en"],expression:"content['en']"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.content["en"]},on:{input:[function(e){e.target.composing||t.$set(t.content,"en",e.target.value)},function(e){return t.onChange()}]}}),t.isTextarea?e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content["en"],expression:"content['en']"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.content["en"]},on:{input:[function(e){e.target.composing||t.$set(t.content,"en",e.target.value)},function(e){return t.onChange()}]}}):t._e()])])},o=[],s={data(){return{content:null}},props:["value","isTextarea"],created(){this.content=this.value},methods:{onChange(){this.$emit("onChange",this.content)}}},c=s,l=n(1001),r=(0,l.Z)(c,a,o,!1,null,null,null),i=r.exports},4138:function(t,e,n){n.r(e),n.d(e,{default:function(){return u}});var a=function(){var t=this,e=t._self._c;return Object.keys(t.content).length?e("div",{staticClass:"app-content"},[e("div",{staticClass:"container"},[e("div",{staticClass:"page-title"},[e("h1",[t._v("Общие настройки")]),e("div",{staticClass:"actions"},[e("button",{staticClass:"btn btn-success",attrs:{disabled:t.saveInProgress},on:{click:function(e){return t.savePage()}}},[e("span",{staticClass:"fas fa-save"}),t._v(" Сохранить ")])])]),e("div",{staticClass:"page-content"},[t.saveInProgress?e("div",{staticClass:"progress"},[e("div",{staticClass:"progress-bar progress-bar-striped progress-bar-animated",staticStyle:{width:"100%"},attrs:{role:"progressbar"}})]):t._e(),t.isSavedSuccess?e("div",{staticClass:"alert alert-success",attrs:{role:"alert"}},[t._v(" Изменения успешно сохранены ")]):t._e(),e("fieldset",[e("legend",[t._v("Список меню")]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("label",{staticClass:"form-label"},[t._v("Главная")]),e("InputLangGroup",{attrs:{content:t.content.menu.home},model:{value:t.content.menu.home,callback:function(e){t.$set(t.content.menu,"home",e)},expression:"content.menu.home"}})],1),e("div",{staticClass:"col-12"},[e("label",{staticClass:"form-label"},[t._v("О нас")]),e("InputLangGroup",{attrs:{content:t.content.menu.about},model:{value:t.content.menu.about,callback:function(e){t.$set(t.content.menu,"about",e)},expression:"content.menu.about"}})],1),e("div",{staticClass:"col-12"},[e("label",{staticClass:"form-label"},[t._v("Каталог")]),e("InputLangGroup",{attrs:{content:t.content.menu.catalog},model:{value:t.content.menu.catalog,callback:function(e){t.$set(t.content.menu,"catalog",e)},expression:"content.menu.catalog"}})],1),e("div",{staticClass:"col-12"},[e("label",{staticClass:"form-label"},[t._v("Вопросы и ответы")]),e("InputLangGroup",{attrs:{content:t.content.menu.faq},model:{value:t.content.menu.faq,callback:function(e){t.$set(t.content.menu,"faq",e)},expression:"content.menu.faq"}})],1),e("div",{staticClass:"col-12"},[e("label",{staticClass:"form-label"},[t._v("Для партнеров")]),e("InputLangGroup",{attrs:{content:t.content.menu.forPartners},model:{value:t.content.menu.forPartners,callback:function(e){t.$set(t.content.menu,"forPartners",e)},expression:"content.menu.forPartners"}})],1),e("div",{staticClass:"col-12"},[e("label",{staticClass:"form-label"},[t._v("Контакты")]),e("InputLangGroup",{attrs:{content:t.content.menu.contacts},model:{value:t.content.menu.contacts,callback:function(e){t.$set(t.content.menu,"contacts",e)},expression:"content.menu.contacts"}})],1)])]),e("fieldset",[e("legend",[t._v("Глобальные эллементы")]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("label",{staticClass:"form-label"},[t._v("Текст в поле поиска (шапка)")]),e("InputLangGroup",{attrs:{content:t.content.headerSearchFieldText},model:{value:t.content.headerSearchFieldText,callback:function(e){t.$set(t.content,"headerSearchFieldText",e)},expression:"content.headerSearchFieldText"}})],1),e("div",{staticClass:"col-12"},[e("label",{staticClass:"form-label"},[t._v("Текст в подвале сайта")]),e("InputLangGroup",{attrs:{content:t.content.footerInfoText,isTextarea:!0},model:{value:t.content.footerInfoText,callback:function(e){t.$set(t.content,"footerInfoText",e)},expression:"content.footerInfoText"}})],1),e("div",{staticClass:"col-12"},[e("label",{staticClass:"form-label"},[t._v("Копирайт")]),e("InputLangGroup",{attrs:{content:t.content.copyrightText},model:{value:t.content.copyrightText,callback:function(e){t.$set(t.content,"copyrightText",e)},expression:"content.copyrightText"}})],1)])]),e("fieldset",[e("legend",[t._v("Форма обратной связи")]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("label",{staticClass:"form-label"},[t._v("Заголовок")]),e("InputLangGroup",{attrs:{content:t.content.callbackForm.title},model:{value:t.content.callbackForm.title,callback:function(e){t.$set(t.content.callbackForm,"title",e)},expression:"content.callbackForm.title"}})],1),e("div",{staticClass:"col-12"},[e("label",{staticClass:"form-label"},[t._v("Текст")]),e("InputLangGroup",{attrs:{content:t.content.callbackForm.text},model:{value:t.content.callbackForm.text,callback:function(e){t.$set(t.content.callbackForm,"text",e)},expression:"content.callbackForm.text"}})],1),e("div",{staticClass:"col-12"},[e("label",{staticClass:"form-label"},[t._v("Подсказка")]),e("InputLangGroup",{attrs:{content:t.content.callbackForm.placeholder},model:{value:t.content.callbackForm.placeholder,callback:function(e){t.$set(t.content.callbackForm,"placeholder",e)},expression:"content.callbackForm.placeholder"}})],1)])])])])]):t._e()},o=[],s=n(7289),c={data(){return{content:"",saveInProgress:!1,isSavedSuccess:!1}},components:{InputLangGroup:s.Z},computed:{pageContent(){return this.$store.getters["getGeneralInfo"]}},watch:{pageContent(t){this.content=t}},methods:{savePage(){this.saveInProgress=!0,this.$store.dispatch("saveGeneralInfo",this.content).then((()=>{this.saveInProgress=!1,this.isSavedSuccess=!0,setTimeout((()=>{this.isSavedSuccess=!1}),3e3)}))}},created(){this.content=this.pageContent},mounted(){}},l=c,r=n(1001),i=(0,r.Z)(l,a,o,!1,null,null,null),u=i.exports}}]);
//# sourceMappingURL=138.98d552fe.js.map