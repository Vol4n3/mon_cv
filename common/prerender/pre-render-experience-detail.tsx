export function PreRenderExperienceDetail({ name, detailsCount, hasStack = false }: {
  name: string
  detailsCount: number
  hasStack?: boolean
}) {
  return (
    <article className="cv-experience">
      <header>
        <h4 i18n="">
          experience_title_
          {name}
        </h4>
        <h5 i18n="">
          experience_sub_title_
          {name}
        </h5>
      </header>
      <ul>
        {new Array(detailsCount).fill(0).map((_, indexDetail) => (
          <li key={indexDetail}>
            {detailsCount > 1 && (
              <h6 i18n="">
                experience_
                {name}
                _detail_title_
                {indexDetail}
              </h6>
            )}
            <div i18n="">
              experience_
              {name}
              _detail_
              {indexDetail}
            </div>
          </li>
        ))}
      </ul>
      {hasStack
        ? (
            <p className="cv-stack" i18n="">
              experience_stack_
              {name}
            </p>
          )
        : null}
    </article>
  )
}
