const Vue = require('vue')
const server = require('express')()
const createBundleRenderer = require('vue-server-renderer').createBundleRenderer
// const createApp = require('./app')
const serverBundle = require('/path/to/built-server-bundle.js')
const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false, // 推荐
  template: require('fs').readFileSync('./index.template.html', 'utf-8'),
  clientManifest
})
server.get('*', (req, res) => {
  const context = {
    url: req.url
  }
  // const app = createApp(context)

  // const metaObj = {
  //   title: 'hello title',
  //   meta: `<meta charset="utf-8">`
  // }
  renderer.renderToString(context, (err, html) => {
    // 处理异常……
    res.end(html)
  })
})

server.listen(8080)
