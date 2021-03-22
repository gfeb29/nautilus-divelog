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
    .route('/:locationId')
    .get(nautilusController.getOneImmersion)
    .put(nautilusController.updateImmersion)
    .delete(nautilusController.deleteImmersion);

  return router;
}

module.exports = NautilusRouter();
