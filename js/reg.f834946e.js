(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["reg"],{b8b8:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"reg"}},[a("b-row",[a("b-col",{attrs:{cols:"12"}},[a("h1",{staticClass:"text-center"},[t._v("註冊")]),a("b-form",{on:{submit:t.submit}},[a("b-form-group",{attrs:{label:"帳號","label-for":"input-account",description:"帳號長度為 4 - 20 個字","invalid-feedback":"帳號長度不符",state:t.state("account")}},[a("b-form-input",{attrs:{id:"input-account",type:"text",state:t.state("account")},model:{value:t.account,callback:function(s){t.account=s},expression:"account"}})],1),a("b-form-group",{attrs:{label:"密碼","label-for":"input-password",description:"密碼長度為 4 - 20 個字","invalid-feedback":"密碼長度不符",state:t.state("password")}},[a("b-form-input",{attrs:{id:"input-password",type:"password",state:t.state("password")},model:{value:t.password,callback:function(s){t.password=s},expression:"password"}})],1),a("b-button",{attrs:{type:"submit",variant:"light"}},[t._v("註冊")])],1)],1)],1)],1)},n=[],o={name:"reg",data:function(){return{account:"",password:""}},methods:{state:function(t){return"account"===t?!(this.account.length<4||this.account.length>20):"password"===t?!(this.password.length<4||this.password.length>20):void 0},submit:function(t){t.preventDefault(),this.account.length<4||this.account.length>20?alert("帳號長度不符"):(this.password.length<4||this.password.length>20)&&alert("密碼長度不符"),this.axios.post("https://vue-alfred-album.herokuapp.com//users",{account:this.account,password:this.password}).then((function(t){var s=t.data;s.success?alert("註冊成功"):alert(s.message)})).catch((function(t){alert(t.response.data.message)}))}}},r=o,c=a("2877"),u=Object(c["a"])(r,e,n,!1,null,null,null);s["default"]=u.exports}}]);
//# sourceMappingURL=reg.f834946e.js.map