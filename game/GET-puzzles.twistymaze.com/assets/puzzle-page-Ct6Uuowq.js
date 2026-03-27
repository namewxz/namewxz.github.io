const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/share-dialog-CuIbSc3y.js","assets/audio-CDUuflQX.js","assets/dynamic-content-CxlmA9GR.js","assets/sentry-Coq7X-ar.js","assets/unsafe-html-UuEEukLm.js","assets/saved-game-dialogs-CM6zZtAT.js","assets/chunk.K3HXBWLW-a8hWrr7F.js","assets/enter-gameid-dialog-iynlSYB4.js"])))=>i.map(i=>d[i]);
import{m as To,i as U,_ as p,n as m,t as D,W as qe,d as f,q as j,u as Oo,e as qa,v as Do,w as Lo,x as Ro,o as ce,b as ge,r as v,y as Va,z as Ao,B as No,E as Uo,C as A,D as he,F as Pt,A as P,a as xe,G as Ht,H as Fa,I as Bt,J as bt,K as ja,L as Ve,M as Go,N as F,O as Ho,R as Bo,P as qo,Q as ta,T as Vo,U as Fo,V as jo,X as Wo,Y as aa,Z as Ko,$ as Yo,c as yt,a0 as Xo,a1 as Ce,a2 as Xe,a3 as oa,a4 as Ct,a5 as It,S as Jo,j as oe,a6 as ia,s as T,a7 as Zo,a8 as Qo,a9 as Je,aa as ei,ab as ti,ac as ai}from"./dynamic-content-CxlmA9GR.js";import{s as oi,p as Se,c as Oe,f as ii,a as ri,b as si,d as Me}from"./audio-CDUuflQX.js";import{g as ni,h as li,s as ci,c as di,j as ui,k as ra}from"./sentry-Coq7X-ar.js";import{o as hi}from"./unsafe-html-UuEEukLm.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e._sentryModuleMetadata=e._sentryModuleMetadata||{},e._sentryModuleMetadata[new e.Error().stack]=(function(t){for(var a=1;a<arguments.length;a++){var o=arguments[a];if(o!=null)for(var i in o)o.hasOwnProperty(i)&&(t[i]=o[i])}return t})({},e._sentryModuleMetadata[new e.Error().stack],{"_sentryBundlerPluginAppKey:code-from-puzzles-web":!0})}catch{}})();const pi=!1;function qt(e){return(t,a)=>{const o=typeof t=="function"?t:t[a];Object.assign(o,e)}}let mi;function fi(e){return(t,a)=>To(t,a,{get(){return(this.renderRoot??(mi??=document.createDocumentFragment())).querySelectorAll(e)}})}var gi=U`
  :host {
    --color: var(--wa-color-neutral-fill-normal);
    --sheen-color: color-mix(in oklab, var(--color), var(--wa-color-surface-raised));

    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 1rem;
  }

  .indicator {
    flex: 1 1 auto;
    background: var(--color);
    border-radius: var(--wa-border-radius-pill);
  }

  :host([effect='sheen']) .indicator {
    background: linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));
    background-size: 400% 100%;
    animation: sheen 8s ease-in-out infinite;
  }

  :host([effect='pulse']) .indicator {
    animation: pulse 2s ease-in-out 0.5s infinite;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    :host {
      --color: GrayText;
    }
  }

  @keyframes sheen {
    0% {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`;var lt=class extends qe{constructor(){super(...arguments),this.effect="none"}render(){return f` <div part="indicator" class="indicator"></div> `}};lt.css=gi;p([m({reflect:!0})],lt.prototype,"effect",2);lt=p([D("wa-skeleton")],lt);class wi{get value(){return this.o}set value(t){this.setValue(t)}setValue(t,a=!1){const o=a||!Object.is(t,this.o);this.o=t,o&&this.updateObservers()}constructor(t){this.subscriptions=new Map,this.updateObservers=()=>{for(const[a,{disposer:o}]of this.subscriptions)a(this.o,o)},t!==void 0&&(this.value=t)}addCallback(t,a,o){if(!o)return void t(this.value);this.subscriptions.has(t)||this.subscriptions.set(t,{disposer:()=>{this.subscriptions.delete(t)},consumerHost:a});const{disposer:i}=this.subscriptions.get(t);t(this.value,i)}clearCallbacks(){this.subscriptions.clear()}}let bi=class extends Event{constructor(t,a){super("context-provider",{bubbles:!0,composed:!0}),this.context=t,this.contextTarget=a}},sa=class extends wi{constructor(t,a,o){super(a.context!==void 0?a.initialValue:o),this.onContextRequest=i=>{if(i.context!==this.context)return;const r=i.contextTarget??i.composedPath()[0];r!==this.host&&(i.stopPropagation(),this.addCallback(i.callback,r,i.subscribe))},this.onProviderRequest=i=>{if(i.context!==this.context||(i.contextTarget??i.composedPath()[0])===this.host)return;const r=new Set;for(const[s,{consumerHost:n}]of this.subscriptions)r.has(s)||(r.add(s),n.dispatchEvent(new oi(this.context,n,s,!0)));i.stopPropagation()},this.host=t,a.context!==void 0?this.context=a.context:this.context=a,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new bi(this.context,this.host))}};function yi({context:e}){return(t,a)=>{const o=new WeakMap;if(typeof a=="object")return{get(){return t.get.call(this)},set(i){return o.get(this).setValue(i),t.set.call(this,i)},init(i){return o.set(this,new sa(this,{context:e,initialValue:i})),i}};{t.constructor.addInitializer((s=>{o.set(s,new sa(s,{context:e}))}));const i=Object.getOwnPropertyDescriptor(t,a);let r;if(i===void 0){const s=new WeakMap;r={get(){return s.get(this)},set(n){o.get(this).setValue(n),s.set(this,n)},configurable:!0,enumerable:!0}}else{const s=i.set;r={...i,set(n){o.get(this).setValue(n),s?.call(this,n)}}}return void Object.defineProperty(t,a,r)}}}const Wa=Symbol("Comlink.proxy"),vi=Symbol("Comlink.endpoint"),Ka=Symbol("Comlink.releaseProxy"),kt=Symbol("Comlink.finalizer"),rt=Symbol("Comlink.thrown"),Ya=e=>typeof e=="object"&&e!==null||typeof e=="function",zi={canHandle:e=>Ya(e)&&e[Wa],serialize(e){const{port1:t,port2:a}=new MessageChannel;return Ja(e,t),[a,[a]]},deserialize(e){return e.start(),Qa(e)}},Ci={canHandle:e=>Ya(e)&&rt in e,serialize({value:e}){let t;return e instanceof Error?t={isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:t={isError:!1,value:e},[t,[]]},deserialize(e){throw e.isError?Object.assign(new Error(e.value.message),e.value):e.value}},Xa=new Map([["proxy",zi],["throw",Ci]]);function ki(e,t){for(const a of e)if(t===a||a==="*"||a instanceof RegExp&&a.test(t))return!0;return!1}function Ja(e,t=globalThis,a=["*"]){t.addEventListener("message",function o(i){if(!i||!i.data)return;if(!ki(a,i.origin)){console.warn(`Invalid origin '${i.origin}' for comlink proxy`);return}const{id:r,type:s,path:n}=Object.assign({path:[]},i.data),l=(i.data.argumentList||[]).map(ve);let c;try{const d=n.slice(0,-1).reduce((h,y)=>h[y],e),u=n.reduce((h,y)=>h[y],e);switch(s){case"GET":c=u;break;case"SET":d[n.slice(-1)[0]]=ve(i.data.value),c=!0;break;case"APPLY":c=u.apply(d,l);break;case"CONSTRUCT":{const h=new u(...l);c=Tt(h)}break;case"ENDPOINT":{const{port1:h,port2:y}=new MessageChannel;Ja(e,y),c=st(h,[h])}break;case"RELEASE":c=void 0;break;default:return}}catch(d){c={value:d,[rt]:0}}Promise.resolve(c).catch(d=>({value:d,[rt]:0})).then(d=>{const[u,h]=ut(d);t.postMessage(Object.assign(Object.assign({},u),{id:r}),h),s==="RELEASE"&&(t.removeEventListener("message",o),Za(t),kt in e&&typeof e[kt]=="function"&&e[kt]())}).catch(d=>{const[u,h]=ut({value:new TypeError("Unserializable return value"),[rt]:0});t.postMessage(Object.assign(Object.assign({},u),{id:r}),h)})}),t.start&&t.start()}function xi(e){return e.constructor.name==="MessagePort"}function Za(e){xi(e)&&e.close()}function Qa(e,t){const a=new Map;return e.addEventListener("message",function(i){const{data:r}=i;if(!r||!r.id)return;const s=a.get(r.id);if(s)try{s(r)}finally{a.delete(r.id)}}),_t(e,a,[],t)}function Ze(e){if(e)throw new Error("Proxy has been released and is not useable")}function eo(e){return Pe(e,new Map,{type:"RELEASE"}).then(()=>{Za(e)})}const ct=new WeakMap,dt="FinalizationRegistry"in globalThis&&new FinalizationRegistry(e=>{const t=(ct.get(e)||0)-1;ct.set(e,t),t===0&&eo(e)});function Si(e,t){const a=(ct.get(t)||0)+1;ct.set(t,a),dt&&dt.register(e,t,e)}function $i(e){dt&&dt.unregister(e)}function _t(e,t,a=[],o=function(){}){let i=!1;const r=new Proxy(o,{get(s,n){if(Ze(i),n===Ka)return()=>{$i(r),eo(e),t.clear(),i=!0};if(n==="then"){if(a.length===0)return{then:()=>r};const l=Pe(e,t,{type:"GET",path:a.map(c=>c.toString())}).then(ve);return l.then.bind(l)}return _t(e,t,[...a,n])},set(s,n,l){Ze(i);const[c,d]=ut(l);return Pe(e,t,{type:"SET",path:[...a,n].map(u=>u.toString()),value:c},d).then(ve)},apply(s,n,l){Ze(i);const c=a[a.length-1];if(c===vi)return Pe(e,t,{type:"ENDPOINT"}).then(ve);if(c==="bind")return _t(e,t,a.slice(0,-1));const[d,u]=na(l);return Pe(e,t,{type:"APPLY",path:a.map(h=>h.toString()),argumentList:d},u).then(ve)},construct(s,n){Ze(i);const[l,c]=na(n);return Pe(e,t,{type:"CONSTRUCT",path:a.map(d=>d.toString()),argumentList:l},c).then(ve)}});return Si(r,e),r}function Mi(e){return Array.prototype.concat.apply([],e)}function na(e){const t=e.map(ut);return[t.map(a=>a[0]),Mi(t.map(a=>a[1]))]}const to=new WeakMap;function st(e,t){return to.set(e,t),e}function Tt(e){return Object.assign(e,{[Wa]:!0})}function ut(e){for(const[t,a]of Xa)if(a.canHandle(e)){const[o,i]=a.serialize(e);return[{type:"HANDLER",name:t,value:o},i]}return[{type:"RAW",value:e},to.get(e)||[]]}function ve(e){switch(e.type){case"HANDLER":return Xa.get(e.name).deserialize(e.value);case"RAW":return e.value}}function Pe(e,t,a,o){return new Promise(i=>{const r=Ei();t.set(r,i),e.start&&e.start(),e.postMessage(Object.assign({id:r},a),o)})}function Ei(){return new Array(4).fill(0).map(()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)).join("-")}const ao={abcd:{describeConfig:w("{width}x{height}, {letters} letters {remove-clues:Easy|Hard}{allow-diagonal-touching:, no diagonal|}")},ascent:{describeConfig:w("{width}x{height}{grid-type} {difficulty}{always-show-start-and-end-points}{symmetrical-clues}",{difficulty:["Easy","Normal","Tricky","Hard"],"grid-type":[" (no diagonals)",""," Hexagon"," Honeycomb"," Edges"],"always-show-start-and-end-points":[", hidden ends",""],"symmetrical-clues":["",", symmetric"]})},blackbox:{describeConfig:w("{width}x{height}, {no-of-balls}",{"no-of-balls":e=>String(e)==="1"?"1 ball":`${e} balls`}),darkMode:{paletteSwaps:[[5,6]]}},boats:{describeConfig:w("{width}x{height}, size {fleet-size} {difficulty}{remove-numbers}{fleet-configuration}",{difficulty:["Easy","Normal","Tricky","Hard"],"remove-numbers":["",", hidden clues"],"fleet-configuration":e=>e?`, fleet ${e}`:""}),darkMode:{paletteOverrides:{4:.6}}},bricks:{describeConfig:w("{width}x{height} {difficulty:Easy|Normal|Tricky}"),darkMode:{paletteOverrides:{0:[.4,0,0],2:[.6,0,0],4:[.1,0,0]}}},bridges:{describeConfig:w("{width}x{height} {difficulty}{allow-loops}{max-bridges-per-direction}{percentage-of-island-squares}{expansion-factor}",{"allow-loops":e=>e?"":", no loops",difficulty:["easy","medium","hard"],"max-bridges-per-direction":e=>e===0?", max 1 bridge":e===1?"":`, max ${Number(e)+1} bridges`,"percentage-of-island-squares":e=>e===5?"":`, ${5+5*Number(e)}% islands`,"expansion-factor":e=>e===1?"":`, ${10*Number(e)}% expansion`})},clusters:{describeConfig:w("{width}x{height}")},crossing:{describeConfig:w("{width}x{height}{symmetric-walls:|, symmetric}")},cube:{describeConfig:w("{type-of-solid:Tetrahedron|Cube|Octahedron|Icosahedron}, {width-top}x{height-bottom}")},dominosa:{describeConfig:w("Order {maximum-number-on-dominoes}, {difficulty:Trivial|Basic|Hard|Extreme|Ambiguous}")},fifteen:{describeConfig:w("{width}x{height}"),darkMode:{paletteSwaps:[[2,3]]}},filling:{describeConfig:w("{width}x{height}")},flip:{describeConfig:w("{width}x{height} {shape-type:Crosses|Random}")},flood:{describeConfig:w("{width}x{height}, {colours} colours{extra-moves-permitted}",{"extra-moves-permitted":e=>Number(e)>0?`, ${e} extra moves`:""}),darkMode:{paletteOverrides:{1:!1},paletteSwaps:[[12,13]]}},galaxies:{describeConfig:w("{width}x{height} {difficulty:Normal|Unreasonable}"),darkMode:{paletteOverrides:{6:.8}}},group:{describeConfig:w("{grid-size}x{grid-size} {difficulty:Trivial|Normal|Hard|Extreme|Unreasonable}{show-identity:, identity hidden|}")},guess:{describeConfig:w("{pegs-per-guess}x{guesses}, {colours} colours{allow-blanks:| + blank}{allow-duplicates:, no duplicates|}"),darkMode:{paletteOverrides:{16:!1,17:!1}}},inertia:{describeConfig:w("{width}x{height}"),darkMode:{paletteOverrides:{6:!1},paletteSwaps:[[2,3]]}},keen:{describeConfig:w("{grid-size}x{grid-size} {difficulty:Easy|Normal|Hard|Extreme|Unreasonable}{multiplication-only:|, multiplication only}")},lightup:{describeConfig:w("{width}x{height} {difficulty:easy|tricky|hard}{percentage-of-black-squares}{symmetry}",{"percentage-of-black-squares":e=>String(e)==="20"?"":`, ${e}% black squares`,symmetry:(e,t,a)=>{const o=Number(a.width),i=Number(a.height),r=o===i&&o*i<50?4:2,s=Number(e),n=["no symmetry","2-way mirror","2-way rotational","4-way mirror","4-way rotational"][s];return s===r?"":`, ${n}`}}),darkMode:{paletteOverrides:{2:[.5,0,0],3:[.95,0,0]}}},loopy:{describeConfig:w("{width}x{height} {grid-type} - {difficulty:Easy|Normal|Tricky|Hard}",{"grid-type":["Squares","Triangular","Honeycomb","Snub-Square","Cairo","Great-Hexagonal","Octagonal","Kites","Floret","Dodecagonal","Great-Dodecagonal","Penrose (kite/dart)","Penrose (rhombs)","Great-Great-Dodecagonal","Kagome","Compass-Dodecagonal","Hats","Spectres"]}),darkMode:{paletteOverrides:{2:.6}}},magnets:{describeConfig:w("{width}x{height} {difficulty:Easy|Tricky}{strip-clues:|, strip clues}")},map:{describeConfig:w("{width}x{height}, {regions} regions, {difficulty:Easy|Normal|Hard|Unreasonable}")},mathrax:{describeConfig:e=>{const{size:t}=e,a=["Easy","Normal","Tricky","Recursive"][Number(e.difficulty)],o=[],i=[];for(const s of["addition","subtraction","multiplication","division","equality","even-odd"])(e[`${s}-clues`]?o:i).push(s);const r=i.length===0?"":o.length<=i.length?`, only ${o.join("/")}`:`, no ${i.join("/")}`;return`${t}x${t} ${a}${r}`}},mines:{describeConfig:w("{width}x{height}, {mines} mines{ensure-solubility:, risky|}"),darkMode:{paletteOverrides:{0:[.2,0,0],10:!1,14:.8},paletteSwaps:[[0,1],[16,17]]}},mosaic:{describeConfig:w("Size: {width}x{height}{aggressive-generation}",{"aggressive-generation":(e,t,{width:a,height:o})=>{const i=Number(a)*Number(o)<900;return e===i?"":`, ${e?"slower":"faster"} generation`}}),darkMode:{paletteOverrides:{1:.6}}},net:{describeConfig:w("{width}x{height}{walls-wrap-around:| wrapping}{barrier-probability}{ensure-unique-solution:, ambiguous|}",{"barrier-probability":e=>Number(e)>0?`, ${xt(e)} barriers`:""})},netslide:{describeConfig:({width:e,height:t,...a})=>{const o=!!a["walls-wrap-around"],i=Number(a["barrier-probability"]);let r;!o&&i===1?r=" easy":!o&&i===0?r=" medium":o&&i===0?r=" hard":(r=i>0?`, ${xt(i)} barriers`:"",o&&(r+=", wrapping"));const s=Number(a["number-of-shuffling-moves"]);return`${e}x${t}${r}${s?`, ${s} shuffles`:""}`}},palisade:{describeConfig:w("{width} x {height}, regions of size {region-size}"),darkMode:{paletteOverrides:{3:.6}}},pattern:{describeConfig:w("{width}x{height}"),darkMode:{paletteOverrides:{1:!1,2:!1}}},pearl:{describeConfig:w("{width}x{height} {difficulty:Easy|Tricky}{allow-unsoluble:|, ambiguous}"),darkMode:{paletteOverrides:{0:1.15,3:!1,4:!1}}},pegs:{describeConfig:w("{board-type:Cross|Octagon|Random} {width}x{height}")},range:{describeConfig:w("{width}x{height}")},rect:{describeConfig:w("{width}x{height}{expansion-factor}{ensure-unique-solution:, ambiguous|}",{"expansion-factor":e=>Number(e)===0?"":`, ${xt(e)} expansion`})},rome:{describeConfig:w("{width}x{height} {difficulty:Easy|Normal|Tricky}")},salad:{describeConfig:e=>{const t=Number(e["game-mode"])>0,a=Number(e.size),o=Number(e.symbols),i=Number(e.difficulty)===0?"":" Extreme",r=t?`1~${o}`:`A~${String.fromCharCode(65+o-1)}`;return`${t?"Numbers":"Letters"}: ${a}x${a} ${r}${i}`}},samegame:{describeConfig:w("{width}x{height}, {no-of-colours} colours{ensure-solubility:, ambiguous|}{scoring-system:, alt. scoring|}"),darkMode:{paletteSwaps:[[12,13]]}},seismic:{describeConfig:w("{game-mode:Seismic|Tectonic}: {width}x{height} {difficulty:Easy|Hard}")},signpost:{describeConfig:w("{width}x{height}{start-and-end-in-corners:, free ends|}")},singles:{describeConfig:w("{width}x{height} {difficulty:Easy|Tricky}")},sixteen:{describeConfig:w("{width}x{height}{number-of-shuffling-moves}",{"number-of-shuffling-moves":e=>e?`, ${e} shuffles`:""}),darkMode:{paletteSwaps:[[2,3]]}},slant:{describeConfig:w("{width}x{height} {difficulty:Easy|Hard}")},slide:{describeConfig:w("{width}x{height}, {solution-length-limit}",{"solution-length-limit":e=>Number(e)<=0?"no move limit":`max ${e} moves`}),darkMode:{paletteSwaps:[[1,2],[4,5],[7,8],[10,11]]}},sokoban:{describeConfig:w("{width}x{height}"),darkMode:{paletteSwaps:[[9,10]]}},solo:{describeConfig:e=>{const t=Number(e["columns-of-sub-blocks"]),a=Number(e["rows-of-sub-blocks"]),o=!!e.jigsaw,i=!!e.killer,r=!!e.x,s=["Trivial","Basic","Intermediate","Advanced","Extreme","Unreasonable"][Number(e.difficulty)],n=["no symmetry","2-way rotation","4-way rotation","2-way mirror","2-way diagonal mirror","4-way mirror","4-way diagonal mirror","8-way mirror"][Number(e.symmetry)],l=e.symmetry===(i?0:1),c=o?`${t*a} Jigsaw`:`${t}x${a}`,d=i?s==="Trivial"?"Killer":`Killer ${s}`:s,u=l?"":`, ${n}`;return`${c} ${d}${r?" X":""}${u}`},darkMode:{paletteOverrides:{2:.8}}},spokes:{describeConfig:w("{width}x{height} {difficulty:Easy|Tricky|Hard}")},sticks:{describeConfig:w("{width}x{height}{percentage-of-black-squares}{symmetry}",{"percentage-of-black-squares":e=>String(e)==="20"?"":`, ${e}% black squares`,symmetry:[", no symmetry",", 2-way mirror","",", 4-way mirror",", 4-way rotational"]})},subsets:{},tents:{describeConfig:w("{width}x{height} {difficulty:Easy|Tricky}"),darkMode:{paletteOverrides:{2:.5}}},towers:{describeConfig:w("{grid-size}x{grid-size} {difficulty:Easy|Hard|Extreme|Unreasonable}")},tracks:{describeConfig:w("{width}x{height} {difficulty:Easy|Tricky|Hard}{disallow-consecutive-1-clues:, allow adjacent 1’s|}")},twiddle:{describeConfig:e=>{const t=Number(e["rotating-block-size"]),a=t===2?"":`, rotating ${t}x${t} blocks`,o=[];e["one-number-per-row"]&&o.push("rows only"),e["orientation-matters"]&&o.push("orientable"),!o.length&&!a&&o.push("normal");const i=o.length?` ${o.join(", ")}`:"",r=Number(e["number-of-shuffling-moves"])?`, ${Number(e["number-of-shuffling-moves"])} shuffles`:"";return`${e.width}x${e.height}${i}${a}${r}`},darkMode:{paletteSwaps:[[2,4],[3,5],[6,7]]}},undead:{describeConfig:w("{width}x{height} {difficulty:Easy|Normal|Tricky}")},unequal:{describeConfig:w("{mode:Unequal|Adjacent}: {size}x{size} {difficulty:Trivial|Easy|Tricky|Extreme|Recursive}")},unruly:{describeConfig:w("{width}x{height} {difficulty:Trivial|Easy|Normal}{unique-rows-and-columns:|, unique}"),darkMode:{paletteOverrides:{3:!1,4:!1,5:!1,6:!1,7:!1,8:!1}}},untangle:{describeConfig:w("{number-of-points} points"),paletteBgIndex:1}};function w(e,t){return a=>e.replace(/\{(?<field>[a-z0-9-]+)(?::(?<options>[^}]*))?}/g,(o,i,r)=>{const s=a[i];if(s===void 0)return o;const n=t?.[i];return n!==void 0?typeof n=="function"?n(s,i,a):n[Number(s)]??String(s):r!==void 0?r.split("|")[Number(s)]??"":String(s)})}function xt(e){return`${Math.round(Number(e)*100)}%`}const ht=ni({worker:[]});ht&&li(ht);class Vt{constructor(t,a,o,{displayName:i,canConfigure:r,canSolve:s,needsRightButton:n,isTimed:l,wantsStatusbar:c}){this.puzzleId=t,this.worker=a,this.workerPuzzle=o,this._size="<unknown>",this.notifyChange=async u=>{function h(y,g){y.get()!==g&&y.set(g)}switch(u.type){case"game-id-change":{h(this._currentGameId,u.currentGameId),h(this._randomSeed,u.randomSeed);break}case"game-state-change":this.purgeInvalidCheckpoints(u.totalMoves),h(this._status,u.status),h(this._currentMove,u.currentMove),h(this._totalMoves,u.totalMoves),h(this._canUndo,u.canUndo),h(this._canRedo,u.canRedo);break;case"params-change":h(this._params,u.params);break;case"status-bar-change":h(this._statusbarText,u.statusBarText);break;default:throw new Error(`Unknown notifyChange type ${u.type}`)}this.captureSentryContext()},this._status=j("ongoing"),this._currentMove=j(0),this._totalMoves=j(0),this._canUndo=j(!1),this._canRedo=j(!1),this._params=j(""),this._currentParams=Oo(()=>this.randomSeed?.split("#",1).at(0)??this.currentGameId?.split(":",1).at(0)),this._currentGameId=j(void 0),this._randomSeed=j(void 0),this._canFormatAsText=j(!1),this._statusbarText=j(""),this._generatingGame=j(!1),this.hasSize=!1,this._checkpoints=j(new Set),this.timerComplete=Promise.resolve(),this.notifyTimerState=u=>{this.timerCompleteResolve?.(),this.timerCompleteResolve=void 0,u&&(this.timerComplete=new Promise(h=>{this.timerCompleteResolve=h}))};const d=qa[t];this.displayName=d?.name??i,this.isUnfinished=d?.unfinished??!1,this.canConfigure=r,this.canSolve=s,this.needsRightButton=n,this.isTimed=l,this.wantsStatusbar=c}static async create(t){ci("puzzleId",t);const a=new Worker(new URL("/assets/worker-DsCRCdmv.js",import.meta.url),{type:"module",name:`puzzle-worker-${t}`});ht&&(ht.addWorker(a),a.addEventListener("message",n=>{typeof n.data=="object"&&n.data!==null&&"type"in n.data&&n.data.type==="sentry-breadcrumb"&&"breadcrumb"in n.data&&typeof n.data.breadcrumb=="object"&&n.data.breadcrumb!==null&&di(n.data.breadcrumb)})),Do(a);const i=await Qa(a).create(t),r=await i.getStaticProperties(),s=new Vt(t,a,i,r);return await s.initialize(),s}async initialize(){await this.workerPuzzle.setCallbacks(Tt(this.notifyChange),Tt(this.notifyTimerState))}async delete(){await this.detachCanvas(),await this.workerPuzzle.delete(),this.workerPuzzle[Ka](),Lo(this.worker),this.worker.terminate()}captureSentryContext(){ui("Puzzle",{"Puzzle ID":this.puzzleId,Params:this.params,"Game ID":this.currentGameId,"Random Seed":this.randomSeed,"Current Move":this.currentMove,"Total Moves":this.totalMoves,Size:this._size})}get status(){return this._status.get()}get isSolved(){return this.status==="solved"||this.status==="solved-with-help"}get currentMove(){return this._currentMove.get()}get totalMoves(){return this._totalMoves.get()}get canUndo(){return this._canUndo.get()}get canRedo(){return this._canRedo.get()}get params(){return this._params.get()}get currentParams(){return this._currentParams.get()}get currentGameId(){return this._currentGameId.get()}get randomSeed(){return this._randomSeed.get()}get canFormatAsText(){return this._canFormatAsText.get()}get statusbarText(){return this._statusbarText.get()}get generatingGame(){return this._generatingGame.get()}async newGame(){this._generatingGame.set(!0),await this.workerPuzzle.newGame(),this._generatingGame.set(!1)}async newGameFromId(t){return this.workerPuzzle.newGameFromId(t)}async restartGame(){await this.workerPuzzle.restartGame()}async undo(){await this.workerPuzzle.undo()}async redo(){await this.workerPuzzle.redo()}async solve(){return this.workerPuzzle.solve()}async processKey(t){return this.workerPuzzle.processKey(t)}async processMouse({x:t,y:a},o){return this.workerPuzzle.processMouse({x:t,y:a},o)}async requestKeys(){return this.workerPuzzle.requestKeys()}async getParams(){return this.workerPuzzle.getParams()}async setParams(t){return this.workerPuzzle.setParams(t)}async getParamsDescription(t){const o=(await this.getPresets(!0)).find(r=>r.params===t);if(o)return o.title;const i=ao[this.puzzleId];if(i?.describeConfig){const r=await this.decodeCustomParams(t);return typeof r=="string"?`ERROR: '${t}': ${r}`:i.describeConfig(r)}return"Custom type"}async getPresets(t=!1){let a=await this.workerPuzzle.getPresets();if(t){const o=i=>i.flatMap(r=>[r,...r.submenu?o(r.submenu):[]]);a=o(a)}return a}async getCustomParamsConfig(){return this.workerPuzzle.getCustomParamsConfig()}async getCustomParams(){return this.workerPuzzle.getCustomParams()}async setCustomParams(t){return this.workerPuzzle.setCustomParams(t)}async decodeCustomParams(t){return this.workerPuzzle.decodeCustomParams(t)}async encodeCustomParams(t){return this.workerPuzzle.encodeCustomParams(t)}async getPreferencesConfig(){return this.workerPuzzle.getPreferencesConfig()}async getPreferences(){return this.workerPuzzle.getPreferences()}async savePreferences(){return this.workerPuzzle.savePreferences()}async loadPreferences(t){return this.workerPuzzle.loadPreferences(st(t,[t.buffer]))}async setPreferences(t){return this.workerPuzzle.setPreferences(t)}async redraw(){if(!this.hasSize){console.error("Ignoring Puzzle.redraw() called before Puzzle.size()");return}await this.workerPuzzle.redraw()}async getColourPalette(t){return this.workerPuzzle.getColourPalette(t)}async size(t,a,o){if(!this.currentGameId)return console.error("Ignoring Puzzle.size() called before game initialized"),t;const i=await this.workerPuzzle.size(t,a,o);return this.hasSize=!0,i}async preferredSize(){return this.workerPuzzle.preferredSize()}async formatAsText(){return this.workerPuzzle.formatAsText()}async loadGame(t){return this.workerPuzzle.loadGame(st(t,[t.buffer]))}async saveGame(){const t=this.workerPuzzle.saveGame();return ra().clearAttachments(),ra().addAttachment({filename:"save.txt",data:await t,contentType:"text/plain"}),t}get checkpoints(){return this._checkpoints.get()}set checkpoints(t){this._checkpoints.set(new Set(t))}addCheckpoint(t){const a=t??this.currentMove;if(!this.checkpoints.has(a)){const o=new Set(this.checkpoints);o.add(a),this._checkpoints.set(o)}}removeCheckpoint(t){if(this.checkpoints.has(t)){const a=new Set(this.checkpoints);a.delete(t),this._checkpoints.set(a)}}async goToCheckpoint(t){if(t<0||t>this.totalMoves)throw new RangeError(`Move ${t} out of bounds`);const a=t-this.currentMove;if(a<0)for(let o=0;o<-a;o++)await this.undo();else if(a>0)for(let o=0;o<a;o++)await this.redo()}purgeInvalidCheckpoints(t){if(t<this.totalMoves&&this.checkpoints.size>0){const a=new Set(this.checkpoints);for(const o of a)o>t&&a.delete(o);a.size<this.checkpoints.size&&this._checkpoints.set(a)}}async attachCanvas(t,a){await this.workerPuzzle.attachCanvas(st(t,[t]),a),await Ro()}async detachCanvas(){await this.workerPuzzle.detachCanvas()}async resizeDrawing({w:t,h:a},o){this._size=`${t}x${a} @ ${o}x`,this.captureSentryContext(),await this.workerPuzzle.resizeDrawing({w:t,h:a},o)}async setDrawingPalette(t){await this.workerPuzzle.setDrawingPalette(t)}async setDrawingFontInfo(t){await this.workerPuzzle.setDrawingFontInfo(t)}async getImage(t){return this.workerPuzzle.getImage(t)}copyImage(t="image/png"){const a=this.getImage({type:t});return navigator.clipboard.write([new ClipboardItem({[t]:a})])}}var Pi=Object.defineProperty,Ii=Object.getOwnPropertyDescriptor,we=(e,t,a,o)=>{for(var i=o>1?void 0:o?Ii(t,a):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(i=(o?s(t,a,i):s(i))||i);return o&&i&&Pi(t,a,i),i};let te=class extends ce(ge){get puzzle(){return this._puzzle}async connectedCallback(){super.connectedCallback(),this._puzzle||await this._loadPuzzle()}async disconnectedCallback(){super.disconnectedCallback(),await this._unloadPuzzle()}render(){return f`<slot></slot>`}async willUpdate(e){e.has("puzzleId")&&this._puzzle&&this._puzzle.puzzleId!==this.puzzleId&&(await this._unloadPuzzle(),await this._loadPuzzle()),this.puzzle&&(this.puzzle.currentGameId&&(this.gameId=this.puzzle.currentGameId),this.puzzle.currentParams&&(this.params=this.puzzle.currentParams),this.checkpoints=this.puzzle.checkpoints,this.puzzle.isTimed&&this.puzzle.statusbarText!==null&&(this.statusbarText=this.puzzle.statusbarText)),this.currentMove=this.puzzle?.currentMove}async updated(e){this.puzzle?.currentParams&&e.has("params")&&this.dispatchPuzzleEvent("puzzle-params-change"),this.puzzle?.currentGameId&&(e.has("gameId")||e.has("currentMove")||e.has("checkpoints")||e.has("statusbarText"))&&this.dispatchPuzzleEvent("puzzle-game-state-change")}async _loadPuzzle(){if(!this.puzzleId)throw new Error("puzzle-context requires puzzleid");if(this._puzzle=await Vt.create(this.puzzleId),!this.dispatchPuzzleEvent("puzzle-loaded").defaultPrevented){if(this.params){const t=await this._puzzle.setParams(this.params);if(t)throw new Error(`Invalid puzzle-view params="${this.params}": ${t}`)}if(this.gameId!=="none")if(this.gameId){const t=await this._puzzle.newGameFromId(this.gameId);if(t)throw new Error(`Invalid puzzle-view gameid="${this.gameId}": ${t}`)}else await this._puzzle.newGame()}}async _unloadPuzzle(){await this._puzzle?.delete(),this._puzzle=void 0}dispatchPuzzleEvent(e){if(!this.puzzle)throw new Error(`puzzle-context dispatchEvent("${e}") before puzzle initialized`);const t=new CustomEvent(e,{bubbles:!0,cancelable:!0,composed:!0,detail:{puzzle:this.puzzle}});return this.dispatchEvent(t),t}};te.styles=U`
    :host {
      display: contents;
    }
  `;we([m({type:String,attribute:"puzzleid"})],te.prototype,"puzzleId",2);we([m({type:String,reflect:!0,attribute:"gameid"})],te.prototype,"gameId",2);we([m({type:String,reflect:!0})],te.prototype,"params",2);we([yi({context:Se}),v()],te.prototype,"_puzzle",2);we([v()],te.prototype,"currentMove",2);we([v()],te.prototype,"checkpoints",2);we([v()],te.prototype,"statusbarText",2);te=we([D("puzzle-context")],te);const oo="important",_i=" !"+oo,io=Va(class extends Ao{constructor(e){if(super(e),e.type!==No.ATTRIBUTE||e.name!=="style"||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,a)=>{const o=e[a];return o==null?t:t+`${a=a.includes("-")?a:a.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(e,[t]){const{style:a}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const o of this.ft)t[o]==null&&(this.ft.delete(o),o.includes("-")?a.removeProperty(o):a[o]=null);for(const o in t){const i=t[o];if(i!=null){this.ft.add(o);const r=typeof i=="string"&&i.endsWith(_i);o.includes("-")||r?a.setProperty(o,r?i.slice(0,-11):i,r?oo:""):a[o]=i}}return Uo}}),Ti="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2010%2040'%3e%3cpath%20stroke='grey'%20fill='none'%20stroke-width='1'%20stroke-linejoin='round'%20stroke-linecap='round'%20d='M1,5%20h8%20M5,5%20v31%20m-4-4%20l4,4%20l4,-4'/%3e%3c/svg%3e",Oi="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2010%2010'%3e%3ccircle%20cx='5'%20cy='5'%20r='4'%20fill='grey'%20stroke='white'%20stroke-width='20%25'/%3e%3c/svg%3e";var Di=U`
  :host {
    display: inline-flex;
  }

  .button-group {
    display: flex;
    position: relative;
    isolation: isolate;
    flex-wrap: wrap;
    gap: 1px;

    @media (hover: hover) {
      > :hover,
      &::slotted(:hover) {
        z-index: 1;
      }
    }

    /* Focus and checked are always on top */
    > :focus,
    &::slotted(:focus),
    > [aria-checked='true'],
    &::slotted([aria-checked='true']),
    > [checked],
    &::slotted([checked]) {
      z-index: 2 !important;
    }
  }
  :host([orientation='vertical']) .button-group {
    flex-direction: column;
  }

  /* Button groups with at least one outlined button will not have a gap and instead have borders overlap */
  .button-group.has-outlined {
    gap: 0;

    &:not([aria-orientation='vertical']):not(.button-group-vertical)::slotted(:not(:first-child)) {
      margin-inline-start: calc(-1 * var(--border-width));
    }

    &:is([aria-orientation='vertical'], .button-group-vertical)::slotted(:not(:first-child)) {
      margin-block-start: calc(-1 * var(--border-width));
    }
  }
`;var me=class extends qe{constructor(){super(...arguments),this.disableRole=!1,this.hasOutlined=!1,this.label="",this.orientation="horizontal"}updated(e){super.updated(e),e.has("orientation")&&(this.setAttribute("aria-orientation",this.orientation),this.updateClassNames())}handleFocus(e){Ae(e.target)?.classList.add("button-focus")}handleBlur(e){Ae(e.target)?.classList.remove("button-focus")}handleMouseOver(e){Ae(e.target)?.classList.add("button-hover")}handleMouseOut(e){Ae(e.target)?.classList.remove("button-hover")}handleSlotChange(){this.updateClassNames()}updateClassNames(){const e=[...this.defaultSlot.assignedElements({flatten:!0})];this.hasOutlined=!1,e.forEach(t=>{const a=e.indexOf(t),o=Ae(t);o&&(o.appearance==="outlined"&&(this.hasOutlined=!0),o.classList.add("wa-button-group__button"),o.classList.toggle("wa-button-group__horizontal",this.orientation==="horizontal"),o.classList.toggle("wa-button-group__vertical",this.orientation==="vertical"),o.classList.toggle("wa-button-group__button-first",a===0),o.classList.toggle("wa-button-group__button-inner",a>0&&a<e.length-1),o.classList.toggle("wa-button-group__button-last",a===e.length-1),o.classList.toggle("wa-button-group__button-radio",o.tagName.toLowerCase()==="wa-radio-button"))})}render(){return f`
      <slot
        part="base"
        class=${he({"button-group":!0,"has-outlined":this.hasOutlined})}
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        aria-orientation=${this.orientation}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
        @slotchange=${this.handleSlotChange}
      ></slot>
    `}};me.css=[Di];p([A("slot")],me.prototype,"defaultSlot",2);p([v()],me.prototype,"disableRole",2);p([v()],me.prototype,"hasOutlined",2);p([m()],me.prototype,"label",2);p([m({reflect:!0})],me.prototype,"orientation",2);me=p([D("wa-button-group")],me);function Ae(e){const t="wa-button, wa-radio-button";return e.closest(t)??e.querySelector(t)}var Li=Object.defineProperty,Ri=Object.getOwnPropertyDescriptor,Fe=(e,t,a,o)=>{for(var i=o>1?void 0:o?Ri(t,a):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(i=(o?s(t,a,i):s(i))||i);return o&&i&&Li(t,a,i),i};let ke=class extends ce(ge){constructor(){super(...arguments),this.timelineImageStyles={},this.renderedColorScheme=""}updateSVGDataUrls(){const e=getComputedStyle(this),t=e.getPropertyValue("--timeline-color").trim(),a=e.getPropertyValue("--background-color").trim(),o=encodeURIComponent(t),i=encodeURIComponent(a),r=Ti.replace("grey",o).replace("white",i),s=Oi.replace("grey",o).replace("white",i);this.timelineImageStyles={"--timeline-arrow-image":`url("${r}")`,"--timeline-dot-image":`url("${s}")`}}willUpdate(){this.renderedColorScheme=Pt.get()}updated(e){e.has("renderedColorScheme")&&requestAnimationFrame(()=>this.updateSVGDataUrls())}render(){return f`
      <wa-button-group>
        <wa-button
            ?disabled=${!this.puzzle?.canUndo}
            @pointerdown=${this.handleUndoRedoPointerDown}
            @click=${this.handleUndo}>
          <wa-icon name="undo" label="Undo"></wa-icon>
        </wa-button>
        ${this.renderHistoryButton()}
        <wa-button
            ?disabled=${!this.puzzle?.canRedo}
            @pointerdown=${this.handleUndoRedoPointerDown}
            @click=${this.handleRedo}>
          <wa-icon name="redo" label="Redo"></wa-icon>
        </wa-button>
      </wa-button-group>
    `}renderHistoryButton(){return f`
      <wa-dropdown 
          placement="top"
          @wa-select=${this.handleSelectCheckpoint}
      >
        <wa-button slot="trigger" with-caret>
          <wa-icon name="history" label="History"></wa-icon>
        </wa-button>

        <header>
          History
          <wa-button appearance="plain" @click=${this.handleHistoryCloseButton}>
            <wa-icon name="xmark" library="system" label="Close"></wa-icon>
          </wa-button>
        </header>
        
        <div id="list" style=${io(this.timelineImageStyles)}>
          ${this.renderHistoryItems()}
        </div>

        <wa-divider></wa-divider>
        <wa-dropdown-item @click=${this.handleSaveCheckpoint}>
          <wa-icon slot="icon" name="checkpoint-add"></wa-icon>
          Save checkpoint
        </wa-dropdown-item>
      </wa-dropdown>
    `}renderHistoryItems(){const e=[];if(!this.puzzle)return e;const t=0,a=this.puzzle.totalMoves,o=this.puzzle.checkpoints;o.has(t)||e.push(this.renderHistoryItem({label:"Start",move:t}));let i=t;for(const r of[...o].sort())e.push(...this.renderHistorySpace({start:i+1,end:r-1}),this.renderHistoryItem({label:f`Checkpoint <small>(${r+1})</small>`,move:r,icon:"history-checkpoint",canDelete:!0})),i=r;return e.push(...this.renderHistorySpace({start:i+1,end:a-1})),a>t&&!o.has(a)&&e.push(this.renderHistoryItem({label:"Last move",move:a})),e}renderHistoryItem({label:e,move:t,icon:a,canDelete:o=!1}){const i=t===this.puzzle?.currentMove&&this.puzzle?.totalMoves>0,r=i?"history-current-move":a??P,s=i?"Current undo":P,n=o?f`
        <wa-button slot="details" appearance="plain" size="small"
          @click=${this.handleRemoveCheckpoint}
        >
          <wa-icon name="checkpoint-remove" label="Delete checkpoint"></wa-icon>
        </wa-button>`:P;return f`
      <wa-dropdown-item value=${t} role="listitem">
        <wa-icon slot="icon" name=${r} label=${s}></wa-icon>
        ${e}
        ${n}
      </wa-dropdown-item>
    `}renderHistorySpace({start:e,end:t}){const a=[],o=t-e+1;if(o<1)return a;const i=this.puzzle?.currentMove??0;return i>=e&&i<=t?(i>e&&a.push(this.renderSpacer(i-e)),a.push(f`
        <div class="undo-point">
          <wa-icon name="history-current-move"></wa-icon>
          <span>Current undo <small>(${i+1})</small></span>
        </div>
      `),i<t&&a.push(this.renderSpacer(t-i))):a.push(this.renderSpacer(o)),a}renderSpacer(e){return f`
      <div class="spacer" data-moves=${e}>
        ${e>1?f`<small>&hellip; ${e} moves &hellip;</small>`:P}
      </div>
    `}handleHistoryCloseButton(){const e=this.dropdown;e&&(e.open=!1)}handleUndoRedoPointerDown(e){e.isPrimary&&this.dropdown?.open&&e.stopPropagation()}async handleUndo(){await this.puzzle?.undo()}async handleRedo(){await this.puzzle?.redo()}async handleSelectCheckpoint(e){const t=e.detail.item.value,a=Number.parseInt(t,10);Number.isFinite(a)&&await this.puzzle?.goToCheckpoint(a)}handleRemoveCheckpoint(e){const t=e.target instanceof HTMLElement?e.target.closest("[value]"):null;if(t){e.stopPropagation();const a=t.getAttribute("value")??"-1",o=Number.parseInt(a,10);Number.isFinite(o)&&this.puzzle?.removeCheckpoint(o)}}handleSaveCheckpoint(e){e.stopPropagation(),this.puzzle?.addCheckpoint()}};ke.styles=[xe,U`
      :host {
        --timeline-color: var(--wa-color-neutral-border-normal);
        --background-color: var(--wa-color-surface-raised); /* match wa-dropdown */
        --dot-size: 5px;
      }
      
      wa-button-group {
        /* Collapse the gap between buttons, overlapping the borders.
         * Stack the dropdown trigger (which is never disabled) above
         * the other buttons to avoid partly-disabled border appearance. */
        &::part(base) {
          gap: 0;
          flex-wrap: nowrap;
        }
        wa-button[slot="trigger"]::part(base) {
          margin-inline: calc(-1 * var(--wa-border-width-s));
          position: relative;
          z-index: 1;
        }
      }
  
      wa-button {
        /* Disable double-tap to zoom on keys that might be tapped quickly.
         * (Ineffective in iOS Safari; see preventDoubleTapZoom click handler.)
         */
        touch-action: pinch-zoom;
      }
  
      header {
        display: flex;
        align-items: center;
  
        /* The plain "Close" button effectively pads top/bottom and part of right */
        /*padding: 0.5em 1em;*/
        padding-inline-start: 1em;
        padding-inline-end: 0.5em;
        background-color: var(--background-color);
        /*font-family: var(--wa-font-family-heading);*/
        font-weight: var(--wa-font-weight-semibold);
        position: sticky;
        inset-block-start: -0.25em; /* wa-dropdown::part(menu) padding */
        z-index: 1;
        
        wa-button {
          margin-inline-start: auto;
        }
      }
      
      small {
        color: var(--wa-color-text-quiet);
        font-size: var(--wa-font-size-smaller);
        font-style: italic;
      }
      
      #list {
        position: relative;
  
        &::before {
          display: block;
          content: "";
          position: absolute;
          inset: 0.75em calc(1.5em - 7px); /* padding + icon-width/2 = 1em + 1.25em/2 */
  
          border-image-source: var(--timeline-arrow-image);
          border-image-slice: 25% 0 25% 100%;
          border-width: 10px;
          border-style: solid;
          
          z-index: 1;
          pointer-events: none;
        }
        
        wa-icon {
          position: relative;
          z-index: 2; /* above the timeline */
          min-width: 1em; /* for empty icons */
        }
        
        wa-dropdown-item {
          /* dropdown-item's "isolate" prevents our wa-icon z-index from working */
          isolation: unset; 
        }
      }
  
      wa-icon[name="history-checkpoint"]::part(svg),
      wa-icon[name="history-current-move"]::part(svg)
      {
        /* Use background fill on icons that overlap the timeline */
        fill: var(--background-color) !important;
      }
      
      wa-dropdown-item wa-button {
        /* Counteract doubled padding around delete buttons */
        margin: -0.5em;
      }
      
      .undo-point {
        /* Mimic a wa-dropdown-item */
        box-sizing: border-box;
        padding: 0.5em 1em;
        line-height: var(--wa-line-height-condensed);
  
        display: flex;
        align-items: center;
  
        wa-icon {
          font-size: var(--wa-font-size-smaller);
          margin-inline-end: 0.75em;
        }
        span {
          display: block;
          color: var(--wa-color-text-quiet);
        }
      }
  
      .spacer {
        box-sizing: border-box;
        padding: 0 1em;
        line-height: 1;
        
        display: flex;
        align-items: center;
  
        small {
          padding: 0.25em 0.5em;
        }
  
        &::before {
          display: block;
          content: "";
          height: 1.5em;
          width: 1px;
          font-size: var(--wa-font-size-smaller); /* match em calcs to slotted icon */
          margin-inline-start: calc(0.5em - 1px);
          margin-inline-end: calc(0.75em - 1px);
          
          border-image-source: var(--timeline-dot-image);
          border-image-slice: 0 0 0 100%;
          border-image-outset: 0 2.5px;
          border-image-repeat: round;
          border-inline-start: var(--dot-size) solid transparent;
          
          z-index: 2;
          pointer-events: none;
        }
  
        &[data-moves="1"] {
          /* Try to size it to a single border dot */
          padding-block: 0;
          height: var(--dot-size);
          &::before {
            max-height: var(--dot-size);
          }
        }
        &[data-moves="2"]::before {
          max-height: calc(2 * var(--dot-size));
        }
        &[data-moves="3"]::before {
          max-height: calc(3 * var(--dot-size));
        }
        &[data-moves="4"]::before {
          max-height: calc(4 * var(--dot-size));
        }
        /* This doesn't work yet:
        &[data-moves] {
          max-height: calc(attr(data-moves type(<number>)) * var(--dot-size));
        }
        */
      }
    `];Fe([Oe({context:Se,subscribe:!0}),v()],ke.prototype,"puzzle",2);Fe([v()],ke.prototype,"timelineImageStyles",2);Fe([v()],ke.prototype,"renderedColorScheme",2);Fe([A("wa-dropdown")],ke.prototype,"dropdown",2);ke=Fe([D("puzzle-history")],ke);var Ai=Object.defineProperty,Ni=Object.getOwnPropertyDescriptor,je=(e,t,a,o)=>{for(var i=o>1?void 0:o?Ni(t,a):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(i=(o?s(t,a,i):s(i))||i);return o&&i&&Ai(t,a,i),i};let se=class extends ce(ge){constructor(){super(...arguments),this.labelIcons=se.defaultLabelIcons,this.renderVirtualKey=e=>{const t=e.label,a=this.labelIcons[t],o=he({single:a||t.length===1}),i=a?f`<wa-icon name=${a} label=${t}></wa-icon>`:t;return f`
      <wa-button 
          class=${o} 
          data-button=${e.button} 
          tabindex="-1"
        >${i}</wa-button>
    `}}async willUpdate(){const e=this.puzzle?.currentParams;e!==this.renderedParams&&(this.renderedParams=e,await this.loadKeyLabels())}async loadKeyLabels(){this.keyLabels=await this.puzzle?.requestKeys()??[]}render(){if(!this.keyLabels||this.keyLabels.length===0)return P;const e=this.keyLabels.length>5?Math.floor(this.keyLabels.length/2):this.keyLabels.length,a=[this.keyLabels.slice(0,e),this.keyLabels.slice(e)].map(o=>f`
          <div part="group">${o.map(this.renderVirtualKey)}</div>`);return f`
      <div
          part="base"
          @click=${this.handleButtonPress}
          @touchstart=${this.handleButtonPress}
        >${a}</div>
    `}async handleButtonPress(e){if(!(e.target instanceof HTMLElement))return;const a=e.target.closest("[data-button]")?.getAttribute("data-button")??null;if(a!==null){e.preventDefault();const o=Number.parseInt(a,10);Number.isNaN(o)||await this.puzzle?.processKey(o)}}};se.defaultLabelIcons={Clear:"key-clear",Marks:"key-marks",Hints:"key-hints"};se.styles=[xe,U`
      :host {
        display: contents;
      }
      
      [part~="base"] {
        --gap: var(--wa-space-s);

        display: flex;
        flex-wrap: wrap;
        gap: var(--gap);
      }
  
      [part~="group"] {
        display: flex;
        gap: var(--gap);
      }
  
      .single {
        /* Make all single-char buttons the same width, for uniform layout.
         * (This cheats the horizontal padding just a bit.) */
        width: var(--wa-form-control-height);
      }
      
      wa-button {
        /* Disable double-tap to zoom on keys that might be tapped quickly.
         * (Ineffective in iOS Safari; see preventDoubleTapZoom click handler.)
         */
        touch-action: pinch-zoom;
      }
    `];je([Oe({context:Se,subscribe:!0}),v()],se.prototype,"puzzle",2);je([m({type:Object})],se.prototype,"labelIcons",2);je([v()],se.prototype,"keyLabels",2);je([qt({passive:!1})],se.prototype,"handleButtonPress",1);se=je([D("puzzle-keys")],se);class ro{constructor(t,{target:a,config:o,callback:i,skipInitial:r}){this.t=new Set,this.o=!1,this.i=!1,this.h=t,a!==null&&this.t.add(a??t),this.l=o,this.o=r??this.o,this.callback=i,window.ResizeObserver?(this.u=new ResizeObserver(s=>{this.handleChanges(s),this.h.requestUpdate()}),t.addController(this)):console.warn("ResizeController error: browser does not support ResizeObserver.")}handleChanges(t){this.value=this.callback?.(t,this.u)}hostConnected(){for(const t of this.t)this.observe(t)}hostDisconnected(){this.disconnect()}async hostUpdated(){!this.o&&this.i&&this.handleChanges([]),this.i=!1}observe(t){this.t.add(t),this.u.observe(t,this.l),this.i=!0,this.h.requestUpdate()}unobserve(t){this.t.delete(t),this.u.unobserve(t)}disconnect(){this.u.disconnect()}target(t){return Ui(this,t)}}const Ui=Va(class extends ii{constructor(){super(...arguments),this.observing=!1}render(e,t){}update(e,[t,a]){this.controller=t,this.part=e,this.observe=a,a===!1?(t.unobserve(e.element),this.observing=!1):this.observing===!1&&(t.observe(e.element),this.observing=!0)}disconnected(){this.controller?.unobserve(this.part.element),this.observing=!1}reconnected(){this.observe!==!1&&this.observing===!1&&(this.controller?.observe(this.part.element),this.observing=!0)}});function Ot(e,t,a){return e?t(e):a?.(e)}var so=class extends Event{constructor(){super("wa-clear",{bubbles:!0,cancelable:!1,composed:!0})}};var Gi=U`
  :host {
    border-width: 0;
  }

  .text-field {
    flex: auto;
    display: flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    transition: inherit;
    height: var(--wa-form-control-height);
    border-color: var(--wa-form-control-border-color);
    border-radius: var(--wa-form-control-border-radius);
    border-style: var(--wa-form-control-border-style);
    border-width: var(--wa-form-control-border-width);
    cursor: text;
    color: var(--wa-form-control-value-color);
    font-size: var(--wa-form-control-value-font-size);
    font-family: inherit;
    font-weight: var(--wa-form-control-value-font-weight);
    line-height: var(--wa-form-control-value-line-height);
    vertical-align: middle;
    width: 100%;
    transition:
      background-color var(--wa-transition-normal),
      border var(--wa-transition-normal),
      outline var(--wa-transition-fast);
    transition-timing-function: var(--wa-transition-easing);
    background-color: var(--wa-form-control-background-color);
    box-shadow: var(--box-shadow);
    padding: 0 var(--wa-form-control-padding-inline);

    &:focus-within {
      outline: var(--wa-focus-ring);
      outline-offset: var(--wa-focus-ring-offset);
    }

    /* Style disabled inputs */
    &:has(:disabled) {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }

  /* Appearance modifiers */
  :host([appearance='outlined']) .text-field {
    background-color: var(--wa-form-control-background-color);
    border-color: var(--wa-form-control-border-color);
  }

  :host([appearance='filled']) .text-field {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-color-neutral-fill-quiet);
  }

  :host([appearance='filled-outlined']) .text-field {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-form-control-border-color);
  }

  :host([pill]) .text-field {
    border-radius: var(--wa-border-radius-pill) !important;
  }

  .text-field {
    /* Show autofill styles over the entire text field, not just the native <input> */
    &:has(:autofill),
    &:has(:-webkit-autofill) {
      background-color: var(--wa-color-brand-fill-quiet) !important;
    }

    input,
    textarea {
      /*
      Fixes an alignment issue with placeholders.
      https://github.com/shoelace-style/webawesome/issues/342
    */
      height: 100%;

      padding: 0;
      border: none;
      outline: none;
      box-shadow: none;
      margin: 0;
      cursor: inherit;
      -webkit-appearance: none;
      font: inherit;

      /* Turn off Safari's autofill styles */
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus,
      &:-webkit-autofill:active {
        -webkit-background-clip: text;
        background-color: transparent;
        -webkit-text-fill-color: inherit;
      }
    }
  }

  input {
    flex: 1 1 auto;
    min-width: 0;
    height: 100%;
    transition: inherit;

    /* prettier-ignore */
    background-color: rgb(118 118 118 / 0); /* ensures proper placeholder styles in webkit's date input */
    height: calc(var(--wa-form-control-height) - var(--border-width) * 2);
    padding-block: 0;
    color: inherit;

    &:autofill {
      &,
      &:hover,
      &:focus,
      &:active {
        box-shadow: none;
        caret-color: var(--wa-form-control-value-color);
      }
    }

    &::placeholder {
      color: var(--wa-form-control-placeholder-color);
      user-select: none;
      -webkit-user-select: none;
    }

    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
      -webkit-appearance: none;
    }

    &:focus {
      outline: none;
    }
  }

  textarea {
    &:autofill {
      &,
      &:hover,
      &:focus,
      &:active {
        box-shadow: none;
        caret-color: var(--wa-form-control-value-color);
      }
    }

    &::placeholder {
      color: var(--wa-form-control-placeholder-color);
      user-select: none;
      -webkit-user-select: none;
    }
  }

  .start,
  .end {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;

    &::slotted(wa-icon) {
      color: var(--wa-color-neutral-on-quiet);
    }
  }

  .start::slotted(*) {
    margin-inline-end: var(--wa-form-control-padding-inline);
  }

  .end::slotted(*) {
    margin-inline-start: var(--wa-form-control-padding-inline);
  }

  /*
   * Clearable + Password Toggle
   */

  .clear,
  .password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--wa-color-neutral-on-quiet);
    border: none;
    background: none;
    padding: 0;
    transition: var(--wa-transition-normal) color;
    cursor: pointer;
    margin-inline-start: var(--wa-form-control-padding-inline);

    @media (hover: hover) {
      &:hover {
        color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
      }
    }

    &:active {
      color: color-mix(in oklab, currentColor, var(--wa-color-mix-active));
    }

    &:focus {
      outline: none;
    }
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  :host([without-spin-buttons]) input[type='number'] {
    -moz-appearance: textfield;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      display: none;
    }
  }
`;var z=class extends Bt{constructor(){super(...arguments),this.assumeInteractionOn=["blur","input"],this.hasSlotController=new ja(this,"hint","label"),this.localize=new Ve(this),this.title="",this.type="text",this._value=null,this.defaultValue=this.getAttribute("value")||null,this.size="medium",this.appearance="outlined",this.pill=!1,this.label="",this.hint="",this.withClear=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.withoutSpinButtons=!1,this.required=!1,this.spellcheck=!0,this.withLabel=!1,this.withHint=!1}static get validators(){return[...super.validators,Go()]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(e){this._value!==e&&(this.valueHasChanged=!0,this._value=e)}handleChange(e){this.value=this.input.value,this.relayNativeEvent(e,{bubbles:!0,composed:!0})}handleClearClick(e){e.preventDefault(),this.value!==""&&(this.value="",this.updateComplete.then(()=>{this.dispatchEvent(new so),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})),this.input.focus()}handleInput(){this.value=this.input.value}handleKeyDown(e){ri(e,this)}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}updated(e){super.updated(e),e.has("value")&&this.customStates.set("blank",!this.value)}handleStepChange(){this.input.step=String(this.step),this.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,a="none"){this.input.setSelectionRange(e,t,a)}setRangeText(e,t,a,o="preserve"){const i=t??this.input.selectionStart,r=a??this.input.selectionEnd;this.input.setRangeText(e,i,r,o),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}formResetCallback(){this.value=this.defaultValue,super.formResetCallback()}render(){const e=this.hasUpdated?this.hasSlotController.test("label"):this.withLabel,t=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,a=this.label?!0:!!e,o=this.hint?!0:!!t,i=this.withClear&&!this.disabled&&!this.readonly,r=this.hasUpdated&&i&&(typeof this.value=="number"||this.value&&this.value.length>0);return f`
      <label part="form-control-label label" class="label" for="input" aria-hidden=${a?"false":"true"}>
        <slot name="label">${this.label}</slot>
      </label>

      <div part="base" class="text-field">
        <slot name="start" part="start" class="start"></slot>

        <input
          part="input"
          id="input"
          class="control"
          type=${this.type==="password"&&this.passwordVisible?"text":this.type}
          title=${this.title}
          name=${F(this.name)}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          placeholder=${F(this.placeholder)}
          minlength=${F(this.minlength)}
          maxlength=${F(this.maxlength)}
          min=${F(this.min)}
          max=${F(this.max)}
          step=${F(this.step)}
          .value=${Ho(this.value??"")}
          autocapitalize=${F(this.autocapitalize)}
          autocomplete=${F(this.autocomplete)}
          autocorrect=${F(this.autocorrect)}
          ?autofocus=${this.autofocus}
          spellcheck=${this.spellcheck}
          pattern=${F(this.pattern)}
          enterkeyhint=${F(this.enterkeyhint)}
          inputmode=${F(this.inputmode)}
          aria-describedby="hint"
          @change=${this.handleChange}
          @input=${this.handleInput}
          @keydown=${this.handleKeyDown}
        />

        ${r?f`
              <button
                part="clear-button"
                class="clear"
                type="button"
                aria-label=${this.localize.term("clearEntry")}
                @click=${this.handleClearClick}
                tabindex="-1"
              >
                <slot name="clear-icon">
                  <wa-icon name="circle-xmark" library="system" variant="regular"></wa-icon>
                </slot>
              </button>
            `:""}
        ${this.passwordToggle&&!this.disabled?f`
              <button
                part="password-toggle-button"
                class="password-toggle"
                type="button"
                aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                @click=${this.handlePasswordToggle}
                tabindex="-1"
              >
                ${this.passwordVisible?f`
                      <slot name="hide-password-icon">
                        <wa-icon name="eye-slash" library="system" variant="regular"></wa-icon>
                      </slot>
                    `:f`
                      <slot name="show-password-icon">
                        <wa-icon name="eye" library="system" variant="regular"></wa-icon>
                      </slot>
                    `}
              </button>
            `:""}

        <slot name="end" part="end" class="end"></slot>
      </div>

      <slot
        id="hint"
        part="hint"
        name="hint"
        class=${he({"has-slotted":o})}
        aria-hidden=${o?"false":"true"}
        >${this.hint}</slot
      >
    `}};z.css=[Ht,Fa,Gi];z.shadowRootOptions={...Bt.shadowRootOptions,delegatesFocus:!0};p([A("input")],z.prototype,"input",2);p([m()],z.prototype,"title",2);p([m({reflect:!0})],z.prototype,"type",2);p([v()],z.prototype,"value",1);p([m({attribute:"value",reflect:!0})],z.prototype,"defaultValue",2);p([m({reflect:!0})],z.prototype,"size",2);p([m({reflect:!0})],z.prototype,"appearance",2);p([m({type:Boolean,reflect:!0})],z.prototype,"pill",2);p([m()],z.prototype,"label",2);p([m({attribute:"hint"})],z.prototype,"hint",2);p([m({attribute:"with-clear",type:Boolean})],z.prototype,"withClear",2);p([m()],z.prototype,"placeholder",2);p([m({type:Boolean,reflect:!0})],z.prototype,"readonly",2);p([m({attribute:"password-toggle",type:Boolean})],z.prototype,"passwordToggle",2);p([m({attribute:"password-visible",type:Boolean})],z.prototype,"passwordVisible",2);p([m({attribute:"without-spin-buttons",type:Boolean})],z.prototype,"withoutSpinButtons",2);p([m({type:Boolean,reflect:!0})],z.prototype,"required",2);p([m()],z.prototype,"pattern",2);p([m({type:Number})],z.prototype,"minlength",2);p([m({type:Number})],z.prototype,"maxlength",2);p([m()],z.prototype,"min",2);p([m()],z.prototype,"max",2);p([m()],z.prototype,"step",2);p([m()],z.prototype,"autocapitalize",2);p([m()],z.prototype,"autocorrect",2);p([m()],z.prototype,"autocomplete",2);p([m({type:Boolean})],z.prototype,"autofocus",2);p([m()],z.prototype,"enterkeyhint",2);p([m({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],z.prototype,"spellcheck",2);p([m()],z.prototype,"inputmode",2);p([m({attribute:"with-label",type:Boolean})],z.prototype,"withLabel",2);p([m({attribute:"with-hint",type:Boolean})],z.prototype,"withHint",2);p([bt("step",{waitUntilFirstUpdate:!0})],z.prototype,"handleStepChange",1);z=p([D("wa-input")],z);var Hi=U`
  :host {
    display: block;
    color: var(--wa-color-text-normal);
    -webkit-user-select: none;
    user-select: none;

    position: relative;
    display: flex;
    align-items: center;
    font: inherit;
    padding: 0.5em 1em 0.5em 0.25em;
    line-height: var(--wa-line-height-condensed);
    transition: fill var(--wa-transition-normal) var(--wa-transition-easing);
    cursor: pointer;
  }

  :host(:focus) {
    outline: none;
  }

  @media (hover: hover) {
    :host(:not([disabled], :state(current)):is(:state(hover), :hover)) {
      background-color: var(--wa-color-neutral-fill-normal);
      color: var(--wa-color-neutral-on-normal);
    }
  }

  :host(:state(current)),
  :host([disabled]:state(current)) {
    background-color: var(--wa-color-brand-fill-loud);
    color: var(--wa-color-brand-on-loud);
    opacity: 1;
  }

  :host([disabled]) {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .label {
    flex: 1 1 auto;
    display: inline-block;
  }

  .check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--wa-font-size-smaller);
    visibility: hidden;
    width: 2em;
  }

  :host(:state(selected)) .check {
    visibility: visible;
  }

  .start,
  .end {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .start::slotted(*) {
    margin-inline-end: 0.5em;
  }

  .end::slotted(*) {
    margin-inline-start: 0.5em;
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`;function Ne(e,t=0){if(!e||!globalThis.Node)return"";if(typeof e[Symbol.iterator]=="function")return(Array.isArray(e)?e:[...e]).map(i=>Ne(i,--t)).join("");let a=e;if(a.nodeType===Node.TEXT_NODE)return a.textContent??"";if(a.nodeType===Node.ELEMENT_NODE){let o=a;if(o.hasAttribute("slot")||o.matches("style, script"))return"";if(o instanceof HTMLSlotElement){let i=o.assignedNodes({flatten:!0});if(i.length>0)return Ne(i,--t)}return t>-1?Ne(o,--t):o.textContent??""}return a.hasChildNodes()?Ne(a.childNodes,--t):""}var J=class extends qe{constructor(){super(...arguments),this.localize=new Ve(this),this.isInitialized=!1,this.current=!1,this.value="",this.disabled=!1,this.selected=!1,this.defaultSelected=!1,this._label="",this.defaultLabel="",this.handleHover=e=>{e.type==="mouseenter"?this.customStates.set("hover",!0):e.type==="mouseleave"&&this.customStates.set("hover",!1)}}set label(e){const t=this._label;this._label=e||"",this._label!==t&&this.requestUpdate("label",t)}get label(){return this._label?this._label:(this.defaultLabel||this.updateDefaultLabel(),this.defaultLabel)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false"),this.addEventListener("mouseenter",this.handleHover),this.addEventListener("mouseleave",this.handleHover),this.updateDefaultLabel()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("mouseenter",this.handleHover),this.removeEventListener("mouseleave",this.handleHover)}handleDefaultSlotChange(){this.updateDefaultLabel(),this.isInitialized?(customElements.whenDefined("wa-select").then(()=>{const e=this.closest("wa-select");e&&(e.handleDefaultSlotChange(),e.selectionChanged?.())}),customElements.whenDefined("wa-combobox").then(()=>{const e=this.closest("wa-combobox");e&&(e.handleDefaultSlotChange(),e.selectionChanged?.())})):this.isInitialized=!0}willUpdate(e){if(e.has("defaultSelected")&&!this.closest("wa-combobox, wa-select")?.hasInteracted){const t=this.selected;this.selected=this.defaultSelected,this.requestUpdate("selected",t)}super.willUpdate(e)}updated(e){super.updated(e),e.has("disabled")&&this.setAttribute("aria-disabled",this.disabled?"true":"false"),e.has("selected")&&(this.setAttribute("aria-selected",this.selected?"true":"false"),this.customStates.set("selected",this.selected),this.handleDefaultSlotChange()),e.has("value")&&(typeof this.value!="string"&&(this.value=String(this.value)),this.handleDefaultSlotChange()),e.has("current")&&this.customStates.set("current",this.current)}updateDefaultLabel(){let e=this.defaultLabel;this.defaultLabel=Ne(this).trim();let t=this.defaultLabel!==e;return!this._label&&t&&this.requestUpdate("label",e),t}render(){return f`
      <wa-icon
        part="checked-icon"
        class="check"
        name="check"
        library="system"
        variant="solid"
        aria-hidden="true"
      ></wa-icon>
      <slot part="start" name="start" class="start"></slot>
      <slot part="label" class="label" @slotchange=${this.handleDefaultSlotChange}></slot>
      <slot part="end" name="end" class="end"></slot>
    `}};J.css=Hi;p([A(".label")],J.prototype,"defaultSlot",2);p([v()],J.prototype,"current",2);p([m({reflect:!0})],J.prototype,"value",2);p([m({type:Boolean})],J.prototype,"disabled",2);p([m({type:Boolean,attribute:!1})],J.prototype,"selected",2);p([m({type:Boolean,attribute:"selected"})],J.prototype,"defaultSelected",2);p([m()],J.prototype,"label",1);p([v()],J.prototype,"defaultLabel",2);J=p([D("wa-option")],J);var Bi=U`
  :host {
    --shadow-color: var(--wa-color-surface-default);
    --shadow-size: 2rem;

    /* private (defined dynamically) */
    --start-shadow-opacity: 0;
    --end-shadow-opacity: 0;

    display: block;
    position: relative;
    max-width: 100%;
    isolation: isolate;
  }

  :host([orientation='vertical']) {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  #content {
    z-index: 1; /* below shadows */
    border-radius: inherit;
    scroll-behavior: smooth;
    scrollbar-width: thin;

    /* Prevent text in mobile Safari from being larger when the container width larger than the viewport */
    -webkit-text-size-adjust: 100%;

    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline: var(--wa-focus-ring);
      outline-offset: var(--wa-focus-ring-offset);
    }
  }

  :host([without-scrollbar]) #content {
    scrollbar-width: none;
  }

  :host([orientation='horizontal']) #content {
    overflow-x: auto;
    overflow-y: hidden;
  }

  :host([orientation='vertical']) #content {
    flex: 1 1 auto;
    min-height: 0; /* This is crucial for flex children to respect overflow */
    overflow-x: hidden;
    overflow-y: auto;
  }

  #start-shadow,
  #end-shadow {
    z-index: 2;
  }

  #start-shadow {
    opacity: var(--start-shadow-opacity);
  }

  #end-shadow {
    opacity: var(--end-shadow-opacity);
  }

  /* Horizontal shadows */
  :host([orientation='horizontal']) {
    #start-shadow,
    #end-shadow {
      position: absolute;
      top: 0;
      bottom: 0;
      width: var(--shadow-size);
      pointer-events: none;
    }

    #start-shadow {
      &:dir(ltr) {
        left: 0;
        background: linear-gradient(to right, var(--shadow-color), transparent 100%);
      }

      &:dir(rtl) {
        right: 0;
        background: linear-gradient(to left, var(--shadow-color), transparent 100%);
      }
    }

    #end-shadow {
      &:dir(ltr) {
        right: 0;
        background: linear-gradient(to left, var(--shadow-color), transparent 100%);
      }

      &:dir(rtl) {
        left: 0;
        background: linear-gradient(to right, var(--shadow-color), transparent 100%);
      }
    }
  }

  /* Vertical shadows */
  :host([orientation='vertical']) {
    #start-shadow,
    #end-shadow {
      position: absolute;
      right: 0;
      left: 0;
      height: var(--shadow-size);
      pointer-events: none;
    }

    #start-shadow {
      top: 0;
      background: linear-gradient(to bottom, var(--shadow-color), transparent 100%);
    }

    #end-shadow {
      bottom: 0;
      background: linear-gradient(to top, var(--shadow-color), transparent 100%);
    }
  }
