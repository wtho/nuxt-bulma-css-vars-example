const appColors = {
  primary: '#ff0000',
}

module.exports = {
  jsOutputFile: 'src/bulma-generated/bulma-colors.js',
  sassOutputFile: 'assets/bulma-generated/generated-bulma-vars.sass',
  cssFallbackOutputFile: 'assets/bulma-generated/generated-fallback.css',
  colorDefs: appColors,
  sassEntryFile: 'assets/main.scss',
  transition: '0.5s ease'
}

