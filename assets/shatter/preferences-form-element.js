import { css, html } from "./utils.js";

export class PreferencesFormElement extends HTMLElement {
  static template = html`
    <link rel=stylesheet href=button.css>
    <link rel=stylesheet href=form.css>
    <form>
      <button part=button>Button</button>
    </form>
  `;

  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    this.shadowRoot.append(PreferencesFormElement.template.content.cloneNode(true))
  }
}
