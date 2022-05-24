import Template from "./template.js";
import { accumulator } from "../../utils/accumulator.js";
export default class BookDemoEmail extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.shadowRoot.innerHTML = Template.render();
    
    this.email = this.shadowRoot.querySelector("#biz-email-input");
    this.input = this.shadowRoot.querySelector("input");
    this.invalidEmail = this.shadowRoot.querySelector("#invalid-email");
    this.invalidEmailIcon = this.shadowRoot.querySelector(".invalid-email");
    this.validEmailIcon = this.shadowRoot.querySelector(".valid-email");
  }
  connectedCallback() {
    this.email.addEventListener("change", (e) =>
      this._validateEmail(e.target.value)
    );
  }

  _validateEmail(value) {
    let validator = new RegExp(
      "[a-z0-9]+@(?!(gmail|hotmail|yahoo|outlook))[a-z]+..[a-z]{2,3}"
    );

    if (validator.test(value.toLowerCase())) {
      this.invalidEmail.setAttribute("hidden", true);

      this.input.style.outline = "1px solid green";
      this.invalidEmailIcon.style.display = "none";
      this.validEmailIcon.style.display = "block";

      accumulator.email = value;
    } else {
      this.invalidEmail.hasAttribute("hidden")
        ? this.invalidEmail.removeAttribute("hidden")
        : "";

      this.input.style.outline = "1px solid red";
      this.invalidEmailIcon.style.display = "block";
    }
  }
}

if (!customElements.get("ss-biz-email")) {
  customElements.define("ss-biz-email", BookDemoEmail);
}
