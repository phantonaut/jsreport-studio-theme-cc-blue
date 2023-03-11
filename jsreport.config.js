
module.exports = {
  name: 'studio-theme-cc-blue',
  main: './lib/main.js',
  dependencies: ['express', 'studio'],
  optionsSchema: {
    extensions: {
      studio: {
        type: 'object',
        properties: {
          theme: {
            type: 'object',
            properties: {
              name: {
                type: 'string',
                enum: ['blue']
              }
            }
          }
        }
      }
    }
  }
}
