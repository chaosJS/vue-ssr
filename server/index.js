const express = require('express')
const app = express()

const serverBundle = require('../dist/server/vue-ssr-server-bundle.json')
const clientMenifest = require('../dist/client/vue-ssr-client-manifest.json')

// 渲染bundle的Renderer
const renderer = require('vue-server-renderer').createBundleRenderer(
  serverBundle,
  {
    runInNewContext: false,
    template: require('fs').readFileSync('../public/index.html', 'utf-8'),
    clientMenifest
  }
)
// express 处理静态
app.use(express.static('../dist/client', { index: false }))
app.get('*', async (req, res) => {
  try {
    const context = {
      url: req.url,
      title: 'vue sst'
    }
    const html = await renderer.renderToString(context)
    console.log(html)
    res.send(html)
  } catch (error) {
    res.status(500).send('server err')
  }
})

app.listen(3000, () => {
  console.log('listen on port 3000')
})
