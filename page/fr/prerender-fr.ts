import {JSDOM} from "jsdom";
import {prerender} from "../../common/prerender.ts";

export default function (dom: JSDOM): JSDOM {
    dom.window.document.documentElement.setAttribute("lang", "fr");
    return prerender(dom)
}