`;var ne=class extends qe{constructor(){super(...arguments),this.localize=new Ve(this),this.resizeObserver=new ResizeObserver(()=>this.updateScroll()),this.canScroll=!1,this.orientation="horizontal",this.withoutScrollbar=!1,this.withoutShadow=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.disconnect()}handleKeyDown(e){e.key==="Home"&&(e.preventDefault(),this.content.scrollTo({left:this.orientation==="horizontal"?0:void 0,top:this.orientation==="vertical"?0:void 0})),e.key==="End"&&(e.preventDefault(),this.content.scrollTo({left:this.orientation==="horizontal"?this.content.scrollWidth:void 0,top:this.orientation==="vertical"?this.content.scrollHeight:void 0}))}handleSlotChange(){this.updateScroll()}updateScroll(){if(this.orientation==="horizontal"){const e=Math.ceil(this.content.clientWidth),t=Math.abs(Math.ceil(this.content.scrollLeft)),o=Math.ceil(this.content.scrollWidth)-e;this.canScroll=o>0;const i=Math.min(1,t/(o*.05)),r=Math.min(1,(o-t)/(o*.05));this.style.setProperty("--start-shadow-opacity",String(i||0)),this.style.setProperty("--end-shadow-opacity",String(r||0))}else{const e=Math.ceil(this.content.clientHeight),t=Math.abs(Math.ceil(this.content.scrollTop)),o=Math.ceil(this.content.scrollHeight)-e;this.canScroll=o>0;const i=Math.min(1,t/(o*.05)),r=Math.min(1,(o-t)/(o*.05));this.style.setProperty("--start-shadow-opacity",String(i||0)),this.style.setProperty("--end-shadow-opacity",String(r||0))}}render(){return f`
      ${this.withoutShadow?"":f`
            <div id="start-shadow" part="start-shadow" aria-hidden="true"></div>
            <div id="end-shadow" part="end-shadow" aria-hidden="true"></div>
          `}

      <div
        id="content"
        part="content"
        role="region"
        aria-label=${this.localize.term("scrollableRegion")}
        aria-orientation=${this.orientation}
        tabindex=${this.canScroll?"0":"-1"}
        @keydown=${this.handleKeyDown}
        @scroll=${this.updateScroll}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};ne.css=[Bi];p([A("#content")],ne.prototype,"content",2);p([v()],ne.prototype,"canScroll",2);p([m({reflect:!0})],ne.prototype,"orientation",2);p([m({attribute:"without-scrollbar",type:Boolean,reflect:!0})],ne.prototype,"withoutScrollbar",2);p([m({attribute:"without-shadow",type:Boolean,reflect:!0})],ne.prototype,"withoutShadow",2);p([qt({passive:!0})],ne.prototype,"updateScroll",1);ne=p([D("wa-scroller")],ne);var qi=U`
  :host {
    --tag-max-size: 10ch;
    --show-duration: 100ms;
    --hide-duration: 100ms;
  }

  /* Add ellipses to multi select options */
  :host wa-tag::part(content) {
    display: initial;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: var(--tag-max-size);
  }

  :host .disabled [part~='combobox'] {
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  :host .enabled:is(.open, :focus-within) [part~='combobox'] {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;

    /* Pass through from select to the popup */
    --show-duration: inherit;
    --hide-duration: inherit;

    &::part(popup) {
      z-index: 900;
    }

    &[data-current-placement^='top']::part(popup) {
      transform-origin: bottom;
    }

    &[data-current-placement^='bottom']::part(popup) {
      transform-origin: top;
    }
  }

  /* Combobox */
  .combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    align-items: center;
    justify-content: start;

    min-height: var(--wa-form-control-height);

    background-color: var(--wa-form-control-background-color);
    border-color: var(--wa-form-control-border-color);
    border-radius: var(--wa-form-control-border-radius);
    border-style: var(--wa-form-control-border-style);
    border-width: var(--wa-form-control-border-width);
    color: var(--wa-form-control-value-color);
    cursor: pointer;
    font-family: inherit;
    font-weight: var(--wa-form-control-value-font-weight);
    line-height: var(--wa-form-control-value-line-height);
    overflow: hidden;
    padding: 0 var(--wa-form-control-padding-inline);
    position: relative;
    vertical-align: middle;
    transition:
      background-color var(--wa-transition-normal),
      border var(--wa-transition-normal),
      outline var(--wa-transition-fast);
    transition-timing-function: var(--wa-transition-easing);

    :host([multiple]) .select:not(.placeholder-visible) & {
      padding-inline-start: 0;
      padding-block: calc(var(--wa-form-control-height) * 0.1 - var(--wa-form-control-border-width));
    }

    /* Pills */
    :host([pill]) & {
      border-radius: var(--wa-border-radius-pill);
    }
  }

  /* Appearance modifiers */
  :host([appearance='outlined']) .combobox {
    background-color: var(--wa-form-control-background-color);
    border-color: var(--wa-form-control-border-color);
  }

  :host([appearance='filled']) .combobox {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-color-neutral-fill-quiet);
  }

  :host([appearance='filled-outlined']) .combobox {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-form-control-border-color);
  }

  .display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    line-height: var(--wa-form-control-value-line-height);
    color: var(--wa-form-control-value-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: var(--wa-form-control-placeholder-color);
    }
  }

  /* Visually hide the display input when multiple is enabled */
  :host([multiple]) .select:not(.placeholder-visible) .display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .value-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    padding: 0;
    margin: 0;
  }

  .tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: 0.25em;
    gap: 0.25em;

    &::slotted(wa-tag) {
      cursor: pointer !important;
    }

    .disabled &,
    .disabled &::slotted(wa-tag) {
      cursor: not-allowed !important;
    }
  }

  /* Start and End */

  .start,
  .end {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--wa-color-neutral-on-quiet);
  }

  .end::slotted(*) {
    margin-inline-start: var(--wa-form-control-padding-inline);
  }

  .start::slotted(*) {
    margin-inline-end: var(--wa-form-control-padding-inline);
  }

  :host([multiple]) .start::slotted(*) {
    margin-inline: var(--wa-form-control-padding-inline);
  }

  /* Clear button */
  [part~='clear-button'] {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--wa-color-neutral-on-quiet);
    border: none;
    background: none;
    padding: 0;
    transition: color var(--wa-transition-normal);
    cursor: pointer;
    margin-inline-start: var(--wa-form-control-padding-inline);

    &:focus {
      outline: none;
    }

    @media (hover: hover) {
      &:hover {
        color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
      }
    }

    &:active {
      color: color-mix(in oklab, currentColor, var(--wa-color-mix-active));
    }
  }

  /* Expand icon */
  .expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    color: var(--wa-color-neutral-on-quiet);
    transition: rotate var(--wa-transition-slow) ease;
    rotate: 0deg;
    margin-inline-start: var(--wa-form-control-padding-inline);

    .open & {
      rotate: -180deg;
    }
  }

  /* Listbox */
  .listbox {
    display: block;
    position: relative;
    font: inherit;
    box-shadow: var(--wa-shadow-m);
    background: var(--wa-color-surface-raised);
    border-color: var(--wa-color-surface-border);
    border-radius: var(--wa-border-radius-m);
    border-style: var(--wa-border-style);
    border-width: var(--wa-border-width-s);
    padding-block: 0.5em;
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);

    &::slotted(wa-divider) {
      --spacing: 0.5em;
    }
  }

  slot:not([name])::slotted(small) {
    display: block;
    font-size: var(--wa-font-size-smaller);
    font-weight: var(--wa-font-weight-semibold);
    color: var(--wa-color-text-quiet);
    padding-block: 0.5em;
    padding-inline: 2.25em;
  }
`;var k=class extends Bt{constructor(){super(...arguments),this.assumeInteractionOn=["blur","input"],this.hasSlotController=new ja(this,"hint","label"),this.localize=new Ve(this),this.selectionOrder=new Map,this.typeToSelectString="",this.displayLabel="",this.selectedOptions=[],this.name="",this._defaultValue=null,this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.withClear=!1,this.open=!1,this.appearance="outlined",this.pill=!1,this.label="",this.placement="bottom",this.hint="",this.withLabel=!1,this.withHint=!1,this.required=!1,this.getTag=e=>f`
        <wa-tag
          part="tag"
          exportparts="
            base:tag__base,
            content:tag__content,
            remove-button:tag__remove-button,
            remove-button__base:tag__remove-button__base
          "
          ?pill=${this.pill}
          size=${this.size}
          with-remove
          data-value=${e.value}
          @wa-remove=${t=>this.handleTagRemove(t,e)}
        >
          ${e.label}
        </wa-tag>
      `,this.handleDocumentFocusIn=e=>{const t=e.composedPath();this&&!t.includes(this)&&this.hide()},this.handleDocumentKeyDown=e=>{const t=e.target,a=t.closest('[part~="clear-button"]')!==null,o=t.closest("wa-button")!==null;if(!(a||o)){if(e.key==="Escape"&&this.open&&(e.preventDefault(),e.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),e.key==="Enter"||e.key===" "&&this.typeToSelectString===""){if(e.preventDefault(),e.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.hasInteracted=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(e.key)){const i=this.getAllOptions(),r=i.indexOf(this.currentOption);let s=Math.max(0,r);if(e.preventDefault(),!this.open&&(this.show(),this.currentOption))return;e.key==="ArrowDown"?(s=r+1,s>i.length-1&&(s=0)):e.key==="ArrowUp"?(s=r-1,s<0&&(s=i.length-1)):e.key==="Home"?s=0:e.key==="End"&&(s=i.length-1),this.setCurrentOption(i[s])}if(e.key?.length===1||e.key==="Backspace"){const i=this.getAllOptions();if(e.metaKey||e.ctrlKey||e.altKey)return;if(!this.open){if(e.key==="Backspace")return;this.show()}e.stopPropagation(),e.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),e.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=e.key.toLowerCase();for(const r of i)if(r.label.toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(r);break}}}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this&&!t.includes(this)&&this.hide()}}static get validators(){const e=[Bo({validationElement:Object.assign(document.createElement("select"),{required:!0})})];return[...super.validators,...e]}get validationTarget(){return this.valueInput}set defaultValue(e){this._defaultValue=this.convertDefaultValue(e)}get defaultValue(){return this.convertDefaultValue(this._defaultValue)}convertDefaultValue(e){return!(this.multiple||this.hasAttribute("multiple"))&&Array.isArray(e)&&(e=e[0]),e}set value(e){let t=this.value;e instanceof FormData&&(e=e.getAll(this.name)),e!=null&&!Array.isArray(e)&&(e=[e]),this._value=e??null,this.value!==t&&(this.valueHasChanged=!0,this.requestUpdate("value",t))}get value(){let e=this._value??this.defaultValue??null;e!=null&&(e=Array.isArray(e)?e:[e]),e==null?this.optionValues=new Set(null):this.optionValues=new Set(this.getAllOptions().filter(a=>!a.disabled).map(a=>a.value));let t=e;return e!=null&&(t=e.filter(a=>this.optionValues.has(a)),t=this.multiple?t:t[0],t=t??null),t}connectedCallback(){super.connectedCallback(),this.handleDefaultSlotChange(),this.open=!1}updateDefaultValue(){const t=this.getAllOptions().filter(a=>a.hasAttribute("selected")||a.defaultSelected);if(t.length>0){const a=t.map(o=>o.value);this._defaultValue=this.multiple?a:a[0]}this.hasAttribute("value")&&(this._defaultValue=this.getAttribute("value")||null)}addOpenListeners(){document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn)}removeOpenListeners(){document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn)}handleFocus(){this.displayInput.setSelectionRange(0,0)}handleLabelClick(){this.displayInput.focus()}handleComboboxClick(e){e.preventDefault()}handleComboboxMouseDown(e){const a=e.composedPath().some(o=>o instanceof Element&&o.tagName.toLowerCase()==="wa-button");this.disabled||a||(e.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(e){e.stopPropagation(),this.handleDocumentKeyDown(e)}handleClearClick(e){e.stopPropagation(),this.value!==null&&(this.selectionOrder.clear(),this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.dispatchEvent(new so),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))}handleClearMouseDown(e){e.stopPropagation(),e.preventDefault()}handleOptionClick(e){const a=e.target.closest("wa-option");a&&!a.disabled&&(this.hasInteracted=!0,this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(a):this.setSelectedOptions(a),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.requestUpdate("value"),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get("wa-option")||customElements.whenDefined("wa-option").then(()=>this.handleDefaultSlotChange());const e=this.getAllOptions();this.optionValues=void 0,this.updateDefaultValue();let t=this.value;if(t==null||!this.valueHasChanged&&!this.hasInteracted){this.selectionChanged();return}Array.isArray(t)||(t=[t]);const a=e.filter(o=>t.includes(o.value));this.setSelectedOptions(a)}handleTagRemove(e,t){if(e.stopPropagation(),this.disabled)return;this.hasInteracted=!0,this.valueHasChanged=!0;let a=t;if(!a){const o=e.target.closest("wa-tag[data-value]");if(o){const i=o.dataset.value;a=this.selectedOptions.find(r=>r.value===i)}}a&&(this.toggleOptionSelection(a,!1),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))}getAllOptions(){return this?.querySelectorAll?[...this.querySelectorAll("wa-option")]:[]}getFirstOption(){return this.querySelector("wa-option")}setCurrentOption(e){this.getAllOptions().forEach(a=>{a.current=!1,a.tabIndex=-1}),e&&(this.currentOption=e,e.current=!0,e.tabIndex=0,e.focus())}setSelectedOptions(e){const t=this.getAllOptions(),a=Array.isArray(e)?e:[e];t.forEach(o=>{a.includes(o)||(o.selected=!1)}),a.length&&a.forEach(o=>o.selected=!0),this.selectionChanged()}toggleOptionSelection(e,t){t===!0||t===!1?e.selected=t:e.selected=!e.selected,this.selectionChanged()}selectionChanged(){const t=this.getAllOptions().filter(s=>{if(!this.hasInteracted&&!this.valueHasChanged){const n=this.defaultValue,l=Array.isArray(n)?n:[n];return s.hasAttribute("selected")||s.defaultSelected||s.selected||l?.includes(s.value)}return s.selected}),a=new Set(t.map(s=>s.value));for(const s of this.selectionOrder.keys())a.has(s)||this.selectionOrder.delete(s);let i=(this.selectionOrder.size>0?Math.max(...this.selectionOrder.values()):-1)+1;for(const s of t)this.selectionOrder.has(s.value)||this.selectionOrder.set(s.value,i++);this.selectedOptions=t.sort((s,n)=>{const l=this.selectionOrder.get(s.value)??0,c=this.selectionOrder.get(n.value)??0;return l-c});let r=new Set(this.selectedOptions.map(s=>s.value));if(r.size>0||this._value){const s=this._value;if(this._value==null){let n=this.defaultValue??[];this._value=Array.isArray(n)?n:[n]}this._value=this._value?.filter(n=>!this.optionValues?.has(n))??null,this._value?.unshift(...r),this.requestUpdate("value",s)}if(this.multiple)this.placeholder&&!this.value?.length?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{const s=this.selectedOptions[0];this.displayLabel=s?.label??""}this.updateComplete.then(()=>{this.updateValidity()})}get tags(){return this.selectedOptions.map((e,t)=>{if(t<this.maxOptionsVisible||this.maxOptionsVisible<=0){const a=this.getTag(e,t);return a?typeof a=="string"?hi(a):a:null}else if(t===this.maxOptionsVisible)return f`
          <wa-tag
            part="tag"
            exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
            >+${this.selectedOptions.length-t}</wa-tag
          >
        `;return null})}updated(e){super.updated(e),e.has("value")&&this.customStates.set("blank",!this.value)}handleDisabledChange(){this.disabled&&this.open&&(this.open=!1)}handleValueChange(){const e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value],a=e.filter(o=>t.includes(o.value));this.setSelectedOptions(a),this.updateValidity()}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption());const e=new qo;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}this.addOpenListeners(),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)}),await ta(this.popup.popup,"show"),this.currentOption&&Vo(this.currentOption,this.listbox,"vertical","auto"),this.dispatchEvent(new Fo)}else{const e=new jo;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}this.removeOpenListeners(),await ta(this.popup.popup,"hide"),this.listbox.hidden=!0,this.popup.active=!1,this.dispatchEvent(new Wo)}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,aa(this,"wa-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,aa(this,"wa-after-hide")}focus(e){this.displayInput.focus(e)}blur(){this.displayInput.blur()}formResetCallback(){this.selectionOrder.clear(),this.value=this.defaultValue,super.formResetCallback(),this.handleValueChange(),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}render(){const e=this.hasUpdated?this.hasSlotController.test("label"):this.withLabel,t=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,a=this.label?!0:!!e,o=this.hint?!0:!!t,i=(this.hasUpdated||pi)&&this.withClear&&!this.disabled&&this.value&&this.value.length>0,r=!!(this.placeholder&&(!this.value||this.value.length===0));return f`
      <div
        part="form-control"
        class=${he({"form-control":!0,"form-control-has-label":a})}
      >
        <label
          id="label"
          part="form-control-label label"
          class="label"
          aria-hidden=${a?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <wa-popup
            class=${he({select:!0,open:this.open,disabled:this.disabled,enabled:!this.disabled,multiple:this.multiple,"placeholder-visible":r})}
            placement=${this.placement}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
              @click=${this.handleComboboxClick}
            >
              <slot part="start" name="start" class="start"></slot>

              <input
                part="display-input"
                class="display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                ?required=${this.required}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-invalid=${!this.validity.valid}
                aria-controls="listbox"
                aria-expanded=${this.open?"true":"false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?"true":"false"}
                aria-describedby="hint"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
              />

              <!-- Tags need to wait for first hydration before populating otherwise it will create a hydration mismatch. -->
              ${this.multiple&&this.hasUpdated?f`<div part="tags" class="tags" @wa-remove=${this.handleTagRemove}>${this.tags}</div>`:""}

              <input
                class="value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(", "):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
              />

              ${i?f`
                    <button
                      part="clear-button"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <wa-icon name="circle-xmark" library="system" variant="regular"></wa-icon>
                      </slot>
                    </button>
                  `:""}

              <slot name="end" part="end" class="end"></slot>

              <slot name="expand-icon" part="expand-icon" class="expand-icon">
                <wa-icon library="system" name="chevron-down" variant="solid"></wa-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?"true":"false"}
              aria-multiselectable=${this.multiple?"true":"false"}
              aria-labelledby="label"
              part="listbox"
              class="listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
            >
              <slot @slotchange=${this.handleDefaultSlotChange}></slot>
            </div>
          </wa-popup>
        </div>

        <slot
          id="hint"
          name="hint"
          part="hint"
          class=${he({"has-slotted":o})}
          aria-hidden=${o?"false":"true"}
          >${this.hint}</slot
        >
      </div>
    `}};k.css=[qi,Fa,Ht];p([A(".select")],k.prototype,"popup",2);p([A(".combobox")],k.prototype,"combobox",2);p([A(".display-input")],k.prototype,"displayInput",2);p([A(".value-input")],k.prototype,"valueInput",2);p([A(".listbox")],k.prototype,"listbox",2);p([v()],k.prototype,"displayLabel",2);p([v()],k.prototype,"currentOption",2);p([v()],k.prototype,"selectedOptions",2);p([v()],k.prototype,"optionValues",2);p([m({reflect:!0})],k.prototype,"name",2);p([m({attribute:!1})],k.prototype,"defaultValue",1);p([m({attribute:"value",reflect:!1})],k.prototype,"value",1);p([m({reflect:!0})],k.prototype,"size",2);p([m()],k.prototype,"placeholder",2);p([m({type:Boolean,reflect:!0})],k.prototype,"multiple",2);p([m({attribute:"max-options-visible",type:Number})],k.prototype,"maxOptionsVisible",2);p([m({type:Boolean})],k.prototype,"disabled",2);p([m({attribute:"with-clear",type:Boolean})],k.prototype,"withClear",2);p([m({type:Boolean,reflect:!0})],k.prototype,"open",2);p([m({reflect:!0})],k.prototype,"appearance",2);p([m({type:Boolean,reflect:!0})],k.prototype,"pill",2);p([m()],k.prototype,"label",2);p([m({reflect:!0})],k.prototype,"placement",2);p([m({attribute:"hint"})],k.prototype,"hint",2);p([m({attribute:"with-label",type:Boolean})],k.prototype,"withLabel",2);p([m({attribute:"with-hint",type:Boolean})],k.prototype,"withHint",2);p([m({type:Boolean,reflect:!0})],k.prototype,"required",2);p([m({attribute:!1})],k.prototype,"getTag",2);p([bt("disabled",{waitUntilFirstUpdate:!0})],k.prototype,"handleDisabledChange",1);p([bt("value",{waitUntilFirstUpdate:!0})],k.prototype,"handleValueChange",1);p([bt("open",{waitUntilFirstUpdate:!0})],k.prototype,"handleOpenChange",1);k=p([D("wa-select")],k);var Vi=U`
  @layer wa-component {
    :host {
      display: inline-flex;
      gap: 0.5em;
      border-radius: var(--wa-border-radius-m);
      align-items: center;
      background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
      border-color: var(--wa-color-border-normal, var(--wa-color-neutral-border-normal));
      border-style: var(--wa-border-style);
      border-width: var(--wa-border-width-s);
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      font-size: inherit;
      line-height: 1;
      white-space: nowrap;
      user-select: none;
      -webkit-user-select: none;
      height: calc(var(--wa-form-control-height) * 0.8);
      line-height: calc(var(--wa-form-control-height) - var(--wa-form-control-border-width) * 2);
      padding: 0 0.75em;
    }

    /* Appearance modifiers */
    :host([appearance='outlined']) {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: transparent;
      border-color: var(--wa-color-border-loud, var(--wa-color-neutral-border-loud));
    }

    :host([appearance='filled']) {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
      border-color: transparent;
    }

    :host([appearance='filled-outlined']) {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
      border-color: var(--wa-color-border-normal, var(--wa-color-neutral-border-normal));
    }

    :host([appearance='accent']) {
      color: var(--wa-color-on-loud, var(--wa-color-neutral-on-loud));
      background-color: var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud));
      border-color: transparent;
    }
  }

  .content {
    font-size: var(--wa-font-size-smaller);
  }

  [part='remove-button'] {
    color: inherit;
    line-height: 1;
  }

  [part='remove-button']::part(base) {
    padding: 0;
    height: 1em;
    width: 1em;
  }

  @media (hover: hover) {
    :host(:hover) > [part='remove-button']::part(base) {
      color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
    }
  }

  :host(:active) > [part='remove-button']::part(base) {
    color: color-mix(in oklab, currentColor, var(--wa-color-mix-active));
  }

  /*
   * Pill modifier
   */
  :host([pill]) {
    border-radius: var(--wa-border-radius-pill);
  }
