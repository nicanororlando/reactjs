import express from 'express';
import diaryRoutes from './routes/diaries';

const PORT = 3000;

const app = express();
app.use(express.json()); // middleware que transforma la req.body a un json

app.get('/ping', (_req, res) => {
  console.log('alguien pingeo aca');
  res.send('pong');
});

// Le decimos que utilice diaryRoutes en esa ruta.
app.use('/api/diaries', diaryRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
