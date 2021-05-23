const {Router} = require('express');

const routes = new Router();

routes.use((req, res, next) => {
  req.user = {middleware: 'Intercepatado'}
  next()
})

routes.get('/', (req, res) => {
  return res.json({...req.user, name: 'Alvaro'})
})

module.exports = routes;