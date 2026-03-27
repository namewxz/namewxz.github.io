import{a as m,i as u,n as c,r as f,b as h,d,A as p,t as v}from"./dynamic-content-CxlmA9GR.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e._sentryModuleMetadata=e._sentryModuleMetadata||{},e._sentryModuleMetadata[new e.Error().stack]=(function(n){for(var a=1;a<arguments.length;a++){var o=arguments[a];if(o!=null)for(var t in o)o.hasOwnProperty(t)&&(n[t]=o[t])}return n})({},e._sentryModuleMetadata[new e.Error().stack],{"_sentryBundlerPluginAppKey:code-from-puzzles-web":!0})}catch{}})();function g(e,n){function a(o,t=o?.closest(n)){return o instanceof Window||o instanceof Document||!o?null:t||a(o.getRootNode().host)}return a(e)}var w=Object.defineProperty,y=Object.getOwnPropertyDescriptor,i=(e,n,a,o)=>{for(var t=o>1?void 0:o?y(n,a):n,s=e.length-1,l;s>=0;s--)(l=e[s])&&(t=(o?l(n,a,t):l(t))||t);return o&&t&&w(n,a,t),t};let r=class extends h{constructor(){super(...arguments),this.command="",this.hideIcon=!1,this.commandIsRegistered=!1}connectedCallback(){super.connectedCallback();const e=g(this,"home-screen,puzzle-screen");this.commandIsRegistered=e?.hasCommand(this.command)??!1}render(){if(!this.commandIsRegistered)return d`<slot></slot>`;const e=this.hideIcon?p:d`<wa-icon name="command-link"></wa-icon>`;return d`<button data-command=${this.command}>${e}<slot></slot></span>`}};r.styles=[m,u`
      :host {
        display: inline;
        --command-color: var(--wa-color-text-link);
      }
  
      button {
        /* Undo default button styling */
        all: unset;
        
        /* Style command as link-like (but different color) */
        color: var(--command-color);
        text-decoration: var(--wa-link-decoration-default);
        -webkit-text-decoration: var(--wa-link-decoration-default); /* Safari */
        text-decoration-thickness: 0.09375em;
        text-underline-offset: 0.125em;
        cursor: pointer;
  
        @media (hover: hover) {
          &:hover {
            color: color-mix(in oklab, var(--command-color), var(--wa-color-mix-hover));
            text-decoration: var(--wa-link-decoration-hover);
            -webkit-text-decoration: var(--wa-link-decoration-hover); /* Safari */
          }
        }
      }

      slot {
        /* Avoid Safari bug where default slotted content within a dialog disappears 
         * when some other dialog is closed. Symptom: all command-link text vanishes 
         * from help-viewer after opening and closing any dialog over it. */
        display: inline;
      }
  
      wa-icon {
        margin-inline-end: 0.1em;
        vertical-align: -2px; /* visual baseline alignment*/
      }
    `];i([c({type:String})],r.prototype,"command",2);i([c({type:Boolean,attribute:"hide-icon"})],r.prototype,"hideIcon",2);i([f()],r.prototype,"commandIsRegistered",2);r=i([v("command-link")],r);
//# sourceMappingURL=command-link-R2N3y73h.js.map
