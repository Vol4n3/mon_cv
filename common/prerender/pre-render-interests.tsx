export function PreRenderInterests() {
  return (
    <article className="cv-interests">
      <h3 i18n="">interests_title</h3>
      <ul>
        {[`science`, `culture`].map(category => (
          <li key={category}>
            <strong i18n="">{`interests_${category}_title`}</strong>
            <p i18n="">{`interests_${category}`}</p>
          </li>
        ))}
      </ul>
    </article>
  )
}
