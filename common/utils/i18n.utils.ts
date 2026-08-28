import { JSDOM } from "jsdom"

export const i18nJSDOMReplace = (dom: JSDOM, record: Record<string, string>) => {
  const i18nElements = dom.window.document.querySelectorAll(`[i18n]`)
  if (!i18nElements.length) {
    return
  }
  i18nElements.forEach((element) => {
    let found: boolean = false
    const attrValues = element.getAttribute(`i18n`)
    const splitAttrValues = attrValues?.split(`,`) || []
    Object.entries(record).forEach(([key, value]) => {
      if (attrValues) {
        splitAttrValues.forEach((attrValue) => {
          if (attrValue === `textContent`) {
            if (element.textContent.trim() === key) {
              element.innerHTML = value
              found = true
            }
          }
          if (element.getAttribute(attrValue) === key) {
            element.setAttribute(attrValue, value)
            found = true
          }
        })
      }
      else {
        if (!element.textContent) {
          return
        }
        if (element.textContent.trim() === key) {
          element.innerHTML = value
          found = true
        }
      }
    })
    if (!found) {
      console.warn(`no translation found for ${element.tagName} with ${
        [
          element.textContent.trim(),
          ...splitAttrValues.map(v => element.getAttribute(v)).filter(Boolean),
        ].filter(Boolean).join(` or `)
      }`)
    }
  })
}
