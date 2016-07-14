var apiRouter = require('express').Router()

var taController = require('./ta_controller')


apiRouter.route('/TA-ME')
    .get(taController.all)
    .post(taController.create)


apiRouter.route('/TA-ME/:id')
    .get(taController.single)
    .put(taController.update)
    .delete(taController.destroy)

module.exports = apiRouter
