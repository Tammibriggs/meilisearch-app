import express from 'express'

const app = express()
const PORT = 3000

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', async (req, res) => {
  const searchValue = req.query.search

  res.render('index', {
    books: [],
    searchValue
  })  
})

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`)
})