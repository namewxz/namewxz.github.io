import{g as u,c as k,a as w,i as h,n as g,r as v,b as B,d as o,A as p,t as z,o as D,s as c,p as b,e as f,f as $,h as M,j as P,k as I,l as E,S as O}from"./dynamic-content-CxlmA9GR.js";import"./command-link-R2N3y73h.js";import"./sentry-Coq7X-ar.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};s._sentryModuleMetadata=s._sentryModuleMetadata||{},s._sentryModuleMetadata[new s.Error().stack]=(function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];if(a!=null)for(var n in a)a.hasOwnProperty(n)&&(e[n]=a[n])}return e})({},s._sentryModuleMetadata[new s.Error().stack],{"_sentryBundlerPluginAppKey:code-from-puzzles-web":!0})}catch{}})();const S='header,section,noscript,footer{box-sizing:border-box;padding:var(--app-padding);@media(prefers-reduced-motion:no-preference){transition:padding var(--wa-transition-fast) var(--wa-transition-easing)}}section,noscript,footer{margin:0 auto;*:first-child{margin-block-start:0}}section{padding-block-end:0}section[slot=intro],footer{max-width:61ch}noscript section{max-width:calc(61ch - 2 * var(--app-padding))}header{position:sticky;top:0;z-index:1;background-color:var(--app-theme-color);display:grid;grid-template-areas:"logo title    controls" "logo subtitle controls";grid-template-columns:auto 1fr auto;align-items:start;.logo{grid-area:logo;height:3.5em;width:auto;object-fit:contain;margin-inline-end:var(--wa-space-l);z-index:2}.title{grid-area:title;h1{font-size:var(--app-title-font-size);line-height:var(--wa-line-height-condensed)}}.subtitle{grid-area:subtitle;max-height:100%;overflow:hidden;display:flex;align-items:end;font-size:var(--wa-font-size-m);font-weight:var(--wa-font-weight-normal);color:var(--wa-color-text-quiet)}.controls{grid-area:controls;align-self:start;display:flex;gap:0;margin-block:calc((1lh - var(--wa-form-control-height)) / 2);margin-inline-end:calc(-1 * (var(--wa-form-control-padding-inline) + var(--wa-border-width-s)));>a{display:inline-flex;align-items:center;font-weight:var(--wa-font-weight-action);margin-block:calc((var(--wa-form-control-height) - 1lh) / 2);margin-inline:calc(var(--wa-form-control-padding-inline) + var(--wa-border-width-s));&:not(:hover){color:inherit;text-decoration:none}img{width:1em;height:1em;margin-inline-end:.75em}}}wa-button[appearance=plain]::part(base){color:var(--wa-color-text-normal)}}footer{display:flex;flex-direction:column;gap:var(--app-spacing);@media(prefers-reduced-motion:no-preference){transition:gap var(--wa-transition-fast) var(--wa-transition-easing)}}@property --scroll-range-end{syntax: "<length>"; inherits: true; initial-value: 0;}@property --scroll-animation-duration{syntax: "<time>"; inherits: true; initial-value: 1s;}header{--scroll-range-end: calc(3.5em + var(--app-padding));--scroll-animation-options: var(--scroll-animation-duration) linear forwards paused}@supports (animation-timeline: scroll()){header{--scroll-animation-options: linear forwards}}header{animation:scroll-header var(--scroll-animation-options);animation-timeline:scroll();animation-range:0 var(--scroll-range-end);.logo{animation:scroll-logo var(--scroll-animation-options);animation-timeline:scroll();animation-range:0 var(--scroll-range-end)}h1{animation:scroll-h1 var(--scroll-animation-options);animation-timeline:scroll();animation-range:0 var(--scroll-range-end)}.subtitle{animation:scroll-subtitle var(--scroll-animation-options);animation-timeline:scroll();animation-range:0 var(--scroll-range-end)}}@keyframes scroll-header{0%{padding-block:var(--app-padding);box-shadow:none;grid-template-rows:auto 1fr}to{padding-block:var(--app-spacing);box-shadow:var(--wa-shadow-l);grid-template-rows:auto 0fr}}@keyframes scroll-logo{0%{height:3.5em;margin-inline-end:var(--wa-space-l);align-self:start}98%{align-self:start}to{height:1.25em;margin-inline-end:var(--wa-space-m);align-self:center}}@keyframes scroll-h1{0%{font-size:var(--wa-font-size-xl)}to{font-size:var(--app-title-font-size)}}@keyframes scroll-subtitle{0%{opacity:1;visibility:visible}to{opacity:0;visibility:hidden}}';class L{constructor(e,t={}){this.host=e,this.options=t,this.installed=!1,this.hadFirstUpdate=!1,this.update=()=>{if(!this.scrollContainer)return;const a=(typeof this.options.animationElement=="function"?this.options.animationElement():this.options.animationElement)??this.scrollContainer,n=this.options.animationDuration??u(a,"--scroll-animation-duration",1),l=(this.options.rangeEnd??u(a,"--scroll-range-end",this.scrollContainer.scrollHeight))||this.scrollContainer.scrollHeight,d=this.options.animationNamePrefix??"scroll-",y=this.scrollContainer.scrollTop,x=1e3*k(0,n*y/Math.max(l,1),n),C=a.getAnimations({subtree:!0}).filter(_=>_ instanceof CSSAnimation&&_.animationName.startsWith(d));for(const _ of C)_.currentTime=x},this.host.addController(this)}hostConnected(){!this.installed&&!CSS.supports("animation-timeline: scroll()")&&(this.installed=!0,this.scrollContainer=this.options.scrollContainer??this.host,this.scrollListener=this.scrollContainer===document.documentElement?document:this.scrollContainer,this.scrollListener.addEventListener("scroll",this.update,{passive:!0}),window.addEventListener("pageshow",this.update)),this.hadFirstUpdate=!1}hostDisconnected(){this.installed&&(this.scrollListener?.removeEventListener("scroll",this.update),window.removeEventListener("pageshow",this.update),this.scrollContainer=void 0,this.scrollListener=void 0,this.installed=!1)}hostUpdated(){this.installed&&!this.hadFirstUpdate&&(this.hadFirstUpdate=!0,this.update())}}const j="/assets/abcd-64d8-yXLnLmux.png",T="/assets/ascent-64d8-CnVlEH1R.png",A="/assets/blackbox-64d8-CLzVF4xk.png",F="/assets/boats-64d8-CS4Zn_Oe.png",U="/assets/bricks-64d8-BK5QXl8y.png",q="/assets/bridges-64d8-CcqoMUx3.png",G="/assets/clusters-64d8-BM8PdleK.png",H="/assets/crossing-64d8-Bixheyj7.png",K="/assets/cube-64d8-DL6SOGX9.png",N="/assets/dominosa-64d8-BhV1QjC1.png",R="/assets/fifteen-64d8-DM0ouGWf.png",W="/assets/filling-64d8-n4wUT21i.png",V="/assets/flip-64d8-CPw0Uuy2.png",X="/assets/flood-64d8-DnTzFNn6.png",Y="/assets/galaxies-64d8-BCMBCxOX.png",J="/assets/group-64d8--7q9BZqn.png",Q="/assets/guess-64d8-BUe_WKiU.png",Z="/assets/inertia-64d8-CZ5Af5jB.png",ss="/assets/keen-64d8-CnBfmeCY.png",es="/assets/lightup-64d8-DKpDKBfy.png",ts="/assets/loopy-64d8-DNk9zvKR.png",ns="/assets/magnets-64d8-DMNhAMZx.png",as="/assets/map-64d8-DiZY43hL.png",os="/assets/mathrax-64d8-DGRGjY1_.png",is="/assets/mines-64d8-Bv2EoyjP.png",rs="/assets/mosaic-64d8-BdyALMAv.png",ls="/assets/net-64d8-BaNUezw9.png",ds="/assets/netslide-64d8-CqZFVnU3.png",cs="/assets/nullgame-64d8-okUctWeI.png",gs="/assets/palisade-64d8-B402p88s.png",ps="/assets/pattern-64d8-CsC7G0tG.png",_s="/assets/pearl-64d8-DKc9VhR9.png",vs="/assets/pegs-64d8-4IJ46APo.png",hs="/assets/range-64d8-CglSZ_ut.png",ms="/assets/rect-64d8-vKJ_tkUM.png",us="/assets/rome-64d8-CdMwv8fT.png",bs="/assets/salad-64d8-Bsepl-_1.png",fs="/assets/samegame-64d8-BCngsT4d.png",ws="/assets/seismic-64d8-RqTcBfdY.png",zs="/assets/signpost-64d8-6CiljLAN.png",ys="/assets/singles-64d8-SlsALsqM.png",xs="/assets/sixteen-64d8-DuGm41B4.png",Cs="/assets/slant-64d8-BLf4uZ6a.png",ks="/assets/slide-64d8-DjsGhzxv.png",Bs="/assets/sokoban-64d8-wAEnsZEa.png",Ds="/assets/solo-64d8-1tAdKmLW.png",$s="/assets/spokes-64d8-BcTTteNS.png",Ms="/assets/sticks-64d8-DNrigC_f.png",Ps="/assets/subsets-64d8-B11xDFfz.png",Is="/assets/tents-64d8-BdKpJvDq.png",Es="/assets/towers-64d8-CNhck0D2.png",Os="/assets/tracks-64d8-CkRIeACA.png",Ss="/assets/twiddle-64d8-CbXW5wxO.png",Ls="/assets/undead-64d8-T7X4dIde.png",js="/assets/unequal-64d8-DHtshVRA.png",Ts="/assets/unruly-64d8-C2ybxi_C.png",As="/assets/untangle-64d8-D3fUMjfe.png",Fs="/assets/abcd-128d8-NSdT5XX6.png",Us="/assets/ascent-128d8-D5vQSRH8.png",qs="/assets/blackbox-128d8-BGlEEBs3.png",Gs="/assets/boats-128d8-D0TOHWVJ.png",Hs="/assets/bricks-128d8-BlBA5Evl.png",Ks="/assets/bridges-128d8-BvOmON1y.png",Ns="/assets/clusters-128d8-DiyK1Mnm.png",Rs="/assets/crossing-128d8-C3TOFq86.png",Ws="/assets/cube-128d8-CO3luPuo.png",Vs="/assets/dominosa-128d8-Bt4rmlTf.png",Xs="/assets/fifteen-128d8-CBWKVtci.png",Ys="/assets/filling-128d8-Dxq1Qtsr.png",Js="/assets/flip-128d8-2NnuKna3.png",Qs="/assets/flood-128d8-BY8Y5zvh.png",Zs="/assets/galaxies-128d8-V1fo8wjO.png",se="/assets/group-128d8-BLxnSBc-.png",ee="/assets/guess-128d8-UV7xXKtK.png",te="/assets/inertia-128d8-B0IyTpDi.png",ne="/assets/keen-128d8-CrtBanSD.png",ae="/assets/lightup-128d8-CbFD1N1X.png",oe="/assets/loopy-128d8-CM_6lr9G.png",ie="/assets/magnets-128d8-vQhVHqvz.png",re="/assets/map-128d8-DVeupo7s.png",le="/assets/mathrax-128d8-Bh92hSMW.png",de="/assets/mines-128d8-D1pe-zE2.png",ce="/assets/mosaic-128d8-BDzHOscl.png",ge="/assets/net-128d8-DEW4_kDV.png",pe="/assets/netslide-128d8-BeGnX0iC.png",_e="/assets/nullgame-128d8-DyYApP_E.png",ve="/assets/palisade-128d8-ChqD29FM.png",he="/assets/pattern-128d8-COFYOKgg.png",me="/assets/pearl-128d8-BX3kIpO1.png",ue="/assets/pegs-128d8-KwxqyVdK.png",be="/assets/range-128d8-xvT7pfey.png",fe="/assets/rect-128d8-D4_pmAgr.png",we="/assets/rome-128d8-BtIPw0EU.png",ze="/assets/salad-128d8-QZEJcKmL.png",ye="/assets/samegame-128d8-DeWO_m7O.png",xe="/assets/seismic-128d8-JQQLwE2j.png",Ce="/assets/signpost-128d8-DOPX_-O7.png",ke="/assets/singles-128d8-D1co_D2p.png",Be="/assets/sixteen-128d8-D2tufP8Y.png",De="/assets/slant-128d8-CynR9H6G.png",$e="/assets/slide-128d8-Bq94II4M.png",Me="/assets/sokoban-128d8-DNTj35nb.png",Pe="/assets/solo-128d8-VcGJiMeM.png",Ie="/assets/spokes-128d8-jwd8pAtX.png",Ee="/assets/sticks-128d8-ApJoNIib.png",Oe="/assets/subsets-128d8-CcgcURrR.png",Se="/assets/tents-128d8-CJRMl99-.png",Le="/assets/towers-128d8-CMb_GQ9A.png",je="/assets/tracks-128d8-C1Jfac-P.png",Te="/assets/twiddle-128d8-BC05mu3D.png",Ae="/assets/undead-128d8-j4QXfM1n.png",Fe="/assets/unequal-128d8-994cnSMM.png",Ue="/assets/unruly-128d8-DYFRfhzd.png",qe="/assets/untangle-128d8-Cja2d7_1.png";var Ge=Object.defineProperty,He=Object.getOwnPropertyDescriptor,r=(s,e,t,a)=>{for(var n=a>1?void 0:a?He(e,t):e,l=s.length-1,d;l>=0;l--)(d=s[l])&&(n=(a?d(e,t,n):d(n))||n);return a&&n&&Ge(e,t,n),n};let i=class extends B{constructor(){super(...arguments),this.puzzleId="",this.name="",this.description="",this.objective="",this.unfinished=!1,this.href="",this.gameInProgress=!1,this.favorite=!1,this.iconLoaded=!1,this.iconMissing=!1}willUpdate(s){if(s.has("puzzleId")){const e=new URL(Object.assign({"./assets/icons/abcd-64d8.png":j,"./assets/icons/ascent-64d8.png":T,"./assets/icons/blackbox-64d8.png":A,"./assets/icons/boats-64d8.png":F,"./assets/icons/bricks-64d8.png":U,"./assets/icons/bridges-64d8.png":q,"./assets/icons/clusters-64d8.png":G,"./assets/icons/crossing-64d8.png":H,"./assets/icons/cube-64d8.png":K,"./assets/icons/dominosa-64d8.png":N,"./assets/icons/fifteen-64d8.png":R,"./assets/icons/filling-64d8.png":W,"./assets/icons/flip-64d8.png":V,"./assets/icons/flood-64d8.png":X,"./assets/icons/galaxies-64d8.png":Y,"./assets/icons/group-64d8.png":J,"./assets/icons/guess-64d8.png":Q,"./assets/icons/inertia-64d8.png":Z,"./assets/icons/keen-64d8.png":ss,"./assets/icons/lightup-64d8.png":es,"./assets/icons/loopy-64d8.png":ts,"./assets/icons/magnets-64d8.png":ns,"./assets/icons/map-64d8.png":as,"./assets/icons/mathrax-64d8.png":os,"./assets/icons/mines-64d8.png":is,"./assets/icons/mosaic-64d8.png":rs,"./assets/icons/net-64d8.png":ls,"./assets/icons/netslide-64d8.png":ds,"./assets/icons/nullgame-64d8.png":cs,"./assets/icons/palisade-64d8.png":gs,"./assets/icons/pattern-64d8.png":ps,"./assets/icons/pearl-64d8.png":_s,"./assets/icons/pegs-64d8.png":vs,"./assets/icons/range-64d8.png":hs,"./assets/icons/rect-64d8.png":ms,"./assets/icons/rome-64d8.png":us,"./assets/icons/salad-64d8.png":bs,"./assets/icons/samegame-64d8.png":fs,"./assets/icons/seismic-64d8.png":ws,"./assets/icons/signpost-64d8.png":zs,"./assets/icons/singles-64d8.png":ys,"./assets/icons/sixteen-64d8.png":xs,"./assets/icons/slant-64d8.png":Cs,"./assets/icons/slide-64d8.png":ks,"./assets/icons/sokoban-64d8.png":Bs,"./assets/icons/solo-64d8.png":Ds,"./assets/icons/spokes-64d8.png":$s,"./assets/icons/sticks-64d8.png":Ms,"./assets/icons/subsets-64d8.png":Ps,"./assets/icons/tents-64d8.png":Is,"./assets/icons/towers-64d8.png":Es,"./assets/icons/tracks-64d8.png":Os,"./assets/icons/twiddle-64d8.png":Ss,"./assets/icons/undead-64d8.png":Ls,"./assets/icons/unequal-64d8.png":js,"./assets/icons/unruly-64d8.png":Ts,"./assets/icons/untangle-64d8.png":As})[`./assets/icons/${this.puzzleId}-64d8.png`],import.meta.url).href,t=new URL(Object.assign({"./assets/icons/abcd-128d8.png":Fs,"./assets/icons/ascent-128d8.png":Us,"./assets/icons/blackbox-128d8.png":qs,"./assets/icons/boats-128d8.png":Gs,"./assets/icons/bricks-128d8.png":Hs,"./assets/icons/bridges-128d8.png":Ks,"./assets/icons/clusters-128d8.png":Ns,"./assets/icons/crossing-128d8.png":Rs,"./assets/icons/cube-128d8.png":Ws,"./assets/icons/dominosa-128d8.png":Vs,"./assets/icons/fifteen-128d8.png":Xs,"./assets/icons/filling-128d8.png":Ys,"./assets/icons/flip-128d8.png":Js,"./assets/icons/flood-128d8.png":Qs,"./assets/icons/galaxies-128d8.png":Zs,"./assets/icons/group-128d8.png":se,"./assets/icons/guess-128d8.png":ee,"./assets/icons/inertia-128d8.png":te,"./assets/icons/keen-128d8.png":ne,"./assets/icons/lightup-128d8.png":ae,"./assets/icons/loopy-128d8.png":oe,"./assets/icons/magnets-128d8.png":ie,"./assets/icons/map-128d8.png":re,"./assets/icons/mathrax-128d8.png":le,"./assets/icons/mines-128d8.png":de,"./assets/icons/mosaic-128d8.png":ce,"./assets/icons/net-128d8.png":ge,"./assets/icons/netslide-128d8.png":pe,"./assets/icons/nullgame-128d8.png":_e,"./assets/icons/palisade-128d8.png":ve,"./assets/icons/pattern-128d8.png":he,"./assets/icons/pearl-128d8.png":me,"./assets/icons/pegs-128d8.png":ue,"./assets/icons/range-128d8.png":be,"./assets/icons/rect-128d8.png":fe,"./assets/icons/rome-128d8.png":we,"./assets/icons/salad-128d8.png":ze,"./assets/icons/samegame-128d8.png":ye,"./assets/icons/seismic-128d8.png":xe,"./assets/icons/signpost-128d8.png":Ce,"./assets/icons/singles-128d8.png":ke,"./assets/icons/sixteen-128d8.png":Be,"./assets/icons/slant-128d8.png":De,"./assets/icons/slide-128d8.png":$e,"./assets/icons/sokoban-128d8.png":Me,"./assets/icons/solo-128d8.png":Pe,"./assets/icons/spokes-128d8.png":Ie,"./assets/icons/sticks-128d8.png":Ee,"./assets/icons/subsets-128d8.png":Oe,"./assets/icons/tents-128d8.png":Se,"./assets/icons/towers-128d8.png":Le,"./assets/icons/tracks-128d8.png":je,"./assets/icons/twiddle-128d8.png":Te,"./assets/icons/undead-128d8.png":Ae,"./assets/icons/unequal-128d8.png":Fe,"./assets/icons/unruly-128d8.png":Ue,"./assets/icons/untangle-128d8.png":qe})[`./assets/icons/${this.puzzleId}-128d8.png`],import.meta.url).href;this.icon1x=e.endsWith("/undefined")?void 0:e,this.icon2x=t.endsWith("/undefined")?void 0:t,this.iconLoaded=!1}}renderIcon(){if(this.iconMissing||!this.icon1x||!this.icon2x){const s=this.unfinished?"unfinished":"generic-puzzle";return o`<wa-icon part="icon" auto-width name=${s}></wa-icon>`}return o`
      <img 
          part="icon"
          class=${this.iconLoaded?p:"loading"}
          srcset="${this.icon1x}, ${this.icon2x} 2x" 
          src=${this.icon2x}
          alt=""
          loading="lazy"
          @load=${this.handleIconLoaded}
          @error=${this.handleIconError}
      >`}renderFavoriteToggle(){return o`
      <wa-button
          part="favorite"
          aria-pressed=${String(this.favorite)}
          appearance="plain"
          @click=${this.handleFavoriteToggle}
      >
        <wa-icon name="favorite" label="Favorite"></wa-icon>
      </wa-button>
    `}renderGameInProgressBadge(){return this.gameInProgress?o`<wa-icon name="game-in-progress" label="(Game in progress)"></wa-icon>`:p}renderUnfinishedBadge(){return this.unfinished?o`<div part="unfinished">Experimental</div>`:p}render(){return o`
      <a part="base" href=${this.href} draggable="false" tabindex="0">
        ${this.renderIcon()}
        <h3 part="title">${this.name}</h3>
        ${this.renderUnfinishedBadge()}
        ${this.renderGameInProgressBadge()}
        ${this.renderFavoriteToggle()}
        <div part="description">${this.objective}</div>
      </a>
    `}handleFavoriteToggle(s){s.stopPropagation(),s.preventDefault(),this.favorite=!this.favorite,this.dispatchEvent(new CustomEvent("favorite-change",{bubbles:!0,composed:!0,detail:{puzzleId:this.puzzleId,isFavorite:this.favorite}}))}handleIconLoaded(){this.iconLoaded=!0}handleIconError(){this.iconMissing=!0}};i.styles=[w,h`
      * {
        box-sizing: border-box;
      }
      
      :host {
        display: block;
        touch-action: manipulation;
        --icon-size: 64px;
        --padding: var(--wa-space-m);
        --spacing: var(--wa-space-xs);
      }
      
      [part="base"] {
        height: 100%;
        width: 100%;
  
        position: relative;
        
        display: grid;
        grid-template-areas:
          "icon title          favorite"
          "icon description description";
        grid-template-columns: var(--icon-size) 1fr auto;
        grid-template-rows: auto 1fr;
  
        padding: var(--padding);
        column-gap: var(--padding);
        row-gap: var(--spacing);
  
        background-color: var(--wa-color-surface-default);
        color: var(--wa-color-text-normal);
        border-color: var(--wa-color-surface-border);
        border-radius: var(--wa-panel-border-radius);
        border-style: var(--wa-panel-border-style);
        border-width: var(--wa-panel-border-width);
        
        &:focus-visible {
          outline: var(--wa-focus-ring);
          outline-offset: var(--wa-focus-ring-offset);
        }
        
        &:is(a) {
          /* Remove some <a> styles and behaviors */
          cursor: pointer;
          text-decoration: none;
        }
      }
  
      @media (hover: hover) {
        @media (prefers-reduced-motion: no-preference) {
          [part="base"] {
            transition:
                transform var(--wa-transition-normal) var(--wa-transition-easing),
                box-shadow var(--wa-transition-normal) var(--wa-transition-easing);
          }
  
          [part="base"]:hover {
            transform: translateY(calc(-1 * var(--wa-space-2xs)));
            box-shadow: var(--wa-shadow-l);
          }
        }
      }
  
      [part="icon"] {
        grid-area: icon;

        width: var(--icon-size);
        height: var(--icon-size);
        border-radius: var(--wa-border-radius-s);

        display: flex;
        align-items: center;
        justify-content: center;

        font-size: calc(var(--icon-size) - 2 * var(--wa-space-xs));
        background-color: var(--wa-color-neutral-fill-quiet);
        color: var(--wa-color-neutral-on-quiet);
        :host([unfinished]) & {
          color: var(--wa-color-warning-fill-loud);
        }

        &:is(wa-icon)::part(svg) {
          width: unset;
        }

        opacity: 1;
        &.loading {
          opacity: 0;
        }
        transition: opacity var(--wa-transition-fast) var(--wa-transition-easing);
      }
  
      [part="title"] {
        grid-area: title;
        min-width: 1em;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      h3 {
        margin: 0;
        line-height: var(--wa-line-height-condensed);
        color: var(--wa-color-text-normal);
        font-size: var(--wa-font-size-l);
        font-weight: var(--wa-font-weight-semibold);
      }

      [part="favorite"] {
        grid-area: favorite;
        
        /* Exclude padding from layout calculations */
        margin: calc(-1 * var(--wa-space-xs));
        
        /* Remove some button padding and allow natural size */
        &::part(base) {
          padding: var(--wa-space-xs);
          height: auto;
          width: auto;
        }
        
        /* Toggled-on appearance */
        color: var(--wa-color-text-quiet);
        &[aria-pressed="true"] wa-icon {
          /*color: var(--wa-color-brand-fill-loud);*/
          &::part(svg) {
            fill: currentColor;
          }
        }
      }
  
      [part="description"] {
        grid-area: description;
  
        color: var(--wa-color-text-quiet);
        font-size: var(--wa-font-size-m);
        font-weight: var(--wa-font-weight-normal);
        line-height: var(--wa-line-height-normal);
      }
      
      [part="unfinished"] {
        position: absolute;
        inset-block-start: calc(var(--padding) + var(--icon-size));
        inset-inline-start: calc(var(--padding) + var(--icon-size)/2);
        transform: translate(-50%, -40%) rotate(-7.5deg);
        transform-origin: 50% 50%;
        
        padding: var(--wa-space-3xs);
        font-size: var(--wa-font-size-2xs);
        line-height: 1;

        background-color: var(--wa-color-surface-default);
        color: var(--wa-color-text-normal);
        
        --border-width: var(--wa-border-width-m);
        border-style: solid;
        border-width: var(--border-width);
        border-image-source: repeating-linear-gradient(
            -45deg,
            var(--wa-color-warning-border-loud),
            var(--wa-color-warning-border-loud) calc(2 * var(--border-width)),
            var(--wa-color-surface-default) calc(2 * var(--border-width)),
            var(--wa-color-surface-default)  calc(3 * var(--border-width))
        );
        border-image-slice: 1;
      }
  
      wa-icon[name="game-in-progress"] {
        position: absolute;
        inset-block-start: calc(var(--padding) - 0.5em);
        inset-inline-start: calc(var(--padding) - 0.5em);
        
        color: var(--wa-color-brand-fill-loud);
        &::part(svg) {
          fill: currentColor;
          
          @supports (paint-order: stroke) {
            /* Add a background outline to stand off from icon */
            stroke: var(--wa-color-surface-default);
            stroke-width: calc(2 * var(--wa-border-width-m));
            paint-order: stroke;
          }
        }
      }
    `];r([g({type:String,attribute:"puzzleid"})],i.prototype,"puzzleId",2);r([g({type:String})],i.prototype,"name",2);r([g({type:String})],i.prototype,"description",2);r([g({type:String})],i.prototype,"objective",2);r([g({type:Boolean})],i.prototype,"unfinished",2);r([g({type:String})],i.prototype,"href",2);r([g({type:Boolean,attribute:"game-in-progress"})],i.prototype,"gameInProgress",2);r([g({type:Boolean})],i.prototype,"favorite",2);r([v()],i.prototype,"icon1x",2);r([v()],i.prototype,"icon2x",2);r([v()],i.prototype,"iconLoaded",2);r([v()],i.prototype,"iconMissing",2);i=r([z("catalog-card")],i);var Ke=Object.getOwnPropertyDescriptor,Ne=(s,e,t,a)=>{for(var n=a>1?void 0:a?Ke(e,t):e,l=s.length-1,d;l>=0;l--)(d=s[l])&&(n=d(n)||n);return n};let m=class extends D(O){constructor(){super(),new L(this,{scrollContainer:document.documentElement,animationElement:()=>this.shadowRoot?.querySelector("header")??this})}render(){return o`
      <header part="header">${this.size==="large"?this.renderWideHeader():this.renderCompactHeader()}</header>

      <div @favorite-change=${this.handleFavoriteChange}>
        ${c.showIntro?this.renderIntro():p}
        ${this.renderFavorites()}
        ${this.renderCatalog()}
      </div>
      
      <footer slot="footer">
        <div>Credits, privacy info, copyright notices and licenses are in the
          <command-link command="about" hide-icon>about box</command-link>.</div>
        <div><small>In some countries, names of similar/related puzzles may be
          trademarks belonging to others. Use here does not imply affiliation
          or endorsement by their owners.</small></div>
      </footer>

      <dynamic-content></dynamic-content>
    `}renderWideHeader(){return o`
      <img class="logo" src="/favicon.svg" alt="" role="presentation">
      <div class="title">
        <h1>Puzzles</h1>
      </div>
      <div class="subtitle">from Simon&nbsp;Tatham’s
        portable&nbsp;puzzle&nbsp;collection and&nbsp;more</div>

      <div class="controls">
        <wa-dropdown>
          <wa-button slot="trigger" appearance="plain" variant="brand" with-caret>
            <wa-icon slot="start" name="options"></wa-icon>
            Options
          </wa-button>
          ${this.renderOptionsMenuContent()}
        </wa-dropdown>
        <wa-button href="help/" appearance="plain" variant="brand">
          <wa-icon name="help" slot="start"></wa-icon>
          Help
        </wa-button>
      </div>
    `}renderCompactHeader(){return o`
      <img class="logo" src="/favicon.svg" alt="" role="presentation">
      <div class="title">
        <wa-dropdown>
          <wa-button slot="trigger" appearance="plain" variant="brand" with-caret>
            <h1>Puzzles</h1>
          </wa-button>
          ${this.renderOptionsMenuContent()}
        </wa-dropdown>
      </div>
      <div class="subtitle">from Simon&nbsp;Tatham’s
        portable&nbsp;puzzle&nbsp;collection and more</div>

      <div class="controls">
        <wa-button href="help/" appearance="plain" variant="brand">${this.size==="small"?o`<wa-icon name="help" label="Help"></wa-icon>`:o`
                <wa-icon name="help" slot="start"></wa-icon>
                Help
              `}</wa-button>
      </div>
    `}renderOptionsMenuContent(){return o`
      <wa-dropdown-item
          data-command="toggle-intro"
          type="checkbox"
          ?checked=${c.showIntro}
      >
        Show intro message
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
    `}renderIntro(){return o`
      <div part="intro">
        <slot name="intro"></slot>
      </div>
    `}renderFavorites(){if(c.favoritePuzzles.size<1)return p;const s=[...c.favoritePuzzles].sort();return this.renderPuzzleGrid(s,"Favorites")}renderCatalog(){const s=c.showUnfinishedPuzzles?b:b.filter(e=>!f[e].unfinished);return this.renderPuzzleGrid(s,c.favoritePuzzles.size>0?"All puzzles":void 0)}renderPuzzleGrid(s,e){return o`
      <section part="puzzle-section">
        ${e?o`<h2>${e}</h2>`:p}
        <div part="puzzle-grid">
          ${$(s,t=>t,t=>this.renderCatalogCard(t))}
        </div>
      </section>
    `}renderCatalogCard(s){const{name:e,description:t,objective:a,unfinished:n}=f[s],l=c.favoritePuzzles.has(s),d=M({puzzleId:s});return o`
      <catalog-card
        puzzleid=${s}
        href=${d}
        name=${e}
        description=${t}
        objective=${a}
        ?game-in-progress=${P.autoSavedPuzzles.has(s)}
        ?favorite=${l}
        ?unfinished=${n}
      ></catalog-card>                    
    `}registerCommandHandlers(){super.registerCommandHandlers(),Object.assign(this.commandMap,{"toggle-intro":this.toggleIntro})}toggleIntro(){c.showIntro=!c.showIntro}handleFavoriteChange(s){const{puzzleId:e,isFavorite:t}=s.detail;c.setFavoritePuzzle(e,t)}};m.styles=[w,I,h`${E(S)}`,h`
      :host {
        display: block;
        box-sizing: border-box;
      }
      
      .title wa-button[slot="trigger"] {
        margin-block: calc(
          (var(--wa-font-size-xl) * var(--wa-line-height-condensed) 
           - var(--wa-form-control-height)
          ) / 2
        );
        margin-inline: calc(-1 * (
            var(--wa-form-control-padding-inline) +
            var(--wa-border-width-s))
        );
      }

      [part="puzzle-section"] {
        max-width: 75rem;

        h2 {
          margin-block-end: var(--wa-space-m);
          color: var(--wa-color-text-normal);
          font-weight: var(--wa-font-weight-semibold);
          font-size: var(--wa-font-size-l);
        }
      }

      [part="puzzle-grid"] {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
        gap: var(--app-spacing);
        align-items: stretch;

        touch-action: manipulation;

        @media (prefers-reduced-motion: no-preference) {
          transition:
              gap var(--wa-transition-fast)  var(--wa-transition-easing);
        }
      }

    `];m=Ne([z("home-screen")],m);
//# sourceMappingURL=index-G9KYusdm.js.map