`;var Fi=class extends Event{constructor(){super("wa-remove",{bubbles:!0,cancelable:!1,composed:!0})}},fe=class extends qe{constructor(){super(...arguments),this.localize=new Ve(this),this.variant="neutral",this.appearance="filled-outlined",this.size="medium",this.pill=!1,this.withRemove=!1}handleRemoveClick(){this.dispatchEvent(new Fi)}render(){return f`
      <slot part="content" class="content"></slot>

      ${this.withRemove?f`
            <wa-button
              part="remove-button"
              exportparts="base:remove-button__base"
              class="remove"
              appearance="plain"
              @click=${this.handleRemoveClick}
              tabindex="-1"
            >
              <wa-icon name="xmark" library="system" variant="solid" label=${this.localize.term("remove")}></wa-icon>
            </wa-button>
          `:""}
    `}};fe.css=[Vi,Ko,Ht];p([m({reflect:!0})],fe.prototype,"variant",2);p([m({reflect:!0})],fe.prototype,"appearance",2);p([m({reflect:!0})],fe.prototype,"size",2);p([m({type:Boolean,reflect:!0})],fe.prototype,"pill",2);p([m({attribute:"with-remove",type:Boolean})],fe.prototype,"withRemove",2);fe=p([D("wa-tag")],fe);var ji=Object.defineProperty,Wi=Object.getOwnPropertyDescriptor,L=(e,t,a,o)=>{for(var i=o>1?void 0:o?Wi(t,a):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(i=(o?s(t,a,i):s(i))||i);return o&&i&&ji(t,a,i),i};const Ki=e=>typeof e=="number"||typeof e=="string"&&/[0-9]+/.test(e);class K extends ce(ge){constructor(){super(...arguments),this.autosubmit=!1,this.choicesButtonGroupLimit=8,this._title=j(""),this.values={},this.changes={},this.showAsButtonGroup=new Set,this.updateShowAsButtonGroup=t=>{const a=this.getFormContentWidth(t),o=new Set;for(const i of this.radioGroups??[]){const r=i.clientWidth;i.name&&r>0&&r<=a&&o.add(i.name)}Yo(this.showAsButtonGroup,o)||(this.showAsButtonGroup=o)},this.resizeController=new ro(this,{target:null,callback:this.updateShowAsButtonGroup})}get title(){return this._title.get()}async loadConfig(){this.config=await this.getConfig(),this._title.set(this.config?.title??""),await this.loadValues()}async loadValues(){this.values=await this.getValues(),this.changes={},this.error=void 0}async willUpdate(t){t.has("puzzle")&&this.puzzle&&await this.loadConfig()}updated(t){(t.has("config")||t.has("choicesButtonGroupLimit"))&&this.updateShowAsButtonGroup()}render(){return f`
      <form part="form" @submit=${this.submit} ${this.resizeController.target(!0)}>
        ${Ot(this.error,()=>f`<div part="error">${this.error}</div>`)}

        ${Object.entries(this.config?.items??{}).map(([t,a])=>this.renderConfigItem(t,a))}
      </form>
    `}renderConfigItem(t,a){const o=this.changes[t]??this.values[t],i=a.name.replace(/^%/,"Percent").replace("s*s","s × s");switch(a.type){case"string":return f`
          <wa-input
            name=${t}
            inputmode=${Ki(o)?"decimal":"text"}
            label=${i}
            value=${o}
            @focus=${this.autoSelectInput}
            @change=${this.updateTextValue}
          ></wa-input>
        `;case"boolean":return f`
          <wa-checkbox 
            name=${t}
            ?checked=${o}
            @change=${this.updateCheckboxValue}
          >${i}</wa-checkbox>
        `;case"choices":{const r=this.showAsButtonGroup.has(t),s=f`
          <wa-select
            name=${t}
            class=${r?"hidden":P}
            label=${i}
            value=${o}
            @change=${this.updateSelectValue}
          >
            ${a.choicenames.map((n,l)=>f`
              <wa-option value=${l}>${n}</wa-option>
            `)}
          </wa-select>
        `;return a.choicenames.length>this.choicesButtonGroupLimit&&!r?s:f`
          <div class="choices">
            <wa-radio-group
              name=${t}
              class=${r?P:"hidden"}
              label=${i}
              .value=${o}
              orientation="horizontal"
              @change=${this.updateSelectValue}
            >
              ${a.choicenames.map((n,l)=>f`
                  <wa-radio value=${l} appearance="button">${n}</wa-radio>
                `)}
            </wa-radio-group>
            ${s}
          </div>
        `}default:throw new Error(`Unknown config item type ${item.type}`)}}resetFormItemValues(){for(const[t,{type:a}]of Object.entries(this.config?.items??[])){const o=this.changes[t]??this.values[t];if(o!==void 0)for(const i of this.shadowRoot?.querySelectorAll(`[name="${t}"]`)??[])a==="boolean"?i.checked=!!o:i.value=String(o)}}autoSelectInput(t){t.target.select()}async updateTextValue(t){const a=t.target;this.changes[a.name]=a.value,this.autosubmit&&await this.submit()}async updateCheckboxValue(t){const a=t.target;this.changes[a.name]=a.checked,this.autosubmit&&await this.submit()}async updateSelectValue(t){const a=t.target;this.changes[a.name]=Number.parseInt(a.value,10),this.autosubmit&&await this.submit()}get hasErrors(){return this.error!==void 0}async submit(t){t?.preventDefault();const a=await this.setValues(this.changes);a?this.error=a:(this.error=void 0,this.puzzle&&this.dispatchEvent(new CustomEvent(this.submitEventType,{bubbles:!0,composed:!0,detail:{puzzle:this.puzzle,changes:this.changes,value:this.values}})),this.values={...this.values,...this.changes},this.changes={})}async reset(){this.changes={},this.error=void 0,this.resetFormItemValues()}async reloadValues(){await this.loadValues(),await this.updateComplete,this.resetFormItemValues()}getFormContentWidth(t){const a=this.shadowRoot?.querySelector('[part="form"]');if(!a)return 0;const o=t?.find(s=>s.target===a);if(o)return o.contentRect.width;const i=getComputedStyle(a),r=Number.parseFloat(i.paddingInlineStart)+Number.parseFloat(i.paddingInlineEnd);return Number.isNaN(r)?(console.warn(`Parse paddingInline failed: start='${i.paddingInlineStart}' end='${i.paddingInlineEnd}'`),0):a.clientWidth-r}static{this.styles=[xe,U`
      :host {
        display: contents;
        --item-spacing: var(--wa-space-l);
      }
  
      [part="form"] {
        display: flex;
        flex-direction: column;
        gap: var(--item-spacing);
        align-items: flex-start;
      }
  
      [part="error"] {
        color: var(--wa-color-danger-on-normal);
        margin-bottom: var(--item-spacing);
      }
      
      .choices {
        position: relative;
        
        wa-radio-group {
          position: absolute;
          inset-block-start: 0;
          inset-inline-start: 0;
        }
      }
      .hidden {
        visibility: hidden;
      }

      /* Prevent radio-group and radio labels from wrapping */
      wa-radio-group::part(form-control-input) {
        flex-wrap: nowrap;
      }
      wa-radio::part(label) {
        white-space: nowrap;
      }
    `]}}L([Oe({context:Se,subscribe:!0}),v()],K.prototype,"puzzle",2);L([m({type:Boolean})],K.prototype,"autosubmit",2);L([m({type:Number,attribute:"choices-button-group-limit"})],K.prototype,"choicesButtonGroupLimit",2);L([v()],K.prototype,"config",2);L([v()],K.prototype,"values",2);L([v()],K.prototype,"changes",2);L([v()],K.prototype,"showAsButtonGroup",2);L([v()],K.prototype,"error",2);L([fi("wa-radio-group")],K.prototype,"radioGroups",2);K.disableWarning?.("change-in-update");let la=class extends K{constructor(){super(...arguments),this.submitEventType="puzzle-custom-params-change"}async getConfig(){return this.puzzle?.getCustomParamsConfig()}async getValues(){return this.puzzle?.getCustomParams()??{}}async setValues(e){return this.puzzle?.setCustomParams(e)}async getParams(){if(this.puzzle){const e=await this.puzzle.encodeCustomParams({...this.values,...this.changes});if(!e.startsWith("#ERROR:"))return e;console.warn(`PuzzleCustomParamsForm.getParams: ${e}`)}}};la=L([D("puzzle-custom-params-form")],la);let ca=class extends K{constructor(){super(...arguments),this.submitEventType="puzzle-preferences-change"}async getConfig(){return this.puzzle?.getPreferencesConfig()}async getValues(){return this.puzzle?.getPreferences()??{}}async setValues(e){const t=await this.puzzle?.setPreferences(e);return t||await this.puzzle?.redraw(),t}};ca=L([D("puzzle-preferences-form")],ca);class $e extends ce(ge){constructor(){super(...arguments),this.submitLabel="OK",this.cancelLabel="Cancel",this.dialogTitle="Configuration"}render(){return f`
      <wa-dialog label=${this.dialogTitle}>
        <wa-scroller orientation="vertical">
          ${this.renderConfigForm()}
        </wa-scroller>
        
        <div slot="footer" part="footer">
          <wa-button @click=${this.handleCancel}>${this.cancelLabel}</wa-button>
          <wa-button variant="brand" @click=${this.handleSubmit}>${this.submitLabel}</wa-button>
        </div>
      </wa-dialog>
    `}updated(){if(!this.hasAttribute("dialog-title")){const t=this.form?.title;t&&t!==this.dialogTitle&&(this.dialogTitle=t)}}async handleSubmit(){await this.form?.submit(),this.form?.hasErrors||await this.hide()}async handleCancel(){await this.form?.reset(),await this.hide()}get open(){return this.dialog?.open??!1}set open(t){this.dialog&&(this.dialog.open=t)}show(){this.open=!0}hide(){this.open=!1}async reloadValues(){return this.form?.reloadValues()}static{this.styles=[xe,U`
      :host {
        display: contents;
      }
      
      wa-dialog::part(body) {
        display: flex;
        flex-direction: column;
        
        /* Move overflow scrolling to wa-scroller; constrain size */
        /* Move half of padding to form to avoid clipping focus rings */
        --padding: var(--wa-space-l);
        padding: calc(var(--padding) / 2);
      }
      
      wa-scroller {
        min-height: 1em; /* flex to body size */
        
        /* Make the shadow visibly larger than puzzle-config-form --item-spacing, 
           but leave at least enough room for a full form control between shadows. */
        --shadow-size: min(
            calc(2.5 * var(--wa-space-l)),
            calc((100% - var(--wa-form-control-height)) / 2) 
        );
        
        /* Try to avoid shadowing focused item during keyboard nav. */
        &::part(content) {
          scroll-padding-block: var(--shadow-size);
        }
      }
      
      [part="form"]::part(form) {
        /* Ensure focus rings don't get clipped.
         * Related: https://github.com/shoelace-style/webawesome/discussions/1459 */
        padding: calc(var(--padding) / 2);
      }
  
      [part="footer"] {
        display: grid;
        grid-auto-flow: column;
        grid-auto-columns: 1fr;
        justify-content: end;
        align-items: center;
        gap: var(--wa-space-s);
      }
    `]}}L([m({type:String,attribute:"submit-label"})],$e.prototype,"submitLabel",2);L([m({type:String,attribute:"cancel-label"})],$e.prototype,"cancelLabel",2);L([m({type:String,attribute:"dialog-title"})],$e.prototype,"dialogTitle",2);L([A("wa-dialog",!0)],$e.prototype,"dialog",2);$e.disableWarning?.("change-in-update");let Dt=class extends $e{renderConfigForm(){return f`
      <puzzle-custom-params-form part="form"></puzzle-custom-params-form>
    `}async getParams(){return this.form?.getParams()}};L([A("puzzle-custom-params-form")],Dt.prototype,"form",2);Dt=L([D("puzzle-custom-params-dialog")],Dt);let Lt=class extends $e{renderConfigForm(){return f`
      <puzzle-preferences-form part="form"></puzzle-preferences-form>
    `}};L([A("puzzle-preferences-form")],Lt.prototype,"form",2);Lt=L([D("puzzle-preferences-dialog")],Lt);var Yi=Object.defineProperty,Xi=Object.getOwnPropertyDescriptor,Y=(e,t,a,o)=>{for(var i=o>1?void 0:o?Xi(t,a):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(i=(o?s(t,a,i):s(i))||i);return o&&i&&Yi(t,a,i),i};let V=class extends ce(ge){constructor(){super(...arguments),this.label="Type",this.withoutIcon=!1,this.withoutLabel=!1,this.placement="bottom",this.presets=[],this.currentGameTypeLabel="",this.open=!1}disconnectedCallback(){super.disconnectedCallback(),this.customDialog&&(this.customDialog.remove(),this.customDialog=void 0)}async willUpdate(e){e.has("puzzle")&&await this.loadPresets();const t=this.puzzle?.currentParams;t!==this.currentParams&&(this.currentGameTypeLabel=this.puzzle&&t?await this.puzzle.getParamsDescription(t):"",this.currentParams=t)}async loadPresets(){this.presets=await this.puzzle?.getPresets(!0)??[]}render(){return f`
      <wa-dropdown 
          placement=${this.placement}
          @wa-show=${this.handleDropdownShow}
          @wa-after-show=${this.handleDropdownAfterShow}
          @wa-hide=${this.handleDropdownHide}
          @wa-select=${this.handleDropdownSelect}
      >
        <wa-button 
            slot="trigger"
            part="trigger"
            exportparts="base:trigger-base"
            appearance=${this.appearance??P}
            variant=${this.variant??P}
            with-caret
        >${this.renderTriggerContent()}</wa-button>
        ${this.renderPresetMenuItems()}
        <slot></slot>
      </wa-dropdown>
    `}renderTriggerContent(){if(this.withoutLabel)return f`
        <wa-icon 
            name="puzzle-type" 
            label="${this.label}: ${this.currentGameTypeLabel}"
        ></wa-icon>
      `;const e=he({"dropdown-label-content":!0,"show-value":this.puzzle!==void 0&&!this.open});return f`
      ${this.withoutIcon?P:f`<wa-icon slot="start" name="puzzle-type"></wa-icon>`}
      <div class="dropdown-label">
        <div class=${e}>
          <div>${this.label}</div>
          <div>${this.currentGameTypeLabel}</div>
        </div>
      </div>
    `}renderPresetMenuItems(){const e=[],t=this.puzzle?.params,a=!this.presets.some(o=>o.params===t);for(const{submenu:o,title:i,params:r}of this.presets)o?(e.push(f`<wa-divider></wa-divider>`),e.push(f`<h3>${i}</h3>`)):e.push(f`
          <wa-dropdown-item
              type="checkbox"
              role="menuitemradio"
              ?checked=${r===t}
              value=${r}
            >${i}</wa-dropdown-item>
        `);return this.puzzle?.canConfigure&&(e.push(f`<wa-divider></wa-divider>`),e.push(f`
        <wa-dropdown-item 
            type="checkbox"
            role="menuitemradio"
            ?checked=${a} 
            value="#custom"
          >Custom type…</wa-dropdown-item>
      `)),e}async handleDropdownShow(){this.open=!0}handleDropdownHide(){this.open=!1}async handleDropdownAfterShow(){const e=this.shadowRoot?.querySelector("wa-dropdown-item[checked]");if(e){for(const t of this.shadowRoot?.querySelectorAll("wa-dropdown-item")??[])t.active=t===e;e.focus()}}async handleDropdownSelect(e){if(!this.puzzle)return;const t=e.detail.item.value;if(t==="#custom"){const a=this.shadowRoot?.querySelector('wa-dropdown-item[value="#custom"]');a&&(a.checked=!1),await this.launchCustomDialog()}else if(t!==this.puzzle.currentParams){const a=await this.puzzle.setParams(t);if(a)throw new Error(`Error on setParams to preset "${t}": ${a}`);await this.puzzle.newGame()}}async launchCustomDialog(){if(!this.puzzle)throw new Error("launchCustomDialog() called without a puzzle");if(this.customDialog)this.customDialog.open||await this.customDialog.reloadValues();else{const e=this.closest("puzzle-context");if(!e)throw new Error("launchCustomDialog() can't find puzzle-context container");this.customDialog=document.createElement("puzzle-custom-params-dialog"),this.customDialog.addEventListener("puzzle-custom-params-change",async t=>{Object.keys(t.detail.changes).length>0&&await this.puzzle?.newGame()}),e.appendChild(this.customDialog),await this.customDialog.updateComplete}return this.customDialog.show()}show(){const e=this.shadowRoot?.querySelector("wa-dropdown");e&&(e.open=!0)}hide(){const e=this.shadowRoot?.querySelector("wa-dropdown");e&&(e.open=!1)}};V.styles=[xe,U`
      :host {
        display: block;
      }
      
      /* Allow flexing */
      wa-dropdown, wa-button {
        width: 100%;
      }
      wa-button::part(label) {
        flex: 0 1 auto;
        min-width: 1rem;
      }
      wa-button::part(start), wa-button::part(end), wa-button::part(caret) {
        flex: none;
      }
      
      /* Style checked item like a wa-select, except when using keyboard nav. */
      wa-dropdown:not(:has(:focus-visible)) wa-dropdown-item[checked] {
        background-color: var(--wa-color-brand-fill-loud);
        color: var(--wa-color-brand-on-loud);
        opacity: 1;
      }
  
      /* Crop the trigger button's two-line label to display either only one
       * of the menu label or the or its current value at any given time.
       * (Both are always rendered for accessibility.)
        */
      .dropdown-label {
        height: 1lh;
        overflow: hidden;
      }
      .dropdown-label-content {
        width: 100%;
        overflow: hidden;
        
        > div {
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
  
        text-align: start;
        transform: translateY(0); /* first line: menu label */
        &.show-value {
          transform: translateY(-50%); /* second line: current value */
        }
        @media (prefers-reduced-motion: no-preference) {
          transition: transform 50ms ease; /* match wa-dropdown animation timing */
        }
      }
    `];Y([Oe({context:Se,subscribe:!0}),v()],V.prototype,"puzzle",2);Y([m({type:String})],V.prototype,"label",2);Y([m({type:String})],V.prototype,"appearance",2);Y([m({type:String})],V.prototype,"variant",2);Y([m({type:Boolean,attribute:"without-icon"})],V.prototype,"withoutIcon",2);Y([m({type:Boolean,attribute:"without-label"})],V.prototype,"withoutLabel",2);Y([m({type:String})],V.prototype,"placement",2);Y([v()],V.prototype,"presets",2);Y([v()],V.prototype,"currentParams",2);Y([v()],V.prototype,"currentGameTypeLabel",2);Y([m({type:Boolean})],V.prototype,"open",2);V=Y([D("puzzle-type-menu")],V);async function Ji(e,{longPress:t=!0,twoFingerTap:a=!0,holdTime:o=350,dragThreshold:i=8}){if(!(t||a)||o<=0||e.pointerType!=="touch")return{isSecondary:!1};if(e.type!=="pointerdown"||!e.isPrimary||!(e.target instanceof HTMLElement))throw new TypeError(`Invalid initial event type=${e.type} isPrimary=${e.isPrimary}`);const{pointerId:r,pointerType:s,clientX:n,clientY:l,target:c}=e;return new Promise(d=>{let u=null,h=0,y=0;const g=C=>{clearTimeout(ue),c.removeEventListener("pointermove",S),c.removeEventListener("pointerup",x),c.removeEventListener("pointercancel",_),window.removeEventListener("pointerdown",M),window.removeEventListener("pointermove",E),window.removeEventListener("pointerup",G),d(C)},S=C=>{if(C.pointerId===r){const N=C.clientX-n,X=C.clientY-l;N*N+X*X>i*i&&g({isSecondary:!1,unhandledEvent:C})}},x=C=>{C.pointerId===r?g({isSecondary:u!==null,unhandledEvent:C}):C.pointerType===s&&g({isSecondary:!1})},_=C=>{C.pointerId===r?g({isSecondary:!1,unhandledEvent:C}):C.pointerType===s&&g({isSecondary:!1})},M=C=>{C.pointerType===s&&(C.pointerId===r||C.pointerId===u||!a||u!==null?g({isSecondary:!1}):(u=C.pointerId,h=C.clientX,y=C.clientY,clearTimeout(ue),ue=window.setTimeout(()=>{g({isSecondary:!1})},o)))},E=C=>{if(C.pointerId===u){const N=C.clientX-h,X=C.clientY-y;N*N+X*X>i*i&&g({isSecondary:!1})}},G=C=>{C.pointerId===u?g({isSecondary:!0}):C.pointerType===s&&C.pointerId!==r&&g({isSecondary:!1})};c.addEventListener("pointermove",S,{passive:!0}),c.addEventListener("pointerup",x),c.addEventListener("pointercancel",_);const W={capture:!0,passive:!0};window.addEventListener("pointerdown",M,W),window.addEventListener("pointermove",E,W),window.addEventListener("pointerup",G,W);let ue=window.setTimeout(()=>{g({isSecondary:t})},o)})}function O(e,t){let a=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(s=>[s]));let o=t[0].length,i=t[0].map((s,n)=>t.map(l=>l[n])),r=e.map(s=>i.map(n=>{let l=0;if(!Array.isArray(s)){for(let c of n)l+=s*c;return l}for(let c=0;c<s.length;c++)l+=s[c]*(n[c]||0);return l}));return a===1&&(r=r[0]),o===1?r.map(s=>s[0]):r}function no(e){return Ge(e)==="string"}function Ge(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function Rt(e,{precision:t,unit:a}){return _e(e)?"none":Zi(e,t)+(a??"")}function _e(e){return Number.isNaN(e)||e instanceof Number&&e?.none}function da(e){return _e(e)?0:e}function Zi(e,t){if(e===0)return 0;let a=~~e,o=0;a&&t&&(o=~~Math.log10(Math.abs(a))+1);const i=10**(t-o);return Math.floor(e*i+.5)/i}const Qi={deg:1,grad:.9,rad:180/Math.PI,turn:360};function er(e){if(!e)return;e=e.trim();const t=/^([a-z]+)\((.+?)\)$/i,a=/^-?[\d.]+$/,o=/%|deg|g?rad|turn$/,i=/\/?\s*(none|[-\w.]+(?:%|deg|g?rad|turn)?)/g;let r=e.match(t);if(r){let s=[];return r[2].replace(i,(n,l)=>{let c=l.match(o),d=l;if(c){let u=c[0],h=d.slice(0,-u.length);u==="%"?(d=new Number(h/100),d.type="<percentage>"):(d=new Number(h*Qi[u]),d.type="<angle>",d.unit=u)}else a.test(d)?(d=new Number(d),d.type="<number>"):d==="none"&&(d=new Number(NaN),d.none=!0);n.startsWith("/")&&(d=d instanceof Number?d:new Number(d),d.alpha=!0),typeof d=="object"&&d instanceof Number&&(d.raw=l),s.push(d)}),{name:r[1].toLowerCase(),rawName:r[1],rawArgs:r[2],args:s}}}function tr(e){return e[e.length-1]}function lo(e,t,a){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*a}function ar(e,t,a){return(a-e)/(t-e)}function co(e,t,a){return lo(t[0],t[1],ar(e[0],e[1],a))}function or(e){return e.map(t=>t.split("|").map(a=>{a=a.trim();let o=a.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(o){let i=new String(o[1]);return i.range=[+o[2],+o[3]],i}return a}))}function ir(e,t,a){return Math.max(Math.min(a,t),e)}function Ft(e,t){return Math.sign(e)===Math.sign(t)?e:-e}function ie(e,t){return Ft(Math.abs(e)**t,e)}function uo(e,t){return t===0?0:e/t}function rr(e,t,a=0,o=e.length){for(;a<o;){const i=a+o>>1;e[i]<t?a=i+1:o=i}return a}class sr{add(t,a,o){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(i){this[i]=this[i]||[],a&&this[i][o?"unshift":"push"](a)},this)}run(t,a){this[t]=this[t]||[],this[t].forEach(function(o){o.call(a&&a.context?a.context:a,a)})}}const pt=new sr,re={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function At(e){return Array.isArray(e)?e:re[e]}function mt(e,t,a,o={}){if(e=At(e),t=At(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return a;let i={W1:e,W2:t,XYZ:a,options:o};if(pt.run("chromatic-adaptation-start",i),i.M||(i.W1===re.D65&&i.W2===re.D50?i.M=[[1.0479297925449969,.022946870601609652,-.05019226628920524],[.02962780877005599,.9904344267538799,-.017073799063418826],[-.009243040646204504,.015055191490298152,.7518742814281371]]:i.W1===re.D50&&i.W2===re.D65&&(i.M=[[.955473421488075,-.02309845494876471,.06325924320057072],[-.0283697093338637,1.0099953980813041,.021041441191917323],[.012314014864481998,-.020507649298898964,1.330365926242124]])),pt.run("chromatic-adaptation-end",i),i.M)return O(i.M,i.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const le={gamut_mapping:"css",precision:5,deltaE:"76",verbose:"production".toLowerCase()!=="test",warn:function(t){this.verbose&&globalThis?.console?.warn?.(t)}},nr=new Set(["<number>","<percentage>","<angle>"]);function ua(e,t,a,o){return Object.entries(e.coords).map(([r,s],n)=>{let l=t.coordGrammar[n],c=o[n],d=c?.type,u;if(c.none?u=l.find(g=>nr.has(g)):u=l.find(g=>g==d),!u){let g=s.name||r;throw new TypeError(`${d??c.raw} not allowed for ${g} in ${a}()`)}let h=u.range;d==="<percentage>"&&(h||=[0,1]);let y=s.range||s.refRange;return h&&y&&(o[n]=co(h,y,o[n])),u})}function ho(e,{meta:t}={}){let a={str:String(e)?.trim()};if(pt.run("parse-start",a),a.color)return a.color;if(a.parsed=er(a.str),a.parsed){let o=a.parsed.name;if(o==="color"){let i=a.parsed.args.shift(),r=i.startsWith("--")?i.substring(2):`--${i}`,s=[i,r],n=a.parsed.rawArgs.indexOf("/")>0?a.parsed.args.pop():1;for(let d of b.all){let u=d.getFormat("color");if(u&&(s.includes(u.id)||u.ids?.filter(h=>s.includes(h)).length)){const h=Object.keys(d.coords).map((g,S)=>a.parsed.args[S]||0);let y;return u.coordGrammar&&(y=ua(d,u,"color",h)),t&&Object.assign(t,{formatId:"color",types:y}),u.id.startsWith("--")&&!i.startsWith("--")&&le.warn(`${d.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${u.id}) instead of color(${i}).`),i.startsWith("--")&&!u.id.startsWith("--")&&le.warn(`${d.name} is a standard space and supported in the CSS spec. Use color(${u.id}) instead of prefixed color(${i}).`),{spaceId:d.id,coords:h,alpha:n}}}let l="",c=i in b.registry?i:r;if(c in b.registry){let d=b.registry[c].formats?.color?.id;d&&(l=`Did you mean color(${d})?`)}throw new TypeError(`Cannot parse color(${i}). `+(l||"Missing a plugin?"))}else for(let i of b.all){let r=i.getFormat(o);if(r&&r.type==="function"){let s=1;(r.lastAlpha||tr(a.parsed.args).alpha)&&(s=a.parsed.args.pop());let n=a.parsed.args,l;return r.coordGrammar&&(l=ua(i,r,o,n)),t&&Object.assign(t,{formatId:r.name,types:l}),{spaceId:i.id,coords:n,alpha:s}}}}else for(let o of b.all)for(let i in o.formats){let r=o.formats[i];if(r.type!=="custom"||r.test&&!r.test(a.str))continue;let s=r.parse(a.str);if(s)return s.alpha??=1,t&&(t.formatId=i),s}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}function R(e){if(Array.isArray(e))return e.map(R);if(!e)throw new TypeError("Empty color reference");no(e)&&(e=ho(e));let t=e.space||e.spaceId;return t instanceof b||(e.space=b.get(t)),e.alpha===void 0&&(e.alpha=1),e}const lr=75e-6;class b{constructor(t){this.id=t.id,this.name=t.name,this.base=t.base?b.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let a=t.coords??this.base.coords;for(let i in a)"name"in a[i]||(a[i].name=i);this.coords=a;let o=t.white??this.base.white??"D65";this.white=At(o),this.formats=t.formats??{};for(let i in this.formats){let r=this.formats[i];r.type||="function",r.name||=i}this.formats.color?.id||(this.formats.color={...this.formats.color??{},id:t.cssId||this.id}),t.gamutSpace?this.gamutSpace=t.gamutSpace==="self"?this:b.get(t.gamutSpace):this.isPolar?this.gamutSpace=this.base:this.gamutSpace=this,this.gamutSpace.isUnbounded&&(this.inGamut=(i,r)=>!0),this.referred=t.referred,Object.defineProperty(this,"path",{value:cr(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),pt.run("colorspace-init-end",this)}inGamut(t,{epsilon:a=lr}={}){if(!this.equals(this.gamutSpace))return t=this.to(this.gamutSpace,t),this.gamutSpace.inGamut(t,{epsilon:a});let o=Object.values(this.coords);return t.every((i,r)=>{let s=o[r];if(s.type!=="angle"&&s.range){if(Number.isNaN(i))return!0;let[n,l]=s.range;return(n===void 0||i>=n-a)&&(l===void 0||i<=l+a)}return!0})}get isUnbounded(){return Object.values(this.coords).every(t=>!("range"in t))}get cssId(){return this.formats?.color?.id||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(typeof t=="object")return t=ha(t,this),t;let a;return t==="default"?a=Object.values(this.formats)[0]:a=this.formats[t],a?(a=ha(a,this),a):null}equals(t){return t?this===t||this.id===t||this.id===t.id:!1}to(t,a){if(arguments.length===1){const n=R(t);[t,a]=[n.space,n.coords]}if(t=b.get(t),this.equals(t))return a;a=a.map(n=>Number.isNaN(n)?0:n);let o=this.path,i=t.path,r,s;for(let n=0;n<o.length&&o[n].equals(i[n]);n++)r=o[n],s=n;if(!r)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let n=o.length-1;n>s;n--)a=o[n].toBase(a);for(let n=s+1;n<i.length;n++)a=i[n].fromBase(a);return a}from(t,a){if(arguments.length===1){const o=R(t);[t,a]=[o.space,o.coords]}return t=b.get(t),t.to(this,a)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let a in this.coords){let o=this.coords[a],i=o.range||o.refRange;t.push(i?.min??0)}return t}static registry={};static get all(){return[...new Set(Object.values(b.registry))]}static register(t,a){if(arguments.length===1&&(a=arguments[0],t=a.id),a=this.get(a),this.registry[t]&&this.registry[t]!==a)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=a,arguments.length===1&&a.aliases)for(let o of a.aliases)this.register(o,a);return a}static get(t,...a){if(!t||t instanceof b)return t;if(Ge(t)==="string"){let i=b.registry[t.toLowerCase()];if(!i)throw new TypeError(`No color space found with id = "${t}"`);return i}if(a.length)return b.get(...a);throw new TypeError(`${t} is not a valid color space`)}static resolveCoord(t,a){let o=Ge(t),i,r;if(o==="string"?t.includes(".")?[i,r]=t.split("."):[i,r]=[,t]:Array.isArray(t)?[i,r]=t:(i=t.space,r=t.coordId),i=b.get(i),i||(i=a),!i)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(o=Ge(r),o==="number"||o==="string"&&r>=0){let l=Object.entries(i.coords)[r];if(l)return{space:i,id:l[0],index:r,...l[1]}}i=b.get(i);let s=r.toLowerCase(),n=0;for(let l in i.coords){let c=i.coords[l];if(l.toLowerCase()===s||c.name?.toLowerCase()===s)return{space:i,id:l,index:n,...c};n++}throw new TypeError(`No "${r}" coordinate found in ${i.name}. Its coordinates are: ${Object.keys(i.coords).join(", ")}`)}static DEFAULT_FORMAT={type:"functions",name:"color"}}function cr(e){let t=[e];for(let a=e;a=a.base;)t.push(a);return t}function ha(e,{coords:t}={}){if(e.coords&&!e.coordGrammar){e.type||="function",e.name||="color",e.coordGrammar=or(e.coords);let a=Object.entries(t).map(([o,i],r)=>{let s=e.coordGrammar[r][0],n=i.range||i.refRange,l=s.range,c="";return s=="<percentage>"?(l=[0,100],c="%"):s=="<angle>"&&(c="deg"),{fromRange:n,toRange:l,suffix:c}});e.serializeCoords=(o,i)=>o.map((r,s)=>{let{fromRange:n,toRange:l,suffix:c}=a[s];return n&&l&&(r=co(n,l,r)),r=Rt(r,{precision:i,unit:c}),r})}return e}const pe=new b({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class De extends b{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=pe),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??=a=>{let o=O(t.toXYZ_M,a);return this.white!==this.base.white&&(o=mt(this.white,this.base.white,o)),o},t.fromBase??=a=>(a=mt(this.base.white,this.white,a),O(t.fromXYZ_M,a))),t.referred??="display",super(t)}}function po(e,t){return e=R(e),!t||e.space.equals(t)?e.coords.slice():(t=b.get(t),t.from(e))}function Ue(e,t){e=R(e);let{space:a,index:o}=b.resolveCoord(t,e.space);return po(e,a)[o]}function mo(e,t,a){return e=R(e),t=b.get(t),e.coords=t.to(e.space,a),e}mo.returns="color";function jt(e,t,a){if(e=R(e),arguments.length===2&&Ge(arguments[1])==="object"){let o=arguments[1];for(let i in o)jt(e,i,o[i])}else{typeof a=="function"&&(a=a(Ue(e,t)));let{space:o,index:i}=b.resolveCoord(t,e.space),r=po(e,o);r[i]=a,mo(e,o,r)}return e}jt.returns="color";const dr=new b({id:"xyz-d50",name:"XYZ D50",white:"D50",base:pe,fromBase:e=>mt(pe.white,"D50",e),toBase:e=>mt("D50",pe.white,e)}),ur=216/24389,pa=24/116,Qe=24389/27;let St=re.D50;const ee=new b({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:St,base:dr,fromBase(e){let a=e.map((o,i)=>o/St[i]).map(o=>o>ur?Math.cbrt(o):(Qe*o+16)/116);return[116*a[1]-16,500*(a[0]-a[1]),200*(a[1]-a[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>pa?Math.pow(t[0],3):(116*t[0]-16)/Qe,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Qe,t[2]>pa?Math.pow(t[2],3):(116*t[2]-16)/Qe].map((o,i)=>o*St[i])},formats:{lab:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function be(e){return(e%360+360)%360}const ft=new b({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:ee,fromBase(e){let[t,a,o]=e,i;const r=.02;return Math.abs(a)<r&&Math.abs(o)<r?i=NaN:i=Math.atan2(o,a)*180/Math.PI,[t,Math.sqrt(a**2+o**2),be(i)]},toBase(e){let[t,a,o]=e;return a<0&&(a=0),isNaN(o)&&(o=0),[t,a*Math.cos(o*Math.PI/180),a*Math.sin(o*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}}),ma=25**7,gt=Math.PI,fa=180/gt,Ee=gt/180;function ga(e){const t=e*e;return t*t*t*e}function fo(e,t,{kL:a=1,kC:o=1,kH:i=1}={}){[e,t]=R([e,t]);let[r,s,n]=ee.from(e),l=ft.from(ee,[r,s,n])[1],[c,d,u]=ee.from(t),h=ft.from(ee,[c,d,u])[1];l<0&&(l=0),h<0&&(h=0);let y=(l+h)/2,g=ga(y),S=.5*(1-Math.sqrt(g/(g+ma))),x=(1+S)*s,_=(1+S)*d,M=Math.sqrt(x**2+n**2),E=Math.sqrt(_**2+u**2),G=x===0&&n===0?0:Math.atan2(n,x),W=_===0&&u===0?0:Math.atan2(u,_);G<0&&(G+=2*gt),W<0&&(W+=2*gt),G*=fa,W*=fa;let ue=c-r,C=E-M,N=W-G,X=G+W,Yt=Math.abs(N),Le;M*E===0?Le=0:Yt<=180?Le=N:N>180?Le=N-360:N<-180?Le=N+360:le.warn("the unthinkable has happened");let Xt=2*Math.sqrt(E*M)*Math.sin(Le*Ee/2),Mo=(r+c)/2,zt=(M+E)/2,Jt=ga(zt),ae;M*E===0?ae=X:Yt<=180?ae=X/2:X<360?ae=(X+360)/2:ae=(X-360)/2;let Zt=(Mo-50)**2,Eo=1+.015*Zt/Math.sqrt(20+Zt),Qt=1+.045*zt,Re=1;Re-=.17*Math.cos((ae-30)*Ee),Re+=.24*Math.cos(2*ae*Ee),Re+=.32*Math.cos((3*ae+6)*Ee),Re-=.2*Math.cos((4*ae-63)*Ee);let ea=1+.015*zt*Re,Po=30*Math.exp(-1*((ae-275)/25)**2),Io=2*Math.sqrt(Jt/(Jt+ma)),_o=-1*Math.sin(2*Po*Ee)*Io,Ye=(ue/(a*Eo))**2;return Ye+=(C/(o*Qt))**2,Ye+=(Xt/(i*ea))**2,Ye+=_o*(C/(o*Qt))*(Xt/(i*ea)),Math.sqrt(Ye)}const hr=[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],pr=[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],mr=[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],fr=[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]],He=new b({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:pe,fromBase(e){let a=O(hr,e).map(o=>Math.cbrt(o));return O(mr,a)},toBase(e){let a=O(fr,e).map(o=>o**3);return O(pr,a)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function Nt(e,t){[e,t]=R([e,t]);let[a,o,i]=He.from(e),[r,s,n]=He.from(t),l=a-r,c=o-s,d=i-n;return Math.sqrt(l**2+c**2+d**2)}const gr=75e-6;function Ie(e,t,{epsilon:a=gr}={}){e=R(e),t||(t=e.space),t=b.get(t);let o=e.coords;return t!==e.space&&(o=t.from(e)),t.inGamut(o,{epsilon:a})}function vt(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function wr(e,t,a="lab"){a=b.get(a);let o=a.from(e),i=a.from(t);return Math.sqrt(o.reduce((r,s,n)=>{let l=i[n];return isNaN(s)||isNaN(l)?r:r+(l-s)**2},0))}function br(e,t){return wr(e,t,"lab")}const yr=Math.PI,wa=yr/180;function vr(e,t,{l:a=2,c:o=1}={}){[e,t]=R([e,t]);let[i,r,s]=ee.from(e),[,n,l]=ft.from(ee,[i,r,s]),[c,d,u]=ee.from(t),h=ft.from(ee,[c,d,u])[1];n<0&&(n=0),h<0&&(h=0);let y=i-c,g=n-h,S=r-d,x=s-u,_=S**2+x**2-g**2,M=.511;i>=16&&(M=.040975*i/(1+.01765*i));let E=.0638*n/(1+.0131*n)+.638,G;Number.isNaN(l)&&(l=0),l>=164&&l<=345?G=.56+Math.abs(.2*Math.cos((l+168)*wa)):G=.36+Math.abs(.4*Math.cos((l+35)*wa));let W=Math.pow(n,4),ue=Math.sqrt(W/(W+1900)),C=E*(ue*G+1-ue),N=(y/(a*M))**2;return N+=(g/(o*E))**2,N+=_/C**2,Math.sqrt(N)}const ba=203,go=new b({id:"xyz-abs-d65",cssId:"--xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:pe,fromBase(e){return e.map(t=>Math.max(t*ba,0))},toBase(e){return e.map(t=>Math.max(t/ba,0))}}),et=1.15,tt=.66,ya=2610/2**14,zr=2**14/2610,va=3424/2**12,za=2413/2**7,Ca=2392/2**7,Cr=1.7*2523/2**5,ka=2**5/(1.7*2523),at=-.56,$t=16295499532821565e-27,kr=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],xr=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],Sr=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],$r=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]],Mr=new b({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:go,fromBase(e){let[t,a,o]=e,i=et*t-(et-1)*o,r=tt*a-(tt-1)*t,n=O(kr,[i,r,o]).map(function(h){let y=va+za*(h/1e4)**ya,g=1+Ca*(h/1e4)**ya;return(y/g)**Cr}),[l,c,d]=O(Sr,n);return[(1+at)*l/(1+at*l)-$t,c,d]},toBase(e){let[t,a,o]=e,i=(t+$t)/(1+at-at*(t+$t)),s=O($r,[i,a,o]).map(function(h){let y=va-h**ka,g=Ca*h**ka-za;return 1e4*(y/g)**zr}),[n,l,c]=O(xr,s),d=(n+(et-1)*c)/et,u=(l+(tt-1)*d)/tt;return[d,u,c]},formats:{color:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),xa=new b({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:Mr,fromBase(e){let[t,a,o]=e,i;const r=2e-4;return Math.abs(a)<r&&Math.abs(o)<r?i=NaN:i=Math.atan2(o,a)*180/Math.PI,[t,Math.sqrt(a**2+o**2),be(i)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]}});function Er(e,t){[e,t]=R([e,t]);let[a,o,i]=xa.from(e),[r,s,n]=xa.from(t),l=a-r,c=o-s;Number.isNaN(i)&&Number.isNaN(n)?(i=0,n=0):Number.isNaN(i)?i=n:Number.isNaN(n)&&(n=i);let d=i-n,u=2*Math.sqrt(o*s)*Math.sin(d/2*(Math.PI/180));return Math.sqrt(l**2+c**2+u**2)}const wo=3424/4096,bo=2413/128,yo=2392/128,Sa=2610/16384,Pr=2523/32,Ir=16384/2610,$a=32/2523,_r=[[.3592832590121217,.6976051147779502,-.035891593232029],[-.1920808463704993,1.100476797037432,.0753748658519118],[.0070797844607479,.0748396662186362,.8433265453898765]],Tr=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],Or=[[.9999999999999998,.0086090370379328,.111029625003026],[.9999999999999998,-.0086090370379328,-.1110296250030259],[.9999999999999998,.5600313357106791,-.3206271749873188]],Dr=[[2.0701522183894223,-1.3263473389671563,.2066510476294053],[.3647385209748072,.6805660249472273,-.0453045459220347],[-.0497472075358123,-.0492609666966131,1.1880659249923042]],Ma=new b({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:go,fromBase(e){let t=O(_r,e);return Lr(t)},toBase(e){let t=Rr(e);return O(Dr,t)}});function Lr(e){let t=e.map(function(a){let o=wo+bo*(a/1e4)**Sa,i=1+yo*(a/1e4)**Sa;return(o/i)**Pr});return O(Tr,t)}function Rr(e){return O(Or,e).map(function(o){let i=Math.max(o**$a-wo,0),r=bo-yo*o**$a;return 1e4*(i/r)**Ir})}function Ar(e,t){[e,t]=R([e,t]);let[a,o,i]=Ma.from(e),[r,s,n]=Ma.from(t);return 720*Math.sqrt((a-r)**2+.25*(o-s)**2+(i-n)**2)}const Nr=re.D65,vo=.42,Ea=1/vo,Mt=2*Math.PI,zo=[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],Ur=[[1.8620678550872327,-1.0112546305316843,.14918677544445175],[.38752654323613717,.6214474419314753,-.008973985167612518],[-.015841498849333856,-.03412293802851557,1.0499644368778496]],Gr=[[460,451,288],[460,-891,-261],[460,-220,-6300]],Hr={dark:[.8,.525,.8],dim:[.9,.59,.9],average:[1,.69,1]},ze={h:[20.14,90,164.25,237.53,380.14],e:[.8,.7,1,1.2,.8],H:[0,100,200,300,400]},Br=180/Math.PI,Pa=Math.PI/180;function Co(e,t){return e.map(o=>{const i=ie(t*Math.abs(o)*.01,vo);return 400*Ft(i,o)/(i+27.13)})}function qr(e,t){const a=100/t*27.13**Ea;return e.map(o=>{const i=Math.abs(o);return Ft(a*ie(i/(400-i),Ea),o)})}function Vr(e){let t=be(e);t<=ze.h[0]&&(t+=360);const a=rr(ze.h,t)-1,[o,i]=ze.h.slice(a,a+2),[r,s]=ze.e.slice(a,a+2),n=ze.H[a],l=(t-o)/r;return n+100*l/(l+(i-t)/s)}function Fr(e){let t=(e%400+400)%400;const a=Math.floor(.01*t);t=t%100;const[o,i]=ze.h.slice(a,a+2),[r,s]=ze.e.slice(a,a+2);return be((t*(s*o-r*i)-100*o*s)/(t*(s-r)-100*s))}function ko(e,t,a,o,i){const r={};r.discounting=i,r.refWhite=e,r.surround=o;const s=e.map(S=>S*100);r.la=t,r.yb=a;const n=s[1],l=O(zo,s);o=Hr[r.surround];const c=o[0];r.c=o[1],r.nc=o[2];const u=(1/(5*r.la+1))**4;r.fl=u*r.la+.1*(1-u)*(1-u)*Math.cbrt(5*r.la),r.flRoot=r.fl**.25,r.n=r.yb/n,r.z=1.48+Math.sqrt(r.n),r.nbb=.725*r.n**-.2,r.ncb=r.nbb;const h=Math.max(Math.min(c*(1-1/3.6*Math.exp((-r.la-42)/92)),1),0);r.dRgb=l.map(S=>lo(1,n/S,h)),r.dRgbInv=r.dRgb.map(S=>1/S);const y=l.map((S,x)=>S*r.dRgb[x]),g=Co(y,r.fl);return r.aW=r.nbb*(2*g[0]+g[1]+.05*g[2]),r}const Ia=ko(Nr,64/Math.PI*.2,20,"average",!1);function Ut(e,t){if(!(e.J!==void 0^e.Q!==void 0))throw new Error("Conversion requires one and only one: 'J' or 'Q'");if(!(e.C!==void 0^e.M!==void 0^e.s!==void 0))throw new Error("Conversion requires one and only one: 'C', 'M' or 's'");if(!(e.h!==void 0^e.H!==void 0))throw new Error("Conversion requires one and only one: 'h' or 'H'");if(e.J===0||e.Q===0)return[0,0,0];let a=0;e.h!==void 0?a=be(e.h)*Pa:a=Fr(e.H)*Pa;const o=Math.cos(a),i=Math.sin(a);let r=0;e.J!==void 0?r=ie(e.J,1/2)*.1:e.Q!==void 0&&(r=.25*t.c*e.Q/((t.aW+4)*t.flRoot));let s=0;e.C!==void 0?s=e.C/r:e.M!==void 0?s=e.M/t.flRoot/r:e.s!==void 0&&(s=4e-4*e.s**2*(t.aW+4)/t.c);const n=ie(s*Math.pow(1.64-Math.pow(.29,t.n),-.73),10/9),l=.25*(Math.cos(a+2)+3.8),c=t.aW*ie(r,2/t.c/t.z),d=5e4/13*t.nc*t.ncb*l,u=c/t.nbb,h=23*(u+.305)*uo(n,23*d+n*(11*o+108*i)),y=h*o,g=h*i,S=qr(O(Gr,[u,y,g]).map(x=>x*1/1403),t.fl);return O(Ur,S.map((x,_)=>x*t.dRgbInv[_])).map(x=>x/100)}function xo(e,t){const a=e.map(E=>E*100),o=Co(O(zo,a).map((E,G)=>E*t.dRgb[G]),t.fl),i=o[0]+(-12*o[1]+o[2])/11,r=(o[0]+o[1]-2*o[2])/9,s=(Math.atan2(r,i)%Mt+Mt)%Mt,n=.25*(Math.cos(s+2)+3.8),l=5e4/13*t.nc*t.ncb*uo(n*Math.sqrt(i**2+r**2),o[0]+o[1]+1.05*o[2]+.305),c=ie(l,.9)*Math.pow(1.64-Math.pow(.29,t.n),.73),d=t.nbb*(2*o[0]+o[1]+.05*o[2]),u=ie(d/t.aW,.5*t.c*t.z),h=100*ie(u,2),y=4/t.c*u*(t.aW+4)*t.flRoot,g=c*u,S=g*t.flRoot,x=be(s*Br),_=Vr(x),M=50*ie(t.c*c/(t.aW+4),1/2);return{J:h,C:g,h:x,s:M,Q:y,M:S,H:_}}new b({id:"cam16-jmh",cssId:"--cam16-jmh",name:"CAM16-JMh",coords:{j:{refRange:[0,100],name:"J"},m:{refRange:[0,105],name:"Colorfulness"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:pe,fromBase(e){const t=xo(e,Ia);return[t.J,t.M,t.h]},toBase(e){return Ut({J:e[0],M:e[1],h:e[2]},Ia)}});const jr=re.D65,Wr=216/24389,So=24389/27;function Kr(e){return 116*(e>Wr?Math.cbrt(e):(So*e+16)/116)-16}function Gt(e){return e>8?Math.pow((e+16)/116,3):e/So}function Yr(e,t){let[a,o,i]=e,r=[],s=0;if(i===0)return[0,0,0];let n=Gt(i);i>0?s=.00379058511492914*i**2+.608983189401032*i+.9155088574762233:s=9514440756550361e-21*i**2+.08693057439788597*i-21.928975842194614;const l=2e-12,c=15;let d=0,u=1/0;for(;d<=c;){r=Ut({J:s,C:o,h:a},t);const h=Math.abs(r[1]-n);if(h<u){if(h<=l)return r;u=h}s=s-(r[1]-n)*s/(2*r[1]),d+=1}return Ut({J:s,C:o,h:a},t)}function Xr(e,t){const a=Kr(e[1]);if(a===0)return[0,0,0];const o=xo(e,Wt);return[be(o.h),o.C,a]}const Wt=ko(jr,200/Math.PI*Gt(50),Gt(50)*100,"average",!1),wt=new b({id:"hct",name:"HCT",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},c:{refRange:[0,145],name:"Colorfulness"},t:{refRange:[0,100],name:"Tone"}},base:pe,fromBase(e){return Xr(e)},toBase(e){return Yr(e,Wt)},formats:{color:{id:"--hct",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),Jr=Math.PI/180,_a=[1,.007,.0228];function Ta(e){e[1]<0&&(e=wt.fromBase(wt.toBase(e)));const t=Math.log(Math.max(1+_a[2]*e[1]*Wt.flRoot,1))/_a[2],a=e[0]*Jr,o=t*Math.cos(a),i=t*Math.sin(a);return[e[2],o,i]}function Zr(e,t){[e,t]=R([e,t]);let[a,o,i]=Ta(wt.from(e)),[r,s,n]=Ta(wt.from(t));return Math.sqrt((a-r)**2+(o-s)**2+(i-n)**2)}const Oa={deltaE76:br,deltaECMC:vr,deltaE2000:fo,deltaEJz:Er,deltaEITP:Ar,deltaEOK:Nt,deltaEHCT:Zr};function Qr(e){const t=e?Math.floor(Math.log10(Math.abs(e))):0;return Math.max(parseFloat(`1e${t-2}`),1e-6)}const Da={hct:{method:"hct.c",jnd:2,deltaEMethod:"hct",blackWhiteClamp:{}},"hct-tonal":{method:"hct.c",jnd:0,deltaEMethod:"hct",blackWhiteClamp:{channel:"hct.t",min:0,max:100}}};function Be(e,{method:t=le.gamut_mapping,space:a=void 0,deltaEMethod:o="",jnd:i=2,blackWhiteClamp:r={}}={}){if(e=R(e),no(arguments[1])?a=arguments[1]:a||(a=e.space),a=b.get(a),Ie(e,a,{epsilon:0}))return e;let s;if(t==="css")s=es(e,{space:a});else{if(t!=="clip"&&!Ie(e,a)){Object.prototype.hasOwnProperty.call(Da,t)&&({method:t,jnd:i,deltaEMethod:o,blackWhiteClamp:r}=Da[t]);let n=fo;if(o!==""){for(let c in Oa)if("deltae"+o.toLowerCase()===c.toLowerCase()){n=Oa[c];break}}let l=Be(I(e,a),{method:"clip",space:a});if(n(e,l)>i){if(Object.keys(r).length===3){let M=b.resolveCoord(r.channel),E=Ue(I(e,M.space),M.id);if(_e(E)&&(E=0),E>=r.max)return I({space:"xyz-d65",coords:re.D65},e.space);if(E<=r.min)return I({space:"xyz-d65",coords:[0,0,0]},e.space)}let c=b.resolveCoord(t),d=c.space,u=c.id,h=I(e,d);h.coords.forEach((M,E)=>{_e(M)&&(h.coords[E]=0)});let g=(c.range||c.refRange)[0],S=Qr(i),x=g,_=Ue(h,u);for(;_-x>S;){let M=vt(h);M=Be(M,{space:a,method:"clip"}),n(h,M)-i<S?x=Ue(h,u):_=Ue(h,u),jt(h,u,(x+_)/2)}s=I(h,a)}else s=l}else s=I(e,a);if(t==="clip"||!Ie(s,a,{epsilon:0})){let n=Object.values(a.coords).map(l=>l.range||[]);s.coords=s.coords.map((l,c)=>{let[d,u]=n[c];return d!==void 0&&(l=Math.max(d,l)),u!==void 0&&(l=Math.min(l,u)),l})}}return a!==e.space&&(s=I(s,e.space)),e.coords=s.coords,e}Be.returns="color";const La={WHITE:{space:He,coords:[1,0,0]},BLACK:{space:He,coords:[0,0,0]}};function es(e,{space:t}={}){e=R(e),t||(t=e.space),t=b.get(t);const i=b.get("oklch");if(t.isUnbounded)return I(e,t);const r=I(e,i);let s=r.coords[0];if(s>=1){const g=I(La.WHITE,t);return g.alpha=e.alpha,I(g,t)}if(s<=0){const g=I(La.BLACK,t);return g.alpha=e.alpha,I(g,t)}if(Ie(r,t,{epsilon:0}))return I(r,t);function n(g){const S=I(g,t),x=Object.values(t.coords);return S.coords=S.coords.map((_,M)=>{if("range"in x[M]){const[E,G]=x[M].range;return ir(E,_,G)}return _}),S}let l=0,c=r.coords[1],d=!0,u=vt(r),h=n(u),y=Nt(h,u);if(y<.02)return h;for(;c-l>1e-4;){const g=(l+c)/2;if(u.coords[1]=g,d&&Ie(u,t,{epsilon:0}))l=g;else if(h=n(u),y=Nt(h,u),y<.02){if(.02-y<1e-4)break;d=!1,l=g}else c=g}return h}function I(e,t,{inGamut:a}={}){e=R(e),t=b.get(t);let o=t.from(e),i={space:t,coords:o,alpha:e.alpha};return a&&(i=Be(i,a===!0?void 0:a)),i}I.returns="color";function nt(e,{precision:t=le.precision,format:a="default",inGamut:o=!0,...i}={}){let r;e=R(e);let s=a;a=e.space.getFormat(a)??e.space.getFormat("default")??b.DEFAULT_FORMAT;let n=e.coords.slice();if(o||=a.toGamut,o&&!Ie(e)&&(n=Be(vt(e),o===!0?void 0:o).coords),a.type==="custom")if(i.precision=t,a.serialize)r=a.serialize(n,e.alpha,i);else throw new TypeError(`format ${s} can only be used to parse colors, not for serialization`);else{let l=a.name||"color";a.serializeCoords?n=a.serializeCoords(n,t):t!==null&&(n=n.map(h=>Rt(h,{precision:t})));let c=[...n];if(l==="color"){let h=a.id||a.ids?.[0]||e.space.id;c.unshift(h)}let d=e.alpha;t!==null&&(d=Rt(d,{precision:t}));let u=e.alpha>=1||a.noAlpha?"":`${a.commas?",":" /"} ${d}`;r=`${l}(${c.join(a.commas?", ":" ")}${u})`}return r}const ts=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],as=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]],os=new De({id:"rec2020-linear",cssId:"--rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:ts,fromXYZ_M:as}),ot=1.09929682680944,Ra=.018053968510807,is=new De({id:"rec2020",name:"REC.2020",base:os,toBase(e){return e.map(function(t){return t<Ra*4.5?t/4.5:Math.pow((t+ot-1)/ot,1/.45)})},fromBase(e){return e.map(function(t){return t>=Ra?ot*Math.pow(t,.45)-(ot-1):4.5*t})}}),rs=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],ss=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]],ns=new De({id:"p3-linear",cssId:"--display-p3-linear",name:"Linear P3",white:"D65",toXYZ_M:rs,fromXYZ_M:ss}),ls=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],cs=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]],ds=new De({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:ls,fromXYZ_M:cs}),Aa={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let Na=Array(3).fill("<percentage> | <number>[0, 255]"),Ua=Array(3).fill("<number>[0, 255]");const Te=new De({id:"srgb",name:"sRGB",base:ds,fromBase:e=>e.map(t=>{let a=t<0?-1:1,o=t*a;return o>.0031308?a*(1.055*o**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let a=t<0?-1:1,o=t*a;return o<=.04045?t/12.92:a*((o+.055)/1.055)**2.4}),formats:{rgb:{coords:Na},rgb_number:{name:"rgb",commas:!0,coords:Ua,noAlpha:!0},color:{},rgba:{coords:Na,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:Ua},hex:{type:"custom",toGamut:!0,test:e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,a=>{t.push(parseInt(a,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:a=!0}={})=>{t<1&&e.push(t),e=e.map(r=>Math.round(r*255));let o=a&&e.every(r=>r%17===0);return"#"+e.map(r=>o?(r/17).toString(16):r.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=Aa.black,t.alpha=0):t.coords=Aa[e],t.coords)return t}}}}),us=new De({id:"p3",cssId:"display-p3",name:"P3",base:ns,fromBase:Te.fromBase,toBase:Te.toBase});le.display_space=Te;let hs;if(typeof CSS<"u"&&CSS.supports)for(let e of[ee,is,us]){let t=e.getMinCoords(),o=nt({space:e,coords:t,alpha:1});if(CSS.supports("color",o)){le.display_space=e;break}}function ps(e,{space:t=le.display_space,...a}={}){let o=nt(e,a);if(typeof CSS>"u"||CSS.supports("color",o)||!le.display_space)o=new String(o),o.color=e;else{let i=e;if((e.coords.some(_e)||_e(e.alpha))&&!(hs??=CSS.supports("color","hsl(none 50% 50%)"))&&(i=vt(e),i.coords=i.coords.map(da),i.alpha=da(i.alpha),o=nt(i,a),CSS.supports("color",o)))return o=new String(o),o.color=i,o;i=I(i,t),o=new String(nt(i,a)),o.color=i}return o}const We=new b({id:"oklch",name:"Oklch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:He,fromBase(e){let[t,a,o]=e,i;const r=2e-4;return Math.abs(a)<r&&Math.abs(o)<r?i=NaN:i=Math.atan2(o,a)*180/Math.PI,[t,Math.sqrt(a**2+o**2),be(i)]},toBase(e){let[t,a,o]=e,i,r;return isNaN(o)?(i=0,r=0):(i=a*Math.cos(o*Math.PI/180),r=a*Math.sin(o*Math.PI/180)),[t,i,r]},formats:{oklch:{coords:["<percentage> | <number>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});b.register(We);b.register(Te);const ms=e=>I({space:Te,coords:e},We).coords,Ga=e=>I({space:We,coords:e},Te).coords,fs=e=>I(ho(e),We).coords,gs=e=>ps({space:We,coords:e}),Kt=e=>e<.01,$o=(e,t)=>{const{floor:a=0,headroom:o=0,boost:i=1}=t??{},r=a+e**i*(1-a-o);return yt(0,r,1)};function ws([e,t,a],o){return[$o(1-e,{floor:o,boost:.8}),t,a]}function bs([e,t,a],o){const i=$o(e,{floor:o+.15,headroom:.2,boost:.8}),r=1+.5*(1-i);let s=t*r;const n=.25-.15*i;return s=yt(0,s,n),[i,s,a]}const ys=(e,t)=>Kt(e[1])?ws(e,t):bs(e,t);function vs(e,t){let[a,o,i]=e;if(Kt(o)){const[n,l,c]=t;o=l*(n/(a+.05))**.5,i=c}return[a,o,i]}var zs=Object.defineProperty,Cs=Object.getOwnPropertyDescriptor,Q=(e,t,a,o)=>{for(var i=o>1?void 0:o?Cs(t,a):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(i=(o?s(t,a,i):s(i))||i);return o&&i&&zs(t,a,i),i};let q=class extends ce(ge){constructor(){super(...arguments),this.maxScale=Number.POSITIVE_INFINITY,this.statusbarPlacement="start",this.resizeController=new ro(this,{callback:Xo(()=>this.resize(),100)}),this.contentTabIndex=P,this.redrawWhenVisible=async()=>{document.visibilityState==="visible"&&await this.redraw()},this.minPuzzleDimension=64,this.canvasReady=!1,this.canvasDpr=window.devicePixelRatio??1,this.inCreateCanvas=!1}willUpdate(e){this.renderedPuzzleGameId=this.puzzle?.currentGameId,this.renderedPuzzleParams=this.puzzle?.currentParams,this.renderedColorScheme=Pt.get()}async updated(e){if(e.has("puzzle")&&this.canvas&&this.destroyCanvas(),!this.canvas&&this.puzzle&&this.puzzle.currentGameId)await this.createCanvas();else if(this.puzzle&&this.canvasReady){let t=!1,a=!1;e.has("renderedColorScheme")&&await this.updateColorPalette(),(e.has("maxScale")||e.has("renderedPuzzleParams"))&&(t=!0),e.has("renderedPuzzleGameId")&&(e.get("renderedPuzzleGameId")===void 0&&(t=!0),a=!0),t&&await this.resize()&&(a=!1),a&&await this.puzzle.redraw()}}connectedCallback(){super.connectedCallback(),document.addEventListener("visibilitychange",this.redrawWhenVisible),window.addEventListener("focus",this.redrawWhenVisible)}async disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.redrawWhenVisible),window.removeEventListener("focus",this.redrawWhenVisible)}render(){return f`
      <div part="content" tabindex=${this.contentTabIndex}>
        ${this.statusbarPlacement==="start"?this.renderStatusbar():P}
        ${this.renderPuzzle()}
        ${this.statusbarPlacement==="end"?this.renderStatusbar():P}
        ${this.renderLoadingIndicator()}
      </div>
    `}renderPuzzle(){return f`
      <div part="puzzle">${this.renderCanvas()}</div>
    `}renderCanvas(){return f`<div id="canvasPlaceholder"></div>`}renderStatusbar(){if(!this.puzzle?.wantsStatusbar)return P;const e=this.canvasSize?io({"max-width":`${this.canvasSize.w}px`}):P;return f`
      <div part="statusbar" role="status" style=${e}>${this.puzzle?.statusbarText}</div>
    `}renderLoadingIndicator(){const e=he({loading:!this.puzzle?.currentGameId||this.puzzle.generatingGame||!this.canvasReady});return f`
      <div id="loadingIndicator" class=${e}>
        <slot name="loading"></slot>
      </div>
    `}async redraw(){this.canvas&&this.canvasReady&&await this.puzzle?.redraw()}getAvailableCanvasSize(){let{width:e,height:t}=this.getBoundingClientRect();const a=this.contentPart;a&&(e-=a.offsetWidth,t-=a.offsetHeight);const o=this.canvas??this.canvasPlaceholder;return o&&(e+=o.offsetWidth,t+=o.offsetHeight),e=Math.floor(Math.max(e,this.minPuzzleDimension)),t=Math.floor(Math.max(t,this.minPuzzleDimension)),{w:e,h:t}}async resize(e=!1){if(!this.hasUpdated||!this.puzzlePart)return!1;const t=this.getAvailableCanvasSize();let a=t;if(this.puzzle?.currentGameId){if(this.maxScale>0&&this.maxScale<Number.POSITIVE_INFINITY){const i=await this.puzzle.preferredSize(),r={w:this.maxScale*i.w,h:this.maxScale*i.h};t.w=Math.min(r.w,t.w),t.h=Math.min(r.h,t.h)}a=await this.puzzle.size(t,!0,1)}const o=a.w!==this.canvasSize?.w||a.h!==this.canvasSize?.h;return o&&(this.canvasSize=a,await this.updateCanvasSize(),this.puzzle&&this.canvasReady&&await this.puzzle.redraw()),o}async createCanvas(){if(this.canvas)throw new Error("PuzzleView.createCanvas called when canvas already exists");if(!this.canvasPlaceholder?.parentElement)throw new Error("PuzzleView.createCanvas called before canvasPlaceholder rendered");if(!this.puzzle)throw new Error("PuzzleView.createCanvas called before puzzle available");if(!this.puzzle.currentGameId)throw new Error("PuzzleView.createCanvas called before game set up");if(this.inCreateCanvas)return;this.inCreateCanvas=!0,this.canvasReady=!1,this.canvas=document.createElement("canvas"),this.canvasPlaceholder.parentElement.insertBefore(this.canvas,this.canvasPlaceholder);const e=this.canvas.transferControlToOffscreen(),{fontFamily:t,fontWeight:a,fontStyle:o}=window.getComputedStyle(this.canvas),i={fontFamily:t,fontWeight:a,fontStyle:o};if(await this.puzzle.attachCanvas(e,i),await this.updateColorPalette(),await this.resize()||await this.updateCanvasSize(),!this.canvasSize)throw new Error("PuzzleView.createCanvas has no canvasSize");await this.puzzle.resizeDrawing(this.canvasSize,this.canvasDpr),await this.puzzle.redraw(),this.canvas.classList.add("attached"),this.canvasReady=!0,this.inCreateCanvas=!1}destroyCanvas(){this.canvas&&(this.canvas.remove(),this.canvas=void 0)}async updateCanvasSize(){if(this.canvasSize){const{w:e,h:t}=this.canvasSize;for(const a of[this.canvas,this.canvasPlaceholder])a&&(a.style.width=`${e}px`,a.style.height=`${t}px`);this.puzzle&&this.canvasReady&&await this.puzzle.resizeDrawing(this.canvasSize,this.canvasDpr)}}async updateColorPalette(){if(!this.puzzle||!this.contentPart||!this.canvas)throw new Error("updateColorPalette called before puzzle ready");const e=Pt.get()==="dark",{paletteBgIndex:t=0,darkMode:a}=ao[this.puzzle.puzzleId]??{};this.contentPart.style.removeProperty("--background-color");const o=window.getComputedStyle(this.contentPart),i=fs(o.backgroundColor),[r,s,n]=i,l=Ga(e?[1,0,0]:[r,0,0]);let d=(await this.puzzle.getColourPalette(l)).map(ms);if(e&&(d=d.map(([h,y,g],S)=>{const x=a?.paletteOverrides?.[S];return Array.isArray(x)?[h,y,g]=x:x!==!1&&([h,y,g]=ys([h,y,g],r),typeof x=="number"&&(h*=x,h<0&&(h=r-h),h=yt(0,h,1))),[h,y,g]}),a?.paletteSwaps))for(const[h,y]of a.paletteSwaps)[d[h],d[y]]=[d[y],d[h]];!Kt(s)&&!Number.isNaN(n)&&(d=d.map(h=>vs(h,i)));const u=d.map(gs);await this.puzzle.setDrawingPalette(u),this.contentPart.style.setProperty("--background-color",u[t])}};q.styles=[U`
      :host {
        /* Padding around everything, spacing between puzzle and status bar */
        --spacing: var(--wa-space-s);

        display: flex;
        align-items: center;
        justify-content: center;

        /* Content area properties, for parent overrides */
        --background-color: inherit;
        --border: none;
        --border-radius: none;
      }

      canvas {
        display: block;
      }
      
      canvas + #canvasPlaceholder {
        /* Hide the placeholder when the canvas is in the DOM */
        display: none;
      }
      
      @media (prefers-reduced-motion: no-preference) {
        canvas.attached, #canvasPlaceholder {
          transition:
              width 75ms ease-in-out,
              height 75ms ease-in-out;
        }
      }
      
      [part="content"] {
        background-color: var(--background-color);
        border: var(--border);
        border-radius: var(--border-radius);

        /* For sizing the loadingIndicator */
        position: relative;
      }
      
      canvas, #canvasPlaceholder {
        /* Required for accurate sizing calculations */
        padding: 0 !important;
        border-width: 0 !important;
      }

      [part="puzzle"] {
        box-sizing: border-box;
        padding: var(--spacing);
      }
      
      [part="statusbar"] {
        text-align: center;
        
        /* (Top or bottom spacing is redundant with [part="puzzle"]) */
        padding: var(--spacing);
        :host([statusbar-placement="start"]) & {
          padding-block-end: 0;
        }
        :host([statusbar-placement="end"]) & {
          padding-block-start: 0;
        }

        /* Don't collapse when no content (e.g., Rectangles) */
        min-height: 1em;
        max-height: 1em;
        line-height: 1.0;
        text-wrap: nowrap;
        text-overflow: ellipsis;

        /* For puzzles with timers (e.g., Mines), variable width is distracting */
        font-variant-numeric: tabular-nums;
      }

      #loadingIndicator {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        
        visibility: hidden;
        opacity: 0;
        transition: opacity 75ms ease-in-out;
        
        &.loading {
          visibility: visible;
          opacity: 1;
        }
      }
    `];Q([m({type:Number,attribute:"max-scale"})],q.prototype,"maxScale",2);Q([m({attribute:"statusbar-placement",type:String,reflect:!0})],q.prototype,"statusbarPlacement",2);Q([Oe({context:Se,subscribe:!0}),v()],q.prototype,"puzzle",2);Q([v()],q.prototype,"renderedPuzzleGameId",2);Q([v()],q.prototype,"renderedPuzzleParams",2);Q([v()],q.prototype,"renderedColorScheme",2);Q([A("[part=content]")],q.prototype,"contentPart",2);Q([A("[part=puzzle]")],q.prototype,"puzzlePart",2);Q([A("#canvasPlaceholder")],q.prototype,"canvasPlaceholder",2);Q([v()],q.prototype,"canvasReady",2);q=Q([D("puzzle-view")],q);var $=(e=>(e[e.LEFT_BUTTON=512]="LEFT_BUTTON",e[e.MIDDLE_BUTTON=513]="MIDDLE_BUTTON",e[e.RIGHT_BUTTON=514]="RIGHT_BUTTON",e[e.LEFT_DRAG=515]="LEFT_DRAG",e[e.MIDDLE_DRAG=516]="MIDDLE_DRAG",e[e.RIGHT_DRAG=517]="RIGHT_DRAG",e[e.LEFT_RELEASE=518]="LEFT_RELEASE",e[e.MIDDLE_RELEASE=519]="MIDDLE_RELEASE",e[e.RIGHT_RELEASE=520]="RIGHT_RELEASE",e[e.CURSOR_UP=521]="CURSOR_UP",e[e.CURSOR_DOWN=522]="CURSOR_DOWN",e[e.CURSOR_LEFT=523]="CURSOR_LEFT",e[e.CURSOR_RIGHT=524]="CURSOR_RIGHT",e[e.CURSOR_SELECT=525]="CURSOR_SELECT",e[e.CURSOR_SELECT2=526]="CURSOR_SELECT2",e[e.UI_LOWER_BOUND=527]="UI_LOWER_BOUND",e[e.UI_QUIT=528]="UI_QUIT",e[e.UI_NEWGAME=529]="UI_NEWGAME",e[e.UI_SOLVE=530]="UI_SOLVE",e[e.UI_UNDO=531]="UI_UNDO",e[e.UI_REDO=532]="UI_REDO",e[e.UI_UPPER_BOUND=533]="UI_UPPER_BOUND",e[e.MOD_STYLUS=2048]="MOD_STYLUS",e[e.MOD_CTRL=4096]="MOD_CTRL",e[e.MOD_SHFT=8192]="MOD_SHFT",e[e.MOD_NUM_KEYPAD=16384]="MOD_NUM_KEYPAD",e[e.MOD_MASK=30720]="MOD_MASK",e))($||{}),ks=Object.defineProperty,xs=Object.getOwnPropertyDescriptor,ye=(e,t,a,o)=>{for(var i=o>1?void 0:o?xs(t,a):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(i=(o?s(t,a,i):s(i))||i);return o&&i&&ks(t,a,i),i};let H=class extends q{constructor(){super(...arguments),this.swapMouseButtons=!1,this.longPress=!0,this.twoFingerTap=!0,this.secondaryButtonHoldTime=350,this.secondaryButtonDragThreshold=8,this.secondaryButtonAudioVolume=40,this.contentTabIndex="0",this.handleKeyEvent=async e=>{if(!this.puzzle)return;if(e.key==="Escape"){this.pointerTracking&&(e.preventDefault(),await this.cancelPointerTracking());return}if(e.key==="Copy"||e.key==="c"&&Xe(e)){e.preventDefault(),await this.puzzle.copyImage();return}const t=this.eventKeyToPuzzleKey(e.key);if(t===void 0)return;let a=0;e.shiftKey&&(a|=$.MOD_SHFT),Xe(e)&&(a|=$.MOD_CTRL),e instanceof KeyboardEvent&&e.location===3&&(a|=$.MOD_NUM_KEYPAD),await this.puzzle.processKey(t|a)},this.lastTouchStart=0,this.doubleTapTime=750}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this.handleKeyEvent)}async disconnectedCallback(){await super.disconnectedCallback(),this.removeEventListener("keydown",this.handleKeyEvent)}focus(e){this.contentPart?.focus(e)}blur(){this.contentPart?.blur()}renderPuzzle(){return f`
      <div part="puzzle"
        @contextmenu=${this.handleContextMenu}
        @pointerdown=${this.handlePointerDown}
        @pointermove=${this.handlePointerMove}
        @pointerup=${this.handlePointerUp}
        @pointercancel=${this.handlePointerCancel}
        @click=${Ot(oa,()=>this.handleClick)}
        @touchstart=${Ot(oa,()=>this.handleTouchStart)}
      >${this.renderCanvas()}</div>
    `}getPuzzleLocation(e){if(!this.canvas)throw new Error("getPuzzleLocation called before render (?!)");const t=this.canvas.getBoundingClientRect();return{x:e.clientX-t.left,y:e.clientY-t.top}}secondaryButtonFeedback(){if(this.secondaryButtonAudioVolume>0){const e=yt(0,this.secondaryButtonAudioVolume,100);si({volume:e})}}eventKeyToPuzzleKey(e){let t=H.puzzleKeyMap[e];if(t===void 0&&e.length===1){const a=e.charCodeAt(0);a<=127&&(t=a)}return t}wantsKeyEvent(e){const t=Xe(e);return e.key==="Escape"||e.key==="Copy"||e.key==="c"&&t||this.eventKeyToPuzzleKey(e.key)!==void 0&&!t}async handlePointerDown(e){if(!this.puzzle||!this.canvas||!e.isPrimary||e.buttons!==H.buttonToButtons[e.button])return;this.pointerTracking&&(this.canvas?.hasPointerCapture(this.pointerTracking.pointerId)&&this.canvas.releasePointerCapture(this.pointerTracking.pointerId),this.pointerTracking=void 0);const t=this.getPuzzleLocation(e),a=e.pointerId;let o=e.button>=Ce.Main&&e.button<=Ce.Secondary?e.button:Ce.Main;Xe(e)?o=Ct(o):e.shiftKey&&(o=Ce.Auxiliary),this.swapMouseButtons&&(o=Ct(o));const{isSecondary:i,unhandledEvent:r}=await Ji(e,{longPress:this.longPress,twoFingerTap:this.twoFingerTap,holdTime:this.secondaryButtonHoldTime,dragThreshold:this.secondaryButtonDragThreshold});i&&(o=Ct(o),this.secondaryButtonFeedback());let{press:s,drag:n,release:l}=H.domToPuzzleButtons[o];(e.pointerType==="touch"||e.pointerType==="pen")&&(s|=$.MOD_STYLUS,n|=$.MOD_STYLUS,l|=$.MOD_STYLUS);const c=await this.puzzle.processMouse(t,s);if(c){this.pointerTracking={drag:n,release:l,pointerId:a};try{this.canvas.setPointerCapture(a)}catch{}}else await this.puzzle.processMouse(t,l);c&&r?.pointerId===a&&{pointermove:this.handlePointerMove,pointerup:this.handlePointerUp,pointercancel:this.handlePointerCancel}[r.type]?.call(this,r)}async handlePointerMove(e){this.pointerTracking?.pointerId===e.pointerId&&await this.puzzle?.processMouse(this.getPuzzleLocation(e),this.pointerTracking.drag)}async handlePointerUp(e){this.pointerTracking?.pointerId===e.pointerId&&(await this.puzzle?.processMouse(this.getPuzzleLocation(e),this.pointerTracking.release),this.pointerTracking=void 0)}async handlePointerCancel(e){this.pointerTracking?.pointerId===e.pointerId&&await this.cancelPointerTracking()}async cancelPointerTracking(){if(this.pointerTracking){if(this.puzzle){const e={x:-100,y:-100};await this.puzzle.processMouse(e,this.pointerTracking.drag),await this.puzzle.processMouse(e,this.pointerTracking.release)}this.canvas?.hasPointerCapture(this.pointerTracking.pointerId)&&this.canvas.releasePointerCapture(this.pointerTracking.pointerId),this.pointerTracking=void 0}}handleContextMenu(e){e.preventDefault()}handleClick(e){e.preventDefault()}handleTouchStart(e){const t=Date.now();t-this.lastTouchStart<this.doubleTapTime&&e.preventDefault(),this.lastTouchStart=t}};H.puzzleKeyMap={ArrowDown:$.CURSOR_DOWN,ArrowUp:$.CURSOR_UP,ArrowLeft:$.CURSOR_LEFT,ArrowRight:$.CURSOR_RIGHT,Accept:$.CURSOR_SELECT,CrSel:$.CURSOR_SELECT,Enter:$.CURSOR_SELECT,Select:$.CURSOR_SELECT," ":$.CURSOR_SELECT2,Backspace:127,Clear:127,Delete:127,Undo:$.UI_UNDO,Redo:$.UI_REDO};H.domToPuzzleButtons={[Ce.Auxiliary]:{press:$.MIDDLE_BUTTON,drag:$.MIDDLE_DRAG,release:$.MIDDLE_RELEASE},[Ce.Secondary]:{press:$.RIGHT_BUTTON,drag:$.RIGHT_DRAG,release:$.RIGHT_RELEASE},[Ce.Main]:{press:$.LEFT_BUTTON,drag:$.LEFT_DRAG,release:$.LEFT_RELEASE}};H.buttonToButtons={0:1,1:4,2:2};H.styles=[...q.styles,U`
      [part="content"]:focus-visible {
        outline: var(--wa-focus-ring);
        outline-offset: var(--wa-focus-ring-offset);
      }

      [part="puzzle"], 
      [part="statusbar"] {
        /* Disable double-tap to zoom (puzzles want rapid taps) 
         * and single-finger panning (puzzles want dragging).
         * Allow zooming and multi-finger panning for accessibility.
         * (Insufficient on iOS Safari; see @click and @touchstart handlers.) 
         */
        touch-action: pinch-zoom;

        /* Disable long-press selection/magnifier bubble on iOS Safari.
         * If Safari gets a long-press on something that's not selectable
         * (like the puzzle), it looks for something--anything--nearby
         * to select instead (like the statusbar). A bubble on the statusbar
         * when you long-press the puzzle is annoying, so disable on both.
         */
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
        cursor: default;
      }
    `];ye([m({type:Boolean})],H.prototype,"swapMouseButtons",2);ye([m({type:Boolean})],H.prototype,"longPress",2);ye([m({type:Boolean})],H.prototype,"twoFingerTap",2);ye([m({type:Number})],H.prototype,"secondaryButtonHoldTime",2);ye([m({type:Number})],H.prototype,"secondaryButtonDragThreshold",2);ye([m({type:Number})],H.prototype,"secondaryButtonAudioVolume",2);ye([qt({passive:!1})],H.prototype,"handleTouchStart",1);H=ye([D("puzzle-view-interactive")],H);function Ha(e,t){return new Promise(a=>{if(e.classList.contains(t)){a();return}const o=new Set(e.getAnimations({subtree:!0}).map(c=>c.id));e.classList.add(t);const i=e.getAnimations({subtree:!0}).filter(c=>!o.has(c.id));if(i.length===0){e.classList.remove(t),a();return}const r=new AbortController,{signal:s}=r,n=()=>{e.classList.remove(t),r.abort(),a()},l=()=>{i.some(d=>d.playState==="running"||d.playState==="paused")||n()};e.addEventListener("animationend",l,{signal:s}),e.addEventListener("animationcancel",l,{signal:s}),l()})}var Ss=Object.defineProperty,$s=Object.getOwnPropertyDescriptor,Ke=(e,t,a,o)=>{for(var i=o>1?void 0:o?$s(t,a):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(i=(o?s(t,a,i):s(i))||i);return o&&i&&Ss(t,a,i),i};function Ms(e){let t=0;for(let a=0;a<e.length;a++)t=(t<<5)-t+e.charCodeAt(a)&4294967295;return t}function it(e,t){return e[Math.abs(t)%e.length]}let B=class extends ce(ge){constructor(){super(...arguments),this.delay=100,this.wantsOpen=!1}get open(){return this.dialog?.open??!1}set open(e){e?this.show():this.hide()}render(){if(!this.puzzle||this.puzzle.status==="ongoing")return;const e=Ms(this.puzzle.randomSeed??this.puzzle.currentGameId??"unknown");let t,a;const o=[f`
        <wa-button autofocus variant="brand" @click=${this.newGame}>
          <wa-icon slot="start" name="new-game"></wa-icon>
          New game
        </wa-button>
      `];switch(this.puzzle.status){case"solved":t=it(B.solvedMessages,e),a=it(B.solvedIcons,e),o.push(f`<slot name="extra-actions-solved"></slot>`);break;case"solved-with-help":t="What’s next?",o.push(f`<slot name="extra-actions-solved"></slot>`);break;case"lost":t=it(B.lostMessages,e),a=it(B.lostIcons,e),o.push(...this.renderLostActions()),o.push(f`<slot name="extra-actions-lost"></slot>`);break}return o.push(f`<slot name="extra-actions"></slot>`),f`
      <dialog
          part="dialog"
          class=${this.puzzle.status}
          aria-labelledby="message"
          @cancel=${this.handleDialogCancel}
          @click=${this.handleDialogClick}
      >
        <div part="header">
          ${a?f`<wa-icon part="icon" name=${a}></wa-icon>`:P}
          <div part="message" id="message">${t}</div>
          <wa-button part="dismiss" appearance="plain" @click=${this.handleDismissClick}>
            <wa-icon library="system" name="xmark" variant="solid" label="Close"></wa-icon>
          </wa-button>
        </div>
        <div part="footer">
          <div part="actions">${o}</div>
        </div>
      </dialog>
    `}renderLostActions(){const e=[f`
        <wa-button @click=${this.restartGame}>
          <wa-icon slot="start" name="restart-game"></wa-icon>
          Restart
        </wa-button>
      `];return this.puzzle?.canUndo&&e.push(f`
        <wa-button @click=${this.undo}>
          <wa-icon slot="start" name="undo"></wa-icon>
          Undo
        </wa-button>
      `),this.puzzle?.canSolve&&e.push(f`
        <wa-button @click=${this.showSolution}>
          <wa-icon slot="start" name="show-solution"></wa-icon>
          Show solution
        </wa-button>
      `),e}async updated(){await It(10),await Promise.all([this.updateComplete,this.puzzle?.timerComplete]),await It(this.delay),this.isConnected&&this.dialog&&!this.wantsOpen&&await this.show()}async handleDialogCancel(e){e.preventDefault(),await this.hide()}async handleDialogClick(e){if(e.target===this.dialog){const{clientX:t,clientY:a}=e,{top:o,bottom:i,left:r,right:s}=this.dialog.getBoundingClientRect();t>=r&&t<=s&&a>=o&&a<=i||await this.hide()}}async handleDismissClick(){await this.hide()}async show(){if(this.dialog&&!this.wantsOpen){this.wantsOpen=!0,this.dialog.showModal();const e=this.dialog.querySelector("[autofocus]");return e instanceof HTMLElement&&typeof e.focus=="function"&&e.focus(),Ha(this.dialog,"show")}}async hide(){this.dialog?.open&&this.wantsOpen&&(this.wantsOpen=!1,await Ha(this.dialog,"hide"),this.wantsOpen||this.dialog?.close())}async newGame(){await this.hide(),await this.puzzle?.newGame()}async undo(){await this.hide(),await this.puzzle?.undo()}async restartGame(){await this.hide(),await this.puzzle?.restartGame()}async showSolution(){await this.hide(),await this.puzzle?.solve()}};B.solvedIcons=["solved-a","solved-b","solved-c","solved-d","solved-e","solved-f","solved-g"];B.lostIcons=["lost-a"];B.solvedMessages=["Awesome!","Brilliant!","Clever!","Complete!","Genius!","Good job!","Nice work!","Outstanding!","Perfect!","Solved!","Splendid!","Success!","Superb!","Victory!","Way to go!","Well done!","Woo hoo!","You got it!"];B.lostMessages=["Out of moves"];B.styles=[xe,U`
      :host {
        display: contents;

        --width: min(calc(100vw - 2 * var(--wa-space-l)), 25rem);
        --padding: var(--wa-space-l);
        --show-duration: 200ms;
        --hide-duration: 200ms;
        --opacity: 1; /* Overrides dialog and backdrop, e.g., for stacking dialogs */
      }
      
      * {
        box-sizing: border-box;
      }
      
      dialog:focus:not(:focus-visible) {
        outline: none;
      }
      dialog:focus-visible {
        /* Inset the focus ring so it doesn't compete with the backdrop shadow */
        outline: var(--wa-focus-ring);
        outline-offset: calc(-1 * (var(--wa-focus-ring-offset) + var(--wa-focus-ring-width)));
      }
      
      dialog[open] {
        display: flex;
        flex-direction: column;
        inline-size: var(--width);
        max-inline-size: calc(100% - var(--wa-space-2xl));
        max-block-size: calc(100% - var(--wa-space-2xl));

        /* Ensure there's enough vertical padding for phones 
         * with non-updating vh (e.g. iOS Safari) */
        @media screen and (max-width: 420px) {
          max-block-size: min(80vh, calc(100% - var(--wa-space-2xl)));
          max-block-size: min(80dvh, calc(100% - var(--wa-space-2xl)));
        }
        
        background-color: var(--wa-color-surface-raised);
        border-radius: var(--wa-panel-border-radius);
        border: none;
        box-shadow: var(--wa-shadow-l);
        margin: auto;

        padding: var(--padding);
        gap: var(--padding);
      }
      
      dialog[open]::backdrop {
        /* (Fallback rgb() is technically unnecessary here as of Safari 17.4.) */
        background-color: var(--wa-color-overlay-modal, rgb(0 0 0 / 0.25));
      }
      
      dialog[open], dialog[open]::backdrop {
        opacity: var(--opacity);
        transition: opacity var(--wa-transition-normal) var(--wa-transition-easing);
      }
      
      [part~="header"] {
        display: flex;
        align-items: center;
        gap: var(--wa-space-m);
      }
      [part~="icon"] {
        font-size: var(--wa-font-size-l);
        
        dialog.solved & {
          color: var(--wa-color-brand-fill-loud);
        }
      }
      [part~="message"] {
        flex: 1 1 auto;
        font-size: var(--wa-font-size-l);
        font-weight: var(--wa-font-weight-semibold);
        line-height: var(--wa-line-height-condensed);
      }
      [part~="dismiss"] {
        margin: calc(-1 * var(--wa-space-xs));
        &::part(base) {
          padding: var(--wa-space-xs);
          height: auto;
          width: auto;
        }
      }
      [part~="footer"] {
        /* Stretch to full available width */
        display: flex;
        align-items: center;
        justify-content: center;
      }
      [part~="actions"] {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-content: center;
        align-items: center;
        gap: var(--wa-space-s);
        
        inline-size: fit-content;

        /* Single, non-stretched column when narrow */
        container-type: inline-size;
        @container (max-inline-size: 26em) {
          grid-template-columns: auto;
        }
      }
      
      wa-button::part(label) {
        /* Align action button icons at left.
         * No way to target ::slotted(wa-button)::part(label),
         * so this must be repeated in the parent for slotted buttons. */
        flex: 1 1 auto;
        text-align: center;
      }

      dialog.show {
        animation: scale-in var(--show-duration) ease forwards;
        &::backdrop {
          animation: fade-in var(--show-duration) ease forwards;
        }
      }
      dialog.hide {
        animation: scale-in var(--hide-duration) ease reverse forwards;
        &::backdrop {
          animation: fade-in var(--hide-duration) ease reverse forwards;
        }
      }

      @media (prefers-reduced-motion: no-preference) {
        /* Longer, flashier animation on the dialog itself */
        dialog.show {
          animation: swoop-in 500ms ease forwards;
        }
        dialog.hide {
          animation: drop-out 300ms ease forwards;
        }
      }
      
      @keyframes fade-in {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
      
      @keyframes scale-in {
        from {
          opacity: 0;
          scale: 0.8;
        }
        to {
          opacity: 1;
          scale: 1;
        }
      }

      @keyframes swoop-in {
        from {
          opacity: 0;
          scale: 0.2;
          translate: 0 calc(-50vh + 50%);
        }
        30% {
          translate: 0 calc(-50vh + 50% - var(--wa-space-l));
        }
        70% {
          translate: 0 var(--wa-space-m);
          scale: 1;
        }
        85% {
          opacity: 1;
          scale: 1.03;
          translate: 0 0;
        }
        to {
          scale: 1;
        }
      }
      
      @keyframes drop-out {
        from {
          opacity: 1;
          scale: 1;
          translate: 0 0;
        }
        30% {
          opacity: 1;
          translate: 0 calc(-1 * var(--wa-space-xl));
        }
        to {
          scale: 0.4;
          opacity: 0;
          translate: 0 50%;
        }
      }
    `];Ke([Oe({context:Se,subscribe:!0}),v()],B.prototype,"puzzle",2);Ke([m({type:Number})],B.prototype,"delay",2);Ke([m({type:Boolean,reflect:!0})],B.prototype,"open",1);Ke([A("dialog")],B.prototype,"dialog",2);B=Ke([D("puzzle-end-notification")],B);var Es=Object.defineProperty,Ps=Object.getOwnPropertyDescriptor,de=(e,t,a,o)=>{for(var i=o>1?void 0:o?Ps(t,a):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(i=(o?s(t,a,i):s(i))||i);return o&&i&&Es(t,a,i),i};const Is=1440*60*1e3;let Z=class extends ce(Jo){constructor(){super(...arguments),this.puzzleId="",this.puzzleLoaded=!1,this.swapMouseButtons=!1,this.handleLoadGame=async e=>{const t=e.target,{filename:a}=e.detail,o=this.shadowRoot?.querySelector("puzzle-context")?.puzzle;if(o&&a){e.preventDefault();const{error:i,gameId:r}=await oe.loadGame(o,a);i!==void 0?await Me({label:"Unable to load game",message:i,type:"error"}):r&&(this.savedGameId=r,this.savedFilename=a,t.open=!1)}},this.handleSaveGame=async e=>{const t=e.target,{filename:a}=e.detail,o=this.shadowRoot?.querySelector("puzzle-context")?.puzzle;o&&a&&(e.preventDefault(),await oe.saveGame(o,a),this.savedGameId=o.currentGameId,this.savedFilename=a,t.open=!1)},this.handleImportGame=async e=>{const t=this.shadowRoot?.querySelector("puzzle-context")?.puzzle;if(t){const a=Object.assign(document.createElement("input"),{type:"file",multiple:!1,accept:".sav,.sgt,.sgtpuzzle,.txt",onchange:async()=>{const o=a.files?.[0];if(o){const i=new Uint8Array(await o.arrayBuffer()),r=await t.loadGame(i);r&&await Me({label:"Unable to import game",message:`${o.name}: ${r}`,type:"error"})}},onerror:async o=>{await Me({label:"Unable to import game",message:String(o),type:"error"})}});a.click()}},this.handleExportGame=async e=>{const t=this.shadowRoot?.querySelector("puzzle-context")?.puzzle;if(t){const a="application/octet-stream",o=await t.saveGame(),i=new Blob([o],{type:a}),r=URL.createObjectURL(i),s=new Date().toLocaleString(),n=e.detail.filename||`${t.displayName} ${s}`;Object.assign(document.createElement("a"),{href:r,download:`${n}.sav`,type:a}).click(),await It(10),URL.revokeObjectURL(r)}},this.handleBubbledKeyDown=async e=>{if(e.key==="Tab")return;const t=document.activeElement;if(t===document.body||t===document.documentElement){const a=this.shadowRoot?.querySelector("puzzle-view-interactive");a?.wantsKeyEvent(e)&&(a.focus(),await a.handleKeyEvent(e))}}}get puzzle(){return this.puzzleContext?.puzzle}get autoSaveFilename(){return this._autoSaveFilename}set autoSaveFilename(e){this._autoSaveFilename=e;const t={...window.history.state,puzzleAutoSavePuzzleId:this.puzzleId,puzzleAutoSaveFilename:e};window.history.replaceState(t,"")}connectedCallback(){super.connectedCallback(),document.addEventListener("click",ia),window.addEventListener("keydown",this.handleBubbledKeyDown);const{puzzleAutoSaveFilename:e,puzzleAutoSavePuzzleId:t}=window.history.state??{};typeof e=="string"&&t===this.puzzleId&&(this._autoSaveFilename=e)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",ia),window.removeEventListener("keydown",this.handleBubbledKeyDown)}willUpdate(e){if(e.has("puzzleId")&&this.puzzleId){const t=qa[this.puzzleId];if(!t)throw new Error(`Unknown puzzleId ${this.puzzleId}`);this.puzzleData=t,this.autoSaveFilename=void 0,this.puzzleLoaded=!1,this.defaultHelpLabel=`${this.puzzleData.name} Help`}}updated(e){super.updated(e),e.has("puzzleId")&&this.showUnfinishedWarning()}render(){if(!this.puzzleData)throw new Error("PuzzleScreen.render without puzzleData");return f`
      <puzzle-context 
          puzzleid=${this.puzzleId}
          @puzzle-loaded=${this.handlePuzzleLoaded}
          @puzzle-params-change=${this.handlePuzzleParamsChange}
          @puzzle-game-state-change=${this.handlePuzzleGameStateChange}
      >
        <main>
          <header>
            ${this.renderGameMenu()}
            <puzzle-type-menu 
                appearance="plain" 
                variant="brand"
                placement=${this.orientation==="vertical"?"bottom":"right"}
                ?without-icon=${this.size==="small"&&this.orientation==="vertical"}
                ?without-label=${this.orientation==="horizontal"}
            ></puzzle-type-menu>
            <wa-button
                appearance="plain" variant="brand"
                href=${Zo(this.puzzleId).href} 
            >${this.compactButtons?f`<wa-icon name="help" label="Help"></wa-icon>`:f`
                  <wa-icon name="help" slot="start"></wa-icon>
                  Help
                `}</wa-button>
          </header>

          <puzzle-view-interactive 
              role="figure"
              aria-label="interactive puzzle displayed as an image"
              statusbar-placement=${T.statusbarPlacement}
              ?longPress=${T.rightButtonLongPress}
              ?swapMouseButtons=${this.swapMouseButtons}
              ?twoFingerTap=${T.rightButtonTwoFingerTap}
              secondaryButtonAudioVolume=${T.rightButtonAudioVolume}
              secondaryButtonHoldTime=${T.rightButtonHoldTime}
              secondaryButtonDragThreshold=${T.rightButtonDragThreshold}
              max-scale=${T.maxScale}
          >
            <wa-skeleton slot="loading" effect="sheen"></wa-skeleton>
          </puzzle-view-interactive>

          <footer>
            ${T.showPuzzleKeyboard?f`<puzzle-keys></puzzle-keys>`:P}
            ${this.renderMouseButtonToggle()}
            <puzzle-history></puzzle-history>
          </footer>
        </main>

        ${T.showEndNotification?this.renderEndNotification():P}
        <dynamic-content></dynamic-content>
      </puzzle-context>
    `}renderEndNotification(){const e=Qo().href;return f`
      <puzzle-end-notification>
        <wa-button
            slot="extra-actions-solved"
            data-command="share"
        >
          <wa-icon slot="start" name="share"></wa-icon>
          Share
        </wa-button>
        <wa-button
            slot="extra-actions-solved"
            data-command="change-type"
        >
          <wa-icon slot="start" name="puzzle-type"></wa-icon>
          Change type
        </wa-button>
        <wa-button
            slot="extra-actions-solved"
            href=${e}
        >
          <wa-icon slot="start" name="back-to-catalog"></wa-icon>
          Other puzzles
        </wa-button>
      </puzzle-end-notification>
    `}renderGameMenu(){const e=this.puzzleData?.unfinished?"unfinished":"game",t=this.puzzleData?.name??"Game",a=typeof navigator.clipboard?.write=="function";return f`
      <wa-dropdown
          placement=${this.orientation==="vertical"?"bottom":"right"}
      >
        <wa-button 
            slot="trigger" 
            class="game-menu-trigger" 
            appearance="plain" variant="brand"
            with-caret
        >${this.orientation==="horizontal"?f`<wa-icon name=${e} label=${t}></wa-icon>`:this.size==="small"?t:f`
                <wa-icon name=${e} slot="start"></wa-icon>
                ${t}
              `}</wa-button>
        <wa-dropdown-item data-command="new-game">
          <wa-icon slot="icon" name="new-game"></wa-icon>
          New game
        </wa-dropdown-item>
        <wa-dropdown-item data-command="restart-game">
          <wa-icon slot="icon" name="restart-game"></wa-icon>
          Restart game
        </wa-dropdown-item>
        ${this.puzzle?.canSolve?f`
              <wa-dropdown-item data-command="solve" ?disabled=${this.puzzle?.status==="solved"}>
                <wa-icon slot="icon" name="show-solution"></wa-icon>
                Solve
              </wa-dropdown-item>
              `:P}
        <wa-divider></wa-divider>
        <wa-dropdown-item data-command="share">
          <wa-icon slot="icon" name="share"></wa-icon>
          Share
        </wa-dropdown-item>
        ${a?f`
              <wa-dropdown-item data-command="copy-image">
                <wa-icon slot="icon" name="copy-image"></wa-icon>
                Copy image
              </wa-dropdown-item>
              `:P}
        <wa-divider></wa-divider>
        <wa-dropdown-item data-command="load-game">
          <wa-icon slot="icon" name="load-game"></wa-icon>
          Load…
        </wa-dropdown-item>
        <wa-dropdown-item data-command="save-game">
          <wa-icon slot="icon" name="save-game"></wa-icon>
          Save…
        </wa-dropdown-item>
        <wa-dropdown-item data-command="enter-gameid">
          <wa-icon slot="icon" name="gameid"></wa-icon>
          Enter ID&hairsp;/&hairsp;seed…
        </wa-dropdown-item>
        <wa-divider></wa-divider>
        <wa-dropdown-item data-command="settings">
          <wa-icon slot="icon" name="settings"></wa-icon>
          Preferences
        </wa-dropdown-item>
        <wa-dropdown-item data-command="about">
          <wa-icon slot="icon" name="info"></wa-icon>
          About
        </wa-dropdown-item>
        <wa-divider></wa-divider>
        <wa-dropdown-item data-command="home">
          <wa-icon slot="icon" name="back-to-catalog"></wa-icon>
          Other puzzles
        </wa-dropdown-item>
        ${P}
      </wa-dropdown>
    `}renderMouseButtonToggle(){return T.showMouseButtonToggle?f`
      <wa-radio-group
          id="mouse-button-toggle"
          appearance="button" 
          orientation="horizontal" 
          aria-label="Tap on puzzle means"
          .value=${this.swapMouseButtons?"right":"left"}
          @change=${()=>{this.swapMouseButtons=!this.swapMouseButtons}}
      >
        <wa-radio appearance="button" value="left"><wa-icon name="mouse-left-button" label="left click"></wa-radio>
        <wa-radio appearance="button" value="right"><wa-icon name="mouse-right-button" label="right click"></wa-radio>
      </wa-radio-group>
    `:P}registerCommandHandlers(){super.registerCommandHandlers(),Object.assign(this.commandMap,{"change-type":this.showTypeMenu,"copy-image":()=>this.puzzle?.copyImage(),"enter-gameid":this.showEnterGameIDDialog,"load-game":this.showLoadGameDialog,"new-game":()=>this.puzzle?.newGame(),redraw:()=>this.shadowRoot?.querySelector("puzzle-view-interactive")?.redraw(),"restart-game":()=>this.puzzle?.restartGame(),"save-game":this.showSaveGameDialog,share:this.showShareDialog,solve:()=>this.puzzle?.solve()})}async showShareDialog(e){await Je(()=>import("./share-dialog-CuIbSc3y.js"),__vite__mapDeps([0,1,2,3,4]));const t=await this.dynamicContent?.addItem({tagName:"share-dialog",render:()=>f`<share-dialog></share-dialog>`});t&&!t.open&&(await t.reset(),t.open=!0),t&&e&&(await t.updateComplete,await t.showPanel(e))}async showLoadGameDialog(){await Je(()=>import("./saved-game-dialogs-CM6zZtAT.js"),__vite__mapDeps([5,2,3,6,1,4]));const e=await this.dynamicContent?.addItem({tagName:"load-game-dialog",render:()=>f`
        <load-game-dialog
            puzzleid=${this.puzzleId}
            @load-game-import=${this.handleImportGame}
            @load-game-load=${this.handleLoadGame}
        ></load-game-dialog>
      `});if(e&&!e.open){const t=this.shadowRoot?.querySelector("puzzle-context")?.puzzle;e.gameInProgress=(t?.totalMoves??0)>0,e.open=!0}}async showSaveGameDialog(){await Je(()=>import("./saved-game-dialogs-CM6zZtAT.js"),__vite__mapDeps([5,2,3,6,1,4]));const e=await this.dynamicContent?.addItem({tagName:"save-game-dialog",render:()=>f`
        <save-game-dialog
            puzzleid=${this.puzzleId}
            @save-game-export=${this.handleExportGame}
            @save-game-save=${this.handleSaveGame}
        ></save-game-dialog>
      `});e&&!e.open&&(e.filename=this.savedFilename??await oe.makeUntitledFilename(this.puzzleId),e.open=!0)}async showEnterGameIDDialog(){await Je(()=>import("./enter-gameid-dialog-iynlSYB4.js"),__vite__mapDeps([7,1,2,3,6,4]));const e=await this.dynamicContent?.addItem({tagName:"enter-gameid-dialog",render:()=>f`<enter-gameid-dialog></enter-gameid-dialog>`});e&&!e.open&&(e.reset(),e.open=!0)}async showTypeMenu(){await this.shadowRoot?.querySelector("puzzle-end-notification")?.hide(),this.shadowRoot?.querySelector("puzzle-type-menu")?.show()}async handlePuzzleLoaded(e){const{puzzle:t}=e.detail;e.preventDefault(),await T.loaded;const a=await T.getPuzzlePreferences(t.puzzleId);await t.setPreferences(a);const o=await T.getParams(t.puzzleId);for(const r of[this.params,o])if(r){const s=await t.setParams(r);if(!s)break;console.warn(`Error setting puzzle ${t.puzzleId} params to "${r}": ${s}. Ignoring.`),r===o?await T.setParams(t.puzzleId,void 0):Me({label:"Ignoring invalid type in URL",message:`type=${r}: ${s}`,type:"warning"})}let i=!1;if(this.gameId){const r=await t.newGameFromId(this.gameId);r?Me({label:"Ignoring invalid id in URL",message:`id=${this.gameId}: ${r}`,type:"warning"}):(i=!0,this.autoSaveFilename=oe.makeAutoSaveFilename())}this.autoSaveFilename||(this.autoSaveFilename=await oe.findMostRecentAutoSave(t.puzzleId)),!i&&!this.params&&this.autoSaveFilename&&(i=await oe.restoreAutoSavedGame(t,this.autoSaveFilename)),i||await t.newGame(),this.puzzleLoaded=!0,await this.shadowRoot?.querySelector("puzzle-context")?.updateComplete}async handlePuzzleParamsChange(e){const{puzzle:t}=e.detail;this.puzzleLoaded&&t.params&&t.params!==await T.getParams(t.puzzleId)&&await T.setParams(t.puzzleId,t.params)}async handlePuzzleGameStateChange(e){const{puzzle:t}=e.detail;if(t.currentGameId){if(t.currentGameId!==this.savedGameId&&(this.savedFilename=void 0,this.savedGameId=t.currentGameId),t.totalMoves>0&&!t.isSolved)this.autoSaveFilename??=oe.makeAutoSaveFilename(),await oe.autoSaveGame(t,this.autoSaveFilename);else if(this.autoSaveFilename){const a=this.autoSaveFilename;this.autoSaveFilename=void 0,await oe.removeAutoSavedGame(t,a)}}}async showUnfinishedWarning(){if(this.puzzleId&&this.puzzleData?.unfinished){await T.loaded;const e=await T.getLastUnfinishedAlert(this.puzzleId),t=Date.now();(e===void 0||t-e>Is)&&(await T.setLastUnfinishedAlert(this.puzzleId,t),await Me({label:"Experimental puzzle",message:`“${this.puzzleData.name}” is an experimental, unfinished puzzle. Don’t be surprised if you find bugs or unexpected behavior. (Check “Help” for the current status.)`,type:"warning",icon:"unfinished",lightDismiss:!0}))}}};Z.styles=[xe,U`
      :host {
        display: block;
        box-sizing: border-box;
        /* Dynamic viewport units Baseline 2023 */
        width: 100vw;
        height: 100vh;
        width: 100dvw;
        height: 100dvh;
      }
      
      main {
        height: 100%;
        box-sizing: border-box;
        position: relative;
  
        display: flex;
        flex-direction: column;
        align-items: stretch;
  
        background-color: var(--wa-color-brand-fill-quiet);
        color: var(--wa-color-text-normal);
      }
  
      header, footer {
        box-sizing: border-box;
        width: 100%;
  
        display: flex;
        justify-content: flex-start;
  
        > *:last-child {
          :host([orientation="vertical"]) & {
            margin-inline-start: auto;
          }
          :host([orientation="horizontal"]) & {
            margin-block-start: auto;
          }
        }
      }
  
      header {
        align-items: baseline;
        padding-block: var(--wa-space-xs);
        /* app-padding less button padding */
        padding-inline: calc(var(--app-padding) - min(var(--wa-form-control-padding-inline), var(--app-padding)));
        gap: 0; /* toolbar buttons all have lots of padding built in */
        background-color: var(--app-theme-color);

        .game-menu-trigger {
          /* Larger label and icon, but not larger overall base height */
          &::part(label), &::part(start) {
            font-size: var(--app-title-font-size);
          }
        }

        puzzle-type-menu {
          flex: 0 1 auto;
          min-width: 1rem;
        }

        wa-button::part(base),
        puzzle-type-menu::part(trigger-base) {
          color: var(--wa-color-text-normal);
        }
      }

      puzzle-view-interactive {
        flex: 1 1 auto;
        min-height: 5rem; /* allows flexing */
        min-width: 5rem;
        margin-block: var(--app-spacing);
        margin-inline: var(--app-padding);
  
        --spacing: var(--app-spacing);
        --background-color: var(--wa-color-surface-default);
        --border-radius: var(--wa-form-control-border-radius);
        
        /* In small layouts, fill the cross axis */
        :host([size="small"]) & {
          :host([orientation="vertical"]) & {
            margin-inline: 0;
            min-width: 100%;
          }
          :host([orientation="horizontal"]) & {
            margin-block: 0;
            min-height: 100%;
          }
        }
      }
      
      puzzle-end-notification {
        &::part(dialog) {
          /* Position at bottom, aligned with puzzle controls */
          margin-block-end: var(--app-padding);
        }
        
        :has(share-dialog[open]) & {
          /* Hide the end notification and its extra backdrop 
           * while share-dialog is open above it */
          --opacity: 0;
        }
        
        & wa-button::part(label) {
          /* Align icons at left of buttons, center labels */
          flex: 1 1 auto;
          text-align: center;
        }
      }
  
      footer {
        align-items: end;
        padding: var(--app-padding);
        gap: var(--app-spacing);
        
        :host([orientation="vertical"]) & {
          padding-block-start: 0;
        }
        :host([orientation="horizontal"]) & {
          padding-inline-start: 0;
        }

        :host([size="small"]) & {
          /* Stack the controls vertically on small screens */
          flex-direction: column;
        }
      }
        
      :host([orientation="horizontal"]) {
        main {
          flex-direction: row;
        }
        header, footer {
          flex-direction: column;
          align-items: end;
        }
        puzzle-keys::part(group) {
          flex-direction: column;
        }
        header, footer {
          max-width: fit-content;
        }
      }
  
      wa-skeleton {
        --color: var(--wa-color-brand-fill-quiet);
        --sheen-color: var(--wa-color-brand-fill-normal);
        &::part(indicator) {
          border-radius: 0;
        }
      }
  
      @media (prefers-reduced-motion: no-preference) {
        .game-menu-trigger {
          transition: font-size var(--wa-transition-fast) var(--wa-transition-easing);
        }
      }
      
      #mouse-button-toggle {
        flex: 0 0 auto;
        wa-radio {
          /* Make it square with icon-only label (1em wide) */
          padding-inline: calc(
              (var(--wa-form-control-height) - 1em) / 2 
              - var(--wa-form-control-border-width));
        }
      }
    `];de([m({type:String,attribute:"puzzleid"})],Z.prototype,"puzzleId",2);de([m({type:String,attribute:"gameid"})],Z.prototype,"gameId",2);de([m({type:String,attribute:"params"})],Z.prototype,"params",2);de([v()],Z.prototype,"puzzleData",2);de([v()],Z.prototype,"puzzleLoaded",2);de([v()],Z.prototype,"swapMouseButtons",2);de([A("puzzle-context")],Z.prototype,"puzzleContext",2);de([ei(250)],Z.prototype,"handlePuzzleGameStateChange",1);Z=de([D("puzzle-screen")],Z);function Ba({puzzleId:e,puzzleParams:t,puzzleGameId:a}){const o=document.getElementById("app");if(!o)throw new Error("Missing #app in puzzle page");if(t||a){const r=new URL(window.location.href);r.searchParams.delete("type"),r.searchParams.delete("id"),window.history.replaceState(window.history.state,"",r.href)}const i=document.createElement("puzzle-screen");i.setAttribute("puzzleid",e),t&&i.setAttribute("params",t),a&&i.setAttribute("gameid",a),i.replaceChildren(...o.childNodes),o.replaceChildren(i)}const Et=ti();Et?.puzzleId?document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>Ba(Et)):Ba(Et):ai();
//# sourceMappingURL=puzzle-page-Ct6Uuowq.js.map
