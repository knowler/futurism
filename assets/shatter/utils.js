export function html() {
  const template = document.createElement("template");
  template.setHTMLUnsafe(identity(...arguments));
  return template.content;
}

export function css() {
  const sheet = new CSSStyleSheet();
  sheet.replaceSync(identity(...arguments));
  return sheet;
}

function identity(raw, ...expressions) {
  return String.raw({ raw }, ...expressions);
}
