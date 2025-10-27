import express, { Express } from 'express';
const app: Express = express();

app.get('/',  (req, res) => {
   res.json({isOk: true})
})

app.set('port', '5001');

app.listen(`${app.get('port')}`, () => {
    console.log(`${app.get('port')}번 포트로 연결됨`)
})