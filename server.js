const express = require('express')
const app = express()
const hbs = require('hbs');
require('./hbs/helpers')

const port = process.env.PORT || 3000;




app.use(express.static(__dirname + '/public'))

//Express hbs engine
//hbs.registerPartials(__dirname + '/views/parciales')
hbs.registerPartials(`${__dirname}/views/parciales`)
// helpers



app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  // res.send('Hola mundo')

  res.render('home', {
    nombre: 'juaNma cabaLlero'
  });
})

app.get('/about', (req, res) => {
  // res.send('Hola mundo')

  res.render('about');
})

app.listen(port, () => {
  console.log(`Escuchando peticiones en el puerto ${port}`);
})