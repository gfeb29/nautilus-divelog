const { Router } = require('express');
const nautilusController = require('../controller/nautilusController');

function NautilusRouter() {
  const router = Router();

  router
    .route('/')
    .get(nautilusController.getAllData)
    .post(nautilusController.createImmersion)
    .put(nautilusController.updateImmersion);

  router
    .route('/:immersionParam')
    .put(nautilusController.updateImmersion)
    .delete(nautilusController.deleteImmersion);

  return router;
}

module.exports = NautilusRouter();
