"use strict";(self["webpackChunklexeon_admin"]=self["webpackChunklexeon_admin"]||[]).push([[5],{7289:function(t,e,n){n.d(e,{Z:function(){return r}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"input-lang-group"},[e("div",{staticClass:"input-group"},[e("span",{staticClass:"input-group-text"},[t._v("UA")]),t.isTextarea?t._e():e("input",{directives:[{name:"model",rawName:"v-model",value:t.content["ua"],expression:"content['ua']"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.content["ua"]},on:{input:[function(e){e.target.composing||t.$set(t.content,"ua",e.target.value)},function(e){return t.onChange()}]}}),t.isTextarea?e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content["ua"],expression:"content['ua']"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.content["ua"]},on:{input:[function(e){e.target.composing||t.$set(t.content,"ua",e.target.value)},function(e){return t.onChange()}]}}):t._e(),e("span",{staticClass:"input-group-text"},[t._v("RU")]),t.isTextarea?t._e():e("input",{directives:[{name:"model",rawName:"v-model",value:t.content["ru"],expression:"content['ru']"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.content["ru"]},on:{input:[function(e){e.target.composing||t.$set(t.content,"ru",e.target.value)},function(e){return t.onChange()}]}}),t.isTextarea?e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content["ru"],expression:"content['ru']"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.content["ru"]},on:{input:[function(e){e.target.composing||t.$set(t.content,"ru",e.target.value)},function(e){return t.onChange()}]}}):t._e(),e("span",{staticClass:"input-group-text"},[t._v("EN")]),t.isTextarea?t._e():e("input",{directives:[{name:"model",rawName:"v-model",value:t.content["en"],expression:"content['en']"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.content["en"]},on:{input:[function(e){e.target.composing||t.$set(t.content,"en",e.target.value)},function(e){return t.onChange()}]}}),t.isTextarea?e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content["en"],expression:"content['en']"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.content["en"]},on:{input:[function(e){e.target.composing||t.$set(t.content,"en",e.target.value)},function(e){return t.onChange()}]}}):t._e()])])},s=[],o={data(){return{content:null}},props:["value","isTextarea"],created(){this.content=this.value},methods:{onChange(){this.$emit("onChange",this.content)}}},l=o,c=n(1001),i=(0,c.Z)(l,a,s,!1,null,null,null),r=i.exports},5:function(t,e,n){n.r(e),n.d(e,{default:function(){return u}});var a=function(){var t=this,e=t._self._c;return Object.keys(t.content).length?e("div",{staticClass:"app-content"},[e("div",{staticClass:"container"},[e("div",{staticClass:"page-title"},[e("h1",[t._v("Контакты")]),e("div",{staticClass:"actions"},[e("button",{staticClass:"btn btn-success",attrs:{disabled:t.saveInProgress},on:{click:function(e){return t.savePage()}}},[e("span",{staticClass:"fas fa-save"}),t._v(" Сохранить ")])])]),e("div",{staticClass:"page-content"},[t.saveInProgress?e("div",{staticClass:"progress"},[e("div",{staticClass:"progress-bar progress-bar-striped progress-bar-animated",staticStyle:{width:"100%"},attrs:{role:"progressbar"}})]):t._e(),t.isSavedSuccess?e("div",{staticClass:"alert alert-success",attrs:{role:"alert"}},[t._v(" Изменения успешно сохранены ")]):t._e(),e("fieldset",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("label",{staticClass:"form-label"},[t._v("Заголовок страницы")]),e("InputLangGroup",{attrs:{content:t.content.pageTitle},model:{value:t.content.pageTitle,callback:function(e){t.$set(t.content,"pageTitle",e)},expression:"content.pageTitle"}})],1)])]),e("fieldset",[e("legend",[t._v("Список контактов")]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("label",{staticClass:"form-label"},[t._v("Заголовок")]),e("InputLangGroup",{attrs:{content:t.content.contactsTitle},model:{value:t.content.contactsTitle,callback:function(e){t.$set(t.content,"contactsTitle",e)},expression:"content.contactsTitle"}})],1),e("div",{staticClass:"col-12"},[e("label",{staticClass:"form-label"},[t._v("Телефон 1")]),e("div",{staticClass:"input-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.content.phone1.value,expression:"content.phone1.value"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.content.phone1.value},on:{input:function(e){e.target.composing||t.$set(t.content.phone1,"value",e.target.value)}}})]),e("InputLangGroup",{attrs:{content:t.content.phone1.description},model:{value:t.content.phone1.description,callback:function(e){t.$set(t.content.phone1,"description",e)},expression:"content.phone1.description"}})],1),e("div",{staticClass:"col-12"},[e("label",{staticClass:"form-label"},[t._v("Телефон 2")]),e("div",{staticClass:"input-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.content.phone2.value,expression:"content.phone2.value"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.content.phone2.value},on:{input:function(e){e.target.composing||t.$set(t.content.phone2,"value",e.target.value)}}})]),e("InputLangGroup",{attrs:{content:t.content.phone2.description},model:{value:t.content.phone2.description,callback:function(e){t.$set(t.content.phone2,"description",e)},expression:"content.phone2.description"}})],1),e("div",{staticClass:"col-12"},[e("label",{staticClass:"form-label"},[t._v("Email")]),e("div",{staticClass:"input-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.content.email.value,expression:"content.email.value"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.content.email.value},on:{input:function(e){e.target.composing||t.$set(t.content.email,"value",e.target.value)}}})]),e("InputLangGroup",{attrs:{content:t.content.email.description},model:{value:t.content.email.description,callback:function(e){t.$set(t.content.email,"description",e)},expression:"content.email.description"}})],1),e("div",{staticClass:"col-12"},[e("label",{staticClass:"form-label"},[t._v("Время работы")]),e("InputLangGroup",{attrs:{content:t.content.workTime.value},model:{value:t.content.workTime.value,callback:function(e){t.$set(t.content.workTime,"value",e)},expression:"content.workTime.value"}})],1),e("div",{staticClass:"col-12"},[e("label",{staticClass:"form-label"},[t._v("Текст описание")]),e("InputLangGroup",{attrs:{content:t.content.text,isTextarea:!0},model:{value:t.content.text,callback:function(e){t.$set(t.content,"text",e)},expression:"content.text"}})],1)])]),e("fieldset",[e("legend",[t._v("Форма обратной связи")]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("label",{staticClass:"form-label"},[t._v("Заголовок")]),e("InputLangGroup",{attrs:{content:t.content.formTitle},model:{value:t.content.formTitle,callback:function(e){t.$set(t.content,"formTitle",e)},expression:"content.formTitle"}})],1),e("div",{staticClass:"col-12"},[e("label",{staticClass:"form-label"},[t._v('Поле "Имя"')]),e("InputLangGroup",{attrs:{content:t.content.formFields.name},model:{value:t.content.formFields.name,callback:function(e){t.$set(t.content.formFields,"name",e)},expression:"content.formFields.name"}})],1),e("div",{staticClass:"col-12"},[e("label",{staticClass:"form-label"},[t._v('Поле "Email"')]),e("InputLangGroup",{attrs:{content:t.content.formFields.email},model:{value:t.content.formFields.email,callback:function(e){t.$set(t.content.formFields,"email",e)},expression:"content.formFields.email"}})],1),e("div",{staticClass:"col-12"},[e("label",{staticClass:"form-label"},[t._v('Поле "Сообщение"')]),e("InputLangGroup",{attrs:{content:t.content.formFields.msg},model:{value:t.content.formFields.msg,callback:function(e){t.$set(t.content.formFields,"msg",e)},expression:"content.formFields.msg"}})],1),e("div",{staticClass:"col-12"},[e("label",{staticClass:"form-label"},[t._v("Кнопка формы")]),e("InputLangGroup",{attrs:{content:t.content.formBtnText},model:{value:t.content.formBtnText,callback:function(e){t.$set(t.content,"formBtnText",e)},expression:"content.formBtnText"}})],1)])]),e("fieldset",[e("legend",[t._v("Карта сайта")]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("label",{staticClass:"form-label"},[t._v("Ссылка на карту")]),e("div",{staticClass:"input-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.content.mapURL,expression:"content.mapURL"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Введите текст"},domProps:{value:t.content.mapURL},on:{input:function(e){e.target.composing||t.$set(t.content,"mapURL",e.target.value)}}})])])])])])])]):t._e()},s=[],o=n(7289),l={data(){return{content:"",saveInProgress:!1,isSavedSuccess:!1}},components:{InputLangGroup:o.Z},computed:{pageContent(){return this.$store.getters["getContactspageContent"]}},watch:{pageContent(t){this.content=t}},methods:{savePage(){this.saveInProgress=!0,this.$store.dispatch("saveContactsPage",this.content).then((()=>{this.saveInProgress=!1,this.isSavedSuccess=!0,setTimeout((()=>{this.isSavedSuccess=!1}),3e3)}))}},created(){this.content=this.pageContent},mounted(){}},c=l,i=n(1001),r=(0,i.Z)(c,a,s,!1,null,null,null),u=r.exports}}]);
//# sourceMappingURL=5.6a5dca9e.js.map