import Template from './template.js';
import { accumulator } from '../../utils/accumulator.js';

export default class BookDemoBizSolution extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = Template.render();
        this._select = this.shadowRoot.querySelectorAll('input');
    };
    
    connectedCallback() {
        for(const key of this._select) {
            key.addEventListener('change', (e)=> this.setSolution(e.target.value))
        }
    }

    setSolution(solution) {
        if(solution === "Document Storage" || solution ===  "Full Text Search" ||solution ===  "Price") {
            this.dispatchEvent(new Event('notQualified', {bubbles: true, cancelable: false, composed: true}));
        }
        accumulator.solution = solution;
        
    }
};

if (!customElements.get('ss-biz-solution')) {
    customElements.define('ss-biz-solution', BookDemoBizSolution);
}