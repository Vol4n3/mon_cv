export function PreRenderInfos() {
  return (
    <article>
      <ul>
        <li>
          <h3 i18n="">contact_title</h3>
          <ul>
            <li>
              <span aria-label="phone" className="material-icons" i18n="aria-label" role="img">
                phone_android
              </span>
              <a href="tel:+33670430432">+33 6 70 43 04 32</a>
            </li>
            <li>
              <span aria-label="email" className="material-icons" i18n="aria-label" role="img">
                mail_outline
              </span>
              <a href="mailto:jcvolan@gmail.com">jcvolan@gmail.com</a>
            </li>
            <li>
              <span aria-hidden="true" className="material-icons">
                link
              </span>
              <a href="https://www.linkedin.com/in/julien-coeurvolan-a217071ab/" i18n="">linkedin</a>
            </li>
            <li>
              <span aria-label="langages" className="material-icons" i18n="aria-label" role="img">
                flag
              </span>
              <div i18n="">lang_1</div>
              <div i18n="">lang_2</div>
            </li>
          </ul>
        </li>
        <li>
          <span i18n="">mobility_title</span>
          <ul>
            <li>
              <span aria-label="city" className="material-icons" i18n="aria-label" role="img">
                location_city
              </span>
              <span>Roanne</span>
            </li>
            <li>
              <span aria-label="vehicle" className="material-icons" i18n="aria-label" role="img">
                directions_car
              </span>
              <span i18n="">vehicle_permit</span>
            </li>
            <li>
              <span aria-hidden="true" className="material-icons">
                home_work
              </span>
              <span i18n="">remote_work</span>
            </li>
          </ul>
        </li>
      </ul>
    </article>
  )
}
