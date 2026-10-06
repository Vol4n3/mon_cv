import { JSDOM } from "jsdom"
import { preRender } from "../../common/prerender/pre-render.ts"
import { i18nJSDOMReplace } from "../../common/utils/i18n.utils.ts"

export default async function (html: string): Promise<string> {
  const before = await preRender(html)
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
    remote_work: `Télétravail possible`,
    langages: `Langues`,
    lang_1: `Français : langue maternelle`,
    lang_2: `Anglais : niveau technique`,
    linkedin: `Profil LinkedIn`,
    skills_title: `Compétences`,
    skills_frontend_title: `Front-end`,
    skills_frontend: `TypeScript, JavaScript, React, Angular, AngularJS, Next.js, HTML/CSS, PWA, styled-components`,
    skills_graphics_title: `Infographie`,
    skills_graphics: `Canvas, SVG, WebGL 2, WebGPU`,
    skills_backend_title: `Back-end et données`,
    skills_backend: `Node.js, NestJS, PHP, Symfony, API REST, SQL, MongoDB ; notions de Java et C++`,
    skills_cms_title: `CMS et e-commerce`,
    skills_cms: `WordPress, PrestaShop, Magento`,
    skills_infrastructure_title: `Infrastructure et outils`,
    skills_infrastructure: `Git, GitLab, Bitbucket, CI/CD, Linux, WSL, Docker, AWS Lambda, esbuild, Vite`,
    skills_architecture_title: `Architecture et design`,
    skills_architecture: `SPA/SSR, architecture hexagonale, design systems, UX et ergonomie`,
    skills_quality_title: `Qualité`,
    skills_quality: `Vitest, Cypress, tests unitaires, composants et E2E, accessibilité, performance, SEO`,
    skills_collaboration_title: `Collaboration`,
    skills_collaboration: `Agile, mentorat, recrutement technique, animation de réunions et comptes-rendus, Jira, Confluence, productivité assistée par l’IA`,
    interests_title: `Centres d’intérêt`,
    interests_science_title: `Sciences et technologie`,
    interests_science: `Infographie, sciences physiques, mathématiques, astronomie`,
    interests_culture_title: `Culture`,
    interests_culture: `Art numérique, musique, danse, jeux vidéo`,
    education_title: `Formation`,
    education_esgi_title: `Formation à la mobilité et aux objets connectés`,
    education_esgi_school: `ESGI – Paris`,
    education_esgi_dates: `Janvier à août 2017`,
    education_ipi_title: `Concepteur et développeur informatique (RNCP niveau II)`,
    education_ipi_school: `IPI – Paris`,
    education_ipi_dates: `2015–2016`,
    education_ico_title: `BTS Opticien-lunetier`,
    education_ico_school: `ICO – Bures-sur-Yvette`,
    education_ico_dates: `2009`,
    education_bac_title: `Baccalauréat sciences et technologies de laboratoire`,
    education_bac_school: `Lycée Maximilien Sorre – Cachan`,
    education_bac_dates: `2006`,
    resume: `
      Développeur logiciel senior avec 9 ans d’expérience en React, Angular et Node.js, spécialisé dans les applications SPA/SSR, l’architecture front-end et les design systems.
      Après une reconversion depuis l’optique, je conjugue mon intérêt pour la technologie et l’art dans des interfaces soignées, accessibles et performantes.
      J’accompagne les équipes par le mentorat, les tests automatisés et la collaboration avec les métiers, l’UX et les DevOps.`,
    experience_title_hellipse: `Expert technique front-end`,
    experience_sub_title_hellipse: `Septembre 2022 à aujourd’hui : Hellipse – Villeurbanne`,
    experience_hellipse_detail_title_0: `Mission EDF (Elog) – 1 an à ce jour`,
    experience_hellipse_detail_0: `
      <ul class="cv-highlights">
        <li>Définition de l’architecture front-end Angular et développement des interfaces utilisateur.</li>
        <li>Déploiement de fonctions AWS Lambda en Node.js avec esbuild.</li>
        <li>Mise en place de tests unitaires, de composants et de bout en bout pour garantir la qualité logicielle.</li>
        <li>Mentorat et réduction de la dette technique auprès de 3 feature teams (15 développeurs), en collaboration avec les équipes produit, design et DevOps.</li>
      </ul>`,
    experience_hellipse_detail_title_1: `Mission Enedis (Linky Parc) – 2 ans`,
    experience_hellipse_detail_1: `
      <ul class="cv-highlights">
        <li>Refonte du front-end de l’ERP en React selon les principes de l’architecture hexagonale.</li>
        <li>Collaboration avec les UX designers pour répondre aux besoins métiers et contribution au Design System Enedis.</li>
        <li>Documentation de l’architecture, industrialisation des tests automatisés et participation au recrutement technique.</li>
        <li>Coordination des déploiements sécurisés au sein d’une équipe d’environ 30 personnes, dont 4 Product Owners, 10 développeurs et 4 DevOps, ainsi que des spécialistes QA et DBA.</li>
      </ul>`,
    experience_hellipse_detail_title_2: `Mission HomeServe – 6 mois`,
    experience_hellipse_detail_2: `
      <ul class="cv-highlights">
        <li>Participation à la refonte de mesbonpros.fr avec React côté front-end et NestJS côté back-end.</li>
      </ul>`,
    experience_stack_hellipse: `<strong>Technologies :</strong> React, Angular, Next.js, Node.js, Vite, Vitest, Cypress, AWS, GitLab.`,
    experience_title_linkeo: `Développeur front-end`,
    experience_sub_title_linkeo: `Novembre 2019 à août 2022 : Linkeo – Lyon`,
    experience_linkeo_detail_title_0: ``,
    experience_linkeo_detail_0: `
      <ul class="cv-highlights">
        <li>Développement d’une bibliothèque de design system en React avec styled-components.</li>
        <li>Création de modules de planning et de prise de rendez-vous, d’automatisation marketing, de gestion de présence en ligne, de devis et de facturation.</li>
      </ul>
      <p><strong>Technologies :</strong> React, styled-components, PHP, Bitbucket.</p>`,
    experience_title_niji: `Développeur front-end`,
    experience_sub_title_niji: `Octobre 2018 à octobre 2019 : Niji – Lyon`,
    experience_niji_detail_title_0: ``,
    experience_niji_detail_0: `
      <ul class="cv-highlights">
        <li>Maintenance et refonte d’un formulaire d’assurance de prêt en AngularJS au sein d’une équipe agile chez April.</li>
      </ul>`,
    experience_title_addactis: `Développeur front-end`,
    experience_sub_title_addactis: `Mai à septembre 2018 : Addactis Software – Tassin-la-Demi-Lune`,
    experience_addactis_detail_title_0: ``,
    experience_addactis_detail_0: `
      <ul class="cv-highlights">
        <li>Participation à la migration de logiciels actuariels écrits en Delphi vers une solution Angular et .NET.</li>
      </ul>`,
    experience_title_hrteam: `Développeur web`,
    experience_sub_title_hrteam: `Septembre 2017 à avril 2018 : HR Team – Paris`,
    experience_hrteam_detail_title_0: ``,
    experience_hrteam_detail_0: `
      <ul class="cv-highlights">
        <li>Développement et intégration d’interfaces web pour des clients dont La Poste et Osmos Groupe.</li>
      </ul>
      <p><strong>Technologies :</strong> AngularJS, Highcharts, PHP, MongoDB.</p>`,
    experience_title_infogene: `Stagiaire développeur web`,
    experience_sub_title_infogene: `Janvier à août 2017 : Infogene – Neuilly-sur-Seine`,
    experience_infogene_detail_title_0: ``,
    experience_infogene_detail_0: `
      <ul class="cv-highlights">
        <li>Maintenance et évolution du CRM interne en PHP et Symfony.</li>
        <li>Intégration de pages fidèles aux maquettes pour des sites WordPress, Magento et ASP.NET.</li>
      </ul>`,
    experience_title_optique: `Opticien-lunetier polyvalent`,
    experience_sub_title_optique: `2009 à 2015 : Optic 2000, Générale d’Optique, Krys`,
    experience_optique_detail_title_0: ``,
    experience_optique_detail_0: `
      <ul class="cv-highlights">
        <li>Atelier et montage, examens de la vue, conseil et vente, gestion et comptabilité.</li>
      </ul>`,
  })
  return dom.serialize()
}
