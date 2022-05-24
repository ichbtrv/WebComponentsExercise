import Template from './template.js';
 export default class BookDemoIcon extends HTMLElement {
     
    static get observedAttributes() {
        return ['path'];
    }

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.iconSrc = this.getAttribute('path');
    };

    get path() { return this.getAttribute('path'); }
   

    connectedCallback() {
        this.shadowRoot.innerHTML = Template.render(this.iconSrc);
    }

    attributeChangedCallback(_name, oldValue, newValue) {
        if(oldValue) updateSrcFile(this, newValue);
    }

 
};

if (!customElements.get('ss-demo-icon')) {
    customElements.define('ss-demo-icon', BookDemoIcon);
}

const updateSrcFile = (elem, newValue) => {
    if(elem && newValue) {
    const shadow = elem.shadowRoot;
    shadow.querySelector('img').src = newValue;
    }

}