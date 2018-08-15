const path = require('path')

const isDev = process.env.NODE_ENV == 'development'
const resolve = dir => path.join(__dirname, '..', dir)

module.exports = {
  isDev,
  resolve
}
