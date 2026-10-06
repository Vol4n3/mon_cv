# Prérendu React

Le contenu du CV se trouve dans `pre-render-body.tsx`, réparti entre
`CvHeader`, `CvContact` et `PreRenderExperience`. Ajouter un composant revient à
l'importer puis à l'utiliser dans `PreRenderBody`.

`pre-render.ts` transforme ces composants en HTML avec `renderToStaticMarkup`.
Les dictionnaires des pages française et anglaise sont ensuite appliqués aux
attributs `i18n`. Pour marquer un texte à traduire, utiliser `i18n` sans valeur.
La règle ESLint `local/i18n-shorthand` corrige automatiquement `i18n=""` et
`i18n={true}`. Les valeurs telles que `i18n="aria-label"` restent explicites.
La fabrique JSX `createPrerenderElement` conserve ces marqueurs dans le HTML ;
reprendre les deux commentaires JSX et son import dans les nouveaux fichiers TSX
qui utilisent cette notation.

Vite charge les modules de prérendu avec `tsx`, en développement et au build.
Ces composants s'exécutent uniquement dans Node ; React n'est pas envoyé au
navigateur. Ils produisent du HTML statique, sans hydratation ni hooks interactifs.
Cette intégration n'utilise pas le protocole React Server Components (RSC).

Validation : `npm run build`, `npx tsc --noEmit` et `npx vitest run`.
