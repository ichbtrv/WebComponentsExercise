import Template from './template.js';

export default class DemoContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = Template.render();

        this._form = this.shadowRoot.querySelector('form');
        this._icon= this.shadowRoot.querySelector('ss-demo-icon');
        this._heading = this.shadowRoot.querySelector('ss-demo-heading')
        
        this._qualification = () => this.formQualify();
        this.addEventListener('done',() =>  this._qualification());
        this.addEventListener('notQualified', () => this._qualification = this.formDisqualify);
        this.addEventListener('changeQualify', () => this._qualification = this.formQualify);
    }

    connectedCallback() {}
    
    formQualify() {
        this._form.style.display = 'none';
        this._icon.setAttribute('path', "calendar-check-regular.svg");
        this._heading.setAttribute('qualified', "true");

    }

    formDisqualify() {
        this._form.style.display = 'none';
        this._icon.setAttribute('path', "calendar-xmark-regular.svg");
        this._heading.setAttribute('qualified', "false");

    }
}

if (!customElements.get('ss-container')) {
    customElements.define('ss-container', DemoContainer);
}
