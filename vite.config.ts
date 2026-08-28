import { IndexHtmlTransformContext, MinimalPluginContextWithoutEnvironment, defineConfig } from "vite"
import { resolve } from "node:path"
import { JSDOM } from "jsdom"

export default defineConfig({
  base: `/mon_cv`,
  plugins: [
    {
      name: `vite-prerender-plugin`,
      enforce: `post`,
      transformIndexHtml: {
        order: `pre`,
        async handler(this: MinimalPluginContextWithoutEnvironment, html: string, ctx: IndexHtmlTransformContext) {
          const doc = new JSDOM(html)
          const rendererScriptElement: HTMLScriptElement | null = doc.window.document.querySelector(`script[data-prerender]`)
          if (!rendererScriptElement) return
          const { src } = rendererScriptElement,
            folderPath = ctx.path.replace(`index.html`, ``),
            { default: prerender } = await import(`../..${folderPath}${src}`)
          rendererScriptElement.remove()
          return prerender(doc.serialize())
        },
      },
    },
    {
      name: `vite-prerender-plugin-cleanup`,
      enforce: `post`,
      transformIndexHtml: {
        order: `pre`,
        async handler(this: MinimalPluginContextWithoutEnvironment, html: string) {
          const doc = new JSDOM(html)
          doc.window.document.querySelectorAll(`[i18n]`).forEach(element => element.removeAttribute(`i18n`))
          return doc.serialize()
        },
      },
    },
  ],
  build: {
    copyPublicDir: true,
    rolldownOptions: {
      input: {
        en: resolve(import.meta.dirname, `page/en/index.html`),
        fr: resolve(import.meta.dirname, `page/fr/index.html`),
      },
    },
  },
})
