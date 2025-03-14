System.register("chunks:///_virtual/BoardCoc.ts",["./rollupPluginModLoBabelHelpers.js","cc","./CocUI.ts","./Gameplay.ts"],(function(o){var t,e,n,i,c,s,r,h,a,u,d,p,l;return{setters:[function(o){t=o.applyDecoratedDescriptor,e=o.inheritsLoose,n=o.initializerDefineProperty,i=o.assertThisInitialized},function(o){c=o.cclegacy,s=o._decorator,r=o.Node,h=o.Input,a=o.UITransform,u=o.Vec3,d=o.Component},function(o){p=o.CocUI},function(o){l=o.Gameplay}],execute:function(){var v,C,f,T,y,E,g;c._RF.push({},"c5837PFgZhLZYKoYfGqr1GO","BoardCoc",void 0);var M=s.ccclass,U=s.property;o("BoardCoc",(v=M("BoardCoc"),C=U(r),f=U(r),v((E=t((y=function(o){function t(){for(var t,e=arguments.length,c=new Array(e),s=0;s<e;s++)c[s]=arguments[s];return t=o.call.apply(o,[this].concat(c))||this,n(t,"cocos",E,i(t)),n(t,"uiCoc",g,i(t)),t.indexCoc=0,t.nodeMove=void 0,t}e(t,o);var c=t.prototype;return c.SetUp=function(){this.node.on(h.EventType.TOUCH_START,this.touchStart,this),this.node.on(h.EventType.TOUCH_MOVE,this.TouchMove,this),this.node.on(h.EventType.TOUCH_END,this.touchEnd,this),this.node.on(h.EventType.TOUCH_CANCEL,this.touchEnd,this)},c.touchStart=function(){this.nodeMove=this.cocos.children[this.indexCoc].children[0]},c.TouchMove=function(o){var t=o.getUILocation(),e=this.nodeMove.parent.getComponent(a).convertToNodeSpaceAR(new u(t.x,t.y,0));this.nodeMove.setPosition(e)},c.touchEnd=function(){var o=this,t=null,e=this.uiCoc.getComponent(p).cocs,n=0;e.forEach((function(e,i){1==o.IsNodeInsideTarget(o.nodeMove,e)&&(t=e,n=i)})),null==t?this.nodeMove.setPosition(new u(0,0,0)):(e.splice(n,1),this.nodeMove.active=!1,t.children[0].active=!0,this.indexCoc++,3==this.indexCoc&&(this.node.off(h.EventType.TOUCH_START,this.touchStart,this),this.node.off(h.EventType.TOUCH_MOVE,this.TouchMove,this),this.node.off(h.EventType.TOUCH_END,this.touchEnd,this),this.node.off(h.EventType.TOUCH_CANCEL,this.touchEnd,this),l.instance.NextCung()))},c.IsNodeInsideTarget=function(o,t){var e=t.getComponent(a),n=o.getWorldPosition(),i=e.convertToNodeSpaceAR(n),c=e.width/2,s=e.height/2;return i.x>=-c&&i.x<=c&&i.y>=-s&&i.y<=s},t}(d)).prototype,"cocos",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g=t(y.prototype,"uiCoc",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),T=y))||T));c._RF.pop()}}}));

System.register("chunks:///_virtual/BoardCung.ts",["./rollupPluginModLoBabelHelpers.js","cc","./CungUI.ts","./Gameplay.ts"],(function(t){var e,n,o,i,s,r,u,c,h,a,d,p,l;return{setters:[function(t){e=t.applyDecoratedDescriptor,n=t.inheritsLoose,o=t.initializerDefineProperty,i=t.assertThisInitialized},function(t){s=t.cclegacy,r=t._decorator,u=t.Node,c=t.Input,h=t.UITransform,a=t.Vec3,d=t.Component},function(t){p=t.CungUI},function(t){l=t.Gameplay}],execute:function(){var v,g,C,T,f,y,E;s._RF.push({},"a669d5qkCZJeKuNevA1Ctvv","BoardCung",void 0);var M=r.ccclass,U=r.property;t("BoardCung",(v=M("BoardCung"),g=U(u),C=U(u),v((y=e((f=function(t){function e(){for(var e,n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return e=t.call.apply(t,[this].concat(s))||this,o(e,"cungs",y,i(e)),o(e,"uiCung",E,i(e)),e.indexCung=0,e.nodeMove=void 0,e}n(e,t);var s=e.prototype;return s.SetUp=function(){this.node.on(c.EventType.TOUCH_START,this.touchStart,this),this.node.on(c.EventType.TOUCH_MOVE,this.TouchMove,this),this.node.on(c.EventType.TOUCH_END,this.touchEnd,this),this.node.on(c.EventType.TOUCH_CANCEL,this.touchEnd,this)},s.touchStart=function(){this.nodeMove=this.cungs.children[2]},s.TouchMove=function(t){var e=t.getUILocation(),n=this.nodeMove.parent.getComponent(h).convertToNodeSpaceAR(new a(e.x,e.y,0));this.nodeMove.setPosition(n)},s.touchEnd=function(){var t=this,e=null,n=this.uiCung.getComponent(p).cung,o=0;n.forEach((function(n,i){1==t.IsNodeInsideTarget(t.nodeMove,n)&&(e=n,o=i)})),null==e?this.nodeMove.setPosition(new a(0,0,0)):(n.splice(o,1),this.nodeMove.setPosition(new a(0,0,0)),e.children[0].active=!0,this.indexCung++,2==this.indexCung&&(this.nodeMove.active=!1,this.node.off(c.EventType.TOUCH_START,this.touchStart,this),this.node.off(c.EventType.TOUCH_MOVE,this.TouchMove,this),this.node.off(c.EventType.TOUCH_END,this.touchEnd,this),this.node.off(c.EventType.TOUCH_CANCEL,this.touchEnd,this),l.instance.NextThuyen()))},s.IsNodeInsideTarget=function(t,e){var n=e.getComponent(h),o=t.getWorldPosition(),i=n.convertToNodeSpaceAR(o),s=n.width/2,r=n.height/2;return i.x>=-s&&i.x<=s&&i.y>=-r&&i.y<=r},e}(d)).prototype,"cungs",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),E=e(f.prototype,"uiCung",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),T=f))||T));s._RF.pop()}}}));

System.register("chunks:///_virtual/BoardThuyen.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Gameplay.ts","./ThuyenUI.ts"],(function(e){var t,n,o,i,h,s,r,u,c,a,d,T,y;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,o=e.initializerDefineProperty,i=e.assertThisInitialized},function(e){h=e.cclegacy,s=e._decorator,r=e.Node,u=e.Input,c=e.UITransform,a=e.Vec3,d=e.Component},function(e){T=e.Gameplay},function(e){y=e.ThuyenUI}],execute:function(){var p,l,v,f,E,C,g;h._RF.push({},"1e53eKjZP9B64F6ykDb8vCB","BoardThuyen",void 0);var M=s.ccclass,U=s.property;e("BoardThuyen",(p=M("BoardThuyen"),l=U(r),v=U(r),p((C=t((E=function(e){function t(){for(var t,n=arguments.length,h=new Array(n),s=0;s<n;s++)h[s]=arguments[s];return t=e.call.apply(e,[this].concat(h))||this,o(t,"Thuyens",C,i(t)),o(t,"uiThuyen",g,i(t)),t.indexThuyen=0,t.nodeMove=void 0,t}n(t,e);var h=t.prototype;return h.SetUp=function(){this.node.on(u.EventType.TOUCH_START,this.touchStart,this),this.node.on(u.EventType.TOUCH_MOVE,this.TouchMove,this),this.node.on(u.EventType.TOUCH_END,this.touchEnd,this),this.node.on(u.EventType.TOUCH_CANCEL,this.touchEnd,this)},h.touchStart=function(){this.nodeMove=this.Thuyens.children[2]},h.TouchMove=function(e){var t=e.getUILocation(),n=this.nodeMove.parent.getComponent(c).convertToNodeSpaceAR(new a(t.x,t.y,0));this.nodeMove.setPosition(n)},h.touchEnd=function(){var e=this,t=null,n=this.uiThuyen.getComponent(y).Thuyen,o=0;n.forEach((function(n,i){1==e.IsNodeInsideTarget(e.nodeMove,n)&&(t=n,o=i)})),null==t?this.nodeMove.setPosition(new a(0,0,0)):(n.splice(o,1),this.nodeMove.setPosition(new a(0,0,0)),t.children[0].active=!0,this.indexThuyen++,1==this.indexThuyen&&(this.nodeMove.active=!1,this.node.off(u.EventType.TOUCH_START,this.touchStart,this),this.node.off(u.EventType.TOUCH_MOVE,this.TouchMove,this),this.node.off(u.EventType.TOUCH_END,this.touchEnd,this),this.node.off(u.EventType.TOUCH_CANCEL,this.touchEnd,this),T.instance.TurnEnd()))},h.IsNodeInsideTarget=function(e,t){var n=t.getComponent(c),o=e.getWorldPosition(),i=n.convertToNodeSpaceAR(o),h=n.width/2,s=n.height/2;return i.x>=-h&&i.x<=h&&i.y>=-s&&i.y<=s},t}(d)).prototype,"Thuyens",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g=t(E.prototype,"uiThuyen",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=E))||f));h._RF.pop()}}}));

