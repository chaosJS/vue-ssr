const express = require('express')
const Vue = require('vue')
const renderer = require('vue-server-renderer').createRenderer()
const app = express()

const page = new Vue({ template: '<div> hello vue ssr </div>' })

app.get('/', async (req, res) => {
  try {
    const html = await renderer.renderToString(page)
    res.send(html)
  } catch (error) {
    res.status(500).send('server err')
  }
})

app.listen(3000, () => {
  console.log('listen on port 3000')
})
