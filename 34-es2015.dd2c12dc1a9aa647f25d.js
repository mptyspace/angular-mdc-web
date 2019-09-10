(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{PC55:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class t{}var a=u("+ZNK"),b=u("KCvt"),i=u("knxA"),o=u("alYm"),d=u("pMnS"),c=u("IKgy"),s=u("LuDt"),r=u("leug");class m{ngOnInit(){this._componentViewer.componentView=new r.a("Menu Surface","The MDC Menu Surface component is a reusable surface that appears above the content of the page and can be positioned adjacent to an element.","import { MdcMenuSurfaceModule } from '@angular-mdc/web';"),this._componentViewer.componentView.references=[{name:"Material Components Web",url:"https://github.com/material-components/material-components-web/blob/master/packages/mdc-menu-surface/README.md"}]}}class f{}class p{}class h{constructor(){this.images=Array.from(Array(2),(l,n)=>n),this.corners=["topStart","topEnd","bottomStart","bottomEnd"],this.example1={html:'<div mdcMenuSurfaceAnchor #demoAnchor>\n  <button mdc-button raised (click)="demoSurface.open = !demoSurface.open">\n    Show Menu Surface\n  </button>\n  <mdc-menu-surface #demoSurface class="demo-menu-surface--shaped" [anchorElement]="demoAnchor">\n    <mdc-image-list class="menu-surface-image-list">\n      <mdc-image-list-item *ngFor="let i of images">\n        <mdc-image-list-image-aspect>\n          <img mdcImageListImage src="https://material-components-web.appspot.com/images/photos/3x2/{{i+1}}.jpg" />\n        </mdc-image-list-image-aspect>\n        <mdc-image-list-supporting>\n          <span mdcImageListLabel>Text label</span>\n        </mdc-image-list-supporting>\n      </mdc-image-list-item>\n    </mdc-image-list>\n  </mdc-menu-surface>\n</div>',sass:".demo-menu-surface--shaped {\n  @include mdc-menu-surface-shape-radius(4px);\n}\n\n.menu-surface-image-list {\n  @include mdc-image-list-aspect(1.5); // Images are 3:2\n  @include mdc-image-list-standard-columns(1);\n\n  width: 220px;\n}"}}}var g=u("5l+6"),F=u("yk01"),M=u("4G1d"),x=u("aRkA"),k=u("+O8G"),D=u("0fpz"),y=u("CBIf"),v=u("6fyZ"),w=u("fTo0"),S=u("dEKC"),_=u("nmYj"),I=u("+LCo"),E=u("kDKR"),J=u("s7LF"),O=u("SVse"),K=u("9WsL"),C=u("6D23"),A=u("Kfqh"),T=u("a63Y"),L=u("XNxO"),R=u("uwiL"),q=u("uAA3"),B=u("//9D"),j=u("9UYg"),V=u("BuWE"),X=e.rb({encapsulation:2,styles:[],data:{}});function $(l){return e.Ob(2,[e.Eb(null,0)],null,null)}var N=u("XbMX"),Y=u("dkiD"),W=u("aXvW"),G=e.rb({encapsulation:2,styles:[],data:{}});function H(l){return e.Ob(0,[e.Kb(402653184,1,{_componentViewer:0}),(l()(),e.tb(1,0,null,null,1,"component-viewer",[],null,null,null,c.b,c.a)),e.sb(2,49152,[[1,4]],0,s.b,[],null,null)],null,null)}function P(l){return e.Ob(0,[(l()(),e.tb(0,0,null,null,1,"ng-component",[],null,null,null,H,G)),e.sb(1,114688,null,0,m,[],null,null)],function(l,n){l(n,1,0)},null)}var U=e.pb("ng-component",m,P,{},{},[]),Z=e.rb({encapsulation:2,styles:[],data:{}});function z(l){return e.Ob(0,[(l()(),e.tb(0,0,null,null,63,"div",[["class","docs-api"]],null,null,null,null,null)),(l()(),e.tb(1,0,null,null,2,"h3",[["class","mdc-typography--headline6"],["mdcHeadline6",""]],null,null,null,null,null)),e.sb(2,16384,null,0,g.i,[],null,null),(l()(),e.Mb(-1,null,["MdcMenuSurface"])),(l()(),e.tb(4,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),e.Mb(-1,null,[" Selector: "])),(l()(),e.tb(6,0,null,null,1,"span",[["class","markdown-code"]],null,null,null,null,null)),(l()(),e.Mb(-1,null,["mdc-menu-surface"])),(l()(),e.Mb(-1,null,[" Exported as: "])),(l()(),e.tb(9,0,null,null,1,"span",[["class","markdown-code"]],null,null,null,null,null)),(l()(),e.Mb(-1,null,["mdcMenuSurface"])),(l()(),e.tb(11,0,null,null,2,"h4",[["class","mdc-typography--subtitle2"],["mdcSubtitle2",""]],null,null,null,null,null)),e.sb(12,16384,null,0,g.l,[],null,null),(l()(),e.Mb(-1,null,["Properties"])),(l()(),e.tb(14,0,null,null,49,"table",[],null,null,null,null,null)),(l()(),e.tb(15,0,null,null,5,"thead",[],null,null,null,null,null)),(l()(),e.tb(16,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.tb(17,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Mb(-1,null,["Name"])),(l()(),e.tb(19,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Mb(-1,null,["Description"])),(l()(),e.tb(21,0,null,null,42,"tbody",[],null,null,null,null,null)),(l()(),e.tb(22,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.tb(23,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Mb(-1,null,["open: boolean"])),(l()(),e.tb(25,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Mb(-1,null,["Opens or closes the menu."])),(l()(),e.tb(27,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),e.tb(28,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Mb(-1,null,["anchorCorner: string"])),(l()(),e.tb(30,0,null,null,3,"td",[],null,null,null,null,null)),(l()(),e.Mb(-1,null,["Override the opening point of the menu. (Default: topStart) "])),(l()(),e.tb(32,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Mb(-1,null,["Values: 'bottomEnd' | 'bottomStart' | 'topEnd' | 'topStart'"])),(l()(),e.tb(34,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.tb(35,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Mb(36,null,["anchorMargin: ","top: number, bottom: number, left: number, right : number",""])),(l()(),e.tb(37,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Mb(-1,null,["Sets the distance from the anchor point that the menu surface should be shown."])),(l()(),e.tb(39,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.tb(40,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Mb(41,null,["coordinates: ","x: number, y: number",""])),(l()(),e.tb(42,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Mb(-1,null,["Sets the absolute x/y position of the menu. Should only be used when the menu is hoisted or using fixed positioning."])),(l()(),e.tb(44,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.tb(45,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Mb(-1,null,["quickOpen: boolean"])),(l()(),e.tb(47,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Mb(-1,null,["Sets whether the menu should open and close without animation when the open/close methods are called."])),(l()(),e.tb(49,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.tb(50,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Mb(-1,null,["anchorElement: Element | mdcMenuSurfaceAnchor"])),(l()(),e.tb(52,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Mb(-1,null,["Set to indicate an element the menu should be anchored to."])),(l()(),e.tb(54,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.tb(55,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Mb(-1,null,["fixed: boolean"])),(l()(),e.tb(57,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Mb(-1,null,["Used to indicate that the menu is using fixed positioning."])),(l()(),e.tb(59,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.tb(60,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Mb(-1,null,["hoistToBody: boolean"])),(l()(),e.tb(62,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Mb(-1,null,["Removes the menu-surface element from the DOM and appends it to the body element. Should be used to overcome overflow: hidden issues."])),(l()(),e.tb(64,0,null,null,13,"div",[["class","docs-api"]],null,null,null,null,null)),(l()(),e.tb(65,0,null,null,2,"h3",[["class","mdc-typography--headline6"],["mdcHeadline6",""]],null,null,null,null,null)),e.sb(66,16384,null,0,g.i,[],null,null),(l()(),e.Mb(-1,null,["MdcMenuSurfaceAnchor"])),(l()(),e.Mb(-1,null,[" Sets the anchor element used as an anchor for menu-surface positioning logic. "])),(l()(),e.tb(69,0,null,null,5,"p",[],null,null,null,null,null)),(l()(),e.Mb(-1,null,[" Selector: "])),(l()(),e.tb(71,0,null,null,1,"span",[["class","markdown-code"]],null,null,null,null,null)),(l()(),e.Mb(-1,null,["mdcMenuSurfaceAnchor"])),(l()(),e.tb(73,0,null,null,1,"span",[["class","markdown-code"]],null,null,null,null,null)),(l()(),e.Mb(-1,null,["mdc-menu-surface-anchor"])),(l()(),e.Mb(-1,null,[" Exported as: "])),(l()(),e.tb(76,0,null,null,1,"span",[["class","markdown-code"]],null,null,null,null,null)),(l()(),e.Mb(-1,null,["mdcMenuSurfaceAnchor"]))],null,function(l,n){l(n,36,0,"{","}"),l(n,41,0,"{","}")})}function Q(l){return e.Ob(0,[(l()(),e.tb(0,0,null,null,1,"ng-component",[],null,null,null,z,Z)),e.sb(1,49152,null,0,f,[],null,null)],null,null)}var ll=e.pb("ng-component",f,Q,{},{},[]),nl=e.rb({encapsulation:2,styles:[],data:{}});function ul(l){return e.Ob(0,[(l()(),e.tb(0,0,null,null,44,"div",[["class","docs-api"]],null,null,null,null,null)),(l()(),e.tb(1,0,null,null,2,"h4",[["class","mdc-typography--subtitle2"],["mdcSubtitle2",""]],null,null,null,null,null)),e.sb(2,16384,null,0,g.l,[],null,null),(l()(),e.Mb(-1,null,["Sass Mixins"])),(l()(),e.tb(4,0,null,null,40,"table",[],null,null,null,null,null)),(l()(),e.tb(5,0,null,null,5,"thead",[],null,null,null,null,null)),(l()(),e.tb(6,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.tb(7,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Mb(-1,null,["Mixin"])),(l()(),e.tb(9,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Mb(-1,null,["Description"])),(l()(),e.tb(11,0,null,null,33,"tbody",[],null,null,null,null,null)),(l()(),e.tb(12,0,null,null,11,"tr",[],null,null,null,null,null)),(l()(),e.tb(13,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e.tb(14,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Mb(-1,null,["mdc-menu-surface-ink-color($color)"])),(l()(),e.tb(16,0,null,null,7,"td",[],null,null,null,null,null)),(l()(),e.Mb(-1,null,["Sets the "])),(l()(),e.tb(18,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Mb(-1,null,["color"])),(l()(),e.Mb(-1,null,[" property of the "])),(l()(),e.tb(21,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Mb(-1,null,["mdc-menu-surface"])),(l()(),e.Mb(-1,null,["."])),(l()(),e.tb(24,0,null,null,11,"tr",[],null,null,null,null,null)),(l()(),e.tb(25,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e.tb(26,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Mb(-1,null,["mdc-menu-surface-fill-color($color)"])),(l()(),e.tb(28,0,null,null,7,"td",[],null,null,null,null,null)),(l()(),e.Mb(-1,null,["Sets the "])),(l()(),e.tb(30,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Mb(-1,null,["background-color"])),(l()(),e.Mb(-1,null,[" property of the "])),(l()(),e.tb(33,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Mb(-1,null,["mdc-menu-surface"])),(l()(),e.Mb(-1,null,["."])),(l()(),e.tb(36,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),e.tb(37,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e.tb(38,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Mb(-1,null,["mdc-menu-surface-shape-radius($radius, $rtl-reflexive)"])),(l()(),e.tb(40,0,null,null,4,"td",[],null,null,null,null,null)),(l()(),e.Mb(-1,null,["Sets the rounded shape to menu surface with given radius size. Set "])),(l()(),e.tb(42,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Mb(-1,null,["$rtl-reflexive"])),(l()(),e.Mb(-1,null,[" to true to flip radius values in RTL context, defaults to false."]))],null,null)}function el(l){return e.Ob(0,[(l()(),e.tb(0,0,null,null,1,"ng-component",[],null,null,null,ul,nl)),e.sb(1,49152,null,0,p,[],null,null)],null,null)}var tl=e.pb("ng-component",p,el,{},{},[]),al=e.rb({encapsulation:2,styles:[],data:{}});function bl(l){return e.Ob(0,[(l()(),e.tb(0,0,null,null,9,"mdc-form-field",[],[[2,"ngx-mdc-form-field--fluid",null],[2,"mdc-form-field--align-end",null]],null,null,F.b,F.a)),e.sb(1,1228800,null,2,M.a,[e.h,e.y,e.k],null,null),e.Kb(603979776,2,{_control:0}),e.Kb(603979776,3,{assistiveElements:1}),(l()(),e.tb(4,0,null,0,3,"mdc-radio",[["class","mdc-radio"]],[[8,"id",0],[1,"tabindex",0],[1,"name",0]],[[null,"focus"]],function(l,n,u){var t=!0;return"focus"===n&&(t=!1!==e.Fb(l,6).input.nativeElement.focus()&&t),t},x.b,x.a)),e.Jb(131584,null,k.a,k.a,[e.k,[2,D.MDCRippleFoundation]]),e.sb(6,4374528,[[1,4]],0,y.b,[e.h,e.k,k.a,v.b,[2,y.a],[2,M.a]],{value:[0,"value"]},null),e.Jb(2048,[[2,4]],w.a,null,[y.b]),(l()(),e.tb(8,0,null,0,1,"label",[],null,null,null,null,null)),(l()(),e.Mb(9,null,["",""]))],function(l,n){l(n,6,0,n.context.$implicit)},function(l,n){l(n,0,0,e.Fb(n,1).fluid,e.Fb(n,1).alignEnd),l(n,4,0,e.Fb(n,6).id,-1,null),l(n,9,0,n.context.$implicit)})}function il(l){return e.Ob(0,[(l()(),e.tb(0,0,null,null,10,"mdc-image-list-item",[["class","mdc-image-list__item"]],null,null,null,null,null)),e.sb(1,16384,null,0,S.d,[e.k],null,null),(l()(),e.tb(2,0,null,null,3,"mdc-image-list-image-aspect",[],null,null,null,_.c,_.b)),e.sb(3,49152,null,0,S.c,[e.k],null,null),(l()(),e.tb(4,0,null,0,1,"img",[["class","mdc-image-list__image"],["mdcImageListImage",""]],[[8,"src",4]],null,null,null,null)),e.sb(5,16384,null,0,S.b,[e.k],null,null),(l()(),e.tb(6,0,null,null,4,"mdc-image-list-supporting",[["class","mdc-image-list__supporting"]],null,null,null,null,null)),e.sb(7,16384,null,0,S.f,[e.k],null,null),(l()(),e.tb(8,0,null,null,2,"span",[["class","mdc-image-list__label"],["mdcImageListLabel",""]],null,null,null,null,null)),e.sb(9,16384,null,0,S.e,[e.k],null,null),(l()(),e.Mb(-1,null,["Text label"]))],null,function(l,n){l(n,4,0,e.xb(1,"https://material-components-web.appspot.com/images/photos/3x2/",n.context.$implicit+1,".jpg"))})}function ol(l){return e.Ob(0,[(l()(),e.tb(0,0,null,null,88,"div",[["class","demo-content"]],null,null,null,null,null)),(l()(),e.tb(1,0,null,null,70,"div",[["class","demo-layout__row"]],null,null,null,null,null)),(l()(),e.tb(2,0,null,null,10,"div",[["class","demo-content"]],null,null,null,null,null)),(l()(),e.tb(3,0,null,null,1,"h3",[["class","demo-content__headline"]],null,null,null,null,null)),(l()(),e.Mb(-1,null,["Anchor Corner"])),(l()(),e.tb(5,0,null,null,7,"div",[["class","demo-layout__column"]],null,null,null,null,null)),(l()(),e.tb(6,0,null,null,6,"mdc-radio-group",[["class","demo-layout__column"],["role","radiogroup"]],[[1,"name",0]],null,null,I.b,I.a)),e.Jb(6144,null,y.a,null,[E.a]),e.Jb(5120,null,J.k,function(l){return[l]},[E.a]),e.sb(9,1097728,[["menuSurfaceAnchorCorner",4]],1,E.a,[e.h,e.k],null,null),e.Kb(603979776,1,{_radios:1}),(l()(),e.ib(16777216,null,0,1,null,bl)),e.sb(12,278528,null,0,O.i,[e.O,e.L,e.r],{ngForOf:[0,"ngForOf"]},null),(l()(),e.tb(13,0,null,null,23,"div",[["class","demo-content"]],null,null,null,null,null)),(l()(),e.tb(14,0,null,null,1,"h3",[["class","demo-content__headline"]],null,null,null,null,null)),(l()(),e.Mb(-1,null,["Anchor Margin"])),(l()(),e.tb(16,0,null,null,20,"div",[["class","demo-layout__column"]],null,null,null,null,null)),(l()(),e.tb(17,0,null,null,4,"mdc-text-field",[["class","mdc-text-field"],["label","Top margin"],["type","number"]],[[2,"mdc-text-field--disabled",null],[2,"mdc-text-field--outlined",null],[2,"mdc-text-field--dense",null],[2,"mdc-text-field--fullwidth",null],[2,"mdc-text-field--with-leading-icon",null],[2,"mdc-text-field--with-trailing-icon",null],[2,"mdc-text-field--no-label",null],[2,"mdc-text-field--invalid",null]],[[null,"click"],[null,"keydown"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Fb(l,20).onTextFieldInteraction()&&t),"keydown"===n&&(t=!1!==e.Fb(l,20).onTextFieldInteraction()&&t),t},K.b,K.a)),e.Jb(6144,null,w.a,null,[C.b]),e.Jb(131584,null,k.a,k.a,[e.k,[2,D.MDCRippleFoundation]]),e.sb(20,1490944,[["marginTop",4]],1,C.b,[A.a,e.h,e.k,T.a,[2,M.a],[2,k.a],[8,null],[2,J.o],[2,J.g],[2,C.a]],{label:[0,"label"],type:[1,"type"]},null),e.Kb(603979776,4,{_icons:1}),(l()(),e.tb(22,0,null,null,4,"mdc-text-field",[["class","mdc-text-field"],["label","Bottom margin"],["type","number"]],[[2,"mdc-text-field--disabled",null],[2,"mdc-text-field--outlined",null],[2,"mdc-text-field--dense",null],[2,"mdc-text-field--fullwidth",null],[2,"mdc-text-field--with-leading-icon",null],[2,"mdc-text-field--with-trailing-icon",null],[2,"mdc-text-field--no-label",null],[2,"mdc-text-field--invalid",null]],[[null,"click"],[null,"keydown"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Fb(l,25).onTextFieldInteraction()&&t),"keydown"===n&&(t=!1!==e.Fb(l,25).onTextFieldInteraction()&&t),t},K.b,K.a)),e.Jb(6144,null,w.a,null,[C.b]),e.Jb(131584,null,k.a,k.a,[e.k,[2,D.MDCRippleFoundation]]),e.sb(25,1490944,[["marginBottom",4]],1,C.b,[A.a,e.h,e.k,T.a,[2,M.a],[2,k.a],[8,null],[2,J.o],[2,J.g],[2,C.a]],{label:[0,"label"],type:[1,"type"]},null),e.Kb(603979776,5,{_icons:1}),(l()(),e.tb(27,0,null,null,4,"mdc-text-field",[["class","mdc-text-field"],["label","Left margin"],["type","number"]],[[2,"mdc-text-field--disabled",null],[2,"mdc-text-field--outlined",null],[2,"mdc-text-field--dense",null],[2,"mdc-text-field--fullwidth",null],[2,"mdc-text-field--with-leading-icon",null],[2,"mdc-text-field--with-trailing-icon",null],[2,"mdc-text-field--no-label",null],[2,"mdc-text-field--invalid",null]],[[null,"click"],[null,"keydown"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Fb(l,30).onTextFieldInteraction()&&t),"keydown"===n&&(t=!1!==e.Fb(l,30).onTextFieldInteraction()&&t),t},K.b,K.a)),e.Jb(6144,null,w.a,null,[C.b]),e.Jb(131584,null,k.a,k.a,[e.k,[2,D.MDCRippleFoundation]]),e.sb(30,1490944,[["marginLeft",4]],1,C.b,[A.a,e.h,e.k,T.a,[2,M.a],[2,k.a],[8,null],[2,J.o],[2,J.g],[2,C.a]],{label:[0,"label"],type:[1,"type"]},null),e.Kb(603979776,6,{_icons:1}),(l()(),e.tb(32,0,null,null,4,"mdc-text-field",[["class","mdc-text-field"],["label","Right margin"],["type","number"]],[[2,"mdc-text-field--disabled",null],[2,"mdc-text-field--outlined",null],[2,"mdc-text-field--dense",null],[2,"mdc-text-field--fullwidth",null],[2,"mdc-text-field--with-leading-icon",null],[2,"mdc-text-field--with-trailing-icon",null],[2,"mdc-text-field--no-label",null],[2,"mdc-text-field--invalid",null]],[[null,"click"],[null,"keydown"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Fb(l,35).onTextFieldInteraction()&&t),"keydown"===n&&(t=!1!==e.Fb(l,35).onTextFieldInteraction()&&t),t},K.b,K.a)),e.Jb(6144,null,w.a,null,[C.b]),e.Jb(131584,null,k.a,k.a,[e.k,[2,D.MDCRippleFoundation]]),e.sb(35,1490944,[["marginRight",4]],1,C.b,[A.a,e.h,e.k,T.a,[2,M.a],[2,k.a],[8,null],[2,J.o],[2,J.g],[2,C.a]],{label:[0,"label"],type:[1,"type"]},null),e.Kb(603979776,7,{_icons:1}),(l()(),e.tb(37,0,null,null,34,"div",[["class","demo-content"]],null,null,null,null,null)),(l()(),e.tb(38,0,null,null,33,"div",[["class","demo-layout__column"]],null,null,null,null,null)),(l()(),e.tb(39,0,null,null,10,"mdc-form-field",[],[[2,"ngx-mdc-form-field--fluid",null],[2,"mdc-form-field--align-end",null]],null,null,F.b,F.a)),e.sb(40,1228800,null,2,M.a,[e.h,e.y,e.k],null,null),e.Kb(603979776,8,{_control:0}),e.Kb(603979776,9,{assistiveElements:1}),(l()(),e.tb(43,0,null,0,4,"mdc-checkbox",[["class","mdc-checkbox"]],[[8,"id",0]],null,null,L.b,L.a)),e.Jb(5120,null,J.k,function(l){return[l]},[R.a]),e.Jb(131584,null,k.a,k.a,[e.k,[2,D.MDCRippleFoundation]]),e.sb(46,4374528,[["quickOpen",4]],0,R.a,[A.a,e.y,e.h,e.k,k.a,[2,M.a]],null,null),e.Jb(2048,[[8,4]],w.a,null,[R.a]),(l()(),e.tb(48,0,null,0,1,"label",[],null,null,null,null,null)),(l()(),e.Mb(49,null,["Disable open animation: ",""])),(l()(),e.tb(50,0,null,null,10,"mdc-form-field",[],[[2,"ngx-mdc-form-field--fluid",null],[2,"mdc-form-field--align-end",null]],null,null,F.b,F.a)),e.sb(51,1228800,null,2,M.a,[e.h,e.y,e.k],null,null),e.Kb(603979776,10,{_control:0}),e.Kb(603979776,11,{assistiveElements:1}),(l()(),e.tb(54,0,null,0,4,"mdc-checkbox",[["class","mdc-checkbox"]],[[8,"id",0]],null,null,L.b,L.a)),e.Jb(5120,null,J.k,function(l){return[l]},[R.a]),e.Jb(131584,null,k.a,k.a,[e.k,[2,D.MDCRippleFoundation]]),e.sb(57,4374528,[["fixed",4]],0,R.a,[A.a,e.y,e.h,e.k,k.a,[2,M.a]],null,null),e.Jb(2048,[[10,4]],w.a,null,[R.a]),(l()(),e.tb(59,0,null,0,1,"label",[],null,null,null,null,null)),(l()(),e.Mb(-1,null,["Fixed position (scrolls with page)"])),(l()(),e.tb(61,0,null,null,10,"mdc-form-field",[],[[2,"ngx-mdc-form-field--fluid",null],[2,"mdc-form-field--align-end",null]],null,null,F.b,F.a)),e.sb(62,1228800,null,2,M.a,[e.h,e.y,e.k],null,null),e.Kb(603979776,12,{_control:0}),e.Kb(603979776,13,{assistiveElements:1}),(l()(),e.tb(65,0,null,0,4,"mdc-checkbox",[["class","mdc-checkbox"]],[[8,"id",0]],null,null,L.b,L.a)),e.Jb(5120,null,J.k,function(l){return[l]},[R.a]),e.Jb(131584,null,k.a,k.a,[e.k,[2,D.MDCRippleFoundation]]),e.sb(68,4374528,[["hoistToBody",4]],0,R.a,[A.a,e.y,e.h,e.k,k.a,[2,M.a]],null,null),e.Jb(2048,[[12,4]],w.a,null,[R.a]),(l()(),e.tb(70,0,null,0,1,"label",[],null,null,null,null,null)),(l()(),e.Mb(-1,null,["Hoist to Body"])),(l()(),e.tb(72,0,null,null,14,"div",[["class","demo-layout--center"]],null,null,null,null,null)),(l()(),e.tb(73,0,[["demoAnchor",1]],null,13,"div",[["class","mdc-menu-surface--anchor"],["mdcMenuSurfaceAnchor",""]],null,null,null,null,null)),e.sb(74,16384,null,0,q.a,[e.k],null,null),(l()(),e.tb(75,0,null,null,4,"button",[["class","mdc-button"],["mdc-button",""],["raised",""]],[[8,"tabIndex",0],[2,"ngx-mdc-button--primary",null],[2,"ngx-mdc-button--secondary",null],[2,"mdc-button--raised",null],[2,"mdc-button--dense",null],[2,"mdc-button--unelevated",null],[2,"mdc-button--outlined",null]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Fb(l,77).onClick(u)&&t),"click"===n&&(t=0!=(e.Fb(l,81).open=!e.Fb(l,81).open)&&t),t},B.b,B.a)),e.Jb(131584,null,k.a,k.a,[e.k,[2,D.MDCRippleFoundation]]),e.sb(77,245760,null,1,j.a,[e.k,k.a],{raised:[0,"raised"]},null),e.Kb(335544320,14,{_icon:0}),(l()(),e.Mb(-1,0,[" Show Menu Surface "])),(l()(),e.tb(80,0,null,null,6,"mdc-menu-surface",[["class","demo-menu-surface--one mdc-menu-surface"]],null,null,null,$,X)),e.sb(81,245760,[["demoSurface",4]],0,V.a,[e.h,A.a,[2,e.y],e.k],{anchorElement:[0,"anchorElement"],anchorCorner:[1,"anchorCorner"],quickOpen:[2,"quickOpen"],fixed:[3,"fixed"],anchorMargin:[4,"anchorMargin"],hoistToBody:[5,"hoistToBody"]},null),e.Ib(82,{top:0,bottom:1,left:2,right:3}),(l()(),e.tb(83,0,null,0,3,"mdc-image-list",[["class","menu-surface-image-list mdc-image-list"]],[[2,"mdc-image-list--masonry",null],[2,"mdc-image-list--with-text-protection",null]],null,null,_.d,_.a)),e.sb(84,49152,null,0,S.a,[e.k],null,null),(l()(),e.ib(16777216,null,0,1,null,il)),e.sb(86,278528,null,0,O.i,[e.O,e.L,e.r],{ngForOf:[0,"ngForOf"]},null),(l()(),e.tb(87,0,null,null,1,"example-viewer",[],null,null,null,N.b,N.a)),e.sb(88,114688,null,0,Y.a,[W.a],{example:[0,"example"]},null)],function(l,n){var u=n.component;l(n,12,0,u.corners),l(n,20,0,"Top margin","number"),l(n,25,0,"Bottom margin","number"),l(n,30,0,"Left margin","number"),l(n,35,0,"Right margin","number"),l(n,77,0,"");var t=e.Fb(n,73),a=e.Fb(n,9).value,b=e.Fb(n,46).checked,i=e.Fb(n,57).checked,o=l(n,82,0,e.Fb(n,20).value,e.Fb(n,25).value,e.Fb(n,30).value,e.Fb(n,35).value);l(n,81,0,t,a,b,i,o,e.Fb(n,68).checked),l(n,86,0,u.images),l(n,88,0,u.example1)},function(l,n){l(n,6,0,null),l(n,17,0,e.Fb(n,20).disabled,e.Fb(n,20).outlined,e.Fb(n,20).dense,e.Fb(n,20).fullwidth,e.Fb(n,20).leadingIcon,e.Fb(n,20).trailingIcon,!e.Fb(n,20).label||e.Fb(n,20).label&&e.Fb(n,20).fullwidth,e.Fb(n,20).errorState),l(n,22,0,e.Fb(n,25).disabled,e.Fb(n,25).outlined,e.Fb(n,25).dense,e.Fb(n,25).fullwidth,e.Fb(n,25).leadingIcon,e.Fb(n,25).trailingIcon,!e.Fb(n,25).label||e.Fb(n,25).label&&e.Fb(n,25).fullwidth,e.Fb(n,25).errorState),l(n,27,0,e.Fb(n,30).disabled,e.Fb(n,30).outlined,e.Fb(n,30).dense,e.Fb(n,30).fullwidth,e.Fb(n,30).leadingIcon,e.Fb(n,30).trailingIcon,!e.Fb(n,30).label||e.Fb(n,30).label&&e.Fb(n,30).fullwidth,e.Fb(n,30).errorState),l(n,32,0,e.Fb(n,35).disabled,e.Fb(n,35).outlined,e.Fb(n,35).dense,e.Fb(n,35).fullwidth,e.Fb(n,35).leadingIcon,e.Fb(n,35).trailingIcon,!e.Fb(n,35).label||e.Fb(n,35).label&&e.Fb(n,35).fullwidth,e.Fb(n,35).errorState),l(n,39,0,e.Fb(n,40).fluid,e.Fb(n,40).alignEnd),l(n,43,0,e.Fb(n,46).id),l(n,49,0,e.Fb(n,46).checked),l(n,50,0,e.Fb(n,51).fluid,e.Fb(n,51).alignEnd),l(n,54,0,e.Fb(n,57).id),l(n,61,0,e.Fb(n,62).fluid,e.Fb(n,62).alignEnd),l(n,65,0,e.Fb(n,68).id),l(n,75,0,e.Fb(n,77).disabled?-1:0,e.Fb(n,77).primary,e.Fb(n,77).secondary,e.Fb(n,77).raised,e.Fb(n,77).dense,e.Fb(n,77).unelevated,e.Fb(n,77).outlined),l(n,83,0,e.Fb(n,84).masonry,e.Fb(n,84).textProtection)})}function dl(l){return e.Ob(0,[(l()(),e.tb(0,0,null,null,1,"ng-component",[],null,null,null,ol,al)),e.sb(1,49152,null,0,h,[],null,null)],null,null)}var cl=e.pb("ng-component",h,dl,{},{},[]),sl=u("9b0e"),rl=u("6YJn"),ml=u("d9jQ"),fl=u("RYA5"),pl=u("J5MV"),hl=u("GfKK"),gl=u("a4Uj"),Fl=u("v12X"),Ml=u("Nae1"),xl=u("fXvI"),kl=u("KuLc"),Dl=u("Z7++"),yl=u("B/xB"),vl=u("A7cX"),wl=u("CFZN"),Sl=u("VANb"),_l=u("s0Uv"),Il=u("GQpF"),El=u("xzsS"),Jl=u("sWtu"),Ol=u("O1Eo"),Kl=u("6PPE"),Cl=u("2bgE"),Al=u("w3hH"),Tl=u("trKi"),Ll=u("K8gV"),Rl=u("ngW1"),ql=u("qGSp"),Bl=u("ngrd"),jl=u("qaMf"),Vl=u("wHtX"),Xl=u("nwcb"),$l=u("4pld"),Nl=u("I+pr"),Yl=u("CbuK"),Wl=u("gbIf"),Gl=u("ZCFl"),Hl=u("U8q+"),Pl=u("vvyD"),Ul=u("iInd"),Zl=u("Lkda"),zl=u("dJsq"),Ql=u("d2mR");class ln{}u.d(n,"MenuSurfaceModuleNgFactory",function(){return nn});var nn=e.qb(t,[],function(l){return e.Cb([e.Db(512,e.j,e.bb,[[8,[a.a,b.a,i.a,o.a,d.a,U,ll,tl,cl]],[3,e.j],e.w]),e.Db(4608,O.l,O.k,[e.t,[2,O.v]]),e.Db(4608,J.v,J.v,[]),e.Db(4608,sl.a,sl.a,[sl.f,sl.b,e.j,sl.e,sl.c,e.q,e.y,O.c,rl.b,[2,O.g]]),e.Db(5120,sl.g,sl.h,[sl.a]),e.Db(135680,ml.c,ml.c,[sl.a,e.q,[2,ml.b],[3,ml.c]]),e.Db(4608,J.b,J.b,[]),e.Db(1073742336,O.b,O.b,[]),e.Db(1073742336,J.u,J.u,[]),e.Db(1073742336,J.h,J.h,[]),e.Db(1073742336,fl.a,fl.a,[]),e.Db(1073742336,pl.a,pl.a,[]),e.Db(1073742336,hl.a,hl.a,[]),e.Db(1073742336,gl.a,gl.a,[]),e.Db(1073742336,Fl.a,Fl.a,[]),e.Db(1073742336,Ml.a,Ml.a,[]),e.Db(1073742336,xl.a,xl.a,[]),e.Db(1073742336,rl.a,rl.a,[]),e.Db(1073742336,kl.f,kl.f,[]),e.Db(1073742336,A.b,A.b,[]),e.Db(1073742336,Dl.b,Dl.b,[]),e.Db(1073742336,sl.d,sl.d,[]),e.Db(1073742336,yl.a,yl.a,[]),e.Db(1073742336,vl.a,vl.a,[]),e.Db(1073742336,wl.a,wl.a,[]),e.Db(1073742336,Sl.a,Sl.a,[]),e.Db(1073742336,_l.a,_l.a,[]),e.Db(1073742336,Il.a,Il.a,[]),e.Db(1073742336,El.a,El.a,[]),e.Db(1073742336,Jl.a,Jl.a,[]),e.Db(1073742336,Ol.a,Ol.a,[]),e.Db(1073742336,Kl.a,Kl.a,[]),e.Db(1073742336,Cl.a,Cl.a,[]),e.Db(1073742336,Al.a,Al.a,[]),e.Db(1073742336,Tl.a,Tl.a,[]),e.Db(1073742336,Ll.a,Ll.a,[]),e.Db(1073742336,Rl.a,Rl.a,[]),e.Db(1073742336,ql.a,ql.a,[]),e.Db(1073742336,Bl.a,Bl.a,[]),e.Db(1073742336,jl.a,jl.a,[]),e.Db(1073742336,Vl.a,Vl.a,[]),e.Db(1073742336,Xl.a,Xl.a,[]),e.Db(1073742336,$l.a,$l.a,[]),e.Db(1073742336,Nl.a,Nl.a,[]),e.Db(1073742336,Yl.a,Yl.a,[]),e.Db(1073742336,Wl.a,Wl.a,[]),e.Db(1073742336,Gl.a,Gl.a,[]),e.Db(1073742336,Hl.a,Hl.a,[]),e.Db(1073742336,Pl.a,Pl.a,[]),e.Db(1073742336,J.r,J.r,[]),e.Db(1073742336,Ul.p,Ul.p,[[2,Ul.u],[2,Ul.l]]),e.Db(1073742336,Zl.b,Zl.b,[]),e.Db(1073742336,zl.d,zl.d,[]),e.Db(1073742336,Ql.a,Ql.a,[]),e.Db(1073742336,ln,ln,[]),e.Db(1073742336,t,t,[]),e.Db(1024,Ul.j,function(){return[[{path:"",component:m,children:[{path:"",redirectTo:"api"},{path:"api",component:f},{path:"sass",component:p},{path:"examples",component:h}]}]]},[])])})}}]);