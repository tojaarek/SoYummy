const { ShoppingList } = require('../models/shoppingList.model');
const { UnknownDatabaseError } = require('../db.js');

const getShoppingList = async id => {
  try {
    const list = await ShoppingList.findOne(id);
    return list;
  } catch (error) {
    console.error(error);
    throw new UnknownDatabaseError();
  }
};

const addToShoppingList = async (id, body) => {
  try {
    const list = await ShoppingList.findOne(id);
    list.ingredients.push(body);
    const saveList = await list.save();
    return saveList;
  } catch (error) {
    console.error(error);
    throw new UnknownDatabaseError();
  }
};

const deleteFromShoppingList = async ingredientId => {
  try {
    await ShoppingList.findByIdAndDelete(ingredientId);
  } catch (error) {
    console.error(error);
    throw new UnknownDatabaseError();
  }
};

module.exports = {
  getShoppingList,
  addToShoppingList,
  deleteFromShoppingList,
};
