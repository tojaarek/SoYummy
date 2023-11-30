const express = require('express');
const { authMiddleware } = require('../service/auth.service.js');

const shoppingListRouter = express.Router();

shoppingListRouter.get('/', authMiddleware);

module.exports = shoppingListRouter;
