export function PreRenderEducation() {
  return (
    <article className="cv-education">
      <h3 i18n="">education_title</h3>
      <ul>
        {[`esgi`, `ipi`, `ico`, `bac`].map(school => (
          <li key={school}>
            <strong i18n="">{`education_${school}_title`}</strong>
            <p i18n="">{`education_${school}_school`}</p>
            <p i18n="">{`education_${school}_dates`}</p>
          </li>
        ))}
      </ul>
    </article>
  )
}
