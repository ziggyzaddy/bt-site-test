import{I as d,S as b,_ as E,a as G,c as v,C as V,e as Z,b as H,d as x,f as q,D as N,g as X,h as j,i as J,A as K,u as y,j as Q,k as $,l as ee,m as te,n as ae,o as ne,T as C,p as ie,q as se,r as re,H as le}from"./html.Xyp3eLhV.js";import{r as n}from"./index.pNoFJhTY.js";var k={ZERO:0,ONE:1,TWO:2,THREE:3,FOUR:4},O=n.forwardRef(function(e,o){var t=e.size>=d.LARGE,s=t?d.LARGE:d.STANDARD,i="".concat(-1*s/.05/2),r={transformOrigin:"center"};return n.createElement(b,E({iconName:"chevron-down",ref:o},e),n.createElement("path",{d:t?"M320 280C314.4000000000001 280 309.4000000000001 277.8 305.8 274.2L200 168.2L94.2 274.2C90.6 277.8 85.6 280 80 280C69 280 60 271 60 260C60 254.4 62.2 249.4 65.8 245.8L185.8 125.8C189.4 122.2 194.4 120 200 120S210.6 122.2 214.2 125.8L334.2000000000001 245.8C337.8 249.4 340 254.4 340 260C340 271 331 280 320 280z":"M240 220C234.4 220 229.4 217.8 225.8 214.2L160 148.2L94.2 214.2C90.6 217.8 85.6 220 80 220C69 220 60 211 60 200C60 194.4 62.2 189.4 65.8 185.8L145.8 105.8C149.4 102.2 154.4 100 160 100S170.6 102.2 174.2 105.8L254.2 185.8C257.8 189.4 260 194.4 260 200C260 211 251 220 240 220z",fillRule:"evenodd",transform:"scale(0.05, -0.05) translate(".concat(i,", ").concat(i,")"),style:r}))});O.defaultProps={size:d.STANDARD};O.displayName="Blueprint5.Icon.ChevronDown";var L=n.forwardRef(function(e,o){var t=e.size>=d.LARGE,s=t?d.LARGE:d.STANDARD,i="".concat(-1*s/.05/2),r={transformOrigin:"center"};return n.createElement(b,E({iconName:"chevron-up",ref:o},e),n.createElement("path",{d:t?"M334.2000000000001 154.2L214.2 274.2000000000001C210.6 277.8 205.6 280 200 280S189.4 277.8 185.8 274.2L65.8 154.2C62.2 150.6 60 145.6 60 140C60 129 69 120 80 120C85.6 120 90.6 122.2 94.2 125.8L200 231.8L305.8 126C309.4000000000001 122.2 314.4000000000001 120 320 120C331 120 340 129 340 140C340 145.6 337.8 150.6 334.2000000000001 154.2z":"M254.2 134.2L174.2 214.2C170.6 217.8 165.6 220 160 220S149.4 217.8 145.8 214.2L65.8 134.2C62.2 130.6 60 125.6 60 120C60 109 69 100 80 100C85.6 100 90.6 102.2 94.2 105.8L160 171.8L225.8 106C229.4 102.2 234.4 100 240 100C251 100 260 109 260 120C260 125.6 257.8 130.6 254.2 134.2z",fillRule:"evenodd",transform:"scale(0.05, -0.05) translate(".concat(i,", ").concat(i,")"),style:r}))});L.defaultProps={size:d.STANDARD};L.displayName="Blueprint5.Icon.ChevronUp";var T=n.forwardRef(function(e,o){var t,s=e.className,i=e.elevation,r=e.interactive,h=e.selected,l=e.compact,c=G(e,["className","elevation","interactive","selected","compact"]),m=v(s,V,Z(i),(t={},t[H]=r,t[x]=l,t[q]=h,t));return n.createElement("div",E({className:m,ref:o},c))});T.defaultProps={elevation:k.ZERO,interactive:!1};T.displayName="".concat(N,".Card");var a;(function(e){e[e.OPEN_START=0]="OPEN_START",e[e.OPENING=1]="OPENING",e[e.OPEN=2]="OPEN",e[e.CLOSING_START=3]="CLOSING_START",e[e.CLOSING=4]="CLOSING",e[e.CLOSED=5]="CLOSED"})(a||(a={}));var oe=function(e){X(o,e);function o(){var t=e!==null&&e.apply(this,arguments)||this;return t.state={animationState:t.props.isOpen?a.OPEN:a.CLOSED,height:void 0,heightWhenOpen:void 0},t.contents=null,t.contentsRefHandler=function(s){if(t.contents=s,t.contents!=null){var i=t.contents.clientHeight;t.setState({animationState:t.props.isOpen?a.OPEN:a.CLOSED,height:i===0?void 0:"".concat(i,"px"),heightWhenOpen:i===0?void 0:i})}},t}return o.getDerivedStateFromProps=function(t,s){var i=t.isOpen,r=s.animationState;if(i)switch(r){case a.OPEN:break;case a.OPENING:break;default:return{animationState:a.OPEN_START}}else switch(r){case a.CLOSED:break;case a.CLOSING:break;default:return{animationState:a.CLOSING_START,height:"".concat(s.heightWhenOpen,"px")}}return null},o.prototype.render=function(){var t=this.state.animationState!==a.CLOSED,s=t||this.props.keepChildrenMounted,i=t&&this.state.animationState!==a.CLOSING,r=this.state.height==="auto",h={height:t?this.state.height:void 0,overflowY:r?"visible":void 0,transition:r?"none":void 0},l={transform:i?"translateY(0)":"translateY(-".concat(this.state.heightWhenOpen,"px)"),transition:r?"none":void 0};return n.createElement(this.props.component,{className:v(j,this.props.className),style:h},n.createElement("div",{className:J,ref:this.contentsRefHandler,style:l,"aria-hidden":!t},s?this.props.children:null))},o.prototype.componentDidMount=function(){this.forceUpdate(),this.props.isOpen?this.setState({animationState:a.OPEN,height:"auto"}):this.setState({animationState:a.CLOSED,height:"0px"})},o.prototype.componentDidUpdate=function(){var t=this;if(this.contents!=null){var s=this.props.transitionDuration,i=this.state.animationState;if(i===a.OPEN_START){var r=this.contents.clientHeight;this.setState({animationState:a.OPENING,height:"".concat(r,"px"),heightWhenOpen:r}),this.setTimeout(function(){return t.onDelayedStateChange()},s)}else if(i===a.CLOSING_START){var h=this.contents.clientHeight;this.setTimeout(function(){return t.setState({animationState:a.CLOSING,height:"0px",heightWhenOpen:h})}),this.setTimeout(function(){return t.onDelayedStateChange()},s)}}},o.prototype.onDelayedStateChange=function(){switch(this.state.animationState){case a.OPENING:this.setState({animationState:a.OPEN,height:"auto"});break;case a.CLOSING:this.setState({animationState:a.CLOSED});break}},o.displayName="".concat(N,".Collapse"),o.defaultProps={component:"div",isOpen:!1,keepChildrenMounted:!1,transitionDuration:200},o}(K),w=n.forwardRef(function(e,o){var t,s,i,r=e.children,h=e.className,l=e.collapseProps,c=e.collapsible,m=e.compact,z=e.elevation,R=e.icon,I=e.rightElement,D=e.subtitle,f=e.title,g=e.titleRenderer,M=g===void 0?le:g,U=G(e,["children","className","collapseProps","collapsible","compact","elevation","icon","rightElement","subtitle","title","titleRenderer"]),S=l?.isOpen!=null,_=n.useState(!(!((i=l?.defaultIsOpen)!==null&&i!==void 0)||i)),W=_[0],Y=_[1],u=S?!l?.isOpen:W,B=n.useCallback(function(){var p;S?(p=l?.onToggle)===null||p===void 0||p.call(l):Y(!u)},[l,u,S]),F=I!=null||c,P=y("section"),A=f?y("section-title"):void 0;return n.createElement(T,E({className:v(h,Q,(t={},t[x]=m,t[$]=c&&u||ee(r),t)),elevation:z,ref:o,"aria-labelledby":A},U,{id:P}),f&&n.createElement("div",{role:c?"button":void 0,"aria-pressed":c?u:void 0,"aria-expanded":c?u:void 0,"aria-controls":c?P:void 0,className:v(te,(s={},s[H]=c,s)),onClick:c?B:void 0},n.createElement("div",{className:ae},R&&n.createElement(ne,{icon:R,"aria-hidden":!0,tabIndex:-1,className:C}),n.createElement("div",null,n.createElement(M,{className:ie,id:A},f),D&&n.createElement("div",{className:v(C,se)},D))),F&&n.createElement("div",{className:re},I,c&&(u?n.createElement(O,{className:C}):n.createElement(L,{className:C})))),c?n.createElement(oe,E({},l,{isOpen:!u}),r):r)});w.defaultProps={compact:!1,elevation:k.ZERO};w.displayName="".concat(N,".Section");export{w as Section};
