const { getUser } = require('../service/users.service.js');
const { ShoppingList } = require('../models/shoppingList.model.js');

const addIngredientHandler = async (req, res, next) => {
  try {
    const { _id } = req.user;

    const { title, category, instructions, description, time, ingredients } =
      req.body;
    const currentUser = await getUser({ _id: _id });

    const newRecipe = await addRecipe(recipeData);
    if (!newRecipe) {
      res.status(500).json({
        status: 'error',
        code: 500,
        message: 'Internal Server Error',
      });
    }
    res.status(201).json({
      status: 'success',
      code: 201,
      message: 'Created',
      recipe: {
        newRecipe,
      },
    });
  } catch (error) {
    console.error(error);
    return next(error);
  }
};

module.exports = {
  addIngredientHandler,
};
