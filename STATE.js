import { dirname, join } from "path";


const shellSource = dirname(import.meta.url.replace("file://", ""));
const notePath = join(shellSource, "notes");
const notePathUser = join(notePath, "user");
const urlMdnHtml = `https://developer.mozilla.org/en-US/docs/Web/HTML`;
const urlMdnHtmlElement = `https://developer.mozilla.org/en-US/docs/Web/HTML/Element/`;
const urlMdnCss = `https://developer.mozilla.org/en-US/docs/Web/CSS`;
const urlMdnCssProperty = `https://developer.mozilla.org/en-US/docs/Web/CSS/`;

export default
{
    shellSource,
    notePath,
    notePathUser,
    urlMdnHtml,
    urlMdnHtmlElement,
    urlMdnCss,
    urlMdnCssProperty,
}