System.register("chunks:///_virtual/CocUI.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var r,t,o,c,n,i,a,s;return{setters:[function(e){r=e.applyDecoratedDescriptor,t=e.inheritsLoose,o=e.initializerDefineProperty,c=e.assertThisInitialized},function(e){n=e.cclegacy,i=e._decorator,a=e.Node,s=e.Component}],execute:function(){var l,u,p,f,y;n._RF.push({},"69f2cDAvVRE1YtTEE7AJQC1","CocUI",void 0);var h=i.ccclass,v=i.property;e("CocUI",(l=h("CocUI"),u=v(a),l((y=r((f=function(e){function r(){for(var r,t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return r=e.call.apply(e,[this].concat(n))||this,o(r,"cocs",y,c(r)),r}return t(r,e),r}(s)).prototype,"cocs",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),p=f))||p));n._RF.pop()}}}));

System.register("chunks:///_virtual/CungUI.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var n,r,t,i,o,c,u,a;return{setters:[function(e){n=e.applyDecoratedDescriptor,r=e.inheritsLoose,t=e.initializerDefineProperty,i=e.assertThisInitialized},function(e){o=e.cclegacy,c=e._decorator,u=e.Node,a=e.Component}],execute:function(){var l,s,p,f,g;o._RF.push({},"881fdP5ewdP9KXT3lqjB2HQ","CungUI",void 0);var d=c.ccclass,y=c.property;e("CungUI",(l=d("CungUI"),s=y(u),l((g=n((f=function(e){function n(){for(var n,r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return n=e.call.apply(e,[this].concat(o))||this,t(n,"cung",g,i(n)),n}return r(n,e),n}(a)).prototype,"cung",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),p=f))||p));o._RF.pop()}}}));

System.register("chunks:///_virtual/Gameplay.ts",["./rollupPluginModLoBabelHelpers.js","cc","./TypingEffect.ts","./BoardCoc.ts","./BoardCung.ts","./BoardThuyen.ts"],(function(t){var e,n,i,o,a,r,c,l,u,s,b,p,h,d,g,y,f,v,C,m,T;return{setters:[function(t){e=t.applyDecoratedDescriptor,n=t.inheritsLoose,i=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){a=t.cclegacy,r=t._decorator,c=t.Node,l=t.Prefab,u=t.input,s=t.Input,b=t.find,p=t.Camera,h=t.instantiate,d=t.Vec3,g=t.Animation,y=t.tween,f=t.Component},function(t){v=t.TypingEffect},function(t){C=t.BoardCoc},function(t){m=t.BoardCung},function(t){T=t.BoardThuyen}],execute:function(){var w,x,z,U,I,B,S,O,_,E,L,k,D,G,P,A,N,R,j,F,H,Y,q,M,V,W,X,J,K,Q,Z,$,tt,et,nt,it;a._RF.push({},"618417Y7yhEC7Uyh+a+5j46","Gameplay",void 0);var ot=r.ccclass,at=r.property;t("Gameplay",(w=ot("Gameplay"),x=at(c),z=at(c),U=at(c),I=at(c),B=at(c),S=at(c),O=at(c),_=at(c),E=at(c),L=at(c),k=at(c),D=at(c),G=at(c),P=at(l),A=at(c),N=at(c),w(((it=function(t){function e(){for(var e,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return e=t.call.apply(t,[this].concat(a))||this,i(e,"tutorial",F,o(e)),i(e,"trees",H,o(e)),i(e,"boardCoc",Y,o(e)),i(e,"boardThuyen",q,o(e)),i(e,"boardCung",M,o(e)),i(e,"title1",V,o(e)),i(e,"cocos",W,o(e)),i(e,"cocUI",X,o(e)),i(e,"CungUI",J,o(e)),i(e,"ThuyenUI",K,o(e)),i(e,"bg1",Q,o(e)),i(e,"ui",Z,o(e)),i(e,"title",$,o(e)),i(e,"click",tt,o(e)),i(e,"x1",et,o(e)),i(e,"x2",nt,o(e)),e.indexCoc=0,e}n(e,t);var a=e.prototype;return a.onLoad=function(){var t=this;e.instance=this,u.on(s.EventType.TOUCH_START,(function(e){var n=b("Canvas/Camera").getComponent(p),i=h(t.click);t.node.addChild(i),i.worldPosition=n.screenToWorld(new d(e.getLocationX(),e.getLocationY(),0)),t.scheduleOnce((function(){i.destroy()}),i.getComponent(g).clips[0].duration+.1)}),this)},a.BtnSanSang=function(){this.tutorial.active=!1,this.trees.active=!0,this.boardCoc.active=!0,this.title1.active=!0,this.ui.active=!0,v.instance.startText("Bé hãy dùng tay chạm vào cây để tạo ra cọc nào. 2 lần chạm sẽ\nđược một cọc, bé phải tạo ra đủ 6 cọc để đóng trên sông.",3)},a.SelectCoc=function(){var t=this;3!=this.indexCoc&&(this.cocos[this.indexCoc].children[0].active=!0,this.indexCoc++,3==this.indexCoc&&(this.trees.active=!1,this.scheduleOnce((function(){t.bg1.active=!0,y(t.bg1).to(1,{scale:new d(2,2,2)}).call((function(){t.boardCoc.children[0].active=!0,v.instance.startText("Di chuyển cọc đến vị trí trên sông nào.",3),t.boardThuyen.active=!0,t.boardCoc.getComponent(C).SetUp(),t.boardCung.active=!0})).start(),y(t.bg1).to(1,{position:new d(329.278,330.1,0)}).start()}),2)))},a.NextCung=function(){var t=this;y(this.bg1).to(1,{position:new d(111.161,261.227)}).call((function(){v.instance.startText("Bé hãy di chuyển đạo quân của ta về 2 vị trí để mai phục nào.",3),t.boardCoc.children[0].active=!1,t.boardCung.children[0].active=!0,t.boardCung.getComponent(m).SetUp()})).start()},a.NextThuyen=function(){var t=this;y(this.bg1).to(1,{position:new d(-597.015,1274.002)}).call((function(){v.instance.startText("Bé di chuyển thuyền ra giữa dòng để dụ địch vào nhé.",3),t.ThuyenUI.active=!0,t.boardThuyen.children[0].active=!0,t.boardCung.children[0].active=!1,t.boardThuyen.getComponent(T).SetUp()})).start()},a.TurnEnd=function(){var t=this;this.boardCoc.active=!1,this.boardCung.active=!1,this.boardThuyen.active=!1,this.title.active=!1,this.boardCoc.active=!1,this.cocUI.active=!1,this.CungUI.active=!1,y(this.bg1).to(1,{scale:new d(.7,.7,1)}).call((function(){t.ThuyenUI.getComponent(g).play("thuyen1_1"),t.scheduleOnce((function(){t.x1.getComponent(g).play("x1"),t.x2.getComponent(g).play("x2"),t.scheduleOnce((function(){t.ThuyenUI.getComponent(g).play("Thuyen2"),t.scheduleOnce((function(){t.CungUI.active=!0,t.cocUI.active=!0}),1)}),2)}),4)})).start(),y(this.bg1).to(1,{position:new d(0,0,0)}).start()},e}(f)).instance=void 0,F=e((j=it).prototype,"tutorial",[x],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),H=e(j.prototype,"trees",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Y=e(j.prototype,"boardCoc",[U],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),q=e(j.prototype,"boardThuyen",[I],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),M=e(j.prototype,"boardCung",[B],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),V=e(j.prototype,"title1",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),W=e(j.prototype,"cocos",[O],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),X=e(j.prototype,"cocUI",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),J=e(j.prototype,"CungUI",[E],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),K=e(j.prototype,"ThuyenUI",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Q=e(j.prototype,"bg1",[k],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Z=e(j.prototype,"ui",[D],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),$=e(j.prototype,"title",[G],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),tt=e(j.prototype,"click",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),et=e(j.prototype,"x1",[A],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),nt=e(j.prototype,"x2",[N],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),R=j))||R));a._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./BoardCoc.ts","./BoardCung.ts","./BoardThuyen.ts","./CocUI.ts","./CungUI.ts","./Gameplay.ts","./Sound.ts","./ThuyenUI.ts","./Tree.ts","./TypingEffect.ts","./VideoPlayer.ts"],(function(){return{setters:[null,null,null,null,null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/Sound.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var i,o,t,r,n,a,c,u,s;return{setters:[function(e){i=e.applyDecoratedDescriptor,o=e.inheritsLoose,t=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){n=e.cclegacy,a=e._decorator,c=e.AudioSource,u=e.AudioClip,s=e.Component}],execute:function(){var l,p,h,d,f,y,v,b;n._RF.push({},"4b6830gBoZJMKm+pN6X1v6B","Sound",void 0);var g=a.ccclass,S=a.property;e("Sound",(l=g("Sound"),p=S(c),h=S(u),l(((b=function(e){function i(){for(var i,o=arguments.length,n=new Array(o),a=0;a<o;a++)n[a]=arguments[a];return i=e.call.apply(e,[this].concat(n))||this,t(i,"sources",y,r(i)),t(i,"thoai",v,r(i)),i}o(i,e);var n=i.prototype;return n.onLoad=function(){i.instance=this},n.playThoai=function(e){this.sources.clip=this.thoai[e],this.sources.play()},i}(s)).instance=void 0,y=i((f=b).prototype,"sources",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=i(f.prototype,"thoai",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),d=f))||d));n._RF.pop()}}}));

System.register("chunks:///_virtual/ThuyenUI.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var r,n,t,i,o,c,u,a;return{setters:[function(e){r=e.applyDecoratedDescriptor,n=e.inheritsLoose,t=e.initializerDefineProperty,i=e.assertThisInitialized},function(e){o=e.cclegacy,c=e._decorator,u=e.Node,a=e.Component}],execute:function(){var l,s,p,y,h;o._RF.push({},"d6c7a/T1JJNorf5vj80pT16","ThuyenUI",void 0);var f=c.ccclass,T=c.property;e("ThuyenUI",(l=f("ThuyenUI"),s=T(u),l((h=r((y=function(e){function r(){for(var r,n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return r=e.call.apply(e,[this].concat(o))||this,t(r,"Thuyen",h,i(r)),r}return n(r,e),r}(a)).prototype,"Thuyen",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),p=y))||p));o._RF.pop()}}}));

System.register("chunks:///_virtual/Tree.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Gameplay.ts"],(function(e){var t,i,o,c,n,l;return{setters:[function(e){t=e.inheritsLoose},function(e){i=e.cclegacy,o=e._decorator,c=e.Node,n=e.Component},function(e){l=e.Gameplay}],execute:function(){var s;i._RF.push({},"e96934eIktDrp5j1PmHGkZd","Tree",void 0);var r=o.ccclass;o.property,e("Tree",r("Tree")(s=function(e){function i(){for(var t,i=arguments.length,o=new Array(i),c=0;c<i;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))||this).lastClickTime=0,t.doubleClickThreshold=300,t.clickTimeout=null,t}t(i,e);var o=i.prototype;return o.onEnable=function(){this.node.on(c.EventType.TOUCH_END,this.onTouchEnd,this)},o.onTouchEnd=function(e){var t=this,i=Date.now();this.clickTimeout&&clearTimeout(this.clickTimeout),i-this.lastClickTime<this.doubleClickThreshold?(this.onDoubleClick(),this.lastClickTime=0):(this.lastClickTime=i,this.clickTimeout=setTimeout((function(){t.lastClickTime=0}),this.doubleClickThreshold))},o.onDoubleClick=function(){this.node.active=!1,l.instance.SelectCoc()},i}(n))||s);i._RF.pop()}}}));

System.register("chunks:///_virtual/TypingEffect.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,n,i,r,u,o,l,a,c,s,h,f;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,i=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){u=e.cclegacy,o=e._decorator,l=e.Label,a=e.CCInteger,c=e.Sprite,s=e.Color,h=e.tween,f=e.Component}],execute:function(){var p,d,m,b,g,x,y,T,v,C,w,L,D,z;u._RF.push({},"00762RfvG1Bm5/i7C5VTgWd","TypingEffect",void 0);var I=o.ccclass,E=o.property;e("TypingEffect",(p=I("TypingEffect"),d=E(l),m=E(a),b=E(c),g=E(a),x=E(a),p(((z=function(e){function t(){for(var t,n=arguments.length,u=new Array(n),o=0;o<n;o++)u[o]=arguments[o];return t=e.call.apply(e,[this].concat(u))||this,i(t,"textLabel",v,r(t)),t.currentIndex=0,t.fullText="Bé hãy giúp Lạc Long Quân và Âu Cơ trở về nơi phù hợp của mình nhé ?",i(t,"duration",C,r(t)),i(t,"time",w,r(t)),i(t,"timeDuration",L,r(t)),i(t,"timeCurrent",D,r(t)),t.scheduleText=void 0,t}n(t,e);var u=t.prototype;return u.onEnable=function(){t.instance=this},u.startText=function(e,t){this.unscheduleAllCallbacks(),this.duration=t,this.fullText=e,this.textLabel.string="",this.showTextWithDuration(this.fullText,this.duration)},u.RunTime=function(){var e=this;this.scheduleOnce((function(){e.schedule((function(){e.timeCurrent--,e.timeCurrent<60&&e.timeCurrent>10&&(e.time.color=new s(232,21,25,100)),e.timeCurrent<10&&(e.time.color=new s(255,104,106,255))}),1),h(e.time).to(e.timeDuration,{fillRange:1}).call((function(){})).start()}),this.duration)},u.showTextWithDuration=function(e,t){var n=this;this.currentIndex=0;var i=e.length,r=t/i;this.scheduleText=function(){console.log("den day"),n.currentIndex<i?(n.textLabel.string+=e[n.currentIndex],n.currentIndex++):n.unschedule(n.scheduleText)},this.schedule(this.scheduleText,r)},t}(f)).instance=void 0,v=t((T=z).prototype,"textLabel",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),C=t(T.prototype,"duration",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 3}}),w=t(T.prototype,"time",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),L=t(T.prototype,"timeDuration",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 90}}),D=t(T.prototype,"timeCurrent",[x],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 90}}),y=T))||y));u._RF.pop()}}}));

System.register("chunks:///_virtual/VideoPlayer.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Sound.ts"],(function(e){var t,i,o,n,r,a,l,c,s;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,o=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){r=e.cclegacy,a=e._decorator,l=e.VideoPlayer,c=e.Component},function(e){s=e.Sound}],execute:function(){var u,p,d,y,f;r._RF.push({},"d0612By4MJKqK8/a0fx17Ql","VideoPlayer",void 0);var h=a.ccclass,v=a.property;e("VideoPlayerCtrl",(u=h("VideoPlayer"),p=v(l),u((f=t((y=function(e){function t(){for(var t,i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return t=e.call.apply(e,[this].concat(r))||this,o(t,"videoPlayer",f,n(t)),t}i(t,e);var r=t.prototype;return r.start=function(){var e=this;this.videoPlayer.node.on(l.EventType.COMPLETED,this.onVideoComplete,this),s.instance.playThoai(0),this.scheduleOnce((function(){e.node.active=!1}),12)},r.onVideoComplete=function(){},t}(c)).prototype,"videoPlayer",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),d=y))||d));r._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});