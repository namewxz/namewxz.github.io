import{i as C,an as A,_ as s,C as f,r as I,n,J as S,t as w,W as P,ae as O,P as F,Q as z,U as K,V as L,X as H,Y as $,D as G,d as l,o as M,b as D,j as T,u as B,A as v,f as R,e as b,a as _,al as y}from"./dynamic-content-CxlmA9GR.js";import"./chunk.K3HXBWLW-a8hWrr7F.js";import"./puzzle-page-Ct6Uuowq.js";import"./sentry-Coq7X-ar.js";import"./audio-CDUuflQX.js";import"./unsafe-html-UuEEukLm.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e._sentryModuleMetadata=e._sentryModuleMetadata||{},e._sentryModuleMetadata[new e.Error().stack]=(function(t){for(var a=1;a<arguments.length;a++){var o=arguments[a];if(o!=null)for(var r in o)o.hasOwnProperty(r)&&(t[r]=o[r])}return t})({},e._sentryModuleMetadata[new e.Error().stack],{"_sentryBundlerPluginAppKey:code-from-puzzles-web":!0})}catch{}})();var U=C`
  :host {
    --arrow-size: 0.375rem;
    --max-width: 25rem;
    --show-duration: 100ms;
    --hide-duration: 100ms;

    /* Internal calculated properties */
    --arrow-diagonal-size: calc((var(--arrow-size) * sin(45deg)));

    display: contents;

    /** Defaults for inherited CSS properties */
    font-size: var(--wa-font-size-m);
    line-height: var(--wa-line-height-normal);
    text-align: start;
    white-space: normal;
  }

  /* The native dialog element */
  .dialog {
    display: none;
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    border: none;
    background: transparent;
    overflow: visible;
    pointer-events: none;

    &:focus {
      outline: none;
    }

    &[open] {
      display: block;
    }
  }

  /* The <wa-popup> element */
  .popover {
    --arrow-size: inherit;
    --show-duration: inherit;
    --hide-duration: inherit;

    pointer-events: auto;

    &::part(arrow) {
      background-color: var(--wa-color-surface-default);
      border-top: none;
      border-left: none;
      border-bottom: solid var(--wa-panel-border-width) var(--wa-color-surface-border);
      border-right: solid var(--wa-panel-border-width) var(--wa-color-surface-border);
      box-shadow: none;
    }
  }

  .popover[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .popover[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .popover[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .popover[placement^='right']::part(popup) {
    transform-origin: left;
  }

  /* Body */
  .body {
    display: flex;
    flex-direction: column;
    width: max-content;
    max-width: var(--max-width);
    padding: var(--wa-space-l);
    background-color: var(--wa-color-surface-default);
    border: var(--wa-panel-border-width) solid var(--wa-color-surface-border);
    border-radius: var(--wa-panel-border-radius);
    border-style: var(--wa-panel-border-style);
    box-shadow: var(--wa-shadow-l);
    color: var(--wa-color-text-normal);
    user-select: none;
    -webkit-user-select: none;
  }
`;var g=new Set,i=class extends P{constructor(){super(...arguments),this.anchor=null,this.placement="top",this.open=!1,this.distance=8,this.skidding=0,this.for=null,this.withoutArrow=!1,this.eventController=new AbortController,this.handleAnchorClick=()=>{this.open=!this.open},this.handleBodyClick=e=>{e.target.closest('[data-popover="close"]')&&(e.stopPropagation(),this.open=!1)},this.handleDocumentKeyDown=e=>{e.key==="Escape"&&(e.preventDefault(),this.open=!1,this.anchor&&typeof this.anchor.focus=="function"&&this.anchor.focus())},this.handleDocumentClick=e=>{const t=e.target;this.anchor&&e.composedPath().includes(this.anchor)||t.closest("wa-popover")!==this&&(this.open=!1)}}connectedCallback(){super.connectedCallback(),this.id||(this.id=O("wa-popover-"))}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleDocumentKeyDown),this.eventController.abort()}firstUpdated(){this.open&&(this.dialog.show(),this.popup.active=!0,this.popup.reposition())}updated(e){e.has("open")&&this.customStates.set("open",this.open)}async handleOpenChange(){if(this.open){const e=new F;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}g.forEach(t=>t.open=!1),document.addEventListener("keydown",this.handleDocumentKeyDown,{signal:this.eventController.signal}),document.addEventListener("click",this.handleDocumentClick,{signal:this.eventController.signal}),this.dialog.show(),this.popup.active=!0,g.add(this),requestAnimationFrame(()=>{const t=this.querySelector("[autofocus]");t&&typeof t.focus=="function"?t.focus():this.dialog.focus()}),await z(this.popup.popup,"show-with-scale"),this.popup.reposition(),this.dispatchEvent(new K)}else{const e=new L;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!0;return}document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("click",this.handleDocumentClick),g.delete(this),await z(this.popup.popup,"hide-with-scale"),this.popup.active=!1,this.dialog.close(),this.dispatchEvent(new H)}}handleForChange(){const e=this.getRootNode();if(!e)return;const t=this.for?e.getElementById(this.for):null,a=this.anchor;if(t===a)return;const{signal:o}=this.eventController;t&&t.addEventListener("click",this.handleAnchorClick,{signal:o}),a&&a.removeEventListener("click",this.handleAnchorClick),this.anchor=t,this.for&&!t&&console.warn(`A popover was assigned to an element with an ID of "${this.for}" but the element could not be found.`,this)}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}async show(){if(!this.open)return this.open=!0,$(this,"wa-after-show")}async hide(){if(this.open)return this.open=!1,$(this,"wa-after-hide")}render(){return l`
      <dialog part="dialog" class="dialog">
        <wa-popup
          part="popup"
          exportparts="
            popup:popup__popup,
            arrow:popup__arrow
          "
          class=${G({popover:!0,"popover-open":this.open})}
          placement=${this.placement}
          distance=${this.distance}
          skidding=${this.skidding}
          flip
          shift
          ?arrow=${!this.withoutArrow}
          .anchor=${this.anchor}
        >
          <div part="body" class="body" @click=${this.handleBodyClick}>
            <slot></slot>
          </div>
        </wa-popup>
      </dialog>
    `}};i.css=U;i.dependencies={"wa-popup":A};s([f("dialog")],i.prototype,"dialog",2);s([f(".body")],i.prototype,"body",2);s([f("wa-popup")],i.prototype,"popup",2);s([I()],i.prototype,"anchor",2);s([n()],i.prototype,"placement",2);s([n({type:Boolean,reflect:!0})],i.prototype,"open",2);s([n({type:Number})],i.prototype,"distance",2);s([n({type:Number})],i.prototype,"skidding",2);s([n()],i.prototype,"for",2);s([n({attribute:"without-arrow",type:Boolean,reflect:!0})],i.prototype,"withoutArrow",2);s([S("open",{waitUntilFirstUpdate:!0})],i.prototype,"handleOpenChange",1);s([S("for")],i.prototype,"handleForChange",1);s([S(["distance","placement","skidding"])],i.prototype,"handleOptionsChange",1);i=s([w("wa-popover")],i);var W=Object.defineProperty,j=Object.getOwnPropertyDescriptor,h=(e,t,a,o)=>{for(var r=o>1?void 0:o?j(t,a):t,c=e.length-1,p;c>=0;c--)(p=e[c])&&(r=(o?p(t,a,r):p(r))||r);return o&&r&&W(t,a,r),r};const q=new Intl.DateTimeFormat(void 0,{dateStyle:"medium",timeStyle:"short"}),N={filename:({filename:e},{filename:t})=>e.localeCompare(t),timestamp:({timestamp:e},{timestamp:t})=>Math.sign(e-t),puzzleId:({puzzleId:e},{puzzleId:t})=>(b[e].name??e).localeCompare(b[t].name??t)},x=({puzzleId:e,filename:t})=>`${e}:${t}`;let d=class extends M(D){constructor(){super(...arguments),this.sort="filename",this.sortOrder="asc",this.columns=[{name:"Name",field:"filename"},{name:"Date",field:"timestamp"}]}get items(){return this._itemsSignal?.get()??[]}get selectedItem(){return this.selectedItemKey?this.items?.find(e=>e.key===this.selectedItemKey):void 0}disconnectedCallback(){super.disconnectedCallback(),this._savedGamesSignal=void 0,this._itemsSignal=void 0}async updateItemsSignal(){this._savedGamesSignal=T.savedGamesLiveQuery(this.puzzleId),this._itemsSignal=B(()=>this._savedGamesSignal?.get().map((e,t)=>({...e,id:`row-${t}`,key:x(e)}))??[])}sortedItems(){const e=N[this.sort]??((t,a)=>String(t[this.sort]).localeCompare(String(a[this.sort])));return[...this.items].sort(this.sortOrder==="asc"?e:(t,a)=>e(a,t))}async willUpdate(e){(e.has("puzzleId")||!this._itemsSignal)&&await this.updateItemsSignal()}updated(){this.selectedItemKey&&this.scrollSelectedItemIntoView()}render(){const e=this.sortedItems();return l`
      <table
          part="list"
          role="grid"
          tabindex="0"
          aria-activedescendant=${this.selectedItem?.id??v}
          @keydown=${this.handleKeyDown}
          @focus=${this.handleTableFocus}
          @blur=${this.handleTableBlur}
      >
        <thead>
        <tr role="row">
          ${this.columns.map(t=>this.renderColumnHeader(t))}
        </tr>
        </thead>
        <tbody>
        ${R(e,x,t=>this.renderRow(t))}
        ${this.items.length===0?this.renderPlaceholder():v}
        </tbody>
      </table>
    `}renderColumnHeader({name:e,field:t}){const a=t===this.sort?this.sortOrder:"none";return l`
      <th scope="col" role="columnheader" aria-sort=${a} data-field=${t}>
        <wa-button 
            appearance="plain"
            size="small"
            ?with-caret=${a!=="none"}
            @click=${this.handleHeaderClick}
        >
          ${e}
        </wa-button>
      </th>
    `}renderRow(e){const t=this.selectedItemKey===e.key,a=[];for(const{field:o}of this.columns){let r;switch(o){case"filename":r=e.filename;break;case"timestamp":r=q.format(e.timestamp);break;case"puzzleId":r=b[e.puzzleId]?.name??e.puzzleId;break;default:r=String(e[o]);break}a.push(r)}return l`
      <tr
          role="row"
          id=${e.id}
          aria-selected=${t}
          @click=${this.handleRowClick}
      >
        ${a.map(o=>l`<td role="gridcell">${o}</td>`)}
      </tr>`}renderPlaceholder(){return l`
      <tr class="placeholder">
        <td colspan=${this.columns.length}>
          <slot name="placeholder"></slot>
        </td>
      </tr>
    `}handleTableFocus(e){e.target.matches(":focus-visible")&&this.toggleAttribute("table-focus-visible",!0)}handleTableBlur(){this.toggleAttribute("table-focus-visible",!1)}handleHeaderClick(e){const t=e.target.closest("[data-field]")?.getAttribute("data-field");if(!t)throw new Error("Unable to find data-field element");t===this.sort?this.sortOrder=this.sortOrder==="asc"?"desc":"asc":(this.sort=t,this.sortOrder="asc")}handleRowClick(e){const t=e.target.closest("tr")?.id,a=this.items.find(o=>o.id===t);this.setSelectedItem(a)}handleKeyDown(e){if(e.target!==this.shadowRoot?.querySelector("table"))return;const t=this.selectedItem?this.items.findIndex(r=>r.key===this.selectedItem?.key):-1,a=this.items.length;let o=null;switch(e.key){case"ArrowUp":o=t>=1?t-1:a-1;break;case"ArrowDown":o=(t+1)%a;break;case"Home":o=0;break;case"End":o=a-1;break;case"PageUp":case"PageDown":{const r=this.getPageSize();e.key==="PageUp"?o=t>=r?t-r:0:o=Math.min(t+r,a-1);break}case"Enter":case" ":e.preventDefault();break}o!==null&&(e.preventDefault(),this.setSelectedItem(this.items.at(o)))}getPageSize(){const e=this.shadowRoot?.querySelector("thead"),t=this.shadowRoot?.querySelector("tbody tr");if(!e||!t)return 4;const a=this.clientHeight-e.offsetHeight,o=t.offsetHeight,r=Math.floor(a/o);return Math.max(r,1)}setSelectedItem(e){e?.key!==this.selectedItemKey&&(this.selectedItemKey=e?.key,e&&(this.scrollSelectedItemIntoView(),this.dispatchEvent(new CustomEvent("saved-game-list-select",{composed:!0,bubbles:!0,detail:{item:e}}))))}scrollSelectedItemIntoView(){if(this.selectedItem){const e=this.shadowRoot?.getElementById(this.selectedItem.id);e&&e.scrollIntoView({block:"nearest"})}}};d.styles=[_,C`
      :host {
        --major-border:
            var(--wa-form-control-border-width)
            var(--wa-form-control-border-style)
            var(--wa-form-control-border-color);
  
        --minor-border:
            var(--wa-border-width-s)
            solid
            var(--wa-color-surface-border);
  
        display: block;
        max-height: 100%;
        overflow-y: auto;
        
        /* Keep scrollIntoView from scrolling under sticky header */
        scroll-padding-block-start: 
            calc(var(--wa-form-control-height) + 2 * var(--wa-form-control-border-width));
        
        user-select: none;
        cursor: default;
  
        background-color: var(--wa-form-control-background-color);
        color: var(--wa-form-control-value-color);
        font-weight: var(--wa-form-control-value-font-weight);
        line-height: var(--wa-form-control-value-line-height);
  
        border: var(--major-border);
        border-radius: var(--wa-form-control-border-radius);
      }
      
      /* Relocate table:focus-visible to focus ring on :host */
      table:focus-visible {
        outline: none;
      }
      :host([table-focus-visible]) {
        /* :host(:has(table:focus-visible)) isn't valid; JS sets this attr instead.
         * (:host(:focus-within)) is valid but causes double focus rings 
         * when a header button is focused.) */
        outline: var(--wa-focus-ring);
        outline-offset: var(--wa-focus-ring-offset);
      }
      
      table {
        box-sizing: border-box;
        width: 100%;
        table-layout: fixed;
        /* Cannot collapse borders with sticky thead: they get lost when scrolled */
        border-collapse: separate;
        border-spacing: 0;
      }
      
      thead {
        position: sticky;
        inset-block-start: 0;
      }
      
      th {
        background-color: var(--wa-form-control-background-color);
        color: var(--wa-form-control-label-color);
        font-weight: var(--wa-form-control-label-font-weight);
        line-height: var(--wa-form-control-label-line-height);
        
        border-block-end: var(--major-border);
        z-index: 1;
      }
      th:not(:last-child) {
        border-inline-end: var(--minor-border);
      }
      
      tbody tr:not(.placeholder) td {
        border-block-end: var(--minor-border);
      }
      
      th[aria-sort="asc"] wa-button::part(caret) {
        transform: scaleY(-100%);
      }
      @media (prefers-reduced-motion: no-preference) {
        th wa-button::part(caret) {
          transition: transform var(--wa-transition-fast) var(--wa-transition-easing);
        }
      }
      
      th, 
      tr:not(.placeholder) td {
        text-align: start;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      tr.placeholder td {
        text-align: center;
        vertical-align: middle;
        color: var(--wa-color-text-quiet);
      }
      
      tbody td {
        padding: var(--wa-form-control-padding-block) var(--wa-form-control-padding-inline);
      }
      
      wa-button {
        /* Leave margin for focus ring; take up full width of <th> */
        --focus-ring-size: calc(var(--wa-focus-ring-width) + var(--wa-focus-ring-offset));
        margin: var(--focus-ring-size);
        width: calc(100% - 2 * var(--focus-ring-size));
        &::part(base) {
          /* Match tbody td inline padding (less margin) to align text */
          padding: 
              var(--wa-space-2xs) 
              calc(var(--wa-form-control-padding-inline) - var(--focus-ring-size));
          border-radius: var(--wa-border-radius-s);
          height: auto;
          justify-content: flex-start;
        }
        &::part(label) {
          flex-grow: 1;
          text-align: start;
        }
      }
      
      tr[aria-selected="true"] {
        background-color: var(--wa-color-brand-fill-loud);
        color: var(--wa-color-brand-on-loud);
      }
      
      @media(hover: hover) {
        tbody tr:not(.placeholder):hover td {
          background-color: color-mix(in oklab, transparent, var(--wa-color-mix-hover));
        }
      }
    `];h([n({type:String,attribute:"puzzleid"})],d.prototype,"puzzleId",2);h([n({type:String,reflect:!0})],d.prototype,"sort",2);h([n({type:String,reflect:!0,attribute:"sort-order"})],d.prototype,"sortOrder",2);h([I()],d.prototype,"columns",2);h([I()],d.prototype,"selectedItemKey",2);d=h([w("saved-game-list")],d);var V=Object.defineProperty,J=Object.getOwnPropertyDescriptor,u=(e,t,a,o)=>{for(var r=o>1?void 0:o?J(t,a):t,c=e.length-1,p;c>=0;c--)(p=e[c])&&(r=(o?p(t,a,r):p(r))||r);return o&&r&&V(t,a,r),r};class m extends D{constructor(){super(...arguments),this.filename=""}get open(){return this.dialog?.open??!1}set open(t){this.dialog&&(this.dialog.open=t)}dispatchEventAndClose(t){const a=new CustomEvent(t,{bubbles:!0,cancelable:!0,composed:!0,detail:{filename:this.filename}});this.dispatchEvent(a)&&(this.open=!1)}static{this.styles=[_,C`
      wa-dialog {
        --width: min(calc(100vw - 2 * var(--wa-space-l)), 35rem);
      }
      
      wa-dialog::part(body) {
        padding-block-start: calc(var(--spacing) - var(--wa-form-control-padding-block));
        
        display: flex;
        flex-direction: column;
        gap: var(--wa-space-l);
      }
      
      saved-game-list {
        flex: 1 1 14em;
        min-height: 5em;
      }
      
      wa-dialog::part(footer) {
        gap: var(--wa-space-m);
      }
  
      [slot="footer"].start {
        margin-inline-end: auto;
      }
      
      wa-popover p {
        margin: 0;
        &:not(:first-child) {
          margin-block-start: var(--wa-space-l);
        }
      }
    `]}}u([n({type:String,attribute:"puzzleid"})],m.prototype,"puzzleId",2);u([n({type:String})],m.prototype,"filename",2);u([f("wa-dialog",!0)],m.prototype,"dialog",2);let k=class extends m{constructor(){super(...arguments),this.gameInProgress=!1}render(){return l`
      <wa-dialog>
        <div slot="label">Load game</div>
        <wa-button
            slot="header-actions"
            appearance="plain"
            id="help">
          <wa-icon label="Help" name="help"></wa-icon>
        </wa-button>
        <wa-popover for="help">
          <p>Pick a game you saved earlier to resume play.</p>
          <p>Or use <em>Import</em> to ${y?"load":"upload"} a file saved 
            from any compatible portable puzzle collection app.</p>
        </wa-popover>

        <saved-game-list
            puzzleid=${this.puzzleId}
            @dblclick=${this.handleSavedGameDoubleClick}
            @saved-game-list-select=${this.handleSavedGameSelect}
        >
          <div slot="placeholder">(saved games will appear here)</div>
        </saved-game-list>

        ${this.gameInProgress?l`
              <wa-callout variant="warning">
                <wa-icon slot="icon" name="warning"></wa-icon>
                This will replace the game in progress
              </wa-callout>
            `:v}
        
        <wa-button
            slot="footer" class="start"
            @click=${this.handleImportClick}
        >Import&hellip;</wa-button>
        
        <wa-button
            slot="footer"
            @click=${this.handleCancelClick}
        >Cancel</wa-button>
        <wa-button
            slot="footer"
            variant="brand"
            ?disabled=${!this.filename}
            @click=${this.handleLoadClick}
        >Load</wa-button>
      </wa-dialog>
    `}handleSavedGameSelect(e){const{filename:t}=e.detail.item;this.filename=t}handleSavedGameDoubleClick(){this.filename&&this.handleLoadClick()}handleImportClick(){this.dispatchEventAndClose("load-game-import")}handleCancelClick(){this.dispatchEventAndClose("load-game-cancel")}handleLoadClick(){this.dispatchEventAndClose("load-game-load")}};u([n({type:Boolean,attribute:"game-in-progress"})],k.prototype,"gameInProgress",2);k=u([w("load-game-dialog")],k);let E=class extends m{render(){return l`
      <wa-dialog>
        <div slot="label">Save game</div>
        <wa-button
            slot="header-actions"
            appearance="plain"
            id="help">
          <wa-icon label="Help" name="help"></wa-icon>
        </wa-button>
        <wa-popover for="help">
          <p>Save the current game so you can return to it later. 
            (Saved games are kept in ${y?"this app’s":"your browser’s"} 
            local storage.)</p>
          <p>Or use <em>Export</em> to ${y?"create":"download"} a file 
            you can load into any compatible portable puzzle collection app.</p>
        </wa-popover>
        
        <saved-game-list 
            puzzleid=${this.puzzleId}
            @saved-game-list-select=${this.handleSavedGameSelect}
        >
          <div slot="placeholder">(saved games will appear here)</div>
        </saved-game-list>
        <wa-input
            label="Name"
            autofocus
            .value=${this.filename}
            @change=${this.handleFilenameInputChange}
            @focus=${this.handleFilenameInputFocus}
            @keydown=${this.handleFilenameInputKeydown}
        ></wa-input>
        
        <wa-button
            slot="footer" class="start"
            @click=${this.handleExportClick}
        >Export&hellip;</wa-button>
        <wa-button 
            slot="footer"
            @click=${this.handleCancelClick}
        >Cancel</wa-button>
        <wa-button 
            slot="footer"
            variant="brand"
            ?disabled=${!this.filename}
            @click=${this.handleSaveClick}
        >Save</wa-button>
      </wa-dialog>
    `}handleSavedGameSelect(e){const{filename:t}=e.detail.item;this.filename=t}handleFilenameInputChange(e){this.filename=e.target.value.trim()}handleFilenameInputFocus(e){e.target.select()}handleFilenameInputKeydown(e){e.key==="Enter"&&(e.preventDefault(),this.filename=e.target.value.trim(),this.filename&&this.handleSaveClick())}handleExportClick(){this.dispatchEventAndClose("save-game-export")}handleCancelClick(){this.dispatchEventAndClose("save-game-cancel")}handleSaveClick(){this.dispatchEventAndClose("save-game-save")}};E=u([w("save-game-dialog")],E);export{k as LoadGameDialog,E as SaveGameDialog};
//# sourceMappingURL=saved-game-dialogs-CM6zZtAT.js.map
