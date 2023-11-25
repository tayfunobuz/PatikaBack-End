const Koa = require('koa')
const app = new Koa()

app.use(ctx => {
    if (ctx.request.url === "/") {
        ctx.body = "<h1>Index sayfasina hosgeldiniz</h1>"
    }

    else if (ctx.request.url === "/hakkimda") {
        ctx.body = "<h1>Hakkimda sayfasina hosgeldiniz</h1>"
    }

    else if (ctx.request.url === "/iletisim") {
        ctx.body = "<h1>Iletisim sayfasina hosgeldiniz</h1>"
    }

    else {
        ctx.body = "<h1>Sayfa Bulunamadi</h1>"
    }
})

app.listen(3000)
