const path = require('path')

module.exports = (reporter, definition) => {
  if (reporter.studio) {
    reporter.studio.registerTheme({
      name: 'blue',
      variablesPath: path.join(__dirname, './themeVars.json'),
      previewColor: '#00629a',
      editorTheme: 'vs-dark'
    })
  }
}
