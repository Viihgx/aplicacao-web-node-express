const express = require('express')
const app = express()
const exphbs = require('express-handlebars')

app.set('view engine', 'handlebars')
app.use(express.static('public'))
app.engine('handlebars', exphbs.engine())
// Definindo a rota raiz "/"
app.get('/', (req, res) => {

  res.render('/home');
  // res.send(`
   
  // // <h1>Bem-vindo</h1>
  // // <p>Pagina inicial de teste com alterações</p>

  //   // <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
  //   // <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
  // `);
});

// Definindo a rota "/sobre"
app.get('/sobre', (req, res) => {
  res.send('<h1>Sobre</h1><p>Olá meu nome é Vit.</p>');
});

// Definindo a rota "/contato"
app.get('/contato', (req, res) => {
  res.send('<h1>Entre em contato</h1><p>Me envie um e-mail para contato@teste.com</p>');
});

// Iniciando o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
