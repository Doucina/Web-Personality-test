/**
 *
 * entrez la commande suivante:
 * npm install --save express express-session body-parser morgan cors
 */
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const session = require('express-session')

const app = express()
var name = []
app.use(cors({
  credentials: true,
  origin: 'http://localhost:8080'
}))

app.use(session({
  name: 'sid',
  secret: 'ssh!quiet,it\'asecret!', // changez cette valeur
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // ne changez que si vous avez activé le https
}))
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())

app.get('/api/test', (req, res) => {
  console.log('coucou')
  res.json({
    message: "ceci est envoyé depuis l'API"
  })
})

app.get('/', function (req, res, next) {
  res.json({ status: 'open' })
  res.end('Maintenant, il me faut récupérer les sources de données de notre test de personnalité')
})

app.post('/api/login', (req, res) => {
  console.log('ok')
  debugger
  var input = req.body
  var info = {
    name: input.login,
    password: input.password
  }
  name.push(info)
  res.json({ auth: 'Inscription reussi' })
  console.log(name)
})
app.get('/api/admin', (req, res) => {
  if (!req.session.userId || req.session.isAdmin === false) {
    res.status(401)
    res.json({ message: 'Unauthorized' })
    return
  }

  res.json({
    message: 'congrats, you are connected'
  })
})

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`listening on ${port}`)
})
