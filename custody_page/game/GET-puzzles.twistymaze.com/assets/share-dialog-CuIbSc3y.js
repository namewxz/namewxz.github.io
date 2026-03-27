import{c as m,p as g}from"./audio-CDUuflQX.js";import{o as v,b as y,h,A as r,d as s,e as u,k as b,a as z,i as x,r as c,C as $,n as k,t as C}from"./dynamic-content-CxlmA9GR.js";import"./puzzle-page-Ct6Uuowq.js";import"./sentry-Coq7X-ar.js";import"./unsafe-html-UuEEukLm.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e._sentryModuleMetadata=e._sentryModuleMetadata||{},e._sentryModuleMetadata[new e.Error().stack]=(function(t){for(var a=1;a<arguments.length;a++){var n=arguments[a];if(n!=null)for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])}return t})({},e._sentryModuleMetadata[new e.Error().stack],{"_sentryBundlerPluginAppKey:code-from-puzzles-web":!0})}catch{}})();var O=Object.defineProperty,T=Object.getOwnPropertyDescriptor,p=(e,t,a,n)=>{for(var i=n>1?void 0:n?T(t,a):t,o=e.length-1,d;o>=0;o--)(d=e[o])&&(i=(n?d(t,a,i):d(i))||i);return n&&i&&O(t,a,i),i};let l=class extends v(y){get open(){return this.dialog?.open??!1}set open(e){this.dialog&&(this.dialog.open=e)}async reset(){this.gameTypeDescription=this.puzzle?.currentParams?await this.puzzle.getParamsDescription(this.puzzle.currentParams):void 0,this.formattedText=await this.puzzle?.formatAsText()}async showPanel(e){const t=this.shadowRoot?.querySelector(`wa-details#${e}`);t&&(t.open=!0,await t.updateComplete,t.scrollIntoView({}))}render(){const e=this.puzzle?.displayName??"Unknown puzzle",t=this.puzzle?.currentParams,a=this.puzzle?.currentGameId,n=this.puzzle?.randomSeed,i=n??a,o=this.puzzle?.puzzleId,d=this.gameTypeDescription?`type “${this.gameTypeDescription}”`:"this custom type",w=o&&t?h({puzzleId:o,puzzleParams:t}).href:void 0,f=o&&i?h({puzzleId:o,puzzleGameId:i}):void 0;return s`
      <wa-dialog 
          light-dismiss
          @wa-after-show=${this.handleDialogOpenChange} 
          @wa-after-hide=${this.handleDialogOpenChange}
      >
        <div slot="label">Share</div>
        
        <wa-details open id="link" name="share">
          <div slot="summary">Link to ${e}</div>
          ${this.renderCopyableInput({label:"This specific game",value:f,hint:"Challenge a friend to solve the same puzzle"})}
          ${this.renderCopyableInput({label:"This puzzle type",value:w,hint:`Random games of ${d}`})}
        </wa-details>
        
        ${this.formattedText?s`
              <wa-details id="text" name="share">
                <div slot="summary" id="text-label">Copy as text</div>
                <wa-textarea 
                    id="formatted-text"
                    aria-labelledby="text-label"
                    hint="An ASCII art version of the game’s current state"
                    readonly 
                    rows=${Math.min(15,this.formattedText.split(`
`).length-1)}
                    resize="vertical" 
                    .value=${this.formattedText}
                    @focus=${this.selectAllOnFocus}
                ></wa-textarea>
                <wa-copy-button class="inset" from="formatted-text.value"></wa-copy-button>
              </wa-details>
            `:r}
        
        <wa-details id="other" name="share" class="tight">
          <div slot="summary">Game ID and more</div>
          
          ${this.renderCopyableInput({label:"Game ID",value:a})}
          ${this.renderCopyableInput({label:"Random seed",value:n})}
          <div class="hint">Enter into any compatible portable puzzle collection 
            app to play this same game</div>
          
          ${this.renderSGTLinks({puzzleId:o,puzzleParams:t,gameId:a,randomSeed:n})}
        </wa-details>
        
      </wa-dialog>
    `}renderCopyableInput({label:e,hint:t,value:a}){return a?s`
      <wa-input
          label=${typeof e=="string"?e:r}
          hint=${t}
          readonly
          .value=${a}
          @focus=${this.selectAllOnFocus}
      >
        ${typeof e=="string"?r:s`<div slot="label">${e}</div>`}
        <wa-copy-button slot="end" value=${a}></wa-copy-button>
      </wa-input>
    `:r}renderSGTLinks({puzzleId:e,puzzleParams:t,gameId:a,randomSeed:n}){if((!e||u[e]?.collection!=="original"||u[e]?.unfinished)&&e!=="group")return r;const i=`https://www.chiark.greenend.org.uk/~sgtatham/puzzles/js/${encodeURIComponent(e)}.html`,o=[];return a&&o.push(this.renderOffsiteLink({hint:"by game ID",url:Object.assign(new URL(i),{hash:encodeURIComponent(a)})})),n&&o.push(this.renderOffsiteLink({hint:"by random seed",url:Object.assign(new URL(i),{hash:encodeURIComponent(n)})})),t&&o.push(this.renderOffsiteLink({hint:"by puzzle type",url:Object.assign(new URL(i),{hash:encodeURIComponent(t)})})),o.length===0&&o.push(this.renderOffsiteLink({url:i})),s`
      <div>
        <wa-divider></wa-divider>
        Play this game at Simon Tatham’s website
        ${o}
      </div>
    `}renderOffsiteLink({label:e,hint:t,url:a}){return a?s`
      <div>
        ${e?s`<div>${e}</div>`:r}
        <div class="link">
          <a href=${a} target="_blank">${a}</a>
          <wa-copy-button value=${a}></wa-copy-button>
        </div>
        ${t?s`<div class="hint">${t}</div>`:r}
      </div>
    `:r}handleDialogOpenChange(e){e.target===this.dialog&&this.requestUpdate("open")}selectAllOnFocus(e){e.target.select()}};l.styles=[b,z,x`
      :host {
        display: contents;
      }
  
      wa-dialog {
        --width: min(calc(100vw - 2 * var(--wa-space-l)), 35rem);
      }
  
      wa-dialog::part(body) {
        display: flex;
        flex-direction: column;
        gap: var(--wa-space-l);
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
      
      wa-details::part(header) {
        color: var(--wa-form-control-label-color);
        font-weight: var(--wa-form-control-label-font-weight);
      }
  
      wa-details::part(content) {
        max-width: 100%;
  
        display: flex;
        flex-direction: column;
        gap: var(--wa-space-l);
        
        position: relative; /* For .inset copy button */
      }
      wa-details.tight::part(content) {
        gap: var(--wa-space-m);
      }
      
      wa-input::part(label) {
        color: inherit;
        font-weight: inherit;
      }
      
      wa-input:has(:focus-within)::part(input):focus-within {
        /* Prevent double focus rect when focus on copy-button inside input*/
        outline: none;
      }
      
      wa-input wa-copy-button {
        /* Reduce horizontal spacing at start, overlap padding at end */
        margin-inline: 0.5em -0.75em;
      }
      
      wa-textarea {
        &::part(textarea) {
          font-family: var(--wa-font-family-code);
          min-height: 2lh;
          white-space: pre;
        }
      }
      
      wa-copy-button.inset {
        /* align icon with textarea content area: 
         * details content padding + textarea padding - copy-button padding */
        position: absolute;
        inset-block-start: 
            calc(var(--wa-space-m) + var(--wa-form-control-padding-block) - 0.5em);
        inset-inline-end: 
            calc(var(--wa-space-m) + var(--wa-form-control-padding-inline) - 0.75em);
        
        &:not(:hover)::part(button) {
          /* It's transparent by default; may have text under it */
          background-color: var(--wa-form-control-background-color);
        }
      }
  
      .link {
        display: flex;
        gap: var(--wa-space-xs);
        align-items: baseline;
        
        a {
          display: inline-block;
          min-width: 1px;
          flex: 1 1 auto;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
  
      .hint {
        /* match hint in various controls */
        color: var(--wa-form-control-hint-color);
        font-size: var(--wa-font-size-smaller);
        font-weight: var(--wa-form-control-hint-font-weight);
        line-height: var(--wa-form-control-hint-line-height);
      }
    `];p([m({context:g,subscribe:!0}),c()],l.prototype,"puzzle",2);p([$("wa-dialog")],l.prototype,"dialog",2);p([k({type:Boolean,reflect:!0})],l.prototype,"open",1);p([c()],l.prototype,"gameTypeDescription",2);p([c()],l.prototype,"formattedText",2);l=p([C("share-dialog")],l);export{l as ShareDialog};
//# sourceMappingURL=share-dialog-CuIbSc3y.js.map
