import{f as I,a as U,b as N,d as L,c as W,p as q}from"./audio-CDUuflQX.js";import{y as K,B as T,i as E,_ as r,C as x,r as C,n as l,t as F,W as j,L as O,d as o,G as X,H,I as Y,K as G,ak as g,D as A,o as J,b as Q,A as P,s as c,c as Z,al as _,am as v,j as M,a5 as tt,a as et,k as it}from"./dynamic-content-CxlmA9GR.js";import"./sentry-Coq7X-ar.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};t._sentryModuleMetadata=t._sentryModuleMetadata||{},t._sentryModuleMetadata[new t.Error().stack]=(function(e){for(var i=1;i<arguments.length;i++){var a=arguments[i];if(a!=null)for(var s in a)a.hasOwnProperty(s)&&(e[s]=a[s])}return e})({},t._sentryModuleMetadata[new t.Error().stack],{"_sentryBundlerPluginAppKey:code-from-puzzles-web":!0})}catch{}})();class at extends I{constructor(e){if(super(e),this.event="",this.property="",this.eventListenerInstalled=!1,this.handleEvent=i=>{if(!this.object||!this.field)throw new Error("AutoBindDirective.handleEvent called before first update");const a=i.target;this.property;const s=a[this.property];this.object[this.field]=this.convert?this.convert(s):s},e.type!==T.ATTRIBUTE&&e.type!==T.BOOLEAN_ATTRIBUTE&&e.type!==T.PROPERTY)throw new Error("autoBind can only be used in attribute position")}listen(){if(!this.element)throw new Error("AutoBindDirective.listen called before first update");this.eventListenerInstalled||(this.element.addEventListener(this.event,this.handleEvent),this.eventListenerInstalled=!0)}unlisten(){this.eventListenerInstalled&&this.element&&this.element.removeEventListener(this.event,this.handleEvent),this.eventListenerInstalled=!1}render(e,i,a){return e[i]}update(e,[i,a,s]){const{event:h="change",convert:u,property:m=e.name}=s??{};if(this.eventListenerInstalled&&(this.element!==e.element||this.event!==h)&&this.unlisten(),this.element=e.element,this.object=i,this.field=a,this.event=h,this.property=m,this.convert=u,this.isConnected&&!this.eventListenerInstalled&&this.listen(),this.isConnected&&e.type===T.BOOLEAN_ATTRIBUTE&&m in e.element){const d=e.element;d[m]=i[a]}return this.render(i,a,s)}disconnected(){this.unlisten()}reconnected(){this.listen()}}const f=K(at);var st=E`
  :host {
    --size: 8rem;
    --track-width: 0.25em; /* avoid using rems here */
    --track-color: var(--wa-color-neutral-fill-normal);
    --indicator-width: var(--track-width);
    --indicator-color: var(--wa-color-brand-fill-loud);
    --indicator-transition-duration: 0.35s;

    display: inline-flex;
  }

  .progress-ring {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .image {
    width: var(--size);
    height: var(--size);
    rotate: -90deg;
    transform-origin: 50% 50%;
  }

  .track,
  .indicator {
    --radius: calc(var(--size) / 2 - max(var(--track-width), var(--indicator-width)) * 0.5);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    fill: none;
    r: var(--radius);
    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
  }

  .track {
    stroke: var(--track-color);
    stroke-width: var(--track-width);
  }

  .indicator {
    stroke: var(--indicator-color);
    stroke-width: var(--indicator-width);
    stroke-linecap: round;
    transition-property: stroke-dashoffset;
    transition-duration: var(--indicator-transition-duration);
    stroke-dasharray: var(--circumference) var(--circumference);
    stroke-dashoffset: calc(var(--circumference) - var(--percentage) * var(--circumference));
  }

  .label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
  }
