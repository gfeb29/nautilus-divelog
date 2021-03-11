const { Router } = require('express');
const nautilusController = require('../controller/nautilusController');

function NautilusRouter() {
  const router = Router();

  router
    .route('/')
    .get(nautilusController.getAllData);

  return router;
}

module.exports = NautilusRouter();
