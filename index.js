const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.status(200).send('Meu backend!')
})

app.get('/atualizou', (req, res) => {
    res.status(200).send('Meu backend atualizado!')
})

app.listen(3000, () => {
    console.log('Backend executando...')
})