const { User } = require('../models/users.model.js');
const { ShoppingList } = require('../models/shoppingList.model.js');
const { UnknownDatabaseError } = require('../db.js');

const createUser = async data => {
  try {
    const createdUser = await User.create(data);
    await ShoppingList.create({ owner: createdUser._id });

    return createdUser;
  } catch (error) {
    if (error.code === 11000) {
      throw new Error('Conflict');
    }
    throw error;
  }
};

const getUser = async filter => {
  try {
    const user = await User.findOne(filter);
    return user;
  } catch (error) {
    console.error(error);
    throw new UnknownDatabaseError();
  }
};

const updateUser = async (_id, data) => {
  try {
    return await User.findByIdAndUpdate(_id, data, { new: true });
  } catch (error) {
    console.error(error.message);
    throw new UnknownDatabaseError();
  }
};

module.exports = {
  createUser,
  getUser,
  updateUser,
  UnknownDatabaseError,
};
