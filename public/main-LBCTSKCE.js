import{C as $,Ca as Rt,Da as zt,Fa as Lt,G as p,H as v,I as S,Ia as st,Ja as Be,K as At,L as J,N as De,O as je,P as $e,R as h,T as tt,X as Y,a as _e,da as it,fa as Ye,ga as He,j as Fe,ja as We,ka as ot,l as D,la as Ot,m as Re,na as Ue,oa as It,pa as Pt,q as re,qa as N,r as ze,ra as Nt,s as I,sa as Mt,u as E,v as Le,va as Tt,x as j,xa as _t,y as Et,ya as Ft}from"./chunk-K53FYI3L.js";var Ve=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=D({type:e,selectors:[["app-404"]],standalone:!0,features:[Y],decls:13,vars:0,consts:[["id","wrapper",1,"error-page"],[1,"error-box"],[1,"error-body","text-center"],[1,"text-uppercase"],[1,"text-muted","m-t-30","m-b-30"],["href","index.html",1,"btn","btn-info","btn-rounded","waves-effect","waves-light","m-b-40"],[1,"footer","text-center"]],template:function(r,i){r&1&&(p(0,"section",0)(1,"div",1)(2,"div",2)(3,"h1"),h(4,"404"),v(),p(5,"h3",3),h(6,"Page Not Found !"),v(),p(7,"p",4),h(8,"YOU SEEM TO BE TRYING TO FIND HIS WAY HOME"),v(),p(9,"a",5),h(10,"Back to home"),v()(),p(11,"footer",6),h(12,"\xA9 2017 Admin Pro."),v()()())},styles:['.error-box[_ngcontent-%COMP%]{height:100%;position:fixed;background:url("./media/error-bg-X7AJZDAK.jpg") no-repeat center center #fff;width:100%}.error-box[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]{width:100%;left:0;right:0}.error-body[_ngcontent-%COMP%]{padding-top:5%}.error-body[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:210px;font-weight:900;text-shadow:4px 4px 0 #ffffff,6px 6px 0 #263238;line-height:210px}']});let t=e;return t})();var Dt=(()=>{let e=class e{getErrors(a,r){return!!(r.get(a)?.errors&&r.get(a)?.touched)}showError(a,r){let i=r.get(a)?.errors||{};for(let o of Object.keys(i))switch(o){case"required":return`${a} requerido`;case"email":return`Formato de ${a} invalido`;case"minlength":return`M\xEDnimo ${i.minlength.requiredLength} caracteres`}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=re({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var Ge=_e(Be());var ia=["googleBtn"];function oa(t,e){if(t&1&&(p(0,"div",33),h(1),v()),t&2){let n=J();E(),tt(" ",n.showErrors("email"),"")}}function sa(t,e){if(t&1&&(p(0,"div",33),h(1),v()),t&2){let n=J();E(),tt(" ",n.showErrors("password"),"")}}var qe=(()=>{let e=class e{constructor(){this.fb=I(zt),this.errorsServ=I(Dt),this.usuarioServ=I(st),this.router=I(ot),this.ngZone=I(Le),this.formLogin=this.fb.group({email:[localStorage.getItem("email")||"",[N.required,N.email]],password:["123456",N.required],remember:[!1]})}ngAfterViewInit(){this.googleInit()}googleInit(){google.accounts.id.initialize({client_id:"948583715514-rpkim7dc9btffe4hjj3r7ru6730mg5v9.apps.googleusercontent.com",callback:a=>this.handleCredentialResponse(a)}),google.accounts.id.renderButton(this.googleBtn.nativeElement,{theme:"outline",size:"large"}),google.accounts.id.prompt()}handleCredentialResponse(a){this.usuarioServ.loginGoogle(a.credential).subscribe(()=>{this.ngZone.run(()=>this.router.navigateByUrl("/dashboard"))})}onSubmit(){this.formLogin.invalid?this.formLogin.markAllAsTouched():this.usuarioServ.loginUsuario(this.formLogin.value).subscribe(a=>{this.formLogin.get("remember")?.value&&localStorage.setItem("email",this.formLogin.get("email")?.value),localStorage.removeItem("email")},a=>{Ge.default.fire({title:"Error",text:a.error.msg,icon:"error"})},()=>this.router.navigateByUrl("/dashboard"))}getErrors(a){return this.errorsServ.getErrors(a,this.formLogin)}showErrors(a){return this.errorsServ.showError(a,this.formLogin)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=D({type:e,selectors:[["app-login"]],viewQuery:function(r,i){if(r&1&&De(ia,5),r&2){let o;je(o=$e())&&(i.googleBtn=o.first)}},standalone:!0,features:[Y],decls:54,vars:3,consts:[["id","wrapper",1,"login-register","login-sidebar",2,"background-image","url(../assets/images/background/login-register.jpg)"],[1,"login-box","card"],[1,"card-body"],["id","loginform","action","index.html",1,"form-horizontal","form-material",3,"formGroup","ngSubmit"],["href","javascript:void(0)",1,"text-center","db"],["src","../assets/images/logo-icon.png","alt","Home"],["src","../assets/images/logo-text.png","alt","Home"],[1,"form-group","m-t-40"],[1,"col-xs-12"],["formControlName","email","type","email","required","","placeholder","email",1,"form-control"],["class","col text-danger"],[1,"form-group"],["formControlName","password","type","password","required","","placeholder","Password",1,"form-control"],[1,"form-group","row"],[1,"col-md-12"],[1,"checkbox","checkbox-primary","pull-left","p-t-0"],["formControlName","remember","id","remember","type","checkbox",1,"filled-in","chk-col-light-blue"],["for","remember"],["href","javascript:void(0)","id","to-recover",1,"text-dark","pull-right"],[1,"fa","fa-lock","m-r-5"],[1,"form-group","text-center","m-t-20"],["type","submit",1,"btn","btn-info","btn-lg","btn-block","text-uppercase","btn-rounded"],[1,"row"],[1,"col-xs-12","col-sm-12","col-md-12","m-t-10","text-center"],[1,"social","justify-content-center"],["googleBtn",""],[1,"form-group","m-b-0"],[1,"col-sm-12","text-center"],["routerLink","/register","href","pages-register2.html",1,"text-primary","m-l-5"],["id","recoverform","action","index.html",1,"form-horizontal"],[1,"text-muted"],["type","text","required","","placeholder","Email",1,"form-control"],["type","submit",1,"btn","btn-primary","btn-lg","btn-block","text-uppercase","waves-effect","waves-light"],[1,"col","text-danger"]],template:function(r,i){r&1&&(p(0,"section",0)(1,"div",1)(2,"div",2)(3,"form",3),At("ngSubmit",function(){return i.onSubmit()}),p(4,"a",4),S(5,"img",5)(6,"br")(7,"img",6),v(),p(8,"div",7)(9,"div",8),S(10,"input",9),v(),j(11,oa,2,1,"div",10),v(),p(12,"div",11)(13,"div",8),S(14,"input",12),v(),j(15,sa,2,1,"div",10),v(),p(16,"div",13)(17,"div",14)(18,"div",15),S(19,"input",16),p(20,"label",17),h(21," Recuerdame "),v()(),p(22,"a",18),S(23,"i",19),h(24," \xBFOlvidaste la contrase\xF1a?"),v()()(),p(25,"div",20)(26,"div",8)(27,"button",21),h(28,"Login"),v()()(),p(29,"div",22)(30,"div",23)(31,"div",24),S(32,"div",null,25),v()()(),p(34,"div",26)(35,"div",27),h(36," \xBFNo tienes cuenta? "),p(37,"a",28)(38,"b"),h(39,"Registrate"),v()()()()(),p(40,"form",29)(41,"div",11)(42,"div",8)(43,"h3"),h(44,"Recover Password"),v(),p(45,"p",30),h(46,"Enter your Email and instructions will be sent to you! "),v()()(),p(47,"div",11)(48,"div",8),S(49,"input",31),v()(),p(50,"div",20)(51,"div",8)(52,"button",32),h(53,"Reset"),v()()()()()()()),r&2&&(E(3),Et("formGroup",i.formLogin),E(8),$(11,i.getErrors("email")?11:-1),E(4),$(15,i.getErrors("password")?15:-1))},dependencies:[it,Ot,Lt,Tt,Pt,It,Nt,Mt,Rt,_t,Ft],styles:[".login-register[_ngcontent-%COMP%]{background-size:cover;background-repeat:no-repeat;background-position:center center;height:100%;width:100%;padding:10% 0;position:fixed}.login-box[_ngcontent-%COMP%]{width:400px;margin:0 auto}.login-box[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]{width:100%;left:0;right:0}.login-box[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]{display:block;margin-bottom:30px}#recoverform[_ngcontent-%COMP%]{display:none}.login-sidebar[_ngcontent-%COMP%]{padding:0;margin-top:0}.login-sidebar[_ngcontent-%COMP%]   .login-box[_ngcontent-%COMP%]{right:0;position:absolute;height:100%}"]});let t=e;return t})();var Xe=_e(Be());function la(t,e){if(t&1&&(p(0,"div",27),h(1),v()),t&2){let n=J();E(),tt(" ",n.showError("name"),"")}}function fa(t,e){if(t&1&&(p(0,"div",27),h(1),v()),t&2){let n=J();E(),tt(" ",n.showError("email"),"")}}function ca(t,e){if(t&1&&(p(0,"div",27),h(1),v()),t&2){let n=J();E(),tt(" ",n.showError("password"),"")}}function ua(t,e){t&1&&(p(0,"div",27),h(1," Las contrase\xF1as no coinciden"),v())}function ma(t,e){t&1&&(p(0,"div",27),h(1," Acepta los terminos para continuar"),v())}var Ke=(()=>{let e=class e{constructor(){this.fb=I(zt),this.errorService=I(Dt),this.usuarioServ=I(st),this.router=I(ot),this.formSubmitted=!1,this.registerForm=this.fb.group({name:["",[N.required]],email:["",[N.required,N.email]],password:["",[N.required,N.minLength(6)]],password2:["",[N.required,N.minLength(6)]],terminos:[!1,[N.requiredTrue]]},{validators:this.passwordsIguales("password","password2")})}onSubmit(){this.formSubmitted=!0,this.registerForm.invalid?(this.registerForm.markAllAsTouched(),console.log("Formulario no es correcto")):(console.log("Posteando formulario ..."),this.usuarioServ.crearUsuario(this.registerForm.value).subscribe(()=>this.router.navigateByUrl("/dashboard"),a=>{Xe.default.fire({title:"Error",text:a.error.msg,icon:"error"})}))}getErrors(a){return this.errorService.getErrors(a,this.registerForm)}showError(a){return this.errorService.showError(a,this.registerForm)}passwordInValid(){if(this.registerForm.get("password2")?.errors&&this.registerForm.get("password2")?.touched){let a=this.registerForm.get("password")?.value,r=this.registerForm.get("password2")?.value;if(a!==r)return!0}return!1}passwordsIguales(a,r){return i=>{let o=i.get(a),s=i.get(r);o?.value===s?.value?s?.setErrors(null):s?.setErrors({noSonIguales:!0})}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=D({type:e,selectors:[["app-register"]],standalone:!0,features:[Y],decls:48,vars:6,consts:[["id","wrapper",1,"login-register","login-sidebar",2,"background-image","url(../assets/images/background/login-register.jpg)"],[1,"login-box","card"],[1,"card-body"],["id","loginform",1,"form-horizontal","form-material",3,"formGroup","ngSubmit"],["href","javascript:void(0)",1,"text-center","db"],["src","../assets/images/logo-icon.png","alt","Home"],["src","../assets/images/logo-text.png","alt","Home"],[1,"box-title","m-t-40","m-b-0"],[1,"form-group","m-t-20"],[1,"col-xs-12"],["formControlName","name","type","text","required","","placeholder","Nombre",1,"form-control"],["class","col text-danger"],[1,"form-group"],["formControlName","email","type","text","required","","placeholder","Email",1,"form-control"],["formControlName","password","type","password","required","","placeholder","Password",1,"form-control"],["formControlName","password2","type","password","required","","placeholder","Confirm Password",1,"form-control"],[1,"form-group","row"],[1,"col-md-12"],[1,"checkbox","checkbox-primary","p-t-0"],["formControlName","terminos","id","checkbox-signup","type","checkbox"],["for","checkbox-signup"],["href","#"],[1,"form-group","text-center","m-t-20"],["type","submit",1,"btn","btn-info","btn-lg","btn-block","text-uppercase","waves-effect","waves-light"],[1,"form-group","m-b-0"],[1,"col-sm-12","text-center"],["routerLink","/login",1,"text-info","m-l-5"],[1,"col","text-danger"]],template:function(r,i){r&1&&(p(0,"section",0)(1,"div",1)(2,"div",2)(3,"form",3),At("ngSubmit",function(){return i.onSubmit()}),p(4,"a",4),S(5,"img",5)(6,"br")(7,"img",6),v(),p(8,"h3",7),h(9,"Registrarse ahora"),v(),p(10,"small"),h(11,"Crea tu cuenta y empieza"),v(),p(12,"div",8)(13,"div",9),S(14,"input",10),v(),j(15,la,2,1,"div",11),v(),p(16,"div",12)(17,"div",9),S(18,"input",13),v(),j(19,fa,2,1,"div",11),v(),p(20,"div",12)(21,"div",9),S(22,"input",14),v(),j(23,ca,2,1,"div",11),v(),p(24,"div",12)(25,"div",9),S(26,"input",15),v(),j(27,ua,2,0,"div",11),v(),p(28,"div",16)(29,"div",17)(30,"div",18),S(31,"input",19),p(32,"label",20),h(33," Aceptas todos los "),p(34,"a",21),h(35,"Terminos"),v()()()(),j(36,ma,2,0,"div",11),v(),p(37,"div",22)(38,"div",9)(39,"button",23),h(40,"Registrarse"),v()()(),p(41,"div",24)(42,"div",25)(43,"p"),h(44,"\xBFYa tienes una cuenta? "),p(45,"a",26)(46,"b"),h(47,"Inicia Sesi\xF3n"),v()()()()()()()()()),r&2&&(E(3),Et("formGroup",i.registerForm),E(12),$(15,i.getErrors("name")?15:-1),E(4),$(19,i.getErrors("email")?19:-1),E(4),$(23,i.getErrors("password")?23:-1),E(4),$(27,i.passwordInValid()?27:-1),E(9),$(36,i.getErrors("terminos")?36:-1))},dependencies:[it,Ot,Lt,Tt,Pt,It,Nt,Mt,Rt,_t,Ft],styles:[".login-register[_ngcontent-%COMP%]{background-size:cover;background-repeat:no-repeat;background-position:center center;height:100%;width:100%;padding:10% 0;position:fixed}.login-box[_ngcontent-%COMP%]{width:400px;margin:0 auto}.login-box[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]{width:100%;left:0;right:0}.login-box[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]{display:block;margin-bottom:30px}#recoverform[_ngcontent-%COMP%]{display:none}.login-sidebar[_ngcontent-%COMP%]{padding:0;margin-top:0}.login-sidebar[_ngcontent-%COMP%]   .login-box[_ngcontent-%COMP%]{right:0;position:absolute;height:100%}"]});let t=e;return t})();var Qe=[{path:"login",component:qe},{path:"register",component:Ke}];var Ze=(t,e)=>{let n=I(st),a=I(ot);return n.validarToken().pipe(Fe(r=>{r||a.navigateByUrl("/login")}))};var Je=[{path:"dashboard",canActivate:[Ze],loadChildren:()=>import("./chunk-BTQ6UAMZ.js").then(t=>t.PAGES_ROUTES)},...Qe,{path:"",redirectTo:"dashboard",pathMatch:"full"},{path:"**",component:Ve}];var tn={providers:[Ue(Je),Ye()]};function en(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?en(Object(n),!0).forEach(function(a){k(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):en(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function Kt(t){"@babel/helpers - typeof";return Kt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Kt(t)}function da(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function nn(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function pa(t,e,n){return e&&nn(t.prototype,e),n&&nn(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function k(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function xe(t,e){return ga(t)||ba(t,e)||In(t,e)||xa()}function kt(t){return va(t)||ha(t)||In(t)||ya()}function va(t){if(Array.isArray(t))return fe(t)}function ga(t){if(Array.isArray(t))return t}function ha(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function ba(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var a=[],r=!0,i=!1,o,s;try{for(n=n.call(t);!(r=(o=n.next()).done)&&(a.push(o.value),!(e&&a.length===e));r=!0);}catch(l){i=!0,s=l}finally{try{!r&&n.return!=null&&n.return()}finally{if(i)throw s}}return a}}function In(t,e){if(t){if(typeof t=="string")return fe(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return fe(t,e)}}function fe(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function ya(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xa(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var an=function(){},we={},Pn={},Nn=null,Mn={mark:an,measure:an};try{typeof window<"u"&&(we=window),typeof document<"u"&&(Pn=document),typeof MutationObserver<"u"&&(Nn=MutationObserver),typeof performance<"u"&&(Mn=performance)}catch{}var wa=we.navigator||{},rn=wa.userAgent,on=rn===void 0?"":rn,q=we,x=Pn,sn=Nn,jt=Mn,Pi=!!q.document,B=!!x.documentElement&&!!x.head&&typeof x.addEventListener=="function"&&typeof x.createElement=="function",Tn=~on.indexOf("MSIE")||~on.indexOf("Trident/"),$t,Yt,Ht,Wt,Ut,H="___FONT_AWESOME___",ce=16,_n="fa",Fn="svg-inline--fa",at="data-fa-i2svg",ue="data-fa-pseudo-element",ka="data-fa-pseudo-element-pending",ke="data-prefix",Se="data-icon",ln="fontawesome-i2svg",Sa="async",Ca=["HTML","HEAD","STYLE","SCRIPT"],Rn=function(){try{return!0}catch{return!1}}(),y="classic",w="sharp",Ce=[y,w];function St(t){return new Proxy(t,{get:function(n,a){return a in n?n[a]:n[y]}})}var ht=St(($t={},k($t,y,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),k($t,w,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),$t)),bt=St((Yt={},k(Yt,y,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),k(Yt,w,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Yt)),yt=St((Ht={},k(Ht,y,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),k(Ht,w,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Ht)),Ea=St((Wt={},k(Wt,y,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),k(Wt,w,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),Wt)),Aa=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,zn="fa-layers-text",Oa=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Ia=St((Ut={},k(Ut,y,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),k(Ut,w,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Ut)),Ln=[1,2,3,4,5,6,7,8,9,10],Pa=Ln.concat([11,12,13,14,15,16,17,18,19,20]),Na=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],et={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},xt=new Set;Object.keys(bt[y]).map(xt.add.bind(xt));Object.keys(bt[w]).map(xt.add.bind(xt));var Ma=[].concat(Ce,kt(xt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",et.GROUP,et.SWAP_OPACITY,et.PRIMARY,et.SECONDARY]).concat(Ln.map(function(t){return"".concat(t,"x")})).concat(Pa.map(function(t){return"w-".concat(t)})),vt=q.FontAwesomeConfig||{};function Ta(t){var e=x.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function _a(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}x&&typeof x.querySelector=="function"&&(fn=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],fn.forEach(function(t){var e=xe(t,2),n=e[0],a=e[1],r=_a(Ta(n));r!=null&&(vt[a]=r)}));var fn,Dn={styleDefault:"solid",familyDefault:"classic",cssPrefix:_n,replacementClass:Fn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};vt.familyPrefix&&(vt.cssPrefix=vt.familyPrefix);var ut=c(c({},Dn),vt);ut.autoReplaceSvg||(ut.observeMutations=!1);var m={};Object.keys(Dn).forEach(function(t){Object.defineProperty(m,t,{enumerable:!0,set:function(n){ut[t]=n,gt.forEach(function(a){return a(m)})},get:function(){return ut[t]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(e){ut.cssPrefix=e,gt.forEach(function(n){return n(m)})},get:function(){return ut.cssPrefix}});q.FontAwesomeConfig=m;var gt=[];function Fa(t){return gt.push(t),function(){gt.splice(gt.indexOf(t),1)}}var G=ce,L={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ra(t){if(!(!t||!B)){var e=x.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=x.head.childNodes,a=null,r=n.length-1;r>-1;r--){var i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return x.head.insertBefore(e,a),t}}var za="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function wt(){for(var t=12,e="";t-- >0;)e+=za[Math.random()*62|0];return e}function mt(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Ee(t){return t.classList?mt(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function jn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function La(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(jn(t[n]),'" ')},"").trim()}function Jt(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Ae(t){return t.size!==L.size||t.x!==L.x||t.y!==L.y||t.rotate!==L.rotate||t.flipX||t.flipY}function Da(t){var e=t.transform,n=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:l,path:u}}function ja(t){var e=t.transform,n=t.width,a=n===void 0?ce:n,r=t.height,i=r===void 0?ce:r,o=t.startCentered,s=o===void 0?!1:o,l="";return s&&Tn?l+="translate(".concat(e.x/G-a/2,"em, ").concat(e.y/G-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(e.x/G,"em), calc(-50% + ").concat(e.y/G,"em)) "):l+="translate(".concat(e.x/G,"em, ").concat(e.y/G,"em) "),l+="scale(".concat(e.size/G*(e.flipX?-1:1),", ").concat(e.size/G*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var $a=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function $n(){var t=_n,e=Fn,n=m.cssPrefix,a=m.replacementClass,r=$a;if(n!==t||a!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(a))}return r}var cn=!1;function ie(){m.autoAddCss&&!cn&&(Ra($n()),cn=!0)}var Ya={mixout:function(){return{dom:{css:$n,insertCss:ie}}},hooks:function(){return{beforeDOMElementCreation:function(){ie()},beforeI2svg:function(){ie()}}}},W=q||{};W[H]||(W[H]={});W[H].styles||(W[H].styles={});W[H].hooks||(W[H].hooks={});W[H].shims||(W[H].shims=[]);var F=W[H],Yn=[],Ha=function t(){x.removeEventListener("DOMContentLoaded",t),Qt=1,Yn.map(function(e){return e()})},Qt=!1;B&&(Qt=(x.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(x.readyState),Qt||x.addEventListener("DOMContentLoaded",Ha));function Wa(t){B&&(Qt?setTimeout(t,0):Yn.push(t))}function Ct(t){var e=t.tag,n=t.attributes,a=n===void 0?{}:n,r=t.children,i=r===void 0?[]:r;return typeof t=="string"?jn(t):"<".concat(e," ").concat(La(a),">").concat(i.map(Ct).join(""),"</").concat(e,">")}function un(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Ua=function(e,n){return function(a,r,i,o){return e.call(n,a,r,i,o)}},oe=function(e,n,a,r){var i=Object.keys(e),o=i.length,s=r!==void 0?Ua(n,r):n,l,u,f;for(a===void 0?(l=1,f=e[i[0]]):(l=0,f=a);l<o;l++)u=i[l],f=s(f,e[u],u,e);return f};function Ba(t){for(var e=[],n=0,a=t.length;n<a;){var r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){var i=t.charCodeAt(n++);(i&64512)==56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function me(t){var e=Ba(t);return e.length===1?e[0].toString(16):null}function Va(t,e){var n=t.length,a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function mn(t){return Object.keys(t).reduce(function(e,n){var a=t[n],r=!!a.icon;return r?e[a.iconName]=a.icon:e[n]=a,e},{})}function de(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=n.skipHooks,r=a===void 0?!1:a,i=mn(e);typeof F.hooks.addPack=="function"&&!r?F.hooks.addPack(t,mn(e)):F.styles[t]=c(c({},F.styles[t]||{}),i),t==="fas"&&de("fa",e)}var Bt,Vt,Gt,lt=F.styles,Ga=F.shims,qa=(Bt={},k(Bt,y,Object.values(yt[y])),k(Bt,w,Object.values(yt[w])),Bt),Oe=null,Hn={},Wn={},Un={},Bn={},Vn={},Xa=(Vt={},k(Vt,y,Object.keys(ht[y])),k(Vt,w,Object.keys(ht[w])),Vt);function Ka(t){return~Ma.indexOf(t)}function Qa(t,e){var n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!Ka(r)?r:null}var Gn=function(){var e=function(i){return oe(lt,function(o,s,l){return o[l]=oe(s,i,{}),o},{})};Hn=e(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){r[l.toString(16)]=o})}return r}),Wn=e(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){r[l]=o})}return r}),Vn=e(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(l){r[l]=o}),r});var n="far"in lt||m.autoFetchSvg,a=oe(Ga,function(r,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:l}),r},{names:{},unicodes:{}});Un=a.names,Bn=a.unicodes,Oe=te(m.styleDefault,{family:m.familyDefault})};Fa(function(t){Oe=te(t.styleDefault,{family:m.familyDefault})});Gn();function Ie(t,e){return(Hn[t]||{})[e]}function Za(t,e){return(Wn[t]||{})[e]}function nt(t,e){return(Vn[t]||{})[e]}function qn(t){return Un[t]||{prefix:null,iconName:null}}function Ja(t){var e=Bn[t],n=Ie("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function X(){return Oe}var Pe=function(){return{prefix:null,iconName:null,rest:[]}};function te(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,a=n===void 0?y:n,r=ht[a][t],i=bt[a][t]||bt[a][r],o=t in F.styles?t:null;return i||o||null}var dn=(Gt={},k(Gt,y,Object.keys(yt[y])),k(Gt,w,Object.keys(yt[w])),Gt);function ee(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.skipLookups,r=a===void 0?!1:a,i=(e={},k(e,y,"".concat(m.cssPrefix,"-").concat(y)),k(e,w,"".concat(m.cssPrefix,"-").concat(w)),e),o=null,s=y;(t.includes(i[y])||t.some(function(u){return dn[y].includes(u)}))&&(s=y),(t.includes(i[w])||t.some(function(u){return dn[w].includes(u)}))&&(s=w);var l=t.reduce(function(u,f){var d=Qa(m.cssPrefix,f);if(lt[f]?(f=qa[s].includes(f)?Ea[s][f]:f,o=f,u.prefix=f):Xa[s].indexOf(f)>-1?(o=f,u.prefix=te(f,{family:s})):d?u.iconName=d:f!==m.replacementClass&&f!==i[y]&&f!==i[w]&&u.rest.push(f),!r&&u.prefix&&u.iconName){var g=o==="fa"?qn(u.iconName):{},b=nt(u.prefix,u.iconName);g.prefix&&(o=null),u.iconName=g.iconName||b||u.iconName,u.prefix=g.prefix||u.prefix,u.prefix==="far"&&!lt.far&&lt.fas&&!m.autoFetchSvg&&(u.prefix="fas")}return u},Pe());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===w&&(lt.fass||m.autoFetchSvg)&&(l.prefix="fass",l.iconName=nt(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=X()||"fas"),l}var tr=function(){function t(){da(this,t),this.definitions={}}return pa(t,[{key:"add",value:function(){for(var n=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=c(c({},n.definitions[s]||{}),o[s]),de(s,o[s]);var l=yt[y][s];l&&de(l,o[s]),Gn()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,l=o.iconName,u=o.icon,f=u[2];n[s]||(n[s]={}),f.length>0&&f.forEach(function(d){typeof d=="string"&&(n[s][d]=u)}),n[s][l]=u}),n}}]),t}(),pn=[],ft={},ct={},er=Object.keys(ct);function nr(t,e){var n=e.mixoutsTo;return pn=t,ft={},Object.keys(ct).forEach(function(a){er.indexOf(a)===-1&&delete ct[a]}),pn.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),Kt(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=r[o][s]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(o){ft[o]||(ft[o]=[]),ft[o].push(i[o])})}a.provides&&a.provides(ct)}),n}function pe(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var i=ft[t]||[];return i.forEach(function(o){e=o.apply(null,[e].concat(a))}),e}function rt(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];var r=ft[t]||[];r.forEach(function(i){i.apply(null,n)})}function U(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return ct[t]?ct[t].apply(null,e):void 0}function ve(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||X();if(e)return e=nt(n,e)||e,un(Xn.definitions,n,e)||un(F.styles,n,e)}var Xn=new tr,ar=function(){m.autoReplaceSvg=!1,m.observeMutations=!1,rt("noAuto")},rr={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return B?(rt("beforeI2svg",e),U("pseudoElements2svg",e),U("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,Wa(function(){or({autoReplaceSvgRoot:n}),rt("watch",e)})}},ir={icon:function(e){if(e===null)return null;if(Kt(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:nt(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],a=te(e[0]);return{prefix:a,iconName:nt(a,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(m.cssPrefix,"-"))>-1||e.match(Aa))){var r=ee(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||X(),iconName:nt(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var i=X();return{prefix:i,iconName:nt(i,e)||e}}}},M={noAuto:ar,config:m,dom:rr,parse:ir,library:Xn,findIconDefinition:ve,toHtml:Ct},or=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,a=n===void 0?x:n;(Object.keys(F.styles).length>0||m.autoFetchSvg)&&B&&m.autoReplaceSvg&&M.dom.i2svg({node:a})};function ne(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(a){return Ct(a)})}}),Object.defineProperty(t,"node",{get:function(){if(B){var a=x.createElement("div");return a.innerHTML=t.html,a.children}}}),t}function sr(t){var e=t.children,n=t.main,a=t.mask,r=t.attributes,i=t.styles,o=t.transform;if(Ae(o)&&n.found&&!a.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};r.style=Jt(c(c({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function lr(t){var e=t.prefix,n=t.iconName,a=t.children,r=t.attributes,i=t.symbol,o=i===!0?"".concat(e,"-").concat(m.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:c(c({},r),{},{id:o}),children:a}]}]}function Ne(t){var e=t.icons,n=e.main,a=e.mask,r=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,l=t.title,u=t.maskId,f=t.titleId,d=t.extra,g=t.watchable,b=g===void 0?!1:g,A=a.found?a:n,T=A.width,_=A.height,R=r==="fak",C=[m.replacementClass,i?"".concat(m.cssPrefix,"-").concat(i):""].filter(function(V){return d.classes.indexOf(V)===-1}).filter(function(V){return V!==""||!!V}).concat(d.classes).join(" "),O={children:[],attributes:c(c({},d.attributes),{},{"data-prefix":r,"data-icon":i,class:C,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(T," ").concat(_)})},z=R&&!~d.classes.indexOf("fa-fw")?{width:"".concat(T/_*16*.0625,"em")}:{};b&&(O.attributes[at]=""),l&&(O.children.push({tag:"title",attributes:{id:O.attributes["aria-labelledby"]||"title-".concat(f||wt())},children:[l]}),delete O.attributes.title);var P=c(c({},O),{},{prefix:r,iconName:i,main:n,mask:a,maskId:u,transform:o,symbol:s,styles:c(c({},z),d.styles)}),Q=a.found&&n.found?U("generateAbstractMask",P)||{children:[],attributes:{}}:U("generateAbstractIcon",P)||{children:[],attributes:{}},Z=Q.children,ae=Q.attributes;return P.children=Z,P.attributes=ae,s?lr(P):sr(P)}function vn(t){var e=t.content,n=t.width,a=t.height,r=t.transform,i=t.title,o=t.extra,s=t.watchable,l=s===void 0?!1:s,u=c(c(c({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(u[at]="");var f=c({},o.styles);Ae(r)&&(f.transform=ja({transform:r,startCentered:!0,width:n,height:a}),f["-webkit-transform"]=f.transform);var d=Jt(f);d.length>0&&(u.style=d);var g=[];return g.push({tag:"span",attributes:u,children:[e]}),i&&g.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),g}function fr(t){var e=t.content,n=t.title,a=t.extra,r=c(c(c({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=Jt(a.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var se=F.styles;function ge(t){var e=t[0],n=t[1],a=t.slice(4),r=xe(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(et.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(et.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(et.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:o}}var cr={found:!1,width:512,height:512};function ur(t,e){!Rn&&!m.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function he(t,e){var n=e;return e==="fa"&&m.styleDefault!==null&&(e=X()),new Promise(function(a,r){var i={found:!1,width:512,height:512,icon:U("missingIconAbstract")||{}};if(n==="fa"){var o=qn(t)||{};t=o.iconName||t,e=o.prefix||e}if(t&&e&&se[e]&&se[e][t]){var s=se[e][t];return a(ge(s))}ur(t,e),a(c(c({},cr),{},{icon:m.showMissingIcons&&t?U("missingIconAbstract")||{}:{}}))})}var gn=function(){},be=m.measurePerformance&&jt&&jt.mark&&jt.measure?jt:{mark:gn,measure:gn},pt='FA "6.5.1"',mr=function(e){return be.mark("".concat(pt," ").concat(e," begins")),function(){return Kn(e)}},Kn=function(e){be.mark("".concat(pt," ").concat(e," ends")),be.measure("".concat(pt," ").concat(e),"".concat(pt," ").concat(e," begins"),"".concat(pt," ").concat(e," ends"))},Me={begin:mr,end:Kn},qt=function(){};function hn(t){var e=t.getAttribute?t.getAttribute(at):null;return typeof e=="string"}function dr(t){var e=t.getAttribute?t.getAttribute(ke):null,n=t.getAttribute?t.getAttribute(Se):null;return e&&n}function pr(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(m.replacementClass)}function vr(){if(m.autoReplaceSvg===!0)return Xt.replace;var t=Xt[m.autoReplaceSvg];return t||Xt.replace}function gr(t){return x.createElementNS("http://www.w3.org/2000/svg",t)}function hr(t){return x.createElement(t)}function Qn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,a=n===void 0?t.tag==="svg"?gr:hr:n;if(typeof t=="string")return x.createTextNode(t);var r=a(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){r.appendChild(Qn(o,{ceFn:a}))}),r}function br(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Xt={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(r){n.parentNode.insertBefore(Qn(r),n)}),n.getAttribute(at)===null&&m.keepOriginalSource){var a=x.createComment(br(n));n.parentNode.replaceChild(a,n)}else n.remove()},nest:function(e){var n=e[0],a=e[1];if(~Ee(n).indexOf(m.replacementClass))return Xt.replace(e);var r=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(s,l){return l===m.replacementClass||l.match(r)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=a.map(function(s){return Ct(s)}).join(`
`);n.setAttribute(at,""),n.innerHTML=o}};function bn(t){t()}function Zn(t,e){var n=typeof e=="function"?e:qt;if(t.length===0)n();else{var a=bn;m.mutateApproach===Sa&&(a=q.requestAnimationFrame||bn),a(function(){var r=vr(),i=Me.begin("mutate");t.map(r),i(),n()})}}var Te=!1;function Jn(){Te=!0}function ye(){Te=!1}var Zt=null;function yn(t){if(sn&&m.observeMutations){var e=t.treeCallback,n=e===void 0?qt:e,a=t.nodeCallback,r=a===void 0?qt:a,i=t.pseudoElementsCallback,o=i===void 0?qt:i,s=t.observeMutationsRoot,l=s===void 0?x:s;Zt=new sn(function(u){if(!Te){var f=X();mt(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!hn(d.addedNodes[0])&&(m.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&m.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&hn(d.target)&&~Na.indexOf(d.attributeName))if(d.attributeName==="class"&&dr(d.target)){var g=ee(Ee(d.target)),b=g.prefix,A=g.iconName;d.target.setAttribute(ke,b||f),A&&d.target.setAttribute(Se,A)}else pr(d.target)&&r(d.target)})}}),B&&Zt.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function yr(){Zt&&Zt.disconnect()}function xr(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(a,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),n}function wr(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",r=ee(Ee(t));return r.prefix||(r.prefix=X()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Za(r.prefix,t.innerText)||Ie(r.prefix,me(t.innerText))),!r.iconName&&m.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function kr(t){var e=mt(t.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return m.autoA11y&&(n?e["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(a||wt()):(e["aria-hidden"]="true",e.focusable="false")),e}function Sr(){return{iconName:null,title:null,titleId:null,prefix:null,transform:L,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function xn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=wr(t),a=n.iconName,r=n.prefix,i=n.rest,o=kr(t),s=pe("parseNodeAttributes",{},t),l=e.styleParser?xr(t):[];return c({iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:L,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Cr=F.styles;function ta(t){var e=m.autoReplaceSvg==="nest"?xn(t,{styleParser:!1}):xn(t);return~e.extra.classes.indexOf(zn)?U("generateLayersText",t,e):U("generateSvgReplacementMutation",t,e)}var K=new Set;Ce.map(function(t){K.add("fa-".concat(t))});Object.keys(ht[y]).map(K.add.bind(K));Object.keys(ht[w]).map(K.add.bind(K));K=kt(K);function wn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!B)return Promise.resolve();var n=x.documentElement.classList,a=function(d){return n.add("".concat(ln,"-").concat(d))},r=function(d){return n.remove("".concat(ln,"-").concat(d))},i=m.autoFetchSvg?K:Ce.map(function(f){return"fa-".concat(f)}).concat(Object.keys(Cr));i.includes("fa")||i.push("fa");var o=[".".concat(zn,":not([").concat(at,"])")].concat(i.map(function(f){return".".concat(f,":not([").concat(at,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=mt(t.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var l=Me.begin("onTree"),u=s.reduce(function(f,d){try{var g=ta(d);g&&f.push(g)}catch(b){Rn||b.name==="MissingIcon"&&console.error(b)}return f},[]);return new Promise(function(f,d){Promise.all(u).then(function(g){Zn(g,function(){a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),l(),f()})}).catch(function(g){l(),d(g)})})}function Er(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ta(t).then(function(n){n&&Zn([n],e)})}function Ar(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(e||{}).icon?e:ve(e||{}),r=n.mask;return r&&(r=(r||{}).icon?r:ve(r||{})),t(a,c(c({},n),{},{mask:r}))}}var Or=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,r=a===void 0?L:a,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,u=n.maskId,f=u===void 0?null:u,d=n.title,g=d===void 0?null:d,b=n.titleId,A=b===void 0?null:b,T=n.classes,_=T===void 0?[]:T,R=n.attributes,C=R===void 0?{}:R,O=n.styles,z=O===void 0?{}:O;if(e){var P=e.prefix,Q=e.iconName,Z=e.icon;return ne(c({type:"icon"},e),function(){return rt("beforeDOMElementCreation",{iconDefinition:e,params:n}),m.autoA11y&&(g?C["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(A||wt()):(C["aria-hidden"]="true",C.focusable="false")),Ne({icons:{main:ge(Z),mask:l?ge(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:P,iconName:Q,transform:c(c({},L),r),symbol:o,title:g,maskId:f,titleId:A,extra:{attributes:C,styles:z,classes:_}})})}},Ir={mixout:function(){return{icon:Ar(Or)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=wn,n.nodeCallback=Er,n}}},provides:function(e){e.i2svg=function(n){var a=n.node,r=a===void 0?x:a,i=n.callback,o=i===void 0?function(){}:i;return wn(r,o)},e.generateSvgReplacementMutation=function(n,a){var r=a.iconName,i=a.title,o=a.titleId,s=a.prefix,l=a.transform,u=a.symbol,f=a.mask,d=a.maskId,g=a.extra;return new Promise(function(b,A){Promise.all([he(r,s),f.iconName?he(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(T){var _=xe(T,2),R=_[0],C=_[1];b([n,Ne({icons:{main:R,mask:C},prefix:s,iconName:r,transform:l,symbol:u,maskId:d,title:i,titleId:o,extra:g,watchable:!0})])}).catch(A)})},e.generateAbstractIcon=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Jt(s);l.length>0&&(r.style=l);var u;return Ae(o)&&(u=U("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),a.push(u||i.icon),{children:a,attributes:r}}}},Pr={mixout:function(){return{layer:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return ne({type:"layer"},function(){rt("beforeDOMElementCreation",{assembler:n,params:a});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers")].concat(kt(i)).join(" ")},children:o}]})}}}},Nr={mixout:function(){return{counter:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,o=a.classes,s=o===void 0?[]:o,l=a.attributes,u=l===void 0?{}:l,f=a.styles,d=f===void 0?{}:f;return ne({type:"counter",content:n},function(){return rt("beforeDOMElementCreation",{content:n,params:a}),fr({content:n.toString(),title:i,extra:{attributes:u,styles:d,classes:["".concat(m.cssPrefix,"-layers-counter")].concat(kt(s))}})})}}}},Mr={mixout:function(){return{text:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?L:r,o=a.title,s=o===void 0?null:o,l=a.classes,u=l===void 0?[]:l,f=a.attributes,d=f===void 0?{}:f,g=a.styles,b=g===void 0?{}:g;return ne({type:"text",content:n},function(){return rt("beforeDOMElementCreation",{content:n,params:a}),vn({content:n,transform:c(c({},L),i),title:s,extra:{attributes:d,styles:b,classes:["".concat(m.cssPrefix,"-layers-text")].concat(kt(u))}})})}}},provides:function(e){e.generateLayersText=function(n,a){var r=a.title,i=a.transform,o=a.extra,s=null,l=null;if(Tn){var u=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();s=f.width/u,l=f.height/u}return m.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,vn({content:n.innerHTML,width:s,height:l,transform:i,title:r,extra:o,watchable:!0})])}}},Tr=new RegExp('"',"ug"),kn=[1105920,1112319];function _r(t){var e=t.replace(Tr,""),n=Va(e,0),a=n>=kn[0]&&n<=kn[1],r=e.length===2?e[0]===e[1]:!1;return{value:me(r?e[0]:e),isSecondary:a||r}}function Sn(t,e){var n="".concat(ka).concat(e.replace(":","-"));return new Promise(function(a,r){if(t.getAttribute(n)!==null)return a();var i=mt(t.children),o=i.filter(function(Z){return Z.getAttribute(ue)===e})[0],s=q.getComputedStyle(t,e),l=s.getPropertyValue("font-family").match(Oa),u=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(o&&!l)return t.removeChild(o),a();if(l&&f!=="none"&&f!==""){var d=s.getPropertyValue("content"),g=~["Sharp"].indexOf(l[2])?w:y,b=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?bt[g][l[2].toLowerCase()]:Ia[g][u],A=_r(d),T=A.value,_=A.isSecondary,R=l[0].startsWith("FontAwesome"),C=Ie(b,T),O=C;if(R){var z=Ja(T);z.iconName&&z.prefix&&(C=z.iconName,b=z.prefix)}if(C&&!_&&(!o||o.getAttribute(ke)!==b||o.getAttribute(Se)!==O)){t.setAttribute(n,O),o&&t.removeChild(o);var P=Sr(),Q=P.extra;Q.attributes[ue]=e,he(C,b).then(function(Z){var ae=Ne(c(c({},P),{},{icons:{main:Z,mask:Pe()},prefix:b,iconName:O,extra:Q,watchable:!0})),V=x.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(V,t.firstChild):t.appendChild(V),V.outerHTML=ae.map(function(aa){return Ct(aa)}).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Fr(t){return Promise.all([Sn(t,"::before"),Sn(t,"::after")])}function Rr(t){return t.parentNode!==document.head&&!~Ca.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(ue)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Cn(t){if(B)return new Promise(function(e,n){var a=mt(t.querySelectorAll("*")).filter(Rr).map(Fr),r=Me.begin("searchPseudoElements");Jn(),Promise.all(a).then(function(){r(),ye(),e()}).catch(function(){r(),ye(),n()})})}var zr={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Cn,n}}},provides:function(e){e.pseudoElements2svg=function(n){var a=n.node,r=a===void 0?x:a;m.searchPseudoElements&&Cn(r)}}},En=!1,Lr={mixout:function(){return{dom:{unwatch:function(){Jn(),En=!0}}}},hooks:function(){return{bootstrap:function(){yn(pe("mutationObserverCallbacks",{}))},noAuto:function(){yr()},watch:function(n){var a=n.observeMutationsRoot;En?ye():yn(pe("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},An=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return a.flipX=!0,a;if(o&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(o){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},n)},Dr={mixout:function(){return{parse:{transform:function(n){return An(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-transform");return r&&(n.transform=An(r)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var a=n.main,r=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),f="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(f)},g={transform:"translate(".concat(o/2*-1," -256)")},b={outer:s,inner:d,path:g};return{tag:"g",attributes:c({},b.outer),children:[{tag:"g",attributes:c({},b.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:c(c({},a.icon.attributes),b.path)}]}]}}}},le={x:0,y:0,width:"100%",height:"100%"};function On(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function jr(t){return t.tag==="g"?t.children:[t]}var $r={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-mask"),i=r?ee(r.split(" ").map(function(o){return o.trim()})):Pe();return i.prefix||(i.prefix=X()),n.mask=i,n.maskId=a.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,u=i.width,f=i.icon,d=o.width,g=o.icon,b=Da({transform:l,containerWidth:d,iconWidth:u}),A={tag:"rect",attributes:c(c({},le),{},{fill:"white"})},T=f.children?{children:f.children.map(On)}:{},_={tag:"g",attributes:c({},b.inner),children:[On(c({tag:f.tag,attributes:c(c({},f.attributes),b.path)},T))]},R={tag:"g",attributes:c({},b.outer),children:[_]},C="mask-".concat(s||wt()),O="clip-".concat(s||wt()),z={tag:"mask",attributes:c(c({},le),{},{id:C,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[A,R]},P={tag:"defs",children:[{tag:"clipPath",attributes:{id:O},children:jr(g)},z]};return a.push(P,{tag:"rect",attributes:c({fill:"currentColor","clip-path":"url(#".concat(O,")"),mask:"url(#".concat(C,")")},le)}),{children:a,attributes:r}}}},Yr={provides:function(e){var n=!1;q.matchMedia&&(n=q.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:c(c({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=c(c({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:c(c({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:c(c({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:c(c({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:c(c({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:c(c({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||a.push({tag:"path",attributes:c(c({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:c(c({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},Hr={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return n.symbol=i,n}}}},Wr=[Ya,Ir,Pr,Nr,Mr,zr,Lr,Dr,$r,Yr,Hr];nr(Wr,{mixoutsTo:M});var Ni=M.noAuto,Mi=M.config,Ti=M.library,_i=M.dom,Ur=M.parse,Fi=M.findIconDefinition,Ri=M.toHtml,Br=M.icon,zi=M.layer,Vr=M.text,Gr=M.counter;var ea=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=Re({type:e}),e.\u0275inj=ze({});let t=e;return t})();var na=(()=>{let e=class e{constructor(){this.title="adminPro"}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=D({type:e,selectors:[["app-root"]],standalone:!0,features:[Y],decls:1,vars:0,template:function(r,i){r&1&&S(0,"router-outlet")},dependencies:[it,We,ea]});let t=e;return t})();He(na,tn).catch(t=>console.error(t));
