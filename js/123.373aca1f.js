"use strict";(globalThis["webpackChunkkurzus_web"]=globalThis["webpackChunkkurzus_web"]||[]).push([[123],{4622:(e,t,s)=>{s.d(t,{b:()=>o});var r=s(587);s(660);const o=(0,r.nY)("VideoCourse",{state:()=>({selectedVideoCourse:null}),actions:{SET_DATA(e){this[e.key]=e.data}},getters:{getSelectedVideoCourse:e=>e.selectedVideoCourse},persist:{storage:localStorage,path:["selectedVideoCourse"]}})},6123:(e,t,s)=>{s.r(t),s.d(t,{default:()=>C});var r=s(1758);const o=e=>((0,r.Qi)("data-v-4e0efc8f"),e=e(),(0,r.jt)(),e),i=o((()=>(0,r.Lk)("div",{class:"row justify-between"},[(0,r.Lk)("p",{class:"custom-title self-center"},"Video Course Detail")],-1)));function a(e,t,s,o,a,u){const n=(0,r.g2)("q-page");return(0,r.uX)(),(0,r.Wv)(n,{class:"custom-page"},{default:(0,r.k6)((()=>[i])),_:1})}var u=s(4622);const n={name:"CourseDetailPage",data(){return{isLoading:!1}},computed:{url(){return window.location.href.split("#")[0]},isXSmallScreen(){return this.$q.screen.width<=350},isSmallScreen(){return this.$q.screen.width<=500},isMediumScreen(){return this.$q.screen.width<=750},videoCourseStore(){return(0,u.b)()},getSelectedVideoCourse(){return this.videoCourseStore.getVideoSelectedCourse}},methods:{}};var c=s(2807),d=s(3177),l=s(8582),h=s.n(l);const g=(0,c.A)(n,[["render",a],["__scopeId","data-v-4e0efc8f"]]),C=g;h()(n,"components",{QPage:d.A})}}]);