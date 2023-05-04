const express = require('express');
const app = express();

// Definindo a rota raiz "/"
app.get('/', (req, res) => {
  res.send(`
    <h1>Bem-vindo à minha página inicial</h1>
    <a href="/sobre">Sobre mim</a>
    <br>
    <a href="/contato">Entre em contato</a>
    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
  `);
});

// Definindo a rota "/sobre"
app.get('/sobre', (req, res) => {
  res.send(`
    <h1>Sobre mim</h1>
    <p>Eu sou um desenvolvedor web experiente.</p>
    <a href="/">Voltar para a página inicial</a>
  `);
});

// Definindo a rota "/contato"
app.get('/contato', (req, res) => {
  res.send(`
    <h1>Entre em contato</h1>
    <form>
      <label for="email">Seu e-mail:</label><br>
      <input type="email" id="email" name="email"><br>
      <label for="mensagem">Sua mensagem:</label><br>
      <textarea id="mensagem" name="mensagem"></textarea><br><br>
      <input type="submit" value="Enviar">
    </form>
    <a href="/">Voltar para a página inicial</a>
  `);
});

// Iniciando o servidor na porta 3000
app.listen(80, () => {
  console.log('Servidor iniciado na porta 3000');
});
