
const { Router } = require('express');


const routes = new Router();

routes.use((req, res, next) => {

  req.messsage = {men: 'Tudo limpo'};

  next();
})


routes.get('/', (req, res) => {


  return res.json({...req.message, name: 'Alvaro'})


})

module.exports = routes;