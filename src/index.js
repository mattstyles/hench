
const path = require('path')

const Koa = require('koa')
const serve = require('koa-static')
const bole = require('bole')

const log = require('./log')

const app = new Koa()

app.use(async (ctx, next) => {
  let start = Date.now()

  await next()

  log.info({
    message: 'GET',
    statusCode: ctx.response.status,
    url: ctx.request.url,
    elapsed: Date.now() - start,
    contentLength: ctx.response.length || 0
  })
})

app.use(serve('./'))

module.exports = app
