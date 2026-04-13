const db = require('../../db');

// LISTAR tarefas
exports.getTasks = (req, res) => {
  db.query('SELECT * FROM tasks', (err, results) => {
    if (err) {
      return res.status(500).json({ erro: err });
    }

    res.json(results);
  });
};

// CRIAR tarefa
exports.createTask = (req, res) => {
  const { titulo, dia } = req.body;

  const query = 'INSERT INTO tasks (titulo, dia, status) VALUES (?, ?, ?)';

  db.query(query, [titulo, dia, 'pendente'], (err, result) => {
    if (err) {
      return res.status(500).json({ erro: err });
    }

    res.status(201).json({
      id: result.insertId,
      titulo,
      dia,
      status: 'pendente'
    });
  });
};

// ATUALIZAR status
exports.updateTask = (req, res) => {
  const { id } = req.params;
  const { titulo, status } = req.body;

  const query = 'UPDATE tasks SET titulo = ?, status = ? WHERE id = ?';

  db.query(query, [titulo, status, id], (err, result) => {
    if (err) {
      return res.status(500).json({ erro: err });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ mensagem: 'Tarefa não encontrada' });
    }

    res.json({ id, titulo, status });
  });
};

// DELETAR tarefa
exports.deleteTask = (req, res) => {
  const { id } = req.params;

  const query = 'DELETE FROM tasks WHERE id = ?';

  db.query(query, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ erro: err });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ mensagem: 'Tarefa não encontrada' });
    }

    res.json({ mensagem: 'Tarefa deletada com sucesso' });
  });
};