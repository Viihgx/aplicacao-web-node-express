const express = require('express');
const app = express();

// Definindo a rota raiz "/"
app.get('/', (req, res) => {
  res.send(`
    <h1>Bem-vindo</h1>
    <ul>
      <li><a href="/sobre">Sobre</a></li>
      <li><a href="/contato">Contato</a></li>
    </ul>
  `);
});

// Definindo a rota "/sobre"
app.get('/sobre', (req, res) => {
  res.send('<h1>Sobre</h1><p>Eu sou um desenvolvedor web experiente.</p>');
});

// Definindo a rota "/contato"
app.get('/contato', (req, res) => {
  res.send('<h1>Entre em contato</h1><p>Me envie um e-mail para contato@teste.com</p>');
});

// Iniciando o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
