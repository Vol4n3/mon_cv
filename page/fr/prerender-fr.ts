import { JSDOM } from "jsdom"
import { prerender } from "../../common/prerender/prerender.ts"
import { i18nJSDOMReplace } from "../../common/utils/i18n.utils.ts"

export default async function (html: string): Promise<string> {
  const before = await prerender(html)
  const dom = new JSDOM(before)
  dom.window.document.documentElement.setAttribute(`lang`, `fr`)
  i18nJSDOMReplace(dom, {
    title: `Julien Coeurvolan`,
    sub_title: `Développeur logiciel senior`,
    phone: `Téléphone`,
    email: `Adresse électronique`,
    contact_title: `Contact`,
    mobility_title: `Mobilité`,
    city: `Ville`,
    vehicle: `Véhicule`,
    vehicle_permit: `Permis B`,
    langages: `Langues`,
    resume: `
        Avec 9 ans d'expériences dans la conception et le développement d'application complexe SPA/SSR sur navigateur web en utilisant des technologies modernes telles que React, Angular, Node.js.
        Spécialisé dans les interfaces utilisateur en s'intégrant au design systems et en applicant les bonnes pratiques d'ergonomie, d'accessibilité, de qualité, de performance, et de référencement.
        Collaboration et <strong>leadership</strong> dans les projets d'entreprise de différentes échelles avec des partenaires internes et externes.
        `,
    experience_1_title: `Hellipse`,
  })
  return dom.serialize()
}
