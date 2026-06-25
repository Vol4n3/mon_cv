import {JSDOM} from "jsdom";
import {prerender} from "../../common/prerender/prerender.ts";
import {setText} from "../../common/utils/dom.utils.ts";

export default async function (dom: JSDOM): Promise<JSDOM> {
    const before = await prerender(dom);
    before.window.document.documentElement.setAttribute("lang", "fr");
    setText(before, "title", "Julien Coeurvolan");
    setText(before, "subTitle", "Developpeur typescript");
    return before
}