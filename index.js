const express = require('express')
const app = express()
const exphbs = require('express-handlebars')

app.set('view engine', 'handlebars')
app.use(express.static('public'))
app.engine('handlebars', exphbs.engine())
app.use(
  express.urlencoded({
      extended: true
  })
)
app.use(express.json())
// Definindo a rota raiz "/"
app.get('/', (req, res) => {

  res.render('home');
});

// Definindo a rota "/sobre(sobre)"
app.get('/sobre', (req, res) => {
  res.render('sobre');
});

// Definindo a rota "/business(negócios)"
app.get('/business', (req, res) => {
  res.render('business');
});
// Definindo a rota "/more(mais)"
app.get('/more', (req, res) => {
  res.render('more');
});

// Iniciando o servidor na porta 4000
app.listen(4000, () => {
  console.log('Servidor iniciado na porta 4000');
});
