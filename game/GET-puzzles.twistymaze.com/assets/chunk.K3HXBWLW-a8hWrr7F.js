import{i,Z as s,G as c,_ as e,n as d,t as u,W as p,d as b}from"./dynamic-content-CxlmA9GR.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};r._sentryModuleMetadata=r._sentryModuleMetadata||{},r._sentryModuleMetadata[new r.Error().stack]=(function(l){for(var t=1;t<arguments.length;t++){var a=arguments[t];if(a!=null)for(var n in a)a.hasOwnProperty(n)&&(l[n]=a[n])}return l})({},r._sentryModuleMetadata[new r.Error().stack],{"_sentryBundlerPluginAppKey:code-from-puzzles-web":!0})}catch{}})();var f=i`
  :host {
    display: flex;
    position: relative;
    align-items: stretch;
    border-radius: var(--wa-panel-border-radius);
    background-color: var(--wa-color-fill-quiet, var(--wa-color-brand-fill-quiet));
    border-color: var(--wa-color-border-quiet, var(--wa-color-brand-border-quiet));
    border-style: var(--wa-panel-border-style);
    border-width: var(--wa-panel-border-width);
    color: var(--wa-color-text-normal);
    padding: 1em;
  }

  /* Appearance modifiers */
  :host([appearance~='plain']) {
    background-color: transparent;
    border-color: transparent;
  }

  :host([appearance~='outlined']) {
    background-color: transparent;
    border-color: var(--wa-color-border-loud, var(--wa-color-brand-border-loud));
  }

  :host([appearance~='filled']) {
    background-color: var(--wa-color-fill-quiet, var(--wa-color-brand-fill-quiet));
    border-color: transparent;
  }

  :host([appearance~='filled-outlined']) {
    border-color: var(--wa-color-border-quiet, var(--wa-color-brand-border-quiet));
  }

  :host([appearance~='accent']) {
    color: var(--wa-color-on-loud, var(--wa-color-brand-on-loud));
    background-color: var(--wa-color-fill-loud, var(--wa-color-brand-fill-loud));
    border-color: transparent;

    [part~='icon'] {
      color: currentColor;
    }
  }

  [part~='icon'] {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    color: var(--wa-color-on-quiet);
    font-size: 1.25em;
  }

  ::slotted([slot='icon']) {
    margin-inline-end: var(--wa-form-control-padding-inline);
  }

  [part~='message'] {
    flex: 1 1 auto;
    display: block;
    overflow: hidden;
  }
`;var o=class extends p{constructor(){super(...arguments),this.variant="brand",this.size="medium"}render(){return b`
      <div part="icon">
        <slot name="icon"></slot>
      </div>

      <div part="message">
        <slot></slot>
      </div>
    `}};o.css=[f,s,c];e([d({reflect:!0})],o.prototype,"variant",2);e([d({reflect:!0})],o.prototype,"appearance",2);e([d({reflect:!0})],o.prototype,"size",2);o=e([u("wa-callout")],o);
//# sourceMappingURL=chunk.K3HXBWLW-a8hWrr7F.js.map
