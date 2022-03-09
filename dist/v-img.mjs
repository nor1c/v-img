import{openBlock,createBlock,Transition,withCtx,createElementBlock,withModifiers,createElementVNode,toDisplayString,createCommentVNode,createVNode,Fragment,renderList,normalizeClass,pushScopeId,popScopeId}from"vue";var script={data:function(){return{images:[],titles:[],sourceButtons:[],visibleUI:!0,currentImageIndex:0,closed:!0,uiTimeout:null,handlers:{},thumbnails:!1}},watch:{closed:function(e){e&&this.handlers.closed&&this.handlers.closed(),!e&&this.handlers.opened&&this.handlers.opened()}},methods:{fireChangeEvent:function(){this.handlers.changed&&this.handlers.changed(this.currentImageIndex)},close:function(){this.closed||(document.querySelector("body").classList.remove("body-fs-v-img"),this.images=[],this.currentImageIndex=0,this.closed=!0)},next:function(){!this.closed&&1<this.images.length&&(this.currentImageIndex+1<this.images.length?this.currentImageIndex++:this.currentImageIndex=0,this.fireChangeEvent())},select:function(e){this.currentImageIndex=e},prev:function(){!this.closed&&1<this.images.length&&(0<this.currentImageIndex?this.currentImageIndex--:this.currentImageIndex=this.images.length-1,this.fireChangeEvent())},showUI:function(){var e=this;this.closed||(clearTimeout(this.uiTimeout),this.visibleUI=!0,this.uiTimeout=setTimeout(function(){e.visibleUI=!1},3500))}},created:function(){var t=this;window.addEventListener("keyup",function(e){27!==e.keyCode&&81!==e.keyCode||t.close(),39!==e.keyCode&&76!==e.keyCode||t.next(),37!==e.keyCode&&72!==e.keyCode||t.prev()}),window.addEventListener("scroll",function(){t.close()}),window.addEventListener("mousemove",function(){t.showUI()})}},_withScopeId=function(e){return pushScopeId("data-v-2f4a4339"),e=e(),popScopeId(),e},_hoisted_1={class:"header-v-img"},_hoisted_2={class:"count-v-img"},_hoisted_3={key:0},_hoisted_4={class:"title-v-img"},_hoisted_5={class:"buttons-v-img"},_hoisted_6={key:0},_hoisted_7=["href"],_hoisted_8=_withScopeId(function(){return createElementVNode("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",id:"Capa_1",x:"0px",y:"0px",width:"512px",height:"512px",viewBox:"0 0 475.078 475.077",style:{"enable-background":"new 0 0 475.078 475.077"},"xml:space":"preserve"},[createElementVNode("path",{d:"M467.083,318.627c-5.324-5.328-11.8-7.994-19.41-7.994H315.195l-38.828,38.827c-11.04,10.657-23.982,15.988-38.828,15.988    c-14.843,0-27.789-5.324-38.828-15.988l-38.543-38.827H27.408c-7.612,0-14.083,2.669-19.414,7.994    C2.664,323.955,0,330.427,0,338.044v91.358c0,7.614,2.664,14.085,7.994,19.414c5.33,5.328,11.801,7.99,19.414,7.99h420.266    c7.61,0,14.086-2.662,19.41-7.99c5.332-5.329,7.994-11.8,7.994-19.414v-91.358C475.078,330.427,472.416,323.955,467.083,318.627z     M360.025,414.841c-3.621,3.617-7.905,5.424-12.854,5.424s-9.227-1.807-12.847-5.424c-3.614-3.617-5.421-7.898-5.421-12.844    c0-4.948,1.807-9.236,5.421-12.847c3.62-3.62,7.898-5.431,12.847-5.431s9.232,1.811,12.854,5.431    c3.613,3.61,5.421,7.898,5.421,12.847C365.446,406.942,363.638,411.224,360.025,414.841z M433.109,414.841    c-3.614,3.617-7.898,5.424-12.848,5.424c-4.948,0-9.229-1.807-12.847-5.424c-3.613-3.617-5.42-7.898-5.42-12.844    c0-4.948,1.807-9.236,5.42-12.847c3.617-3.62,7.898-5.431,12.847-5.431c4.949,0,9.233,1.811,12.848,5.431    c3.617,3.61,5.427,7.898,5.427,12.847C438.536,406.942,436.729,411.224,433.109,414.841z",fill:"#FFFFFF"}),createElementVNode("path",{d:"M224.692,323.479c3.428,3.613,7.71,5.421,12.847,5.421c5.141,0,9.418-1.808,12.847-5.421l127.907-127.908    c5.899-5.519,7.234-12.182,3.997-19.986c-3.23-7.421-8.847-11.132-16.844-11.136h-73.091V36.543c0-4.948-1.811-9.231-5.421-12.847    c-3.62-3.617-7.901-5.426-12.847-5.426h-73.096c-4.946,0-9.229,1.809-12.847,5.426c-3.615,3.616-5.424,7.898-5.424,12.847V164.45    h-73.089c-7.998,0-13.61,3.715-16.846,11.136c-3.234,7.801-1.903,14.467,3.999,19.986L224.692,323.479z",fill:"#FFFFFF"})],-1)}),_hoisted_9=[_hoisted_8],_hoisted_10=_withScopeId(function(){return createElementVNode("svg",{width:"25",height:"25",viewBox:"0 0 1792 1915",xmlns:"http://www.w3.org/2000/svg"},[createElementVNode("path",{d:"M1664 896v128q0 53-32.5 90.5t-84.5 37.5h-704l293 294q38 36 38 90t-38 90l-75 76q-37 37-90 37-52 0-91-37l-651-652q-37-37-37-90 0-52 37-91l651-650q38-38 91-38 52 0 90 38l75 74q38 38 38 91t-38 91l-293 293h704q52 0 84.5 37.5t32.5 90.5z",fill:"#fff"})],-1)}),_hoisted_11=[_hoisted_10],_hoisted_12=_withScopeId(function(){return createElementVNode("svg",{width:"25",height:"25",viewBox:"0 0 1792 1915",xmlns:"http://www.w3.org/2000/svg"},[createElementVNode("path",{d:"M1600 960q0 54-37 91l-651 651q-39 37-91 37-51 0-90-37l-75-75q-38-38-38-91t38-91l293-293h-704q-52 0-84.5-37.5t-32.5-90.5v-128q0-53 32.5-90.5t84.5-37.5h704l-293-294q-38-36-38-90t38-90l75-75q38-38 90-38 53 0 91 38l651 651q37 35 37 90z",fill:"#fff"})],-1)}),_hoisted_13=[_hoisted_12],_hoisted_14={key:0,class:"footer-v-img"},_hoisted_15=["src","onClick"],_hoisted_16={class:"content-v-img"},_hoisted_17=["src"];function render(e,t,n,i,o,s){return openBlock(),createBlock(Transition,{appear:"",name:"v-img-fade"},{default:withCtx(function(){return[o.closed?createCommentVNode("",!0):(openBlock(),createElementBlock("div",{key:0,class:"fullscreen-v-img",onClick:t[4]||(t[4]=withModifiers(function(){return s.close&&s.close.apply(s,arguments)},["self"]))},[createElementVNode("div",_hoisted_1,[createElementVNode("span",_hoisted_2,[1<o.images.length?(openBlock(),createElementBlock("span",_hoisted_3,toDisplayString(o.currentImageIndex+1)+"/"+toDisplayString(o.images.length),1)):createCommentVNode("",!0)]),createElementVNode("span",_hoisted_4,toDisplayString(o.titles[o.currentImageIndex]),1),createElementVNode("div",_hoisted_5,[o.sourceButtons[o.currentImageIndex]?(openBlock(),createElementBlock("span",_hoisted_6,[createElementVNode("a",{href:o.images[o.currentImageIndex],target:"_blank"},_hoisted_9,8,_hoisted_7)])):createCommentVNode("",!0),createElementVNode("span",{onClick:t[0]||(t[0]=function(){return s.close&&s.close.apply(s,arguments)})}," × ")])]),createVNode(Transition,{appear:"",name:"v-img-fade"},{default:withCtx(function(){return[o.visibleUI&&1!==o.images.length?(openBlock(),createElementBlock("span",{key:0,class:"prev-v-img",onClick:t[1]||(t[1]=function(){return s.prev&&s.prev.apply(s,arguments)})},_hoisted_11)):createCommentVNode("",!0)]}),_:1}),createVNode(Transition,{appear:"",name:"v-img-fade"},{default:withCtx(function(){return[o.visibleUI&&1!==o.images.length?(openBlock(),createElementBlock("span",{key:0,class:"next-v-img",onClick:t[2]||(t[2]=function(){return s.next&&s.next.apply(s,arguments)})},_hoisted_13)):createCommentVNode("",!0)]}),_:1}),o.thumbnails&&1<o.images.length?(openBlock(),createElementBlock("div",_hoisted_14,[(openBlock(!0),createElementBlock(Fragment,null,renderList(o.images,function(e,t){return openBlock(),createElementBlock("img",{key:t,src:e,onClick:function(e){return s.select(t)},class:normalizeClass({"is-selected":o.currentImageIndex==t})},null,10,_hoisted_15)}),128))])):createCommentVNode("",!0),createElementVNode("div",_hoisted_16,[createElementVNode("img",{src:o.images[o.currentImageIndex],onClick:t[3]||(t[3]=function(){return s.next&&s.next.apply(s,arguments)})},null,8,_hoisted_17)])]))]}),_:1})}script.render=render,script.__scopeId="data-v-2f4a4339";var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n,i=arguments[t];for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},toConsumableArray=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},addPluginAttributes=function(e,t,n){var i="pointer",o=t.arg||null,s=void 0,r=void 0,a=e.src,c=void 0,l=void 0,d={};return n.altAsTitle&&(c=e.alt),s=n.openOn,r=n.sourceButton,l=n.thumbnails,void 0!==t.value&&(i=t.value.cursor||i,o=t.value.group||o,s=t.value.openOn||s,a=t.value.src||a,c=t.value.title||c,d.opened=t.value.opened,d.closed=t.value.closed,d.changed=t.value.changed,void 0!==t.value.sourceButton&&(r=t.value.sourceButton),void 0!==t.value.thumbnails&&(l=t.value.thumbnails)),e.setAttribute("data-vue-img-src",a),o&&e.setAttribute("data-vue-img-group",o),c&&e.setAttribute("data-vue-img-title",c),r&&e.setAttribute("data-vue-img-source-button",r),l&&e.setAttribute("data-vue-img-thumbnails",l),a||console.error("v-img element missing src parameter."),{cursor:e.style.cursor=i,src:a,group:o,title:c,events:d,sourceButton:r,openOn:s,thumbnails:l}},install=function(o,r){var s=o.extend(script);r=_extends({altAsTitle:!1,sourceButton:!1,thumbnails:!1,openOn:"click"},r),o.directive("img",{update:function(e,t,n,i){var o=void 0,s=void 0,i=(i.data.attrs&&n.data.attrs&&(s=i.data.attrs.src!==n.data.attrs.src,r.altAsTitle&&(o=i.data.attrs.alt!==n.data.attrs.alt)),t.oldValue!==t.value);(s||o||i)&&addPluginAttributes(e,t,r)},bind:function(t,e){var n=addPluginAttributes(t,e,r),i=window.vueImg;i||((e=document.createElement("div")).setAttribute("id","imageScreen"),document.querySelector("body").appendChild(e),i=window.vueImg=(new s).$mount("#imageScreen")),t.addEventListener(n.openOn,function(){var e=void 0,e=t.dataset.vueImgGroup?[].concat(toConsumableArray(document.querySelectorAll('img[data-vue-img-group="'+t.dataset.vueImgGroup+'"]'))):[t];o.set(i,"images",e.map(function(e){return e.dataset.vueImgSrc})),o.set(i,"titles",e.map(function(e){return e.dataset.vueImgTitle})),o.set(i,"sourceButtons",e.map(function(e){return"true"===e.dataset.vueImgSourceButton})),o.set(i,"thumbnails","true"===t.dataset.vueImgThumbnails),o.set(i,"currentImageIndex",e.indexOf(t)),o.set(i,"handlers",n.events),o.set(i,"closed",!1)})}})};"undefined"!=typeof window&&window.Vue&&window.Vue.use(install);export{install as default};
//# sourceMappingURL=v-img.mjs.map
