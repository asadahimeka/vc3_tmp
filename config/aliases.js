const { resolve } = require('./util')

const aliases = {
  '@src': resolve('src'),
  '@router': resolve('src/router'),
  '@views': resolve('src/router/views'),
  '@layouts': resolve('src/router/layouts'),
  '@utils': resolve('src/utils'),
  '@state': resolve('src/state'),
  '@design': resolve('src/design/index.scss'),

  '@a': resolve('src/assets'),
  '@assets': resolve('src/assets'),
  '@p': resolve('src/pages'),
  '@pages': resolve('src/pages'),
  '@c': resolve('src/components'),
  '@comp': resolve('src/components'),
  '@components': resolve('src/components')
}

module.exports = aliases
