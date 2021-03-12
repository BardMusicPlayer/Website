# Website

https://mogmusic.app is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

## Installation

```console
npm install
```

## Local Development

```console
npm run start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

# Wiki Pages

Wiki Documents are located in the ```docs``` folder.

# Translations

Language translations are located in the ```i18n\{code}\docusaurus-plugin-content-docs\current``` folder, where ```{code}``` is ```fr``` for French, ```ja``` for Japanese, or ```ko``` for Korean.

Additionally there are a few strings in these locations that need to be translated:

```homepage.Description.\*``` and ```homepage.GetStarted``` in file ```i18n\(code}\code.json```
```link.title.\*``` in file ```i18n\{code}\docusaurus-theme-classic\footer.json```

To view translations locally use a locale specific npm run
```console
npm run start -- --locale {code}
```
