import Template from './template.js';
export default class BookDemoHeading extends HTMLElement {
    static get observedAttributes() {
        return ['qualified'];
    }

    constructor() {
        super();
        this.attachShadow({mode: 'open'});  
    };

    get qualified() { return this.getAttribute('qualified'); }
    connectedCallback() {
        this.shadowRoot.innerHTML = Template.render();
    }

    attributeChangedCallback(_name, _oldValue, newValue) {  
        if(newValue !== "inprogress") updateQualificationStatus(this, newValue);
    }
};

if (!customElements.get('ss-demo-heading')) {
    customElements.define('ss-demo-heading', BookDemoHeading);
}


const updateQualificationStatus = (elem, qualificationStatus) => {
    if(elem && qualificationStatus) {
    const shadow = elem.shadowRoot;
    qualificationStatus === "true" ? shadow.innerHTML = Template.renderQualified() : shadow.innerHTML = Template.renderDisqualified();
    }

}