import{c as u,p as c}from"./audio-CDUuflQX.js";import{o as h,b as g,d,A as w,a as m,i as f,r as p,C as y,t as v}from"./dynamic-content-CxlmA9GR.js";import"./chunk.K3HXBWLW-a8hWrr7F.js";import"./puzzle-page-Ct6Uuowq.js";import"./sentry-Coq7X-ar.js";import"./unsafe-html-UuEEukLm.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e._sentryModuleMetadata=e._sentryModuleMetadata||{},e._sentryModuleMetadata[new e.Error().stack]=(function(o){for(var a=1;a<arguments.length;a++){var t=arguments[a];if(t!=null)for(var i in t)t.hasOwnProperty(i)&&(o[i]=t[i])}return o})({},e._sentryModuleMetadata[new e.Error().stack],{"_sentryBundlerPluginAppKey:code-from-puzzles-web":!0})}catch{}})();var b=Object.defineProperty,z=Object.getOwnPropertyDescriptor,r=(e,o,a,t)=>{for(var i=t>1?void 0:t?z(o,a):o,l=e.length-1,s;l>=0;l--)(s=e[l])&&(i=(t?s(o,a,i):s(i))||i);return t&&i&&b(o,a,i),i};function C(e,o){let a;try{a=e instanceof URL?e:new URL(e)}catch{return}if(a.hostname==="www.chiark.greenend.org.uk"&&a.pathname===`/~sgtatham/puzzles/js/${o}.html`&&a.hash){let t=a.hash.replace(/^#/,"");if(/%[0-9a-e]{2}/i.test(t)&&(t=decodeURIComponent(t)),t)return t}}let n=class extends h(g){get open(){return this.dialog?.open??!1}set open(e){this.dialog&&(this.dialog.open=e)}reset(){this.gameid=void 0,this.error=void 0}render(){const e=this.puzzle?.displayName??"Unknown puzzle",o=this.error?d`
          <wa-callout variant="danger">
            <wa-icon slot="icon" name="error"></wa-icon>
            <strong>Unable to use that id</strong>&hairsp;&mdash;&hairsp;are you 
            sure it’s for ${e}?<br>
            (Error: ${this.error}.)
          </wa-callout>
        `:this.puzzle?.totalMoves?d`
          <wa-callout variant="warning">
            <wa-icon slot="icon" name="warning"></wa-icon>
            This will replace the game in progress
          </wa-callout>
        `:w;return d`
      <wa-dialog>
        <div slot="label">Load game by ID</div>
        
        <wa-input
            autofocus
            .value=${this.gameid}
            @input=${this.handleInputChange}
            @focus=${this.handleInputFocus}
            @keydown=${this.handleInputKeydown}
        >
          <div slot="label">
            Enter a ${e} game ID or random seed
          </div>
          <div slot="hint">
            Copied from any compatible portable puzzle collection app
          </div>
        </wa-input>
        
        ${o}

        <footer slot="footer">
          <wa-button
              @click=${this.handleCancelClick}
          >Cancel</wa-button>
          <wa-button
              variant="brand"
              ?disabled=${!this.gameid}
              @click=${this.handleOKClick}
          >OK</wa-button>
        </footer>
      </wa-dialog>
    `}handleInputChange(e){const a=e.target.value?.trim()??"",t=C(a,this.puzzle?.puzzleId??"unknown")??a;t!==this.gameid&&(this.gameid=t,this.error=void 0)}handleInputFocus(e){e.target.select()}async handleInputKeydown(e){e.key==="Enter"&&(e.preventDefault(),this.handleInputChange(e),this.gameid&&await this.handleOKClick())}async handleOKClick(){if(this.puzzle&&this.gameid){const e=await this.puzzle.newGameFromId(this.gameid);e?this.error=e:this.open=!1}}handleCancelClick(){this.open=!1}};n.styles=[m,f`
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
  
      footer {
        display: grid;
        grid-auto-flow: column;
        grid-auto-columns: 1fr;
        justify-content: end;
        align-items: center;
        gap: var(--wa-space-s);
      }
      
      wa-input::part(label) {
        margin-bottom: var(--wa-space-s);
      }
    `];r([u({context:c,subscribe:!0}),p()],n.prototype,"puzzle",2);r([p()],n.prototype,"gameid",2);r([p()],n.prototype,"error",2);r([y("wa-dialog",!0)],n.prototype,"dialog",2);n=r([v("enter-gameid-dialog")],n);export{n as EnterGameIDDialog};
//# sourceMappingURL=enter-gameid-dialog-iynlSYB4.js.map
