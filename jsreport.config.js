
module.exports = {
  name: 'jsreport-studio-theme-cc-blue',
  main: './lib/main.js',
  dependencies: ['express', 'studio'],
  requires: {
    core: '3.x.x',
    studio: '3.x.x'
  },
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
                enum: ['cc-blue']
              }
            }
          }
        }
      }
    }
  }
}
