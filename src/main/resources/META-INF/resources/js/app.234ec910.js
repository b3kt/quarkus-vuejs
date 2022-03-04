(()=>{var e={2477:(e,t,o)=>{"use strict";o(5363),o(71);var r=o(8880),n=o(9592),i=o(3673);function a(e,t,o,r,n,a){const s=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(s)}const s=(0,i.aZ)({name:"App",mounted(){}});var l=o(4260);const u=(0,l.Z)(s,[["render",a]]),d=u;var c=o(2919),m=o(7083),p=o(9582),f=o(9447);const h=f.secureStorage.getItem("current_role"),g=void 0!==h&&null!==h&&"user"===h,_=()=>g?{meta:{requiresAuth:!1},name:"user",path:"/user",component:()=>Promise.all([o.e(736),o.e(252)]).then(o.bind(o,5252)),children:[]}:{},y=_(),b=y,v=[{meta:{requiresAuth:!1},path:":catchAll(.*)*",component:()=>Promise.all([o.e(736),o.e(601)]).then(o.bind(o,7601))},{meta:{requiresAuth:!1},path:"/",component:()=>Promise.all([o.e(736),o.e(601)]).then(o.bind(o,7601))},{meta:{requiresAuth:!1},path:"stories",component:()=>Promise.all([o.e(736),o.e(267)]).then(o.bind(o,3267))},{meta:{requiresAuth:!1},path:"story/:story_uid?",component:()=>Promise.all([o.e(736),o.e(93)]).then(o.bind(o,1093))},{meta:{requiresAuth:!1},path:"books",component:()=>Promise.all([o.e(736),o.e(681)]).then(o.bind(o,681))},{meta:{requiresAuth:!0},path:"login",component:()=>Promise.all([o.e(736),o.e(773)]).then(o.bind(o,1773))}],w=[{meta:{requiresAuth:!1},name:"root",path:"/",component:()=>Promise.all([o.e(736),o.e(470)]).then(o.bind(o,1470)),children:v},{path:"/error",component:()=>Promise.all([o.e(736),o.e(955)]).then(o.bind(o,6955))}];void 0!==b&&null!==b&&Object.keys(b).length>0&&w.push(b);const k=w,S=(0,m.BC)((function({store:e,ssrContext:t}){const o=p.r5,r=(0,p.p7)({scrollBehavior:()=>({left:0,top:0}),routes:k,history:o("")});return r}));async function C(e,t){const r="function"===typeof c["default"]?await(0,c["default"])({}):c["default"],{storeKey:i}=await Promise.resolve().then(o.bind(o,2919)),a="function"===typeof S?await S({store:r}):S;r.$router=a;const s=e(d);return s.use(n.Z,t),{app:s,store:r,storeKey:i,router:a}}var $=o(6791),q=o(4434),P=o(499),x=o(3972);const I={config:{},iconSet:$.Z,plugins:{Notify:q.Z,Dialog:P.Z,Screen:x.Z}},A="";async function D({app:e,router:t,store:o,storeKey:r},n){let i=!1;const a=e=>{try{return t.resolve(e).href}catch(o){}return Object(e)===e?null:e},s=e=>{if(i=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=a(e);null!==t&&(window.location.href=t,window.location.reload())},l=window.location.href.replace(window.location.origin,"");for(let d=0;!1===i&&d<n.length;d++)try{await n[d]({app:e,router:t,store:o,ssrContext:null,redirect:s,urlPath:l,publicPath:A})}catch(u){return u&&u.url?void s(u.url):void console.error("[Quasar] boot error:",u)}!0!==i&&(e.use(t),e.use(o,r),e.mount("#q-app"))}C(r.ri,I).then((e=>Promise.all([Promise.resolve().then(o.bind(o,4112)),Promise.resolve().then(o.bind(o,9447)),Promise.resolve().then(o.bind(o,5474)),Promise.resolve().then(o.bind(o,7632)),Promise.resolve().then(o.bind(o,6874))]).then((t=>{const o=t.map((e=>e.default)).filter((e=>"function"===typeof e));D(e,o)}))))},6874:(e,t,o)=>{"use strict";o.r(t),o.d(t,{apolloClientInstance:()=>m,default:()=>p});var r=o(133),n=o(2821),i=o(7083),a=o(6018),s=o(2822),l=o(5340),u=o.n(l);function d(e){return Object.assign({link:(0,a.L)({uri:"https://alinea-hasura.herokuapp.com/v1/graphql",fetch:u()}),cache:new s.h({addTypename:!1})},{},{},{},{},{},{},{},{},{},{},{})}const c=d(),m=new r.f(c),p=(0,i.xr)((({app:e})=>{const t={default:m};e.provide(n.Rw,t),e.config.globalProperties.$apollo=m}))},9447:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>C,getContextHeaders:()=>S,secureStorage:()=>k});var r=o(7083),n=o(1849),i=o.n(n),a=o(8322),s=o.n(a),l=o(2749),u=o(8703),d=o.n(u),c=o(3617),m=o(3437),p=o(4434),f=o(1959),h=o(6053),g=o(9633);const _=(0,f.XI)(h.Z),y=((0,f.XI)(g.Z),{name:{component:_,label:"Name",name:"name",required:!0,type:"text"},bio:{component:_,label:"Bio",name:"bio",type:"textarea"},phone:{component:_,label:"Phone",name:"phone",type:"phone"},email:{component:_,label:"Email",name:"email",type:"email",value:null},website:{component:_,label:"Website",name:"website",type:"text",value:null}}),b=y;var v=o(5474);p.Z.setDefaults({position:"bottom-right",timeout:3e3,textColor:"white"});const w=(0,l.sha256)("asdo82GFDafsKAJSU628123918G12U~~"),k=new(s())(localStorage,{hash:function(e){return e=i().SHA256(e,w),e.toString()},encrypt:function(e){return e=i().AES.encrypt(e,w),e=e.toString(),e},decrypt:function(e){return e=i().AES.decrypt(e,w),e=e.toString(i().enc.Utf8),e}}),S=()=>{const e=k.getItem("session");return void 0!==e&&null!==e&&void 0!==e.token&&null!==e.token?{headers:{Authorization:"Bearer "+e.token}}:null},C=(0,r.xr)((async({app:e,router:t})=>{d().config({driver:d().INDEXEDDB,name:"alineaApp",version:1,storeName:"datastore",description:"some description"}),e.config.globalProperties.$feeds=d().createInstance({name:"feeds"}),e.config.globalProperties.$options=d().createInstance({name:"options"}),e.config.globalProperties.$secureStorage=k;const r={data(){return{config:{appName:"Alinea",defaultImageURL:"https://ik.imagekit.io/alinea/alinea/uploads/ffffff_KKslknJMY.png?updatedAt=1629549735786"},dialogDashboard:{title:"test",displayed:!0,maximized:!1}}},computed:{isAuthenticated(){const e=this.$secureStorage.getItem("session");return void 0!==e&&null!==e&&e.isAuthenticated},getSession(){const e=this.$secureStorage.getItem("session");return void 0!==e&&null!==e?e:{}},getUserFullname(){return void 0!==this.getSession&&null!==this.getSession?this.getSession.decodedToken.name:null},getLoginUrl(){return void 0!==this.$keycloak&&null!==this.$keycloak?this.$keycloak.createLoginUrl():null},getLogoutUrl(){return void 0!==this.$keycloak&&null!==this.$keycloak?this.$keycloak.createLogoutUrl():null},getRegisterUrl(){return void 0!==this.$keycloak&&null!==this.$keycloak?this.$keycloak.createRegisterUrl():null},getCurrentRole(){return this.$secureStorage.getItem("current_role")},getUserUID(){const e=this.$secureStorage.getItem("session");return void 0!==e&&null!==e?e.decodedToken.sub:null},getUserGroups(){const e=this.$secureStorage.getItem("session");return void 0!==e&&null!==e?e:null},...(0,c.Se)({loginDialog:"ui/getLoginDialog",dashboardDialog:"ui/getDashboardDialog",requireLogin:"ui/getRequireLogin",isAuthenticated:"keycloak/isAuthenticated",myProfile:"model/getProfile",getDialogForm:"ui/getDialogForm",getDialogModel:"ui/getDialogModel"}),isProfileCompleted(){return void 0!==this.myProfile&&null!==this.myProfile},getAuthorName(){return this.isNil(this.myProfile)?"":this.myProfile.author_name},getAuthorBio(){return this.isNil(this.myProfile)?"":this.myProfile.author_bio},getAuthorCover(){if(this.isNil(this.myProfile.profile_img))return this.config.defaultImageURL;{const e=this.myProfile.profile_img.filter((function(e){return"cover"===e.entity_field}));return null!==e&&e.length>0?e[0].thumbnail_url:this.config.defaultImageURL}},getAuthorAvatar(){if(this.isNil(this.myProfile.profile_img))return this.config.defaultImageURL;{const e=this.myProfile.profile_img.filter((function(e){return"avatar"===e.entity_field}));return null!==e&&e.length>0?e[0].thumbnail_url:this.config.defaultImageURL}}},methods:{sanitize(e){return e.split("&state=")[0]},isNil(e){return void 0===e||null===e},isNotEmpty(e){return void 0!==e&&null!==e&&e.length>0},onResetFormData(){this.$store.commit("ui/resetFormModel")},onBecomeAuthor(){this.$store.commit("ui/setFormSchema",b),this.$store.commit("ui/showActivationDialog")},doLogout(){void 0!==this.getLogoutUrl&&null!==this.getLogoutUrl?(this.$secureStorage.clear(),(0,m.Z)(this.getLogoutUrl)):alert("already logged out")},doUpload(e){const t=o(82),r=k.getItem("session"),n=new t;return n.append("id",e.id),n.append("name",e.name),n.append("field",e.field),n.append("file",e.file),v.axiosUploadInstance.post("/upload",n,{headers:{Authorization:"Bearer "+r.token,"Content-Type":"multipart/form-data"}})}}};e.mixin(r)}))},5474:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>l,axiosApiInstance:()=>a,axiosUploadInstance:()=>s});var r=o(7083),n=o(4775),i=o(6822);const a=n.K3.create();a.interceptors.request.use((async e=>{const t=await(0,i.LP)();return e.headers={Authorization:`Bearer ${t}`},e}),(e=>{Promise.reject(e)}));const s=n.K3.create({baseURL:"https://alinea-imgs.herokuapp.com/imgs"}),l=(0,r.xr)((({app:e})=>{e.config.globalProperties.$axios=a}))},4112:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>l,i18n:()=>s});var r=o(7083),n=o(5948);const i={rxdb:{initReplicationError:"Error replication verify your name of collection",tokenNotProvided:"Token must be provided",stopReplicationError:"No replication state",createDbError:"Database must have a name",getDBError:"Database doesn't exist",getCollectionError:"Collection doesn't exist ",subscribeError:"Offline mode"},delete_confirm:"Delete Confirmation",delete_confirm_msg:"Delete this data?",is_default:"Default",postal_code:"Postal code",state:"State",about_us:"About Us",about:"About",action:"Action",add_address:"Add address",add_chapter:"Add Chapter",add_new_list:"Add new list",address:"Address",addresses:"Addresses",advantage_sell_via_alinea:"Advantage sell via alinea",advantage_writing_in_alinea:"Advantage writing in alinea",alinear_view:"Alinear View",all_stories:"All Stories",all:"All",as_alinear_author:"as Alinear / Author",as_publisher:"as Publisher",author_dashboard:"Author Dashboard",author_profile_picture:"Author profile picture",author_profile:"Author Profile",author_view:"Author View",author:"Author",available_stories:"Available stories",avatar:"Avatar",back:"Back",back_to_previous_page:"Back to previous page",balance:"Balance",bank_account_name:"Bank account name",bank_account_no:"Bank account no",bank_account:"Bank Account",bank_branch:"Bank branch",bank_name:"Bank name",become_author:"Become an Author",bio:"Bio",birthdate:"Birthdate",bookmark:"Bookmark",books_on_draft:"Books on draft",books_on_sale:"Books on Sales",books:"Books",browse:"Browse",by_continue_agreements:"By becoming an Author means you will be ready to inspiring the world.",cancel:"Cancel",careers:"Careers",category:"Category",chapter_draft:"Chapter draft",chapter_image:"Chapter Image",chapter_released:"Chapter released",chapter:"Chapter",chapters:"Chapters",city:"City",close:"Close",coming_soon:"Coming soon",comments:"Comments",complete_author_profile_2:"Complete the author profile 2",complete_author_profile:"Complete the author profile",complete_profile:"Complete profile",confirmation:"Confirmation",contact_us:"Contact us",content:"Content",country:"Country",cover_picture:"Cover picture",cover:"Cover",create_book:"Create book",create_chapter:"Create Chapter",create_collection:"Create collection",create_story:"Create story",created:"Created",dashboard_author:"Dashboard Author",dashboard:"Dashboard",delete_chapter:"Delete chapter",delete_confirmation:"Confirm deletion",delete_story:"Delete story",delete:"Delete",didnt_have_account:"Didn't have an account?",digital_library_in_your_hand:"Digital library in your hand",digital_rent:"Digital rent",district:"District",double_profit:"Double profit",download_from:"Download from",download_image:"Download Image",draft:"Draft",easy_to_publish:"Easy to publish",edit_author_profile:"Edit Author Profile",edit_address:"Edit Address",recommended:"Recommended",refined_search:"Refined Search",update_profile:"Update Profile",edit_chapter:"Edit Chapter",edit_profile:"Edit profile",edit_story:"Edit story",edit:"Edit",email:"Email",ewallet:"eWallet",explore_books:"Explore books",explore_library:"Explore library",explore_stories:"Explore stories",failed:"Action failed",female:"Female",first_name:"First Name",forgot_password_link:"Forgot password link",forgot_your_password:"Forgot your password?",front_page:"Front page",full_name:"Full name",future_library:"Future library",get_book_free:"Get This Book for Free!",go_home:"Go home",goto_dashboard:"Go to Dashboard",great_dashboard:"Great dashboard",great_income:"Great income",help:"Help",hi:"Hi",home:"Home",identity_issue_date:"Identity issue date",identity_issuer:"Identity issuer",identity_no:"Identity no",identity_type:"Identity type",image_cover:"Image cover",information:"Information",intro:"Intro",just_for_you:"Just for you",keyword:"Keyword",last_books_sales:"Last books sales",last_modified_date:"Last modified date",last_name:"Last Name",last_update:"Last updates",legal_information:"Legal information",lets_create_great_stories:"Lets Create a Great Stories",library:"Library",location:"Location",login_history:"Login history",login_or_register:"Login / Register",login_with_alinea:"Login using alinea account",login_with_google:"Login using Google account",login:"Login",logout:"Logout",male:"Male",mission:"Mission",modified:"Modified",more:"More",multi_device:"Multi device",my_bookmark:"My Bookmark",my_books:"My books",my_cart:"My Cart",my_chapter_draft:"My Chapter Draft",my_draft:"My Draft",my_library:"My Library",my_mission:"My mission",my_point:"My point",my_rent:"My Rent",my_stories:"My Stories",my_story:"My Story",name:"Name",new_books:"New Books",new_list:"New list",new_password_confirm:"New password confirm",new_password:"New password",new_pin_confirm:"New pin_confirm",new_pin:"New pin",new_stories:"New Stories",no_data:"No data",notification:"Notification",old_password:"Old password",old_pin:"Old pin",one_step_closer_to_inspiring_the_world:"One step closer to inspiring the world",optional:"Optional",password:"Password",personal_address:"Personal Address",personal_information:"Personal Information",phone:"Phone",photo:"Photo",pin:"Pin",placeholder_search_bar:"Search",point:"Point",popular_books:"Popular Books",postcode:"Postcode",price:"Price",privacy:"Privacy",profile:"Profile",prompt_delete_story:"Are you sure want to delete this story ?",province:"Province",publish:"Publish",published:"Published",publisher_dashboard:"Publisher Dashboard",read_more:"More",recommended_authors:"Recommended Authors",recommended_books:"Recommended Books",recommended_stories:"Great Stories for You",redirecting_in:"Redirecting in",register_link:"Click here to Register",released:"Released",rent:"Rent",sales_balance:"Sales balance",sales:"Sales",save:"Save",scheduled:"Scheduled",search_anything:"Search anything",search:"Search",security_setting:"Security Setting",selfie_photo:"Selfie photo",sell_via_alinea:"Sell via alinea",set_avatar:"Set avatar",set_price:"Set price",sex:"Sex",sort:"Sort",stories_on_sale:"Stories on Sales",stories:"Stories",story_details:"Story details",story_image:"Story Image",story_thumbnail:"Story thumbnail",story:"Story",street:"Street",subdistrict:"Subdistrict",submitted:"Submitted",success:"Action was successful",switch_view:"Switch View",terms:"Terms",type_here:"Type here...",title:"Title",toggle_drawer:"Toggle drawer",tooltip_cancel_and_close:"Cancel operation and close the dialog",tooltip_maximize:"Maximize the dialog",tooltip_minimize:"Minimize the dialog",tooltip_save:"Save data",tooltip_logout:"Logout",type_keyword_to_filter:"Type keyword to filter",update_password:"Update password",update_pin:"Update pin",update:"Update",user_dashboard:"User Dashboard",succesfully_saved:"Successfully saved",user:"User",username:"Username",view_wallet:"View wallet",wallet:"Wallet",website:"Website",welcome_greeting:"Welcome greeting",welcome_greetings:"Welcome to the Great Digital Library",workspace:"Workspace"},a={"en-US":i},s=(0,n.o)({locale:"en-US",messages:a}),l=(0,r.xr)((({app:e})=>{e.use(s)}))},7632:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>_});o(6701);var r=o(7083),n=o(4674),i=o.n(n),a=o(9447);const s={flow:"standard",checkLoginIframe:!1,onLoad:"login-required"},l={initOptions:s,config:{url:"https://lemur-4.cloud-iam.com/auth/",realm:"alinea",clientId:"alinea-ui"}};function u(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}const d=u(i());function c(e){return!f(e)&&"function"===typeof e.then}function m(e){return!f(e)&&"function"===typeof e}function p(e){return!f(e)&&("string"===typeof e||e instanceof String)}function f(e){return void 0===e||null===e}function h(e){return new Promise(((t,o)=>{const r=new XMLHttpRequest;r.overrideMimeType("application/json"),r.onreadystatechange=function(){if(4===this.readyState)if(200<=this.status&&this.status<=400){const e=this.responseText,o=JSON.parse(e);t(o)}else o("Could not load "+e+" file")},r.open("GET",e,!0),r.send()}))}function g(e){return d["default"](e)}const _=(0,r.xr)((async({app:e,router:t,store:o})=>{async function r(e){if(!e)throw new Error("Keycloak is not initialized.");try{await e.updateToken(10),o.commit("keycloak/setToken",e.token)}catch(t){throw o.commit("keycloak/hasFailed",!0),new Error("Failed to refresh the token, or the session has expired")}return e.token}async function n(e,t){try{o.commit("keycloak/isPending",!0);const n=a.secureStorage.getItem("keycloak");if(f(n)){const r=await t.init(e);o.commit("keycloak/isAuthenticated",r)}else console.log(n),t=n,o.commit("keycloak/isAuthenticated",!0);f(t.token)?(o.commit("keycloak/isAuthenticated",!1),console.log("running guest mode")):(o.commit("keycloak/setToken",t.token),t.onAuthRefreshSuccess=()=>{o.commit("keycloak/setToken",t.token)},t.onTokenExpired=()=>r(t))}catch(n){throw console.log(n),o.commit("keycloak/hasFailed",!0),o.commit("keycloak/isAuthenticated",!1),new Error("unable read access token")}finally{o.commit("keycloak/isPending",!1)}}if(f(l))throw new Error("The Keycloak.KeycloakConfig are requried");let i;i=p(l)?await h(l):c(l)||m(l)?await l():l;const u=i.config,d=f(i.initOptions)?s:Object.assign(Object.assign({},s),i.initOptions),_=g(u),y=a.secureStorage.getItem("is_require_auth");f(y)||!y||void 0!==_.authenticated&&_.authenticated||await n(d,_),e.config.globalProperties.$keycloak=_}))},2919:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>Kt});var r={};o.r(r),o.d(r,{getActivationDialog:()=>h,getDashboardDialog:()=>g,getDialogForm:()=>b,getDialogModel:()=>v,getKeycloakInstance:()=>y,getLoginDialog:()=>f,getRequireLogin:()=>_});var n={};o.r(n),o.d(n,{hideActivationDialog:()=>C,hideDashboardDialog:()=>q,hideLoginDialog:()=>k,resetFormModel:()=>D,setFormData:()=>I,setFormModel:()=>L,setFormSchema:()=>A,setKeycloakInstance:()=>x,setRequireLogin:()=>P,showActivationDialog:()=>S,showDashboardDialog:()=>$,showLoginDialog:()=>w});var i={};o.r(i),o.d(i,{getAddress:()=>R,getBanks:()=>T,getChapter:()=>N,getFeeds:()=>M,getLibraries:()=>H,getMenus:()=>Z,getProfile:()=>j,getStories:()=>O,getStory:()=>E});var a={};o.r(a),o.d(a,{setAddress:()=>J,setBanks:()=>X,setChapter:()=>Q,setFeedsObject:()=>G,setLibraries:()=>Y,setMenus:()=>V,setProfile:()=>z,setStories:()=>K,setStory:()=>W});var s={};o.r(s),o.d(s,{createAddress:()=>_t,createChapter:()=>dt,createProfile:()=>gt,createStory:()=>ut,deleteAddress:()=>xt,deleteImage:()=>Pt,deleteStory:()=>It,enableAuthor:()=>ht,fetchAuthorStories:()=>bt,fetchMenus:()=>st,fetchProfile:()=>lt,fetchStories:()=>yt,fetchStoriesByCriteria:()=>St,fetchUserAddress:()=>Ct,fetchUserBank:()=>$t,fetchUserLibrary:()=>qt,findChapterByUid:()=>kt,findStoryByUid:()=>wt,publishStory:()=>At,switchView:()=>vt,updateAddress:()=>ft,updateChapter:()=>ct,updateProfile:()=>pt,updateStory:()=>mt});var l={};o.r(l),o.d(l,{isAuthenticated:()=>Ft});var u={};o.r(u),o.d(u,{hasFailed:()=>Mt,isAuthenticated:()=>Et,isPending:()=>Ot,setToken:()=>jt});var d={};o.r(d),o.d(d,{assignRole:()=>Vt});var c=o(7083),m=o(3617);function p(){return{requireLogin:!1,dialog:{login:!1,dashboard:!1,activation:!1,form:{title:null,schema:{},model:{},events:{}}},keycloakInstance:null}}function f(e){return e.dialog.login}function h(e){return e.dialog.activation}function g(e){return e.dialog.dashboard}function _(e){return e.requireLogin}function y(e){return e.keycloakInstance}function b(e){return e.dialog.form}function v(e){return e.dialog.form.model}function w(e){e.dialog.login=!0}function k(e){e.dialog.login=!1}function S(e){e.dialog.activation=!0}function C(e){e.dialog.activation=!1}function $(e,t){void 0!==t&&null!==t&&Object.assign(e.dialog.form,t),e.dialog.dashboard=!0}function q(e){e.dialog.dashboard=!1}function P(e,t){e.requireLogin=t}function x(e,t){e.keycloakInstance=t}function I(e,t){void 0!==t.name&&void 0!==t.value&&(e.dialog.form.model[t.name]=t.value)}function A(e,t){void 0!==t&&void 0!==t&&(e.dialog.form.schema=t)}function D(e){e.dialog.form.model={}}function L(e,t){e.dialog.form.model=t}var F=o(2728);const B={namespaced:!0,state:p,getters:r,mutations:n,actions:F};function U(){return{user:{profile:{},address:[],banks:[],libraries:[]},menus:[],detail:{story:{},chapter:{}},feeds:{stories:[],topStories:[],newStories:[],saleStories:[]}}}function Z(e){return e.menus}function j(e){return e.user.profile}function M(e){return e.feeds}function O(e){return e.feeds.stories}function E(e){return e.detail.story}function N(e){return e.detail.chapter}function R(e){return e.user.address}function T(e){return e.user.banks}function H(e){return e.user.libraries}function V(e,t){e.menus=t}function z(e,t){e.user.profile=t}function K(e,t){e.feeds.stories=t}function G(e,t){e.feeds[t.name]=t.value}function W(e,t){e.detail.story=t}function Q(e,t){e.detail.chapter=t}function J(e,t){e.user.address=t}function X(e,t){e.user.banks=t}function Y(e,t){e.user.libraries=t}var ee=o(6874),te=o(9447),oe=o(6477);let re,ne=e=>e;function ie(e,t){return{query:(0,oe.ZP)(re||(re=ne`
      query fetchUserMenu($role: String!, $childrole: String!) {
        menus: role_menus(
          where: {
            menu: { _or: { parent_id: { _is_null: true } } }
            user: { role: { _eq: $role } }
          }
          order_by: { menu: { sequence: asc } }
        ) {
          menu {
            icon
            label
            target_url
            js_event
            children(
              where: { role_menus: { role: { code: { _eq: $childrole } } } }
            ) {
              icon
              label
              target_url
              js_event
            }
          }
        }
      }
    `)),variables:e,context:t}}let ae,se=e=>e;function le(e){return{query:(0,oe.ZP)(ae||(ae=se`
      query fetchSelfProfile {
        user_profiles {
          name
          bio
          address
          email
          phone
          website
          author_name
          author_bio
          profile_img{
            url
            thumbnail_url
            entity_field
          }
        }
      }
    `)),context:e}}let ue,de,ce,me=e=>e;function pe(e){return{query:(0,oe.ZP)(ue||(ue=me`
      query fetchUserAddress {
        user_address {
          id
          address
          city
          state
          country
          postal_code
          is_default
        }
      }
    `)),context:e}}function fe(e){return{query:(0,oe.ZP)(de||(de=me`
      query fetchUserBank {
        user_banks {
          bank_account_name
          bank_account_no
          bank_name
          bank_branch
          is_default
        }
      }
    `)),context:e}}function he(e){return{query:(0,oe.ZP)(ce||(ce=me`
      query fetchUserLibrary {
        user_libraries {
          name
          description
          is_private
          library_uid
        }
      }
    `)),context:e}}let ge,_e,ye,be,ve,we,ke,Se=e=>e;function Ce(){return{query:(0,oe.ZP)(ge||(ge=Se`
      query fetchStories {
        stories {
          description
          story_uid
          title
          author {
            name
            bio
          }
          cover_img {
            thumbnail_url
            url
          }
        }
      }
    `))}}function $e(){return{query:(0,oe.ZP)(_e||(_e=Se`
      query fetchTopStories {
        stories: stories_top {
          description
          story_uid
          title
          author {
            name
            bio
          }
          cover_img {
            thumbnail_url
            url
          }
        }
      }
    `))}}function qe(){return{query:(0,oe.ZP)(ye||(ye=Se`
      query fetchNewStories {
        stories: stories_new {
          description
          story_uid
          title
          author {
            name
            bio
          }
          cover_img {
            thumbnail_url
            url
          }
        }
      }
    `))}}function Pe(){return{query:(0,oe.ZP)(be||(be=Se`
      query fetchSaleStories {
        stories: stories_sale {
          description
          story_uid
          title
          author {
            name
            bio
          }
          cover_img {
            thumbnail_url
            url
          }
        }
      }
    `))}}function xe(e){return{query:(0,oe.ZP)(ve||(ve=Se`
      query fetchMyStories {
        stories {
          story_uid
          description
          title
          author {
            name
            bio
          }
          cover_img {
            thumbnail_url
            url
          }
          status {
            code
          }
        }
      }
    `)),context:e}}function Ie(e,t){return{query:(0,oe.ZP)(we||(we=Se`
      query findChapterByUid($uid: uuid!) {
        chapters(where: { chapter_uid: { _eq: $uid } }) {
          content_md
          created_by
          cover_img {
            thumbnail_url
            entity_field
          }
          created_date
          intro
          last_modified_date
          last_modified_by
          status {
            code
            name
          }
          story {
            title
          }
          title
        }
      }
    `)),variables:e,context:t}}function Ae(e,t){return{query:(0,oe.ZP)(ke||(ke=Se`
      query findStoryByUid($uid: uuid!) {
        stories(where: { story_uid: { _eq: $uid } }) {
          description
          title
          story_uid
          status {
            code
          }
          author {
            name
            bio
            profile_img {
              entity_field
              url
              thumbnail_url
            }
          }
          cover_img {
            thumbnail_url
            url
            file_uuid
          }
          chapters {
            title
            intro
            chapter_uid
            cover_img {
              thumbnail_url
              url
            }
          }
        }
      }
    `)),variables:e,context:t}}let De,Le,Fe,Be,Ue,Ze,je,Me=e=>e;function Oe(e,t){return{mutation:(0,oe.ZP)(De||(De=Me`
      mutation saveStory($title: String!, $intro: String!) {
        insert_stories(objects: { description: $intro, title: $title }) {
          affected_rows
        }
      }
    `)),variables:e,context:t}}function Ee(e,t){return{mutation:(0,oe.ZP)(Le||(Le=Me`
      mutation updateStory($uid: uuid!, $title: String, $desc: String) {
        update_stories(
          where: { story_uid: { _eq: $uid } }
          _set: { title: $title, description: $desc }
        ) {
          affected_rows
        }
      }
    `)),variables:e,context:t}}function Ne(e,t){return{mutation:(0,oe.ZP)(Fe||(Fe=Me`
      mutation createChapter($title: String!, $desc: String!, $uid: uuid!) {
        insert_chapters(
          objects: { title: $title, intro: $desc, story_uid: $uid }
        ) {
          affected_rows
        }
      }
    `)),variables:e,context:t}}function Re(e,t){return{mutation:(0,oe.ZP)(Be||(Be=Me`
      mutation createChapter($title: String!, $desc: String!, $content: String!, $uid: uuid!) {
        update_chapters(
          where: { chapter_uid: { _eq: $uid } }
          _set: { intro: $desc, title: $title, content_md: $content }
        ) {
          affected_rows
        }
      }
    `)),variables:e,context:t}}function Te(e,t){return{mutation:(0,oe.ZP)(Ue||(Ue=Me`
      mutation deleteFile($uuid: String!) {
        delete_system_files(where: { file_uuid: { _eq: $uuid } }) {
          affected_rows
        }
      }
    `)),variables:e,context:t}}function He(e,t){return{mutation:(0,oe.ZP)(Ze||(Ze=Me`
      mutation deleteStory($uid: uuid!) {
        delete_stories(where: { story_uid: { _eq: $uid } }) {
          affected_rows
        }
      }
    `)),variables:e,context:t}}function Ve(e,t){return{mutation:(0,oe.ZP)(je||(je=Me`
      mutation publishStory($uid: uuid!, $status: Int!) {
        update_stories(
          where: { story_uid: { _eq: $uid } }
          _set: { status_id: $status }
        ) {
          affected_rows
        }
      }
    `)),variables:e,context:t}}let ze,Ke,Ge,We,Qe,Je,Xe,Ye=e=>e;function et(e,t){return{mutation:(0,oe.ZP)(ze||(ze=Ye`
      mutation updateProfile(
        $uid: uuid!
        $name: String!
        $bio: String!
        $phone: String!
        $website: String!
      ) {
        update_user_profiles(
          _set: {
            name: $name
            bio: $bio
            phone: $phone
            website: $website
          }
          where: { user_uid: { _eq: $uid } }
        ) {
          affected_rows
        }
      }
    `)),variables:e,context:t}}function tt(e,t){return{mutation:(0,oe.ZP)(Ke||(Ke=Ye`
      mutation updateAddress(
        $id: Int!
        $address: String!
        $city: String!
        $country: String!
        $postal_code: String!
        $state: String!
      ) {
        update_user_address(
          where: { id: { _eq: $id } }
          _set: {
            address: $address
            city: $city
            country: $country
            postal_code: $postal_code
            state: $state
          }
        ) {
          affected_rows
        }
      }
    `)),variables:e,context:t}}function ot(e,t){return{mutation:(0,oe.ZP)(Ge||(Ge=Ye`
      mutation createProfile(
        $name: String!
        $bio: String!
        $email: String!
        $phone: String!
        $website: String!
      ) {
        insert_user_profiles(
          objects: {
            name: $name
            bio: $bio
            email: $email
            phone: $phone
            website: $website
          }
        ) {
          affected_rows
        }
      }
    `)),variables:e,context:t}}function rt(e,t){return{mutation:(0,oe.ZP)(We||(We=Ye`
      mutation createAddress(
        $address: String!
        $city: String!
        $country: String!
        $postal_code: String!
        $state: String!
      ) {
        insert_user_address(
          objects: {
            address: $address
            city: $city
            country: $country
            postal_code: $postal_code
            state: $state
          }
        ) {
          affected_rows
        }
      }
    `)),variables:e,context:t}}function nt(e,t){return{mutation:(0,oe.ZP)(Qe||(Qe=Ye`
      mutation deleteAddress($id: Int!) {
        delete_user_address_by_pk(id: $id) {
          id
        }
      }
    `)),variables:e,context:t}}function it(e){return{mutation:(0,oe.ZP)(Je||(Je=Ye`
      mutation enableUserRole {
        insert_user_roles(objects: { role: "user" }) {
          affected_rows
        }
      }
    `)),context:e}}function at(e){return{mutation:(0,oe.ZP)(Xe||(Xe=Ye`
      mutation enableUserRole {
        insert_user_roles(objects: { role: "author" }) {
          affected_rows
        }
      }
    `)),context:e}}te.secureStorage.getItem("session");function st(e){const t=te.secureStorage.getItem("current_role"),o=te.secureStorage.getItem("menus");if(null===o||void 0===o){const o=void 0!==t&&null!==t?t:"user",r=(0,te.getContextHeaders)();if(void 0!==r&&null!==r)return ee.apolloClientInstance.query(ie({role:o,childrole:o.toUpperCase()},r)).then((t=>{void 0!==t.data.menus&&null!==t.data.menus&&(e.commit("setMenus",t.data.menus),te.secureStorage.setItem("menus",t.data.menus))}))}else e.commit("setMenus",o)}function lt(e){const t=(0,te.getContextHeaders)();if(void 0!==t&&null!==t)return ee.apolloClientInstance.localState.cache.reset(),ee.apolloClientInstance.query(le(t)).then((t=>{void 0!==t.data.user_profiles&&null!==t.data.user_profiles&&t.data.user_profiles.length>0&&(e.commit("setProfile",t.data.user_profiles[0]),te.secureStorage.setItem("profile",t.data.user_profiles[0]))}))}function ut(e,t){const o=te.secureStorage.getItem("current_role"),r=(0,te.getContextHeaders)();if(void 0!==r&&null!==r&&"author"===o)return ee.apolloClientInstance.mutate(Oe(t,r)).then((e=>{void 0!==e.data.insert_stories&&null!==e.data.insert_stories&&console.log(e.data.insert_stories)}))}function dt(e,t){const o=te.secureStorage.getItem("current_role"),r=(0,te.getContextHeaders)();if(void 0!==r&&null!==r&&"author"===o)return ee.apolloClientInstance.mutate(Ne(t,r)).then((e=>{void 0!==e.data.insert_chapters&&null!==e.data.insert_chapters&&console.log(e.data.insert_chapters)}))}function ct(e,t){const o=te.secureStorage.getItem("current_role"),r=(0,te.getContextHeaders)();if(void 0!==r&&null!==r&&"author"===o)return ee.apolloClientInstance.mutate(Re(t,r)).then((e=>{void 0!==e.data.update_chapters&&null!==e.data.update_chapters&&console.log(e.data.update_chapters)}))}function mt(e,t){const o=te.secureStorage.getItem("current_role"),r=(0,te.getContextHeaders)();if(void 0!==r&&null!==r&&"author"===o){const e=ee.apolloClientInstance.mutate(Ee(t,r));return e.then((e=>{void 0!==e.data.update_stories&&null!==e.data.update_stories&&console.log(t)}))}}function pt(e,t){const o=(0,te.getContextHeaders)();if(void 0!==o&&null!==o){const e=ee.apolloClientInstance.mutate(et(t,o));return e.then((e=>{void 0!==e.data.update_user_profiles&&null!==e.data.update_user_profiles&&console.log(t)}))}}function ft(e,t){const o=(0,te.getContextHeaders)();if(void 0!==o&&null!==o){const e=ee.apolloClientInstance.mutate(tt(t,o));return e.then((e=>{void 0!==e.data.update_user_address&&null!==e.data.update_user_address&&console.log(t)}))}}function ht(e){const t=(0,te.getContextHeaders)();if(void 0!==t&&null!==t)return ee.apolloClientInstance.mutate(at(t)).then((e=>{void 0!==e.data.insert_user_roles&&null!==e.data.insert_user_roles&&console.log(e.data.insert_user_roles)}))}function gt(e,t){const o=(0,te.getContextHeaders)();if(void 0!==o&&null!==o){const e=ee.apolloClientInstance.mutate(it(o));e.then((e=>{void 0!==e.data.insert_user_roles&&null!==e.data.insert_user_roles&&console.log(t)}));const r=ee.apolloClientInstance.mutate(ot(t,o));return r.then((e=>{void 0!==e.data.update_user_profiles&&null!==e.data.update_user_profiles&&console.log(t)}))}}function _t(e,t){console.log(t);const o=(0,te.getContextHeaders)();if(void 0!==o&&null!==o){const e=ee.apolloClientInstance.mutate(rt(t,o));return e.then((e=>{console.log(e),void 0!==e.data.insert_user_address&&null!==e.data.insert_user_address&&console.log(t)}))}}function yt(e){const t=te.secureStorage.getItem("stories");if(null===t||void 0===t)return ee.apolloClientInstance.query(Ce()).then((t=>{void 0!==t.data.stories&&null!==t.data.stories&&e.commit("setStories",t.data.stories)}));e.commit("setStories",t)}function bt(e){return ee.apolloClientInstance.localState.cache.reset(),ee.apolloClientInstance.query(xe((0,te.getContextHeaders)())).then((t=>{void 0!==t.data.stories&&null!==t.data.stories&&e.commit("setStories",t.data.stories)}))}function vt(e,t){return new Promise(((e,o)=>{void 0!==t&&null!==t?(console.log("switched to "+t.role),te.secureStorage.setItem("current_role",t.role),e(t.role)):o("param is empty")}))}function wt(e,t){return ee.apolloClientInstance.localState.cache.reset(),ee.apolloClientInstance.query(Ae({uid:t},(0,te.getContextHeaders)())).then((t=>{void 0!==t.data.stories&&null!==t.data.stories&&t.data.stories.length>0&&e.commit("setStory",t.data.stories[0])}))}function kt(e,t){return ee.apolloClientInstance.localState.cache.reset(),ee.apolloClientInstance.query(Ie({uid:t},(0,te.getContextHeaders)())).then((t=>{void 0!==t.data.chapters&&null!==t.data.chapters&&t.data.chapters.length>0&&e.commit("setChapter",t.data.chapters[0])}))}function St(e,t){let o=null;if("newStories"===t?o=qe():"topStories"===t?o=$e():"saleStories"===t&&(o=Pe()),null!==o)return ee.apolloClientInstance.query(o).then((o=>{void 0!==o.data.stories&&null!==o.data.stories&&e.commit("setFeedsObject",{name:t,value:o.data.stories})}))}function Ct(e){const t=(0,te.getContextHeaders)();if(void 0!==t&&null!==t)return ee.apolloClientInstance.query(pe(t)).then((t=>{console.log(t),void 0!==t.data.user_address&&null!==t.data.user_address&&e.commit("setAddress",t.data.user_address)}))}function $t(e){const t=(0,te.getContextHeaders)();if(void 0!==t&&null!==t)return ee.apolloClientInstance.query(fe(t)).then((t=>{void 0!==t.data.user_banks&&null!==t.data.user_banks&&e.commit("setBanks",t.data.user_banks)}))}function qt(e){const t=(0,te.getContextHeaders)();if(void 0!==t&&null!==t)return ee.apolloClientInstance.query(he(t)).then((t=>{void 0!==t.data.user_libraries&&null!==t.data.user_libraries&&e.commit("setLibraries",t.data.user_libraries)}))}function Pt(e,t){const o=te.secureStorage.getItem("current_role"),r=(0,te.getContextHeaders)();if(void 0!==r&&null!==r&&"author"===o){const e=ee.apolloClientInstance.mutate(Te(t,r));return e.then((e=>{void 0!==e.data.update_stories&&e.data.update_stories}))}}function xt(e,t){const o=(0,te.getContextHeaders)();if(void 0!==o&&null!==o){const e=ee.apolloClientInstance.mutate(nt(t,o));return e.then((e=>{void 0!==e.data.delete_user_address_by_pk&&e.data.delete_user_address_by_pk}))}}function It(e,t){const o=(0,te.getContextHeaders)();if(void 0!==o&&null!==o){const e=ee.apolloClientInstance.mutate(He(t,o));return e.then((e=>{void 0!==e.data.delete_stories&&e.data.delete_stories}))}}function At(e,t){const o=(0,te.getContextHeaders)();if(void 0!==o&&null!==o){const e=ee.apolloClientInstance.mutate(Ve(t,o));return e.then((e=>{void 0!==e.data.update_story&&null!==e.data.update_story&&console.log(t)}))}}const Dt={namespaced:!0,state:U,getters:i,mutations:a,actions:s};function Lt(){return{isAuthenticated:!1,hasFailed:!1,isPending:!1,token:"",decodedToken:{},username:"",roles:[]}}function Ft(e){return e.isAuthenticated}var Bt=o(51);function Ut(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}const Zt=Ut(Bt.Z);function jt(e,t){e.token=t;const o=Zt["default"](e.token);e.decodedToken=o,e.roles=o.resource_access["alinea-ui"].roles,e.username=o.preferred_username,te.secureStorage.setItem("session",Object.assign({},e)),void 0===te.secureStorage.getItem("current_role")&&te.secureStorage.setItem("current_role","user")}function Mt(e,t){e.hasFailed=t}function Ot(e,t){e.isPending=t}function Et(e,t){e.isAuthenticated=t}let Nt,Rt,Tt=e=>e;const Ht=te.secureStorage.getItem("session");function Vt(e,t){if(void 0!==Ht&&null!==Ht){const e=Ht.decodedToken.sub,o=(0,te.getContextHeaders)();if(null!==t&&void 0!==o&&null!==o){const r=ee.apolloClientInstance.query({query:(0,oe.ZP)(Nt||(Nt=Tt`
          query fetchRoles($role: String!) {
            user_roles(where: { role: { _eq: $role } }) {
              role
            }
          }
        `)),variables:{role:t},context:o});r.then((r=>{void 0!==r.data.user_roles&&null!==r.data.user_roles&&ee.apolloClientInstance.mutate({mutation:(0,oe.ZP)(Rt||(Rt=Tt`
              mutation assignRole($uid: uuid!, $role: String!) {
                insert_user_roles_one(object: { role: $role, user_uid: $uid }) {
                  role
                }
              }
            `)),variables:{uid:e,role:t},context:o,update:(e,{data:{insert_user_roles_one:t}})=>{console.log(t)},errorPolicy:"ignore"})}))}}}const zt={namespaced:!0,state:Lt,getters:l,mutations:u,actions:d},Kt=(0,c.h)((function(){const e=(0,m.MT)({modules:{ui:B,model:Dt,keycloak:zt},strict:!1});return e}))},2728:()=>{},7930:(e,t,o)=>{"use strict";o.d(t,{Z:()=>f});var r=o(3673),n=o(2323);const i={class:"row q-pb-md"},a={class:"col-12"},s={class:"text-weight-light text-primary text-capitalize"},l={key:0,class:"text-weight-bold text-red q-mx-xs"},u={class:"col-12"};function d(e,t,o,d,c,m){return(0,r.wg)(),(0,r.iD)("div",i,[(0,r._)("div",a,[(0,r._)("span",s,(0,n.zw)(m.getLabel),1),m.isRequired?((0,r.wg)(),(0,r.iD)("span",l,"*")):(0,r.kq)("",!0)]),(0,r._)("div",u,[(0,r.WI)(e.$slots,"default")])])}const c={name:"FormField",props:{label:{required:!0,default:"",type:String},required:{required:!1,default:!1,type:Boolean}},setup(){return{}},computed:{getLabel(){return this.label},isRequired(){return this.required}}};var m=o(4260);const p=(0,m.Z)(c,[["render",d]]),f=p},9633:(e,t,o)=>{"use strict";o.d(t,{Z:()=>w});var r=o(3673),n=o(8880),i=o(2323);const a=["textContent"];function s(e,t,o,s,l,u){const d=(0,r.up)("q-icon"),c=(0,r.up)("q-file"),m=(0,r.up)("q-img"),p=(0,r.up)("q-btn"),f=(0,r.up)("q-card-section"),h=(0,r.up)("q-card"),g=(0,r.up)("FormField");return(0,r.wg)(),(0,r.j4)(g,{label:o.label,required:o.required},{default:(0,r.w5)((()=>[e.isNil(o.value)?((0,r.wg)(),(0,r.j4)(c,{key:0,name:o.name,type:o.config.type,modelValue:l.modelValue,"onUpdate:modelValue":[t[0]||(t[0]=e=>l.modelValue=e),u.update],required:o.required,id:o.uuid,disabled:o.readOnly,dense:"",outlined:"",label:o.label,counter:"","counter-label":u.counterLabelFn,"max-files":"3",multiple:!1,style:{"max-width":"300px"}},{prepend:(0,r.w5)((()=>[(0,r.Wm)(d,{name:"las la-paperclip"})])),_:1},8,["name","type","modelValue","required","id","disabled","onUpdate:modelValue","label","counter-label"])):((0,r.wg)(),(0,r.j4)(h,{key:1,style:{width:"120px"},flat:"",bordered:""},{default:(0,r.w5)((()=>[(0,r.Wm)(m,{src:o.value.thumbnail_url,ratio:2/3},null,8,["src"]),(0,r.Wm)(f,{class:"q-pa-none text-right"},{default:(0,r.w5)((()=>[(0,r.Wm)(p,{flat:"",class:"full-width",icon:"la la-trash",onClick:t[1]||(t[1]=(0,n.iM)((e=>u.onDeleteImageEvent()),["stop"]))})])),_:1})])),_:1})),(0,r.wy)((0,r._)("p",{textContent:(0,i.zw)(o.validation.errorMessage)},null,8,a),[[n.F8,o.validation.errorMessage]])])),_:1},8,["label","required"])}var l=o(5474),u=o(7930);const d={name:"FormFile",components:{FormField:u.Z},props:{value:{required:!0},name:{type:String,required:!0},required:{type:Boolean,default:!1},label:{type:String,required:!0},config:{type:Object,default:()=>({type:"text"})},readOnly:{type:Boolean,default:!1},uuid:{type:Number,default:0},validation:{type:Object,default:()=>({})},type:{type:String,default:"text"},validations:{type:Object,default:()=>({})}},data(){return{modelValue:null}},computed:{},methods:{onDeleteImage(){const e=this.$secureStorage.getItem("session"),t=this.value.file_uuid;return l.axiosUploadInstance["delete"]("/delete/"+t,{headers:{Authorization:"Bearer "+e.token}})},onDeleteImageEvent(){this.$q.dialog({title:this.$t("delete_confirm"),message:this.$t("delete_confirm_msg"),cancel:!0,persistent:!0}).onOk((()=>{this.onDeleteImage().then((e=>{void 0!==e&&null!==e&&void 0!==e.data&&null!==e.data&&this.$store.dispatch("model/deleteImage",{uuid:this.value.file_uuid}).then((e=>{this.$q.notify({color:"positive",message:this.$t("succesfully_deleted")}),this.$store.commit("ui/setFormData",{name:this.name,value:null})}))}))})).onCancel((()=>{})).onDismiss((()=>{}))},getBase64(e){return new Promise(((t,o)=>{const r=new FileReader;r.readAsDataURL(e),r.onload=()=>t(r.result),r.onerror=e=>o(e)}))},update(e){this.getBase64(e).then((t=>{this.$store.commit("ui/setFormData",{name:this.name,value:e})}))},counterLabelFn({totalSize:e,filesNumber:t,maxFiles:o}){return`${t} files of ${o} | ${e}`}}};var c=o(4260),m=o(6239),p=o(4554),f=o(151),h=o(4027),g=o(5589),_=o(3002),y=o(7518),b=o.n(y);const v=(0,c.Z)(d,[["render",s]]),w=v;b()(d,"components",{QFile:m.Z,QIcon:p.Z,QCard:f.Z,QImg:h.Z,QCardSection:g.Z,QBtn:_.Z})},6053:(e,t,o)=>{"use strict";o.d(t,{Z:()=>h});var r=o(3673),n=o(2323),i=o(8880);const a=["textContent"];function s(e,t,o,s,l,u){const d=(0,r.up)("q-input"),c=(0,r.up)("FormField");return(0,r.wg)(),(0,r.j4)(c,{label:o.label,required:o.required},{default:(0,r.w5)((()=>[(0,r.Wm)(d,{outlined:"",dense:"",name:o.name,type:o.type,modelValue:l.modelValue,"onUpdate:modelValue":t[0]||(t[0]=e=>l.modelValue=e),required:o.required,id:o.uuid,disabled:o.readOnly,onBlur:t[1]||(t[1]=e=>u.update(e))},null,8,["name","type","modelValue","required","id","disabled"]),(0,r.wy)((0,r._)("p",{textContent:(0,n.zw)(o.validation.errorMessage)},null,8,a),[[i.F8,o.validation.errorMessage]])])),_:1},8,["label","required"])}var l=o(7930);const u={name:"FormText",components:{FormField:l.Z},props:{value:{required:!0},name:{type:String,required:!0},required:{type:Boolean,default:!1},label:{type:String,required:!0},readOnly:{type:Boolean,default:!1},uuid:{type:Number,default:0},validation:{type:Object,default:()=>({})},type:{type:String,default:"text"},validations:{type:Object,default:()=>({})}},data(){const e=this.value;return{modelValue:e}},computed:{labelHtml(){const e=this.validations._exclusive&&this.validations._exclusive.required?' <span class="label--required">*</span>':"";return this.label+e}},methods:{update(e){this.$store.commit("ui/setFormData",{name:e.target.name,value:this.modelValue})}}};var d=o(4260),c=o(2426),m=o(7518),p=o.n(m);const f=(0,d.Z)(u,[["render",s]]),h=f;p()(u,"components",{QInput:c.Z})},2480:()=>{}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,o),i.exports}o.m=e,(()=>{o.amdO={}})(),(()=>{var e=[];o.O=(t,r,n,i)=>{if(!r){var a=1/0;for(d=0;d<e.length;d++){for(var[r,n,i]=e[d],s=!0,l=0;l<r.length;l++)(!1&i||a>=i)&&Object.keys(o.O).every((e=>o.O[e](r[l])))?r.splice(l--,1):(s=!1,i<a&&(a=i));if(s){e.splice(d--,1);var u=n();void 0!==u&&(t=u)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[r,n,i]}})(),(()=>{o.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return o.d(t,{a:t}),t}})(),(()=>{o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}})(),(()=>{o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,r)=>(o.f[r](e,t),t)),[]))})(),(()=>{o.u=e=>"js/"+e+"."+{93:"db78fa19",98:"de6b7116",178:"f29de357",252:"62ab8703",267:"9428e878",268:"89f8a7c8",273:"ee003c3d",470:"f65373c9",601:"1698dfb1",681:"68e1e7d9",773:"fe0f4e54",943:"5f8dee08",955:"52627f6c"}[e]+".js"})(),(()=>{o.miniCssF=e=>"css/"+({143:"app",736:"vendor"}[e]||e)+"."+{93:"d21967a1",98:"81fd9708",143:"87a2f0f8",267:"d21967a1",268:"81fd9708",736:"d0356521"}[e]+".css"})(),(()=>{o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="alinea-ui:";o.l=(r,n,i,a)=>{if(e[r])e[r].push(n);else{var s,l;if(void 0!==i)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var c=u[d];if(c.getAttribute("src")==r||c.getAttribute("data-webpack")==t+i){s=c;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.setAttribute("data-webpack",t+i),s.src=r),e[r]=[n];var m=(t,o)=>{s.onerror=s.onload=null,clearTimeout(p);var n=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((e=>e(o))),t)return t(o)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=m.bind(null,s.onerror),s.onload=m.bind(null,s.onload),l&&document.head.appendChild(s)}}})(),(()=>{o.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{o.p=""})(),(()=>{var e=(e,t,o,r)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var i=i=>{if(n.onerror=n.onload=null,"load"===i.type)o();else{var a=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=a,l.request=s,n.parentNode.removeChild(n),r(l)}};return n.onerror=n.onload=i,n.href=t,document.head.appendChild(n),n},t=(e,t)=>{for(var o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var n=o[r],i=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(i===e||i===t))return n}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){n=a[r],i=n.getAttribute("data-href");if(i===e||i===t)return n}},r=r=>new Promise(((n,i)=>{var a=o.miniCssF(r),s=o.p+a;if(t(a,s))return n();e(r,s,n,i)})),n={143:0};o.f.miniCss=(e,t)=>{var o={93:1,98:1,267:1,268:1};n[e]?t.push(n[e]):0!==n[e]&&o[e]&&t.push(n[e]=r(e).then((()=>{n[e]=0}),(t=>{throw delete n[e],t})))}})(),(()=>{var e={143:0};o.f.j=(t,r)=>{var n=o.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var i=new Promise(((o,r)=>n=e[t]=[o,r]));r.push(n[2]=i);var a=o.p+o.u(t),s=new Error,l=r=>{if(o.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,n[1](s)}};o.l(a,l,"chunk-"+t,t)}},o.O.j=t=>0===e[t];var t=(t,r)=>{var n,i,[a,s,l]=r,u=0;if(a.some((t=>0!==e[t]))){for(n in s)o.o(s,n)&&(o.m[n]=s[n]);if(l)var d=l(o)}for(t&&t(r);u<a.length;u++)i=a[u],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(d)},r=self["webpackChunkalinea_ui"]=self["webpackChunkalinea_ui"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=o.O(void 0,[736],(()=>o(2477)));r=o.O(r)})();