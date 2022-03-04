"use strict";(self["webpackChunkalinea_ui"]=self["webpackChunkalinea_ui"]||[]).push([[98,268],{5268:(e,t,o)=>{o.r(t),o.d(t,{default:()=>$});var l=o(3673),i=o(2323),a=o(8880);const n={class:"text-title text-h6"},s={class:"row mt-5"},m={class:"col-12"};function u(e,t,o,u,r,d){const c=(0,l.up)("q-space"),h=(0,l.up)("q-tooltip"),g=(0,l.up)("q-btn"),p=(0,l.up)("q-bar"),w=(0,l.up)("q-card-section"),f=(0,l.up)("q-separator"),_=(0,l.up)("SchemaForm"),b=(0,l.up)("q-card"),k=(0,l.up)("q-dialog");return(0,l.wg)(),(0,l.j4)(k,{modelValue:e.dashboardDialog,"onUpdate:modelValue":t[4]||(t[4]=t=>e.dashboardDialog=t),persistent:"",maximized:r.maximized,onBeforeHide:t[5]||(t[5]=t=>e.onResetFormData()),"transition-show":"slide-up","transition-hide":"slide-down"},{default:(0,l.w5)((()=>[(0,l.Wm)(b,{class:"my-card"},{default:(0,l.w5)((()=>[(0,l.Wm)(p,{class:"my-bar bg-grey-4 no-bottom-radius"},{default:(0,l.w5)((()=>[(0,l.Wm)(c),r.maximized?((0,l.wg)(),(0,l.j4)(g,{key:1,class:"gt-sm",dense:"",flat:"",icon:"las la-minus",onClick:t[1]||(t[1]=e=>d.minimize())},{default:(0,l.w5)((()=>[(0,l.Wm)(h,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)(e.$t("tooltip_minimize")),1)])),_:1})])),_:1})):((0,l.wg)(),(0,l.j4)(g,{key:0,dense:"",flat:"",icon:"las la-stop",onClick:t[0]||(t[0]=e=>d.maximize())},{default:(0,l.w5)((()=>[(0,l.Wm)(h,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)(e.$t("tooltip_maximize")),1)])),_:1})])),_:1})),(0,l.Wm)(g,{dense:"",flat:"",icon:"las la-times",onClick:t[2]||(t[2]=e=>d.close())},{default:(0,l.w5)((()=>[(0,l.Wm)(h,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)(e.$t("close")),1)])),_:1})])),_:1})])),_:1}),(0,l.Wm)(w,{horizontal:""},{default:(0,l.w5)((()=>[(0,l.Wm)(w,null,{default:(0,l.w5)((()=>[(0,l._)("div",n,(0,i.zw)(d.getDialogTitle),1)])),_:1}),(0,l.Wm)(c),(0,l.Wm)(w,null,{default:(0,l.w5)((()=>[(0,l.Wm)(g,{flat:"",type:"submit",label:e.$q.screen.gt.sm?e.$t("save"):"",icon:"la la-save",class:"q-ml-sm bg-primary text-white",onClick:t[3]||(t[3]=(0,a.iM)((e=>d.getDialogEvent.onSave()),["prevent"]))},{default:(0,l.w5)((()=>[(0,l.Wm)(h,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)(e.$t("tooltip_save")),1)])),_:1})])),_:1},8,["label"])])),_:1})])),_:1}),(0,l.Wm)(f),(0,l.Wm)(w,null,{default:(0,l.w5)((()=>[(0,l._)("div",s,[(0,l._)("div",m,[(0,l.Wm)(_,{schema:d.getDialogSchema},null,8,["schema"])])])])),_:1})])),_:1})])),_:1},8,["modelValue","maximized"])}var r=o(1959),d=o(7087),c=o(3617);const h={name:"DashboardDialog",components:{SchemaForm:d.SchemaForm},setup(){const e=(0,r.iH)({});return(0,d.useSchemaForm)(e),{userData:e}},data(){return{maximized:this.$q.screen.xs}},methods:{onSave(){},maximize(){this.maximized=!0},minimize(){this.maximized=!1},close(){this.$store.commit("ui/hideDashboardDialog")}},computed:{...(0,c.Se)({getDialogForm:"ui/getDialogForm"}),getDialogTitle(){return this.getDialogForm.title},getDialogSchema(){return this.getDialogForm.schema},getDialogModel(){return this.getDialogForm.model},getDialogEvent(){return this.getDialogForm.events}}};var g=o(4260),p=o(6778),w=o(151),f=o(846),_=o(2025),b=o(3002),k=o(8870),v=o(5589),D=o(5869),W=o(7518),q=o.n(W);const y=(0,g.Z)(h,[["render",u],["__scopeId","data-v-b531f3f8"]]),$=y;q()(h,"components",{QDialog:p.Z,QCard:w.Z,QBar:f.Z,QSpace:_.Z,QBtn:b.Z,QTooltip:k.Z,QCardSection:v.Z,QSeparator:D.Z})},2098:(e,t,o)=>{o.r(t),o.d(t,{default:()=>F});var l=o(3673),i=o(2323),a=o(8880);const n={key:0},s={key:0},m={key:1};function u(e,t,o,u,r,d){const c=(0,l.up)("ViewSwitcher"),h=(0,l.up)("q-icon"),g=(0,l.up)("q-item-section"),p=(0,l.up)("q-item"),w=(0,l.up)("q-expansion-item"),f=(0,l.up)("q-list"),_=(0,l.up)("DashboardDialog");return t[0]||((0,l.qZ)(-1),t[0]=e.isAuthenticated?((0,l.wg)(),(0,l.iD)("div",n,[(0,l.Wm)(f,{class:"rounded-borders"},{default:(0,l.w5)((()=>[(0,l._)("div",null,[(0,l.Wm)(c)]),e.isProfileCompleted?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("div",s,[(0,l.Wm)(p,{onClick:t=>e.onCompleteProfile(),clickable:""},{default:(0,l.w5)((()=>[(0,l.Wm)(g,{avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(h,{name:"la la-user"})])),_:1}),(0,l.Wm)(g,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)(e.$t("update_profile")),1)])),_:1})])),_:1},8,["onClick"])])),e.isNotEmpty(e.menus)?((0,l.wg)(),(0,l.iD)("div",m,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.menus,((e,t)=>((0,l.wg)(),(0,l.iD)("div",{key:t},[0===e.menu.children.length?((0,l.wg)(),(0,l.j4)(p,{key:0,to:e.menu.target_url},{default:(0,l.w5)((()=>[void 0!==e.menu.icon&&null!==e.menu.icon?((0,l.wg)(),(0,l.j4)(g,{key:0,avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(h,{name:e.menu.icon},null,8,["name"])])),_:2},1024)):(0,l.kq)("",!0),(0,l.Wm)(g,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)(e.menu.label),1)])),_:2},1024)])),_:2},1032,["to"])):((0,l.wg)(),(0,l.j4)(w,{key:1,"expand-icon":"las la-chevron-down",group:"menu","expand-separator":"",duration:100,icon:e.menu.icon,label:e.menu.label},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.menu.children,((e,t)=>((0,l.wg)(),(0,l.j4)(p,{class:"bg-blue-grey-1 q-pl-lg",clickable:"","inset-level":0,key:t,to:e.target_url},{default:(0,l.w5)((()=>[void 0!==e.icon&&null!==e.icon?((0,l.wg)(),(0,l.j4)(g,{key:0,avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(h,{name:e.icon},null,8,["name"])])),_:2},1024)):(0,l.kq)("",!0),(0,l.Wm)(g,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)(e.label),1)])),_:2},1024)])),_:2},1032,["to"])))),128))])),_:2},1032,["icon","label"]))])))),128))])):(0,l.kq)("",!0),e.isNotEmpty(e.menus)||"author"!==e.getCurrentRole?(0,l.kq)("",!0):((0,l.wg)(),(0,l.j4)(p,{key:2,onClick:(0,a.iM)((t=>e.onBecomeAuthor()),["stop"]),clickable:""},{default:(0,l.w5)((()=>[(0,l.Wm)(g,{avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(h,{name:"las la-feather-alt"})])),_:1}),(0,l.Wm)(g,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)(e.$t("become_author")),1)])),_:1})])),_:1},8,["onClick"])),(0,l.Wm)(p,{onClick:(0,a.iM)((t=>e.doLogout()),["stop"]),clickable:""},{default:(0,l.w5)((()=>[(0,l.Wm)(g,{avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(h,{name:"la la-power-off"})])),_:1}),(0,l.Wm)(g,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)(e.$t("logout")),1)])),_:1})])),_:1},8,["onClick"])])),_:1}),(0,l.Wm)(_)])):(0,l.kq)("",!0),(0,l.qZ)(1),t[0])}function r(e,t,o,a,n,s){const m=(0,l.up)("q-item-section"),u=(0,l.up)("q-item"),r=(0,l.up)("q-list"),d=(0,l.up)("q-menu"),c=(0,l.up)("q-btn"),h=(0,l.up)("q-card-section"),g=(0,l.up)("q-card");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l.Wm)(g,{square:"",class:"shadow-1",style:{height:"50px"}},{default:(0,l.w5)((()=>[(0,l.Wm)(h,{class:"title",style:{padding:"7px"}},{default:(0,l.w5)((()=>[e.isProfileCompleted?((0,l.wg)(),(0,l.j4)(c,{key:0,color:"primary",label:e.getCurrentRole,tooltip:e.$t("switch_view"),class:"full-width",flat:""},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{fit:"",cover:"",anchor:"top left",class:"bg-accent"},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{style:{"min-width":"100px"}},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.getSession.roles,((t,o)=>((0,l.wg)(),(0,l.j4)(u,{clickable:"",onClick:e=>s.onSwitchDashboard(t),key:o},{default:(0,l.w5)((()=>[(0,l.Wm)(m,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)(e.$t(t)),1)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1})])),_:1},8,["label","tooltip"])):(0,l.kq)("",!0)])),_:1})])),_:1})])}const d={name:"ViewSwitcher",setup(){return{}},mounted(){const e=this.$secureStorage.getItem("current_role");void 0!==e&&null!==e||this.$secureStorage.setItem("current_role","user")},methods:{onSwitchDashboard(e){void 0!==e&&(this.$secureStorage.removeItem("menus"),this.$store.dispatch("model/switchView",{role:e,uuid:this.getSession.decodedToken.sub}).then((e=>{this.$store.dispatch("keycloak/assignRole",e),this.$store.dispatch("model/fetchMenus"),this.$router.push({to:"/"}),this.$router.go()})))}}};var c=o(4260),h=o(151),g=o(5589),p=o(3002),w=o(811),f=o(7011),_=o(3414),b=o(2035),k=o(7518),v=o.n(k);const D=(0,c.Z)(d,[["render",r]]),W=D;v()(d,"components",{QCard:h.Z,QCardSection:g.Z,QBtn:p.Z,QMenu:w.Z,QList:f.Z,QItem:_.Z,QItemSection:b.Z});var q=o(3617),y=o(5268),$=o(1959),S=o(6053);o(7087);const Z=(0,$.XI)(S.Z),z={name:{component:Z,label:"Name",name:"name",required:!0,type:"text"},bio:{component:Z,label:"Bio",name:"bio",type:"textarea"},phone:{component:Z,label:"Phone",name:"phone",type:"phone"},website:{component:Z,label:"Website",name:"website",type:"text",value:null}},x=z,C=(0,l.aZ)({name:"EssentialLink",components:{ViewSwitcher:W,DashboardDialog:y["default"]},computed:{...(0,q.Se)({menus:"model/getMenus"}),getDialogModel(){return this.getDialogForm.model}},created(){this.$store.dispatch("model/fetchProfile").then((e=>{console.log(e)}))},mounted(){this.isAuthenticated&&this.$store.dispatch("model/fetchMenus")},methods:{onCompleteProfile(){this.$store.commit("ui/showDashboardDialog",{title:this.$t("complete_profile"),schema:x,events:{onSave:()=>{this.onSaveProfile()}}})},onSaveProfile(){if(void 0!==this.getDialogModel&&null!==this.getDialogModel){const e={name:void 0!==this.getDialogModel.name?this.getDialogModel.name:this.getProfile.name,bio:void 0!==this.getDialogModel.bio?this.getDialogModel.bio:this.getProfile.bio,email:void 0!==this.getDialogModel.email?this.getDialogModel.email:this.getProfile.email,phone:void 0!==this.getDialogModel.phone?this.getDialogModel.phone:this.getProfile.phone,website:void 0!==this.getDialogModel.website?this.getDialogModel.website:this.getProfile.website},t=this.$store.dispatch("model/createProfile",e);void 0!==t&&null!==t&&t.then((()=>{this.$q.notify({color:"positive",message:this.$t("succesfully_saved")}),this.$store.commit("ui/hideDashboardDialog"),this.$store.commit("model/setProfile",null)}))}}}});var M=o(4554),Q=o(429);const P=(0,c.Z)(C,[["render",u]]),F=P;v()(C,"components",{QList:f.Z,QItem:_.Z,QItemSection:b.Z,QIcon:M.Z,QExpansionItem:Q.Z})}}]);