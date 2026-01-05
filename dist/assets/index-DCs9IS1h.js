(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function iT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Qg={exports:{}},Pl={},Xg={exports:{}},Z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vo=Symbol.for("react.element"),sT=Symbol.for("react.portal"),oT=Symbol.for("react.fragment"),aT=Symbol.for("react.strict_mode"),lT=Symbol.for("react.profiler"),uT=Symbol.for("react.provider"),cT=Symbol.for("react.context"),hT=Symbol.for("react.forward_ref"),fT=Symbol.for("react.suspense"),dT=Symbol.for("react.memo"),pT=Symbol.for("react.lazy"),mp=Symbol.iterator;function mT(t){return t===null||typeof t!="object"?null:(t=mp&&t[mp]||t["@@iterator"],typeof t=="function"?t:null)}var Yg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Jg=Object.assign,Zg={};function $i(t,e,n){this.props=t,this.context=e,this.refs=Zg,this.updater=n||Yg}$i.prototype.isReactComponent={};$i.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};$i.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ey(){}ey.prototype=$i.prototype;function Lh(t,e,n){this.props=t,this.context=e,this.refs=Zg,this.updater=n||Yg}var Mh=Lh.prototype=new ey;Mh.constructor=Lh;Jg(Mh,$i.prototype);Mh.isPureReactComponent=!0;var gp=Array.isArray,ty=Object.prototype.hasOwnProperty,Fh={current:null},ny={key:!0,ref:!0,__self:!0,__source:!0};function ry(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)ty.call(e,r)&&!ny.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:vo,type:t,key:s,ref:o,props:i,_owner:Fh.current}}function gT(t,e){return{$$typeof:vo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function bh(t){return typeof t=="object"&&t!==null&&t.$$typeof===vo}function yT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var yp=/\/+/g;function Vu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?yT(""+t.key):e.toString(36)}function ga(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case vo:case sT:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Vu(o,0):r,gp(i)?(n="",t!=null&&(n=t.replace(yp,"$&/")+"/"),ga(i,e,n,"",function(h){return h})):i!=null&&(bh(i)&&(i=gT(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(yp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",gp(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Vu(s,l);o+=ga(s,e,n,u,i)}else if(u=mT(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Vu(s,l++),o+=ga(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function qo(t,e,n){if(t==null)return t;var r=[],i=0;return ga(t,r,"","",function(s){return e.call(n,s,i++)}),r}function _T(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var it={current:null},ya={transition:null},vT={ReactCurrentDispatcher:it,ReactCurrentBatchConfig:ya,ReactCurrentOwner:Fh};function iy(){throw Error("act(...) is not supported in production builds of React.")}Z.Children={map:qo,forEach:function(t,e,n){qo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return qo(t,function(){e++}),e},toArray:function(t){return qo(t,function(e){return e})||[]},only:function(t){if(!bh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Z.Component=$i;Z.Fragment=oT;Z.Profiler=lT;Z.PureComponent=Lh;Z.StrictMode=aT;Z.Suspense=fT;Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vT;Z.act=iy;Z.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Jg({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Fh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)ty.call(e,u)&&!ny.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:vo,type:t.type,key:i,ref:s,props:r,_owner:o}};Z.createContext=function(t){return t={$$typeof:cT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:uT,_context:t},t.Consumer=t};Z.createElement=ry;Z.createFactory=function(t){var e=ry.bind(null,t);return e.type=t,e};Z.createRef=function(){return{current:null}};Z.forwardRef=function(t){return{$$typeof:hT,render:t}};Z.isValidElement=bh;Z.lazy=function(t){return{$$typeof:pT,_payload:{_status:-1,_result:t},_init:_T}};Z.memo=function(t,e){return{$$typeof:dT,type:t,compare:e===void 0?null:e}};Z.startTransition=function(t){var e=ya.transition;ya.transition={};try{t()}finally{ya.transition=e}};Z.unstable_act=iy;Z.useCallback=function(t,e){return it.current.useCallback(t,e)};Z.useContext=function(t){return it.current.useContext(t)};Z.useDebugValue=function(){};Z.useDeferredValue=function(t){return it.current.useDeferredValue(t)};Z.useEffect=function(t,e){return it.current.useEffect(t,e)};Z.useId=function(){return it.current.useId()};Z.useImperativeHandle=function(t,e,n){return it.current.useImperativeHandle(t,e,n)};Z.useInsertionEffect=function(t,e){return it.current.useInsertionEffect(t,e)};Z.useLayoutEffect=function(t,e){return it.current.useLayoutEffect(t,e)};Z.useMemo=function(t,e){return it.current.useMemo(t,e)};Z.useReducer=function(t,e,n){return it.current.useReducer(t,e,n)};Z.useRef=function(t){return it.current.useRef(t)};Z.useState=function(t){return it.current.useState(t)};Z.useSyncExternalStore=function(t,e,n){return it.current.useSyncExternalStore(t,e,n)};Z.useTransition=function(){return it.current.useTransition()};Z.version="18.3.1";Xg.exports=Z;var qt=Xg.exports;const ET=iT(qt);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wT=qt,TT=Symbol.for("react.element"),IT=Symbol.for("react.fragment"),ST=Object.prototype.hasOwnProperty,AT=wT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,RT={key:!0,ref:!0,__self:!0,__source:!0};function sy(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)ST.call(e,r)&&!RT.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:TT,type:t,key:s,ref:o,props:i,_owner:AT.current}}Pl.Fragment=IT;Pl.jsx=sy;Pl.jsxs=sy;Qg.exports=Pl;var X=Qg.exports,yc={},oy={exports:{}},Et={},ay={exports:{}},ly={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(j,G){var Y=j.length;j.push(G);e:for(;0<Y;){var pe=Y-1>>>1,Te=j[pe];if(0<i(Te,G))j[pe]=G,j[Y]=Te,Y=pe;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var G=j[0],Y=j.pop();if(Y!==G){j[0]=Y;e:for(var pe=0,Te=j.length,yr=Te>>>1;pe<yr;){var Tt=2*(pe+1)-1,_r=j[Tt],Nt=Tt+1,Sn=j[Nt];if(0>i(_r,Y))Nt<Te&&0>i(Sn,_r)?(j[pe]=Sn,j[Nt]=Y,pe=Nt):(j[pe]=_r,j[Tt]=Y,pe=Tt);else if(Nt<Te&&0>i(Sn,Y))j[pe]=Sn,j[Nt]=Y,pe=Nt;else break e}}return G}function i(j,G){var Y=j.sortIndex-G.sortIndex;return Y!==0?Y:j.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],d=1,m=null,g=3,R=!1,N=!1,D=!1,L=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(j){for(var G=n(h);G!==null;){if(G.callback===null)r(h);else if(G.startTime<=j)r(h),G.sortIndex=G.expirationTime,e(u,G);else break;G=n(h)}}function V(j){if(D=!1,A(j),!N)if(n(u)!==null)N=!0,Zi(b);else{var G=n(h);G!==null&&es(V,G.startTime-j)}}function b(j,G){N=!1,D&&(D=!1,I(y),y=-1),R=!0;var Y=g;try{for(A(G),m=n(u);m!==null&&(!(m.expirationTime>G)||j&&!S());){var pe=m.callback;if(typeof pe=="function"){m.callback=null,g=m.priorityLevel;var Te=pe(m.expirationTime<=G);G=t.unstable_now(),typeof Te=="function"?m.callback=Te:m===n(u)&&r(u),A(G)}else r(u);m=n(u)}if(m!==null)var yr=!0;else{var Tt=n(h);Tt!==null&&es(V,Tt.startTime-G),yr=!1}return yr}finally{m=null,g=Y,R=!1}}var U=!1,_=null,y=-1,v=5,T=-1;function S(){return!(t.unstable_now()-T<v)}function C(){if(_!==null){var j=t.unstable_now();T=j;var G=!0;try{G=_(!0,j)}finally{G?w():(U=!1,_=null)}}else U=!1}var w;if(typeof E=="function")w=function(){E(C)};else if(typeof MessageChannel<"u"){var be=new MessageChannel,sn=be.port2;be.port1.onmessage=C,w=function(){sn.postMessage(null)}}else w=function(){L(C,0)};function Zi(j){_=j,U||(U=!0,w())}function es(j,G){y=L(function(){j(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(j){j.callback=null},t.unstable_continueExecution=function(){N||R||(N=!0,Zi(b))},t.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):v=0<j?Math.floor(1e3/j):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(j){switch(g){case 1:case 2:case 3:var G=3;break;default:G=g}var Y=g;g=G;try{return j()}finally{g=Y}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(j,G){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var Y=g;g=j;try{return G()}finally{g=Y}},t.unstable_scheduleCallback=function(j,G,Y){var pe=t.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?pe+Y:pe):Y=pe,j){case 1:var Te=-1;break;case 2:Te=250;break;case 5:Te=1073741823;break;case 4:Te=1e4;break;default:Te=5e3}return Te=Y+Te,j={id:d++,callback:G,priorityLevel:j,startTime:Y,expirationTime:Te,sortIndex:-1},Y>pe?(j.sortIndex=Y,e(h,j),n(u)===null&&j===n(h)&&(D?(I(y),y=-1):D=!0,es(V,Y-pe))):(j.sortIndex=Te,e(u,j),N||R||(N=!0,Zi(b))),j},t.unstable_shouldYield=S,t.unstable_wrapCallback=function(j){var G=g;return function(){var Y=g;g=G;try{return j.apply(this,arguments)}finally{g=Y}}}})(ly);ay.exports=ly;var CT=ay.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var PT=qt,vt=CT;function M(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var uy=new Set,Gs={};function Hr(t,e){Ci(t,e),Ci(t+"Capture",e)}function Ci(t,e){for(Gs[t]=e,t=0;t<e.length;t++)uy.add(e[t])}var dn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_c=Object.prototype.hasOwnProperty,kT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_p={},vp={};function NT(t){return _c.call(vp,t)?!0:_c.call(_p,t)?!1:kT.test(t)?vp[t]=!0:(_p[t]=!0,!1)}function DT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function VT(t,e,n,r){if(e===null||typeof e>"u"||DT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function st(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var $e={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){$e[t]=new st(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];$e[e]=new st(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){$e[t]=new st(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){$e[t]=new st(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){$e[t]=new st(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){$e[t]=new st(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){$e[t]=new st(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){$e[t]=new st(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){$e[t]=new st(t,5,!1,t.toLowerCase(),null,!1,!1)});var Uh=/[\-:]([a-z])/g;function jh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Uh,jh);$e[e]=new st(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Uh,jh);$e[e]=new st(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Uh,jh);$e[e]=new st(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){$e[t]=new st(t,1,!1,t.toLowerCase(),null,!1,!1)});$e.xlinkHref=new st("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){$e[t]=new st(t,1,!1,t.toLowerCase(),null,!0,!0)});function zh(t,e,n,r){var i=$e.hasOwnProperty(e)?$e[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(VT(e,n,i,r)&&(n=null),r||i===null?NT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Tn=PT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Go=Symbol.for("react.element"),ni=Symbol.for("react.portal"),ri=Symbol.for("react.fragment"),Bh=Symbol.for("react.strict_mode"),vc=Symbol.for("react.profiler"),cy=Symbol.for("react.provider"),hy=Symbol.for("react.context"),$h=Symbol.for("react.forward_ref"),Ec=Symbol.for("react.suspense"),wc=Symbol.for("react.suspense_list"),Hh=Symbol.for("react.memo"),On=Symbol.for("react.lazy"),fy=Symbol.for("react.offscreen"),Ep=Symbol.iterator;function ys(t){return t===null||typeof t!="object"?null:(t=Ep&&t[Ep]||t["@@iterator"],typeof t=="function"?t:null)}var _e=Object.assign,Ou;function As(t){if(Ou===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ou=e&&e[1]||""}return`
`+Ou+t}var xu=!1;function Lu(t,e){if(!t||xu)return"";xu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{xu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?As(t):""}function OT(t){switch(t.tag){case 5:return As(t.type);case 16:return As("Lazy");case 13:return As("Suspense");case 19:return As("SuspenseList");case 0:case 2:case 15:return t=Lu(t.type,!1),t;case 11:return t=Lu(t.type.render,!1),t;case 1:return t=Lu(t.type,!0),t;default:return""}}function Tc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ri:return"Fragment";case ni:return"Portal";case vc:return"Profiler";case Bh:return"StrictMode";case Ec:return"Suspense";case wc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case hy:return(t.displayName||"Context")+".Consumer";case cy:return(t._context.displayName||"Context")+".Provider";case $h:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Hh:return e=t.displayName||null,e!==null?e:Tc(t.type)||"Memo";case On:e=t._payload,t=t._init;try{return Tc(t(e))}catch{}}return null}function xT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Tc(e);case 8:return e===Bh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ir(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function dy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function LT(t){var e=dy(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ko(t){t._valueTracker||(t._valueTracker=LT(t))}function py(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=dy(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ba(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ic(t,e){var n=e.checked;return _e({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function wp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ir(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function my(t,e){e=e.checked,e!=null&&zh(t,"checked",e,!1)}function Sc(t,e){my(t,e);var n=ir(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ac(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ac(t,e.type,ir(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Tp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ac(t,e,n){(e!=="number"||ba(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Rs=Array.isArray;function mi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ir(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Rc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(M(91));return _e({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ip(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(M(92));if(Rs(n)){if(1<n.length)throw Error(M(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ir(n)}}function gy(t,e){var n=ir(e.value),r=ir(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Sp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function yy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Cc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?yy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Qo,_y=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Qo=Qo||document.createElement("div"),Qo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Qo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ks(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Vs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},MT=["Webkit","ms","Moz","O"];Object.keys(Vs).forEach(function(t){MT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Vs[e]=Vs[t]})});function vy(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Vs.hasOwnProperty(t)&&Vs[t]?(""+e).trim():e+"px"}function Ey(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=vy(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var FT=_e({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Pc(t,e){if(e){if(FT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(M(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(M(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(M(61))}if(e.style!=null&&typeof e.style!="object")throw Error(M(62))}}function kc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nc=null;function Wh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Dc=null,gi=null,yi=null;function Ap(t){if(t=To(t)){if(typeof Dc!="function")throw Error(M(280));var e=t.stateNode;e&&(e=Ol(e),Dc(t.stateNode,t.type,e))}}function wy(t){gi?yi?yi.push(t):yi=[t]:gi=t}function Ty(){if(gi){var t=gi,e=yi;if(yi=gi=null,Ap(t),e)for(t=0;t<e.length;t++)Ap(e[t])}}function Iy(t,e){return t(e)}function Sy(){}var Mu=!1;function Ay(t,e,n){if(Mu)return t(e,n);Mu=!0;try{return Iy(t,e,n)}finally{Mu=!1,(gi!==null||yi!==null)&&(Sy(),Ty())}}function Qs(t,e){var n=t.stateNode;if(n===null)return null;var r=Ol(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(M(231,e,typeof n));return n}var Vc=!1;if(dn)try{var _s={};Object.defineProperty(_s,"passive",{get:function(){Vc=!0}}),window.addEventListener("test",_s,_s),window.removeEventListener("test",_s,_s)}catch{Vc=!1}function bT(t,e,n,r,i,s,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(d){this.onError(d)}}var Os=!1,Ua=null,ja=!1,Oc=null,UT={onError:function(t){Os=!0,Ua=t}};function jT(t,e,n,r,i,s,o,l,u){Os=!1,Ua=null,bT.apply(UT,arguments)}function zT(t,e,n,r,i,s,o,l,u){if(jT.apply(this,arguments),Os){if(Os){var h=Ua;Os=!1,Ua=null}else throw Error(M(198));ja||(ja=!0,Oc=h)}}function Wr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Ry(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Rp(t){if(Wr(t)!==t)throw Error(M(188))}function BT(t){var e=t.alternate;if(!e){if(e=Wr(t),e===null)throw Error(M(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Rp(i),t;if(s===r)return Rp(i),e;s=s.sibling}throw Error(M(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(M(189))}}if(n.alternate!==r)throw Error(M(190))}if(n.tag!==3)throw Error(M(188));return n.stateNode.current===n?t:e}function Cy(t){return t=BT(t),t!==null?Py(t):null}function Py(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Py(t);if(e!==null)return e;t=t.sibling}return null}var ky=vt.unstable_scheduleCallback,Cp=vt.unstable_cancelCallback,$T=vt.unstable_shouldYield,HT=vt.unstable_requestPaint,Se=vt.unstable_now,WT=vt.unstable_getCurrentPriorityLevel,qh=vt.unstable_ImmediatePriority,Ny=vt.unstable_UserBlockingPriority,za=vt.unstable_NormalPriority,qT=vt.unstable_LowPriority,Dy=vt.unstable_IdlePriority,kl=null,Gt=null;function GT(t){if(Gt&&typeof Gt.onCommitFiberRoot=="function")try{Gt.onCommitFiberRoot(kl,t,void 0,(t.current.flags&128)===128)}catch{}}var Mt=Math.clz32?Math.clz32:XT,KT=Math.log,QT=Math.LN2;function XT(t){return t>>>=0,t===0?32:31-(KT(t)/QT|0)|0}var Xo=64,Yo=4194304;function Cs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ba(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Cs(l):(s&=o,s!==0&&(r=Cs(s)))}else o=n&~i,o!==0?r=Cs(o):s!==0&&(r=Cs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Mt(e),i=1<<n,r|=t[n],e&=~i;return r}function YT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function JT(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Mt(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=YT(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function xc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Vy(){var t=Xo;return Xo<<=1,!(Xo&4194240)&&(Xo=64),t}function Fu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Eo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Mt(e),t[e]=n}function ZT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Mt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Gh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Mt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var oe=0;function Oy(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var xy,Kh,Ly,My,Fy,Lc=!1,Jo=[],Hn=null,Wn=null,qn=null,Xs=new Map,Ys=new Map,Ln=[],eI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pp(t,e){switch(t){case"focusin":case"focusout":Hn=null;break;case"dragenter":case"dragleave":Wn=null;break;case"mouseover":case"mouseout":qn=null;break;case"pointerover":case"pointerout":Xs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ys.delete(e.pointerId)}}function vs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=To(e),e!==null&&Kh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function tI(t,e,n,r,i){switch(e){case"focusin":return Hn=vs(Hn,t,e,n,r,i),!0;case"dragenter":return Wn=vs(Wn,t,e,n,r,i),!0;case"mouseover":return qn=vs(qn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Xs.set(s,vs(Xs.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ys.set(s,vs(Ys.get(s)||null,t,e,n,r,i)),!0}return!1}function by(t){var e=Cr(t.target);if(e!==null){var n=Wr(e);if(n!==null){if(e=n.tag,e===13){if(e=Ry(n),e!==null){t.blockedOn=e,Fy(t.priority,function(){Ly(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function _a(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Mc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Nc=r,n.target.dispatchEvent(r),Nc=null}else return e=To(n),e!==null&&Kh(e),t.blockedOn=n,!1;e.shift()}return!0}function kp(t,e,n){_a(t)&&n.delete(e)}function nI(){Lc=!1,Hn!==null&&_a(Hn)&&(Hn=null),Wn!==null&&_a(Wn)&&(Wn=null),qn!==null&&_a(qn)&&(qn=null),Xs.forEach(kp),Ys.forEach(kp)}function Es(t,e){t.blockedOn===e&&(t.blockedOn=null,Lc||(Lc=!0,vt.unstable_scheduleCallback(vt.unstable_NormalPriority,nI)))}function Js(t){function e(i){return Es(i,t)}if(0<Jo.length){Es(Jo[0],t);for(var n=1;n<Jo.length;n++){var r=Jo[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Hn!==null&&Es(Hn,t),Wn!==null&&Es(Wn,t),qn!==null&&Es(qn,t),Xs.forEach(e),Ys.forEach(e),n=0;n<Ln.length;n++)r=Ln[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Ln.length&&(n=Ln[0],n.blockedOn===null);)by(n),n.blockedOn===null&&Ln.shift()}var _i=Tn.ReactCurrentBatchConfig,$a=!0;function rI(t,e,n,r){var i=oe,s=_i.transition;_i.transition=null;try{oe=1,Qh(t,e,n,r)}finally{oe=i,_i.transition=s}}function iI(t,e,n,r){var i=oe,s=_i.transition;_i.transition=null;try{oe=4,Qh(t,e,n,r)}finally{oe=i,_i.transition=s}}function Qh(t,e,n,r){if($a){var i=Mc(t,e,n,r);if(i===null)Gu(t,e,r,Ha,n),Pp(t,r);else if(tI(i,t,e,n,r))r.stopPropagation();else if(Pp(t,r),e&4&&-1<eI.indexOf(t)){for(;i!==null;){var s=To(i);if(s!==null&&xy(s),s=Mc(t,e,n,r),s===null&&Gu(t,e,r,Ha,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Gu(t,e,r,null,n)}}var Ha=null;function Mc(t,e,n,r){if(Ha=null,t=Wh(r),t=Cr(t),t!==null)if(e=Wr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Ry(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ha=t,null}function Uy(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(WT()){case qh:return 1;case Ny:return 4;case za:case qT:return 16;case Dy:return 536870912;default:return 16}default:return 16}}var zn=null,Xh=null,va=null;function jy(){if(va)return va;var t,e=Xh,n=e.length,r,i="value"in zn?zn.value:zn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return va=i.slice(t,1<r?1-r:void 0)}function Ea(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Zo(){return!0}function Np(){return!1}function wt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Zo:Np,this.isPropagationStopped=Np,this}return _e(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Zo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Zo)},persist:function(){},isPersistent:Zo}),e}var Hi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yh=wt(Hi),wo=_e({},Hi,{view:0,detail:0}),sI=wt(wo),bu,Uu,ws,Nl=_e({},wo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ws&&(ws&&t.type==="mousemove"?(bu=t.screenX-ws.screenX,Uu=t.screenY-ws.screenY):Uu=bu=0,ws=t),bu)},movementY:function(t){return"movementY"in t?t.movementY:Uu}}),Dp=wt(Nl),oI=_e({},Nl,{dataTransfer:0}),aI=wt(oI),lI=_e({},wo,{relatedTarget:0}),ju=wt(lI),uI=_e({},Hi,{animationName:0,elapsedTime:0,pseudoElement:0}),cI=wt(uI),hI=_e({},Hi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),fI=wt(hI),dI=_e({},Hi,{data:0}),Vp=wt(dI),pI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=gI[t])?!!e[t]:!1}function Jh(){return yI}var _I=_e({},wo,{key:function(t){if(t.key){var e=pI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ea(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?mI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jh,charCode:function(t){return t.type==="keypress"?Ea(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ea(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),vI=wt(_I),EI=_e({},Nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Op=wt(EI),wI=_e({},wo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jh}),TI=wt(wI),II=_e({},Hi,{propertyName:0,elapsedTime:0,pseudoElement:0}),SI=wt(II),AI=_e({},Nl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),RI=wt(AI),CI=[9,13,27,32],Zh=dn&&"CompositionEvent"in window,xs=null;dn&&"documentMode"in document&&(xs=document.documentMode);var PI=dn&&"TextEvent"in window&&!xs,zy=dn&&(!Zh||xs&&8<xs&&11>=xs),xp=" ",Lp=!1;function By(t,e){switch(t){case"keyup":return CI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $y(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ii=!1;function kI(t,e){switch(t){case"compositionend":return $y(e);case"keypress":return e.which!==32?null:(Lp=!0,xp);case"textInput":return t=e.data,t===xp&&Lp?null:t;default:return null}}function NI(t,e){if(ii)return t==="compositionend"||!Zh&&By(t,e)?(t=jy(),va=Xh=zn=null,ii=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return zy&&e.locale!=="ko"?null:e.data;default:return null}}var DI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!DI[t.type]:e==="textarea"}function Hy(t,e,n,r){wy(r),e=Wa(e,"onChange"),0<e.length&&(n=new Yh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ls=null,Zs=null;function VI(t){t_(t,0)}function Dl(t){var e=ai(t);if(py(e))return t}function OI(t,e){if(t==="change")return e}var Wy=!1;if(dn){var zu;if(dn){var Bu="oninput"in document;if(!Bu){var Fp=document.createElement("div");Fp.setAttribute("oninput","return;"),Bu=typeof Fp.oninput=="function"}zu=Bu}else zu=!1;Wy=zu&&(!document.documentMode||9<document.documentMode)}function bp(){Ls&&(Ls.detachEvent("onpropertychange",qy),Zs=Ls=null)}function qy(t){if(t.propertyName==="value"&&Dl(Zs)){var e=[];Hy(e,Zs,t,Wh(t)),Ay(VI,e)}}function xI(t,e,n){t==="focusin"?(bp(),Ls=e,Zs=n,Ls.attachEvent("onpropertychange",qy)):t==="focusout"&&bp()}function LI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Dl(Zs)}function MI(t,e){if(t==="click")return Dl(e)}function FI(t,e){if(t==="input"||t==="change")return Dl(e)}function bI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var bt=typeof Object.is=="function"?Object.is:bI;function eo(t,e){if(bt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!_c.call(e,i)||!bt(t[i],e[i]))return!1}return!0}function Up(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function jp(t,e){var n=Up(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Up(n)}}function Gy(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Gy(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ky(){for(var t=window,e=ba();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ba(t.document)}return e}function ef(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function UI(t){var e=Ky(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Gy(n.ownerDocument.documentElement,n)){if(r!==null&&ef(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=jp(n,s);var o=jp(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var jI=dn&&"documentMode"in document&&11>=document.documentMode,si=null,Fc=null,Ms=null,bc=!1;function zp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;bc||si==null||si!==ba(r)||(r=si,"selectionStart"in r&&ef(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ms&&eo(Ms,r)||(Ms=r,r=Wa(Fc,"onSelect"),0<r.length&&(e=new Yh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=si)))}function ea(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var oi={animationend:ea("Animation","AnimationEnd"),animationiteration:ea("Animation","AnimationIteration"),animationstart:ea("Animation","AnimationStart"),transitionend:ea("Transition","TransitionEnd")},$u={},Qy={};dn&&(Qy=document.createElement("div").style,"AnimationEvent"in window||(delete oi.animationend.animation,delete oi.animationiteration.animation,delete oi.animationstart.animation),"TransitionEvent"in window||delete oi.transitionend.transition);function Vl(t){if($u[t])return $u[t];if(!oi[t])return t;var e=oi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Qy)return $u[t]=e[n];return t}var Xy=Vl("animationend"),Yy=Vl("animationiteration"),Jy=Vl("animationstart"),Zy=Vl("transitionend"),e_=new Map,Bp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fr(t,e){e_.set(t,e),Hr(e,[t])}for(var Hu=0;Hu<Bp.length;Hu++){var Wu=Bp[Hu],zI=Wu.toLowerCase(),BI=Wu[0].toUpperCase()+Wu.slice(1);fr(zI,"on"+BI)}fr(Xy,"onAnimationEnd");fr(Yy,"onAnimationIteration");fr(Jy,"onAnimationStart");fr("dblclick","onDoubleClick");fr("focusin","onFocus");fr("focusout","onBlur");fr(Zy,"onTransitionEnd");Ci("onMouseEnter",["mouseout","mouseover"]);Ci("onMouseLeave",["mouseout","mouseover"]);Ci("onPointerEnter",["pointerout","pointerover"]);Ci("onPointerLeave",["pointerout","pointerover"]);Hr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Hr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Hr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Hr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Hr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Hr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ps="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$I=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ps));function $p(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,zT(r,e,void 0,t),t.currentTarget=null}function t_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;$p(i,l,h),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;$p(i,l,h),s=u}}}if(ja)throw t=Oc,ja=!1,Oc=null,t}function ce(t,e){var n=e[$c];n===void 0&&(n=e[$c]=new Set);var r=t+"__bubble";n.has(r)||(n_(e,t,2,!1),n.add(r))}function qu(t,e,n){var r=0;e&&(r|=4),n_(n,t,r,e)}var ta="_reactListening"+Math.random().toString(36).slice(2);function to(t){if(!t[ta]){t[ta]=!0,uy.forEach(function(n){n!=="selectionchange"&&($I.has(n)||qu(n,!1,t),qu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ta]||(e[ta]=!0,qu("selectionchange",!1,e))}}function n_(t,e,n,r){switch(Uy(e)){case 1:var i=rI;break;case 4:i=iI;break;default:i=Qh}n=i.bind(null,e,n,t),i=void 0,!Vc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Gu(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Cr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Ay(function(){var h=s,d=Wh(n),m=[];e:{var g=e_.get(t);if(g!==void 0){var R=Yh,N=t;switch(t){case"keypress":if(Ea(n)===0)break e;case"keydown":case"keyup":R=vI;break;case"focusin":N="focus",R=ju;break;case"focusout":N="blur",R=ju;break;case"beforeblur":case"afterblur":R=ju;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=Dp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=aI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=TI;break;case Xy:case Yy:case Jy:R=cI;break;case Zy:R=SI;break;case"scroll":R=sI;break;case"wheel":R=RI;break;case"copy":case"cut":case"paste":R=fI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=Op}var D=(e&4)!==0,L=!D&&t==="scroll",I=D?g!==null?g+"Capture":null:g;D=[];for(var E=h,A;E!==null;){A=E;var V=A.stateNode;if(A.tag===5&&V!==null&&(A=V,I!==null&&(V=Qs(E,I),V!=null&&D.push(no(E,V,A)))),L)break;E=E.return}0<D.length&&(g=new R(g,N,null,n,d),m.push({event:g,listeners:D}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",R=t==="mouseout"||t==="pointerout",g&&n!==Nc&&(N=n.relatedTarget||n.fromElement)&&(Cr(N)||N[pn]))break e;if((R||g)&&(g=d.window===d?d:(g=d.ownerDocument)?g.defaultView||g.parentWindow:window,R?(N=n.relatedTarget||n.toElement,R=h,N=N?Cr(N):null,N!==null&&(L=Wr(N),N!==L||N.tag!==5&&N.tag!==6)&&(N=null)):(R=null,N=h),R!==N)){if(D=Dp,V="onMouseLeave",I="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(D=Op,V="onPointerLeave",I="onPointerEnter",E="pointer"),L=R==null?g:ai(R),A=N==null?g:ai(N),g=new D(V,E+"leave",R,n,d),g.target=L,g.relatedTarget=A,V=null,Cr(d)===h&&(D=new D(I,E+"enter",N,n,d),D.target=A,D.relatedTarget=L,V=D),L=V,R&&N)t:{for(D=R,I=N,E=0,A=D;A;A=Yr(A))E++;for(A=0,V=I;V;V=Yr(V))A++;for(;0<E-A;)D=Yr(D),E--;for(;0<A-E;)I=Yr(I),A--;for(;E--;){if(D===I||I!==null&&D===I.alternate)break t;D=Yr(D),I=Yr(I)}D=null}else D=null;R!==null&&Hp(m,g,R,D,!1),N!==null&&L!==null&&Hp(m,L,N,D,!0)}}e:{if(g=h?ai(h):window,R=g.nodeName&&g.nodeName.toLowerCase(),R==="select"||R==="input"&&g.type==="file")var b=OI;else if(Mp(g))if(Wy)b=FI;else{b=LI;var U=xI}else(R=g.nodeName)&&R.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(b=MI);if(b&&(b=b(t,h))){Hy(m,b,n,d);break e}U&&U(t,g,h),t==="focusout"&&(U=g._wrapperState)&&U.controlled&&g.type==="number"&&Ac(g,"number",g.value)}switch(U=h?ai(h):window,t){case"focusin":(Mp(U)||U.contentEditable==="true")&&(si=U,Fc=h,Ms=null);break;case"focusout":Ms=Fc=si=null;break;case"mousedown":bc=!0;break;case"contextmenu":case"mouseup":case"dragend":bc=!1,zp(m,n,d);break;case"selectionchange":if(jI)break;case"keydown":case"keyup":zp(m,n,d)}var _;if(Zh)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else ii?By(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(zy&&n.locale!=="ko"&&(ii||y!=="onCompositionStart"?y==="onCompositionEnd"&&ii&&(_=jy()):(zn=d,Xh="value"in zn?zn.value:zn.textContent,ii=!0)),U=Wa(h,y),0<U.length&&(y=new Vp(y,t,null,n,d),m.push({event:y,listeners:U}),_?y.data=_:(_=$y(n),_!==null&&(y.data=_)))),(_=PI?kI(t,n):NI(t,n))&&(h=Wa(h,"onBeforeInput"),0<h.length&&(d=new Vp("onBeforeInput","beforeinput",null,n,d),m.push({event:d,listeners:h}),d.data=_))}t_(m,e)})}function no(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Wa(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Qs(t,n),s!=null&&r.unshift(no(t,s,i)),s=Qs(t,e),s!=null&&r.push(no(t,s,i))),t=t.return}return r}function Yr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Hp(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=Qs(n,s),u!=null&&o.unshift(no(n,u,l))):i||(u=Qs(n,s),u!=null&&o.push(no(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var HI=/\r\n?/g,WI=/\u0000|\uFFFD/g;function Wp(t){return(typeof t=="string"?t:""+t).replace(HI,`
`).replace(WI,"")}function na(t,e,n){if(e=Wp(e),Wp(t)!==e&&n)throw Error(M(425))}function qa(){}var Uc=null,jc=null;function zc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Bc=typeof setTimeout=="function"?setTimeout:void 0,qI=typeof clearTimeout=="function"?clearTimeout:void 0,qp=typeof Promise=="function"?Promise:void 0,GI=typeof queueMicrotask=="function"?queueMicrotask:typeof qp<"u"?function(t){return qp.resolve(null).then(t).catch(KI)}:Bc;function KI(t){setTimeout(function(){throw t})}function Ku(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Js(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Js(e)}function Gn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Gp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Wi=Math.random().toString(36).slice(2),Ht="__reactFiber$"+Wi,ro="__reactProps$"+Wi,pn="__reactContainer$"+Wi,$c="__reactEvents$"+Wi,QI="__reactListeners$"+Wi,XI="__reactHandles$"+Wi;function Cr(t){var e=t[Ht];if(e)return e;for(var n=t.parentNode;n;){if(e=n[pn]||n[Ht]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Gp(t);t!==null;){if(n=t[Ht])return n;t=Gp(t)}return e}t=n,n=t.parentNode}return null}function To(t){return t=t[Ht]||t[pn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ai(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(M(33))}function Ol(t){return t[ro]||null}var Hc=[],li=-1;function dr(t){return{current:t}}function de(t){0>li||(t.current=Hc[li],Hc[li]=null,li--)}function le(t,e){li++,Hc[li]=t.current,t.current=e}var sr={},Je=dr(sr),ct=dr(!1),xr=sr;function Pi(t,e){var n=t.type.contextTypes;if(!n)return sr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ht(t){return t=t.childContextTypes,t!=null}function Ga(){de(ct),de(Je)}function Kp(t,e,n){if(Je.current!==sr)throw Error(M(168));le(Je,e),le(ct,n)}function r_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(M(108,xT(t)||"Unknown",i));return _e({},n,r)}function Ka(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||sr,xr=Je.current,le(Je,t),le(ct,ct.current),!0}function Qp(t,e,n){var r=t.stateNode;if(!r)throw Error(M(169));n?(t=r_(t,e,xr),r.__reactInternalMemoizedMergedChildContext=t,de(ct),de(Je),le(Je,t)):de(ct),le(ct,n)}var an=null,xl=!1,Qu=!1;function i_(t){an===null?an=[t]:an.push(t)}function YI(t){xl=!0,i_(t)}function pr(){if(!Qu&&an!==null){Qu=!0;var t=0,e=oe;try{var n=an;for(oe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}an=null,xl=!1}catch(i){throw an!==null&&(an=an.slice(t+1)),ky(qh,pr),i}finally{oe=e,Qu=!1}}return null}var ui=[],ci=0,Qa=null,Xa=0,It=[],St=0,Lr=null,ln=1,un="";function Sr(t,e){ui[ci++]=Xa,ui[ci++]=Qa,Qa=t,Xa=e}function s_(t,e,n){It[St++]=ln,It[St++]=un,It[St++]=Lr,Lr=t;var r=ln;t=un;var i=32-Mt(r)-1;r&=~(1<<i),n+=1;var s=32-Mt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ln=1<<32-Mt(e)+i|n<<i|r,un=s+t}else ln=1<<s|n<<i|r,un=t}function tf(t){t.return!==null&&(Sr(t,1),s_(t,1,0))}function nf(t){for(;t===Qa;)Qa=ui[--ci],ui[ci]=null,Xa=ui[--ci],ui[ci]=null;for(;t===Lr;)Lr=It[--St],It[St]=null,un=It[--St],It[St]=null,ln=It[--St],It[St]=null}var _t=null,gt=null,me=!1,xt=null;function o_(t,e){var n=Rt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Xp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,_t=t,gt=Gn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,_t=t,gt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Lr!==null?{id:ln,overflow:un}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Rt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,_t=t,gt=null,!0):!1;default:return!1}}function Wc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function qc(t){if(me){var e=gt;if(e){var n=e;if(!Xp(t,e)){if(Wc(t))throw Error(M(418));e=Gn(n.nextSibling);var r=_t;e&&Xp(t,e)?o_(r,n):(t.flags=t.flags&-4097|2,me=!1,_t=t)}}else{if(Wc(t))throw Error(M(418));t.flags=t.flags&-4097|2,me=!1,_t=t}}}function Yp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;_t=t}function ra(t){if(t!==_t)return!1;if(!me)return Yp(t),me=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!zc(t.type,t.memoizedProps)),e&&(e=gt)){if(Wc(t))throw a_(),Error(M(418));for(;e;)o_(t,e),e=Gn(e.nextSibling)}if(Yp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(M(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){gt=Gn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}gt=null}}else gt=_t?Gn(t.stateNode.nextSibling):null;return!0}function a_(){for(var t=gt;t;)t=Gn(t.nextSibling)}function ki(){gt=_t=null,me=!1}function rf(t){xt===null?xt=[t]:xt.push(t)}var JI=Tn.ReactCurrentBatchConfig;function Ts(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(M(309));var r=n.stateNode}if(!r)throw Error(M(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(M(284));if(!n._owner)throw Error(M(290,t))}return t}function ia(t,e){throw t=Object.prototype.toString.call(e),Error(M(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Jp(t){var e=t._init;return e(t._payload)}function l_(t){function e(I,E){if(t){var A=I.deletions;A===null?(I.deletions=[E],I.flags|=16):A.push(E)}}function n(I,E){if(!t)return null;for(;E!==null;)e(I,E),E=E.sibling;return null}function r(I,E){for(I=new Map;E!==null;)E.key!==null?I.set(E.key,E):I.set(E.index,E),E=E.sibling;return I}function i(I,E){return I=Yn(I,E),I.index=0,I.sibling=null,I}function s(I,E,A){return I.index=A,t?(A=I.alternate,A!==null?(A=A.index,A<E?(I.flags|=2,E):A):(I.flags|=2,E)):(I.flags|=1048576,E)}function o(I){return t&&I.alternate===null&&(I.flags|=2),I}function l(I,E,A,V){return E===null||E.tag!==6?(E=nc(A,I.mode,V),E.return=I,E):(E=i(E,A),E.return=I,E)}function u(I,E,A,V){var b=A.type;return b===ri?d(I,E,A.props.children,V,A.key):E!==null&&(E.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===On&&Jp(b)===E.type)?(V=i(E,A.props),V.ref=Ts(I,E,A),V.return=I,V):(V=Ca(A.type,A.key,A.props,null,I.mode,V),V.ref=Ts(I,E,A),V.return=I,V)}function h(I,E,A,V){return E===null||E.tag!==4||E.stateNode.containerInfo!==A.containerInfo||E.stateNode.implementation!==A.implementation?(E=rc(A,I.mode,V),E.return=I,E):(E=i(E,A.children||[]),E.return=I,E)}function d(I,E,A,V,b){return E===null||E.tag!==7?(E=Vr(A,I.mode,V,b),E.return=I,E):(E=i(E,A),E.return=I,E)}function m(I,E,A){if(typeof E=="string"&&E!==""||typeof E=="number")return E=nc(""+E,I.mode,A),E.return=I,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Go:return A=Ca(E.type,E.key,E.props,null,I.mode,A),A.ref=Ts(I,null,E),A.return=I,A;case ni:return E=rc(E,I.mode,A),E.return=I,E;case On:var V=E._init;return m(I,V(E._payload),A)}if(Rs(E)||ys(E))return E=Vr(E,I.mode,A,null),E.return=I,E;ia(I,E)}return null}function g(I,E,A,V){var b=E!==null?E.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return b!==null?null:l(I,E,""+A,V);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Go:return A.key===b?u(I,E,A,V):null;case ni:return A.key===b?h(I,E,A,V):null;case On:return b=A._init,g(I,E,b(A._payload),V)}if(Rs(A)||ys(A))return b!==null?null:d(I,E,A,V,null);ia(I,A)}return null}function R(I,E,A,V,b){if(typeof V=="string"&&V!==""||typeof V=="number")return I=I.get(A)||null,l(E,I,""+V,b);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case Go:return I=I.get(V.key===null?A:V.key)||null,u(E,I,V,b);case ni:return I=I.get(V.key===null?A:V.key)||null,h(E,I,V,b);case On:var U=V._init;return R(I,E,A,U(V._payload),b)}if(Rs(V)||ys(V))return I=I.get(A)||null,d(E,I,V,b,null);ia(E,V)}return null}function N(I,E,A,V){for(var b=null,U=null,_=E,y=E=0,v=null;_!==null&&y<A.length;y++){_.index>y?(v=_,_=null):v=_.sibling;var T=g(I,_,A[y],V);if(T===null){_===null&&(_=v);break}t&&_&&T.alternate===null&&e(I,_),E=s(T,E,y),U===null?b=T:U.sibling=T,U=T,_=v}if(y===A.length)return n(I,_),me&&Sr(I,y),b;if(_===null){for(;y<A.length;y++)_=m(I,A[y],V),_!==null&&(E=s(_,E,y),U===null?b=_:U.sibling=_,U=_);return me&&Sr(I,y),b}for(_=r(I,_);y<A.length;y++)v=R(_,I,y,A[y],V),v!==null&&(t&&v.alternate!==null&&_.delete(v.key===null?y:v.key),E=s(v,E,y),U===null?b=v:U.sibling=v,U=v);return t&&_.forEach(function(S){return e(I,S)}),me&&Sr(I,y),b}function D(I,E,A,V){var b=ys(A);if(typeof b!="function")throw Error(M(150));if(A=b.call(A),A==null)throw Error(M(151));for(var U=b=null,_=E,y=E=0,v=null,T=A.next();_!==null&&!T.done;y++,T=A.next()){_.index>y?(v=_,_=null):v=_.sibling;var S=g(I,_,T.value,V);if(S===null){_===null&&(_=v);break}t&&_&&S.alternate===null&&e(I,_),E=s(S,E,y),U===null?b=S:U.sibling=S,U=S,_=v}if(T.done)return n(I,_),me&&Sr(I,y),b;if(_===null){for(;!T.done;y++,T=A.next())T=m(I,T.value,V),T!==null&&(E=s(T,E,y),U===null?b=T:U.sibling=T,U=T);return me&&Sr(I,y),b}for(_=r(I,_);!T.done;y++,T=A.next())T=R(_,I,y,T.value,V),T!==null&&(t&&T.alternate!==null&&_.delete(T.key===null?y:T.key),E=s(T,E,y),U===null?b=T:U.sibling=T,U=T);return t&&_.forEach(function(C){return e(I,C)}),me&&Sr(I,y),b}function L(I,E,A,V){if(typeof A=="object"&&A!==null&&A.type===ri&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case Go:e:{for(var b=A.key,U=E;U!==null;){if(U.key===b){if(b=A.type,b===ri){if(U.tag===7){n(I,U.sibling),E=i(U,A.props.children),E.return=I,I=E;break e}}else if(U.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===On&&Jp(b)===U.type){n(I,U.sibling),E=i(U,A.props),E.ref=Ts(I,U,A),E.return=I,I=E;break e}n(I,U);break}else e(I,U);U=U.sibling}A.type===ri?(E=Vr(A.props.children,I.mode,V,A.key),E.return=I,I=E):(V=Ca(A.type,A.key,A.props,null,I.mode,V),V.ref=Ts(I,E,A),V.return=I,I=V)}return o(I);case ni:e:{for(U=A.key;E!==null;){if(E.key===U)if(E.tag===4&&E.stateNode.containerInfo===A.containerInfo&&E.stateNode.implementation===A.implementation){n(I,E.sibling),E=i(E,A.children||[]),E.return=I,I=E;break e}else{n(I,E);break}else e(I,E);E=E.sibling}E=rc(A,I.mode,V),E.return=I,I=E}return o(I);case On:return U=A._init,L(I,E,U(A._payload),V)}if(Rs(A))return N(I,E,A,V);if(ys(A))return D(I,E,A,V);ia(I,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,E!==null&&E.tag===6?(n(I,E.sibling),E=i(E,A),E.return=I,I=E):(n(I,E),E=nc(A,I.mode,V),E.return=I,I=E),o(I)):n(I,E)}return L}var Ni=l_(!0),u_=l_(!1),Ya=dr(null),Ja=null,hi=null,sf=null;function of(){sf=hi=Ja=null}function af(t){var e=Ya.current;de(Ya),t._currentValue=e}function Gc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function vi(t,e){Ja=t,sf=hi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ut=!0),t.firstContext=null)}function Pt(t){var e=t._currentValue;if(sf!==t)if(t={context:t,memoizedValue:e,next:null},hi===null){if(Ja===null)throw Error(M(308));hi=t,Ja.dependencies={lanes:0,firstContext:t}}else hi=hi.next=t;return e}var Pr=null;function lf(t){Pr===null?Pr=[t]:Pr.push(t)}function c_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,lf(e)):(n.next=i.next,i.next=n),e.interleaved=n,mn(t,r)}function mn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var xn=!1;function uf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function h_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function fn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Kn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ie&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,mn(t,n)}return i=r.interleaved,i===null?(e.next=e,lf(r)):(e.next=i.next,i.next=e),r.interleaved=e,mn(t,n)}function wa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Gh(t,n)}}function Zp(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Za(t,e,n,r){var i=t.updateQueue;xn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=h:l.next=h,d.lastBaseUpdate=u))}if(s!==null){var m=i.baseState;o=0,d=h=u=null,l=s;do{var g=l.lane,R=l.eventTime;if((r&g)===g){d!==null&&(d=d.next={eventTime:R,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var N=t,D=l;switch(g=e,R=n,D.tag){case 1:if(N=D.payload,typeof N=="function"){m=N.call(R,m,g);break e}m=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=D.payload,g=typeof N=="function"?N.call(R,m,g):N,g==null)break e;m=_e({},m,g);break e;case 2:xn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else R={eventTime:R,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(h=d=R,u=m):d=d.next=R,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(d===null&&(u=m),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Fr|=o,t.lanes=o,t.memoizedState=m}}function em(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(M(191,i));i.call(r)}}}var Io={},Kt=dr(Io),io=dr(Io),so=dr(Io);function kr(t){if(t===Io)throw Error(M(174));return t}function cf(t,e){switch(le(so,e),le(io,t),le(Kt,Io),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Cc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Cc(e,t)}de(Kt),le(Kt,e)}function Di(){de(Kt),de(io),de(so)}function f_(t){kr(so.current);var e=kr(Kt.current),n=Cc(e,t.type);e!==n&&(le(io,t),le(Kt,n))}function hf(t){io.current===t&&(de(Kt),de(io))}var ge=dr(0);function el(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Xu=[];function ff(){for(var t=0;t<Xu.length;t++)Xu[t]._workInProgressVersionPrimary=null;Xu.length=0}var Ta=Tn.ReactCurrentDispatcher,Yu=Tn.ReactCurrentBatchConfig,Mr=0,ye=null,ke=null,Le=null,tl=!1,Fs=!1,oo=0,ZI=0;function qe(){throw Error(M(321))}function df(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!bt(t[n],e[n]))return!1;return!0}function pf(t,e,n,r,i,s){if(Mr=s,ye=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ta.current=t===null||t.memoizedState===null?r0:i0,t=n(r,i),Fs){s=0;do{if(Fs=!1,oo=0,25<=s)throw Error(M(301));s+=1,Le=ke=null,e.updateQueue=null,Ta.current=s0,t=n(r,i)}while(Fs)}if(Ta.current=nl,e=ke!==null&&ke.next!==null,Mr=0,Le=ke=ye=null,tl=!1,e)throw Error(M(300));return t}function mf(){var t=oo!==0;return oo=0,t}function Bt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?ye.memoizedState=Le=t:Le=Le.next=t,Le}function kt(){if(ke===null){var t=ye.alternate;t=t!==null?t.memoizedState:null}else t=ke.next;var e=Le===null?ye.memoizedState:Le.next;if(e!==null)Le=e,ke=t;else{if(t===null)throw Error(M(310));ke=t,t={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},Le===null?ye.memoizedState=Le=t:Le=Le.next=t}return Le}function ao(t,e){return typeof e=="function"?e(t):e}function Ju(t){var e=kt(),n=e.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=t;var r=ke,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,h=s;do{var d=h.lane;if((Mr&d)===d)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var m={lane:d,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,ye.lanes|=d,Fr|=d}h=h.next}while(h!==null&&h!==s);u===null?o=r:u.next=l,bt(r,e.memoizedState)||(ut=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ye.lanes|=s,Fr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Zu(t){var e=kt(),n=e.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);bt(s,e.memoizedState)||(ut=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function d_(){}function p_(t,e){var n=ye,r=kt(),i=e(),s=!bt(r.memoizedState,i);if(s&&(r.memoizedState=i,ut=!0),r=r.queue,gf(y_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Le!==null&&Le.memoizedState.tag&1){if(n.flags|=2048,lo(9,g_.bind(null,n,r,i,e),void 0,null),Fe===null)throw Error(M(349));Mr&30||m_(n,e,i)}return i}function m_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ye.updateQueue,e===null?(e={lastEffect:null,stores:null},ye.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function g_(t,e,n,r){e.value=n,e.getSnapshot=r,__(e)&&v_(t)}function y_(t,e,n){return n(function(){__(e)&&v_(t)})}function __(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!bt(t,n)}catch{return!0}}function v_(t){var e=mn(t,1);e!==null&&Ft(e,t,1,-1)}function tm(t){var e=Bt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ao,lastRenderedState:t},e.queue=t,t=t.dispatch=n0.bind(null,ye,t),[e.memoizedState,t]}function lo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ye.updateQueue,e===null?(e={lastEffect:null,stores:null},ye.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function E_(){return kt().memoizedState}function Ia(t,e,n,r){var i=Bt();ye.flags|=t,i.memoizedState=lo(1|e,n,void 0,r===void 0?null:r)}function Ll(t,e,n,r){var i=kt();r=r===void 0?null:r;var s=void 0;if(ke!==null){var o=ke.memoizedState;if(s=o.destroy,r!==null&&df(r,o.deps)){i.memoizedState=lo(e,n,s,r);return}}ye.flags|=t,i.memoizedState=lo(1|e,n,s,r)}function nm(t,e){return Ia(8390656,8,t,e)}function gf(t,e){return Ll(2048,8,t,e)}function w_(t,e){return Ll(4,2,t,e)}function T_(t,e){return Ll(4,4,t,e)}function I_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function S_(t,e,n){return n=n!=null?n.concat([t]):null,Ll(4,4,I_.bind(null,e,t),n)}function yf(){}function A_(t,e){var n=kt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&df(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function R_(t,e){var n=kt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&df(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function C_(t,e,n){return Mr&21?(bt(n,e)||(n=Vy(),ye.lanes|=n,Fr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ut=!0),t.memoizedState=n)}function e0(t,e){var n=oe;oe=n!==0&&4>n?n:4,t(!0);var r=Yu.transition;Yu.transition={};try{t(!1),e()}finally{oe=n,Yu.transition=r}}function P_(){return kt().memoizedState}function t0(t,e,n){var r=Xn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},k_(t))N_(e,n);else if(n=c_(t,e,n,r),n!==null){var i=rt();Ft(n,t,r,i),D_(n,e,r)}}function n0(t,e,n){var r=Xn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(k_(t))N_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,bt(l,o)){var u=e.interleaved;u===null?(i.next=i,lf(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=c_(t,e,i,r),n!==null&&(i=rt(),Ft(n,t,r,i),D_(n,e,r))}}function k_(t){var e=t.alternate;return t===ye||e!==null&&e===ye}function N_(t,e){Fs=tl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function D_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Gh(t,n)}}var nl={readContext:Pt,useCallback:qe,useContext:qe,useEffect:qe,useImperativeHandle:qe,useInsertionEffect:qe,useLayoutEffect:qe,useMemo:qe,useReducer:qe,useRef:qe,useState:qe,useDebugValue:qe,useDeferredValue:qe,useTransition:qe,useMutableSource:qe,useSyncExternalStore:qe,useId:qe,unstable_isNewReconciler:!1},r0={readContext:Pt,useCallback:function(t,e){return Bt().memoizedState=[t,e===void 0?null:e],t},useContext:Pt,useEffect:nm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ia(4194308,4,I_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ia(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ia(4,2,t,e)},useMemo:function(t,e){var n=Bt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Bt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=t0.bind(null,ye,t),[r.memoizedState,t]},useRef:function(t){var e=Bt();return t={current:t},e.memoizedState=t},useState:tm,useDebugValue:yf,useDeferredValue:function(t){return Bt().memoizedState=t},useTransition:function(){var t=tm(!1),e=t[0];return t=e0.bind(null,t[1]),Bt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ye,i=Bt();if(me){if(n===void 0)throw Error(M(407));n=n()}else{if(n=e(),Fe===null)throw Error(M(349));Mr&30||m_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,nm(y_.bind(null,r,s,t),[t]),r.flags|=2048,lo(9,g_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Bt(),e=Fe.identifierPrefix;if(me){var n=un,r=ln;n=(r&~(1<<32-Mt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=oo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ZI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},i0={readContext:Pt,useCallback:A_,useContext:Pt,useEffect:gf,useImperativeHandle:S_,useInsertionEffect:w_,useLayoutEffect:T_,useMemo:R_,useReducer:Ju,useRef:E_,useState:function(){return Ju(ao)},useDebugValue:yf,useDeferredValue:function(t){var e=kt();return C_(e,ke.memoizedState,t)},useTransition:function(){var t=Ju(ao)[0],e=kt().memoizedState;return[t,e]},useMutableSource:d_,useSyncExternalStore:p_,useId:P_,unstable_isNewReconciler:!1},s0={readContext:Pt,useCallback:A_,useContext:Pt,useEffect:gf,useImperativeHandle:S_,useInsertionEffect:w_,useLayoutEffect:T_,useMemo:R_,useReducer:Zu,useRef:E_,useState:function(){return Zu(ao)},useDebugValue:yf,useDeferredValue:function(t){var e=kt();return ke===null?e.memoizedState=t:C_(e,ke.memoizedState,t)},useTransition:function(){var t=Zu(ao)[0],e=kt().memoizedState;return[t,e]},useMutableSource:d_,useSyncExternalStore:p_,useId:P_,unstable_isNewReconciler:!1};function Vt(t,e){if(t&&t.defaultProps){e=_e({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Kc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:_e({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ml={isMounted:function(t){return(t=t._reactInternals)?Wr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=rt(),i=Xn(t),s=fn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Kn(t,s,i),e!==null&&(Ft(e,t,i,r),wa(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=rt(),i=Xn(t),s=fn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Kn(t,s,i),e!==null&&(Ft(e,t,i,r),wa(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=rt(),r=Xn(t),i=fn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Kn(t,i,r),e!==null&&(Ft(e,t,r,n),wa(e,t,r))}};function rm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!eo(n,r)||!eo(i,s):!0}function V_(t,e,n){var r=!1,i=sr,s=e.contextType;return typeof s=="object"&&s!==null?s=Pt(s):(i=ht(e)?xr:Je.current,r=e.contextTypes,s=(r=r!=null)?Pi(t,i):sr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ml,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function im(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ml.enqueueReplaceState(e,e.state,null)}function Qc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},uf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Pt(s):(s=ht(e)?xr:Je.current,i.context=Pi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Kc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ml.enqueueReplaceState(i,i.state,null),Za(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Vi(t,e){try{var n="",r=e;do n+=OT(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function ec(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Xc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var o0=typeof WeakMap=="function"?WeakMap:Map;function O_(t,e,n){n=fn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){il||(il=!0,oh=r),Xc(t,e)},n}function x_(t,e,n){n=fn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Xc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Xc(t,e),typeof r!="function"&&(Qn===null?Qn=new Set([this]):Qn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function sm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new o0;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=E0.bind(null,t,e,n),e.then(t,t))}function om(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function am(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=fn(-1,1),e.tag=2,Kn(n,e,1))),n.lanes|=1),t)}var a0=Tn.ReactCurrentOwner,ut=!1;function nt(t,e,n,r){e.child=t===null?u_(e,null,n,r):Ni(e,t.child,n,r)}function lm(t,e,n,r,i){n=n.render;var s=e.ref;return vi(e,i),r=pf(t,e,n,r,s,i),n=mf(),t!==null&&!ut?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,gn(t,e,i)):(me&&n&&tf(e),e.flags|=1,nt(t,e,r,i),e.child)}function um(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Af(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,L_(t,e,s,r,i)):(t=Ca(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:eo,n(o,r)&&t.ref===e.ref)return gn(t,e,i)}return e.flags|=1,t=Yn(s,r),t.ref=e.ref,t.return=e,e.child=t}function L_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(eo(s,r)&&t.ref===e.ref)if(ut=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(ut=!0);else return e.lanes=t.lanes,gn(t,e,i)}return Yc(t,e,n,r,i)}function M_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},le(di,mt),mt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,le(di,mt),mt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,le(di,mt),mt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,le(di,mt),mt|=r;return nt(t,e,i,n),e.child}function F_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Yc(t,e,n,r,i){var s=ht(n)?xr:Je.current;return s=Pi(e,s),vi(e,i),n=pf(t,e,n,r,s,i),r=mf(),t!==null&&!ut?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,gn(t,e,i)):(me&&r&&tf(e),e.flags|=1,nt(t,e,n,i),e.child)}function cm(t,e,n,r,i){if(ht(n)){var s=!0;Ka(e)}else s=!1;if(vi(e,i),e.stateNode===null)Sa(t,e),V_(e,n,r),Qc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=Pt(h):(h=ht(n)?xr:Je.current,h=Pi(e,h));var d=n.getDerivedStateFromProps,m=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&im(e,o,r,h),xn=!1;var g=e.memoizedState;o.state=g,Za(e,r,o,i),u=e.memoizedState,l!==r||g!==u||ct.current||xn?(typeof d=="function"&&(Kc(e,n,d,r),u=e.memoizedState),(l=xn||rm(e,n,l,r,g,u,h))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,h_(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:Vt(e.type,l),o.props=h,m=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Pt(u):(u=ht(n)?xr:Je.current,u=Pi(e,u));var R=n.getDerivedStateFromProps;(d=typeof R=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||g!==u)&&im(e,o,r,u),xn=!1,g=e.memoizedState,o.state=g,Za(e,r,o,i);var N=e.memoizedState;l!==m||g!==N||ct.current||xn?(typeof R=="function"&&(Kc(e,n,R,r),N=e.memoizedState),(h=xn||rm(e,n,h,r,g,N,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,N,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,N,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=N),o.props=r,o.state=N,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return Jc(t,e,n,r,s,i)}function Jc(t,e,n,r,i,s){F_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Qp(e,n,!1),gn(t,e,s);r=e.stateNode,a0.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ni(e,t.child,null,s),e.child=Ni(e,null,l,s)):nt(t,e,l,s),e.memoizedState=r.state,i&&Qp(e,n,!0),e.child}function b_(t){var e=t.stateNode;e.pendingContext?Kp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Kp(t,e.context,!1),cf(t,e.containerInfo)}function hm(t,e,n,r,i){return ki(),rf(i),e.flags|=256,nt(t,e,n,r),e.child}var Zc={dehydrated:null,treeContext:null,retryLane:0};function eh(t){return{baseLanes:t,cachePool:null,transitions:null}}function U_(t,e,n){var r=e.pendingProps,i=ge.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),le(ge,i&1),t===null)return qc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ul(o,r,0,null),t=Vr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=eh(n),e.memoizedState=Zc,t):_f(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return l0(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Yn(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Yn(l,s):(s=Vr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?eh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Zc,r}return s=t.child,t=s.sibling,r=Yn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function _f(t,e){return e=Ul({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function sa(t,e,n,r){return r!==null&&rf(r),Ni(e,t.child,null,n),t=_f(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function l0(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=ec(Error(M(422))),sa(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Ul({mode:"visible",children:r.children},i,0,null),s=Vr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ni(e,t.child,null,o),e.child.memoizedState=eh(o),e.memoizedState=Zc,s);if(!(e.mode&1))return sa(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(M(419)),r=ec(s,r,void 0),sa(t,e,o,r)}if(l=(o&t.childLanes)!==0,ut||l){if(r=Fe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,mn(t,i),Ft(r,t,i,-1))}return Sf(),r=ec(Error(M(421))),sa(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=w0.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,gt=Gn(i.nextSibling),_t=e,me=!0,xt=null,t!==null&&(It[St++]=ln,It[St++]=un,It[St++]=Lr,ln=t.id,un=t.overflow,Lr=e),e=_f(e,r.children),e.flags|=4096,e)}function fm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Gc(t.return,e,n)}function tc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function j_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(nt(t,e,r.children,n),r=ge.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&fm(t,n,e);else if(t.tag===19)fm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(le(ge,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&el(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),tc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&el(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}tc(e,!0,n,null,s);break;case"together":tc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Sa(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function gn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Fr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(M(153));if(e.child!==null){for(t=e.child,n=Yn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Yn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function u0(t,e,n){switch(e.tag){case 3:b_(e),ki();break;case 5:f_(e);break;case 1:ht(e.type)&&Ka(e);break;case 4:cf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;le(Ya,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(le(ge,ge.current&1),e.flags|=128,null):n&e.child.childLanes?U_(t,e,n):(le(ge,ge.current&1),t=gn(t,e,n),t!==null?t.sibling:null);le(ge,ge.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return j_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),le(ge,ge.current),r)break;return null;case 22:case 23:return e.lanes=0,M_(t,e,n)}return gn(t,e,n)}var z_,th,B_,$_;z_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};th=function(){};B_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,kr(Kt.current);var s=null;switch(n){case"input":i=Ic(t,i),r=Ic(t,r),s=[];break;case"select":i=_e({},i,{value:void 0}),r=_e({},r,{value:void 0}),s=[];break;case"textarea":i=Rc(t,i),r=Rc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=qa)}Pc(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Gs.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Gs.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&ce("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};$_=function(t,e,n,r){n!==r&&(e.flags|=4)};function Is(t,e){if(!me)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ge(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function c0(t,e,n){var r=e.pendingProps;switch(nf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ge(e),null;case 1:return ht(e.type)&&Ga(),Ge(e),null;case 3:return r=e.stateNode,Di(),de(ct),de(Je),ff(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ra(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,xt!==null&&(uh(xt),xt=null))),th(t,e),Ge(e),null;case 5:hf(e);var i=kr(so.current);if(n=e.type,t!==null&&e.stateNode!=null)B_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(M(166));return Ge(e),null}if(t=kr(Kt.current),ra(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Ht]=e,r[ro]=s,t=(e.mode&1)!==0,n){case"dialog":ce("cancel",r),ce("close",r);break;case"iframe":case"object":case"embed":ce("load",r);break;case"video":case"audio":for(i=0;i<Ps.length;i++)ce(Ps[i],r);break;case"source":ce("error",r);break;case"img":case"image":case"link":ce("error",r),ce("load",r);break;case"details":ce("toggle",r);break;case"input":wp(r,s),ce("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ce("invalid",r);break;case"textarea":Ip(r,s),ce("invalid",r)}Pc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&na(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&na(r.textContent,l,t),i=["children",""+l]):Gs.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ce("scroll",r)}switch(n){case"input":Ko(r),Tp(r,s,!0);break;case"textarea":Ko(r),Sp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=qa)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=yy(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Ht]=e,t[ro]=r,z_(t,e,!1,!1),e.stateNode=t;e:{switch(o=kc(n,r),n){case"dialog":ce("cancel",t),ce("close",t),i=r;break;case"iframe":case"object":case"embed":ce("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ps.length;i++)ce(Ps[i],t);i=r;break;case"source":ce("error",t),i=r;break;case"img":case"image":case"link":ce("error",t),ce("load",t),i=r;break;case"details":ce("toggle",t),i=r;break;case"input":wp(t,r),i=Ic(t,r),ce("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=_e({},r,{value:void 0}),ce("invalid",t);break;case"textarea":Ip(t,r),i=Rc(t,r),ce("invalid",t);break;default:i=r}Pc(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?Ey(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&_y(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Ks(t,u):typeof u=="number"&&Ks(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Gs.hasOwnProperty(s)?u!=null&&s==="onScroll"&&ce("scroll",t):u!=null&&zh(t,s,u,o))}switch(n){case"input":Ko(t),Tp(t,r,!1);break;case"textarea":Ko(t),Sp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ir(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?mi(t,!!r.multiple,s,!1):r.defaultValue!=null&&mi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=qa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ge(e),null;case 6:if(t&&e.stateNode!=null)$_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(M(166));if(n=kr(so.current),kr(Kt.current),ra(e)){if(r=e.stateNode,n=e.memoizedProps,r[Ht]=e,(s=r.nodeValue!==n)&&(t=_t,t!==null))switch(t.tag){case 3:na(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&na(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ht]=e,e.stateNode=r}return Ge(e),null;case 13:if(de(ge),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(me&&gt!==null&&e.mode&1&&!(e.flags&128))a_(),ki(),e.flags|=98560,s=!1;else if(s=ra(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(M(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(M(317));s[Ht]=e}else ki(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ge(e),s=!1}else xt!==null&&(uh(xt),xt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ge.current&1?De===0&&(De=3):Sf())),e.updateQueue!==null&&(e.flags|=4),Ge(e),null);case 4:return Di(),th(t,e),t===null&&to(e.stateNode.containerInfo),Ge(e),null;case 10:return af(e.type._context),Ge(e),null;case 17:return ht(e.type)&&Ga(),Ge(e),null;case 19:if(de(ge),s=e.memoizedState,s===null)return Ge(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Is(s,!1);else{if(De!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=el(t),o!==null){for(e.flags|=128,Is(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return le(ge,ge.current&1|2),e.child}t=t.sibling}s.tail!==null&&Se()>Oi&&(e.flags|=128,r=!0,Is(s,!1),e.lanes=4194304)}else{if(!r)if(t=el(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Is(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!me)return Ge(e),null}else 2*Se()-s.renderingStartTime>Oi&&n!==1073741824&&(e.flags|=128,r=!0,Is(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Se(),e.sibling=null,n=ge.current,le(ge,r?n&1|2:n&1),e):(Ge(e),null);case 22:case 23:return If(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?mt&1073741824&&(Ge(e),e.subtreeFlags&6&&(e.flags|=8192)):Ge(e),null;case 24:return null;case 25:return null}throw Error(M(156,e.tag))}function h0(t,e){switch(nf(e),e.tag){case 1:return ht(e.type)&&Ga(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Di(),de(ct),de(Je),ff(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return hf(e),null;case 13:if(de(ge),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(M(340));ki()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return de(ge),null;case 4:return Di(),null;case 10:return af(e.type._context),null;case 22:case 23:return If(),null;case 24:return null;default:return null}}var oa=!1,Xe=!1,f0=typeof WeakSet=="function"?WeakSet:Set,B=null;function fi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){we(t,e,r)}else n.current=null}function nh(t,e,n){try{n()}catch(r){we(t,e,r)}}var dm=!1;function d0(t,e){if(Uc=$a,t=Ky(),ef(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,d=0,m=t,g=null;t:for(;;){for(var R;m!==n||i!==0&&m.nodeType!==3||(l=o+i),m!==s||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(R=m.firstChild)!==null;)g=m,m=R;for(;;){if(m===t)break t;if(g===n&&++h===i&&(l=o),g===s&&++d===r&&(u=o),(R=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=R}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(jc={focusedElem:t,selectionRange:n},$a=!1,B=e;B!==null;)if(e=B,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,B=t;else for(;B!==null;){e=B;try{var N=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(N!==null){var D=N.memoizedProps,L=N.memoizedState,I=e.stateNode,E=I.getSnapshotBeforeUpdate(e.elementType===e.type?D:Vt(e.type,D),L);I.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var A=e.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(V){we(e,e.return,V)}if(t=e.sibling,t!==null){t.return=e.return,B=t;break}B=e.return}return N=dm,dm=!1,N}function bs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&nh(e,n,s)}i=i.next}while(i!==r)}}function Fl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function rh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function H_(t){var e=t.alternate;e!==null&&(t.alternate=null,H_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ht],delete e[ro],delete e[$c],delete e[QI],delete e[XI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function W_(t){return t.tag===5||t.tag===3||t.tag===4}function pm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||W_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ih(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=qa));else if(r!==4&&(t=t.child,t!==null))for(ih(t,e,n),t=t.sibling;t!==null;)ih(t,e,n),t=t.sibling}function sh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(sh(t,e,n),t=t.sibling;t!==null;)sh(t,e,n),t=t.sibling}var Ue=null,Ot=!1;function Dn(t,e,n){for(n=n.child;n!==null;)q_(t,e,n),n=n.sibling}function q_(t,e,n){if(Gt&&typeof Gt.onCommitFiberUnmount=="function")try{Gt.onCommitFiberUnmount(kl,n)}catch{}switch(n.tag){case 5:Xe||fi(n,e);case 6:var r=Ue,i=Ot;Ue=null,Dn(t,e,n),Ue=r,Ot=i,Ue!==null&&(Ot?(t=Ue,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ue.removeChild(n.stateNode));break;case 18:Ue!==null&&(Ot?(t=Ue,n=n.stateNode,t.nodeType===8?Ku(t.parentNode,n):t.nodeType===1&&Ku(t,n),Js(t)):Ku(Ue,n.stateNode));break;case 4:r=Ue,i=Ot,Ue=n.stateNode.containerInfo,Ot=!0,Dn(t,e,n),Ue=r,Ot=i;break;case 0:case 11:case 14:case 15:if(!Xe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&nh(n,e,o),i=i.next}while(i!==r)}Dn(t,e,n);break;case 1:if(!Xe&&(fi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){we(n,e,l)}Dn(t,e,n);break;case 21:Dn(t,e,n);break;case 22:n.mode&1?(Xe=(r=Xe)||n.memoizedState!==null,Dn(t,e,n),Xe=r):Dn(t,e,n);break;default:Dn(t,e,n)}}function mm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new f0),e.forEach(function(r){var i=T0.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Dt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ue=l.stateNode,Ot=!1;break e;case 3:Ue=l.stateNode.containerInfo,Ot=!0;break e;case 4:Ue=l.stateNode.containerInfo,Ot=!0;break e}l=l.return}if(Ue===null)throw Error(M(160));q_(s,o,i),Ue=null,Ot=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){we(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)G_(e,t),e=e.sibling}function G_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Dt(e,t),zt(t),r&4){try{bs(3,t,t.return),Fl(3,t)}catch(D){we(t,t.return,D)}try{bs(5,t,t.return)}catch(D){we(t,t.return,D)}}break;case 1:Dt(e,t),zt(t),r&512&&n!==null&&fi(n,n.return);break;case 5:if(Dt(e,t),zt(t),r&512&&n!==null&&fi(n,n.return),t.flags&32){var i=t.stateNode;try{Ks(i,"")}catch(D){we(t,t.return,D)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&my(i,s),kc(l,o);var h=kc(l,s);for(o=0;o<u.length;o+=2){var d=u[o],m=u[o+1];d==="style"?Ey(i,m):d==="dangerouslySetInnerHTML"?_y(i,m):d==="children"?Ks(i,m):zh(i,d,m,h)}switch(l){case"input":Sc(i,s);break;case"textarea":gy(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var R=s.value;R!=null?mi(i,!!s.multiple,R,!1):g!==!!s.multiple&&(s.defaultValue!=null?mi(i,!!s.multiple,s.defaultValue,!0):mi(i,!!s.multiple,s.multiple?[]:"",!1))}i[ro]=s}catch(D){we(t,t.return,D)}}break;case 6:if(Dt(e,t),zt(t),r&4){if(t.stateNode===null)throw Error(M(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(D){we(t,t.return,D)}}break;case 3:if(Dt(e,t),zt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Js(e.containerInfo)}catch(D){we(t,t.return,D)}break;case 4:Dt(e,t),zt(t);break;case 13:Dt(e,t),zt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(wf=Se())),r&4&&mm(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Xe=(h=Xe)||d,Dt(e,t),Xe=h):Dt(e,t),zt(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!d&&t.mode&1)for(B=t,d=t.child;d!==null;){for(m=B=d;B!==null;){switch(g=B,R=g.child,g.tag){case 0:case 11:case 14:case 15:bs(4,g,g.return);break;case 1:fi(g,g.return);var N=g.stateNode;if(typeof N.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,N.props=e.memoizedProps,N.state=e.memoizedState,N.componentWillUnmount()}catch(D){we(r,n,D)}}break;case 5:fi(g,g.return);break;case 22:if(g.memoizedState!==null){ym(m);continue}}R!==null?(R.return=g,B=R):ym(m)}d=d.sibling}e:for(d=null,m=t;;){if(m.tag===5){if(d===null){d=m;try{i=m.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=vy("display",o))}catch(D){we(t,t.return,D)}}}else if(m.tag===6){if(d===null)try{m.stateNode.nodeValue=h?"":m.memoizedProps}catch(D){we(t,t.return,D)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;d===m&&(d=null),m=m.return}d===m&&(d=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Dt(e,t),zt(t),r&4&&mm(t);break;case 21:break;default:Dt(e,t),zt(t)}}function zt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(W_(n)){var r=n;break e}n=n.return}throw Error(M(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ks(i,""),r.flags&=-33);var s=pm(t);sh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=pm(t);ih(t,l,o);break;default:throw Error(M(161))}}catch(u){we(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function p0(t,e,n){B=t,K_(t)}function K_(t,e,n){for(var r=(t.mode&1)!==0;B!==null;){var i=B,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||oa;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||Xe;l=oa;var h=Xe;if(oa=o,(Xe=u)&&!h)for(B=i;B!==null;)o=B,u=o.child,o.tag===22&&o.memoizedState!==null?_m(i):u!==null?(u.return=o,B=u):_m(i);for(;s!==null;)B=s,K_(s),s=s.sibling;B=i,oa=l,Xe=h}gm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,B=s):gm(t)}}function gm(t){for(;B!==null;){var e=B;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Xe||Fl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Xe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Vt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&em(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}em(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var d=h.memoizedState;if(d!==null){var m=d.dehydrated;m!==null&&Js(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}Xe||e.flags&512&&rh(e)}catch(g){we(e,e.return,g)}}if(e===t){B=null;break}if(n=e.sibling,n!==null){n.return=e.return,B=n;break}B=e.return}}function ym(t){for(;B!==null;){var e=B;if(e===t){B=null;break}var n=e.sibling;if(n!==null){n.return=e.return,B=n;break}B=e.return}}function _m(t){for(;B!==null;){var e=B;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Fl(4,e)}catch(u){we(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){we(e,i,u)}}var s=e.return;try{rh(e)}catch(u){we(e,s,u)}break;case 5:var o=e.return;try{rh(e)}catch(u){we(e,o,u)}}}catch(u){we(e,e.return,u)}if(e===t){B=null;break}var l=e.sibling;if(l!==null){l.return=e.return,B=l;break}B=e.return}}var m0=Math.ceil,rl=Tn.ReactCurrentDispatcher,vf=Tn.ReactCurrentOwner,Ct=Tn.ReactCurrentBatchConfig,ie=0,Fe=null,Re=null,Be=0,mt=0,di=dr(0),De=0,uo=null,Fr=0,bl=0,Ef=0,Us=null,at=null,wf=0,Oi=1/0,on=null,il=!1,oh=null,Qn=null,aa=!1,Bn=null,sl=0,js=0,ah=null,Aa=-1,Ra=0;function rt(){return ie&6?Se():Aa!==-1?Aa:Aa=Se()}function Xn(t){return t.mode&1?ie&2&&Be!==0?Be&-Be:JI.transition!==null?(Ra===0&&(Ra=Vy()),Ra):(t=oe,t!==0||(t=window.event,t=t===void 0?16:Uy(t.type)),t):1}function Ft(t,e,n,r){if(50<js)throw js=0,ah=null,Error(M(185));Eo(t,n,r),(!(ie&2)||t!==Fe)&&(t===Fe&&(!(ie&2)&&(bl|=n),De===4&&Mn(t,Be)),ft(t,r),n===1&&ie===0&&!(e.mode&1)&&(Oi=Se()+500,xl&&pr()))}function ft(t,e){var n=t.callbackNode;JT(t,e);var r=Ba(t,t===Fe?Be:0);if(r===0)n!==null&&Cp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Cp(n),e===1)t.tag===0?YI(vm.bind(null,t)):i_(vm.bind(null,t)),GI(function(){!(ie&6)&&pr()}),n=null;else{switch(Oy(r)){case 1:n=qh;break;case 4:n=Ny;break;case 16:n=za;break;case 536870912:n=Dy;break;default:n=za}n=nv(n,Q_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Q_(t,e){if(Aa=-1,Ra=0,ie&6)throw Error(M(327));var n=t.callbackNode;if(Ei()&&t.callbackNode!==n)return null;var r=Ba(t,t===Fe?Be:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ol(t,r);else{e=r;var i=ie;ie|=2;var s=Y_();(Fe!==t||Be!==e)&&(on=null,Oi=Se()+500,Dr(t,e));do try{_0();break}catch(l){X_(t,l)}while(!0);of(),rl.current=s,ie=i,Re!==null?e=0:(Fe=null,Be=0,e=De)}if(e!==0){if(e===2&&(i=xc(t),i!==0&&(r=i,e=lh(t,i))),e===1)throw n=uo,Dr(t,0),Mn(t,r),ft(t,Se()),n;if(e===6)Mn(t,r);else{if(i=t.current.alternate,!(r&30)&&!g0(i)&&(e=ol(t,r),e===2&&(s=xc(t),s!==0&&(r=s,e=lh(t,s))),e===1))throw n=uo,Dr(t,0),Mn(t,r),ft(t,Se()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(M(345));case 2:Ar(t,at,on);break;case 3:if(Mn(t,r),(r&130023424)===r&&(e=wf+500-Se(),10<e)){if(Ba(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){rt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Bc(Ar.bind(null,t,at,on),e);break}Ar(t,at,on);break;case 4:if(Mn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Mt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*m0(r/1960))-r,10<r){t.timeoutHandle=Bc(Ar.bind(null,t,at,on),r);break}Ar(t,at,on);break;case 5:Ar(t,at,on);break;default:throw Error(M(329))}}}return ft(t,Se()),t.callbackNode===n?Q_.bind(null,t):null}function lh(t,e){var n=Us;return t.current.memoizedState.isDehydrated&&(Dr(t,e).flags|=256),t=ol(t,e),t!==2&&(e=at,at=n,e!==null&&uh(e)),t}function uh(t){at===null?at=t:at.push.apply(at,t)}function g0(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!bt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Mn(t,e){for(e&=~Ef,e&=~bl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Mt(e),r=1<<n;t[n]=-1,e&=~r}}function vm(t){if(ie&6)throw Error(M(327));Ei();var e=Ba(t,0);if(!(e&1))return ft(t,Se()),null;var n=ol(t,e);if(t.tag!==0&&n===2){var r=xc(t);r!==0&&(e=r,n=lh(t,r))}if(n===1)throw n=uo,Dr(t,0),Mn(t,e),ft(t,Se()),n;if(n===6)throw Error(M(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ar(t,at,on),ft(t,Se()),null}function Tf(t,e){var n=ie;ie|=1;try{return t(e)}finally{ie=n,ie===0&&(Oi=Se()+500,xl&&pr())}}function br(t){Bn!==null&&Bn.tag===0&&!(ie&6)&&Ei();var e=ie;ie|=1;var n=Ct.transition,r=oe;try{if(Ct.transition=null,oe=1,t)return t()}finally{oe=r,Ct.transition=n,ie=e,!(ie&6)&&pr()}}function If(){mt=di.current,de(di)}function Dr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,qI(n)),Re!==null)for(n=Re.return;n!==null;){var r=n;switch(nf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ga();break;case 3:Di(),de(ct),de(Je),ff();break;case 5:hf(r);break;case 4:Di();break;case 13:de(ge);break;case 19:de(ge);break;case 10:af(r.type._context);break;case 22:case 23:If()}n=n.return}if(Fe=t,Re=t=Yn(t.current,null),Be=mt=e,De=0,uo=null,Ef=bl=Fr=0,at=Us=null,Pr!==null){for(e=0;e<Pr.length;e++)if(n=Pr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Pr=null}return t}function X_(t,e){do{var n=Re;try{if(of(),Ta.current=nl,tl){for(var r=ye.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}tl=!1}if(Mr=0,Le=ke=ye=null,Fs=!1,oo=0,vf.current=null,n===null||n.return===null){De=1,uo=e,Re=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Be,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,d=l,m=d.tag;if(!(d.mode&1)&&(m===0||m===11||m===15)){var g=d.alternate;g?(d.updateQueue=g.updateQueue,d.memoizedState=g.memoizedState,d.lanes=g.lanes):(d.updateQueue=null,d.memoizedState=null)}var R=om(o);if(R!==null){R.flags&=-257,am(R,o,l,s,e),R.mode&1&&sm(s,h,e),e=R,u=h;var N=e.updateQueue;if(N===null){var D=new Set;D.add(u),e.updateQueue=D}else N.add(u);break e}else{if(!(e&1)){sm(s,h,e),Sf();break e}u=Error(M(426))}}else if(me&&l.mode&1){var L=om(o);if(L!==null){!(L.flags&65536)&&(L.flags|=256),am(L,o,l,s,e),rf(Vi(u,l));break e}}s=u=Vi(u,l),De!==4&&(De=2),Us===null?Us=[s]:Us.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var I=O_(s,u,e);Zp(s,I);break e;case 1:l=u;var E=s.type,A=s.stateNode;if(!(s.flags&128)&&(typeof E.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(Qn===null||!Qn.has(A)))){s.flags|=65536,e&=-e,s.lanes|=e;var V=x_(s,l,e);Zp(s,V);break e}}s=s.return}while(s!==null)}Z_(n)}catch(b){e=b,Re===n&&n!==null&&(Re=n=n.return);continue}break}while(!0)}function Y_(){var t=rl.current;return rl.current=nl,t===null?nl:t}function Sf(){(De===0||De===3||De===2)&&(De=4),Fe===null||!(Fr&268435455)&&!(bl&268435455)||Mn(Fe,Be)}function ol(t,e){var n=ie;ie|=2;var r=Y_();(Fe!==t||Be!==e)&&(on=null,Dr(t,e));do try{y0();break}catch(i){X_(t,i)}while(!0);if(of(),ie=n,rl.current=r,Re!==null)throw Error(M(261));return Fe=null,Be=0,De}function y0(){for(;Re!==null;)J_(Re)}function _0(){for(;Re!==null&&!$T();)J_(Re)}function J_(t){var e=tv(t.alternate,t,mt);t.memoizedProps=t.pendingProps,e===null?Z_(t):Re=e,vf.current=null}function Z_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=h0(n,e),n!==null){n.flags&=32767,Re=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{De=6,Re=null;return}}else if(n=c0(n,e,mt),n!==null){Re=n;return}if(e=e.sibling,e!==null){Re=e;return}Re=e=t}while(e!==null);De===0&&(De=5)}function Ar(t,e,n){var r=oe,i=Ct.transition;try{Ct.transition=null,oe=1,v0(t,e,n,r)}finally{Ct.transition=i,oe=r}return null}function v0(t,e,n,r){do Ei();while(Bn!==null);if(ie&6)throw Error(M(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(M(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(ZT(t,s),t===Fe&&(Re=Fe=null,Be=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||aa||(aa=!0,nv(za,function(){return Ei(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ct.transition,Ct.transition=null;var o=oe;oe=1;var l=ie;ie|=4,vf.current=null,d0(t,n),G_(n,t),UI(jc),$a=!!Uc,jc=Uc=null,t.current=n,p0(n),HT(),ie=l,oe=o,Ct.transition=s}else t.current=n;if(aa&&(aa=!1,Bn=t,sl=i),s=t.pendingLanes,s===0&&(Qn=null),GT(n.stateNode),ft(t,Se()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(il)throw il=!1,t=oh,oh=null,t;return sl&1&&t.tag!==0&&Ei(),s=t.pendingLanes,s&1?t===ah?js++:(js=0,ah=t):js=0,pr(),null}function Ei(){if(Bn!==null){var t=Oy(sl),e=Ct.transition,n=oe;try{if(Ct.transition=null,oe=16>t?16:t,Bn===null)var r=!1;else{if(t=Bn,Bn=null,sl=0,ie&6)throw Error(M(331));var i=ie;for(ie|=4,B=t.current;B!==null;){var s=B,o=s.child;if(B.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(B=h;B!==null;){var d=B;switch(d.tag){case 0:case 11:case 15:bs(8,d,s)}var m=d.child;if(m!==null)m.return=d,B=m;else for(;B!==null;){d=B;var g=d.sibling,R=d.return;if(H_(d),d===h){B=null;break}if(g!==null){g.return=R,B=g;break}B=R}}}var N=s.alternate;if(N!==null){var D=N.child;if(D!==null){N.child=null;do{var L=D.sibling;D.sibling=null,D=L}while(D!==null)}}B=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,B=o;else e:for(;B!==null;){if(s=B,s.flags&2048)switch(s.tag){case 0:case 11:case 15:bs(9,s,s.return)}var I=s.sibling;if(I!==null){I.return=s.return,B=I;break e}B=s.return}}var E=t.current;for(B=E;B!==null;){o=B;var A=o.child;if(o.subtreeFlags&2064&&A!==null)A.return=o,B=A;else e:for(o=E;B!==null;){if(l=B,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Fl(9,l)}}catch(b){we(l,l.return,b)}if(l===o){B=null;break e}var V=l.sibling;if(V!==null){V.return=l.return,B=V;break e}B=l.return}}if(ie=i,pr(),Gt&&typeof Gt.onPostCommitFiberRoot=="function")try{Gt.onPostCommitFiberRoot(kl,t)}catch{}r=!0}return r}finally{oe=n,Ct.transition=e}}return!1}function Em(t,e,n){e=Vi(n,e),e=O_(t,e,1),t=Kn(t,e,1),e=rt(),t!==null&&(Eo(t,1,e),ft(t,e))}function we(t,e,n){if(t.tag===3)Em(t,t,n);else for(;e!==null;){if(e.tag===3){Em(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Qn===null||!Qn.has(r))){t=Vi(n,t),t=x_(e,t,1),e=Kn(e,t,1),t=rt(),e!==null&&(Eo(e,1,t),ft(e,t));break}}e=e.return}}function E0(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=rt(),t.pingedLanes|=t.suspendedLanes&n,Fe===t&&(Be&n)===n&&(De===4||De===3&&(Be&130023424)===Be&&500>Se()-wf?Dr(t,0):Ef|=n),ft(t,e)}function ev(t,e){e===0&&(t.mode&1?(e=Yo,Yo<<=1,!(Yo&130023424)&&(Yo=4194304)):e=1);var n=rt();t=mn(t,e),t!==null&&(Eo(t,e,n),ft(t,n))}function w0(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ev(t,n)}function T0(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(M(314))}r!==null&&r.delete(e),ev(t,n)}var tv;tv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ct.current)ut=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ut=!1,u0(t,e,n);ut=!!(t.flags&131072)}else ut=!1,me&&e.flags&1048576&&s_(e,Xa,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Sa(t,e),t=e.pendingProps;var i=Pi(e,Je.current);vi(e,n),i=pf(null,e,r,t,i,n);var s=mf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ht(r)?(s=!0,Ka(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,uf(e),i.updater=Ml,e.stateNode=i,i._reactInternals=e,Qc(e,r,t,n),e=Jc(null,e,r,!0,s,n)):(e.tag=0,me&&s&&tf(e),nt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Sa(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=S0(r),t=Vt(r,t),i){case 0:e=Yc(null,e,r,t,n);break e;case 1:e=cm(null,e,r,t,n);break e;case 11:e=lm(null,e,r,t,n);break e;case 14:e=um(null,e,r,Vt(r.type,t),n);break e}throw Error(M(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),Yc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),cm(t,e,r,i,n);case 3:e:{if(b_(e),t===null)throw Error(M(387));r=e.pendingProps,s=e.memoizedState,i=s.element,h_(t,e),Za(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Vi(Error(M(423)),e),e=hm(t,e,r,n,i);break e}else if(r!==i){i=Vi(Error(M(424)),e),e=hm(t,e,r,n,i);break e}else for(gt=Gn(e.stateNode.containerInfo.firstChild),_t=e,me=!0,xt=null,n=u_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ki(),r===i){e=gn(t,e,n);break e}nt(t,e,r,n)}e=e.child}return e;case 5:return f_(e),t===null&&qc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,zc(r,i)?o=null:s!==null&&zc(r,s)&&(e.flags|=32),F_(t,e),nt(t,e,o,n),e.child;case 6:return t===null&&qc(e),null;case 13:return U_(t,e,n);case 4:return cf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ni(e,null,r,n):nt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),lm(t,e,r,i,n);case 7:return nt(t,e,e.pendingProps,n),e.child;case 8:return nt(t,e,e.pendingProps.children,n),e.child;case 12:return nt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,le(Ya,r._currentValue),r._currentValue=o,s!==null)if(bt(s.value,o)){if(s.children===i.children&&!ct.current){e=gn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=fn(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var d=h.pending;d===null?u.next=u:(u.next=d.next,d.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Gc(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(M(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Gc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}nt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,vi(e,n),i=Pt(i),r=r(i),e.flags|=1,nt(t,e,r,n),e.child;case 14:return r=e.type,i=Vt(r,e.pendingProps),i=Vt(r.type,i),um(t,e,r,i,n);case 15:return L_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),Sa(t,e),e.tag=1,ht(r)?(t=!0,Ka(e)):t=!1,vi(e,n),V_(e,r,i),Qc(e,r,i,n),Jc(null,e,r,!0,t,n);case 19:return j_(t,e,n);case 22:return M_(t,e,n)}throw Error(M(156,e.tag))};function nv(t,e){return ky(t,e)}function I0(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rt(t,e,n,r){return new I0(t,e,n,r)}function Af(t){return t=t.prototype,!(!t||!t.isReactComponent)}function S0(t){if(typeof t=="function")return Af(t)?1:0;if(t!=null){if(t=t.$$typeof,t===$h)return 11;if(t===Hh)return 14}return 2}function Yn(t,e){var n=t.alternate;return n===null?(n=Rt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ca(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Af(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ri:return Vr(n.children,i,s,e);case Bh:o=8,i|=8;break;case vc:return t=Rt(12,n,e,i|2),t.elementType=vc,t.lanes=s,t;case Ec:return t=Rt(13,n,e,i),t.elementType=Ec,t.lanes=s,t;case wc:return t=Rt(19,n,e,i),t.elementType=wc,t.lanes=s,t;case fy:return Ul(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case cy:o=10;break e;case hy:o=9;break e;case $h:o=11;break e;case Hh:o=14;break e;case On:o=16,r=null;break e}throw Error(M(130,t==null?t:typeof t,""))}return e=Rt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Vr(t,e,n,r){return t=Rt(7,t,r,e),t.lanes=n,t}function Ul(t,e,n,r){return t=Rt(22,t,r,e),t.elementType=fy,t.lanes=n,t.stateNode={isHidden:!1},t}function nc(t,e,n){return t=Rt(6,t,null,e),t.lanes=n,t}function rc(t,e,n){return e=Rt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function A0(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fu(0),this.expirationTimes=Fu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Rf(t,e,n,r,i,s,o,l,u){return t=new A0(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Rt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},uf(s),t}function R0(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ni,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function rv(t){if(!t)return sr;t=t._reactInternals;e:{if(Wr(t)!==t||t.tag!==1)throw Error(M(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ht(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(M(171))}if(t.tag===1){var n=t.type;if(ht(n))return r_(t,n,e)}return e}function iv(t,e,n,r,i,s,o,l,u){return t=Rf(n,r,!0,t,i,s,o,l,u),t.context=rv(null),n=t.current,r=rt(),i=Xn(n),s=fn(r,i),s.callback=e??null,Kn(n,s,i),t.current.lanes=i,Eo(t,i,r),ft(t,r),t}function jl(t,e,n,r){var i=e.current,s=rt(),o=Xn(i);return n=rv(n),e.context===null?e.context=n:e.pendingContext=n,e=fn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Kn(i,e,o),t!==null&&(Ft(t,i,o,s),wa(t,i,o)),o}function al(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function wm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Cf(t,e){wm(t,e),(t=t.alternate)&&wm(t,e)}function C0(){return null}var sv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Pf(t){this._internalRoot=t}zl.prototype.render=Pf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(M(409));jl(t,e,null,null)};zl.prototype.unmount=Pf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;br(function(){jl(null,t,null,null)}),e[pn]=null}};function zl(t){this._internalRoot=t}zl.prototype.unstable_scheduleHydration=function(t){if(t){var e=My();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ln.length&&e!==0&&e<Ln[n].priority;n++);Ln.splice(n,0,t),n===0&&by(t)}};function kf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Bl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Tm(){}function P0(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=al(o);s.call(h)}}var o=iv(e,r,t,0,null,!1,!1,"",Tm);return t._reactRootContainer=o,t[pn]=o.current,to(t.nodeType===8?t.parentNode:t),br(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=al(u);l.call(h)}}var u=Rf(t,0,!1,null,null,!1,!1,"",Tm);return t._reactRootContainer=u,t[pn]=u.current,to(t.nodeType===8?t.parentNode:t),br(function(){jl(e,u,n,r)}),u}function $l(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=al(o);l.call(u)}}jl(e,o,t,i)}else o=P0(n,e,t,i,r);return al(o)}xy=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Cs(e.pendingLanes);n!==0&&(Gh(e,n|1),ft(e,Se()),!(ie&6)&&(Oi=Se()+500,pr()))}break;case 13:br(function(){var r=mn(t,1);if(r!==null){var i=rt();Ft(r,t,1,i)}}),Cf(t,1)}};Kh=function(t){if(t.tag===13){var e=mn(t,134217728);if(e!==null){var n=rt();Ft(e,t,134217728,n)}Cf(t,134217728)}};Ly=function(t){if(t.tag===13){var e=Xn(t),n=mn(t,e);if(n!==null){var r=rt();Ft(n,t,e,r)}Cf(t,e)}};My=function(){return oe};Fy=function(t,e){var n=oe;try{return oe=t,e()}finally{oe=n}};Dc=function(t,e,n){switch(e){case"input":if(Sc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ol(r);if(!i)throw Error(M(90));py(r),Sc(r,i)}}}break;case"textarea":gy(t,n);break;case"select":e=n.value,e!=null&&mi(t,!!n.multiple,e,!1)}};Iy=Tf;Sy=br;var k0={usingClientEntryPoint:!1,Events:[To,ai,Ol,wy,Ty,Tf]},Ss={findFiberByHostInstance:Cr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},N0={bundleType:Ss.bundleType,version:Ss.version,rendererPackageName:Ss.rendererPackageName,rendererConfig:Ss.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Tn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Cy(t),t===null?null:t.stateNode},findFiberByHostInstance:Ss.findFiberByHostInstance||C0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var la=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!la.isDisabled&&la.supportsFiber)try{kl=la.inject(N0),Gt=la}catch{}}Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=k0;Et.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!kf(e))throw Error(M(200));return R0(t,e,null,n)};Et.createRoot=function(t,e){if(!kf(t))throw Error(M(299));var n=!1,r="",i=sv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Rf(t,1,!1,null,null,n,!1,r,i),t[pn]=e.current,to(t.nodeType===8?t.parentNode:t),new Pf(e)};Et.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(M(188)):(t=Object.keys(t).join(","),Error(M(268,t)));return t=Cy(e),t=t===null?null:t.stateNode,t};Et.flushSync=function(t){return br(t)};Et.hydrate=function(t,e,n){if(!Bl(e))throw Error(M(200));return $l(null,t,e,!0,n)};Et.hydrateRoot=function(t,e,n){if(!kf(t))throw Error(M(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=sv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=iv(e,null,t,1,n??null,i,!1,s,o),t[pn]=e.current,to(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new zl(e)};Et.render=function(t,e,n){if(!Bl(e))throw Error(M(200));return $l(null,t,e,!1,n)};Et.unmountComponentAtNode=function(t){if(!Bl(t))throw Error(M(40));return t._reactRootContainer?(br(function(){$l(null,null,t,!1,function(){t._reactRootContainer=null,t[pn]=null})}),!0):!1};Et.unstable_batchedUpdates=Tf;Et.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Bl(n))throw Error(M(200));if(t==null||t._reactInternals===void 0)throw Error(M(38));return $l(t,e,n,!1,r)};Et.version="18.3.1-next-f1338f8080-20240426";function ov(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ov)}catch(t){console.error(t)}}ov(),oy.exports=Et;var D0=oy.exports,Im=D0;yc.createRoot=Im.createRoot,yc.hydrateRoot=Im.hydrateRoot;const V0=()=>{};var Sm={};/**
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
 */const av=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},O0=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},lv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,d=s>>2,m=(s&3)<<4|l>>4;let g=(l&15)<<2|h>>6,R=h&63;u||(R=64,o||(g=64)),r.push(n[d],n[m],n[g],n[R])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(av(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):O0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||m==null)throw new x0;const g=s<<2|l>>4;if(r.push(g),h!==64){const R=l<<4&240|h>>2;if(r.push(R),m!==64){const N=h<<6&192|m;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class x0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const L0=function(t){const e=av(t);return lv.encodeByteArray(e,!0)},ll=function(t){return L0(t).replace(/\./g,"")},uv=function(t){try{return lv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function M0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const F0=()=>M0().__FIREBASE_DEFAULTS__,b0=()=>{if(typeof process>"u"||typeof Sm>"u")return;const t=Sm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},U0=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&uv(t[1]);return e&&JSON.parse(e)},Hl=()=>{try{return V0()||F0()||b0()||U0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},cv=t=>{var e,n;return(n=(e=Hl())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},j0=t=>{const e=cv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},hv=()=>{var t;return(t=Hl())==null?void 0:t.config},fv=t=>{var e;return(e=Hl())==null?void 0:e[`_${t}`]};/**
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
 */class z0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function qi(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function dv(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function B0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[ll(JSON.stringify(n)),ll(JSON.stringify(o)),""].join(".")}const zs={};function $0(){const t={prod:[],emulator:[]};for(const e of Object.keys(zs))zs[e]?t.emulator.push(e):t.prod.push(e);return t}function H0(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Am=!1;function pv(t,e){if(typeof window>"u"||typeof document>"u"||!qi(window.location.host)||zs[t]===e||zs[t]||Am)return;zs[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",s=$0().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function u(g,R){g.setAttribute("width","24"),g.setAttribute("id",R),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function h(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{Am=!0,o()},g}function d(g,R){g.setAttribute("id",R),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function m(){const g=H0(r),R=n("text"),N=document.getElementById(R)||document.createElement("span"),D=n("learnmore"),L=document.getElementById(D)||document.createElement("a"),I=n("preprendIcon"),E=document.getElementById(I)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const A=g.element;l(A),d(L,D);const V=h();u(E,I),A.append(E,N,L,V),document.body.appendChild(A)}s?(N.innerText="Preview backend disconnected.",E.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(E.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,N.innerText="Preview backend running in this workspace."),N.setAttribute("id",R)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
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
 */function Ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function W0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ze())}function q0(){var e;const t=(e=Hl())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function G0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function K0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Q0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function X0(){const t=Ze();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Y0(){return!q0()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function J0(){try{return typeof indexedDB=="object"}catch{return!1}}function Z0(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const eS="FirebaseError";class In extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=eS,Object.setPrototypeOf(this,In.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,So.prototype.create)}}class So{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?tS(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new In(i,l,r)}}function tS(t,e){return t.replace(nS,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const nS=/\{\$([^}]+)}/g;function rS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ur(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Rm(s)&&Rm(o)){if(!Ur(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Rm(t){return t!==null&&typeof t=="object"}/**
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
 */function Ao(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function iS(t,e){const n=new sS(t,e);return n.subscribe.bind(n)}class sS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");oS(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ic),i.error===void 0&&(i.error=ic),i.complete===void 0&&(i.complete=ic);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function oS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ic(){}/**
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
 */function dt(t){return t&&t._delegate?t._delegate:t}class jr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Rr="[DEFAULT]";/**
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
 */class aS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new z0;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(uS(e))try{this.getOrInitializeService({instanceIdentifier:Rr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Rr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Rr){return this.instances.has(e)}getOptions(e=Rr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:lS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Rr){return this.component?this.component.multipleInstances?e:Rr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function lS(t){return t===Rr?void 0:t}function uS(t){return t.instantiationMode==="EAGER"}/**
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
 */class cS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new aS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const hS={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},fS=ee.INFO,dS={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},pS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=dS[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Nf{constructor(e){this.name=e,this._logLevel=fS,this._logHandler=pS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?hS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const mS=(t,e)=>e.some(n=>t instanceof n);let Cm,Pm;function gS(){return Cm||(Cm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yS(){return Pm||(Pm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const mv=new WeakMap,ch=new WeakMap,gv=new WeakMap,sc=new WeakMap,Df=new WeakMap;function _S(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Jn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&mv.set(n,t)}).catch(()=>{}),Df.set(e,t),e}function vS(t){if(ch.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ch.set(t,e)}let hh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ch.get(t);if(e==="objectStoreNames")return t.objectStoreNames||gv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Jn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ES(t){hh=t(hh)}function wS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(oc(this),e,...n);return gv.set(r,e.sort?e.sort():[e]),Jn(r)}:yS().includes(t)?function(...e){return t.apply(oc(this),e),Jn(mv.get(this))}:function(...e){return Jn(t.apply(oc(this),e))}}function TS(t){return typeof t=="function"?wS(t):(t instanceof IDBTransaction&&vS(t),mS(t,gS())?new Proxy(t,hh):t)}function Jn(t){if(t instanceof IDBRequest)return _S(t);if(sc.has(t))return sc.get(t);const e=TS(t);return e!==t&&(sc.set(t,e),Df.set(e,t)),e}const oc=t=>Df.get(t);function IS(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Jn(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Jn(o.result),u.oldVersion,u.newVersion,Jn(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const SS=["get","getKey","getAll","getAllKeys","count"],AS=["put","add","delete","clear"],ac=new Map;function km(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ac.get(e))return ac.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=AS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||SS.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return ac.set(e,s),s}ES(t=>({...t,get:(e,n,r)=>km(e,n)||t.get(e,n,r),has:(e,n)=>!!km(e,n)||t.has(e,n)}));/**
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
 */class RS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(CS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function CS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const fh="@firebase/app",Nm="0.14.6";/**
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
 */const yn=new Nf("@firebase/app"),PS="@firebase/app-compat",kS="@firebase/analytics-compat",NS="@firebase/analytics",DS="@firebase/app-check-compat",VS="@firebase/app-check",OS="@firebase/auth",xS="@firebase/auth-compat",LS="@firebase/database",MS="@firebase/data-connect",FS="@firebase/database-compat",bS="@firebase/functions",US="@firebase/functions-compat",jS="@firebase/installations",zS="@firebase/installations-compat",BS="@firebase/messaging",$S="@firebase/messaging-compat",HS="@firebase/performance",WS="@firebase/performance-compat",qS="@firebase/remote-config",GS="@firebase/remote-config-compat",KS="@firebase/storage",QS="@firebase/storage-compat",XS="@firebase/firestore",YS="@firebase/ai",JS="@firebase/firestore-compat",ZS="firebase",e1="12.6.0";/**
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
 */const dh="[DEFAULT]",t1={[fh]:"fire-core",[PS]:"fire-core-compat",[NS]:"fire-analytics",[kS]:"fire-analytics-compat",[VS]:"fire-app-check",[DS]:"fire-app-check-compat",[OS]:"fire-auth",[xS]:"fire-auth-compat",[LS]:"fire-rtdb",[MS]:"fire-data-connect",[FS]:"fire-rtdb-compat",[bS]:"fire-fn",[US]:"fire-fn-compat",[jS]:"fire-iid",[zS]:"fire-iid-compat",[BS]:"fire-fcm",[$S]:"fire-fcm-compat",[HS]:"fire-perf",[WS]:"fire-perf-compat",[qS]:"fire-rc",[GS]:"fire-rc-compat",[KS]:"fire-gcs",[QS]:"fire-gcs-compat",[XS]:"fire-fst",[JS]:"fire-fst-compat",[YS]:"fire-vertex","fire-js":"fire-js",[ZS]:"fire-js-all"};/**
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
 */const ul=new Map,n1=new Map,ph=new Map;function Dm(t,e){try{t.container.addComponent(e)}catch(n){yn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function xi(t){const e=t.name;if(ph.has(e))return yn.debug(`There were multiple attempts to register component ${e}.`),!1;ph.set(e,t);for(const n of ul.values())Dm(n,t);for(const n of n1.values())Dm(n,t);return!0}function Vf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Wt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const r1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Zn=new So("app","Firebase",r1);/**
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
 */class i1{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new jr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Zn.create("app-deleted",{appName:this._name})}}/**
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
 */const Gi=e1;function yv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:dh,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw Zn.create("bad-app-name",{appName:String(i)});if(n||(n=hv()),!n)throw Zn.create("no-options");const s=ul.get(i);if(s){if(Ur(n,s.options)&&Ur(r,s.config))return s;throw Zn.create("duplicate-app",{appName:i})}const o=new cS(i);for(const u of ph.values())o.addComponent(u);const l=new i1(n,r,o);return ul.set(i,l),l}function _v(t=dh){const e=ul.get(t);if(!e&&t===dh&&hv())return yv();if(!e)throw Zn.create("no-app",{appName:t});return e}function er(t,e,n){let r=t1[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),yn.warn(o.join(" "));return}xi(new jr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const s1="firebase-heartbeat-database",o1=1,co="firebase-heartbeat-store";let lc=null;function vv(){return lc||(lc=IS(s1,o1,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(co)}catch(n){console.warn(n)}}}}).catch(t=>{throw Zn.create("idb-open",{originalErrorMessage:t.message})})),lc}async function a1(t){try{const n=(await vv()).transaction(co),r=await n.objectStore(co).get(Ev(t));return await n.done,r}catch(e){if(e instanceof In)yn.warn(e.message);else{const n=Zn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});yn.warn(n.message)}}}async function Vm(t,e){try{const r=(await vv()).transaction(co,"readwrite");await r.objectStore(co).put(e,Ev(t)),await r.done}catch(n){if(n instanceof In)yn.warn(n.message);else{const r=Zn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});yn.warn(r.message)}}}function Ev(t){return`${t.name}!${t.options.appId}`}/**
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
 */const l1=1024,u1=30;class c1{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new f1(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Om();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>u1){const o=d1(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){yn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Om(),{heartbeatsToSend:r,unsentEntries:i}=h1(this._heartbeatsCache.heartbeats),s=ll(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return yn.warn(n),""}}}function Om(){return new Date().toISOString().substring(0,10)}function h1(t,e=l1){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),xm(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),xm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class f1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return J0()?Z0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await a1(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Vm(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Vm(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function xm(t){return ll(JSON.stringify({version:2,heartbeats:t})).length}function d1(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function p1(t){xi(new jr("platform-logger",e=>new RS(e),"PRIVATE")),xi(new jr("heartbeat",e=>new c1(e),"PRIVATE")),er(fh,Nm,t),er(fh,Nm,"esm2020"),er("fire-js","")}p1("");var Lm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var tr,wv;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(_,y){function v(){}v.prototype=y.prototype,_.F=y.prototype,_.prototype=new v,_.prototype.constructor=_,_.D=function(T,S,C){for(var w=Array(arguments.length-2),be=2;be<arguments.length;be++)w[be-2]=arguments[be];return y.prototype[S].apply(T,w)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(_,y,v){v||(v=0);const T=Array(16);if(typeof y=="string")for(var S=0;S<16;++S)T[S]=y.charCodeAt(v++)|y.charCodeAt(v++)<<8|y.charCodeAt(v++)<<16|y.charCodeAt(v++)<<24;else for(S=0;S<16;++S)T[S]=y[v++]|y[v++]<<8|y[v++]<<16|y[v++]<<24;y=_.g[0],v=_.g[1],S=_.g[2];let C=_.g[3],w;w=y+(C^v&(S^C))+T[0]+3614090360&4294967295,y=v+(w<<7&4294967295|w>>>25),w=C+(S^y&(v^S))+T[1]+3905402710&4294967295,C=y+(w<<12&4294967295|w>>>20),w=S+(v^C&(y^v))+T[2]+606105819&4294967295,S=C+(w<<17&4294967295|w>>>15),w=v+(y^S&(C^y))+T[3]+3250441966&4294967295,v=S+(w<<22&4294967295|w>>>10),w=y+(C^v&(S^C))+T[4]+4118548399&4294967295,y=v+(w<<7&4294967295|w>>>25),w=C+(S^y&(v^S))+T[5]+1200080426&4294967295,C=y+(w<<12&4294967295|w>>>20),w=S+(v^C&(y^v))+T[6]+2821735955&4294967295,S=C+(w<<17&4294967295|w>>>15),w=v+(y^S&(C^y))+T[7]+4249261313&4294967295,v=S+(w<<22&4294967295|w>>>10),w=y+(C^v&(S^C))+T[8]+1770035416&4294967295,y=v+(w<<7&4294967295|w>>>25),w=C+(S^y&(v^S))+T[9]+2336552879&4294967295,C=y+(w<<12&4294967295|w>>>20),w=S+(v^C&(y^v))+T[10]+4294925233&4294967295,S=C+(w<<17&4294967295|w>>>15),w=v+(y^S&(C^y))+T[11]+2304563134&4294967295,v=S+(w<<22&4294967295|w>>>10),w=y+(C^v&(S^C))+T[12]+1804603682&4294967295,y=v+(w<<7&4294967295|w>>>25),w=C+(S^y&(v^S))+T[13]+4254626195&4294967295,C=y+(w<<12&4294967295|w>>>20),w=S+(v^C&(y^v))+T[14]+2792965006&4294967295,S=C+(w<<17&4294967295|w>>>15),w=v+(y^S&(C^y))+T[15]+1236535329&4294967295,v=S+(w<<22&4294967295|w>>>10),w=y+(S^C&(v^S))+T[1]+4129170786&4294967295,y=v+(w<<5&4294967295|w>>>27),w=C+(v^S&(y^v))+T[6]+3225465664&4294967295,C=y+(w<<9&4294967295|w>>>23),w=S+(y^v&(C^y))+T[11]+643717713&4294967295,S=C+(w<<14&4294967295|w>>>18),w=v+(C^y&(S^C))+T[0]+3921069994&4294967295,v=S+(w<<20&4294967295|w>>>12),w=y+(S^C&(v^S))+T[5]+3593408605&4294967295,y=v+(w<<5&4294967295|w>>>27),w=C+(v^S&(y^v))+T[10]+38016083&4294967295,C=y+(w<<9&4294967295|w>>>23),w=S+(y^v&(C^y))+T[15]+3634488961&4294967295,S=C+(w<<14&4294967295|w>>>18),w=v+(C^y&(S^C))+T[4]+3889429448&4294967295,v=S+(w<<20&4294967295|w>>>12),w=y+(S^C&(v^S))+T[9]+568446438&4294967295,y=v+(w<<5&4294967295|w>>>27),w=C+(v^S&(y^v))+T[14]+3275163606&4294967295,C=y+(w<<9&4294967295|w>>>23),w=S+(y^v&(C^y))+T[3]+4107603335&4294967295,S=C+(w<<14&4294967295|w>>>18),w=v+(C^y&(S^C))+T[8]+1163531501&4294967295,v=S+(w<<20&4294967295|w>>>12),w=y+(S^C&(v^S))+T[13]+2850285829&4294967295,y=v+(w<<5&4294967295|w>>>27),w=C+(v^S&(y^v))+T[2]+4243563512&4294967295,C=y+(w<<9&4294967295|w>>>23),w=S+(y^v&(C^y))+T[7]+1735328473&4294967295,S=C+(w<<14&4294967295|w>>>18),w=v+(C^y&(S^C))+T[12]+2368359562&4294967295,v=S+(w<<20&4294967295|w>>>12),w=y+(v^S^C)+T[5]+4294588738&4294967295,y=v+(w<<4&4294967295|w>>>28),w=C+(y^v^S)+T[8]+2272392833&4294967295,C=y+(w<<11&4294967295|w>>>21),w=S+(C^y^v)+T[11]+1839030562&4294967295,S=C+(w<<16&4294967295|w>>>16),w=v+(S^C^y)+T[14]+4259657740&4294967295,v=S+(w<<23&4294967295|w>>>9),w=y+(v^S^C)+T[1]+2763975236&4294967295,y=v+(w<<4&4294967295|w>>>28),w=C+(y^v^S)+T[4]+1272893353&4294967295,C=y+(w<<11&4294967295|w>>>21),w=S+(C^y^v)+T[7]+4139469664&4294967295,S=C+(w<<16&4294967295|w>>>16),w=v+(S^C^y)+T[10]+3200236656&4294967295,v=S+(w<<23&4294967295|w>>>9),w=y+(v^S^C)+T[13]+681279174&4294967295,y=v+(w<<4&4294967295|w>>>28),w=C+(y^v^S)+T[0]+3936430074&4294967295,C=y+(w<<11&4294967295|w>>>21),w=S+(C^y^v)+T[3]+3572445317&4294967295,S=C+(w<<16&4294967295|w>>>16),w=v+(S^C^y)+T[6]+76029189&4294967295,v=S+(w<<23&4294967295|w>>>9),w=y+(v^S^C)+T[9]+3654602809&4294967295,y=v+(w<<4&4294967295|w>>>28),w=C+(y^v^S)+T[12]+3873151461&4294967295,C=y+(w<<11&4294967295|w>>>21),w=S+(C^y^v)+T[15]+530742520&4294967295,S=C+(w<<16&4294967295|w>>>16),w=v+(S^C^y)+T[2]+3299628645&4294967295,v=S+(w<<23&4294967295|w>>>9),w=y+(S^(v|~C))+T[0]+4096336452&4294967295,y=v+(w<<6&4294967295|w>>>26),w=C+(v^(y|~S))+T[7]+1126891415&4294967295,C=y+(w<<10&4294967295|w>>>22),w=S+(y^(C|~v))+T[14]+2878612391&4294967295,S=C+(w<<15&4294967295|w>>>17),w=v+(C^(S|~y))+T[5]+4237533241&4294967295,v=S+(w<<21&4294967295|w>>>11),w=y+(S^(v|~C))+T[12]+1700485571&4294967295,y=v+(w<<6&4294967295|w>>>26),w=C+(v^(y|~S))+T[3]+2399980690&4294967295,C=y+(w<<10&4294967295|w>>>22),w=S+(y^(C|~v))+T[10]+4293915773&4294967295,S=C+(w<<15&4294967295|w>>>17),w=v+(C^(S|~y))+T[1]+2240044497&4294967295,v=S+(w<<21&4294967295|w>>>11),w=y+(S^(v|~C))+T[8]+1873313359&4294967295,y=v+(w<<6&4294967295|w>>>26),w=C+(v^(y|~S))+T[15]+4264355552&4294967295,C=y+(w<<10&4294967295|w>>>22),w=S+(y^(C|~v))+T[6]+2734768916&4294967295,S=C+(w<<15&4294967295|w>>>17),w=v+(C^(S|~y))+T[13]+1309151649&4294967295,v=S+(w<<21&4294967295|w>>>11),w=y+(S^(v|~C))+T[4]+4149444226&4294967295,y=v+(w<<6&4294967295|w>>>26),w=C+(v^(y|~S))+T[11]+3174756917&4294967295,C=y+(w<<10&4294967295|w>>>22),w=S+(y^(C|~v))+T[2]+718787259&4294967295,S=C+(w<<15&4294967295|w>>>17),w=v+(C^(S|~y))+T[9]+3951481745&4294967295,_.g[0]=_.g[0]+y&4294967295,_.g[1]=_.g[1]+(S+(w<<21&4294967295|w>>>11))&4294967295,_.g[2]=_.g[2]+S&4294967295,_.g[3]=_.g[3]+C&4294967295}r.prototype.v=function(_,y){y===void 0&&(y=_.length);const v=y-this.blockSize,T=this.C;let S=this.h,C=0;for(;C<y;){if(S==0)for(;C<=v;)i(this,_,C),C+=this.blockSize;if(typeof _=="string"){for(;C<y;)if(T[S++]=_.charCodeAt(C++),S==this.blockSize){i(this,T),S=0;break}}else for(;C<y;)if(T[S++]=_[C++],S==this.blockSize){i(this,T),S=0;break}}this.h=S,this.o+=y},r.prototype.A=function(){var _=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);_[0]=128;for(var y=1;y<_.length-8;++y)_[y]=0;y=this.o*8;for(var v=_.length-8;v<_.length;++v)_[v]=y&255,y/=256;for(this.v(_),_=Array(16),y=0,v=0;v<4;++v)for(let T=0;T<32;T+=8)_[y++]=this.g[v]>>>T&255;return _};function s(_,y){var v=l;return Object.prototype.hasOwnProperty.call(v,_)?v[_]:v[_]=y(_)}function o(_,y){this.h=y;const v=[];let T=!0;for(let S=_.length-1;S>=0;S--){const C=_[S]|0;T&&C==y||(v[S]=C,T=!1)}this.g=v}var l={};function u(_){return-128<=_&&_<128?s(_,function(y){return new o([y|0],y<0?-1:0)}):new o([_|0],_<0?-1:0)}function h(_){if(isNaN(_)||!isFinite(_))return m;if(_<0)return L(h(-_));const y=[];let v=1;for(let T=0;_>=v;T++)y[T]=_/v|0,v*=4294967296;return new o(y,0)}function d(_,y){if(_.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(_.charAt(0)=="-")return L(d(_.substring(1),y));if(_.indexOf("-")>=0)throw Error('number format error: interior "-" character');const v=h(Math.pow(y,8));let T=m;for(let C=0;C<_.length;C+=8){var S=Math.min(8,_.length-C);const w=parseInt(_.substring(C,C+S),y);S<8?(S=h(Math.pow(y,S)),T=T.j(S).add(h(w))):(T=T.j(v),T=T.add(h(w)))}return T}var m=u(0),g=u(1),R=u(16777216);t=o.prototype,t.m=function(){if(D(this))return-L(this).m();let _=0,y=1;for(let v=0;v<this.g.length;v++){const T=this.i(v);_+=(T>=0?T:4294967296+T)*y,y*=4294967296}return _},t.toString=function(_){if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(N(this))return"0";if(D(this))return"-"+L(this).toString(_);const y=h(Math.pow(_,6));var v=this;let T="";for(;;){const S=V(v,y).g;v=I(v,S.j(y));let C=((v.g.length>0?v.g[0]:v.h)>>>0).toString(_);if(v=S,N(v))return C+T;for(;C.length<6;)C="0"+C;T=C+T}},t.i=function(_){return _<0?0:_<this.g.length?this.g[_]:this.h};function N(_){if(_.h!=0)return!1;for(let y=0;y<_.g.length;y++)if(_.g[y]!=0)return!1;return!0}function D(_){return _.h==-1}t.l=function(_){return _=I(this,_),D(_)?-1:N(_)?0:1};function L(_){const y=_.g.length,v=[];for(let T=0;T<y;T++)v[T]=~_.g[T];return new o(v,~_.h).add(g)}t.abs=function(){return D(this)?L(this):this},t.add=function(_){const y=Math.max(this.g.length,_.g.length),v=[];let T=0;for(let S=0;S<=y;S++){let C=T+(this.i(S)&65535)+(_.i(S)&65535),w=(C>>>16)+(this.i(S)>>>16)+(_.i(S)>>>16);T=w>>>16,C&=65535,w&=65535,v[S]=w<<16|C}return new o(v,v[v.length-1]&-2147483648?-1:0)};function I(_,y){return _.add(L(y))}t.j=function(_){if(N(this)||N(_))return m;if(D(this))return D(_)?L(this).j(L(_)):L(L(this).j(_));if(D(_))return L(this.j(L(_)));if(this.l(R)<0&&_.l(R)<0)return h(this.m()*_.m());const y=this.g.length+_.g.length,v=[];for(var T=0;T<2*y;T++)v[T]=0;for(T=0;T<this.g.length;T++)for(let S=0;S<_.g.length;S++){const C=this.i(T)>>>16,w=this.i(T)&65535,be=_.i(S)>>>16,sn=_.i(S)&65535;v[2*T+2*S]+=w*sn,E(v,2*T+2*S),v[2*T+2*S+1]+=C*sn,E(v,2*T+2*S+1),v[2*T+2*S+1]+=w*be,E(v,2*T+2*S+1),v[2*T+2*S+2]+=C*be,E(v,2*T+2*S+2)}for(_=0;_<y;_++)v[_]=v[2*_+1]<<16|v[2*_];for(_=y;_<2*y;_++)v[_]=0;return new o(v,0)};function E(_,y){for(;(_[y]&65535)!=_[y];)_[y+1]+=_[y]>>>16,_[y]&=65535,y++}function A(_,y){this.g=_,this.h=y}function V(_,y){if(N(y))throw Error("division by zero");if(N(_))return new A(m,m);if(D(_))return y=V(L(_),y),new A(L(y.g),L(y.h));if(D(y))return y=V(_,L(y)),new A(L(y.g),y.h);if(_.g.length>30){if(D(_)||D(y))throw Error("slowDivide_ only works with positive integers.");for(var v=g,T=y;T.l(_)<=0;)v=b(v),T=b(T);var S=U(v,1),C=U(T,1);for(T=U(T,2),v=U(v,2);!N(T);){var w=C.add(T);w.l(_)<=0&&(S=S.add(v),C=w),T=U(T,1),v=U(v,1)}return y=I(_,S.j(y)),new A(S,y)}for(S=m;_.l(y)>=0;){for(v=Math.max(1,Math.floor(_.m()/y.m())),T=Math.ceil(Math.log(v)/Math.LN2),T=T<=48?1:Math.pow(2,T-48),C=h(v),w=C.j(y);D(w)||w.l(_)>0;)v-=T,C=h(v),w=C.j(y);N(C)&&(C=g),S=S.add(C),_=I(_,w)}return new A(S,_)}t.B=function(_){return V(this,_).h},t.and=function(_){const y=Math.max(this.g.length,_.g.length),v=[];for(let T=0;T<y;T++)v[T]=this.i(T)&_.i(T);return new o(v,this.h&_.h)},t.or=function(_){const y=Math.max(this.g.length,_.g.length),v=[];for(let T=0;T<y;T++)v[T]=this.i(T)|_.i(T);return new o(v,this.h|_.h)},t.xor=function(_){const y=Math.max(this.g.length,_.g.length),v=[];for(let T=0;T<y;T++)v[T]=this.i(T)^_.i(T);return new o(v,this.h^_.h)};function b(_){const y=_.g.length+1,v=[];for(let T=0;T<y;T++)v[T]=_.i(T)<<1|_.i(T-1)>>>31;return new o(v,_.h)}function U(_,y){const v=y>>5;y%=32;const T=_.g.length-v,S=[];for(let C=0;C<T;C++)S[C]=y>0?_.i(C+v)>>>y|_.i(C+v+1)<<32-y:_.i(C+v);return new o(S,_.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,wv=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=d,tr=o}).apply(typeof Lm<"u"?Lm:typeof self<"u"?self:typeof window<"u"?window:{});var ua=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Tv,ks,Iv,Pa,mh,Sv,Av,Rv;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ua=="object"&&ua];for(var c=0;c<a.length;++c){var f=a[c];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var f=r;a=a.split(".");for(var p=0;p<a.length-1;p++){var P=a[p];if(!(P in f))break e;f=f[P]}a=a[a.length-1],p=f[a],c=c(p),c!=p&&c!=null&&e(f,a,{configurable:!0,writable:!0,value:c})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(c){var f=[],p;for(p in c)Object.prototype.hasOwnProperty.call(c,p)&&f.push([p,c[p]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function l(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function u(a,c,f){return a.call.apply(a.bind,arguments)}function h(a,c,f){return h=u,h.apply(null,arguments)}function d(a,c){var f=Array.prototype.slice.call(arguments,1);return function(){var p=f.slice();return p.push.apply(p,arguments),a.apply(this,p)}}function m(a,c){function f(){}f.prototype=c.prototype,a.Z=c.prototype,a.prototype=new f,a.prototype.constructor=a,a.Ob=function(p,P,k){for(var F=Array(arguments.length-2),J=2;J<arguments.length;J++)F[J-2]=arguments[J];return c.prototype[P].apply(p,F)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function R(a){const c=a.length;if(c>0){const f=Array(c);for(let p=0;p<c;p++)f[p]=a[p];return f}return[]}function N(a,c){for(let p=1;p<arguments.length;p++){const P=arguments[p];var f=typeof P;if(f=f!="object"?f:P?Array.isArray(P)?"array":f:"null",f=="array"||f=="object"&&typeof P.length=="number"){f=a.length||0;const k=P.length||0;a.length=f+k;for(let F=0;F<k;F++)a[f+F]=P[F]}else a.push(P)}}class D{constructor(c,f){this.i=c,this.j=f,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function L(a){o.setTimeout(()=>{throw a},0)}function I(){var a=_;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class E{constructor(){this.h=this.g=null}add(c,f){const p=A.get();p.set(c,f),this.h?this.h.next=p:this.g=p,this.h=p}}var A=new D(()=>new V,a=>a.reset());class V{constructor(){this.next=this.g=this.h=null}set(c,f){this.h=c,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let b,U=!1,_=new E,y=()=>{const a=Promise.resolve(void 0);b=()=>{a.then(v)}};function v(){for(var a;a=I();){try{a.h.call(a.g)}catch(f){L(f)}var c=A;c.j(a),c.h<100&&(c.h++,a.next=c.g,c.g=a)}U=!1}function T(){this.u=this.u,this.C=this.C}T.prototype.u=!1,T.prototype.dispose=function(){this.u||(this.u=!0,this.N())},T.prototype[Symbol.dispose]=function(){this.dispose()},T.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function S(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}S.prototype.h=function(){this.defaultPrevented=!0};var C=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};o.addEventListener("test",f,c),o.removeEventListener("test",f,c)}catch{}return a}();function w(a){return/^[\s\xa0]*$/.test(a)}function be(a,c){S.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,c)}m(be,S),be.prototype.init=function(a,c){const f=this.type=a.type,p=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget,c||(f=="mouseover"?c=a.fromElement:f=="mouseout"&&(c=a.toElement)),this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&be.Z.h.call(this)},be.prototype.h=function(){be.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var sn="closure_listenable_"+(Math.random()*1e6|0),Zi=0;function es(a,c,f,p,P){this.listener=a,this.proxy=null,this.src=c,this.type=f,this.capture=!!p,this.ha=P,this.key=++Zi,this.da=this.fa=!1}function j(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function G(a,c,f){for(const p in a)c.call(f,a[p],p,a)}function Y(a,c){for(const f in a)c.call(void 0,a[f],f,a)}function pe(a){const c={};for(const f in a)c[f]=a[f];return c}const Te="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function yr(a,c){let f,p;for(let P=1;P<arguments.length;P++){p=arguments[P];for(f in p)a[f]=p[f];for(let k=0;k<Te.length;k++)f=Te[k],Object.prototype.hasOwnProperty.call(p,f)&&(a[f]=p[f])}}function Tt(a){this.src=a,this.g={},this.h=0}Tt.prototype.add=function(a,c,f,p,P){const k=a.toString();a=this.g[k],a||(a=this.g[k]=[],this.h++);const F=Nt(a,c,p,P);return F>-1?(c=a[F],f||(c.fa=!1)):(c=new es(c,this.src,k,!!p,P),c.fa=f,a.push(c)),c};function _r(a,c){const f=c.type;if(f in a.g){var p=a.g[f],P=Array.prototype.indexOf.call(p,c,void 0),k;(k=P>=0)&&Array.prototype.splice.call(p,P,1),k&&(j(c),a.g[f].length==0&&(delete a.g[f],a.h--))}}function Nt(a,c,f,p){for(let P=0;P<a.length;++P){const k=a[P];if(!k.da&&k.listener==c&&k.capture==!!f&&k.ha==p)return P}return-1}var Sn="closure_lm_"+(Math.random()*1e6|0),hu={};function yd(a,c,f,p,P){if(Array.isArray(c)){for(let k=0;k<c.length;k++)yd(a,c[k],f,p,P);return null}return f=Ed(f),a&&a[sn]?a.J(c,f,l(p)?!!p.capture:!1,P):kw(a,c,f,!1,p,P)}function kw(a,c,f,p,P,k){if(!c)throw Error("Invalid event type");const F=l(P)?!!P.capture:!!P;let J=du(a);if(J||(a[Sn]=J=new Tt(a)),f=J.add(c,f,p,F,k),f.proxy)return f;if(p=Nw(),f.proxy=p,p.src=a,p.listener=f,a.addEventListener)C||(P=F),P===void 0&&(P=!1),a.addEventListener(c.toString(),p,P);else if(a.attachEvent)a.attachEvent(vd(c.toString()),p);else if(a.addListener&&a.removeListener)a.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return f}function Nw(){function a(f){return c.call(a.src,a.listener,f)}const c=Dw;return a}function _d(a,c,f,p,P){if(Array.isArray(c))for(var k=0;k<c.length;k++)_d(a,c[k],f,p,P);else p=l(p)?!!p.capture:!!p,f=Ed(f),a&&a[sn]?(a=a.i,k=String(c).toString(),k in a.g&&(c=a.g[k],f=Nt(c,f,p,P),f>-1&&(j(c[f]),Array.prototype.splice.call(c,f,1),c.length==0&&(delete a.g[k],a.h--)))):a&&(a=du(a))&&(c=a.g[c.toString()],a=-1,c&&(a=Nt(c,f,p,P)),(f=a>-1?c[a]:null)&&fu(f))}function fu(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[sn])_r(c.i,a);else{var f=a.type,p=a.proxy;c.removeEventListener?c.removeEventListener(f,p,a.capture):c.detachEvent?c.detachEvent(vd(f),p):c.addListener&&c.removeListener&&c.removeListener(p),(f=du(c))?(_r(f,a),f.h==0&&(f.src=null,c[Sn]=null)):j(a)}}}function vd(a){return a in hu?hu[a]:hu[a]="on"+a}function Dw(a,c){if(a.da)a=!0;else{c=new be(c,this);const f=a.listener,p=a.ha||a.src;a.fa&&fu(a),a=f.call(p,c)}return a}function du(a){return a=a[Sn],a instanceof Tt?a:null}var pu="__closure_events_fn_"+(Math.random()*1e9>>>0);function Ed(a){return typeof a=="function"?a:(a[pu]||(a[pu]=function(c){return a.handleEvent(c)}),a[pu])}function We(){T.call(this),this.i=new Tt(this),this.M=this,this.G=null}m(We,T),We.prototype[sn]=!0,We.prototype.removeEventListener=function(a,c,f,p){_d(this,a,c,f,p)};function et(a,c){var f,p=a.G;if(p)for(f=[];p;p=p.G)f.push(p);if(a=a.M,p=c.type||c,typeof c=="string")c=new S(c,a);else if(c instanceof S)c.target=c.target||a;else{var P=c;c=new S(p,a),yr(c,P)}P=!0;let k,F;if(f)for(F=f.length-1;F>=0;F--)k=c.g=f[F],P=xo(k,p,!0,c)&&P;if(k=c.g=a,P=xo(k,p,!0,c)&&P,P=xo(k,p,!1,c)&&P,f)for(F=0;F<f.length;F++)k=c.g=f[F],P=xo(k,p,!1,c)&&P}We.prototype.N=function(){if(We.Z.N.call(this),this.i){var a=this.i;for(const c in a.g){const f=a.g[c];for(let p=0;p<f.length;p++)j(f[p]);delete a.g[c],a.h--}}this.G=null},We.prototype.J=function(a,c,f,p){return this.i.add(String(a),c,!1,f,p)},We.prototype.K=function(a,c,f,p){return this.i.add(String(a),c,!0,f,p)};function xo(a,c,f,p){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();let P=!0;for(let k=0;k<c.length;++k){const F=c[k];if(F&&!F.da&&F.capture==f){const J=F.listener,Pe=F.ha||F.src;F.fa&&_r(a.i,F),P=J.call(Pe,p)!==!1&&P}}return P&&!p.defaultPrevented}function Vw(a,c){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=h(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:o.setTimeout(a,c||0)}function wd(a){a.g=Vw(()=>{a.g=null,a.i&&(a.i=!1,wd(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class Ow extends T{constructor(c,f){super(),this.m=c,this.l=f,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:wd(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ts(a){T.call(this),this.h=a,this.g={}}m(ts,T);var Td=[];function Id(a){G(a.g,function(c,f){this.g.hasOwnProperty(f)&&fu(c)},a),a.g={}}ts.prototype.N=function(){ts.Z.N.call(this),Id(this)},ts.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var mu=o.JSON.stringify,xw=o.JSON.parse,Lw=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Sd(){}function Ad(){}var ns={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function gu(){S.call(this,"d")}m(gu,S);function yu(){S.call(this,"c")}m(yu,S);var vr={},Rd=null;function Lo(){return Rd=Rd||new We}vr.Ia="serverreachability";function Cd(a){S.call(this,vr.Ia,a)}m(Cd,S);function rs(a){const c=Lo();et(c,new Cd(c))}vr.STAT_EVENT="statevent";function Pd(a,c){S.call(this,vr.STAT_EVENT,a),this.stat=c}m(Pd,S);function tt(a){const c=Lo();et(c,new Pd(c,a))}vr.Ja="timingevent";function kd(a,c){S.call(this,vr.Ja,a),this.size=c}m(kd,S);function is(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},c)}function ss(){this.g=!0}ss.prototype.ua=function(){this.g=!1};function Mw(a,c,f,p,P,k){a.info(function(){if(a.g)if(k){var F="",J=k.split("&");for(let ae=0;ae<J.length;ae++){var Pe=J[ae].split("=");if(Pe.length>1){const Oe=Pe[0];Pe=Pe[1];const jt=Oe.split("_");F=jt.length>=2&&jt[1]=="type"?F+(Oe+"="+Pe+"&"):F+(Oe+"=redacted&")}}}else F=null;else F=k;return"XMLHTTP REQ ("+p+") [attempt "+P+"]: "+c+`
`+f+`
`+F})}function Fw(a,c,f,p,P,k,F){a.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+P+"]: "+c+`
`+f+`
`+k+" "+F})}function Kr(a,c,f,p){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+Uw(a,f)+(p?" "+p:"")})}function bw(a,c){a.info(function(){return"TIMEOUT: "+c})}ss.prototype.info=function(){};function Uw(a,c){if(!a.g)return c;if(!c)return null;try{const k=JSON.parse(c);if(k){for(a=0;a<k.length;a++)if(Array.isArray(k[a])){var f=k[a];if(!(f.length<2)){var p=f[1];if(Array.isArray(p)&&!(p.length<1)){var P=p[0];if(P!="noop"&&P!="stop"&&P!="close")for(let F=1;F<p.length;F++)p[F]=""}}}}return mu(k)}catch{return c}}var Mo={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Nd={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Dd;function _u(){}m(_u,Sd),_u.prototype.g=function(){return new XMLHttpRequest},Dd=new _u;function os(a){return encodeURIComponent(String(a))}function jw(a){var c=1;a=a.split(":");const f=[];for(;c>0&&a.length;)f.push(a.shift()),c--;return a.length&&f.push(a.join(":")),f}function An(a,c,f,p){this.j=a,this.i=c,this.l=f,this.S=p||1,this.V=new ts(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Vd}function Vd(){this.i=null,this.g="",this.h=!1}var Od={},vu={};function Eu(a,c,f){a.M=1,a.A=bo(Ut(c)),a.u=f,a.R=!0,xd(a,null)}function xd(a,c){a.F=Date.now(),Fo(a),a.B=Ut(a.A);var f=a.B,p=a.S;Array.isArray(p)||(p=[String(p)]),Gd(f.i,"t",p),a.C=0,f=a.j.L,a.h=new Vd,a.g=hp(a.j,f?c:null,!a.u),a.P>0&&(a.O=new Ow(h(a.Y,a,a.g),a.P)),c=a.V,f=a.g,p=a.ba;var P="readystatechange";Array.isArray(P)||(P&&(Td[0]=P.toString()),P=Td);for(let k=0;k<P.length;k++){const F=yd(f,P[k],p||c.handleEvent,!1,c.h||c);if(!F)break;c.g[F.key]=F}c=a.J?pe(a.J):{},a.u?(a.v||(a.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,c)):(a.v="GET",a.g.ea(a.B,a.v,null,c)),rs(),Mw(a.i,a.v,a.B,a.l,a.S,a.u)}An.prototype.ba=function(a){a=a.target;const c=this.O;c&&Pn(a)==3?c.j():this.Y(a)},An.prototype.Y=function(a){try{if(a==this.g)e:{const J=Pn(this.g),Pe=this.g.ya(),ae=this.g.ca();if(!(J<3)&&(J!=3||this.g&&(this.h.h||this.g.la()||ep(this.g)))){this.K||J!=4||Pe==7||(Pe==8||ae<=0?rs(3):rs(2)),wu(this);var c=this.g.ca();this.X=c;var f=zw(this);if(this.o=c==200,Fw(this.i,this.v,this.B,this.l,this.S,J,c),this.o){if(this.U&&!this.L){t:{if(this.g){var p,P=this.g;if((p=P.g?P.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(p)){var k=p;break t}}k=null}if(a=k)Kr(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Tu(this,a);else{this.o=!1,this.m=3,tt(12),Er(this),as(this);break e}}if(this.R){a=!0;let Oe;for(;!this.K&&this.C<f.length;)if(Oe=Bw(this,f),Oe==vu){J==4&&(this.m=4,tt(14),a=!1),Kr(this.i,this.l,null,"[Incomplete Response]");break}else if(Oe==Od){this.m=4,tt(15),Kr(this.i,this.l,f,"[Invalid Chunk]"),a=!1;break}else Kr(this.i,this.l,Oe,null),Tu(this,Oe);if(Ld(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),J!=4||f.length!=0||this.h.h||(this.m=1,tt(16),a=!1),this.o=this.o&&a,!a)Kr(this.i,this.l,f,"[Invalid Chunked Response]"),Er(this),as(this);else if(f.length>0&&!this.W){this.W=!0;var F=this.j;F.g==this&&F.aa&&!F.P&&(F.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),Nu(F),F.P=!0,tt(11))}}else Kr(this.i,this.l,f,null),Tu(this,f);J==4&&Er(this),this.o&&!this.K&&(J==4?ap(this.j,this):(this.o=!1,Fo(this)))}else nT(this.g),c==400&&f.indexOf("Unknown SID")>0?(this.m=3,tt(12)):(this.m=0,tt(13)),Er(this),as(this)}}}catch{}finally{}};function zw(a){if(!Ld(a))return a.g.la();const c=ep(a.g);if(c==="")return"";let f="";const p=c.length,P=Pn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Er(a),as(a),"";a.h.i=new o.TextDecoder}for(let k=0;k<p;k++)a.h.h=!0,f+=a.h.i.decode(c[k],{stream:!(P&&k==p-1)});return c.length=0,a.h.g+=f,a.C=0,a.h.g}function Ld(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function Bw(a,c){var f=a.C,p=c.indexOf(`
`,f);return p==-1?vu:(f=Number(c.substring(f,p)),isNaN(f)?Od:(p+=1,p+f>c.length?vu:(c=c.slice(p,p+f),a.C=p+f,c)))}An.prototype.cancel=function(){this.K=!0,Er(this)};function Fo(a){a.T=Date.now()+a.H,Md(a,a.H)}function Md(a,c){if(a.D!=null)throw Error("WatchDog timer not null");a.D=is(h(a.aa,a),c)}function wu(a){a.D&&(o.clearTimeout(a.D),a.D=null)}An.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(bw(this.i,this.B),this.M!=2&&(rs(),tt(17)),Er(this),this.m=2,as(this)):Md(this,this.T-a)};function as(a){a.j.I==0||a.K||ap(a.j,a)}function Er(a){wu(a);var c=a.O;c&&typeof c.dispose=="function"&&c.dispose(),a.O=null,Id(a.V),a.g&&(c=a.g,a.g=null,c.abort(),c.dispose())}function Tu(a,c){try{var f=a.j;if(f.I!=0&&(f.g==a||Iu(f.h,a))){if(!a.L&&Iu(f.h,a)&&f.I==3){try{var p=f.Ba.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var P=p;if(P[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<a.F)$o(f),zo(f);else break e;ku(f),tt(18)}}else f.xa=P[1],0<f.xa-f.K&&P[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=is(h(f.Va,f),6e3));Ud(f.h)<=1&&f.ta&&(f.ta=void 0)}else Tr(f,11)}else if((a.L||f.g==a)&&$o(f),!w(c))for(P=f.Ba.g.parse(c),c=0;c<P.length;c++){let ae=P[c];const Oe=ae[0];if(!(Oe<=f.K))if(f.K=Oe,ae=ae[1],f.I==2)if(ae[0]=="c"){f.M=ae[1],f.ba=ae[2];const jt=ae[3];jt!=null&&(f.ka=jt,f.j.info("VER="+f.ka));const Ir=ae[4];Ir!=null&&(f.za=Ir,f.j.info("SVER="+f.za));const kn=ae[5];kn!=null&&typeof kn=="number"&&kn>0&&(p=1.5*kn,f.O=p,f.j.info("backChannelRequestTimeoutMs_="+p)),p=f;const Nn=a.g;if(Nn){const Wo=Nn.g?Nn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Wo){var k=p.h;k.g||Wo.indexOf("spdy")==-1&&Wo.indexOf("quic")==-1&&Wo.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(Su(k,k.h),k.h=null))}if(p.G){const Du=Nn.g?Nn.g.getResponseHeader("X-HTTP-Session-Id"):null;Du&&(p.wa=Du,ue(p.J,p.G,Du))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-a.F,f.j.info("Handshake RTT: "+f.T+"ms")),p=f;var F=a;if(p.na=cp(p,p.L?p.ba:null,p.W),F.L){jd(p.h,F);var J=F,Pe=p.O;Pe&&(J.H=Pe),J.D&&(wu(J),Fo(J)),p.g=F}else sp(p);f.i.length>0&&Bo(f)}else ae[0]!="stop"&&ae[0]!="close"||Tr(f,7);else f.I==3&&(ae[0]=="stop"||ae[0]=="close"?ae[0]=="stop"?Tr(f,7):Pu(f):ae[0]!="noop"&&f.l&&f.l.qa(ae),f.A=0)}}rs(4)}catch{}}var $w=class{constructor(a,c){this.g=a,this.map=c}};function Fd(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function bd(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Ud(a){return a.h?1:a.g?a.g.size:0}function Iu(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function Su(a,c){a.g?a.g.add(c):a.h=c}function jd(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}Fd.prototype.cancel=function(){if(this.i=zd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function zd(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const f of a.g.values())c=c.concat(f.G);return c}return R(a.i)}var Bd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Hw(a,c){if(a){a=a.split("&");for(let f=0;f<a.length;f++){const p=a[f].indexOf("=");let P,k=null;p>=0?(P=a[f].substring(0,p),k=a[f].substring(p+1)):P=a[f],c(P,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function Rn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;a instanceof Rn?(this.l=a.l,ls(this,a.j),this.o=a.o,this.g=a.g,us(this,a.u),this.h=a.h,Au(this,Kd(a.i)),this.m=a.m):a&&(c=String(a).match(Bd))?(this.l=!1,ls(this,c[1]||"",!0),this.o=cs(c[2]||""),this.g=cs(c[3]||"",!0),us(this,c[4]),this.h=cs(c[5]||"",!0),Au(this,c[6]||"",!0),this.m=cs(c[7]||"")):(this.l=!1,this.i=new fs(null,this.l))}Rn.prototype.toString=function(){const a=[];var c=this.j;c&&a.push(hs(c,$d,!0),":");var f=this.g;return(f||c=="file")&&(a.push("//"),(c=this.o)&&a.push(hs(c,$d,!0),"@"),a.push(os(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&a.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(hs(f,f.charAt(0)=="/"?Gw:qw,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",hs(f,Qw)),a.join("")},Rn.prototype.resolve=function(a){const c=Ut(this);let f=!!a.j;f?ls(c,a.j):f=!!a.o,f?c.o=a.o:f=!!a.g,f?c.g=a.g:f=a.u!=null;var p=a.h;if(f)us(c,a.u);else if(f=!!a.h){if(p.charAt(0)!="/")if(this.g&&!this.h)p="/"+p;else{var P=c.h.lastIndexOf("/");P!=-1&&(p=c.h.slice(0,P+1)+p)}if(P=p,P==".."||P==".")p="";else if(P.indexOf("./")!=-1||P.indexOf("/.")!=-1){p=P.lastIndexOf("/",0)==0,P=P.split("/");const k=[];for(let F=0;F<P.length;){const J=P[F++];J=="."?p&&F==P.length&&k.push(""):J==".."?((k.length>1||k.length==1&&k[0]!="")&&k.pop(),p&&F==P.length&&k.push("")):(k.push(J),p=!0)}p=k.join("/")}else p=P}return f?c.h=p:f=a.i.toString()!=="",f?Au(c,Kd(a.i)):f=!!a.m,f&&(c.m=a.m),c};function Ut(a){return new Rn(a)}function ls(a,c,f){a.j=f?cs(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function us(a,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);a.u=c}else a.u=null}function Au(a,c,f){c instanceof fs?(a.i=c,Xw(a.i,a.l)):(f||(c=hs(c,Kw)),a.i=new fs(c,a.l))}function ue(a,c,f){a.i.set(c,f)}function bo(a){return ue(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function cs(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function hs(a,c,f){return typeof a=="string"?(a=encodeURI(a).replace(c,Ww),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Ww(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var $d=/[#\/\?@]/g,qw=/[#\?:]/g,Gw=/[#\?]/g,Kw=/[#\?@]/g,Qw=/#/g;function fs(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function wr(a){a.g||(a.g=new Map,a.h=0,a.i&&Hw(a.i,function(c,f){a.add(decodeURIComponent(c.replace(/\+/g," ")),f)}))}t=fs.prototype,t.add=function(a,c){wr(this),this.i=null,a=Qr(this,a);let f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(c),this.h+=1,this};function Hd(a,c){wr(a),c=Qr(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function Wd(a,c){return wr(a),c=Qr(a,c),a.g.has(c)}t.forEach=function(a,c){wr(this),this.g.forEach(function(f,p){f.forEach(function(P){a.call(c,P,p,this)},this)},this)};function qd(a,c){wr(a);let f=[];if(typeof c=="string")Wd(a,c)&&(f=f.concat(a.g.get(Qr(a,c))));else for(a=Array.from(a.g.values()),c=0;c<a.length;c++)f=f.concat(a[c]);return f}t.set=function(a,c){return wr(this),this.i=null,a=Qr(this,a),Wd(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=qd(this,a),a.length>0?String(a[0]):c):c};function Gd(a,c,f){Hd(a,c),f.length>0&&(a.i=null,a.g.set(Qr(a,c),R(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(let p=0;p<c.length;p++){var f=c[p];const P=os(f);f=qd(this,f);for(let k=0;k<f.length;k++){let F=P;f[k]!==""&&(F+="="+os(f[k])),a.push(F)}}return this.i=a.join("&")};function Kd(a){const c=new fs;return c.i=a.i,a.g&&(c.g=new Map(a.g),c.h=a.h),c}function Qr(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function Xw(a,c){c&&!a.j&&(wr(a),a.i=null,a.g.forEach(function(f,p){const P=p.toLowerCase();p!=P&&(Hd(this,p),Gd(this,P,f))},a)),a.j=c}function Yw(a,c){const f=new ss;if(o.Image){const p=new Image;p.onload=d(Cn,f,"TestLoadImage: loaded",!0,c,p),p.onerror=d(Cn,f,"TestLoadImage: error",!1,c,p),p.onabort=d(Cn,f,"TestLoadImage: abort",!1,c,p),p.ontimeout=d(Cn,f,"TestLoadImage: timeout",!1,c,p),o.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=a}else c(!1)}function Jw(a,c){const f=new ss,p=new AbortController,P=setTimeout(()=>{p.abort(),Cn(f,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:p.signal}).then(k=>{clearTimeout(P),k.ok?Cn(f,"TestPingServer: ok",!0,c):Cn(f,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(P),Cn(f,"TestPingServer: error",!1,c)})}function Cn(a,c,f,p,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),p(f)}catch{}}function Zw(){this.g=new Lw}function Ru(a){this.i=a.Sb||null,this.h=a.ab||!1}m(Ru,Sd),Ru.prototype.g=function(){return new Uo(this.i,this.h)};function Uo(a,c){We.call(this),this.H=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(Uo,We),t=Uo.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=c,this.readyState=1,ps(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(c.body=a),(this.H||o).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ds(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ps(this)),this.g&&(this.readyState=3,ps(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Qd(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Qd(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?ds(this):ps(this),this.readyState==3&&Qd(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,ds(this))},t.Na=function(a){this.g&&(this.response=a,ds(this))},t.ga=function(){this.g&&ds(this)};function ds(a){a.readyState=4,a.l=null,a.j=null,a.B=null,ps(a)}t.setRequestHeader=function(a,c){this.A.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var f=c.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=c.next();return a.join(`\r
`)};function ps(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Uo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Xd(a){let c="";return G(a,function(f,p){c+=p,c+=":",c+=f,c+=`\r
`}),c}function Cu(a,c,f){e:{for(p in f){var p=!1;break e}p=!0}p||(f=Xd(f),typeof a=="string"?f!=null&&os(f):ue(a,c,f))}function Ee(a){We.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(Ee,We);var eT=/^https?$/i,tT=["POST","PUT"];t=Ee.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,c,f,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Dd.g(),this.g.onreadystatechange=g(h(this.Ca,this));try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(k){Yd(this,k);return}if(a=f||"",f=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var P in p)f.set(P,p[P]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const k of p.keys())f.set(k,p.get(k));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(f.keys()).find(k=>k.toLowerCase()=="content-type"),P=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(tT,c,void 0)>=0)||p||P||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,F]of f)this.g.setRequestHeader(k,F);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(k){Yd(this,k)}};function Yd(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.o=5,Jd(a),jo(a)}function Jd(a){a.A||(a.A=!0,et(a,"complete"),et(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,et(this,"complete"),et(this,"abort"),jo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),jo(this,!0)),Ee.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Zd(this):this.Xa())},t.Xa=function(){Zd(this)};function Zd(a){if(a.h&&typeof s<"u"){if(a.v&&Pn(a)==4)setTimeout(a.Ca.bind(a),0);else if(et(a,"readystatechange"),Pn(a)==4){a.h=!1;try{const k=a.ca();e:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var f;if(!(f=c)){var p;if(p=k===0){let F=String(a.D).match(Bd)[1]||null;!F&&o.self&&o.self.location&&(F=o.self.location.protocol.slice(0,-1)),p=!eT.test(F?F.toLowerCase():"")}f=p}if(f)et(a,"complete"),et(a,"success");else{a.o=6;try{var P=Pn(a)>2?a.g.statusText:""}catch{P=""}a.l=P+" ["+a.ca()+"]",Jd(a)}}finally{jo(a)}}}}function jo(a,c){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const f=a.g;a.g=null,c||et(a,"ready");try{f.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Pn(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Pn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),xw(c)}};function ep(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function nT(a){const c={};a=(a.g&&Pn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<a.length;p++){if(w(a[p]))continue;var f=jw(a[p]);const P=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const k=c[P]||[];c[P]=k,k.push(f)}Y(c,function(p){return p.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function ms(a,c,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||c}function tp(a){this.za=0,this.i=[],this.j=new ss,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=ms("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=ms("baseRetryDelayMs",5e3,a),this.Za=ms("retryDelaySeedMs",1e4,a),this.Ta=ms("forwardChannelMaxRetries",2,a),this.va=ms("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Fd(a&&a.concurrentRequestLimit),this.Ba=new Zw,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=tp.prototype,t.ka=8,t.I=1,t.connect=function(a,c,f,p){tt(0),this.W=a,this.H=c||{},f&&p!==void 0&&(this.H.OSID=f,this.H.OAID=p),this.F=this.X,this.J=cp(this,null,this.W),Bo(this)};function Pu(a){if(np(a),a.I==3){var c=a.V++,f=Ut(a.J);if(ue(f,"SID",a.M),ue(f,"RID",c),ue(f,"TYPE","terminate"),gs(a,f),c=new An(a,a.j,c),c.M=2,c.A=bo(Ut(f)),f=!1,o.navigator&&o.navigator.sendBeacon)try{f=o.navigator.sendBeacon(c.A.toString(),"")}catch{}!f&&o.Image&&(new Image().src=c.A,f=!0),f||(c.g=hp(c.j,null),c.g.ea(c.A)),c.F=Date.now(),Fo(c)}up(a)}function zo(a){a.g&&(Nu(a),a.g.cancel(),a.g=null)}function np(a){zo(a),a.v&&(o.clearTimeout(a.v),a.v=null),$o(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Bo(a){if(!bd(a.h)&&!a.m){a.m=!0;var c=a.Ea;b||y(),U||(b(),U=!0),_.add(c,a),a.D=0}}function rT(a,c){return Ud(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=c.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=is(h(a.Ea,a,c),lp(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const P=new An(this,this.j,a);let k=this.o;if(this.U&&(k?(k=pe(k),yr(k,this.U)):k=this.U),this.u!==null||this.R||(P.J=k,k=null),this.S)e:{for(var c=0,f=0;f<this.i.length;f++){t:{var p=this.i[f];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(c+=p,c>4096){c=f;break e}if(c===4096||f===this.i.length-1){c=f+1;break e}}c=1e3}else c=1e3;c=ip(this,P,c),f=Ut(this.J),ue(f,"RID",a),ue(f,"CVER",22),this.G&&ue(f,"X-HTTP-Session-Id",this.G),gs(this,f),k&&(this.R?c="headers="+os(Xd(k))+"&"+c:this.u&&Cu(f,this.u,k)),Su(this.h,P),this.Ra&&ue(f,"TYPE","init"),this.S?(ue(f,"$req",c),ue(f,"SID","null"),P.U=!0,Eu(P,f,null)):Eu(P,f,c),this.I=2}}else this.I==3&&(a?rp(this,a):this.i.length==0||bd(this.h)||rp(this))};function rp(a,c){var f;c?f=c.l:f=a.V++;const p=Ut(a.J);ue(p,"SID",a.M),ue(p,"RID",f),ue(p,"AID",a.K),gs(a,p),a.u&&a.o&&Cu(p,a.u,a.o),f=new An(a,a.j,f,a.D+1),a.u===null&&(f.J=a.o),c&&(a.i=c.G.concat(a.i)),c=ip(a,f,1e3),f.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Su(a.h,f),Eu(f,p,c)}function gs(a,c){a.H&&G(a.H,function(f,p){ue(c,p,f)}),a.l&&G({},function(f,p){ue(c,p,f)})}function ip(a,c,f){f=Math.min(a.i.length,f);const p=a.l?h(a.l.Ka,a.l,a):null;e:{var P=a.i;let J=-1;for(;;){const Pe=["count="+f];J==-1?f>0?(J=P[0].g,Pe.push("ofs="+J)):J=0:Pe.push("ofs="+J);let ae=!0;for(let Oe=0;Oe<f;Oe++){var k=P[Oe].g;const jt=P[Oe].map;if(k-=J,k<0)J=Math.max(0,P[Oe].g-100),ae=!1;else try{k="req"+k+"_"||"";try{var F=jt instanceof Map?jt:Object.entries(jt);for(const[Ir,kn]of F){let Nn=kn;l(kn)&&(Nn=mu(kn)),Pe.push(k+Ir+"="+encodeURIComponent(Nn))}}catch(Ir){throw Pe.push(k+"type="+encodeURIComponent("_badmap")),Ir}}catch{p&&p(jt)}}if(ae){F=Pe.join("&");break e}}F=void 0}return a=a.i.splice(0,f),c.G=a,F}function sp(a){if(!a.g&&!a.v){a.Y=1;var c=a.Da;b||y(),U||(b(),U=!0),_.add(c,a),a.A=0}}function ku(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=is(h(a.Da,a),lp(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,op(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=is(h(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,tt(10),zo(this),op(this))};function Nu(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function op(a){a.g=new An(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var c=Ut(a.na);ue(c,"RID","rpc"),ue(c,"SID",a.M),ue(c,"AID",a.K),ue(c,"CI",a.F?"0":"1"),!a.F&&a.ia&&ue(c,"TO",a.ia),ue(c,"TYPE","xmlhttp"),gs(a,c),a.u&&a.o&&Cu(c,a.u,a.o),a.O&&(a.g.H=a.O);var f=a.g;a=a.ba,f.M=1,f.A=bo(Ut(c)),f.u=null,f.R=!0,xd(f,a)}t.Va=function(){this.C!=null&&(this.C=null,zo(this),ku(this),tt(19))};function $o(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function ap(a,c){var f=null;if(a.g==c){$o(a),Nu(a),a.g=null;var p=2}else if(Iu(a.h,c))f=c.G,jd(a.h,c),p=1;else return;if(a.I!=0){if(c.o)if(p==1){f=c.u?c.u.length:0,c=Date.now()-c.F;var P=a.D;p=Lo(),et(p,new kd(p,f)),Bo(a)}else sp(a);else if(P=c.m,P==3||P==0&&c.X>0||!(p==1&&rT(a,c)||p==2&&ku(a)))switch(f&&f.length>0&&(c=a.h,c.i=c.i.concat(f)),P){case 1:Tr(a,5);break;case 4:Tr(a,10);break;case 3:Tr(a,6);break;default:Tr(a,2)}}}function lp(a,c){let f=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(f*=2),f*c}function Tr(a,c){if(a.j.info("Error code "+c),c==2){var f=h(a.bb,a),p=a.Ua;const P=!p;p=new Rn(p||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||ls(p,"https"),bo(p),P?Yw(p.toString(),f):Jw(p.toString(),f)}else tt(2);a.I=0,a.l&&a.l.pa(c),up(a),np(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),tt(2)):(this.j.info("Failed to ping google.com"),tt(1))};function up(a){if(a.I=0,a.ja=[],a.l){const c=zd(a.h);(c.length!=0||a.i.length!=0)&&(N(a.ja,c),N(a.ja,a.i),a.h.i.length=0,R(a.i),a.i.length=0),a.l.oa()}}function cp(a,c,f){var p=f instanceof Rn?Ut(f):new Rn(f);if(p.g!="")c&&(p.g=c+"."+p.g),us(p,p.u);else{var P=o.location;p=P.protocol,c=c?c+"."+P.hostname:P.hostname,P=+P.port;const k=new Rn(null);p&&ls(k,p),c&&(k.g=c),P&&us(k,P),f&&(k.h=f),p=k}return f=a.G,c=a.wa,f&&c&&ue(p,f,c),ue(p,"VER",a.ka),gs(a,p),p}function hp(a,c,f){if(c&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Aa&&!a.ma?new Ee(new Ru({ab:f})):new Ee(a.ma),c.Fa(a.L),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function fp(){}t=fp.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Ho(){}Ho.prototype.g=function(a,c){return new pt(a,c)};function pt(a,c){We.call(this),this.g=new tp(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(a?a["X-WebChannel-Client-Profile"]=c.sa:a={"X-WebChannel-Client-Profile":c.sa}),this.g.U=a,(a=c&&c.Qb)&&!w(a)&&(this.g.u=a),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!w(c)&&(this.g.G=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new Xr(this)}m(pt,We),pt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},pt.prototype.close=function(){Pu(this.g)},pt.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.v&&(f={},f.__data__=mu(a),a=f);c.i.push(new $w(c.Ya++,a)),c.I==3&&Bo(c)},pt.prototype.N=function(){this.g.l=null,delete this.j,Pu(this.g),delete this.g,pt.Z.N.call(this)};function dp(a){gu.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const f in c){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}m(dp,gu);function pp(){yu.call(this),this.status=1}m(pp,yu);function Xr(a){this.g=a}m(Xr,fp),Xr.prototype.ra=function(){et(this.g,"a")},Xr.prototype.qa=function(a){et(this.g,new dp(a))},Xr.prototype.pa=function(a){et(this.g,new pp)},Xr.prototype.oa=function(){et(this.g,"b")},Ho.prototype.createWebChannel=Ho.prototype.g,pt.prototype.send=pt.prototype.o,pt.prototype.open=pt.prototype.m,pt.prototype.close=pt.prototype.close,Rv=function(){return new Ho},Av=function(){return Lo()},Sv=vr,mh={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Mo.NO_ERROR=0,Mo.TIMEOUT=8,Mo.HTTP_ERROR=6,Pa=Mo,Nd.COMPLETE="complete",Iv=Nd,Ad.EventType=ns,ns.OPEN="a",ns.CLOSE="b",ns.ERROR="c",ns.MESSAGE="d",We.prototype.listen=We.prototype.J,ks=Ad,Ee.prototype.listenOnce=Ee.prototype.K,Ee.prototype.getLastError=Ee.prototype.Ha,Ee.prototype.getLastErrorCode=Ee.prototype.ya,Ee.prototype.getStatus=Ee.prototype.ca,Ee.prototype.getResponseJson=Ee.prototype.La,Ee.prototype.getResponseText=Ee.prototype.la,Ee.prototype.send=Ee.prototype.ea,Ee.prototype.setWithCredentials=Ee.prototype.Fa,Tv=Ee}).apply(typeof ua<"u"?ua:typeof self<"u"?self:typeof window<"u"?window:{});const Mm="@firebase/firestore",Fm="4.9.3";/**
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
 */class Qe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Qe.UNAUTHENTICATED=new Qe(null),Qe.GOOGLE_CREDENTIALS=new Qe("google-credentials-uid"),Qe.FIRST_PARTY=new Qe("first-party-uid"),Qe.MOCK_USER=new Qe("mock-user");/**
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
 */let Ki="12.7.0";/**
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
 */const zr=new Nf("@firebase/firestore");function Jr(){return zr.logLevel}function z(t,...e){if(zr.logLevel<=ee.DEBUG){const n=e.map(Of);zr.debug(`Firestore (${Ki}): ${t}`,...n)}}function _n(t,...e){if(zr.logLevel<=ee.ERROR){const n=e.map(Of);zr.error(`Firestore (${Ki}): ${t}`,...n)}}function Li(t,...e){if(zr.logLevel<=ee.WARN){const n=e.map(Of);zr.warn(`Firestore (${Ki}): ${t}`,...n)}}function Of(t){if(typeof t=="string")return t;try{/**
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
 */function W(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Cv(t,r,n)}function Cv(t,e,n){let r=`FIRESTORE (${Ki}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw _n(r),new Error(r)}function se(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||Cv(e,i,r)}function Q(t,e){return t}/**
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
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends In{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class nr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Pv{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class m1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Qe.UNAUTHENTICATED))}shutdown(){}}class g1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class y1{constructor(e){this.t=e,this.currentUser=Qe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){se(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new nr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new nr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(z("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new nr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(se(typeof r.accessToken=="string",31837,{l:r}),new Pv(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return se(e===null||typeof e=="string",2055,{h:e}),new Qe(e)}}class _1{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Qe.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class v1{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new _1(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Qe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class bm{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class E1{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Wt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){se(this.o===void 0,3512);const r=s=>{s.error!=null&&z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new bm(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(se(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new bm(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function w1(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class xf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=w1(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function te(t,e){return t<e?-1:t>e?1:0}function gh(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return uc(i)===uc(s)?te(i,s):uc(i)?1:-1}return te(t.length,e.length)}const T1=55296,I1=57343;function uc(t){const e=t.charCodeAt(0);return e>=T1&&e<=I1}function Mi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */const Um="__name__";class $t{constructor(e,n,r){n===void 0?n=0:n>e.length&&W(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&W(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return $t.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof $t?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=$t.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return te(e.length,n.length)}static compareSegments(e,n){const r=$t.isNumericId(e),i=$t.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?$t.extractNumericId(e).compare($t.extractNumericId(n)):gh(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return tr.fromString(e.substring(4,e.length-2))}}class he extends $t{construct(e,n,r){return new he(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(x.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new he(n)}static emptyPath(){return new he([])}}const S1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ze extends $t{construct(e,n,r){return new ze(e,n,r)}static isValidIdentifier(e){return S1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ze.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Um}static keyField(){return new ze([Um])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new $(x.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new $(x.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new $(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new $(x.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ze(n)}static emptyPath(){return new ze([])}}/**
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
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(he.fromString(e))}static fromName(e){return new H(he.fromString(e).popFirst(5))}static empty(){return new H(he.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&he.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return he.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new he(e.slice()))}}/**
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
 */function kv(t,e,n){if(!n)throw new $(x.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function A1(t,e,n,r){if(e===!0&&r===!0)throw new $(x.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function jm(t){if(!H.isDocumentKey(t))throw new $(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function zm(t){if(H.isDocumentKey(t))throw new $(x.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Nv(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Lf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":W(12329,{type:typeof t})}function Fi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Lf(t);throw new $(x.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Ce(t,e){const n={typeString:t};return e&&(n.value=e),n}function Ro(t,e){if(!Nv(t))throw new $(x.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new $(x.INVALID_ARGUMENT,n);return!0}/**
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
 */const Bm=-62135596800,$m=1e6;class fe{static now(){return fe.fromMillis(Date.now())}static fromDate(e){return fe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*$m);return new fe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Bm)throw new $(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/$m}_compareTo(e){return this.seconds===e.seconds?te(this.nanoseconds,e.nanoseconds):te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:fe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ro(e,fe._jsonSchema))return new fe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Bm;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}fe._jsonSchemaVersion="firestore/timestamp/1.0",fe._jsonSchema={type:Ce("string",fe._jsonSchemaVersion),seconds:Ce("number"),nanoseconds:Ce("number")};/**
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
 */class K{static fromTimestamp(e){return new K(e)}static min(){return new K(new fe(0,0))}static max(){return new K(new fe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ho=-1;function R1(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=K.fromTimestamp(r===1e9?new fe(n+1,0):new fe(n,r));return new or(i,H.empty(),e)}function C1(t){return new or(t.readTime,t.key,ho)}class or{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new or(K.min(),H.empty(),ho)}static max(){return new or(K.max(),H.empty(),ho)}}function P1(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:te(t.largestBatchId,e.largestBatchId))}/**
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
 */const k1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class N1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Qi(t){if(t.code!==x.FAILED_PRECONDITION||t.message!==k1)throw t;z("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&W(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new O((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof O?n:O.resolve(n)}catch(n){return O.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):O.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):O.reject(n)}static resolve(e){return new O((n,r)=>{n(e)})}static reject(e){return new O((n,r)=>{r(e)})}static waitFor(e){return new O((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=O.resolve(!1);for(const r of e)n=n.next(i=>i?O.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new O((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(d=>{o[h]=d,++l,l===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new O((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function D1(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Xi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Wl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Wl.ce=-1;/**
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
 */const Mf=-1;function ql(t){return t==null}function cl(t){return t===0&&1/t==-1/0}function V1(t){return typeof t=="number"&&Number.isInteger(t)&&!cl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const Dv="";function O1(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Hm(e)),e=x1(t.get(n),e);return Hm(e)}function x1(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case Dv:n+="";break;default:n+=s}}return n}function Hm(t){return t+Dv+""}/**
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
 */function Wm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function mr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Vv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class ve{constructor(e,n){this.comparator=e,this.root=n||je.EMPTY}insert(e,n){return new ve(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,je.BLACK,null,null))}remove(e){return new ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,je.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ca(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ca(this.root,e,this.comparator,!1)}getReverseIterator(){return new ca(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ca(this.root,e,this.comparator,!0)}}class ca{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class je{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??je.RED,this.left=i??je.EMPTY,this.right=s??je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new je(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return je.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw W(43730,{key:this.key,value:this.value});if(this.right.isRed())throw W(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw W(27949);return e+(this.isRed()?0:1)}}je.EMPTY=null,je.RED=!0,je.BLACK=!1;je.EMPTY=new class{constructor(){this.size=0}get key(){throw W(57766)}get value(){throw W(16141)}get color(){throw W(16727)}get left(){throw W(29726)}get right(){throw W(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new je(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ve{constructor(e){this.comparator=e,this.data=new ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new qm(this.data.getIterator())}getIteratorFrom(e){return new qm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ve)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ve(this.comparator);return n.data=e,n}}class qm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class yt{constructor(e){this.fields=e,e.sort(ze.comparator)}static empty(){return new yt([])}unionWith(e){let n=new Ve(ze.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new yt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Mi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Ov extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class He{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Ov("Invalid base64 string: "+s):s}}(e);return new He(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new He(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}He.EMPTY_BYTE_STRING=new He("");const L1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ar(t){if(se(!!t,39018),typeof t=="string"){let e=0;const n=L1.exec(t);if(se(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ie(t.seconds),nanos:Ie(t.nanos)}}function Ie(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function lr(t){return typeof t=="string"?He.fromBase64String(t):He.fromUint8Array(t)}/**
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
 */const xv="server_timestamp",Lv="__type__",Mv="__previous_value__",Fv="__local_write_time__";function Ff(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Lv])==null?void 0:r.stringValue)===xv}function Gl(t){const e=t.mapValue.fields[Mv];return Ff(e)?Gl(e):e}function fo(t){const e=ar(t.mapValue.fields[Fv].timestampValue);return new fe(e.seconds,e.nanos)}/**
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
 */class M1{constructor(e,n,r,i,s,o,l,u,h,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=d}}const hl="(default)";class po{constructor(e,n){this.projectId=e,this.database=n||hl}static empty(){return new po("","")}get isDefaultDatabase(){return this.database===hl}isEqual(e){return e instanceof po&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const bv="__type__",F1="__max__",ha={mapValue:{}},Uv="__vector__",fl="value";function ur(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ff(t)?4:U1(t)?9007199254740991:b1(t)?10:11:W(28295,{value:t})}function nn(t,e){if(t===e)return!0;const n=ur(t);if(n!==ur(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return fo(t).isEqual(fo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=ar(i.timestampValue),l=ar(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return lr(i.bytesValue).isEqual(lr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ie(i.geoPointValue.latitude)===Ie(s.geoPointValue.latitude)&&Ie(i.geoPointValue.longitude)===Ie(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ie(i.integerValue)===Ie(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ie(i.doubleValue),l=Ie(s.doubleValue);return o===l?cl(o)===cl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Mi(t.arrayValue.values||[],e.arrayValue.values||[],nn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Wm(o)!==Wm(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!nn(o[u],l[u])))return!1;return!0}(t,e);default:return W(52216,{left:t})}}function mo(t,e){return(t.values||[]).find(n=>nn(n,e))!==void 0}function bi(t,e){if(t===e)return 0;const n=ur(t),r=ur(e);if(n!==r)return te(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return te(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Ie(s.integerValue||s.doubleValue),u=Ie(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Gm(t.timestampValue,e.timestampValue);case 4:return Gm(fo(t),fo(e));case 5:return gh(t.stringValue,e.stringValue);case 6:return function(s,o){const l=lr(s),u=lr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const d=te(l[h],u[h]);if(d!==0)return d}return te(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=te(Ie(s.latitude),Ie(o.latitude));return l!==0?l:te(Ie(s.longitude),Ie(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Km(t.arrayValue,e.arrayValue);case 10:return function(s,o){var g,R,N,D;const l=s.fields||{},u=o.fields||{},h=(g=l[fl])==null?void 0:g.arrayValue,d=(R=u[fl])==null?void 0:R.arrayValue,m=te(((N=h==null?void 0:h.values)==null?void 0:N.length)||0,((D=d==null?void 0:d.values)==null?void 0:D.length)||0);return m!==0?m:Km(h,d)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===ha.mapValue&&o===ha.mapValue)return 0;if(s===ha.mapValue)return 1;if(o===ha.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=o.fields||{},d=Object.keys(h);u.sort(),d.sort();for(let m=0;m<u.length&&m<d.length;++m){const g=gh(u[m],d[m]);if(g!==0)return g;const R=bi(l[u[m]],h[d[m]]);if(R!==0)return R}return te(u.length,d.length)}(t.mapValue,e.mapValue);default:throw W(23264,{he:n})}}function Gm(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return te(t,e);const n=ar(t),r=ar(e),i=te(n.seconds,r.seconds);return i!==0?i:te(n.nanos,r.nanos)}function Km(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=bi(n[i],r[i]);if(s)return s}return te(n.length,r.length)}function Ui(t){return yh(t)}function yh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ar(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return lr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return H.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=yh(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${yh(n.fields[o])}`;return i+"}"}(t.mapValue):W(61005,{value:t})}function ka(t){switch(ur(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Gl(t);return e?16+ka(e):16;case 5:return 2*t.stringValue.length;case 6:return lr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+ka(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return mr(r.fields,(s,o)=>{i+=s.length+ka(o)}),i}(t.mapValue);default:throw W(13486,{value:t})}}function _h(t){return!!t&&"integerValue"in t}function bf(t){return!!t&&"arrayValue"in t}function Qm(t){return!!t&&"nullValue"in t}function Xm(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Na(t){return!!t&&"mapValue"in t}function b1(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[bv])==null?void 0:r.stringValue)===Uv}function Bs(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return mr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Bs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Bs(t.arrayValue.values[n]);return e}return{...t}}function U1(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===F1}/**
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
 */class lt{constructor(e){this.value=e}static empty(){return new lt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Na(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Bs(n)}setAll(e){let n=ze.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Bs(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Na(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return nn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Na(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){mr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new lt(Bs(this.value))}}function jv(t){const e=[];return mr(t.fields,(n,r)=>{const i=new ze([n]);if(Na(r)){const s=jv(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new yt(e)}/**
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
 */class Ye{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Ye(e,0,K.min(),K.min(),K.min(),lt.empty(),0)}static newFoundDocument(e,n,r,i){return new Ye(e,1,n,K.min(),r,i,0)}static newNoDocument(e,n){return new Ye(e,2,n,K.min(),K.min(),lt.empty(),0)}static newUnknownDocument(e,n){return new Ye(e,3,n,K.min(),K.min(),lt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(K.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=lt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=lt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=K.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ye&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ye(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class dl{constructor(e,n){this.position=e,this.inclusive=n}}function Ym(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=H.comparator(H.fromName(o.referenceValue),n.key):r=bi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Jm(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!nn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class pl{constructor(e,n="asc"){this.field=e,this.dir=n}}function j1(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class zv{}class Ne extends zv{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new B1(e,n,r):n==="array-contains"?new W1(e,r):n==="in"?new q1(e,r):n==="not-in"?new G1(e,r):n==="array-contains-any"?new K1(e,r):new Ne(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new $1(e,r):new H1(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(bi(n,this.value)):n!==null&&ur(this.value)===ur(n)&&this.matchesComparison(bi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return W(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class rn extends zv{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new rn(e,n)}matches(e){return Bv(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Bv(t){return t.op==="and"}function $v(t){return z1(t)&&Bv(t)}function z1(t){for(const e of t.filters)if(e instanceof rn)return!1;return!0}function vh(t){if(t instanceof Ne)return t.field.canonicalString()+t.op.toString()+Ui(t.value);if($v(t))return t.filters.map(e=>vh(e)).join(",");{const e=t.filters.map(n=>vh(n)).join(",");return`${t.op}(${e})`}}function Hv(t,e){return t instanceof Ne?function(r,i){return i instanceof Ne&&r.op===i.op&&r.field.isEqual(i.field)&&nn(r.value,i.value)}(t,e):t instanceof rn?function(r,i){return i instanceof rn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&Hv(o,i.filters[l]),!0):!1}(t,e):void W(19439)}function Wv(t){return t instanceof Ne?function(n){return`${n.field.canonicalString()} ${n.op} ${Ui(n.value)}`}(t):t instanceof rn?function(n){return n.op.toString()+" {"+n.getFilters().map(Wv).join(" ,")+"}"}(t):"Filter"}class B1 extends Ne{constructor(e,n,r){super(e,n,r),this.key=H.fromName(r.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.matchesComparison(n)}}class $1 extends Ne{constructor(e,n){super(e,"in",n),this.keys=qv("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class H1 extends Ne{constructor(e,n){super(e,"not-in",n),this.keys=qv("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function qv(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>H.fromName(r.referenceValue))}class W1 extends Ne{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return bf(n)&&mo(n.arrayValue,this.value)}}class q1 extends Ne{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&mo(this.value.arrayValue,n)}}class G1 extends Ne{constructor(e,n){super(e,"not-in",n)}matches(e){if(mo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!mo(this.value.arrayValue,n)}}class K1 extends Ne{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!bf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>mo(this.value.arrayValue,r))}}/**
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
 */class Q1{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function Zm(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Q1(t,e,n,r,i,s,o)}function Uf(t){const e=Q(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>vh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),ql(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ui(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ui(r)).join(",")),e.Te=n}return e.Te}function jf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!j1(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Hv(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Jm(t.startAt,e.startAt)&&Jm(t.endAt,e.endAt)}function Eh(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Kl{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function X1(t,e,n,r,i,s,o,l){return new Kl(t,e,n,r,i,s,o,l)}function Gv(t){return new Kl(t)}function eg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Y1(t){return t.collectionGroup!==null}function $s(t){const e=Q(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Ve(ze.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new pl(s,r))}),n.has(ze.keyField().canonicalString())||e.Ie.push(new pl(ze.keyField(),r))}return e.Ie}function Qt(t){const e=Q(t);return e.Ee||(e.Ee=J1(e,$s(t))),e.Ee}function J1(t,e){if(t.limitType==="F")return Zm(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new pl(i.field,s)});const n=t.endAt?new dl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new dl(t.startAt.position,t.startAt.inclusive):null;return Zm(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function wh(t,e,n){return new Kl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ql(t,e){return jf(Qt(t),Qt(e))&&t.limitType===e.limitType}function Kv(t){return`${Uf(Qt(t))}|lt:${t.limitType}`}function Zr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Wv(i)).join(", ")}]`),ql(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Ui(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Ui(i)).join(",")),`Target(${r})`}(Qt(t))}; limitType=${t.limitType})`}function Xl(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):H.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of $s(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const h=Ym(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,$s(r),i)||r.endAt&&!function(o,l,u){const h=Ym(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,$s(r),i))}(t,e)}function Z1(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Qv(t){return(e,n)=>{let r=!1;for(const i of $s(t)){const s=eA(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function eA(t,e,n){const r=t.field.isKeyField()?H.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),h=l.data.field(s);return u!==null&&h!==null?bi(u,h):W(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return W(19790,{direction:t.dir})}}/**
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
 */class qr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){mr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Vv(this.inner)}size(){return this.innerSize}}/**
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
 */const tA=new ve(H.comparator);function vn(){return tA}const Xv=new ve(H.comparator);function Ns(...t){let e=Xv;for(const n of t)e=e.insert(n.key,n);return e}function Yv(t){let e=Xv;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Nr(){return Hs()}function Jv(){return Hs()}function Hs(){return new qr(t=>t.toString(),(t,e)=>t.isEqual(e))}const nA=new ve(H.comparator),rA=new Ve(H.comparator);function ne(...t){let e=rA;for(const n of t)e=e.add(n);return e}const iA=new Ve(te);function sA(){return iA}/**
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
 */function zf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:cl(e)?"-0":e}}function Zv(t){return{integerValue:""+t}}function oA(t,e){return V1(e)?Zv(e):zf(t,e)}/**
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
 */class Yl{constructor(){this._=void 0}}function aA(t,e,n){return t instanceof ml?function(i,s){const o={fields:{[Lv]:{stringValue:xv},[Fv]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Ff(s)&&(s=Gl(s)),s&&(o.fields[Mv]=s),{mapValue:o}}(n,e):t instanceof go?tE(t,e):t instanceof yo?nE(t,e):function(i,s){const o=eE(i,s),l=tg(o)+tg(i.Ae);return _h(o)&&_h(i.Ae)?Zv(l):zf(i.serializer,l)}(t,e)}function lA(t,e,n){return t instanceof go?tE(t,e):t instanceof yo?nE(t,e):n}function eE(t,e){return t instanceof gl?function(r){return _h(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class ml extends Yl{}class go extends Yl{constructor(e){super(),this.elements=e}}function tE(t,e){const n=rE(e);for(const r of t.elements)n.some(i=>nn(i,r))||n.push(r);return{arrayValue:{values:n}}}class yo extends Yl{constructor(e){super(),this.elements=e}}function nE(t,e){let n=rE(e);for(const r of t.elements)n=n.filter(i=>!nn(i,r));return{arrayValue:{values:n}}}class gl extends Yl{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function tg(t){return Ie(t.integerValue||t.doubleValue)}function rE(t){return bf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function uA(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof go&&i instanceof go||r instanceof yo&&i instanceof yo?Mi(r.elements,i.elements,nn):r instanceof gl&&i instanceof gl?nn(r.Ae,i.Ae):r instanceof ml&&i instanceof ml}(t.transform,e.transform)}class cA{constructor(e,n){this.version=e,this.transformResults=n}}class Xt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Xt}static exists(e){return new Xt(void 0,e)}static updateTime(e){return new Xt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Da(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Jl{}function iE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new oE(t.key,Xt.none()):new Co(t.key,t.data,Xt.none());{const n=t.data,r=lt.empty();let i=new Ve(ze.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new gr(t.key,r,new yt(i.toArray()),Xt.none())}}function hA(t,e,n){t instanceof Co?function(i,s,o){const l=i.value.clone(),u=rg(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof gr?function(i,s,o){if(!Da(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=rg(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(sE(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ws(t,e,n,r){return t instanceof Co?function(s,o,l,u){if(!Da(s.precondition,o))return l;const h=s.value.clone(),d=ig(s.fieldTransforms,u,o);return h.setAll(d),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof gr?function(s,o,l,u){if(!Da(s.precondition,o))return l;const h=ig(s.fieldTransforms,u,o),d=o.data;return d.setAll(sE(s)),d.setAll(h),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(s,o,l){return Da(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function fA(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=eE(r.transform,i||null);s!=null&&(n===null&&(n=lt.empty()),n.set(r.field,s))}return n||null}function ng(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Mi(r,i,(s,o)=>uA(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Co extends Jl{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class gr extends Jl{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function sE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function rg(t,e,n){const r=new Map;se(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,lA(o,l,n[i]))}return r}function ig(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,aA(s,o,e))}return r}class oE extends Jl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class dA extends Jl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class pA{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&hA(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ws(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ws(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Jv();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=iE(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(K.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ne())}isEqual(e){return this.batchId===e.batchId&&Mi(this.mutations,e.mutations,(n,r)=>ng(n,r))&&Mi(this.baseMutations,e.baseMutations,(n,r)=>ng(n,r))}}class Bf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){se(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return nA}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Bf(e,n,r,i)}}/**
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
 */class mA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class gA{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ae,re;function yA(t){switch(t){case x.OK:return W(64938);case x.CANCELLED:case x.UNKNOWN:case x.DEADLINE_EXCEEDED:case x.RESOURCE_EXHAUSTED:case x.INTERNAL:case x.UNAVAILABLE:case x.UNAUTHENTICATED:return!1;case x.INVALID_ARGUMENT:case x.NOT_FOUND:case x.ALREADY_EXISTS:case x.PERMISSION_DENIED:case x.FAILED_PRECONDITION:case x.ABORTED:case x.OUT_OF_RANGE:case x.UNIMPLEMENTED:case x.DATA_LOSS:return!0;default:return W(15467,{code:t})}}function aE(t){if(t===void 0)return _n("GRPC error has no .code"),x.UNKNOWN;switch(t){case Ae.OK:return x.OK;case Ae.CANCELLED:return x.CANCELLED;case Ae.UNKNOWN:return x.UNKNOWN;case Ae.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case Ae.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case Ae.INTERNAL:return x.INTERNAL;case Ae.UNAVAILABLE:return x.UNAVAILABLE;case Ae.UNAUTHENTICATED:return x.UNAUTHENTICATED;case Ae.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case Ae.NOT_FOUND:return x.NOT_FOUND;case Ae.ALREADY_EXISTS:return x.ALREADY_EXISTS;case Ae.PERMISSION_DENIED:return x.PERMISSION_DENIED;case Ae.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case Ae.ABORTED:return x.ABORTED;case Ae.OUT_OF_RANGE:return x.OUT_OF_RANGE;case Ae.UNIMPLEMENTED:return x.UNIMPLEMENTED;case Ae.DATA_LOSS:return x.DATA_LOSS;default:return W(39323,{code:t})}}(re=Ae||(Ae={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function _A(){return new TextEncoder}/**
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
 */const vA=new tr([4294967295,4294967295],0);function sg(t){const e=_A().encode(t),n=new wv;return n.update(e),new Uint8Array(n.digest())}function og(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new tr([n,r],0),new tr([i,s],0)]}class $f{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ds(`Invalid padding: ${n}`);if(r<0)throw new Ds(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ds(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ds(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=tr.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(tr.fromNumber(r)));return i.compare(vA)===1&&(i=new tr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=sg(e),[r,i]=og(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new $f(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=sg(e),[r,i]=og(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ds extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Zl{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Po.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Zl(K.min(),i,new ve(te),vn(),ne())}}class Po{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Po(r,n,ne(),ne(),ne())}}/**
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
 */class Va{constructor(e,n,r,i){this.be=e,this.removedTargetIds=n,this.key=r,this.De=i}}class lE{constructor(e,n){this.targetId=e,this.Ce=n}}class uE{constructor(e,n,r=He.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class ag{constructor(){this.ve=0,this.Fe=lg(),this.Me=He.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ne(),n=ne(),r=ne();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:W(38017,{changeType:s})}}),new Po(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=lg()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,se(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class EA{constructor(e){this.Ge=e,this.ze=new Map,this.je=vn(),this.Je=fa(),this.He=fa(),this.Ye=new ve(te)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:W(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(Eh(s))if(r===0){const o=new H(s.path);this.et(n,o,Ye.newNoDocument(o,K.min()))}else se(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,h)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=lr(r).toUint8Array()}catch(u){if(u instanceof Ov)return Li("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new $f(o,i,s)}catch(u){return Li(u instanceof Ds?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,o)=>{const l=this.ot(o);if(l){if(s.current&&Eh(l.target)){const u=new H(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,Ye.newNoDocument(u,e))}s.Be&&(n.set(o,s.ke()),s.qe())}});let r=ne();this.He.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.ot(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new Zl(e,n,this.Ye,this.je,r);return this.je=vn(),this.Je=fa(),this.He=fa(),this.Ye=new ve(te),i}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,n)?i.Qe(n,1):i.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new ag,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new Ve(te),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new Ve(te),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||z("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new ag),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function fa(){return new ve(H.comparator)}function lg(){return new ve(H.comparator)}const wA={asc:"ASCENDING",desc:"DESCENDING"},TA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},IA={and:"AND",or:"OR"};class SA{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Th(t,e){return t.useProto3Json||ql(e)?e:{value:e}}function yl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function cE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function AA(t,e){return yl(t,e.toTimestamp())}function Yt(t){return se(!!t,49232),K.fromTimestamp(function(n){const r=ar(n);return new fe(r.seconds,r.nanos)}(t))}function Hf(t,e){return Ih(t,e).canonicalString()}function Ih(t,e){const n=function(i){return new he(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function hE(t){const e=he.fromString(t);return se(gE(e),10190,{key:e.toString()}),e}function Sh(t,e){return Hf(t.databaseId,e.path)}function cc(t,e){const n=hE(e);if(n.get(1)!==t.databaseId.projectId)throw new $(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(dE(n))}function fE(t,e){return Hf(t.databaseId,e)}function RA(t){const e=hE(t);return e.length===4?he.emptyPath():dE(e)}function Ah(t){return new he(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function dE(t){return se(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function ug(t,e,n){return{name:Sh(t,e),fields:n.value.mapValue.fields}}function CA(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:W(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,d){return h.useProto3Json?(se(d===void 0||typeof d=="string",58123),He.fromBase64String(d||"")):(se(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),He.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const d=h.code===void 0?x.UNKNOWN:aE(h.code);return new $(d,h.message||"")}(o);n=new uE(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=cc(t,r.document.name),s=Yt(r.document.updateTime),o=r.document.createTime?Yt(r.document.createTime):K.min(),l=new lt({mapValue:{fields:r.document.fields}}),u=Ye.newFoundDocument(i,s,o,l),h=r.targetIds||[],d=r.removedTargetIds||[];n=new Va(h,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=cc(t,r.document),s=r.readTime?Yt(r.readTime):K.min(),o=Ye.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Va([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=cc(t,r.document),s=r.removedTargetIds||[];n=new Va([],s,i,null)}else{if(!("filter"in e))return W(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new gA(i,s),l=r.targetId;n=new lE(l,o)}}return n}function PA(t,e){let n;if(e instanceof Co)n={update:ug(t,e.key,e.value)};else if(e instanceof oE)n={delete:Sh(t,e.key)};else if(e instanceof gr)n={update:ug(t,e.key,e.data),updateMask:FA(e.fieldMask)};else{if(!(e instanceof dA))return W(16599,{Vt:e.type});n={verify:Sh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof ml)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof go)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof yo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof gl)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw W(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:AA(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:W(27497)}(t,e.precondition)),n}function kA(t,e){return t&&t.length>0?(se(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?Yt(i.updateTime):Yt(s);return o.isEqual(K.min())&&(o=Yt(s)),new cA(o,i.transformResults||[])}(n,e))):[]}function NA(t,e){return{documents:[fE(t,e.path)]}}function DA(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=fE(t,i);const s=function(h){if(h.length!==0)return mE(rn.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(d=>function(g){return{field:ei(g.field),direction:xA(g.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Th(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:n,parent:i}}function VA(t){let e=RA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){se(r===1,65062);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(m){const g=pE(m);return g instanceof rn&&$v(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(g=>function(N){return new pl(ti(N.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,ql(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(m){const g=!!m.before,R=m.values||[];return new dl(R,g)}(n.startAt));let h=null;return n.endAt&&(h=function(m){const g=!m.before,R=m.values||[];return new dl(R,g)}(n.endAt)),X1(e,i,o,s,l,"F",u,h)}function OA(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return W(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function pE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ti(n.unaryFilter.field);return Ne.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ti(n.unaryFilter.field);return Ne.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ti(n.unaryFilter.field);return Ne.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ti(n.unaryFilter.field);return Ne.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return W(61313);default:return W(60726)}}(t):t.fieldFilter!==void 0?function(n){return Ne.create(ti(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return W(58110);default:return W(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return rn.create(n.compositeFilter.filters.map(r=>pE(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return W(1026)}}(n.compositeFilter.op))}(t):W(30097,{filter:t})}function xA(t){return wA[t]}function LA(t){return TA[t]}function MA(t){return IA[t]}function ei(t){return{fieldPath:t.canonicalString()}}function ti(t){return ze.fromServerFormat(t.fieldPath)}function mE(t){return t instanceof Ne?function(n){if(n.op==="=="){if(Xm(n.value))return{unaryFilter:{field:ei(n.field),op:"IS_NAN"}};if(Qm(n.value))return{unaryFilter:{field:ei(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Xm(n.value))return{unaryFilter:{field:ei(n.field),op:"IS_NOT_NAN"}};if(Qm(n.value))return{unaryFilter:{field:ei(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ei(n.field),op:LA(n.op),value:n.value}}}(t):t instanceof rn?function(n){const r=n.getFilters().map(i=>mE(i));return r.length===1?r[0]:{compositeFilter:{op:MA(n.op),filters:r}}}(t):W(54877,{filter:t})}function FA(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function gE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class $n{constructor(e,n,r,i,s=K.min(),o=K.min(),l=He.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new $n(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class bA{constructor(e){this.yt=e}}function UA(t){const e=VA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?wh(e,e.limit,"L"):e}/**
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
 */class jA{constructor(){this.Cn=new zA}addToCollectionParentIndex(e,n){return this.Cn.add(n),O.resolve()}getCollectionParents(e,n){return O.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return O.resolve()}deleteFieldIndex(e,n){return O.resolve()}deleteAllFieldIndexes(e){return O.resolve()}createTargetIndexes(e,n){return O.resolve()}getDocumentsMatchingTarget(e,n){return O.resolve(null)}getIndexType(e,n){return O.resolve(0)}getFieldIndexes(e,n){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,n){return O.resolve(or.min())}getMinOffsetFromCollectionGroup(e,n){return O.resolve(or.min())}updateCollectionGroup(e,n,r){return O.resolve()}updateIndexEntries(e,n){return O.resolve()}}class zA{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ve(he.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ve(he.comparator)).toArray()}}/**
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
 */const cg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},yE=41943040;class ot{static withCacheSize(e){return new ot(e,ot.DEFAULT_COLLECTION_PERCENTILE,ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */ot.DEFAULT_COLLECTION_PERCENTILE=10,ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ot.DEFAULT=new ot(yE,ot.DEFAULT_COLLECTION_PERCENTILE,ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ot.DISABLED=new ot(-1,0,0);/**
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
 */class ji{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new ji(0)}static cr(){return new ji(-1)}}/**
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
 */const hg="LruGarbageCollector",BA=1048576;function fg([t,e],[n,r]){const i=te(t,n);return i===0?te(e,r):i}class $A{constructor(e){this.Ir=e,this.buffer=new Ve(fg),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();fg(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class HA{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){z(hg,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Xi(n)?z(hg,"Ignoring IndexedDB error during garbage collection: ",n):await Qi(n)}await this.Vr(3e5)})}}class WA{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return O.resolve(Wl.ce);const r=new $A(n);return this.mr.forEachTarget(e,i=>r.Ar(i.sequenceNumber)).next(()=>this.mr.pr(e,i=>r.Ar(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(z("LruGarbageCollector","Garbage collection skipped; disabled"),O.resolve(cg)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(z("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),cg):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,i,s,o,l,u,h;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),i=this.params.maximumSequenceNumbersToCollect):i=m,o=Date.now(),this.nthSequenceNumber(e,i))).next(m=>(r=m,l=Date.now(),this.removeTargets(e,r,n))).next(m=>(s=m,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(h=Date.now(),Jr()<=ee.DEBUG&&z("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${m} documents in `+(h-u)+`ms
Total Duration: ${h-d}ms`),O.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:m})))}}function qA(t,e){return new WA(t,e)}/**
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
 */class GA{constructor(){this.changes=new qr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ye.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?O.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class KA{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class QA{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ws(r.mutation,i,yt.empty(),fe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ne()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ne()){const i=Nr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ns();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Nr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ne()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=vn();const o=Hs(),l=function(){return Hs()}();return n.forEach((u,h)=>{const d=r.get(h.key);i.has(h.key)&&(d===void 0||d.mutation instanceof gr)?s=s.insert(h.key,h):d!==void 0?(o.set(h.key,d.mutation.getFieldMask()),Ws(d.mutation,h,d.mutation.getFieldMask(),fe.now())):o.set(h.key,yt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,d)=>o.set(h,d)),n.forEach((h,d)=>l.set(h,new KA(d,o.get(h)??null))),l))}recalculateAndSaveOverlays(e,n){const r=Hs();let i=new ve((o,l)=>o-l),s=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let d=r.get(u)||yt.empty();d=l.applyToLocalView(h,d),r.set(u,d);const m=(i.get(l.batchId)||ne()).add(u);i=i.insert(l.batchId,m)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,d=u.value,m=Jv();d.forEach(g=>{if(!s.has(g)){const R=iE(n.get(g),r.get(g));R!==null&&m.set(g,R),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,m))}return O.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return H.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Y1(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):O.resolve(Nr());let l=ho,u=s;return o.next(h=>O.forEach(h,(d,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(d)?O.resolve():this.remoteDocumentCache.getEntry(e,d).next(g=>{u=u.insert(d,g)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,ne())).next(d=>({batchId:l,changes:Yv(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(r=>{let i=Ns();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Ns();return this.indexManager.getCollectionParents(e,s).next(l=>O.forEach(l,u=>{const h=function(m,g){return new Kl(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(d=>{d.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,h)=>{const d=h.getKey();o.get(d)===null&&(o=o.insert(d,Ye.newInvalidDocument(d)))});let l=Ns();return o.forEach((u,h)=>{const d=s.get(u);d!==void 0&&Ws(d.mutation,h,yt.empty(),fe.now()),Xl(n,h)&&(l=l.insert(u,h))}),l})}}/**
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
 */class XA{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return O.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Yt(i.createTime)}}(n)),O.resolve()}getNamedQuery(e,n){return O.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(i){return{name:i.name,query:UA(i.bundledQuery),readTime:Yt(i.readTime)}}(n)),O.resolve()}}/**
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
 */class YA{constructor(){this.overlays=new ve(H.comparator),this.qr=new Map}getOverlay(e,n){return O.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Nr();return O.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.St(e,n,s)}),O.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.qr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.qr.delete(r)),O.resolve()}getOverlaysForCollection(e,n,r){const i=Nr(),s=n.length+1,o=new H(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return O.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ve((h,d)=>h-d);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let d=s.get(h.largestBatchId);d===null&&(d=Nr(),s=s.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const l=Nr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,d)=>l.set(h,d)),!(l.size()>=i)););return O.resolve(l)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.qr.get(i.largestBatchId).delete(r.key);this.qr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new mA(n,r));let s=this.qr.get(n);s===void 0&&(s=ne(),this.qr.set(n,s)),this.qr.set(n,s.add(r.key))}}/**
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
 */class JA{constructor(){this.sessionToken=He.EMPTY_BYTE_STRING}getSessionToken(e){return O.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,O.resolve()}}/**
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
 */class Wf{constructor(){this.Qr=new Ve(xe.$r),this.Ur=new Ve(xe.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new xe(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new xe(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new H(new he([])),r=new xe(n,e),i=new xe(n,e+1),s=[];return this.Ur.forEachInRange([r,i],o=>{this.Gr(o),s.push(o.key)}),s}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new H(new he([])),r=new xe(n,e),i=new xe(n,e+1);let s=ne();return this.Ur.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new xe(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class xe{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return H.comparator(e.key,n.key)||te(e.Yr,n.Yr)}static Kr(e,n){return te(e.Yr,n.Yr)||H.comparator(e.key,n.key)}}/**
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
 */class ZA{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new Ve(xe.$r)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new pA(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Zr=this.Zr.add(new xe(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return O.resolve(o)}lookupMutationBatch(e,n){return O.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ei(r),s=i<0?0:i;return O.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?Mf:this.tr-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new xe(n,0),i=new xe(n,Number.POSITIVE_INFINITY),s=[];return this.Zr.forEachInRange([r,i],o=>{const l=this.Xr(o.Yr);s.push(l)}),O.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ve(te);return n.forEach(i=>{const s=new xe(i,0),o=new xe(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([s,o],l=>{r=r.add(l.Yr)})}),O.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;H.isDocumentKey(s)||(s=s.child(""));const o=new xe(new H(s),0);let l=new Ve(te);return this.Zr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.Yr)),!0)},o),O.resolve(this.ti(l))}ti(e){const n=[];return e.forEach(r=>{const i=this.Xr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){se(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return O.forEach(n.mutations,i=>{const s=new xe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new xe(n,0),i=this.Zr.firstAfterOrEqual(r);return O.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class eR{constructor(e){this.ri=e,this.docs=function(){return new ve(H.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return O.resolve(r?r.document.mutableCopy():Ye.newInvalidDocument(n))}getEntries(e,n){let r=vn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ye.newInvalidDocument(i))}),O.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=vn();const o=n.path,l=new H(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:d}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||P1(C1(d),r)<=0||(i.has(d.key)||Xl(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return O.resolve(s)}getAllFromCollectionGroup(e,n,r,i){W(9500)}ii(e,n){return O.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new tR(this)}getSize(e){return O.resolve(this.size)}}class tR extends GA{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Nr.addEntry(e,i)):this.Nr.removeEntry(r)}),O.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
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
 */class nR{constructor(e){this.persistence=e,this.si=new qr(n=>Uf(n),jf),this.lastRemoteSnapshotVersion=K.min(),this.highestTargetId=0,this.oi=0,this._i=new Wf,this.targetCount=0,this.ai=ji.ur()}forEachTarget(e,n){return this.si.forEach((r,i)=>n(i)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),O.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new ji(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,O.resolve()}updateTargetData(e,n){return this.Pr(n),O.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.si.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.si.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),O.waitFor(s).next(()=>i)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return O.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),O.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),O.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),O.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return O.resolve(r)}containsKey(e,n){return O.resolve(this._i.containsKey(n))}}/**
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
 */class _E{constructor(e,n){this.ui={},this.overlays={},this.ci=new Wl(0),this.li=!1,this.li=!0,this.hi=new JA,this.referenceDelegate=e(this),this.Pi=new nR(this),this.indexManager=new jA,this.remoteDocumentCache=function(i){return new eR(i)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new bA(n),this.Ii=new XA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new YA,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new ZA(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){z("MemoryPersistence","Starting transaction:",e);const i=new rR(this.ci.next());return this.referenceDelegate.Ei(),r(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ai(e,n){return O.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class rR extends N1{constructor(e){super(),this.currentSequenceNumber=e}}class qf{constructor(e){this.persistence=e,this.Ri=new Wf,this.Vi=null}static mi(e){return new qf(e)}get fi(){if(this.Vi)return this.Vi;throw W(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),O.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),O.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(i=>this.fi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.fi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.fi,r=>{const i=H.fromPath(r);return this.gi(e,i).next(s=>{s||n.removeEntry(i,K.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return O.or([()=>O.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class _l{constructor(e,n){this.persistence=e,this.pi=new qr(r=>O1(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=qA(this,n)}static mi(e,n){return new _l(e,n)}Ei(){}di(e){return O.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return O.forEach(this.pi,(r,i)=>this.br(e,r,i).next(s=>s?O.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ii(e,o=>this.br(e,o,n).next(l=>{l||(r++,s.removeEntry(o,K.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),O.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),O.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),O.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),O.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=ka(e.data.value)),n}br(e,n,r){return O.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.pi.get(n);return O.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Gf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=i}static As(e,n){let r=ne(),i=ne();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Gf(e,n.fromCache,r,i)}}/**
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
 */class iR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class sR{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return Y0()?8:D1(Ze())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ys(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ws(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new iR;return this.Ss(e,n,o).next(l=>{if(s.result=l,this.Vs)return this.bs(e,n,o,l.size)})}).next(()=>s.result)}bs(e,n,r,i){return r.documentReadCount<this.fs?(Jr()<=ee.DEBUG&&z("QueryEngine","SDK will not create cache indexes for query:",Zr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),O.resolve()):(Jr()<=ee.DEBUG&&z("QueryEngine","Query:",Zr(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.gs*i?(Jr()<=ee.DEBUG&&z("QueryEngine","The SDK decides to create cache indexes for query:",Zr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Qt(n))):O.resolve())}ys(e,n){if(eg(n))return O.resolve(null);let r=Qt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=wh(n,null,"F"),r=Qt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ne(...s);return this.ps.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.Ds(n,l);return this.Cs(n,h,o,u.readTime)?this.ys(e,wh(n,null,"F")):this.vs(e,h,n,u)}))})))}ws(e,n,r,i){return eg(n)||i.isEqual(K.min())?O.resolve(null):this.ps.getDocuments(e,r).next(s=>{const o=this.Ds(n,s);return this.Cs(n,o,r,i)?O.resolve(null):(Jr()<=ee.DEBUG&&z("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Zr(n)),this.vs(e,o,n,R1(i,ho)).next(l=>l))})}Ds(e,n){let r=new Ve(Qv(e));return n.forEach((i,s)=>{Xl(e,s)&&(r=r.add(s))}),r}Cs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ss(e,n,r){return Jr()<=ee.DEBUG&&z("QueryEngine","Using full collection scan to execute query:",Zr(n)),this.ps.getDocumentsMatchingQuery(e,n,or.min(),r)}vs(e,n,r,i){return this.ps.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */const Kf="LocalStore",oR=3e8;class aR{constructor(e,n,r,i){this.persistence=e,this.Fs=n,this.serializer=i,this.Ms=new ve(te),this.xs=new qr(s=>Uf(s),jf),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new QA(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function lR(t,e,n,r){return new aR(t,e,n,r)}async function vE(t,e){const n=Q(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ne();for(const h of i){o.push(h.batchId);for(const d of h.mutations)u=u.add(d.key)}for(const h of s){l.push(h.batchId);for(const d of h.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(h=>({Ls:h,removedBatchIds:o,addedBatchIds:l}))})})}function uR(t,e){const n=Q(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Ns.newChangeBuffer({trackRemovals:!0});return function(l,u,h,d){const m=h.batch,g=m.keys();let R=O.resolve();return g.forEach(N=>{R=R.next(()=>d.getEntry(u,N)).next(D=>{const L=h.docVersions.get(N);se(L!==null,48541),D.version.compareTo(L)<0&&(m.applyToRemoteDocument(D,h),D.isValidDocument()&&(D.setReadTime(h.commitVersion),d.addEntry(D)))})}),R.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ne();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function EE(t){const e=Q(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function cR(t,e){const n=Q(t),r=e.snapshotVersion;let i=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});i=n.Ms;const l=[];e.targetChanges.forEach((d,m)=>{const g=i.get(m);if(!g)return;l.push(n.Pi.removeMatchingKeys(s,d.removedDocuments,m).next(()=>n.Pi.addMatchingKeys(s,d.addedDocuments,m)));let R=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?R=R.withResumeToken(He.EMPTY_BYTE_STRING,K.min()).withLastLimboFreeSnapshotVersion(K.min()):d.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(d.resumeToken,r)),i=i.insert(m,R),function(D,L,I){return D.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=oR?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(g,R,d)&&l.push(n.Pi.updateTargetData(s,R))});let u=vn(),h=ne();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),l.push(hR(s,o,e.documentUpdates).next(d=>{u=d.ks,h=d.qs})),!r.isEqual(K.min())){const d=n.Pi.getLastRemoteSnapshotVersion(s).next(m=>n.Pi.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(d)}return O.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(n.Ms=i,s))}function hR(t,e,n){let r=ne(),i=ne();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=vn();return n.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(K.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):z(Kf,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{ks:o,qs:i}})}function fR(t,e){const n=Q(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Mf),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function dR(t,e){const n=Q(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Pi.getTargetData(r,e).next(s=>s?(i=s,O.resolve(i)):n.Pi.allocateTargetId(r).next(o=>(i=new $n(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ms.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function Rh(t,e,n){const r=Q(t),i=r.Ms.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Xi(o))throw o;z(Kf,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(i.target)}function dg(t,e,n){const r=Q(t);let i=K.min(),s=ne();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,d){const m=Q(u),g=m.xs.get(d);return g!==void 0?O.resolve(m.Ms.get(g)):m.Pi.getTargetData(h,d)}(r,o,Qt(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?i:K.min(),n?s:ne())).next(l=>(pR(r,Z1(e),l),{documents:l,Qs:s})))}function pR(t,e,n){let r=t.Os.get(e)||K.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Os.set(e,r)}class pg{constructor(){this.activeTargetIds=sA()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class mR{constructor(){this.Mo=new pg,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new pg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class gR{Oo(e){}shutdown(){}}/**
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
 */const mg="ConnectivityMonitor";class gg{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){z(mg,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){z(mg,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let da=null;function Ch(){return da===null?da=function(){return 268435456+Math.round(2147483648*Math.random())}():da++,"0x"+da.toString(16)}/**
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
 */const hc="RestConnection",yR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class _R{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${i}`,this.Wo=this.databaseId.database===hl?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Go(e,n,r,i,s){const o=Ch(),l=this.zo(e,n.toUriEncodedString());z(hc,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,i,s);const{host:h}=new URL(l),d=qi(h);return this.Jo(e,l,u,r,d).then(m=>(z(hc,`Received RPC '${e}' ${o}: `,m),m),m=>{throw Li(hc,`RPC '${e}' ${o} failed with error: `,m,"url: ",l,"request:",r),m})}Ho(e,n,r,i,s,o){return this.Go(e,n,r,i,s)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ki}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}zo(e,n){const r=yR[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
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
 */class vR{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const Ke="WebChannelConnection";class ER extends _R{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,i,s){const o=Ch();return new Promise((l,u)=>{const h=new Tv;h.setWithCredentials(!0),h.listenOnce(Iv.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Pa.NO_ERROR:const m=h.getResponseJson();z(Ke,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),l(m);break;case Pa.TIMEOUT:z(Ke,`RPC '${e}' ${o} timed out`),u(new $(x.DEADLINE_EXCEEDED,"Request time out"));break;case Pa.HTTP_ERROR:const g=h.getStatus();if(z(Ke,`RPC '${e}' ${o} failed with status:`,g,"response text:",h.getResponseText()),g>0){let R=h.getResponseJson();Array.isArray(R)&&(R=R[0]);const N=R==null?void 0:R.error;if(N&&N.status&&N.message){const D=function(I){const E=I.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(E)>=0?E:x.UNKNOWN}(N.status);u(new $(D,N.message))}else u(new $(x.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new $(x.UNAVAILABLE,"Connection failed."));break;default:W(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{z(Ke,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(i);z(Ke,`RPC '${e}' ${o} sending request:`,i),h.send(n,"POST",d,r,15)})}T_(e,n,r){const i=Ch(),s=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Rv(),l=Av(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");z(Ke,`Creating RPC '${e}' stream ${i}: ${d}`,u);const m=o.createWebChannel(d,u);this.I_(m);let g=!1,R=!1;const N=new vR({Yo:L=>{R?z(Ke,`Not sending because RPC '${e}' stream ${i} is closed:`,L):(g||(z(Ke,`Opening RPC '${e}' stream ${i} transport.`),m.open(),g=!0),z(Ke,`RPC '${e}' stream ${i} sending:`,L),m.send(L))},Zo:()=>m.close()}),D=(L,I,E)=>{L.listen(I,A=>{try{E(A)}catch(V){setTimeout(()=>{throw V},0)}})};return D(m,ks.EventType.OPEN,()=>{R||(z(Ke,`RPC '${e}' stream ${i} transport opened.`),N.o_())}),D(m,ks.EventType.CLOSE,()=>{R||(R=!0,z(Ke,`RPC '${e}' stream ${i} transport closed`),N.a_(),this.E_(m))}),D(m,ks.EventType.ERROR,L=>{R||(R=!0,Li(Ke,`RPC '${e}' stream ${i} transport errored. Name:`,L.name,"Message:",L.message),N.a_(new $(x.UNAVAILABLE,"The operation could not be completed")))}),D(m,ks.EventType.MESSAGE,L=>{var I;if(!R){const E=L.data[0];se(!!E,16349);const A=E,V=(A==null?void 0:A.error)||((I=A[0])==null?void 0:I.error);if(V){z(Ke,`RPC '${e}' stream ${i} received error:`,V);const b=V.status;let U=function(v){const T=Ae[v];if(T!==void 0)return aE(T)}(b),_=V.message;U===void 0&&(U=x.INTERNAL,_="Unknown error status: "+b+" with message "+V.message),R=!0,N.a_(new $(U,_)),m.close()}else z(Ke,`RPC '${e}' stream ${i} received:`,E),N.u_(E)}}),D(l,Sv.STAT_EVENT,L=>{L.stat===mh.PROXY?z(Ke,`RPC '${e}' stream ${i} detected buffering proxy`):L.stat===mh.NOPROXY&&z(Ke,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{N.__()},0),N}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function fc(){return typeof document<"u"?document:null}/**
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
 */function eu(t){return new SA(t,!0)}/**
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
 */class wE{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=i,this.R_=s,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&z("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const yg="PersistentStream";class TE{constructor(e,n,r,i,s,o,l,u){this.Mi=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new wE(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===x.RESOURCE_EXHAUSTED?(_n(n.toString()),_n("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===x.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new $(x.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return z(yg,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(z(yg,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class wR extends TE{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=CA(this.serializer,e),r=function(s){if(!("targetChange"in s))return K.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?K.min():o.readTime?Yt(o.readTime):K.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=Ah(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Eh(u)?{documents:NA(s,u)}:{query:DA(s,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=cE(s,o.resumeToken);const h=Th(s,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(K.min())>0){l.readTime=yl(s,o.snapshotVersion.toTimestamp());const h=Th(s,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=OA(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=Ah(this.serializer),n.removeTarget=e,this.q_(n)}}class TR extends TE{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return se(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,se(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){se(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=kA(e.writeResults,e.commitTime),r=Yt(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Ah(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>PA(this.serializer,r))};this.q_(n)}}/**
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
 */class IR{}class SR extends IR{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new $(x.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Go(e,Ih(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new $(x.UNKNOWN,s.toString())})}Ho(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Ho(e,Ih(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new $(x.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class AR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(_n(n),this.aa=!1):z("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Br="RemoteStore";class RR{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=s,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{Gr(this)&&(z(Br,"Restarting streams for network reachability change."),await async function(u){const h=Q(u);h.Ea.add(4),await ko(h),h.Ra.set("Unknown"),h.Ea.delete(4),await tu(h)}(this))})}),this.Ra=new AR(r,i)}}async function tu(t){if(Gr(t))for(const e of t.da)await e(!0)}async function ko(t){for(const e of t.da)await e(!1)}function IE(t,e){const n=Q(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Jf(n)?Yf(n):Yi(n).O_()&&Xf(n,e))}function Qf(t,e){const n=Q(t),r=Yi(n);n.Ia.delete(e),r.O_()&&SE(n,e),n.Ia.size===0&&(r.O_()?r.L_():Gr(n)&&n.Ra.set("Unknown"))}function Xf(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(K.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Yi(t).Y_(e)}function SE(t,e){t.Va.Ue(e),Yi(t).Z_(e)}function Yf(t){t.Va=new EA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Yi(t).start(),t.Ra.ua()}function Jf(t){return Gr(t)&&!Yi(t).x_()&&t.Ia.size>0}function Gr(t){return Q(t).Ea.size===0}function AE(t){t.Va=void 0}async function CR(t){t.Ra.set("Online")}async function PR(t){t.Ia.forEach((e,n)=>{Xf(t,e)})}async function kR(t,e){AE(t),Jf(t)?(t.Ra.ha(e),Yf(t)):t.Ra.set("Unknown")}async function NR(t,e,n){if(t.Ra.set("Online"),e instanceof uE&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ia.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ia.delete(l),i.Va.removeTarget(l))}(t,e)}catch(r){z(Br,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await vl(t,r)}else if(e instanceof Va?t.Va.Ze(e):e instanceof lE?t.Va.st(e):t.Va.tt(e),!n.isEqual(K.min()))try{const r=await EE(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Va.Tt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.Ia.get(h);d&&s.Ia.set(h,d.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const d=s.Ia.get(u);if(!d)return;s.Ia.set(u,d.withResumeToken(He.EMPTY_BYTE_STRING,d.snapshotVersion)),SE(s,u);const m=new $n(d.target,u,h,d.sequenceNumber);Xf(s,m)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){z(Br,"Failed to raise snapshot:",r),await vl(t,r)}}async function vl(t,e,n){if(!Xi(e))throw e;t.Ea.add(1),await ko(t),t.Ra.set("Offline"),n||(n=()=>EE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{z(Br,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await tu(t)})}function RE(t,e){return e().catch(n=>vl(t,n,e))}async function nu(t){const e=Q(t),n=cr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Mf;for(;DR(e);)try{const i=await fR(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,VR(e,i)}catch(i){await vl(e,i)}CE(e)&&PE(e)}function DR(t){return Gr(t)&&t.Ta.length<10}function VR(t,e){t.Ta.push(e);const n=cr(t);n.O_()&&n.X_&&n.ea(e.mutations)}function CE(t){return Gr(t)&&!cr(t).x_()&&t.Ta.length>0}function PE(t){cr(t).start()}async function OR(t){cr(t).ra()}async function xR(t){const e=cr(t);for(const n of t.Ta)e.ea(n.mutations)}async function LR(t,e,n){const r=t.Ta.shift(),i=Bf.from(r,e,n);await RE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await nu(t)}async function MR(t,e){e&&cr(t).X_&&await async function(r,i){if(function(o){return yA(o)&&o!==x.ABORTED}(i.code)){const s=r.Ta.shift();cr(r).B_(),await RE(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await nu(r)}}(t,e),CE(t)&&PE(t)}async function _g(t,e){const n=Q(t);n.asyncQueue.verifyOperationInProgress(),z(Br,"RemoteStore received new credentials");const r=Gr(n);n.Ea.add(3),await ko(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await tu(n)}async function FR(t,e){const n=Q(t);e?(n.Ea.delete(2),await tu(n)):e||(n.Ea.add(2),await ko(n),n.Ra.set("Unknown"))}function Yi(t){return t.ma||(t.ma=function(n,r,i){const s=Q(n);return s.sa(),new wR(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Xo:CR.bind(null,t),t_:PR.bind(null,t),r_:kR.bind(null,t),H_:NR.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),Jf(t)?Yf(t):t.Ra.set("Unknown")):(await t.ma.stop(),AE(t))})),t.ma}function cr(t){return t.fa||(t.fa=function(n,r,i){const s=Q(n);return s.sa(),new TR(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:OR.bind(null,t),r_:MR.bind(null,t),ta:xR.bind(null,t),na:LR.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await nu(t)):(await t.fa.stop(),t.Ta.length>0&&(z(Br,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
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
 */class Zf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new nr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Zf(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(x.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ed(t,e){if(_n("AsyncQueue",`${e}: ${t}`),Xi(t))return new $(x.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class wi{static emptySet(e){return new wi(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||H.comparator(n.key,r.key):(n,r)=>H.comparator(n.key,r.key),this.keyedMap=Ns(),this.sortedSet=new ve(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof wi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new wi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class vg{constructor(){this.ga=new ve(H.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):W(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class zi{constructor(e,n,r,i,s,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new zi(e,n,wi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ql(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class bR{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class UR{constructor(){this.queries=Eg(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=Q(n),s=i.queries;i.queries=Eg(),s.forEach((o,l)=>{for(const u of l.Sa)u.onError(r)})})(this,new $(x.ABORTED,"Firestore shutting down"))}}function Eg(){return new qr(t=>Kv(t),Ql)}async function jR(t,e){const n=Q(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.ba()&&e.Da()&&(r=2):(s=new bR,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await n.onListen(i,!0);break;case 1:s.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=ed(o,`Initialization of query '${Zr(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.Sa.push(e),e.va(n.onlineState),s.wa&&e.Fa(s.wa)&&td(n)}async function zR(t,e){const n=Q(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.Sa.indexOf(e);o>=0&&(s.Sa.splice(o,1),s.Sa.length===0?i=e.Da()?0:1:!s.ba()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function BR(t,e){const n=Q(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.Sa)l.Fa(i)&&(r=!0);o.wa=i}}r&&td(n)}function $R(t,e,n){const r=Q(t),i=r.queries.get(e);if(i)for(const s of i.Sa)s.onError(n);r.queries.delete(e)}function td(t){t.Ca.forEach(e=>{e.next()})}var Ph,wg;(wg=Ph||(Ph={})).Ma="default",wg.Cache="cache";class HR{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new zi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=zi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Ph.Cache}}/**
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
 */class kE{constructor(e){this.key=e}}class NE{constructor(e){this.key=e}}class WR{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=ne(),this.mutatedKeys=ne(),this.eu=Qv(e),this.tu=new wi(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new vg,i=n?n.tu:this.tu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,m)=>{const g=i.get(d),R=Xl(this.query,m)?m:null,N=!!g&&this.mutatedKeys.has(g.key),D=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let L=!1;g&&R?g.data.isEqual(R.data)?N!==D&&(r.track({type:3,doc:R}),L=!0):this.su(g,R)||(r.track({type:2,doc:R}),L=!0,(u&&this.eu(R,u)>0||h&&this.eu(R,h)<0)&&(l=!0)):!g&&R?(r.track({type:0,doc:R}),L=!0):g&&!R&&(r.track({type:1,doc:g}),L=!0,(u||h)&&(l=!0)),L&&(R?(o=o.add(R),s=D?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{tu:o,iu:r,Cs:l,mutatedKeys:s}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((d,m)=>function(R,N){const D=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return W(20277,{Rt:L})}};return D(R)-D(N)}(d.type,m.type)||this.eu(d.doc,m.doc)),this.ou(r),i=i??!1;const l=n&&!i?this._u():[],u=this.Xa.size===0&&this.current&&!i?1:0,h=u!==this.Za;return this.Za=u,o.length!==0||h?{snapshot:new zi(this.query,e.tu,s,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new vg,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=ne(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new NE(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new kE(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=ne();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return zi.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const nd="SyncEngine";class qR{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class GR{constructor(e){this.key=e,this.hu=!1}}class KR{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new qr(l=>Kv(l),Ql),this.Iu=new Map,this.Eu=new Set,this.du=new ve(H.comparator),this.Au=new Map,this.Ru=new Wf,this.Vu={},this.mu=new Map,this.fu=ji.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function QR(t,e,n=!0){const r=ME(t);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await DE(r,e,n,!0),i}async function XR(t,e){const n=ME(t);await DE(n,e,!0,!1)}async function DE(t,e,n,r){const i=await dR(t.localStore,Qt(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await YR(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&IE(t.remoteStore,i),l}async function YR(t,e,n,r,i){t.pu=(m,g,R)=>async function(D,L,I,E){let A=L.view.ru(I);A.Cs&&(A=await dg(D.localStore,L.query,!1).then(({documents:_})=>L.view.ru(_,A)));const V=E&&E.targetChanges.get(L.targetId),b=E&&E.targetMismatches.get(L.targetId)!=null,U=L.view.applyChanges(A,D.isPrimaryClient,V,b);return Ig(D,L.targetId,U.au),U.snapshot}(t,m,g,R);const s=await dg(t.localStore,e,!0),o=new WR(e,s.Qs),l=o.ru(s.documents),u=Po.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=o.applyChanges(l,t.isPrimaryClient,u);Ig(t,n,h.au);const d=new qR(e,n,o);return t.Tu.set(e,d),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),h.snapshot}async function JR(t,e,n){const r=Q(t),i=r.Tu.get(e),s=r.Iu.get(i.targetId);if(s.length>1)return r.Iu.set(i.targetId,s.filter(o=>!Ql(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Rh(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Qf(r.remoteStore,i.targetId),kh(r,i.targetId)}).catch(Qi)):(kh(r,i.targetId),await Rh(r.localStore,i.targetId,!0))}async function ZR(t,e){const n=Q(t),r=n.Tu.get(e),i=n.Iu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Qf(n.remoteStore,r.targetId))}async function eC(t,e,n){const r=aC(t);try{const i=await function(o,l){const u=Q(o),h=fe.now(),d=l.reduce((R,N)=>R.add(N.key),ne());let m,g;return u.persistence.runTransaction("Locally write mutations","readwrite",R=>{let N=vn(),D=ne();return u.Ns.getEntries(R,d).next(L=>{N=L,N.forEach((I,E)=>{E.isValidDocument()||(D=D.add(I))})}).next(()=>u.localDocuments.getOverlayedDocuments(R,N)).next(L=>{m=L;const I=[];for(const E of l){const A=fA(E,m.get(E.key).overlayedDocument);A!=null&&I.push(new gr(E.key,A,jv(A.value.mapValue),Xt.exists(!0)))}return u.mutationQueue.addMutationBatch(R,h,I,l)}).next(L=>{g=L;const I=L.applyToLocalDocumentSet(m,D);return u.documentOverlayCache.saveOverlays(R,L.batchId,I)})}).then(()=>({batchId:g.batchId,changes:Yv(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let h=o.Vu[o.currentUser.toKey()];h||(h=new ve(te)),h=h.insert(l,u),o.Vu[o.currentUser.toKey()]=h}(r,i.batchId,n),await No(r,i.changes),await nu(r.remoteStore)}catch(i){const s=ed(i,"Failed to persist write");n.reject(s)}}async function VE(t,e){const n=Q(t);try{const r=await cR(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Au.get(s);o&&(se(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?se(o.hu,14607):i.removedDocuments.size>0&&(se(o.hu,42227),o.hu=!1))}),await No(n,r,e)}catch(r){await Qi(r)}}function Tg(t,e,n){const r=Q(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Tu.forEach((s,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=Q(o);u.onlineState=l;let h=!1;u.queries.forEach((d,m)=>{for(const g of m.Sa)g.va(l)&&(h=!0)}),h&&td(u)}(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function tC(t,e,n){const r=Q(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Au.get(e),s=i&&i.key;if(s){let o=new ve(H.comparator);o=o.insert(s,Ye.newNoDocument(s,K.min()));const l=ne().add(s),u=new Zl(K.min(),new Map,new ve(te),o,l);await VE(r,u),r.du=r.du.remove(s),r.Au.delete(e),rd(r)}else await Rh(r.localStore,e,!1).then(()=>kh(r,e,n)).catch(Qi)}async function nC(t,e){const n=Q(t),r=e.batch.batchId;try{const i=await uR(n.localStore,e);xE(n,r,null),OE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await No(n,i)}catch(i){await Qi(i)}}async function rC(t,e,n){const r=Q(t);try{const i=await function(o,l){const u=Q(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let d;return u.mutationQueue.lookupMutationBatch(h,l).next(m=>(se(m!==null,37113),d=m.keys(),u.mutationQueue.removeMutationBatch(h,m))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d)).next(()=>u.localDocuments.getDocuments(h,d))})}(r.localStore,e);xE(r,e,n),OE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await No(r,i)}catch(i){await Qi(i)}}function OE(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function xE(t,e,n){const r=Q(t);let i=r.Vu[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Vu[r.currentUser.toKey()]=i}}function kh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||LE(t,r)})}function LE(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Qf(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),rd(t))}function Ig(t,e,n){for(const r of n)r instanceof kE?(t.Ru.addReference(r.key,e),iC(t,r)):r instanceof NE?(z(nd,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||LE(t,r.key)):W(19791,{wu:r})}function iC(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(z(nd,"New document in limbo: "+n),t.Eu.add(r),rd(t))}function rd(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new H(he.fromString(e)),r=t.fu.next();t.Au.set(r,new GR(n)),t.du=t.du.insert(n,r),IE(t.remoteStore,new $n(Qt(Gv(n.path)),r,"TargetPurposeLimboResolution",Wl.ce))}}async function No(t,e,n){const r=Q(t),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(h=>{var d;if((h||n)&&r.isPrimaryClient){const m=h?!h.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(h){i.push(h);const m=Gf.As(u.targetId,h);s.push(m)}}))}),await Promise.all(o),r.Pu.H_(i),await async function(u,h){const d=Q(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>O.forEach(h,g=>O.forEach(g.Es,R=>d.persistence.referenceDelegate.addReference(m,g.targetId,R)).next(()=>O.forEach(g.ds,R=>d.persistence.referenceDelegate.removeReference(m,g.targetId,R)))))}catch(m){if(!Xi(m))throw m;z(Kf,"Failed to update sequence numbers: "+m)}for(const m of h){const g=m.targetId;if(!m.fromCache){const R=d.Ms.get(g),N=R.snapshotVersion,D=R.withLastLimboFreeSnapshotVersion(N);d.Ms=d.Ms.insert(g,D)}}}(r.localStore,s))}async function sC(t,e){const n=Q(t);if(!n.currentUser.isEqual(e)){z(nd,"User change. New user:",e.toKey());const r=await vE(n.localStore,e);n.currentUser=e,function(s,o){s.mu.forEach(l=>{l.forEach(u=>{u.reject(new $(x.CANCELLED,o))})}),s.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await No(n,r.Ls)}}function oC(t,e){const n=Q(t),r=n.Au.get(e);if(r&&r.hu)return ne().add(r.key);{let i=ne();const s=n.Iu.get(e);if(!s)return i;for(const o of s){const l=n.Tu.get(o);i=i.unionWith(l.view.nu)}return i}}function ME(t){const e=Q(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=VE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=oC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=tC.bind(null,e),e.Pu.H_=BR.bind(null,e.eventManager),e.Pu.yu=$R.bind(null,e.eventManager),e}function aC(t){const e=Q(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=nC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=rC.bind(null,e),e}class El{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=eu(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return lR(this.persistence,new sR,e.initialUser,this.serializer)}Cu(e){return new _E(qf.mi,this.serializer)}Du(e){return new mR}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}El.provider={build:()=>new El};class lC extends El{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){se(this.persistence.referenceDelegate instanceof _l,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new HA(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?ot.withCacheSize(this.cacheSizeBytes):ot.DEFAULT;return new _E(r=>_l.mi(r,n),this.serializer)}}class Nh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Tg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=sC.bind(null,this.syncEngine),await FR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new UR}()}createDatastore(e){const n=eu(e.databaseInfo.databaseId),r=function(s){return new ER(s)}(e.databaseInfo);return function(s,o,l,u){return new SR(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new RR(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Tg(this.syncEngine,n,0),function(){return gg.v()?new gg:new gR}())}createSyncEngine(e,n){return function(i,s,o,l,u,h,d){const m=new KR(i,s,o,l,u,h);return d&&(m.gu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=Q(i);z(Br,"RemoteStore shutting down."),s.Ea.add(5),await ko(s),s.Aa.shutdown(),s.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Nh.provider={build:()=>new Nh};/**
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
 */class uC{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):_n("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const hr="FirestoreClient";class cC{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Qe.UNAUTHENTICATED,this.clientId=xf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{z(hr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(z(hr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new nr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=ed(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function dc(t,e){t.asyncQueue.verifyOperationInProgress(),z(hr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await vE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Sg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await hC(t);z(hr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>_g(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>_g(e.remoteStore,i)),t._onlineComponents=e}async function hC(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){z(hr,"Using user provided OfflineComponentProvider");try{await dc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===x.FAILED_PRECONDITION||i.code===x.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Li("Error using user provided cache. Falling back to memory cache: "+n),await dc(t,new El)}}else z(hr,"Using default OfflineComponentProvider"),await dc(t,new lC(void 0));return t._offlineComponents}async function FE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(z(hr,"Using user provided OnlineComponentProvider"),await Sg(t,t._uninitializedComponentsProvider._online)):(z(hr,"Using default OnlineComponentProvider"),await Sg(t,new Nh))),t._onlineComponents}function fC(t){return FE(t).then(e=>e.syncEngine)}async function dC(t){const e=await FE(t),n=e.eventManager;return n.onListen=QR.bind(null,e.syncEngine),n.onUnlisten=JR.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=XR.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=ZR.bind(null,e.syncEngine),n}function pC(t,e,n={}){const r=new nr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,h){const d=new uC({next:g=>{d.Nu(),o.enqueueAndForget(()=>zR(s,m)),g.fromCache&&u.source==="server"?h.reject(new $(x.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:g=>h.reject(g)}),m=new HR(l,d,{includeMetadataChanges:!0,qa:!0});return jR(s,m)}(await dC(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function bE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Ag=new Map;/**
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
 */const UE="firestore.googleapis.com",Rg=!0;class Cg{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new $(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=UE,this.ssl=Rg}else this.host=e.host,this.ssl=e.ssl??Rg;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=yE;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<BA)throw new $(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}A1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=bE(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new $(x.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new $(x.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new $(x.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ru{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Cg({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new $(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new $(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Cg(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new m1;switch(r.type){case"firstParty":return new v1(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new $(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Ag.get(n);r&&(z("ComponentProvider","Removing Datastore"),Ag.delete(n),r.terminate())}(this),Promise.resolve()}}function mC(t,e,n,r={}){var h;t=Fi(t,ru);const i=qi(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&(dv(`https://${l}`),pv("Firestore",!0)),s.host!==UE&&s.host!==l&&Li("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:l,ssl:i,emulatorOptions:r};if(!Ur(u,o)&&(t._setSettings(u),r.mockUserToken)){let d,m;if(typeof r.mockUserToken=="string")d=r.mockUserToken,m=Qe.MOCK_USER;else{d=B0(r.mockUserToken,(h=t._app)==null?void 0:h.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new $(x.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new Qe(g)}t._authCredentials=new g1(new Pv(d,m))}}/**
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
 */class iu{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new iu(this.firestore,e,this._query)}}class Me{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new rr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Me(this.firestore,e,this._key)}toJSON(){return{type:Me._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Ro(n,Me._jsonSchema))return new Me(e,r||null,new H(he.fromString(n.referencePath)))}}Me._jsonSchemaVersion="firestore/documentReference/1.0",Me._jsonSchema={type:Ce("string",Me._jsonSchemaVersion),referencePath:Ce("string")};class rr extends iu{constructor(e,n,r){super(e,n,Gv(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Me(this.firestore,null,new H(e))}withConverter(e){return new rr(this.firestore,e,this._path)}}function Pg(t,e,...n){if(t=dt(t),kv("collection","path",e),t instanceof ru){const r=he.fromString(e,...n);return zm(r),new rr(t,null,r)}{if(!(t instanceof Me||t instanceof rr))throw new $(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(he.fromString(e,...n));return zm(r),new rr(t.firestore,null,r)}}function jE(t,e,...n){if(t=dt(t),arguments.length===1&&(e=xf.newId()),kv("doc","path",e),t instanceof ru){const r=he.fromString(e,...n);return jm(r),new Me(t,null,new H(r))}{if(!(t instanceof Me||t instanceof rr))throw new $(x.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(he.fromString(e,...n));return jm(r),new Me(t.firestore,t instanceof rr?t.converter:null,new H(r))}}/**
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
 */const kg="AsyncQueue";class Ng{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new wE(this,"async_queue_retry"),this._c=()=>{const r=fc();r&&z(kg,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=fc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=fc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new nr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Xi(e))throw e;z(kg,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,_n("INTERNAL UNHANDLED ERROR: ",Dg(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=Zf.createAndSchedule(this,e,n,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&W(47125,{Pc:Dg(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Dg(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class su extends ru{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Ng,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ng(e),this._firestoreClient=void 0,await e}}}function gC(t,e){const n=typeof t=="object"?t:_v(),r=typeof t=="string"?t:hl,i=Vf(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=j0("firestore");s&&mC(i,...s)}return i}function zE(t){if(t._terminated)throw new $(x.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||yC(t),t._firestoreClient}function yC(t){var r,i,s;const e=t._freezeSettings(),n=function(l,u,h,d){return new M1(l,u,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,bE(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)}(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((s=e.localCache)!=null&&s._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new cC(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class At{constructor(e){this._byteString=e}static fromBase64String(e){try{return new At(He.fromBase64String(e))}catch(n){throw new $(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new At(He.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:At._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ro(e,At._jsonSchema))return At.fromBase64String(e.bytes)}}At._jsonSchemaVersion="firestore/bytes/1.0",At._jsonSchema={type:Ce("string",At._jsonSchemaVersion),bytes:Ce("string")};/**
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
 */class ou{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class id{constructor(e){this._methodName=e}}/**
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
 */class Jt{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return te(this._lat,e._lat)||te(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Jt._jsonSchemaVersion}}static fromJSON(e){if(Ro(e,Jt._jsonSchema))return new Jt(e.latitude,e.longitude)}}Jt._jsonSchemaVersion="firestore/geoPoint/1.0",Jt._jsonSchema={type:Ce("string",Jt._jsonSchemaVersion),latitude:Ce("number"),longitude:Ce("number")};/**
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
 */class Zt{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Zt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ro(e,Zt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Zt(e.vectorValues);throw new $(x.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Zt._jsonSchemaVersion="firestore/vectorValue/1.0",Zt._jsonSchema={type:Ce("string",Zt._jsonSchemaVersion),vectorValues:Ce("object")};/**
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
 */const _C=/^__.*__$/;class vC{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new gr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Co(e,this.data,n,this.fieldTransforms)}}class BE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new gr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function $E(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw W(40011,{Ac:t})}}class sd{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Rc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new sd({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return wl(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if($E(this.Ac)&&_C.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class EC{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||eu(e)}Cc(e,n,r,i=!1){return new sd({Ac:e,methodName:n,Dc:r,path:ze.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function HE(t){const e=t._freezeSettings(),n=eu(t._databaseId);return new EC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function wC(t,e,n,r,i,s={}){const o=t.Cc(s.merge||s.mergeFields?2:0,e,n,i);od("Data must be an object, but it was:",o,r);const l=WE(r,o);let u,h;if(s.merge)u=new yt(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const m of s.mergeFields){const g=Dh(e,m,n);if(!o.contains(g))throw new $(x.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);GE(d,g)||d.push(g)}u=new yt(d),h=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,h=o.fieldTransforms;return new vC(new lt(l),u,h)}class au extends id{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof au}}function TC(t,e,n,r){const i=t.Cc(1,e,n);od("Data must be an object, but it was:",i,r);const s=[],o=lt.empty();mr(r,(u,h)=>{const d=ad(e,u,n);h=dt(h);const m=i.yc(d);if(h instanceof au)s.push(d);else{const g=lu(h,m);g!=null&&(s.push(d),o.set(d,g))}});const l=new yt(s);return new BE(o,l,i.fieldTransforms)}function IC(t,e,n,r,i,s){const o=t.Cc(1,e,n),l=[Dh(e,r,n)],u=[i];if(s.length%2!=0)throw new $(x.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)l.push(Dh(e,s[g])),u.push(s[g+1]);const h=[],d=lt.empty();for(let g=l.length-1;g>=0;--g)if(!GE(h,l[g])){const R=l[g];let N=u[g];N=dt(N);const D=o.yc(R);if(N instanceof au)h.push(R);else{const L=lu(N,D);L!=null&&(h.push(R),d.set(R,L))}}const m=new yt(h);return new BE(d,m,o.fieldTransforms)}function lu(t,e){if(qE(t=dt(t)))return od("Unsupported field value:",e,t),WE(t,e);if(t instanceof id)return function(r,i){if(!$E(i.Ac))throw i.Sc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=lu(l,i.wc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=dt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return oA(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=fe.fromDate(r);return{timestampValue:yl(i.serializer,s)}}if(r instanceof fe){const s=new fe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:yl(i.serializer,s)}}if(r instanceof Jt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof At)return{bytesValue:cE(i.serializer,r._byteString)};if(r instanceof Me){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Hf(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Zt)return function(o,l){return{mapValue:{fields:{[bv]:{stringValue:Uv},[fl]:{arrayValue:{values:o.toArray().map(h=>{if(typeof h!="number")throw l.Sc("VectorValues must only contain numeric values.");return zf(l.serializer,h)})}}}}}}(r,i);throw i.Sc(`Unsupported field value: ${Lf(r)}`)}(t,e)}function WE(t,e){const n={};return Vv(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):mr(t,(r,i)=>{const s=lu(i,e.mc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function qE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof fe||t instanceof Jt||t instanceof At||t instanceof Me||t instanceof id||t instanceof Zt)}function od(t,e,n){if(!qE(n)||!Nv(n)){const r=Lf(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function Dh(t,e,n){if((e=dt(e))instanceof ou)return e._internalPath;if(typeof e=="string")return ad(t,e);throw wl("Field path arguments must be of type string or ",t,!1,void 0,n)}const SC=new RegExp("[~\\*/\\[\\]]");function ad(t,e,n){if(e.search(SC)>=0)throw wl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ou(...e.split("."))._internalPath}catch{throw wl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function wl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new $(x.INVALID_ARGUMENT,l+t+u)}function GE(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class KE{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Me(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new AC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(QE("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class AC extends KE{data(){return super.data()}}function QE(t,e){return typeof e=="string"?ad(t,e):e instanceof ou?e._internalPath:e._delegate._internalPath}/**
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
 */function RC(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new $(x.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class CC{convertValue(e,n="none"){switch(ur(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ie(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(lr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw W(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return mr(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[fl].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>Ie(o.doubleValue));return new Zt(n)}convertGeoPoint(e){return new Jt(Ie(e.latitude),Ie(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Gl(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(fo(e));default:return null}}convertTimestamp(e){const n=ar(e);return new fe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=he.fromString(e);se(gE(r),9688,{name:e});const i=new po(r.get(1),r.get(3)),s=new H(r.popFirst(5));return i.isEqual(n)||_n(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function PC(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class pa{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ti extends KE{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Oa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(QE("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new $(x.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Ti._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Ti._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ti._jsonSchema={type:Ce("string",Ti._jsonSchemaVersion),bundleSource:Ce("string","DocumentSnapshot"),bundleName:Ce("string"),bundle:Ce("string")};class Oa extends Ti{data(e={}){return super.data(e)}}class Ii{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new pa(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Oa(this._firestore,this._userDataWriter,r.key,r,new pa(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Oa(i._firestore,i._userDataWriter,l.doc.key,l.doc,new pa(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Oa(i._firestore,i._userDataWriter,l.doc.key,l.doc,new pa(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,d=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:kC(l.type),doc:u,oldIndex:h,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new $(x.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ii._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=xf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function kC(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return W(61501,{type:t})}}Ii._jsonSchemaVersion="firestore/querySnapshot/1.0",Ii._jsonSchema={type:Ce("string",Ii._jsonSchemaVersion),bundleSource:Ce("string","QuerySnapshot"),bundleName:Ce("string"),bundle:Ce("string")};class NC extends CC{constructor(e){super(),this.firestore=e}convertBytes(e){return new At(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Me(this.firestore,null,n)}}function DC(t){t=Fi(t,iu);const e=Fi(t.firestore,su),n=zE(e),r=new NC(e);return RC(t._query),pC(n,t._query).then(i=>new Ii(e,r,t,i))}function VC(t,e,n,...r){t=Fi(t,Me);const i=Fi(t.firestore,su),s=HE(i);let o;return o=typeof(e=dt(e))=="string"||e instanceof ou?IC(s,"updateDoc",t._key,e,n,r):TC(s,"updateDoc",t._key,e),XE(i,[o.toMutation(t._key,Xt.exists(!0))])}function OC(t,e){const n=Fi(t.firestore,su),r=jE(t),i=PC(t.converter,e);return XE(n,[wC(HE(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Xt.exists(!1))]).then(()=>r)}function XE(t,e){return function(r,i){const s=new nr;return r.asyncQueue.enqueueAndForget(async()=>eC(await fC(r),i,s)),s.promise}(zE(t),e)}(function(e,n=!0){(function(i){Ki=i})(Gi),xi(new jr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new su(new y1(r.getProvider("auth-internal")),new E1(o,r.getProvider("app-check-internal")),function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new $(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new po(h.options.projectId,d)}(o,i),o);return s={useFetchStreams:n,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),er(Mm,Fm,e),er(Mm,Fm,"esm2020")})();var xC="firebase",LC="12.7.0";/**
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
 */er(xC,LC,"app");function YE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const MC=YE,JE=new So("auth","Firebase",YE());/**
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
 */const Tl=new Nf("@firebase/auth");function FC(t,...e){Tl.logLevel<=ee.WARN&&Tl.warn(`Auth (${Gi}): ${t}`,...e)}function xa(t,...e){Tl.logLevel<=ee.ERROR&&Tl.error(`Auth (${Gi}): ${t}`,...e)}/**
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
 */function En(t,...e){throw ld(t,...e)}function en(t,...e){return ld(t,...e)}function ZE(t,e,n){const r={...MC(),[e]:n};return new So("auth","Firebase",r).create(e,{appName:t.name})}function Or(t){return ZE(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ld(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return JE.create(t,...e)}function q(t,e,...n){if(!t)throw ld(e,...n)}function cn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw xa(e),new Error(e)}function wn(t,e){t||cn(e)}/**
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
 */function Vh(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function bC(){return Vg()==="http:"||Vg()==="https:"}function Vg(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function UC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(bC()||K0()||"connection"in navigator)?navigator.onLine:!0}function jC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Do{constructor(e,n){this.shortDelay=e,this.longDelay=n,wn(n>e,"Short delay should be less than long delay!"),this.isMobile=W0()||Q0()}get(){return UC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ud(t,e){wn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class ew{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;cn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;cn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;cn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const zC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const BC=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],$C=new Do(3e4,6e4);function cd(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Ji(t,e,n,r,i={}){return tw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Ao({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:u,...s};return G0()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&qi(t.emulatorConfig.host)&&(h.credentials="include"),ew.fetch()(await nw(t,t.config.apiHost,n,l),h)})}async function tw(t,e,n){t._canInitEmulator=!1;const r={...zC,...e};try{const i=new WC(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ma(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ma(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw ma(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw ma(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw ZE(t,d,h);En(t,d)}}catch(i){if(i instanceof In)throw i;En(t,"network-request-failed",{message:String(i)})}}async function HC(t,e,n,r,i={}){const s=await Ji(t,e,n,r,i);return"mfaPendingCredential"in s&&En(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function nw(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?ud(t.config,i):`${t.config.apiScheme}://${i}`;return BC.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}class WC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(en(this.auth,"network-request-failed")),$C.get())})}}function ma(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=en(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function qC(t,e){return Ji(t,"POST","/v1/accounts:delete",e)}async function Il(t,e){return Ji(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function qs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function GC(t,e=!1){const n=dt(t),r=await n.getIdToken(e),i=hd(r);q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:qs(pc(i.auth_time)),issuedAtTime:qs(pc(i.iat)),expirationTime:qs(pc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function pc(t){return Number(t)*1e3}function hd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return xa("JWT malformed, contained fewer than 3 sections"),null;try{const i=uv(n);return i?JSON.parse(i):(xa("Failed to decode base64 JWT payload"),null)}catch(i){return xa("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Og(t){const e=hd(t);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function _o(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof In&&KC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function KC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class QC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Oh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=qs(this.lastLoginAt),this.creationTime=qs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Sl(t){var m;const e=t.auth,n=await t.getIdToken(),r=await _o(t,Il(e,{idToken:n}));q(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(m=i.providerUserInfo)!=null&&m.length?rw(i.providerUserInfo):[],o=YC(t.providerData,s),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),h=l?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Oh(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,d)}async function XC(t){const e=dt(t);await Sl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function YC(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function rw(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function JC(t,e){const n=await tw(t,{},async()=>{const r=Ao({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await nw(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&qi(t.emulatorConfig.host)&&(u.credentials="include"),ew.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ZC(t,e){return Ji(t,"POST","/v2/accounts:revokeToken",cd(t,e))}/**
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
 */class Si{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Og(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){q(e.length!==0,"internal-error");const n=Og(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await JC(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Si;return r&&(q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Si,this.toJSON())}_performRefresh(){return cn("not implemented")}}/**
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
 */function Vn(t,e){q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Lt{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new QC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Oh(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await _o(this,this.stsTokenManager.getToken(this.auth,e));return q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return GC(this,e)}reload(){return XC(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Lt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Sl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Wt(this.auth.app))return Promise.reject(Or(this.auth));const e=await this.getIdToken();return await _o(this,qC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,h=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:m,emailVerified:g,isAnonymous:R,providerData:N,stsTokenManager:D}=n;q(m&&D,e,"internal-error");const L=Si.fromJSON(this.name,D);q(typeof m=="string",e,"internal-error"),Vn(r,e.name),Vn(i,e.name),q(typeof g=="boolean",e,"internal-error"),q(typeof R=="boolean",e,"internal-error"),Vn(s,e.name),Vn(o,e.name),Vn(l,e.name),Vn(u,e.name),Vn(h,e.name),Vn(d,e.name);const I=new Lt({uid:m,auth:e,email:i,emailVerified:g,displayName:r,isAnonymous:R,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:L,createdAt:h,lastLoginAt:d});return N&&Array.isArray(N)&&(I.providerData=N.map(E=>({...E}))),u&&(I._redirectEventId=u),I}static async _fromIdTokenResponse(e,n,r=!1){const i=new Si;i.updateFromServerResponse(n);const s=new Lt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Sl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];q(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?rw(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Si;l.updateFromIdToken(r);const u=new Lt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Oh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
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
 */const xg=new Map;function hn(t){wn(t instanceof Function,"Expected a class definition");let e=xg.get(t);return e?(wn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,xg.set(t,e),e)}/**
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
 */class iw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}iw.type="NONE";const Lg=iw;/**
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
 */function La(t,e,n){return`firebase:${t}:${e}:${n}`}class Ai{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=La(this.userKey,i.apiKey,s),this.fullPersistenceKey=La("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Il(this.auth,{idToken:e}).catch(()=>{});return n?Lt._fromGetAccountInfoResponse(this.auth,n,e):null}return Lt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ai(hn(Lg),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||hn(Lg);const o=La(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const d=await h._get(o);if(d){let m;if(typeof d=="string"){const g=await Il(e,{idToken:d}).catch(()=>{});if(!g)break;m=await Lt._fromGetAccountInfoResponse(e,g,d)}else m=Lt._fromJSON(e,d);h!==s&&(l=m),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Ai(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new Ai(s,e,r))}}/**
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
 */function Mg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(lw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(sw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(cw(e))return"Blackberry";if(hw(e))return"Webos";if(ow(e))return"Safari";if((e.includes("chrome/")||aw(e))&&!e.includes("edge/"))return"Chrome";if(uw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function sw(t=Ze()){return/firefox\//i.test(t)}function ow(t=Ze()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function aw(t=Ze()){return/crios\//i.test(t)}function lw(t=Ze()){return/iemobile/i.test(t)}function uw(t=Ze()){return/android/i.test(t)}function cw(t=Ze()){return/blackberry/i.test(t)}function hw(t=Ze()){return/webos/i.test(t)}function fd(t=Ze()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function eP(t=Ze()){var e;return fd(t)&&!!((e=window.navigator)!=null&&e.standalone)}function tP(){return X0()&&document.documentMode===10}function fw(t=Ze()){return fd(t)||uw(t)||hw(t)||cw(t)||/windows phone/i.test(t)||lw(t)}/**
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
 */function dw(t,e=[]){let n;switch(t){case"Browser":n=Mg(Ze());break;case"Worker":n=`${Mg(Ze())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Gi}/${r}`}/**
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
 */class nP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function rP(t,e={}){return Ji(t,"GET","/v2/passwordPolicy",cd(t,e))}/**
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
 */const iP=6;class sP{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??iP,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class oP{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Fg(this),this.idTokenSubscription=new Fg(this),this.beforeStateQueue=new nP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=JE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=hn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Ai.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Il(this,{idToken:e}),r=await Lt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(Wt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Sl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=jC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Wt(this.app))return Promise.reject(Or(this));const n=e?dt(e):null;return n&&q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Wt(this.app)?Promise.reject(Or(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Wt(this.app)?Promise.reject(Or(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(hn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await rP(this),n=new sP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new So("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await ZC(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&hn(e)||this._popupRedirectResolver;q(n,this,"argument-error"),this.redirectPersistenceManager=await Ai.create(this,[hn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(q(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=dw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Wt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&FC(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function dd(t){return dt(t)}class Fg{constructor(e){this.auth=e,this.observer=null,this.addObserver=iS(n=>this.observer=n)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let pd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function aP(t){pd=t}function lP(t){return pd.loadJS(t)}function uP(){return pd.gapiScript}function cP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function hP(t,e){const n=Vf(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ur(s,e??{}))return i;En(i,"already-initialized")}return n.initialize({options:e})}function fP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(hn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function dP(t,e,n){const r=dd(t);q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=pw(e),{host:o,port:l}=pP(e),u=l===null?"":`:${l}`,h={url:`${s}//${o}${u}/`},d=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){q(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),q(Ur(h,r.config.emulator)&&Ur(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,qi(o)?(dv(`${s}//${o}${u}`),pv("Auth",!0)):mP()}function pw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function pP(t){const e=pw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:bg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:bg(o)}}}function bg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function mP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class mw{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return cn("not implemented")}_getIdTokenResponse(e){return cn("not implemented")}_linkToIdToken(e,n){return cn("not implemented")}_getReauthenticationResolver(e){return cn("not implemented")}}/**
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
 */async function Ri(t,e){return HC(t,"POST","/v1/accounts:signInWithIdp",cd(t,e))}/**
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
 */const gP="http://localhost";class $r extends mw{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new $r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):En("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new $r(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ri(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ri(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ri(e,n)}buildRequest(){const e={requestUri:gP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ao(n)}return e}}/**
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
 */class gw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Vo extends gw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Fn extends Vo{constructor(){super("facebook.com")}static credential(e){return $r._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fn.credential(e.oauthAccessToken)}catch{return null}}}Fn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Fn.PROVIDER_ID="facebook.com";/**
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
 */class bn extends Vo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return $r._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return bn.credential(n,r)}catch{return null}}}bn.GOOGLE_SIGN_IN_METHOD="google.com";bn.PROVIDER_ID="google.com";/**
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
 */class Un extends Vo{constructor(){super("github.com")}static credential(e){return $r._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Un.credential(e.oauthAccessToken)}catch{return null}}}Un.GITHUB_SIGN_IN_METHOD="github.com";Un.PROVIDER_ID="github.com";/**
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
 */class jn extends Vo{constructor(){super("twitter.com")}static credential(e,n){return $r._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return jn.credential(n,r)}catch{return null}}}jn.TWITTER_SIGN_IN_METHOD="twitter.com";jn.PROVIDER_ID="twitter.com";/**
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
 */class Bi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Lt._fromIdTokenResponse(e,r,i),o=Ug(r);return new Bi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Ug(r);return new Bi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Ug(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Al extends In{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Al.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Al(e,n,r,i)}}function yw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Al._fromErrorAndOperation(t,s,e,r):s})}async function yP(t,e,n=!1){const r=await _o(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Bi._forOperation(t,"link",r)}/**
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
 */async function _P(t,e,n=!1){const{auth:r}=t;if(Wt(r.app))return Promise.reject(Or(r));const i="reauthenticate";try{const s=await _o(t,yw(r,i,e,t),n);q(s.idToken,r,"internal-error");const o=hd(s.idToken);q(o,r,"internal-error");const{sub:l}=o;return q(t.uid===l,r,"user-mismatch"),Bi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&En(r,"user-mismatch"),s}}/**
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
 */async function vP(t,e,n=!1){if(Wt(t.app))return Promise.reject(Or(t));const r="signIn",i=await yw(t,r,e),s=await Bi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function EP(t,e,n,r){return dt(t).onIdTokenChanged(e,n,r)}function wP(t,e,n){return dt(t).beforeAuthStateChanged(e,n)}const Rl="__sak";/**
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
 */class _w{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Rl,"1"),this.storage.removeItem(Rl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const TP=1e3,IP=10;class vw extends _w{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=fw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);tP()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,IP):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},TP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}vw.type="LOCAL";const SP=vw;/**
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
 */class Ew extends _w{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ew.type="SESSION";const ww=Ew;/**
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
 */function AP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class uu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new uu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async h=>h(n.origin,s)),u=await AP(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}uu.receivers=[];/**
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
 */function md(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class RP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const h=md("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const g=m;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function tn(){return window}function CP(t){tn().location.href=t}/**
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
 */function Tw(){return typeof tn().WorkerGlobalScope<"u"&&typeof tn().importScripts=="function"}async function PP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function kP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function NP(){return Tw()?self:null}/**
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
 */const Iw="firebaseLocalStorageDb",DP=1,Cl="firebaseLocalStorage",Sw="fbase_key";class Oo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function cu(t,e){return t.transaction([Cl],e?"readwrite":"readonly").objectStore(Cl)}function VP(){const t=indexedDB.deleteDatabase(Iw);return new Oo(t).toPromise()}function xh(){const t=indexedDB.open(Iw,DP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Cl,{keyPath:Sw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Cl)?e(r):(r.close(),await VP(),e(await xh()))})})}async function jg(t,e,n){const r=cu(t,!0).put({[Sw]:e,value:n});return new Oo(r).toPromise()}async function OP(t,e){const n=cu(t,!1).get(e),r=await new Oo(n).toPromise();return r===void 0?null:r.value}function zg(t,e){const n=cu(t,!0).delete(e);return new Oo(n).toPromise()}const xP=800,LP=3;class Aw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>LP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Tw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=uu._getInstance(NP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await PP(),!this.activeServiceWorker)return;this.sender=new RP(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||kP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await xh();return await jg(e,Rl,"1"),await zg(e,Rl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>jg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>OP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>zg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=cu(i,!1).getAll();return new Oo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),xP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Aw.type="LOCAL";const MP=Aw;new Do(3e4,6e4);/**
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
 */function FP(t,e){return e?hn(e):(q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class gd extends mw{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ri(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ri(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ri(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function bP(t){return vP(t.auth,new gd(t),t.bypassAuthState)}function UP(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),_P(n,new gd(t),t.bypassAuthState)}async function jP(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),yP(n,new gd(t),t.bypassAuthState)}/**
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
 */class Rw{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return bP;case"linkViaPopup":case"linkViaRedirect":return jP;case"reauthViaPopup":case"reauthViaRedirect":return UP;default:En(this.auth,"internal-error")}}resolve(e){wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const zP=new Do(2e3,1e4);class pi extends Rw{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,pi.currentPopupAction&&pi.currentPopupAction.cancel(),pi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){wn(this.filter.length===1,"Popup operations only handle one event");const e=md();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(en(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(en(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,pi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(en(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,zP.get())};e()}}pi.currentPopupAction=null;/**
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
 */const BP="pendingRedirect",Ma=new Map;class $P extends Rw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ma.get(this.auth._key());if(!e){try{const r=await HP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ma.set(this.auth._key(),e)}return this.bypassAuthState||Ma.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function HP(t,e){const n=GP(e),r=qP(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function WP(t,e){Ma.set(t._key(),e)}function qP(t){return hn(t._redirectPersistence)}function GP(t){return La(BP,t.config.apiKey,t.name)}async function KP(t,e,n=!1){if(Wt(t.app))return Promise.reject(Or(t));const r=dd(t),i=FP(r,e),o=await new $P(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const QP=10*60*1e3;class XP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!YP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Cw(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(en(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=QP&&this.cachedEventUids.clear(),this.cachedEventUids.has(Bg(e))}saveEventToCache(e){this.cachedEventUids.add(Bg(e)),this.lastProcessedEventTime=Date.now()}}function Bg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Cw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function YP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Cw(t);default:return!1}}/**
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
 */async function JP(t,e={}){return Ji(t,"GET","/v1/projects",e)}/**
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
 */const ZP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ek=/^https?/;async function tk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await JP(t);for(const n of e)try{if(nk(n))return}catch{}En(t,"unauthorized-domain")}function nk(t){const e=Vh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!ek.test(n))return!1;if(ZP.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const rk=new Do(3e4,6e4);function $g(){const t=tn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ik(t){return new Promise((e,n)=>{var i,s,o;function r(){$g(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{$g(),n(en(t,"network-request-failed"))},timeout:rk.get()})}if((s=(i=tn().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=tn().gapi)!=null&&o.load)r();else{const l=cP("iframefcb");return tn()[l]=()=>{gapi.load?r():n(en(t,"network-request-failed"))},lP(`${uP()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Fa=null,e})}let Fa=null;function sk(t){return Fa=Fa||ik(t),Fa}/**
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
 */const ok=new Do(5e3,15e3),ak="__/auth/iframe",lk="emulator/auth/iframe",uk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ck=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function hk(t){const e=t.config;q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ud(e,lk):`https://${t.config.authDomain}/${ak}`,r={apiKey:e.apiKey,appName:t.name,v:Gi},i=ck.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ao(r).slice(1)}`}async function fk(t){const e=await sk(t),n=tn().gapi;return q(n,t,"internal-error"),e.open({where:document.body,url:hk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:uk,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=en(t,"network-request-failed"),l=tn().setTimeout(()=>{s(o)},ok.get());function u(){tn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const dk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},pk=500,mk=600,gk="_blank",yk="http://localhost";class Hg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function _k(t,e,n,r=pk,i=mk){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...dk,width:r.toString(),height:i.toString(),top:s,left:o},h=Ze().toLowerCase();n&&(l=aw(h)?gk:n),sw(h)&&(e=e||yk,u.scrollbars="yes");const d=Object.entries(u).reduce((g,[R,N])=>`${g}${R}=${N},`,"");if(eP(h)&&l!=="_self")return vk(e||"",l),new Hg(null);const m=window.open(e||"",l,d);q(m,t,"popup-blocked");try{m.focus()}catch{}return new Hg(m)}function vk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Ek="__/auth/handler",wk="emulator/auth/handler",Tk=encodeURIComponent("fac");async function Wg(t,e,n,r,i,s){q(t.config.authDomain,t,"auth-domain-config-required"),q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Gi,eventId:i};if(e instanceof gw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",rS(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,m]of Object.entries({}))o[d]=m}if(e instanceof Vo){const d=e.getScopes().filter(m=>m!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await t._getAppCheckToken(),h=u?`#${Tk}=${encodeURIComponent(u)}`:"";return`${Ik(t)}?${Ao(l).slice(1)}${h}`}function Ik({config:t}){return t.emulator?ud(t,wk):`https://${t.authDomain}/${Ek}`}/**
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
 */const mc="webStorageSupport";class Sk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ww,this._completeRedirectFn=KP,this._overrideRedirectResult=WP}async _openPopup(e,n,r,i){var o;wn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Wg(e,n,r,Vh(),i);return _k(e,s,md())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Wg(e,n,r,Vh(),i);return CP(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(wn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await fk(e),r=new XP(e);return n.register("authEvent",i=>(q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(mc,{type:mc},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[mc];s!==void 0&&n(!!s),En(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=tk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return fw()||ow()||fd()}}const Ak=Sk;var qg="@firebase/auth",Gg="1.12.0";/**
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
 */class Rk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Ck(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Pk(t){xi(new jr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:dw(t)},h=new oP(r,i,s,u);return fP(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),xi(new jr("auth-internal",e=>{const n=dd(e.getProvider("auth").getImmediate());return(r=>new Rk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),er(qg,Gg,Ck(t)),er(qg,Gg,"esm2020")}/**
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
 */const kk=5*60,Nk=fv("authIdTokenMaxAge")||kk;let Kg=null;const Dk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Nk)return;const i=n==null?void 0:n.token;Kg!==i&&(Kg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Vk(t=_v()){const e=Vf(t,"auth");if(e.isInitialized())return e.getImmediate();const n=hP(t,{popupRedirectResolver:Ak,persistence:[MP,SP,ww]}),r=fv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=Dk(s.toString());wP(n,o,()=>o(n.currentUser)),EP(n,l=>o(l))}}const i=cv("auth");return i&&dP(n,`http://${i}`),n}function Ok(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}aP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=en("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Ok().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Pk("Browser");const xk={apiKey:"SUA_API_KEY",authDomain:"SEU_DOMINIO",projectId:"SEU_PROJECT_ID",storageBucket:"SEU_BUCKET",messagingSenderId:"SEU_ID",appId:"SEU_APP_ID"},Pw=yv(xk);Vk(Pw);const gc=gC(Pw);function Lk(){const[t,e]=qt.useState([]);qt.useEffect(()=>{async function i(){const s=await DC(Pg(gc,"agenda"));e(s.docs.map(o=>({id:o.id,...o.data()})))}i()},[]);async function n(i){const s=await OC(Pg(gc,"agenda"),i);e([...t,{...i,id:s.id}])}async function r(i,s){await VC(jE(gc,"agenda",i),{concluido:s}),e(t.map(o=>o.id===i?{...o,concluido:s}:o))}return{eventos:t,add:n,toggle:r}}function Mk({onSave:t,onClose:e}){function n(r){r.preventDefault();const i=Object.fromEntries(new FormData(r.target));t({...i,concluido:!1}),e()}return X.jsx("div",{className:"modal",children:X.jsxs("form",{onSubmit:n,children:[X.jsx("h3",{children:"Novo Evento"}),X.jsxs("select",{name:"dia",children:[X.jsx("option",{children:"Seg"}),X.jsx("option",{children:"Ter"}),X.jsx("option",{children:"Qua"}),X.jsx("option",{children:"Qui"}),X.jsx("option",{children:"Sex"}),X.jsx("option",{children:"Sáb"}),X.jsx("option",{children:"Dom"})]}),X.jsx("input",{name:"titulo",required:!0}),X.jsx("input",{type:"time",name:"horaInicio",required:!0}),X.jsx("input",{type:"time",name:"horaFim",required:!0}),X.jsxs("select",{name:"tipo",children:[X.jsx("option",{value:"study",children:"Estudo"}),X.jsx("option",{value:"work",children:"Trabalho"}),X.jsx("option",{value:"gym",children:"Academia"}),X.jsx("option",{value:"volei",children:"Vôlei"})]}),X.jsx("button",{children:"Salvar"}),X.jsx("button",{type:"button",onClick:e,children:"Cancelar"})]})})}const Fk=["Seg","Ter","Qua","Qui","Sex","Sáb","Dom"];function bk(){const{eventos:t,add:e,toggle:n}=Lk(),[r,i]=qt.useState(!1);return X.jsxs("section",{className:"agenda",children:[X.jsx("h2",{children:"🗓️ Agenda Semanal"}),X.jsx("button",{onClick:()=>i(!0),children:"➕ Novo Evento"}),X.jsx("div",{className:"grid",children:Fk.map(s=>X.jsxs("div",{className:"day-card",children:[X.jsx("h3",{children:s}),t.filter(o=>o.dia===s).map(o=>X.jsxs("div",{className:`event ${o.tipo}`,children:[X.jsx("span",{children:o.horaInicio}),X.jsx("p",{children:o.titulo}),X.jsx("input",{type:"checkbox",checked:o.concluido,onChange:()=>n(o.id,!o.concluido)})]},o.id))]},s))}),r&&X.jsx(Mk,{onSave:e,onClose:()=>i(!1)})]})}async function Uk(){"serviceWorker"in navigator&&(await navigator.serviceWorker.register("/sw.js"),Notification.permission!=="granted"&&await Notification.requestPermission())}function jk(){const[t,e]=qt.useState(!0),[n,r]=qt.useState(localStorage.getItem("meta")||"");return qt.useEffect(()=>{Uk()},[]),qt.useEffect(()=>{localStorage.setItem("meta",n)},[n]),X.jsxs("div",{className:t?"dark":"light",children:[X.jsxs("header",{children:[X.jsx("h1",{children:"📅 Minha Rotina"}),X.jsx("button",{onClick:()=>e(!t),children:"🌙 / ☀️"})]}),X.jsxs("section",{children:[X.jsx("h2",{children:"🎯 Meta da Semana"}),X.jsx("input",{value:n,onChange:i=>r(i.target.value)})]}),X.jsx(bk,{})]})}yc.createRoot(document.getElementById("root")).render(X.jsx(ET.StrictMode,{children:X.jsx(jk,{})}));
