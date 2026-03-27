import{z as L,ad as M,B as O,a as V,i as k,n as l,C as D,b as B,A as C,d as w,t as A,H as S,G as q,_ as s,r as x,I as _,K as P,R as N,ae as j,D as E,a5 as K}from"./dynamic-content-CxlmA9GR.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e._sentryModuleMetadata=e._sentryModuleMetadata||{},e._sentryModuleMetadata[new e.Error().stack]=(function(t){for(var a=1;a<arguments.length;a++){var o=arguments[a];if(o!=null)for(var r in o)o.hasOwnProperty(r)&&(t[r]=o[r])}return t})({},e._sentryModuleMetadata[new e.Error().stack],{"_sentryBundlerPluginAppKey:code-from-puzzles-web":!0})}catch{}})();const v=(e,t)=>{const a=e._$AN;if(a===void 0)return!1;for(const o of a)o._$AO?.(t,!1),v(o,t);return!0},y=e=>{let t,a;do{if((t=e._$AM)===void 0)break;a=t._$AN,a.delete(e),e=t}while(a?.size===0)},H=e=>{for(let t;t=e._$AM;e=t){let a=t._$AN;if(a===void 0)t._$AN=a=new Set;else if(a.has(e))break;a.add(e),U(t)}};function F(e){this._$AN!==void 0?(y(this),this._$AM=e,H(this)):this._$AM=e}function G(e,t=!1,a=0){const o=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(t)if(Array.isArray(o))for(let i=a;i<o.length;i++)v(o[i],!1),y(o[i]);else o!=null&&(v(o,!1),y(o));else v(this,e)}const U=e=>{e.type==O.CHILD&&(e._$AP??=G,e._$AQ??=F)};class ot extends L{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,a,o){super._$AT(t,a,o),H(this),this.isConnected=t._$AU}_$AO(t,a=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),a&&(v(this,t),y(this))}setValue(t){if(M(this._$Ct))this._$Ct._$AI(t,this);else{const a=[...this._$Ct._$AH];a[this._$Ci]=t,this._$Ct._$AI(a,this,0)}}disconnected(){}reconnected(){}}var W=Object.defineProperty,Q=Object.getOwnPropertyDescriptor,b=(e,t,a,o)=>{for(var r=o>1?void 0:o?Q(t,a):t,i=e.length-1,c;i>=0;i--)(c=e[i])&&(r=(o?c(t,a,r):c(r))||r);return o&&r&&W(t,a,r),r};async function rt(e){const t=Object.assign(document.createElement("alert-dialog"),e);document.body.appendChild(t),await t.show(),t.remove()}let u=class extends B{constructor(){super(...arguments),this.label="",this.message="",this.type="error",this.icon=void 0,this.lightDismiss=!1,this.closed=Promise.resolve()}async show(){await this.updateComplete;const e=this.dialog;return e&&!e.open&&(this.closed=new Promise(t=>{this.resolveClosedPromise=t}),e.open=!0,await e.updateComplete),this.closed}render(){return w`
      <wa-dialog ?light-dismiss=${this.lightDismiss} @wa-after-hide=${this.handleDialogHide}>
        <wa-icon slot="label" name=${this.icon||this.type}></wa-icon>
        ${this.label?w`<div slot="label">${this.label}</div>`:C}
        ${this.message?w`<div>${this.message}</div>`:C}
      </wa-dialog>
    `}handleDialogHide(){this.resolveClosedPromise?.()}};u.styles=[V,k`
      :host {
        display: contents;
      }

      wa-dialog {
        --width: min(28rem, calc(100% - 2 * var(--wa-space-l)));
      }
      
      wa-dialog::part(dialog) {
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
      }

      :host([type="error"]) {
        wa-dialog::part(dialog) {
          border-color: var(--wa-color-danger-border-loud);
        }
        wa-icon[slot="label"] {
          color: var(--wa-color-danger-fill-loud);
        }
      }

      :host([type="info"]) {
        wa-dialog::part(dialog) {
          border-color: var(--wa-color-brand-border-loud);
        }
        wa-icon[slot="label"] {
          color: var(--wa-color-brand-fill-loud);
        }
      }

      :host([type="success"]) {
        wa-dialog::part(dialog) {
          border-color: var(--wa-color-success-border-loud);
        }
        wa-icon[slot="label"] {
          color: var(--wa-color-success-fill-loud);
        }
      }

      :host([type="warning"]) {
        wa-dialog::part(dialog) {
          border-color: var(--wa-color-warning-border-loud);
        }
        wa-icon[slot="label"] {
          color: var(--wa-color-warning-fill-loud);
        }
      }
    `];b([l({type:String})],u.prototype,"label",2);b([l({type:String})],u.prototype,"message",2);b([l({type:String,reflect:!0})],u.prototype,"type",2);b([l({type:String})],u.prototype,"icon",2);b([l({type:Boolean,attribute:"light-dismiss"})],u.prototype,"lightDismiss",2);b([D("wa-dialog")],u.prototype,"dialog",2);u=b([A("alert-dialog")],u);var J=k`
  :host {
    --checked-icon-color: var(--wa-form-control-activated-color);
    --checked-icon-scale: 0.7;

    color: var(--wa-form-control-value-color);
    display: inline-flex;
    flex-direction: row;
    align-items: top;
    font-family: inherit;
    font-weight: var(--wa-form-control-value-font-weight);
    line-height: var(--wa-form-control-value-line-height);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  :host(:not(:state(checked))) svg circle {
    opacity: 0;
  }

  [part~='label'] {
    display: inline;
  }

  [part~='hint'] {
    margin-block-start: 0.5em;
  }

  /* Default spacing for default appearance radios */
  :host([appearance='default']) {
    margin-block: 0.375em; /* Half of the original 0.75em gap on each side */
  }

  :host([appearance='default'][data-wa-radio-horizontal]) {
    margin-block: 0;
    margin-inline: 0.5em; /* Half of the original 1em gap on each side */
  }

  /* Remove margin from first/last items to prevent extra space */
  :host([appearance='default'][data-wa-radio-first]) {
    margin-block-start: 0;
    margin-inline-start: 0;
  }

  :host([appearance='default'][data-wa-radio-last]) {
    margin-block-end: 0;
    margin-inline-end: 0;
  }

  /* Button appearance have no spacing, they get handled by the overlap margins below */
  :host([appearance='button']) {
    margin: 0;
    align-items: center;
    min-height: var(--wa-form-control-height);
    background-color: var(--wa-color-surface-default);
    border: var(--wa-form-control-border-width) var(--wa-form-control-border-style) var(--wa-form-control-border-color);
    border-radius: var(--wa-border-radius-m);
    padding: 0 var(--wa-form-control-padding-inline);
    transition:
      background-color var(--wa-transition-fast),
      border-color var(--wa-transition-fast);
  }

  /* Default appearance */
  :host([appearance='default']) {
    .control {
      flex: 0 0 auto;
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: var(--wa-form-control-toggle-size);
      height: var(--wa-form-control-toggle-size);
      border-color: var(--wa-form-control-border-color);
      border-radius: 50%;
      border-style: var(--wa-form-control-border-style);
      border-width: var(--wa-form-control-border-width);
      background-color: var(--wa-form-control-background-color);
      color: transparent;
      transition:
        background var(--wa-transition-normal),
        border-color var(--wa-transition-fast),
        box-shadow var(--wa-transition-fast),
        color var(--wa-transition-fast);
      transition-timing-function: var(--wa-transition-easing);

      margin-inline-end: 0.5em;
    }

    .checked-icon {
      display: flex;
      fill: currentColor;
      width: var(--wa-form-control-toggle-size);
      height: var(--wa-form-control-toggle-size);
      scale: var(--checked-icon-scale);
    }
  }

  /* Button appearance */
  :host([appearance='button']) {
    .control {
      display: none;
    }
  }

  /* Checked */
  :host(:state(checked)) .control {
    color: var(--checked-icon-color);
    border-color: var(--wa-form-control-activated-color);
    background-color: var(--wa-form-control-background-color);
  }

  /* Focus */
  :host(:focus-visible) .control {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  /* Disabled */
  :host(:state(disabled)) {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* Horizontal grouping - remove inner border radius */
  :host([appearance='button'][data-wa-radio-horizontal][data-wa-radio-inner]) {
    border-radius: 0;
  }

  :host([appearance='button'][data-wa-radio-horizontal][data-wa-radio-first]) {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([appearance='button'][data-wa-radio-horizontal][data-wa-radio-last]) {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* Vertical grouping - remove inner border radius */
  :host([appearance='button'][data-wa-radio-vertical][data-wa-radio-inner]) {
    border-radius: 0;
  }

  :host([appearance='button'][data-wa-radio-vertical][data-wa-radio-first]) {
    border-end-start-radius: 0;
    border-end-end-radius: 0;
  }

  :host([appearance='button'][data-wa-radio-vertical][data-wa-radio-last]) {
    border-start-start-radius: 0;
    border-start-end-radius: 0;
  }

  @media (hover: hover) {
    :host([appearance='button']:hover:not(:state(disabled), :state(checked))) {
      background-color: color-mix(in srgb, var(--wa-color-surface-default) 95%, var(--wa-color-mix-hover));
    }
  }

  :host([appearance='button']:focus-visible) {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  :host([appearance='button']:state(checked)) {
    border-color: var(--wa-form-control-activated-color);
    background-color: var(--wa-color-brand-fill-quiet);
  }

  :host([appearance='button']:state(checked):focus-visible) {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  /* Button overlap margins */
  :host([appearance='button'][data-wa-radio-horizontal]:not([data-wa-radio-first])) {
    margin-inline-start: calc(-1 * var(--wa-form-control-border-width));
  }

  :host([appearance='button'][data-wa-radio-vertical]:not([data-wa-radio-first])) {
    margin-block-start: calc(-1 * var(--wa-form-control-border-width));
  }

  /* Ensure interactive states are visible above adjacent buttons */
  :host([appearance='button']:hover),
  :host([appearance='button']:state(checked)) {
    position: relative;
    z-index: 1;
  }

  :host([appearance='button']:focus-visible) {
    z-index: 2;
  }
`;var f=class extends _{constructor(){super(),this.checked=!1,this.forceDisabled=!1,this.appearance="default",this.size="medium",this.disabled=!1,this.handleClick=()=>{!this.disabled&&!this.forceDisabled&&(this.checked=!0)},this.addEventListener("click",this.handleClick)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.tabIndex=0,this.setAttribute("aria-disabled",this.disabled||this.forceDisabled?"true":"false")}updated(e){if(super.updated(e),e.has("checked")&&(this.customStates.set("checked",this.checked),this.setAttribute("aria-checked",this.checked?"true":"false"),!this.disabled&&!this.forceDisabled&&(this.tabIndex=this.checked?0:-1)),e.has("disabled")||e.has("forceDisabled")){const t=this.disabled||this.forceDisabled;this.customStates.set("disabled",t),this.setAttribute("aria-disabled",t?"true":"false"),t?this.tabIndex=-1:this.tabIndex=this.checked?0:-1}}setValue(){}render(){return w`
      <span part="control" class="control">
        ${this.checked?w`
              <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" part="checked-icon" class="checked-icon">
                <circle cx="8" cy="8" r="8" />
              </svg>
            `:""}
      </span>

      <slot part="label" class="label"></slot>
    `}};f.css=[S,q,J];s([x()],f.prototype,"checked",2);s([x()],f.prototype,"forceDisabled",2);s([l({reflect:!0})],f.prototype,"value",2);s([l({reflect:!0})],f.prototype,"appearance",2);s([l({reflect:!0})],f.prototype,"size",2);s([l({type:Boolean})],f.prototype,"disabled",2);f=s([A("wa-radio")],f);var X=k`
  :host {
    display: block;
  }

  .form-control {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
  }

  .label {
    padding: 0;
  }

  .radio-group-required .label::after {
    content: var(--wa-form-control-required-content);
    margin-inline-start: var(--wa-form-control-required-content-offset);
  }

  [part~='form-control-input'] {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 0; /* Radios handle their own spacing */
  }

  /* Horizontal */
  :host([orientation='horizontal']) [part~='form-control-input'] {
    flex-direction: row;
  }

  /* Help text */
  [part~='hint'] {
    margin-block-start: 0.5em;
  }
`;var n=class extends _{constructor(){super(),this.hasSlotController=new P(this,"hint","label"),this.label="",this.hint="",this.name=null,this.disabled=!1,this.orientation="vertical",this._value=null,this.defaultValue=this.getAttribute("value")||null,this.size="medium",this.required=!1,this.withLabel=!1,this.withHint=!1,this.handleRadioClick=e=>{const t=e.target.closest("wa-radio");if(!t||t.disabled||t.forceDisabled||this.disabled)return;const a=this.value;this.value=t.value,t.checked=!0;const o=this.getAllRadios();for(const r of o)t!==r&&(r.checked=!1,r.setAttribute("tabindex","-1"));this.value!==a&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})},this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("click",this.handleRadioClick)}static get validators(){const e=[N({validationElement:Object.assign(document.createElement("input"),{required:!0,type:"radio",name:j("__wa-radio")})})];return[...super.validators,...e]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(e){typeof e=="number"&&(e=String(e)),this.valueHasChanged=!0,this._value=e}get validationTarget(){const e=this.querySelector(":is(wa-radio):not([disabled])");if(e)return e}updated(e){(e.has("disabled")||e.has("value"))&&this.syncRadioElements()}formResetCallback(...e){this.value=this.defaultValue,super.formResetCallback(...e),this.syncRadioElements()}getAllRadios(){return[...this.querySelectorAll("wa-radio")]}handleLabelClick(){this.focus()}async syncRadioElements(){const e=this.getAllRadios();if(e.forEach((t,a)=>{t.setAttribute("size",this.size),t.toggleAttribute("data-wa-radio-horizontal",this.orientation!=="vertical"),t.toggleAttribute("data-wa-radio-vertical",this.orientation==="vertical"),t.toggleAttribute("data-wa-radio-first",a===0),t.toggleAttribute("data-wa-radio-inner",a!==0&&a!==e.length-1),t.toggleAttribute("data-wa-radio-last",a===e.length-1),t.forceDisabled=this.disabled}),await Promise.all(e.map(async t=>{await t.updateComplete,!t.disabled&&t.value===this.value?t.checked=!0:t.checked=!1})),this.disabled)e.forEach(t=>{t.tabIndex=-1});else{const t=e.filter(o=>!o.disabled),a=t.find(o=>o.checked);t.length>0&&(a?t.forEach(o=>{o.tabIndex=o.checked?0:-1}):t.forEach((o,r)=>{o.tabIndex=r===0?0:-1})),e.filter(o=>o.disabled).forEach(o=>{o.tabIndex=-1})}}handleKeyDown(e){if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(e.key)||this.disabled)return;const t=this.getAllRadios().filter(d=>!d.disabled);if(t.length<=0)return;e.preventDefault();const a=this.value,o=t.find(d=>d.checked)??t[0],r=e.key===" "?0:["ArrowUp","ArrowLeft"].includes(e.key)?-1:1;let i=t.indexOf(o)+r;i||(i=0),i<0&&(i=t.length-1),i>t.length-1&&(i=0);const c=t.some(d=>d.tagName.toLowerCase()==="wa-radio-button");this.getAllRadios().forEach(d=>{d.checked=!1,c||d.setAttribute("tabindex","-1")}),this.value=t[i].value,t[i].checked=!0,c?t[i].shadowRoot.querySelector("button").focus():(t[i].setAttribute("tabindex","0"),t[i].focus()),this.value!==a&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),e.preventDefault()}focus(e){if(this.disabled)return;const t=this.getAllRadios(),a=t.find(i=>i.checked),o=t.find(i=>!i.disabled),r=a||o;r&&r.focus(e)}render(){const e=this.hasUpdated?this.hasSlotController.test("label"):this.withLabel,t=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,a=this.label?!0:!!e,o=this.hint?!0:!!t;return w`
      <fieldset
        part="form-control"
        class=${E({"form-control":!0,"form-control-radio-group":!0,"form-control-has-label":a})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="hint"
        aria-errormessage="error-message"
        aria-orientation=${this.orientation}
      >
        <label
          part="form-control-label"
          id="label"
          class="label"
          aria-hidden=${a?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <slot part="form-control-input" @slotchange=${this.syncRadioElements}></slot>

        <slot
          id="hint"
          name="hint"
          part="hint"
          class=${E({"has-slotted":o})}
          aria-hidden=${o?"false":"true"}
          >${this.hint}</slot
        >
      </fieldset>
    `}};n.css=[q,S,X];n.shadowRootOptions={..._.shadowRootOptions,delegatesFocus:!0};s([D("slot:not([name])")],n.prototype,"defaultSlot",2);s([l()],n.prototype,"label",2);s([l({attribute:"hint"})],n.prototype,"hint",2);s([l({reflect:!0})],n.prototype,"name",2);s([l({type:Boolean,reflect:!0})],n.prototype,"disabled",2);s([l({reflect:!0})],n.prototype,"orientation",2);s([x()],n.prototype,"value",1);s([l({attribute:"value",reflect:!0})],n.prototype,"defaultValue",2);s([l({reflect:!0})],n.prototype,"size",2);s([l({type:Boolean,reflect:!0})],n.prototype,"required",2);s([l({type:Boolean,attribute:"with-label"})],n.prototype,"withLabel",2);s([l({type:Boolean,attribute:"with-hint"})],n.prototype,"withHint",2);n=s([A("wa-radio-group")],n);let Y=class extends Event{constructor(t,a,o,r){super("context-request",{bubbles:!0,composed:!0}),this.context=t,this.contextTarget=a,this.callback=o,this.subscribe=r??!1}};class z{constructor(t,a,o,r){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(i,c)=>{this.unsubscribe&&(this.unsubscribe!==c&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=i,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(i,c)),this.unsubscribe=c},this.host=t,a.context!==void 0){const i=a;this.context=i.context,this.callback=i.callback,this.subscribe=i.subscribe??!1}else this.context=a,this.callback=o,this.subscribe=r??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new Y(this.context,this.host,this.t,this.subscribe))}}function st({context:e,subscribe:t}){return(a,o)=>{typeof o=="object"?o.addInitializer((function(){new z(this,{context:e,callback:r=>{a.set.call(this,r)},subscribe:t})})):a.constructor.addInitializer((r=>{new z(r,{context:e,callback:i=>{r[o]=i},subscribe:t})}))}}const lt="puzzle-context";function nt(e,t){const a=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key==="Enter"&&!a&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&Z(t)})}function Z(e){let t=null;if("form"in e&&(t=e.form),!t&&"getForm"in e&&(t=e.getForm()),!t)return;const a=[...t.elements];if(a.length===1){t.requestSubmit(null);return}const o=a.find(r=>r.type==="submit"&&!r.matches(":disabled"));o&&(["input","button"].includes(o.localName)?t.requestSubmit(o):o.click())}let h;async function tt(){let e=!1;if((!h||h.state==="closed")&&(h=new AudioContext,e=!0),h.state==="suspended")try{await Promise.race([h.resume(),K(100)])}catch{}if(!e&&h.state!=="running"&&h.state!=="interrupted"){if(h.state!=="closed")try{await h.close()}catch{}h=new AudioContext}return h}const R=.001,et=783.99;async function ct(e){const{duration:t=7,frequency:a=et,volume:o=50,referenceGain:r=.2}=e??{},i=t/1e3,c=r*o/100;if(c<=R)return;const d=await tt(),g=d.currentTime,I=Math.min(.005,i*.1),$=g+i,p=d.createOscillator();p.type="sine",p.frequency.setValueAtTime(a,g);const m=d.createGain();return m.gain.setValueAtTime(0,g),m.gain.linearRampToValueAtTime(c,g+I),m.gain.exponentialRampToValueAtTime(R,$),p.connect(m),m.connect(d.destination),new Promise(T=>{p.addEventListener("ended",()=>T()),p.start(g),p.stop($)})}export{nt as a,ct as b,st as c,rt as d,ot as f,lt as p,Y as s};
//# sourceMappingURL=audio-CDUuflQX.js.map
