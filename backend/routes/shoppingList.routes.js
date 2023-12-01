const express = require('express');
const { authMiddleware } = require('../service/auth.service.js');
const {
  getShoppingListHandler,
  addIngredientHandler,
} = require('../controllers/shoppingList.controller.js');

const shoppingListRouter = express.Router();

shoppingListRouter.get('/', authMiddleware, getShoppingListHandler);
shoppingListRouter.post('/add', authMiddleware, addIngredientHandler);

module.exports = shoppingListRouter;
