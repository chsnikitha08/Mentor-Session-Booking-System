const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Signup-CqdSCDOR.js","assets/mentorService-CqCk4emD.js","assets/Mentors-Dz_trikP.js","assets/MentorDetail-DETFPy1L.js","assets/MySessions-DVZ_r0Np.js","assets/SessionCard-CyHgTvTR.js","assets/MentorDashboard-y4H7WM31.js","assets/ManageSlots-Bp5Up_Vb.js","assets/MentorBookings-R_wxlMuA.js"])))=>i.map(i=>d[i]);
function JT(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function ZT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var c_={exports:{}},eu={},h_={exports:{}},Z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uo=Symbol.for("react.element"),eI=Symbol.for("react.portal"),tI=Symbol.for("react.fragment"),nI=Symbol.for("react.strict_mode"),rI=Symbol.for("react.profiler"),iI=Symbol.for("react.provider"),sI=Symbol.for("react.context"),oI=Symbol.for("react.forward_ref"),aI=Symbol.for("react.suspense"),lI=Symbol.for("react.memo"),uI=Symbol.for("react.lazy"),Em=Symbol.iterator;function cI(t){return t===null||typeof t!="object"?null:(t=Em&&t[Em]||t["@@iterator"],typeof t=="function"?t:null)}var d_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},f_=Object.assign,p_={};function rs(t,e,n){this.props=t,this.context=e,this.refs=p_,this.updater=n||d_}rs.prototype.isReactComponent={};rs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};rs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function m_(){}m_.prototype=rs.prototype;function Ed(t,e,n){this.props=t,this.context=e,this.refs=p_,this.updater=n||d_}var Td=Ed.prototype=new m_;Td.constructor=Ed;f_(Td,rs.prototype);Td.isPureReactComponent=!0;var Tm=Array.isArray,g_=Object.prototype.hasOwnProperty,Id={current:null},y_={key:!0,ref:!0,__self:!0,__source:!0};function __(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)g_.call(e,r)&&!y_.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Uo,type:t,key:s,ref:o,props:i,_owner:Id.current}}function hI(t,e){return{$$typeof:Uo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Sd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Uo}function dI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Im=/\/+/g;function cc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?dI(""+t.key):e.toString(36)}function qa(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Uo:case eI:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+cc(o,0):r,Tm(i)?(n="",t!=null&&(n=t.replace(Im,"$&/")+"/"),qa(i,e,n,"",function(c){return c})):i!=null&&(Sd(i)&&(i=hI(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Im,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Tm(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+cc(s,l);o+=qa(s,e,n,u,i)}else if(u=cI(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+cc(s,l++),o+=qa(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function wa(t,e,n){if(t==null)return t;var r=[],i=0;return qa(t,r,"","",function(s){return e.call(n,s,i++)}),r}function fI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var at={current:null},Ha={transition:null},pI={ReactCurrentDispatcher:at,ReactCurrentBatchConfig:Ha,ReactCurrentOwner:Id};function v_(){throw Error("act(...) is not supported in production builds of React.")}Z.Children={map:wa,forEach:function(t,e,n){wa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return wa(t,function(){e++}),e},toArray:function(t){return wa(t,function(e){return e})||[]},only:function(t){if(!Sd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Z.Component=rs;Z.Fragment=tI;Z.Profiler=rI;Z.PureComponent=Ed;Z.StrictMode=nI;Z.Suspense=aI;Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pI;Z.act=v_;Z.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=f_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Id.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)g_.call(e,u)&&!y_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Uo,type:t.type,key:i,ref:s,props:r,_owner:o}};Z.createContext=function(t){return t={$$typeof:sI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:iI,_context:t},t.Consumer=t};Z.createElement=__;Z.createFactory=function(t){var e=__.bind(null,t);return e.type=t,e};Z.createRef=function(){return{current:null}};Z.forwardRef=function(t){return{$$typeof:oI,render:t}};Z.isValidElement=Sd;Z.lazy=function(t){return{$$typeof:uI,_payload:{_status:-1,_result:t},_init:fI}};Z.memo=function(t,e){return{$$typeof:lI,type:t,compare:e===void 0?null:e}};Z.startTransition=function(t){var e=Ha.transition;Ha.transition={};try{t()}finally{Ha.transition=e}};Z.unstable_act=v_;Z.useCallback=function(t,e){return at.current.useCallback(t,e)};Z.useContext=function(t){return at.current.useContext(t)};Z.useDebugValue=function(){};Z.useDeferredValue=function(t){return at.current.useDeferredValue(t)};Z.useEffect=function(t,e){return at.current.useEffect(t,e)};Z.useId=function(){return at.current.useId()};Z.useImperativeHandle=function(t,e,n){return at.current.useImperativeHandle(t,e,n)};Z.useInsertionEffect=function(t,e){return at.current.useInsertionEffect(t,e)};Z.useLayoutEffect=function(t,e){return at.current.useLayoutEffect(t,e)};Z.useMemo=function(t,e){return at.current.useMemo(t,e)};Z.useReducer=function(t,e,n){return at.current.useReducer(t,e,n)};Z.useRef=function(t){return at.current.useRef(t)};Z.useState=function(t){return at.current.useState(t)};Z.useSyncExternalStore=function(t,e,n){return at.current.useSyncExternalStore(t,e,n)};Z.useTransition=function(){return at.current.useTransition()};Z.version="18.3.1";h_.exports=Z;var b=h_.exports;const w_=ZT(b),mI=JT({__proto__:null,default:w_},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gI=b,yI=Symbol.for("react.element"),_I=Symbol.for("react.fragment"),vI=Object.prototype.hasOwnProperty,wI=gI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,EI={key:!0,ref:!0,__self:!0,__source:!0};function E_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)vI.call(e,r)&&!EI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:yI,type:t,key:s,ref:o,props:i,_owner:wI.current}}eu.Fragment=_I;eu.jsx=E_;eu.jsxs=E_;c_.exports=eu;var z=c_.exports,Zc={},T_={exports:{}},It={},I_={exports:{}},S_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,Q){var J=B.length;B.push(Q);e:for(;0<J;){var ge=J-1>>>1,le=B[ge];if(0<i(le,Q))B[ge]=Q,B[J]=le,J=ge;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var Q=B[0],J=B.pop();if(J!==Q){B[0]=J;e:for(var ge=0,le=B.length,Ie=le>>>1;ge<Ie;){var ln=2*(ge+1)-1,un=B[ln],cn=ln+1,hn=B[cn];if(0>i(un,J))cn<le&&0>i(hn,un)?(B[ge]=hn,B[cn]=J,ge=cn):(B[ge]=un,B[ln]=J,ge=ln);else if(cn<le&&0>i(hn,J))B[ge]=hn,B[cn]=J,ge=cn;else break e}}return Q}function i(B,Q){var J=B.sortIndex-Q.sortIndex;return J!==0?J:B.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],f=1,p=null,m=3,E=!1,P=!1,N=!1,D=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(B){for(var Q=n(c);Q!==null;){if(Q.callback===null)r(c);else if(Q.startTime<=B)r(c),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(c)}}function O(B){if(N=!1,A(B),!P)if(n(u)!==null)P=!0,gs(F);else{var Q=n(c);Q!==null&&an(O,Q.startTime-B)}}function F(B,Q){P=!1,N&&(N=!1,T(y),y=-1),E=!0;var J=m;try{for(A(Q),p=n(u);p!==null&&(!(p.expirationTime>Q)||B&&!R());){var ge=p.callback;if(typeof ge=="function"){p.callback=null,m=p.priorityLevel;var le=ge(p.expirationTime<=Q);Q=t.unstable_now(),typeof le=="function"?p.callback=le:p===n(u)&&r(u),A(Q)}else r(u);p=n(u)}if(p!==null)var Ie=!0;else{var ln=n(c);ln!==null&&an(O,ln.startTime-Q),Ie=!1}return Ie}finally{p=null,m=J,E=!1}}var j=!1,w=null,y=-1,v=5,I=-1;function R(){return!(t.unstable_now()-I<v)}function k(){if(w!==null){var B=t.unstable_now();I=B;var Q=!0;try{Q=w(!0,B)}finally{Q?S():(j=!1,w=null)}}else j=!1}var S;if(typeof _=="function")S=function(){_(k)};else if(typeof MessageChannel<"u"){var At=new MessageChannel,Ir=At.port2;At.port1.onmessage=k,S=function(){Ir.postMessage(null)}}else S=function(){D(k,0)};function gs(B){w=B,j||(j=!0,S())}function an(B,Q){y=D(function(){B(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){P||E||(P=!0,gs(F))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):v=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(m){case 1:case 2:case 3:var Q=3;break;default:Q=m}var J=m;m=Q;try{return B()}finally{m=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,Q){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var J=m;m=B;try{return Q()}finally{m=J}},t.unstable_scheduleCallback=function(B,Q,J){var ge=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ge+J:ge):J=ge,B){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=J+le,B={id:f++,callback:Q,priorityLevel:B,startTime:J,expirationTime:le,sortIndex:-1},J>ge?(B.sortIndex=J,e(c,B),n(u)===null&&B===n(c)&&(N?(T(y),y=-1):N=!0,an(O,J-ge))):(B.sortIndex=le,e(u,B),P||E||(P=!0,gs(F))),B},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(B){var Q=m;return function(){var J=m;m=Q;try{return B.apply(this,arguments)}finally{m=J}}}})(S_);I_.exports=S_;var TI=I_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var II=b,Tt=TI;function M(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var A_=new Set,co={};function Zr(t,e){Bi(t,e),Bi(t+"Capture",e)}function Bi(t,e){for(co[t]=e,t=0;t<e.length;t++)A_.add(e[t])}var Sn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),eh=Object.prototype.hasOwnProperty,SI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Sm={},Am={};function AI(t){return eh.call(Am,t)?!0:eh.call(Sm,t)?!1:SI.test(t)?Am[t]=!0:(Sm[t]=!0,!1)}function RI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function PI(t,e,n,r){if(e===null||typeof e>"u"||RI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function lt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var $e={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){$e[t]=new lt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];$e[e]=new lt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){$e[t]=new lt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){$e[t]=new lt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){$e[t]=new lt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){$e[t]=new lt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){$e[t]=new lt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){$e[t]=new lt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){$e[t]=new lt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ad=/[\-:]([a-z])/g;function Rd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ad,Rd);$e[e]=new lt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ad,Rd);$e[e]=new lt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ad,Rd);$e[e]=new lt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){$e[t]=new lt(t,1,!1,t.toLowerCase(),null,!1,!1)});$e.xlinkHref=new lt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){$e[t]=new lt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Pd(t,e,n,r){var i=$e.hasOwnProperty(e)?$e[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(PI(e,n,i,r)&&(n=null),r||i===null?AI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var xn=II.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ea=Symbol.for("react.element"),yi=Symbol.for("react.portal"),_i=Symbol.for("react.fragment"),Cd=Symbol.for("react.strict_mode"),th=Symbol.for("react.profiler"),R_=Symbol.for("react.provider"),P_=Symbol.for("react.context"),kd=Symbol.for("react.forward_ref"),nh=Symbol.for("react.suspense"),rh=Symbol.for("react.suspense_list"),Nd=Symbol.for("react.memo"),jn=Symbol.for("react.lazy"),C_=Symbol.for("react.offscreen"),Rm=Symbol.iterator;function Ns(t){return t===null||typeof t!="object"?null:(t=Rm&&t[Rm]||t["@@iterator"],typeof t=="function"?t:null)}var ve=Object.assign,hc;function Us(t){if(hc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);hc=e&&e[1]||""}return`
`+hc+t}var dc=!1;function fc(t,e){if(!t||dc)return"";dc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{dc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Us(t):""}function CI(t){switch(t.tag){case 5:return Us(t.type);case 16:return Us("Lazy");case 13:return Us("Suspense");case 19:return Us("SuspenseList");case 0:case 2:case 15:return t=fc(t.type,!1),t;case 11:return t=fc(t.type.render,!1),t;case 1:return t=fc(t.type,!0),t;default:return""}}function ih(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case _i:return"Fragment";case yi:return"Portal";case th:return"Profiler";case Cd:return"StrictMode";case nh:return"Suspense";case rh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case P_:return(t.displayName||"Context")+".Consumer";case R_:return(t._context.displayName||"Context")+".Provider";case kd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Nd:return e=t.displayName||null,e!==null?e:ih(t.type)||"Memo";case jn:e=t._payload,t=t._init;try{return ih(t(e))}catch{}}return null}function kI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ih(e);case 8:return e===Cd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function hr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function k_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function NI(t){var e=k_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ta(t){t._valueTracker||(t._valueTracker=NI(t))}function N_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=k_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function dl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function sh(t,e){var n=e.checked;return ve({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Pm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=hr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function D_(t,e){e=e.checked,e!=null&&Pd(t,"checked",e,!1)}function oh(t,e){D_(t,e);var n=hr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ah(t,e.type,n):e.hasOwnProperty("defaultValue")&&ah(t,e.type,hr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Cm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ah(t,e,n){(e!=="number"||dl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var js=Array.isArray;function Ni(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+hr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function lh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(M(91));return ve({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function km(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(M(92));if(js(n)){if(1<n.length)throw Error(M(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:hr(n)}}function x_(t,e){var n=hr(e.value),r=hr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Nm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function O_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function uh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?O_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ia,V_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ia=Ia||document.createElement("div"),Ia.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ia.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ho(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Qs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},DI=["Webkit","ms","Moz","O"];Object.keys(Qs).forEach(function(t){DI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Qs[e]=Qs[t]})});function L_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Qs.hasOwnProperty(t)&&Qs[t]?(""+e).trim():e+"px"}function M_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=L_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var xI=ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ch(t,e){if(e){if(xI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(M(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(M(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(M(61))}if(e.style!=null&&typeof e.style!="object")throw Error(M(62))}}function hh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dh=null;function Dd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var fh=null,Di=null,xi=null;function Dm(t){if(t=zo(t)){if(typeof fh!="function")throw Error(M(280));var e=t.stateNode;e&&(e=su(e),fh(t.stateNode,t.type,e))}}function b_(t){Di?xi?xi.push(t):xi=[t]:Di=t}function F_(){if(Di){var t=Di,e=xi;if(xi=Di=null,Dm(t),e)for(t=0;t<e.length;t++)Dm(e[t])}}function U_(t,e){return t(e)}function j_(){}var pc=!1;function B_(t,e,n){if(pc)return t(e,n);pc=!0;try{return U_(t,e,n)}finally{pc=!1,(Di!==null||xi!==null)&&(j_(),F_())}}function fo(t,e){var n=t.stateNode;if(n===null)return null;var r=su(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(M(231,e,typeof n));return n}var ph=!1;if(Sn)try{var Ds={};Object.defineProperty(Ds,"passive",{get:function(){ph=!0}}),window.addEventListener("test",Ds,Ds),window.removeEventListener("test",Ds,Ds)}catch{ph=!1}function OI(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Ys=!1,fl=null,pl=!1,mh=null,VI={onError:function(t){Ys=!0,fl=t}};function LI(t,e,n,r,i,s,o,l,u){Ys=!1,fl=null,OI.apply(VI,arguments)}function MI(t,e,n,r,i,s,o,l,u){if(LI.apply(this,arguments),Ys){if(Ys){var c=fl;Ys=!1,fl=null}else throw Error(M(198));pl||(pl=!0,mh=c)}}function ei(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function z_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function xm(t){if(ei(t)!==t)throw Error(M(188))}function bI(t){var e=t.alternate;if(!e){if(e=ei(t),e===null)throw Error(M(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return xm(i),t;if(s===r)return xm(i),e;s=s.sibling}throw Error(M(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(M(189))}}if(n.alternate!==r)throw Error(M(190))}if(n.tag!==3)throw Error(M(188));return n.stateNode.current===n?t:e}function $_(t){return t=bI(t),t!==null?W_(t):null}function W_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=W_(t);if(e!==null)return e;t=t.sibling}return null}var q_=Tt.unstable_scheduleCallback,Om=Tt.unstable_cancelCallback,FI=Tt.unstable_shouldYield,UI=Tt.unstable_requestPaint,Ae=Tt.unstable_now,jI=Tt.unstable_getCurrentPriorityLevel,xd=Tt.unstable_ImmediatePriority,H_=Tt.unstable_UserBlockingPriority,ml=Tt.unstable_NormalPriority,BI=Tt.unstable_LowPriority,K_=Tt.unstable_IdlePriority,tu=null,Jt=null;function zI(t){if(Jt&&typeof Jt.onCommitFiberRoot=="function")try{Jt.onCommitFiberRoot(tu,t,void 0,(t.current.flags&128)===128)}catch{}}var jt=Math.clz32?Math.clz32:qI,$I=Math.log,WI=Math.LN2;function qI(t){return t>>>=0,t===0?32:31-($I(t)/WI|0)|0}var Sa=64,Aa=4194304;function Bs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function gl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Bs(l):(s&=o,s!==0&&(r=Bs(s)))}else o=n&~i,o!==0?r=Bs(o):s!==0&&(r=Bs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-jt(e),i=1<<n,r|=t[n],e&=~i;return r}function HI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function KI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-jt(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=HI(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function gh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function G_(){var t=Sa;return Sa<<=1,!(Sa&4194240)&&(Sa=64),t}function mc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function jo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-jt(e),t[e]=n}function GI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-jt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Od(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-jt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var oe=0;function Q_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Y_,Vd,X_,J_,Z_,yh=!1,Ra=[],Zn=null,er=null,tr=null,po=new Map,mo=new Map,$n=[],QI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vm(t,e){switch(t){case"focusin":case"focusout":Zn=null;break;case"dragenter":case"dragleave":er=null;break;case"mouseover":case"mouseout":tr=null;break;case"pointerover":case"pointerout":po.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":mo.delete(e.pointerId)}}function xs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=zo(e),e!==null&&Vd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function YI(t,e,n,r,i){switch(e){case"focusin":return Zn=xs(Zn,t,e,n,r,i),!0;case"dragenter":return er=xs(er,t,e,n,r,i),!0;case"mouseover":return tr=xs(tr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return po.set(s,xs(po.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,mo.set(s,xs(mo.get(s)||null,t,e,n,r,i)),!0}return!1}function ev(t){var e=xr(t.target);if(e!==null){var n=ei(e);if(n!==null){if(e=n.tag,e===13){if(e=z_(n),e!==null){t.blockedOn=e,Z_(t.priority,function(){X_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ka(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=_h(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);dh=r,n.target.dispatchEvent(r),dh=null}else return e=zo(n),e!==null&&Vd(e),t.blockedOn=n,!1;e.shift()}return!0}function Lm(t,e,n){Ka(t)&&n.delete(e)}function XI(){yh=!1,Zn!==null&&Ka(Zn)&&(Zn=null),er!==null&&Ka(er)&&(er=null),tr!==null&&Ka(tr)&&(tr=null),po.forEach(Lm),mo.forEach(Lm)}function Os(t,e){t.blockedOn===e&&(t.blockedOn=null,yh||(yh=!0,Tt.unstable_scheduleCallback(Tt.unstable_NormalPriority,XI)))}function go(t){function e(i){return Os(i,t)}if(0<Ra.length){Os(Ra[0],t);for(var n=1;n<Ra.length;n++){var r=Ra[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Zn!==null&&Os(Zn,t),er!==null&&Os(er,t),tr!==null&&Os(tr,t),po.forEach(e),mo.forEach(e),n=0;n<$n.length;n++)r=$n[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<$n.length&&(n=$n[0],n.blockedOn===null);)ev(n),n.blockedOn===null&&$n.shift()}var Oi=xn.ReactCurrentBatchConfig,yl=!0;function JI(t,e,n,r){var i=oe,s=Oi.transition;Oi.transition=null;try{oe=1,Ld(t,e,n,r)}finally{oe=i,Oi.transition=s}}function ZI(t,e,n,r){var i=oe,s=Oi.transition;Oi.transition=null;try{oe=4,Ld(t,e,n,r)}finally{oe=i,Oi.transition=s}}function Ld(t,e,n,r){if(yl){var i=_h(t,e,n,r);if(i===null)Ac(t,e,r,_l,n),Vm(t,r);else if(YI(i,t,e,n,r))r.stopPropagation();else if(Vm(t,r),e&4&&-1<QI.indexOf(t)){for(;i!==null;){var s=zo(i);if(s!==null&&Y_(s),s=_h(t,e,n,r),s===null&&Ac(t,e,r,_l,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ac(t,e,r,null,n)}}var _l=null;function _h(t,e,n,r){if(_l=null,t=Dd(r),t=xr(t),t!==null)if(e=ei(t),e===null)t=null;else if(n=e.tag,n===13){if(t=z_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return _l=t,null}function tv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(jI()){case xd:return 1;case H_:return 4;case ml:case BI:return 16;case K_:return 536870912;default:return 16}default:return 16}}var Qn=null,Md=null,Ga=null;function nv(){if(Ga)return Ga;var t,e=Md,n=e.length,r,i="value"in Qn?Qn.value:Qn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ga=i.slice(t,1<r?1-r:void 0)}function Qa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Pa(){return!0}function Mm(){return!1}function St(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Pa:Mm,this.isPropagationStopped=Mm,this}return ve(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Pa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Pa)},persist:function(){},isPersistent:Pa}),e}var is={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bd=St(is),Bo=ve({},is,{view:0,detail:0}),eS=St(Bo),gc,yc,Vs,nu=ve({},Bo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Vs&&(Vs&&t.type==="mousemove"?(gc=t.screenX-Vs.screenX,yc=t.screenY-Vs.screenY):yc=gc=0,Vs=t),gc)},movementY:function(t){return"movementY"in t?t.movementY:yc}}),bm=St(nu),tS=ve({},nu,{dataTransfer:0}),nS=St(tS),rS=ve({},Bo,{relatedTarget:0}),_c=St(rS),iS=ve({},is,{animationName:0,elapsedTime:0,pseudoElement:0}),sS=St(iS),oS=ve({},is,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),aS=St(oS),lS=ve({},is,{data:0}),Fm=St(lS),uS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=hS[t])?!!e[t]:!1}function Fd(){return dS}var fS=ve({},Bo,{key:function(t){if(t.key){var e=uS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Qa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?cS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fd,charCode:function(t){return t.type==="keypress"?Qa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Qa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),pS=St(fS),mS=ve({},nu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Um=St(mS),gS=ve({},Bo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fd}),yS=St(gS),_S=ve({},is,{propertyName:0,elapsedTime:0,pseudoElement:0}),vS=St(_S),wS=ve({},nu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ES=St(wS),TS=[9,13,27,32],Ud=Sn&&"CompositionEvent"in window,Xs=null;Sn&&"documentMode"in document&&(Xs=document.documentMode);var IS=Sn&&"TextEvent"in window&&!Xs,rv=Sn&&(!Ud||Xs&&8<Xs&&11>=Xs),jm=" ",Bm=!1;function iv(t,e){switch(t){case"keyup":return TS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var vi=!1;function SS(t,e){switch(t){case"compositionend":return sv(e);case"keypress":return e.which!==32?null:(Bm=!0,jm);case"textInput":return t=e.data,t===jm&&Bm?null:t;default:return null}}function AS(t,e){if(vi)return t==="compositionend"||!Ud&&iv(t,e)?(t=nv(),Ga=Md=Qn=null,vi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return rv&&e.locale!=="ko"?null:e.data;default:return null}}var RS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!RS[t.type]:e==="textarea"}function ov(t,e,n,r){b_(r),e=vl(e,"onChange"),0<e.length&&(n=new bd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Js=null,yo=null;function PS(t){yv(t,0)}function ru(t){var e=Ti(t);if(N_(e))return t}function CS(t,e){if(t==="change")return e}var av=!1;if(Sn){var vc;if(Sn){var wc="oninput"in document;if(!wc){var $m=document.createElement("div");$m.setAttribute("oninput","return;"),wc=typeof $m.oninput=="function"}vc=wc}else vc=!1;av=vc&&(!document.documentMode||9<document.documentMode)}function Wm(){Js&&(Js.detachEvent("onpropertychange",lv),yo=Js=null)}function lv(t){if(t.propertyName==="value"&&ru(yo)){var e=[];ov(e,yo,t,Dd(t)),B_(PS,e)}}function kS(t,e,n){t==="focusin"?(Wm(),Js=e,yo=n,Js.attachEvent("onpropertychange",lv)):t==="focusout"&&Wm()}function NS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ru(yo)}function DS(t,e){if(t==="click")return ru(e)}function xS(t,e){if(t==="input"||t==="change")return ru(e)}function OS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var zt=typeof Object.is=="function"?Object.is:OS;function _o(t,e){if(zt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!eh.call(e,i)||!zt(t[i],e[i]))return!1}return!0}function qm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Hm(t,e){var n=qm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=qm(n)}}function uv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?uv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function cv(){for(var t=window,e=dl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=dl(t.document)}return e}function jd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function VS(t){var e=cv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&uv(n.ownerDocument.documentElement,n)){if(r!==null&&jd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Hm(n,s);var o=Hm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var LS=Sn&&"documentMode"in document&&11>=document.documentMode,wi=null,vh=null,Zs=null,wh=!1;function Km(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;wh||wi==null||wi!==dl(r)||(r=wi,"selectionStart"in r&&jd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Zs&&_o(Zs,r)||(Zs=r,r=vl(vh,"onSelect"),0<r.length&&(e=new bd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=wi)))}function Ca(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ei={animationend:Ca("Animation","AnimationEnd"),animationiteration:Ca("Animation","AnimationIteration"),animationstart:Ca("Animation","AnimationStart"),transitionend:Ca("Transition","TransitionEnd")},Ec={},hv={};Sn&&(hv=document.createElement("div").style,"AnimationEvent"in window||(delete Ei.animationend.animation,delete Ei.animationiteration.animation,delete Ei.animationstart.animation),"TransitionEvent"in window||delete Ei.transitionend.transition);function iu(t){if(Ec[t])return Ec[t];if(!Ei[t])return t;var e=Ei[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in hv)return Ec[t]=e[n];return t}var dv=iu("animationend"),fv=iu("animationiteration"),pv=iu("animationstart"),mv=iu("transitionend"),gv=new Map,Gm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gr(t,e){gv.set(t,e),Zr(e,[t])}for(var Tc=0;Tc<Gm.length;Tc++){var Ic=Gm[Tc],MS=Ic.toLowerCase(),bS=Ic[0].toUpperCase()+Ic.slice(1);gr(MS,"on"+bS)}gr(dv,"onAnimationEnd");gr(fv,"onAnimationIteration");gr(pv,"onAnimationStart");gr("dblclick","onDoubleClick");gr("focusin","onFocus");gr("focusout","onBlur");gr(mv,"onTransitionEnd");Bi("onMouseEnter",["mouseout","mouseover"]);Bi("onMouseLeave",["mouseout","mouseover"]);Bi("onPointerEnter",["pointerout","pointerover"]);Bi("onPointerLeave",["pointerout","pointerover"]);Zr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Zr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Zr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Zr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Zr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Zr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),FS=new Set("cancel close invalid load scroll toggle".split(" ").concat(zs));function Qm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,MI(r,e,void 0,t),t.currentTarget=null}function yv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Qm(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Qm(i,l,c),s=u}}}if(pl)throw t=mh,pl=!1,mh=null,t}function de(t,e){var n=e[Ah];n===void 0&&(n=e[Ah]=new Set);var r=t+"__bubble";n.has(r)||(_v(e,t,2,!1),n.add(r))}function Sc(t,e,n){var r=0;e&&(r|=4),_v(n,t,r,e)}var ka="_reactListening"+Math.random().toString(36).slice(2);function vo(t){if(!t[ka]){t[ka]=!0,A_.forEach(function(n){n!=="selectionchange"&&(FS.has(n)||Sc(n,!1,t),Sc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ka]||(e[ka]=!0,Sc("selectionchange",!1,e))}}function _v(t,e,n,r){switch(tv(e)){case 1:var i=JI;break;case 4:i=ZI;break;default:i=Ld}n=i.bind(null,e,n,t),i=void 0,!ph||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Ac(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=xr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}B_(function(){var c=s,f=Dd(n),p=[];e:{var m=gv.get(t);if(m!==void 0){var E=bd,P=t;switch(t){case"keypress":if(Qa(n)===0)break e;case"keydown":case"keyup":E=pS;break;case"focusin":P="focus",E=_c;break;case"focusout":P="blur",E=_c;break;case"beforeblur":case"afterblur":E=_c;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=bm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=nS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=yS;break;case dv:case fv:case pv:E=sS;break;case mv:E=vS;break;case"scroll":E=eS;break;case"wheel":E=ES;break;case"copy":case"cut":case"paste":E=aS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=Um}var N=(e&4)!==0,D=!N&&t==="scroll",T=N?m!==null?m+"Capture":null:m;N=[];for(var _=c,A;_!==null;){A=_;var O=A.stateNode;if(A.tag===5&&O!==null&&(A=O,T!==null&&(O=fo(_,T),O!=null&&N.push(wo(_,O,A)))),D)break;_=_.return}0<N.length&&(m=new E(m,P,null,n,f),p.push({event:m,listeners:N}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",E=t==="mouseout"||t==="pointerout",m&&n!==dh&&(P=n.relatedTarget||n.fromElement)&&(xr(P)||P[An]))break e;if((E||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,E?(P=n.relatedTarget||n.toElement,E=c,P=P?xr(P):null,P!==null&&(D=ei(P),P!==D||P.tag!==5&&P.tag!==6)&&(P=null)):(E=null,P=c),E!==P)){if(N=bm,O="onMouseLeave",T="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(N=Um,O="onPointerLeave",T="onPointerEnter",_="pointer"),D=E==null?m:Ti(E),A=P==null?m:Ti(P),m=new N(O,_+"leave",E,n,f),m.target=D,m.relatedTarget=A,O=null,xr(f)===c&&(N=new N(T,_+"enter",P,n,f),N.target=A,N.relatedTarget=D,O=N),D=O,E&&P)t:{for(N=E,T=P,_=0,A=N;A;A=di(A))_++;for(A=0,O=T;O;O=di(O))A++;for(;0<_-A;)N=di(N),_--;for(;0<A-_;)T=di(T),A--;for(;_--;){if(N===T||T!==null&&N===T.alternate)break t;N=di(N),T=di(T)}N=null}else N=null;E!==null&&Ym(p,m,E,N,!1),P!==null&&D!==null&&Ym(p,D,P,N,!0)}}e:{if(m=c?Ti(c):window,E=m.nodeName&&m.nodeName.toLowerCase(),E==="select"||E==="input"&&m.type==="file")var F=CS;else if(zm(m))if(av)F=xS;else{F=NS;var j=kS}else(E=m.nodeName)&&E.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(F=DS);if(F&&(F=F(t,c))){ov(p,F,n,f);break e}j&&j(t,m,c),t==="focusout"&&(j=m._wrapperState)&&j.controlled&&m.type==="number"&&ah(m,"number",m.value)}switch(j=c?Ti(c):window,t){case"focusin":(zm(j)||j.contentEditable==="true")&&(wi=j,vh=c,Zs=null);break;case"focusout":Zs=vh=wi=null;break;case"mousedown":wh=!0;break;case"contextmenu":case"mouseup":case"dragend":wh=!1,Km(p,n,f);break;case"selectionchange":if(LS)break;case"keydown":case"keyup":Km(p,n,f)}var w;if(Ud)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else vi?iv(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(rv&&n.locale!=="ko"&&(vi||y!=="onCompositionStart"?y==="onCompositionEnd"&&vi&&(w=nv()):(Qn=f,Md="value"in Qn?Qn.value:Qn.textContent,vi=!0)),j=vl(c,y),0<j.length&&(y=new Fm(y,t,null,n,f),p.push({event:y,listeners:j}),w?y.data=w:(w=sv(n),w!==null&&(y.data=w)))),(w=IS?SS(t,n):AS(t,n))&&(c=vl(c,"onBeforeInput"),0<c.length&&(f=new Fm("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:c}),f.data=w))}yv(p,e)})}function wo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function vl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=fo(t,n),s!=null&&r.unshift(wo(t,s,i)),s=fo(t,e),s!=null&&r.push(wo(t,s,i))),t=t.return}return r}function di(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ym(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=fo(n,s),u!=null&&o.unshift(wo(n,u,l))):i||(u=fo(n,s),u!=null&&o.push(wo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var US=/\r\n?/g,jS=/\u0000|\uFFFD/g;function Xm(t){return(typeof t=="string"?t:""+t).replace(US,`
`).replace(jS,"")}function Na(t,e,n){if(e=Xm(e),Xm(t)!==e&&n)throw Error(M(425))}function wl(){}var Eh=null,Th=null;function Ih(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Sh=typeof setTimeout=="function"?setTimeout:void 0,BS=typeof clearTimeout=="function"?clearTimeout:void 0,Jm=typeof Promise=="function"?Promise:void 0,zS=typeof queueMicrotask=="function"?queueMicrotask:typeof Jm<"u"?function(t){return Jm.resolve(null).then(t).catch($S)}:Sh;function $S(t){setTimeout(function(){throw t})}function Rc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),go(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);go(e)}function nr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Zm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ss=Math.random().toString(36).slice(2),Yt="__reactFiber$"+ss,Eo="__reactProps$"+ss,An="__reactContainer$"+ss,Ah="__reactEvents$"+ss,WS="__reactListeners$"+ss,qS="__reactHandles$"+ss;function xr(t){var e=t[Yt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[An]||n[Yt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Zm(t);t!==null;){if(n=t[Yt])return n;t=Zm(t)}return e}t=n,n=t.parentNode}return null}function zo(t){return t=t[Yt]||t[An],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ti(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(M(33))}function su(t){return t[Eo]||null}var Rh=[],Ii=-1;function yr(t){return{current:t}}function pe(t){0>Ii||(t.current=Rh[Ii],Rh[Ii]=null,Ii--)}function ce(t,e){Ii++,Rh[Ii]=t.current,t.current=e}var dr={},et=yr(dr),dt=yr(!1),jr=dr;function zi(t,e){var n=t.type.contextTypes;if(!n)return dr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ft(t){return t=t.childContextTypes,t!=null}function El(){pe(dt),pe(et)}function eg(t,e,n){if(et.current!==dr)throw Error(M(168));ce(et,e),ce(dt,n)}function vv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(M(108,kI(t)||"Unknown",i));return ve({},n,r)}function Tl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||dr,jr=et.current,ce(et,t),ce(dt,dt.current),!0}function tg(t,e,n){var r=t.stateNode;if(!r)throw Error(M(169));n?(t=vv(t,e,jr),r.__reactInternalMemoizedMergedChildContext=t,pe(dt),pe(et),ce(et,t)):pe(dt),ce(dt,n)}var mn=null,ou=!1,Pc=!1;function wv(t){mn===null?mn=[t]:mn.push(t)}function HS(t){ou=!0,wv(t)}function _r(){if(!Pc&&mn!==null){Pc=!0;var t=0,e=oe;try{var n=mn;for(oe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}mn=null,ou=!1}catch(i){throw mn!==null&&(mn=mn.slice(t+1)),q_(xd,_r),i}finally{oe=e,Pc=!1}}return null}var Si=[],Ai=0,Il=null,Sl=0,Pt=[],Ct=0,Br=null,gn=1,yn="";function kr(t,e){Si[Ai++]=Sl,Si[Ai++]=Il,Il=t,Sl=e}function Ev(t,e,n){Pt[Ct++]=gn,Pt[Ct++]=yn,Pt[Ct++]=Br,Br=t;var r=gn;t=yn;var i=32-jt(r)-1;r&=~(1<<i),n+=1;var s=32-jt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,gn=1<<32-jt(e)+i|n<<i|r,yn=s+t}else gn=1<<s|n<<i|r,yn=t}function Bd(t){t.return!==null&&(kr(t,1),Ev(t,1,0))}function zd(t){for(;t===Il;)Il=Si[--Ai],Si[Ai]=null,Sl=Si[--Ai],Si[Ai]=null;for(;t===Br;)Br=Pt[--Ct],Pt[Ct]=null,yn=Pt[--Ct],Pt[Ct]=null,gn=Pt[--Ct],Pt[Ct]=null}var wt=null,_t=null,me=!1,Ut=null;function Tv(t,e){var n=kt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ng(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,wt=t,_t=nr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,wt=t,_t=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Br!==null?{id:gn,overflow:yn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=kt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,wt=t,_t=null,!0):!1;default:return!1}}function Ph(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ch(t){if(me){var e=_t;if(e){var n=e;if(!ng(t,e)){if(Ph(t))throw Error(M(418));e=nr(n.nextSibling);var r=wt;e&&ng(t,e)?Tv(r,n):(t.flags=t.flags&-4097|2,me=!1,wt=t)}}else{if(Ph(t))throw Error(M(418));t.flags=t.flags&-4097|2,me=!1,wt=t}}}function rg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;wt=t}function Da(t){if(t!==wt)return!1;if(!me)return rg(t),me=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ih(t.type,t.memoizedProps)),e&&(e=_t)){if(Ph(t))throw Iv(),Error(M(418));for(;e;)Tv(t,e),e=nr(e.nextSibling)}if(rg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(M(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){_t=nr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}_t=null}}else _t=wt?nr(t.stateNode.nextSibling):null;return!0}function Iv(){for(var t=_t;t;)t=nr(t.nextSibling)}function $i(){_t=wt=null,me=!1}function $d(t){Ut===null?Ut=[t]:Ut.push(t)}var KS=xn.ReactCurrentBatchConfig;function Ls(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(M(309));var r=n.stateNode}if(!r)throw Error(M(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(M(284));if(!n._owner)throw Error(M(290,t))}return t}function xa(t,e){throw t=Object.prototype.toString.call(e),Error(M(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ig(t){var e=t._init;return e(t._payload)}function Sv(t){function e(T,_){if(t){var A=T.deletions;A===null?(T.deletions=[_],T.flags|=16):A.push(_)}}function n(T,_){if(!t)return null;for(;_!==null;)e(T,_),_=_.sibling;return null}function r(T,_){for(T=new Map;_!==null;)_.key!==null?T.set(_.key,_):T.set(_.index,_),_=_.sibling;return T}function i(T,_){return T=or(T,_),T.index=0,T.sibling=null,T}function s(T,_,A){return T.index=A,t?(A=T.alternate,A!==null?(A=A.index,A<_?(T.flags|=2,_):A):(T.flags|=2,_)):(T.flags|=1048576,_)}function o(T){return t&&T.alternate===null&&(T.flags|=2),T}function l(T,_,A,O){return _===null||_.tag!==6?(_=Vc(A,T.mode,O),_.return=T,_):(_=i(_,A),_.return=T,_)}function u(T,_,A,O){var F=A.type;return F===_i?f(T,_,A.props.children,O,A.key):_!==null&&(_.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===jn&&ig(F)===_.type)?(O=i(_,A.props),O.ref=Ls(T,_,A),O.return=T,O):(O=nl(A.type,A.key,A.props,null,T.mode,O),O.ref=Ls(T,_,A),O.return=T,O)}function c(T,_,A,O){return _===null||_.tag!==4||_.stateNode.containerInfo!==A.containerInfo||_.stateNode.implementation!==A.implementation?(_=Lc(A,T.mode,O),_.return=T,_):(_=i(_,A.children||[]),_.return=T,_)}function f(T,_,A,O,F){return _===null||_.tag!==7?(_=Fr(A,T.mode,O,F),_.return=T,_):(_=i(_,A),_.return=T,_)}function p(T,_,A){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Vc(""+_,T.mode,A),_.return=T,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ea:return A=nl(_.type,_.key,_.props,null,T.mode,A),A.ref=Ls(T,null,_),A.return=T,A;case yi:return _=Lc(_,T.mode,A),_.return=T,_;case jn:var O=_._init;return p(T,O(_._payload),A)}if(js(_)||Ns(_))return _=Fr(_,T.mode,A,null),_.return=T,_;xa(T,_)}return null}function m(T,_,A,O){var F=_!==null?_.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return F!==null?null:l(T,_,""+A,O);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Ea:return A.key===F?u(T,_,A,O):null;case yi:return A.key===F?c(T,_,A,O):null;case jn:return F=A._init,m(T,_,F(A._payload),O)}if(js(A)||Ns(A))return F!==null?null:f(T,_,A,O,null);xa(T,A)}return null}function E(T,_,A,O,F){if(typeof O=="string"&&O!==""||typeof O=="number")return T=T.get(A)||null,l(_,T,""+O,F);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case Ea:return T=T.get(O.key===null?A:O.key)||null,u(_,T,O,F);case yi:return T=T.get(O.key===null?A:O.key)||null,c(_,T,O,F);case jn:var j=O._init;return E(T,_,A,j(O._payload),F)}if(js(O)||Ns(O))return T=T.get(A)||null,f(_,T,O,F,null);xa(_,O)}return null}function P(T,_,A,O){for(var F=null,j=null,w=_,y=_=0,v=null;w!==null&&y<A.length;y++){w.index>y?(v=w,w=null):v=w.sibling;var I=m(T,w,A[y],O);if(I===null){w===null&&(w=v);break}t&&w&&I.alternate===null&&e(T,w),_=s(I,_,y),j===null?F=I:j.sibling=I,j=I,w=v}if(y===A.length)return n(T,w),me&&kr(T,y),F;if(w===null){for(;y<A.length;y++)w=p(T,A[y],O),w!==null&&(_=s(w,_,y),j===null?F=w:j.sibling=w,j=w);return me&&kr(T,y),F}for(w=r(T,w);y<A.length;y++)v=E(w,T,y,A[y],O),v!==null&&(t&&v.alternate!==null&&w.delete(v.key===null?y:v.key),_=s(v,_,y),j===null?F=v:j.sibling=v,j=v);return t&&w.forEach(function(R){return e(T,R)}),me&&kr(T,y),F}function N(T,_,A,O){var F=Ns(A);if(typeof F!="function")throw Error(M(150));if(A=F.call(A),A==null)throw Error(M(151));for(var j=F=null,w=_,y=_=0,v=null,I=A.next();w!==null&&!I.done;y++,I=A.next()){w.index>y?(v=w,w=null):v=w.sibling;var R=m(T,w,I.value,O);if(R===null){w===null&&(w=v);break}t&&w&&R.alternate===null&&e(T,w),_=s(R,_,y),j===null?F=R:j.sibling=R,j=R,w=v}if(I.done)return n(T,w),me&&kr(T,y),F;if(w===null){for(;!I.done;y++,I=A.next())I=p(T,I.value,O),I!==null&&(_=s(I,_,y),j===null?F=I:j.sibling=I,j=I);return me&&kr(T,y),F}for(w=r(T,w);!I.done;y++,I=A.next())I=E(w,T,y,I.value,O),I!==null&&(t&&I.alternate!==null&&w.delete(I.key===null?y:I.key),_=s(I,_,y),j===null?F=I:j.sibling=I,j=I);return t&&w.forEach(function(k){return e(T,k)}),me&&kr(T,y),F}function D(T,_,A,O){if(typeof A=="object"&&A!==null&&A.type===_i&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case Ea:e:{for(var F=A.key,j=_;j!==null;){if(j.key===F){if(F=A.type,F===_i){if(j.tag===7){n(T,j.sibling),_=i(j,A.props.children),_.return=T,T=_;break e}}else if(j.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===jn&&ig(F)===j.type){n(T,j.sibling),_=i(j,A.props),_.ref=Ls(T,j,A),_.return=T,T=_;break e}n(T,j);break}else e(T,j);j=j.sibling}A.type===_i?(_=Fr(A.props.children,T.mode,O,A.key),_.return=T,T=_):(O=nl(A.type,A.key,A.props,null,T.mode,O),O.ref=Ls(T,_,A),O.return=T,T=O)}return o(T);case yi:e:{for(j=A.key;_!==null;){if(_.key===j)if(_.tag===4&&_.stateNode.containerInfo===A.containerInfo&&_.stateNode.implementation===A.implementation){n(T,_.sibling),_=i(_,A.children||[]),_.return=T,T=_;break e}else{n(T,_);break}else e(T,_);_=_.sibling}_=Lc(A,T.mode,O),_.return=T,T=_}return o(T);case jn:return j=A._init,D(T,_,j(A._payload),O)}if(js(A))return P(T,_,A,O);if(Ns(A))return N(T,_,A,O);xa(T,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,_!==null&&_.tag===6?(n(T,_.sibling),_=i(_,A),_.return=T,T=_):(n(T,_),_=Vc(A,T.mode,O),_.return=T,T=_),o(T)):n(T,_)}return D}var Wi=Sv(!0),Av=Sv(!1),Al=yr(null),Rl=null,Ri=null,Wd=null;function qd(){Wd=Ri=Rl=null}function Hd(t){var e=Al.current;pe(Al),t._currentValue=e}function kh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Vi(t,e){Rl=t,Wd=Ri=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ht=!0),t.firstContext=null)}function Ot(t){var e=t._currentValue;if(Wd!==t)if(t={context:t,memoizedValue:e,next:null},Ri===null){if(Rl===null)throw Error(M(308));Ri=t,Rl.dependencies={lanes:0,firstContext:t}}else Ri=Ri.next=t;return e}var Or=null;function Kd(t){Or===null?Or=[t]:Or.push(t)}function Rv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Kd(e)):(n.next=i.next,i.next=n),e.interleaved=n,Rn(t,r)}function Rn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Bn=!1;function Gd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Pv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function En(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function rr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,re&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Rn(t,n)}return i=r.interleaved,i===null?(e.next=e,Kd(r)):(e.next=i.next,i.next=e),r.interleaved=e,Rn(t,n)}function Ya(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Od(t,n)}}function sg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Pl(t,e,n,r){var i=t.updateQueue;Bn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,f=c=u=null,l=s;do{var m=l.lane,E=l.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:E,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var P=t,N=l;switch(m=e,E=n,N.tag){case 1:if(P=N.payload,typeof P=="function"){p=P.call(E,p,m);break e}p=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=N.payload,m=typeof P=="function"?P.call(E,p,m):P,m==null)break e;p=ve({},p,m);break e;case 2:Bn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else E={eventTime:E,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=E,u=p):f=f.next=E,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(f===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);$r|=o,t.lanes=o,t.memoizedState=p}}function og(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(M(191,i));i.call(r)}}}var $o={},Zt=yr($o),To=yr($o),Io=yr($o);function Vr(t){if(t===$o)throw Error(M(174));return t}function Qd(t,e){switch(ce(Io,e),ce(To,t),ce(Zt,$o),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:uh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=uh(e,t)}pe(Zt),ce(Zt,e)}function qi(){pe(Zt),pe(To),pe(Io)}function Cv(t){Vr(Io.current);var e=Vr(Zt.current),n=uh(e,t.type);e!==n&&(ce(To,t),ce(Zt,n))}function Yd(t){To.current===t&&(pe(Zt),pe(To))}var ye=yr(0);function Cl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Cc=[];function Xd(){for(var t=0;t<Cc.length;t++)Cc[t]._workInProgressVersionPrimary=null;Cc.length=0}var Xa=xn.ReactCurrentDispatcher,kc=xn.ReactCurrentBatchConfig,zr=0,_e=null,De=null,Le=null,kl=!1,eo=!1,So=0,GS=0;function Ge(){throw Error(M(321))}function Jd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!zt(t[n],e[n]))return!1;return!0}function Zd(t,e,n,r,i,s){if(zr=s,_e=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Xa.current=t===null||t.memoizedState===null?JS:ZS,t=n(r,i),eo){s=0;do{if(eo=!1,So=0,25<=s)throw Error(M(301));s+=1,Le=De=null,e.updateQueue=null,Xa.current=eA,t=n(r,i)}while(eo)}if(Xa.current=Nl,e=De!==null&&De.next!==null,zr=0,Le=De=_e=null,kl=!1,e)throw Error(M(300));return t}function ef(){var t=So!==0;return So=0,t}function Qt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?_e.memoizedState=Le=t:Le=Le.next=t,Le}function Vt(){if(De===null){var t=_e.alternate;t=t!==null?t.memoizedState:null}else t=De.next;var e=Le===null?_e.memoizedState:Le.next;if(e!==null)Le=e,De=t;else{if(t===null)throw Error(M(310));De=t,t={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Le===null?_e.memoizedState=Le=t:Le=Le.next=t}return Le}function Ao(t,e){return typeof e=="function"?e(t):e}function Nc(t){var e=Vt(),n=e.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=t;var r=De,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var f=c.lane;if((zr&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,_e.lanes|=f,$r|=f}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,zt(r,e.memoizedState)||(ht=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,_e.lanes|=s,$r|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Dc(t){var e=Vt(),n=e.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);zt(s,e.memoizedState)||(ht=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function kv(){}function Nv(t,e){var n=_e,r=Vt(),i=e(),s=!zt(r.memoizedState,i);if(s&&(r.memoizedState=i,ht=!0),r=r.queue,tf(Ov.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Le!==null&&Le.memoizedState.tag&1){if(n.flags|=2048,Ro(9,xv.bind(null,n,r,i,e),void 0,null),Me===null)throw Error(M(349));zr&30||Dv(n,e,i)}return i}function Dv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=_e.updateQueue,e===null?(e={lastEffect:null,stores:null},_e.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function xv(t,e,n,r){e.value=n,e.getSnapshot=r,Vv(e)&&Lv(t)}function Ov(t,e,n){return n(function(){Vv(e)&&Lv(t)})}function Vv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!zt(t,n)}catch{return!0}}function Lv(t){var e=Rn(t,1);e!==null&&Bt(e,t,1,-1)}function ag(t){var e=Qt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ao,lastRenderedState:t},e.queue=t,t=t.dispatch=XS.bind(null,_e,t),[e.memoizedState,t]}function Ro(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=_e.updateQueue,e===null?(e={lastEffect:null,stores:null},_e.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Mv(){return Vt().memoizedState}function Ja(t,e,n,r){var i=Qt();_e.flags|=t,i.memoizedState=Ro(1|e,n,void 0,r===void 0?null:r)}function au(t,e,n,r){var i=Vt();r=r===void 0?null:r;var s=void 0;if(De!==null){var o=De.memoizedState;if(s=o.destroy,r!==null&&Jd(r,o.deps)){i.memoizedState=Ro(e,n,s,r);return}}_e.flags|=t,i.memoizedState=Ro(1|e,n,s,r)}function lg(t,e){return Ja(8390656,8,t,e)}function tf(t,e){return au(2048,8,t,e)}function bv(t,e){return au(4,2,t,e)}function Fv(t,e){return au(4,4,t,e)}function Uv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function jv(t,e,n){return n=n!=null?n.concat([t]):null,au(4,4,Uv.bind(null,e,t),n)}function nf(){}function Bv(t,e){var n=Vt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Jd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function zv(t,e){var n=Vt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Jd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function $v(t,e,n){return zr&21?(zt(n,e)||(n=G_(),_e.lanes|=n,$r|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ht=!0),t.memoizedState=n)}function QS(t,e){var n=oe;oe=n!==0&&4>n?n:4,t(!0);var r=kc.transition;kc.transition={};try{t(!1),e()}finally{oe=n,kc.transition=r}}function Wv(){return Vt().memoizedState}function YS(t,e,n){var r=sr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},qv(t))Hv(e,n);else if(n=Rv(t,e,n,r),n!==null){var i=st();Bt(n,t,r,i),Kv(n,e,r)}}function XS(t,e,n){var r=sr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(qv(t))Hv(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,zt(l,o)){var u=e.interleaved;u===null?(i.next=i,Kd(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=Rv(t,e,i,r),n!==null&&(i=st(),Bt(n,t,r,i),Kv(n,e,r))}}function qv(t){var e=t.alternate;return t===_e||e!==null&&e===_e}function Hv(t,e){eo=kl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Kv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Od(t,n)}}var Nl={readContext:Ot,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useInsertionEffect:Ge,useLayoutEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useMutableSource:Ge,useSyncExternalStore:Ge,useId:Ge,unstable_isNewReconciler:!1},JS={readContext:Ot,useCallback:function(t,e){return Qt().memoizedState=[t,e===void 0?null:e],t},useContext:Ot,useEffect:lg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ja(4194308,4,Uv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ja(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ja(4,2,t,e)},useMemo:function(t,e){var n=Qt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Qt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=YS.bind(null,_e,t),[r.memoizedState,t]},useRef:function(t){var e=Qt();return t={current:t},e.memoizedState=t},useState:ag,useDebugValue:nf,useDeferredValue:function(t){return Qt().memoizedState=t},useTransition:function(){var t=ag(!1),e=t[0];return t=QS.bind(null,t[1]),Qt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=_e,i=Qt();if(me){if(n===void 0)throw Error(M(407));n=n()}else{if(n=e(),Me===null)throw Error(M(349));zr&30||Dv(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,lg(Ov.bind(null,r,s,t),[t]),r.flags|=2048,Ro(9,xv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Qt(),e=Me.identifierPrefix;if(me){var n=yn,r=gn;n=(r&~(1<<32-jt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=So++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=GS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ZS={readContext:Ot,useCallback:Bv,useContext:Ot,useEffect:tf,useImperativeHandle:jv,useInsertionEffect:bv,useLayoutEffect:Fv,useMemo:zv,useReducer:Nc,useRef:Mv,useState:function(){return Nc(Ao)},useDebugValue:nf,useDeferredValue:function(t){var e=Vt();return $v(e,De.memoizedState,t)},useTransition:function(){var t=Nc(Ao)[0],e=Vt().memoizedState;return[t,e]},useMutableSource:kv,useSyncExternalStore:Nv,useId:Wv,unstable_isNewReconciler:!1},eA={readContext:Ot,useCallback:Bv,useContext:Ot,useEffect:tf,useImperativeHandle:jv,useInsertionEffect:bv,useLayoutEffect:Fv,useMemo:zv,useReducer:Dc,useRef:Mv,useState:function(){return Dc(Ao)},useDebugValue:nf,useDeferredValue:function(t){var e=Vt();return De===null?e.memoizedState=t:$v(e,De.memoizedState,t)},useTransition:function(){var t=Dc(Ao)[0],e=Vt().memoizedState;return[t,e]},useMutableSource:kv,useSyncExternalStore:Nv,useId:Wv,unstable_isNewReconciler:!1};function bt(t,e){if(t&&t.defaultProps){e=ve({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Nh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ve({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var lu={isMounted:function(t){return(t=t._reactInternals)?ei(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=st(),i=sr(t),s=En(r,i);s.payload=e,n!=null&&(s.callback=n),e=rr(t,s,i),e!==null&&(Bt(e,t,i,r),Ya(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=st(),i=sr(t),s=En(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=rr(t,s,i),e!==null&&(Bt(e,t,i,r),Ya(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=st(),r=sr(t),i=En(n,r);i.tag=2,e!=null&&(i.callback=e),e=rr(t,i,r),e!==null&&(Bt(e,t,r,n),Ya(e,t,r))}};function ug(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!_o(n,r)||!_o(i,s):!0}function Gv(t,e,n){var r=!1,i=dr,s=e.contextType;return typeof s=="object"&&s!==null?s=Ot(s):(i=ft(e)?jr:et.current,r=e.contextTypes,s=(r=r!=null)?zi(t,i):dr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=lu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function cg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&lu.enqueueReplaceState(e,e.state,null)}function Dh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Gd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ot(s):(s=ft(e)?jr:et.current,i.context=zi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Nh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&lu.enqueueReplaceState(i,i.state,null),Pl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Hi(t,e){try{var n="",r=e;do n+=CI(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function xc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function xh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var tA=typeof WeakMap=="function"?WeakMap:Map;function Qv(t,e,n){n=En(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){xl||(xl=!0,zh=r),xh(t,e)},n}function Yv(t,e,n){n=En(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){xh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){xh(t,e),typeof r!="function"&&(ir===null?ir=new Set([this]):ir.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function hg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new tA;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=mA.bind(null,t,e,n),e.then(t,t))}function dg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function fg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=En(-1,1),e.tag=2,rr(n,e,1))),n.lanes|=1),t)}var nA=xn.ReactCurrentOwner,ht=!1;function it(t,e,n,r){e.child=t===null?Av(e,null,n,r):Wi(e,t.child,n,r)}function pg(t,e,n,r,i){n=n.render;var s=e.ref;return Vi(e,i),r=Zd(t,e,n,r,s,i),n=ef(),t!==null&&!ht?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Pn(t,e,i)):(me&&n&&Bd(e),e.flags|=1,it(t,e,r,i),e.child)}function mg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!hf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Xv(t,e,s,r,i)):(t=nl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:_o,n(o,r)&&t.ref===e.ref)return Pn(t,e,i)}return e.flags|=1,t=or(s,r),t.ref=e.ref,t.return=e,e.child=t}function Xv(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(_o(s,r)&&t.ref===e.ref)if(ht=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(ht=!0);else return e.lanes=t.lanes,Pn(t,e,i)}return Oh(t,e,n,r,i)}function Jv(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ce(Ci,yt),yt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ce(Ci,yt),yt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ce(Ci,yt),yt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ce(Ci,yt),yt|=r;return it(t,e,i,n),e.child}function Zv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Oh(t,e,n,r,i){var s=ft(n)?jr:et.current;return s=zi(e,s),Vi(e,i),n=Zd(t,e,n,r,s,i),r=ef(),t!==null&&!ht?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Pn(t,e,i)):(me&&r&&Bd(e),e.flags|=1,it(t,e,n,i),e.child)}function gg(t,e,n,r,i){if(ft(n)){var s=!0;Tl(e)}else s=!1;if(Vi(e,i),e.stateNode===null)Za(t,e),Gv(e,n,r),Dh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ot(c):(c=ft(n)?jr:et.current,c=zi(e,c));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&cg(e,o,r,c),Bn=!1;var m=e.memoizedState;o.state=m,Pl(e,r,o,i),u=e.memoizedState,l!==r||m!==u||dt.current||Bn?(typeof f=="function"&&(Nh(e,n,f,r),u=e.memoizedState),(l=Bn||ug(e,n,l,r,m,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Pv(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:bt(e.type,l),o.props=c,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ot(u):(u=ft(n)?jr:et.current,u=zi(e,u));var E=n.getDerivedStateFromProps;(f=typeof E=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==u)&&cg(e,o,r,u),Bn=!1,m=e.memoizedState,o.state=m,Pl(e,r,o,i);var P=e.memoizedState;l!==p||m!==P||dt.current||Bn?(typeof E=="function"&&(Nh(e,n,E,r),P=e.memoizedState),(c=Bn||ug(e,n,c,r,m,P,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,P,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,P,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=P),o.props=r,o.state=P,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Vh(t,e,n,r,s,i)}function Vh(t,e,n,r,i,s){Zv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&tg(e,n,!1),Pn(t,e,s);r=e.stateNode,nA.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Wi(e,t.child,null,s),e.child=Wi(e,null,l,s)):it(t,e,l,s),e.memoizedState=r.state,i&&tg(e,n,!0),e.child}function ew(t){var e=t.stateNode;e.pendingContext?eg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&eg(t,e.context,!1),Qd(t,e.containerInfo)}function yg(t,e,n,r,i){return $i(),$d(i),e.flags|=256,it(t,e,n,r),e.child}var Lh={dehydrated:null,treeContext:null,retryLane:0};function Mh(t){return{baseLanes:t,cachePool:null,transitions:null}}function tw(t,e,n){var r=e.pendingProps,i=ye.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ce(ye,i&1),t===null)return Ch(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=hu(o,r,0,null),t=Fr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Mh(n),e.memoizedState=Lh,t):rf(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return rA(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=or(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=or(l,s):(s=Fr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Mh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Lh,r}return s=t.child,t=s.sibling,r=or(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function rf(t,e){return e=hu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Oa(t,e,n,r){return r!==null&&$d(r),Wi(e,t.child,null,n),t=rf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function rA(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=xc(Error(M(422))),Oa(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=hu({mode:"visible",children:r.children},i,0,null),s=Fr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Wi(e,t.child,null,o),e.child.memoizedState=Mh(o),e.memoizedState=Lh,s);if(!(e.mode&1))return Oa(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(M(419)),r=xc(s,r,void 0),Oa(t,e,o,r)}if(l=(o&t.childLanes)!==0,ht||l){if(r=Me,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Rn(t,i),Bt(r,t,i,-1))}return cf(),r=xc(Error(M(421))),Oa(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=gA.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,_t=nr(i.nextSibling),wt=e,me=!0,Ut=null,t!==null&&(Pt[Ct++]=gn,Pt[Ct++]=yn,Pt[Ct++]=Br,gn=t.id,yn=t.overflow,Br=e),e=rf(e,r.children),e.flags|=4096,e)}function _g(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),kh(t.return,e,n)}function Oc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function nw(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(it(t,e,r.children,n),r=ye.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&_g(t,n,e);else if(t.tag===19)_g(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ce(ye,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Cl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Oc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Cl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Oc(e,!0,n,null,s);break;case"together":Oc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Za(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Pn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),$r|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(M(153));if(e.child!==null){for(t=e.child,n=or(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=or(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function iA(t,e,n){switch(e.tag){case 3:ew(e),$i();break;case 5:Cv(e);break;case 1:ft(e.type)&&Tl(e);break;case 4:Qd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ce(Al,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ce(ye,ye.current&1),e.flags|=128,null):n&e.child.childLanes?tw(t,e,n):(ce(ye,ye.current&1),t=Pn(t,e,n),t!==null?t.sibling:null);ce(ye,ye.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return nw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ce(ye,ye.current),r)break;return null;case 22:case 23:return e.lanes=0,Jv(t,e,n)}return Pn(t,e,n)}var rw,bh,iw,sw;rw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};bh=function(){};iw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Vr(Zt.current);var s=null;switch(n){case"input":i=sh(t,i),r=sh(t,r),s=[];break;case"select":i=ve({},i,{value:void 0}),r=ve({},r,{value:void 0}),s=[];break;case"textarea":i=lh(t,i),r=lh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=wl)}ch(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(co.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(co.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&de("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};sw=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ms(t,e){if(!me)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Qe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function sA(t,e,n){var r=e.pendingProps;switch(zd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(e),null;case 1:return ft(e.type)&&El(),Qe(e),null;case 3:return r=e.stateNode,qi(),pe(dt),pe(et),Xd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Da(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ut!==null&&(qh(Ut),Ut=null))),bh(t,e),Qe(e),null;case 5:Yd(e);var i=Vr(Io.current);if(n=e.type,t!==null&&e.stateNode!=null)iw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(M(166));return Qe(e),null}if(t=Vr(Zt.current),Da(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Yt]=e,r[Eo]=s,t=(e.mode&1)!==0,n){case"dialog":de("cancel",r),de("close",r);break;case"iframe":case"object":case"embed":de("load",r);break;case"video":case"audio":for(i=0;i<zs.length;i++)de(zs[i],r);break;case"source":de("error",r);break;case"img":case"image":case"link":de("error",r),de("load",r);break;case"details":de("toggle",r);break;case"input":Pm(r,s),de("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},de("invalid",r);break;case"textarea":km(r,s),de("invalid",r)}ch(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Na(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Na(r.textContent,l,t),i=["children",""+l]):co.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&de("scroll",r)}switch(n){case"input":Ta(r),Cm(r,s,!0);break;case"textarea":Ta(r),Nm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=wl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=O_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Yt]=e,t[Eo]=r,rw(t,e,!1,!1),e.stateNode=t;e:{switch(o=hh(n,r),n){case"dialog":de("cancel",t),de("close",t),i=r;break;case"iframe":case"object":case"embed":de("load",t),i=r;break;case"video":case"audio":for(i=0;i<zs.length;i++)de(zs[i],t);i=r;break;case"source":de("error",t),i=r;break;case"img":case"image":case"link":de("error",t),de("load",t),i=r;break;case"details":de("toggle",t),i=r;break;case"input":Pm(t,r),i=sh(t,r),de("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ve({},r,{value:void 0}),de("invalid",t);break;case"textarea":km(t,r),i=lh(t,r),de("invalid",t);break;default:i=r}ch(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?M_(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&V_(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&ho(t,u):typeof u=="number"&&ho(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(co.hasOwnProperty(s)?u!=null&&s==="onScroll"&&de("scroll",t):u!=null&&Pd(t,s,u,o))}switch(n){case"input":Ta(t),Cm(t,r,!1);break;case"textarea":Ta(t),Nm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+hr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ni(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ni(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=wl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Qe(e),null;case 6:if(t&&e.stateNode!=null)sw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(M(166));if(n=Vr(Io.current),Vr(Zt.current),Da(e)){if(r=e.stateNode,n=e.memoizedProps,r[Yt]=e,(s=r.nodeValue!==n)&&(t=wt,t!==null))switch(t.tag){case 3:Na(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Na(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Yt]=e,e.stateNode=r}return Qe(e),null;case 13:if(pe(ye),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(me&&_t!==null&&e.mode&1&&!(e.flags&128))Iv(),$i(),e.flags|=98560,s=!1;else if(s=Da(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(M(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(M(317));s[Yt]=e}else $i(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Qe(e),s=!1}else Ut!==null&&(qh(Ut),Ut=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ye.current&1?xe===0&&(xe=3):cf())),e.updateQueue!==null&&(e.flags|=4),Qe(e),null);case 4:return qi(),bh(t,e),t===null&&vo(e.stateNode.containerInfo),Qe(e),null;case 10:return Hd(e.type._context),Qe(e),null;case 17:return ft(e.type)&&El(),Qe(e),null;case 19:if(pe(ye),s=e.memoizedState,s===null)return Qe(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ms(s,!1);else{if(xe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Cl(t),o!==null){for(e.flags|=128,Ms(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ce(ye,ye.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ae()>Ki&&(e.flags|=128,r=!0,Ms(s,!1),e.lanes=4194304)}else{if(!r)if(t=Cl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ms(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!me)return Qe(e),null}else 2*Ae()-s.renderingStartTime>Ki&&n!==1073741824&&(e.flags|=128,r=!0,Ms(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ae(),e.sibling=null,n=ye.current,ce(ye,r?n&1|2:n&1),e):(Qe(e),null);case 22:case 23:return uf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?yt&1073741824&&(Qe(e),e.subtreeFlags&6&&(e.flags|=8192)):Qe(e),null;case 24:return null;case 25:return null}throw Error(M(156,e.tag))}function oA(t,e){switch(zd(e),e.tag){case 1:return ft(e.type)&&El(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return qi(),pe(dt),pe(et),Xd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Yd(e),null;case 13:if(pe(ye),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(M(340));$i()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return pe(ye),null;case 4:return qi(),null;case 10:return Hd(e.type._context),null;case 22:case 23:return uf(),null;case 24:return null;default:return null}}var Va=!1,Je=!1,aA=typeof WeakSet=="function"?WeakSet:Set,$=null;function Pi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Te(t,e,r)}else n.current=null}function Fh(t,e,n){try{n()}catch(r){Te(t,e,r)}}var vg=!1;function lA(t,e){if(Eh=yl,t=cv(),jd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,f=0,p=t,m=null;t:for(;;){for(var E;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(E=p.firstChild)!==null;)m=p,p=E;for(;;){if(p===t)break t;if(m===n&&++c===i&&(l=o),m===s&&++f===r&&(u=o),(E=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=E}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Th={focusedElem:t,selectionRange:n},yl=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var P=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(P!==null){var N=P.memoizedProps,D=P.memoizedState,T=e.stateNode,_=T.getSnapshotBeforeUpdate(e.elementType===e.type?N:bt(e.type,N),D);T.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var A=e.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(O){Te(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return P=vg,vg=!1,P}function to(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Fh(e,n,s)}i=i.next}while(i!==r)}}function uu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Uh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function ow(t){var e=t.alternate;e!==null&&(t.alternate=null,ow(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Yt],delete e[Eo],delete e[Ah],delete e[WS],delete e[qS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function aw(t){return t.tag===5||t.tag===3||t.tag===4}function wg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||aw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function jh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=wl));else if(r!==4&&(t=t.child,t!==null))for(jh(t,e,n),t=t.sibling;t!==null;)jh(t,e,n),t=t.sibling}function Bh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Bh(t,e,n),t=t.sibling;t!==null;)Bh(t,e,n),t=t.sibling}var Fe=null,Ft=!1;function Fn(t,e,n){for(n=n.child;n!==null;)lw(t,e,n),n=n.sibling}function lw(t,e,n){if(Jt&&typeof Jt.onCommitFiberUnmount=="function")try{Jt.onCommitFiberUnmount(tu,n)}catch{}switch(n.tag){case 5:Je||Pi(n,e);case 6:var r=Fe,i=Ft;Fe=null,Fn(t,e,n),Fe=r,Ft=i,Fe!==null&&(Ft?(t=Fe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Fe.removeChild(n.stateNode));break;case 18:Fe!==null&&(Ft?(t=Fe,n=n.stateNode,t.nodeType===8?Rc(t.parentNode,n):t.nodeType===1&&Rc(t,n),go(t)):Rc(Fe,n.stateNode));break;case 4:r=Fe,i=Ft,Fe=n.stateNode.containerInfo,Ft=!0,Fn(t,e,n),Fe=r,Ft=i;break;case 0:case 11:case 14:case 15:if(!Je&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Fh(n,e,o),i=i.next}while(i!==r)}Fn(t,e,n);break;case 1:if(!Je&&(Pi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Te(n,e,l)}Fn(t,e,n);break;case 21:Fn(t,e,n);break;case 22:n.mode&1?(Je=(r=Je)||n.memoizedState!==null,Fn(t,e,n),Je=r):Fn(t,e,n);break;default:Fn(t,e,n)}}function Eg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new aA),e.forEach(function(r){var i=yA.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Mt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Fe=l.stateNode,Ft=!1;break e;case 3:Fe=l.stateNode.containerInfo,Ft=!0;break e;case 4:Fe=l.stateNode.containerInfo,Ft=!0;break e}l=l.return}if(Fe===null)throw Error(M(160));lw(s,o,i),Fe=null,Ft=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Te(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)uw(e,t),e=e.sibling}function uw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Mt(e,t),Gt(t),r&4){try{to(3,t,t.return),uu(3,t)}catch(N){Te(t,t.return,N)}try{to(5,t,t.return)}catch(N){Te(t,t.return,N)}}break;case 1:Mt(e,t),Gt(t),r&512&&n!==null&&Pi(n,n.return);break;case 5:if(Mt(e,t),Gt(t),r&512&&n!==null&&Pi(n,n.return),t.flags&32){var i=t.stateNode;try{ho(i,"")}catch(N){Te(t,t.return,N)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&D_(i,s),hh(l,o);var c=hh(l,s);for(o=0;o<u.length;o+=2){var f=u[o],p=u[o+1];f==="style"?M_(i,p):f==="dangerouslySetInnerHTML"?V_(i,p):f==="children"?ho(i,p):Pd(i,f,p,c)}switch(l){case"input":oh(i,s);break;case"textarea":x_(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var E=s.value;E!=null?Ni(i,!!s.multiple,E,!1):m!==!!s.multiple&&(s.defaultValue!=null?Ni(i,!!s.multiple,s.defaultValue,!0):Ni(i,!!s.multiple,s.multiple?[]:"",!1))}i[Eo]=s}catch(N){Te(t,t.return,N)}}break;case 6:if(Mt(e,t),Gt(t),r&4){if(t.stateNode===null)throw Error(M(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(N){Te(t,t.return,N)}}break;case 3:if(Mt(e,t),Gt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{go(e.containerInfo)}catch(N){Te(t,t.return,N)}break;case 4:Mt(e,t),Gt(t);break;case 13:Mt(e,t),Gt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(af=Ae())),r&4&&Eg(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Je=(c=Je)||f,Mt(e,t),Je=c):Mt(e,t),Gt(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for($=t,f=t.child;f!==null;){for(p=$=f;$!==null;){switch(m=$,E=m.child,m.tag){case 0:case 11:case 14:case 15:to(4,m,m.return);break;case 1:Pi(m,m.return);var P=m.stateNode;if(typeof P.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,P.props=e.memoizedProps,P.state=e.memoizedState,P.componentWillUnmount()}catch(N){Te(r,n,N)}}break;case 5:Pi(m,m.return);break;case 22:if(m.memoizedState!==null){Ig(p);continue}}E!==null?(E.return=m,$=E):Ig(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=L_("display",o))}catch(N){Te(t,t.return,N)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(N){Te(t,t.return,N)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Mt(e,t),Gt(t),r&4&&Eg(t);break;case 21:break;default:Mt(e,t),Gt(t)}}function Gt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(aw(n)){var r=n;break e}n=n.return}throw Error(M(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ho(i,""),r.flags&=-33);var s=wg(t);Bh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=wg(t);jh(t,l,o);break;default:throw Error(M(161))}}catch(u){Te(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function uA(t,e,n){$=t,cw(t)}function cw(t,e,n){for(var r=(t.mode&1)!==0;$!==null;){var i=$,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Va;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||Je;l=Va;var c=Je;if(Va=o,(Je=u)&&!c)for($=i;$!==null;)o=$,u=o.child,o.tag===22&&o.memoizedState!==null?Sg(i):u!==null?(u.return=o,$=u):Sg(i);for(;s!==null;)$=s,cw(s),s=s.sibling;$=i,Va=l,Je=c}Tg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,$=s):Tg(t)}}function Tg(t){for(;$!==null;){var e=$;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Je||uu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Je)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:bt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&og(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}og(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&go(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}Je||e.flags&512&&Uh(e)}catch(m){Te(e,e.return,m)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function Ig(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function Sg(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{uu(4,e)}catch(u){Te(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Te(e,i,u)}}var s=e.return;try{Uh(e)}catch(u){Te(e,s,u)}break;case 5:var o=e.return;try{Uh(e)}catch(u){Te(e,o,u)}}}catch(u){Te(e,e.return,u)}if(e===t){$=null;break}var l=e.sibling;if(l!==null){l.return=e.return,$=l;break}$=e.return}}var cA=Math.ceil,Dl=xn.ReactCurrentDispatcher,sf=xn.ReactCurrentOwner,Nt=xn.ReactCurrentBatchConfig,re=0,Me=null,Ce=null,Be=0,yt=0,Ci=yr(0),xe=0,Po=null,$r=0,cu=0,of=0,no=null,ut=null,af=0,Ki=1/0,pn=null,xl=!1,zh=null,ir=null,La=!1,Yn=null,Ol=0,ro=0,$h=null,el=-1,tl=0;function st(){return re&6?Ae():el!==-1?el:el=Ae()}function sr(t){return t.mode&1?re&2&&Be!==0?Be&-Be:KS.transition!==null?(tl===0&&(tl=G_()),tl):(t=oe,t!==0||(t=window.event,t=t===void 0?16:tv(t.type)),t):1}function Bt(t,e,n,r){if(50<ro)throw ro=0,$h=null,Error(M(185));jo(t,n,r),(!(re&2)||t!==Me)&&(t===Me&&(!(re&2)&&(cu|=n),xe===4&&Wn(t,Be)),pt(t,r),n===1&&re===0&&!(e.mode&1)&&(Ki=Ae()+500,ou&&_r()))}function pt(t,e){var n=t.callbackNode;KI(t,e);var r=gl(t,t===Me?Be:0);if(r===0)n!==null&&Om(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Om(n),e===1)t.tag===0?HS(Ag.bind(null,t)):wv(Ag.bind(null,t)),zS(function(){!(re&6)&&_r()}),n=null;else{switch(Q_(r)){case 1:n=xd;break;case 4:n=H_;break;case 16:n=ml;break;case 536870912:n=K_;break;default:n=ml}n=_w(n,hw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function hw(t,e){if(el=-1,tl=0,re&6)throw Error(M(327));var n=t.callbackNode;if(Li()&&t.callbackNode!==n)return null;var r=gl(t,t===Me?Be:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Vl(t,r);else{e=r;var i=re;re|=2;var s=fw();(Me!==t||Be!==e)&&(pn=null,Ki=Ae()+500,br(t,e));do try{fA();break}catch(l){dw(t,l)}while(!0);qd(),Dl.current=s,re=i,Ce!==null?e=0:(Me=null,Be=0,e=xe)}if(e!==0){if(e===2&&(i=gh(t),i!==0&&(r=i,e=Wh(t,i))),e===1)throw n=Po,br(t,0),Wn(t,r),pt(t,Ae()),n;if(e===6)Wn(t,r);else{if(i=t.current.alternate,!(r&30)&&!hA(i)&&(e=Vl(t,r),e===2&&(s=gh(t),s!==0&&(r=s,e=Wh(t,s))),e===1))throw n=Po,br(t,0),Wn(t,r),pt(t,Ae()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(M(345));case 2:Nr(t,ut,pn);break;case 3:if(Wn(t,r),(r&130023424)===r&&(e=af+500-Ae(),10<e)){if(gl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){st(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Sh(Nr.bind(null,t,ut,pn),e);break}Nr(t,ut,pn);break;case 4:if(Wn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-jt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*cA(r/1960))-r,10<r){t.timeoutHandle=Sh(Nr.bind(null,t,ut,pn),r);break}Nr(t,ut,pn);break;case 5:Nr(t,ut,pn);break;default:throw Error(M(329))}}}return pt(t,Ae()),t.callbackNode===n?hw.bind(null,t):null}function Wh(t,e){var n=no;return t.current.memoizedState.isDehydrated&&(br(t,e).flags|=256),t=Vl(t,e),t!==2&&(e=ut,ut=n,e!==null&&qh(e)),t}function qh(t){ut===null?ut=t:ut.push.apply(ut,t)}function hA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!zt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Wn(t,e){for(e&=~of,e&=~cu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-jt(e),r=1<<n;t[n]=-1,e&=~r}}function Ag(t){if(re&6)throw Error(M(327));Li();var e=gl(t,0);if(!(e&1))return pt(t,Ae()),null;var n=Vl(t,e);if(t.tag!==0&&n===2){var r=gh(t);r!==0&&(e=r,n=Wh(t,r))}if(n===1)throw n=Po,br(t,0),Wn(t,e),pt(t,Ae()),n;if(n===6)throw Error(M(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Nr(t,ut,pn),pt(t,Ae()),null}function lf(t,e){var n=re;re|=1;try{return t(e)}finally{re=n,re===0&&(Ki=Ae()+500,ou&&_r())}}function Wr(t){Yn!==null&&Yn.tag===0&&!(re&6)&&Li();var e=re;re|=1;var n=Nt.transition,r=oe;try{if(Nt.transition=null,oe=1,t)return t()}finally{oe=r,Nt.transition=n,re=e,!(re&6)&&_r()}}function uf(){yt=Ci.current,pe(Ci)}function br(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,BS(n)),Ce!==null)for(n=Ce.return;n!==null;){var r=n;switch(zd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&El();break;case 3:qi(),pe(dt),pe(et),Xd();break;case 5:Yd(r);break;case 4:qi();break;case 13:pe(ye);break;case 19:pe(ye);break;case 10:Hd(r.type._context);break;case 22:case 23:uf()}n=n.return}if(Me=t,Ce=t=or(t.current,null),Be=yt=e,xe=0,Po=null,of=cu=$r=0,ut=no=null,Or!==null){for(e=0;e<Or.length;e++)if(n=Or[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Or=null}return t}function dw(t,e){do{var n=Ce;try{if(qd(),Xa.current=Nl,kl){for(var r=_e.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}kl=!1}if(zr=0,Le=De=_e=null,eo=!1,So=0,sf.current=null,n===null||n.return===null){xe=1,Po=e,Ce=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Be,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var E=dg(o);if(E!==null){E.flags&=-257,fg(E,o,l,s,e),E.mode&1&&hg(s,c,e),e=E,u=c;var P=e.updateQueue;if(P===null){var N=new Set;N.add(u),e.updateQueue=N}else P.add(u);break e}else{if(!(e&1)){hg(s,c,e),cf();break e}u=Error(M(426))}}else if(me&&l.mode&1){var D=dg(o);if(D!==null){!(D.flags&65536)&&(D.flags|=256),fg(D,o,l,s,e),$d(Hi(u,l));break e}}s=u=Hi(u,l),xe!==4&&(xe=2),no===null?no=[s]:no.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var T=Qv(s,u,e);sg(s,T);break e;case 1:l=u;var _=s.type,A=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(ir===null||!ir.has(A)))){s.flags|=65536,e&=-e,s.lanes|=e;var O=Yv(s,l,e);sg(s,O);break e}}s=s.return}while(s!==null)}mw(n)}catch(F){e=F,Ce===n&&n!==null&&(Ce=n=n.return);continue}break}while(!0)}function fw(){var t=Dl.current;return Dl.current=Nl,t===null?Nl:t}function cf(){(xe===0||xe===3||xe===2)&&(xe=4),Me===null||!($r&268435455)&&!(cu&268435455)||Wn(Me,Be)}function Vl(t,e){var n=re;re|=2;var r=fw();(Me!==t||Be!==e)&&(pn=null,br(t,e));do try{dA();break}catch(i){dw(t,i)}while(!0);if(qd(),re=n,Dl.current=r,Ce!==null)throw Error(M(261));return Me=null,Be=0,xe}function dA(){for(;Ce!==null;)pw(Ce)}function fA(){for(;Ce!==null&&!FI();)pw(Ce)}function pw(t){var e=yw(t.alternate,t,yt);t.memoizedProps=t.pendingProps,e===null?mw(t):Ce=e,sf.current=null}function mw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=oA(n,e),n!==null){n.flags&=32767,Ce=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{xe=6,Ce=null;return}}else if(n=sA(n,e,yt),n!==null){Ce=n;return}if(e=e.sibling,e!==null){Ce=e;return}Ce=e=t}while(e!==null);xe===0&&(xe=5)}function Nr(t,e,n){var r=oe,i=Nt.transition;try{Nt.transition=null,oe=1,pA(t,e,n,r)}finally{Nt.transition=i,oe=r}return null}function pA(t,e,n,r){do Li();while(Yn!==null);if(re&6)throw Error(M(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(M(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(GI(t,s),t===Me&&(Ce=Me=null,Be=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||La||(La=!0,_w(ml,function(){return Li(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Nt.transition,Nt.transition=null;var o=oe;oe=1;var l=re;re|=4,sf.current=null,lA(t,n),uw(n,t),VS(Th),yl=!!Eh,Th=Eh=null,t.current=n,uA(n),UI(),re=l,oe=o,Nt.transition=s}else t.current=n;if(La&&(La=!1,Yn=t,Ol=i),s=t.pendingLanes,s===0&&(ir=null),zI(n.stateNode),pt(t,Ae()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(xl)throw xl=!1,t=zh,zh=null,t;return Ol&1&&t.tag!==0&&Li(),s=t.pendingLanes,s&1?t===$h?ro++:(ro=0,$h=t):ro=0,_r(),null}function Li(){if(Yn!==null){var t=Q_(Ol),e=Nt.transition,n=oe;try{if(Nt.transition=null,oe=16>t?16:t,Yn===null)var r=!1;else{if(t=Yn,Yn=null,Ol=0,re&6)throw Error(M(331));var i=re;for(re|=4,$=t.current;$!==null;){var s=$,o=s.child;if($.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for($=c;$!==null;){var f=$;switch(f.tag){case 0:case 11:case 15:to(8,f,s)}var p=f.child;if(p!==null)p.return=f,$=p;else for(;$!==null;){f=$;var m=f.sibling,E=f.return;if(ow(f),f===c){$=null;break}if(m!==null){m.return=E,$=m;break}$=E}}}var P=s.alternate;if(P!==null){var N=P.child;if(N!==null){P.child=null;do{var D=N.sibling;N.sibling=null,N=D}while(N!==null)}}$=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,$=o;else e:for(;$!==null;){if(s=$,s.flags&2048)switch(s.tag){case 0:case 11:case 15:to(9,s,s.return)}var T=s.sibling;if(T!==null){T.return=s.return,$=T;break e}$=s.return}}var _=t.current;for($=_;$!==null;){o=$;var A=o.child;if(o.subtreeFlags&2064&&A!==null)A.return=o,$=A;else e:for(o=_;$!==null;){if(l=$,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:uu(9,l)}}catch(F){Te(l,l.return,F)}if(l===o){$=null;break e}var O=l.sibling;if(O!==null){O.return=l.return,$=O;break e}$=l.return}}if(re=i,_r(),Jt&&typeof Jt.onPostCommitFiberRoot=="function")try{Jt.onPostCommitFiberRoot(tu,t)}catch{}r=!0}return r}finally{oe=n,Nt.transition=e}}return!1}function Rg(t,e,n){e=Hi(n,e),e=Qv(t,e,1),t=rr(t,e,1),e=st(),t!==null&&(jo(t,1,e),pt(t,e))}function Te(t,e,n){if(t.tag===3)Rg(t,t,n);else for(;e!==null;){if(e.tag===3){Rg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ir===null||!ir.has(r))){t=Hi(n,t),t=Yv(e,t,1),e=rr(e,t,1),t=st(),e!==null&&(jo(e,1,t),pt(e,t));break}}e=e.return}}function mA(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=st(),t.pingedLanes|=t.suspendedLanes&n,Me===t&&(Be&n)===n&&(xe===4||xe===3&&(Be&130023424)===Be&&500>Ae()-af?br(t,0):of|=n),pt(t,e)}function gw(t,e){e===0&&(t.mode&1?(e=Aa,Aa<<=1,!(Aa&130023424)&&(Aa=4194304)):e=1);var n=st();t=Rn(t,e),t!==null&&(jo(t,e,n),pt(t,n))}function gA(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),gw(t,n)}function yA(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(M(314))}r!==null&&r.delete(e),gw(t,n)}var yw;yw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||dt.current)ht=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ht=!1,iA(t,e,n);ht=!!(t.flags&131072)}else ht=!1,me&&e.flags&1048576&&Ev(e,Sl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Za(t,e),t=e.pendingProps;var i=zi(e,et.current);Vi(e,n),i=Zd(null,e,r,t,i,n);var s=ef();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ft(r)?(s=!0,Tl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Gd(e),i.updater=lu,e.stateNode=i,i._reactInternals=e,Dh(e,r,t,n),e=Vh(null,e,r,!0,s,n)):(e.tag=0,me&&s&&Bd(e),it(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Za(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=vA(r),t=bt(r,t),i){case 0:e=Oh(null,e,r,t,n);break e;case 1:e=gg(null,e,r,t,n);break e;case 11:e=pg(null,e,r,t,n);break e;case 14:e=mg(null,e,r,bt(r.type,t),n);break e}throw Error(M(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bt(r,i),Oh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bt(r,i),gg(t,e,r,i,n);case 3:e:{if(ew(e),t===null)throw Error(M(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Pv(t,e),Pl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Hi(Error(M(423)),e),e=yg(t,e,r,n,i);break e}else if(r!==i){i=Hi(Error(M(424)),e),e=yg(t,e,r,n,i);break e}else for(_t=nr(e.stateNode.containerInfo.firstChild),wt=e,me=!0,Ut=null,n=Av(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($i(),r===i){e=Pn(t,e,n);break e}it(t,e,r,n)}e=e.child}return e;case 5:return Cv(e),t===null&&Ch(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Ih(r,i)?o=null:s!==null&&Ih(r,s)&&(e.flags|=32),Zv(t,e),it(t,e,o,n),e.child;case 6:return t===null&&Ch(e),null;case 13:return tw(t,e,n);case 4:return Qd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Wi(e,null,r,n):it(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bt(r,i),pg(t,e,r,i,n);case 7:return it(t,e,e.pendingProps,n),e.child;case 8:return it(t,e,e.pendingProps.children,n),e.child;case 12:return it(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ce(Al,r._currentValue),r._currentValue=o,s!==null)if(zt(s.value,o)){if(s.children===i.children&&!dt.current){e=Pn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=En(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),kh(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(M(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),kh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}it(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Vi(e,n),i=Ot(i),r=r(i),e.flags|=1,it(t,e,r,n),e.child;case 14:return r=e.type,i=bt(r,e.pendingProps),i=bt(r.type,i),mg(t,e,r,i,n);case 15:return Xv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bt(r,i),Za(t,e),e.tag=1,ft(r)?(t=!0,Tl(e)):t=!1,Vi(e,n),Gv(e,r,i),Dh(e,r,i,n),Vh(null,e,r,!0,t,n);case 19:return nw(t,e,n);case 22:return Jv(t,e,n)}throw Error(M(156,e.tag))};function _w(t,e){return q_(t,e)}function _A(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kt(t,e,n,r){return new _A(t,e,n,r)}function hf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function vA(t){if(typeof t=="function")return hf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===kd)return 11;if(t===Nd)return 14}return 2}function or(t,e){var n=t.alternate;return n===null?(n=kt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function nl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")hf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case _i:return Fr(n.children,i,s,e);case Cd:o=8,i|=8;break;case th:return t=kt(12,n,e,i|2),t.elementType=th,t.lanes=s,t;case nh:return t=kt(13,n,e,i),t.elementType=nh,t.lanes=s,t;case rh:return t=kt(19,n,e,i),t.elementType=rh,t.lanes=s,t;case C_:return hu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case R_:o=10;break e;case P_:o=9;break e;case kd:o=11;break e;case Nd:o=14;break e;case jn:o=16,r=null;break e}throw Error(M(130,t==null?t:typeof t,""))}return e=kt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Fr(t,e,n,r){return t=kt(7,t,r,e),t.lanes=n,t}function hu(t,e,n,r){return t=kt(22,t,r,e),t.elementType=C_,t.lanes=n,t.stateNode={isHidden:!1},t}function Vc(t,e,n){return t=kt(6,t,null,e),t.lanes=n,t}function Lc(t,e,n){return e=kt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function wA(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mc(0),this.expirationTimes=mc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function df(t,e,n,r,i,s,o,l,u){return t=new wA(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=kt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gd(s),t}function EA(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:yi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function vw(t){if(!t)return dr;t=t._reactInternals;e:{if(ei(t)!==t||t.tag!==1)throw Error(M(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ft(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(M(171))}if(t.tag===1){var n=t.type;if(ft(n))return vv(t,n,e)}return e}function ww(t,e,n,r,i,s,o,l,u){return t=df(n,r,!0,t,i,s,o,l,u),t.context=vw(null),n=t.current,r=st(),i=sr(n),s=En(r,i),s.callback=e??null,rr(n,s,i),t.current.lanes=i,jo(t,i,r),pt(t,r),t}function du(t,e,n,r){var i=e.current,s=st(),o=sr(i);return n=vw(n),e.context===null?e.context=n:e.pendingContext=n,e=En(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=rr(i,e,o),t!==null&&(Bt(t,i,o,s),Ya(t,i,o)),o}function Ll(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Pg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ff(t,e){Pg(t,e),(t=t.alternate)&&Pg(t,e)}function TA(){return null}var Ew=typeof reportError=="function"?reportError:function(t){console.error(t)};function pf(t){this._internalRoot=t}fu.prototype.render=pf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(M(409));du(t,e,null,null)};fu.prototype.unmount=pf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Wr(function(){du(null,t,null,null)}),e[An]=null}};function fu(t){this._internalRoot=t}fu.prototype.unstable_scheduleHydration=function(t){if(t){var e=J_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<$n.length&&e!==0&&e<$n[n].priority;n++);$n.splice(n,0,t),n===0&&ev(t)}};function mf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function pu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Cg(){}function IA(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Ll(o);s.call(c)}}var o=ww(e,r,t,0,null,!1,!1,"",Cg);return t._reactRootContainer=o,t[An]=o.current,vo(t.nodeType===8?t.parentNode:t),Wr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=Ll(u);l.call(c)}}var u=df(t,0,!1,null,null,!1,!1,"",Cg);return t._reactRootContainer=u,t[An]=u.current,vo(t.nodeType===8?t.parentNode:t),Wr(function(){du(e,u,n,r)}),u}function mu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Ll(o);l.call(u)}}du(e,o,t,i)}else o=IA(n,e,t,i,r);return Ll(o)}Y_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Bs(e.pendingLanes);n!==0&&(Od(e,n|1),pt(e,Ae()),!(re&6)&&(Ki=Ae()+500,_r()))}break;case 13:Wr(function(){var r=Rn(t,1);if(r!==null){var i=st();Bt(r,t,1,i)}}),ff(t,1)}};Vd=function(t){if(t.tag===13){var e=Rn(t,134217728);if(e!==null){var n=st();Bt(e,t,134217728,n)}ff(t,134217728)}};X_=function(t){if(t.tag===13){var e=sr(t),n=Rn(t,e);if(n!==null){var r=st();Bt(n,t,e,r)}ff(t,e)}};J_=function(){return oe};Z_=function(t,e){var n=oe;try{return oe=t,e()}finally{oe=n}};fh=function(t,e,n){switch(e){case"input":if(oh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=su(r);if(!i)throw Error(M(90));N_(r),oh(r,i)}}}break;case"textarea":x_(t,n);break;case"select":e=n.value,e!=null&&Ni(t,!!n.multiple,e,!1)}};U_=lf;j_=Wr;var SA={usingClientEntryPoint:!1,Events:[zo,Ti,su,b_,F_,lf]},bs={findFiberByHostInstance:xr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},AA={bundleType:bs.bundleType,version:bs.version,rendererPackageName:bs.rendererPackageName,rendererConfig:bs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=$_(t),t===null?null:t.stateNode},findFiberByHostInstance:bs.findFiberByHostInstance||TA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ma=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ma.isDisabled&&Ma.supportsFiber)try{tu=Ma.inject(AA),Jt=Ma}catch{}}It.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=SA;It.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!mf(e))throw Error(M(200));return EA(t,e,null,n)};It.createRoot=function(t,e){if(!mf(t))throw Error(M(299));var n=!1,r="",i=Ew;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=df(t,1,!1,null,null,n,!1,r,i),t[An]=e.current,vo(t.nodeType===8?t.parentNode:t),new pf(e)};It.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(M(188)):(t=Object.keys(t).join(","),Error(M(268,t)));return t=$_(e),t=t===null?null:t.stateNode,t};It.flushSync=function(t){return Wr(t)};It.hydrate=function(t,e,n){if(!pu(e))throw Error(M(200));return mu(null,t,e,!0,n)};It.hydrateRoot=function(t,e,n){if(!mf(t))throw Error(M(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Ew;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=ww(e,null,t,1,n??null,i,!1,s,o),t[An]=e.current,vo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new fu(e)};It.render=function(t,e,n){if(!pu(e))throw Error(M(200));return mu(null,t,e,!1,n)};It.unmountComponentAtNode=function(t){if(!pu(t))throw Error(M(40));return t._reactRootContainer?(Wr(function(){mu(null,null,t,!1,function(){t._reactRootContainer=null,t[An]=null})}),!0):!1};It.unstable_batchedUpdates=lf;It.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!pu(n))throw Error(M(200));if(t==null||t._reactInternals===void 0)throw Error(M(38));return mu(t,e,n,!1,r)};It.version="18.3.1-next-f1338f8080-20240426";function Tw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Tw)}catch(t){console.error(t)}}Tw(),T_.exports=It;var RA=T_.exports,kg=RA;Zc.createRoot=kg.createRoot,Zc.hydrateRoot=kg.hydrateRoot;const PA="modulepreload",CA=function(t){return"/"+t},Ng={},On=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(n.map(u=>{if(u=CA(u),u in Ng)return;Ng[u]=!0;const c=u.endsWith(".css"),f=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${f}`))return;const p=document.createElement("link");if(p.rel=c?"stylesheet":PA,c||(p.as="script"),p.crossOrigin="",p.href=u,l&&p.setAttribute("nonce",l),document.head.appendChild(p),c)return new Promise((m,E)=>{p.addEventListener("load",m),p.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return i.then(o=>{for(const l of o||[])l.status==="rejected"&&s(l.reason);return e().catch(s)})};/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Co(){return Co=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Co.apply(this,arguments)}var Xn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Xn||(Xn={}));const Dg="popstate";function kA(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return Hh("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ml(i)}return DA(e,n,null,t)}function Re(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function gf(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function NA(){return Math.random().toString(36).substr(2,8)}function xg(t,e){return{usr:t.state,key:t.key,idx:e}}function Hh(t,e,n,r){return n===void 0&&(n=null),Co({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?os(e):e,{state:n,key:e&&e.key||r||NA()})}function Ml(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function os(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function DA(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=Xn.Pop,u=null,c=f();c==null&&(c=0,o.replaceState(Co({},o.state,{idx:c}),""));function f(){return(o.state||{idx:null}).idx}function p(){l=Xn.Pop;let D=f(),T=D==null?null:D-c;c=D,u&&u({action:l,location:N.location,delta:T})}function m(D,T){l=Xn.Push;let _=Hh(N.location,D,T);c=f()+1;let A=xg(_,c),O=N.createHref(_);try{o.pushState(A,"",O)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;i.location.assign(O)}s&&u&&u({action:l,location:N.location,delta:1})}function E(D,T){l=Xn.Replace;let _=Hh(N.location,D,T);c=f();let A=xg(_,c),O=N.createHref(_);o.replaceState(A,"",O),s&&u&&u({action:l,location:N.location,delta:0})}function P(D){let T=i.location.origin!=="null"?i.location.origin:i.location.href,_=typeof D=="string"?D:Ml(D);return _=_.replace(/ $/,"%20"),Re(T,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,T)}let N={get action(){return l},get location(){return t(i,o)},listen(D){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Dg,p),u=D,()=>{i.removeEventListener(Dg,p),u=null}},createHref(D){return e(i,D)},createURL:P,encodeLocation(D){let T=P(D);return{pathname:T.pathname,search:T.search,hash:T.hash}},push:m,replace:E,go(D){return o.go(D)}};return N}var Og;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Og||(Og={}));function xA(t,e,n){return n===void 0&&(n="/"),OA(t,e,n)}function OA(t,e,n,r){let i=typeof e=="string"?os(e):e,s=yf(i.pathname||"/",n);if(s==null)return null;let o=Iw(t);VA(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=HA(s);l=$A(o[u],c)}return l}function Iw(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Re(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=ar([r,u.relativePath]),f=n.concat(u);s.children&&s.children.length>0&&(Re(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Iw(s.children,e,f,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:BA(c,s.index),routesMeta:f})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of Sw(s.path))i(s,o,u)}),e}function Sw(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Sw(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function VA(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:zA(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const LA=/^:[\w-]+$/,MA=3,bA=2,FA=1,UA=10,jA=-2,Vg=t=>t==="*";function BA(t,e){let n=t.split("/"),r=n.length;return n.some(Vg)&&(r+=jA),e&&(r+=bA),n.filter(i=>!Vg(i)).reduce((i,s)=>i+(LA.test(s)?MA:s===""?FA:UA),r)}function zA(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function $A(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,f=s==="/"?e:e.slice(s.length)||"/",p=WA({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},f),m=u.route;if(!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:ar([s,p.pathname]),pathnameBase:XA(ar([s,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(s=ar([s,p.pathnameBase]))}return o}function WA(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=qA(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,f,p)=>{let{paramName:m,isOptional:E}=f;if(m==="*"){let N=l[p]||"";o=s.slice(0,s.length-N.length).replace(/(.)\/+$/,"$1")}const P=l[p];return E&&!P?c[m]=void 0:c[m]=(P||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function qA(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),gf(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function HA(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return gf(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function yf(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const KA=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,GA=t=>KA.test(t);function QA(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?os(t):t,s;if(n)if(GA(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),gf(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=Lg(n.substring(1),"/"):s=Lg(n,e)}else s=e;return{pathname:s,search:JA(r),hash:ZA(i)}}function Lg(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Mc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function YA(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function _f(t,e){let n=YA(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function vf(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=os(t):(i=Co({},t),Re(!i.pathname||!i.pathname.includes("?"),Mc("?","pathname","search",i)),Re(!i.pathname||!i.pathname.includes("#"),Mc("#","pathname","hash",i)),Re(!i.search||!i.search.includes("#"),Mc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}l=p>=0?e[p]:"/"}let u=QA(i,l),c=o&&o!=="/"&&o.endsWith("/"),f=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||f)&&(u.pathname+="/"),u}const ar=t=>t.join("/").replace(/\/\/+/g,"/"),XA=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),JA=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,ZA=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function eR(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Aw=["post","put","patch","delete"];new Set(Aw);const tR=["get",...Aw];new Set(tR);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ko(){return ko=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ko.apply(this,arguments)}const wf=b.createContext(null),nR=b.createContext(null),vr=b.createContext(null),gu=b.createContext(null),Vn=b.createContext({outlet:null,matches:[],isDataRoute:!1}),Rw=b.createContext(null);function rR(t,e){let{relative:n}=e===void 0?{}:e;as()||Re(!1);let{basename:r,navigator:i}=b.useContext(vr),{hash:s,pathname:o,search:l}=Cw(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:ar([r,o])),i.createHref({pathname:u,search:l,hash:s})}function as(){return b.useContext(gu)!=null}function ls(){return as()||Re(!1),b.useContext(gu).location}function Pw(t){b.useContext(vr).static||b.useLayoutEffect(t)}function Ef(){let{isDataRoute:t}=b.useContext(Vn);return t?gR():iR()}function iR(){as()||Re(!1);let t=b.useContext(wf),{basename:e,future:n,navigator:r}=b.useContext(vr),{matches:i}=b.useContext(Vn),{pathname:s}=ls(),o=JSON.stringify(_f(i,n.v7_relativeSplatPath)),l=b.useRef(!1);return Pw(()=>{l.current=!0}),b.useCallback(function(c,f){if(f===void 0&&(f={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let p=vf(c,JSON.parse(o),s,f.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:ar([e,p.pathname])),(f.replace?r.replace:r.push)(p,f.state,f)},[e,r,o,s,t])}function pV(){let{matches:t}=b.useContext(Vn),e=t[t.length-1];return e?e.params:{}}function Cw(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=b.useContext(vr),{matches:i}=b.useContext(Vn),{pathname:s}=ls(),o=JSON.stringify(_f(i,r.v7_relativeSplatPath));return b.useMemo(()=>vf(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function sR(t,e){return oR(t,e)}function oR(t,e,n,r){as()||Re(!1);let{navigator:i}=b.useContext(vr),{matches:s}=b.useContext(Vn),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=ls(),f;if(e){var p;let D=typeof e=="string"?os(e):e;u==="/"||(p=D.pathname)!=null&&p.startsWith(u)||Re(!1),f=D}else f=c;let m=f.pathname||"/",E=m;if(u!=="/"){let D=u.replace(/^\//,"").split("/");E="/"+m.replace(/^\//,"").split("/").slice(D.length).join("/")}let P=xA(t,{pathname:E}),N=hR(P&&P.map(D=>Object.assign({},D,{params:Object.assign({},l,D.params),pathname:ar([u,i.encodeLocation?i.encodeLocation(D.pathname).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?u:ar([u,i.encodeLocation?i.encodeLocation(D.pathnameBase).pathname:D.pathnameBase])})),s,n,r);return e&&N?b.createElement(gu.Provider,{value:{location:ko({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Xn.Pop}},N):N}function aR(){let t=mR(),e=eR(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},e),n?b.createElement("pre",{style:i},n):null,null)}const lR=b.createElement(aR,null);class uR extends b.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?b.createElement(Vn.Provider,{value:this.props.routeContext},b.createElement(Rw.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function cR(t){let{routeContext:e,match:n,children:r}=t,i=b.useContext(wf);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(Vn.Provider,{value:e},r)}function hR(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let f=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);f>=0||Re(!1),o=o.slice(0,Math.min(o.length,f+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<o.length;f++){let p=o[f];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=f),p.route.id){let{loaderData:m,errors:E}=n,P=p.route.loader&&m[p.route.id]===void 0&&(!E||E[p.route.id]===void 0);if(p.route.lazy||P){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((f,p,m)=>{let E,P=!1,N=null,D=null;n&&(E=l&&p.route.id?l[p.route.id]:void 0,N=p.route.errorElement||lR,u&&(c<0&&m===0?(yR("route-fallback"),P=!0,D=null):c===m&&(P=!0,D=p.route.hydrateFallbackElement||null)));let T=e.concat(o.slice(0,m+1)),_=()=>{let A;return E?A=N:P?A=D:p.route.Component?A=b.createElement(p.route.Component,null):p.route.element?A=p.route.element:A=f,b.createElement(cR,{match:p,routeContext:{outlet:f,matches:T,isDataRoute:n!=null},children:A})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?b.createElement(uR,{location:n.location,revalidation:n.revalidation,component:N,error:E,children:_(),routeContext:{outlet:null,matches:T,isDataRoute:!0}}):_()},null)}var kw=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(kw||{}),Nw=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Nw||{});function dR(t){let e=b.useContext(wf);return e||Re(!1),e}function fR(t){let e=b.useContext(nR);return e||Re(!1),e}function pR(t){let e=b.useContext(Vn);return e||Re(!1),e}function Dw(t){let e=pR(),n=e.matches[e.matches.length-1];return n.route.id||Re(!1),n.route.id}function mR(){var t;let e=b.useContext(Rw),n=fR(),r=Dw();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function gR(){let{router:t}=dR(kw.UseNavigateStable),e=Dw(Nw.UseNavigateStable),n=b.useRef(!1);return Pw(()=>{n.current=!0}),b.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,ko({fromRouteId:e},s)))},[t,e])}const Mg={};function yR(t,e,n){Mg[t]||(Mg[t]=!0)}function _R(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Mi(t){let{to:e,replace:n,state:r,relative:i}=t;as()||Re(!1);let{future:s,static:o}=b.useContext(vr),{matches:l}=b.useContext(Vn),{pathname:u}=ls(),c=Ef(),f=vf(e,_f(l,s.v7_relativeSplatPath),u,i==="path"),p=JSON.stringify(f);return b.useEffect(()=>c(JSON.parse(p),{replace:n,state:r,relative:i}),[c,p,i,n,r]),null}function Rt(t){Re(!1)}function vR(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Xn.Pop,navigator:s,static:o=!1,future:l}=t;as()&&Re(!1);let u=e.replace(/^\/*/,"/"),c=b.useMemo(()=>({basename:u,navigator:s,static:o,future:ko({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=os(r));let{pathname:f="/",search:p="",hash:m="",state:E=null,key:P="default"}=r,N=b.useMemo(()=>{let D=yf(f,u);return D==null?null:{location:{pathname:D,search:p,hash:m,state:E,key:P},navigationType:i}},[u,f,p,m,E,P,i]);return N==null?null:b.createElement(vr.Provider,{value:c},b.createElement(gu.Provider,{children:n,value:N}))}function wR(t){let{children:e,location:n}=t;return sR(Kh(e),n)}new Promise(()=>{});function Kh(t,e){e===void 0&&(e=[]);let n=[];return b.Children.forEach(t,(r,i)=>{if(!b.isValidElement(r))return;let s=[...e,i];if(r.type===b.Fragment){n.push.apply(n,Kh(r.props.children,s));return}r.type!==Rt&&Re(!1),!r.props.index||!r.props.children||Re(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Kh(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Gh(){return Gh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Gh.apply(this,arguments)}function ER(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function TR(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function IR(t,e){return t.button===0&&(!e||e==="_self")&&!TR(t)}const SR=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],AR="6";try{window.__reactRouterVersion=AR}catch{}const RR="startTransition",bg=mI[RR];function PR(t){let{basename:e,children:n,future:r,window:i}=t,s=b.useRef();s.current==null&&(s.current=kA({window:i,v5Compat:!0}));let o=s.current,[l,u]=b.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},f=b.useCallback(p=>{c&&bg?bg(()=>u(p)):u(p)},[u,c]);return b.useLayoutEffect(()=>o.listen(f),[o,f]),b.useEffect(()=>_R(r),[r]),b.createElement(vR,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const CR=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",kR=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ba=b.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:c,preventScrollReset:f,viewTransition:p}=e,m=ER(e,SR),{basename:E}=b.useContext(vr),P,N=!1;if(typeof c=="string"&&kR.test(c)&&(P=c,CR))try{let A=new URL(window.location.href),O=c.startsWith("//")?new URL(A.protocol+c):new URL(c),F=yf(O.pathname,E);O.origin===A.origin&&F!=null?c=F+O.search+O.hash:N=!0}catch{}let D=rR(c,{relative:i}),T=NR(c,{replace:o,state:l,target:u,preventScrollReset:f,relative:i,viewTransition:p});function _(A){r&&r(A),A.defaultPrevented||T(A)}return b.createElement("a",Gh({},m,{href:P||D,onClick:N||s?r:_,ref:n,target:u}))});var Fg;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Fg||(Fg={}));var Ug;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Ug||(Ug={}));function NR(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=e===void 0?{}:e,u=Ef(),c=ls(),f=Cw(t,{relative:o});return b.useCallback(p=>{if(IR(p,n)){p.preventDefault();let m=r!==void 0?r:Ml(c)===Ml(f);u(t,{replace:m,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[c,u,f,r,i,n,t,s,o,l])}var jg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},DR=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Ow={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,f=s>>2,p=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,E=c&63;u||(E=64,o||(m=64)),r.push(n[f],n[p],n[m],n[E])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(xw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):DR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||p==null)throw new xR;const m=s<<2|l>>4;if(r.push(m),c!==64){const E=l<<4&240|c>>2;if(r.push(E),p!==64){const P=c<<6&192|p;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class xR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const OR=function(t){const e=xw(t);return Ow.encodeByteArray(e,!0)},bl=function(t){return OR(t).replace(/\./g,"")},Vw=function(t){try{return Ow.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LR=()=>VR().__FIREBASE_DEFAULTS__,MR=()=>{if(typeof process>"u"||typeof jg>"u")return;const t=jg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},bR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Vw(t[1]);return e&&JSON.parse(e)},yu=()=>{try{return LR()||MR()||bR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Lw=t=>{var e,n;return(n=(e=yu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},FR=t=>{const e=Lw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Mw=()=>{var t;return(t=yu())===null||t===void 0?void 0:t.config},bw=t=>{var e;return(e=yu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jR(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[bl(JSON.stringify(n)),bl(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function BR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(tt())}function zR(){var t;const e=(t=yu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function $R(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Fw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function WR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qR(){const t=tt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function HR(){return!zR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Uw(){try{return typeof indexedDB=="object"}catch{return!1}}function jw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function KR(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GR="FirebaseError";class Kt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=GR,Object.setPrototypeOf(this,Kt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ti.prototype.create)}}class ti{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?QR(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Kt(i,l,r)}}function QR(t,e){return t.replace(YR,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const YR=/\{\$([^}]+)}/g;function XR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function qr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Bg(s)&&Bg(o)){if(!qr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Bg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function $s(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ws(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function JR(t,e){const n=new ZR(t,e);return n.subscribe.bind(n)}class ZR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");eP(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=bc),i.error===void 0&&(i.error=bc),i.complete===void 0&&(i.complete=bc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function eP(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function bc(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tP=1e3,nP=2,rP=4*60*60*1e3,iP=.5;function zg(t,e=tP,n=nP){const r=e*Math.pow(n,t),i=Math.round(iP*r*(Math.random()-.5)*2);return Math.min(rP,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(t){return t&&t._delegate?t._delegate:t}class $t{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sP{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new UR;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(aP(e))try{this.getOrInitializeService({instanceIdentifier:Dr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Dr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Dr){return this.instances.has(e)}getOptions(e=Dr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:oP(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Dr){return this.component?this.component.multipleInstances?e:Dr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function oP(t){return t===Dr?void 0:t}function aP(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lP{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new sP(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const uP={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},cP=te.INFO,hP={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},dP=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=hP[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _u{constructor(e){this.name=e,this._logLevel=cP,this._logHandler=dP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?uP[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const fP=(t,e)=>e.some(n=>t instanceof n);let $g,Wg;function pP(){return $g||($g=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function mP(){return Wg||(Wg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Bw=new WeakMap,Qh=new WeakMap,zw=new WeakMap,Fc=new WeakMap,Tf=new WeakMap;function gP(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(lr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Bw.set(n,t)}).catch(()=>{}),Tf.set(e,t),e}function yP(t){if(Qh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Qh.set(t,e)}let Yh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Qh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||zw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return lr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function _P(t){Yh=t(Yh)}function vP(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Uc(this),e,...n);return zw.set(r,e.sort?e.sort():[e]),lr(r)}:mP().includes(t)?function(...e){return t.apply(Uc(this),e),lr(Bw.get(this))}:function(...e){return lr(t.apply(Uc(this),e))}}function wP(t){return typeof t=="function"?vP(t):(t instanceof IDBTransaction&&yP(t),fP(t,pP())?new Proxy(t,Yh):t)}function lr(t){if(t instanceof IDBRequest)return gP(t);if(Fc.has(t))return Fc.get(t);const e=wP(t);return e!==t&&(Fc.set(t,e),Tf.set(e,t)),e}const Uc=t=>Tf.get(t);function $w(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=lr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(lr(o.result),u.oldVersion,u.newVersion,lr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const EP=["get","getKey","getAll","getAllKeys","count"],TP=["put","add","delete","clear"],jc=new Map;function qg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(jc.get(e))return jc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=TP.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||EP.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return jc.set(e,s),s}_P(t=>({...t,get:(e,n,r)=>qg(e,n)||t.get(e,n,r),has:(e,n)=>!!qg(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(SP(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function SP(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Xh="@firebase/app",Hg="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn=new _u("@firebase/app"),AP="@firebase/app-compat",RP="@firebase/analytics-compat",PP="@firebase/analytics",CP="@firebase/app-check-compat",kP="@firebase/app-check",NP="@firebase/auth",DP="@firebase/auth-compat",xP="@firebase/database",OP="@firebase/data-connect",VP="@firebase/database-compat",LP="@firebase/functions",MP="@firebase/functions-compat",bP="@firebase/installations",FP="@firebase/installations-compat",UP="@firebase/messaging",jP="@firebase/messaging-compat",BP="@firebase/performance",zP="@firebase/performance-compat",$P="@firebase/remote-config",WP="@firebase/remote-config-compat",qP="@firebase/storage",HP="@firebase/storage-compat",KP="@firebase/firestore",GP="@firebase/vertexai-preview",QP="@firebase/firestore-compat",YP="firebase",XP="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh="[DEFAULT]",JP={[Xh]:"fire-core",[AP]:"fire-core-compat",[PP]:"fire-analytics",[RP]:"fire-analytics-compat",[kP]:"fire-app-check",[CP]:"fire-app-check-compat",[NP]:"fire-auth",[DP]:"fire-auth-compat",[xP]:"fire-rtdb",[OP]:"fire-data-connect",[VP]:"fire-rtdb-compat",[LP]:"fire-fn",[MP]:"fire-fn-compat",[bP]:"fire-iid",[FP]:"fire-iid-compat",[UP]:"fire-fcm",[jP]:"fire-fcm-compat",[BP]:"fire-perf",[zP]:"fire-perf-compat",[$P]:"fire-rc",[WP]:"fire-rc-compat",[qP]:"fire-gcs",[HP]:"fire-gcs-compat",[KP]:"fire-fst",[QP]:"fire-fst-compat",[GP]:"fire-vertex","fire-js":"fire-js",[YP]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl=new Map,ZP=new Map,Zh=new Map;function Kg(t,e){try{t.container.addComponent(e)}catch(n){Cn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function sn(t){const e=t.name;if(Zh.has(e))return Cn.debug(`There were multiple attempts to register component ${e}.`),!1;Zh.set(e,t);for(const n of Fl.values())Kg(n,t);for(const n of ZP.values())Kg(n,t);return!0}function ni(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Xt(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ur=new ti("app","Firebase",eC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tC{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new $t("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ur.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us=XP;function Ww(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Jh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw ur.create("bad-app-name",{appName:String(i)});if(n||(n=Mw()),!n)throw ur.create("no-options");const s=Fl.get(i);if(s){if(qr(n,s.options)&&qr(r,s.config))return s;throw ur.create("duplicate-app",{appName:i})}const o=new lP(i);for(const u of Zh.values())o.addComponent(u);const l=new tC(n,r,o);return Fl.set(i,l),l}function If(t=Jh){const e=Fl.get(t);if(!e&&t===Jh&&Mw())return Ww();if(!e)throw ur.create("no-app",{appName:t});return e}function Dt(t,e,n){var r;let i=(r=JP[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Cn.warn(l.join(" "));return}sn(new $t(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC="firebase-heartbeat-database",rC=1,No="firebase-heartbeat-store";let Bc=null;function qw(){return Bc||(Bc=$w(nC,rC,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(No)}catch(n){console.warn(n)}}}}).catch(t=>{throw ur.create("idb-open",{originalErrorMessage:t.message})})),Bc}async function iC(t){try{const n=(await qw()).transaction(No),r=await n.objectStore(No).get(Hw(t));return await n.done,r}catch(e){if(e instanceof Kt)Cn.warn(e.message);else{const n=ur.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Cn.warn(n.message)}}}async function Gg(t,e){try{const r=(await qw()).transaction(No,"readwrite");await r.objectStore(No).put(e,Hw(t)),await r.done}catch(n){if(n instanceof Kt)Cn.warn(n.message);else{const r=ur.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Cn.warn(r.message)}}}function Hw(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sC=1024,oC=30*24*60*60*1e3;class aC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new uC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Qg();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=oC}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Cn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Qg(),{heartbeatsToSend:r,unsentEntries:i}=lC(this._heartbeatsCache.heartbeats),s=bl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Cn.warn(n),""}}}function Qg(){return new Date().toISOString().substring(0,10)}function lC(t,e=sC){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Yg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Yg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class uC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Uw()?jw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await iC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Gg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Gg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Yg(t){return bl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cC(t){sn(new $t("platform-logger",e=>new IP(e),"PRIVATE")),sn(new $t("heartbeat",e=>new aC(e),"PRIVATE")),Dt(Xh,Hg,t),Dt(Xh,Hg,"esm2017"),Dt("fire-js","")}cC("");function Sf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Kw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hC=Kw,Gw=new ti("auth","Firebase",Kw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ul=new _u("@firebase/auth");function dC(t,...e){Ul.logLevel<=te.WARN&&Ul.warn(`Auth (${us}): ${t}`,...e)}function rl(t,...e){Ul.logLevel<=te.ERROR&&Ul.error(`Auth (${us}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(t,...e){throw Af(t,...e)}function en(t,...e){return Af(t,...e)}function Qw(t,e,n){const r=Object.assign(Object.assign({},hC()),{[e]:n});return new ti("auth","Firebase",r).create(e,{appName:t.name})}function Tn(t){return Qw(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Af(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Gw.create(t,...e)}function K(t,e,...n){if(!t)throw Af(e,...n)}function _n(t){const e="INTERNAL ASSERTION FAILED: "+t;throw rl(e),new Error(e)}function kn(t,e){t||_n(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ed(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function fC(){return Xg()==="http:"||Xg()==="https:"}function Xg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(fC()||Fw()||"connection"in navigator)?navigator.onLine:!0}function mC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e,n){this.shortDelay=e,this.longDelay=n,kn(n>e,"Short delay should be less than long delay!"),this.isMobile=BR()||WR()}get(){return pC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rf(t,e){kn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;_n("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;_n("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;_n("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yC=new qo(3e4,6e4);function wr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Er(t,e,n,r,i={}){return Xw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Wo(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return $R()||(c.referrerPolicy="no-referrer"),Yw.fetch()(Jw(t,t.config.apiHost,n,l),c)})}async function Xw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},gC),e);try{const i=new vC(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Fa(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Fa(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Fa(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Fa(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Qw(t,f,c);Wt(t,f)}}catch(i){if(i instanceof Kt)throw i;Wt(t,"network-request-failed",{message:String(i)})}}async function Ho(t,e,n,r,i={}){const s=await Er(t,e,n,r,i);return"mfaPendingCredential"in s&&Wt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Jw(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Rf(t.config,i):`${t.config.apiScheme}://${i}`}function _C(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class vC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(en(this.auth,"network-request-failed")),yC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Fa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=en(t,e,r);return i.customData._tokenResponse=n,i}function Jg(t){return t!==void 0&&t.enterprise!==void 0}class wC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return _C(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function EC(t,e){return Er(t,"GET","/v2/recaptchaConfig",wr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TC(t,e){return Er(t,"POST","/v1/accounts:delete",e)}async function Zw(t,e){return Er(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function io(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function IC(t,e=!1){const n=Ne(t),r=await n.getIdToken(e),i=Pf(r);K(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:io(zc(i.auth_time)),issuedAtTime:io(zc(i.iat)),expirationTime:io(zc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function zc(t){return Number(t)*1e3}function Pf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return rl("JWT malformed, contained fewer than 3 sections"),null;try{const i=Vw(n);return i?JSON.parse(i):(rl("Failed to decode base64 JWT payload"),null)}catch(i){return rl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Zg(t){const e=Pf(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Do(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Kt&&SC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function SC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=io(this.lastLoginAt),this.creationTime=io(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Do(t,Zw(n,{idToken:r}));K(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?eE(s.providerUserInfo):[],l=PC(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new td(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function RC(t){const e=Ne(t);await jl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function PC(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function eE(t){return t.map(e=>{var{providerId:n}=e,r=Sf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CC(t,e){const n=await Xw(t,{},async()=>{const r=Wo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Jw(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Yw.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function kC(t,e){return Er(t,"POST","/v2/accounts:revokeToken",wr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Zg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){K(e.length!==0,"internal-error");const n=Zg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await CC(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new bi;return r&&(K(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(K(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(K(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new bi,this.toJSON())}_performRefresh(){return _n("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class vn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Sf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new AC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new td(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Do(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return IC(this,e)}reload(){return RC(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new vn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await jl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Xt(this.auth.app))return Promise.reject(Tn(this.auth));const e=await this.getIdToken();return await Do(this,TC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,c,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,E=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,P=(o=n.photoURL)!==null&&o!==void 0?o:void 0,N=(l=n.tenantId)!==null&&l!==void 0?l:void 0,D=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,T=(c=n.createdAt)!==null&&c!==void 0?c:void 0,_=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:A,emailVerified:O,isAnonymous:F,providerData:j,stsTokenManager:w}=n;K(A&&w,e,"internal-error");const y=bi.fromJSON(this.name,w);K(typeof A=="string",e,"internal-error"),Un(p,e.name),Un(m,e.name),K(typeof O=="boolean",e,"internal-error"),K(typeof F=="boolean",e,"internal-error"),Un(E,e.name),Un(P,e.name),Un(N,e.name),Un(D,e.name),Un(T,e.name),Un(_,e.name);const v=new vn({uid:A,auth:e,email:m,emailVerified:O,displayName:p,isAnonymous:F,photoURL:P,phoneNumber:E,tenantId:N,stsTokenManager:y,createdAt:T,lastLoginAt:_});return j&&Array.isArray(j)&&(v.providerData=j.map(I=>Object.assign({},I))),D&&(v._redirectEventId=D),v}static async _fromIdTokenResponse(e,n,r=!1){const i=new bi;i.updateFromServerResponse(n);const s=new vn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await jl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];K(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?eE(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new bi;l.updateFromIdToken(r);const u=new vn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new td(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ey=new Map;function wn(t){kn(t instanceof Function,"Expected a class definition");let e=ey.get(t);return e?(kn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ey.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}tE.type="NONE";const ty=tE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function il(t,e,n){return`firebase:${t}:${e}:${n}`}class Fi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=il(this.userKey,i.apiKey,s),this.fullPersistenceKey=il("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?vn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Fi(wn(ty),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||wn(ty);const o=il(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const f=await c._get(o);if(f){const p=vn._fromJSON(e,f);c!==s&&(l=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Fi(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Fi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ny(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(sE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(nE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(aE(e))return"Blackberry";if(lE(e))return"Webos";if(rE(e))return"Safari";if((e.includes("chrome/")||iE(e))&&!e.includes("edge/"))return"Chrome";if(oE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function nE(t=tt()){return/firefox\//i.test(t)}function rE(t=tt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function iE(t=tt()){return/crios\//i.test(t)}function sE(t=tt()){return/iemobile/i.test(t)}function oE(t=tt()){return/android/i.test(t)}function aE(t=tt()){return/blackberry/i.test(t)}function lE(t=tt()){return/webos/i.test(t)}function Cf(t=tt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function NC(t=tt()){var e;return Cf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function DC(){return qR()&&document.documentMode===10}function uE(t=tt()){return Cf(t)||oE(t)||lE(t)||aE(t)||/windows phone/i.test(t)||sE(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cE(t,e=[]){let n;switch(t){case"Browser":n=ny(tt());break;case"Worker":n=`${ny(tt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${us}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OC(t,e={}){return Er(t,"GET","/v2/passwordPolicy",wr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VC=6;class LC{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:VC,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MC{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ry(this),this.idTokenSubscription=new ry(this),this.beforeStateQueue=new xC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Gw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=wn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Fi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Zw(this,{idToken:e}),r=await vn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Xt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await jl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=mC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Xt(this.app))return Promise.reject(Tn(this));const n=e?Ne(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Xt(this.app)?Promise.reject(Tn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Xt(this.app)?Promise.reject(Tn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(wn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await OC(this),n=new LC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ti("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await kC(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&wn(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await Fi.create(this,[wn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=cE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&dC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ri(t){return Ne(t)}class ry{constructor(e){this.auth=e,this.observer=null,this.addObserver=JR(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function bC(t){vu=t}function hE(t){return vu.loadJS(t)}function FC(){return vu.recaptchaEnterpriseScript}function UC(){return vu.gapiScript}function jC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const BC="recaptcha-enterprise",zC="NO_RECAPTCHA";class $C{constructor(e){this.type=BC,this.auth=ri(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{EC(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new wC(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;Jg(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(zC)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Jg(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=FC();u.length!==0&&(u+=l),hE(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function iy(t,e,n,r=!1){const i=new $C(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function nd(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await iy(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await iy(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WC(t,e){const n=ni(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(qr(s,e??{}))return i;Wt(i,"already-initialized")}return n.initialize({options:e})}function qC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(wn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function HC(t,e,n){const r=ri(t);K(r._canInitEmulator,r,"emulator-config-failed"),K(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=dE(e),{host:o,port:l}=KC(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),GC()}function dE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function KC(t){const e=dE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:sy(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:sy(o)}}}function sy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function GC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return _n("not implemented")}_getIdTokenResponse(e){return _n("not implemented")}_linkToIdToken(e,n){return _n("not implemented")}_getReauthenticationResolver(e){return _n("not implemented")}}async function QC(t,e){return Er(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YC(t,e){return Ho(t,"POST","/v1/accounts:signInWithPassword",wr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XC(t,e){return Ho(t,"POST","/v1/accounts:signInWithEmailLink",wr(t,e))}async function JC(t,e){return Ho(t,"POST","/v1/accounts:signInWithEmailLink",wr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo extends kf{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new xo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new xo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return nd(e,n,"signInWithPassword",YC);case"emailLink":return XC(e,{email:this._email,oobCode:this._password});default:Wt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return nd(e,r,"signUpPassword",QC);case"emailLink":return JC(e,{idToken:n,email:this._email,oobCode:this._password});default:Wt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ui(t,e){return Ho(t,"POST","/v1/accounts:signInWithIdp",wr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZC="http://localhost";class Hr extends kf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Hr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Wt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Sf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Hr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ui(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ui(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ui(e,n)}buildRequest(){const e={requestUri:ZC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Wo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ek(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function tk(t){const e=$s(Ws(t)).link,n=e?$s(Ws(e)).deep_link_id:null,r=$s(Ws(t)).deep_link_id;return(r?$s(Ws(r)).link:null)||r||n||e||t}class Nf{constructor(e){var n,r,i,s,o,l;const u=$s(Ws(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,p=ek((i=u.mode)!==null&&i!==void 0?i:null);K(c&&f&&p,"argument-error"),this.apiKey=c,this.operation=p,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=tk(e);try{return new Nf(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(){this.providerId=cs.PROVIDER_ID}static credential(e,n){return xo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Nf.parseLink(n);return K(r,"argument-error"),xo._fromEmailAndCode(e,r.code,r.tenantId)}}cs.PROVIDER_ID="password";cs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";cs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko extends fE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn extends Ko{constructor(){super("facebook.com")}static credential(e){return Hr._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qn.credential(e.oauthAccessToken)}catch{return null}}}qn.FACEBOOK_SIGN_IN_METHOD="facebook.com";qn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends Ko{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Hr._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Hn.credential(n,r)}catch{return null}}}Hn.GOOGLE_SIGN_IN_METHOD="google.com";Hn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends Ko{constructor(){super("github.com")}static credential(e){return Hr._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kn.credential(e.oauthAccessToken)}catch{return null}}}Kn.GITHUB_SIGN_IN_METHOD="github.com";Kn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn extends Ko{constructor(){super("twitter.com")}static credential(e,n){return Hr._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Gn.credential(n,r)}catch{return null}}}Gn.TWITTER_SIGN_IN_METHOD="twitter.com";Gn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nk(t,e){return Ho(t,"POST","/v1/accounts:signUp",wr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await vn._fromIdTokenResponse(e,r,i),o=oy(r);return new Kr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=oy(r);return new Kr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function oy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl extends Kt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Bl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Bl(e,n,r,i)}}function pE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Bl._fromErrorAndOperation(t,s,e,r):s})}async function rk(t,e,n=!1){const r=await Do(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Kr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ik(t,e,n=!1){const{auth:r}=t;if(Xt(r.app))return Promise.reject(Tn(r));const i="reauthenticate";try{const s=await Do(t,pE(r,i,e,t),n);K(s.idToken,r,"internal-error");const o=Pf(s.idToken);K(o,r,"internal-error");const{sub:l}=o;return K(t.uid===l,r,"user-mismatch"),Kr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Wt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mE(t,e,n=!1){if(Xt(t.app))return Promise.reject(Tn(t));const r="signIn",i=await pE(t,r,e),s=await Kr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function sk(t,e){return mE(ri(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gE(t){const e=ri(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function ok(t,e,n){if(Xt(t.app))return Promise.reject(Tn(t));const r=ri(t),o=await nd(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",nk).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&gE(t),u}),l=await Kr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function ak(t,e,n){return Xt(t.app)?Promise.reject(Tn(t)):sk(Ne(t),cs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&gE(t),r})}function lk(t,e,n,r){return Ne(t).onIdTokenChanged(e,n,r)}function uk(t,e,n){return Ne(t).beforeAuthStateChanged(e,n)}function ck(t,e,n,r){return Ne(t).onAuthStateChanged(e,n,r)}function hk(t){return Ne(t).signOut()}const zl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(zl,"1"),this.storage.removeItem(zl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dk=1e3,fk=10;class _E extends yE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=uE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);DC()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,fk):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},dk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}_E.type="LOCAL";const pk=_E;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE extends yE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}vE.type="SESSION";const wE=vE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mk(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new wu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await mk(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}wu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Df(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=Df("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(){return window}function yk(t){tn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EE(){return typeof tn().WorkerGlobalScope<"u"&&typeof tn().importScripts=="function"}async function _k(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function vk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function wk(){return EE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TE="firebaseLocalStorageDb",Ek=1,$l="firebaseLocalStorage",IE="fbase_key";class Go{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Eu(t,e){return t.transaction([$l],e?"readwrite":"readonly").objectStore($l)}function Tk(){const t=indexedDB.deleteDatabase(TE);return new Go(t).toPromise()}function rd(){const t=indexedDB.open(TE,Ek);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore($l,{keyPath:IE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains($l)?e(r):(r.close(),await Tk(),e(await rd()))})})}async function ay(t,e,n){const r=Eu(t,!0).put({[IE]:e,value:n});return new Go(r).toPromise()}async function Ik(t,e){const n=Eu(t,!1).get(e),r=await new Go(n).toPromise();return r===void 0?null:r.value}function ly(t,e){const n=Eu(t,!0).delete(e);return new Go(n).toPromise()}const Sk=800,Ak=3;class SE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await rd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Ak)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return EE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=wu._getInstance(wk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await _k(),!this.activeServiceWorker)return;this.sender=new gk(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||vk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await rd();return await ay(e,zl,"1"),await ly(e,zl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ay(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Ik(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ly(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Eu(i,!1).getAll();return new Go(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Sk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}SE.type="LOCAL";const Rk=SE;new qo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pk(t,e){return e?wn(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf extends kf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ui(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ui(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ui(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Ck(t){return mE(t.auth,new xf(t),t.bypassAuthState)}function kk(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),ik(n,new xf(t),t.bypassAuthState)}async function Nk(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),rk(n,new xf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ck;case"linkViaPopup":case"linkViaRedirect":return Nk;case"reauthViaPopup":case"reauthViaRedirect":return kk;default:Wt(this.auth,"internal-error")}}resolve(e){kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dk=new qo(2e3,1e4);class ki extends AE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ki.currentPopupAction&&ki.currentPopupAction.cancel(),ki.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){kn(this.filter.length===1,"Popup operations only handle one event");const e=Df();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(en(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(en(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ki.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(en(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Dk.get())};e()}}ki.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xk="pendingRedirect",sl=new Map;class Ok extends AE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=sl.get(this.auth._key());if(!e){try{const r=await Vk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}sl.set(this.auth._key(),e)}return this.bypassAuthState||sl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Vk(t,e){const n=bk(e),r=Mk(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Lk(t,e){sl.set(t._key(),e)}function Mk(t){return wn(t._redirectPersistence)}function bk(t){return il(xk,t.config.apiKey,t.name)}async function Fk(t,e,n=!1){if(Xt(t.app))return Promise.reject(Tn(t));const r=ri(t),i=Pk(r,e),o=await new Ok(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uk=10*60*1e3;class jk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Bk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!RE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(en(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Uk&&this.cachedEventUids.clear(),this.cachedEventUids.has(uy(e))}saveEventToCache(e){this.cachedEventUids.add(uy(e)),this.lastProcessedEventTime=Date.now()}}function uy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function RE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Bk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return RE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zk(t,e={}){return Er(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $k=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Wk=/^https?/;async function qk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await zk(t);for(const n of e)try{if(Hk(n))return}catch{}Wt(t,"unauthorized-domain")}function Hk(t){const e=ed(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Wk.test(n))return!1;if($k.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kk=new qo(3e4,6e4);function cy(){const t=tn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Gk(t){return new Promise((e,n)=>{var r,i,s;function o(){cy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{cy(),n(en(t,"network-request-failed"))},timeout:Kk.get()})}if(!((i=(r=tn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=tn().gapi)===null||s===void 0)&&s.load)o();else{const l=jC("iframefcb");return tn()[l]=()=>{gapi.load?o():n(en(t,"network-request-failed"))},hE(`${UC()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw ol=null,e})}let ol=null;function Qk(t){return ol=ol||Gk(t),ol}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yk=new qo(5e3,15e3),Xk="__/auth/iframe",Jk="emulator/auth/iframe",Zk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},e1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function t1(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Rf(e,Jk):`https://${t.config.authDomain}/${Xk}`,r={apiKey:e.apiKey,appName:t.name,v:us},i=e1.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Wo(r).slice(1)}`}async function n1(t){const e=await Qk(t),n=tn().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:t1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Zk,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=en(t,"network-request-failed"),l=tn().setTimeout(()=>{s(o)},Yk.get());function u(){tn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},i1=500,s1=600,o1="_blank",a1="http://localhost";class hy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function l1(t,e,n,r=i1,i=s1){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},r1),{width:r.toString(),height:i.toString(),top:s,left:o}),c=tt().toLowerCase();n&&(l=iE(c)?o1:n),nE(c)&&(e=e||a1,u.scrollbars="yes");const f=Object.entries(u).reduce((m,[E,P])=>`${m}${E}=${P},`,"");if(NC(c)&&l!=="_self")return u1(e||"",l),new hy(null);const p=window.open(e||"",l,f);K(p,t,"popup-blocked");try{p.focus()}catch{}return new hy(p)}function u1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c1="__/auth/handler",h1="emulator/auth/handler",d1=encodeURIComponent("fac");async function dy(t,e,n,r,i,s){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:us,eventId:i};if(e instanceof fE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",XR(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Ko){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),c=u?`#${d1}=${encodeURIComponent(u)}`:"";return`${f1(t)}?${Wo(l).slice(1)}${c}`}function f1({config:t}){return t.emulator?Rf(t,h1):`https://${t.authDomain}/${c1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $c="webStorageSupport";class p1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wE,this._completeRedirectFn=Fk,this._overrideRedirectResult=Lk}async _openPopup(e,n,r,i){var s;kn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await dy(e,n,r,ed(),i);return l1(e,o,Df())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await dy(e,n,r,ed(),i);return yk(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(kn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await n1(e),r=new jk(e);return n.register("authEvent",i=>(K(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send($c,{type:$c},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[$c];o!==void 0&&n(!!o),Wt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=qk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return uE()||rE()||Cf()}}const m1=p1;var fy="@firebase/auth",py="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y1(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function _1(t){sn(new $t("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:cE(t)},c=new MC(r,i,s,u);return qC(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),sn(new $t("auth-internal",e=>{const n=ri(e.getProvider("auth").getImmediate());return(r=>new g1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Dt(fy,py,y1(t)),Dt(fy,py,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v1=5*60,w1=bw("authIdTokenMaxAge")||v1;let my=null;const E1=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>w1)return;const i=n==null?void 0:n.token;my!==i&&(my=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function T1(t=If()){const e=ni(t,"auth");if(e.isInitialized())return e.getImmediate();const n=WC(t,{popupRedirectResolver:m1,persistence:[Rk,pk,wE]}),r=bw("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=E1(s.toString());uk(n,o,()=>o(n.currentUser)),lk(n,l=>o(l))}}const i=Lw("auth");return i&&HC(n,`http://${i}`),n}function I1(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}bC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=en("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",I1().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});_1("Browser");var gy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ur,PE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,y){function v(){}v.prototype=y.prototype,w.D=y.prototype,w.prototype=new v,w.prototype.constructor=w,w.C=function(I,R,k){for(var S=Array(arguments.length-2),At=2;At<arguments.length;At++)S[At-2]=arguments[At];return y.prototype[R].apply(I,S)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,y,v){v||(v=0);var I=Array(16);if(typeof y=="string")for(var R=0;16>R;++R)I[R]=y.charCodeAt(v++)|y.charCodeAt(v++)<<8|y.charCodeAt(v++)<<16|y.charCodeAt(v++)<<24;else for(R=0;16>R;++R)I[R]=y[v++]|y[v++]<<8|y[v++]<<16|y[v++]<<24;y=w.g[0],v=w.g[1],R=w.g[2];var k=w.g[3],S=y+(k^v&(R^k))+I[0]+3614090360&4294967295;y=v+(S<<7&4294967295|S>>>25),S=k+(R^y&(v^R))+I[1]+3905402710&4294967295,k=y+(S<<12&4294967295|S>>>20),S=R+(v^k&(y^v))+I[2]+606105819&4294967295,R=k+(S<<17&4294967295|S>>>15),S=v+(y^R&(k^y))+I[3]+3250441966&4294967295,v=R+(S<<22&4294967295|S>>>10),S=y+(k^v&(R^k))+I[4]+4118548399&4294967295,y=v+(S<<7&4294967295|S>>>25),S=k+(R^y&(v^R))+I[5]+1200080426&4294967295,k=y+(S<<12&4294967295|S>>>20),S=R+(v^k&(y^v))+I[6]+2821735955&4294967295,R=k+(S<<17&4294967295|S>>>15),S=v+(y^R&(k^y))+I[7]+4249261313&4294967295,v=R+(S<<22&4294967295|S>>>10),S=y+(k^v&(R^k))+I[8]+1770035416&4294967295,y=v+(S<<7&4294967295|S>>>25),S=k+(R^y&(v^R))+I[9]+2336552879&4294967295,k=y+(S<<12&4294967295|S>>>20),S=R+(v^k&(y^v))+I[10]+4294925233&4294967295,R=k+(S<<17&4294967295|S>>>15),S=v+(y^R&(k^y))+I[11]+2304563134&4294967295,v=R+(S<<22&4294967295|S>>>10),S=y+(k^v&(R^k))+I[12]+1804603682&4294967295,y=v+(S<<7&4294967295|S>>>25),S=k+(R^y&(v^R))+I[13]+4254626195&4294967295,k=y+(S<<12&4294967295|S>>>20),S=R+(v^k&(y^v))+I[14]+2792965006&4294967295,R=k+(S<<17&4294967295|S>>>15),S=v+(y^R&(k^y))+I[15]+1236535329&4294967295,v=R+(S<<22&4294967295|S>>>10),S=y+(R^k&(v^R))+I[1]+4129170786&4294967295,y=v+(S<<5&4294967295|S>>>27),S=k+(v^R&(y^v))+I[6]+3225465664&4294967295,k=y+(S<<9&4294967295|S>>>23),S=R+(y^v&(k^y))+I[11]+643717713&4294967295,R=k+(S<<14&4294967295|S>>>18),S=v+(k^y&(R^k))+I[0]+3921069994&4294967295,v=R+(S<<20&4294967295|S>>>12),S=y+(R^k&(v^R))+I[5]+3593408605&4294967295,y=v+(S<<5&4294967295|S>>>27),S=k+(v^R&(y^v))+I[10]+38016083&4294967295,k=y+(S<<9&4294967295|S>>>23),S=R+(y^v&(k^y))+I[15]+3634488961&4294967295,R=k+(S<<14&4294967295|S>>>18),S=v+(k^y&(R^k))+I[4]+3889429448&4294967295,v=R+(S<<20&4294967295|S>>>12),S=y+(R^k&(v^R))+I[9]+568446438&4294967295,y=v+(S<<5&4294967295|S>>>27),S=k+(v^R&(y^v))+I[14]+3275163606&4294967295,k=y+(S<<9&4294967295|S>>>23),S=R+(y^v&(k^y))+I[3]+4107603335&4294967295,R=k+(S<<14&4294967295|S>>>18),S=v+(k^y&(R^k))+I[8]+1163531501&4294967295,v=R+(S<<20&4294967295|S>>>12),S=y+(R^k&(v^R))+I[13]+2850285829&4294967295,y=v+(S<<5&4294967295|S>>>27),S=k+(v^R&(y^v))+I[2]+4243563512&4294967295,k=y+(S<<9&4294967295|S>>>23),S=R+(y^v&(k^y))+I[7]+1735328473&4294967295,R=k+(S<<14&4294967295|S>>>18),S=v+(k^y&(R^k))+I[12]+2368359562&4294967295,v=R+(S<<20&4294967295|S>>>12),S=y+(v^R^k)+I[5]+4294588738&4294967295,y=v+(S<<4&4294967295|S>>>28),S=k+(y^v^R)+I[8]+2272392833&4294967295,k=y+(S<<11&4294967295|S>>>21),S=R+(k^y^v)+I[11]+1839030562&4294967295,R=k+(S<<16&4294967295|S>>>16),S=v+(R^k^y)+I[14]+4259657740&4294967295,v=R+(S<<23&4294967295|S>>>9),S=y+(v^R^k)+I[1]+2763975236&4294967295,y=v+(S<<4&4294967295|S>>>28),S=k+(y^v^R)+I[4]+1272893353&4294967295,k=y+(S<<11&4294967295|S>>>21),S=R+(k^y^v)+I[7]+4139469664&4294967295,R=k+(S<<16&4294967295|S>>>16),S=v+(R^k^y)+I[10]+3200236656&4294967295,v=R+(S<<23&4294967295|S>>>9),S=y+(v^R^k)+I[13]+681279174&4294967295,y=v+(S<<4&4294967295|S>>>28),S=k+(y^v^R)+I[0]+3936430074&4294967295,k=y+(S<<11&4294967295|S>>>21),S=R+(k^y^v)+I[3]+3572445317&4294967295,R=k+(S<<16&4294967295|S>>>16),S=v+(R^k^y)+I[6]+76029189&4294967295,v=R+(S<<23&4294967295|S>>>9),S=y+(v^R^k)+I[9]+3654602809&4294967295,y=v+(S<<4&4294967295|S>>>28),S=k+(y^v^R)+I[12]+3873151461&4294967295,k=y+(S<<11&4294967295|S>>>21),S=R+(k^y^v)+I[15]+530742520&4294967295,R=k+(S<<16&4294967295|S>>>16),S=v+(R^k^y)+I[2]+3299628645&4294967295,v=R+(S<<23&4294967295|S>>>9),S=y+(R^(v|~k))+I[0]+4096336452&4294967295,y=v+(S<<6&4294967295|S>>>26),S=k+(v^(y|~R))+I[7]+1126891415&4294967295,k=y+(S<<10&4294967295|S>>>22),S=R+(y^(k|~v))+I[14]+2878612391&4294967295,R=k+(S<<15&4294967295|S>>>17),S=v+(k^(R|~y))+I[5]+4237533241&4294967295,v=R+(S<<21&4294967295|S>>>11),S=y+(R^(v|~k))+I[12]+1700485571&4294967295,y=v+(S<<6&4294967295|S>>>26),S=k+(v^(y|~R))+I[3]+2399980690&4294967295,k=y+(S<<10&4294967295|S>>>22),S=R+(y^(k|~v))+I[10]+4293915773&4294967295,R=k+(S<<15&4294967295|S>>>17),S=v+(k^(R|~y))+I[1]+2240044497&4294967295,v=R+(S<<21&4294967295|S>>>11),S=y+(R^(v|~k))+I[8]+1873313359&4294967295,y=v+(S<<6&4294967295|S>>>26),S=k+(v^(y|~R))+I[15]+4264355552&4294967295,k=y+(S<<10&4294967295|S>>>22),S=R+(y^(k|~v))+I[6]+2734768916&4294967295,R=k+(S<<15&4294967295|S>>>17),S=v+(k^(R|~y))+I[13]+1309151649&4294967295,v=R+(S<<21&4294967295|S>>>11),S=y+(R^(v|~k))+I[4]+4149444226&4294967295,y=v+(S<<6&4294967295|S>>>26),S=k+(v^(y|~R))+I[11]+3174756917&4294967295,k=y+(S<<10&4294967295|S>>>22),S=R+(y^(k|~v))+I[2]+718787259&4294967295,R=k+(S<<15&4294967295|S>>>17),S=v+(k^(R|~y))+I[9]+3951481745&4294967295,w.g[0]=w.g[0]+y&4294967295,w.g[1]=w.g[1]+(R+(S<<21&4294967295|S>>>11))&4294967295,w.g[2]=w.g[2]+R&4294967295,w.g[3]=w.g[3]+k&4294967295}r.prototype.u=function(w,y){y===void 0&&(y=w.length);for(var v=y-this.blockSize,I=this.B,R=this.h,k=0;k<y;){if(R==0)for(;k<=v;)i(this,w,k),k+=this.blockSize;if(typeof w=="string"){for(;k<y;)if(I[R++]=w.charCodeAt(k++),R==this.blockSize){i(this,I),R=0;break}}else for(;k<y;)if(I[R++]=w[k++],R==this.blockSize){i(this,I),R=0;break}}this.h=R,this.o+=y},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var y=1;y<w.length-8;++y)w[y]=0;var v=8*this.o;for(y=w.length-8;y<w.length;++y)w[y]=v&255,v/=256;for(this.u(w),w=Array(16),y=v=0;4>y;++y)for(var I=0;32>I;I+=8)w[v++]=this.g[y]>>>I&255;return w};function s(w,y){var v=l;return Object.prototype.hasOwnProperty.call(v,w)?v[w]:v[w]=y(w)}function o(w,y){this.h=y;for(var v=[],I=!0,R=w.length-1;0<=R;R--){var k=w[R]|0;I&&k==y||(v[R]=k,I=!1)}this.g=v}var l={};function u(w){return-128<=w&&128>w?s(w,function(y){return new o([y|0],0>y?-1:0)}):new o([w|0],0>w?-1:0)}function c(w){if(isNaN(w)||!isFinite(w))return p;if(0>w)return D(c(-w));for(var y=[],v=1,I=0;w>=v;I++)y[I]=w/v|0,v*=4294967296;return new o(y,0)}function f(w,y){if(w.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(w.charAt(0)=="-")return D(f(w.substring(1),y));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=c(Math.pow(y,8)),I=p,R=0;R<w.length;R+=8){var k=Math.min(8,w.length-R),S=parseInt(w.substring(R,R+k),y);8>k?(k=c(Math.pow(y,k)),I=I.j(k).add(c(S))):(I=I.j(v),I=I.add(c(S)))}return I}var p=u(0),m=u(1),E=u(16777216);t=o.prototype,t.m=function(){if(N(this))return-D(this).m();for(var w=0,y=1,v=0;v<this.g.length;v++){var I=this.i(v);w+=(0<=I?I:4294967296+I)*y,y*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(P(this))return"0";if(N(this))return"-"+D(this).toString(w);for(var y=c(Math.pow(w,6)),v=this,I="";;){var R=O(v,y).g;v=T(v,R.j(y));var k=((0<v.g.length?v.g[0]:v.h)>>>0).toString(w);if(v=R,P(v))return k+I;for(;6>k.length;)k="0"+k;I=k+I}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function P(w){if(w.h!=0)return!1;for(var y=0;y<w.g.length;y++)if(w.g[y]!=0)return!1;return!0}function N(w){return w.h==-1}t.l=function(w){return w=T(this,w),N(w)?-1:P(w)?0:1};function D(w){for(var y=w.g.length,v=[],I=0;I<y;I++)v[I]=~w.g[I];return new o(v,~w.h).add(m)}t.abs=function(){return N(this)?D(this):this},t.add=function(w){for(var y=Math.max(this.g.length,w.g.length),v=[],I=0,R=0;R<=y;R++){var k=I+(this.i(R)&65535)+(w.i(R)&65535),S=(k>>>16)+(this.i(R)>>>16)+(w.i(R)>>>16);I=S>>>16,k&=65535,S&=65535,v[R]=S<<16|k}return new o(v,v[v.length-1]&-2147483648?-1:0)};function T(w,y){return w.add(D(y))}t.j=function(w){if(P(this)||P(w))return p;if(N(this))return N(w)?D(this).j(D(w)):D(D(this).j(w));if(N(w))return D(this.j(D(w)));if(0>this.l(E)&&0>w.l(E))return c(this.m()*w.m());for(var y=this.g.length+w.g.length,v=[],I=0;I<2*y;I++)v[I]=0;for(I=0;I<this.g.length;I++)for(var R=0;R<w.g.length;R++){var k=this.i(I)>>>16,S=this.i(I)&65535,At=w.i(R)>>>16,Ir=w.i(R)&65535;v[2*I+2*R]+=S*Ir,_(v,2*I+2*R),v[2*I+2*R+1]+=k*Ir,_(v,2*I+2*R+1),v[2*I+2*R+1]+=S*At,_(v,2*I+2*R+1),v[2*I+2*R+2]+=k*At,_(v,2*I+2*R+2)}for(I=0;I<y;I++)v[I]=v[2*I+1]<<16|v[2*I];for(I=y;I<2*y;I++)v[I]=0;return new o(v,0)};function _(w,y){for(;(w[y]&65535)!=w[y];)w[y+1]+=w[y]>>>16,w[y]&=65535,y++}function A(w,y){this.g=w,this.h=y}function O(w,y){if(P(y))throw Error("division by zero");if(P(w))return new A(p,p);if(N(w))return y=O(D(w),y),new A(D(y.g),D(y.h));if(N(y))return y=O(w,D(y)),new A(D(y.g),y.h);if(30<w.g.length){if(N(w)||N(y))throw Error("slowDivide_ only works with positive integers.");for(var v=m,I=y;0>=I.l(w);)v=F(v),I=F(I);var R=j(v,1),k=j(I,1);for(I=j(I,2),v=j(v,2);!P(I);){var S=k.add(I);0>=S.l(w)&&(R=R.add(v),k=S),I=j(I,1),v=j(v,1)}return y=T(w,R.j(y)),new A(R,y)}for(R=p;0<=w.l(y);){for(v=Math.max(1,Math.floor(w.m()/y.m())),I=Math.ceil(Math.log(v)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),k=c(v),S=k.j(y);N(S)||0<S.l(w);)v-=I,k=c(v),S=k.j(y);P(k)&&(k=m),R=R.add(k),w=T(w,S)}return new A(R,w)}t.A=function(w){return O(this,w).h},t.and=function(w){for(var y=Math.max(this.g.length,w.g.length),v=[],I=0;I<y;I++)v[I]=this.i(I)&w.i(I);return new o(v,this.h&w.h)},t.or=function(w){for(var y=Math.max(this.g.length,w.g.length),v=[],I=0;I<y;I++)v[I]=this.i(I)|w.i(I);return new o(v,this.h|w.h)},t.xor=function(w){for(var y=Math.max(this.g.length,w.g.length),v=[],I=0;I<y;I++)v[I]=this.i(I)^w.i(I);return new o(v,this.h^w.h)};function F(w){for(var y=w.g.length+1,v=[],I=0;I<y;I++)v[I]=w.i(I)<<1|w.i(I-1)>>>31;return new o(v,w.h)}function j(w,y){var v=y>>5;y%=32;for(var I=w.g.length-v,R=[],k=0;k<I;k++)R[k]=0<y?w.i(k+v)>>>y|w.i(k+v+1)<<32-y:w.i(k+v);return new o(R,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,PE=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=f,Ur=o}).apply(typeof gy<"u"?gy:typeof self<"u"?self:typeof window<"u"?window:{});var Ua=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var CE,qs,kE,al,id,NE,DE,xE;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,d){return a==Array.prototype||a==Object.prototype||(a[h]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ua=="object"&&Ua];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var C=a[g];if(!(C in d))break e;d=d[C]}a=a[a.length-1],g=d[a],h=h(g),h!=g&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var d=0,g=!1,C={next:function(){if(!g&&d<a.length){var x=d++;return{value:h(x,a[x]),done:!1}}return g=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,d){return a.call.apply(a.bind,arguments)}function p(a,h,d){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,g),a.apply(h,C)}}return function(){return a.apply(h,arguments)}}function m(a,h,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,m.apply(null,arguments)}function E(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function P(a,h){function d(){}d.prototype=h.prototype,a.aa=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(g,C,x){for(var U=Array(arguments.length-2),ue=2;ue<arguments.length;ue++)U[ue-2]=arguments[ue];return h.prototype[C].apply(g,U)}}function N(a){const h=a.length;if(0<h){const d=Array(h);for(let g=0;g<h;g++)d[g]=a[g];return d}return[]}function D(a,h){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(u(g)){const C=a.length||0,x=g.length||0;a.length=C+x;for(let U=0;U<x;U++)a[C+U]=g[U]}else a.push(g)}}class T{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function _(a){return/^[\s\xa0]*$/.test(a)}function A(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function O(a){return O[" "](a),a}O[" "]=function(){};var F=A().indexOf("Gecko")!=-1&&!(A().toLowerCase().indexOf("webkit")!=-1&&A().indexOf("Edge")==-1)&&!(A().indexOf("Trident")!=-1||A().indexOf("MSIE")!=-1)&&A().indexOf("Edge")==-1;function j(a,h,d){for(const g in a)h.call(d,a[g],g,a)}function w(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function y(a){const h={};for(const d in a)h[d]=a[d];return h}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,h){let d,g;for(let C=1;C<arguments.length;C++){g=arguments[C];for(d in g)a[d]=g[d];for(let x=0;x<v.length;x++)d=v[x],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function R(a){var h=1;a=a.split(":");const d=[];for(;0<h&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function k(a){l.setTimeout(()=>{throw a},0)}function S(){var a=Q;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class At{constructor(){this.h=this.g=null}add(h,d){const g=Ir.get();g.set(h,d),this.h?this.h.next=g:this.g=g,this.h=g}}var Ir=new T(()=>new gs,a=>a.reset());class gs{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let an,B=!1,Q=new At,J=()=>{const a=l.Promise.resolve(void 0);an=()=>{a.then(ge)}};var ge=()=>{for(var a;a=S();){try{a.h.call(a.g)}catch(d){k(d)}var h=Ir;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}B=!1};function le(){this.s=this.s,this.C=this.C}le.prototype.s=!1,le.prototype.ma=function(){this.s||(this.s=!0,this.N())},le.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ie(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Ie.prototype.h=function(){this.defaultPrevented=!0};var ln=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,h),l.removeEventListener("test",d,h)}catch{}return a}();function un(a,h){if(Ie.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(F){e:{try{O(h.nodeName);var C=!0;break e}catch{}C=!1}C||(h=null)}}else d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:cn[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&un.aa.h.call(this)}}P(un,Ie);var cn={2:"touch",3:"pen",4:"mouse"};un.prototype.h=function(){un.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var hn="closure_listenable_"+(1e6*Math.random()|0),ET=0;function TT(a,h,d,g,C){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!g,this.ha=C,this.key=++ET,this.da=this.fa=!1}function na(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ra(a){this.src=a,this.g={},this.h=0}ra.prototype.add=function(a,h,d,g,C){var x=a.toString();a=this.g[x],a||(a=this.g[x]=[],this.h++);var U=zu(a,h,g,C);return-1<U?(h=a[U],d||(h.fa=!1)):(h=new TT(h,this.src,x,!!g,C),h.fa=d,a.push(h)),h};function Bu(a,h){var d=h.type;if(d in a.g){var g=a.g[d],C=Array.prototype.indexOf.call(g,h,void 0),x;(x=0<=C)&&Array.prototype.splice.call(g,C,1),x&&(na(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function zu(a,h,d,g){for(var C=0;C<a.length;++C){var x=a[C];if(!x.da&&x.listener==h&&x.capture==!!d&&x.ha==g)return C}return-1}var $u="closure_lm_"+(1e6*Math.random()|0),Wu={};function Tp(a,h,d,g,C){if(Array.isArray(h)){for(var x=0;x<h.length;x++)Tp(a,h[x],d,g,C);return null}return d=Ap(d),a&&a[hn]?a.K(h,d,c(g)?!!g.capture:!1,C):IT(a,h,d,!1,g,C)}function IT(a,h,d,g,C,x){if(!h)throw Error("Invalid event type");var U=c(C)?!!C.capture:!!C,ue=Hu(a);if(ue||(a[$u]=ue=new ra(a)),d=ue.add(h,d,g,U,x),d.proxy)return d;if(g=ST(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)ln||(C=U),C===void 0&&(C=!1),a.addEventListener(h.toString(),g,C);else if(a.attachEvent)a.attachEvent(Sp(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function ST(){function a(d){return h.call(a.src,a.listener,d)}const h=AT;return a}function Ip(a,h,d,g,C){if(Array.isArray(h))for(var x=0;x<h.length;x++)Ip(a,h[x],d,g,C);else g=c(g)?!!g.capture:!!g,d=Ap(d),a&&a[hn]?(a=a.i,h=String(h).toString(),h in a.g&&(x=a.g[h],d=zu(x,d,g,C),-1<d&&(na(x[d]),Array.prototype.splice.call(x,d,1),x.length==0&&(delete a.g[h],a.h--)))):a&&(a=Hu(a))&&(h=a.g[h.toString()],a=-1,h&&(a=zu(h,d,g,C)),(d=-1<a?h[a]:null)&&qu(d))}function qu(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[hn])Bu(h.i,a);else{var d=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(d,g,a.capture):h.detachEvent?h.detachEvent(Sp(d),g):h.addListener&&h.removeListener&&h.removeListener(g),(d=Hu(h))?(Bu(d,a),d.h==0&&(d.src=null,h[$u]=null)):na(a)}}}function Sp(a){return a in Wu?Wu[a]:Wu[a]="on"+a}function AT(a,h){if(a.da)a=!0;else{h=new un(h,this);var d=a.listener,g=a.ha||a.src;a.fa&&qu(a),a=d.call(g,h)}return a}function Hu(a){return a=a[$u],a instanceof ra?a:null}var Ku="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ap(a){return typeof a=="function"?a:(a[Ku]||(a[Ku]=function(h){return a.handleEvent(h)}),a[Ku])}function qe(){le.call(this),this.i=new ra(this),this.M=this,this.F=null}P(qe,le),qe.prototype[hn]=!0,qe.prototype.removeEventListener=function(a,h,d,g){Ip(this,a,h,d,g)};function nt(a,h){var d,g=a.F;if(g)for(d=[];g;g=g.F)d.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new Ie(h,a);else if(h instanceof Ie)h.target=h.target||a;else{var C=h;h=new Ie(g,a),I(h,C)}if(C=!0,d)for(var x=d.length-1;0<=x;x--){var U=h.g=d[x];C=ia(U,g,!0,h)&&C}if(U=h.g=a,C=ia(U,g,!0,h)&&C,C=ia(U,g,!1,h)&&C,d)for(x=0;x<d.length;x++)U=h.g=d[x],C=ia(U,g,!1,h)&&C}qe.prototype.N=function(){if(qe.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var d=a.g[h],g=0;g<d.length;g++)na(d[g]);delete a.g[h],a.h--}}this.F=null},qe.prototype.K=function(a,h,d,g){return this.i.add(String(a),h,!1,d,g)},qe.prototype.L=function(a,h,d,g){return this.i.add(String(a),h,!0,d,g)};function ia(a,h,d,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var C=!0,x=0;x<h.length;++x){var U=h[x];if(U&&!U.da&&U.capture==d){var ue=U.listener,be=U.ha||U.src;U.fa&&Bu(a.i,U),C=ue.call(be,g)!==!1&&C}}return C&&!g.defaultPrevented}function Rp(a,h,d){if(typeof a=="function")d&&(a=m(a,d));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function Pp(a){a.g=Rp(()=>{a.g=null,a.i&&(a.i=!1,Pp(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class RT extends le{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Pp(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ys(a){le.call(this),this.h=a,this.g={}}P(ys,le);var Cp=[];function kp(a){j(a.g,function(h,d){this.g.hasOwnProperty(d)&&qu(h)},a),a.g={}}ys.prototype.N=function(){ys.aa.N.call(this),kp(this)},ys.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Gu=l.JSON.stringify,PT=l.JSON.parse,CT=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Qu(){}Qu.prototype.h=null;function Np(a){return a.h||(a.h=a.i())}function Dp(){}var _s={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Yu(){Ie.call(this,"d")}P(Yu,Ie);function Xu(){Ie.call(this,"c")}P(Xu,Ie);var Sr={},xp=null;function sa(){return xp=xp||new qe}Sr.La="serverreachability";function Op(a){Ie.call(this,Sr.La,a)}P(Op,Ie);function vs(a){const h=sa();nt(h,new Op(h))}Sr.STAT_EVENT="statevent";function Vp(a,h){Ie.call(this,Sr.STAT_EVENT,a),this.stat=h}P(Vp,Ie);function rt(a){const h=sa();nt(h,new Vp(h,a))}Sr.Ma="timingevent";function Lp(a,h){Ie.call(this,Sr.Ma,a),this.size=h}P(Lp,Ie);function ws(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Es(){this.g=!0}Es.prototype.xa=function(){this.g=!1};function kT(a,h,d,g,C,x){a.info(function(){if(a.g)if(x)for(var U="",ue=x.split("&"),be=0;be<ue.length;be++){var ie=ue[be].split("=");if(1<ie.length){var He=ie[0];ie=ie[1];var Ke=He.split("_");U=2<=Ke.length&&Ke[1]=="type"?U+(He+"="+ie+"&"):U+(He+"=redacted&")}}else U=null;else U=x;return"XMLHTTP REQ ("+g+") [attempt "+C+"]: "+h+`
`+d+`
`+U})}function NT(a,h,d,g,C,x,U){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+C+"]: "+h+`
`+d+`
`+x+" "+U})}function li(a,h,d,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+xT(a,d)+(g?" "+g:"")})}function DT(a,h){a.info(function(){return"TIMEOUT: "+h})}Es.prototype.info=function(){};function xT(a,h){if(!a.g)return h;if(!h)return null;try{var d=JSON.parse(h);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var g=d[a];if(!(2>g.length)){var C=g[1];if(Array.isArray(C)&&!(1>C.length)){var x=C[0];if(x!="noop"&&x!="stop"&&x!="close")for(var U=1;U<C.length;U++)C[U]=""}}}}return Gu(d)}catch{return h}}var oa={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Mp={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ju;function aa(){}P(aa,Qu),aa.prototype.g=function(){return new XMLHttpRequest},aa.prototype.i=function(){return{}},Ju=new aa;function Ln(a,h,d,g){this.j=a,this.i=h,this.l=d,this.R=g||1,this.U=new ys(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new bp}function bp(){this.i=null,this.g="",this.h=!1}var Fp={},Zu={};function ec(a,h,d){a.L=1,a.v=ha(dn(h)),a.m=d,a.P=!0,Up(a,null)}function Up(a,h){a.F=Date.now(),la(a),a.A=dn(a.v);var d=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),Zp(d.i,"t",g),a.C=0,d=a.j.J,a.h=new bp,a.g=ym(a.j,d?h:null,!a.m),0<a.O&&(a.M=new RT(m(a.Y,a,a.g),a.O)),h=a.U,d=a.g,g=a.ca;var C="readystatechange";Array.isArray(C)||(C&&(Cp[0]=C.toString()),C=Cp);for(var x=0;x<C.length;x++){var U=Tp(d,C[x],g||h.handleEvent,!1,h.h||h);if(!U)break;h.g[U.key]=U}h=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),vs(),kT(a.i,a.u,a.A,a.l,a.R,a.m)}Ln.prototype.ca=function(a){a=a.target;const h=this.M;h&&fn(a)==3?h.j():this.Y(a)},Ln.prototype.Y=function(a){try{if(a==this.g)e:{const Ke=fn(this.g);var h=this.g.Ba();const hi=this.g.Z();if(!(3>Ke)&&(Ke!=3||this.g&&(this.h.h||this.g.oa()||om(this.g)))){this.J||Ke!=4||h==7||(h==8||0>=hi?vs(3):vs(2)),tc(this);var d=this.g.Z();this.X=d;t:if(jp(this)){var g=om(this.g);a="";var C=g.length,x=fn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ar(this),Ts(this);var U="";break t}this.h.i=new l.TextDecoder}for(h=0;h<C;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(x&&h==C-1)});g.length=0,this.h.g+=a,this.C=0,U=this.h.g}else U=this.g.oa();if(this.o=d==200,NT(this.i,this.u,this.A,this.l,this.R,Ke,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ue,be=this.g;if((ue=be.g?be.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(ue)){var ie=ue;break t}}ie=null}if(d=ie)li(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,nc(this,d);else{this.o=!1,this.s=3,rt(12),Ar(this),Ts(this);break e}}if(this.P){d=!0;let Lt;for(;!this.J&&this.C<U.length;)if(Lt=OT(this,U),Lt==Zu){Ke==4&&(this.s=4,rt(14),d=!1),li(this.i,this.l,null,"[Incomplete Response]");break}else if(Lt==Fp){this.s=4,rt(15),li(this.i,this.l,U,"[Invalid Chunk]"),d=!1;break}else li(this.i,this.l,Lt,null),nc(this,Lt);if(jp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ke!=4||U.length!=0||this.h.h||(this.s=1,rt(16),d=!1),this.o=this.o&&d,!d)li(this.i,this.l,U,"[Invalid Chunked Response]"),Ar(this),Ts(this);else if(0<U.length&&!this.W){this.W=!0;var He=this.j;He.g==this&&He.ba&&!He.M&&(He.j.info("Great, no buffering proxy detected. Bytes received: "+U.length),lc(He),He.M=!0,rt(11))}}else li(this.i,this.l,U,null),nc(this,U);Ke==4&&Ar(this),this.o&&!this.J&&(Ke==4?fm(this.j,this):(this.o=!1,la(this)))}else YT(this.g),d==400&&0<U.indexOf("Unknown SID")?(this.s=3,rt(12)):(this.s=0,rt(13)),Ar(this),Ts(this)}}}catch{}finally{}};function jp(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function OT(a,h){var d=a.C,g=h.indexOf(`
`,d);return g==-1?Zu:(d=Number(h.substring(d,g)),isNaN(d)?Fp:(g+=1,g+d>h.length?Zu:(h=h.slice(g,g+d),a.C=g+d,h)))}Ln.prototype.cancel=function(){this.J=!0,Ar(this)};function la(a){a.S=Date.now()+a.I,Bp(a,a.I)}function Bp(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=ws(m(a.ba,a),h)}function tc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Ln.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(DT(this.i,this.A),this.L!=2&&(vs(),rt(17)),Ar(this),this.s=2,Ts(this)):Bp(this,this.S-a)};function Ts(a){a.j.G==0||a.J||fm(a.j,a)}function Ar(a){tc(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,kp(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function nc(a,h){try{var d=a.j;if(d.G!=0&&(d.g==a||rc(d.h,a))){if(!a.K&&rc(d.h,a)&&d.G==3){try{var g=d.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var C=g;if(C[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)ya(d),ma(d);else break e;ac(d),rt(18)}}else d.za=C[1],0<d.za-d.T&&37500>C[2]&&d.F&&d.v==0&&!d.C&&(d.C=ws(m(d.Za,d),6e3));if(1>=Wp(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Pr(d,11)}else if((a.K||d.g==a)&&ya(d),!_(h))for(C=d.Da.g.parse(h),h=0;h<C.length;h++){let ie=C[h];if(d.T=ie[0],ie=ie[1],d.G==2)if(ie[0]=="c"){d.K=ie[1],d.ia=ie[2];const He=ie[3];He!=null&&(d.la=He,d.j.info("VER="+d.la));const Ke=ie[4];Ke!=null&&(d.Aa=Ke,d.j.info("SVER="+d.Aa));const hi=ie[5];hi!=null&&typeof hi=="number"&&0<hi&&(g=1.5*hi,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const Lt=a.g;if(Lt){const va=Lt.g?Lt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(va){var x=g.h;x.g||va.indexOf("spdy")==-1&&va.indexOf("quic")==-1&&va.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(ic(x,x.h),x.h=null))}if(g.D){const uc=Lt.g?Lt.g.getResponseHeader("X-HTTP-Session-Id"):null;uc&&(g.ya=uc,he(g.I,g.D,uc))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var U=a;if(g.qa=gm(g,g.J?g.ia:null,g.W),U.K){qp(g.h,U);var ue=U,be=g.L;be&&(ue.I=be),ue.B&&(tc(ue),la(ue)),g.g=U}else hm(g);0<d.i.length&&ga(d)}else ie[0]!="stop"&&ie[0]!="close"||Pr(d,7);else d.G==3&&(ie[0]=="stop"||ie[0]=="close"?ie[0]=="stop"?Pr(d,7):oc(d):ie[0]!="noop"&&d.l&&d.l.ta(ie),d.v=0)}}vs(4)}catch{}}var VT=class{constructor(a,h){this.g=a,this.map=h}};function zp(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function $p(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Wp(a){return a.h?1:a.g?a.g.size:0}function rc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function ic(a,h){a.g?a.g.add(h):a.h=h}function qp(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}zp.prototype.cancel=function(){if(this.i=Hp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Hp(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.D);return h}return N(a.i)}function LT(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],d=a.length,g=0;g<d;g++)h.push(a[g]);return h}h=[],d=0;for(g in a)h[d++]=a[g];return h}function MT(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var d=0;d<a;d++)h.push(d);return h}h=[],d=0;for(const g in a)h[d++]=g;return h}}}function Kp(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var d=MT(a),g=LT(a),C=g.length,x=0;x<C;x++)h.call(void 0,g[x],d&&d[x],a)}var Gp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function bT(a,h){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var g=a[d].indexOf("="),C=null;if(0<=g){var x=a[d].substring(0,g);C=a[d].substring(g+1)}else x=a[d];h(x,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function Rr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Rr){this.h=a.h,ua(this,a.j),this.o=a.o,this.g=a.g,ca(this,a.s),this.l=a.l;var h=a.i,d=new As;d.i=h.i,h.g&&(d.g=new Map(h.g),d.h=h.h),Qp(this,d),this.m=a.m}else a&&(h=String(a).match(Gp))?(this.h=!1,ua(this,h[1]||"",!0),this.o=Is(h[2]||""),this.g=Is(h[3]||"",!0),ca(this,h[4]),this.l=Is(h[5]||"",!0),Qp(this,h[6]||"",!0),this.m=Is(h[7]||"")):(this.h=!1,this.i=new As(null,this.h))}Rr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Ss(h,Yp,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Ss(h,Yp,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Ss(d,d.charAt(0)=="/"?jT:UT,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Ss(d,zT)),a.join("")};function dn(a){return new Rr(a)}function ua(a,h,d){a.j=d?Is(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function ca(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Qp(a,h,d){h instanceof As?(a.i=h,$T(a.i,a.h)):(d||(h=Ss(h,BT)),a.i=new As(h,a.h))}function he(a,h,d){a.i.set(h,d)}function ha(a){return he(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Is(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ss(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,FT),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function FT(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Yp=/[#\/\?@]/g,UT=/[#\?:]/g,jT=/[#\?]/g,BT=/[#\?@]/g,zT=/#/g;function As(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Mn(a){a.g||(a.g=new Map,a.h=0,a.i&&bT(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=As.prototype,t.add=function(a,h){Mn(this),this.i=null,a=ui(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function Xp(a,h){Mn(a),h=ui(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Jp(a,h){return Mn(a),h=ui(a,h),a.g.has(h)}t.forEach=function(a,h){Mn(this),this.g.forEach(function(d,g){d.forEach(function(C){a.call(h,C,g,this)},this)},this)},t.na=function(){Mn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),d=[];for(let g=0;g<h.length;g++){const C=a[g];for(let x=0;x<C.length;x++)d.push(h[g])}return d},t.V=function(a){Mn(this);let h=[];if(typeof a=="string")Jp(this,a)&&(h=h.concat(this.g.get(ui(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)h=h.concat(a[d])}return h},t.set=function(a,h){return Mn(this),this.i=null,a=ui(this,a),Jp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Zp(a,h,d){Xp(a,h),0<d.length&&(a.i=null,a.g.set(ui(a,h),N(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var d=0;d<h.length;d++){var g=h[d];const x=encodeURIComponent(String(g)),U=this.V(g);for(g=0;g<U.length;g++){var C=x;U[g]!==""&&(C+="="+encodeURIComponent(String(U[g]))),a.push(C)}}return this.i=a.join("&")};function ui(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function $T(a,h){h&&!a.j&&(Mn(a),a.i=null,a.g.forEach(function(d,g){var C=g.toLowerCase();g!=C&&(Xp(this,g),Zp(this,C,d))},a)),a.j=h}function WT(a,h){const d=new Es;if(l.Image){const g=new Image;g.onload=E(bn,d,"TestLoadImage: loaded",!0,h,g),g.onerror=E(bn,d,"TestLoadImage: error",!1,h,g),g.onabort=E(bn,d,"TestLoadImage: abort",!1,h,g),g.ontimeout=E(bn,d,"TestLoadImage: timeout",!1,h,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function qT(a,h){const d=new Es,g=new AbortController,C=setTimeout(()=>{g.abort(),bn(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(x=>{clearTimeout(C),x.ok?bn(d,"TestPingServer: ok",!0,h):bn(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(C),bn(d,"TestPingServer: error",!1,h)})}function bn(a,h,d,g,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),g(d)}catch{}}function HT(){this.g=new CT}function KT(a,h,d){const g=d||"";try{Kp(a,function(C,x){let U=C;c(C)&&(U=Gu(C)),h.push(g+x+"="+encodeURIComponent(U))})}catch(C){throw h.push(g+"type="+encodeURIComponent("_badmap")),C}}function da(a){this.l=a.Ub||null,this.j=a.eb||!1}P(da,Qu),da.prototype.g=function(){return new fa(this.l,this.j)},da.prototype.i=function(a){return function(){return a}}({});function fa(a,h){qe.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(fa,qe),t=fa.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Ps(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Rs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ps(this)),this.g&&(this.readyState=3,Ps(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;em(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function em(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Rs(this):Ps(this),this.readyState==3&&em(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Rs(this))},t.Qa=function(a){this.g&&(this.response=a,Rs(this))},t.ga=function(){this.g&&Rs(this)};function Rs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ps(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function Ps(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(fa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function tm(a){let h="";return j(a,function(d,g){h+=g,h+=":",h+=d,h+=`\r
`}),h}function sc(a,h,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=tm(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):he(a,h,d))}function Ee(a){qe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(Ee,qe);var GT=/^https?$/i,QT=["POST","PUT"];t=Ee.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ju.g(),this.v=this.o?Np(this.o):Np(Ju),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(x){nm(this,x);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var C in g)d.set(C,g[C]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const x of g.keys())d.set(x,g.get(x));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(x=>x.toLowerCase()=="content-type"),C=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(QT,h,void 0))||g||C||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,U]of d)this.g.setRequestHeader(x,U);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{sm(this),this.u=!0,this.g.send(a),this.u=!1}catch(x){nm(this,x)}};function nm(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,rm(a),pa(a)}function rm(a){a.A||(a.A=!0,nt(a,"complete"),nt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,nt(this,"complete"),nt(this,"abort"),pa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),pa(this,!0)),Ee.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?im(this):this.bb())},t.bb=function(){im(this)};function im(a){if(a.h&&typeof o<"u"&&(!a.v[1]||fn(a)!=4||a.Z()!=2)){if(a.u&&fn(a)==4)Rp(a.Ea,0,a);else if(nt(a,"readystatechange"),fn(a)==4){a.h=!1;try{const U=a.Z();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var g;if(g=U===0){var C=String(a.D).match(Gp)[1]||null;!C&&l.self&&l.self.location&&(C=l.self.location.protocol.slice(0,-1)),g=!GT.test(C?C.toLowerCase():"")}d=g}if(d)nt(a,"complete"),nt(a,"success");else{a.m=6;try{var x=2<fn(a)?a.g.statusText:""}catch{x=""}a.l=x+" ["+a.Z()+"]",rm(a)}}finally{pa(a)}}}}function pa(a,h){if(a.g){sm(a);const d=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||nt(a,"ready");try{d.onreadystatechange=g}catch{}}}function sm(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function fn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<fn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),PT(h)}};function om(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function YT(a){const h={};a=(a.g&&2<=fn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(_(a[g]))continue;var d=R(a[g]);const C=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const x=h[C]||[];h[C]=x,x.push(d)}w(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Cs(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function am(a){this.Aa=0,this.i=[],this.j=new Es,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Cs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Cs("baseRetryDelayMs",5e3,a),this.cb=Cs("retryDelaySeedMs",1e4,a),this.Wa=Cs("forwardChannelMaxRetries",2,a),this.wa=Cs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new zp(a&&a.concurrentRequestLimit),this.Da=new HT,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=am.prototype,t.la=8,t.G=1,t.connect=function(a,h,d,g){rt(0),this.W=a,this.H=h||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=gm(this,null,this.W),ga(this)};function oc(a){if(lm(a),a.G==3){var h=a.U++,d=dn(a.I);if(he(d,"SID",a.K),he(d,"RID",h),he(d,"TYPE","terminate"),ks(a,d),h=new Ln(a,a.j,h),h.L=2,h.v=ha(dn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=h.v,d=!0),d||(h.g=ym(h.j,null),h.g.ea(h.v)),h.F=Date.now(),la(h)}mm(a)}function ma(a){a.g&&(lc(a),a.g.cancel(),a.g=null)}function lm(a){ma(a),a.u&&(l.clearTimeout(a.u),a.u=null),ya(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function ga(a){if(!$p(a.h)&&!a.s){a.s=!0;var h=a.Ga;an||J(),B||(an(),B=!0),Q.add(h,a),a.B=0}}function XT(a,h){return Wp(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=ws(m(a.Ga,a,h),pm(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const C=new Ln(this,this.j,a);let x=this.o;if(this.S&&(x?(x=y(x),I(x,this.S)):x=this.S),this.m!==null||this.O||(C.H=x,x=null),this.P)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=cm(this,C,h),d=dn(this.I),he(d,"RID",a),he(d,"CVER",22),this.D&&he(d,"X-HTTP-Session-Id",this.D),ks(this,d),x&&(this.O?h="headers="+encodeURIComponent(String(tm(x)))+"&"+h:this.m&&sc(d,this.m,x)),ic(this.h,C),this.Ua&&he(d,"TYPE","init"),this.P?(he(d,"$req",h),he(d,"SID","null"),C.T=!0,ec(C,d,null)):ec(C,d,h),this.G=2}}else this.G==3&&(a?um(this,a):this.i.length==0||$p(this.h)||um(this))};function um(a,h){var d;h?d=h.l:d=a.U++;const g=dn(a.I);he(g,"SID",a.K),he(g,"RID",d),he(g,"AID",a.T),ks(a,g),a.m&&a.o&&sc(g,a.m,a.o),d=new Ln(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),h&&(a.i=h.D.concat(a.i)),h=cm(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),ic(a.h,d),ec(d,g,h)}function ks(a,h){a.H&&j(a.H,function(d,g){he(h,g,d)}),a.l&&Kp({},function(d,g){he(h,g,d)})}function cm(a,h,d){d=Math.min(a.i.length,d);var g=a.l?m(a.l.Na,a.l,a):null;e:{var C=a.i;let x=-1;for(;;){const U=["count="+d];x==-1?0<d?(x=C[0].g,U.push("ofs="+x)):x=0:U.push("ofs="+x);let ue=!0;for(let be=0;be<d;be++){let ie=C[be].g;const He=C[be].map;if(ie-=x,0>ie)x=Math.max(0,C[be].g-100),ue=!1;else try{KT(He,U,"req"+ie+"_")}catch{g&&g(He)}}if(ue){g=U.join("&");break e}}}return a=a.i.splice(0,d),h.D=a,g}function hm(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;an||J(),B||(an(),B=!0),Q.add(h,a),a.v=0}}function ac(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=ws(m(a.Fa,a),pm(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,dm(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=ws(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,rt(10),ma(this),dm(this))};function lc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function dm(a){a.g=new Ln(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=dn(a.qa);he(h,"RID","rpc"),he(h,"SID",a.K),he(h,"AID",a.T),he(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&he(h,"TO",a.ja),he(h,"TYPE","xmlhttp"),ks(a,h),a.m&&a.o&&sc(h,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=ha(dn(h)),d.m=null,d.P=!0,Up(d,a)}t.Za=function(){this.C!=null&&(this.C=null,ma(this),ac(this),rt(19))};function ya(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function fm(a,h){var d=null;if(a.g==h){ya(a),lc(a),a.g=null;var g=2}else if(rc(a.h,h))d=h.D,qp(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){d=h.m?h.m.length:0,h=Date.now()-h.F;var C=a.B;g=sa(),nt(g,new Lp(g,d)),ga(a)}else hm(a);else if(C=h.s,C==3||C==0&&0<h.X||!(g==1&&XT(a,h)||g==2&&ac(a)))switch(d&&0<d.length&&(h=a.h,h.i=h.i.concat(d)),C){case 1:Pr(a,5);break;case 4:Pr(a,10);break;case 3:Pr(a,6);break;default:Pr(a,2)}}}function pm(a,h){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*h}function Pr(a,h){if(a.j.info("Error code "+h),h==2){var d=m(a.fb,a),g=a.Xa;const C=!g;g=new Rr(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ua(g,"https"),ha(g),C?WT(g.toString(),d):qT(g.toString(),d)}else rt(2);a.G=0,a.l&&a.l.sa(h),mm(a),lm(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),rt(2)):(this.j.info("Failed to ping google.com"),rt(1))};function mm(a){if(a.G=0,a.ka=[],a.l){const h=Hp(a.h);(h.length!=0||a.i.length!=0)&&(D(a.ka,h),D(a.ka,a.i),a.h.i.length=0,N(a.i),a.i.length=0),a.l.ra()}}function gm(a,h,d){var g=d instanceof Rr?dn(d):new Rr(d);if(g.g!="")h&&(g.g=h+"."+g.g),ca(g,g.s);else{var C=l.location;g=C.protocol,h=h?h+"."+C.hostname:C.hostname,C=+C.port;var x=new Rr(null);g&&ua(x,g),h&&(x.g=h),C&&ca(x,C),d&&(x.l=d),g=x}return d=a.D,h=a.ya,d&&h&&he(g,d,h),he(g,"VER",a.la),ks(a,g),g}function ym(a,h,d){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Ee(new da({eb:d})):new Ee(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function _m(){}t=_m.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function _a(){}_a.prototype.g=function(a,h){return new gt(a,h)};function gt(a,h){qe.call(this),this.g=new am(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!_(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!_(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new ci(this)}P(gt,qe),gt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},gt.prototype.close=function(){oc(this.g)},gt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Gu(a),a=d);h.i.push(new VT(h.Ya++,a)),h.G==3&&ga(h)},gt.prototype.N=function(){this.g.l=null,delete this.j,oc(this.g),delete this.g,gt.aa.N.call(this)};function vm(a){Yu.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}P(vm,Yu);function wm(){Xu.call(this),this.status=1}P(wm,Xu);function ci(a){this.g=a}P(ci,_m),ci.prototype.ua=function(){nt(this.g,"a")},ci.prototype.ta=function(a){nt(this.g,new vm(a))},ci.prototype.sa=function(a){nt(this.g,new wm)},ci.prototype.ra=function(){nt(this.g,"b")},_a.prototype.createWebChannel=_a.prototype.g,gt.prototype.send=gt.prototype.o,gt.prototype.open=gt.prototype.m,gt.prototype.close=gt.prototype.close,xE=function(){return new _a},DE=function(){return sa()},NE=Sr,id={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},oa.NO_ERROR=0,oa.TIMEOUT=8,oa.HTTP_ERROR=6,al=oa,Mp.COMPLETE="complete",kE=Mp,Dp.EventType=_s,_s.OPEN="a",_s.CLOSE="b",_s.ERROR="c",_s.MESSAGE="d",qe.prototype.listen=qe.prototype.K,qs=Dp,Ee.prototype.listenOnce=Ee.prototype.L,Ee.prototype.getLastError=Ee.prototype.Ka,Ee.prototype.getLastErrorCode=Ee.prototype.Ba,Ee.prototype.getStatus=Ee.prototype.Z,Ee.prototype.getResponseJson=Ee.prototype.Oa,Ee.prototype.getResponseText=Ee.prototype.oa,Ee.prototype.send=Ee.prototype.ea,Ee.prototype.setWithCredentials=Ee.prototype.Ha,CE=Ee}).apply(typeof Ua<"u"?Ua:typeof self<"u"?self:typeof window<"u"?window:{});const yy="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Xe.UNAUTHENTICATED=new Xe(null),Xe.GOOGLE_CREDENTIALS=new Xe("google-credentials-uid"),Xe.FIRST_PARTY=new Xe("first-party-uid"),Xe.MOCK_USER=new Xe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hs="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr=new _u("@firebase/firestore");function Fs(){return Gr.logLevel}function q(t,...e){if(Gr.logLevel<=te.DEBUG){const n=e.map(Of);Gr.debug(`Firestore (${hs}): ${t}`,...n)}}function Nn(t,...e){if(Gr.logLevel<=te.ERROR){const n=e.map(Of);Gr.error(`Firestore (${hs}): ${t}`,...n)}}function Gi(t,...e){if(Gr.logLevel<=te.WARN){const n=e.map(Of);Gr.warn(`Firestore (${hs}): ${t}`,...n)}}function Of(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(t="Unexpected state"){const e=`FIRESTORE (${hs}) INTERNAL ASSERTION FAILED: `+t;throw Nn(e),new Error(e)}function ae(t,e){t||G()}function X(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends Kt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class S1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Xe.UNAUTHENTICATED))}shutdown(){}}class A1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class R1{constructor(e){this.t=e,this.currentUser=Xe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ae(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new In;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new In,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new In)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ae(typeof r.accessToken=="string"),new OE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ae(e===null||typeof e=="string"),new Xe(e)}}class P1{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Xe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class C1{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new P1(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Xe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class k1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class N1{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ae(this.o===void 0);const r=s=>{s.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ae(typeof n.token=="string"),this.R=n.token,new k1(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D1(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=D1(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function se(t,e){return t<e?-1:t>e?1:0}function Qi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new W(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Oe.fromMillis(Date.now())}static fromDate(e){return Oe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Oe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?se(this.nanoseconds,e.nanoseconds):se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Y(e)}static min(){return new Y(new Oe(0,0))}static max(){return new Y(new Oe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e,n,r){n===void 0?n=0:n>e.length&&G(),r===void 0?r=e.length-n:r>e.length-n&&G(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Oo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Oo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class fe extends Oo{construct(e,n,r){return new fe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new fe(n)}static emptyPath(){return new fe([])}}const x1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class je extends Oo{construct(e,n,r){return new je(e,n,r)}static isValidIdentifier(e){return x1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),je.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new je(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new W(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new W(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new W(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new W(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new je(n)}static emptyPath(){return new je([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(fe.fromString(e))}static fromName(e){return new H(fe.fromString(e).popFirst(5))}static empty(){return new H(fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return fe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new fe(e.slice()))}}function O1(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(r===1e9?new Oe(n+1,0):new Oe(n,r));return new fr(i,H.empty(),e)}function V1(t){return new fr(t.readTime,t.key,-1)}class fr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new fr(Y.min(),H.empty(),-1)}static max(){return new fr(Y.max(),H.empty(),-1)}}function L1(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:se(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class b1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qo(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==M1)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(i=>i?L.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new L((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(f=>{o[c]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new L((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function F1(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Yo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Vf.oe=-1;function Tu(t){return t==null}function Wl(t){return t===0&&1/t==-1/0}function U1(t){return typeof t=="number"&&Number.isInteger(t)&&!Wl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _y(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ii(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function LE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e,n){this.comparator=e,this.root=n||Ue.EMPTY}insert(e,n){return new we(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ue.BLACK,null,null))}remove(e){return new we(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ue.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ja(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ja(this.root,e,this.comparator,!1)}getReverseIterator(){return new ja(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ja(this.root,e,this.comparator,!0)}}class ja{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ue{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ue.RED,this.left=i??Ue.EMPTY,this.right=s??Ue.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ue(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ue.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ue.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}Ue.EMPTY=null,Ue.RED=!0,Ue.BLACK=!1;Ue.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Ue(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.comparator=e,this.data=new we(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new vy(this.data.getIterator())}getIteratorFrom(e){return new vy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ze)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ze(this.comparator);return n.data=e,n}}class vy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.fields=e,e.sort(je.comparator)}static empty(){return new vt([])}unionWith(e){let n=new ze(je.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new vt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Qi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new ME("Invalid base64 string: "+s):s}}(e);return new We(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new We(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}We.EMPTY_BYTE_STRING=new We("");const j1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function pr(t){if(ae(!!t),typeof t=="string"){let e=0;const n=j1.exec(t);if(ae(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Se(t.seconds),nanos:Se(t.nanos)}}function Se(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Qr(t){return typeof t=="string"?We.fromBase64String(t):We.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Mf(t){const e=t.mapValue.fields.__previous_value__;return Lf(e)?Mf(e):e}function Vo(t){const e=pr(t.mapValue.fields.__local_write_time__.timestampValue);return new Oe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B1{constructor(e,n,r,i,s,o,l,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}class Lo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Lo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Lo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ba={mapValue:{}};function Yr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Lf(t)?4:$1(t)?9007199254740991:z1(t)?10:11:G()}function on(t,e){if(t===e)return!0;const n=Yr(t);if(n!==Yr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Vo(t).isEqual(Vo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=pr(i.timestampValue),l=pr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Qr(i.bytesValue).isEqual(Qr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Se(i.geoPointValue.latitude)===Se(s.geoPointValue.latitude)&&Se(i.geoPointValue.longitude)===Se(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Se(i.integerValue)===Se(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Se(i.doubleValue),l=Se(s.doubleValue);return o===l?Wl(o)===Wl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Qi(t.arrayValue.values||[],e.arrayValue.values||[],on);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(_y(o)!==_y(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!on(o[u],l[u])))return!1;return!0}(t,e);default:return G()}}function Mo(t,e){return(t.values||[]).find(n=>on(n,e))!==void 0}function Yi(t,e){if(t===e)return 0;const n=Yr(t),r=Yr(e);if(n!==r)return se(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return se(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Se(s.integerValue||s.doubleValue),u=Se(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return wy(t.timestampValue,e.timestampValue);case 4:return wy(Vo(t),Vo(e));case 5:return se(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Qr(s),u=Qr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const f=se(l[c],u[c]);if(f!==0)return f}return se(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=se(Se(s.latitude),Se(o.latitude));return l!==0?l:se(Se(s.longitude),Se(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Ey(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,c,f;const p=s.fields||{},m=o.fields||{},E=(l=p.value)===null||l===void 0?void 0:l.arrayValue,P=(u=m.value)===null||u===void 0?void 0:u.arrayValue,N=se(((c=E==null?void 0:E.values)===null||c===void 0?void 0:c.length)||0,((f=P==null?void 0:P.values)===null||f===void 0?void 0:f.length)||0);return N!==0?N:Ey(E,P)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Ba.mapValue&&o===Ba.mapValue)return 0;if(s===Ba.mapValue)return 1;if(o===Ba.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},f=Object.keys(c);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const m=se(u[p],f[p]);if(m!==0)return m;const E=Yi(l[u[p]],c[f[p]]);if(E!==0)return E}return se(u.length,f.length)}(t.mapValue,e.mapValue);default:throw G()}}function wy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return se(t,e);const n=pr(t),r=pr(e),i=se(n.seconds,r.seconds);return i!==0?i:se(n.nanos,r.nanos)}function Ey(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Yi(n[i],r[i]);if(s)return s}return se(n.length,r.length)}function Xi(t){return sd(t)}function sd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=pr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Qr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return H.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=sd(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${sd(n.fields[o])}`;return i+"}"}(t.mapValue):G()}function Ty(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function od(t){return!!t&&"integerValue"in t}function bf(t){return!!t&&"arrayValue"in t}function Iy(t){return!!t&&"nullValue"in t}function Sy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ll(t){return!!t&&"mapValue"in t}function z1(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function so(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ii(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=so(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=so(t.arrayValue.values[n]);return e}return Object.assign({},t)}function $1(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.value=e}static empty(){return new ct({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ll(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=so(n)}setAll(e){let n=je.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=so(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());ll(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return on(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];ll(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ii(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ct(so(this.value))}}function bE(t){const e=[];return ii(t.fields,(n,r)=>{const i=new je([n]);if(ll(r)){const s=bE(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new vt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Ze(e,0,Y.min(),Y.min(),Y.min(),ct.empty(),0)}static newFoundDocument(e,n,r,i){return new Ze(e,1,n,Y.min(),r,i,0)}static newNoDocument(e,n){return new Ze(e,2,n,Y.min(),Y.min(),ct.empty(),0)}static newUnknownDocument(e,n){return new Ze(e,3,n,Y.min(),Y.min(),ct.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ct.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ze&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ze(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(e,n){this.position=e,this.inclusive=n}}function Ay(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=H.comparator(H.fromName(o.referenceValue),n.key):r=Yi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ry(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!on(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(e,n="asc"){this.field=e,this.dir=n}}function W1(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{}class ke extends FE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new H1(e,n,r):n==="array-contains"?new Q1(e,r):n==="in"?new Y1(e,r):n==="not-in"?new X1(e,r):n==="array-contains-any"?new J1(e,r):new ke(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new K1(e,r):new G1(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Yi(n,this.value)):n!==null&&Yr(this.value)===Yr(n)&&this.matchesComparison(Yi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class qt extends FE{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new qt(e,n)}matches(e){return UE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function UE(t){return t.op==="and"}function jE(t){return q1(t)&&UE(t)}function q1(t){for(const e of t.filters)if(e instanceof qt)return!1;return!0}function ad(t){if(t instanceof ke)return t.field.canonicalString()+t.op.toString()+Xi(t.value);if(jE(t))return t.filters.map(e=>ad(e)).join(",");{const e=t.filters.map(n=>ad(n)).join(",");return`${t.op}(${e})`}}function BE(t,e){return t instanceof ke?function(r,i){return i instanceof ke&&r.op===i.op&&r.field.isEqual(i.field)&&on(r.value,i.value)}(t,e):t instanceof qt?function(r,i){return i instanceof qt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&BE(o,i.filters[l]),!0):!1}(t,e):void G()}function zE(t){return t instanceof ke?function(n){return`${n.field.canonicalString()} ${n.op} ${Xi(n.value)}`}(t):t instanceof qt?function(n){return n.op.toString()+" {"+n.getFilters().map(zE).join(" ,")+"}"}(t):"Filter"}class H1 extends ke{constructor(e,n,r){super(e,n,r),this.key=H.fromName(r.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.matchesComparison(n)}}class K1 extends ke{constructor(e,n){super(e,"in",n),this.keys=$E("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class G1 extends ke{constructor(e,n){super(e,"not-in",n),this.keys=$E("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function $E(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>H.fromName(r.referenceValue))}class Q1 extends ke{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return bf(n)&&Mo(n.arrayValue,this.value)}}class Y1 extends ke{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Mo(this.value.arrayValue,n)}}class X1 extends ke{constructor(e,n){super(e,"not-in",n)}matches(e){if(Mo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Mo(this.value.arrayValue,n)}}class J1 extends ke{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!bf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Mo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z1{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function Py(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Z1(t,e,n,r,i,s,o)}function Ff(t){const e=X(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>ad(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Tu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Xi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Xi(r)).join(",")),e.ue=n}return e.ue}function Uf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!W1(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!BE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ry(t.startAt,e.startAt)&&Ry(t.endAt,e.endAt)}function ld(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function eN(t,e,n,r,i,s,o,l){return new Xo(t,e,n,r,i,s,o,l)}function jf(t){return new Xo(t)}function Cy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function WE(t){return t.collectionGroup!==null}function oo(t){const e=X(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new ze(je.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Hl(s,r))}),n.has(je.keyField().canonicalString())||e.ce.push(new Hl(je.keyField(),r))}return e.ce}function nn(t){const e=X(t);return e.le||(e.le=tN(e,oo(t))),e.le}function tN(t,e){if(t.limitType==="F")return Py(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Hl(i.field,s)});const n=t.endAt?new ql(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ql(t.startAt.position,t.startAt.inclusive):null;return Py(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function ud(t,e){const n=t.filters.concat([e]);return new Xo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function cd(t,e,n){return new Xo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Iu(t,e){return Uf(nn(t),nn(e))&&t.limitType===e.limitType}function qE(t){return`${Ff(nn(t))}|lt:${t.limitType}`}function pi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>zE(i)).join(", ")}]`),Tu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Xi(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Xi(i)).join(",")),`Target(${r})`}(nn(t))}; limitType=${t.limitType})`}function Su(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):H.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of oo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=Ay(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,oo(r),i)||r.endAt&&!function(o,l,u){const c=Ay(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,oo(r),i))}(t,e)}function nN(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function HE(t){return(e,n)=>{let r=!1;for(const i of oo(t)){const s=rN(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function rN(t,e,n){const r=t.field.isKeyField()?H.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?Yi(u,c):G()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return G()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ii(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return LE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iN=new we(H.comparator);function Dn(){return iN}const KE=new we(H.comparator);function Hs(...t){let e=KE;for(const n of t)e=e.insert(n.key,n);return e}function GE(t){let e=KE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Lr(){return ao()}function QE(){return ao()}function ao(){return new ds(t=>t.toString(),(t,e)=>t.isEqual(e))}const sN=new we(H.comparator),oN=new ze(H.comparator);function ee(...t){let e=oN;for(const n of t)e=e.add(n);return e}const aN=new ze(se);function lN(){return aN}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Wl(e)?"-0":e}}function YE(t){return{integerValue:""+t}}function uN(t,e){return U1(e)?YE(e):Bf(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(){this._=void 0}}function cN(t,e,n){return t instanceof bo?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Lf(s)&&(s=Mf(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Ji?JE(t,e):t instanceof Zi?ZE(t,e):function(i,s){const o=XE(i,s),l=ky(o)+ky(i.Pe);return od(o)&&od(i.Pe)?YE(l):Bf(i.serializer,l)}(t,e)}function hN(t,e,n){return t instanceof Ji?JE(t,e):t instanceof Zi?ZE(t,e):n}function XE(t,e){return t instanceof Kl?function(r){return od(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class bo extends Au{}class Ji extends Au{constructor(e){super(),this.elements=e}}function JE(t,e){const n=e0(e);for(const r of t.elements)n.some(i=>on(i,r))||n.push(r);return{arrayValue:{values:n}}}class Zi extends Au{constructor(e){super(),this.elements=e}}function ZE(t,e){let n=e0(e);for(const r of t.elements)n=n.filter(i=>!on(i,r));return{arrayValue:{values:n}}}class Kl extends Au{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function ky(t){return Se(t.integerValue||t.doubleValue)}function e0(t){return bf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(e,n){this.field=e,this.transform=n}}function dN(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Ji&&i instanceof Ji||r instanceof Zi&&i instanceof Zi?Qi(r.elements,i.elements,on):r instanceof Kl&&i instanceof Kl?on(r.Pe,i.Pe):r instanceof bo&&i instanceof bo}(t.transform,e.transform)}class fN{constructor(e,n){this.version=e,this.transformResults=n}}class xt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new xt}static exists(e){return new xt(void 0,e)}static updateTime(e){return new xt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ul(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ru{}function t0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new $f(t.key,xt.none()):new Jo(t.key,t.data,xt.none());{const n=t.data,r=ct.empty();let i=new ze(je.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Tr(t.key,r,new vt(i.toArray()),xt.none())}}function pN(t,e,n){t instanceof Jo?function(i,s,o){const l=i.value.clone(),u=Dy(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Tr?function(i,s,o){if(!ul(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Dy(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(n0(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function lo(t,e,n,r){return t instanceof Jo?function(s,o,l,u){if(!ul(s.precondition,o))return l;const c=s.value.clone(),f=xy(s.fieldTransforms,u,o);return c.setAll(f),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Tr?function(s,o,l,u){if(!ul(s.precondition,o))return l;const c=xy(s.fieldTransforms,u,o),f=o.data;return f.setAll(n0(s)),f.setAll(c),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return ul(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function mN(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=XE(r.transform,i||null);s!=null&&(n===null&&(n=ct.empty()),n.set(r.field,s))}return n||null}function Ny(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Qi(r,i,(s,o)=>dN(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Jo extends Ru{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Tr extends Ru{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function n0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Dy(t,e,n){const r=new Map;ae(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,hN(o,l,n[i]))}return r}function xy(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,cN(s,o,e))}return r}class $f extends Ru{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class gN extends Ru{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yN{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&pN(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=lo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=lo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=QE();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=t0(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ee())}isEqual(e){return this.batchId===e.batchId&&Qi(this.mutations,e.mutations,(n,r)=>Ny(n,r))&&Qi(this.baseMutations,e.baseMutations,(n,r)=>Ny(n,r))}}class Wf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ae(e.mutations.length===r.length);let i=function(){return sN}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Wf(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _N{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vN{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pe,ne;function wN(t){switch(t){default:return G();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function r0(t){if(t===void 0)return Nn("GRPC error has no .code"),V.UNKNOWN;switch(t){case Pe.OK:return V.OK;case Pe.CANCELLED:return V.CANCELLED;case Pe.UNKNOWN:return V.UNKNOWN;case Pe.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Pe.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Pe.INTERNAL:return V.INTERNAL;case Pe.UNAVAILABLE:return V.UNAVAILABLE;case Pe.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Pe.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Pe.NOT_FOUND:return V.NOT_FOUND;case Pe.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Pe.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Pe.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Pe.ABORTED:return V.ABORTED;case Pe.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Pe.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Pe.DATA_LOSS:return V.DATA_LOSS;default:return G()}}(ne=Pe||(Pe={}))[ne.OK=0]="OK",ne[ne.CANCELLED=1]="CANCELLED",ne[ne.UNKNOWN=2]="UNKNOWN",ne[ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ne[ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ne[ne.NOT_FOUND=5]="NOT_FOUND",ne[ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",ne[ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",ne[ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",ne[ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ne[ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ne[ne.ABORTED=10]="ABORTED",ne[ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",ne[ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",ne[ne.INTERNAL=13]="INTERNAL",ne[ne.UNAVAILABLE=14]="UNAVAILABLE",ne[ne.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EN(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TN=new Ur([4294967295,4294967295],0);function Oy(t){const e=EN().encode(t),n=new PE;return n.update(e),new Uint8Array(n.digest())}function Vy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ur([n,r],0),new Ur([i,s],0)]}class qf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ks(`Invalid padding: ${n}`);if(r<0)throw new Ks(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ks(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ks(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Ur.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Ur.fromNumber(r)));return i.compare(TN)===1&&(i=new Ur([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Oy(e),[r,i]=Vy(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new qf(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=Oy(e),[r,i]=Vy(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ks extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Zo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Pu(Y.min(),i,new we(se),Dn(),ee())}}class Zo{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Zo(r,n,ee(),ee(),ee())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class i0{constructor(e,n){this.targetId=e,this.me=n}}class s0{constructor(e,n,r=We.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Ly{constructor(){this.fe=0,this.ge=by(),this.pe=We.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ee(),n=ee(),r=ee();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:G()}}),new Zo(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=by()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ae(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class IN{constructor(e){this.Le=e,this.Be=new Map,this.ke=Dn(),this.qe=My(),this.Qe=new we(se)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:G()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(ld(s))if(r===0){const o=new H(s.path);this.Ue(n,o,Ze.newNoDocument(o,Y.min()))}else ae(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Qr(r).toUint8Array()}catch(u){if(u instanceof ME)return Gi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new qf(o,i,s)}catch(u){return Gi(u instanceof Ks?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&ld(l.target)){const u=new H(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,Ze.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=ee();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Pu(e,n,this.Qe,this.ke,r);return this.ke=Dn(),this.qe=My(),this.Qe=new we(se),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Ly,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ze(se),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||q("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Ly),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function My(){return new we(H.comparator)}function by(){return new we(H.comparator)}const SN={asc:"ASCENDING",desc:"DESCENDING"},AN={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},RN={and:"AND",or:"OR"};class PN{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function hd(t,e){return t.useProto3Json||Tu(e)?e:{value:e}}function Gl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function o0(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function CN(t,e){return Gl(t,e.toTimestamp())}function rn(t){return ae(!!t),Y.fromTimestamp(function(n){const r=pr(n);return new Oe(r.seconds,r.nanos)}(t))}function Hf(t,e){return dd(t,e).canonicalString()}function dd(t,e){const n=function(i){return new fe(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function a0(t){const e=fe.fromString(t);return ae(d0(e)),e}function fd(t,e){return Hf(t.databaseId,e.path)}function Wc(t,e){const n=a0(e);if(n.get(1)!==t.databaseId.projectId)throw new W(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(u0(n))}function l0(t,e){return Hf(t.databaseId,e)}function kN(t){const e=a0(t);return e.length===4?fe.emptyPath():u0(e)}function pd(t){return new fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function u0(t){return ae(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Fy(t,e,n){return{name:fd(t,e),fields:n.value.mapValue.fields}}function NN(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,f){return c.useProto3Json?(ae(f===void 0||typeof f=="string"),We.fromBase64String(f||"")):(ae(f===void 0||f instanceof Buffer||f instanceof Uint8Array),We.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const f=c.code===void 0?V.UNKNOWN:r0(c.code);return new W(f,c.message||"")}(o);n=new s0(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Wc(t,r.document.name),s=rn(r.document.updateTime),o=r.document.createTime?rn(r.document.createTime):Y.min(),l=new ct({mapValue:{fields:r.document.fields}}),u=Ze.newFoundDocument(i,s,o,l),c=r.targetIds||[],f=r.removedTargetIds||[];n=new cl(c,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Wc(t,r.document),s=r.readTime?rn(r.readTime):Y.min(),o=Ze.newNoDocument(i,s),l=r.removedTargetIds||[];n=new cl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Wc(t,r.document),s=r.removedTargetIds||[];n=new cl([],s,i,null)}else{if(!("filter"in e))return G();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new vN(i,s),l=r.targetId;n=new i0(l,o)}}return n}function DN(t,e){let n;if(e instanceof Jo)n={update:Fy(t,e.key,e.value)};else if(e instanceof $f)n={delete:fd(t,e.key)};else if(e instanceof Tr)n={update:Fy(t,e.key,e.data),updateMask:jN(e.fieldMask)};else{if(!(e instanceof gN))return G();n={verify:fd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof bo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ji)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Zi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Kl)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw G()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:CN(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:G()}(t,e.precondition)),n}function xN(t,e){return t&&t.length>0?(ae(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?rn(i.updateTime):rn(s);return o.isEqual(Y.min())&&(o=rn(s)),new fN(o,i.transformResults||[])}(n,e))):[]}function ON(t,e){return{documents:[l0(t,e.path)]}}function VN(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=l0(t,i);const s=function(c){if(c.length!==0)return h0(qt.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(f=>function(m){return{field:mi(m.field),direction:bN(m.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=hd(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function LN(t){let e=kN(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ae(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(p){const m=c0(p);return m instanceof qt&&jE(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(P){return new Hl(gi(P.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,Tu(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,E=p.values||[];return new ql(E,m)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const m=!p.before,E=p.values||[];return new ql(E,m)}(n.endAt)),eN(e,i,o,s,l,"F",u,c)}function MN(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function c0(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=gi(n.unaryFilter.field);return ke.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=gi(n.unaryFilter.field);return ke.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=gi(n.unaryFilter.field);return ke.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=gi(n.unaryFilter.field);return ke.create(o,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(t):t.fieldFilter!==void 0?function(n){return ke.create(gi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return qt.create(n.compositeFilter.filters.map(r=>c0(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return G()}}(n.compositeFilter.op))}(t):G()}function bN(t){return SN[t]}function FN(t){return AN[t]}function UN(t){return RN[t]}function mi(t){return{fieldPath:t.canonicalString()}}function gi(t){return je.fromServerFormat(t.fieldPath)}function h0(t){return t instanceof ke?function(n){if(n.op==="=="){if(Sy(n.value))return{unaryFilter:{field:mi(n.field),op:"IS_NAN"}};if(Iy(n.value))return{unaryFilter:{field:mi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Sy(n.value))return{unaryFilter:{field:mi(n.field),op:"IS_NOT_NAN"}};if(Iy(n.value))return{unaryFilter:{field:mi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:mi(n.field),op:FN(n.op),value:n.value}}}(t):t instanceof qt?function(n){const r=n.getFilters().map(i=>h0(i));return r.length===1?r[0]:{compositeFilter:{op:UN(n.op),filters:r}}}(t):G()}function jN(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function d0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e,n,r,i,s=Y.min(),o=Y.min(),l=We.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Jn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Jn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BN{constructor(e){this.ct=e}}function zN(t){const e=LN({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?cd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $N{constructor(){this.un=new WN}addToCollectionParentIndex(e,n){return this.un.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(fr.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(fr.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class WN{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ze(fe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ze(fe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new es(0)}static kn(){return new es(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qN{constructor(){this.changes=new ds(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ze.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HN{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KN{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&lo(r.mutation,i,vt.empty(),Oe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ee()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ee()){const i=Lr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Hs();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Lr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ee()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Dn();const o=ao(),l=function(){return ao()}();return n.forEach((u,c)=>{const f=r.get(c.key);i.has(c.key)&&(f===void 0||f.mutation instanceof Tr)?s=s.insert(c.key,c):f!==void 0?(o.set(c.key,f.mutation.getFieldMask()),lo(f.mutation,c,f.mutation.getFieldMask(),Oe.now())):o.set(c.key,vt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,f)=>o.set(c,f)),n.forEach((c,f)=>{var p;return l.set(c,new HN(f,(p=o.get(c))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=ao();let i=new we((o,l)=>o-l),s=ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let f=r.get(u)||vt.empty();f=l.applyToLocalView(c,f),r.set(u,f);const p=(i.get(l.batchId)||ee()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,f=u.value,p=QE();f.forEach(m=>{if(!s.has(m)){const E=t0(n.get(m),r.get(m));E!==null&&p.set(m,E),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return L.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return H.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):WE(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):L.resolve(Lr());let l=-1,u=s;return o.next(c=>L.forEach(c,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(f)?L.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{u=u.insert(f,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,ee())).next(f=>({batchId:l,changes:GE(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(r=>{let i=Hs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Hs();return this.indexManager.getCollectionParents(e,s).next(l=>L.forEach(l,u=>{const c=function(p,m){return new Xo(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(f=>{f.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const f=c.getKey();o.get(f)===null&&(o=o.insert(f,Ze.newInvalidDocument(f)))});let l=Hs();return o.forEach((u,c)=>{const f=s.get(u);f!==void 0&&lo(f.mutation,c,vt.empty(),Oe.now()),Su(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GN{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return L.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:rn(i.createTime)}}(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:zN(i.bundledQuery),readTime:rn(i.readTime)}}(n)),L.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QN{constructor(){this.overlays=new we(H.comparator),this.Ir=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Lr();return L.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const i=Lr(),s=n.length+1,o=new H(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return L.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new we((c,f)=>c-f);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let f=s.get(c.largestBatchId);f===null&&(f=Lr(),s=s.insert(c.largestBatchId,f)),f.set(c.getKey(),c)}}const l=Lr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,f)=>l.set(c,f)),!(l.size()>=i)););return L.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new _N(n,r));let s=this.Ir.get(n);s===void 0&&(s=ee(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YN{constructor(){this.sessionToken=We.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(){this.Tr=new ze(Ve.Er),this.dr=new ze(Ve.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Ve(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Ve(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new H(new fe([])),r=new Ve(n,e),i=new Ve(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new H(new fe([])),r=new Ve(n,e),i=new Ve(n,e+1);let s=ee();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ve(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ve{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return H.comparator(e.key,n.key)||se(e.wr,n.wr)}static Ar(e,n){return se(e.wr,n.wr)||H.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new ze(Ve.Er)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new yN(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new Ve(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return L.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ve(n,0),i=new Ve(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),L.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ze(se);return n.forEach(i=>{const s=new Ve(i,0),o=new Ve(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),L.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;H.isDocumentKey(s)||(s=s.child(""));const o=new Ve(new H(s),0);let l=new ze(se);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.wr)),!0)},o),L.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ae(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return L.forEach(n.mutations,i=>{const s=new Ve(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Ve(n,0),i=this.br.firstAfterOrEqual(r);return L.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JN{constructor(e){this.Mr=e,this.docs=function(){return new we(H.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():Ze.newInvalidDocument(n))}getEntries(e,n){let r=Dn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ze.newInvalidDocument(i))}),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Dn();const o=n.path,l=new H(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:f}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||L1(V1(f),r)<=0||(i.has(f.key)||Su(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return L.resolve(s)}getAllFromCollectionGroup(e,n,r,i){G()}Or(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new ZN(this)}getSize(e){return L.resolve(this.size)}}class ZN extends qN{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eD{constructor(e){this.persistence=e,this.Nr=new ds(n=>Ff(n),Uf),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Kf,this.targetCount=0,this.kr=es.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),L.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new es(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.Kn(n),L.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),L.waitFor(s).next(()=>i)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),L.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),L.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tD{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Vf(0),this.Kr=!1,this.Kr=!0,this.$r=new YN,this.referenceDelegate=e(this),this.Ur=new eD(this),this.indexManager=new $N,this.remoteDocumentCache=function(i){return new JN(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new BN(n),this.Gr=new GN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new QN,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new XN(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){q("MemoryPersistence","Starting transaction:",e);const i=new nD(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return L.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class nD extends b1{constructor(e){super(),this.currentSequenceNumber=e}}class Gf{constructor(e){this.persistence=e,this.Jr=new Kf,this.Yr=null}static Zr(e){return new Gf(e)}get Xr(){if(this.Yr)return this.Yr;throw G()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),L.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.Xr,r=>{const i=H.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,Y.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return L.or([()=>L.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=ee(),i=ee();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Qf(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rD{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iD{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return HR()?8:F1(tt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new rD;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Fs()<=te.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",pi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),L.resolve()):(Fs()<=te.DEBUG&&q("QueryEngine","Query:",pi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Fs()<=te.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",pi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,nn(n))):L.resolve())}Yi(e,n){if(Cy(n))return L.resolve(null);let r=nn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=cd(n,null,"F"),r=nn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ee(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,l);return this.ns(n,c,o,u.readTime)?this.Yi(e,cd(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return Cy(n)||i.isEqual(Y.min())?L.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?L.resolve(null):(Fs()<=te.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),pi(n)),this.rs(e,o,n,O1(i,-1)).next(l=>l))})}ts(e,n){let r=new ze(HE(e));return n.forEach((i,s)=>{Su(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return Fs()<=te.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",pi(n)),this.Ji.getDocumentsMatchingQuery(e,n,fr.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sD{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new we(se),this._s=new ds(s=>Ff(s),Uf),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new KN(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function oD(t,e,n,r){return new sD(t,e,n,r)}async function f0(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ee();for(const c of i){o.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}for(const c of s){l.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:l}))})})}function aD(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,f){const p=c.batch,m=p.keys();let E=L.resolve();return m.forEach(P=>{E=E.next(()=>f.getEntry(u,P)).next(N=>{const D=c.docVersions.get(P);ae(D!==null),N.version.compareTo(D)<0&&(p.applyToRemoteDocument(N,c),N.isValidDocument()&&(N.setReadTime(c.commitVersion),f.addEntry(N)))})}),E.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ee();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function p0(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function lD(t,e){const n=X(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((f,p)=>{const m=i.get(p);if(!m)return;l.push(n.Ur.removeMatchingKeys(s,f.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(s,f.addedDocuments,p)));let E=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?E=E.withResumeToken(We.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):f.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(f.resumeToken,r)),i=i.insert(p,E),function(N,D,T){return N.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(m,E,f)&&l.push(n.Ur.updateTargetData(s,E))});let u=Dn(),c=ee();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(uD(s,o,e.documentUpdates).next(f=>{u=f.Ps,c=f.Is})),!r.isEqual(Y.min())){const f=n.Ur.getLastRemoteSnapshotVersion(s).next(p=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return L.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.os=i,s))}function uD(t,e,n){let r=ee(),i=ee();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Dn();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Y.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):q("LocalStore","Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function cD(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function hD(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,L.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new Jn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function md(t,e,n){const r=X(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Yo(o))throw o;q("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Uy(t,e,n){const r=X(t);let i=Y.min(),s=ee();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,f){const p=X(u),m=p._s.get(f);return m!==void 0?L.resolve(p.os.get(m)):p.Ur.getTargetData(c,f)}(r,o,nn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:Y.min(),n?s:ee())).next(l=>(dD(r,nN(e),l),{documents:l,Ts:s})))}function dD(t,e,n){let r=t.us.get(e)||Y.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class jy{constructor(){this.activeTargetIds=lN()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class fD{constructor(){this.so=new jy,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new jy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pD{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let za=null;function qc(){return za===null?za=function(){return 268435456+Math.round(2147483648*Math.random())}():za++,"0x"+za.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gD{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ye="WebChannelConnection";class yD extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=qc(),u=this.xo(n,r.toUriEncodedString());q("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,u,c,i).then(f=>(q("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw Gi("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+hs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=mD[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=qc();return new Promise((o,l)=>{const u=new CE;u.setWithCredentials(!0),u.listenOnce(kE.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case al.NO_ERROR:const f=u.getResponseJson();q(Ye,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case al.TIMEOUT:q(Ye,`RPC '${e}' ${s} timed out`),l(new W(V.DEADLINE_EXCEEDED,"Request time out"));break;case al.HTTP_ERROR:const p=u.getStatus();if(q(Ye,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const E=m==null?void 0:m.error;if(E&&E.status&&E.message){const P=function(D){const T=D.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(T)>=0?T:V.UNKNOWN}(E.status);l(new W(P,E.message))}else l(new W(V.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new W(V.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{q(Ye,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);q(Ye,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=qc(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=xE(),l=DE(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");q(Ye,`Creating RPC '${e}' stream ${i}: ${f}`,u);const p=o.createWebChannel(f,u);let m=!1,E=!1;const P=new gD({Io:D=>{E?q(Ye,`Not sending because RPC '${e}' stream ${i} is closed:`,D):(m||(q(Ye,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),q(Ye,`RPC '${e}' stream ${i} sending:`,D),p.send(D))},To:()=>p.close()}),N=(D,T,_)=>{D.listen(T,A=>{try{_(A)}catch(O){setTimeout(()=>{throw O},0)}})};return N(p,qs.EventType.OPEN,()=>{E||(q(Ye,`RPC '${e}' stream ${i} transport opened.`),P.yo())}),N(p,qs.EventType.CLOSE,()=>{E||(E=!0,q(Ye,`RPC '${e}' stream ${i} transport closed`),P.So())}),N(p,qs.EventType.ERROR,D=>{E||(E=!0,Gi(Ye,`RPC '${e}' stream ${i} transport errored:`,D),P.So(new W(V.UNAVAILABLE,"The operation could not be completed")))}),N(p,qs.EventType.MESSAGE,D=>{var T;if(!E){const _=D.data[0];ae(!!_);const A=_,O=A.error||((T=A[0])===null||T===void 0?void 0:T.error);if(O){q(Ye,`RPC '${e}' stream ${i} received error:`,O);const F=O.status;let j=function(v){const I=Pe[v];if(I!==void 0)return r0(I)}(F),w=O.message;j===void 0&&(j=V.INTERNAL,w="Unknown error status: "+F+" with message "+O.message),E=!0,P.So(new W(j,w)),p.close()}else q(Ye,`RPC '${e}' stream ${i} received:`,_),P.bo(_)}}),N(l,NE.STAT_EVENT,D=>{D.stat===id.PROXY?q(Ye,`RPC '${e}' stream ${i} detected buffering proxy`):D.stat===id.NOPROXY&&q(Ye,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{P.wo()},0),P}}function Hc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cu(t){return new PN(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new m0(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(Nn(n.toString()),Nn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new W(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class _D extends g0{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=NN(this.serializer,e),r=function(s){if(!("targetChange"in s))return Y.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?rn(o.readTime):Y.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=pd(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=ld(u)?{documents:ON(s,u)}:{query:VN(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=o0(s,o.resumeToken);const c=hd(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(Y.min())>0){l.readTime=Gl(s,o.snapshotVersion.toTimestamp());const c=hd(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=MN(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=pd(this.serializer),n.removeTarget=e,this.a_(n)}}class vD extends g0{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return ae(!!e.streamToken),this.lastStreamToken=e.streamToken,ae(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ae(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=xN(e.writeResults,e.commitTime),r=rn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=pd(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>DN(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wD extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new W(V.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,dd(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new W(V.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,dd(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W(V.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class ED{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Nn(n),this.D_=!1):q("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TD{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{si(this)&&(q("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=X(u);c.L_.add(4),await ea(c),c.q_.set("Unknown"),c.L_.delete(4),await ku(c)}(this))})}),this.q_=new ED(r,i)}}async function ku(t){if(si(t))for(const e of t.B_)await e(!0)}async function ea(t){for(const e of t.B_)await e(!1)}function y0(t,e){const n=X(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Zf(n)?Jf(n):fs(n).r_()&&Xf(n,e))}function Yf(t,e){const n=X(t),r=fs(n);n.N_.delete(e),r.r_()&&_0(n,e),n.N_.size===0&&(r.r_()?r.o_():si(n)&&n.q_.set("Unknown"))}function Xf(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}fs(t).A_(e)}function _0(t,e){t.Q_.xe(e),fs(t).R_(e)}function Jf(t){t.Q_=new IN({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),fs(t).start(),t.q_.v_()}function Zf(t){return si(t)&&!fs(t).n_()&&t.N_.size>0}function si(t){return X(t).L_.size===0}function v0(t){t.Q_=void 0}async function ID(t){t.q_.set("Online")}async function SD(t){t.N_.forEach((e,n)=>{Xf(t,e)})}async function AD(t,e){v0(t),Zf(t)?(t.q_.M_(e),Jf(t)):t.q_.set("Unknown")}async function RD(t,e,n){if(t.q_.set("Online"),e instanceof s0&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ql(t,r)}else if(e instanceof cl?t.Q_.Ke(e):e instanceof i0?t.Q_.He(e):t.Q_.We(e),!n.isEqual(Y.min()))try{const r=await p0(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(c);f&&s.N_.set(c,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(We.EMPTY_BYTE_STRING,f.snapshotVersion)),_0(s,u);const p=new Jn(f.target,u,c,f.sequenceNumber);Xf(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){q("RemoteStore","Failed to raise snapshot:",r),await Ql(t,r)}}async function Ql(t,e,n){if(!Yo(e))throw e;t.L_.add(1),await ea(t),t.q_.set("Offline"),n||(n=()=>p0(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await ku(t)})}function w0(t,e){return e().catch(n=>Ql(t,n,e))}async function Nu(t){const e=X(t),n=mr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;PD(e);)try{const i=await cD(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,CD(e,i)}catch(i){await Ql(e,i)}E0(e)&&T0(e)}function PD(t){return si(t)&&t.O_.length<10}function CD(t,e){t.O_.push(e);const n=mr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function E0(t){return si(t)&&!mr(t).n_()&&t.O_.length>0}function T0(t){mr(t).start()}async function kD(t){mr(t).p_()}async function ND(t){const e=mr(t);for(const n of t.O_)e.m_(n.mutations)}async function DD(t,e,n){const r=t.O_.shift(),i=Wf.from(r,e,n);await w0(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Nu(t)}async function xD(t,e){e&&mr(t).V_&&await async function(r,i){if(function(o){return wN(o)&&o!==V.ABORTED}(i.code)){const s=r.O_.shift();mr(r).s_(),await w0(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Nu(r)}}(t,e),E0(t)&&T0(t)}async function zy(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),q("RemoteStore","RemoteStore received new credentials");const r=si(n);n.L_.add(3),await ea(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await ku(n)}async function OD(t,e){const n=X(t);e?(n.L_.delete(2),await ku(n)):e||(n.L_.add(2),await ea(n),n.q_.set("Unknown"))}function fs(t){return t.K_||(t.K_=function(n,r,i){const s=X(n);return s.w_(),new _D(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:ID.bind(null,t),Ro:SD.bind(null,t),mo:AD.bind(null,t),d_:RD.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Zf(t)?Jf(t):t.q_.set("Unknown")):(await t.K_.stop(),v0(t))})),t.K_}function mr(t){return t.U_||(t.U_=function(n,r,i){const s=X(n);return s.w_(),new vD(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:kD.bind(null,t),mo:xD.bind(null,t),f_:ND.bind(null,t),g_:DD.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Nu(t)):(await t.U_.stop(),t.O_.length>0&&(q("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new In,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new ep(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function tp(t,e){if(Nn("AsyncQueue",`${e}: ${t}`),Yo(t))return new W(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e){this.comparator=e?(n,r)=>e(n,r)||H.comparator(n.key,r.key):(n,r)=>H.comparator(n.key,r.key),this.keyedMap=Hs(),this.sortedSet=new we(this.comparator)}static emptySet(e){return new ji(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ji)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ji;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y{constructor(){this.W_=new we(H.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):G():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ts{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new ts(e,n,ji.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Iu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VD{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class LD{constructor(){this.queries=Wy(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=X(n),s=i.queries;i.queries=Wy(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new W(V.ABORTED,"Firestore shutting down"))}}function Wy(){return new ds(t=>qE(t),Iu)}async function I0(t,e){const n=X(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new VD,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=tp(o,`Initialization of query '${pi(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&np(n)}async function S0(t,e){const n=X(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function MD(t,e){const n=X(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&np(n)}function bD(t,e,n){const r=X(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function np(t){t.Y_.forEach(e=>{e.next()})}var gd,qy;(qy=gd||(gd={})).ea="default",qy.Cache="cache";class A0{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ts(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=ts.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==gd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R0{constructor(e){this.key=e}}class P0{constructor(e){this.key=e}}class FD{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ee(),this.mutatedKeys=ee(),this.Aa=HE(e),this.Ra=new ji(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new $y,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{const m=i.get(f),E=Su(this.query,p)?p:null,P=!!m&&this.mutatedKeys.has(m.key),N=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let D=!1;m&&E?m.data.isEqual(E.data)?P!==N&&(r.track({type:3,doc:E}),D=!0):this.ga(m,E)||(r.track({type:2,doc:E}),D=!0,(u&&this.Aa(E,u)>0||c&&this.Aa(E,c)<0)&&(l=!0)):!m&&E?(r.track({type:0,doc:E}),D=!0):m&&!E&&(r.track({type:1,doc:m}),D=!0,(u||c)&&(l=!0)),D&&(E?(o=o.add(E),s=N?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,p)=>function(E,P){const N=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return N(E)-N(P)}(f.type,p.type)||this.Aa(f.doc,p.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new ts(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new $y,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ee(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new P0(r))}),this.da.forEach(r=>{e.has(r)||n.push(new R0(r))}),n}ba(e){this.Ta=e.Ts,this.da=ee();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return ts.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class UD{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class jD{constructor(e){this.key=e,this.va=!1}}class BD{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new ds(l=>qE(l),Iu),this.Ma=new Map,this.xa=new Set,this.Oa=new we(H.comparator),this.Na=new Map,this.La=new Kf,this.Ba={},this.ka=new Map,this.qa=es.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function zD(t,e,n=!0){const r=O0(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await C0(r,e,n,!0),i}async function $D(t,e){const n=O0(t);await C0(n,e,!0,!1)}async function C0(t,e,n,r){const i=await hD(t.localStore,nn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await WD(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&y0(t.remoteStore,i),l}async function WD(t,e,n,r,i){t.Ka=(p,m,E)=>async function(N,D,T,_){let A=D.view.ma(T);A.ns&&(A=await Uy(N.localStore,D.query,!1).then(({documents:w})=>D.view.ma(w,A)));const O=_&&_.targetChanges.get(D.targetId),F=_&&_.targetMismatches.get(D.targetId)!=null,j=D.view.applyChanges(A,N.isPrimaryClient,O,F);return Ky(N,D.targetId,j.wa),j.snapshot}(t,p,m,E);const s=await Uy(t.localStore,e,!0),o=new FD(e,s.Ts),l=o.ma(s.documents),u=Zo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);Ky(t,n,c.wa);const f=new UD(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function qD(t,e,n){const r=X(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Iu(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await md(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Yf(r.remoteStore,i.targetId),yd(r,i.targetId)}).catch(Qo)):(yd(r,i.targetId),await md(r.localStore,i.targetId,!0))}async function HD(t,e){const n=X(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Yf(n.remoteStore,r.targetId))}async function KD(t,e,n){const r=ex(t);try{const i=await function(o,l){const u=X(o),c=Oe.now(),f=l.reduce((E,P)=>E.add(P.key),ee());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",E=>{let P=Dn(),N=ee();return u.cs.getEntries(E,f).next(D=>{P=D,P.forEach((T,_)=>{_.isValidDocument()||(N=N.add(T))})}).next(()=>u.localDocuments.getOverlayedDocuments(E,P)).next(D=>{p=D;const T=[];for(const _ of l){const A=mN(_,p.get(_.key).overlayedDocument);A!=null&&T.push(new Tr(_.key,A,bE(A.value.mapValue),xt.exists(!0)))}return u.mutationQueue.addMutationBatch(E,c,T,l)}).next(D=>{m=D;const T=D.applyToLocalDocumentSet(p,N);return u.documentOverlayCache.saveOverlays(E,D.batchId,T)})}).then(()=>({batchId:m.batchId,changes:GE(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new we(se)),c=c.insert(l,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await ta(r,i.changes),await Nu(r.remoteStore)}catch(i){const s=tp(i,"Failed to persist write");n.reject(s)}}async function k0(t,e){const n=X(t);try{const r=await lD(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(ae(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?ae(o.va):i.removedDocuments.size>0&&(ae(o.va),o.va=!1))}),await ta(n,r,e)}catch(r){await Qo(r)}}function Hy(t,e,n){const r=X(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=X(o);u.onlineState=l;let c=!1;u.queries.forEach((f,p)=>{for(const m of p.j_)m.Z_(l)&&(c=!0)}),c&&np(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function GD(t,e,n){const r=X(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new we(H.comparator);o=o.insert(s,Ze.newNoDocument(s,Y.min()));const l=ee().add(s),u=new Pu(Y.min(),new Map,new we(se),o,l);await k0(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),rp(r)}else await md(r.localStore,e,!1).then(()=>yd(r,e,n)).catch(Qo)}async function QD(t,e){const n=X(t),r=e.batch.batchId;try{const i=await aD(n.localStore,e);D0(n,r,null),N0(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ta(n,i)}catch(i){await Qo(i)}}async function YD(t,e,n){const r=X(t);try{const i=await function(o,l){const u=X(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let f;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(ae(p!==null),f=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,f)).next(()=>u.localDocuments.getDocuments(c,f))})}(r.localStore,e);D0(r,e,n),N0(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ta(r,i)}catch(i){await Qo(i)}}function N0(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function D0(t,e,n){const r=X(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function yd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||x0(t,r)})}function x0(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Yf(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),rp(t))}function Ky(t,e,n){for(const r of n)r instanceof R0?(t.La.addReference(r.key,e),XD(t,r)):r instanceof P0?(q("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||x0(t,r.key)):G()}function XD(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(q("SyncEngine","New document in limbo: "+n),t.xa.add(r),rp(t))}function rp(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new H(fe.fromString(e)),r=t.qa.next();t.Na.set(r,new jD(n)),t.Oa=t.Oa.insert(n,r),y0(t.remoteStore,new Jn(nn(jf(n.path)),r,"TargetPurposeLimboResolution",Vf.oe))}}async function ta(t,e,n){const r=X(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(c=>{var f;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=Qf.Wi(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const f=X(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>L.forEach(c,m=>L.forEach(m.$i,E=>f.persistence.referenceDelegate.addReference(p,m.targetId,E)).next(()=>L.forEach(m.Ui,E=>f.persistence.referenceDelegate.removeReference(p,m.targetId,E)))))}catch(p){if(!Yo(p))throw p;q("LocalStore","Failed to update sequence numbers: "+p)}for(const p of c){const m=p.targetId;if(!p.fromCache){const E=f.os.get(m),P=E.snapshotVersion,N=E.withLastLimboFreeSnapshotVersion(P);f.os=f.os.insert(m,N)}}}(r.localStore,s))}async function JD(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){q("SyncEngine","User change. New user:",e.toKey());const r=await f0(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new W(V.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ta(n,r.hs)}}function ZD(t,e){const n=X(t),r=n.Na.get(e);if(r&&r.va)return ee().add(r.key);{let i=ee();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function O0(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=k0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ZD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=GD.bind(null,e),e.Ca.d_=MD.bind(null,e.eventManager),e.Ca.$a=bD.bind(null,e.eventManager),e}function ex(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=QD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=YD.bind(null,e),e}class Yl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Cu(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return oD(this.persistence,new iD,e.initialUser,this.serializer)}Ga(e){return new tD(Gf.Zr,this.serializer)}Wa(e){return new fD}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Yl.provider={build:()=>new Yl};class _d{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Hy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=JD.bind(null,this.syncEngine),await OD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new LD}()}createDatastore(e){const n=Cu(e.databaseInfo.databaseId),r=function(s){return new yD(s)}(e.databaseInfo);return function(s,o,l,u){return new wD(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new TD(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Hy(this.syncEngine,n,0),function(){return By.D()?new By:new pD}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,f){const p=new BD(i,s,o,l,u,c);return f&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=X(i);q("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await ea(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}_d.provider={build:()=>new _d};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Nn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tx{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Xe.UNAUTHENTICATED,this.clientId=VE.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{q("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(q("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new In;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=tp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Kc(t,e){t.asyncQueue.verifyOperationInProgress(),q("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await f0(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Gy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await nx(t);q("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>zy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>zy(e.remoteStore,i)),t._onlineComponents=e}async function nx(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q("FirestoreClient","Using user provided OfflineComponentProvider");try{await Kc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Gi("Error using user provided cache. Falling back to memory cache: "+n),await Kc(t,new Yl)}}else q("FirestoreClient","Using default OfflineComponentProvider"),await Kc(t,new Yl);return t._offlineComponents}async function L0(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q("FirestoreClient","Using user provided OnlineComponentProvider"),await Gy(t,t._uninitializedComponentsProvider._online)):(q("FirestoreClient","Using default OnlineComponentProvider"),await Gy(t,new _d))),t._onlineComponents}function rx(t){return L0(t).then(e=>e.syncEngine)}async function M0(t){const e=await L0(t),n=e.eventManager;return n.onListen=zD.bind(null,e.syncEngine),n.onUnlisten=qD.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=$D.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=HD.bind(null,e.syncEngine),n}function ix(t,e,n={}){const r=new In;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const f=new V0({next:m=>{f.Za(),o.enqueueAndForget(()=>S0(s,p));const E=m.docs.has(l);!E&&m.fromCache?c.reject(new W(V.UNAVAILABLE,"Failed to get document because the client is offline.")):E&&m.fromCache&&u&&u.source==="server"?c.reject(new W(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new A0(jf(l.path),f,{includeMetadataChanges:!0,_a:!0});return I0(s,p)}(await M0(t),t.asyncQueue,e,n,r)),r.promise}function sx(t,e,n={}){const r=new In;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const f=new V0({next:m=>{f.Za(),o.enqueueAndForget(()=>S0(s,p)),m.fromCache&&u.source==="server"?c.reject(new W(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new A0(l,f,{includeMetadataChanges:!0,_a:!0});return I0(s,p)}(await M0(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qy=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F0(t,e,n){if(!n)throw new W(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ox(t,e,n,r){if(e===!0&&r===!0)throw new W(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Yy(t){if(!H.isDocumentKey(t))throw new W(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Xy(t){if(H.isDocumentKey(t))throw new W(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Du(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function Ht(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Du(t);throw new W(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new W(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new W(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ox("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=b0((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new W(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new W(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new W(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class xu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Jy({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Jy(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new S1;switch(r.type){case"firstParty":return new C1(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Qy.get(n);r&&(q("ComponentProvider","Removing Datastore"),Qy.delete(n),r.terminate())}(this),Promise.resolve()}}function ax(t,e,n,r={}){var i;const s=(t=Ht(t,xu))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Gi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=Xe.MOCK_USER;else{l=jR(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new W(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Xe(c)}t._authCredentials=new A1(new OE(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ps(this.firestore,e,this._query)}}class ot{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new cr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ot(this.firestore,e,this._key)}}class cr extends ps{constructor(e,n,r){super(e,n,jf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ot(this.firestore,null,new H(e))}withConverter(e){return new cr(this.firestore,e,this._path)}}function $a(t,e,...n){if(t=Ne(t),F0("collection","path",e),t instanceof xu){const r=fe.fromString(e,...n);return Xy(r),new cr(t,null,r)}{if(!(t instanceof ot||t instanceof cr))throw new W(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(fe.fromString(e,...n));return Xy(r),new cr(t.firestore,null,r)}}function Fo(t,e,...n){if(t=Ne(t),arguments.length===1&&(e=VE.newId()),F0("doc","path",e),t instanceof xu){const r=fe.fromString(e,...n);return Yy(r),new ot(t,null,new H(r))}{if(!(t instanceof ot||t instanceof cr))throw new W(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(fe.fromString(e,...n));return Yy(r),new ot(t.firestore,t instanceof cr?t.converter:null,new H(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new m0(this,"async_queue_retry"),this.Vu=()=>{const r=Hc();r&&q("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Hc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Hc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new In;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Yo(e))throw e;q("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Nn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=ep.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&G()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class oi extends xu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Zy,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Zy(e),this._firestoreClient=void 0,await e}}}function lx(t,e){const n=typeof t=="object"?t:If(),r=typeof t=="string"?t:"(default)",i=ni(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=FR("firestore");s&&ax(i,...s)}return i}function ip(t){if(t._terminated)throw new W(V.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||ux(t),t._firestoreClient}function ux(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,c,f){return new B1(l,u,c,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,b0(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new tx(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ns(We.fromBase64String(e))}catch(n){throw new W(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ns(We.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new je(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return se(this._lat,e._lat)||se(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cx=/^__.*__$/;class hx{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Tr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Jo(e,this.data,n,this.fieldTransforms)}}class U0{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Tr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function j0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class Vu{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Vu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Xl(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(j0(this.Cu)&&cx.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class dx{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Cu(e)}Qu(e,n,r,i=!1){return new Vu({Cu:e,methodName:n,qu:r,path:je.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Lu(t){const e=t._freezeSettings(),n=Cu(t._databaseId);return new dx(t._databaseId,!!e.ignoreUndefinedProperties,n)}function B0(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);cp("Data must be an object, but it was:",o,r);const l=$0(r,o);let u,c;if(s.merge)u=new vt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const p of s.mergeFields){const m=vd(e,p,n);if(!o.contains(m))throw new W(V.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);q0(f,m)||f.push(m)}u=new vt(f),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new hx(new ct(l),u,c)}class Mu extends ms{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Mu}}function z0(t,e,n){return new Vu({Cu:3,qu:e.settings.qu,methodName:t._methodName,xu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class ap extends ms{_toFieldTransform(e){return new zf(e.path,new bo)}isEqual(e){return e instanceof ap}}class lp extends ms{constructor(e,n){super(e),this.Ku=n}_toFieldTransform(e){const n=z0(this,e,!0),r=this.Ku.map(s=>ai(s,n)),i=new Ji(r);return new zf(e.path,i)}isEqual(e){return e instanceof lp&&qr(this.Ku,e.Ku)}}class up extends ms{constructor(e,n){super(e),this.Ku=n}_toFieldTransform(e){const n=z0(this,e,!0),r=this.Ku.map(s=>ai(s,n)),i=new Zi(r);return new zf(e.path,i)}isEqual(e){return e instanceof up&&qr(this.Ku,e.Ku)}}function fx(t,e,n,r){const i=t.Qu(1,e,n);cp("Data must be an object, but it was:",i,r);const s=[],o=ct.empty();ii(r,(u,c)=>{const f=hp(e,u,n);c=Ne(c);const p=i.Nu(f);if(c instanceof Mu)s.push(f);else{const m=ai(c,p);m!=null&&(s.push(f),o.set(f,m))}});const l=new vt(s);return new U0(o,l,i.fieldTransforms)}function px(t,e,n,r,i,s){const o=t.Qu(1,e,n),l=[vd(e,r,n)],u=[i];if(s.length%2!=0)throw new W(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(vd(e,s[m])),u.push(s[m+1]);const c=[],f=ct.empty();for(let m=l.length-1;m>=0;--m)if(!q0(c,l[m])){const E=l[m];let P=u[m];P=Ne(P);const N=o.Nu(E);if(P instanceof Mu)c.push(E);else{const D=ai(P,N);D!=null&&(c.push(E),f.set(E,D))}}const p=new vt(c);return new U0(f,p,o.fieldTransforms)}function mx(t,e,n,r=!1){return ai(n,t.Qu(r?4:3,e))}function ai(t,e){if(W0(t=Ne(t)))return cp("Unsupported field value:",e,t),$0(t,e);if(t instanceof ms)return function(r,i){if(!j0(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=ai(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Ne(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return uN(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Oe.fromDate(r);return{timestampValue:Gl(i.serializer,s)}}if(r instanceof Oe){const s=new Oe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Gl(i.serializer,s)}}if(r instanceof sp)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ns)return{bytesValue:o0(i.serializer,r._byteString)};if(r instanceof ot){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Hf(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof op)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return Bf(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Du(r)}`)}(t,e)}function $0(t,e){const n={};return LE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ii(t,(r,i)=>{const s=ai(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function W0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Oe||t instanceof sp||t instanceof ns||t instanceof ot||t instanceof ms||t instanceof op)}function cp(t,e,n){if(!W0(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Du(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function vd(t,e,n){if((e=Ne(e))instanceof Ou)return e._internalPath;if(typeof e=="string")return hp(t,e);throw Xl("Field path arguments must be of type string or ",t,!1,void 0,n)}const gx=new RegExp("[~\\*/\\[\\]]");function hp(t,e,n){if(e.search(gx)>=0)throw Xl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ou(...e.split("."))._internalPath}catch{throw Xl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Xl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new W(V.INVALID_ARGUMENT,l+t+u)}function q0(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H0{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new yx(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(dp("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class yx extends H0{data(){return super.data()}}function dp(t,e){return typeof e=="string"?hp(t,e):e instanceof Ou?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _x(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class fp{}class vx extends fp{}function Gc(t,e,...n){let r=[];e instanceof fp&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof pp).length,l=s.filter(u=>u instanceof bu).length;if(o>1||o>0&&l>0)throw new W(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class bu extends vx{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new bu(e,n,r)}_apply(e){const n=this._parse(e);return K0(e._query,n),new ps(e.firestore,e.converter,ud(e._query,n))}_parse(e){const n=Lu(e.firestore);return function(s,o,l,u,c,f,p){let m;if(c.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new W(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){t_(p,f);const E=[];for(const P of p)E.push(e_(u,s,P));m={arrayValue:{values:E}}}else m=e_(u,s,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||t_(p,f),m=mx(l,o,p,f==="in"||f==="not-in");return ke.create(c,f,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function fi(t,e,n){const r=e,i=dp("where",t);return bu._create(i,r,n)}class pp extends fp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new pp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:qt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)K0(o,u),o=ud(o,u)}(e._query,n),new ps(e.firestore,e.converter,ud(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function e_(t,e,n){if(typeof(n=Ne(n))=="string"){if(n==="")throw new W(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!WE(e)&&n.indexOf("/")!==-1)throw new W(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(fe.fromString(n));if(!H.isDocumentKey(r))throw new W(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ty(t,new H(r))}if(n instanceof ot)return Ty(t,n._key);throw new W(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Du(n)}.`)}function t_(t,e){if(!Array.isArray(t)||t.length===0)throw new W(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function K0(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new W(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new W(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class wx{convertValue(e,n="none"){switch(Yr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Se(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Qr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw G()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ii(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Se(o.doubleValue));return new op(s)}convertGeoPoint(e){return new sp(Se(e.latitude),Se(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Mf(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Vo(e));default:return null}}convertTimestamp(e){const n=pr(e);return new Oe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=fe.fromString(e);ae(d0(r));const i=new Lo(r.get(1),r.get(3)),s=new H(r.popFirst(5));return i.isEqual(n)||Nn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G0(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Q0 extends H0{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new hl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(dp("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class hl extends Q0{data(e={}){return super.data(e)}}class Ex{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Gs(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new hl(this._firestore,this._userDataWriter,r.key,r,new Gs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new hl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Gs(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new hl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Gs(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,f=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:Tx(l.type),doc:u,oldIndex:c,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Tx(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ix(t){t=Ht(t,ot);const e=Ht(t.firestore,oi);return ix(ip(e),t._key).then(n=>Cx(e,t,n))}class Y0 extends wx{constructor(e){super(),this.firestore=e}convertBytes(e){return new ns(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ot(this.firestore,null,n)}}function Qc(t){t=Ht(t,ps);const e=Ht(t.firestore,oi),n=ip(e),r=new Y0(e);return _x(t._query),sx(n,t._query).then(i=>new Ex(e,r,t,i))}function Sx(t,e,n){t=Ht(t,ot);const r=Ht(t.firestore,oi),i=G0(t.converter,e);return Fu(r,[B0(Lu(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,xt.none())])}function Ax(t,e,n,...r){t=Ht(t,ot);const i=Ht(t.firestore,oi),s=Lu(i);let o;return o=typeof(e=Ne(e))=="string"||e instanceof Ou?px(s,"updateDoc",t._key,e,n,r):fx(s,"updateDoc",t._key,e),Fu(i,[o.toMutation(t._key,xt.exists(!0))])}function Rx(t){return Fu(Ht(t.firestore,oi),[new $f(t._key,xt.none())])}function Px(t,e){const n=Ht(t.firestore,oi),r=Fo(t),i=G0(t.converter,e);return Fu(n,[B0(Lu(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,xt.exists(!1))]).then(()=>r)}function Fu(t,e){return function(r,i){const s=new In;return r.asyncQueue.enqueueAndForget(async()=>KD(await rx(r),i,s)),s.promise}(ip(t),e)}function Cx(t,e,n){const r=n.docs.get(e._key),i=new Y0(t);return new Q0(t,i,e._key,r,new Gs(n.hasPendingWrites,n.fromCache),e.converter)}function kx(){return new ap("serverTimestamp")}function _V(...t){return new lp("arrayUnion",t)}function vV(...t){return new up("arrayRemove",t)}(function(e,n=!0){(function(i){hs=i})(us),sn(new $t("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new oi(new R1(r.getProvider("auth-internal")),new N1(r.getProvider("app-check-internal")),function(c,f){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new W(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Lo(c.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Dt(yy,"4.7.3",e),Dt(yy,"4.7.3","esm2017")})();var Nx="firebase",Dx="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dt(Nx,Dx,"app");const X0="@firebase/installations",mp="0.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J0=1e4,Z0=`w:${mp}`,eT="FIS_v2",xx="https://firebaseinstallations.googleapis.com/v1",Ox=60*60*1e3,Vx="installations",Lx="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mx={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Xr=new ti(Vx,Lx,Mx);function tT(t){return t instanceof Kt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nT({projectId:t}){return`${xx}/projects/${t}/installations`}function rT(t){return{token:t.token,requestStatus:2,expiresIn:Fx(t.expiresIn),creationTime:Date.now()}}async function iT(t,e){const r=(await e.json()).error;return Xr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function sT({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function bx(t,{refreshToken:e}){const n=sT(t);return n.append("Authorization",Ux(e)),n}async function oT(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Fx(t){return Number(t.replace("s","000"))}function Ux(t){return`${eT} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jx({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=nT(t),i=sT(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:eT,appId:t.appId,sdkVersion:Z0},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await oT(()=>fetch(r,l));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:rT(c.authToken)}}else throw await iT("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aT(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bx(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zx=/^[cdef][\w-]{21}$/,wd="";function $x(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Wx(t);return zx.test(n)?n:wd}catch{return wd}}function Wx(t){return Bx(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uu(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lT=new Map;function uT(t,e){const n=Uu(t);cT(n,e),qx(n,e)}function cT(t,e){const n=lT.get(t);if(n)for(const r of n)r(e)}function qx(t,e){const n=Hx();n&&n.postMessage({key:t,fid:e}),Kx()}let Mr=null;function Hx(){return!Mr&&"BroadcastChannel"in self&&(Mr=new BroadcastChannel("[Firebase] FID Change"),Mr.onmessage=t=>{cT(t.data.key,t.data.fid)}),Mr}function Kx(){lT.size===0&&Mr&&(Mr.close(),Mr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gx="firebase-installations-database",Qx=1,Jr="firebase-installations-store";let Yc=null;function gp(){return Yc||(Yc=$w(Gx,Qx,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Jr)}}})),Yc}async function Jl(t,e){const n=Uu(t),i=(await gp()).transaction(Jr,"readwrite"),s=i.objectStore(Jr),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&uT(t,e.fid),e}async function hT(t){const e=Uu(t),r=(await gp()).transaction(Jr,"readwrite");await r.objectStore(Jr).delete(e),await r.done}async function ju(t,e){const n=Uu(t),i=(await gp()).transaction(Jr,"readwrite"),s=i.objectStore(Jr),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&uT(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yp(t){let e;const n=await ju(t.appConfig,r=>{const i=Yx(r),s=Xx(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===wd?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Yx(t){const e=t||{fid:$x(),registrationStatus:0};return dT(e)}function Xx(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Xr.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=Jx(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Zx(t)}:{installationEntry:e}}async function Jx(t,e){try{const n=await jx(t,e);return Jl(t.appConfig,n)}catch(n){throw tT(n)&&n.customData.serverCode===409?await hT(t.appConfig):await Jl(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Zx(t){let e=await n_(t.appConfig);for(;e.registrationStatus===1;)await aT(100),e=await n_(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await yp(t);return r||n}return e}function n_(t){return ju(t,e=>{if(!e)throw Xr.create("installation-not-found");return dT(e)})}function dT(t){return eO(t)?{fid:t.fid,registrationStatus:0}:t}function eO(t){return t.registrationStatus===1&&t.registrationTime+J0<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tO({appConfig:t,heartbeatServiceProvider:e},n){const r=nO(t,n),i=bx(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:Z0,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await oT(()=>fetch(r,l));if(u.ok){const c=await u.json();return rT(c)}else throw await iT("Generate Auth Token",u)}function nO(t,{fid:e}){return`${nT(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _p(t,e=!1){let n;const r=await ju(t.appConfig,s=>{if(!fT(s))throw Xr.create("not-registered");const o=s.authToken;if(!e&&sO(o))return s;if(o.requestStatus===1)return n=rO(t,e),s;{if(!navigator.onLine)throw Xr.create("app-offline");const l=aO(s);return n=iO(t,l),l}});return n?await n:r.authToken}async function rO(t,e){let n=await r_(t.appConfig);for(;n.authToken.requestStatus===1;)await aT(100),n=await r_(t.appConfig);const r=n.authToken;return r.requestStatus===0?_p(t,e):r}function r_(t){return ju(t,e=>{if(!fT(e))throw Xr.create("not-registered");const n=e.authToken;return lO(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function iO(t,e){try{const n=await tO(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Jl(t.appConfig,r),n}catch(n){if(tT(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await hT(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Jl(t.appConfig,r)}throw n}}function fT(t){return t!==void 0&&t.registrationStatus===2}function sO(t){return t.requestStatus===2&&!oO(t)}function oO(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Ox}function aO(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function lO(t){return t.requestStatus===1&&t.requestTime+J0<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uO(t){const e=t,{installationEntry:n,registrationPromise:r}=await yp(e);return r?r.catch(console.error):_p(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cO(t,e=!1){const n=t;return await hO(n),(await _p(n,e)).token}async function hO(t){const{registrationPromise:e}=await yp(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dO(t){if(!t||!t.options)throw Xc("App Configuration");if(!t.name)throw Xc("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Xc(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Xc(t){return Xr.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pT="installations",fO="installations-internal",pO=t=>{const e=t.getProvider("app").getImmediate(),n=dO(e),r=ni(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},mO=t=>{const e=t.getProvider("app").getImmediate(),n=ni(e,pT).getImmediate();return{getId:()=>uO(n),getToken:i=>cO(n,i)}};function gO(){sn(new $t(pT,pO,"PUBLIC")),sn(new $t(fO,mO,"PRIVATE"))}gO();Dt(X0,mp);Dt(X0,mp,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zl="analytics",yO="firebase_id",_O="origin",vO=60*1e3,wO="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",vp="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt=new _u("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EO={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Et=new ti("analytics","Analytics",EO);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TO(t){if(!t.startsWith(vp)){const e=Et.create("invalid-gtag-resource",{gtagURL:t});return mt.warn(e.message),""}return t}function mT(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function IO(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function SO(t,e){const n=IO("firebase-js-sdk-policy",{createScriptURL:TO}),r=document.createElement("script"),i=`${vp}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function AO(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function RO(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await mT(n)).find(c=>c.measurementId===i);u&&await e[u.appId]}}catch(l){mt.error(l)}t("config",i,s)}async function PO(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await mT(n);for(const u of o){const c=l.find(p=>p.measurementId===u),f=c&&e[c.appId];if(f)s.push(f);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){mt.error(s)}}function CO(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[l,u]=o;await PO(t,e,n,l,u)}else if(s==="config"){const[l,u]=o;await RO(t,e,n,r,l,u)}else if(s==="consent"){const[l,u]=o;t("consent",l,u)}else if(s==="get"){const[l,u,c]=o;t("get",l,u,c)}else if(s==="set"){const[l]=o;t("set",l)}else t(s,...o)}catch(l){mt.error(l)}}return i}function kO(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=CO(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function NO(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(vp)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DO=30,xO=1e3;class OO{constructor(e={},n=xO){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const gT=new OO;function VO(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function LO(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:VO(r)},s=wO.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let l="";try{const u=await o.json();!((e=u.error)===null||e===void 0)&&e.message&&(l=u.error.message)}catch{}throw Et.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function MO(t,e=gT,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Et.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Et.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new UO;return setTimeout(async()=>{l.abort()},vO),yT({appId:r,apiKey:i,measurementId:s},o,l,e)}async function yT(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=gT){var s;const{appId:o,measurementId:l}=t;try{await bO(r,e)}catch(u){if(l)return mt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:l};throw u}try{const u=await LO(t);return i.deleteThrottleMetadata(o),u}catch(u){const c=u;if(!FO(c)){if(i.deleteThrottleMetadata(o),l)return mt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:l};throw u}const f=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?zg(n,i.intervalMillis,DO):zg(n,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(o,p),mt.debug(`Calling attemptFetch again in ${f} millis`),yT(t,p,r,i)}}function bO(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Et.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function FO(t){if(!(t instanceof Kt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class UO{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function jO(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BO(){if(Uw())try{await jw()}catch(t){return mt.warn(Et.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return mt.warn(Et.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function zO(t,e,n,r,i,s,o){var l;const u=MO(t);u.then(E=>{n[E.measurementId]=E.appId,t.options.measurementId&&E.measurementId!==t.options.measurementId&&mt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${E.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(E=>mt.error(E)),e.push(u);const c=BO().then(E=>{if(E)return r.getId()}),[f,p]=await Promise.all([u,c]);NO(s)||SO(s,f.measurementId),i("js",new Date);const m=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return m[_O]="firebase",m.update=!0,p!=null&&(m[yO]=p),i("config",f.measurementId,m),f.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $O{constructor(e){this.app=e}_delete(){return delete uo[this.app.options.appId],Promise.resolve()}}let uo={},i_=[];const s_={};let Jc="dataLayer",WO="gtag",o_,_T,a_=!1;function qO(){const t=[];if(Fw()&&t.push("This is a browser extension environment."),KR()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Et.create("invalid-analytics-context",{errorInfo:e});mt.warn(n.message)}}function HO(t,e,n){qO();const r=t.options.appId;if(!r)throw Et.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)mt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Et.create("no-api-key");if(uo[r]!=null)throw Et.create("already-exists",{id:r});if(!a_){AO(Jc);const{wrappedGtag:s,gtagCore:o}=kO(uo,i_,s_,Jc,WO);_T=s,o_=o,a_=!0}return uo[r]=zO(t,i_,s_,e,o_,Jc,n),new $O(t)}function KO(t=If()){t=Ne(t);const e=ni(t,Zl);return e.isInitialized()?e.getImmediate():GO(t)}function GO(t,e={}){const n=ni(t,Zl);if(n.isInitialized()){const i=n.getImmediate();if(qr(e,n.getOptions()))return i;throw Et.create("already-initialized")}return n.initialize({options:e})}function QO(t,e,n,r){t=Ne(t),jO(_T,uo[t.app.options.appId],e,n,r).catch(i=>mt.error(i))}const l_="@firebase/analytics",u_="0.10.8";function YO(){sn(new $t(Zl,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return HO(r,i,n)},"PUBLIC")),sn(new $t("analytics-internal",t,"PRIVATE")),Dt(l_,u_),Dt(l_,u_,"esm2017");function t(e){try{const n=e.getProvider(Zl).getImmediate();return{logEvent:(r,i,s)=>QO(n,r,i,s)}}catch(n){throw Et.create("interop-component-reg-failed",{reason:n})}}}YO();const XO={apiKey:"AIzaSyDmVc4Fb2RiMtqTbQCuYRukHarYP0DcXDA",authDomain:"mentorstudent-session-booking.firebaseapp.com",projectId:"mentorstudent-session-booking",storageBucket:"mentorstudent-session-booking.firebasestorage.app",messagingSenderId:"227280946400",appId:"1:227280946400:web:5560600bbca2ea0751fc85",measurementId:"G-BH7RWL5RL6"},wp=Ww(XO),Wa=T1(wp),zn=lx(wp);typeof window<"u"&&KO(wp);const vT=b.createContext();function Ep(){return b.useContext(vT)}function JO({children:t}){const[e,n]=b.useState(null),[r,i]=b.useState(null),[s,o]=b.useState(!0),l=async(m,E,P,N)=>{const D=await ok(Wa,m,E),T={uid:D.user.uid,name:P,email:m,role:N,createdAt:new Date().toISOString()};return await Sx(Fo(zn,"users",D.user.uid),T),i(T),D},u=(m,E)=>ak(Wa,m,E),c=()=>hk(Wa),f=b.useCallback(async m=>{const E=await Ix(Fo(zn,"users",m));E.exists()&&i(E.data())},[]);b.useEffect(()=>ck(Wa,async E=>{n(E),E?await f(E.uid):i(null),o(!1)}),[f]);const p={currentUser:e,userProfile:r,signup:l,login:u,logout:c,fetchUserProfile:f};return z.jsx(vT.Provider,{value:p,children:!s&&t})}const wT=b.createContext();function wV(){return b.useContext(wT)}function ZO({children:t}){const[e,n]=b.useState([]),[r,i]=b.useState(!1),s=b.useCallback(async f=>{i(!0);const p=Gc($a(zn,"bookings"),fi("studentId","==",f)),E=(await Qc(p)).docs.map(P=>({id:P.id,...P.data()}));return n(E),i(!1),E},[]),o=b.useCallback(async f=>{i(!0);const p=Gc($a(zn,"bookings"),fi("mentorId","==",f)),E=(await Qc(p)).docs.map(P=>({id:P.id,...P.data()}));return n(E),i(!1),E},[]),l=async({mentorId:f,mentorName:p,studentId:m,studentName:E,date:P,slot:N})=>{const D=Gc($a(zn,"bookings"),fi("mentorId","==",f),fi("date","==",P),fi("slot","==",N),fi("status","==","booked"));if(!(await Qc(D)).empty)throw new Error("This slot is already booked. Please choose another.");const _={mentorId:f,mentorName:p,studentId:m,studentName:E,date:P,slot:N,status:"booked",createdAt:kx()};return{id:(await Px($a(zn,"bookings"),_)).id,..._}},u=async f=>{await Ax(Fo(zn,"bookings",f),{status:"cancelled"}),n(p=>p.map(m=>m.id===f?{...m,status:"cancelled"}:m))},c=async f=>{await Rx(Fo(zn,"bookings",f)),n(p=>p.filter(m=>m.id!==f))};return z.jsx(wT.Provider,{value:{bookings:e,loading:r,fetchStudentBookings:s,fetchMentorBookings:o,createBooking:l,cancelBooking:u,deleteBooking:c},children:t})}function eV(){var f,p;const{currentUser:t,userProfile:e,logout:n}=Ep(),r=Ef(),i=ls(),s=async()=>{await n(),r("/login")},o=m=>i.pathname===m,l=[{to:"/dashboard",label:"Dashboard"},{to:"/mentors",label:"Find Mentors"},{to:"/my-sessions",label:"My Sessions"}],u=[{to:"/mentor-dashboard",label:"Dashboard"},{to:"/manage-slots",label:"Availability"},{to:"/mentor-bookings",label:"Bookings"}],c=(e==null?void 0:e.role)==="mentor"?u:l;return z.jsx("nav",{style:{background:"rgba(255, 247, 233, 0.7)",backdropFilter:"blur(20px) saturate(160%)",WebkitBackdropFilter:"blur(20px) saturate(160%)",borderBottom:"1px solid rgba(221, 184, 133, 0.35)",boxShadow:"0 2px 20px rgba(180, 123, 48, 0.08)",position:"sticky",top:0,zIndex:50},children:z.jsxs("div",{style:{maxWidth:1200,margin:"0 auto",padding:"0 24px",display:"flex",alignItems:"center",justifyContent:"space-between",height:60},children:[z.jsxs(ba,{to:"/",style:{display:"flex",alignItems:"center",gap:10,textDecoration:"none"},children:[z.jsx("div",{style:{width:34,height:34,borderRadius:10,background:"linear-gradient(135deg, #ebb86d, #d78d3f)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 12px rgba(201,122,43,0.24)",color:"white",fontWeight:700,fontSize:15},children:"M"}),z.jsx("span",{style:{fontFamily:"'DM Serif Display', serif",fontSize:20,color:"#6d421c",letterSpacing:"-0.02em"},children:"MentorSpace"})]}),t&&z.jsx("div",{style:{display:"flex",alignItems:"center",gap:2},children:c.map(m=>z.jsx(ba,{to:m.to,style:{padding:"6px 16px",borderRadius:999,fontSize:13,fontWeight:500,textDecoration:"none",transition:"all 0.2s",background:o(m.to)?"rgba(255,249,238,0.94)":"transparent",color:o(m.to)?"#b56c27":"rgba(109,66,28,0.7)",boxShadow:o(m.to)?"0 2px 12px rgba(180,123,48,0.12)":"none"},children:m.label},m.to))}),z.jsx("div",{style:{display:"flex",alignItems:"center",gap:10},children:t?z.jsxs(z.Fragment,{children:[z.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[z.jsx("div",{style:{width:32,height:32,borderRadius:"50%",background:"linear-gradient(135deg, #e9b668, #d98c43)",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontWeight:600,fontSize:13,boxShadow:"0 2px 8px rgba(201,122,43,0.28)"},children:((p=(f=e==null?void 0:e.name)==null?void 0:f[0])==null?void 0:p.toUpperCase())||"U"}),z.jsxs("div",{children:[z.jsx("div",{style:{fontSize:13,fontWeight:500,color:"#6d421c",lineHeight:1.2},children:e==null?void 0:e.name}),z.jsx("div",{style:{fontSize:11,color:"rgba(109,66,28,0.58)",textTransform:"capitalize"},children:e==null?void 0:e.role})]})]}),z.jsx("button",{onClick:s,className:"btn-ghost",style:{padding:"6px 14px",fontSize:13},children:"Sign out"})]}):z.jsxs("div",{style:{display:"flex",gap:8},children:[z.jsx(ba,{to:"/login",className:"btn-ghost",style:{fontSize:13,padding:"6px 16px",textDecoration:"none",display:"inline-flex",alignItems:"center"},children:"Sign in"}),z.jsx(ba,{to:"/signup",className:"btn-primary",style:{fontSize:13,padding:"6px 16px",textDecoration:"none",display:"inline-flex",alignItems:"center"},children:"Sign up"})]})})]})})}function Cr({children:t,requiredRole:e}){const{currentUser:n,userProfile:r}=Ep();if(!n)return z.jsx(Mi,{to:"/login",replace:!0});if(e&&(r==null?void 0:r.role)!==e){const i=(r==null?void 0:r.role)==="mentor"?"/mentor-dashboard":"/dashboard";return z.jsx(Mi,{to:i,replace:!0})}return t}const tV=b.lazy(()=>On(()=>import("./Login-CpnA6FBY.js"),[])),nV=b.lazy(()=>On(()=>import("./Signup-CqdSCDOR.js"),__vite__mapDeps([0,1]))),rV=b.lazy(()=>On(()=>import("./Dashboard-8fW-a9Jc.js"),[])),iV=b.lazy(()=>On(()=>import("./Mentors-Dz_trikP.js"),__vite__mapDeps([2,1]))),sV=b.lazy(()=>On(()=>import("./MentorDetail-DETFPy1L.js"),__vite__mapDeps([3,1]))),oV=b.lazy(()=>On(()=>import("./MySessions-DVZ_r0Np.js"),__vite__mapDeps([4,5]))),aV=b.lazy(()=>On(()=>import("./MentorDashboard-y4H7WM31.js"),__vite__mapDeps([6,1]))),lV=b.lazy(()=>On(()=>import("./ManageSlots-Bp5Up_Vb.js"),__vite__mapDeps([7,1]))),uV=b.lazy(()=>On(()=>import("./MentorBookings-R_wxlMuA.js"),__vite__mapDeps([8,1,5])));function cV(){const{currentUser:t,userProfile:e}=Ep();return t?(e==null?void 0:e.role)==="mentor"?z.jsx(Mi,{to:"/mentor-dashboard",replace:!0}):z.jsx(Mi,{to:"/dashboard",replace:!0}):z.jsx(Mi,{to:"/login",replace:!0})}function hV(){return z.jsx("div",{className:"min-h-screen bg-[#fbf0d9] flex items-center justify-center",children:z.jsxs("div",{className:"flex flex-col items-center gap-4",children:[z.jsx("div",{className:"w-10 h-10 border-2 border-[#d4893b] border-t-transparent rounded-full animate-spin"}),z.jsx("p",{className:"text-[#9d6d40] text-sm",children:"Loading…"})]})})}function dV(){return z.jsx(PR,{children:z.jsx(JO,{children:z.jsx(ZO,{children:z.jsxs("div",{className:"min-h-screen bg-[#fbf0d9]",children:[z.jsx(eV,{}),z.jsx(b.Suspense,{fallback:z.jsx(hV,{}),children:z.jsxs(wR,{children:[z.jsx(Rt,{path:"/login",element:z.jsx(tV,{})}),z.jsx(Rt,{path:"/signup",element:z.jsx(nV,{})}),z.jsx(Rt,{path:"/",element:z.jsx(cV,{})}),z.jsx(Rt,{path:"/dashboard",element:z.jsx(Cr,{requiredRole:"student",children:z.jsx(rV,{})})}),z.jsx(Rt,{path:"/mentors",element:z.jsx(Cr,{requiredRole:"student",children:z.jsx(iV,{})})}),z.jsx(Rt,{path:"/mentor/:id",element:z.jsx(Cr,{requiredRole:"student",children:z.jsx(sV,{})})}),z.jsx(Rt,{path:"/my-sessions",element:z.jsx(Cr,{requiredRole:"student",children:z.jsx(oV,{})})}),z.jsx(Rt,{path:"/mentor-dashboard",element:z.jsx(Cr,{requiredRole:"mentor",children:z.jsx(aV,{})})}),z.jsx(Rt,{path:"/manage-slots",element:z.jsx(Cr,{requiredRole:"mentor",children:z.jsx(lV,{})})}),z.jsx(Rt,{path:"/mentor-bookings",element:z.jsx(Cr,{requiredRole:"mentor",children:z.jsx(uV,{})})}),z.jsx(Rt,{path:"*",element:z.jsx(Mi,{to:"/",replace:!0})})]})})]})})})})}const fV=Zc.createRoot(document.getElementById("root"));fV.render(z.jsx(w_.StrictMode,{children:z.jsx(dV,{})}));export{ba as L,Ef as a,wV as b,pV as c,Fo as d,Px as e,$a as f,Ix as g,Qc as h,zn as i,z as j,Ax as k,_V as l,vV as m,Gc as q,b as r,Ep as u,fi as w};
