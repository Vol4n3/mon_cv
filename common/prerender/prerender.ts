import { JSDOM } from "jsdom"
import { readFile } from "node:fs/promises"

export const prerender = async (html: string): Promise<string> => {
  const dom = new JSDOM(html)
  dom.window.document.head.insertAdjacentHTML(`beforeend`, `
        <meta charset="UTF-8"/>
        <link rel="apple-touch-icon" sizes="57x57" href="/ressource/icon/apple-icon-57x57.png">
        <link rel="apple-touch-icon" sizes="60x60" href="/ressource/icon/apple-icon-60x60.png">
        <link rel="apple-touch-icon" sizes="72x72" href="/ressource/icon/apple-icon-72x72.png">
        <link rel="apple-touch-icon" sizes="76x76" href="/ressource/icon/apple-icon-76x76.png">
        <link rel="apple-touch-icon" sizes="114x114" href="/ressource/icon/apple-icon-114x114.png">
        <link rel="apple-touch-icon" sizes="120x120" href="/ressource/icon/apple-icon-120x120.png">
        <link rel="apple-touch-icon" sizes="144x144" href="/ressource/icon/apple-icon-144x144.png">
        <link rel="apple-touch-icon" sizes="152x152" href="/ressource/icon/apple-icon-152x152.png">
        <link rel="apple-touch-icon" sizes="180x180" href="/ressource/icon/apple-icon-180x180.png">
        <link rel="icon" type="image/png" sizes="192x192" href="/ressource/icon/android-icon-192x192.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/ressource/icon/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="96x96" href="/ressource/icon/favicon-96x96.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/ressource/icon/favicon-16x16.png">
        <link rel="manifest" href="/manifest.json">
        <meta name="msapplication-TileColor" content="#ffffff">
        <meta name="msapplication-TileImage" content="/ressource/icon/ms-icon-144x144.png">
        <meta name="theme-color" content="#ffffff">
        <link rel="icon" type="image/x-icon" href="/ressource/icon/favicon.ico">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="/style.css">
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Cv Julien Coeurvolan</title>
    `)
  dom.window.document.body.insertAdjacentHTML(`beforeend`, await readFile(`common/prerender/prerender-body.html`, { encoding: `utf-8` }))

  return dom.serialize()
}
