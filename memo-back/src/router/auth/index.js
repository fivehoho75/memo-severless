// @flow
import Router from 'koa-router';

const handler = (ctx, next) => {
  ctx.body = `${ctx.request.method} ${ctx.request.path}: ${next}`;
};

const auth: Router = new Router();

auth.post('/register/local', handler);
auth.post('/login/local', handler);
auth.get('/check', handler);
auth.post('/verify-email', handler);

export default auth;
