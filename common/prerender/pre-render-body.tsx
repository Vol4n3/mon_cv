import { PreRenderExperienceDetail } from "./pre-render-experience-detail.tsx"
import { PreRenderInterests } from "./pre-render-interests.tsx"
import { PreRenderEducation } from "./pre-render-education.tsx"
import { PreRenderSkills } from "./pre-render-skills.tsx"
import { PreRenderInfos } from "./pre-render-infos.tsx"

export default function PreRenderBody() {
  return (
    <main>
      <header>
        <h1 i18n="">title</h1>
        <h2 i18n="">sub_title</h2>
      </header>
      <aside>
        <PreRenderInfos />
        <PreRenderInterests />
        <img alt="QR code" className="cv-qr-code" src="/qr_code.svg" width="100" />
      </aside>
      <section>
        <article i18n="">
          resume
        </article>
        <PreRenderSkills />
        <PreRenderExperienceDetail name="hellipse" detailsCount={3} hasStack />
        <PreRenderExperienceDetail name="linkeo" detailsCount={1} />
        <PreRenderExperienceDetail name="niji" detailsCount={1} />
        <PreRenderExperienceDetail name="addactis" detailsCount={1} />
        <PreRenderExperienceDetail name="hrteam" detailsCount={1} />
        <PreRenderExperienceDetail name="infogene" detailsCount={1} />
        <PreRenderExperienceDetail name="optique" detailsCount={1} />
      </section>
      <footer>
        <PreRenderEducation />
      </footer>
    </main>
  )
}
