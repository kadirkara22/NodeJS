`Koa.js ile web sunucumuzu yazalım.
koa paketini indirelim.
index, hakkimda ve iletisim sayfaları oluşturalım.
Sayfalara içerik olarak xxx sayfasına hoşgeldiniz şeklinde h1 başlıkları yazdıralım.
port numarası olarak 3000'i kullanalım.`

const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();



// response

router.get('/', (ctx, next) => {
    ctx.body = `<h1>Index sayfasina hosgeldiniz<h1>`,
        ctx.status = 200;
    console.log("istek başarılı")
});
router.get('/hakkimda', (ctx, next) => {
    ctx.body = `<h1>hakkimda sayfasina hosgeldiniz<h1>`,
        ctx.status = 200;
    console.log("istek başarılı")
});
router.get('/iletisim', (ctx, next) => {
    ctx.body = `<h1>iletisim sayfasina hosgeldiniz<h1>`,
        ctx.status = 200;
    console.log("istek başarılı")
});


app.use(router.routes())
const port = 3000

app.listen(port, () => {
    console.log(`Sunucu port ${port} de başlatıldı.`);
});