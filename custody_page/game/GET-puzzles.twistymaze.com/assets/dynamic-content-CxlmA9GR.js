const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/about-dialog-CIXj3aPq.js","assets/unsafe-html-UuEEukLm.js","assets/command-link-R2N3y73h.js","assets/sentry-Coq7X-ar.js","assets/help-viewer-DqY79WIK.js","assets/settings-dialog-DFWl7yVy.js","assets/audio-CDUuflQX.js"])))=>i.map(i=>d[i]);
import{w as Sc,t as Cc,i as Ec,a as Ac,m as $c,b as Pc,s as di,c as Yi,l as zc,d as Oc,e as en,f as Ic}from"./sentry-Coq7X-ar.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e._sentryModuleMetadata=e._sentryModuleMetadata||{},e._sentryModuleMetadata[new e.Error().stack]=(function(t){for(var n=1;n<arguments.length;n++){var i=arguments[n];if(i!=null)for(var a in i)i.hasOwnProperty(a)&&(t[a]=i[a])}return t})({},e._sentryModuleMetadata[new e.Error().stack],{"_sentryBundlerPluginAppKey:code-from-puzzles-web":!0})}catch{}})();(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function n(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function i(a){if(a.ep)return;a.ep=!0;const u=n(a);fetch(a.href,u)}})();const Tc=[/RuntimeError:\s*Aborted\s*\(NetworkError.*Build with -sASSERTIONS/i,"Network error: Response body loading was aborted",/^RangeError: Maximum call stack size exceeded.*at \?.*undefined:/];function Mc(){{const e=[Sc()];e.push(Cc({filterKeys:["code-from-puzzles-web"],behaviour:"apply-tag-if-contains-third-party-frames"})),Ec({dsn:"https://f8e5ecb14ea07c87bfba498dd2fee6cd@o4509771119132672.ingest.us.sentry.io/4509771124703232",sendDefaultPii:!1,release:"4b75ac1831224dde699cfa2598bbcc93c2a00881",transport:$c(Pc),integrations:e,ignoreErrors:Tc,beforeBreadcrumb(t,n){try{if(t.type==="http"&&typeof t.data?.url=="string"&&t.data.url.startsWith("data:"))return null;t.category==="ui.click"&&n?.event instanceof Event&&(t.message=Dc(n.event))}catch{}return t},beforeSend(t,n){const i=/\/(assets|src\/assets\/puzzles)\/[^/]+\.wasm/;return t.tags?.third_party_code&&t.exception?.values?.some(a=>a.stacktrace?.frames?.some(u=>u.filename&&i.test(u.filename)))&&delete t.tags.third_party_code,t.tags?.third_party_code&&n?.originalException instanceof Error&&(n.originalException.__third_party_code__=!0),t}}),Ac((t,n)=>{try{const i=document.documentElement,a=getComputedStyle(i),u=window.visualViewport;t.contexts={...t.contexts,Display:{"Window Size":`${window.innerWidth}x${window.innerHeight}`,"Document Size":`${i.clientWidth}x${i.clientHeight}`,"Visual Viewport":u?`${u.width}x${u.height}`:"n/a",DPR:window.devicePixelRatio,"Dark Mode":window.matchMedia("(prefers-color-scheme: dark)").matches,"Touch Points":navigator.maxTouchPoints,"Root Font Size":a.fontSize,Direction:a.direction}}}catch{}return t})}}function Rc(e,t=!1){const n=[e.tagName.toLowerCase()];e.id&&n.push(`#${e.id}`),t||n.push(...Array.from(e.classList).map(i=>`.${i}`));for(const i of["data-command","href","label"]){const a=e.getAttribute(i);a&&n.push(`[${i}="${a}"]`)}return n.join("")}const Lc=new Set(["button","wa-button","wa-checkbox","wa-dropdown-item","wa-option","wa-radio","wa-slider"].map(e=>e.toUpperCase()));function Dc(e){const t=e.composedPath().filter(i=>i instanceof Element).reverse(),n=[];for(const i of t){if(i.tagName==="SLOT")continue;const a=Rc(i,i.tagName==="WA-BUTTON");if(Lc.has(i.tagName)){const u=i.textContent.trim().replace(/\s+/g," ")||i.querySelector("wa-icon[label]")?.getAttribute("label");if(u){n.push(`${a}{${u.slice(0,20)}}`);break}}n.push(a)}return n.reverse().join(" < ")}const Vn=globalThis,Xi=Vn.ShadowRoot&&(Vn.ShadyCSS===void 0||Vn.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Qi=Symbol(),Zs=new WeakMap;let Ya=class{constructor(t,n,i){if(this._$cssResult$=!0,i!==Qi)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(Xi&&t===void 0){const i=n!==void 0&&n.length===1;i&&(t=Zs.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Zs.set(n,t))}return t}toString(){return this.cssText}};const Zi=e=>new Ya(typeof e=="string"?e:e+"",void 0,Qi),Se=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((i,a,u)=>i+(h=>{if(h._$cssResult$===!0)return h.cssText;if(typeof h=="number")return h;throw Error("Value passed to 'css' function must be a 'css' function result: "+h+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+e[u+1],e[0]);return new Ya(n,e,Qi)},Bc=(e,t)=>{if(Xi)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const i=document.createElement("style"),a=Vn.litNonce;a!==void 0&&i.setAttribute("nonce",a),i.textContent=n.cssText,e.appendChild(i)}},Js=Xi?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const i of t.cssRules)n+=i.cssText;return Zi(n)})(e):e;const{is:jc,defineProperty:Nc,getOwnPropertyDescriptor:qc,getOwnPropertyNames:Fc,getOwnPropertySymbols:Uc,getPrototypeOf:Kc}=Object,ho=globalThis,ea=ho.trustedTypes,Vc=ea?ea.emptyScript:"",Wc=ho.reactiveElementPolyfillSupport,tn=(e,t)=>e,Zn={toAttribute(e,t){switch(t){case Boolean:e=e?Vc:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},Ji=(e,t)=>!jc(e,t),ta={attribute:!0,type:String,converter:Zn,reflect:!1,useDefault:!1,hasChanged:Ji};Symbol.metadata??=Symbol("metadata"),ho.litPropertyMetadata??=new WeakMap;let ar=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=ta){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(t,n),!n.noAccessor){const i=Symbol(),a=this.getPropertyDescriptor(t,i,n);a!==void 0&&Nc(this.prototype,t,a)}}static getPropertyDescriptor(t,n,i){const{get:a,set:u}=qc(this.prototype,t)??{get(){return this[n]},set(h){this[n]=h}};return{get:a,set(h){const p=a?.call(this);u?.call(this,h),this.requestUpdate(t,p,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ta}static _$Ei(){if(this.hasOwnProperty(tn("elementProperties")))return;const t=Kc(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(tn("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(tn("properties"))){const n=this.properties,i=[...Fc(n),...Uc(n)];for(const a of i)this.createProperty(a,n[a])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[i,a]of n)this.elementProperties.set(i,a)}this._$Eh=new Map;for(const[n,i]of this.elementProperties){const a=this._$Eu(n,i);a!==void 0&&this._$Eh.set(a,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const a of i)n.unshift(Js(a))}else t!==void 0&&n.push(Js(t));return n}static _$Eu(t,n){const i=n.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const i of n.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Bc(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,n,i){this._$AK(t,i)}_$ET(t,n){const i=this.constructor.elementProperties.get(t),a=this.constructor._$Eu(t,i);if(a!==void 0&&i.reflect===!0){const u=(i.converter?.toAttribute!==void 0?i.converter:Zn).toAttribute(n,i.type);this._$Em=t,u==null?this.removeAttribute(a):this.setAttribute(a,u),this._$Em=null}}_$AK(t,n){const i=this.constructor,a=i._$Eh.get(t);if(a!==void 0&&this._$Em!==a){const u=i.getPropertyOptions(a),h=typeof u.converter=="function"?{fromAttribute:u.converter}:u.converter?.fromAttribute!==void 0?u.converter:Zn;this._$Em=a;const p=h.fromAttribute(n,u.type);this[a]=p??this._$Ej?.get(a)??p,this._$Em=null}}requestUpdate(t,n,i,a=!1,u){if(t!==void 0){const h=this.constructor;if(a===!1&&(u=this[t]),i??=h.getPropertyOptions(t),!((i.hasChanged??Ji)(u,n)||i.useDefault&&i.reflect&&u===this._$Ej?.get(t)&&!this.hasAttribute(h._$Eu(t,i))))return;this.C(t,n,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,n,{useDefault:i,reflect:a,wrapped:u},h){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,h??n??this[t]),u!==!0||h!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(n=void 0),this._$AL.set(t,n)),a===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[a,u]of this._$Ep)this[a]=u;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[a,u]of i){const{wrapped:h}=u,p=this[a];h!==!0||this._$AL.has(a)||p===void 0||this.C(a,void 0,u,p)}}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(n)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(n)}willUpdate(t){}_$AE(t){this._$EO?.forEach(n=>n.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(n=>this._$ET(n,this[n])),this._$EM()}updated(t){}firstUpdated(t){}};ar.elementStyles=[],ar.shadowRootOptions={mode:"open"},ar[tn("elementProperties")]=new Map,ar[tn("finalized")]=new Map,Wc?.({ReactiveElement:ar}),(ho.reactiveElementVersions??=[]).push("2.1.2");const es=globalThis,ra=e=>e,Jn=es.trustedTypes,na=Jn?Jn.createPolicy("lit-html",{createHTML:e=>e}):void 0,Xa="$lit$",Ft=`lit$${Math.random().toFixed(9).slice(2)}$`,Qa="?"+Ft,Hc=`<${Qa}>`,ur=document,on=()=>ur.createComment(""),sn=e=>e===null||typeof e!="object"&&typeof e!="function",ts=Array.isArray,Gc=e=>ts(e)||typeof e?.[Symbol.iterator]=="function",hi=`[ 	
\f\r]`,Gr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,oa=/-->/g,ia=/>/g,ir=RegExp(`>|${hi}(?:([^\\s"'>=/]+)(${hi}*=${hi}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),sa=/'/g,aa=/"/g,Za=/^(?:script|style|textarea|title)$/i,Yc=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),pe=Yc(1),dt=Symbol.for("lit-noChange"),ye=Symbol.for("lit-nothing"),la=new WeakMap,cr=ur.createTreeWalker(ur,129);function Ja(e,t){if(!ts(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return na!==void 0?na.createHTML(t):t}const Xc=(e,t)=>{const n=e.length-1,i=[];let a,u=t===2?"<svg>":t===3?"<math>":"",h=Gr;for(let p=0;p<n;p++){const g=e[p];let k,E,$=-1,R=0;for(;R<g.length&&(h.lastIndex=R,E=h.exec(g),E!==null);)R=h.lastIndex,h===Gr?E[1]==="!--"?h=oa:E[1]!==void 0?h=ia:E[2]!==void 0?(Za.test(E[2])&&(a=RegExp("</"+E[2],"g")),h=ir):E[3]!==void 0&&(h=ir):h===ir?E[0]===">"?(h=a??Gr,$=-1):E[1]===void 0?$=-2:($=h.lastIndex-E[2].length,k=E[1],h=E[3]===void 0?ir:E[3]==='"'?aa:sa):h===aa||h===sa?h=ir:h===oa||h===ia?h=Gr:(h=ir,a=void 0);const D=h===ir&&e[p+1].startsWith("/>")?" ":"";u+=h===Gr?g+Hc:$>=0?(i.push(k),g.slice(0,$)+Xa+g.slice($)+Ft+D):g+Ft+($===-2?p:D)}return[Ja(e,u+(e[n]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class an{constructor({strings:t,_$litType$:n},i){let a;this.parts=[];let u=0,h=0;const p=t.length-1,g=this.parts,[k,E]=Xc(t,n);if(this.el=an.createElement(k,i),cr.currentNode=this.el.content,n===2||n===3){const $=this.el.content.firstChild;$.replaceWith(...$.childNodes)}for(;(a=cr.nextNode())!==null&&g.length<p;){if(a.nodeType===1){if(a.hasAttributes())for(const $ of a.getAttributeNames())if($.endsWith(Xa)){const R=E[h++],D=a.getAttribute($).split(Ft),j=/([.?@])?(.*)/.exec(R);g.push({type:1,index:u,name:j[2],strings:D,ctor:j[1]==="."?Zc:j[1]==="?"?Jc:j[1]==="@"?eu:po}),a.removeAttribute($)}else $.startsWith(Ft)&&(g.push({type:6,index:u}),a.removeAttribute($));if(Za.test(a.tagName)){const $=a.textContent.split(Ft),R=$.length-1;if(R>0){a.textContent=Jn?Jn.emptyScript:"";for(let D=0;D<R;D++)a.append($[D],on()),cr.nextNode(),g.push({type:2,index:++u});a.append($[R],on())}}}else if(a.nodeType===8)if(a.data===Qa)g.push({type:2,index:u});else{let $=-1;for(;($=a.data.indexOf(Ft,$+1))!==-1;)g.push({type:7,index:u}),$+=Ft.length-1}u++}}static createElement(t,n){const i=ur.createElement("template");return i.innerHTML=t,i}}function Er(e,t,n=e,i){if(t===dt)return t;let a=i!==void 0?n._$Co?.[i]:n._$Cl;const u=sn(t)?void 0:t._$litDirective$;return a?.constructor!==u&&(a?._$AO?.(!1),u===void 0?a=void 0:(a=new u(e),a._$AT(e,n,i)),i!==void 0?(n._$Co??=[])[i]=a:n._$Cl=a),a!==void 0&&(t=Er(e,a._$AS(e,t.values),a,i)),t}class Qc{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:i}=this._$AD,a=(t?.creationScope??ur).importNode(n,!0);cr.currentNode=a;let u=cr.nextNode(),h=0,p=0,g=i[0];for(;g!==void 0;){if(h===g.index){let k;g.type===2?k=new zr(u,u.nextSibling,this,t):g.type===1?k=new g.ctor(u,g.name,g.strings,this,t):g.type===6&&(k=new tu(u,this,t)),this._$AV.push(k),g=i[++p]}h!==g?.index&&(u=cr.nextNode(),h++)}return cr.currentNode=ur,a}p(t){let n=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,n),n+=i.strings.length-2):i._$AI(t[n])),n++}}class zr{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,n,i,a){this.type=2,this._$AH=ye,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=i,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&t?.nodeType===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=Er(this,t,n),sn(t)?t===ye||t==null||t===""?(this._$AH!==ye&&this._$AR(),this._$AH=ye):t!==this._$AH&&t!==dt&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Gc(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==ye&&sn(this._$AH)?this._$AA.nextSibling.data=t:this.T(ur.createTextNode(t)),this._$AH=t}$(t){const{values:n,_$litType$:i}=t,a=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=an.createElement(Ja(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===a)this._$AH.p(n);else{const u=new Qc(a,this),h=u.u(this.options);u.p(n),this.T(h),this._$AH=u}}_$AC(t){let n=la.get(t.strings);return n===void 0&&la.set(t.strings,n=new an(t)),n}k(t){ts(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let i,a=0;for(const u of t)a===n.length?n.push(i=new zr(this.O(on()),this.O(on()),this,this.options)):i=n[a],i._$AI(u),a++;a<n.length&&(this._$AR(i&&i._$AB.nextSibling,a),n.length=a)}_$AR(t=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);t!==this._$AB;){const i=ra(t).nextSibling;ra(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class po{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,i,a,u){this.type=1,this._$AH=ye,this._$AN=void 0,this.element=t,this.name=n,this._$AM=a,this.options=u,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=ye}_$AI(t,n=this,i,a){const u=this.strings;let h=!1;if(u===void 0)t=Er(this,t,n,0),h=!sn(t)||t!==this._$AH&&t!==dt,h&&(this._$AH=t);else{const p=t;let g,k;for(t=u[0],g=0;g<u.length-1;g++)k=Er(this,p[i+g],n,g),k===dt&&(k=this._$AH[g]),h||=!sn(k)||k!==this._$AH[g],k===ye?t=ye:t!==ye&&(t+=(k??"")+u[g+1]),this._$AH[g]=k}h&&!a&&this.j(t)}j(t){t===ye?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Zc extends po{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===ye?void 0:t}}class Jc extends po{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==ye)}}class eu extends po{constructor(t,n,i,a,u){super(t,n,i,a,u),this.type=5}_$AI(t,n=this){if((t=Er(this,t,n,0)??ye)===dt)return;const i=this._$AH,a=t===ye&&i!==ye||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,u=t!==ye&&(i===ye||a);a&&this.element.removeEventListener(this.name,this,i),u&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class tu{constructor(t,n,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Er(this,t)}}const ru={I:zr},nu=es.litHtmlPolyfillSupport;nu?.(an,zr),(es.litHtmlVersions??=[]).push("3.3.2");const Ii=(e,t,n)=>{const i=n?.renderBefore??t;let a=i._$litPart$;if(a===void 0){const u=n?.renderBefore??null;i._$litPart$=a=new zr(t.insertBefore(on(),u),u,void 0,n??{})}return a._$AI(e),a};const rs=globalThis;let zt=class extends ar{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ii(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return dt}};zt._$litElement$=!0,zt.finalized=!0,rs.litElementHydrateSupport?.({LitElement:zt});const ou=rs.litElementPolyfillSupport;ou?.({LitElement:zt});(rs.litElementVersions??=[]).push("4.2.2");function iu(){zt.prototype.update=function(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),ar.prototype.update.call(this,e),su(this.renderRoot)&&di("lit.repair_font_tags",!0);try{this.__childPart=Ii(t,this.renderRoot,this.renderOptions)}catch(n){const i=lu(this);di("lit.render_recovery","attempted");try{au(this),this.__childPart=Ii(t,this.renderRoot,this.renderOptions),di("lit.render_recovery","succeeded")}catch(a){throw cu(this,i),Yi({type:"error",category:"error",level:"error",message:"LitElement.update render error recovery failed",data:{retryError:String(a)}}),n}}}}function su(e){let t=!1;for(const n of e.querySelectorAll("font"))if(n.isConnected){const i=document.createTextNode(n.textContent);n.replaceWith(i),t=!0}return t&&e.normalize(),t}const ns="_$litPart$";function au(e){e.renderRoot.replaceChildren(),e.renderRoot[ns]=void 0}function lu(e){const t=[...e.renderRoot.childNodes],n=e.renderRoot[ns];return{children:t,childPart:n}}function cu(e,t){e.renderRoot.replaceChildren(...t.children),e.renderRoot[ns]=t.childPart}const ca=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,n),n);function me(e,t){return(n,i,a)=>{const u=h=>h.renderRoot?.querySelector(e)??null;if(t){const{get:h,set:p}=typeof i=="object"?n:a??(()=>{const g=Symbol();return{get(){return this[g]},set(k){this[g]=k}}})();return ca(n,i,{get(){let g=h.call(this);return g===void 0&&(g=u(this),(g!==null||this.hasUpdated)&&p.call(this,g)),g}})}return ca(n,i,{get(){return u(this)}})}}const He=e=>(t,n)=>{n!==void 0?n.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};const uu={attribute:!0,type:String,converter:Zn,reflect:!1,hasChanged:Ji},du=(e=uu,t,n)=>{const{kind:i,metadata:a}=n;let u=globalThis.litPropertyMetadata.get(a);if(u===void 0&&globalThis.litPropertyMetadata.set(a,u=new Map),i==="setter"&&((e=Object.create(e)).wrapped=!0),u.set(n.name,e),i==="accessor"){const{name:h}=n;return{set(p){const g=t.get.call(this);t.set.call(this,p),this.requestUpdate(h,g,e,!0,p)},init(p){return p!==void 0&&this.C(h,void 0,e,p),p}}}if(i==="setter"){const{name:h}=n;return function(p){const g=this[h];t.call(this,p),this.requestUpdate(h,g,e,!0,p)}}throw Error("Unsupported decorator location: "+i)};function T(e){return(t,n)=>typeof n=="object"?du(e,t,n):((i,a,u)=>{const h=a.hasOwnProperty(u);return a.constructor.createProperty(u,i),h?Object.getOwnPropertyDescriptor(a,u):void 0})(e,t,n)}function Ge(e){return T({...e,state:!0,attribute:!1})}const hu="a{color:var(--wa-color-text-link);text-decoration:var(--wa-link-decoration-default);-webkit-text-decoration:var(--wa-link-decoration-default);text-decoration-thickness:.09375em;text-underline-offset:.125em}@media(hover:hover){a:hover{color:color-mix(in oklab,var(--wa-color-text-link),var(--wa-color-mix-hover));text-decoration:var(--wa-link-decoration-hover);-webkit-text-decoration:var(--wa-link-decoration-hover)}}h1,h2,h3,h4,h5,h6,p,ol,ul,dl{margin:0;margin-inline:0;margin-block:0;&:not(:first-child){margin-block-start:1em}}dt,li,p+ul{&:not(:first-child){margin-block-start:.5em}}li:has(p),li:has(p):not(:first-child){margin-block-start:1em}h1,h2,h3,h4,h5,h6{font-family:var(--wa-font-family-heading) sans-serif;color:var(--wa-color-text-normal);line-height:var(--wa-line-height-condensed)}h1{font-weight:var(--wa-font-weight-bold);font-size:var(--wa-font-size-xl)}h2{font-weight:var(--wa-font-weight-semibold);font-size:var(--wa-font-size-l)}h3{font-weight:var(--wa-font-weight-semibold);font-size:var(--wa-font-size-m)}p{font-size:var(--wa-font-size-m);font-weight:var(--wa-font-weight-normal)}hr{border:none;height:var(--wa-border-width-s);margin-block:var(--wa-space-m);border-top:var(--wa-border-width-s) var(--wa-border-style) var(--wa-color-neutral-border-normal)}small{font-size:var(--wa-font-size-s);color:var(--wa-color-text-quiet)}",pu="wa-dialog::part(dialog),wa-drawer::part(dialog){color:var(--wa-color-text-normal)}wa-button[appearance=accent][variant=neutral]{--wa-color-fill-loud: var(--wa-form-control-background-color);--wa-color-on-loud: var(--wa-form-control-label-color);&::part(base){border-color:var(--wa-form-control-border-color)}}wa-button{--caret-rotation: 0deg;&::part(caret){transform:rotate(var(--caret-rotation));@media(prefers-reduced-motion:no-preference){transition:transform var(--wa-transition-fast) var(--wa-transition-easing)}}}wa-dropdown[open] wa-button[slot=trigger]::part(caret){transform:rotate(calc(var(--caret-rotation) - 180deg))}wa-dropdown[placement^=left] wa-button[slot=trigger]{--caret-rotation: 90deg}wa-dropdown[placement^=top] wa-button[slot=trigger]{--caret-rotation: 180deg}wa-dropdown[placement^=right] wa-button[slot=trigger]{--caret-rotation: 270deg}wa-icon:not([auto-width]),wa-button::part(caret),wa-details::part(icon){width:1em}wa-details::part(summary){display:inline}",kf=Se`${Zi(hu)}`,fu=Se`${Zi(pu)}`;function _f(e,t,n){if(typeof CSS.registerProperty=="function"){const i=window.getComputedStyle(e).getPropertyValue(t);if(i){const a=Number.parseFloat(i);if(Number.isNaN(a))throw new Error(`Unparseable numeric value for ${t}: '${i}'`);return a}}if(n)return n;throw new Error(`No value for property "${t}"`)}const Sf=()=>new Promise(e=>requestAnimationFrame(e)),Ti=e=>new Promise(t=>setTimeout(t,e)),mu=(e,t)=>{let n;return function(...i){const a=()=>{n=void 0,e.apply(this,i)};clearTimeout(n),n=setTimeout(a,t)}},Cf=e=>(t,n,i)=>{const a=i.value,u=new WeakMap;return i.get=function(){let h=u.get(this);return h||(h=mu(a.bind(this),e),u.set(this,h)),h},i.set=function(h){Object.defineProperty(this,n,{value:h,configurable:!0,writable:!0})},delete i.value,delete i.writable,i},Ef=(e,t)=>{let n=0,i;return function(...a){const u=Date.now();u-n>=t?(e.apply(this,a),n=u):i||(i=setTimeout(()=>{e.apply(this,a),n=Date.now(),i=void 0},t-(u-n)))}};var el=()=>({checkValidity(e){const t=e.input,n={message:"",isValid:!0,invalidKeys:[]};if(!t)return n;let i=!0;if("checkValidity"in t&&(i=t.checkValidity()),i)return n;if(n.isValid=!1,"validationMessage"in t&&(n.message=t.validationMessage),!("validity"in t))return n.invalidKeys.push("customError"),n;for(const a in t.validity){if(a==="valid")continue;const u=a;t.validity[u]&&n.invalidKeys.push(u)}return n}});var gu=Object.defineProperty,vu=Object.getOwnPropertyDescriptor,tl=e=>{throw TypeError(e)},x=(e,t,n,i)=>{for(var a=i>1?void 0:i?vu(t,n):t,u=e.length-1,h;u>=0;u--)(h=e[u])&&(a=(i?h(t,n,a):h(a))||a);return i&&a&&gu(t,n,a),a},rl=(e,t,n)=>t.has(e)||tl("Cannot "+n),wu=(e,t,n)=>(rl(e,t,"read from private field"),t.get(e)),yu=(e,t,n)=>t.has(e)?tl("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),bu=(e,t,n,i)=>(rl(e,t,"write to private field"),t.set(e,n),n);var xu=Se`
  :host {
    box-sizing: border-box !important;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit !important;
  }

  [hidden] {
    display: none !important;
  }
`,Wn,rt=class extends zt{constructor(){super(),yu(this,Wn,!1),this.initialReflectedProperties=new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(t,n)=>{if(this.internals?.states)try{n?this.internals.states.add(t):this.internals.states.delete(t)}catch(i){if(String(i).includes("must start with '--'"))console.error("Your browser implements an outdated version of CustomStateSet. Consider using a polyfill");else throw i}},has:t=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(t)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error("Element internals are not supported in your browser. Consider using a polyfill")}this.customStates.set("wa-defined",!0);let e=this.constructor;for(let[t,n]of e.elementProperties)n.default==="inherit"&&n.initial!==void 0&&typeof t=="string"&&this.customStates.set(`initial-${t}-${n.initial}`,!0)}static get styles(){const e=Array.isArray(this.css)?this.css:this.css?[this.css]:[];return[xu,...e]}attributeChangedCallback(e,t,n){wu(this,Wn)||(this.constructor.elementProperties.forEach((i,a)=>{i.reflect&&this[a]!=null&&this.initialReflectedProperties.set(a,this[a])}),bu(this,Wn,!0)),super.attributeChangedCallback(e,t,n)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,n)=>{e.has(n)&&this[n]==null&&(this[n]=t)})}firstUpdated(e){super.firstUpdated(e),this.didSSR&&this.shadowRoot?.querySelectorAll("slot").forEach(t=>{t.dispatchEvent(new Event("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))})}update(e){try{super.update(e)}catch(t){if(this.didSSR&&!this.hasUpdated){const n=new Event("lit-hydration-error",{bubbles:!0,composed:!0,cancelable:!1});n.error=t,this.dispatchEvent(n)}throw t}}relayNativeEvent(e,t){e.stopImmediatePropagation(),this.dispatchEvent(new e.constructor(e.type,{...e,...t}))}};Wn=new WeakMap;x([T()],rt.prototype,"dir",2);x([T()],rt.prototype,"lang",2);x([T({type:Boolean,reflect:!0,attribute:"did-ssr"})],rt.prototype,"didSSR",2);var nl=class extends Event{constructor(){super("wa-invalid",{bubbles:!0,cancelable:!1,composed:!0})}},ku=()=>({observedAttributes:["custom-error"],checkValidity(e){const t={message:"",isValid:!0,invalidKeys:[]};return e.customError&&(t.message=e.customError,t.isValid=!1,t.invalidKeys=["customError"]),t}}),ct=class extends rt{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=["input"],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=e=>{e.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new nl))},this.handleInteraction=e=>{const t=this.emittedEvents;t.includes(e.type)||t.push(e.type),t.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},this.addEventListener("invalid",this.emitInvalid)}static get validators(){return[ku()]}static get observedAttributes(){const e=new Set(super.observedAttributes||[]);for(const t of this.validators)if(t.observedAttributes)for(const n of t.observedAttributes)e.add(n);return[...e]}connectedCallback(){super.connectedCallback(),this.updateValidity(),this.assumeInteractionOn.forEach(e=>{this.addEventListener(e,this.handleInteraction)})}firstUpdated(...e){super.firstUpdated(...e),this.updateValidity()}willUpdate(e){if(e.has("customError")&&(this.customError||(this.customError=null),this.setCustomValidity(this.customError||"")),e.has("value")||e.has("disabled")){const t=this.value;if(Array.isArray(t)){if(this.name){const n=new FormData;for(const i of t)n.append(this.name,i);this.setValue(n,n)}}else this.setValue(t,t)}e.has("disabled")&&(this.customStates.set("disabled",this.disabled),(this.hasAttribute("disabled")||!this.matches(":disabled"))&&this.toggleAttribute("disabled",this.disabled)),this.updateValidity(),super.willUpdate(e)}get labels(){return this.internals.labels}getForm(){return this.internals.form}set form(e){e?this.setAttribute("form",e):this.removeAttribute("form")}get form(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...e){const t=e[0],n=e[1];let i=e[2];i||(i=this.validationTarget),this.internals.setValidity(t,n,i||void 0),this.requestUpdate("validity"),this.setCustomStates()}setCustomStates(){const e=!!this.required,t=this.internals.validity.valid,n=this.hasInteracted;this.customStates.set("required",e),this.customStates.set("optional",!e),this.customStates.set("invalid",!t),this.customStates.set("valid",t),this.customStates.set("user-invalid",!t&&n),this.customStates.set("user-valid",t&&n)}setCustomValidity(e){if(!e){this.customError=null,this.setValidity({});return}this.customError=e,this.setValidity({customError:!0},e,this.validationTarget)}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(e){this.disabled=e,this.updateValidity()}formStateRestoreCallback(e,t){this.value=e,t==="restore"&&this.resetValidity(),this.updateValidity()}setValue(...e){const[t,n]=e;this.internals.setFormValue(t,n)}get allValidators(){const e=this.constructor.validators||[],t=this.validators||[];return[...e,...t]}resetValidity(){this.setCustomValidity(""),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute("disabled")||!this.willValidate){this.resetValidity();return}const e=this.allValidators;if(!e?.length)return;const t={customError:!!this.customError},n=this.validationTarget||this.input||void 0;let i="";for(const a of e){const{isValid:u,message:h,invalidKeys:p}=a.checkValidity(this);u||(i||(i=h),p?.length>=0&&p.forEach(g=>t[g]=!0))}i||(i=this.validationMessage),this.setValidity(t,i,n)}};ct.formAssociated=!0;x([T({reflect:!0})],ct.prototype,"name",2);x([T({type:Boolean})],ct.prototype,"disabled",2);x([T({state:!0,attribute:!1})],ct.prototype,"valueHasChanged",2);x([T({state:!0,attribute:!1})],ct.prototype,"hasInteracted",2);x([T({attribute:"custom-error",reflect:!0})],ct.prototype,"customError",2);x([T({attribute:!1,state:!0,type:Object})],ct.prototype,"validity",1);var _u=Se`
  @layer wa-component {
    :host {
      display: inline-block;

      /* Workaround because Chrome doesn't like :host(:has()) below
       * https://issues.chromium.org/issues/40062355
       * Firefox doesn't like this nested rule, so both are needed */
      &:has(wa-badge) {
        position: relative;
      }
    }

    /* Apply relative positioning only when needed to position wa-badge
     * This avoids creating a new stacking context for every button */
    :host(:has(wa-badge)) {
      position: relative;
    }
  }

  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    transition-property: background, border, box-shadow, color, opacity;
    transition-duration: var(--wa-transition-fast);
    transition-timing-function: var(--wa-transition-easing);
    cursor: pointer;
    padding: 0 var(--wa-form-control-padding-inline);
    font-family: inherit;
    font-size: inherit;
    font-weight: var(--wa-font-weight-action);
    line-height: calc(var(--wa-form-control-height) - var(--border-width) * 2);
    height: var(--wa-form-control-height);
    width: 100%;

    background-color: var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud));
    border-color: transparent;
    color: var(--wa-color-on-loud, var(--wa-color-neutral-on-loud));
    border-radius: var(--wa-form-control-border-radius);
    border-style: var(--wa-border-style);
    border-width: var(--wa-border-width-s);
  }

  /* Appearance modifiers */
  :host([appearance='plain']) {
    .button {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: transparent;
      border-color: transparent;
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
        background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
      }
    }
    .button:not(.disabled):not(.loading):active {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)),
        var(--wa-color-mix-active)
      );
    }
  }

  :host([appearance='outlined']) {
    .button {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: transparent;
      border-color: var(--wa-color-border-loud, var(--wa-color-neutral-border-loud));
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
        background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
      }
    }
    .button:not(.disabled):not(.loading):active {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)),
        var(--wa-color-mix-active)
      );
    }
  }

  :host([appearance='filled']) {
    .button {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal));
      border-color: transparent;
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
        background-color: color-mix(
          in oklab,
          var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
          var(--wa-color-mix-hover)
        );
      }
    }
    .button:not(.disabled):not(.loading):active {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
        var(--wa-color-mix-active)
      );
    }
  }

  :host([appearance='filled-outlined']) {
    .button {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal));
      border-color: var(--wa-color-border-normal, var(--wa-color-neutral-border-normal));
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
        background-color: color-mix(
          in oklab,
          var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
          var(--wa-color-mix-hover)
        );
      }
    }
    .button:not(.disabled):not(.loading):active {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
        var(--wa-color-mix-active)
      );
    }
  }

  :host([appearance='accent']) {
    .button {
      color: var(--wa-color-on-loud, var(--wa-color-neutral-on-loud));
      background-color: var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud));
      border-color: transparent;
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        background-color: color-mix(
          in oklab,
          var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud)),
          var(--wa-color-mix-hover)
        );
      }
    }
    .button:not(.disabled):not(.loading):active {
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud)),
        var(--wa-color-mix-active)
      );
    }
  }

  /* Focus states */
  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  /* Disabled state */
  .button.disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button.disabled * {
    pointer-events: none;
  }

  /* Keep it last so Safari doesn't stop parsing this block */
  .button::-moz-focus-inner {
    border: 0;
  }

  /* Icon buttons */
  .button.is-icon-button {
    outline-offset: 2px;
    width: var(--wa-form-control-height);
    aspect-ratio: 1;
  }

  .button.is-icon-button:has(wa-icon) {
    width: auto;
  }

  /* Pill modifier */
  :host([pill]) .button {
    border-radius: var(--wa-border-radius-pill);
  }

  /*
   * Label
   */

  .start,
  .end {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .label {
    display: inline-block;
  }

  .is-icon-button .label {
    display: flex;
  }

  .label::slotted(wa-icon) {
    align-self: center;
  }

  /*
   * Caret modifier
   */

  wa-icon[part='caret'] {
    display: flex;
    align-self: center;
    align-items: center;

    &::part(svg) {
      width: 0.875em;
      height: 0.875em;
    }

    .button:has(&) .end {
      display: none;
    }
  }

  /*
   * Loading modifier
   */

  .loading {
    position: relative;
    cursor: wait;

    .start,
    .label,
    .end,
    .caret {
      visibility: hidden;
    }

    wa-spinner {
      --indicator-color: currentColor;
      --track-color: color-mix(in oklab, currentColor, transparent 90%);

      position: absolute;
      font-size: 1em;
      height: 1em;
      width: 1em;
      top: calc(50% - 0.5em);
      left: calc(50% - 0.5em);
    }
  }

  /*
   * Badges
   */

  .button ::slotted(wa-badge) {
    border-color: var(--wa-color-surface-default);
    position: absolute;
    inset-block-start: 0;
    inset-inline-end: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  :host(:dir(rtl)) ::slotted(wa-badge) {
    translate: -50% -50%;
  }

  /*
  * Button spacing
  */

  slot[name='start']::slotted(*) {
    margin-inline-end: 0.75em;
  }

  slot[name='end']::slotted(*),
  .button:not(.visually-hidden-label) [part='caret'] {
    margin-inline-start: 0.75em;
  }

  /*
   * Button group border radius modifications
   */

  /* Remove border radius from all grouped buttons by default */
  :host(.wa-button-group__button) .button {
    border-radius: 0;
  }

  /* Horizontal orientation */
  :host(.wa-button-group__horizontal.wa-button-group__button-first) .button {
    border-start-start-radius: var(--wa-form-control-border-radius);
    border-end-start-radius: var(--wa-form-control-border-radius);
  }

  :host(.wa-button-group__horizontal.wa-button-group__button-last) .button {
    border-start-end-radius: var(--wa-form-control-border-radius);
    border-end-end-radius: var(--wa-form-control-border-radius);
  }

  /* Vertical orientation */
  :host(.wa-button-group__vertical) {
    flex: 1 1 auto;
  }

  :host(.wa-button-group__vertical) .button {
    width: 100%;
    justify-content: start;
  }

  :host(.wa-button-group__vertical.wa-button-group__button-first) .button {
    border-start-start-radius: var(--wa-form-control-border-radius);
    border-start-end-radius: var(--wa-form-control-border-radius);
  }

  :host(.wa-button-group__vertical.wa-button-group__button-last) .button {
    border-end-start-radius: var(--wa-form-control-border-radius);
    border-end-end-radius: var(--wa-form-control-border-radius);
  }

  /* Handle pill modifier for button groups */
  :host([pill].wa-button-group__horizontal.wa-button-group__button-first) .button {
    border-start-start-radius: var(--wa-border-radius-pill);
    border-end-start-radius: var(--wa-border-radius-pill);
  }

  :host([pill].wa-button-group__horizontal.wa-button-group__button-last) .button {
    border-start-end-radius: var(--wa-border-radius-pill);
    border-end-end-radius: var(--wa-border-radius-pill);
  }

  :host([pill].wa-button-group__vertical.wa-button-group__button-first) .button {
    border-start-start-radius: var(--wa-border-radius-pill);
    border-start-end-radius: var(--wa-border-radius-pill);
  }

  :host([pill].wa-button-group__vertical.wa-button-group__button-last) .button {
    border-end-start-radius: var(--wa-border-radius-pill);
    border-end-end-radius: var(--wa-border-radius-pill);
  }
`;var cn=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=n=>{const i=n.target;(this.slotNames.includes("[default]")&&!i.name||i.name&&this.slotNames.includes(i.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===Node.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===Node.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="wa-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};var fo=Se`
  :host([size='small']),
  .wa-size-s {
    font-size: var(--wa-font-size-s);
  }

  :host([size='medium']),
  .wa-size-m {
    font-size: var(--wa-font-size-m);
  }

  :host([size='large']),
  .wa-size-l {
    font-size: var(--wa-font-size-l);
  }
`;var Su=Se`
  :where(:root),
  .wa-neutral,
  :host([variant='neutral']) {
    --wa-color-fill-loud: var(--wa-color-neutral-fill-loud);
    --wa-color-fill-normal: var(--wa-color-neutral-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-neutral-fill-quiet);
    --wa-color-border-loud: var(--wa-color-neutral-border-loud);
    --wa-color-border-normal: var(--wa-color-neutral-border-normal);
    --wa-color-border-quiet: var(--wa-color-neutral-border-quiet);
    --wa-color-on-loud: var(--wa-color-neutral-on-loud);
    --wa-color-on-normal: var(--wa-color-neutral-on-normal);
    --wa-color-on-quiet: var(--wa-color-neutral-on-quiet);
  }

  .wa-brand,
  :host([variant='brand']) {
    --wa-color-fill-loud: var(--wa-color-brand-fill-loud);
    --wa-color-fill-normal: var(--wa-color-brand-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-brand-fill-quiet);
    --wa-color-border-loud: var(--wa-color-brand-border-loud);
    --wa-color-border-normal: var(--wa-color-brand-border-normal);
    --wa-color-border-quiet: var(--wa-color-brand-border-quiet);
    --wa-color-on-loud: var(--wa-color-brand-on-loud);
    --wa-color-on-normal: var(--wa-color-brand-on-normal);
    --wa-color-on-quiet: var(--wa-color-brand-on-quiet);
  }

  .wa-success,
  :host([variant='success']) {
    --wa-color-fill-loud: var(--wa-color-success-fill-loud);
    --wa-color-fill-normal: var(--wa-color-success-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-success-fill-quiet);
    --wa-color-border-loud: var(--wa-color-success-border-loud);
    --wa-color-border-normal: var(--wa-color-success-border-normal);
    --wa-color-border-quiet: var(--wa-color-success-border-quiet);
    --wa-color-on-loud: var(--wa-color-success-on-loud);
    --wa-color-on-normal: var(--wa-color-success-on-normal);
    --wa-color-on-quiet: var(--wa-color-success-on-quiet);
  }

  .wa-warning,
  :host([variant='warning']) {
    --wa-color-fill-loud: var(--wa-color-warning-fill-loud);
    --wa-color-fill-normal: var(--wa-color-warning-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-warning-fill-quiet);
    --wa-color-border-loud: var(--wa-color-warning-border-loud);
    --wa-color-border-normal: var(--wa-color-warning-border-normal);
    --wa-color-border-quiet: var(--wa-color-warning-border-quiet);
    --wa-color-on-loud: var(--wa-color-warning-on-loud);
    --wa-color-on-normal: var(--wa-color-warning-on-normal);
    --wa-color-on-quiet: var(--wa-color-warning-on-quiet);
  }

  .wa-danger,
  :host([variant='danger']) {
    --wa-color-fill-loud: var(--wa-color-danger-fill-loud);
    --wa-color-fill-normal: var(--wa-color-danger-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-danger-fill-quiet);
    --wa-color-border-loud: var(--wa-color-danger-border-loud);
    --wa-color-border-normal: var(--wa-color-danger-border-normal);
    --wa-color-border-quiet: var(--wa-color-danger-border-quiet);
    --wa-color-on-loud: var(--wa-color-danger-on-loud);
    --wa-color-on-normal: var(--wa-color-danger-on-normal);
    --wa-color-on-quiet: var(--wa-color-danger-on-quiet);
  }
`;const Mi=new Set,_r=new Map;let lr,os="ltr",is="en";const ol=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(ol){const e=new MutationObserver(sl);os=document.documentElement.dir||"ltr",is=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function il(...e){e.map(t=>{const n=t.$code.toLowerCase();_r.has(n)?_r.set(n,Object.assign(Object.assign({},_r.get(n)),t)):_r.set(n,t),lr||(lr=t)}),sl()}function sl(){ol&&(os=document.documentElement.dir||"ltr",is=document.documentElement.lang||navigator.language),[...Mi.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}let Cu=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){Mi.add(this.host)}hostDisconnected(){Mi.delete(this.host)}dir(){return`${this.host.dir||os}`.toLowerCase()}lang(){return`${this.host.lang||is}`.toLowerCase()}getTranslationData(t){var n,i;const a=new Intl.Locale(t.replace(/_/g,"-")),u=a?.language.toLowerCase(),h=(i=(n=a?.region)===null||n===void 0?void 0:n.toLowerCase())!==null&&i!==void 0?i:"",p=_r.get(`${u}-${h}`),g=_r.get(u);return{locale:a,language:u,region:h,primary:p,secondary:g}}exists(t,n){var i;const{primary:a,secondary:u}=this.getTranslationData((i=n.lang)!==null&&i!==void 0?i:this.lang());return n=Object.assign({includeFallback:!1},n),!!(a&&a[t]||u&&u[t]||n.includeFallback&&lr&&lr[t])}term(t,...n){const{primary:i,secondary:a}=this.getTranslationData(this.lang());let u;if(i&&i[t])u=i[t];else if(a&&a[t])u=a[t];else if(lr&&lr[t])u=lr[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof u=="function"?u(...n):u}date(t,n){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),n).format(t)}number(t,n){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),n).format(t)}relativeTime(t,n,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(t,n)}};var al={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,pauseAnimation:"Pause animation",playAnimation:"Play animation",previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollableRegion:"Scrollable region",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format",zoomIn:"Zoom in",zoomOut:"Zoom out"};il(al);var Eu=al;var hr=class extends Cu{};il(Eu);function Ye(e,t){const n={waitUntilFirstUpdate:!1,...t};return(i,a)=>{const{update:u}=i,h=Array.isArray(e)?e:[e];i.update=function(p){h.forEach(g=>{const k=g;if(p.has(k)){const E=p.get(k),$=this[k];E!==$&&(!n.waitUntilFirstUpdate||this.hasUpdated)&&this[a](E,$)}}),u.call(this,p)}}}const qt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},ss=e=>(...t)=>({_$litDirective$:e,values:t});let as=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,i){this._$Ct=t,this._$AM=n,this._$Ci=i}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}};const Ot=ss(class extends as{constructor(e){if(super(e),e.type!==qt.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(t)}const n=e.element.classList;for(const i of this.st)i in t||(n.remove(i),this.st.delete(i));for(const i in t){const a=!!t[i];a===this.st.has(i)||this.nt?.has(i)||(a?(n.add(i),this.st.add(i)):(n.remove(i),this.st.delete(i)))}return dt}});const Ee=e=>e??ye;const ll=Symbol.for(""),Au=e=>{if(e?.r===ll)return e?._$litStatic$},ua=(e,...t)=>({_$litStatic$:t.reduce((n,i,a)=>n+(u=>{if(u._$litStatic$!==void 0)return u._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${u}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(i)+e[a+1],e[0]),r:ll}),da=new Map,$u=e=>(t,...n)=>{const i=n.length;let a,u;const h=[],p=[];let g,k=0,E=!1;for(;k<i;){for(g=t[k];k<i&&(u=n[k],(a=Au(u))!==void 0);)g+=a+t[++k],E=!0;k!==i&&p.push(u),h.push(g),k++}if(k===i&&h.push(t[i]),E){const $=h.join("$$lit$$");(t=da.get($))===void 0&&(h.raw=h,da.set($,t=h)),n=p}return e(t,...n)},pi=$u(pe);var de=class extends ct{constructor(){super(...arguments),this.assumeInteractionOn=["click"],this.hasSlotController=new cn(this,"[default]","start","end"),this.localize=new hr(this),this.invalid=!1,this.isIconButton=!1,this.title="",this.variant="neutral",this.appearance="accent",this.size="medium",this.withCaret=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type="button"}static get validators(){return[...super.validators,el()]}constructLightDOMButton(){const e=document.createElement("button");for(const t of this.attributes)t.name!=="style"&&e.setAttribute(t.name,t.value);return e.type=this.type,e.style.position="absolute !important",e.style.width="0 !important",e.style.height="0 !important",e.style.clipPath="inset(50%) !important",e.style.overflow="hidden !important",e.style.whiteSpace="nowrap !important",this.name&&(e.name=this.name),e.value=this.value||"",e}handleClick(){if(!this.getForm())return;const t=this.constructLightDOMButton();this.parentElement?.append(t),t.click(),t.remove()}handleInvalid(){this.dispatchEvent(new nl)}handleLabelSlotChange(){const e=this.labelSlot.assignedNodes({flatten:!0});let t=!1,n=!1,i=!1,a=!1;[...e].forEach(u=>{if(u.nodeType===Node.ELEMENT_NODE){const h=u;h.localName==="wa-icon"?(n=!0,t||(t=h.label!==void 0)):a=!0}else u.nodeType===Node.TEXT_NODE&&(u.textContent?.trim()||"").length>0&&(i=!0)}),this.isIconButton=n&&!i&&!a,this.isIconButton&&!t&&console.warn('Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.',this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.updateValidity()}setValue(...e){}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){const e=this.isLink(),t=e?ua`a`:ua`button`;return pi`
      <${t}
        part="base"
        class=${Ot({button:!0,caret:this.withCaret,disabled:this.disabled,loading:this.loading,rtl:this.localize.dir()==="rtl","has-label":this.hasSlotController.test("[default]"),"has-start":this.hasSlotController.test("start"),"has-end":this.hasSlotController.test("end"),"is-icon-button":this.isIconButton})}
        ?disabled=${Ee(e?void 0:this.disabled)}
        type=${Ee(e?void 0:this.type)}
        title=${this.title}
        name=${Ee(e?void 0:this.name)}
        value=${Ee(e?void 0:this.value)}
        href=${Ee(e?this.href:void 0)}
        target=${Ee(e?this.target:void 0)}
        download=${Ee(e?this.download:void 0)}
        rel=${Ee(e&&this.rel?this.rel:void 0)}
        role=${Ee(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="start" part="start" class="start"></slot>
        <slot part="label" class="label" @slotchange=${this.handleLabelSlotChange}></slot>
        <slot name="end" part="end" class="end"></slot>
        ${this.withCaret?pi`
                <wa-icon part="caret" class="caret" library="system" name="chevron-down" variant="solid"></wa-icon>
              `:""}
        ${this.loading?pi`<wa-spinner part="spinner"></wa-spinner>`:""}
      </${t}>
    `}};de.shadowRootOptions={...ct.shadowRootOptions,delegatesFocus:!0};de.css=[_u,Su,fo];x([me(".button")],de.prototype,"button",2);x([me("slot:not([name])")],de.prototype,"labelSlot",2);x([Ge()],de.prototype,"invalid",2);x([Ge()],de.prototype,"isIconButton",2);x([T()],de.prototype,"title",2);x([T({reflect:!0})],de.prototype,"variant",2);x([T({reflect:!0})],de.prototype,"appearance",2);x([T({reflect:!0})],de.prototype,"size",2);x([T({attribute:"with-caret",type:Boolean,reflect:!0})],de.prototype,"withCaret",2);x([T({type:Boolean})],de.prototype,"disabled",2);x([T({type:Boolean,reflect:!0})],de.prototype,"loading",2);x([T({type:Boolean,reflect:!0})],de.prototype,"pill",2);x([T()],de.prototype,"type",2);x([T({reflect:!0})],de.prototype,"name",2);x([T({reflect:!0})],de.prototype,"value",2);x([T({reflect:!0})],de.prototype,"href",2);x([T()],de.prototype,"target",2);x([T()],de.prototype,"rel",2);x([T()],de.prototype,"download",2);x([T({attribute:"formaction"})],de.prototype,"formAction",2);x([T({attribute:"formenctype"})],de.prototype,"formEnctype",2);x([T({attribute:"formmethod"})],de.prototype,"formMethod",2);x([T({attribute:"formnovalidate",type:Boolean})],de.prototype,"formNoValidate",2);x([T({attribute:"formtarget"})],de.prototype,"formTarget",2);x([Ye("disabled",{waitUntilFirstUpdate:!0})],de.prototype,"handleDisabledChange",1);de=x([He("wa-button")],de);var Pu=Se`
  :host {
    --track-width: 2px;
    --track-color: var(--wa-color-neutral-fill-normal);
    --indicator-color: var(--wa-color-brand-fill-loud);
    --speed: 2s;

    /*
      Resizing a spinner element using anything but font-size will break the animation because the animation uses em
      units. Therefore, if a spinner is used in a flex container without \`flex: none\` applied, the spinner can
      grow/shrink and break the animation. The use of \`flex: none\` on the host element prevents this by always having
      the spinner sized according to its actual dimensions.
    */
    flex: none;
    display: inline-flex;
    width: 1em;
    height: 1em;
  }

  svg {
    width: 100%;
    height: 100%;
    aspect-ratio: 1;
    animation: spin var(--speed) linear infinite;
  }

  .track {
    stroke: var(--track-color);
  }

  .indicator {
    stroke: var(--indicator-color);
    stroke-dasharray: 75, 100;
    stroke-dashoffset: -5;
    animation: dash 1.5s ease-in-out infinite;
    stroke-linecap: round;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;var Ri=class extends rt{constructor(){super(...arguments),this.localize=new hr(this)}render(){return pe`
      <svg
        part="base"
        role="progressbar"
        aria-label=${this.localize.term("loading")}
        fill="none"
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle class="track" cx="25" cy="25" r="20" fill="none" stroke-width="5" />
        <circle class="indicator" cx="25" cy="25" r="20" fill="none" stroke-width="5" />
      </svg>
    `}};Ri.css=Pu;Ri=x([He("wa-spinner")],Ri);var zu=class extends Event{constructor(){super("wa-load",{bubbles:!0,cancelable:!1,composed:!0})}};var Ou=Se`
  :host {
    --primary-color: currentColor;
    --primary-opacity: 1;
    --secondary-color: currentColor;
    --secondary-opacity: 0.4;

    box-sizing: content-box;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: -0.125em;
  }

  /* Standard */
  :host(:not([auto-width])) {
    width: 1.25em;
    height: 1em;
  }

  /* Auto-width */
  :host([auto-width]) {
    width: auto;
    height: 1em;
  }

  svg {
    height: 1em;
    overflow: visible;

    /* Duotone colors with path-specific opacity fallback */
    path[data-duotone-primary] {
      color: var(--primary-color);
      opacity: var(--path-opacity, var(--primary-opacity));
    }

    path[data-duotone-secondary] {
      color: var(--secondary-color);
      opacity: var(--path-opacity, var(--secondary-opacity));
    }
  }
`;function Iu(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}var fi={solid:{check:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>',"chevron-down":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>',"chevron-left":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>',"chevron-right":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>',circle:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>',eyedropper:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>',"grip-vertical":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>',indeterminate:'<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>',minus:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>',pause:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>',play:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>',star:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>',user:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>',xmark:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>'},regular:{"circle-question":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>',"circle-xmark":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>',copy:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>',eye:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>',"eye-slash":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>',star:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>'}},Tu={name:"system",resolver:(e,t="classic",n="solid")=>{let a=fi[n][e]??fi.regular[e]??fi.regular["circle-question"];return a?Iu(a):""}},Mu=Tu;var Li="";function Ru(e){Li=e}function Lu(){if(!Li){const e=document.querySelector("[data-fa-kit-code]");e&&Ru(e.getAttribute("data-fa-kit-code")||"")}return Li}var At="7.0.1";function Du(e,t,n){const i=Lu(),a=i.length>0;let u="solid";return t==="notdog"?(n==="solid"&&(u="solid"),n==="duo-solid"&&(u="duo-solid"),`https://ka-p.fontawesome.com/releases/v${At}/svgs/notdog-${u}/${e}.svg?token=${encodeURIComponent(i)}`):t==="chisel"?`https://ka-p.fontawesome.com/releases/v${At}/svgs/chisel-regular/${e}.svg?token=${encodeURIComponent(i)}`:t==="etch"?`https://ka-p.fontawesome.com/releases/v${At}/svgs/etch-solid/${e}.svg?token=${encodeURIComponent(i)}`:t==="jelly"?(n==="regular"&&(u="regular"),n==="duo-regular"&&(u="duo-regular"),n==="fill-regular"&&(u="fill-regular"),`https://ka-p.fontawesome.com/releases/v${At}/svgs/jelly-${u}/${e}.svg?token=${encodeURIComponent(i)}`):t==="slab"?((n==="solid"||n==="regular")&&(u="regular"),n==="press-regular"&&(u="press-regular"),`https://ka-p.fontawesome.com/releases/v${At}/svgs/slab-${u}/${e}.svg?token=${encodeURIComponent(i)}`):t==="thumbprint"?`https://ka-p.fontawesome.com/releases/v${At}/svgs/thumbprint-light/${e}.svg?token=${encodeURIComponent(i)}`:t==="whiteboard"?`https://ka-p.fontawesome.com/releases/v${At}/svgs/whiteboard-semibold/${e}.svg?token=${encodeURIComponent(i)}`:(t==="classic"&&(n==="thin"&&(u="thin"),n==="light"&&(u="light"),n==="regular"&&(u="regular"),n==="solid"&&(u="solid")),t==="sharp"&&(n==="thin"&&(u="sharp-thin"),n==="light"&&(u="sharp-light"),n==="regular"&&(u="sharp-regular"),n==="solid"&&(u="sharp-solid")),t==="duotone"&&(n==="thin"&&(u="duotone-thin"),n==="light"&&(u="duotone-light"),n==="regular"&&(u="duotone-regular"),n==="solid"&&(u="duotone")),t==="sharp-duotone"&&(n==="thin"&&(u="sharp-duotone-thin"),n==="light"&&(u="sharp-duotone-light"),n==="regular"&&(u="sharp-duotone-regular"),n==="solid"&&(u="sharp-duotone-solid")),t==="brands"&&(u="brands"),a?`https://ka-p.fontawesome.com/releases/v${At}/svgs/${u}/${e}.svg?token=${encodeURIComponent(i)}`:`https://ka-f.fontawesome.com/releases/v${At}/svgs/${u}/${e}.svg`)}var Bu={name:"default",resolver:(e,t="classic",n="solid")=>Du(e,t,n),mutator:(e,t)=>{if(t?.family&&!e.hasAttribute("data-duotone-initialized")){const{family:n,variant:i}=t;if(n==="duotone"||n==="sharp-duotone"||n==="notdog"&&i==="duo-solid"||n==="jelly"&&i==="duo-regular"||n==="thumbprint"){const a=[...e.querySelectorAll("path")],u=a.find(p=>!p.hasAttribute("opacity")),h=a.find(p=>p.hasAttribute("opacity"));if(!u||!h)return;if(u.setAttribute("data-duotone-primary",""),h.setAttribute("data-duotone-secondary",""),t.swapOpacity&&u&&h){const p=h.getAttribute("opacity")||"0.4";u.style.setProperty("--path-opacity",p),h.style.setProperty("--path-opacity","1")}e.setAttribute("data-duotone-initialized","")}}}},ju=Bu;var Nu="classic",eo=[ju,Mu],to=[];function qu(e){to.push(e)}function Fu(e){to=to.filter(t=>t!==e)}function Hn(e){return eo.find(t=>t.name===e)}function cl(e,t){Uu(e),eo.push({name:e,resolver:t.resolver,mutator:t.mutator,spriteSheet:t.spriteSheet}),to.forEach(n=>{n.library===e&&n.setIcon()})}function Uu(e){eo=eo.filter(t=>t.name!==e)}function Ku(){return Nu}const{I:Vu}=ru,ha=e=>e,Wu=(e,t)=>e?._$litType$!==void 0,Hu=e=>e.strings===void 0,pa=()=>document.createComment(""),Yr=(e,t,n)=>{const i=e._$AA.parentNode,a=t===void 0?e._$AB:t._$AA;if(n===void 0){const u=i.insertBefore(pa(),a),h=i.insertBefore(pa(),a);n=new Vu(u,h,e,e.options)}else{const u=n._$AB.nextSibling,h=n._$AM,p=h!==e;if(p){let g;n._$AQ?.(e),n._$AM=e,n._$AP!==void 0&&(g=e._$AU)!==h._$AU&&n._$AP(g)}if(u!==a||p){let g=n._$AA;for(;g!==u;){const k=ha(g).nextSibling;ha(i).insertBefore(g,a),g=k}}}return n},sr=(e,t,n=e)=>(e._$AI(t,n),e),Gu={},ul=(e,t=Gu)=>e._$AH=t,Yu=e=>e._$AH,mi=e=>{e._$AR(),e._$AA.remove()};var Gn=class extends Event{constructor(){super("wa-error",{bubbles:!0,cancelable:!1,composed:!0})}},Xr=Symbol(),jn=Symbol(),gi,vi=new Map,tt=class extends rt{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label="",this.library="default",this.resolveIcon=async(e,t)=>{let n;if(t?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=pe`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;const i=this.shadowRoot.querySelector("[part='svg']");return typeof t.mutator=="function"&&t.mutator(i,this),this.svg}try{if(n=await fetch(e,{mode:"cors"}),!n.ok)return n.status===410?Xr:jn}catch{return jn}try{const i=document.createElement("div");i.innerHTML=await n.text();const a=i.firstElementChild;if(a?.tagName?.toLowerCase()!=="svg")return Xr;gi||(gi=new DOMParser);const h=gi.parseFromString(a.outerHTML,"text/html").body.querySelector("svg");return h?(h.part.add("svg"),document.adoptNode(h)):Xr}catch{return Xr}}}connectedCallback(){super.connectedCallback(),qu(this)}firstUpdated(e){super.firstUpdated(e),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Fu(this)}getIconSource(){const e=Hn(this.library),t=this.family||Ku();return this.name&&e?{url:e.resolver(this.name,t,this.variant,this.autoWidth),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){const{url:e,fromLibrary:t}=this.getIconSource(),n=t?Hn(this.library):void 0;if(!e){this.svg=null;return}let i=vi.get(e);i||(i=this.resolveIcon(e,n),vi.set(e,i));const a=await i;if(a===jn&&vi.delete(e),e===this.getIconSource().url){if(Wu(a)){this.svg=a;return}switch(a){case jn:case Xr:this.svg=null,this.dispatchEvent(new Gn);break;default:this.svg=a.cloneNode(!0),n?.mutator?.(this.svg,this),this.dispatchEvent(new zu)}}}updated(e){super.updated(e);const t=Hn(this.library),n=this.shadowRoot?.querySelector("svg");n&&t?.mutator?.(n,this)}render(){return this.hasUpdated?this.svg:pe`<svg part="svg" width="16" height="16"></svg>`}};tt.css=Ou;x([Ge()],tt.prototype,"svg",2);x([T({reflect:!0})],tt.prototype,"name",2);x([T({reflect:!0})],tt.prototype,"family",2);x([T({reflect:!0})],tt.prototype,"variant",2);x([T({attribute:"auto-width",type:Boolean,reflect:!0})],tt.prototype,"autoWidth",2);x([T({attribute:"swap-opacity",type:Boolean,reflect:!0})],tt.prototype,"swapOpacity",2);x([T()],tt.prototype,"src",2);x([T()],tt.prototype,"label",2);x([T({reflect:!0})],tt.prototype,"library",2);x([Ye("label")],tt.prototype,"handleLabelChange",1);x([Ye(["family","name","library","variant","src","autoWidth","swapOpacity"],{waitUntilFirstUpdate:!0})],tt.prototype,"setIcon",1);tt=x([He("wa-icon")],tt);var Xu=Se`
  .wa-visually-hidden:not(:focus-within),
  .wa-visually-hidden-force,
  .wa-visually-hidden-hint::part(hint),
  .wa-visually-hidden-label::part(label) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`;var Qu=Se`
  :host {
    display: inline-block;
    color: var(--wa-color-neutral-on-quiet);
  }

  .button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background-color: transparent;
    border: none;
    border-radius: var(--wa-form-control-border-radius);
    color: inherit;
    font-size: inherit;
    padding: 0.5em;
    cursor: pointer;
    transition: color var(--wa-transition-fast) var(--wa-transition-easing);
  }

  @media (hover: hover) {
    .button:hover:not([disabled]) {
      background-color: var(--wa-color-neutral-fill-quiet);
      color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
    }
  }

  .button:focus-visible:not([disabled]) {
    background-color: var(--wa-color-neutral-fill-quiet);
    color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
  }

  .button:active:not([disabled]) {
    color: color-mix(in oklab, currentColor, var(--wa-color-mix-active));
  }

  slot[name='success-icon'] {
    color: var(--wa-color-success-on-quiet);
  }

  slot[name='error-icon'] {
    color: var(--wa-color-danger-on-quiet);
  }

  .button:focus-visible {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  .button[disabled] {
    opacity: 0.5;
    cursor: not-allowed !important;
  }

  slot {
    display: inline-flex;
  }

  .show {
    animation: show 100ms ease;
  }

  .hide {
    animation: show 100ms ease reverse;
  }

  @keyframes show {
    from {
      scale: 0.25;
      opacity: 0.25;
    }
    to {
      scale: 1;
      opacity: 1;
    }
  }
`;async function fa(e,t,n){return e.animate(t,n).finished.catch(()=>{})}function Je(e,t){return new Promise(n=>{const i=new AbortController,{signal:a}=i;if(e.classList.contains(t))return;e.classList.remove(t),e.classList.add(t);let u=()=>{e.classList.remove(t),n(),i.abort()};e.addEventListener("animationend",u,{once:!0,signal:a}),e.addEventListener("animationcancel",u,{once:!0,signal:a})})}function ma(e){return e=e.toString().toLowerCase(),e.indexOf("ms")>-1?parseFloat(e)||0:e.indexOf("s")>-1?(parseFloat(e)||0)*1e3:parseFloat(e)||0}var Zu=class extends Event{constructor(e){super("wa-copy",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=e}},Me=class extends rt{constructor(){super(...arguments),this.localize=new hr(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top"}get currentLabel(){return this.status==="success"?this.successLabel||this.localize.term("copied"):this.status==="error"?this.errorLabel||this.localize.term("error"):this.copyLabel||this.localize.term("copy")}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let e=this.value;if(this.from){const t=this.getRootNode(),n=this.from.includes("."),i=this.from.includes("[")&&this.from.includes("]");let a=this.from,u="";n?[a,u]=this.from.trim().split("."):i&&([a,u]=this.from.trim().replace(/\]$/,"").split("["));const h="getElementById"in t?t.getElementById(a):null;h?i?e=h.getAttribute(u)||"":n?e=h[u]||"":e=h.textContent||"":(this.showStatus("error"),this.dispatchEvent(new Gn))}if(!e)this.showStatus("error"),this.dispatchEvent(new Gn);else try{await navigator.clipboard.writeText(e),this.showStatus("success"),this.dispatchEvent(new Zu({value:e}))}catch{this.showStatus("error"),this.dispatchEvent(new Gn)}}async showStatus(e){const t=e==="success"?this.successIcon:this.errorIcon;await Je(this.copyIcon,"hide"),this.copyIcon.hidden=!0,this.status=e,t.hidden=!1,await Je(t,"show"),setTimeout(async()=>{await Je(t,"hide"),t.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await Je(this.copyIcon,"show"),this.isCopying=!1},this.feedbackDuration)}render(){return pe`
      <button
        class="button"
        part="button"
        type="button"
        id="copy-button"
        ?disabled=${this.disabled}
        @click=${this.handleCopy}
      >
        <!-- Render a visually hidden label to appease the accessibility checking gods -->
        <span class="wa-visually-hidden">${this.currentLabel}</span>
        <slot part="copy-icon" name="copy-icon">
          <wa-icon library="system" name="copy" variant="regular"></wa-icon>
        </slot>
        <slot part="success-icon" name="success-icon" variant="solid" hidden>
          <wa-icon library="system" name="check"></wa-icon>
        </slot>
        <slot part="error-icon" name="error-icon" variant="solid" hidden>
          <wa-icon library="system" name="xmark"></wa-icon>
        </slot>
        <wa-tooltip
          class=${Ot({"copy-button":!0,"copy-button-success":this.status==="success","copy-button-error":this.status==="error"})}
          for="copy-button"
          placement=${this.tooltipPlacement}
          ?disabled=${this.disabled}
          exportparts="
            base:tooltip__base,
            base__popup:tooltip__base__popup,
            base__arrow:tooltip__base__arrow,
            body:tooltip__body
          "
          >${this.currentLabel}</wa-tooltip
        >
      </button>
    `}};Me.css=[Xu,Qu];x([me('slot[name="copy-icon"]')],Me.prototype,"copyIcon",2);x([me('slot[name="success-icon"]')],Me.prototype,"successIcon",2);x([me('slot[name="error-icon"]')],Me.prototype,"errorIcon",2);x([me("wa-tooltip")],Me.prototype,"tooltip",2);x([Ge()],Me.prototype,"isCopying",2);x([Ge()],Me.prototype,"status",2);x([T()],Me.prototype,"value",2);x([T()],Me.prototype,"from",2);x([T({type:Boolean,reflect:!0})],Me.prototype,"disabled",2);x([T({attribute:"copy-label"})],Me.prototype,"copyLabel",2);x([T({attribute:"success-label"})],Me.prototype,"successLabel",2);x([T({attribute:"error-label"})],Me.prototype,"errorLabel",2);x([T({attribute:"feedback-duration",type:Number})],Me.prototype,"feedbackDuration",2);x([T({attribute:"tooltip-placement"})],Me.prototype,"tooltipPlacement",2);Me=x([He("wa-copy-button")],Me);var Ju=Se`
  :host {
    --max-width: 30ch;

    /** These styles are added so we don't interfere in the DOM. */
    display: inline-block;
    position: absolute;

    /** Defaults for inherited CSS properties */
    color: var(--wa-tooltip-content-color);
    font-size: var(--wa-tooltip-font-size);
    line-height: var(--wa-tooltip-line-height);
    text-align: start;
    white-space: normal;
  }

  .tooltip {
    --arrow-size: var(--wa-tooltip-arrow-size);
    --arrow-color: var(--wa-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: 1000;
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--wa-tooltip-border-radius);
    background-color: var(--wa-tooltip-background-color);
    border: var(--wa-tooltip-border-width) var(--wa-tooltip-border-style) var(--wa-tooltip-border-color);
    padding: 0.25em 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  .tooltip::part(arrow) {
    border-bottom: var(--wa-tooltip-border-width) var(--wa-tooltip-border-style) var(--wa-tooltip-border-color);
    border-right: var(--wa-tooltip-border-width) var(--wa-tooltip-border-style) var(--wa-tooltip-border-color);
  }
`;var ed=class extends Event{constructor(){super("wa-reposition",{bubbles:!0,cancelable:!1,composed:!0})}};var td=Se`
  :host {
    --arrow-color: black;
    --arrow-size: var(--wa-tooltip-arrow-size);
    --show-duration: 100ms;
    --hide-duration: 100ms;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);

    /* Clear UA styles for [popover] */
    :where(&) {
      inset: unset;
      padding: unset;
      margin: unset;
      width: unset;
      height: unset;
      color: unset;
      background: unset;
      border: unset;
      overflow: unset;
    }
  }

  .popup-fixed {
    position: fixed;
  }

  .popup:not(.popup-active) {
    display: none;
  }

  .arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: 3;
  }

  :host([data-current-placement~='left']) .arrow {
    rotate: -45deg;
  }

  :host([data-current-placement~='right']) .arrow {
    rotate: 135deg;
  }

  :host([data-current-placement~='bottom']) .arrow {
    rotate: 225deg;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge-visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: 899;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }

  /* Built-in animations */
  .show {
    animation: show var(--show-duration) ease;
  }

  .hide {
    animation: show var(--hide-duration) ease reverse;
  }

  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .show-with-scale {
    animation: show-with-scale var(--show-duration) ease;
  }

  .hide-with-scale {
    animation: show-with-scale var(--hide-duration) ease reverse;
  }

  @keyframes show-with-scale {
    from {
      opacity: 0;
      scale: 0.8;
    }
    to {
      opacity: 1;
      scale: 1;
    }
  }
`;const Kt=Math.min,at=Math.max,ro=Math.round,Nn=Math.floor,xt=e=>({x:e,y:e}),rd={left:"right",right:"left",bottom:"top",top:"bottom"},nd={start:"end",end:"start"};function Di(e,t,n){return at(e,Kt(t,n))}function Or(e,t){return typeof e=="function"?e(t):e}function Vt(e){return e.split("-")[0]}function Ir(e){return e.split("-")[1]}function dl(e){return e==="x"?"y":"x"}function ls(e){return e==="y"?"height":"width"}const od=new Set(["top","bottom"]);function Pt(e){return od.has(Vt(e))?"y":"x"}function cs(e){return dl(Pt(e))}function id(e,t,n){n===void 0&&(n=!1);const i=Ir(e),a=cs(e),u=ls(a);let h=a==="x"?i===(n?"end":"start")?"right":"left":i==="start"?"bottom":"top";return t.reference[u]>t.floating[u]&&(h=no(h)),[h,no(h)]}function sd(e){const t=no(e);return[Bi(e),t,Bi(t)]}function Bi(e){return e.replace(/start|end/g,t=>nd[t])}const ga=["left","right"],va=["right","left"],ad=["top","bottom"],ld=["bottom","top"];function cd(e,t,n){switch(e){case"top":case"bottom":return n?t?va:ga:t?ga:va;case"left":case"right":return t?ad:ld;default:return[]}}function ud(e,t,n,i){const a=Ir(e);let u=cd(Vt(e),n==="start",i);return a&&(u=u.map(h=>h+"-"+a),t&&(u=u.concat(u.map(Bi)))),u}function no(e){return e.replace(/left|right|bottom|top/g,t=>rd[t])}function dd(e){return{top:0,right:0,bottom:0,left:0,...e}}function hl(e){return typeof e!="number"?dd(e):{top:e,right:e,bottom:e,left:e}}function oo(e){const{x:t,y:n,width:i,height:a}=e;return{width:i,height:a,top:n,left:t,right:t+i,bottom:n+a,x:t,y:n}}function wa(e,t,n){let{reference:i,floating:a}=e;const u=Pt(t),h=cs(t),p=ls(h),g=Vt(t),k=u==="y",E=i.x+i.width/2-a.width/2,$=i.y+i.height/2-a.height/2,R=i[p]/2-a[p]/2;let D;switch(g){case"top":D={x:E,y:i.y-a.height};break;case"bottom":D={x:E,y:i.y+i.height};break;case"right":D={x:i.x+i.width,y:$};break;case"left":D={x:i.x-a.width,y:$};break;default:D={x:i.x,y:i.y}}switch(Ir(t)){case"start":D[h]-=R*(n&&k?-1:1);break;case"end":D[h]+=R*(n&&k?-1:1);break}return D}const hd=async(e,t,n)=>{const{placement:i="bottom",strategy:a="absolute",middleware:u=[],platform:h}=n,p=u.filter(Boolean),g=await(h.isRTL==null?void 0:h.isRTL(t));let k=await h.getElementRects({reference:e,floating:t,strategy:a}),{x:E,y:$}=wa(k,i,g),R=i,D={},j=0;for(let G=0;G<p.length;G++){const{name:te,fn:J}=p[G],{x:ie,y:X,data:Z,reset:H}=await J({x:E,y:$,initialPlacement:i,placement:R,strategy:a,middlewareData:D,rects:k,platform:h,elements:{reference:e,floating:t}});E=ie??E,$=X??$,D={...D,[te]:{...D[te],...Z}},H&&j<=50&&(j++,typeof H=="object"&&(H.placement&&(R=H.placement),H.rects&&(k=H.rects===!0?await h.getElementRects({reference:e,floating:t,strategy:a}):H.rects),{x:E,y:$}=wa(k,R,g)),G=-1)}return{x:E,y:$,placement:R,strategy:a,middlewareData:D}};async function us(e,t){var n;t===void 0&&(t={});const{x:i,y:a,platform:u,rects:h,elements:p,strategy:g}=e,{boundary:k="clippingAncestors",rootBoundary:E="viewport",elementContext:$="floating",altBoundary:R=!1,padding:D=0}=Or(t,e),j=hl(D),te=p[R?$==="floating"?"reference":"floating":$],J=oo(await u.getClippingRect({element:(n=await(u.isElement==null?void 0:u.isElement(te)))==null||n?te:te.contextElement||await(u.getDocumentElement==null?void 0:u.getDocumentElement(p.floating)),boundary:k,rootBoundary:E,strategy:g})),ie=$==="floating"?{x:i,y:a,width:h.floating.width,height:h.floating.height}:h.reference,X=await(u.getOffsetParent==null?void 0:u.getOffsetParent(p.floating)),Z=await(u.isElement==null?void 0:u.isElement(X))?await(u.getScale==null?void 0:u.getScale(X))||{x:1,y:1}:{x:1,y:1},H=oo(u.convertOffsetParentRelativeRectToViewportRelativeRect?await u.convertOffsetParentRelativeRectToViewportRelativeRect({elements:p,rect:ie,offsetParent:X,strategy:g}):ie);return{top:(J.top-H.top+j.top)/Z.y,bottom:(H.bottom-J.bottom+j.bottom)/Z.y,left:(J.left-H.left+j.left)/Z.x,right:(H.right-J.right+j.right)/Z.x}}const pd=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:i,placement:a,rects:u,platform:h,elements:p,middlewareData:g}=t,{element:k,padding:E=0}=Or(e,t)||{};if(k==null)return{};const $=hl(E),R={x:n,y:i},D=cs(a),j=ls(D),G=await h.getDimensions(k),te=D==="y",J=te?"top":"left",ie=te?"bottom":"right",X=te?"clientHeight":"clientWidth",Z=u.reference[j]+u.reference[D]-R[D]-u.floating[j],H=R[D]-u.reference[D],ae=await(h.getOffsetParent==null?void 0:h.getOffsetParent(k));let se=ae?ae[X]:0;(!se||!await(h.isElement==null?void 0:h.isElement(ae)))&&(se=p.floating[X]||u.floating[j]);const Ze=Z/2-H/2,qe=se/2-G[j]/2-1,Fe=Kt($[J],qe),ht=Kt($[ie],qe),Re=Fe,Le=se-G[j]-ht,Ie=se/2-G[j]/2+Ze,pt=Di(Re,Ie,Le),nt=!g.arrow&&Ir(a)!=null&&Ie!==pt&&u.reference[j]/2-(Ie<Re?Fe:ht)-G[j]/2<0,ot=nt?Ie<Re?Ie-Re:Ie-Le:0;return{[D]:R[D]+ot,data:{[D]:pt,centerOffset:Ie-pt-ot,...nt&&{alignmentOffset:ot}},reset:nt}}}),fd=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,i;const{placement:a,middlewareData:u,rects:h,initialPlacement:p,platform:g,elements:k}=t,{mainAxis:E=!0,crossAxis:$=!0,fallbackPlacements:R,fallbackStrategy:D="bestFit",fallbackAxisSideDirection:j="none",flipAlignment:G=!0,...te}=Or(e,t);if((n=u.arrow)!=null&&n.alignmentOffset)return{};const J=Vt(a),ie=Pt(p),X=Vt(p)===p,Z=await(g.isRTL==null?void 0:g.isRTL(k.floating)),H=R||(X||!G?[no(p)]:sd(p)),ae=j!=="none";!R&&ae&&H.push(...ud(p,G,j,Z));const se=[p,...H],Ze=await us(t,te),qe=[];let Fe=((i=u.flip)==null?void 0:i.overflows)||[];if(E&&qe.push(Ze[J]),$){const Ie=id(a,h,Z);qe.push(Ze[Ie[0]],Ze[Ie[1]])}if(Fe=[...Fe,{placement:a,overflows:qe}],!qe.every(Ie=>Ie<=0)){var ht,Re;const Ie=(((ht=u.flip)==null?void 0:ht.index)||0)+1,pt=se[Ie];if(pt&&(!($==="alignment"?ie!==Pt(pt):!1)||Fe.every(Ae=>Pt(Ae.placement)===ie?Ae.overflows[0]>0:!0)))return{data:{index:Ie,overflows:Fe},reset:{placement:pt}};let nt=(Re=Fe.filter(ot=>ot.overflows[0]<=0).sort((ot,Ae)=>ot.overflows[1]-Ae.overflows[1])[0])==null?void 0:Re.placement;if(!nt)switch(D){case"bestFit":{var Le;const ot=(Le=Fe.filter(Ae=>{if(ae){const Ue=Pt(Ae.placement);return Ue===ie||Ue==="y"}return!0}).map(Ae=>[Ae.placement,Ae.overflows.filter(Ue=>Ue>0).reduce((Ue,ft)=>Ue+ft,0)]).sort((Ae,Ue)=>Ae[1]-Ue[1])[0])==null?void 0:Le[0];ot&&(nt=ot);break}case"initialPlacement":nt=p;break}if(a!==nt)return{reset:{placement:nt}}}return{}}}},md=new Set(["left","top"]);async function gd(e,t){const{placement:n,platform:i,elements:a}=e,u=await(i.isRTL==null?void 0:i.isRTL(a.floating)),h=Vt(n),p=Ir(n),g=Pt(n)==="y",k=md.has(h)?-1:1,E=u&&g?-1:1,$=Or(t,e);let{mainAxis:R,crossAxis:D,alignmentAxis:j}=typeof $=="number"?{mainAxis:$,crossAxis:0,alignmentAxis:null}:{mainAxis:$.mainAxis||0,crossAxis:$.crossAxis||0,alignmentAxis:$.alignmentAxis};return p&&typeof j=="number"&&(D=p==="end"?j*-1:j),g?{x:D*E,y:R*k}:{x:R*k,y:D*E}}const vd=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var n,i;const{x:a,y:u,placement:h,middlewareData:p}=t,g=await gd(t,e);return h===((n=p.offset)==null?void 0:n.placement)&&(i=p.arrow)!=null&&i.alignmentOffset?{}:{x:a+g.x,y:u+g.y,data:{...g,placement:h}}}}},wd=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:i,placement:a}=t,{mainAxis:u=!0,crossAxis:h=!1,limiter:p={fn:te=>{let{x:J,y:ie}=te;return{x:J,y:ie}}},...g}=Or(e,t),k={x:n,y:i},E=await us(t,g),$=Pt(Vt(a)),R=dl($);let D=k[R],j=k[$];if(u){const te=R==="y"?"top":"left",J=R==="y"?"bottom":"right",ie=D+E[te],X=D-E[J];D=Di(ie,D,X)}if(h){const te=$==="y"?"top":"left",J=$==="y"?"bottom":"right",ie=j+E[te],X=j-E[J];j=Di(ie,j,X)}const G=p.fn({...t,[R]:D,[$]:j});return{...G,data:{x:G.x-n,y:G.y-i,enabled:{[R]:u,[$]:h}}}}}},yd=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var n,i;const{placement:a,rects:u,platform:h,elements:p}=t,{apply:g=()=>{},...k}=Or(e,t),E=await us(t,k),$=Vt(a),R=Ir(a),D=Pt(a)==="y",{width:j,height:G}=u.floating;let te,J;$==="top"||$==="bottom"?(te=$,J=R===(await(h.isRTL==null?void 0:h.isRTL(p.floating))?"start":"end")?"left":"right"):(J=$,te=R==="end"?"top":"bottom");const ie=G-E.top-E.bottom,X=j-E.left-E.right,Z=Kt(G-E[te],ie),H=Kt(j-E[J],X),ae=!t.middlewareData.shift;let se=Z,Ze=H;if((n=t.middlewareData.shift)!=null&&n.enabled.x&&(Ze=X),(i=t.middlewareData.shift)!=null&&i.enabled.y&&(se=ie),ae&&!R){const Fe=at(E.left,0),ht=at(E.right,0),Re=at(E.top,0),Le=at(E.bottom,0);D?Ze=j-2*(Fe!==0||ht!==0?Fe+ht:at(E.left,E.right)):se=G-2*(Re!==0||Le!==0?Re+Le:at(E.top,E.bottom))}await g({...t,availableWidth:Ze,availableHeight:se});const qe=await h.getDimensions(p.floating);return j!==qe.width||G!==qe.height?{reset:{rects:!0}}:{}}}};function mo(){return typeof window<"u"}function Tr(e){return pl(e)?(e.nodeName||"").toLowerCase():"#document"}function lt(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function St(e){var t;return(t=(pl(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function pl(e){return mo()?e instanceof Node||e instanceof lt(e).Node:!1}function gt(e){return mo()?e instanceof Element||e instanceof lt(e).Element:!1}function kt(e){return mo()?e instanceof HTMLElement||e instanceof lt(e).HTMLElement:!1}function ya(e){return!mo()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof lt(e).ShadowRoot}const bd=new Set(["inline","contents"]);function un(e){const{overflow:t,overflowX:n,overflowY:i,display:a}=vt(e);return/auto|scroll|overlay|hidden|clip/.test(t+i+n)&&!bd.has(a)}const xd=new Set(["table","td","th"]);function kd(e){return xd.has(Tr(e))}const _d=[":popover-open",":modal"];function go(e){return _d.some(t=>{try{return e.matches(t)}catch{return!1}})}const Sd=["transform","translate","scale","rotate","perspective"],Cd=["transform","translate","scale","rotate","perspective","filter"],Ed=["paint","layout","strict","content"];function vo(e){const t=ds(),n=gt(e)?vt(e):e;return Sd.some(i=>n[i]?n[i]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||Cd.some(i=>(n.willChange||"").includes(i))||Ed.some(i=>(n.contain||"").includes(i))}function Ad(e){let t=Wt(e);for(;kt(t)&&!Ar(t);){if(vo(t))return t;if(go(t))return null;t=Wt(t)}return null}function ds(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const $d=new Set(["html","body","#document"]);function Ar(e){return $d.has(Tr(e))}function vt(e){return lt(e).getComputedStyle(e)}function wo(e){return gt(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Wt(e){if(Tr(e)==="html")return e;const t=e.assignedSlot||e.parentNode||ya(e)&&e.host||St(e);return ya(t)?t.host:t}function fl(e){const t=Wt(e);return Ar(t)?e.ownerDocument?e.ownerDocument.body:e.body:kt(t)&&un(t)?t:fl(t)}function $r(e,t,n){var i;t===void 0&&(t=[]),n===void 0&&(n=!0);const a=fl(e),u=a===((i=e.ownerDocument)==null?void 0:i.body),h=lt(a);if(u){const p=ji(h);return t.concat(h,h.visualViewport||[],un(a)?a:[],p&&n?$r(p):[])}return t.concat(a,$r(a,[],n))}function ji(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function ml(e){const t=vt(e);let n=parseFloat(t.width)||0,i=parseFloat(t.height)||0;const a=kt(e),u=a?e.offsetWidth:n,h=a?e.offsetHeight:i,p=ro(n)!==u||ro(i)!==h;return p&&(n=u,i=h),{width:n,height:i,$:p}}function hs(e){return gt(e)?e:e.contextElement}function Cr(e){const t=hs(e);if(!kt(t))return xt(1);const n=t.getBoundingClientRect(),{width:i,height:a,$:u}=ml(t);let h=(u?ro(n.width):n.width)/i,p=(u?ro(n.height):n.height)/a;return(!h||!Number.isFinite(h))&&(h=1),(!p||!Number.isFinite(p))&&(p=1),{x:h,y:p}}const Pd=xt(0);function gl(e){const t=lt(e);return!ds()||!t.visualViewport?Pd:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function zd(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==lt(e)?!1:t}function dr(e,t,n,i){t===void 0&&(t=!1),n===void 0&&(n=!1);const a=e.getBoundingClientRect(),u=hs(e);let h=xt(1);t&&(i?gt(i)&&(h=Cr(i)):h=Cr(e));const p=zd(u,n,i)?gl(u):xt(0);let g=(a.left+p.x)/h.x,k=(a.top+p.y)/h.y,E=a.width/h.x,$=a.height/h.y;if(u){const R=lt(u),D=i&&gt(i)?lt(i):i;let j=R,G=ji(j);for(;G&&i&&D!==j;){const te=Cr(G),J=G.getBoundingClientRect(),ie=vt(G),X=J.left+(G.clientLeft+parseFloat(ie.paddingLeft))*te.x,Z=J.top+(G.clientTop+parseFloat(ie.paddingTop))*te.y;g*=te.x,k*=te.y,E*=te.x,$*=te.y,g+=X,k+=Z,j=lt(G),G=ji(j)}}return oo({width:E,height:$,x:g,y:k})}function yo(e,t){const n=wo(e).scrollLeft;return t?t.left+n:dr(St(e)).left+n}function vl(e,t){const n=e.getBoundingClientRect(),i=n.left+t.scrollLeft-yo(e,n),a=n.top+t.scrollTop;return{x:i,y:a}}function Od(e){let{elements:t,rect:n,offsetParent:i,strategy:a}=e;const u=a==="fixed",h=St(i),p=t?go(t.floating):!1;if(i===h||p&&u)return n;let g={scrollLeft:0,scrollTop:0},k=xt(1);const E=xt(0),$=kt(i);if(($||!$&&!u)&&((Tr(i)!=="body"||un(h))&&(g=wo(i)),kt(i))){const D=dr(i);k=Cr(i),E.x=D.x+i.clientLeft,E.y=D.y+i.clientTop}const R=h&&!$&&!u?vl(h,g):xt(0);return{width:n.width*k.x,height:n.height*k.y,x:n.x*k.x-g.scrollLeft*k.x+E.x+R.x,y:n.y*k.y-g.scrollTop*k.y+E.y+R.y}}function Id(e){return Array.from(e.getClientRects())}function Td(e){const t=St(e),n=wo(e),i=e.ownerDocument.body,a=at(t.scrollWidth,t.clientWidth,i.scrollWidth,i.clientWidth),u=at(t.scrollHeight,t.clientHeight,i.scrollHeight,i.clientHeight);let h=-n.scrollLeft+yo(e);const p=-n.scrollTop;return vt(i).direction==="rtl"&&(h+=at(t.clientWidth,i.clientWidth)-a),{width:a,height:u,x:h,y:p}}const ba=25;function Md(e,t){const n=lt(e),i=St(e),a=n.visualViewport;let u=i.clientWidth,h=i.clientHeight,p=0,g=0;if(a){u=a.width,h=a.height;const E=ds();(!E||E&&t==="fixed")&&(p=a.offsetLeft,g=a.offsetTop)}const k=yo(i);if(k<=0){const E=i.ownerDocument,$=E.body,R=getComputedStyle($),D=E.compatMode==="CSS1Compat"&&parseFloat(R.marginLeft)+parseFloat(R.marginRight)||0,j=Math.abs(i.clientWidth-$.clientWidth-D);j<=ba&&(u-=j)}else k<=ba&&(u+=k);return{width:u,height:h,x:p,y:g}}const Rd=new Set(["absolute","fixed"]);function Ld(e,t){const n=dr(e,!0,t==="fixed"),i=n.top+e.clientTop,a=n.left+e.clientLeft,u=kt(e)?Cr(e):xt(1),h=e.clientWidth*u.x,p=e.clientHeight*u.y,g=a*u.x,k=i*u.y;return{width:h,height:p,x:g,y:k}}function xa(e,t,n){let i;if(t==="viewport")i=Md(e,n);else if(t==="document")i=Td(St(e));else if(gt(t))i=Ld(t,n);else{const a=gl(e);i={x:t.x-a.x,y:t.y-a.y,width:t.width,height:t.height}}return oo(i)}function wl(e,t){const n=Wt(e);return n===t||!gt(n)||Ar(n)?!1:vt(n).position==="fixed"||wl(n,t)}function Dd(e,t){const n=t.get(e);if(n)return n;let i=$r(e,[],!1).filter(p=>gt(p)&&Tr(p)!=="body"),a=null;const u=vt(e).position==="fixed";let h=u?Wt(e):e;for(;gt(h)&&!Ar(h);){const p=vt(h),g=vo(h);!g&&p.position==="fixed"&&(a=null),(u?!g&&!a:!g&&p.position==="static"&&!!a&&Rd.has(a.position)||un(h)&&!g&&wl(e,h))?i=i.filter(E=>E!==h):a=p,h=Wt(h)}return t.set(e,i),i}function Bd(e){let{element:t,boundary:n,rootBoundary:i,strategy:a}=e;const h=[...n==="clippingAncestors"?go(t)?[]:Dd(t,this._c):[].concat(n),i],p=h[0],g=h.reduce((k,E)=>{const $=xa(t,E,a);return k.top=at($.top,k.top),k.right=Kt($.right,k.right),k.bottom=Kt($.bottom,k.bottom),k.left=at($.left,k.left),k},xa(t,p,a));return{width:g.right-g.left,height:g.bottom-g.top,x:g.left,y:g.top}}function jd(e){const{width:t,height:n}=ml(e);return{width:t,height:n}}function Nd(e,t,n){const i=kt(t),a=St(t),u=n==="fixed",h=dr(e,!0,u,t);let p={scrollLeft:0,scrollTop:0};const g=xt(0);function k(){g.x=yo(a)}if(i||!i&&!u)if((Tr(t)!=="body"||un(a))&&(p=wo(t)),i){const D=dr(t,!0,u,t);g.x=D.x+t.clientLeft,g.y=D.y+t.clientTop}else a&&k();u&&!i&&a&&k();const E=a&&!i&&!u?vl(a,p):xt(0),$=h.left+p.scrollLeft-g.x-E.x,R=h.top+p.scrollTop-g.y-E.y;return{x:$,y:R,width:h.width,height:h.height}}function wi(e){return vt(e).position==="static"}function ka(e,t){if(!kt(e)||vt(e).position==="fixed")return null;if(t)return t(e);let n=e.offsetParent;return St(e)===n&&(n=n.ownerDocument.body),n}function yl(e,t){const n=lt(e);if(go(e))return n;if(!kt(e)){let a=Wt(e);for(;a&&!Ar(a);){if(gt(a)&&!wi(a))return a;a=Wt(a)}return n}let i=ka(e,t);for(;i&&kd(i)&&wi(i);)i=ka(i,t);return i&&Ar(i)&&wi(i)&&!vo(i)?n:i||Ad(e)||n}const qd=async function(e){const t=this.getOffsetParent||yl,n=this.getDimensions,i=await n(e.floating);return{reference:Nd(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function Fd(e){return vt(e).direction==="rtl"}const Yn={convertOffsetParentRelativeRectToViewportRelativeRect:Od,getDocumentElement:St,getClippingRect:Bd,getOffsetParent:yl,getElementRects:qd,getClientRects:Id,getDimensions:jd,getScale:Cr,isElement:gt,isRTL:Fd};function bl(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function Ud(e,t){let n=null,i;const a=St(e);function u(){var p;clearTimeout(i),(p=n)==null||p.disconnect(),n=null}function h(p,g){p===void 0&&(p=!1),g===void 0&&(g=1),u();const k=e.getBoundingClientRect(),{left:E,top:$,width:R,height:D}=k;if(p||t(),!R||!D)return;const j=Nn($),G=Nn(a.clientWidth-(E+R)),te=Nn(a.clientHeight-($+D)),J=Nn(E),X={rootMargin:-j+"px "+-G+"px "+-te+"px "+-J+"px",threshold:at(0,Kt(1,g))||1};let Z=!0;function H(ae){const se=ae[0].intersectionRatio;if(se!==g){if(!Z)return h();se?h(!1,se):i=setTimeout(()=>{h(!1,1e-7)},1e3)}se===1&&!bl(k,e.getBoundingClientRect())&&h(),Z=!1}try{n=new IntersectionObserver(H,{...X,root:a.ownerDocument})}catch{n=new IntersectionObserver(H,X)}n.observe(e)}return h(!0),u}function xl(e,t,n,i){i===void 0&&(i={});const{ancestorScroll:a=!0,ancestorResize:u=!0,elementResize:h=typeof ResizeObserver=="function",layoutShift:p=typeof IntersectionObserver=="function",animationFrame:g=!1}=i,k=hs(e),E=a||u?[...k?$r(k):[],...$r(t)]:[];E.forEach(J=>{a&&J.addEventListener("scroll",n,{passive:!0}),u&&J.addEventListener("resize",n)});const $=k&&p?Ud(k,n):null;let R=-1,D=null;h&&(D=new ResizeObserver(J=>{let[ie]=J;ie&&ie.target===k&&D&&(D.unobserve(t),cancelAnimationFrame(R),R=requestAnimationFrame(()=>{var X;(X=D)==null||X.observe(t)})),n()}),k&&!g&&D.observe(k),D.observe(t));let j,G=g?dr(e):null;g&&te();function te(){const J=dr(e);G&&!bl(G,J)&&n(),G=J,j=requestAnimationFrame(te)}return n(),()=>{var J;E.forEach(ie=>{a&&ie.removeEventListener("scroll",n),u&&ie.removeEventListener("resize",n)}),$?.(),(J=D)==null||J.disconnect(),D=null,g&&cancelAnimationFrame(j)}}const kl=vd,_l=wd,Sl=fd,_a=yd,Kd=pd,Cl=(e,t,n)=>{const i=new Map,a={platform:Yn,...n},u={...a.platform,_c:i};return hd(e,t,{...a,platform:u})};function Vd(e){return Wd(e)}function yi(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function Wd(e){for(let t=e;t;t=yi(t))if(t instanceof Element&&getComputedStyle(t).display==="none")return null;for(let t=yi(e);t;t=yi(t)){if(!(t instanceof Element))continue;const n=getComputedStyle(t);if(n.display!=="contents"&&(n.position!=="static"||vo(n)||t.tagName==="BODY"))return t}return null}function Sa(e){return e!==null&&typeof e=="object"&&"getBoundingClientRect"in e&&("contextElement"in e?e instanceof Element:!0)}var qn=globalThis?.HTMLElement?.prototype.hasOwnProperty("popover"),fe=class extends rt{constructor(){super(...arguments),this.localize=new hr(this),this.active=!1,this.placement="top",this.boundary="viewport",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),n=this.placement.includes("top")||this.placement.includes("bottom");let i=0,a=0,u=0,h=0,p=0,g=0,k=0,E=0;n?e.top<t.top?(i=e.left,a=e.bottom,u=e.right,h=e.bottom,p=t.left,g=t.top,k=t.right,E=t.top):(i=t.left,a=t.bottom,u=t.right,h=t.bottom,p=e.left,g=e.top,k=e.right,E=e.top):e.left<t.left?(i=e.right,a=e.top,u=t.left,h=t.top,p=e.right,g=e.bottom,k=t.left,E=t.bottom):(i=t.right,a=t.top,u=e.left,h=e.top,p=t.right,g=t.bottom,k=e.left,E=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${i}px`),this.style.setProperty("--hover-bridge-top-left-y",`${a}px`),this.style.setProperty("--hover-bridge-top-right-x",`${u}px`),this.style.setProperty("--hover-bridge-top-right-y",`${h}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${p}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${g}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${k}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${E}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||Sa(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){!this.anchorEl||!this.active||(this.popup.showPopover?.(),this.cleanup=xl(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.popup.hidePopover?.(),this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl)return;const e=[kl({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(_a({apply:({rects:i})=>{const a=this.sync==="width"||this.sync==="both",u=this.sync==="height"||this.sync==="both";this.popup.style.width=a?`${i.reference.width}px`:"",this.popup.style.height=u?`${i.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height="");let t;qn&&!Sa(this.anchor)&&this.boundary==="scroll"&&(t=$r(this.anchorEl).filter(i=>i instanceof Element)),this.flip&&e.push(Sl({boundary:this.flipBoundary||t,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(_l({boundary:this.shiftBoundary||t,padding:this.shiftPadding})),this.autoSize?e.push(_a({boundary:this.autoSizeBoundary||t,padding:this.autoSizePadding,apply:({availableWidth:i,availableHeight:a})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${a}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${i}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(Kd({element:this.arrowEl,padding:this.arrowPadding}));const n=qn?i=>Yn.getOffsetParent(i,Vd):Yn.getOffsetParent;Cl(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:qn?"absolute":"fixed",platform:{...Yn,getOffsetParent:n}}).then(({x:i,y:a,middlewareData:u,placement:h})=>{const p=this.localize.dir()==="rtl",g={top:"bottom",right:"left",bottom:"top",left:"right"}[h.split("-")[0]];if(this.setAttribute("data-current-placement",h),Object.assign(this.popup.style,{left:`${i}px`,top:`${a}px`}),this.arrow){const k=u.arrow.x,E=u.arrow.y;let $="",R="",D="",j="";if(this.arrowPlacement==="start"){const G=typeof k=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";$=typeof E=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",R=p?G:"",j=p?"":G}else if(this.arrowPlacement==="end"){const G=typeof k=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";R=p?"":G,j=p?G:"",D=typeof E=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(j=typeof k=="number"?"calc(50% - var(--arrow-size-diagonal))":"",$=typeof E=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(j=typeof k=="number"?`${k}px`:"",$=typeof E=="number"?`${E}px`:"");Object.assign(this.arrowEl.style,{top:$,right:R,bottom:D,left:j,[g]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.dispatchEvent(new ed)}render(){return pe`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${Ot({"popup-hover-bridge":!0,"popup-hover-bridge-visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        popover="manual"
        part="popup"
        class=${Ot({popup:!0,"popup-active":this.active,"popup-fixed":!qn,"popup-has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?pe`<div part="arrow" class="arrow" role="presentation"></div>`:""}
      </div>
    `}};fe.css=td;x([me(".popup")],fe.prototype,"popup",2);x([me(".arrow")],fe.prototype,"arrowEl",2);x([T()],fe.prototype,"anchor",2);x([T({type:Boolean,reflect:!0})],fe.prototype,"active",2);x([T({reflect:!0})],fe.prototype,"placement",2);x([T()],fe.prototype,"boundary",2);x([T({type:Number})],fe.prototype,"distance",2);x([T({type:Number})],fe.prototype,"skidding",2);x([T({type:Boolean})],fe.prototype,"arrow",2);x([T({attribute:"arrow-placement"})],fe.prototype,"arrowPlacement",2);x([T({attribute:"arrow-padding",type:Number})],fe.prototype,"arrowPadding",2);x([T({type:Boolean})],fe.prototype,"flip",2);x([T({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(t=>t.trim()).filter(t=>t!==""),toAttribute:e=>e.join(" ")}})],fe.prototype,"flipFallbackPlacements",2);x([T({attribute:"flip-fallback-strategy"})],fe.prototype,"flipFallbackStrategy",2);x([T({type:Object})],fe.prototype,"flipBoundary",2);x([T({attribute:"flip-padding",type:Number})],fe.prototype,"flipPadding",2);x([T({type:Boolean})],fe.prototype,"shift",2);x([T({type:Object})],fe.prototype,"shiftBoundary",2);x([T({attribute:"shift-padding",type:Number})],fe.prototype,"shiftPadding",2);x([T({attribute:"auto-size"})],fe.prototype,"autoSize",2);x([T()],fe.prototype,"sync",2);x([T({type:Object})],fe.prototype,"autoSizeBoundary",2);x([T({attribute:"auto-size-padding",type:Number})],fe.prototype,"autoSizePadding",2);x([T({attribute:"hover-bridge",type:Boolean})],fe.prototype,"hoverBridge",2);fe=x([He("wa-popup")],fe);var bo=class extends Event{constructor(){super("wa-after-hide",{bubbles:!0,cancelable:!1,composed:!0})}},xo=class extends Event{constructor(){super("wa-after-show",{bubbles:!0,cancelable:!1,composed:!0})}},ko=class extends Event{constructor(e){super("wa-hide",{bubbles:!0,cancelable:!0,composed:!0}),this.detail=e}},_o=class extends Event{constructor(){super("wa-show",{bubbles:!0,cancelable:!0,composed:!0})}};const Hd="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let Gd=(e=21)=>{let t="",n=crypto.getRandomValues(new Uint8Array(e|=0));for(;e--;)t+=Hd[n[e]&63];return t};function Pf(e,t,n){const i=a=>Object.is(a,-0)?0:a;return e<t?i(t):e>n?i(n):i(e)}function El(e=""){return`${e}${Gd()}`}function io(e,t){return new Promise(n=>{function i(a){a.target===e&&(e.removeEventListener(t,i),n())}e.addEventListener(t,i)})}var be=class extends rt{constructor(){super(...arguments),this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.showDelay=150,this.hideDelay=0,this.trigger="hover focus",this.withoutArrow=!1,this.for=null,this.anchor=null,this.eventController=new AbortController,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{e.key==="Escape"&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{this.hasTrigger("hover")&&(clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),this.showDelay))},this.handleMouseOut=()=>{this.hasTrigger("hover")&&(clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),this.hideDelay))}}connectedCallback(){super.connectedCallback(),this.eventController.signal.aborted&&(this.eventController=new AbortController),this.open&&(this.open=!1,this.updateComplete.then(()=>{this.open=!0})),this.id||(this.id=El("wa-tooltip-")),this.for&&this.anchor?(this.anchor=null,this.handleForChange()):this.for&&this.handleForChange()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleDocumentKeyDown),this.eventController.abort(),this.anchor&&this.removeFromAriaLabelledBy(this.anchor,this.id)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}addToAriaLabelledBy(e,t){const i=(e.getAttribute("aria-labelledby")||"").split(/\s+/).filter(Boolean);i.includes(t)||(i.push(t),e.setAttribute("aria-labelledby",i.join(" ")))}removeFromAriaLabelledBy(e,t){const a=(e.getAttribute("aria-labelledby")||"").split(/\s+/).filter(Boolean).filter(u=>u!==t);a.length>0?e.setAttribute("aria-labelledby",a.join(" ")):e.removeAttribute("aria-labelledby")}async handleOpenChange(){if(this.open){if(this.disabled)return;const e=new _o;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}document.addEventListener("keydown",this.handleDocumentKeyDown,{signal:this.eventController.signal}),this.body.hidden=!1,this.popup.active=!0,await Je(this.popup.popup,"show-with-scale"),this.popup.reposition(),this.dispatchEvent(new xo)}else{const e=new ko;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}document.removeEventListener("keydown",this.handleDocumentKeyDown),await Je(this.popup.popup,"hide-with-scale"),this.popup.active=!1,this.body.hidden=!0,this.dispatchEvent(new bo)}}handleForChange(){const e=this.getRootNode();if(!e)return;const t=this.for?e.getElementById(this.for):null,n=this.anchor;if(t===n)return;const{signal:i}=this.eventController;t&&(this.addToAriaLabelledBy(t,this.id),t.addEventListener("blur",this.handleBlur,{capture:!0,signal:i}),t.addEventListener("focus",this.handleFocus,{capture:!0,signal:i}),t.addEventListener("click",this.handleClick,{signal:i}),t.addEventListener("mouseover",this.handleMouseOver,{signal:i}),t.addEventListener("mouseout",this.handleMouseOut,{signal:i})),n&&(this.removeFromAriaLabelledBy(n,this.id),n.removeEventListener("blur",this.handleBlur,{capture:!0}),n.removeEventListener("focus",this.handleFocus,{capture:!0}),n.removeEventListener("click",this.handleClick),n.removeEventListener("mouseover",this.handleMouseOver),n.removeEventListener("mouseout",this.handleMouseOut)),this.anchor=t}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,io(this,"wa-after-show")}async hide(){if(this.open)return this.open=!1,io(this,"wa-after-hide")}render(){return pe`
      <wa-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${Ot({tooltip:!0,"tooltip-open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        flip
        shift
        ?arrow=${!this.withoutArrow}
        hover-bridge
        .anchor=${this.anchor}
      >
        <div part="body" class="body">
          <slot></slot>
        </div>
      </wa-popup>
    `}};be.css=Ju;be.dependencies={"wa-popup":fe};x([me("slot:not([name])")],be.prototype,"defaultSlot",2);x([me(".body")],be.prototype,"body",2);x([me("wa-popup")],be.prototype,"popup",2);x([T()],be.prototype,"placement",2);x([T({type:Boolean,reflect:!0})],be.prototype,"disabled",2);x([T({type:Number})],be.prototype,"distance",2);x([T({type:Boolean,reflect:!0})],be.prototype,"open",2);x([T({type:Number})],be.prototype,"skidding",2);x([T({attribute:"show-delay",type:Number})],be.prototype,"showDelay",2);x([T({attribute:"hide-delay",type:Number})],be.prototype,"hideDelay",2);x([T()],be.prototype,"trigger",2);x([T({attribute:"without-arrow",type:Boolean,reflect:!0})],be.prototype,"withoutArrow",2);x([T()],be.prototype,"for",2);x([Ge()],be.prototype,"anchor",2);x([Ye("open",{waitUntilFirstUpdate:!0})],be.prototype,"handleOpenChange",1);x([Ye("for")],be.prototype,"handleForChange",1);x([Ye(["distance","placement","skidding"])],be.prototype,"handleOptionsChange",1);x([Ye("disabled")],be.prototype,"handleDisabledChange",1);be=x([He("wa-tooltip")],be);var Yd=(e={})=>{let{validationElement:t,validationProperty:n}=e;t||(t=Object.assign(document.createElement("input"),{required:!0})),n||(n="value");const i={observedAttributes:["required"],message:t.validationMessage,checkValidity(a){const u={message:"",isValid:!0,invalidKeys:[]};return(a.required??a.hasAttribute("required"))&&!a[n]&&(u.message=typeof i.message=="function"?i.message(a):i.message||"",u.isValid=!1,u.invalidKeys.push("valueMissing")),u}};return i};var Al=Se`
  :host {
    display: flex;
    flex-direction: column;
  }

  /* Label */
  :is([part~='form-control-label'], [part~='label']):has(*:not(:empty)) {
    display: inline-flex;
    color: var(--wa-form-control-label-color);
    font-weight: var(--wa-form-control-label-font-weight);
    line-height: var(--wa-form-control-label-line-height);
    margin-block-end: 0.5em;
  }

  :host([required]) :is([part~='form-control-label'], [part~='label'])::after {
    content: var(--wa-form-control-required-content);
    margin-inline-start: var(--wa-form-control-required-content-offset);
    color: var(--wa-form-control-required-content-color);
  }

  /* Help text */
  [part~='hint'] {
    display: block;
    color: var(--wa-form-control-hint-color);
    font-weight: var(--wa-form-control-hint-font-weight);
    line-height: var(--wa-form-control-hint-line-height);
    margin-block-start: 0.5em;
    font-size: var(--wa-font-size-smaller);
    line-height: var(--wa-form-control-label-line-height);

    &:not(.has-slotted) {
      display: none;
    }
  }
`;var Xd=Se`
  :host {
    --checked-icon-color: var(--wa-color-brand-on-loud);
    --checked-icon-scale: 0.8;

    display: inline-flex;
    color: var(--wa-form-control-value-color);
    font-family: inherit;
    font-weight: var(--wa-form-control-value-font-weight);
    line-height: var(--wa-form-control-value-line-height);
    user-select: none;
    -webkit-user-select: none;
  }

  [part~='control'] {
    display: inline-flex;
    flex: 0 0 auto;
    position: relative;
    align-items: center;
    justify-content: center;
    width: var(--wa-form-control-toggle-size);
    height: var(--wa-form-control-toggle-size);
    border-color: var(--wa-form-control-border-color);
    border-radius: min(
      calc(var(--wa-form-control-toggle-size) * 0.375),
      var(--wa-border-radius-s)
    ); /* min prevents entirely circular checkbox */
    border-style: var(--wa-border-style);
    border-width: var(--wa-form-control-border-width);
    background-color: var(--wa-form-control-background-color);
    transition:
      background var(--wa-transition-normal),
      border-color var(--wa-transition-fast),
      box-shadow var(--wa-transition-fast),
      color var(--wa-transition-fast);
    transition-timing-function: var(--wa-transition-easing);

    margin-inline-end: 0.5em;
  }

  [part~='base'] {
    display: flex;
    align-items: flex-start;
    position: relative;
    color: currentColor;
    vertical-align: middle;
    cursor: pointer;
  }

  [part~='label'] {
    display: inline;
  }

  /* Checked */
  [part~='control']:has(:checked, :indeterminate) {
    color: var(--checked-icon-color);
    border-color: var(--wa-form-control-activated-color);
    background-color: var(--wa-form-control-activated-color);
  }

  /* Focus */
  [part~='control']:has(> input:focus-visible:not(:disabled)) {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  /* Disabled */
  :host [part~='base']:has(input:disabled) {
    opacity: 0.5;
    cursor: not-allowed;
  }

  input {
    position: absolute;
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    pointer-events: none;
  }

  [part~='icon'] {
    display: flex;
    scale: var(--checked-icon-scale);

    /* Without this, Safari renders the icon slightly to the left */
    &::part(svg) {
      translate: 0.0009765625em;
    }

    input:not(:checked, :indeterminate) + & {
      visibility: hidden;
    }
  }

  :host([required]) [part~='label']::after {
    content: var(--wa-form-control-required-content);
    color: var(--wa-form-control-required-content-color);
    margin-inline-start: var(--wa-form-control-required-content-offset);
  }
`;const Ni=ss(class extends as{constructor(e){if(super(e),e.type!==qt.PROPERTY&&e.type!==qt.ATTRIBUTE&&e.type!==qt.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Hu(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===dt||t===ye)return t;const n=e.element,i=e.name;if(e.type===qt.PROPERTY){if(t===n[i])return dt}else if(e.type===qt.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(i))return dt}else if(e.type===qt.ATTRIBUTE&&n.getAttribute(i)===t+"")return dt;return ul(e),t}});var Oe=class extends ct{constructor(){super(...arguments),this.hasSlotController=new cn(this,"hint"),this.title="",this.name="",this._value=this.getAttribute("value")??null,this.size="medium",this.disabled=!1,this.indeterminate=!1,this.checked=this.hasAttribute("checked"),this.defaultChecked=this.hasAttribute("checked"),this.required=!1,this.hint=""}static get validators(){const e=[Yd({validationProperty:"checked",validationElement:Object.assign(document.createElement("input"),{type:"checkbox",required:!0})})];return[...super.validators,...e]}get value(){const e=this._value||"on";return this.checked?e:null}set value(e){this._value=e}handleClick(){this.hasInteracted=!0,this.checked=!this.checked,this.indeterminate=!1,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleDefaultCheckedChange(){!this.hasInteracted&&this.checked!==this.defaultChecked&&(this.checked=this.defaultChecked,this.handleValueOrCheckedChange())}handleValueOrCheckedChange(){this.setValue(this.checked?this.value:null,this._value),this.updateValidity()}handleStateChange(){this.hasUpdated&&(this.input.checked=this.checked,this.input.indeterminate=this.indeterminate),this.customStates.set("checked",this.checked),this.customStates.set("indeterminate",this.indeterminate),this.updateValidity()}handleDisabledChange(){this.customStates.set("disabled",this.disabled)}willUpdate(e){super.willUpdate(e),e.has("defaultChecked")&&(this.hasInteracted||(this.checked=this.defaultChecked)),(e.has("value")||e.has("checked"))&&this.handleValueOrCheckedChange()}formResetCallback(){this.checked=this.defaultChecked,super.formResetCallback(),this.handleValueOrCheckedChange()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}render(){const e=this.hasSlotController.test("hint"),t=this.hint?!0:!!e,n=!this.checked&&this.indeterminate,i=n?"indeterminate":"check",a=n?"indeterminate":"check";return pe`
      <label part="base">
        <span part="control">
          <input
            class="input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${Ee(this._value)}
            .indeterminate=${Ni(this.indeterminate)}
            .checked=${Ni(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="hint"
            @click=${this.handleClick}
          />

          <wa-icon part="${a}-icon icon" library="system" name=${i}></wa-icon>
        </span>

        <slot part="label"></slot>
      </label>

      <slot
        id="hint"
        part="hint"
        name="hint"
        aria-hidden=${t?"false":"true"}
        class="${Ot({"has-slotted":t})}"
      >
        ${this.hint}
      </slot>
    `}};Oe.css=[Al,fo,Xd];Oe.shadowRootOptions={...ct.shadowRootOptions,delegatesFocus:!0};x([me('input[type="checkbox"]')],Oe.prototype,"input",2);x([T()],Oe.prototype,"title",2);x([T({reflect:!0})],Oe.prototype,"name",2);x([T({reflect:!0})],Oe.prototype,"value",1);x([T({reflect:!0})],Oe.prototype,"size",2);x([T({type:Boolean})],Oe.prototype,"disabled",2);x([T({type:Boolean,reflect:!0})],Oe.prototype,"indeterminate",2);x([T({type:Boolean,attribute:!1})],Oe.prototype,"checked",2);x([T({type:Boolean,reflect:!0,attribute:"checked"})],Oe.prototype,"defaultChecked",2);x([T({type:Boolean,reflect:!0})],Oe.prototype,"required",2);x([T()],Oe.prototype,"hint",2);x([Ye("defaultChecked")],Oe.prototype,"handleDefaultCheckedChange",1);x([Ye(["checked","indeterminate"])],Oe.prototype,"handleStateChange",1);x([Ye("disabled")],Oe.prototype,"handleDisabledChange",1);Oe=x([He("wa-checkbox")],Oe);var Qd=Se`
  :host {
    --spacing: var(--wa-space-m);
    --show-duration: 200ms;
    --hide-duration: 200ms;

    display: block;
  }

  details {
    display: block;
    overflow-anchor: none;
    border: var(--wa-panel-border-width) var(--wa-color-surface-border) var(--wa-panel-border-style);
    background-color: var(--wa-color-surface-default);
    border-radius: var(--wa-panel-border-radius);
    color: var(--wa-color-text-normal);

    /* Print styles */
    @media print {
      background: none;
      border: solid var(--wa-border-width-s) var(--wa-color-surface-border);

      summary {
        list-style: none;
      }
    }
  }

  /* Appearance modifiers */
  :host([appearance='plain']) details {
    background-color: transparent;
    border-color: transparent;
    border-radius: 0;
  }

  :host([appearance='outlined']) details {
    background-color: var(--wa-color-surface-default);
    border-color: var(--wa-color-surface-border);
  }

  :host([appearance='filled']) details {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: transparent;
  }

  :host([appearance='filled-outlined']) details {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-color-neutral-border-quiet);
  }

  :host([disabled]) details {
    opacity: 0.5;
    cursor: not-allowed;
  }

  summary {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--spacing);
    padding: var(--spacing); /* Add padding here */
    border-radius: calc(var(--wa-panel-border-radius) - var(--wa-panel-border-width));
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;

    &::marker,
    &::-webkit-details-marker {
      display: none;
    }

    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline: var(--wa-focus-ring);
      outline-offset: calc(var(--wa-panel-border-width) + var(--wa-focus-ring-offset));
    }
  }

  :host([open]) summary {
    border-end-start-radius: 0;
    border-end-end-radius: 0;
  }

  /* 'Start' icon placement */
  :host([icon-placement='start']) summary {
    flex-direction: row-reverse;
    justify-content: start;
  }

  [part~='icon'] {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    color: var(--wa-color-text-quiet);
    transition: rotate var(--wa-transition-normal) var(--wa-transition-easing);
  }

  :host([open]) [part~='icon'] {
    rotate: 90deg;
  }

  :host([open]:dir(rtl)) [part~='icon'] {
    rotate: -90deg;
  }

  :host([open]) slot[name='expand-icon'],
  :host(:not([open])) slot[name='collapse-icon'] {
    display: none;
  }

  .body.animating {
    overflow: hidden;
  }

  .content {
    display: block;
    padding-block-start: var(--spacing);
    padding-inline: var(--spacing); /* Add horizontal padding */
    padding-block-end: var(--spacing); /* Add bottom padding */
  }
`;var Ve=class extends rt{constructor(){super(...arguments),this.localize=new hr(this),this.isAnimating=!1,this.open=!1,this.disabled=!1,this.appearance="outlined",this.iconPlacement="end"}disconnectedCallback(){super.disconnectedCallback(),this.detailsObserver?.disconnect()}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(e=>{for(const t of e)t.type==="attributes"&&t.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}updated(e){e.has("isAnimating")&&this.customStates.set("animating",this.isAnimating)}handleSummaryClick(e){e.composedPath().some(i=>{if(!(i instanceof HTMLElement))return!1;const a=i.tagName?.toLowerCase();return["a","button","input","textarea","select"].includes(a)?!0:i instanceof ct?!("disabled"in i)||!i.disabled:!1})||(e.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus()))}handleSummaryKeyDown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.open?this.hide():this.show()),(e.key==="ArrowUp"||e.key==="ArrowLeft")&&(e.preventDefault(),this.hide()),(e.key==="ArrowDown"||e.key==="ArrowRight")&&(e.preventDefault(),this.show())}closeOthersWithSameName(){if(!this.name)return;this.getRootNode().querySelectorAll(`wa-details[name="${this.name}"]`).forEach(n=>{n!==this&&n.open&&(n.open=!1)})}async handleOpenChange(){if(this.open){this.details.open=!0;const e=new _o;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1,this.details.open=!1;return}this.closeOthersWithSameName(),this.isAnimating=!0;const t=ma(getComputedStyle(this.body).getPropertyValue("--show-duration"));await fa(this.body,[{height:"0",opacity:"0"},{height:`${this.body.scrollHeight}px`,opacity:"1"}],{duration:t,easing:"linear"}),this.body.style.height="auto",this.isAnimating=!1,this.dispatchEvent(new xo)}else{const e=new ko;if(this.dispatchEvent(e),e.defaultPrevented){this.details.open=!0,this.open=!0;return}this.isAnimating=!0;const t=ma(getComputedStyle(this.body).getPropertyValue("--hide-duration"));await fa(this.body,[{height:`${this.body.scrollHeight}px`,opacity:"1"},{height:"0",opacity:"0"}],{duration:t,easing:"linear"}),this.body.style.height="auto",this.isAnimating=!1,this.details.open=!1,this.dispatchEvent(new bo)}}async show(){if(!(this.open||this.disabled))return this.open=!0,io(this,"wa-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,io(this,"wa-after-hide")}render(){const e=this.hasUpdated?this.localize.dir()==="rtl":this.dir==="rtl";return pe`
      <details part="base">
        <summary
          part="header"
          role="button"
          aria-expanded=${this.open?"true":"false"}
          aria-controls="content"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary">${this.summary}</slot>

          <span part="icon">
            <slot name="expand-icon">
              <wa-icon library="system" variant="solid" name=${e?"chevron-left":"chevron-right"}></wa-icon>
            </slot>
            <slot name="collapse-icon">
              <wa-icon library="system" variant="solid" name=${e?"chevron-left":"chevron-right"}></wa-icon>
            </slot>
          </span>
        </summary>

        <div
          class=${Ot({body:!0,animating:this.isAnimating})}
          role="region"
          aria-labelledby="header"
        >
          <slot part="content" id="content" class="content"></slot>
        </div>
      </details>
    `}};Ve.css=Qd;x([me("details")],Ve.prototype,"details",2);x([me("summary")],Ve.prototype,"header",2);x([me(".body")],Ve.prototype,"body",2);x([me(".expand-icon-slot")],Ve.prototype,"expandIconSlot",2);x([Ge()],Ve.prototype,"isAnimating",2);x([T({type:Boolean,reflect:!0})],Ve.prototype,"open",2);x([T()],Ve.prototype,"summary",2);x([T({reflect:!0})],Ve.prototype,"name",2);x([T({type:Boolean,reflect:!0})],Ve.prototype,"disabled",2);x([T({reflect:!0})],Ve.prototype,"appearance",2);x([T({attribute:"icon-placement",reflect:!0})],Ve.prototype,"iconPlacement",2);x([Ye("open",{waitUntilFirstUpdate:!0})],Ve.prototype,"handleOpenChange",1);Ve=x([He("wa-details")],Ve);var Zd=Se`
  :host {
    --width: 31rem;
    --spacing: var(--wa-space-l);
    --show-duration: 200ms;
    --hide-duration: 200ms;

    display: none;
  }

  :host([open]) {
    display: block;
  }

  .dialog {
    display: flex;
    flex-direction: column;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: var(--width);
    max-width: calc(100% - var(--wa-space-2xl));
    max-height: calc(100% - var(--wa-space-2xl));
    background-color: var(--wa-color-surface-raised);
    border-radius: var(--wa-panel-border-radius);
    border: none;
    box-shadow: var(--wa-shadow-l);
    padding: 0;
    margin: auto;

    &.show {
      animation: show-dialog var(--show-duration) ease;

      &::backdrop {
        animation: show-backdrop var(--show-duration, 200ms) ease;
      }
    }

    &.hide {
      animation: show-dialog var(--hide-duration) ease reverse;

      &::backdrop {
        animation: show-backdrop var(--hide-duration, 200ms) ease reverse;
      }
    }

    &.pulse {
      animation: pulse 250ms ease;
    }
  }

  .dialog:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog {
      max-height: 80vh;
    }
  }

  .open {
    display: flex;
    opacity: 1;
  }

  .header {
    flex: 0 0 auto;
    display: flex;
    flex-wrap: nowrap;

    padding-inline-start: var(--spacing);
    padding-block-end: 0;

    /* Subtract the close button's padding so that the X is visually aligned with the edges of the dialog content */
    padding-inline-end: calc(var(--spacing) - var(--wa-form-control-padding-block));
    padding-block-start: calc(var(--spacing) - var(--wa-form-control-padding-block));
  }

  .title {
    align-self: center;
    flex: 1 1 auto;
    font-family: inherit;
    font-size: var(--wa-font-size-l);
    font-weight: var(--wa-font-weight-heading);
    line-height: var(--wa-line-height-condensed);
    margin: 0;
  }

  .header-actions {
    align-self: start;
    display: flex;
    flex-shrink: 0;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--wa-space-2xs);
    padding-inline-start: var(--spacing);
  }

  .header-actions wa-button,
  .header-actions ::slotted(wa-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .body {
    flex: 1 1 auto;
    display: block;
    padding: var(--spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;

    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline: var(--wa-focus-ring);
      outline-offset: var(--wa-focus-ring-offset);
    }
  }

  .footer {
    flex: 0 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: var(--wa-space-xs);
    justify-content: end;
    padding: var(--spacing);
    padding-block-start: 0;
  }

  .footer ::slotted(wa-button:not(:first-of-type)) {
    margin-inline-start: var(--wa-spacing-xs);
  }

  .dialog::backdrop {
    /*
      NOTE: the ::backdrop element doesn't inherit properly in Safari yet, but it will in 17.4! At that time, we can
      remove the fallback values here.
    */
    background-color: var(--wa-color-overlay-modal, rgb(0 0 0 / 0.25));
  }

  @keyframes pulse {
    0% {
      scale: 1;
    }
    50% {
      scale: 1.02;
    }
    100% {
      scale: 1;
    }
  }

  @keyframes show-dialog {
    from {
      opacity: 0;
      scale: 0.8;
    }
    to {
      opacity: 1;
      scale: 1;
    }
  }

  @keyframes show-backdrop {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (forced-colors: active) {
    .dialog {
      border: solid 1px white;
    }
  }
`;function Jd(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}var qi=new Set;function eh(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function th(){const e=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(e)||!e?0:e}function Ca(e){if(qi.add(e),!document.documentElement.classList.contains("wa-scroll-lock")){const t=eh()+th();let n=getComputedStyle(document.documentElement).scrollbarGutter;(!n||n==="auto")&&(n="stable"),t<2&&(n=""),document.documentElement.style.setProperty("--wa-scroll-lock-gutter",n),document.documentElement.classList.add("wa-scroll-lock"),document.documentElement.style.setProperty("--wa-scroll-lock-size",`${t}px`)}}function Ea(e){qi.delete(e),qi.size===0&&(document.documentElement.classList.remove("wa-scroll-lock"),document.documentElement.style.removeProperty("--wa-scroll-lock-size"))}function zf(e,t,n="vertical",i="smooth"){const a=Jd(e,t),u=a.top+t.scrollTop,h=a.left+t.scrollLeft,p=t.scrollLeft,g=t.scrollLeft+t.offsetWidth,k=t.scrollTop,E=t.scrollTop+t.offsetHeight;(n==="horizontal"||n==="both")&&(h<p?t.scrollTo({left:h,behavior:i}):h+e.clientWidth>g&&t.scrollTo({left:h-t.offsetWidth+e.clientWidth,behavior:i})),(n==="vertical"||n==="both")&&(u<k?t.scrollTo({top:u,behavior:i}):u+e.clientHeight>E&&t.scrollTo({top:u-t.offsetHeight+e.clientHeight,behavior:i}))}function rh(e){return e.split(" ").map(t=>t.trim()).filter(t=>t!=="")}var It=class extends rt{constructor(){super(...arguments),this.localize=new hr(this),this.hasSlotController=new cn(this,"footer","header-actions","label"),this.open=!1,this.label="",this.withoutHeader=!1,this.lightDismiss=!1,this.handleDocumentKeyDown=e=>{e.key==="Escape"&&this.open&&(e.preventDefault(),e.stopPropagation(),this.requestClose(this.dialog))}}firstUpdated(){this.open&&(this.addOpenListeners(),this.dialog.showModal(),Ca(this))}disconnectedCallback(){super.disconnectedCallback(),Ea(this),this.removeOpenListeners()}async requestClose(e){const t=new ko({source:e});if(this.dispatchEvent(t),t.defaultPrevented){this.open=!0,Je(this.dialog,"pulse");return}this.removeOpenListeners(),await Je(this.dialog,"hide"),this.open=!1,this.dialog.close(),Ea(this);const n=this.originalTrigger;typeof n?.focus=="function"&&setTimeout(()=>n.focus()),this.dispatchEvent(new bo)}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}handleDialogCancel(e){e.preventDefault(),!this.dialog.classList.contains("hide")&&e.target===this.dialog&&this.requestClose(this.dialog)}handleDialogClick(e){const n=e.target.closest('[data-dialog="close"]');n&&(e.stopPropagation(),this.requestClose(n))}async handleDialogPointerDown(e){e.target===this.dialog&&(this.lightDismiss?this.requestClose(this.dialog):await Je(this.dialog,"pulse"))}handleOpenChange(){this.open&&!this.dialog.open?this.show():!this.open&&this.dialog.open&&(this.open=!0,this.requestClose(this.dialog))}async show(){const e=new _o;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}this.addOpenListeners(),this.originalTrigger=document.activeElement,this.open=!0,this.dialog.showModal(),Ca(this),requestAnimationFrame(()=>{const t=this.querySelector("[autofocus]");t&&typeof t.focus=="function"?t.focus():this.dialog.focus()}),await Je(this.dialog,"show"),this.dispatchEvent(new xo)}render(){const e=!this.withoutHeader,t=this.hasSlotController.test("footer");return pe`
      <dialog
        part="dialog"
        class=${Ot({dialog:!0,open:this.open})}
        @cancel=${this.handleDialogCancel}
        @click=${this.handleDialogClick}
        @pointerdown=${this.handleDialogPointerDown}
      >
        ${e?pe`
              <header part="header" class="header">
                <h2 part="title" class="title" id="title">
                  <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                  <slot name="label"> ${this.label.length>0?this.label:"​"} </slot>
                </h2>
                <div part="header-actions" class="header-actions">
                  <slot name="header-actions"></slot>
                  <wa-button
                    part="close-button"
                    exportparts="base:close-button__base"
                    class="close"
                    appearance="plain"
                    @click="${n=>this.requestClose(n.target)}"
                  >
                    <wa-icon
                      name="xmark"
                      label=${this.localize.term("close")}
                      library="system"
                      variant="solid"
                    ></wa-icon>
                  </wa-button>
                </div>
              </header>
            `:""}

        <div part="body" class="body"><slot></slot></div>

        ${t?pe`
              <footer part="footer" class="footer">
                <slot name="footer"></slot>
              </footer>
            `:""}
      </dialog>
    `}};It.css=Zd;x([me(".dialog")],It.prototype,"dialog",2);x([T({type:Boolean,reflect:!0})],It.prototype,"open",2);x([T({reflect:!0})],It.prototype,"label",2);x([T({attribute:"without-header",type:Boolean,reflect:!0})],It.prototype,"withoutHeader",2);x([T({attribute:"light-dismiss",type:Boolean})],It.prototype,"lightDismiss",2);x([Ye("open",{waitUntilFirstUpdate:!0})],It.prototype,"handleOpenChange",1);It=x([He("wa-dialog")],It);document.addEventListener("click",e=>{const t=e.target.closest("[data-dialog]");if(t instanceof Element){const[n,i]=rh(t.getAttribute("data-dialog")||"");if(n==="open"&&i?.length){const u=t.getRootNode().getElementById(i);u?.localName==="wa-dialog"?u.open=!0:console.warn(`A dialog with an ID of "${i}" could not be found in this document.`)}}});document.addEventListener("pointerdown",()=>{});var nh=Se`
  :host {
    border-width: 0;
  }

  .textarea {
    display: grid;
    align-items: center;
    margin: 0;
    border: none;
    outline: none;
    cursor: inherit;
    font: inherit;
    background-color: var(--wa-form-control-background-color);
    border-color: var(--wa-form-control-border-color);
    border-radius: var(--wa-form-control-border-radius);
    border-style: var(--wa-form-control-border-style);
    border-width: var(--wa-form-control-border-width);
    -webkit-appearance: none;

    &:focus-within {
      outline: var(--wa-focus-ring);
      outline-offset: var(--wa-focus-ring-offset);
    }
  }

  /* Appearance modifiers */
  :host([appearance='outlined']) .textarea {
    background-color: var(--wa-form-control-background-color);
    border-color: var(--wa-form-control-border-color);
  }

  :host([appearance='filled']) .textarea {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-color-neutral-fill-quiet);
  }

  :host([appearance='filled-outlined']) .textarea {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-form-control-border-color);
  }

  textarea {
    display: block;
    width: 100%;
    border: none;
    background: transparent;
    font: inherit;
    color: inherit;
    padding: calc(var(--wa-form-control-padding-block) - ((1lh - 1em) / 2)) var(--wa-form-control-padding-inline); /* accounts for the larger line height of textarea content */
    min-height: calc(var(--wa-form-control-height) - var(--border-width) * 2);
    box-shadow: none;
    margin: 0;

    &::placeholder {
      color: var(--wa-form-control-placeholder-color);
      user-select: none;
      -webkit-user-select: none;
    }

    &:autofill {
      &,
      &:hover,
      &:focus,
      &:active {
        box-shadow: none;
        caret-color: var(--wa-form-control-value-color);
      }
    }

    &:focus {
      outline: none;
    }
  }

  /* Shared textarea and size-adjuster positioning */
  .control,
  .size-adjuster {
    grid-area: 1 / 1 / 2 / 2;
  }

  .size-adjuster {
    visibility: hidden;
    pointer-events: none;
    opacity: 0;
    padding: 0;
  }

  textarea::-webkit-search-decoration,
  textarea::-webkit-search-cancel-button,
  textarea::-webkit-search-results-button,
  textarea::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  /*
   * Resize types
   */

  :host([resize='none']) textarea {
    resize: none;
  }

  textarea,
  :host([resize='vertical']) textarea {
    resize: vertical;
  }

  :host([resize='horizontal']) textarea {
    resize: horizontal;
  }

  :host([resize='both']) textarea {
    resize: both;
  }

  :host([resize='auto']) textarea {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }
`;var ce=class extends ct{constructor(){super(...arguments),this.assumeInteractionOn=["blur","input"],this.hasSlotController=new cn(this,"hint","label"),this.title="",this.name=null,this._value=null,this.defaultValue=this.getAttribute("value")??"",this.size="medium",this.appearance="outlined",this.label="",this.hint="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.required=!1,this.spellcheck=!0,this.withLabel=!1,this.withHint=!1}static get validators(){return[...super.validators,el()]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(e){this._value!==e&&(this.valueHasChanged=!0,this._value=e)}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaDimensions()),this.updateComplete.then(()=>{if(this.setTextareaDimensions(),this.resizeObserver.observe(this.input),this.didSSR&&this.input&&this.value!==this.input.value){const e=this.input.value;this.value=e}})}disconnectedCallback(){super.disconnectedCallback(),this.input&&this.resizeObserver?.unobserve(this.input)}handleBlur(){this.checkValidity()}handleChange(e){this.valueHasChanged=!0,this.value=this.input.value,this.setTextareaDimensions(),this.checkValidity(),this.relayNativeEvent(e,{bubbles:!0,composed:!0})}handleInput(e){this.valueHasChanged=!0,this.value=this.input.value,this.relayNativeEvent(e,{bubbles:!0,composed:!0})}setTextareaDimensions(){if(this.resize==="none"){this.base.style.width="",this.base.style.height="";return}if(this.resize==="auto"){this.sizeAdjuster.style.height=`${this.input.clientHeight}px`,this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`,this.base.style.width="",this.base.style.height="";return}if(this.input.style.width){const e=Number(this.input.style.width.split(/px/)[0])+2;this.base.style.width=`${e}px`}if(this.input.style.height){const e=Number(this.input.style.height.split(/px/)[0])+2;this.base.style.height=`${e}px`}}handleRowsChange(){this.setTextareaDimensions()}async handleValueChange(){await this.updateComplete,this.checkValidity(),this.setTextareaDimensions()}updated(e){e.has("resize")&&this.setTextareaDimensions(),super.updated(e),e.has("value")&&this.customStates.set("blank",!this.value)}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(e){if(e){typeof e.top=="number"&&(this.input.scrollTop=e.top),typeof e.left=="number"&&(this.input.scrollLeft=e.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(e,t,n="none"){this.input.setSelectionRange(e,t,n)}setRangeText(e,t,n,i="preserve"){const a=t??this.input.selectionStart,u=n??this.input.selectionEnd;this.input.setRangeText(e,a,u,i),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaDimensions())}formResetCallback(){this.value=this.defaultValue,super.formResetCallback()}render(){const e=this.hasUpdated?this.hasSlotController.test("label"):this.withLabel,t=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,n=this.label?!0:!!e,i=this.hint?!0:!!t;return pe`
      <label part="form-control-label label" class="label" for="input" aria-hidden=${n?"false":"true"}>
        <slot name="label">${this.label}</slot>
      </label>

      <div part="base" class="textarea">
        <textarea
          part="textarea"
          id="input"
          class="control"
          title=${this.title}
          name=${Ee(this.name)}
          .value=${Ni(this.value)}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          placeholder=${Ee(this.placeholder)}
          rows=${Ee(this.rows)}
          minlength=${Ee(this.minlength)}
          maxlength=${Ee(this.maxlength)}
          autocapitalize=${Ee(this.autocapitalize)}
          autocorrect=${Ee(this.autocorrect)}
          ?autofocus=${this.autofocus}
          spellcheck=${Ee(this.spellcheck)}
          enterkeyhint=${Ee(this.enterkeyhint)}
          inputmode=${Ee(this.inputmode)}
          aria-describedby="hint"
          @change=${this.handleChange}
          @input=${this.handleInput}
          @blur=${this.handleBlur}
        ></textarea>

        <!-- This "adjuster" exists to prevent layout shifting. https://github.com/shoelace-style/shoelace/issues/2180 -->
        <div part="textarea-adjuster" class="size-adjuster" ?hidden=${this.resize!=="auto"}></div>
      </div>

      <slot
        id="hint"
        name="hint"
        part="hint"
        aria-hidden=${i?"false":"true"}
        class=${Ot({"has-slotted":i})}
        >${this.hint}</slot
      >
    `}};ce.css=[nh,Al,fo];x([me(".control")],ce.prototype,"input",2);x([me('[part~="base"]')],ce.prototype,"base",2);x([me(".size-adjuster")],ce.prototype,"sizeAdjuster",2);x([T()],ce.prototype,"title",2);x([T({reflect:!0})],ce.prototype,"name",2);x([Ge()],ce.prototype,"value",1);x([T({attribute:"value",reflect:!0})],ce.prototype,"defaultValue",2);x([T({reflect:!0})],ce.prototype,"size",2);x([T({reflect:!0})],ce.prototype,"appearance",2);x([T()],ce.prototype,"label",2);x([T({attribute:"hint"})],ce.prototype,"hint",2);x([T()],ce.prototype,"placeholder",2);x([T({type:Number})],ce.prototype,"rows",2);x([T({reflect:!0})],ce.prototype,"resize",2);x([T({type:Boolean})],ce.prototype,"disabled",2);x([T({type:Boolean,reflect:!0})],ce.prototype,"readonly",2);x([T({type:Boolean,reflect:!0})],ce.prototype,"required",2);x([T({type:Number})],ce.prototype,"minlength",2);x([T({type:Number})],ce.prototype,"maxlength",2);x([T()],ce.prototype,"autocapitalize",2);x([T()],ce.prototype,"autocorrect",2);x([T()],ce.prototype,"autocomplete",2);x([T({type:Boolean})],ce.prototype,"autofocus",2);x([T()],ce.prototype,"enterkeyhint",2);x([T({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],ce.prototype,"spellcheck",2);x([T()],ce.prototype,"inputmode",2);x([T({attribute:"with-label",type:Boolean})],ce.prototype,"withLabel",2);x([T({attribute:"with-hint",type:Boolean})],ce.prototype,"withHint",2);x([Ye("rows",{waitUntilFirstUpdate:!0})],ce.prototype,"handleRowsChange",1);x([Ye("value",{waitUntilFirstUpdate:!0})],ce.prototype,"handleValueChange",1);ce=x([He("wa-textarea")],ce);var oh=Object.defineProperty,ih=Object.getOwnPropertyDescriptor,Ht=(e,t,n,i)=>{for(var a=i>1?void 0:i?ih(t,n):t,u=e.length-1,h;u>=0;u--)(h=e[u])&&(a=(i?h(t,n,a):h(a))||a);return i&&a&&oh(t,n,a),a};const sh=[/RuntimeError:\s*Aborted\s*\(NetworkError.*Build with -sASSERTIONS/i,"Network error: Response body loading was aborted",/TypeError.*clientX.*handleDragStop/,/TypeError.*(assignedElements|hidePopover).*disconnectedCallback/,/^Error: invalid origin$/,/^RangeError: Maximum call stack size exceeded.*at \?.*undefined:/,"ResizeObserver loop completed with undelivered notifications","EvalError",/^(chrome(-extension)?|moz-extension|safari(-web)?-extension):\/\//,"Extension context invalidated","runtime.sendMessage","webkit-masked-url","window.__firefox__"];function ah(e){return sh.some(t=>t instanceof RegExp?t.test(e):e.includes(t))}async function lh(e){return await Ti(0),e instanceof Error&&"__third_party_code__"in e}async function Fi(e,t){const n=ah(e),i=await lh(t);if(n||i){Yi({type:"error",category:"error.ignored",message:e,data:{isIgnored:n,isThirdParty:i}});return}try{let a=document.querySelector("crash-dialog");a||(a=document.createElement("crash-dialog"),document.body.appendChild(a)),await a.reportError(e)}catch(a){en(a),console.error("Error while trying to reportError",a,t)}}let _t=class extends zt{constructor(){super(...arguments),this.suppressedErrors=new Set,this.maxErrors=20,this.errors=[],this.suppressErrors=!1,this.mightHavePersonalInfo=!1,this.postingUserDescription=!1}reset(){this.suppressErrors=!1,this.errors=[],this.userDescription&&(this.userDescription.value=""),this.mightHavePersonalInfo=!1,this.postingUserDescription=!1,this.sentryLastEventId=zc()}async reportError(e){this.suppressedErrors.has(e)||(this.dialog?.open||this.reset(),this.errors=[...this.errors,e],this.dialog||await this.updateComplete,this.dialog&&(this.dialog.open=!0))}render(){const e=[pe`
        <div>Uh-oh, an unexpected error occurred. Sorry about that.
          ${"The developer has been notified."}
        </div>
        <div>If this keeps happening, try reloading the page.</div>
      `];{const t=this.mightHavePersonalInfo?"highlight":ye;e.push(pe`
        <wa-textarea
          label="What were you doing when this occurred? (optional)"
          maxlength="1000"
          resize="auto"
          rows="3"
          @input=${this.handleUserDescriptionChange}
          @change=${this.handleUserDescriptionChange}
        >
          <div slot="hint">
            If you know what causes this, it can help fix the problem. 
            (Please <strong class=${t}>don’t include email addresses</strong> 
            or other personal information.)
          </div>
        </wa-textarea>
      `)}return this.sentryLastEventId&&e.push(pe`
          <div class="event-id">Event ID (for GitHub bug reports):<br>
            <span id="event-id">${this.sentryLastEventId}</span>
            <wa-copy-button from="event-id"></wa-copy-button>
          </div>
        `),this.errors.length>0&&e.push(pe`
        <wa-details appearance="plain" open>
          <div slot="summary">Technical details</div>
          ${this.errors.slice(-this.maxErrors).map(t=>pe`<div>${t}</div>`)}
        </wa-details>
        <wa-checkbox 
            .checked=${this.suppressErrors}
            @change=${this.handleSuppressErrorsChange}
        >${this.errors.length===1?"Don’t show this error again":"Don’t show these errors again"}</wa-checkbox>
      `),pe`
      <wa-dialog @wa-hide=${this.handleDismiss}>
        <wa-icon slot="label" name="error"></wa-icon>
        <div slot="label">Something went wrong</div>
        ${e}
        <wa-button slot="footer" @click=${this.handleReload}>Reload page</wa-button>
        <wa-button slot="footer" variant="brand" data-dialog="close">Close</wa-button>
      </wa-dialog>
    `}handleSuppressErrorsChange(e){const t=e.target;this.suppressErrors=t.checked}handleUserDescriptionChange(){this.mightHavePersonalInfo=/\w+@\w+/.test(this.userDescription?.value??"")}async postUserDescription(){if(!this.postingUserDescription){const e=this.userDescription?.value?.trim();if(e){this.postingUserDescription=!0;try{await Oc({associatedEventId:this.sentryLastEventId,message:e})}catch(t){console.error("Error in Sentry.captureFeedback",t),en(t)}finally{this.postingUserDescription=!1}}}}async handleDismiss(){if(this.suppressErrors)for(const e of this.errors)this.suppressedErrors.add(e);await this.postUserDescription()}async handleReload(e){e.target instanceof HTMLElement&&e.target.setAttribute("loading",""),await this.postUserDescription(),window.location.reload()}};_t.styles=[fu,Se`
      :host {
        display: contents;
      }
      
      wa-dialog::part(dialog) {
        background-color: var(--wa-color-danger-fill-quiet);
        border-color: var(--wa-color-danger-border-loud);
        border-style: var(--wa-border-style);
        border-width: var(--wa-border-width-l);
      }
      wa-dialog::part(title) {
        display: flex;
        gap: var(--wa-space-xs);
        align-items: flex-start;
      }
      wa-icon[slot="label"] {
        margin-block-start: 0.125em;
        color: var(--wa-color-danger-on-quiet);
      }
      wa-dialog::part(body) {
        display: flex;
        flex-direction: column;
        gap: var(--wa-space-l);
      }
      wa-dialog::part(footer) {
        gap: var(--wa-space-m);
      }
      
      wa-details {
        display: contents;
      }
      wa-details::part(base) {
        flex: 0 1 auto;
        min-height: 1em;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        padding-block: var(--wa-space-xs);
        border-block-start: 
            var(--wa-color-danger-border-normal) 
            var(--wa-border-style) 
            var(--wa-border-width-s);
        border-block-end: 
            var(--wa-color-danger-border-normal) 
            var(--wa-border-style) 
            var(--wa-border-width-s);
      }
      wa-details::part(header) {
        padding: 0;
        --spacing: var(--wa-space-xs); /* between caret and summary */
      }
      wa-details::part(content) {
        padding: 0;
        padding-block-start: var(--wa-space-xs);
        font-size: var(--wa-font-size-s);
        
        flex: 0 1 auto;
        min-height: 3em;
        max-height: 30vh;
        overflow: auto;
        
        display: flex;
        flex-direction: column;
        gap: var(--wa-space-xs);
      }
      wa-details > div:not([slot]) {
        white-space: pre-wrap;
        line-height: var(--wa-line-height-condensed);
      }
      
      .event-id {
        line-height: var(--wa-line-height-condensed);
      }
      #event-id {
        user-select: all;
      }
      wa-copy-button::part(button) {
        padding: 0;
        padding-inline-start: var(--wa-space-2xs);
      }

      wa-textarea::part(textarea) {
        max-height: 6lh;
      }
      wa-textarea::part(label) {
        font-weight: var(--wa-font-weight-normal);
      }
      .highlight {
        color: var(--wa-color-danger-on-quiet);
      }
    `];Ht([T({type:Number,attribute:"maxErrors"})],_t.prototype,"maxErrors",2);Ht([Ge()],_t.prototype,"errors",2);Ht([Ge()],_t.prototype,"sentryLastEventId",2);Ht([Ge()],_t.prototype,"suppressErrors",2);Ht([Ge()],_t.prototype,"mightHavePersonalInfo",2);Ht([me("wa-dialog")],_t.prototype,"dialog",2);Ht([me("wa-textarea")],_t.prototype,"userDescription",2);_t=Ht([He("crash-dialog")],_t);const ch="worker-unhandlederror";function uh(){if(typeof window>"u")throw new Error("installErrorHandlers must be called from the main thread");window.addEventListener("error",e=>{try{const{message:t,filename:n,lineno:i,colno:a,error:u}=e,h=`${t}${n?` at ${n}:${i}:${a}`:""}`;Fi(h,u)}catch(t){console.error("Error in onerror handler",t)}}),window.addEventListener("unhandledrejection",e=>{try{const t=e.reason instanceof Error?e.reason:void 0,n=[`${String(e.reason).trim()} [unhandled rejection]`,(t?.stack||"").replace(String(t),"").trim()].filter(Boolean).join(`
`);Fi(n,t)}catch(t){console.error("Error in onunhandledrejection handler",t)}}),window.addEventListener("securitypolicyviolation",()=>{console.warn("🚨🚨🚨 This security violation is probably caused by a PLUGIN or BROWSER EXTENSION trying to insecurely modify the page. 🚨🚨🚨")})}const dh=e=>typeof e.data=="object"&&e.data!==null&&"type"in e.data&&e.data.type===ch,$l=e=>{dh(e)&&(console.error(e.data.message,e.data.error),Fi(e.data.message,e.data.error))};function Of(e){if(typeof window>"u")throw new Error("installWorkerErrorReceivers must be called from main thread");e.addEventListener("message",$l)}function If(e){e.removeEventListener("message",$l)}const hh="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%3e%3cpath%20d='M20%2017H4V5h8V3H4c-1.11%200-2%20.89-2%202v12a2%202%200%200%200%202%202h4v2h8v-2h4c1.1%200%202-.9%202-2v-3h-2v3z'/%3e%3cpath%20d='m17%2014%205-5-1.41-1.41L18%2010.17V3h-2v7.17l-2.59-2.58L12%209z'/%3e%3c/svg%3e",ph="data:image/svg+xml,%3c!--%20@license%20lucide-static%20v0.563.0%20-%20ISC%20--%3e%3csvg%20class='lucide%20lucide-arrow-left'%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20%3e%3cpath%20d='m12%2019-7-7%207-7'%20/%3e%3cpath%20d='M19%2012H5'%20/%3e%3c/svg%3e",fh="data:image/svg+xml,%3c!--%20@license%20lucide-static%20v0.563.0%20-%20ISC%20--%3e%3csvg%20class='lucide%20lucide-arrow-left-to-line'%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20%3e%3cpath%20d='M3%2019V5'%20/%3e%3cpath%20d='m13%206-6%206%206%206'%20/%3e%3cpath%20d='M7%2012h14'%20/%3e%3c/svg%3e",mh="data:image/svg+xml,%3c!--%20@license%20lucide-static%20v0.563.0%20-%20ISC%20--%3e%3csvg%20class='lucide%20lucide-arrow-right'%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20%3e%3cpath%20d='M5%2012h14'%20/%3e%3cpath%20d='m12%205%207%207-7%207'%20/%3e%3c/svg%3e",gh="data:image/svg+xml,%3c!--%20@license%20lucide-static%20v0.563.0%20-%20ISC%20--%3e%3csvg%20class='lucide%20lucide-award'%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20%3e%3cpath%20d='m15.477%2012.89%201.515%208.526a.5.5%200%200%201-.81.47l-3.58-2.687a1%201%200%200%200-1.197%200l-3.586%202.686a.5.5%200%200%201-.81-.469l1.514-8.526'%20/%3e%3ccircle%20cx='12'%20cy='8'%20r='6'%20/%3e%3c/svg%3e",vh="data:image/svg+xml,%3c!--%20@license%20lucide-static%20v0.563.0%20-%20ISC%20--%3e%3csvg%20class='lucide%20lucide-badge-question-mark'%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20%3e%3cpath%20d='M3.85%208.62a4%204%200%200%201%204.78-4.77%204%204%200%200%201%206.74%200%204%204%200%200%201%204.78%204.78%204%204%200%200%201%200%206.74%204%204%200%200%201-4.77%204.78%204%204%200%200%201-6.75%200%204%204%200%200%201-4.78-4.77%204%204%200%200%201%200-6.76Z'%20/%3e%3cpath%20d='M9.09%209a3%203%200%200%201%205.83%201c0%202-3%203-3%203'%20/%3e%3cline%20x1='12'%20x2='12.01'%20y1='17'%20y2='17'%20/%3e%3c/svg%3e",Aa="data:image/svg+xml,%3c!--%20@license%20lucide-static%20v0.563.0%20-%20ISC%20--%3e%3csvg%20class='lucide%20lucide-box'%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20%3e%3cpath%20d='M21%208a2%202%200%200%200-1-1.73l-7-4a2%202%200%200%200-2%200l-7%204A2%202%200%200%200%203%208v8a2%202%200%200%200%201%201.73l7%204a2%202%200%200%200%202%200l7-4A2%202%200%200%200%2021%2016Z'%20/%3e%3cpath%20d='m3.3%207%208.7%205%208.7-5'%20/%3e%3cpath%20d='M12%2022V12'%20/%3e%3c/svg%3e",wh="data:image/svg+xml,%3c!--%20@license%20lucide-static%20v0.563.0%20-%20ISC%20--%3e%3csvg%20class='lucide%20lucide-boxes'%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20%3e%3cpath%20d='M2.97%2012.92A2%202%200%200%200%202%2014.63v3.24a2%202%200%200%200%20.97%201.71l3%201.8a2%202%200%200%200%202.06%200L12%2019v-5.5l-5-3-4.03%202.42Z'%20/%3e%3cpath%20d='m7%2016.5-4.74-2.85'%20/%3e%3cpath%20d='m7%2016.5%205-3'%20/%3e%3cpath%20d='M7%2016.5v5.17'%20/%3e%3cpath%20d='M12%2013.5V19l3.97%202.38a2%202%200%200%200%202.06%200l3-1.8a2%202%200%200%200%20.97-1.71v-3.24a2%202%200%200%200-.97-1.71L17%2010.5l-5%203Z'%20/%3e%3cpath%20d='m17%2016.5-5-3'%20/%3e%3cpath%20d='m17%2016.5%204.74-2.85'%20/%3e%3cpath%20d='M17%2016.5v5.17'%20/%3e%3cpath%20d='M7.97%204.42A2%202%200%200%200%207%206.13v4.37l5%203%205-3V6.13a2%202%200%200%200-.97-1.71l-3-1.8a2%202%200%200%200-2.06%200l-3%201.8Z'%20/%3e%3cpath%20d='M12%208%207.26%205.15'%20/%3e%3cpath%20d='m12%208%204.74-2.85'%20/%3e%3cpath%20d='M12%2013.5V8'%20/%3e%3c/svg%3e",Pl="data:image/svg+xml,%3c!--%20@license%20lucide-static%20v0.563.0%20-%20ISC%20--%3e%3csvg%20class='lucide%20lucide-check'%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20%3e%3cpath%20d='M20%206%209%2017l-5-5'%20/%3e%3c/svg%3e",yh="data:image/svg+xml,%3c!--%20@license%20lucide-static%20v0.563.0%20-%20ISC%20--%3e%3csvg%20class='lucide%20lucide-chevron-down'%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20%3e%3cpath%20d='m6%209%206%206%206-6'%20/%3e%3c/svg%3e",bh="data:image/svg+xml,%3c!--%20@license%20lucide-static%20v0.563.0%20-%20ISC%20--%3e%3csvg%20class='lucide%20lucide-chevron-left'%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20%3e%3cpath%20d='m15%2018-6-6%206-6'%20/%3e%3c/svg%3e",xh="data:image/svg+xml,%3c!--%20@license%20lucide-static%20v0.563.0%20-%20ISC%20--%3e%3csvg%20class='lucide%20lucide-chevron-right'%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20%3e%3cpath%20d='m9%2018%206-6-6-6'%20/%3e%3c/svg%3e",kh="data:image/svg+xml,%3c!--%20@license%20lucide-static%20v0.563.0%20-%20ISC%20--%3e%3csvg%20class='lucide%20lucide-circle-check'%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20%3e%3ccircle%20cx='12'%20cy='12'%20r='10'%20/%3e%3cpath%20d='m9%2012%202%202%204-4'%20/%3e%3c/svg%3e",zl="data:image/svg+xml,%3c!--%20@license%20lucide-static%20v0.563.0%20-%20ISC%20--%3e%3csvg%20class='lucide%20lucide-circle-question-mark'%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20%3e%3ccircle%20cx='12'%20cy='12'%20r='10'%20/%3e%3cpath%20d='M9.09%209a3%203%200%200%201%205.83%201c0%202-3%203-3%203'%20/%3e%3cpath%20d='M12%2017h.01'%20/%3e%3c/svg%3e",_h="data:image/svg+xml,%3c!--%20@license%20lucide-static%20v0.563.0%20-%20ISC%20--%3e%3csvg%20class='lucide%20lucide-circle-x'%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20%3e%3ccircle%20cx='12'%20cy='12'%20r='10'%20/%3e%3cpath%20d='m15%209-6%206'%20/%3e%3cpath%20d='m9%209%206%206'%20/%3e%3c/svg%3e",Sh="data:image/svg+xml,%3c!--%20@license%20lucide-static%20v0.563.0%20-%20ISC%20--%3e%3csvg%20class='lucide%20lucide-crown'%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20%3e%3cpath%20d='M11.562%203.266a.5.5%200%200%201%20.876%200L15.39%208.87a1%201%200%200%200%201.516.294L21.183%205.5a.5.5%200%200%201%20.798.519l-2.834%2010.246a1%201%200%200%201-.956.734H5.81a1%201%200%200%201-.957-.734L2.02%206.02a.5.5%200%200%201%20.798-.519l4.276%203.664a1%201%200%200%200%201.516-.294z'%20/%3e%3cpath%20d='M5%2021h14'%20/%3e%3c/svg%3e",Ch="data:image/svg+xml,%3c!--%20@license%20lucide-static%20v0.563.0%20-%20ISC%20--%3e%3csvg%20class='lucide%20lucide-delete'%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20%3e%3cpath%20d='M10%205a2%202%200%200%200-1.344.519l-6.328%205.74a1%201%200%200%200%200%201.481l6.328%205.741A2%202%200%200%200%2010%2019h10a2%202%200%200%200%202-2V7a2%202%200%200%200-2-2z'%20/%3e%3cpath%20d='m12%209%206%206'%20/%3e%3cpath%20d='m18%209-6%206'%20/%3e%3c/svg%3e",Eh="data:image/svg+xml,%3c!--%20@license%20lucide-static%20v0.563.0%20-%20ISC%20--%3e%3csvg%20class='lucide%20lucide-download'%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20%3e%3cpath%20d='M12%2015V3'%20/%3e%3cpath%20d='M21%2015v4a2%202%200%200%201-2%202H5a2%202%200%200%201-2-2v-4'%20/%3e%3cpath%20d='m7%2010%205%205%205-5'%20/%3e%3c/svg%3e",Ah="data:image/svg+xml,%3c!--%20@license%20lucide-static%20v0.563.0%20-%20ISC%20--%3e%3csvg%20class='lucide%20lucide-external-link'%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20%3e%3cpath%20d='M15%203h6v6'%20/%3e%3cpath%20d='M10%2014%2021%203'%20/%3e%3cpath%20d='M18%2013v6a2%202%200%200%201-2%202H5a2%202%200%200%201-2-2V8a2%202%200%200%201%202-2h6'%20/%3e%3c/svg%3e",$h="data:image/svg+xml,%3c!--%20@license%20lucide-static%20v0.563.0%20-%20ISC%20--%3e%3csvg%20class='lucide%20lucide-flask-conical'%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20%3e%3cpath%20d='M14%202v6a2%202%200%200%200%20.245.96l5.51%2010.08A2%202%200%200%201%2018%2022H6a2%202%200%200%201-1.755-2.96l5.51-10.08A2%202%200%200%200%2010%208V2'%20/%3e%3cpath%20d='M6.453%2015h11.094'%20/%3e%3cpath%20d='M8.5%202h7'%20/%3e%3c/svg%3e",Ph="data:image/svg+xml,%3c!--%20@license%20lucide-static%20v0.563.0%20-%20ISC%20--%3e%3csvg%20class='lucide%20lucide-frown'%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20%3e%3ccircle%20cx='12'%20cy='12'%20r='10'%20/%3e%3cpath%20d='M16%2016s-1.5-2-4-2-4%202-4%202'%20/%3e%3cline%20x1='9'%20x2='9.01'%20y1='9'%20y2='9'%20/%3e%3cline%20x1='15'%20x2='15.01'%20y1='9'%20y2='9'%20/%3e%3c/svg%3e",zh="data:image/svg+xml,%3c!--%20@license%20lucide-static%20v0.563.0%20-%20ISC%20--%3e%3csvg%20class='lucide%20lucide-gem'%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20%3e%3cpath%20d='M10.5%203%208%209l4%2013%204-13-2.5-6'%20/%3e%3cpath%20d='M17%203a2%202%200%200%201%201.6.8l3%204a2%202%200%200%201%20.013%202.382l-7.99%2010.986a2%202%200%200%201-3.247%200l-7.99-10.986A2%202%200%200%201%202.4%207.8l2.998-3.997A2%202%200%200%201%207%203z'%20/%3e%3cpath%20d='M2%209h20'%20/%3e%3c/svg%3e",Oh="data:image/svg+xml,%3c!--%20@license%20lucide-static%20v0.563.0%20-%20ISC%20--%3e%3csvg%20class='lucide%20lucide-hash'%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20%3e%3cline%20x1='4'%20x2='20'%20y1='9'%20y2='9'%20/%3e%3cline%20x1='4'%20x2='20'%20y1='15'%20y2='15'%20/%3e%3cline%20x1='10'%20x2='8'%20y1='3'%20y2='21'%20/%3e%3cline%20x1='16'%20x2='14'%20y1='3'%20y2='21'%20/%3e%3c/svg%3e",Ih="data:image/svg+xml,%3c!--%20@license%20lucide-static%20v0.563.0%20-%20ISC%20--%3e%3csvg%20class='lucide%20lucide-heart'%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20%3e%3cpath%20d='M2%209.5a5.5%205.5%200%200%201%209.591-3.676.56.56%200%200%200%20.818%200A5.49%205.49%200%200%201%2022%209.5c0%202.29-1.5%204-3%205.5l-5.492%205.313a2%202%200%200%201-3%20.019L5%2015c-1.5-1.5-3-3.2-3-5.5'%20/%3e%3c/svg%3e",Th="data:image/svg+xml,%3c!--%20@license%20lucide-static%20v0.563.0%20-%20ISC%20--%3e%3csvg%20class='lucide%20lucide-history'%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20%3e%3cpath%20d='M3%2012a9%209%200%201%200%209-9%209.75%209.75%200%200%200-6.74%202.74L3%208'%20/%3e%3cpath%20d='M3%203v5h5'%20/%3e%3cpath%20d='M12%207v5l4%202'%20/%3e%3c/svg%3e",Mh="data:image/svg+xml,%3c!--%20@license%20lucide-static%20v0.563.0%20-%20ISC%20--%3e%3csvg%20class='lucide%20lucide-images'%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20%3e%3cpath%20d='m22%2011-1.296-1.296a2.4%202.4%200%200%200-3.408%200L11%2016'%20/%3e%3cpath%20d='M4%208a2%202%200%200%200-2%202v10a2%202%200%200%200%202%202h10a2%202%200%200%200%202-2'%20/%3e%3ccircle%20cx='13'%20cy='7'%20r='1'%20fill='currentColor'%20/%3e%3crect%20x='8'%20y='2'%20width='14'%20height='14'%20rx='2'%20/%3e%3c/svg%3e",Rh="data:image/svg+xml,%3c!--%20@license%20lucide-static%20v0.563.0%20-%20ISC%20--%3e%3csvg%20class='lucide%20lucide-info'%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20%3e%3ccircle%20cx='12'%20cy='12'%20r='10'%20/%3e%3cpath%20d='M12%2016v-4'%20/%3e%3cpath%20d='M12%208h.01'%20/%3e%3c/svg%3e",Lh="data:image/svg+xml,%3c!--%20@license%20lucide-static%20v0.563.0%20-%20ISC%20--%3e%3csvg%20class='lucide%20lucide-laugh'%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20%3e%3ccircle%20cx='12'%20cy='12'%20r='10'%20/%3e%3cpath%20d='M18%2013a6%206%200%200%201-6%205%206%206%200%200%201-6-5h12Z'%20/%3e%3cline%20x1='9'%20x2='9.01'%20y1='9'%20y2='9'%20/%3e%3cline%20x1='15'%20x2='15.01'%20y1='9'%20y2='9'%20/%3e%3c/svg%3e",Dh="data:image/svg+xml,%3c!--%20@license%20lucide-static%20v0.563.0%20-%20ISC%20--%3e%3csvg%20class='lucide%20lucide-octagon-alert'%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20%3e%3cpath%20d='M12%2016h.01'%20/%3e%3cpath%20d='M12%208v4'%20/%3e%3cpath%20d='M15.312%202a2%202%200%200%201%201.414.586l4.688%204.688A2%202%200%200%201%2022%208.688v6.624a2%202%200%200%201-.586%201.414l-4.688%204.688a2%202%200%200%201-1.414.586H8.688a2%202%200%200%201-1.414-.586l-4.688-4.688A2%202%200%200%201%202%2015.312V8.688a2%202%200%200%201%20.586-1.414l4.688-4.688A2%202%200%200%201%208.688%202z'%20/%3e%3c/svg%3e",Bh="data:image/svg+xml,%3c!--%20@license%20lucide-static%20v0.563.0%20-%20ISC%20--%3e%3csvg%20class='lucide%20lucide-party-popper'%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20%3e%3cpath%20d='M5.8%2011.3%202%2022l10.7-3.79'%20/%3e%3cpath%20d='M4%203h.01'%20/%3e%3cpath%20d='M22%208h.01'%20/%3e%3cpath%20d='M15%202h.01'%20/%3e%3cpath%20d='M22%2020h.01'%20/%3e%3cpath%20d='m22%202-2.24.75a2.9%202.9%200%200%200-1.96%203.12c.1.86-.57%201.63-1.45%201.63h-.38c-.86%200-1.6.6-1.76%201.44L14%2010'%20/%3e%3cpath%20d='m22%2013-.82-.33c-.86-.34-1.82.2-1.98%201.11c-.11.7-.72%201.22-1.43%201.22H17'%20/%3e%3cpath%20d='m11%202%20.33.82c.34.86-.2%201.82-1.11%201.98C9.52%204.9%209%205.52%209%206.23V7'%20/%3e%3cpath%20d='M11%2013c1.93%201.93%202.83%204.17%202%205-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5%20.83-.83%203.07.07%205%202Z'%20/%3e%3c/svg%3e",$a="data:image/svg+xml,%3c!--%20@license%20lucide-static%20v0.563.0%20-%20ISC%20--%3e%3csvg%20class='lucide%20lucide-play'%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20%3e%3cpath%20d='M5%205a2%202%200%200%201%203.008-1.728l11.997%206.998a2%202%200%200%201%20.003%203.458l-12%207A2%202%200%200%201%205%2019z'%20/%3e%3c/svg%3e",jh="data:image/svg+xml,%3c!--%20@license%20lucide-static%20v0.563.0%20-%20ISC%20--%3e%3csvg%20class='lucide%20lucide-plus'%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20%3e%3cpath%20d='M5%2012h14'%20/%3e%3cpath%20d='M12%205v14'%20/%3e%3c/svg%3e",Nh="data:image/svg+xml,%3c!--%20@license%20lucide-static%20v0.563.0%20-%20ISC%20--%3e%3csvg%20class='lucide%20lucide-redo-2'%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20%3e%3cpath%20d='m15%2014%205-5-5-5'%20/%3e%3cpath%20d='M20%209H9.5A5.5%205.5%200%200%200%204%2014.5A5.5%205.5%200%200%200%209.5%2020H13'%20/%3e%3c/svg%3e",qh="data:image/svg+xml,%3c!--%20@license%20lucide-static%20v0.563.0%20-%20ISC%20--%3e%3csvg%20class='lucide%20lucide-rocket'%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20%3e%3cpath%20d='M4.5%2016.5c-1.5%201.26-2%205-2%205s3.74-.5%205-2c.71-.84.7-2.13-.09-2.91a2.18%202.18%200%200%200-2.91-.09z'%20/%3e%3cpath%20d='m12%2015-3-3a22%2022%200%200%201%202-3.95A12.88%2012.88%200%200%201%2022%202c0%202.72-.78%207.5-6%2011a22.35%2022.35%200%200%201-4%202z'%20/%3e%3cpath%20d='M9%2012H4s.55-3.03%202-4c1.62-1.08%205%200%205%200'%20/%3e%3cpath%20d='M12%2015v5s3.03-.55%204-2c1.08-1.62%200-5%200-5'%20/%3e%3c/svg%3e",Fh="data:image/svg+xml,%3c!--%20@license%20lucide-static%20v0.563.0%20-%20ISC%20--%3e%3csvg%20class='lucide%20lucide-settings'%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20%3e%3cpath%20d='M9.671%204.136a2.34%202.34%200%200%201%204.659%200%202.34%202.34%200%200%200%203.319%201.915%202.34%202.34%200%200%201%202.33%204.033%202.34%202.34%200%200%200%200%203.831%202.34%202.34%200%200%201-2.33%204.033%202.34%202.34%200%200%200-3.319%201.915%202.34%202.34%200%200%201-4.659%200%202.34%202.34%200%200%200-3.32-1.915%202.34%202.34%200%200%201-2.33-4.033%202.34%202.34%200%200%200%200-3.831A2.34%202.34%200%200%201%206.35%206.051a2.34%202.34%200%200%200%203.319-1.915'%20/%3e%3ccircle%20cx='12'%20cy='12'%20r='3'%20/%3e%3c/svg%3e",Uh="data:image/svg+xml,%3c!--%20@license%20lucide-static%20v0.563.0%20-%20ISC%20--%3e%3csvg%20class='lucide%20lucide-share-2'%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20%3e%3ccircle%20cx='18'%20cy='5'%20r='3'%20/%3e%3ccircle%20cx='6'%20cy='12'%20r='3'%20/%3e%3ccircle%20cx='18'%20cy='19'%20r='3'%20/%3e%3cline%20x1='8.59'%20x2='15.42'%20y1='13.51'%20y2='17.49'%20/%3e%3cline%20x1='15.41'%20x2='8.59'%20y1='6.51'%20y2='10.49'%20/%3e%3c/svg%3e",Kh="data:image/svg+xml,%3c!--%20@license%20lucide-static%20v0.563.0%20-%20ISC%20--%3e%3csvg%20class='lucide%20lucide-shield-check'%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20%3e%3cpath%20d='M20%2013c0%205-3.5%207.5-7.66%208.95a1%201%200%200%201-.67-.01C7.5%2020.5%204%2018%204%2013V6a1%201%200%200%201%201-1c2%200%204.5-1.2%206.24-2.72a1.17%201.17%200%200%201%201.52%200C14.51%203.81%2017%205%2019%205a1%201%200%200%201%201%201z'%20/%3e%3cpath%20d='m9%2012%202%202%204-4'%20/%3e%3c/svg%3e",Vh="data:image/svg+xml,%3c!--%20@license%20lucide-static%20v0.563.0%20-%20ISC%20--%3e%3csvg%20class='lucide%20lucide-sparkles'%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20%3e%3cpath%20d='M11.017%202.814a1%201%200%200%201%201.966%200l1.051%205.558a2%202%200%200%200%201.594%201.594l5.558%201.051a1%201%200%200%201%200%201.966l-5.558%201.051a2%202%200%200%200-1.594%201.594l-1.051%205.558a1%201%200%200%201-1.966%200l-1.051-5.558a2%202%200%200%200-1.594-1.594l-5.558-1.051a1%201%200%200%201%200-1.966l5.558-1.051a2%202%200%200%200%201.594-1.594z'%20/%3e%3cpath%20d='M20%202v4'%20/%3e%3cpath%20d='M22%204h-4'%20/%3e%3ccircle%20cx='4'%20cy='20'%20r='2'%20/%3e%3c/svg%3e",Wh="data:image/svg+xml,%3c!--%20@license%20lucide-static%20v0.563.0%20-%20ISC%20--%3e%3csvg%20class='lucide%20lucide-square-dashed-mouse-pointer'%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20%3e%3cpath%20d='M12.034%2012.681a.498.498%200%200%201%20.647-.647l9%203.5a.5.5%200%200%201-.033.943l-3.444%201.068a1%201%200%200%200-.66.66l-1.067%203.443a.5.5%200%200%201-.943.033z'%20/%3e%3cpath%20d='M5%203a2%202%200%200%200-2%202'%20/%3e%3cpath%20d='M19%203a2%202%200%200%201%202%202'%20/%3e%3cpath%20d='M5%2021a2%202%200%200%201-2-2'%20/%3e%3cpath%20d='M9%203h1'%20/%3e%3cpath%20d='M9%2021h2'%20/%3e%3cpath%20d='M14%203h1'%20/%3e%3cpath%20d='M3%209v1'%20/%3e%3cpath%20d='M21%209v2'%20/%3e%3cpath%20d='M3%2014v1'%20/%3e%3c/svg%3e",Hh="data:image/svg+xml,%3c!--%20@license%20lucide-static%20v0.563.0%20-%20ISC%20--%3e%3csvg%20class='lucide%20lucide-square-menu'%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20%3e%3crect%20width='18'%20height='18'%20x='3'%20y='3'%20rx='2'%20/%3e%3cpath%20d='M7%208h10'%20/%3e%3cpath%20d='M7%2012h10'%20/%3e%3cpath%20d='M7%2016h10'%20/%3e%3c/svg%3e",Gh="data:image/svg+xml,%3c!--%20@license%20lucide-static%20v0.563.0%20-%20ISC%20--%3e%3csvg%20class='lucide%20lucide-square-pen'%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20%3e%3cpath%20d='M12%203H5a2%202%200%200%200-2%202v14a2%202%200%200%200%202%202h14a2%202%200%200%200%202-2v-7'%20/%3e%3cpath%20d='M18.375%202.625a1%201%200%200%201%203%203l-9.013%209.014a2%202%200%200%201-.853.505l-2.873.84a.5.5%200%200%201-.62-.62l.84-2.873a2%202%200%200%201%20.506-.852z'%20/%3e%3c/svg%3e",Yh="data:image/svg+xml,%3c!--%20@license%20lucide-static%20v0.563.0%20-%20ISC%20--%3e%3csvg%20class='lucide%20lucide-swatch-book'%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20%3e%3cpath%20d='M11%2017a4%204%200%200%201-8%200V5a2%202%200%200%201%202-2h4a2%202%200%200%201%202%202Z'%20/%3e%3cpath%20d='M16.7%2013H19a2%202%200%200%201%202%202v4a2%202%200%200%201-2%202H7'%20/%3e%3cpath%20d='M%207%2017h.01'%20/%3e%3cpath%20d='m11%208%202.3-2.3a2.4%202.4%200%200%201%203.404.004L18.6%207.6a2.4%202.4%200%200%201%20.026%203.434L9.9%2019.8'%20/%3e%3c/svg%3e",Xh="data:image/svg+xml,%3c!--%20@license%20lucide-static%20v0.563.0%20-%20ISC%20--%3e%3csvg%20class='lucide%20lucide-thumbs-up'%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20%3e%3cpath%20d='M15%205.88%2014%2010h5.83a2%202%200%200%201%201.92%202.56l-2.33%208A2%202%200%200%201%2017.5%2022H4a2%202%200%200%201-2-2v-8a2%202%200%200%201%202-2h2.76a2%202%200%200%200%201.79-1.11L12%202a3.13%203.13%200%200%201%203%203.88Z'%20/%3e%3cpath%20d='M7%2010v12'%20/%3e%3c/svg%3e",Qh="data:image/svg+xml,%3c!--%20@license%20lucide-static%20v0.563.0%20-%20ISC%20--%3e%3csvg%20class='lucide%20lucide-trash-2'%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20%3e%3cpath%20d='M10%2011v6'%20/%3e%3cpath%20d='M14%2011v6'%20/%3e%3cpath%20d='M19%206v14a2%202%200%200%201-2%202H7a2%202%200%200%201-2-2V6'%20/%3e%3cpath%20d='M3%206h18'%20/%3e%3cpath%20d='M8%206V4a2%202%200%200%201%202-2h4a2%202%200%200%201%202%202v2'%20/%3e%3c/svg%3e",Zh="data:image/svg+xml,%3c!--%20@license%20lucide-static%20v0.563.0%20-%20ISC%20--%3e%3csvg%20class='lucide%20lucide-triangle-alert'%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20%3e%3cpath%20d='m21.73%2018-8-14a2%202%200%200%200-3.48%200l-8%2014A2%202%200%200%200%204%2021h16a2%202%200%200%200%201.73-3'%20/%3e%3cpath%20d='M12%209v4'%20/%3e%3cpath%20d='M12%2017h.01'%20/%3e%3c/svg%3e",Jh="data:image/svg+xml,%3c!--%20@license%20lucide-static%20v0.563.0%20-%20ISC%20--%3e%3csvg%20class='lucide%20lucide-undo-2'%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20%3e%3cpath%20d='M9%2014%204%209l5-5'%20/%3e%3cpath%20d='M4%209h10.5a5.5%205.5%200%200%201%205.5%205.5a5.5%205.5%200%200%201-5.5%205.5H11'%20/%3e%3c/svg%3e",ep="data:image/svg+xml,%3c!--%20@license%20lucide-static%20v0.563.0%20-%20ISC%20--%3e%3csvg%20class='lucide%20lucide-upload'%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20%3e%3cpath%20d='M12%203v12'%20/%3e%3cpath%20d='m17%208-5-5-5%205'%20/%3e%3cpath%20d='M21%2015v4a2%202%200%200%201-2%202H5a2%202%200%200%201-2-2v-4'%20/%3e%3c/svg%3e",tp="data:image/svg+xml,%3c!--%20@license%20lucide-static%20v0.563.0%20-%20ISC%20--%3e%3csvg%20class='lucide%20lucide-wand'%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20%3e%3cpath%20d='M15%204V2'%20/%3e%3cpath%20d='M15%2016v-2'%20/%3e%3cpath%20d='M8%209h2'%20/%3e%3cpath%20d='M20%209h2'%20/%3e%3cpath%20d='M17.8%2011.8%2019%2013'%20/%3e%3cpath%20d='M15%209h.01'%20/%3e%3cpath%20d='M17.8%206.2%2019%205'%20/%3e%3cpath%20d='m3%2021%209-9'%20/%3e%3cpath%20d='M12.2%206.2%2011%205'%20/%3e%3c/svg%3e",rp="data:image/svg+xml,%3c!--%20@license%20lucide-static%20v0.563.0%20-%20ISC%20--%3e%3csvg%20class='lucide%20lucide-x'%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20%3e%3cpath%20d='M18%206%206%2018'%20/%3e%3cpath%20d='m6%206%2012%2012'%20/%3e%3c/svg%3e",np="data:image/svg+xml,%3c!--%20@license%20lucide-static%20v0.522.0%20-%20ISC%20--%3e%3c!--%20Adapted%20from%20lucide-static/icons/mouse.svg%20--%3e%3csvg%20class='lucide%20lucide-mouse-left-button'%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20%3e%3crect%20x='5'%20y='2'%20width='14'%20height='20'%20rx='7'%20/%3e%3cpath%20d='M12%2010h-3q0%20-4%203%20-4z'%20fill='currentColor'%20/%3e%3c/svg%3e",op="data:image/svg+xml,%3c!--%20@license%20lucide-static%20v0.522.0%20-%20ISC%20--%3e%3c!--%20Adapted%20from%20lucide-static/icons/mouse.svg%20--%3e%3csvg%20class='lucide%20lucide-mouse-right-button'%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20%3e%3crect%20x='5'%20y='2'%20width='14'%20height='20'%20rx='7'%20/%3e%3cpath%20d='M12%2010h3q0%20-4%20-3%20-4z'%20fill='currentColor'%20/%3e%3c/svg%3e",ip="data:image/svg+xml,%3c!--%20@license%20lucide-static%20v0.542.0%20-%20ISC%20--%3e%3c!--%20Adapted%20from%20lucide-iteration-cw%20--%3e%3csvg%20class='lucide%20lucide-x-restart'%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20%3e%3cpath%20d='M4%2014a8%208%200%201%200%208-8H4'%20/%3e%3cpath%20d='m8%202-4%204%204%204'%20/%3e%3c/svg%3e",sp={"back-to-catalog":wh,"checkpoint-add":Kh,"checkpoint-remove":Qh,"copy-image":Mh,favorite:Ih,game:Aa,"game-in-progress":$a,gameid:Oh,"generic-puzzle":Aa,help:zl,history:Th,"history-checkpoint":kh,"history-current-move":$a,"install-offline":hh,"new-game":jh,options:Hh,"puzzle-type":Yh,redo:Nh,"restart-game":ip,settings:Fh,"save-game":Eh,"load-game":ep,share:Uh,"show-solution":Vh,undo:Jh,unfinished:$h,info:Rh,success:Pl,warning:Zh,error:Dh,"history-back":ph,"history-back-to-start":fh,"history-forward":mh,"command-link":Wh,"offsite-link":Ah,"key-clear":Ch,"key-marks":Gh,"key-hints":tp,"mouse-left-button":np,"mouse-right-button":op,"solved-a":gh,"solved-b":Sh,"solved-c":zh,"solved-d":Lh,"solved-e":Bh,"solved-f":qh,"solved-g":Xh,"lost-a":Ph},Ol=vh,Il=e=>{e.style.fill="none",e.style.stroke="currentColor"};cl("default",{resolver:e=>sp[e]??Ol,mutator:Il});const Pa={check:Pl,"chevron-down":yh,"chevron-left":bh,"chevron-right":xh,xmark:rp,"circle-question":zl,"circle-xmark":_h},za=Hn("system");cl("system",{resolver:(e,...t)=>Pa[e]??za?.resolver(e,...t)??Ol,mutator:(e,t)=>Pa[t?.name??""]!==void 0?Il(e):za?.mutator?.(e,t)});var ap=Object.defineProperty,lp=(e,t,n)=>t in e?ap(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,bi=(e,t,n)=>(lp(e,typeof t!="symbol"?t+"":t,n),n),cp=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)},xi=(e,t)=>{if(Object(t)!==t)throw TypeError('Cannot use the "in" operator on this value');return e.has(t)},Fn=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)},Oa=(e,t,n)=>(cp(e,t,"access private method"),n);function Tl(e,t){return Object.is(e,t)}let Ce=null,rn=!1,Xn=1;const so=Symbol("SIGNAL");function Sr(e){const t=Ce;return Ce=e,t}function up(){return Ce}function dp(){return rn}const ps={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function So(e){if(rn)throw new Error(typeof ngDevMode<"u"&&ngDevMode?"Assertion error: signal read during notification phase":"");if(Ce===null)return;Ce.consumerOnSignalRead(e);const t=Ce.nextProducerIndex++;if(Pr(Ce),t<Ce.producerNode.length&&Ce.producerNode[t]!==e&&Ui(Ce)){const n=Ce.producerNode[t];Co(n,Ce.producerIndexOfThis[t])}Ce.producerNode[t]!==e&&(Ce.producerNode[t]=e,Ce.producerIndexOfThis[t]=Ui(Ce)?Ll(e,Ce,t):0),Ce.producerLastReadVersion[t]=e.version}function hp(){Xn++}function Ml(e){if(!(!e.dirty&&e.lastCleanEpoch===Xn)){if(!e.producerMustRecompute(e)&&!vp(e)){e.dirty=!1,e.lastCleanEpoch=Xn;return}e.producerRecomputeValue(e),e.dirty=!1,e.lastCleanEpoch=Xn}}function Rl(e){if(e.liveConsumerNode===void 0)return;const t=rn;rn=!0;try{for(const n of e.liveConsumerNode)n.dirty||fp(n)}finally{rn=t}}function pp(){return Ce?.consumerAllowSignalWrites!==!1}function fp(e){var t;e.dirty=!0,Rl(e),(t=e.consumerMarkedDirty)==null||t.call(e.wrapper??e)}function mp(e){return e&&(e.nextProducerIndex=0),Sr(e)}function gp(e,t){if(Sr(t),!(!e||e.producerNode===void 0||e.producerIndexOfThis===void 0||e.producerLastReadVersion===void 0)){if(Ui(e))for(let n=e.nextProducerIndex;n<e.producerNode.length;n++)Co(e.producerNode[n],e.producerIndexOfThis[n]);for(;e.producerNode.length>e.nextProducerIndex;)e.producerNode.pop(),e.producerLastReadVersion.pop(),e.producerIndexOfThis.pop()}}function vp(e){Pr(e);for(let t=0;t<e.producerNode.length;t++){const n=e.producerNode[t],i=e.producerLastReadVersion[t];if(i!==n.version||(Ml(n),i!==n.version))return!0}return!1}function Ll(e,t,n){var i;if(fs(e),Pr(e),e.liveConsumerNode.length===0){(i=e.watched)==null||i.call(e.wrapper);for(let a=0;a<e.producerNode.length;a++)e.producerIndexOfThis[a]=Ll(e.producerNode[a],e,a)}return e.liveConsumerIndexOfThis.push(n),e.liveConsumerNode.push(t)-1}function Co(e,t){var n;if(fs(e),Pr(e),typeof ngDevMode<"u"&&ngDevMode&&t>=e.liveConsumerNode.length)throw new Error(`Assertion error: active consumer index ${t} is out of bounds of ${e.liveConsumerNode.length} consumers)`);if(e.liveConsumerNode.length===1){(n=e.unwatched)==null||n.call(e.wrapper);for(let a=0;a<e.producerNode.length;a++)Co(e.producerNode[a],e.producerIndexOfThis[a])}const i=e.liveConsumerNode.length-1;if(e.liveConsumerNode[t]=e.liveConsumerNode[i],e.liveConsumerIndexOfThis[t]=e.liveConsumerIndexOfThis[i],e.liveConsumerNode.length--,e.liveConsumerIndexOfThis.length--,t<e.liveConsumerNode.length){const a=e.liveConsumerIndexOfThis[t],u=e.liveConsumerNode[t];Pr(u),u.producerIndexOfThis[a]=t}}function Ui(e){var t;return e.consumerIsAlwaysLive||(((t=e?.liveConsumerNode)==null?void 0:t.length)??0)>0}function Pr(e){e.producerNode??(e.producerNode=[]),e.producerIndexOfThis??(e.producerIndexOfThis=[]),e.producerLastReadVersion??(e.producerLastReadVersion=[])}function fs(e){e.liveConsumerNode??(e.liveConsumerNode=[]),e.liveConsumerIndexOfThis??(e.liveConsumerIndexOfThis=[])}function Dl(e){if(Ml(e),So(e),e.value===Ki)throw e.error;return e.value}function wp(e){const t=Object.create(yp);t.computation=e;const n=()=>Dl(t);return n[so]=t,n}const ki=Symbol("UNSET"),_i=Symbol("COMPUTING"),Ki=Symbol("ERRORED"),yp={...ps,value:ki,dirty:!0,error:null,equal:Tl,producerMustRecompute(e){return e.value===ki||e.value===_i},producerRecomputeValue(e){if(e.value===_i)throw new Error("Detected cycle in computations.");const t=e.value;e.value=_i;const n=mp(e);let i,a=!1;try{i=e.computation.call(e.wrapper),a=t!==ki&&t!==Ki&&e.equal.call(e.wrapper,t,i)}catch(u){i=Ki,e.error=u}finally{gp(e,n)}if(a){e.value=t;return}e.value=i,e.version++}};function bp(){throw new Error}let xp=bp;function kp(){xp()}function _p(e){const t=Object.create(Ep);t.value=e;const n=()=>(So(t),t.value);return n[so]=t,n}function Sp(){return So(this),this.value}function Cp(e,t){pp()||kp(),e.equal.call(e.wrapper,e.value,t)||(e.value=t,Ap(e))}const Ep={...ps,equal:Tl,value:void 0};function Ap(e){e.version++,hp(),Rl(e)}const Te=Symbol("node");var _e;(e=>{var t,n,i,a;class u{constructor(g,k={}){Fn(this,n),bi(this,t);const $=_p(g)[so];if(this[Te]=$,$.wrapper=this,k){const R=k.equals;R&&($.equal=R),$.watched=k[e.subtle.watched],$.unwatched=k[e.subtle.unwatched]}}get(){if(!(0,e.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.get");return Sp.call(this[Te])}set(g){if(!(0,e.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.set");if(dp())throw new Error("Writes to signals not permitted during Watcher callback");const k=this[Te];Cp(k,g)}}t=Te,n=new WeakSet,e.isState=p=>typeof p=="object"&&xi(n,p),e.State=u;class h{constructor(g,k){Fn(this,a),bi(this,i);const $=wp(g)[so];if($.consumerAllowSignalWrites=!0,this[Te]=$,$.wrapper=this,k){const R=k.equals;R&&($.equal=R),$.watched=k[e.subtle.watched],$.unwatched=k[e.subtle.unwatched]}}get(){if(!(0,e.isComputed)(this))throw new TypeError("Wrong receiver type for Signal.Computed.prototype.get");return Dl(this[Te])}}i=Te,a=new WeakSet,e.isComputed=p=>typeof p=="object"&&xi(a,p),e.Computed=h,(p=>{var g,k,E,$;function R(X){let Z,H=null;try{H=Sr(null),Z=X()}finally{Sr(H)}return Z}p.untrack=R;function D(X){var Z;if(!(0,e.isComputed)(X)&&!(0,e.isWatcher)(X))throw new TypeError("Called introspectSources without a Computed or Watcher argument");return((Z=X[Te].producerNode)==null?void 0:Z.map(H=>H.wrapper))??[]}p.introspectSources=D;function j(X){var Z;if(!(0,e.isComputed)(X)&&!(0,e.isState)(X))throw new TypeError("Called introspectSinks without a Signal argument");return((Z=X[Te].liveConsumerNode)==null?void 0:Z.map(H=>H.wrapper))??[]}p.introspectSinks=j;function G(X){if(!(0,e.isComputed)(X)&&!(0,e.isState)(X))throw new TypeError("Called hasSinks without a Signal argument");const Z=X[Te].liveConsumerNode;return Z?Z.length>0:!1}p.hasSinks=G;function te(X){if(!(0,e.isComputed)(X)&&!(0,e.isWatcher)(X))throw new TypeError("Called hasSources without a Computed or Watcher argument");const Z=X[Te].producerNode;return Z?Z.length>0:!1}p.hasSources=te;class J{constructor(Z){Fn(this,k),Fn(this,E),bi(this,g);let H=Object.create(ps);H.wrapper=this,H.consumerMarkedDirty=Z,H.consumerIsAlwaysLive=!0,H.consumerAllowSignalWrites=!1,H.producerNode=[],this[Te]=H}watch(...Z){if(!(0,e.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");Oa(this,E,$).call(this,Z);const H=this[Te];H.dirty=!1;const ae=Sr(H);for(const se of Z)So(se[Te]);Sr(ae)}unwatch(...Z){if(!(0,e.isWatcher)(this))throw new TypeError("Called unwatch without Watcher receiver");Oa(this,E,$).call(this,Z);const H=this[Te];Pr(H);for(let ae=H.producerNode.length-1;ae>=0;ae--)if(Z.includes(H.producerNode[ae].wrapper)){Co(H.producerNode[ae],H.producerIndexOfThis[ae]);const se=H.producerNode.length-1;if(H.producerNode[ae]=H.producerNode[se],H.producerIndexOfThis[ae]=H.producerIndexOfThis[se],H.producerNode.length--,H.producerIndexOfThis.length--,H.nextProducerIndex--,ae<H.producerNode.length){const Ze=H.producerIndexOfThis[ae],qe=H.producerNode[ae];fs(qe),qe.liveConsumerIndexOfThis[Ze]=ae}}}getPending(){if(!(0,e.isWatcher)(this))throw new TypeError("Called getPending without Watcher receiver");return this[Te].producerNode.filter(H=>H.dirty).map(H=>H.wrapper)}}g=Te,k=new WeakSet,E=new WeakSet,$=function(X){for(const Z of X)if(!(0,e.isComputed)(Z)&&!(0,e.isState)(Z))throw new TypeError("Called watch/unwatch without a Computed or State argument")},e.isWatcher=X=>xi(k,X),p.Watcher=J;function ie(){var X;return(X=up())==null?void 0:X.wrapper}p.currentComputed=ie,p.watched=Symbol("watched"),p.unwatched=Symbol("unwatched")})(e.subtle||(e.subtle={}))})(_e||(_e={}));let Si=!1;const Ia=new _e.subtle.Watcher(()=>{Si||(Si=!0,queueMicrotask(()=>{Si=!1;for(const e of Ia.getPending())e.get();Ia.watch()}))}),$p=Symbol("SignalWatcherBrand"),Pp=new FinalizationRegistry(e=>{e.unwatch(..._e.subtle.introspectSources(e))}),Ta=new WeakMap;function Tf(e){return e[$p]===!0?(console.warn("SignalWatcher should not be applied to the same class more than once."),e):class extends e{constructor(){super(...arguments),this._$St=new Map,this._$So=new _e.State(0),this._$Si=!1}_$Sl(){var t,n;const i=[],a=[];this._$St.forEach((h,p)=>{(h?.beforeUpdate?i:a).push(p)});const u=(t=this.h)===null||t===void 0?void 0:t.getPending().filter(h=>h!==this._$Su&&!this._$St.has(h));i.forEach(h=>h.get()),(n=this._$Su)===null||n===void 0||n.get(),u.forEach(h=>h.get()),a.forEach(h=>h.get())}_$Sv(){this.isUpdatePending||queueMicrotask(()=>{this.isUpdatePending||this._$Sl()})}_$S_(){if(this.h!==void 0)return;this._$Su=new _e.Computed(()=>{this._$So.get(),super.performUpdate()});const t=this.h=new _e.subtle.Watcher(function(){const n=Ta.get(this);n!==void 0&&(n._$Si===!1&&(new Set(this.getPending()).has(n._$Su)?n.requestUpdate():n._$Sv()),this.watch())});Ta.set(t,this),Pp.register(this,t),t.watch(this._$Su),t.watch(...Array.from(this._$St).map(([n])=>n))}_$Sp(){if(this.h===void 0)return;let t=!1;this.h.unwatch(..._e.subtle.introspectSources(this.h).filter(n=>{var i;const a=((i=this._$St.get(n))===null||i===void 0?void 0:i.manualDispose)!==!0;return a&&this._$St.delete(n),t||(t=!a),a})),t||(this._$Su=void 0,this.h=void 0,this._$St.clear())}updateEffect(t,n){var i;this._$S_();const a=new _e.Computed(()=>{t()});return this.h.watch(a),this._$St.set(a,n),(i=n?.beforeUpdate)!==null&&i!==void 0&&i?_e.subtle.untrack(()=>a.get()):this.updateComplete.then(()=>_e.subtle.untrack(()=>a.get())),()=>{this._$St.delete(a),this.h.unwatch(a),this.isConnected===!1&&this._$Sp()}}performUpdate(){this.isUpdatePending&&(this._$S_(),this._$Si=!0,this._$So.set(this._$So.get()+1),this._$Si=!1,this._$Sl())}connectedCallback(){super.connectedCallback(),this.requestUpdate()}disconnectedCallback(){super.disconnectedCallback(),queueMicrotask(()=>{this.isConnected===!1&&this._$Sp()})}}}let Ci=!1;const Ma=new _e.subtle.Watcher(async()=>{Ci||(Ci=!0,queueMicrotask(()=>{Ci=!1;for(const e of Ma.getPending())e.get();Ma.watch()}))});_e.State;_e.Computed;const ao=(e,t)=>new _e.State(e,t),lo=(e,t)=>new _e.Computed(e,t);try{self["workbox:window:7.3.0"]&&_()}catch{}function Ra(e,t){return new Promise((function(n){var i=new MessageChannel;i.port1.onmessage=function(a){n(a.data)},e.postMessage(t,[i.port2])}))}function La(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,i=Array(t);n<t;n++)i[n]=e[n];return i}function zp(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,Ip(i.key),i)}}function Op(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=(function(a,u){if(a){if(typeof a=="string")return La(a,u);var h={}.toString.call(a).slice(8,-1);return h==="Object"&&a.constructor&&(h=a.constructor.name),h==="Map"||h==="Set"?Array.from(a):h==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(h)?La(a,u):void 0}})(e))||t){n&&(e=n);var i=0;return function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Vi(e,t){return Vi=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},Vi(e,t)}function Ip(e){var t=(function(n,i){if(typeof n!="object"||!n)return n;var a=n[Symbol.toPrimitive];if(a!==void 0){var u=a.call(n,i);if(typeof u!="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)})(e,"string");return typeof t=="symbol"?t:t+""}try{self["workbox:core:7.3.0"]&&_()}catch{}var Ei=function(){var e=this;this.promise=new Promise((function(t,n){e.resolve=t,e.reject=n}))};function Ai(e,t){var n=location.href;return new URL(e,n).href===new URL(t,n).href}var Qr=function(e,t){this.type=e,Object.assign(this,t)};function Nt(e,t,n){return n?t?t(e):e:(e&&e.then||(e=Promise.resolve(e)),t?e.then(t):e)}function Tp(){}var Mp={type:"SKIP_WAITING"};function Da(e,t){return e&&e.then?e.then(Tp):Promise.resolve()}var Rp=(function(e){function t(u,h){var p,g;return h===void 0&&(h={}),(p=e.call(this)||this).nn={},p.tn=0,p.rn=new Ei,p.en=new Ei,p.on=new Ei,p.un=0,p.an=new Set,p.cn=function(){var k=p.fn,E=k.installing;p.tn>0||!Ai(E.scriptURL,p.sn.toString())||performance.now()>p.un+6e4?(p.vn=E,k.removeEventListener("updatefound",p.cn)):(p.hn=E,p.an.add(E),p.rn.resolve(E)),++p.tn,E.addEventListener("statechange",p.ln)},p.ln=function(k){var E=p.fn,$=k.target,R=$.state,D=$===p.vn,j={sw:$,isExternal:D,originalEvent:k};!D&&p.mn&&(j.isUpdate=!0),p.dispatchEvent(new Qr(R,j)),R==="installed"?p.wn=self.setTimeout((function(){R==="installed"&&E.waiting===$&&p.dispatchEvent(new Qr("waiting",j))}),200):R==="activating"&&(clearTimeout(p.wn),D||p.en.resolve($))},p.yn=function(k){var E=p.hn,$=E!==navigator.serviceWorker.controller;p.dispatchEvent(new Qr("controlling",{isExternal:$,originalEvent:k,sw:E,isUpdate:p.mn})),$||p.on.resolve(E)},p.gn=(g=function(k){var E=k.data,$=k.ports,R=k.source;return Nt(p.getSW(),(function(){p.an.has(R)&&p.dispatchEvent(new Qr("message",{data:E,originalEvent:k,ports:$,sw:R}))}))},function(){for(var k=[],E=0;E<arguments.length;E++)k[E]=arguments[E];try{return Promise.resolve(g.apply(this,k))}catch($){return Promise.reject($)}}),p.sn=u,p.nn=h,navigator.serviceWorker.addEventListener("message",p.gn),p}var n,i;i=e,(n=t).prototype=Object.create(i.prototype),n.prototype.constructor=n,Vi(n,i);var a=t.prototype;return a.register=function(u){var h=(u===void 0?{}:u).immediate,p=h!==void 0&&h;try{var g=this;return Nt((function(k,E){var $=k();return $&&$.then?$.then(E):E($)})((function(){if(!p&&document.readyState!=="complete")return Da(new Promise((function(k){return window.addEventListener("load",k)})))}),(function(){return g.mn=!!navigator.serviceWorker.controller,g.dn=g.pn(),Nt(g.bn(),(function(k){g.fn=k,g.dn&&(g.hn=g.dn,g.en.resolve(g.dn),g.on.resolve(g.dn),g.dn.addEventListener("statechange",g.ln,{once:!0}));var E=g.fn.waiting;return E&&Ai(E.scriptURL,g.sn.toString())&&(g.hn=E,Promise.resolve().then((function(){g.dispatchEvent(new Qr("waiting",{sw:E,wasWaitingBeforeRegister:!0}))})).then((function(){}))),g.hn&&(g.rn.resolve(g.hn),g.an.add(g.hn)),g.fn.addEventListener("updatefound",g.cn),navigator.serviceWorker.addEventListener("controllerchange",g.yn),g.fn}))})))}catch(k){return Promise.reject(k)}},a.update=function(){try{return this.fn?Nt(Da(this.fn.update())):Nt()}catch(u){return Promise.reject(u)}},a.getSW=function(){return this.hn!==void 0?Promise.resolve(this.hn):this.rn.promise},a.messageSW=function(u){try{return Nt(this.getSW(),(function(h){return Ra(h,u)}))}catch(h){return Promise.reject(h)}},a.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&Ra(this.fn.waiting,Mp)},a.pn=function(){var u=navigator.serviceWorker.controller;return u&&Ai(u.scriptURL,this.sn.toString())?u:void 0},a.bn=function(){try{var u=this;return Nt((function(h,p){try{var g=h()}catch(k){return p(k)}return g&&g.then?g.then(void 0,p):g})((function(){return Nt(navigator.serviceWorker.register(u.sn,u.nn),(function(h){return u.un=performance.now(),h}))}),(function(h){throw h})))}catch(h){return Promise.reject(h)}},(function(u,h,p){return h&&zp(u.prototype,h),Object.defineProperty(u,"prototype",{writable:!1}),u})(t,[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])})((function(){function e(){this.Pn=new Map}var t=e.prototype;return t.addEventListener=function(n,i){this.jn(n).add(i)},t.removeEventListener=function(n,i){this.jn(n).delete(i)},t.dispatchEvent=function(n){n.target=this;for(var i,a=Op(this.jn(n.type));!(i=a()).done;)(0,i.value)(n)},t.jn=function(n){return this.Pn.has(n)||this.Pn.set(n,new Set),this.Pn.get(n)},e})());const Ba=(e=null)=>new _e.State(e,{equals:()=>!1});class Bl{collection=Ba();storages=new Map;vals;readStorageFor(t){const{storages:n}=this;let i=n.get(t);i===void 0&&(i=Ba(),n.set(t,i)),i.get()}dirtyStorageFor(t){const n=this.storages.get(t);n&&n.set(null)}constructor(t){this.vals=t?new Map(t):new Map}get(t){return this.readStorageFor(t),this.vals.get(t)}has(t){return this.readStorageFor(t),this.vals.has(t)}entries(){return this.collection.get(),this.vals.entries()}keys(){return this.collection.get(),this.vals.keys()}values(){return this.collection.get(),this.vals.values()}forEach(t){this.collection.get(),this.vals.forEach(t)}get size(){return this.collection.get(),this.vals.size}[Symbol.iterator](){return this.collection.get(),this.vals[Symbol.iterator]()}get[Symbol.toStringTag](){return this.vals[Symbol.toStringTag]}set(t,n){return this.dirtyStorageFor(t),this.collection.set(null),this.vals.set(t,n),this}delete(t){return this.dirtyStorageFor(t),this.collection.set(null),this.vals.delete(t)}clear(){this.storages.forEach(t=>t.set(null)),this.collection.set(null),this.vals.clear()}}Object.setPrototypeOf(Bl.prototype,Map.prototype);let $i=!1,co=new _e.subtle.Watcher(()=>{$i||($i=!0,queueMicrotask(()=>{$i=!1,Lp()}))});function Lp(){for(const e of co.getPending())e.get();co.watch()}function jl(e){let t=new _e.Computed(()=>e());return co.watch(t),t.get(),()=>{co.unwatch(t)}}var Dp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Bp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Qn={exports:{}},jp=Qn.exports,ja;function Np(){return ja||(ja=1,(function(e,t){(function(n,i){e.exports=i()})(jp,function(){var n=function(r,o){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,l){s.__proto__=l}||function(s,l){for(var c in l)Object.prototype.hasOwnProperty.call(l,c)&&(s[c]=l[c])})(r,o)},i=function(){return(i=Object.assign||function(r){for(var o,s=1,l=arguments.length;s<l;s++)for(var c in o=arguments[s])Object.prototype.hasOwnProperty.call(o,c)&&(r[c]=o[c]);return r}).apply(this,arguments)};function a(r,o,s){for(var l,c=0,d=o.length;c<d;c++)!l&&c in o||((l=l||Array.prototype.slice.call(o,0,c))[c]=o[c]);return r.concat(l||Array.prototype.slice.call(o))}var u=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:Dp,h=Object.keys,p=Array.isArray;function g(r,o){return typeof o!="object"||h(o).forEach(function(s){r[s]=o[s]}),r}typeof Promise>"u"||u.Promise||(u.Promise=Promise);var k=Object.getPrototypeOf,E={}.hasOwnProperty;function $(r,o){return E.call(r,o)}function R(r,o){typeof o=="function"&&(o=o(k(r))),(typeof Reflect>"u"?h:Reflect.ownKeys)(o).forEach(function(s){j(r,s,o[s])})}var D=Object.defineProperty;function j(r,o,s,l){D(r,o,g(s&&$(s,"get")&&typeof s.get=="function"?{get:s.get,set:s.set,configurable:!0}:{value:s,configurable:!0,writable:!0},l))}function G(r){return{from:function(o){return r.prototype=Object.create(o.prototype),j(r.prototype,"constructor",r),{extend:R.bind(null,r.prototype)}}}}var te=Object.getOwnPropertyDescriptor,J=[].slice;function ie(r,o,s){return J.call(r,o,s)}function X(r,o){return o(r)}function Z(r){if(!r)throw new Error("Assertion Failed")}function H(r){u.setImmediate?setImmediate(r):setTimeout(r,0)}function ae(r,o){if(typeof o=="string"&&$(r,o))return r[o];if(!o)return r;if(typeof o!="string"){for(var s=[],l=0,c=o.length;l<c;++l){var d=ae(r,o[l]);s.push(d)}return s}var f=o.indexOf(".");if(f!==-1){var m=r[o.substr(0,f)];return m==null?void 0:ae(m,o.substr(f+1))}}function se(r,o,s){if(r&&o!==void 0&&!("isFrozen"in Object&&Object.isFrozen(r)))if(typeof o!="string"&&"length"in o){Z(typeof s!="string"&&"length"in s);for(var l=0,c=o.length;l<c;++l)se(r,o[l],s[l])}else{var d,f,m=o.indexOf(".");m!==-1?(d=o.substr(0,m),(f=o.substr(m+1))===""?s===void 0?p(r)&&!isNaN(parseInt(d))?r.splice(d,1):delete r[d]:r[d]=s:se(m=!(m=r[d])||!$(r,d)?r[d]={}:m,f,s)):s===void 0?p(r)&&!isNaN(parseInt(o))?r.splice(o,1):delete r[o]:r[o]=s}}function Ze(r){var o,s={};for(o in r)$(r,o)&&(s[o]=r[o]);return s}var qe=[].concat;function Fe(r){return qe.apply([],r)}var Yt="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(Fe([8,16,32,64].map(function(r){return["Int","Uint","Float"].map(function(o){return o+r+"Array"})}))).filter(function(r){return u[r]}),ht=new Set(Yt.map(function(r){return u[r]})),Re=null;function Le(r){return Re=new WeakMap,r=(function o(s){if(!s||typeof s!="object")return s;var l=Re.get(s);if(l)return l;if(p(s)){l=[],Re.set(s,l);for(var c=0,d=s.length;c<d;++c)l.push(o(s[c]))}else if(ht.has(s.constructor))l=s;else{var f,m=k(s);for(f in l=m===Object.prototype?{}:Object.create(m),Re.set(s,l),s)$(s,f)&&(l[f]=o(s[f]))}return l})(r),Re=null,r}var Ie={}.toString;function pt(r){return Ie.call(r).slice(8,-1)}var nt=typeof Symbol<"u"?Symbol.iterator:"@@iterator",ot=typeof nt=="symbol"?function(r){var o;return r!=null&&(o=r[nt])&&o.apply(r)}:function(){return null};function Ae(r,o){return o=r.indexOf(o),0<=o&&r.splice(o,1),0<=o}var Ue={};function ft(r){var o,s,l,c;if(arguments.length===1){if(p(r))return r.slice();if(this===Ue&&typeof r=="string")return[r];if(c=ot(r)){for(s=[];!(l=c.next()).done;)s.push(l.value);return s}if(r==null)return[r];if(typeof(o=r.length)!="number")return[r];for(s=new Array(o);o--;)s[o]=r[o];return s}for(o=arguments.length,s=new Array(o);o--;)s[o]=arguments[o];return s}var $o=typeof Symbol<"u"?function(r){return r[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},Lr=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],ut=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(Lr),Wl={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function pr(r,o){this.name=r,this.message=o}function ms(r,o){return r+". Errors: "+Object.keys(o).map(function(s){return o[s].toString()}).filter(function(s,l,c){return c.indexOf(s)===l}).join(`
`)}function dn(r,o,s,l){this.failures=o,this.failedKeys=l,this.successCount=s,this.message=ms(r,o)}function fr(r,o){this.name="BulkError",this.failures=Object.keys(o).map(function(s){return o[s]}),this.failuresByPos=o,this.message=ms(r,this.failures)}G(pr).from(Error).extend({toString:function(){return this.name+": "+this.message}}),G(dn).from(pr),G(fr).from(pr);var Po=ut.reduce(function(r,o){return r[o]=o+"Error",r},{}),Hl=pr,Q=ut.reduce(function(r,o){var s=o+"Error";function l(c,d){this.name=s,c?typeof c=="string"?(this.message="".concat(c).concat(d?`
 `+d:""),this.inner=d||null):typeof c=="object"&&(this.message="".concat(c.name," ").concat(c.message),this.inner=c):(this.message=Wl[o]||s,this.inner=null)}return G(l).from(Hl),r[o]=l,r},{});Q.Syntax=SyntaxError,Q.Type=TypeError,Q.Range=RangeError;var gs=Lr.reduce(function(r,o){return r[o+"Error"]=Q[o],r},{}),hn=ut.reduce(function(r,o){return["Syntax","Type","Range"].indexOf(o)===-1&&(r[o+"Error"]=Q[o]),r},{});function he(){}function Mr(r){return r}function Gl(r,o){return r==null||r===Mr?o:function(s){return o(r(s))}}function Gt(r,o){return function(){r.apply(this,arguments),o.apply(this,arguments)}}function Yl(r,o){return r===he?o:function(){var s=r.apply(this,arguments);s!==void 0&&(arguments[0]=s);var l=this.onsuccess,c=this.onerror;this.onsuccess=null,this.onerror=null;var d=o.apply(this,arguments);return l&&(this.onsuccess=this.onsuccess?Gt(l,this.onsuccess):l),c&&(this.onerror=this.onerror?Gt(c,this.onerror):c),d!==void 0?d:s}}function Xl(r,o){return r===he?o:function(){r.apply(this,arguments);var s=this.onsuccess,l=this.onerror;this.onsuccess=this.onerror=null,o.apply(this,arguments),s&&(this.onsuccess=this.onsuccess?Gt(s,this.onsuccess):s),l&&(this.onerror=this.onerror?Gt(l,this.onerror):l)}}function Ql(r,o){return r===he?o:function(s){var l=r.apply(this,arguments);g(s,l);var c=this.onsuccess,d=this.onerror;return this.onsuccess=null,this.onerror=null,s=o.apply(this,arguments),c&&(this.onsuccess=this.onsuccess?Gt(c,this.onsuccess):c),d&&(this.onerror=this.onerror?Gt(d,this.onerror):d),l===void 0?s===void 0?void 0:s:g(l,s)}}function Zl(r,o){return r===he?o:function(){return o.apply(this,arguments)!==!1&&r.apply(this,arguments)}}function zo(r,o){return r===he?o:function(){var s=r.apply(this,arguments);if(s&&typeof s.then=="function"){for(var l=this,c=arguments.length,d=new Array(c);c--;)d[c]=arguments[c];return s.then(function(){return o.apply(l,d)})}return o.apply(this,arguments)}}hn.ModifyError=dn,hn.DexieError=pr,hn.BulkError=fr;var wt=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function vs(r){wt=r}var Rr={},ws=100,Yt=typeof Promise>"u"?[]:(function(){var r=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[r,k(r),r];var o=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[o,k(o),r]})(),Lr=Yt[0],ut=Yt[1],Yt=Yt[2],ut=ut&&ut.then,Xt=Lr&&Lr.constructor,Oo=!!Yt,Dr=function(r,o){Br.push([r,o]),pn&&(queueMicrotask(ec),pn=!1)},Io=!0,pn=!0,Qt=[],fn=[],To=Mr,Tt={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:he,pgp:!1,env:{},finalize:he},Y=Tt,Br=[],Zt=0,mn=[];function V(r){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var o=this._PSD=Y;if(typeof r!="function"){if(r!==Rr)throw new TypeError("Not a function");return this._state=arguments[1],this._value=arguments[2],void(this._state===!1&&Ro(this,this._value))}this._state=null,this._value=null,++o.ref,(function s(l,c){try{c(function(d){if(l._state===null){if(d===l)throw new TypeError("A promise cannot be resolved with itself.");var f=l._lib&&mr();d&&typeof d.then=="function"?s(l,function(m,w){d instanceof V?d._then(m,w):d.then(m,w)}):(l._state=!0,l._value=d,bs(l)),f&&gr()}},Ro.bind(null,l))}catch(d){Ro(l,d)}})(this,r)}var Mo={get:function(){var r=Y,o=yn;function s(l,c){var d=this,f=!r.global&&(r!==Y||o!==yn),m=f&&!Rt(),w=new V(function(y,A){Lo(d,new ys(ks(l,r,f,m),ks(c,r,f,m),y,A,r))});return this._consoleTask&&(w._consoleTask=this._consoleTask),w}return s.prototype=Rr,s},set:function(r){j(this,"then",r&&r.prototype===Rr?Mo:{get:function(){return r},set:Mo.set})}};function ys(r,o,s,l,c){this.onFulfilled=typeof r=="function"?r:null,this.onRejected=typeof o=="function"?o:null,this.resolve=s,this.reject=l,this.psd=c}function Ro(r,o){var s,l;fn.push(o),r._state===null&&(s=r._lib&&mr(),o=To(o),r._state=!1,r._value=o,l=r,Qt.some(function(c){return c._value===l._value})||Qt.push(l),bs(r),s&&gr())}function bs(r){var o=r._listeners;r._listeners=[];for(var s=0,l=o.length;s<l;++s)Lo(r,o[s]);var c=r._PSD;--c.ref||c.finalize(),Zt===0&&(++Zt,Dr(function(){--Zt==0&&Do()},[]))}function Lo(r,o){if(r._state!==null){var s=r._state?o.onFulfilled:o.onRejected;if(s===null)return(r._state?o.resolve:o.reject)(r._value);++o.psd.ref,++Zt,Dr(Jl,[s,r,o])}else r._listeners.push(o)}function Jl(r,o,s){try{var l,c=o._value;!o._state&&fn.length&&(fn=[]),l=wt&&o._consoleTask?o._consoleTask.run(function(){return r(c)}):r(c),o._state||fn.indexOf(c)!==-1||(function(d){for(var f=Qt.length;f;)if(Qt[--f]._value===d._value)return Qt.splice(f,1)})(o),s.resolve(l)}catch(d){s.reject(d)}finally{--Zt==0&&Do(),--s.psd.ref||s.psd.finalize()}}function ec(){Jt(Tt,function(){mr()&&gr()})}function mr(){var r=Io;return pn=Io=!1,r}function gr(){var r,o,s;do for(;0<Br.length;)for(r=Br,Br=[],s=r.length,o=0;o<s;++o){var l=r[o];l[0].apply(null,l[1])}while(0<Br.length);pn=Io=!0}function Do(){var r=Qt;Qt=[],r.forEach(function(l){l._PSD.onunhandled.call(null,l._value,l)});for(var o=mn.slice(0),s=o.length;s;)o[--s]()}function gn(r){return new V(Rr,!1,r)}function ve(r,o){var s=Y;return function(){var l=mr(),c=Y;try{return Lt(s,!0),r.apply(this,arguments)}catch(d){o&&o(d)}finally{Lt(c,!1),l&&gr()}}}R(V.prototype,{then:Mo,_then:function(r,o){Lo(this,new ys(null,null,r,o,Y))},catch:function(r){if(arguments.length===1)return this.then(null,r);var o=r,s=arguments[1];return typeof o=="function"?this.then(null,function(l){return(l instanceof o?s:gn)(l)}):this.then(null,function(l){return(l&&l.name===o?s:gn)(l)})},finally:function(r){return this.then(function(o){return V.resolve(r()).then(function(){return o})},function(o){return V.resolve(r()).then(function(){return gn(o)})})},timeout:function(r,o){var s=this;return r<1/0?new V(function(l,c){var d=setTimeout(function(){return c(new Q.Timeout(o))},r);s.then(l,c).finally(clearTimeout.bind(null,d))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&j(V.prototype,Symbol.toStringTag,"Dexie.Promise"),Tt.env=xs(),R(V,{all:function(){var r=ft.apply(null,arguments).map(bn);return new V(function(o,s){r.length===0&&o([]);var l=r.length;r.forEach(function(c,d){return V.resolve(c).then(function(f){r[d]=f,--l||o(r)},s)})})},resolve:function(r){return r instanceof V?r:r&&typeof r.then=="function"?new V(function(o,s){r.then(o,s)}):new V(Rr,!0,r)},reject:gn,race:function(){var r=ft.apply(null,arguments).map(bn);return new V(function(o,s){r.map(function(l){return V.resolve(l).then(o,s)})})},PSD:{get:function(){return Y},set:function(r){return Y=r}},totalEchoes:{get:function(){return yn}},newPSD:Mt,usePSD:Jt,scheduler:{get:function(){return Dr},set:function(r){Dr=r}},rejectionMapper:{get:function(){return To},set:function(r){To=r}},follow:function(r,o){return new V(function(s,l){return Mt(function(c,d){var f=Y;f.unhandleds=[],f.onunhandled=d,f.finalize=Gt(function(){var m,w=this;m=function(){w.unhandleds.length===0?c():d(w.unhandleds[0])},mn.push(function y(){m(),mn.splice(mn.indexOf(y),1)}),++Zt,Dr(function(){--Zt==0&&Do()},[])},f.finalize),r()},o,s,l)})}}),Xt&&(Xt.allSettled&&j(V,"allSettled",function(){var r=ft.apply(null,arguments).map(bn);return new V(function(o){r.length===0&&o([]);var s=r.length,l=new Array(s);r.forEach(function(c,d){return V.resolve(c).then(function(f){return l[d]={status:"fulfilled",value:f}},function(f){return l[d]={status:"rejected",reason:f}}).then(function(){return--s||o(l)})})})}),Xt.any&&typeof AggregateError<"u"&&j(V,"any",function(){var r=ft.apply(null,arguments).map(bn);return new V(function(o,s){r.length===0&&s(new AggregateError([]));var l=r.length,c=new Array(l);r.forEach(function(d,f){return V.resolve(d).then(function(m){return o(m)},function(m){c[f]=m,--l||s(new AggregateError(c))})})})}),Xt.withResolvers&&(V.withResolvers=Xt.withResolvers));var Pe={awaits:0,echoes:0,id:0},tc=0,vn=[],wn=0,yn=0,rc=0;function Mt(r,o,s,l){var c=Y,d=Object.create(c);return d.parent=c,d.ref=0,d.global=!1,d.id=++rc,Tt.env,d.env=Oo?{Promise:V,PromiseProp:{value:V,configurable:!0,writable:!0},all:V.all,race:V.race,allSettled:V.allSettled,any:V.any,resolve:V.resolve,reject:V.reject}:{},o&&g(d,o),++c.ref,d.finalize=function(){--this.parent.ref||this.parent.finalize()},l=Jt(d,r,s,l),d.ref===0&&d.finalize(),l}function vr(){return Pe.id||(Pe.id=++tc),++Pe.awaits,Pe.echoes+=ws,Pe.id}function Rt(){return!!Pe.awaits&&(--Pe.awaits==0&&(Pe.id=0),Pe.echoes=Pe.awaits*ws,!0)}function bn(r){return Pe.echoes&&r&&r.constructor===Xt?(vr(),r.then(function(o){return Rt(),o},function(o){return Rt(),xe(o)})):r}function nc(){var r=vn[vn.length-1];vn.pop(),Lt(r,!1)}function Lt(r,o){var s,l=Y;(o?!Pe.echoes||wn++&&r===Y:!wn||--wn&&r===Y)||queueMicrotask(o?function(c){++yn,Pe.echoes&&--Pe.echoes!=0||(Pe.echoes=Pe.awaits=Pe.id=0),vn.push(Y),Lt(c,!0)}.bind(null,r):nc),r!==Y&&(Y=r,l===Tt&&(Tt.env=xs()),Oo&&(s=Tt.env.Promise,o=r.env,(l.global||r.global)&&(Object.defineProperty(u,"Promise",o.PromiseProp),s.all=o.all,s.race=o.race,s.resolve=o.resolve,s.reject=o.reject,o.allSettled&&(s.allSettled=o.allSettled),o.any&&(s.any=o.any))))}function xs(){var r=u.Promise;return Oo?{Promise:r,PromiseProp:Object.getOwnPropertyDescriptor(u,"Promise"),all:r.all,race:r.race,allSettled:r.allSettled,any:r.any,resolve:r.resolve,reject:r.reject}:{}}function Jt(r,o,s,l,c){var d=Y;try{return Lt(r,!0),o(s,l,c)}finally{Lt(d,!1)}}function ks(r,o,s,l){return typeof r!="function"?r:function(){var c=Y;s&&vr(),Lt(o,!0);try{return r.apply(this,arguments)}finally{Lt(c,!1),l&&queueMicrotask(Rt)}}}function Bo(r){Promise===Xt&&Pe.echoes===0?wn===0?r():enqueueNativeMicroTask(r):setTimeout(r,0)}(""+ut).indexOf("[native code]")===-1&&(vr=Rt=he);var xe=V.reject,er="￿",Ct="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",_s="String expected.",wr=[],xn="__dbnames",jo="readonly",No="readwrite";function tr(r,o){return r?o?function(){return r.apply(this,arguments)&&o.apply(this,arguments)}:r:o}var Ss={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function kn(r){return typeof r!="string"||/\./.test(r)?function(o){return o}:function(o){return o[r]===void 0&&r in o&&delete(o=Le(o))[r],o}}function Cs(){throw Q.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.")}function le(r,o){try{var s=Es(r),l=Es(o);if(s!==l)return s==="Array"?1:l==="Array"?-1:s==="binary"?1:l==="binary"?-1:s==="string"?1:l==="string"?-1:s==="Date"?1:l!=="Date"?NaN:-1;switch(s){case"number":case"Date":case"string":return o<r?1:r<o?-1:0;case"binary":return(function(c,d){for(var f=c.length,m=d.length,w=f<m?f:m,y=0;y<w;++y)if(c[y]!==d[y])return c[y]<d[y]?-1:1;return f===m?0:f<m?-1:1})(As(r),As(o));case"Array":return(function(c,d){for(var f=c.length,m=d.length,w=f<m?f:m,y=0;y<w;++y){var A=le(c[y],d[y]);if(A!==0)return A}return f===m?0:f<m?-1:1})(r,o)}}catch{}return NaN}function Es(r){var o=typeof r;return o!="object"?o:ArrayBuffer.isView(r)?"binary":(r=pt(r),r==="ArrayBuffer"?"binary":r)}function As(r){return r instanceof Uint8Array?r:ArrayBuffer.isView(r)?new Uint8Array(r.buffer,r.byteOffset,r.byteLength):new Uint8Array(r)}function _n(r,o,s){var l=r.schema.yProps;return l?(o&&0<s.numFailures&&(o=o.filter(function(c,d){return!s.failures[d]})),Promise.all(l.map(function(c){return c=c.updatesTable,o?r.db.table(c).where("k").anyOf(o).delete():r.db.table(c).clear()})).then(function(){return s})):s}var jr=($s.prototype.execute=function(r){var o=this["@@propmod"];if(o.add!==void 0){var s=o.add;if(p(s))return a(a([],p(r)?r:[],!0),s).sort();if(typeof s=="number")return(Number(r)||0)+s;if(typeof s=="bigint")try{return BigInt(r)+s}catch{return BigInt(0)+s}throw new TypeError("Invalid term ".concat(s))}if(o.remove!==void 0){var l=o.remove;if(p(l))return p(r)?r.filter(function(c){return!l.includes(c)}).sort():[];if(typeof l=="number")return Number(r)-l;if(typeof l=="bigint")try{return BigInt(r)-l}catch{return BigInt(0)-l}throw new TypeError("Invalid subtrahend ".concat(l))}return s=(s=o.replacePrefix)===null||s===void 0?void 0:s[0],s&&typeof r=="string"&&r.startsWith(s)?o.replacePrefix[1]+r.substring(s.length):r},$s);function $s(r){this["@@propmod"]=r}function Ps(r,o){for(var s=h(o),l=s.length,c=!1,d=0;d<l;++d){var f=s[d],m=o[f],w=ae(r,f);m instanceof jr?(se(r,f,m.execute(w)),c=!0):w!==m&&(se(r,f,m),c=!0)}return c}var zs=(ge.prototype._trans=function(r,o,s){var l=this._tx||Y.trans,c=this.name,d=wt&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(r==="readonly"?"read":"write"," ").concat(this.name));function f(y,A,v){if(!v.schema[c])throw new Q.NotFound("Table "+c+" not part of transaction");return o(v.idbtrans,v)}var m=mr();try{var w=l&&l.db._novip===this.db._novip?l===Y.trans?l._promise(r,f,s):Mt(function(){return l._promise(r,f,s)},{trans:l,transless:Y.transless||Y}):(function y(A,v,z,b){if(A.idbdb&&(A._state.openComplete||Y.letThrough||A._vip)){var S=A._createTransaction(v,z,A._dbSchema);try{S.create(),A._state.PR1398_maxLoop=3}catch(C){return C.name===Po.InvalidState&&A.isOpen()&&0<--A._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),A.close({disableAutoOpen:!1}),A.open().then(function(){return y(A,v,z,b)})):xe(C)}return S._promise(v,function(C,P){return Mt(function(){return Y.trans=S,b(C,P,S)})}).then(function(C){if(v==="readwrite")try{S.idbtrans.commit()}catch{}return v==="readonly"?C:S._completion.then(function(){return C})})}if(A._state.openComplete)return xe(new Q.DatabaseClosed(A._state.dbOpenError));if(!A._state.isBeingOpened){if(!A._state.autoOpen)return xe(new Q.DatabaseClosed);A.open().catch(he)}return A._state.dbReadyPromise.then(function(){return y(A,v,z,b)})})(this.db,r,[this.name],f);return d&&(w._consoleTask=d,w=w.catch(function(y){return console.trace(y),xe(y)})),w}finally{m&&gr()}},ge.prototype.get=function(r,o){var s=this;return r&&r.constructor===Object?this.where(r).first(o):r==null?xe(new Q.Type("Invalid argument to Table.get()")):this._trans("readonly",function(l){return s.core.get({trans:l,key:r}).then(function(c){return s.hook.reading.fire(c)})}).then(o)},ge.prototype.where=function(r){if(typeof r=="string")return new this.db.WhereClause(this,r);if(p(r))return new this.db.WhereClause(this,"[".concat(r.join("+"),"]"));var o=h(r);if(o.length===1)return this.where(o[0]).equals(r[o[0]]);var s=this.schema.indexes.concat(this.schema.primKey).filter(function(m){if(m.compound&&o.every(function(y){return 0<=m.keyPath.indexOf(y)})){for(var w=0;w<o.length;++w)if(o.indexOf(m.keyPath[w])===-1)return!1;return!0}return!1}).sort(function(m,w){return m.keyPath.length-w.keyPath.length})[0];if(s&&this.db._maxKey!==er){var d=s.keyPath.slice(0,o.length);return this.where(d).equals(d.map(function(w){return r[w]}))}!s&&wt&&console.warn("The query ".concat(JSON.stringify(r)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(o.join("+"),"]"));var l=this.schema.idxByName;function c(m,w){return le(m,w)===0}var f=o.reduce(function(v,w){var y=v[0],A=v[1],v=l[w],z=r[w];return[y||v,y||!v?tr(A,v&&v.multi?function(b){return b=ae(b,w),p(b)&&b.some(function(S){return c(z,S)})}:function(b){return c(z,ae(b,w))}):A]},[null,null]),d=f[0],f=f[1];return d?this.where(d.name).equals(r[d.keyPath]).filter(f):s?this.filter(f):this.where(o).equals("")},ge.prototype.filter=function(r){return this.toCollection().and(r)},ge.prototype.count=function(r){return this.toCollection().count(r)},ge.prototype.offset=function(r){return this.toCollection().offset(r)},ge.prototype.limit=function(r){return this.toCollection().limit(r)},ge.prototype.each=function(r){return this.toCollection().each(r)},ge.prototype.toArray=function(r){return this.toCollection().toArray(r)},ge.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},ge.prototype.orderBy=function(r){return new this.db.Collection(new this.db.WhereClause(this,p(r)?"[".concat(r.join("+"),"]"):r))},ge.prototype.reverse=function(){return this.toCollection().reverse()},ge.prototype.mapToClass=function(r){var o,s=this.db,l=this.name;function c(){return o!==null&&o.apply(this,arguments)||this}(this.schema.mappedClass=r).prototype instanceof Cs&&((function(w,y){if(typeof y!="function"&&y!==null)throw new TypeError("Class extends value "+String(y)+" is not a constructor or null");function A(){this.constructor=w}n(w,y),w.prototype=y===null?Object.create(y):(A.prototype=y.prototype,new A)})(c,o=r),Object.defineProperty(c.prototype,"db",{get:function(){return s},enumerable:!1,configurable:!0}),c.prototype.table=function(){return l},r=c);for(var d=new Set,f=r.prototype;f;f=k(f))Object.getOwnPropertyNames(f).forEach(function(w){return d.add(w)});function m(w){if(!w)return w;var y,A=Object.create(r.prototype);for(y in w)if(!d.has(y))try{A[y]=w[y]}catch{}return A}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=m,this.hook("reading",m),r},ge.prototype.defineClass=function(){return this.mapToClass(function(r){g(this,r)})},ge.prototype.add=function(r,o){var s=this,l=this.schema.primKey,c=l.auto,d=l.keyPath,f=r;return d&&c&&(f=kn(d)(r)),this._trans("readwrite",function(m){return s.core.mutate({trans:m,type:"add",keys:o!=null?[o]:null,values:[f]})}).then(function(m){return m.numFailures?V.reject(m.failures[0]):m.lastResult}).then(function(m){if(d)try{se(r,d,m)}catch{}return m})},ge.prototype.upsert=function(r,o){var s=this,l=this.schema.primKey.keyPath;return this._trans("readwrite",function(c){return s.core.get({trans:c,key:r}).then(function(d){var f=d??{};return Ps(f,o),l&&se(f,l,r),s.core.mutate({trans:c,type:"put",values:[f],keys:[r],upsert:!0,updates:{keys:[r],changeSpecs:[o]}}).then(function(m){return m.numFailures?V.reject(m.failures[0]):!!d})})})},ge.prototype.update=function(r,o){return typeof r!="object"||p(r)?this.where(":id").equals(r).modify(o):(r=ae(r,this.schema.primKey.keyPath),r===void 0?xe(new Q.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(r).modify(o))},ge.prototype.put=function(r,o){var s=this,l=this.schema.primKey,c=l.auto,d=l.keyPath,f=r;return d&&c&&(f=kn(d)(r)),this._trans("readwrite",function(m){return s.core.mutate({trans:m,type:"put",values:[f],keys:o!=null?[o]:null})}).then(function(m){return m.numFailures?V.reject(m.failures[0]):m.lastResult}).then(function(m){if(d)try{se(r,d,m)}catch{}return m})},ge.prototype.delete=function(r){var o=this;return this._trans("readwrite",function(s){return o.core.mutate({trans:s,type:"delete",keys:[r]}).then(function(l){return _n(o,[r],l)}).then(function(l){return l.numFailures?V.reject(l.failures[0]):void 0})})},ge.prototype.clear=function(){var r=this;return this._trans("readwrite",function(o){return r.core.mutate({trans:o,type:"deleteRange",range:Ss}).then(function(s){return _n(r,null,s)})}).then(function(o){return o.numFailures?V.reject(o.failures[0]):void 0})},ge.prototype.bulkGet=function(r){var o=this;return this._trans("readonly",function(s){return o.core.getMany({keys:r,trans:s}).then(function(l){return l.map(function(c){return o.hook.reading.fire(c)})})})},ge.prototype.bulkAdd=function(r,o,s){var l=this,c=Array.isArray(o)?o:void 0,d=(s=s||(c?void 0:o))?s.allKeys:void 0;return this._trans("readwrite",function(f){var y=l.schema.primKey,m=y.auto,y=y.keyPath;if(y&&c)throw new Q.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(c&&c.length!==r.length)throw new Q.InvalidArgument("Arguments objects and keys must have the same length");var w=r.length,y=y&&m?r.map(kn(y)):r;return l.core.mutate({trans:f,type:"add",keys:c,values:y,wantResults:d}).then(function(S){var v=S.numFailures,z=S.results,b=S.lastResult,S=S.failures;if(v===0)return d?z:b;throw new fr("".concat(l.name,".bulkAdd(): ").concat(v," of ").concat(w," operations failed"),S)})})},ge.prototype.bulkPut=function(r,o,s){var l=this,c=Array.isArray(o)?o:void 0,d=(s=s||(c?void 0:o))?s.allKeys:void 0;return this._trans("readwrite",function(f){var y=l.schema.primKey,m=y.auto,y=y.keyPath;if(y&&c)throw new Q.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(c&&c.length!==r.length)throw new Q.InvalidArgument("Arguments objects and keys must have the same length");var w=r.length,y=y&&m?r.map(kn(y)):r;return l.core.mutate({trans:f,type:"put",keys:c,values:y,wantResults:d}).then(function(S){var v=S.numFailures,z=S.results,b=S.lastResult,S=S.failures;if(v===0)return d?z:b;throw new fr("".concat(l.name,".bulkPut(): ").concat(v," of ").concat(w," operations failed"),S)})})},ge.prototype.bulkUpdate=function(r){var o=this,s=this.core,l=r.map(function(f){return f.key}),c=r.map(function(f){return f.changes}),d=[];return this._trans("readwrite",function(f){return s.getMany({trans:f,keys:l,cache:"clone"}).then(function(m){var w=[],y=[];r.forEach(function(v,z){var b=v.key,S=v.changes,C=m[z];if(C){for(var P=0,O=Object.keys(S);P<O.length;P++){var I=O[P],M=S[I];if(I===o.schema.primKey.keyPath){if(le(M,b)!==0)throw new Q.Constraint("Cannot update primary key in bulkUpdate()")}else se(C,I,M)}d.push(z),w.push(b),y.push(C)}});var A=w.length;return s.mutate({trans:f,type:"put",keys:w,values:y,updates:{keys:l,changeSpecs:c}}).then(function(v){var z=v.numFailures,b=v.failures;if(z===0)return A;for(var S=0,C=Object.keys(b);S<C.length;S++){var P,O=C[S],I=d[Number(O)];I!=null&&(P=b[O],delete b[O],b[I]=P)}throw new fr("".concat(o.name,".bulkUpdate(): ").concat(z," of ").concat(A," operations failed"),b)})})})},ge.prototype.bulkDelete=function(r){var o=this,s=r.length;return this._trans("readwrite",function(l){return o.core.mutate({trans:l,type:"delete",keys:r}).then(function(c){return _n(o,r,c)})}).then(function(f){var c=f.numFailures,d=f.lastResult,f=f.failures;if(c===0)return d;throw new fr("".concat(o.name,".bulkDelete(): ").concat(c," of ").concat(s," operations failed"),f)})},ge);function ge(){}function Nr(r){function o(f,m){if(m){for(var w=arguments.length,y=new Array(w-1);--w;)y[w-1]=arguments[w];return s[f].subscribe.apply(null,y),r}if(typeof f=="string")return s[f]}var s={};o.addEventType=d;for(var l=1,c=arguments.length;l<c;++l)d(arguments[l]);return o;function d(f,m,w){if(typeof f!="object"){var y;m=m||Zl;var A={subscribers:[],fire:w=w||he,subscribe:function(v){A.subscribers.indexOf(v)===-1&&(A.subscribers.push(v),A.fire=m(A.fire,v))},unsubscribe:function(v){A.subscribers=A.subscribers.filter(function(z){return z!==v}),A.fire=A.subscribers.reduce(m,w)}};return s[f]=o[f]=A}h(y=f).forEach(function(v){var z=y[v];if(p(z))d(v,y[v][0],y[v][1]);else{if(z!=="asap")throw new Q.InvalidArgument("Invalid event config");var b=d(v,Mr,function(){for(var S=arguments.length,C=new Array(S);S--;)C[S]=arguments[S];b.subscribers.forEach(function(P){H(function(){P.apply(null,C)})})})}})}}function qr(r,o){return G(o).from({prototype:r}),o}function yr(r,o){return!(r.filter||r.algorithm||r.or)&&(o?r.justLimit:!r.replayFilter)}function qo(r,o){r.filter=tr(r.filter,o)}function Fo(r,o,s){var l=r.replayFilter;r.replayFilter=l?function(){return tr(l(),o())}:o,r.justLimit=s&&!l}function Sn(r,o){if(r.isPrimKey)return o.primaryKey;var s=o.getIndexByKeyPath(r.index);if(!s)throw new Q.Schema("KeyPath "+r.index+" on object store "+o.name+" is not indexed");return s}function Os(r,o,s){var l=Sn(r,o.schema);return o.openCursor({trans:s,values:!r.keysOnly,reverse:r.dir==="prev",unique:!!r.unique,query:{index:l,range:r.range}})}function Cn(r,o,s,l){var c=r.replayFilter?tr(r.filter,r.replayFilter()):r.filter;if(r.or){var d={},f=function(m,w,y){var A,v;c&&!c(w,y,function(z){return w.stop(z)},function(z){return w.fail(z)})||((v=""+(A=w.primaryKey))=="[object ArrayBuffer]"&&(v=""+new Uint8Array(A)),$(d,v)||(d[v]=!0,o(m,w,y)))};return Promise.all([r.or._iterate(f,s),Is(Os(r,l,s),r.algorithm,f,!r.keysOnly&&r.valueMapper)])}return Is(Os(r,l,s),tr(r.algorithm,c),o,!r.keysOnly&&r.valueMapper)}function Is(r,o,s,l){var c=ve(l?function(d,f,m){return s(l(d),f,m)}:s);return r.then(function(d){if(d)return d.start(function(){var f=function(){return d.continue()};o&&!o(d,function(m){return f=m},function(m){d.stop(m),f=he},function(m){d.fail(m),f=he})||c(d.value,d,function(m){return f=m}),f()})})}var oc=(ue.prototype._read=function(r,o){var s=this._ctx;return s.error?s.table._trans(null,xe.bind(null,s.error)):s.table._trans("readonly",r).then(o)},ue.prototype._write=function(r){var o=this._ctx;return o.error?o.table._trans(null,xe.bind(null,o.error)):o.table._trans("readwrite",r,"locked")},ue.prototype._addAlgorithm=function(r){var o=this._ctx;o.algorithm=tr(o.algorithm,r)},ue.prototype._iterate=function(r,o){return Cn(this._ctx,r,o,this._ctx.table.core)},ue.prototype.clone=function(r){var o=Object.create(this.constructor.prototype),s=Object.create(this._ctx);return r&&g(s,r),o._ctx=s,o},ue.prototype.raw=function(){return this._ctx.valueMapper=null,this},ue.prototype.each=function(r){var o=this._ctx;return this._read(function(s){return Cn(o,r,s,o.table.core)})},ue.prototype.count=function(r){var o=this;return this._read(function(s){var l=o._ctx,c=l.table.core;if(yr(l,!0))return c.count({trans:s,query:{index:Sn(l,c.schema),range:l.range}}).then(function(f){return Math.min(f,l.limit)});var d=0;return Cn(l,function(){return++d,!1},s,c).then(function(){return d})}).then(r)},ue.prototype.sortBy=function(r,o){var s=r.split(".").reverse(),l=s[0],c=s.length-1;function d(w,y){return y?d(w[s[y]],y-1):w[l]}var f=this._ctx.dir==="next"?1:-1;function m(w,y){return le(d(w,c),d(y,c))*f}return this.toArray(function(w){return w.sort(m)}).then(o)},ue.prototype.toArray=function(r){var o=this;return this._read(function(s){var l=o._ctx;if(l.dir==="next"&&yr(l,!0)&&0<l.limit){var c=l.valueMapper,d=Sn(l,l.table.core.schema);return l.table.core.query({trans:s,limit:l.limit,values:!0,query:{index:d,range:l.range}}).then(function(m){return m=m.result,c?m.map(c):m})}var f=[];return Cn(l,function(m){return f.push(m)},s,l.table.core).then(function(){return f})},r)},ue.prototype.offset=function(r){var o=this._ctx;return r<=0||(o.offset+=r,yr(o)?Fo(o,function(){var s=r;return function(l,c){return s===0||(s===1?--s:c(function(){l.advance(s),s=0}),!1)}}):Fo(o,function(){var s=r;return function(){return--s<0}})),this},ue.prototype.limit=function(r){return this._ctx.limit=Math.min(this._ctx.limit,r),Fo(this._ctx,function(){var o=r;return function(s,l,c){return--o<=0&&l(c),0<=o}},!0),this},ue.prototype.until=function(r,o){return qo(this._ctx,function(s,l,c){return!r(s.value)||(l(c),o)}),this},ue.prototype.first=function(r){return this.limit(1).toArray(function(o){return o[0]}).then(r)},ue.prototype.last=function(r){return this.reverse().first(r)},ue.prototype.filter=function(r){var o;return qo(this._ctx,function(s){return r(s.value)}),(o=this._ctx).isMatch=tr(o.isMatch,r),this},ue.prototype.and=function(r){return this.filter(r)},ue.prototype.or=function(r){return new this.db.WhereClause(this._ctx.table,r,this)},ue.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},ue.prototype.desc=function(){return this.reverse()},ue.prototype.eachKey=function(r){var o=this._ctx;return o.keysOnly=!o.isMatch,this.each(function(s,l){r(l.key,l)})},ue.prototype.eachUniqueKey=function(r){return this._ctx.unique="unique",this.eachKey(r)},ue.prototype.eachPrimaryKey=function(r){var o=this._ctx;return o.keysOnly=!o.isMatch,this.each(function(s,l){r(l.primaryKey,l)})},ue.prototype.keys=function(r){var o=this._ctx;o.keysOnly=!o.isMatch;var s=[];return this.each(function(l,c){s.push(c.key)}).then(function(){return s}).then(r)},ue.prototype.primaryKeys=function(r){var o=this._ctx;if(o.dir==="next"&&yr(o,!0)&&0<o.limit)return this._read(function(l){var c=Sn(o,o.table.core.schema);return o.table.core.query({trans:l,values:!1,limit:o.limit,query:{index:c,range:o.range}})}).then(function(l){return l.result}).then(r);o.keysOnly=!o.isMatch;var s=[];return this.each(function(l,c){s.push(c.primaryKey)}).then(function(){return s}).then(r)},ue.prototype.uniqueKeys=function(r){return this._ctx.unique="unique",this.keys(r)},ue.prototype.firstKey=function(r){return this.limit(1).keys(function(o){return o[0]}).then(r)},ue.prototype.lastKey=function(r){return this.reverse().firstKey(r)},ue.prototype.distinct=function(){var r=this._ctx,r=r.index&&r.table.schema.idxByName[r.index];if(!r||!r.multi)return this;var o={};return qo(this._ctx,function(c){var l=c.primaryKey.toString(),c=$(o,l);return o[l]=!0,!c}),this},ue.prototype.modify=function(r){var o=this,s=this._ctx;return this._write(function(l){var c=typeof r=="function"?r:function(C){return Ps(C,r)},d=s.table.core,y=d.schema.primaryKey,f=y.outbound,m=y.extractKey,w=200,y=o.db._options.modifyChunkSize;y&&(w=typeof y=="object"?y[d.name]||y["*"]||200:y);function A(C,I){var O=I.failures,I=I.numFailures;z+=C-I;for(var M=0,L=h(O);M<L.length;M++){var N=L[M];v.push(O[N])}}var v=[],z=0,b=[],S=r===Ts;return o.clone().primaryKeys().then(function(C){function P(I){var M=Math.min(w,C.length-I),L=C.slice(I,I+M);return(S?Promise.resolve([]):d.getMany({trans:l,keys:L,cache:"immutable"})).then(function(N){var U=[],B=[],q=f?[]:null,K=S?L:[];if(!S)for(var F=0;F<M;++F){var W=N[F],re={value:Le(W),primKey:C[I+F]};c.call(re,re.value,re)!==!1&&(re.value==null?K.push(C[I+F]):f||le(m(W),m(re.value))===0?(B.push(re.value),f&&q.push(C[I+F])):(K.push(C[I+F]),U.push(re.value)))}return Promise.resolve(0<U.length&&d.mutate({trans:l,type:"add",values:U}).then(function(ne){for(var oe in ne.failures)K.splice(parseInt(oe),1);A(U.length,ne)})).then(function(){return(0<B.length||O&&typeof r=="object")&&d.mutate({trans:l,type:"put",keys:q,values:B,criteria:O,changeSpec:typeof r!="function"&&r,isAdditionalChunk:0<I}).then(function(ne){return A(B.length,ne)})}).then(function(){return(0<K.length||O&&S)&&d.mutate({trans:l,type:"delete",keys:K,criteria:O,isAdditionalChunk:0<I}).then(function(ne){return _n(s.table,K,ne)}).then(function(ne){return A(K.length,ne)})}).then(function(){return C.length>I+M&&P(I+w)})})}var O=yr(s)&&s.limit===1/0&&(typeof r!="function"||S)&&{index:s.index,range:s.range};return P(0).then(function(){if(0<v.length)throw new dn("Error modifying one or more objects",v,z,b);return C.length})})})},ue.prototype.delete=function(){var r=this._ctx,o=r.range;return!yr(r)||r.table.schema.yProps||!r.isPrimKey&&o.type!==3?this.modify(Ts):this._write(function(s){var l=r.table.core.schema.primaryKey,c=o;return r.table.core.count({trans:s,query:{index:l,range:c}}).then(function(d){return r.table.core.mutate({trans:s,type:"deleteRange",range:c}).then(function(w){var m=w.failures,w=w.numFailures;if(w)throw new dn("Could not delete some values",Object.keys(m).map(function(y){return m[y]}),d-w);return d-w})})})},ue);function ue(){}var Ts=function(r,o){return o.value=null};function ic(r,o){return r<o?-1:r===o?0:1}function sc(r,o){return o<r?-1:r===o?0:1}function it(r,o,s){return r=r instanceof Rs?new r.Collection(r):r,r._ctx.error=new(s||TypeError)(o),r}function br(r){return new r.Collection(r,function(){return Ms("")}).limit(0)}function En(r,o,s,l){var c,d,f,m,w,y,A,v=s.length;if(!s.every(function(S){return typeof S=="string"}))return it(r,_s);function z(S){c=S==="next"?function(P){return P.toUpperCase()}:function(P){return P.toLowerCase()},d=S==="next"?function(P){return P.toLowerCase()}:function(P){return P.toUpperCase()},f=S==="next"?ic:sc;var C=s.map(function(P){return{lower:d(P),upper:c(P)}}).sort(function(P,O){return f(P.lower,O.lower)});m=C.map(function(P){return P.upper}),w=C.map(function(P){return P.lower}),A=(y=S)==="next"?"":l}z("next"),r=new r.Collection(r,function(){return Dt(m[0],w[v-1]+l)}),r._ondirectionchange=function(S){z(S)};var b=0;return r._addAlgorithm(function(S,C,P){var O=S.key;if(typeof O!="string")return!1;var I=d(O);if(o(I,w,b))return!0;for(var M=null,L=b;L<v;++L){var N=(function(U,B,q,K,F,W){for(var re=Math.min(U.length,K.length),ne=-1,oe=0;oe<re;++oe){var st=B[oe];if(st!==K[oe])return F(U[oe],q[oe])<0?U.substr(0,oe)+q[oe]+q.substr(oe+1):F(U[oe],K[oe])<0?U.substr(0,oe)+K[oe]+q.substr(oe+1):0<=ne?U.substr(0,ne)+B[ne]+q.substr(ne+1):null;F(U[oe],st)<0&&(ne=oe)}return re<K.length&&W==="next"?U+q.substr(U.length):re<U.length&&W==="prev"?U.substr(0,q.length):ne<0?null:U.substr(0,ne)+K[ne]+q.substr(ne+1)})(O,I,m[L],w[L],f,y);N===null&&M===null?b=L+1:(M===null||0<f(M,N))&&(M=N)}return C(M!==null?function(){S.continue(M+A)}:P),!1}),r}function Dt(r,o,s,l){return{type:2,lower:r,upper:o,lowerOpen:s,upperOpen:l}}function Ms(r){return{type:1,lower:r,upper:r}}var Rs=(Object.defineProperty(ze.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),ze.prototype.between=function(r,o,s,l){s=s!==!1,l=l===!0;try{return 0<this._cmp(r,o)||this._cmp(r,o)===0&&(s||l)&&(!s||!l)?br(this):new this.Collection(this,function(){return Dt(r,o,!s,!l)})}catch{return it(this,Ct)}},ze.prototype.equals=function(r){return r==null?it(this,Ct):new this.Collection(this,function(){return Ms(r)})},ze.prototype.above=function(r){return r==null?it(this,Ct):new this.Collection(this,function(){return Dt(r,void 0,!0)})},ze.prototype.aboveOrEqual=function(r){return r==null?it(this,Ct):new this.Collection(this,function(){return Dt(r,void 0,!1)})},ze.prototype.below=function(r){return r==null?it(this,Ct):new this.Collection(this,function(){return Dt(void 0,r,!1,!0)})},ze.prototype.belowOrEqual=function(r){return r==null?it(this,Ct):new this.Collection(this,function(){return Dt(void 0,r)})},ze.prototype.startsWith=function(r){return typeof r!="string"?it(this,_s):this.between(r,r+er,!0,!0)},ze.prototype.startsWithIgnoreCase=function(r){return r===""?this.startsWith(r):En(this,function(o,s){return o.indexOf(s[0])===0},[r],er)},ze.prototype.equalsIgnoreCase=function(r){return En(this,function(o,s){return o===s[0]},[r],"")},ze.prototype.anyOfIgnoreCase=function(){var r=ft.apply(Ue,arguments);return r.length===0?br(this):En(this,function(o,s){return s.indexOf(o)!==-1},r,"")},ze.prototype.startsWithAnyOfIgnoreCase=function(){var r=ft.apply(Ue,arguments);return r.length===0?br(this):En(this,function(o,s){return s.some(function(l){return o.indexOf(l)===0})},r,er)},ze.prototype.anyOf=function(){var r=this,o=ft.apply(Ue,arguments),s=this._cmp;try{o.sort(s)}catch{return it(this,Ct)}if(o.length===0)return br(this);var l=new this.Collection(this,function(){return Dt(o[0],o[o.length-1])});l._ondirectionchange=function(d){s=d==="next"?r._ascending:r._descending,o.sort(s)};var c=0;return l._addAlgorithm(function(d,f,m){for(var w=d.key;0<s(w,o[c]);)if(++c===o.length)return f(m),!1;return s(w,o[c])===0||(f(function(){d.continue(o[c])}),!1)}),l},ze.prototype.notEqual=function(r){return this.inAnyRange([[-1/0,r],[r,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},ze.prototype.noneOf=function(){var r=ft.apply(Ue,arguments);if(r.length===0)return new this.Collection(this);try{r.sort(this._ascending)}catch{return it(this,Ct)}var o=r.reduce(function(s,l){return s?s.concat([[s[s.length-1][1],l]]):[[-1/0,l]]},null);return o.push([r[r.length-1],this.db._maxKey]),this.inAnyRange(o,{includeLowers:!1,includeUppers:!1})},ze.prototype.inAnyRange=function(O,o){var s=this,l=this._cmp,c=this._ascending,d=this._descending,f=this._min,m=this._max;if(O.length===0)return br(this);if(!O.every(function(I){return I[0]!==void 0&&I[1]!==void 0&&c(I[0],I[1])<=0}))return it(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",Q.InvalidArgument);var w=!o||o.includeLowers!==!1,y=o&&o.includeUppers===!0,A,v=c;function z(I,M){return v(I[0],M[0])}try{(A=O.reduce(function(I,M){for(var L=0,N=I.length;L<N;++L){var U=I[L];if(l(M[0],U[1])<0&&0<l(M[1],U[0])){U[0]=f(U[0],M[0]),U[1]=m(U[1],M[1]);break}}return L===N&&I.push(M),I},[])).sort(z)}catch{return it(this,Ct)}var b=0,S=y?function(I){return 0<c(I,A[b][1])}:function(I){return 0<=c(I,A[b][1])},C=w?function(I){return 0<d(I,A[b][0])}:function(I){return 0<=d(I,A[b][0])},P=S,O=new this.Collection(this,function(){return Dt(A[0][0],A[A.length-1][1],!w,!y)});return O._ondirectionchange=function(I){v=I==="next"?(P=S,c):(P=C,d),A.sort(z)},O._addAlgorithm(function(I,M,L){for(var N,U=I.key;P(U);)if(++b===A.length)return M(L),!1;return!S(N=U)&&!C(N)||(s._cmp(U,A[b][1])===0||s._cmp(U,A[b][0])===0||M(function(){v===c?I.continue(A[b][0]):I.continue(A[b][1])}),!1)}),O},ze.prototype.startsWithAnyOf=function(){var r=ft.apply(Ue,arguments);return r.every(function(o){return typeof o=="string"})?r.length===0?br(this):this.inAnyRange(r.map(function(o){return[o,o+er]})):it(this,"startsWithAnyOf() only works with strings")},ze);function ze(){}function yt(r){return ve(function(o){return Fr(o),r(o.target.error),!1})}function Fr(r){r.stopPropagation&&r.stopPropagation(),r.preventDefault&&r.preventDefault()}var Ur="storagemutated",Uo="x-storagemutated-1",Bt=Nr(null,Ur),ac=(bt.prototype._lock=function(){return Z(!Y.global),++this._reculock,this._reculock!==1||Y.global||(Y.lockOwnerFor=this),this},bt.prototype._unlock=function(){if(Z(!Y.global),--this._reculock==0)for(Y.global||(Y.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var r=this._blockedFuncs.shift();try{Jt(r[1],r[0])}catch{}}return this},bt.prototype._locked=function(){return this._reculock&&Y.lockOwnerFor!==this},bt.prototype.create=function(r){var o=this;if(!this.mode)return this;var s=this.db.idbdb,l=this.db._state.dbOpenError;if(Z(!this.idbtrans),!r&&!s)switch(l&&l.name){case"DatabaseClosedError":throw new Q.DatabaseClosed(l);case"MissingAPIError":throw new Q.MissingAPI(l.message,l);default:throw new Q.OpenFailed(l)}if(!this.active)throw new Q.TransactionInactive;return Z(this._completion._state===null),(r=this.idbtrans=r||(this.db.core||s).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=ve(function(c){Fr(c),o._reject(r.error)}),r.onabort=ve(function(c){Fr(c),o.active&&o._reject(new Q.Abort(r.error)),o.active=!1,o.on("abort").fire(c)}),r.oncomplete=ve(function(){o.active=!1,o._resolve(),"mutatedParts"in r&&Bt.storagemutated.fire(r.mutatedParts)}),this},bt.prototype._promise=function(r,o,s){var l=this;if(r==="readwrite"&&this.mode!=="readwrite")return xe(new Q.ReadOnly("Transaction is readonly"));if(!this.active)return xe(new Q.TransactionInactive);if(this._locked())return new V(function(d,f){l._blockedFuncs.push([function(){l._promise(r,o,s).then(d,f)},Y])});if(s)return Mt(function(){var d=new V(function(f,m){l._lock();var w=o(f,m,l);w&&w.then&&w.then(f,m)});return d.finally(function(){return l._unlock()}),d._lib=!0,d});var c=new V(function(d,f){var m=o(d,f,l);m&&m.then&&m.then(d,f)});return c._lib=!0,c},bt.prototype._root=function(){return this.parent?this.parent._root():this},bt.prototype.waitFor=function(r){var o,s=this._root(),l=V.resolve(r);s._waitingFor?s._waitingFor=s._waitingFor.then(function(){return l}):(s._waitingFor=l,s._waitingQueue=[],o=s.idbtrans.objectStore(s.storeNames[0]),(function d(){for(++s._spinCount;s._waitingQueue.length;)s._waitingQueue.shift()();s._waitingFor&&(o.get(-1/0).onsuccess=d)})());var c=s._waitingFor;return new V(function(d,f){l.then(function(m){return s._waitingQueue.push(ve(d.bind(null,m)))},function(m){return s._waitingQueue.push(ve(f.bind(null,m)))}).finally(function(){s._waitingFor===c&&(s._waitingFor=null)})})},bt.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new Q.Abort))},bt.prototype.table=function(r){var o=this._memoizedTables||(this._memoizedTables={});if($(o,r))return o[r];var s=this.schema[r];if(!s)throw new Q.NotFound("Table "+r+" not part of transaction");return s=new this.db.Table(r,s,this),s.core=this.db.core.table(r),o[r]=s},bt);function bt(){}function Ko(r,o,s,l,c,d,f,m){return{name:r,keyPath:o,unique:s,multi:l,auto:c,compound:d,src:(s&&!f?"&":"")+(l?"*":"")+(c?"++":"")+Ls(o),type:m}}function Ls(r){return typeof r=="string"?r:r?"["+[].join.call(r,"+")+"]":""}function Vo(r,o,s){return{name:r,primKey:o,indexes:s,mappedClass:null,idxByName:(l=function(c){return[c.name,c]},s.reduce(function(c,d,f){return f=l(d,f),f&&(c[f[0]]=f[1]),c},{}))};var l}var Kr=function(r){try{return r.only([[]]),Kr=function(){return[[]]},[[]]}catch{return Kr=function(){return er},er}};function Wo(r){return r==null?function(){}:typeof r=="string"?(o=r).split(".").length===1?function(s){return s[o]}:function(s){return ae(s,o)}:function(s){return ae(s,r)};var o}function Ds(r){return[].slice.call(r)}var lc=0;function Vr(r){return r==null?":id":typeof r=="string"?r:"[".concat(r.join("+"),"]")}function cc(r,o,w){function l(P){if(P.type===3)return null;if(P.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var b=P.lower,S=P.upper,C=P.lowerOpen,P=P.upperOpen;return b===void 0?S===void 0?null:o.upperBound(S,!!P):S===void 0?o.lowerBound(b,!!C):o.bound(b,S,!!C,!!P)}function c(z){var b,S=z.name;return{name:S,schema:z,mutate:function(C){var P=C.trans,O=C.type,I=C.keys,M=C.values,L=C.range;return new Promise(function(N,U){N=ve(N);var B=P.objectStore(S),q=B.keyPath==null,K=O==="put"||O==="add";if(!K&&O!=="delete"&&O!=="deleteRange")throw new Error("Invalid operation type: "+O);var F,W=(I||M||{length:1}).length;if(I&&M&&I.length!==M.length)throw new Error("Given keys array must have same length as given values array.");if(W===0)return N({numFailures:0,failures:{},results:[],lastResult:void 0});function re(Ke){++st,Fr(Ke)}var ne=[],oe=[],st=0;if(O==="deleteRange"){if(L.type===4)return N({numFailures:st,failures:oe,results:[],lastResult:void 0});L.type===3?ne.push(F=B.clear()):ne.push(F=B.delete(l(L)))}else{var q=K?q?[M,I]:[M,null]:[I,null],ee=q[0],Be=q[1];if(K)for(var je=0;je<W;++je)ne.push(F=Be&&Be[je]!==void 0?B[O](ee[je],Be[je]):B[O](ee[je])),F.onerror=re;else for(je=0;je<W;++je)ne.push(F=B[O](ee[je])),F.onerror=re}function Bn(Ke){Ke=Ke.target.result,ne.forEach(function(or,ui){return or.error!=null&&(oe[ui]=or.error)}),N({numFailures:st,failures:oe,results:O==="delete"?I:ne.map(function(or){return or.result}),lastResult:Ke})}F.onerror=function(Ke){re(Ke),Bn(Ke)},F.onsuccess=Bn})},getMany:function(C){var P=C.trans,O=C.keys;return new Promise(function(I,M){I=ve(I);for(var L,N=P.objectStore(S),U=O.length,B=new Array(U),q=0,K=0,F=function(ne){ne=ne.target,B[ne._pos]=ne.result,++K===q&&I(B)},W=yt(M),re=0;re<U;++re)O[re]!=null&&((L=N.get(O[re]))._pos=re,L.onsuccess=F,L.onerror=W,++q);q===0&&I(B)})},get:function(C){var P=C.trans,O=C.key;return new Promise(function(I,M){I=ve(I);var L=P.objectStore(S).get(O);L.onsuccess=function(N){return I(N.target.result)},L.onerror=yt(M)})},query:(b=y,function(C){return new Promise(function(P,O){P=ve(P);var I,M,L,q=C.trans,N=C.values,U=C.limit,F=C.query,B=U===1/0?void 0:U,K=F.index,F=F.range,q=q.objectStore(S),K=K.isPrimaryKey?q:q.index(K.name),F=l(F);if(U===0)return P({result:[]});b?((B=N?K.getAll(F,B):K.getAllKeys(F,B)).onsuccess=function(W){return P({result:W.target.result})},B.onerror=yt(O)):(I=0,M=!N&&"openKeyCursor"in K?K.openKeyCursor(F):K.openCursor(F),L=[],M.onsuccess=function(W){var re=M.result;return re?(L.push(N?re.value:re.primaryKey),++I===U?P({result:L}):void re.continue()):P({result:L})},M.onerror=yt(O))})}),openCursor:function(C){var P=C.trans,O=C.values,I=C.query,M=C.reverse,L=C.unique;return new Promise(function(N,U){N=ve(N);var K=I.index,B=I.range,q=P.objectStore(S),q=K.isPrimaryKey?q:q.index(K.name),K=M?L?"prevunique":"prev":L?"nextunique":"next",F=!O&&"openKeyCursor"in q?q.openKeyCursor(l(B),K):q.openCursor(l(B),K);F.onerror=yt(U),F.onsuccess=ve(function(W){var re,ne,oe,st,ee=F.result;ee?(ee.___id=++lc,ee.done=!1,re=ee.continue.bind(ee),ne=(ne=ee.continuePrimaryKey)&&ne.bind(ee),oe=ee.advance.bind(ee),st=function(){throw new Error("Cursor not stopped")},ee.trans=P,ee.stop=ee.continue=ee.continuePrimaryKey=ee.advance=function(){throw new Error("Cursor not started")},ee.fail=ve(U),ee.next=function(){var Be=this,je=1;return this.start(function(){return je--?Be.continue():Be.stop()}).then(function(){return Be})},ee.start=function(Be){function je(){if(F.result)try{Be()}catch(Ke){ee.fail(Ke)}else ee.done=!0,ee.start=function(){throw new Error("Cursor behind last entry")},ee.stop()}var Bn=new Promise(function(Ke,or){Ke=ve(Ke),F.onerror=yt(or),ee.fail=or,ee.stop=function(ui){ee.stop=ee.continue=ee.continuePrimaryKey=ee.advance=st,Ke(ui)}});return F.onsuccess=ve(function(Ke){F.onsuccess=je,je()}),ee.continue=re,ee.continuePrimaryKey=ne,ee.advance=oe,je(),Bn},N(ee)):N(null)},U)})},count:function(C){var P=C.query,O=C.trans,I=P.index,M=P.range;return new Promise(function(L,N){var U=O.objectStore(S),B=I.isPrimaryKey?U:U.index(I.name),U=l(M),B=U?B.count(U):B.count();B.onsuccess=ve(function(q){return L(q.target.result)}),B.onerror=yt(N)})}}}var d,f,m,A=(f=w,m=Ds((d=r).objectStoreNames),{schema:{name:d.name,tables:m.map(function(z){return f.objectStore(z)}).map(function(z){var b=z.keyPath,P=z.autoIncrement,S=p(b),C={},P={name:z.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:b==null,compound:S,keyPath:b,autoIncrement:P,unique:!0,extractKey:Wo(b)},indexes:Ds(z.indexNames).map(function(O){return z.index(O)}).map(function(L){var I=L.name,M=L.unique,N=L.multiEntry,L=L.keyPath,N={name:I,compound:p(L),keyPath:L,unique:M,multiEntry:N,extractKey:Wo(L)};return C[Vr(L)]=N}),getIndexByKeyPath:function(O){return C[Vr(O)]}};return C[":id"]=P.primaryKey,b!=null&&(C[Vr(b)]=P.primaryKey),P})},hasGetAll:0<m.length&&"getAll"in f.objectStore(m[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)}),w=A.schema,y=A.hasGetAll,A=w.tables.map(c),v={};return A.forEach(function(z){return v[z.name]=z}),{stack:"dbcore",transaction:r.transaction.bind(r),table:function(z){if(!v[z])throw new Error("Table '".concat(z,"' not found"));return v[z]},MIN_KEY:-1/0,MAX_KEY:Kr(o),schema:w}}function uc(r,o,s,l){var c=s.IDBKeyRange;return s.indexedDB,{dbcore:(l=cc(o,c,l),r.dbcore.reduce(function(d,f){return f=f.create,i(i({},d),f(d))},l))}}function An(r,l){var s=l.db,l=uc(r._middlewares,s,r._deps,l);r.core=l.dbcore,r.tables.forEach(function(c){var d=c.name;r.core.schema.tables.some(function(f){return f.name===d})&&(c.core=r.core.table(d),r[d]instanceof r.Table&&(r[d].core=c.core))})}function $n(r,o,s,l){s.forEach(function(c){var d=l[c];o.forEach(function(f){var m=(function w(y,A){return te(y,A)||(y=k(y))&&w(y,A)})(f,c);(!m||"value"in m&&m.value===void 0)&&(f===r.Transaction.prototype||f instanceof r.Transaction?j(f,c,{get:function(){return this.table(c)},set:function(w){D(this,c,{value:w,writable:!0,configurable:!0,enumerable:!0})}}):f[c]=new r.Table(c,d))})})}function Ho(r,o){o.forEach(function(s){for(var l in s)s[l]instanceof r.Table&&delete s[l]})}function dc(r,o){return r._cfg.version-o._cfg.version}function hc(r,o,s,l){var c=r._dbSchema;s.objectStoreNames.contains("$meta")&&!c.$meta&&(c.$meta=Vo("$meta",js("")[0],[]),r._storeNames.push("$meta"));var d=r._createTransaction("readwrite",r._storeNames,c);d.create(s),d._completion.catch(l);var f=d._reject.bind(d),m=Y.transless||Y;Mt(function(){return Y.trans=d,Y.transless=m,o!==0?(An(r,s),y=o,((w=d).storeNames.includes("$meta")?w.table("$meta").get("version").then(function(A){return A??y}):V.resolve(y)).then(function(A){return z=A,b=d,S=s,C=[],A=(v=r)._versions,P=v._dbSchema=zn(0,v.idbdb,S),(A=A.filter(function(O){return O._cfg.version>=z})).length!==0?(A.forEach(function(O){C.push(function(){var I=P,M=O._cfg.dbschema;On(v,I,S),On(v,M,S),P=v._dbSchema=M;var L=Go(I,M);L.add.forEach(function(K){Yo(S,K[0],K[1].primKey,K[1].indexes)}),L.change.forEach(function(K){if(K.recreate)throw new Q.Upgrade("Not yet support for changing primary key");var F=S.objectStore(K.name);K.add.forEach(function(W){return Pn(F,W)}),K.change.forEach(function(W){F.deleteIndex(W.name),Pn(F,W)}),K.del.forEach(function(W){return F.deleteIndex(W)})});var N=O._cfg.contentUpgrade;if(N&&O._cfg.version>z){An(v,S),b._memoizedTables={};var U=Ze(M);L.del.forEach(function(K){U[K]=I[K]}),Ho(v,[v.Transaction.prototype]),$n(v,[v.Transaction.prototype],h(U),U),b.schema=U;var B,q=$o(N);return q&&vr(),L=V.follow(function(){var K;(B=N(b))&&q&&(K=Rt.bind(null,null),B.then(K,K))}),B&&typeof B.then=="function"?V.resolve(B):L.then(function(){return B})}}),C.push(function(I){var M,L,N=O._cfg.dbschema;M=N,L=I,[].slice.call(L.db.objectStoreNames).forEach(function(U){return M[U]==null&&L.db.deleteObjectStore(U)}),Ho(v,[v.Transaction.prototype]),$n(v,[v.Transaction.prototype],v._storeNames,v._dbSchema),b.schema=v._dbSchema}),C.push(function(I){v.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(v.idbdb.version/10)===O._cfg.version?(v.idbdb.deleteObjectStore("$meta"),delete v._dbSchema.$meta,v._storeNames=v._storeNames.filter(function(M){return M!=="$meta"})):I.objectStore("$meta").put(O._cfg.version,"version"))})}),(function O(){return C.length?V.resolve(C.shift()(b.idbtrans)).then(O):V.resolve()})().then(function(){Bs(P,S)})):V.resolve();var v,z,b,S,C,P}).catch(f)):(h(c).forEach(function(A){Yo(s,A,c[A].primKey,c[A].indexes)}),An(r,s),void V.follow(function(){return r.on.populate.fire(d)}).catch(f));var w,y})}function pc(r,o){Bs(r._dbSchema,o),o.db.version%10!=0||o.objectStoreNames.contains("$meta")||o.db.createObjectStore("$meta").add(Math.ceil(o.db.version/10-1),"version");var s=zn(0,r.idbdb,o);On(r,r._dbSchema,o);for(var l=0,c=Go(s,r._dbSchema).change;l<c.length;l++){var d=(function(f){if(f.change.length||f.recreate)return console.warn("Unable to patch indexes of table ".concat(f.name," because it has changes on the type of index or primary key.")),{value:void 0};var m=o.objectStore(f.name);f.add.forEach(function(w){wt&&console.debug("Dexie upgrade patch: Creating missing index ".concat(f.name,".").concat(w.src)),Pn(m,w)})})(c[l]);if(typeof d=="object")return d.value}}function Go(r,o){var s,l={del:[],add:[],change:[]};for(s in r)o[s]||l.del.push(s);for(s in o){var c=r[s],d=o[s];if(c){var f={name:s,def:d,recreate:!1,del:[],add:[],change:[]};if(""+(c.primKey.keyPath||"")!=""+(d.primKey.keyPath||"")||c.primKey.auto!==d.primKey.auto)f.recreate=!0,l.change.push(f);else{var m=c.idxByName,w=d.idxByName,y=void 0;for(y in m)w[y]||f.del.push(y);for(y in w){var A=m[y],v=w[y];A?A.src!==v.src&&f.change.push(v):f.add.push(v)}(0<f.del.length||0<f.add.length||0<f.change.length)&&l.change.push(f)}}else l.add.push([s,d])}return l}function Yo(r,o,s,l){var c=r.db.createObjectStore(o,s.keyPath?{keyPath:s.keyPath,autoIncrement:s.auto}:{autoIncrement:s.auto});return l.forEach(function(d){return Pn(c,d)}),c}function Bs(r,o){h(r).forEach(function(s){o.db.objectStoreNames.contains(s)||(wt&&console.debug("Dexie: Creating missing table",s),Yo(o,s,r[s].primKey,r[s].indexes))})}function Pn(r,o){r.createIndex(o.name,o.keyPath,{unique:o.unique,multiEntry:o.multi})}function zn(r,o,s){var l={};return ie(o.objectStoreNames,0).forEach(function(c){for(var d=s.objectStore(c),f=Ko(Ls(y=d.keyPath),y||"",!0,!1,!!d.autoIncrement,y&&typeof y!="string",!0),m=[],w=0;w<d.indexNames.length;++w){var A=d.index(d.indexNames[w]),y=A.keyPath,A=Ko(A.name,y,!!A.unique,!!A.multiEntry,!1,y&&typeof y!="string",!1);m.push(A)}l[c]=Vo(c,f,m)}),l}function On(r,o,s){for(var l=s.db.objectStoreNames,c=0;c<l.length;++c){var d=l[c],f=s.objectStore(d);r._hasGetAll="getAll"in f;for(var m=0;m<f.indexNames.length;++m){var w=f.indexNames[m],y=f.index(w).keyPath,A=typeof y=="string"?y:"["+ie(y).join("+")+"]";!o[d]||(y=o[d].idxByName[A])&&(y.name=w,delete o[d].idxByName[A],o[d].idxByName[w]=y)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&u.WorkerGlobalScope&&u instanceof u.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(r._hasGetAll=!1)}function js(r){return r.split(",").map(function(o,s){var d=o.split(":"),l=(c=d[1])===null||c===void 0?void 0:c.trim(),c=(o=d[0].trim()).replace(/([&*]|\+\+)/g,""),d=/^\[/.test(c)?c.match(/^\[(.*)\]$/)[1].split("+"):c;return Ko(c,d||null,/\&/.test(o),/\*/.test(o),/\+\+/.test(o),p(d),s===0,l)})}var fc=(xr.prototype._createTableSchema=Vo,xr.prototype._parseIndexSyntax=js,xr.prototype._parseStoresSpec=function(r,o){var s=this;h(r).forEach(function(l){if(r[l]!==null){var c=s._parseIndexSyntax(r[l]),d=c.shift();if(!d)throw new Q.Schema("Invalid schema for table "+l+": "+r[l]);if(d.unique=!0,d.multi)throw new Q.Schema("Primary key cannot be multiEntry*");c.forEach(function(f){if(f.auto)throw new Q.Schema("Only primary key can be marked as autoIncrement (++)");if(!f.keyPath)throw new Q.Schema("Index must have a name and cannot be an empty string")}),c=s._createTableSchema(l,d,c),o[l]=c}})},xr.prototype.stores=function(s){var o=this.db;this._cfg.storesSource=this._cfg.storesSource?g(this._cfg.storesSource,s):s;var s=o._versions,l={},c={};return s.forEach(function(d){g(l,d._cfg.storesSource),c=d._cfg.dbschema={},d._parseStoresSpec(l,c)}),o._dbSchema=c,Ho(o,[o._allTables,o,o.Transaction.prototype]),$n(o,[o._allTables,o,o.Transaction.prototype,this._cfg.tables],h(c),c),o._storeNames=h(c),this},xr.prototype.upgrade=function(r){return this._cfg.contentUpgrade=zo(this._cfg.contentUpgrade||he,r),this},xr);function xr(){}function Xo(r,o){var s=r._dbNamesDB;return s||(s=r._dbNamesDB=new Et(xn,{addons:[],indexedDB:r,IDBKeyRange:o})).version(1).stores({dbnames:"name"}),s.table("dbnames")}function Qo(r){return r&&typeof r.databases=="function"}function Zo(r){return Mt(function(){return Y.letThrough=!0,r()})}function Jo(r){return!("from"in r)}var De=function(r,o){if(!this){var s=new De;return r&&"d"in r&&g(s,r),s}g(this,arguments.length?{d:1,from:r,to:1<arguments.length?o:r}:{d:0})};function Wr(r,o,s){var l=le(o,s);if(!isNaN(l)){if(0<l)throw RangeError();if(Jo(r))return g(r,{from:o,to:s,d:1});var c=r.l,l=r.r;if(le(s,r.from)<0)return c?Wr(c,o,s):r.l={from:o,to:s,d:1,l:null,r:null},qs(r);if(0<le(o,r.to))return l?Wr(l,o,s):r.r={from:o,to:s,d:1,l:null,r:null},qs(r);le(o,r.from)<0&&(r.from=o,r.l=null,r.d=l?l.d+1:1),0<le(s,r.to)&&(r.to=s,r.r=null,r.d=r.l?r.l.d+1:1),s=!r.r,c&&!r.l&&Hr(r,c),l&&s&&Hr(r,l)}}function Hr(r,o){Jo(o)||(function s(l,w){var d=w.from,f=w.to,m=w.l,w=w.r;Wr(l,d,f),m&&s(l,m),w&&s(l,w)})(r,o)}function Ns(r,o){var s=In(o),l=s.next();if(l.done)return!1;for(var c=l.value,d=In(r),f=d.next(c.from),m=f.value;!l.done&&!f.done;){if(le(m.from,c.to)<=0&&0<=le(m.to,c.from))return!0;le(c.from,m.from)<0?c=(l=s.next(m.from)).value:m=(f=d.next(c.from)).value}return!1}function In(r){var o=Jo(r)?null:{s:0,n:r};return{next:function(s){for(var l=0<arguments.length;o;)switch(o.s){case 0:if(o.s=1,l)for(;o.n.l&&le(s,o.n.from)<0;)o={up:o,n:o.n.l,s:1};else for(;o.n.l;)o={up:o,n:o.n.l,s:1};case 1:if(o.s=2,!l||le(s,o.n.to)<=0)return{value:o.n,done:!1};case 2:if(o.n.r){o.s=3,o={up:o,n:o.n.r,s:0};continue}case 3:o=o.up}return{done:!0}}}}function qs(r){var o,s,l=(((o=r.r)===null||o===void 0?void 0:o.d)||0)-(((s=r.l)===null||s===void 0?void 0:s.d)||0),c=1<l?"r":l<-1?"l":"";c&&(o=c=="r"?"l":"r",s=i({},r),l=r[c],r.from=l.from,r.to=l.to,r[c]=l[c],s[c]=l[o],(r[o]=s).d=Fs(s)),r.d=Fs(r)}function Fs(s){var o=s.r,s=s.l;return(o?s?Math.max(o.d,s.d):o.d:s?s.d:0)+1}function Tn(r,o){return h(o).forEach(function(s){r[s]?Hr(r[s],o[s]):r[s]=(function l(c){var d,f,m={};for(d in c)$(c,d)&&(f=c[d],m[d]=!f||typeof f!="object"||ht.has(f.constructor)?f:l(f));return m})(o[s])}),r}function ei(r,o){return r.all||o.all||Object.keys(r).some(function(s){return o[s]&&Ns(o[s],r[s])})}R(De.prototype,((ut={add:function(r){return Hr(this,r),this},addKey:function(r){return Wr(this,r,r),this},addKeys:function(r){var o=this;return r.forEach(function(s){return Wr(o,s,s)}),this},hasKey:function(r){var o=In(this).next(r).value;return o&&le(o.from,r)<=0&&0<=le(o.to,r)}})[nt]=function(){return In(this)},ut));var rr={},ti={},ri=!1;function Mn(r){Tn(ti,r),ri||(ri=!0,setTimeout(function(){ri=!1,ni(ti,!(ti={}))},0))}function ni(r,o){o===void 0&&(o=!1);var s=new Set;if(r.all)for(var l=0,c=Object.values(rr);l<c.length;l++)Us(f=c[l],r,s,o);else for(var d in r){var f,m=/^idb\:\/\/(.*)\/(.*)\//.exec(d);m&&(d=m[1],m=m[2],(f=rr["idb://".concat(d,"/").concat(m)])&&Us(f,r,s,o))}s.forEach(function(w){return w()})}function Us(r,o,s,l){for(var c=[],d=0,f=Object.entries(r.queries.query);d<f.length;d++){for(var m=f[d],w=m[0],y=[],A=0,v=m[1];A<v.length;A++){var z=v[A];ei(o,z.obsSet)?z.subscribers.forEach(function(P){return s.add(P)}):l&&y.push(z)}l&&c.push([w,y])}if(l)for(var b=0,S=c;b<S.length;b++){var C=S[b],w=C[0],y=C[1];r.queries.query[w]=y}}function mc(r){var o=r._state,s=r._deps.indexedDB;if(o.isBeingOpened||r.idbdb)return o.dbReadyPromise.then(function(){return o.dbOpenError?xe(o.dbOpenError):r});o.isBeingOpened=!0,o.dbOpenError=null,o.openComplete=!1;var l=o.openCanceller,c=Math.round(10*r.verno),d=!1;function f(){if(o.openCanceller!==l)throw new Q.DatabaseClosed("db.open() was cancelled")}function m(){return new V(function(z,b){if(f(),!s)throw new Q.MissingAPI;var S=r.name,C=o.autoSchema||!c?s.open(S):s.open(S,c);if(!C)throw new Q.MissingAPI;C.onerror=yt(b),C.onblocked=ve(r._fireOnBlocked),C.onupgradeneeded=ve(function(P){var O;A=C.transaction,o.autoSchema&&!r._options.allowEmptyDB?(C.onerror=Fr,A.abort(),C.result.close(),(O=s.deleteDatabase(S)).onsuccess=O.onerror=ve(function(){b(new Q.NoSuchDatabase("Database ".concat(S," doesnt exist")))})):(A.onerror=yt(b),P=P.oldVersion>Math.pow(2,62)?0:P.oldVersion,v=P<1,r.idbdb=C.result,d&&pc(r,A),hc(r,P/10,A,b))},b),C.onsuccess=ve(function(){A=null;var P,O,I,M,L,N=r.idbdb=C.result,U=ie(N.objectStoreNames);if(0<U.length)try{var B=N.transaction((M=U).length===1?M[0]:M,"readonly");if(o.autoSchema)O=N,I=B,(P=r).verno=O.version/10,I=P._dbSchema=zn(0,O,I),P._storeNames=ie(O.objectStoreNames,0),$n(P,[P._allTables],h(I),I);else if(On(r,r._dbSchema,B),((L=Go(zn(0,(L=r).idbdb,B),L._dbSchema)).add.length||L.change.some(function(q){return q.add.length||q.change.length}))&&!d)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),N.close(),c=N.version+1,d=!0,z(m());An(r,B)}catch{}wr.push(r),N.onversionchange=ve(function(q){o.vcFired=!0,r.on("versionchange").fire(q)}),N.onclose=ve(function(){r.close({disableAutoOpen:!1})}),v&&(L=r._deps,B=S,N=L.indexedDB,L=L.IDBKeyRange,Qo(N)||B===xn||Xo(N,L).put({name:B}).catch(he)),z()},b)}).catch(function(z){switch(z?.name){case"UnknownError":if(0<o.PR1398_maxLoop)return o.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),m();break;case"VersionError":if(0<c)return c=0,m()}return V.reject(z)})}var w,y=o.dbReadyResolve,A=null,v=!1;return V.race([l,(typeof navigator>"u"?V.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(z){function b(){return indexedDB.databases().finally(z)}w=setInterval(b,100),b()}).finally(function(){return clearInterval(w)}):Promise.resolve()).then(m)]).then(function(){return f(),o.onReadyBeingFired=[],V.resolve(Zo(function(){return r.on.ready.fire(r.vip)})).then(function z(){if(0<o.onReadyBeingFired.length){var b=o.onReadyBeingFired.reduce(zo,he);return o.onReadyBeingFired=[],V.resolve(Zo(function(){return b(r.vip)})).then(z)}})}).finally(function(){o.openCanceller===l&&(o.onReadyBeingFired=null,o.isBeingOpened=!1)}).catch(function(z){o.dbOpenError=z;try{A&&A.abort()}catch{}return l===o.openCanceller&&r._close(),xe(z)}).finally(function(){o.openComplete=!0,y()}).then(function(){var z;return v&&(z={},r.tables.forEach(function(b){b.schema.indexes.forEach(function(S){S.name&&(z["idb://".concat(r.name,"/").concat(b.name,"/").concat(S.name)]=new De(-1/0,[[[]]]))}),z["idb://".concat(r.name,"/").concat(b.name,"/")]=z["idb://".concat(r.name,"/").concat(b.name,"/:dels")]=new De(-1/0,[[[]]])}),Bt(Ur).fire(z),ni(z,!0)),r})}function oi(r){function o(d){return r.next(d)}var s=c(o),l=c(function(d){return r.throw(d)});function c(d){return function(w){var m=d(w),w=m.value;return m.done?w:w&&typeof w.then=="function"?w.then(s,l):p(w)?Promise.all(w).then(s,l):s(w)}}return c(o)()}function Rn(r,o,s){for(var l=p(r)?r.slice():[r],c=0;c<s;++c)l.push(o);return l}var gc={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(r){return i(i({},r),{table:function(o){var s=r.table(o),l=s.schema,c={},d=[];function f(v,z,b){var S=Vr(v),C=c[S]=c[S]||[],P=v==null?0:typeof v=="string"?1:v.length,O=0<z,O=i(i({},b),{name:O?"".concat(S,"(virtual-from:").concat(b.name,")"):b.name,lowLevelIndex:b,isVirtual:O,keyTail:z,keyLength:P,extractKey:Wo(v),unique:!O&&b.unique});return C.push(O),O.isPrimaryKey||d.push(O),1<P&&f(P===2?v[0]:v.slice(0,P-1),z+1,b),C.sort(function(I,M){return I.keyTail-M.keyTail}),O}o=f(l.primaryKey.keyPath,0,l.primaryKey),c[":id"]=[o];for(var m=0,w=l.indexes;m<w.length;m++){var y=w[m];f(y.keyPath,0,y)}function A(v){var z,b=v.query.index;return b.isVirtual?i(i({},v),{query:{index:b.lowLevelIndex,range:(z=v.query.range,b=b.keyTail,{type:z.type===1?2:z.type,lower:Rn(z.lower,z.lowerOpen?r.MAX_KEY:r.MIN_KEY,b),lowerOpen:!0,upper:Rn(z.upper,z.upperOpen?r.MIN_KEY:r.MAX_KEY,b),upperOpen:!0})}}):v}return i(i({},s),{schema:i(i({},l),{primaryKey:o,indexes:d,getIndexByKeyPath:function(v){return(v=c[Vr(v)])&&v[0]}}),count:function(v){return s.count(A(v))},query:function(v){return s.query(A(v))},openCursor:function(v){var z=v.query.index,b=z.keyTail,S=z.isVirtual,C=z.keyLength;return S?s.openCursor(A(v)).then(function(O){return O&&P(O)}):s.openCursor(v);function P(O){return Object.create(O,{continue:{value:function(I){I!=null?O.continue(Rn(I,v.reverse?r.MAX_KEY:r.MIN_KEY,b)):v.unique?O.continue(O.key.slice(0,C).concat(v.reverse?r.MIN_KEY:r.MAX_KEY,b)):O.continue()}},continuePrimaryKey:{value:function(I,M){O.continuePrimaryKey(Rn(I,r.MAX_KEY,b),M)}},primaryKey:{get:function(){return O.primaryKey}},key:{get:function(){var I=O.key;return C===1?I[0]:I.slice(0,C)}},value:{get:function(){return O.value}}})}}})}})}};function ii(r,o,s,l){return s=s||{},l=l||"",h(r).forEach(function(c){var d,f,m;$(o,c)?(d=r[c],f=o[c],typeof d=="object"&&typeof f=="object"&&d&&f?(m=pt(d))!==pt(f)?s[l+c]=o[c]:m==="Object"?ii(d,f,s,l+c+"."):d!==f&&(s[l+c]=o[c]):d!==f&&(s[l+c]=o[c])):s[l+c]=void 0}),h(o).forEach(function(c){$(r,c)||(s[l+c]=o[c])}),s}function si(r,o){return o.type==="delete"?o.keys:o.keys||o.values.map(r.extractKey)}var vc={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(r){return i(i({},r),{table:function(o){var s=r.table(o),l=s.schema.primaryKey;return i(i({},s),{mutate:function(c){var d=Y.trans,f=d.table(o).hook,m=f.deleting,w=f.creating,y=f.updating;switch(c.type){case"add":if(w.fire===he)break;return d._promise("readwrite",function(){return A(c)},!0);case"put":if(w.fire===he&&y.fire===he)break;return d._promise("readwrite",function(){return A(c)},!0);case"delete":if(m.fire===he)break;return d._promise("readwrite",function(){return A(c)},!0);case"deleteRange":if(m.fire===he)break;return d._promise("readwrite",function(){return(function v(z,b,S){return s.query({trans:z,values:!1,query:{index:l,range:b},limit:S}).then(function(C){var P=C.result;return A({type:"delete",keys:P,trans:z}).then(function(O){return 0<O.numFailures?Promise.reject(O.failures[0]):P.length<S?{failures:[],numFailures:0,lastResult:void 0}:v(z,i(i({},b),{lower:P[P.length-1],lowerOpen:!0}),S)})})})(c.trans,c.range,1e4)},!0)}return s.mutate(c);function A(v){var z,b,S,C=Y.trans,P=v.keys||si(l,v);if(!P)throw new Error("Keys missing");return(v=v.type==="add"||v.type==="put"?i(i({},v),{keys:P}):i({},v)).type!=="delete"&&(v.values=a([],v.values)),v.keys&&(v.keys=a([],v.keys)),z=s,S=P,((b=v).type==="add"?Promise.resolve([]):z.getMany({trans:b.trans,keys:S,cache:"immutable"})).then(function(O){var I=P.map(function(M,L){var N,U,B,q=O[L],K={onerror:null,onsuccess:null};return v.type==="delete"?m.fire.call(K,M,q,C):v.type==="add"||q===void 0?(N=w.fire.call(K,M,v.values[L],C),M==null&&N!=null&&(v.keys[L]=M=N,l.outbound||se(v.values[L],l.keyPath,M))):(N=ii(q,v.values[L]),(U=y.fire.call(K,N,M,q,C))&&(B=v.values[L],Object.keys(U).forEach(function(F){$(B,F)?B[F]=U[F]:se(B,F,U[F])}))),K});return s.mutate(v).then(function(M){for(var L=M.failures,N=M.results,U=M.numFailures,M=M.lastResult,B=0;B<P.length;++B){var q=(N||P)[B],K=I[B];q==null?K.onerror&&K.onerror(L[B]):K.onsuccess&&K.onsuccess(v.type==="put"&&O[B]?v.values[B]:q)}return{failures:L,results:N,numFailures:U,lastResult:M}}).catch(function(M){return I.forEach(function(L){return L.onerror&&L.onerror(M)}),Promise.reject(M)})})}}})}})}};function Ks(r,o,s){try{if(!o||o.keys.length<r.length)return null;for(var l=[],c=0,d=0;c<o.keys.length&&d<r.length;++c)le(o.keys[c],r[d])===0&&(l.push(s?Le(o.values[c]):o.values[c]),++d);return l.length===r.length?l:null}catch{return null}}var wc={stack:"dbcore",level:-1,create:function(r){return{table:function(o){var s=r.table(o);return i(i({},s),{getMany:function(l){if(!l.cache)return s.getMany(l);var c=Ks(l.keys,l.trans._cache,l.cache==="clone");return c?V.resolve(c):s.getMany(l).then(function(d){return l.trans._cache={keys:l.keys,values:l.cache==="clone"?Le(d):d},d})},mutate:function(l){return l.type!=="add"&&(l.trans._cache=null),s.mutate(l)}})}}}};function Vs(r,o){return r.trans.mode==="readonly"&&!!r.subscr&&!r.trans.explicit&&r.trans.db._options.cache!=="disabled"&&!o.schema.primaryKey.outbound}function Ws(r,o){switch(r){case"query":return o.values&&!o.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var yc={stack:"dbcore",level:0,name:"Observability",create:function(r){var o=r.schema.name,s=new De(r.MIN_KEY,r.MAX_KEY);return i(i({},r),{transaction:function(l,c,d){if(Y.subscr&&c!=="readonly")throw new Q.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(Y.querier));return r.transaction(l,c,d)},table:function(l){var c=r.table(l),d=c.schema,f=d.primaryKey,v=d.indexes,m=f.extractKey,w=f.outbound,y=f.autoIncrement&&v.filter(function(b){return b.compound&&b.keyPath.includes(f.keyPath)}),A=i(i({},c),{mutate:function(b){function S(F){return F="idb://".concat(o,"/").concat(l,"/").concat(F),M[F]||(M[F]=new De)}var C,P,O,I=b.trans,M=b.mutatedParts||(b.mutatedParts={}),L=S(""),N=S(":dels"),U=b.type,K=b.type==="deleteRange"?[b.range]:b.type==="delete"?[b.keys]:b.values.length<50?[si(f,b).filter(function(F){return F}),b.values]:[],B=K[0],q=K[1],K=b.trans._cache;return p(B)?(L.addKeys(B),(K=U==="delete"||B.length===q.length?Ks(B,K):null)||N.addKeys(B),(K||q)&&(C=S,P=K,O=q,d.indexes.forEach(function(F){var W=C(F.name||"");function re(oe){return oe!=null?F.extractKey(oe):null}function ne(oe){return F.multiEntry&&p(oe)?oe.forEach(function(st){return W.addKey(st)}):W.addKey(oe)}(P||O).forEach(function(oe,Be){var ee=P&&re(P[Be]),Be=O&&re(O[Be]);le(ee,Be)!==0&&(ee!=null&&ne(ee),Be!=null&&ne(Be))})}))):B?(q={from:(q=B.lower)!==null&&q!==void 0?q:r.MIN_KEY,to:(q=B.upper)!==null&&q!==void 0?q:r.MAX_KEY},N.add(q),L.add(q)):(L.add(s),N.add(s),d.indexes.forEach(function(F){return S(F.name).add(s)})),c.mutate(b).then(function(F){return!B||b.type!=="add"&&b.type!=="put"||(L.addKeys(F.results),y&&y.forEach(function(W){for(var re=b.values.map(function(ee){return W.extractKey(ee)}),ne=W.keyPath.findIndex(function(ee){return ee===f.keyPath}),oe=0,st=F.results.length;oe<st;++oe)re[oe][ne]=F.results[oe];S(W.name).addKeys(re)})),I.mutatedParts=Tn(I.mutatedParts||{},M),F})}}),v=function(S){var C=S.query,S=C.index,C=C.range;return[S,new De((S=C.lower)!==null&&S!==void 0?S:r.MIN_KEY,(C=C.upper)!==null&&C!==void 0?C:r.MAX_KEY)]},z={get:function(b){return[f,new De(b.key)]},getMany:function(b){return[f,new De().addKeys(b.keys)]},count:v,query:v,openCursor:v};return h(z).forEach(function(b){A[b]=function(S){var C=Y.subscr,P=!!C,O=Vs(Y,c)&&Ws(b,S)?S.obsSet={}:C;if(P){var I=function(q){return q="idb://".concat(o,"/").concat(l,"/").concat(q),O[q]||(O[q]=new De)},M=I(""),L=I(":dels"),C=z[b](S),P=C[0],C=C[1];if((b==="query"&&P.isPrimaryKey&&!S.values?L:I(P.name||"")).add(C),!P.isPrimaryKey){if(b!=="count"){var N=b==="query"&&w&&S.values&&c.query(i(i({},S),{values:!1}));return c[b].apply(this,arguments).then(function(q){if(b==="query"){if(w&&S.values)return N.then(function(re){return re=re.result,M.addKeys(re),q});var K=S.values?q.result.map(m):q.result;(S.values?M:L).addKeys(K)}else if(b==="openCursor"){var F=q,W=S.values;return F&&Object.create(F,{key:{get:function(){return L.addKey(F.primaryKey),F.key}},primaryKey:{get:function(){var re=F.primaryKey;return L.addKey(re),re}},value:{get:function(){return W&&M.addKey(F.primaryKey),F.value}}})}return q})}L.add(s)}}return c[b].apply(this,arguments)}}),A}})}};function Hs(r,o,s){if(s.numFailures===0)return o;if(o.type==="deleteRange")return null;var l=o.keys?o.keys.length:"values"in o&&o.values?o.values.length:1;return s.numFailures===l?null:(o=i({},o),p(o.keys)&&(o.keys=o.keys.filter(function(c,d){return!(d in s.failures)})),"values"in o&&p(o.values)&&(o.values=o.values.filter(function(c,d){return!(d in s.failures)})),o)}function ai(r,o){return s=r,((l=o).lower===void 0||(l.lowerOpen?0<le(s,l.lower):0<=le(s,l.lower)))&&(r=r,(o=o).upper===void 0||(o.upperOpen?le(r,o.upper)<0:le(r,o.upper)<=0));var s,l}function Gs(r,o,z,l,c,d){if(!z||z.length===0)return r;var f=o.query.index,m=f.multiEntry,w=o.query.range,y=l.schema.primaryKey.extractKey,A=f.extractKey,v=(f.lowLevelIndex||f).extractKey,z=z.reduce(function(b,S){var C=b,P=[];if(S.type==="add"||S.type==="put")for(var O=new De,I=S.values.length-1;0<=I;--I){var M,L=S.values[I],N=y(L);O.hasKey(N)||(M=A(L),(m&&p(M)?M.some(function(F){return ai(F,w)}):ai(M,w))&&(O.addKey(N),P.push(L)))}switch(S.type){case"add":var U=new De().addKeys(o.values?b.map(function(W){return y(W)}):b),C=b.concat(o.values?P.filter(function(W){return W=y(W),!U.hasKey(W)&&(U.addKey(W),!0)}):P.map(function(W){return y(W)}).filter(function(W){return!U.hasKey(W)&&(U.addKey(W),!0)}));break;case"put":var B=new De().addKeys(S.values.map(function(W){return y(W)}));C=b.filter(function(W){return!B.hasKey(o.values?y(W):W)}).concat(o.values?P:P.map(function(W){return y(W)}));break;case"delete":var q=new De().addKeys(S.keys);C=b.filter(function(W){return!q.hasKey(o.values?y(W):W)});break;case"deleteRange":var K=S.range;C=b.filter(function(W){return!ai(y(W),K)})}return C},r);return z===r?r:(z.sort(function(b,S){return le(v(b),v(S))||le(y(b),y(S))}),o.limit&&o.limit<1/0&&(z.length>o.limit?z.length=o.limit:r.length===o.limit&&z.length<o.limit&&(c.dirty=!0)),d?Object.freeze(z):z)}function Ys(r,o){return le(r.lower,o.lower)===0&&le(r.upper,o.upper)===0&&!!r.lowerOpen==!!o.lowerOpen&&!!r.upperOpen==!!o.upperOpen}function bc(r,o){return(function(s,l,c,d){if(s===void 0)return l!==void 0?-1:0;if(l===void 0)return 1;if((l=le(s,l))===0){if(c&&d)return 0;if(c)return 1;if(d)return-1}return l})(r.lower,o.lower,r.lowerOpen,o.lowerOpen)<=0&&0<=(function(s,l,c,d){if(s===void 0)return l!==void 0?1:0;if(l===void 0)return-1;if((l=le(s,l))===0){if(c&&d)return 0;if(c)return-1;if(d)return 1}return l})(r.upper,o.upper,r.upperOpen,o.upperOpen)}function xc(r,o,s,l){r.subscribers.add(s),l.addEventListener("abort",function(){var c,d;r.subscribers.delete(s),r.subscribers.size===0&&(c=r,d=o,setTimeout(function(){c.subscribers.size===0&&Ae(d,c)},3e3))})}var kc={stack:"dbcore",level:0,name:"Cache",create:function(r){var o=r.schema.name;return i(i({},r),{transaction:function(s,l,c){var d,f,m=r.transaction(s,l,c);return l==="readwrite"&&(f=(d=new AbortController).signal,c=function(w){return function(){if(d.abort(),l==="readwrite"){for(var y=new Set,A=0,v=s;A<v.length;A++){var z=v[A],b=rr["idb://".concat(o,"/").concat(z)];if(b){var S=r.table(z),C=b.optimisticOps.filter(function(W){return W.trans===m});if(m._explicit&&w&&m.mutatedParts)for(var P=0,O=Object.values(b.queries.query);P<O.length;P++)for(var I=0,M=(U=O[P]).slice();I<M.length;I++)ei((B=M[I]).obsSet,m.mutatedParts)&&(Ae(U,B),B.subscribers.forEach(function(W){return y.add(W)}));else if(0<C.length){b.optimisticOps=b.optimisticOps.filter(function(W){return W.trans!==m});for(var L=0,N=Object.values(b.queries.query);L<N.length;L++)for(var U,B,q,K=0,F=(U=N[L]).slice();K<F.length;K++)(B=F[K]).res!=null&&m.mutatedParts&&(w&&!B.dirty?(q=Object.isFrozen(B.res),q=Gs(B.res,B.req,C,S,B,q),B.dirty?(Ae(U,B),B.subscribers.forEach(function(W){return y.add(W)})):q!==B.res&&(B.res=q,B.promise=V.resolve({result:q}))):(B.dirty&&Ae(U,B),B.subscribers.forEach(function(W){return y.add(W)})))}}}y.forEach(function(W){return W()})}}},m.addEventListener("abort",c(!1),{signal:f}),m.addEventListener("error",c(!1),{signal:f}),m.addEventListener("complete",c(!0),{signal:f})),m},table:function(s){var l=r.table(s),c=l.schema.primaryKey;return i(i({},l),{mutate:function(d){var f=Y.trans;if(c.outbound||f.db._options.cache==="disabled"||f.explicit||f.idbtrans.mode!=="readwrite")return l.mutate(d);var m=rr["idb://".concat(o,"/").concat(s)];return m?(f=l.mutate(d),d.type!=="add"&&d.type!=="put"||!(50<=d.values.length||si(c,d).some(function(w){return w==null}))?(m.optimisticOps.push(d),d.mutatedParts&&Mn(d.mutatedParts),f.then(function(w){0<w.numFailures&&(Ae(m.optimisticOps,d),(w=Hs(0,d,w))&&m.optimisticOps.push(w),d.mutatedParts&&Mn(d.mutatedParts))}),f.catch(function(){Ae(m.optimisticOps,d),d.mutatedParts&&Mn(d.mutatedParts)})):f.then(function(w){var y=Hs(0,i(i({},d),{values:d.values.map(function(A,v){var z;return w.failures[v]?A:(A=(z=c.keyPath)!==null&&z!==void 0&&z.includes(".")?Le(A):i({},A),se(A,c.keyPath,w.results[v]),A)})}),w);m.optimisticOps.push(y),queueMicrotask(function(){return d.mutatedParts&&Mn(d.mutatedParts)})}),f):l.mutate(d)},query:function(d){if(!Vs(Y,l)||!Ws("query",d))return l.query(d);var f=((y=Y.trans)===null||y===void 0?void 0:y.db._options.cache)==="immutable",v=Y,m=v.requery,w=v.signal,y=(function(S,C,P,O){var I=rr["idb://".concat(S,"/").concat(C)];if(!I)return[];if(!(C=I.queries[P]))return[null,!1,I,null];var M=C[(O.query?O.query.index.name:null)||""];if(!M)return[null,!1,I,null];switch(P){case"query":var L=M.find(function(N){return N.req.limit===O.limit&&N.req.values===O.values&&Ys(N.req.query.range,O.query.range)});return L?[L,!0,I,M]:[M.find(function(N){return("limit"in N.req?N.req.limit:1/0)>=O.limit&&(!O.values||N.req.values)&&bc(N.req.query.range,O.query.range)}),!1,I,M];case"count":return L=M.find(function(N){return Ys(N.req.query.range,O.query.range)}),[L,!!L,I,M]}})(o,s,"query",d),A=y[0],v=y[1],z=y[2],b=y[3];return A&&v?A.obsSet=d.obsSet:(v=l.query(d).then(function(S){var C=S.result;if(A&&(A.res=C),f){for(var P=0,O=C.length;P<O;++P)Object.freeze(C[P]);Object.freeze(C)}else S.result=Le(C);return S}).catch(function(S){return b&&A&&Ae(b,A),Promise.reject(S)}),A={obsSet:d.obsSet,promise:v,subscribers:new Set,type:"query",req:d,dirty:!1},b?b.push(A):(b=[A],(z=z||(rr["idb://".concat(o,"/").concat(s)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[d.query.index.name||""]=b)),xc(A,b,m,w),A.promise.then(function(S){return{result:Gs(S.result,d,z?.optimisticOps,l,A,f)}})}})}})}};function Ln(r,o){return new Proxy(r,{get:function(s,l,c){return l==="db"?o:Reflect.get(s,l,c)}})}var Et=(ke.prototype.version=function(r){if(isNaN(r)||r<.1)throw new Q.Type("Given version is not a positive number");if(r=Math.round(10*r)/10,this.idbdb||this._state.isBeingOpened)throw new Q.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,r);var o=this._versions,s=o.filter(function(l){return l._cfg.version===r})[0];return s||(s=new this.Version(r),o.push(s),o.sort(dc),s.stores({}),this._state.autoSchema=!1,s)},ke.prototype._whenReady=function(r){var o=this;return this.idbdb&&(this._state.openComplete||Y.letThrough||this._vip)?r():new V(function(s,l){if(o._state.openComplete)return l(new Q.DatabaseClosed(o._state.dbOpenError));if(!o._state.isBeingOpened){if(!o._state.autoOpen)return void l(new Q.DatabaseClosed);o.open().catch(he)}o._state.dbReadyPromise.then(s,l)}).then(r)},ke.prototype.use=function(r){var o=r.stack,s=r.create,l=r.level,c=r.name;return c&&this.unuse({stack:o,name:c}),r=this._middlewares[o]||(this._middlewares[o]=[]),r.push({stack:o,create:s,level:l??10,name:c}),r.sort(function(d,f){return d.level-f.level}),this},ke.prototype.unuse=function(r){var o=r.stack,s=r.name,l=r.create;return o&&this._middlewares[o]&&(this._middlewares[o]=this._middlewares[o].filter(function(c){return l?c.create!==l:!!s&&c.name!==s})),this},ke.prototype.open=function(){var r=this;return Jt(Tt,function(){return mc(r)})},ke.prototype._close=function(){this.on.close.fire(new CustomEvent("close"));var r=this._state,o=wr.indexOf(this);if(0<=o&&wr.splice(o,1),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}r.isBeingOpened||(r.dbReadyPromise=new V(function(s){r.dbReadyResolve=s}),r.openCanceller=new V(function(s,l){r.cancelOpen=l}))},ke.prototype.close=function(s){var o=(s===void 0?{disableAutoOpen:!0}:s).disableAutoOpen,s=this._state;o?(s.isBeingOpened&&s.cancelOpen(new Q.DatabaseClosed),this._close(),s.autoOpen=!1,s.dbOpenError=new Q.DatabaseClosed):(this._close(),s.autoOpen=this._options.autoOpen||s.isBeingOpened,s.openComplete=!1,s.dbOpenError=null)},ke.prototype.delete=function(r){var o=this;r===void 0&&(r={disableAutoOpen:!0});var s=0<arguments.length&&typeof arguments[0]!="object",l=this._state;return new V(function(c,d){function f(){o.close(r);var m=o._deps.indexedDB.deleteDatabase(o.name);m.onsuccess=ve(function(){var w,y,A;w=o._deps,y=o.name,A=w.indexedDB,w=w.IDBKeyRange,Qo(A)||y===xn||Xo(A,w).delete(y).catch(he),c()}),m.onerror=yt(d),m.onblocked=o._fireOnBlocked}if(s)throw new Q.InvalidArgument("Invalid closeOptions argument to db.delete()");l.isBeingOpened?l.dbReadyPromise.then(f):f()})},ke.prototype.backendDB=function(){return this.idbdb},ke.prototype.isOpen=function(){return this.idbdb!==null},ke.prototype.hasBeenClosed=function(){var r=this._state.dbOpenError;return r&&r.name==="DatabaseClosed"},ke.prototype.hasFailed=function(){return this._state.dbOpenError!==null},ke.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(ke.prototype,"tables",{get:function(){var r=this;return h(this._allTables).map(function(o){return r._allTables[o]})},enumerable:!1,configurable:!0}),ke.prototype.transaction=function(){var r=function(o,s,l){var c=arguments.length;if(c<2)throw new Q.InvalidArgument("Too few arguments");for(var d=new Array(c-1);--c;)d[c-1]=arguments[c];return l=d.pop(),[o,Fe(d),l]}.apply(this,arguments);return this._transaction.apply(this,r)},ke.prototype._transaction=function(r,o,s){var l=this,c=Y.trans;c&&c.db===this&&r.indexOf("!")===-1||(c=null);var d,f,m=r.indexOf("?")!==-1;r=r.replace("!","").replace("?","");try{if(f=o.map(function(y){if(y=y instanceof l.Table?y.name:y,typeof y!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return y}),r=="r"||r===jo)d=jo;else{if(r!="rw"&&r!=No)throw new Q.InvalidArgument("Invalid transaction mode: "+r);d=No}if(c){if(c.mode===jo&&d===No){if(!m)throw new Q.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");c=null}c&&f.forEach(function(y){if(c&&c.storeNames.indexOf(y)===-1){if(!m)throw new Q.SubTransaction("Table "+y+" not included in parent transaction.");c=null}}),m&&c&&!c.active&&(c=null)}}catch(y){return c?c._promise(null,function(A,v){v(y)}):xe(y)}var w=function y(A,v,z,b,S){return V.resolve().then(function(){var C=Y.transless||Y,P=A._createTransaction(v,z,A._dbSchema,b);if(P.explicit=!0,C={trans:P,transless:C},b)P.idbtrans=b.idbtrans;else try{P.create(),P.idbtrans._explicit=!0,A._state.PR1398_maxLoop=3}catch(M){return M.name===Po.InvalidState&&A.isOpen()&&0<--A._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),A.close({disableAutoOpen:!1}),A.open().then(function(){return y(A,v,z,null,S)})):xe(M)}var O,I=$o(S);return I&&vr(),C=V.follow(function(){var M;(O=S.call(P,P))&&(I?(M=Rt.bind(null,null),O.then(M,M)):typeof O.next=="function"&&typeof O.throw=="function"&&(O=oi(O)))},C),(O&&typeof O.then=="function"?V.resolve(O).then(function(M){return P.active?M:xe(new Q.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):C.then(function(){return O})).then(function(M){return b&&P._resolve(),P._completion.then(function(){return M})}).catch(function(M){return P._reject(M),xe(M)})})}.bind(null,this,d,f,c,s);return c?c._promise(d,w,"lock"):Y.trans?Jt(Y.transless,function(){return l._whenReady(w)}):this._whenReady(w)},ke.prototype.table=function(r){if(!$(this._allTables,r))throw new Q.InvalidTable("Table ".concat(r," does not exist"));return this._allTables[r]},ke);function ke(r,o){var s=this;this._middlewares={},this.verno=0;var l=ke.dependencies;this._options=o=i({addons:ke.addons,autoOpen:!0,indexedDB:l.indexedDB,IDBKeyRange:l.IDBKeyRange,cache:"cloned"},o),this._deps={indexedDB:o.indexedDB,IDBKeyRange:o.IDBKeyRange},l=o.addons,this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;var c,d,f,m,w,y={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:he,dbReadyPromise:null,cancelOpen:he,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:o.autoOpen};y.dbReadyPromise=new V(function(v){y.dbReadyResolve=v}),y.openCanceller=new V(function(v,z){y.cancelOpen=z}),this._state=y,this.name=r,this.on=Nr(this,"populate","blocked","versionchange","close",{ready:[zo,he]}),this.once=function(v,z){var b=function(){for(var S=[],C=0;C<arguments.length;C++)S[C]=arguments[C];s.on(v).unsubscribe(b),z.apply(s,S)};return s.on(v,b)},this.on.ready.subscribe=X(this.on.ready.subscribe,function(v){return function(z,b){ke.vip(function(){var S,C=s._state;C.openComplete?(C.dbOpenError||V.resolve().then(z),b&&v(z)):C.onReadyBeingFired?(C.onReadyBeingFired.push(z),b&&v(z)):(v(z),S=s,b||v(function P(){S.on.ready.unsubscribe(z),S.on.ready.unsubscribe(P)}))})}}),this.Collection=(c=this,qr(oc.prototype,function(O,P){this.db=c;var b=Ss,S=null;if(P)try{b=P()}catch(I){S=I}var C=O._ctx,P=C.table,O=P.hook.reading.fire;this._ctx={table:P,index:C.index,isPrimKey:!C.index||P.schema.primKey.keyPath&&C.index===P.schema.primKey.name,range:b,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:S,or:C.or,valueMapper:O!==Mr?O:null}})),this.Table=(d=this,qr(zs.prototype,function(v,z,b){this.db=d,this._tx=b,this.name=v,this.schema=z,this.hook=d._allTables[v]?d._allTables[v].hook:Nr(null,{creating:[Yl,he],reading:[Gl,Mr],updating:[Ql,he],deleting:[Xl,he]})})),this.Transaction=(f=this,qr(ac.prototype,function(v,z,b,S,C){var P=this;v!=="readonly"&&z.forEach(function(O){O=(O=b[O])===null||O===void 0?void 0:O.yProps,O&&(z=z.concat(O.map(function(I){return I.updatesTable})))}),this.db=f,this.mode=v,this.storeNames=z,this.schema=b,this.chromeTransactionDurability=S,this.idbtrans=null,this.on=Nr(this,"complete","error","abort"),this.parent=C||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new V(function(O,I){P._resolve=O,P._reject=I}),this._completion.then(function(){P.active=!1,P.on.complete.fire()},function(O){var I=P.active;return P.active=!1,P.on.error.fire(O),P.parent?P.parent._reject(O):I&&P.idbtrans&&P.idbtrans.abort(),xe(O)})})),this.Version=(m=this,qr(fc.prototype,function(v){this.db=m,this._cfg={version:v,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(w=this,qr(Rs.prototype,function(v,z,b){if(this.db=w,this._ctx={table:v,index:z===":id"?null:z,or:b},this._cmp=this._ascending=le,this._descending=function(S,C){return le(C,S)},this._max=function(S,C){return 0<le(S,C)?S:C},this._min=function(S,C){return le(S,C)<0?S:C},this._IDBKeyRange=w._deps.IDBKeyRange,!this._IDBKeyRange)throw new Q.MissingAPI})),this.on("versionchange",function(v){0<v.newVersion?console.warn("Another connection wants to upgrade database '".concat(s.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(s.name,"'. Closing db now to resume the delete request.")),s.close({disableAutoOpen:!1})}),this.on("blocked",function(v){!v.newVersion||v.newVersion<v.oldVersion?console.warn("Dexie.delete('".concat(s.name,"') was blocked")):console.warn("Upgrade '".concat(s.name,"' blocked by other connection holding version ").concat(v.oldVersion/10))}),this._maxKey=Kr(o.IDBKeyRange),this._createTransaction=function(v,z,b,S){return new s.Transaction(v,z,b,s._options.chromeTransactionDurability,S)},this._fireOnBlocked=function(v){s.on("blocked").fire(v),wr.filter(function(z){return z.name===s.name&&z!==s&&!z._state.vcFired}).map(function(z){return z.on("versionchange").fire(v)})},this.use(wc),this.use(kc),this.use(yc),this.use(gc),this.use(vc);var A=new Proxy(this,{get:function(v,z,b){if(z==="_vip")return!0;if(z==="table")return function(C){return Ln(s.table(C),A)};var S=Reflect.get(v,z,b);return S instanceof zs?Ln(S,A):z==="tables"?S.map(function(C){return Ln(C,A)}):z==="_createTransaction"?function(){return Ln(S.apply(this,arguments),A)}:S}});this.vip=A,l.forEach(function(v){return v(s)})}var Dn,ut=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",_c=(li.prototype.subscribe=function(r,o,s){return this._subscribe(r&&typeof r!="function"?r:{next:r,error:o,complete:s})},li.prototype[ut]=function(){return this},li);function li(r){this._subscribe=r}try{Dn={indexedDB:u.indexedDB||u.mozIndexedDB||u.webkitIndexedDB||u.msIndexedDB,IDBKeyRange:u.IDBKeyRange||u.webkitIDBKeyRange}}catch{Dn={indexedDB:null,IDBKeyRange:null}}function Xs(r){var o,s=!1,l=new _c(function(c){var d=$o(r),f,m=!1,w={},y={},A={get closed(){return m},unsubscribe:function(){m||(m=!0,f&&f.abort(),v&&Bt.storagemutated.unsubscribe(b))}};c.start&&c.start(A);var v=!1,z=function(){return Bo(S)},b=function(C){Tn(w,C),ei(y,w)&&z()},S=function(){var C,P,O;!m&&Dn.indexedDB&&(w={},C={},f&&f.abort(),f=new AbortController,O=(function(I){var M=mr();try{d&&vr();var L=Mt(r,I);return L=d?L.finally(Rt):L}finally{M&&gr()}})(P={subscr:C,signal:f.signal,requery:z,querier:r,trans:null}),Promise.resolve(O).then(function(I){s=!0,o=I,m||P.signal.aborted||(w={},(function(M){for(var L in M)if($(M,L))return;return 1})(y=C)||v||(Bt(Ur,b),v=!0),Bo(function(){return!m&&c.next&&c.next(I)}))},function(I){s=!1,["DatabaseClosedError","AbortError"].includes(I?.name)||m||Bo(function(){m||c.error&&c.error(I)})}))};return setTimeout(z,0),A});return l.hasValue=function(){return s},l.getValue=function(){return o},l}var nr=Et;function ci(r){var o=jt;try{jt=!0,Bt.storagemutated.fire(r),ni(r,!0)}finally{jt=o}}R(nr,i(i({},hn),{delete:function(r){return new nr(r,{addons:[]}).delete()},exists:function(r){return new nr(r,{addons:[]}).open().then(function(o){return o.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(r){try{return o=nr.dependencies,s=o.indexedDB,o=o.IDBKeyRange,(Qo(s)?Promise.resolve(s.databases()).then(function(l){return l.map(function(c){return c.name}).filter(function(c){return c!==xn})}):Xo(s,o).toCollection().primaryKeys()).then(r)}catch{return xe(new Q.MissingAPI)}var o,s},defineClass:function(){return function(r){g(this,r)}},ignoreTransaction:function(r){return Y.trans?Jt(Y.transless,r):r()},vip:Zo,async:function(r){return function(){try{var o=oi(r.apply(this,arguments));return o&&typeof o.then=="function"?o:V.resolve(o)}catch(s){return xe(s)}}},spawn:function(r,o,s){try{var l=oi(r.apply(s,o||[]));return l&&typeof l.then=="function"?l:V.resolve(l)}catch(c){return xe(c)}},currentTransaction:{get:function(){return Y.trans||null}},waitFor:function(r,o){return o=V.resolve(typeof r=="function"?nr.ignoreTransaction(r):r).timeout(o||6e4),Y.trans?Y.trans.waitFor(o):o},Promise:V,debug:{get:function(){return wt},set:function(r){vs(r)}},derive:G,extend:g,props:R,override:X,Events:Nr,on:Bt,liveQuery:Xs,extendObservabilitySet:Tn,getByKeyPath:ae,setByKeyPath:se,delByKeyPath:function(r,o){typeof o=="string"?se(r,o,void 0):"length"in o&&[].map.call(o,function(s){se(r,s,void 0)})},shallowClone:Ze,deepClone:Le,getObjectDiff:ii,cmp:le,asap:H,minKey:-1/0,addons:[],connections:wr,errnames:Po,dependencies:Dn,cache:rr,semVer:"4.2.1",version:"4.2.1".split(".").map(function(r){return parseInt(r)}).reduce(function(r,o,s){return r+o/Math.pow(10,2*s)})})),nr.maxKey=Kr(nr.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(Bt(Ur,function(r){jt||(r=new CustomEvent(Uo,{detail:r}),jt=!0,dispatchEvent(r),jt=!1)}),addEventListener(Uo,function(r){r=r.detail,jt||ci(r)}));var kr,jt=!1,Qs=function(){};return typeof BroadcastChannel<"u"&&((Qs=function(){(kr=new BroadcastChannel(Uo)).onmessage=function(r){return r.data&&ci(r.data)}})(),typeof kr.unref=="function"&&kr.unref(),Bt(Ur,function(r){jt||kr.postMessage(r)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(r){if(!Et.disableBfCache&&r.persisted){wt&&console.debug("Dexie: handling persisted pagehide"),kr?.close();for(var o=0,s=wr;o<s.length;o++)s[o].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(r){!Et.disableBfCache&&r.persisted&&(wt&&console.debug("Dexie: handling persisted pageshow"),Qs(),ci({all:new De(-1/0,[[]])}))})),V.rejectionMapper=function(r,o){return!r||r instanceof pr||r instanceof TypeError||r instanceof SyntaxError||!r.name||!gs[r.name]?r:(o=new gs[r.name](o||r.message,r),"stack"in r&&j(o,"stack",{get:function(){return this.inner.stack}}),o)},vs(wt),i(Et,Object.freeze({__proto__:null,Dexie:Et,liveQuery:Xs,Entity:Cs,cmp:le,PropModification:jr,replacePrefix:function(r,o){return new jr({replacePrefix:[r,o]})},add:function(r){return new jr({add:r})},remove:function(r){return new jr({remove:r})},default:Et,RangeSet:De,mergeRanges:Hr,rangesOverlap:Ns}),{default:Et}),Et})})(Qn)),Qn.exports}var qp=Np();const Wi=Bp(qp),Na=Symbol.for("Dexie"),mt=globalThis[Na]||(globalThis[Na]=Wi);if(Wi.semVer!==mt.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${Wi.semVer} and ${mt.semVer}`);const{liveQuery:Fp,mergeRanges:Mf,rangesOverlap:Rf,RangeSet:Lf,cmp:Df,Entity:Bf,PropModification:jf,replacePrefix:Nf,add:qf,remove:Ff,DexieYProvider:Uf}=mt;var $e=(e=>(e[e.User=0]="User",e[e.Auto=1]="Auto",e))($e||{});const Zr=mt.minKey,Jr=mt.maxKey,Un=mt.minKey,Kn=mt.maxKey;class Up extends mt{constructor(){super("PuzzleAppData"),this.version(2).stores({settings:["id","type"].join(", "),savedGames:["&[puzzleId+saveType+filename]","[saveType+puzzleId+timestamp]"].join(", ")})}open(){const t="db-page-reload-attempted";let n=!1,i=!1;try{n=sessionStorage.getItem(t)!==null,i=!0}catch{}return n&&Yi({category:"db",message:"Reloaded page due to Safari IndexedDB bug"}),super.open().then(a=>(n&&sessionStorage.removeItem(t),a),a=>a instanceof mt.DexieError&&a.name==="DatabaseClosedError"&&a.message.includes("Refresh the page to try again")&&!n&&i?(sessionStorage.setItem(t,"true"),window.location.reload(),new mt.Promise(()=>{})):mt.Promise.reject(a))}}const we=new Up;var Kp=Object.defineProperty,Xe=(e,t,n,i)=>{for(var a=void 0,u=e.length-1,h;u>=0;u--)(h=e[u])&&(a=h(t,n,a)||a);return a&&Kp(t,n,a),a},Nl,ql;const qa="https://twistymaze.com/puzzles/schemas/puzzle-settings-backup-v1.json",Vp=e=>typeof e=="object"&&e!==null&&"$schema"in e&&"data"in e&&Array.isArray(e.data),Fa=["keen","mines","net","samegame","solo","untangle"],Pi="puzzle-common",nn=Symbol("getCommonSetting"),uo=Symbol("setCommonSetting");function Qe(e){return(t,n)=>{Object.defineProperty(t,n,{get(){const i=this[nn](n);return i===void 0?e.default:e.fromDB?e.fromDB(i):i},set(i){const a=e.toDB?e.toDB(i):i;this[uo](n,a),e.setCallback?.(i)},enumerable:!0,configurable:!0})}}ql=nn,Nl=uo;class Ne{constructor(){this._commonSettings=new Bl,this._isLoadingCommonSettings=!1,this.handlePageShow=async t=>{t.persisted&&await this.loadSettings()},this.autoSaveCommonSettings=()=>{const t=this._commonSettings.entries();if(!this._isLoadingCommonSettings&&this._commonSettings.size>0){const n=Object.fromEntries(t);this.setCommonSettings(n)}},this[ql]=t=>this._commonSettings.get(t),this[Nl]=(t,n)=>{this._commonSettings.set(t,n)},this._favoritePuzzles=lo(()=>new Set(this[nn]("favoritePuzzles")??Fa)),this._commonSettingsEffectDisposer=jl(this.autoSaveCommonSettings),window.addEventListener("pageshow",this.handlePageShow),this._loaded=this.loadSettings()}destroy(){window.removeEventListener("pageshow",this.handlePageShow),this._commonSettingsEffectDisposer?.(),this._commonSettingsEffectDisposer=void 0}get loaded(){return this._loaded}async loadSettings(){this._isLoadingCommonSettings=!0;try{const t=await this.getCommonSettings();this._commonSettings.clear();for(const[n,i]of Object.entries(t))this._commonSettings.set(n,i)}finally{await Promise.resolve(),this._isLoadingCommonSettings=!1}}get favoritePuzzles(){return this._favoritePuzzles.get()}isFavoritePuzzle(t){return this.favoritePuzzles.has(t)}setFavoritePuzzle(t,n){if(this.isFavoritePuzzle(t)!==n){const a=this[nn]("favoritePuzzles")??Fa,u=n?[...a,t].sort():a.filter(h=>h!==t);this[uo]("favoritePuzzles",u)}}async getCommonSettings(){const t=await we.settings.get(Pi);return t?.type==="puzzle-common"?t.data:{puzzlePreferences:{}}}async setCommonSettings(t){const n=await this.getCommonSettings(),i=Object.entries({...n,...t}).filter(([,u])=>u!==void 0),a=Object.fromEntries(i);await we.settings.put({id:Pi,type:"puzzle-common",data:a})}async getPuzzleSettings(t){const n=await we.settings.get(t);return n?.type==="puzzle"?n.data:void 0}async getPuzzlePreferences(t){const n={"pencil-keep-highlight":!0},i=this[nn]("puzzlePreferences"),a=await this.getPuzzleSettings(t);return{...n,...i,...a?.puzzlePreferences}}async setPuzzlePreferences(t,n){const{commonPreferences:i,puzzlePreferences:a}=this.splitPuzzlePreferences(n);if(i!==void 0&&this[uo]("puzzlePreferences",i),a!==void 0){const u=await this.getPuzzleSettings(t),h={...u,puzzlePreferences:{...u?.puzzlePreferences,...a}};await we.settings.put({id:t,type:"puzzle",data:h})}}splitPuzzlePreferences(t){const{"one-key-shortcuts":n,...i}=t,a=n!==void 0?{"one-key-shortcuts":n}:void 0,u=Object.keys(i).length>0?i:void 0;return{commonPreferences:a,puzzlePreferences:u}}async getParams(t){return(await this.getPuzzleSettings(t))?.params}async setParams(t,n){const{params:i,...a}=await this.getPuzzleSettings(t)??{},u=n===void 0?a:{...a,params:n};await we.settings.put({id:t,type:"puzzle",data:u})}async getLastUnfinishedAlert(t){return(await this.getPuzzleSettings(t))?.lastUnfinishedAlert}async setLastUnfinishedAlert(t,n){const{lastUnfinishedAlert:i,...a}=await this.getPuzzleSettings(t)??{},u={...a,lastUnfinishedAlert:n};await we.settings.put({id:t,type:"puzzle",data:u})}async clearCommonSettings(){await we.settings.delete(Pi),await this.loadSettings()}async clearPuzzleSettings(t){await we.settings.delete(t),await this.loadSettings()}async clearAllSettings(){await we.settings.clear(),await this.loadSettings()}async serialize(){const t=await we.settings.toArray();return{$schema:qa,data:t}}async deserialize(t){if(!Vp(t))throw new Error("Invalid settings backup format");if(t.$schema!==qa)throw new Error("Incompatible settings backup schema");await we.settings.bulkPut(t.data),await this.loadSettings()}}Xe([Qe({default:null})],Ne.prototype,"allowOfflineUse");Xe([Qe({default:null})],Ne.prototype,"autoUpdate");Xe([Qe({default:"light",setCallback:e=>{try{localStorage.setItem("colorScheme",e)}catch{}}})],Ne.prototype,"colorScheme");Xe([Qe({default:!0})],Ne.prototype,"showIntro");Xe([Qe({default:!1})],Ne.prototype,"showUnfinishedPuzzles");Xe([Qe({default:!1})],Ne.prototype,"showMouseButtonToggle");Xe([Qe({default:!0})],Ne.prototype,"rightButtonLongPress");Xe([Qe({default:!0})],Ne.prototype,"rightButtonTwoFingerTap");Xe([Qe({default:40})],Ne.prototype,"rightButtonAudioVolume");Xe([Qe({default:350})],Ne.prototype,"rightButtonHoldTime");Xe([Qe({default:8})],Ne.prototype,"rightButtonDragThreshold");Xe([Qe({default:!0})],Ne.prototype,"showEndNotification");Xe([Qe({default:!0})],Ne.prototype,"showPuzzleKeyboard");Xe([Qe({default:"start"})],Ne.prototype,"statusbarPlacement");Xe([Qe({default:Number.POSITIVE_INFINITY,fromDB:e=>e??Number.POSITIVE_INFINITY,toDB:e=>e===Number.POSITIVE_INFINITY?null:e})],Ne.prototype,"maxScale");const $t=new Ne;if(typeof window>"u")throw new Error("PWAManager must run on main thread");const Ua=!window.matchMedia("(display-mode: browser)").matches;class Wp{constructor(){this._allowOfflineUse=lo(()=>$t.allowOfflineUse??Ua),this._autoUpdate=lo(()=>$t.autoUpdate??this.allowOfflineUse),this._status=ao("uninitialized"),this._downloadProgress=ao(void 0),this.observedWorkers=new WeakSet,this.handleSWControlling=t=>{t.isUpdate||console.warn(`Unexpected SW controlling event, isUpdate=${t.isUpdate}`),console.log("New service worker ready, reloading page"),this.reloadApp()},this.handleSWMessage=t=>{switch(t.data?.type){case"PRECACHE_PROGRESS":{const{count:n,total:i}=t.data,a=i>0?Math.round(n/i*100):50;this._downloadProgress.set(a);break}case"PRECACHE_COMPLETE":this._downloadProgress.set(void 0);break}}}captureSentryContext(){Ic({"pwa.allowOfflineUse":this.allowOfflineUse,"pwa.autoUpdate":this.autoUpdate,"pwa.isRunningAsApp":Ua})}async initialize(){await $t.loaded,this.captureSentryContext(),this.allowOfflineUse?await this.registerSW():this._status.set("unregistered")}async reinitialize(){await $t.loaded,this.captureSentryContext(),this.allowOfflineUse&&!this.wb?await this.registerSW():!this.allowOfflineUse&&this.wb&&await this.unregisterSW()}get allowOfflineUse(){return this._allowOfflineUse.get()}set allowOfflineUse(t){t!==$t.allowOfflineUse&&($t.allowOfflineUse=t,this.reinitialize())}get autoUpdate(){return this._autoUpdate.get()}set autoUpdate(t){$t.autoUpdate=t,t&&this.status==="update-ready"&&this.installUpdate()}get status(){return this._status.get()}get downloadProgress(){return this._downloadProgress.get()}installUpdate(){(this.status==="download-ready"||this.status==="update-ready")&&this._status.set("installing"),this.wb?.messageSkipWaiting()}reloadApp(){this._status.set("reloading"),window.location.reload()}async checkForUpdate(t=7500){if(this.status==="registered"){this._status.set("checking-for-updates");try{await Promise.race([this.wb?.update(),Ti(t)].filter(Boolean)),await Ti(10)}catch(n){console.error("PWAManager.checkForUpdate failed:",n),en(n),this._status.set("error")}this._status.get()==="checking-for-updates"&&this._status.set("registered")}}async registerSW(){this._status.set("registering");const t="/";this.wb=new Rp(`${t}sw.js`,{scope:t}),this.wb.addEventListener("controlling",this.handleSWControlling),this.wb.addEventListener("message",this.handleSWMessage);try{const n=await this.wb.register();n?this.observeRegistration(n):this._status.set("error")}catch(n){console.error("Service worker registration failed:",n),en(n),this._status.set("error")}}observeRegistration(t){t.addEventListener("updatefound",()=>{const i=t.installing;if(i){const a=!!t.active;this._status.set(a?"update-downloading":"downloading"),this.observeWorker(i,a)}});const n=!!t.active;t.active&&this._status.set("registered"),t.waiting&&this.observeWorker(t.waiting,n),t.installing&&this.observeWorker(t.installing,n)}observeWorker(t,n){if(this.observedWorkers.has(t))return;this.observedWorkers.add(t);const i=()=>{switch(t.state){case"installing":this._status.set(n?"update-downloading":"downloading");break;case"installed":n&&(this._status.set("update-ready"),this.autoUpdate&&this.installUpdate());break;case"activated":n||this._status.set("download-ready");break;case"redundant":console.log("Worker becoming redundant",t);break}};t.addEventListener("statechange",i),i()}async unregisterSW(){this._status.set("deleting");try{await(await navigator.serviceWorker?.getRegistration())?.unregister();const n=await caches.keys();await Promise.all(n.map(i=>caches.delete(i))),console.log(`Unregistered service worker and deleted ${n.length} cache(s)`),this.wb=void 0,this._status.set("deleted")}catch(t){console.error("Failed to unregister service worker:",t),en(t),this._status.set("error")}}}const Ka=new Wp,Hi=ao("light"),Hp=lo(()=>{const e=$t.colorScheme;return e==="system"?Hi.get():e});async function Gp(){await $t.loaded;const e=window.matchMedia("(prefers-color-scheme: dark)");Hi.set(e.matches?"dark":"light");const t=i=>Hi.set(i.matches?"dark":"light");e.addEventListener("change",t);const n=jl(()=>{const i=Hp.get()==="dark";document.documentElement.classList.toggle("wa-dark",i);const a=window.getComputedStyle(document.documentElement).backgroundColor;document.querySelector("meta[name=theme-color]")?.setAttribute("content",a)});return()=>{e.removeEventListener("change",t),n()}}Mc();iu();uh();document.readyState==="complete"?Ka.initialize():window.addEventListener("load",async()=>{await Ka.initialize()});Gp();const Va=(e,t,n)=>{const i=new Map;for(let a=t;a<=n;a++)i.set(e[a],a);return i},Yp=ss(class extends as{constructor(e){if(super(e),e.type!==qt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,n){let i;n===void 0?n=t:t!==void 0&&(i=t);const a=[],u=[];let h=0;for(const p of e)a[h]=i?i(p,h):h,u[h]=n(p,h),h++;return{values:u,keys:a}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,i]){const a=Yu(e),{values:u,keys:h}=this.dt(t,n,i);if(!Array.isArray(a))return this.ut=h,u;const p=this.ut??=[],g=[];let k,E,$=0,R=a.length-1,D=0,j=u.length-1;for(;$<=R&&D<=j;)if(a[$]===null)$++;else if(a[R]===null)R--;else if(p[$]===h[D])g[D]=sr(a[$],u[D]),$++,D++;else if(p[R]===h[j])g[j]=sr(a[R],u[j]),R--,j--;else if(p[$]===h[j])g[j]=sr(a[$],u[j]),Yr(e,g[j+1],a[$]),$++,j--;else if(p[R]===h[D])g[D]=sr(a[R],u[D]),Yr(e,a[$],a[R]),R--,D++;else if(k===void 0&&(k=Va(h,D,j),E=Va(p,$,R)),k.has(p[$]))if(k.has(p[R])){const G=E.get(h[D]),te=G!==void 0?a[G]:null;if(te===null){const J=Yr(e,a[$]);sr(J,u[D]),g[D]=J}else g[D]=sr(te,u[D]),Yr(e,a[$],te),a[G]=null;D++}else mi(a[R]),R--;else mi(a[$]),$++;for(;D<=j;){const G=Yr(e,g[j+1]);sr(G,u[D]),g[D++]=G}for(;$<=R;){const G=a[$++];G!==null&&mi(G)}return this.ut=h,ul(e,g),dt}}),Xp=["abcd","ascent","blackbox","boats","bricks","bridges","clusters","crossing","cube","dominosa","fifteen","filling","flip","flood","galaxies","group","guess","inertia","keen","lightup","loopy","magnets","map","mathrax","mines","mosaic","net","netslide","palisade","pattern","pearl","pegs","range","rect","rome","salad","samegame","seismic","signpost","singles","sixteen","slant","slide","sokoban","solo","spokes","sticks","subsets","tents","towers","tracks","twiddle","undead","unequal","unruly","untangle"],Qp={abcd:{collection:"unreleased",description:"Letter placement puzzle",name:"ABCD",objective:"Place letters according to the numbers. Identical letters cannot touch."},ascent:{collection:"unreleased",description:"Path-finding puzzle",name:"Ascent",objective:"Place each number once to create a path."},blackbox:{collection:"original",description:"Ball-finding puzzle",name:"Black Box",objective:"Find the hidden balls in the box by bouncing laser beams off them."},boats:{collection:"unreleased",description:"Boat-placing puzzle",name:"Boats",objective:"Find the fleet in the grid."},bricks:{collection:"unreleased",description:"Hexagonal shading puzzle",name:"Bricks",objective:"Shade several cells in the hexagonal grid while making sure each cell has another shaded cell below it."},bridges:{collection:"original",description:"Bridge-placing puzzle",name:"Bridges",objective:"Connect all the islands with a network of bridges."},clusters:{collection:"unreleased",description:"Red and blue grid puzzle",name:"Clusters",objective:"Fill in the grid with red and blue clusters, with all dead ends given."},crossing:{collection:"unreleased",description:"Number crossword puzzle",name:"Crossing",objective:"Place each number from the list into the crossword.",unfinished:!0},cube:{collection:"original",description:"Rolling cube puzzle",name:"Cube",objective:"Pick up all the blue squares by rolling the cube over them."},dominosa:{collection:"original",description:"Domino tiling puzzle",name:"Dominosa",objective:"Tile the rectangle with a full set of dominoes."},fifteen:{collection:"original",description:"Sliding block puzzle",name:"Fifteen",objective:"Slide the tiles around to arrange them into order."},filling:{collection:"original",description:"Polyomino puzzle",name:"Filling",objective:"Mark every square with the area of its containing region."},flip:{collection:"original",description:"Tile inversion puzzle",name:"Flip",objective:"Flip groups of squares to light them all up at once."},flood:{collection:"original",description:"Flood-filling puzzle",name:"Flood",objective:"Turn the grid the same colour in as few flood fills as possible."},galaxies:{collection:"original",description:"Symmetric polyomino puzzle",name:"Galaxies",objective:"Divide the grid into rotationally symmetric regions each centred on a dot."},group:{collection:"original",description:"Group theory puzzle",name:"Group",objective:"Complete the unfinished Cayley table of a group.",unfinished:!0},guess:{collection:"original",description:"Combination-guessing puzzle",name:"Guess",objective:"Guess the hidden combination of colours."},inertia:{collection:"original",description:"Gem-collecting puzzle",name:"Inertia",objective:"Collect all the gems without running into any of the mines."},keen:{collection:"original",description:"Arithmetic Latin square puzzle",name:"Keen",objective:"Complete the latin square in accordance with the arithmetic clues."},lightup:{collection:"original",description:"Light-bulb placing puzzle",name:"Light Up",objective:"Place bulbs to light up all the squares."},loopy:{collection:"original",description:"Loop-drawing puzzle",name:"Loopy",objective:"Draw a single closed loop, given clues about number of adjacent edges."},magnets:{collection:"original",description:"Magnet-placing puzzle",name:"Magnets",objective:"Place magnets to satisfy the clues and avoid like poles touching."},map:{collection:"original",description:"Map-colouring puzzle",name:"Map",objective:"Colour the map so that adjacent regions are never the same colour."},mathrax:{collection:"unreleased",description:"Latin square puzzle",name:"Mathrax",objective:"Place each number according to the arithmetic clues."},mines:{collection:"original",description:"Mine-finding puzzle",name:"Mines",objective:"Find all the mines without treading on any of them."},mosaic:{collection:"original",description:"Grid-filling puzzle",name:"Mosaic",objective:"Fill in the grid given clues about number of nearby black squares."},net:{collection:"original",description:"Network jigsaw puzzle",name:"Net",objective:"Rotate each tile to reassemble the network."},netslide:{collection:"original",description:"Toroidal sliding network puzzle",name:"Netslide",objective:"Slide a row at a time to reassemble the network."},palisade:{collection:"original",description:"Grid-division puzzle",name:"Palisade",objective:"Divide the grid into equal-sized areas in accordance with the clues."},pattern:{collection:"original",description:"Pattern puzzle",name:"Pattern",objective:"Fill in the pattern in the grid, given only the lengths of runs of black squares."},pearl:{collection:"original",description:"Loop-drawing puzzle",name:"Pearl",objective:"Draw a single closed loop, given clues about corner and straight squares."},pegs:{collection:"original",description:"Peg solitaire puzzle",name:"Pegs",objective:"Jump pegs over each other to remove all but one."},range:{collection:"original",description:"Visible-distance puzzle",name:"Range",objective:"Place black squares to limit the visible distance from each numbered cell."},rect:{collection:"original",description:"Rectangles puzzle",name:"Rectangles",objective:"Divide the grid into rectangles with areas equal to the numbers."},rome:{collection:"unreleased",description:"Arrow-placing puzzle",name:"Rome",objective:"Fill the grid with arrows leading to a goal."},salad:{collection:"unreleased",description:"Pseudo-Latin square puzzle",name:"Salad",objective:"Place each character once in every row and column. Some squares remain empty."},samegame:{collection:"original",description:"Block-clearing puzzle",name:"Same Game",objective:"Clear the grid by removing touching groups of the same colour squares."},seismic:{collection:"unreleased",description:"Number placement puzzle",name:"Seismic",objective:"Place numbers in each area, keeping enough distance between equal numbers.",unfinished:!0},signpost:{collection:"original",description:"Square-connecting puzzle",name:"Signpost",objective:"Connect the squares into a path following the arrows."},singles:{collection:"original",description:"Number-removing puzzle",name:"Singles",objective:"Black out the right set of duplicate numbers."},sixteen:{collection:"original",description:"Toroidal sliding block puzzle",name:"Sixteen",objective:"Slide a row at a time to arrange the tiles into order."},slant:{collection:"original",description:"Maze-drawing puzzle",name:"Slant",objective:"Draw a maze of slanting lines that matches the clues."},slide:{collection:"original",description:"Sliding block puzzle",name:"Slide",objective:"Slide the blocks to let the key block out.",unfinished:!0},sokoban:{collection:"original",description:"Barrel-pushing puzzle",name:"Sokoban",objective:"Push all the barrels into the target squares.",unfinished:!0},solo:{collection:"original",description:"Number placement puzzle",name:"Solo",objective:"Fill in the grid so that each row, column and square block contains one of every digit."},spokes:{collection:"unreleased",description:"Wheel-connecting puzzle",name:"Spokes",objective:"Connect all hubs using horizontal, vertical and diagonal lines."},sticks:{collection:"unreleased",description:"Line-drawing puzzle",name:"Sticks",objective:"Fill in the grid with horizontal and vertical line segments."},subsets:{collection:"unreleased",description:"Set-defining puzzle",name:"Subsets",objective:"Place each set once, in accordance with the subset clues."},tents:{collection:"original",description:"Tent-placing puzzle",name:"Tents",objective:"Place a tent next to each tree."},towers:{collection:"original",description:"Tower-placing Latin square puzzle",name:"Towers",objective:"Complete the latin square of towers in accordance with the clues."},tracks:{collection:"original",description:"Path-finding railway track puzzle",name:"Tracks",objective:"Fill in the railway track according to the clues."},twiddle:{collection:"original",description:"Rotational sliding block puzzle",name:"Twiddle",objective:"Rotate the tiles around themselves to arrange them into order."},undead:{collection:"original",description:"Monster-placing puzzle",name:"Undead",objective:"Place ghosts, vampires and zombies so that the right numbers of them can be seen in mirrors."},unequal:{collection:"original",description:"Latin square puzzle",name:"Unequal",objective:"Complete the latin square in accordance with the > signs."},unruly:{collection:"original",description:"Black and white grid puzzle",name:"Unruly",objective:"Fill in the black and white grid to avoid runs of three."},untangle:{collection:"original",description:"Planar graph layout puzzle",name:"Untangle",objective:"Reposition the points so that the lines do not cross."}},Kf="235384e",Vf=Qp,Zp=new Set(Xp),Ut=new URL("/",window.location.href),Fl=()=>new URL("",Ut),Wf=({puzzleId:e,puzzleParams:t,puzzleGameId:n})=>{const i=new URLSearchParams;t&&i.set("type",t),n&&i.set("id",n);const a=new URL(`./${e}`,Ut);return i.size>0&&(a.search=i.toString()),a},Jp=e=>new URL(e?`help/${e}`:"help/",Ut),ef=e=>Ul(e)?.startsWith("help")??!1,Ul=e=>{const t=e instanceof URL?e:new URL(e,Ut);if(!(t.origin!==Ut.origin||!t.pathname.startsWith(Ut.pathname)))return t.pathname.slice(Ut.pathname.length).replace(/^\/+/,"").replace(/\/+$/,"")};function Hf(e){const t=new URL(window.location.href,Ut),n=Ul(t);if(!(n===void 0||!Zp.has(n)))return{puzzleId:n,puzzleParams:t.searchParams.get("type")??void 0,puzzleGameId:t.searchParams.get("id")??void 0}}function Wa(){const e=Fl();if(document.referrer){const t=new URL(document.referrer);if(t.origin===e.origin&&t.pathname===e.pathname){window.history.back();return}}window.location.href=e.href}const tf="modulepreload",rf=function(e){return"/"+e},Ha={},zi=function(t,n,i){let a=Promise.resolve();if(n&&n.length>0){let g=function(k){return Promise.all(k.map(E=>Promise.resolve(E).then($=>({status:"fulfilled",value:$}),$=>({status:"rejected",reason:$}))))};document.getElementsByTagName("link");const h=document.querySelector("meta[property=csp-nonce]"),p=h?.nonce||h?.getAttribute("nonce");a=g(n.map(k=>{if(k=rf(k),k in Ha)return;Ha[k]=!0;const E=k.endsWith(".css"),$=E?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${k}"]${$}`))return;const R=document.createElement("link");if(R.rel=E?"stylesheet":tf,E||(R.as="script"),R.crossOrigin="",R.href=k,p&&R.setAttribute("nonce",p),document.head.appendChild(R),E)return new Promise((D,j)=>{R.addEventListener("load",D),R.addEventListener("error",()=>j(new Error(`Unable to preload CSS for ${k}`)))})}))}function u(h){const p=new Event("vite:preloadError",{cancelable:!0});if(p.payload=h,window.dispatchEvent(p),!p.defaultPrevented)throw h}return a.then(h=>{for(const p of h||[])p.status==="rejected"&&u(p.reason);return t().catch(u)})};var nf=(e=>(e[e.Main=0]="Main",e[e.Auxiliary=1]="Auxiliary",e[e.Secondary=2]="Secondary",e))(nf||{});function Gf(e){switch(e){case 0:return 2;case 2:return 0;default:return e}}const of=/(Mac|iPhone|iPad|iPod)/i.test(globalThis.navigator?.userAgent??"");function Yf(e){return e.ctrlKey||of&&e.metaKey}function sf(e){return e.altKey||e.ctrlKey||e.metaKey||e.shiftKey}function Xf(e){e.composedPath().some(lf)&&e.preventDefault()}const af=new Set(["button","wa-button"]),lf=e=>e instanceof Element&&af.has(e.localName)&&(!("href"in e)||!e.href);var cf=Object.defineProperty,Eo=(e,t,n,i)=>{for(var a=void 0,u=e.length-1,h;u>=0;u--)(h=e[u])&&(a=h(t,n,a)||a);return a&&cf(t,n,a),a};class Ao extends zt{constructor(){super(),this.size="large",this.orientation="vertical",this.handleResize=()=>{if(this.isConnected){const t=window.getComputedStyle(this),n=t.getPropertyValue("--app-orientation"),i=t.getPropertyValue("--app-size");this.orientation=n,this.size=i}},this.commandMap={},this.interceptCommandAndHrefClicks=async t=>{if(t.defaultPrevented)return;const n=Fl().href,i=t instanceof UIEvent&&sf(t);for(const a of t.composedPath()){if(!(a instanceof HTMLElement))continue;const u=a.getAttribute("href"),h=a.getAttribute("data-command");if(u||h){if(a===this.alreadyHandledCommandTarget)break;u===n?i||(t.preventDefault(),Wa()):u&&ef(u)?i||(t.preventDefault(),await this.showHelpViewer(u)):this.handleCommand(h??u?.replace(/^#!/,"")??"")&&t.preventDefault();break}}},this.handleDropdownSelect=t=>{const n=t.detail.item?.getAttribute("data-command");n&&this.handleCommand(n)&&(this.alreadyHandledCommandTarget=t.detail.item,setTimeout(()=>{this.alreadyHandledCommandTarget=void 0},0))},this.defaultHelpHref=Jp().href,this.defaultHelpLabel="Help",this.registerCommandHandlers()}get compactButtons(){return this.size!=="large"}captureThemeColor(){this.isConnected&&(this.themeColor=window.getComputedStyle(this).getPropertyValue("--app-theme-color"))}hasCommand(t){const[n]=t.split(":",1);return Object.hasOwn(this.commandMap,n)}handleCommand(t){const[n,...i]=t.split(":");return Object.hasOwn(this.commandMap,n)?(this.commandMap[n].apply(this,i),!0):!1}registerCommandHandlers(){Object.assign(this.commandMap,{about:this.showAboutDialog,home:Wa,settings:this.showSettingsDialog})}async showAboutDialog(t){await zi(()=>import("./about-dialog-CIXj3aPq.js"),__vite__mapDeps([0,1,2,3]));const n=await this.dynamicContent?.addItem({tagName:"about-dialog",render:()=>pe`<about-dialog></about-dialog>`});n&&!n.open&&(n.open=!0),n&&t&&(await n.updateComplete,await n.showPanel(t))}async showHelpViewer(t){await zi(()=>import("./help-viewer-DqY79WIK.js"),__vite__mapDeps([4,2,3]));const n=await this.dynamicContent?.addItem({tagName:"help-viewer",render:()=>pe`
        <help-viewer 
            src=${t??this.defaultHelpHref} 
            label=${this.defaultHelpLabel??ye}
        ></help-viewer>
      `});n&&(t&&(n.src=t),n.show())}async showSettingsDialog(t){await zi(()=>import("./settings-dialog-DFWl7yVy.js"),__vite__mapDeps([5,6,3]));const n=await this.dynamicContent?.addItem({tagName:"settings-dialog",render:()=>pe`<settings-dialog></settings-dialog>`});n&&!n.open&&await n.show(),n&&t&&(await n.updateComplete,await n.showPanel(t))}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.handleResize),this.addEventListener("click",this.interceptCommandAndHrefClicks),this.addEventListener("wa-select",this.handleDropdownSelect),this.handleResize(),this.captureThemeColor()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.handleResize),this.removeEventListener("click",this.interceptCommandAndHrefClicks),this.removeEventListener("wa-select",this.handleDropdownSelect)}updated(t){}}Eo([T({type:String,reflect:!0})],Ao.prototype,"size");Eo([T({type:String,reflect:!0})],Ao.prototype,"orientation");Eo([Ge()],Ao.prototype,"themeColor");Eo([me("dynamic-content")],Ao.prototype,"dynamicContent");const uf=(e,t)=>{if(e.size!==t.size)return!1;for(const n of e)if(!t.has(n))return!1;return!0};function Ga(e,t,n){const i=Fp(t);let a;const u=()=>{a||(a=i.subscribe(g=>{p.set(g)}))},h=()=>{a?.unsubscribe(),a=void 0},p=ao(e,{...n,[_e.subtle.watched]:u,[_e.subtle.unwatched]:h});return p}class df{constructor(){this._autoSavedPuzzles=Ga(new Set,async()=>{const t=await we.savedGames.where("[saveType+puzzleId+timestamp]").between([$e.Auto,Un,Zr],[$e.Auto,Kn,Jr]).uniqueKeys();return new Set(t.map(n=>n[1]))},{equals:uf})}async listSavedGames(t){return we.savedGames.where("[saveType+puzzleId+timestamp]").between([$e.User,t??Un,Zr],[$e.User,t??Kn,Jr]).toArray()}savedGamesLiveQuery(t){return Ga([],()=>this.listSavedGames(t),{equals:(n,i)=>JSON.stringify(n)===JSON.stringify(i)})}async loadGame(t,n){const{found:i,error:a,gameId:u}=await this.loadFromDB({puzzle:t,filename:n,saveType:$e.User});return i?{error:a,gameId:u}:{error:`File not found: ${n}`}}async saveGame(t,n){await this.saveToDB({puzzle:t,filename:n,saveType:$e.User})}async removeSavedGame(t,n){const i=typeof t=="string"?t:t.puzzleId;await we.savedGames.delete([i,$e.User,n])}async removeAllSavedGames(){await we.savedGames.where("[saveType+puzzleId+timestamp]").between([$e.User,Un,Zr],[$e.User,Kn,Jr]).delete()}async makeUntitledFilename(t,n="Untitled-"){let i=0;return await we.savedGames.where("[puzzleId+saveType+filename]").between([t,$e.User,n],[t,$e.User,`${n}￿`]).each(({filename:a})=>{const u=Number.parseInt(a.slice(n.length),10);!Number.isNaN(u)&&u>i&&(i=u)}),`${n}${i+1}`}get autoSavedPuzzles(){return this._autoSavedPuzzles.get()}async findMostRecentAutoSave(t){return(await we.savedGames.where("[saveType+puzzleId+timestamp]").between([$e.Auto,t,Zr],[$e.Auto,t,Jr]).last())?.filename}makeAutoSaveFilename(){return`autosave-${Date.now()}`}async autoSaveGame(t,n){await this.saveToDB({puzzle:t,filename:n,saveType:$e.Auto})}async removeAutoSavedGame(t,n){const i=typeof t=="string"?t:t.puzzleId;await we.savedGames.delete([i,$e.Auto,n])}async restoreAutoSavedGame(t,n){const{found:i,error:a}=await this.loadFromDB({puzzle:t,saveType:$e.Auto,filename:n});if(a)throw new Error(`Error restoring autosave ${n}: ${a}`);return i}async removeAllAutoSavedGames(){await we.savedGames.where("[saveType+puzzleId+timestamp]").between([$e.Auto,Un,Zr],[$e.Auto,Kn,Jr]).delete()}async removeAll(){await we.savedGames.clear()}async loadFromDB({puzzle:t,filename:n,saveType:i}){const a=await we.savedGames.get({puzzleId:t.puzzleId,saveType:i,filename:n});if(!a)return{found:!1};let u;if(a.data instanceof Blob){const p=await a.data.arrayBuffer();u=new Uint8Array(p)}else u=a.data;const h=await t.loadGame(u);return h?{found:!0,error:h}:(t.checkpoints=a.checkpoints??[],{found:!0,gameId:a.gameId})}async saveToDB({puzzle:t,filename:n,saveType:i}){const a=t.puzzleId,u=Date.now(),h=t.status,p=t.currentGameId??"",g=await t.saveGame(),k=[...t.checkpoints];await we.savedGames.put({puzzleId:a,filename:n,saveType:i,timestamp:u,status:h,gameId:p,data:g,checkpoints:k})}}const Qf=new df,Zf=(e,t,n)=>Math.max(e,Math.min(t,n));var hf=Se`
  :host {
    --color: var(--wa-color-surface-border);
    --width: var(--wa-border-width-s);
    --spacing: var(--wa-space-m);
  }

  :host(:not([orientation='vertical'])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([orientation='vertical']) {
    display: inline-block;
    height: 100%;
    border-inline-start: solid var(--width) var(--color);
    margin: 0 var(--spacing);
    min-block-size: 1lh;
  }
`;var ln=class extends rt{constructor(){super(...arguments),this.orientation="horizontal"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.orientation)}};ln.css=hf;x([T({reflect:!0})],ln.prototype,"orientation",2);x([Ye("orientation")],ln.prototype,"handleVerticalChange",1);ln=x([He("wa-divider")],ln);var pf=Se`
  :host {
    --show-duration: 50ms;
    --hide-duration: 50ms;
    display: contents;
  }

  #menu {
    display: flex;
    flex-direction: column;
    width: max-content;
    margin: 0;
    padding: 0.25em;
    border: var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-surface-border);
    border-radius: var(--wa-border-radius-m);
    background-color: var(--wa-color-surface-raised);
    box-shadow: var(--wa-shadow-m);
    color: var(--wa-color-text-normal);
    text-align: start;
    user-select: none;
    overflow: auto;
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;

    &.show {
      animation: show var(--show-duration) ease;
    }

    &.hide {
      animation: show var(--hide-duration) ease reverse;
    }

    ::slotted(h1),
    ::slotted(h2),
    ::slotted(h3),
    ::slotted(h4),
    ::slotted(h5),
    ::slotted(h6) {
      display: block !important;
      margin: 0.25em 0 !important;
      padding: 0.25em 0.75em !important;
      color: var(--wa-color-text-quiet) !important;
      font-family: var(--wa-font-family-body) !important;
      font-weight: var(--wa-font-weight-semibold) !important;
      font-size: var(--wa-font-size-smaller) !important;
    }

    ::slotted(wa-divider) {
      --spacing: 0.25em; /* Component-specific, left as-is */
    }
  }

  wa-popup[data-current-placement^='top'] #menu {
    transform-origin: bottom;
  }

  wa-popup[data-current-placement^='bottom'] #menu {
    transform-origin: top;
  }

  wa-popup[data-current-placement^='left'] #menu {
    transform-origin: right;
  }

  wa-popup[data-current-placement^='right'] #menu {
    transform-origin: left;
  }

  wa-popup[data-current-placement='left-start'] #menu {
    transform-origin: right top;
  }

  wa-popup[data-current-placement='left-end'] #menu {
    transform-origin: right bottom;
  }

  wa-popup[data-current-placement='right-start'] #menu {
    transform-origin: left top;
  }

  wa-popup[data-current-placement='right-end'] #menu {
    transform-origin: left bottom;
  }

  @keyframes show {
    from {
      scale: 0.9;
      opacity: 0;
    }
    to {
      scale: 1;
      opacity: 1;
    }
  }
`;var ff=class extends Event{constructor(e){super("wa-select",{bubbles:!0,cancelable:!0,composed:!0}),this.detail=e}};function*Kl(e=document.activeElement){e!=null&&(yield e,"shadowRoot"in e&&e.shadowRoot&&e.shadowRoot.mode!=="closed"&&(yield*Kl(e.shadowRoot.activeElement)))}var Oi=new Set,et=class extends rt{constructor(){super(...arguments),this.submenuCleanups=new Map,this.localize=new hr(this),this.userTypedQuery="",this.openSubmenuStack=[],this.open=!1,this.size="medium",this.placement="bottom-start",this.distance=0,this.skidding=0,this.handleDocumentKeyDown=async e=>{const t=this.localize.dir()==="rtl";if(e.key==="Escape"){const E=this.getTrigger();e.preventDefault(),e.stopPropagation(),this.open=!1,E?.focus();return}const n=[...Kl()].find(E=>E.localName==="wa-dropdown-item"),i=n?.localName==="wa-dropdown-item",a=this.getCurrentSubmenuItem(),u=!!a;let h,p,g;u?(h=this.getSubmenuItems(a),p=h.find(E=>E.active||E===n),g=p?h.indexOf(p):-1):(h=this.getItems(),p=h.find(E=>E.active||E===n),g=p?h.indexOf(p):-1);let k;if(e.key==="ArrowUp"&&(e.preventDefault(),e.stopPropagation(),g>0?k=h[g-1]:k=h[h.length-1]),e.key==="ArrowDown"&&(e.preventDefault(),e.stopPropagation(),g!==-1&&g<h.length-1?k=h[g+1]:k=h[0]),e.key===(t?"ArrowLeft":"ArrowRight")&&i&&p&&p.hasSubmenu){e.preventDefault(),e.stopPropagation(),p.submenuOpen=!0,this.addToSubmenuStack(p),setTimeout(()=>{const E=this.getSubmenuItems(p);E.length>0&&(E.forEach(($,R)=>$.active=R===0),E[0].focus())},0);return}if(e.key===(t?"ArrowRight":"ArrowLeft")&&u){e.preventDefault(),e.stopPropagation();const E=this.removeFromSubmenuStack();E&&(E.submenuOpen=!1,setTimeout(()=>{E.focus(),E.active=!0,(E.slot==="submenu"?this.getSubmenuItems(E.parentElement):this.getItems()).forEach(R=>{R!==E&&(R.active=!1)})},0));return}if((e.key==="Home"||e.key==="End")&&(e.preventDefault(),e.stopPropagation(),k=e.key==="Home"?h[0]:h[h.length-1]),e.key==="Tab"&&await this.hideMenu(),e.key.length===1&&!(e.metaKey||e.ctrlKey||e.altKey)&&!(e.key===" "&&this.userTypedQuery==="")&&(clearTimeout(this.userTypedTimeout),this.userTypedTimeout=setTimeout(()=>{this.userTypedQuery=""},1e3),this.userTypedQuery+=e.key,h.some(E=>{const $=(E.textContent||"").trim().toLowerCase(),R=this.userTypedQuery.trim().toLowerCase();return $.startsWith(R)?(k=E,!0):!1})),k){e.preventDefault(),e.stopPropagation(),h.forEach(E=>E.active=E===k),k.focus();return}(e.key==="Enter"||e.key===" "&&this.userTypedQuery==="")&&i&&p&&(e.preventDefault(),e.stopPropagation(),p.hasSubmenu?(p.submenuOpen=!0,this.addToSubmenuStack(p),setTimeout(()=>{const E=this.getSubmenuItems(p);E.length>0&&(E.forEach(($,R)=>$.active=R===0),E[0].focus())},0)):this.makeSelection(p))},this.handleDocumentPointerDown=e=>{e.composedPath().some(i=>i instanceof HTMLElement?i===this||i.closest('wa-dropdown, [part="submenu"]'):!1)||(this.open=!1)},this.handleGlobalMouseMove=e=>{const t=this.getCurrentSubmenuItem();if(!t?.submenuOpen||!t.submenuElement)return;const n=t.submenuElement.getBoundingClientRect(),i=this.localize.dir()==="rtl",a=i?n.right:n.left,u=i?Math.max(e.clientX,a):Math.min(e.clientX,a),h=Math.max(n.top,Math.min(e.clientY,n.bottom));t.submenuElement.style.setProperty("--safe-triangle-cursor-x",`${u}px`),t.submenuElement.style.setProperty("--safe-triangle-cursor-y",`${h}px`);const p=t.matches(":hover"),g=t.submenuElement?.matches(":hover")||!!e.composedPath().find(k=>k instanceof HTMLElement&&k.closest('[part="submenu"]')===t.submenuElement);!p&&!g&&setTimeout(()=>{!t.matches(":hover")&&!t.submenuElement?.matches(":hover")&&(t.submenuOpen=!1)},100)}}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.userTypedTimeout),this.closeAllSubmenus(),this.submenuCleanups.forEach(e=>e()),this.submenuCleanups.clear(),document.removeEventListener("mousemove",this.handleGlobalMouseMove)}firstUpdated(){this.syncAriaAttributes()}async updated(e){if(e.has("open")){const t=e.get("open");if(t===this.open||t===void 0&&this.open===!1)return;this.customStates.set("open",this.open),this.open?await this.showMenu():(this.closeAllSubmenus(),await this.hideMenu())}e.has("size")&&this.syncItemSizes()}getItems(e=!1){const t=this.defaultSlot.assignedElements({flatten:!0}).filter(n=>n.localName==="wa-dropdown-item");return e?t:t.filter(n=>!n.disabled)}getSubmenuItems(e,t=!1){const n=e.shadowRoot?.querySelector('slot[name="submenu"]')||e.querySelector('slot[name="submenu"]');if(!n)return[];const i=n.assignedElements({flatten:!0}).filter(a=>a.localName==="wa-dropdown-item");return t?i:i.filter(a=>!a.disabled)}syncItemSizes(){this.defaultSlot.assignedElements({flatten:!0}).filter(t=>t.localName==="wa-dropdown-item").forEach(t=>t.size=this.size)}addToSubmenuStack(e){const t=this.openSubmenuStack.indexOf(e);t!==-1?this.openSubmenuStack=this.openSubmenuStack.slice(0,t+1):this.openSubmenuStack.push(e)}removeFromSubmenuStack(){return this.openSubmenuStack.pop()}getCurrentSubmenuItem(){return this.openSubmenuStack.length>0?this.openSubmenuStack[this.openSubmenuStack.length-1]:void 0}closeAllSubmenus(){this.getItems(!0).forEach(t=>{t.submenuOpen=!1}),this.openSubmenuStack=[]}closeSiblingSubmenus(e){const t=e.closest('wa-dropdown-item:not([slot="submenu"])');let n;t?n=this.getSubmenuItems(t,!0):n=this.getItems(!0),n.forEach(i=>{i!==e&&i.submenuOpen&&(i.submenuOpen=!1)}),this.openSubmenuStack.includes(e)||this.openSubmenuStack.push(e)}getTrigger(){return this.querySelector('[slot="trigger"]')}async showMenu(){if(!this.getTrigger())return;const t=new _o;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1;return}if(this.popup.active)return;Oi.forEach(i=>i.open=!1),this.popup.active=!0,this.open=!0,Oi.add(this),this.syncAriaAttributes(),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("pointerdown",this.handleDocumentPointerDown),document.addEventListener("mousemove",this.handleGlobalMouseMove),this.menu.classList.remove("hide"),await Je(this.menu,"show");const n=this.getItems();n.length>0&&(n.forEach((i,a)=>i.active=a===0),n[0].focus()),this.dispatchEvent(new xo)}async hideMenu(){const e=new ko({source:this});if(this.dispatchEvent(e),e.defaultPrevented){this.open=!0;return}this.open=!1,Oi.delete(this),this.syncAriaAttributes(),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("pointerdown",this.handleDocumentPointerDown),document.removeEventListener("mousemove",this.handleGlobalMouseMove),this.menu.classList.remove("show"),await Je(this.menu,"hide"),this.popup.active=this.open,this.dispatchEvent(new bo)}handleMenuClick(e){const t=e.target.closest("wa-dropdown-item");if(!(!t||t.disabled)){if(t.hasSubmenu){t.submenuOpen||(this.closeSiblingSubmenus(t),this.addToSubmenuStack(t),t.submenuOpen=!0),e.stopPropagation();return}this.makeSelection(t)}}async handleMenuSlotChange(){const e=this.getItems(!0);await Promise.all(e.map(i=>i.updateComplete)),this.syncItemSizes();const t=e.some(i=>i.type==="checkbox"),n=e.some(i=>i.hasSubmenu);e.forEach((i,a)=>{i.active=a===0,i.checkboxAdjacent=t,i.submenuAdjacent=n})}handleTriggerClick(){this.open=!this.open}handleSubmenuOpening(e){const t=e.detail.item;this.closeSiblingSubmenus(t),this.addToSubmenuStack(t),this.setupSubmenuPosition(t),this.processSubmenuItems(t)}setupSubmenuPosition(e){if(!e.submenuElement)return;this.cleanupSubmenuPosition(e);const t=xl(e,e.submenuElement,()=>{this.positionSubmenu(e),this.updateSafeTriangleCoordinates(e)});this.submenuCleanups.set(e,t);const n=e.submenuElement.querySelector('slot[name="submenu"]');n&&(n.removeEventListener("slotchange",et.handleSubmenuSlotChange),n.addEventListener("slotchange",et.handleSubmenuSlotChange),et.handleSubmenuSlotChange({target:n}))}static handleSubmenuSlotChange(e){const t=e.target;if(!t)return;const n=t.assignedElements().filter(u=>u.localName==="wa-dropdown-item");if(n.length===0)return;const i=n.some(u=>u.hasSubmenu),a=n.some(u=>u.type==="checkbox");n.forEach(u=>{u.submenuAdjacent=i,u.checkboxAdjacent=a})}processSubmenuItems(e){if(!e.submenuElement)return;const t=this.getSubmenuItems(e,!0),n=t.some(i=>i.hasSubmenu);t.forEach(i=>{i.submenuAdjacent=n})}cleanupSubmenuPosition(e){const t=this.submenuCleanups.get(e);t&&(t(),this.submenuCleanups.delete(e))}positionSubmenu(e){if(!e.submenuElement)return;const n=this.localize.dir()==="rtl"?"left-start":"right-start";Cl(e,e.submenuElement,{placement:n,middleware:[kl({mainAxis:0,crossAxis:-5}),Sl({fallbackStrategy:"bestFit"}),_l({padding:8})]}).then(({x:i,y:a,placement:u})=>{e.submenuElement.setAttribute("data-placement",u),Object.assign(e.submenuElement.style,{left:`${i}px`,top:`${a}px`})})}updateSafeTriangleCoordinates(e){if(!e.submenuElement||!e.submenuOpen)return;if(document.activeElement?.matches(":focus-visible")){e.submenuElement.style.setProperty("--safe-triangle-visible","none");return}e.submenuElement.style.setProperty("--safe-triangle-visible","block");const n=e.submenuElement.getBoundingClientRect(),i=this.localize.dir()==="rtl";e.submenuElement.style.setProperty("--safe-triangle-submenu-start-x",`${i?n.right:n.left}px`),e.submenuElement.style.setProperty("--safe-triangle-submenu-start-y",`${n.top}px`),e.submenuElement.style.setProperty("--safe-triangle-submenu-end-x",`${i?n.right:n.left}px`),e.submenuElement.style.setProperty("--safe-triangle-submenu-end-y",`${n.bottom}px`)}makeSelection(e){const t=this.getTrigger();if(e.disabled)return;e.type==="checkbox"&&(e.checked=!e.checked);const n=new ff({item:e});this.dispatchEvent(n),n.defaultPrevented||(this.open=!1,t?.focus())}async syncAriaAttributes(){const e=this.getTrigger();let t;e&&(e.localName==="wa-button"?(await customElements.whenDefined("wa-button"),await e.updateComplete,t=e.shadowRoot.querySelector('[part="base"]')):t=e,t.hasAttribute("id")||t.setAttribute("id",El("wa-dropdown-trigger-")),t.setAttribute("aria-haspopup","menu"),t.setAttribute("aria-expanded",this.open?"true":"false"),this.menu.setAttribute("aria-expanded","false"))}render(){let e=this.hasUpdated?this.popup.active:this.open;return pe`
      <wa-popup
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        ?active=${e}
        flip
        flip-fallback-strategy="best-fit"
        shift
        shift-padding="10"
        auto-size="vertical"
        auto-size-padding="10"
      >
        <slot
          name="trigger"
          slot="anchor"
          @click=${this.handleTriggerClick}
          @slotchange=${this.syncAriaAttributes}
        ></slot>
        <div
          id="menu"
          part="menu"
          role="menu"
          tabindex="-1"
          aria-orientation="vertical"
          @click=${this.handleMenuClick}
          @submenu-opening=${this.handleSubmenuOpening}
        >
          <slot @slotchange=${this.handleMenuSlotChange}></slot>
        </div>
      </wa-popup>
    `}};et.css=[fo,pf];x([me("slot:not([name])")],et.prototype,"defaultSlot",2);x([me("#menu")],et.prototype,"menu",2);x([me("wa-popup")],et.prototype,"popup",2);x([T({type:Boolean,reflect:!0})],et.prototype,"open",2);x([T({reflect:!0})],et.prototype,"size",2);x([T({reflect:!0})],et.prototype,"placement",2);x([T({type:Number})],et.prototype,"distance",2);x([T({type:Number})],et.prototype,"skidding",2);et=x([He("wa-dropdown")],et);var mf=Se`
  :host {
    display: flex;
    position: relative;
    align-items: center;
    padding: 0.5em 1em;
    border-radius: var(--wa-border-radius-s);
    isolation: isolate;
    color: var(--wa-color-text-normal);
    line-height: var(--wa-line-height-condensed);
    cursor: pointer;
    transition:
      var(--wa-transition-fast) background-color var(--wa-transition-easing),
      var(--wa-transition-fast) color var(--wa-transition-easing);
  }

  @media (hover: hover) {
    :host(:hover:not(:state(disabled))) {
      background-color: var(--wa-color-neutral-fill-normal);
    }
  }

  :host(:focus-visible) {
    z-index: 1;
    outline: var(--wa-focus-ring);
    background-color: var(--wa-color-neutral-fill-normal);
  }

  :host(:state(disabled)) {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* Danger variant */
  :host([variant='danger']),
  :host([variant='danger']) #details {
    color: var(--wa-color-danger-on-quiet);
  }

  @media (hover: hover) {
    :host([variant='danger']:hover) {
      background-color: var(--wa-color-danger-fill-normal);
      color: var(--wa-color-danger-on-normal);
    }
  }

  :host([variant='danger']:focus-visible) {
    background-color: var(--wa-color-danger-fill-normal);
    color: var(--wa-color-danger-on-normal);
  }

  :host([checkbox-adjacent]) {
    padding-inline-start: 2em;
  }

  /* Only add padding when item actually has a submenu */
  :host([submenu-adjacent]:not(:state(has-submenu))) #details {
    padding-inline-end: 0;
  }

  :host(:state(has-submenu)[submenu-adjacent]) #details {
    padding-inline-end: 1.75em;
  }

  #check {
    visibility: hidden;
    margin-inline-start: -1.5em;
    margin-inline-end: 0.5em;
    font-size: var(--wa-font-size-smaller);
  }

  :host(:state(checked)) #check {
    visibility: visible;
  }

  #icon ::slotted(*) {
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    margin-inline-end: 0.75em !important;
    font-size: var(--wa-font-size-smaller);
  }

  #label {
    flex: 1 1 auto;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  #details {
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    justify-content: end;
    color: var(--wa-color-text-quiet);
    font-size: var(--wa-font-size-smaller) !important;
  }

  #details ::slotted(*) {
    margin-inline-start: 2em !important;
  }

  /* Submenu indicator icon */
  #submenu-indicator {
    position: absolute;
    inset-inline-end: 1em;
    color: var(--wa-color-neutral-on-quiet);
    font-size: var(--wa-font-size-smaller);
  }

  /* Flip chevron icon when RTL */
  :host(:dir(rtl)) #submenu-indicator {
    transform: scaleX(-1);
  }

  /* Submenu styles */
  #submenu {
    display: flex;
    z-index: 10;
    position: absolute;
    top: 0;
    left: 0;
    flex-direction: column;
    width: max-content;
    margin: 0;
    padding: 0.25em;
    border: var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-surface-border);
    border-radius: var(--wa-border-radius-m);
    background-color: var(--wa-color-surface-raised);
    box-shadow: var(--wa-shadow-m);
    color: var(--wa-color-text-normal);
    text-align: start;
    user-select: none;

    /* Override default popover styles */
    &[popover] {
      margin: 0;
      inset: auto;
      padding: 0.25em;
      overflow: visible;
      border-radius: var(--wa-border-radius-m);
    }

    &.show {
      animation: submenu-show var(--show-duration, 50ms) ease;
    }

    &.hide {
      animation: submenu-show var(--show-duration, 50ms) ease reverse;
    }

    /* Submenu placement transform origins */
    &[data-placement^='top'] {
      transform-origin: bottom;
    }

    &[data-placement^='bottom'] {
      transform-origin: top;
    }

    &[data-placement^='left'] {
      transform-origin: right;
    }

    &[data-placement^='right'] {
      transform-origin: left;
    }

    &[data-placement='left-start'] {
      transform-origin: right top;
    }

    &[data-placement='left-end'] {
      transform-origin: right bottom;
    }

    &[data-placement='right-start'] {
      transform-origin: left top;
    }

    &[data-placement='right-end'] {
      transform-origin: left bottom;
    }

    /* Safe triangle styling */
    &::before {
      display: none;
      z-index: 9;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: transparent;
      content: '';
      clip-path: polygon(
        var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),
        var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),
        var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)
      );
      pointer-events: auto; /* Enable mouse events on the triangle */
    }

    &[data-visible]::before {
      display: block;
    }
  }

  ::slotted(wa-dropdown-item) {
    font-size: inherit;
  }

  ::slotted(wa-divider) {
    --spacing: 0.25em;
  }

  @keyframes submenu-show {
    from {
      scale: 0.9;
      opacity: 0;
    }
    to {
      scale: 1;
      opacity: 1;
    }
  }
`;var We=class extends rt{constructor(){super(...arguments),this.hasSlotController=new cn(this,"[default]","start","end"),this.active=!1,this.variant="default",this.size="medium",this.checkboxAdjacent=!1,this.submenuAdjacent=!1,this.type="normal",this.checked=!1,this.disabled=!1,this.submenuOpen=!1,this.hasSubmenu=!1,this.handleSlotChange=()=>{this.hasSubmenu=this.hasSlotController.test("submenu"),this.updateHasSubmenuState(),this.hasSubmenu?(this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",this.submenuOpen?"true":"false")):(this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"))}}connectedCallback(){super.connectedCallback(),this.addEventListener("mouseenter",this.handleMouseEnter.bind(this)),this.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}disconnectedCallback(){super.disconnectedCallback(),this.closeSubmenu(),this.removeEventListener("mouseenter",this.handleMouseEnter),this.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}firstUpdated(){this.setAttribute("tabindex","-1"),this.hasSubmenu=this.hasSlotController.test("submenu"),this.updateHasSubmenuState()}updated(e){e.has("active")&&(this.setAttribute("tabindex",this.active?"0":"-1"),this.customStates.set("active",this.active)),e.has("checked")&&(this.setAttribute("aria-checked",this.checked?"true":"false"),this.customStates.set("checked",this.checked)),e.has("disabled")&&(this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.customStates.set("disabled",this.disabled)),e.has("type")&&(this.type==="checkbox"?this.setAttribute("role","menuitemcheckbox"):this.setAttribute("role","menuitem")),e.has("submenuOpen")&&(this.customStates.set("submenu-open",this.submenuOpen),this.submenuOpen?this.openSubmenu():this.closeSubmenu())}updateHasSubmenuState(){this.customStates.set("has-submenu",this.hasSubmenu)}async openSubmenu(){!this.hasSubmenu||!this.submenuElement||(this.notifyParentOfOpening(),this.submenuElement.showPopover(),this.submenuElement.hidden=!1,this.submenuElement.setAttribute("data-visible",""),this.submenuOpen=!0,this.setAttribute("aria-expanded","true"),await Je(this.submenuElement,"show"),setTimeout(()=>{const e=this.getSubmenuItems();e.length>0&&(e.forEach((t,n)=>t.active=n===0),e[0].focus())},0))}notifyParentOfOpening(){const e=new CustomEvent("submenu-opening",{bubbles:!0,composed:!0,detail:{item:this}});this.dispatchEvent(e);const t=this.parentElement;t&&[...t.children].filter(i=>i!==this&&i.localName==="wa-dropdown-item"&&i.getAttribute("slot")===this.getAttribute("slot")&&i.submenuOpen).forEach(i=>{i.submenuOpen=!1})}async closeSubmenu(){!this.hasSubmenu||!this.submenuElement||(this.submenuOpen=!1,this.setAttribute("aria-expanded","false"),this.submenuElement.hidden||(await Je(this.submenuElement,"hide"),this.submenuElement.hidden=!0,this.submenuElement.removeAttribute("data-visible"),this.submenuElement.hidePopover()))}getSubmenuItems(){return[...this.children].filter(e=>e.localName==="wa-dropdown-item"&&e.getAttribute("slot")==="submenu"&&!e.hasAttribute("disabled"))}handleMouseEnter(){this.hasSubmenu&&!this.disabled&&(this.notifyParentOfOpening(),this.submenuOpen=!0)}render(){return pe`
      ${this.type==="checkbox"?pe`
            <wa-icon
              id="check"
              part="checkmark"
              exportparts="svg:checkmark__svg"
              library="system"
              name="check"
            ></wa-icon>
          `:""}

      <span id="icon" part="icon">
        <slot name="icon"></slot>
      </span>

      <span id="label" part="label">
        <slot></slot>
      </span>

      <span id="details" part="details">
        <slot name="details"></slot>
      </span>

      ${this.hasSubmenu?pe`
            <wa-icon
              id="submenu-indicator"
              part="submenu-icon"
              exportparts="svg:submenu-icon__svg"
              library="system"
              name="chevron-right"
            ></wa-icon>
          `:""}
      ${this.hasSubmenu?pe`
            <div
              id="submenu"
              part="submenu"
              popover="manual"
              role="menu"
              tabindex="-1"
              aria-orientation="vertical"
              hidden
            >
              <slot name="submenu"></slot>
            </div>
          `:""}
    `}};We.css=mf;x([me("#submenu")],We.prototype,"submenuElement",2);x([T({type:Boolean})],We.prototype,"active",2);x([T({reflect:!0})],We.prototype,"variant",2);x([T({reflect:!0})],We.prototype,"size",2);x([T({attribute:"checkbox-adjacent",type:Boolean,reflect:!0})],We.prototype,"checkboxAdjacent",2);x([T({attribute:"submenu-adjacent",type:Boolean,reflect:!0})],We.prototype,"submenuAdjacent",2);x([T()],We.prototype,"value",2);x([T({reflect:!0})],We.prototype,"type",2);x([T({type:Boolean})],We.prototype,"checked",2);x([T({type:Boolean,reflect:!0})],We.prototype,"disabled",2);x([T({type:Boolean,reflect:!0})],We.prototype,"submenuOpen",2);x([Ge()],We.prototype,"hasSubmenu",2);We=x([He("wa-dropdown-item")],We);var gf=Object.defineProperty,vf=Object.getOwnPropertyDescriptor,Vl=(e,t,n,i)=>{for(var a=i>1?void 0:i?vf(t,n):t,u=e.length-1,h;u>=0;u--)(h=e[u])&&(a=(i?h(t,n,a):h(a))||a);return i&&a&&gf(t,n,a),a};let Gi=class extends zt{constructor(){super(...arguments),this.dynamicItems=[]}disconnectedCallback(){super.disconnectedCallback(),this.dynamicItems=[]}createRenderRoot(){return this}render(){return Yp(this.dynamicItems,e=>e.tagName,e=>e.render())}async addItem({tagName:e,render:t}){let n=this.querySelector(e);return n||(this.removeItem(e),this.dynamicItems=[...this.dynamicItems,{tagName:e,render:t}],await this.updateComplete,n=this.querySelector(e),n)}removeItem(e){this.dynamicItems=[...this.dynamicItems.filter(t=>t.tagName!==e)]}};Vl([Ge()],Gi.prototype,"dynamicItems",2);Gi=Vl([He("dynamic-content")],Gi);export{uf as $,ye as A,qt as B,me as C,Ot as D,dt as E,Hp as F,fo as G,Al as H,ct as I,Ye as J,cn as K,hr as L,el as M,Ee as N,Ni as O,_o as P,Je as Q,Yd as R,Ao as S,zf as T,xo as U,ko as V,rt as W,bo as X,io as Y,Su as Z,x as _,fu as a,Ef as a0,nf as a1,Yf as a2,of as a3,Gf as a4,Ti as a5,Xf as a6,Jp as a7,Fl as a8,zi as a9,Cf as aa,Hf as ab,Wa as ac,Hu as ad,El as ae,Kf as af,rh as ag,Ca as ah,Ea as ai,zu as aj,Pf as ak,Ua as al,Ka as am,fe as an,zt as b,Zf as c,pe as d,Vf as e,Yp as f,_f as g,Wf as h,Se as i,Qf as j,kf as k,Zi as l,ca as m,T as n,Tf as o,Xp as p,ao as q,Ge as r,$t as s,He as t,lo as u,Of as v,If as w,Sf as x,ss as y,as as z};
//# sourceMappingURL=dynamic-content-CxlmA9GR.js.map
