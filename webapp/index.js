const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();
const sum = require('./sum');

const sum = require('./sum');

router.get('/add/:a/:b', ctx => {
  const a = Number(ctx.params.a);
  const b = Number(ctx.params.b);

  ctx.body = {
    result: sum(a, b)
  };
});

router.get('/add/:a/:b/:c', ctx => {
  const a = Number(ctx.params.a);
  const b = Number(ctx.params.b);
  const c = Number(ctx.params.c);

  ctx.body = {
    result: sum(a, b, c)
  };
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(process.env.PORT || 3000);
