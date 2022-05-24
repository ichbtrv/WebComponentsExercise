import Template from './template.js';
import { accumulator } from '../../utils/accumulator.js';

 export default class BookDemoCustomBizSize extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = Template.render();
        this.select = this.shadowRoot.querySelector('select');  
        this.selector = this.shadowRoot.querySelector(".closed");
        this.options =this.shadowRoot.querySelector(".open");
       this.selctionDisplay = this.shadowRoot.querySelector("#selection-display");
       
    };
    connectedCallback() {
      window.addEventListener("click", (e)=> this.clickOutside(e))

      for (const opt of this.options.children) {
        opt.addEventListener("click", (e) => this.handleSelect(e.target.value));
      }
      this.selector.addEventListener("click", () => {
        this.options.toggleAttribute("hidden");
      });
    }
    handleSelect = (selection) => {
        this.selctionDisplay.innerText = selection;
        this.options.toggleAttribute("hidden");
        accumulator.size = selection;

        if(selection === "1-10") {
            this.dispatchEvent(new Event('notQualified', {bubbles: true, cancelable: false, composed: true}));
        }
        else {
            this.dispatchEvent(new Event('changeQualify', {bubbles: true, cancelable: false, composed: true}));

        }
      };

    clickOutside = (e) => {
      console.log(e);
      if(e.target.localName === "body" && !this.options.hasAttribute("hidden")) {
      this.options.toggleAttribute("hidden");
      }
    }
    
};

if (!customElements.get('ss-custom-biz-size')) {
    customElements.define('ss-custom-biz-size', BookDemoCustomBizSize);
}