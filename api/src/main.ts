import cors from 'cors';
import express from 'express';
import router from './routes';

const config = {
  port: process.env.PORT ?? 3333,
};

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1', router);

app.listen(config.port, () => {
  console.log('Server started on port 3333');
});
