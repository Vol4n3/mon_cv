import {defineConfig, IndexHtmlTransformContext, MinimalPluginContextWithoutEnvironment,} from "vite";
import {resolve} from "node:path";
import {JSDOM} from "jsdom";

export default defineConfig({
    plugins: [
        {
            name: 'vite-prerender-plugin',
            enforce: 'post',
            transformIndexHtml: {
                order: "pre",
                handler: async function (this: MinimalPluginContextWithoutEnvironment, html: string, ctx: IndexHtmlTransformContext) {
                    const doc = new JSDOM(html);
                    const rendererScriptElement: HTMLScriptElement | null = doc.window.document.querySelector('script[data-prerender]');
                    if (!rendererScriptElement) return
                    const src = rendererScriptElement.src;
                    const folderPath = ctx.filename.replace("index.html", "");
                    const {default: prerender} = await import(folderPath + src);
                    rendererScriptElement.remove();
                    const finalRender = await prerender(doc)
                    return finalRender.serialize();
                }
            },
        }
    ],
    build: {
        copyPublicDir: true,
        rolldownOptions: {
            input: {
                fr: resolve(import.meta.dirname, 'page/fr/index.html'),
                en: resolve(import.meta.dirname, 'page/en/index.html')
            }
        }
    }
})