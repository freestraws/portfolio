const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

let app = express()
app.use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

app.get('/', (req, res) => res.render('pages/home',
                        {top:   "academic",
                        left:   "current",
                        bottom: "work",
                        right:  "other",
                        center: "home"}))

app.get('/other', (req, res) => res.render('pages/other'))
app.get('/academic', (req, res) => res.render('pages/academic',
                        {top:   "academic",
                        left:   "current",
                        bottom: "work",
                        right:  "other",
                        center: "home"}))
app.get('/squares', (req, res) => res.render('pages/squares',
                        {top:   "academic",
                        left:   "current",
                        bottom: "work",
                        right:  "other",
                        center: "home"}))
app.get('/work', (req, res) => res.render('pages/work'))
app.get('/current', (req, res) => res.render('pages/current'))
