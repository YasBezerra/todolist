require('./db');
const express = require('express');
const cors = require('cors');

const app = express();

const taskRoutes = require('./src/routes/taskRoutes');

// middlewares
app.use(cors());
app.use(express.json());

// rotas
app.use(taskRoutes);

// rota teste
app.get('/', (req, res) => {
  res.send('API rodando 🚀');
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});