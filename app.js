import Express from './express.mjs';
import dotenv from 'dotenv';

dotenv.config();

const app = new Express();

const PORT = process.env.PORT 
const HOST = process.env.HOST 

app.listen(PORT, HOST, () => {
  console.log(` 서버 가동중 ->  http://${HOST}:${PORT} `);
});


app.get('/', (req, res) => {
  const jsonData = {
    message: 'get 요청으로 받아온 데이터에요 !'
  };
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(jsonData));
});
