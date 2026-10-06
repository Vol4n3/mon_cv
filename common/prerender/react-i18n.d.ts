import 'react'

// Translation markers consumed by the HTML prerender pipeline.
declare module 'react' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- Must match React's generic declaration.
  interface HTMLAttributes<T> {
    i18n?: string | boolean
  }
}
