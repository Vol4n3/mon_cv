import {JSDOM} from "jsdom";

export function setText(dom: JSDOM, match: string, text: string) {
    const i18nElements = dom.window.document.querySelectorAll('[i18n]');
    if (!i18nElements.length) return;
    i18nElements.forEach(element => {
        if (!element.textContent) return
        if (element.textContent === match) {
            element.textContent = text;
        }
    })
}