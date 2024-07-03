import { css, html } from "./utils.js";
import { BaseElement } from "./base-element.js";

export class PreferencesFormElement extends BaseElement {
  static styles = css`
    :host {
      display: block;
    }
  `;

  static content = html`
    <link rel=stylesheet href=button.css>
    <link rel=stylesheet href=form.css>
    <form>
      <button part=button>Button</button>
    </form>
  `;

  constructor() {
    super();

    this.shadowRoot.addEventListener("submit", this);
    this.shadowRoot.addEventListener("click", this);
  }

  handleEvent(event) {
    switch (event.type) {
      case "submit":
        event.preventDefault();
      case "click":
        console.log(event);
        break;
    }
  }
}
