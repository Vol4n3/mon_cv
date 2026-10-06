import { JSDOM } from "jsdom"
import { preRender } from "../../common/prerender/pre-render.ts"
import { i18nJSDOMReplace } from "../../common/utils/i18n.utils.ts"

export default async (html: string): Promise<string> => {
  const before = await preRender(html)
  const dom = new JSDOM(before)
  dom.window.document.documentElement.setAttribute(`lang`, `en`)
  i18nJSDOMReplace(dom, {
    title: `Julien Coeurvolan`,
    sub_title: `Senior Software Developer`,
    phone: `Phone`,
    email: `Email address`,
    contact_title: `Contact`,
    mobility_title: `Mobility`,
    city: `City`,
    vehicle: `Vehicle`,
    vehicle_permit: `Category B driving licence`,
    langages: `Languages`,
    lang_1: `French: native`,
    lang_2: `English: technical proficiency`,
    remote_work: `Remote work possible`,
    linkedin: `LinkedIn profile`,
    skills_title: `Skills`,
    skills_frontend_title: `Front end`,
    skills_frontend: `TypeScript, JavaScript, React, Angular, AngularJS, Next.js, HTML, CSS, PWA, styled-components`,
    skills_graphics_title: `Graphics`,
    skills_graphics: `Canvas, SVG, WebGL 2, WebGPU`,
    skills_backend_title: `Back end & databases`,
    skills_backend: `Node.js, NestJS, PHP, Symfony, REST APIs, SQL, MongoDB; basic Java and C++`,
    skills_cms_title: `CMS`,
    skills_cms: `WordPress, PrestaShop, Magento`,
    skills_infrastructure_title: `Infrastructure & tooling`,
    skills_infrastructure: `Git, GitLab, Bitbucket, CI/CD, Linux, WSL, Docker, AWS Lambda, esbuild, Vite`,
    skills_architecture_title: `Architecture & design`,
    skills_architecture: `SPA/SSR, hexagonal architecture, design systems, UX and usability`,
    skills_quality_title: `Quality`,
    skills_quality: `Vitest, Cypress, unit, component and E2E testing, accessibility, performance, SEO`,
    skills_collaboration_title: `Collaboration`,
    skills_collaboration: `Agile delivery, mentoring, technical recruitment, meetings and minutes, Jira, Confluence, AI-assisted productivity`,
    education_title: `Education`,
    education_esgi_title: `Training in mobile computing and connected devices`,
    education_esgi_school: `ESGI – Paris`,
    education_esgi_dates: `January–August 2017`,
    education_ipi_title: `Software design and development qualification (French RNCP level II)`,
    education_ipi_school: `IPI – Paris`,
    education_ipi_dates: `2015–2016`,
    education_ico_title: `BTS Opticien-lunetier (optician qualification)`,
    education_ico_school: `ICO – Bures-sur-Yvette`,
    education_ico_dates: `2009`,
    education_bac_title: `French baccalauréat in laboratory science and technology`,
    education_bac_school: `Lycée Maximilien Sorre – Cachan`,
    education_bac_dates: `2006`,
    interests_title: `Interests`,
    interests_science_title: `Technology & science`,
    interests_science: `Computer graphics, physics, mathematics, astronomy`,
    interests_culture_title: `Culture`,
    interests_culture: `Digital art, music, dance, video games`,
    resume: `
      Senior software developer with 9 years of experience building SPA/SSR applications with React, Angular and Node.js.
      A former optician who retrained in software development, I combine my interest in technology and digital art to create usable, accessible and performant interfaces.
      Specialised in front-end architecture, design systems and automated testing, with experience mentoring developers and collaborating with product, UX and DevOps teams.`,
    experience_title_hellipse: `Front-End Technical Expert`,
    experience_sub_title_hellipse: `September 2022 to present: Hellipse – Villeurbanne`,
    experience_hellipse_detail_title_0: `EDF assignment (Elog) – 1 year to date`,
    experience_hellipse_detail_0: `
      <ul class="cv-highlights">
        <li>Defined the Angular front-end architecture and developed user interfaces.</li>
        <li>Deployed Node.js AWS Lambda functions using esbuild.</li>
        <li>Implemented unit, component and end-to-end tests to ensure software quality.</li>
        <li>Mentored developers and helped reduce technical debt across 3 feature teams (15 developers), alongside product, design and DevOps.</li>
      </ul>`,
    experience_hellipse_detail_title_1: `Enedis assignment (Linky Parc) – 2 years`,
    experience_hellipse_detail_1: `
      <ul class="cv-highlights">
        <li>Rebuilt the ERP front end in React using hexagonal architecture principles.</li>
        <li>Worked with UX designers to align interfaces with business needs and contributed to the Enedis Design System.</li>
        <li>Documented the architecture, established automated testing processes and supported technical recruitment.</li>
        <li>Coordinated secure deployments in a team of around 30 people, including 4 product owners, 10 developers, 4 DevOps engineers, QA specialists and DBAs.</li>
      </ul>`,
    experience_hellipse_detail_title_2: `HomeServe assignment – 6 months`,
    experience_hellipse_detail_2: `
      <ul class="cv-highlights">
        <li>Supported the redesign of mesbonpros.fr, working with React on the front end and NestJS on the back end.</li>
      </ul>`,
    experience_stack_hellipse: `<strong>Stack:</strong> React, Angular, Next.js, Node.js, Vite, Vitest, Cypress, AWS, GitLab.`,
    experience_title_linkeo: `Front-End Developer`,
    experience_sub_title_linkeo: `November 2019 to August 2022: Linkeo – Lyon`,
    experience_linkeo_detail_title_0: ``,
    experience_linkeo_detail_0: `
      <ul class="cv-highlights">
        <li>Developed a React design system library with styled-components.</li>
        <li>Built modules for scheduling and appointment booking, marketing automation, online presence management, and quotes and invoicing.</li>
      </ul>
      <p><strong>Stack:</strong> React, styled-components, PHP, Bitbucket.</p>`,
    experience_title_niji: `Front-End Developer`,
    experience_sub_title_niji: `October 2018 to October 2019: Niji – Lyon`,
    experience_niji_detail_title_0: ``,
    experience_niji_detail_0: `
      <ul class="cv-highlights">
        <li>Maintained and redesigned an AngularJS loan insurance form as part of an agile team at April.</li>
      </ul>`,
    experience_title_addactis: `Front-End Developer`,
    experience_sub_title_addactis: `May to September 2018: Addactis Software – Tassin-la-Demi-Lune`,
    experience_addactis_detail_title_0: ``,
    experience_addactis_detail_0: `
      <ul class="cv-highlights">
        <li>Contributed to the migration of actuarial software from Delphi to an Angular front end on a .NET platform.</li>
      </ul>`,
    experience_title_hrteam: `Web Developer`,
    experience_sub_title_hrteam: `September 2017 to April 2018: HR Team – Paris`,
    experience_hrteam_detail_title_0: ``,
    experience_hrteam_detail_0: `
      <ul class="cv-highlights">
        <li>Developed and integrated web interfaces for clients including La Poste and Osmos Groupe.</li>
      </ul>
      <p><strong>Stack:</strong> AngularJS, Highcharts, PHP, MongoDB.</p>`,
    experience_title_infogene: `Web Developer Intern`,
    experience_sub_title_infogene: `January to August 2017: Infogene – Neuilly-sur-Seine`,
    experience_infogene_detail_title_0: ``,
    experience_infogene_detail_0: `
      <ul class="cv-highlights">
        <li>Maintained and extended the internal CRM using PHP and Symfony.</li>
        <li>Built pixel-perfect pages integrated with WordPress, Magento and ASP.NET websites.</li>
      </ul>`,
    experience_title_optique: `Optician`,
    experience_sub_title_optique: `2009 to 2015: Optic 2000, Générale d’Optique, Krys`,
    experience_optique_detail_title_0: ``,
    experience_optique_detail_0: `
      <ul class="cv-highlights">
        <li>Assembled spectacles, performed eyesight tests and advised customers; also handled sales, management and accounting.</li>
      </ul>`,
  })
  return dom.serialize()
}
