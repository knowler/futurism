export function html() {
  const template = document.createElement("template");
  template.setHTMLUnsafe(identity(...arguments));
  return template;
}

export async function css() {
  const sheet = new CSSStyleSheet();
  await sheet.replace(identity(...arguments));
  return sheet;
}

function identity(raw, ...expressions) {
  return String.raw({ raw }, ...expressions);
}