`;var k=class extends j{constructor(){super(...arguments),this.localize=new O(this),this.value=0,this.label=""}updated(t){if(super.updated(t),t.has("value")){const e=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),i=2*Math.PI*e,a=i-this.value/100*i;this.indicatorOffset=`${a}px`}}render(){return o`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style="--percentage: ${this.value/100}"
      >
        <svg class="image">
          <circle class="track"></circle>
          <circle class="indicator" style="stroke-dashoffset: ${this.indicatorOffset}"></circle>
        </svg>

        <slot id="label" part="label" class="label"></slot>
      </div>
    `}};k.css=st;r([x(".indicator")],k.prototype,"indicator",2);r([C()],k.prototype,"indicatorOffset",2);r([l({type:Number,reflect:!0})],k.prototype,"value",2);r([l()],k.prototype,"label",2);k=r([F("wa-progress-ring")],k);var rt=E`
  :host {
    --track-size: 0.5em;
    --thumb-width: 1.4em;
    --thumb-height: 1.4em;
    --marker-width: 0.1875em;
    --marker-height: 0.1875em;
  }

  :host([orientation='vertical']) {
    width: auto;
  }

  #label:has(~ .vertical) {
    display: block;
    order: 2;
    max-width: none;
    text-align: center;
  }

  #description:has(~ .vertical) {
    order: 3;
    text-align: center;
  }

  /* Add extra space between slider and label, when present */
  #label:has(*:not(:empty)) ~ #slider {
    &.horizontal {
      margin-block-start: 0.5em;
    }
    &.vertical {
      margin-block-end: 0.5em;
    }
  }

  #slider {
    touch-action: none;

    &:focus {
      outline: none;
    }

    &:focus-visible:not(.disabled) #thumb,
    &:focus-visible:not(.disabled) #thumb-min,
    &:focus-visible:not(.disabled) #thumb-max {
      outline: var(--wa-focus-ring);
      /* intentionally no offset due to border */
    }
  }

  #track {
    position: relative;
    border-radius: 9999px;
    background: var(--wa-color-neutral-fill-normal);
    isolation: isolate;
  }

  /* Orientation */
  .horizontal #track {
    height: var(--track-size);
  }

  .vertical #track {
    order: 1;
    width: var(--track-size);
    height: 200px;
  }

  /* Disabled */
  .disabled #track {
    cursor: not-allowed;
    opacity: 0.5;
  }

  /* Indicator */
  #indicator {
    position: absolute;
    border-radius: inherit;
    background-color: var(--wa-form-control-activated-color);

    &:dir(ltr) {
      right: calc(100% - max(var(--start), var(--end)));
      left: min(var(--start), var(--end));
    }

    &:dir(rtl) {
      right: min(var(--start), var(--end));
      left: calc(100% - max(var(--start), var(--end)));
    }
  }

  .horizontal #indicator {
    top: 0;
    height: 100%;
  }

  .vertical #indicator {
    top: calc(100% - var(--end));
    bottom: var(--start);
    left: 0;
    width: 100%;
  }

  /* Thumbs */
  #thumb,
  #thumb-min,
  #thumb-max {
    z-index: 3;
    position: absolute;
    width: var(--thumb-width);
    height: var(--thumb-height);
    border: solid 0.125em var(--wa-color-surface-default);
    border-radius: 50%;
    background-color: var(--wa-form-control-activated-color);
    cursor: pointer;
  }

  .disabled #thumb,
  .disabled #thumb-min,
  .disabled #thumb-max {
    cursor: inherit;
  }

  .horizontal #thumb,
  .horizontal #thumb-min,
  .horizontal #thumb-max {
    top: calc(50% - var(--thumb-height) / 2);

    &:dir(ltr) {
      right: auto;
      left: calc(var(--position) - var(--thumb-width) / 2);
    }

    &:dir(rtl) {
      right: calc(var(--position) - var(--thumb-width) / 2);
      left: auto;
    }
  }

  .vertical #thumb,
  .vertical #thumb-min,
  .vertical #thumb-max {
    bottom: calc(var(--position) - var(--thumb-height) / 2);
    left: calc(50% - var(--thumb-width) / 2);
  }

  /* Range-specific thumb styles */
  :host([range]) {
    #thumb-min:focus-visible,
    #thumb-max:focus-visible {
      z-index: 4; /* Ensure focused thumb appears on top */
      outline: var(--wa-focus-ring);
      /* intentionally no offset due to border */
    }
  }

  /* Markers */
  #markers {
    pointer-events: none;
  }

  .marker {
    z-index: 2;
    position: absolute;
    width: var(--marker-width);
    height: var(--marker-height);
    border-radius: 50%;
    background-color: var(--wa-color-surface-default);
  }

  .marker:first-of-type,
  .marker:last-of-type {
    display: none;
  }

  .horizontal .marker {
    top: calc(50% - var(--marker-height) / 2);
    left: calc(var(--position) - var(--marker-width) / 2);
  }

  .vertical .marker {
    top: calc(var(--position) - var(--marker-height) / 2);
    left: calc(50% - var(--marker-width) / 2);
  }

  /* Marker labels */
  #references {
    position: relative;

    slot {
      display: flex;
      justify-content: space-between;
      height: 100%;
    }

    ::slotted(*) {
      color: var(--wa-color-text-quiet);
      font-size: 0.875em;
      line-height: 1;
    }
  }

  .horizontal {
    #references {
      margin-block-start: 0.5em;
    }
  }

  .vertical {
    display: flex;
    margin-inline: auto;

    #track {
      order: 1;
    }

    #references {
      order: 2;
      width: min-content;
      margin-inline-start: 0.75em;

      slot {
        flex-direction: column;
      }
    }
  }

  .vertical #references slot {
    flex-direction: column;
  }
