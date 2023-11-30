const { ShoppingList } = require('../models/shoppingList.model');
const { UnknownDatabaseError } = require('../db.js');

const getShoppingList = async id => {
  try {
    const ingredients = await ShoppingList.find(id);
    return ingredients;
  } catch (error) {
    console.error(error);
    throw new UnknownDatabaseError();
  }
};

const addToShoppingList = async body => {
  try {
    const newList = new ShoppingList(body);
    const saveList = await newList.save();
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
