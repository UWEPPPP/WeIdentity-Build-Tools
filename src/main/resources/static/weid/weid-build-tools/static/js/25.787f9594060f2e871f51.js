(window.webpackJsonp=window.webpackJsonp||[]).push([[25,26,27],{NVG9:function(t,e,r){"use strict";var o=r("lwsE"),n=r.n(o),u=r("W8MJ"),i=r.n(u),s=r("7W2i"),a=r.n(s),c=r("a1gu"),l=r.n(c),h=r("Nsbk"),f=r.n(h),p=r("lSNA"),d=r.n(p),m=r("QDv8"),v=r("Q2AE");function y(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function g(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?y(Object(r),!0).forEach((function(e){d()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var O=r("zr5I"),b=r("eW3l"),w=r("OcYQ");function k(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,o=f()(t);if(e){var n=f()(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return l()(this,r)}}var j=function(t){a()(r,t);var e=k(r);function r(){var t;return n()(this,r),(t=e.call(this)).headers_post={"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8","X-Requested-With":"XMLHttpRequest"},t}return i()(r,[{key:"ajax",value:function(t,e,r,o,n){return"upload"===t?this.request({method:"post",url:e,timeout:1e3*n},r):this.request({method:t,url:e,headers:o,timeout:1e3*n},r)}},{key:"doPost",value:function(t,e,r){return this.ajax("post",t,e,this.headers_post,r)}},{key:"doPostAndUploadFile",value:function(t,e,r){return this.doPostByJson(t,e,r)}},{key:"doPostByJson",value:function(t,e,r){return this.ajax("upload",t,e,null,r)}},{key:"doGet",value:function(t,e,r){return this.ajax("get",t,e,null,r)}}]),r}(function(){function t(){var e=this;n()(this,t),this.default_time=5e3,this.$http=O.create({timeout:this.default_time,baseURL:w.URL}),this.dataMethodDefaults={headers:{"Content-Type":"application/json;charset=UTF-8","X-Requested-With":"XMLHttpRequest"}},this.$http.interceptors.request.use((function(t){return t.url.indexOf("doLogin")>-1||t.url.indexOf("generateVerifCode")>-1?localStorage.setItem("token",""):t.headers.token=localStorage.getItem("token"),t})),this.$http.interceptors.response.use((function(t){return new Promise((function(e,r){var o=t.data;200===t.status&&o?10007===o.code?(Object(m.Message)({type:"error",message:"当前会话已失效,请重新登录"}),v.a.commit("back",!0)):e(t):r(t)})).catch((function(t){return t}))}),(function(t){return console.log(t),t.message.includes("timeout")?Promise.resolve({data:e.responseTimeout()}):t}))}return i()(t,[{key:"request",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;return t.method&&"post"===t.method.toLowerCase()?t.headers?this.$http({url:t.url,method:"post",data:b.stringify(e),headers:t.headers,timeout:this.getTimeout(t)}):this.post(t.url,e,t):this.$http({url:t.url,method:"get",params:e,timeout:this.getTimeout(t)})}},{key:"get",value:function(t){return this.$http.get(t.config)}},{key:"post",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.$http.post(t,e,g(g({},this.dataMethodDefaults),r))}},{key:"getTimeout",value:function(t){return void 0===t.timeout?this.default_time:t.timeout}},{key:"responseTimeout",value:function(){return{errorCode:-1,errorMessage:"timeout",result:null}}}]),t}());e.a=new j},OcYQ:function(t,e){e.URL="/weid/weid-build-tools/"}}]);