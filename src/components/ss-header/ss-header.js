import Template from './template.js';
 class BookDemoHeader extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = Template.render();

       
    };
    connectedCallback() {
      
    }
};



if (!customElements.get('ss-header')) {
    customElements.define('ss-header', BookDemoHeader);
}