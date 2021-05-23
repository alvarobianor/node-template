
const { Router } = require('express');


const routes = new Router();

routes.use((req, res, next) => {

  req.message = {middleware: 'Tudo limpo'};

  next();
})


routes.get('/', (req, res) => {


  return res.json({...req.message, name: 'Alvaro'})


})

routes.get('/home/:name', (req, res) => {


  const {name} = req.params

  return res.json({...req.message, name: name || 'Alvaro'})


})

routes.get('/products', (req, res) => {


  const {inove} = req.query


  return res.json({...req.message, inove})


})

routes.post('/dev', (req, res) => {

  const data = req.body;

  console.log('Dados: ', data)


  return res.status(201).json({message: 'Deu certo!'})


})


module.exports = routes;