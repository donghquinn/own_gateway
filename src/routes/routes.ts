import App from 'koa';
import Router from 'koa-router';
import {config} from 'dotenv';

config();

const app = new App();
const router = new Router();
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log('@@@@@@@@@@@@@@@')
  console.log(`Your server is listening on ${port}`);
  console.log('@@@@@@@@@@@@@@@');
});
