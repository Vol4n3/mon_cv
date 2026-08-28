// I18n.utils.test.ts
import { describe, expect, it, vi } from 'vitest'
import { JSDOM } from 'jsdom'
import { i18nJSDOMReplace } from './i18n.utils'

describe(`initI18N`, () => {
  it(`should translate textContent when key matches`, () => {
    const dom = new JSDOM(`
          <h1 i18n>title</h1>
    `),
      record = { title: `Bienvenue` }
    i18nJSDOMReplace(dom, record)
    expect(dom.window.document.querySelector(`h1`)?.textContent).toBe(`Bienvenue`)
  })

  it(`should translate attributes specified in i18n attribute but not the undefined textContent`, () => {
    const dom = new JSDOM(`
          <span i18n="aria-label" aria-label="phone">content</span>
    `),

      record = { phone: `Téléphone`, content: `Contenue` }
    i18nJSDOMReplace(dom, record)

    const translatedElement = dom.window.document.querySelector(`span`)
    expect(translatedElement?.getAttribute(`aria-label`)).toBe(`Téléphone`)
    expect(translatedElement?.textContent).toBe(`content`)
  })

  it(`should handle elements with no matching keys gracefully`, () => {
    const dom = new JSDOM(`
          <h1 i18n>unknownKey</h1>
    `),

      record = { title: `Bienvenue` },
      consoleWarnSpy = vi.spyOn(console, `warn`).mockImplementation(() => {
      })

    i18nJSDOMReplace(dom, record)

    const untranslatedElement = dom.window.document.querySelector(`h1`)
    expect(untranslatedElement?.textContent).toBe(`unknownKey`)
    expect(consoleWarnSpy).toHaveBeenCalled()

    consoleWarnSpy.mockRestore()
  })

  it(`should not modify elements with no i18n attribute`, () => {
    const dom = new JSDOM(`
          <p>Static Content</p>
    `),

      record = { title: `Bienvenue` }
    i18nJSDOMReplace(dom, record)

    const element = dom.window.document.querySelector(`p`)
    expect(element?.textContent).toBe(`Static Content`)
  })

  it(`should support multiple i18n attributes for a single element`, () => {
    const dom = new JSDOM(`
      <html>
        <body>
          <span i18n="textContent,aria-label" aria-label="phone">hello</span>
        </body>
      </html>
    `),

      record = { phone: `Téléphone`, hello: `Bonjour` }
    i18nJSDOMReplace(dom, record)

    const element = dom.window.document.querySelector(`span`)
    expect(element?.textContent).toBe(`Bonjour`)
    expect(element?.getAttribute(`aria-label`)).toBe(`Téléphone`)
  })

  it(`should not skip elements with empty i18n attributes`, () => {
    const dom = new JSDOM(`
          <span i18n="">title</span>
    `),

      record = { title: `Bienvenue` }
    i18nJSDOMReplace(dom, record)

    const element = dom.window.document.querySelector(`span`)
    expect(element?.textContent).toBe(`Bienvenue`)
  })
})
