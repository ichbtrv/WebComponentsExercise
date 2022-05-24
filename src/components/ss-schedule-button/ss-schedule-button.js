import Template from './template.js';
import { accumulator, isSubmittable } from '../../utils/accumulator.js';

export default class BookDemoButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = Template.render();
        this._submitButton = this.shadowRoot.querySelector('button');
    };
    connectedCallback() {  
        this._submitButton.addEventListener('click', (e)=> this.onClick(e))

    }

    onClick(e) {
        e.preventDefault();
        accumulator.submitted = true;
        isSubmittable() ? 
        this._submitButton.dispatchEvent(new Event('done', {bubbles: true, cancelable: false, composed: true})) : alert('Please finish the form');
    }
};



if (!customElements.get('ss-schedule-button')) {
    customElements.define('ss-schedule-button', BookDemoButton);
}