!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("vue")):"function"==typeof define&&define.amd?define(["vue"],t):(e="undefined"!=typeof globalThis?globalThis:e||self)["vue-img"]=t(e.vue)}(this,function(o){"use strict";function e(e){return o.pushScopeId("data-v-2f4a4339"),e=e(),o.popScopeId(),e}var t={data:function(){return{images:[],titles:[],sourceButtons:[],visibleUI:!0,currentImageIndex:0,closed:!0,uiTimeout:null,handlers:{},thumbnails:!1}},watch:{closed:function(e){e&&this.handlers.closed&&this.handlers.closed(),!e&&this.handlers.opened&&this.handlers.opened()}},methods:{fireChangeEvent:function(){this.handlers.changed&&this.handlers.changed(this.currentImageIndex)},close:function(){this.closed||(document.querySelector("body").classList.remove("body-fs-v-img"),this.images=[],this.currentImageIndex=0,this.closed=!0)},next:function(){!this.closed&&1<this.images.length&&(this.currentImageIndex+1<this.images.length?this.currentImageIndex++:this.currentImageIndex=0,this.fireChangeEvent())},select:function(e){this.currentImageIndex=e},prev:function(){!this.closed&&1<this.images.length&&(0<this.currentImageIndex?this.currentImageIndex--:this.currentImageIndex=this.images.length-1,this.fireChangeEvent())},showUI:function(){var e=this;this.closed||(clearTimeout(this.uiTimeout),this.visibleUI=!0,this.uiTimeout=setTimeout(function(){e.visibleUI=!1},3500))}},created:function(){var t=this;window.addEventListener("keyup",function(e){27!==e.keyCode&&81!==e.keyCode||t.close(),39!==e.keyCode&&76!==e.keyCode||t.next(),37!==e.keyCode&&72!==e.keyCode||t.prev()}),window.addEventListener("scroll",function(){t.close()}),window.addEventListener("mousemove",function(){t.showUI()})}},s={class:"header-v-img"},c={class:"count-v-img"},l={key:0},u={class:"title-v-img"},d={class:"buttons-v-img"},m={key:0},g=["href"],v=[e(function(){return o.createElementVNode("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",id:"Capa_1",x:"0px",y:"0px",width:"512px",height:"512px",viewBox:"0 0 475.078 475.077",style:{"enable-background":"new 0 0 475.078 475.077"},"xml:space":"preserve"},[o.createElementVNode("path",{d:"M467.083,318.627c-5.324-5.328-11.8-7.994-19.41-7.994H315.195l-38.828,38.827c-11.04,10.657-23.982,15.988-38.828,15.988    c-14.843,0-27.789-5.324-38.828-15.988l-38.543-38.827H27.408c-7.612,0-14.083,2.669-19.414,7.994    C2.664,323.955,0,330.427,0,338.044v91.358c0,7.614,2.664,14.085,7.994,19.414c5.33,5.328,11.801,7.99,19.414,7.99h420.266    c7.61,0,14.086-2.662,19.41-7.99c5.332-5.329,7.994-11.8,7.994-19.414v-91.358C475.078,330.427,472.416,323.955,467.083,318.627z     M360.025,414.841c-3.621,3.617-7.905,5.424-12.854,5.424s-9.227-1.807-12.847-5.424c-3.614-3.617-5.421-7.898-5.421-12.844    c0-4.948,1.807-9.236,5.421-12.847c3.62-3.62,7.898-5.431,12.847-5.431s9.232,1.811,12.854,5.431    c3.613,3.61,5.421,7.898,5.421,12.847C365.446,406.942,363.638,411.224,360.025,414.841z M433.109,414.841    c-3.614,3.617-7.898,5.424-12.848,5.424c-4.948,0-9.229-1.807-12.847-5.424c-3.613-3.617-5.42-7.898-5.42-12.844    c0-4.948,1.807-9.236,5.42-12.847c3.617-3.62,7.898-5.431,12.847-5.431c4.949,0,9.233,1.811,12.848,5.431    c3.617,3.61,5.427,7.898,5.427,12.847C438.536,406.942,436.729,411.224,433.109,414.841z",fill:"#FFFFFF"}),o.createElementVNode("path",{d:"M224.692,323.479c3.428,3.613,7.71,5.421,12.847,5.421c5.141,0,9.418-1.808,12.847-5.421l127.907-127.908    c5.899-5.519,7.234-12.182,3.997-19.986c-3.23-7.421-8.847-11.132-16.844-11.136h-73.091V36.543c0-4.948-1.811-9.231-5.421-12.847    c-3.62-3.617-7.901-5.426-12.847-5.426h-73.096c-4.946,0-9.229,1.809-12.847,5.426c-3.615,3.616-5.424,7.898-5.424,12.847V164.45    h-73.089c-7.998,0-13.61,3.715-16.846,11.136c-3.234,7.801-1.903,14.467,3.999,19.986L224.692,323.479z",fill:"#FFFFFF"})],-1)})],h=[e(function(){return o.createElementVNode("svg",{width:"25",height:"25",viewBox:"0 0 1792 1915",xmlns:"http://www.w3.org/2000/svg"},[o.createElementVNode("path",{d:"M1664 896v128q0 53-32.5 90.5t-84.5 37.5h-704l293 294q38 36 38 90t-38 90l-75 76q-37 37-90 37-52 0-91-37l-651-652q-37-37-37-90 0-52 37-91l651-650q38-38 91-38 52 0 90 38l75 74q38 38 38 91t-38 91l-293 293h704q52 0 84.5 37.5t32.5 90.5z",fill:"#fff"})],-1)})],p=[e(function(){return o.createElementVNode("svg",{width:"25",height:"25",viewBox:"0 0 1792 1915",xmlns:"http://www.w3.org/2000/svg"},[o.createElementVNode("path",{d:"M1600 960q0 54-37 91l-651 651q-39 37-91 37-51 0-90-37l-75-75q-38-38-38-91t38-91l293-293h-704q-52 0-84.5-37.5t-32.5-90.5v-128q0-53 32.5-90.5t84.5-37.5h704l-293-294q-38-36-38-90t38-90l75-75q38-38 90-38 53 0 91 38l651 651q37 35 37 90z",fill:"#fff"})],-1)})],f={key:0,class:"footer-v-img"},I=["src","onClick"],w={class:"content-v-img"},x=["src"];t.render=function(e,t,n,r,i,a){return o.openBlock(),o.createBlock(o.Transition,{appear:"",name:"v-img-fade"},{default:o.withCtx(function(){return[i.closed?o.createCommentVNode("",!0):(o.openBlock(),o.createElementBlock("div",{key:0,class:"fullscreen-v-img",onClick:t[4]||(t[4]=o.withModifiers(function(){return a.close&&a.close.apply(a,arguments)},["self"]))},[o.createElementVNode("div",s,[o.createElementVNode("span",c,[1<i.images.length?(o.openBlock(),o.createElementBlock("span",l,o.toDisplayString(i.currentImageIndex+1)+"/"+o.toDisplayString(i.images.length),1)):o.createCommentVNode("",!0)]),o.createElementVNode("span",u,o.toDisplayString(i.titles[i.currentImageIndex]),1),o.createElementVNode("div",d,[i.sourceButtons[i.currentImageIndex]?(o.openBlock(),o.createElementBlock("span",m,[o.createElementVNode("a",{href:i.images[i.currentImageIndex],target:"_blank"},v,8,g)])):o.createCommentVNode("",!0),o.createElementVNode("span",{onClick:t[0]||(t[0]=function(){return a.close&&a.close.apply(a,arguments)})}," × ")])]),o.createVNode(o.Transition,{appear:"",name:"v-img-fade"},{default:o.withCtx(function(){return[i.visibleUI&&1!==i.images.length?(o.openBlock(),o.createElementBlock("span",{key:0,class:"prev-v-img",onClick:t[1]||(t[1]=function(){return a.prev&&a.prev.apply(a,arguments)})},h)):o.createCommentVNode("",!0)]}),_:1}),o.createVNode(o.Transition,{appear:"",name:"v-img-fade"},{default:o.withCtx(function(){return[i.visibleUI&&1!==i.images.length?(o.openBlock(),o.createElementBlock("span",{key:0,class:"next-v-img",onClick:t[2]||(t[2]=function(){return a.next&&a.next.apply(a,arguments)})},p)):o.createCommentVNode("",!0)]}),_:1}),i.thumbnails&&1<i.images.length?(o.openBlock(),o.createElementBlock("div",f,[(o.openBlock(!0),o.createElementBlock(o.Fragment,null,o.renderList(i.images,function(e,t){return o.openBlock(),o.createElementBlock("img",{key:t,src:e,onClick:function(e){return a.select(t)},class:o.normalizeClass({"is-selected":i.currentImageIndex==t})},null,10,I)}),128))])):o.createCommentVNode("",!0),o.createElementVNode("div",w,[o.createElementVNode("img",{src:i.images[i.currentImageIndex],onClick:t[3]||(t[3]=function(){return a.next&&a.next.apply(a,arguments)})},null,8,x)])]))]}),_:1})},t.__scopeId="data-v-2f4a4339";function k(e,t,n){var r="pointer",i=t.arg||null,a=void 0,o=void 0,s=e.src,c=void 0,l=void 0,u={};return n.altAsTitle&&(c=e.alt),a=n.openOn,o=n.sourceButton,l=n.thumbnails,void 0!==t.value&&(r=t.value.cursor||r,i=t.value.group||i,a=t.value.openOn||a,s=t.value.src||s,c=t.value.title||c,u.opened=t.value.opened,u.closed=t.value.closed,u.changed=t.value.changed,void 0!==t.value.sourceButton&&(o=t.value.sourceButton),void 0!==t.value.thumbnails&&(l=t.value.thumbnails)),e.setAttribute("data-vue-img-src",s),i&&e.setAttribute("data-vue-img-group",i),c&&e.setAttribute("data-vue-img-title",c),o&&e.setAttribute("data-vue-img-source-button",o),l&&e.setAttribute("data-vue-img-thumbnails",l),s||console.error("v-img element missing src parameter."),{cursor:e.style.cursor=r,src:s,group:i,title:c,events:u,sourceButton:o,openOn:a,thumbnails:l}}function n(i,o){var a=i.extend(t);o=r({altAsTitle:!1,sourceButton:!1,thumbnails:!1,openOn:"click"},o),i.directive("img",{update:function(e,t,n,r){var i=void 0,a=void 0,r=(r.data.attrs&&n.data.attrs&&(a=r.data.attrs.src!==n.data.attrs.src,o.altAsTitle&&(i=r.data.attrs.alt!==n.data.attrs.alt)),t.oldValue!==t.value);(a||i||r)&&k(e,t,o)},bind:function(t,e){var n=k(t,e,o),r=window.vueImg;r||((e=document.createElement("div")).setAttribute("id","imageScreen"),document.querySelector("body").appendChild(e),r=window.vueImg=(new a).$mount("#imageScreen")),t.addEventListener(n.openOn,function(){var e=void 0,e=t.dataset.vueImgGroup?[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(document.querySelectorAll('img[data-vue-img-group="'+t.dataset.vueImgGroup+'"]'))):[t];i.set(r,"images",e.map(function(e){return e.dataset.vueImgSrc})),i.set(r,"titles",e.map(function(e){return e.dataset.vueImgTitle})),i.set(r,"sourceButtons",e.map(function(e){return"true"===e.dataset.vueImgSourceButton})),i.set(r,"thumbnails","true"===t.dataset.vueImgThumbnails),i.set(r,"currentImageIndex",e.indexOf(t)),i.set(r,"handlers",n.events),i.set(r,"closed",!1)})}})}var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n,r=arguments[t];for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};return"undefined"!=typeof window&&window.Vue&&window.Vue.use(n),n});
//# sourceMappingURL=v-img.js.map
