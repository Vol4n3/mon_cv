import { JSDOM } from "jsdom"
import { prerender } from "../../common/prerender/prerender.ts"
import { i18nJSDOMReplace } from "../../common/utils/i18n.utils.ts"

export default async (html: string): Promise<string> => {
  const before = await prerender(html)
  const dom = new JSDOM(before)
  dom.window.document.documentElement.setAttribute(`lang`, `en`)
  i18nJSDOMReplace(dom, {
    title: `Julien Coeurvolan`,
    sub_title: `Typescript developer`,
    phone: `Phone`,
    contact_title: `Contact`,
    resume: `Senior Front-End Developer with 9 years of experience delivering React, Angular, interfaces across SPA/SSR, design systems, and complex UI work. Proven in technical leadership, architecture, and cross-team collaboration on enterprise projects.`,
  })
  return dom.serialize()
}