`;var D=typeof window<"u"&&"ontouchstart"in window,R=class{constructor(t,e){this.isActive=!1,this.isDragging=!1,this.handleDragStart=i=>{const a="touches"in i?i.touches[0].clientX:i.clientX,s="touches"in i?i.touches[0].clientY:i.clientY;this.isDragging||!D&&i.buttons>1||(this.isDragging=!0,document.addEventListener("pointerup",this.handleDragStop),document.addEventListener("pointermove",this.handleDragMove),document.addEventListener("touchend",this.handleDragStop),document.addEventListener("touchmove",this.handleDragMove),this.options.start(a,s))},this.handleDragStop=i=>{const a="touches"in i?i.touches[0].clientX:i.clientX,s="touches"in i?i.touches[0].clientY:i.clientY;this.isDragging=!1,document.removeEventListener("pointerup",this.handleDragStop),document.removeEventListener("pointermove",this.handleDragMove),document.removeEventListener("touchend",this.handleDragStop),document.removeEventListener("touchmove",this.handleDragMove),this.options.stop(a,s)},this.handleDragMove=i=>{const a="touches"in i?i.touches[0].clientX:i.clientX,s="touches"in i?i.touches[0].clientY:i.clientY;window.getSelection()?.removeAllRanges(),this.options.move(a,s)},this.element=t,this.options={start:()=>{},stop:()=>{},move:()=>{},...e},this.start()}start(){this.isActive||(this.element.addEventListener("pointerdown",this.handleDragStart),D&&this.element.addEventListener("touchstart",this.handleDragStart),this.isActive=!0)}stop(){document.removeEventListener("pointerup",this.handleDragStop),document.removeEventListener("pointermove",this.handleDragMove),document.removeEventListener("touchend",this.handleDragStop),document.removeEventListener("touchmove",this.handleDragMove),this.element.removeEventListener("pointerdown",this.handleDragStart),D&&this.element.removeEventListener("touchstart",this.handleDragStart),this.isActive=!1,this.isDragging=!1}toggle(t){(t!==void 0?t:!this.isActive)?this.start():this.stop()}};var nt=()=>{const t=Object.assign(document.createElement("input"),{type:"range",required:!0});return{observedAttributes:["required","min","max","step"],checkValidity(e){const i={message:"",isValid:!0,invalidKeys:[]},a=(s,h,u,m)=>{const d=document.createElement("input");return d.type="range",d.min=String(h),d.max=String(u),d.step=String(m),d.value=String(s),d.checkValidity(),d.validationMessage};if(e.required&&!e.hasInteracted)return i.isValid=!1,i.invalidKeys.push("valueMissing"),i.message=t.validationMessage||"Please fill out this field.",i;if(e.isRange){const s=e.minValue,h=e.maxValue;if(s<e.min)return i.isValid=!1,i.invalidKeys.push("rangeUnderflow"),i.message=a(s,e.min,e.max,e.step)||`Value must be greater than or equal to ${e.min}.`,i;if(h>e.max)return i.isValid=!1,i.invalidKeys.push("rangeOverflow"),i.message=a(h,e.min,e.max,e.step)||`Value must be less than or equal to ${e.max}.`,i;if(e.step&&e.step!==1){const u=(s-e.min)%e.step!==0,m=(h-e.min)%e.step!==0;if(u||m){i.isValid=!1,i.invalidKeys.push("stepMismatch");const d=u?s:h;return i.message=a(d,e.min,e.max,e.step)||`Value must be a multiple of ${e.step}.`,i}}}else{const s=e.value;if(s<e.min)return i.isValid=!1,i.invalidKeys.push("rangeUnderflow"),i.message=a(s,e.min,e.max,e.step)||`Value must be greater than or equal to ${e.min}.`,i;if(s>e.max)return i.isValid=!1,i.invalidKeys.push("rangeOverflow"),i.message=a(s,e.min,e.max,e.step)||`Value must be less than or equal to ${e.max}.`,i;if(e.step&&e.step!==1&&(s-e.min)%e.step!==0)return i.isValid=!1,i.invalidKeys.push("stepMismatch"),i.message=a(s,e.min,e.max,e.step)||`Value must be a multiple of ${e.step}.`,i}return i}}},n=class extends Y{constructor(){super(...arguments),this.draggableThumbMin=null,this.draggableThumbMax=null,this.hasSlotController=new G(this,"hint","label"),this.localize=new O(this),this.activeThumb=null,this.lastTrackPosition=null,this.label="",this.hint="",this.minValue=0,this.maxValue=50,this.defaultValue=this.getAttribute("value")==null?this.minValue:Number(this.getAttribute("value")),this._value=this.defaultValue,this.range=!1,this.disabled=!1,this.readonly=!1,this.orientation="horizontal",this.size="medium",this.min=0,this.max=100,this.step=1,this.required=!1,this.tooltipDistance=8,this.tooltipPlacement="top",this.withMarkers=!1,this.withTooltip=!1}static get validators(){return[...super.validators,nt()]}get focusableAnchor(){return this.isRange?this.thumbMin||this.slider:this.slider}get validationTarget(){return this.focusableAnchor}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(t){t=Number(t)??this.minValue,this._value!==t&&(this.valueHasChanged=!0,this._value=t)}get isRange(){return this.range}firstUpdated(){this.isRange?(this.draggableThumbMin=new R(this.thumbMin,{start:()=>{this.activeThumb="min",this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.valueWhenDraggingStarted=this.minValue,this.customStates.set("dragging",!0),this.showRangeTooltips()},move:(t,e)=>{this.setThumbValueFromCoordinates(t,e,"min")},stop:()=>{this.minValue!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideRangeTooltips(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0,this.activeThumb=null}}),this.draggableThumbMax=new R(this.thumbMax,{start:()=>{this.activeThumb="max",this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.valueWhenDraggingStarted=this.maxValue,this.customStates.set("dragging",!0),this.showRangeTooltips()},move:(t,e)=>{this.setThumbValueFromCoordinates(t,e,"max")},stop:()=>{this.maxValue!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideRangeTooltips(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0,this.activeThumb=null}}),this.draggableTrack=new R(this.track,{start:(t,e)=>{if(this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.activeThumb)this.valueWhenDraggingStarted=this.activeThumb==="min"?this.minValue:this.maxValue;else{const i=this.getValueFromCoordinates(t,e),a=Math.abs(i-this.minValue),s=Math.abs(i-this.maxValue);if(a===s)if(i>this.maxValue)this.activeThumb="max";else if(i<this.minValue)this.activeThumb="min";else{const h=this.localize.dir()==="rtl",u=this.orientation==="vertical",m=u?e:t,d=this.lastTrackPosition||m;this.lastTrackPosition=m;const V=m>d!==h&&!u||m<d&&u;this.activeThumb=V?"max":"min"}else this.activeThumb=a<=s?"min":"max";this.valueWhenDraggingStarted=this.activeThumb==="min"?this.minValue:this.maxValue}this.customStates.set("dragging",!0),this.setThumbValueFromCoordinates(t,e,this.activeThumb),this.showRangeTooltips()},move:(t,e)=>{this.activeThumb&&this.setThumbValueFromCoordinates(t,e,this.activeThumb)},stop:()=>{this.activeThumb&&(this.activeThumb==="min"?this.minValue:this.maxValue)!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideRangeTooltips(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0,this.activeThumb=null}})):this.draggableTrack=new R(this.slider,{start:(t,e)=>{this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.valueWhenDraggingStarted=this.value,this.customStates.set("dragging",!0),this.setValueFromCoordinates(t,e),this.showTooltip()},move:(t,e)=>{this.setValueFromCoordinates(t,e)},stop:()=>{this.value!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideTooltip(),this.customStates.set("dragging",!1),this.valueWhenDraggingStarted=void 0}})}updated(t){if(t.has("range")&&this.requestUpdate(),this.isRange?(t.has("minValue")||t.has("maxValue"))&&(this.minValue=g(this.minValue,this.min,this.maxValue),this.maxValue=g(this.maxValue,this.minValue,this.max),this.updateFormValue()):t.has("value")&&(this.value=g(this.value,this.min,this.max),this.setValue(String(this.value))),(t.has("min")||t.has("max"))&&(this.isRange?(this.minValue=g(this.minValue,this.min,this.max),this.maxValue=g(this.maxValue,this.min,this.max)):this.value=g(this.value,this.min,this.max)),t.has("disabled")&&this.customStates.set("disabled",this.disabled),t.has("disabled")||t.has("readonly")){const e=!(this.disabled||this.readonly);this.isRange&&(this.draggableThumbMin&&this.draggableThumbMin.toggle(e),this.draggableThumbMax&&this.draggableThumbMax.toggle(e)),this.draggableTrack&&this.draggableTrack.toggle(e)}super.updated(t)}formDisabledCallback(t){this.disabled=t}formResetCallback(){this.isRange?(this.minValue=parseFloat(this.getAttribute("min-value")??String(this.min)),this.maxValue=parseFloat(this.getAttribute("max-value")??String(this.max))):this.value=parseFloat(this.getAttribute("value")??String(this.min)),this.hasInteracted=!1,super.formResetCallback()}clampAndRoundToStep(t){const e=(String(this.step).split(".")[1]||"").replace(/0+$/g,"").length,i=Number(this.step),a=Number(this.min),s=Number(this.max);return t=Math.round(t/i)*i,t=g(t,a,s),parseFloat(t.toFixed(e))}getPercentageFromValue(t){return(t-this.min)/(this.max-this.min)*100}getValueFromCoordinates(t,e){const i=this.localize.dir()==="rtl",a=this.orientation==="vertical",{top:s,right:h,bottom:u,left:m,height:d,width:V}=this.trackBoundingClientRect,$=a?e:t,w=a?{start:s,end:u,size:d}:{start:m,end:h,size:V},b=(a||i?w.end-$:$-w.start)/w.size;return this.clampAndRoundToStep(this.min+(this.max-this.min)*b)}handleBlur(){this.isRange?requestAnimationFrame(()=>{const t=this.shadowRoot?.activeElement;t===this.thumbMin||t===this.thumbMax||this.hideRangeTooltips()}):this.hideTooltip(),this.customStates.set("focused",!1),this.dispatchEvent(new FocusEvent("blur",{bubbles:!0,composed:!0}))}handleFocus(t){const e=t.target;this.isRange?(e===this.thumbMin?this.activeThumb="min":e===this.thumbMax&&(this.activeThumb="max"),this.showRangeTooltips()):this.showTooltip(),this.customStates.set("focused",!0),this.dispatchEvent(new FocusEvent("focus",{bubbles:!0,composed:!0}))}handleKeyDown(t){const e=this.localize.dir()==="rtl",i=t.target;if(this.disabled||this.readonly||this.isRange&&(i===this.thumbMin?this.activeThumb="min":i===this.thumbMax&&(this.activeThumb="max"),!this.activeThumb))return;const a=this.isRange?this.activeThumb==="min"?this.minValue:this.maxValue:this.value;let s=a;switch(t.key){case"ArrowUp":case(e?"ArrowLeft":"ArrowRight"):t.preventDefault(),s=this.clampAndRoundToStep(a+this.step);break;case"ArrowDown":case(e?"ArrowRight":"ArrowLeft"):t.preventDefault(),s=this.clampAndRoundToStep(a-this.step);break;case"Home":t.preventDefault(),s=this.isRange&&this.activeThumb==="min"?this.min:this.isRange?this.minValue:this.min;break;case"End":t.preventDefault(),s=this.isRange&&this.activeThumb==="max"?this.max:this.isRange?this.maxValue:this.max;break;case"PageUp":t.preventDefault();const h=Math.max(a+(this.max-this.min)/10,a+this.step);s=this.clampAndRoundToStep(h);break;case"PageDown":t.preventDefault();const u=Math.min(a-(this.max-this.min)/10,a-this.step);s=this.clampAndRoundToStep(u);break;case"Enter":U(t,this);return}s!==a&&(this.isRange?(this.activeThumb==="min"?s>this.maxValue?(this.maxValue=s,this.minValue=s):this.minValue=Math.max(this.min,s):s<this.minValue?(this.minValue=s,this.maxValue=s):this.maxValue=Math.min(this.max,s),this.updateFormValue()):this.value=g(s,this.min,this.max),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),this.hasInteracted=!0)}handleLabelPointerDown(t){t.preventDefault(),this.disabled||(this.isRange?this.thumbMin?.focus():this.slider.focus())}setValueFromCoordinates(t,e){const i=this.value;this.value=this.getValueFromCoordinates(t,e),this.value!==i&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))})}setThumbValueFromCoordinates(t,e,i){const a=this.getValueFromCoordinates(t,e),s=i==="min"?this.minValue:this.maxValue;i==="min"?a>this.maxValue?(this.maxValue=a,this.minValue=a):this.minValue=Math.max(this.min,a):a<this.minValue?(this.minValue=a,this.maxValue=a):this.maxValue=Math.min(this.max,a),s!==(i==="min"?this.minValue:this.maxValue)&&(this.updateFormValue(),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))}))}showTooltip(){this.withTooltip&&this.tooltip&&(this.tooltip.open=!0)}hideTooltip(){this.withTooltip&&this.tooltip&&(this.tooltip.open=!1)}showRangeTooltips(){if(!this.withTooltip)return;const t=this.shadowRoot?.getElementById("tooltip-thumb-min"),e=this.shadowRoot?.getElementById("tooltip-thumb-max");this.activeThumb==="min"?(t&&(t.open=!0),e&&(e.open=!1)):this.activeThumb==="max"&&(e&&(e.open=!0),t&&(t.open=!1))}hideRangeTooltips(){if(!this.withTooltip)return;const t=this.shadowRoot?.getElementById("tooltip-thumb-min"),e=this.shadowRoot?.getElementById("tooltip-thumb-max");t&&(t.open=!1),e&&(e.open=!1)}updateFormValue(){if(this.isRange){const t=new FormData;t.append(this.name||"",String(this.minValue)),t.append(this.name||"",String(this.maxValue)),this.setValue(t)}}focus(){this.isRange?this.thumbMin?.focus():this.slider.focus()}blur(){this.isRange?document.activeElement===this.thumbMin?this.thumbMin.blur():document.activeElement===this.thumbMax&&this.thumbMax.blur():this.slider.blur()}stepDown(){if(this.isRange){const t=this.clampAndRoundToStep(this.minValue-this.step);this.minValue=g(t,this.min,this.maxValue),this.updateFormValue()}else{const t=this.clampAndRoundToStep(this.value-this.step);this.value=t}}stepUp(){if(this.isRange){const t=this.clampAndRoundToStep(this.maxValue+this.step);this.maxValue=g(t,this.minValue,this.max),this.updateFormValue()}else{const t=this.clampAndRoundToStep(this.value+this.step);this.value=t}}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("hint"),i=this.label?!0:!!t,a=this.hint?!0:!!e,s=this.hasSlotController.test("reference"),h=A({small:this.size==="small",medium:this.size==="medium",large:this.size==="large",horizontal:this.orientation==="horizontal",vertical:this.orientation==="vertical",disabled:this.disabled}),u=[];if(this.withMarkers)for(let p=this.min;p<=this.max;p+=this.step)u.push(this.getPercentageFromValue(p));const m=o`
      <label
        id="label"
        part="label"
        for=${this.isRange?"thumb-min":"text-box"}
        class=${A({vh:!i})}
        @pointerdown=${this.handleLabelPointerDown}
      >
        <slot name="label">${this.label}</slot>
      </label>
    `,d=o`
      <div
        id="hint"
        part="hint"
        class=${A({"has-slotted":a})}
      >
        <slot name="hint">${this.hint}</slot>
      </div>
    `,V=this.withMarkers?o`
          <div id="markers" part="markers">
            ${u.map(p=>o`<span part="marker" class="marker" style="--position: ${p}%"></span>`)}
          </div>
        `:"",$=s?o`
          <div id="references" part="references" aria-hidden="true">
            <slot name="reference"></slot>
          </div>
        `:"",w=(p,b)=>this.withTooltip?o`
            <wa-tooltip
              id=${`tooltip${p!=="thumb"?"-"+p:""}`}
              part="tooltip"
              exportparts="
                base:tooltip__base,
                body:tooltip__body,
                arrow:tooltip__arrow
              "
              trigger="manual"
              distance=${this.tooltipDistance}
              placement=${this.tooltipPlacement}
              for=${p}
              activation="manual"
              dir=${this.localize.dir()}
            >
              <span aria-hidden="true">
                ${typeof this.valueFormatter=="function"?this.valueFormatter(b):this.localize.number(b)}
              </span>
            </wa-tooltip>
          `:"";if(this.isRange){const p=g(this.getPercentageFromValue(this.minValue),0,100),b=g(this.getPercentageFromValue(this.maxValue),0,100);return o`
        ${m}

        <div id="slider" part="slider" class=${h}>
          <div id="track" part="track">
            <div
              id="indicator"
              part="indicator"
              style="--start: ${Math.min(p,b)}%; --end: ${Math.max(p,b)}%"
            ></div>

            ${V}

            <span
              id="thumb-min"
              part="thumb thumb-min"
              style="--position: ${p}%"
              role="slider"
              aria-valuemin=${this.min}
              aria-valuenow=${this.minValue}
              aria-valuetext=${typeof this.valueFormatter=="function"?this.valueFormatter(this.minValue):this.localize.number(this.minValue)}
              aria-valuemax=${this.max}
              aria-label="${this.label?`${this.label} (minimum value)`:"Minimum value"}"
              aria-orientation=${this.orientation}
              aria-disabled=${this.disabled?"true":"false"}
              aria-readonly=${this.readonly?"true":"false"}
              tabindex=${this.disabled?-1:0}
              @blur=${this.handleBlur}
              @focus=${this.handleFocus}
              @keydown=${this.handleKeyDown}
            ></span>

            <span
              id="thumb-max"
              part="thumb thumb-max"
              style="--position: ${b}%"
              role="slider"
              aria-valuemin=${this.min}
              aria-valuenow=${this.maxValue}
              aria-valuetext=${typeof this.valueFormatter=="function"?this.valueFormatter(this.maxValue):this.localize.number(this.maxValue)}
              aria-valuemax=${this.max}
              aria-label="${this.label?`${this.label} (maximum value)`:"Maximum value"}"
              aria-orientation=${this.orientation}
              aria-disabled=${this.disabled?"true":"false"}
              aria-readonly=${this.readonly?"true":"false"}
              tabindex=${this.disabled?-1:0}
              @blur=${this.handleBlur}
              @focus=${this.handleFocus}
              @keydown=${this.handleKeyDown}
            ></span>
          </div>

          ${$} ${d}
        </div>

        ${w("thumb-min",this.minValue)} ${w("thumb-max",this.maxValue)}
      `}else{const p=g(this.getPercentageFromValue(this.value),0,100),b=g(this.getPercentageFromValue(typeof this.indicatorOffset=="number"?this.indicatorOffset:this.min),0,100);return o`
        ${m}

        <div
          id="slider"
          part="slider"
          class=${h}
          role="slider"
          aria-disabled=${this.disabled?"true":"false"}
          aria-readonly=${this.disabled?"true":"false"}
          aria-orientation=${this.orientation}
          aria-valuemin=${this.min}
          aria-valuenow=${this.value}
          aria-valuetext=${typeof this.valueFormatter=="function"?this.valueFormatter(this.value):this.localize.number(this.value)}
          aria-valuemax=${this.max}
          aria-labelledby="label"
          aria-describedby="hint"
          tabindex=${this.disabled?-1:0}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @keydown=${this.handleKeyDown}
        >
          <div id="track" part="track">
            <div
              id="indicator"
              part="indicator"
              style="--start: ${b}%; --end: ${p}%"
            ></div>

            ${V}
            <span id="thumb" part="thumb" style="--position: ${p}%"></span>
          </div>

          ${$} ${d}
        </div>

        ${w("thumb",this.value)}
      `}}};n.formAssociated=!0;n.observeSlots=!0;n.css=[X,H,rt];r([x("#slider")],n.prototype,"slider",2);r([x("#thumb")],n.prototype,"thumb",2);r([x("#thumb-min")],n.prototype,"thumbMin",2);r([x("#thumb-max")],n.prototype,"thumbMax",2);r([x("#track")],n.prototype,"track",2);r([x("#tooltip")],n.prototype,"tooltip",2);r([l()],n.prototype,"label",2);r([l({attribute:"hint"})],n.prototype,"hint",2);r([l({reflect:!0})],n.prototype,"name",2);r([l({type:Number,attribute:"min-value"})],n.prototype,"minValue",2);r([l({type:Number,attribute:"max-value"})],n.prototype,"maxValue",2);r([l({attribute:"value",reflect:!0,type:Number})],n.prototype,"defaultValue",2);r([C()],n.prototype,"value",1);r([l({type:Boolean,reflect:!0})],n.prototype,"range",2);r([l({type:Boolean})],n.prototype,"disabled",2);r([l({type:Boolean,reflect:!0})],n.prototype,"readonly",2);r([l({reflect:!0})],n.prototype,"orientation",2);r([l({reflect:!0})],n.prototype,"size",2);r([l({attribute:"indicator-offset",type:Number})],n.prototype,"indicatorOffset",2);r([l({type:Number})],n.prototype,"min",2);r([l({type:Number})],n.prototype,"max",2);r([l({type:Number})],n.prototype,"step",2);r([l({type:Boolean,reflect:!0})],n.prototype,"required",2);r([l({type:Boolean})],n.prototype,"autofocus",2);r([l({attribute:"tooltip-distance",type:Number})],n.prototype,"tooltipDistance",2);r([l({attribute:"tooltip-placement",reflect:!0})],n.prototype,"tooltipPlacement",2);r([l({attribute:"with-markers",type:Boolean})],n.prototype,"withMarkers",2);r([l({attribute:"with-tooltip",type:Boolean})],n.prototype,"withTooltip",2);r([l({attribute:!1})],n.prototype,"valueFormatter",2);n=r([F("wa-slider")],n);var ot=Object.defineProperty,lt=Object.getOwnPropertyDescriptor,B=(t,e,i,a)=>{for(var s=a>1?void 0:a?lt(e,i):e,h=t.length-1,u;h>=0;h--)(u=t[h])&&(s=(a?u(e,i,s):u(s))||s);return a&&s&&ot(e,i,s),s};const y=.25,z=2.75,ht=.25;let S=class extends J(Q){render(){return o`
      <wa-dialog label="Preferences" light-dismiss>
        ${this.renderPuzzleSection()}
        ${this.renderAppearanceSection()}
        ${this.renderMouseButtonsSection()}
        ${this.renderDataSection()}
        ${this.renderAdvancedSection()}
      </wa-dialog>
    `}renderPuzzleSection(){if(!this.puzzle)return P;const t=this.puzzle.displayName;return o`
      <wa-details open id="puzzle" name="panel">
        <div slot="summary">${t} preferences</div>
        <puzzle-preferences-form 
            autosubmit
            @puzzle-preferences-change=${this.handlePuzzlePreferencesChange}
          ></puzzle-preferences-form>
      </wa-details>
    `}renderAppearanceSection(){return o`
      <wa-details id="appearance" name="panel" summary="Appearance">
        <wa-checkbox
            ?checked=${f(c,"showEndNotification")}
            hint="Victory message with “New game” button"
          >Show popup when solved</wa-checkbox>
        <wa-checkbox
            ?checked=${f(c,"showPuzzleKeyboard")}
            hint="On-screen buttons for puzzles that need keyboard input"
          >Show virtual keyboard</wa-checkbox>
        <wa-radio-group
            label="Status bar"
            orientation="horizontal"
            .value=${f(c,"statusbarPlacement")}
            hint="Extra info in some puzzles (you might need it to solve them)"
        >
          <wa-radio appearance="button" value="start">Above puzzle</wa-radio>
          <wa-radio appearance="button" value="end">Below puzzle</wa-radio>
          <wa-radio appearance="button" value="hidden">Hidden</wa-radio>
        </wa-radio-group>
        <wa-slider
            label="Maximum puzzle scale"
            hint="How far to stretch smaller puzzles to fill the screen"
            .value=${Z(y,c.maxScale,z)}
            min=${y}
            max=${z}
            step=${ht}
            with-markers
            with-tooltip
            .valueFormatter=${t=>t>=z?"As large as fits":`${Math.round(t*100)}%`}
            @change=${t=>{const e=Number.parseFloat(t.target.value);c.maxScale=e>=z?Number.POSITIVE_INFINITY:e}}
        >
          <span slot="reference">${Math.round(y*100)}%</span>
          <span slot="reference" class="scale-1x">100%</span>
          <span slot="reference" class="scale-2x">200%</span>
          <span slot="reference">Max</span>
        </wa-slider>
      </wa-details>
    `}renderMouseButtonsSection(){return o`
      <wa-details id="mouse" name="panel" summary="Mouse buttons">
        <div class="hint">
          Options for emulating the right mouse button on touch devices
        </div>
        <wa-checkbox
            hint="Swaps left and right mouse buttons (allows tap for right click)"
            ?checked=${f(c,"showMouseButtonToggle")}
          >Show <wa-icon name="mouse-left-button" label="left button"></wa-icon>
            ⁄ <wa-icon name="mouse-right-button" label="right button"></wa-icon>
            toggle</wa-checkbox>
        <wa-checkbox 
            hint="For right drag, long hold then move finger"
            ?checked=${f(c,"rightButtonLongPress")}
          >Long press for right click</wa-checkbox>
        <wa-checkbox 
            hint="For right drag, lift second finger then move first finger"
            ?checked=${f(c,"rightButtonTwoFingerTap")}
          >Two finger tap for right click</wa-checkbox>
        <wa-slider
            label="Audio feedback volume"
            .value=${f(c,"rightButtonAudioVolume")}
            min="0"
            max="100"
            step="5"
            hint="Click sound on long press or two finger tap"
            with-tooltip
            .valueFormatter=${t=>t>0?t:"Off"}
            @click=${async t=>{const e=t.target,i=Number.parseInt(e.value,10);i>0&&await N({volume:i})}}
        >
          <span slot="reference">Off</span>
          <span slot="reference">Max</span>
        </wa-slider>
        <wa-slider
            label="Detection time"
            .value=${f(c,"rightButtonHoldTime")}
            min="100"
            max="1000"
            step="25"
            hint="Long press length/​maximum delay for two finger tap"
            with-tooltip
            .valueFormatter=${t=>`${t} ms`}
        >
          <span slot="reference">100 ms</span>
          <span slot="reference">1 s</span>
        </wa-slider>
      </wa-details>
    `}renderDataSection(){return o`
      <wa-details id="data" name="panel" summary="Data" @wa-select=${this.handleDataCommand}>
        <div class="hint">
          Saved games, preferences and other puzzle data are kept in
          ${_?"this app’s":"your browser’s"} local storage
        </div>
        <div>
          <wa-dropdown>
            <wa-button slot="trigger" with-caret>Backups</wa-button>
            <wa-dropdown-item value="settings-backup">Export preferences file&hellip;</wa-dropdown-item>
            <wa-dropdown-item value="settings-restore">Import preferences file&hellip;</wa-dropdown-item>
          </wa-dropdown>
          <div class="hint">
            Copy your settings to another device 
            (or preserve them when deleting and reinstalling the app) 
          </div>
        </div>
        <div>
          <wa-dropdown>
            <wa-button 
                slot="trigger" 
                appearance="filled-outlined" 
                variant="danger" 
                with-caret
            >Clear data&hellip;</wa-button>
            <wa-dropdown-item value="clear-settings">Reset preferences and favorites</wa-dropdown-item>
            <wa-dropdown-item value="clear-games-autosave">Delete games in progress</wa-dropdown-item>
            <wa-dropdown-item value="clear-games-user">Delete saved games</wa-dropdown-item>
            <wa-dropdown-item value="clear-all" variant="danger">
              Clear <strong>ALL</strong> saved data</wa-dropdown-item>
          </wa-dropdown>
          <div class="hint">
            Delete some or all stored data <em>(permanently!)</em>
          </div>
        </div>
      </wa-details>
    `}renderAdvancedSection(){return o`
      <wa-details id="advanced" name="panel" summary="Advanced">
        <wa-checkbox 
            ?checked=${v.allowOfflineUse}
            @change=${this.handleAllowOfflineChange}
        >
          Allow offline use
          <div slot="hint">
            ${_?"(Keep this checked when installed as an app)":o`
                  Downloads everything needed to run offline into your browser<br>
                  (it’s better to <a href="/help/install">install as an app</a> if possible)`}
          </div>
        </wa-checkbox>
        <wa-checkbox
          hint="Only applies when offline use is enabled"
          ?checked=${v.autoUpdate}
          ?disabled=${!v.allowOfflineUse}
          @change=${this.handleAutoUpdateChange}
        >
          Auto-update offline content (recommended)
        </wa-checkbox>
        <div class="offline-status" role="status" aria-atomic="true">
          Offline content: ${this.renderOfflineStatus()}
        </div>
        <wa-divider></wa-divider>
        <wa-radio-group
            orientation="horizontal"
            label="Color scheme (experimental)"
            .value=${f(c,"colorScheme")}
        >
          <wa-radio value="light" appearance="button">Light</wa-radio>
          <wa-radio value="dark" appearance="button">Dark</wa-radio>
          <wa-radio value="system" appearance="button">System</wa-radio>
        </wa-radio-group>
        <wa-checkbox
            hint="Puzzles with unfinished code (may have lots of bugs!)"
            ?checked=${f(c,"showUnfinishedPuzzles")}
        >Show experimental puzzles</wa-checkbox>
      </wa-details>
    `}renderOfflineStatus(){switch(v.status){case"uninitialized":return o`<wa-spinner></wa-spinner> initializing&hellip;`;case"registering":return o`<wa-spinner></wa-spinner> registering&hellip;`;case"unregistered":return"not downloaded";case"registered":return o`
          up to date
          (<button @click=${this.handleCheckForUpdate}>check for updates</a>)
        `;case"downloading":case"update-downloading":{const t=v.status==="downloading"?"downloading":"downloading update",e=v.downloadProgress,i=e===void 0?o`<wa-spinner></wa-spinner>`:o`<wa-progress-ring value=${e}></wa-progress-ring>`,a=e===void 0?P:` ${e}%`;return o`${i} ${t}${a}&hellip;`}case"download-ready":return o`
          downloaded
          (<button @click=${this.handleReloadApp}>reload</button> to activate)
        `;case"update-ready":return o`
          update downloaded
          (<button @click=${this.handleInstallUpdate}>install now</button>)
        `;case"installing":return o`<wa-spinner></wa-spinner> installing&hellip;`;case"reloading":return o`<wa-spinner></wa-spinner> reloading&hellip;`;case"deleting":return o`<wa-spinner></wa-spinner> removing&hellip;`;case"deleted":return o`
          removed
          (<button @click=${this.handleReloadApp}>reload</button> to finish)
        `;case"error":return o`
          installation error
          (<button @click=${this.handleReloadApp}>reload app</button>)
        `;default:return`unknown (${v.status})`}}async handleCheckForUpdate(){await v.checkForUpdate()}handleInstallUpdate(){v.installUpdate()}handleReloadApp(){v.reloadApp()}async handleAllowOfflineChange(t){v.allowOfflineUse=t.target.checked}async handleAutoUpdateChange(t){v.autoUpdate=t.target.checked}async handleDataCommand(t){const i=t.detail.item.value;switch(i){case"clear-settings":{const a=c.allowOfflineUse;await c.clearAllSettings(),a!==null&&(v.allowOfflineUse=a);break}case"clear-games-autosave":await M.removeAllAutoSavedGames();break;case"clear-games-user":await M.removeAllSavedGames();break;case"clear-all":await Promise.all([c.clearAllSettings().then(()=>v.reinitialize()),M.removeAll()]);break;case"settings-backup":await this.settingsBackup();break;case"settings-restore":await this.settingsRestore();break;default:console.error(`Unknown settings-dialog data command: ${i}`);break}}async settingsBackup(){const t=await c.serialize(),e=new Blob([JSON.stringify(t)],{type:"application/json"}),i=URL.createObjectURL(e),a=`puzzle-settings-${new Date().toISOString().slice(0,10)}.json`,s=document.createElement("a");s.href=i,s.download=a,s.click(),await tt(10),URL.revokeObjectURL(i)}async settingsRestore(){const t=document.createElement("input");t.type="file",t.accept=".json",t.onchange=async e=>{const i=e.target.files?.[0];if(i)try{const a=await i.text(),s=JSON.parse(a);await c.deserialize(s),await this.reload(),L({label:"Success",message:"Preferences were imported",type:"success"})}catch(a){L({label:"Unable to import preferences",message:String(a),type:"error"})}},t.click()}async handlePuzzlePreferencesChange(t){this.puzzle&&await c.setPuzzlePreferences(this.puzzle.puzzleId,t.detail.changes)}get open(){return this.dialog?.open??!1}set open(t){this.dialog&&(this.dialog.open=t)}async reload(){await this.shadowRoot?.querySelector("puzzle-preferences-form")?.reloadValues()}async show(){this.dialog?.open||await this.reload(),this.dialog&&(this.dialog.open=!0)}async showPanel(t){const e=this.shadowRoot?.querySelector(`wa-details#${t}`);e&&(e.open=!0,await e.updateComplete,e.scrollIntoView({}))}hide(){this.dialog&&(this.dialog.open=!1)}};S.styles=[et,it,E`
      :host {
        display: contents;
      }
  
      wa-dialog::part(body) {
        display: flex;
        flex-direction: column;
        gap: var(--wa-space-l);
        
        /* De-emphasize slider/input labels to match checkbox/radio labels */
        --wa-form-control-label-font-weight: var(--wa-form-control-value-font-weight);
      }
      
      wa-dialog::part(dialog) {
        background-color: var(--wa-color-brand-fill-quiet);
      }
      
      wa-details[open]::part(header) {
        border-block-end: 
            var(--wa-panel-border-width) 
            var(--wa-color-surface-border) 
            var(--wa-panel-border-style);
      }
      
      wa-details::part(content) {
        display: flex;
        flex-direction: column;
        gap: var(--wa-space-l);
      }
  
      /* Place the maxScale 100% and 200% labels below the appropriate markers */
      .scale-1x, .scale-2x {
        position: absolute;
        transform: translateX(calc(-50% + 0.5ch)); /* visually center */
      }
      .scale-1x {
        inset-inline-start: ${100*(1-y)/(z-y)}%;
      }
      .scale-2x {
        inset-inline-start: ${100*(2-y)/(z-y)}%;
      }
      
      .hint {
        /* match hint in various controls */
        color: var(--wa-form-control-hint-color);
        font-size: var(--wa-font-size-smaller);
        font-weight: var(--wa-form-control-hint-font-weight);
        line-height: var(--wa-form-control-hint-line-height);
      }
        
      wa-button + .hint,
      wa-dropdown + .hint {
        margin-block-start: var(--wa-space-xs);
      }

      wa-progress-ring,
      wa-spinner {
        vertical-align: -2px; /* visual text-middle alignment*/
      }
      wa-progress-ring {
        /* match spinner size and track width */
        --size: calc(1em - 1px);
        --track-width: 2px;
      }
      
      .offline-status button {
        /* Format offline-status buttons as links */
        display: inline-block;
        vertical-align: baseline;
        background: inherit;
        font-weight: inherit;
        font-size: inherit;
        padding: 0;
        margin: 0;
        border: none;
        
        color: var(--wa-color-text-link);
        text-decoration: var(--wa-link-decoration-default);
        -webkit-text-decoration: var(--wa-link-decoration-default); /* Safari */
        text-decoration-thickness: 0.09375em;
        text-underline-offset: 0.125em;

        @media (hover: hover)  {
          &:hover {
            color: color-mix(in oklab, var(--wa-color-text-link), var(--wa-color-mix-hover));
            text-decoration: var(--wa-link-decoration-hover);
            -webkit-text-decoration: var(--wa-link-decoration-hover); /* Safari */
          }
        }
      }
      
    `];B([W({context:q,subscribe:!0}),C()],S.prototype,"puzzle",2);B([x("wa-dialog",!0)],S.prototype,"dialog",2);S=B([F("settings-dialog")],S);export{S as SettingsDialog};
//# sourceMappingURL=settings-dialog-DFWl7yVy.js.map
