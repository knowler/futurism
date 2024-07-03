export class BaseElement extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    this.shadowRoot.adoptedStyleSheets = [this.constructor.styles];
    this.shadowRoot.append(this.constructor.content.cloneNode(true))
  }
}
