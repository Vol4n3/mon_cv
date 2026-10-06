export function PreRenderSkills() {
  return (
    <article className="cv-skills">
      <h3 i18n="">skills_title</h3>
      <ul>
        {[`frontend`, `graphics`, `backend`, `cms`, `infrastructure`, `architecture`, `quality`, `collaboration`].map(category => (
          <li key={category}>
            <strong i18n="">{`skills_${category}_title`}</strong>
            <p i18n="">{`skills_${category}`}</p>
          </li>
        ))}
      </ul>
    </article>
  )
}
