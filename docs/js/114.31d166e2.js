"use strict";(self["webpackChunkvue_project2022"]=self["webpackChunkvue_project2022"]||[]).push([[114],{3114:function(e,t,a){a.r(t),a.d(t,{default:function(){return U}});var n=a(3396),l=a(9242),o=a(7139);const s=e=>((0,n.dD)("data-v-0bb237c9"),e=e(),(0,n.Cn)(),e),m={class:"reviews__rating"},r=s((()=>(0,n._)("p",{class:"reviews__text"},"Evaluate:",-1))),i={class:"reviews__form form"},c={class:"form__block"},p=s((()=>(0,n._)("label",{class:"form__label",for:"feedback"},"Feedback text",-1))),u={class:"form__wrapper"},_={class:"form__block"},d=s((()=>(0,n._)("label",{class:"form__label",for:"name"},"Full name",-1))),f={class:"form__block"},g=s((()=>(0,n._)("label",{class:"form__label",for:"email"},"Email",-1))),v={class:"reviews__list"},w={class:"pagination"},b={class:"pagination__show"},h={key:0,class:"pagination__list"};function k(e,t,a,s,k,C){const x=(0,n.up)("AppRating"),y=(0,n.up)("app-button"),S=(0,n.up)("app-comment"),z=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",m,[r,(0,n.Wm)(x,{starSize:"32"})]),(0,n._)("div",i,[(0,n._)("div",c,[p,(0,n.wy)((0,n._)("textarea",{class:"form__textarea",name:"feedback",id:"feedback","onUpdate:modelValue":t[0]||(t[0]=e=>k.text=e)},null,512),[[l.nr,k.text]])]),(0,n._)("div",u,[(0,n._)("div",_,[d,(0,n.wy)((0,n._)("input",{class:"form__input",type:"text",name:"name",id:"name","onUpdate:modelValue":t[1]||(t[1]=e=>k.fullName=e)},null,512),[[l.nr,k.fullName]])]),(0,n._)("div",f,[g,(0,n.wy)((0,n._)("input",{class:"form__input",type:"email",name:"email",id:"email","onUpdate:modelValue":t[2]||(t[2]=e=>k.email=e)},null,512),[[l.nr,k.email]])]),(0,n.Wm)(y,{class:"form__btn",name:"SEND",variant:"colored",onClick:t[3]||(t[3]=t=>e.createComment({productId:k.productId,fullName:k.fullName,email:k.email,text:k.text}))})])]),(0,n._)("div",v,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.comments,(e=>((0,n.wg)(),(0,n.j4)(S,{key:e.id,name:e.fullName,date:e.createdAt,text:e.text},null,8,["name","date","text"])))),128))]),(0,n._)("div",w,[(0,n._)("span",b,"Showing "+(0,o.zw)(e.pagesSize)+" of "+(0,o.zw)(e.total)+" result",1),e.pagesCount?((0,n.wg)(),(0,n.iD)("ul",h,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.pagesCount,(t=>((0,n.wg)(),(0,n.iD)("li",{class:"pagination__item",key:t},[(0,n.Wm)(z,{to:{path:`${e.$route.fullPath}`,query:{page:t}},class:"pagination__number"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,o.zw)(t),1)])),_:2},1032,["to"])])))),128))])):(0,n.kq)("",!0)])],64)}var C=a(2980),x=a(4801);const y={class:"comment"},S={class:"comment__head"},z={class:"comment__name"},I={class:"comment__date"},D={class:"comment__text"};function q(e,t,a,l,s,m){const r=(0,n.up)("app-rating");return(0,n.wg)(),(0,n.iD)("div",y,[(0,n._)("div",S,[(0,n._)("h4",z,(0,o.zw)(a.name),1),(0,n._)("p",I,(0,o.zw)(a.date),1)]),(0,n.Wm)(r,{class:"comment__rating",starSize:"22",fillStarColor:"#EBFF00",rating:3}),(0,n._)("p",D,(0,o.zw)(a.text),1)])}var A={name:"AppComment",components:{AppRating:C.Z},props:{name:{type:String,required:!0},date:{type:String,required:!0},text:{type:String,required:!0}}},N=a(89);const $=(0,N.Z)(A,[["render",q],["__scopeId","data-v-6fdafc6c"]]);var Z=$,E=a(65),F={name:"ProductReviews",components:{AppRating:C.Z,AppButton:x.Z,AppComment:Z},data(){return{productId:this.$route.params.productId,fullName:null,email:null,text:null}},computed:{...(0,E.Se)("Comments",["comments","pagesCount","pagesSize","total"])},watch:{$route(){this.getComments({productId:this.productId,page:this.$route.query.page})}},created(){this.getComments({productId:this.productId,page:this.$route.query.page})},methods:{...(0,E.nv)("Comments",["getComments","createComment"])}};const R=(0,N.Z)(F,[["render",k],["__scopeId","data-v-0bb237c9"]]);var U=R}}]);
//# sourceMappingURL=114.31d166e2.js.map