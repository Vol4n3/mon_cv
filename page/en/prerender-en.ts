import {JSDOM} from "jsdom";
import {prerender} from "../../common/prerender/prerender.ts";

export default async function (dom: JSDOM): Promise<JSDOM> {
    const before = await prerender(dom);
    before.window.document.documentElement.setAttribute("lang", "fr");
    return before
}