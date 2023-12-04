import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ReactComponent as Minus } from '../../images/minus-icon.svg';
import { ReactComponent as Plus } from '../../images/plus-icon.svg';
import { ReactComponent as Delete } from '../../images/delete-input-icon.svg';
import { selectUserToken } from 'redux/selectors/users.selectors';
import css from './RecipeIngredientsFields.module.css';
import axios from 'axios';
import IngredientsNameInput from 'components/IngredientNameInput/IngredientNameInput';
import IngredientsMeasureInput from 'components/IngredientMeasureInput/IngredientMeasureInput';

const RecipeIngredientsFields = ({ selectedIngredients }) => {
  const [inputs, setInputs] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [isFetch, setIsFetch] = useState(false);
  const userToken = useSelector(selectUserToken);

  useEffect(() => {
    selectedIngredients(inputs);
    const getIngredients = async () => {
      try {
        const response = await axios.get(
          'https://soyummy-h1wx.onrender.com/ingredients/list',
          {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          }
        );
        if (response) {
          setIngredients(response.data.ingredients);
          return response.data;
        }
      } catch (error) {
        console.error(error);
        throw new Error('Something went wrong...');
      }
    };
    if (!isFetch) {
      getIngredients();
    }
    setIsFetch(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputs, userToken]);

  const handleAddInput = event => {
    event.preventDefault();
    setInputs(prevInputs => [
      ...prevInputs,
      {
        id: prevInputs.length,
        inputData: {
          id: '',
          name: '',
          measure: '',
        },
      },
    ]);
  };

  const handleRemoveLastInput = event => {
    event.preventDefault();
    if (inputs.length > 0) {
      const updatedInputs = [...inputs];
      updatedInputs.pop();
      setInputs(updatedInputs);
    }
  };

  const handleRemoveInput = (event, inputId) => {
    event.preventDefault();
    const updatedInputs = inputs.filter(input => input.id !== inputId);
    setInputs(updatedInputs);
  };

  const handleAddIngredient = index => {
    return value => {
      setInputs(prevInputs => {
        const updatedInputs = prevInputs.map(input => {
          if (input.id === index) {
            return {
              ...input,
              inputData: {
                ...input.inputData,
                name: value.name,
                id: value.id,
              },
            };
          }
          return input;
        });
        // Call selectedIngredients outside the setInputs callback
        return updatedInputs; // Ensure to return the updatedInputs
      });
    };
  };

  const handleAddIngredientMeasure = index => {
    return value => {
      setInputs(prevInputs => {
        return prevInputs.map(input => {
          if (input.id === index) {
            return {
              ...input,
              inputData: {
                ...input.inputData,
                measure: value,
              },
            };
          }
          return input;
        });
      });
    };
  };

  const renderInputs = () => {
    return inputs.map(input => (
      <li className={css.item} key={input.id}>
        <div className={css.inputWrapper}>
          <IngredientsNameInput
            options={ingredients}
            onSelectionChange={handleAddIngredient(input.id)}
          />
          <IngredientsMeasureInput
            combinedMeasure={handleAddIngredientMeasure(input.id)}
          />
        </div>
        <button onClick={event => handleRemoveInput(event, input.id)}>
          <Delete className={css.delete} />
        </button>
      </li>
    ));
  };

  return (
    <div className={css.container}>
      <div className={css.headlineContainer}>
        <h2 className={css.headline}>Ingredients</h2>
        <div className={css.buttons}>
          <button className={css.buttonMinus} onClick={handleRemoveLastInput}>
            <Minus />
          </button>
          <p>{inputs.length}</p>
          <button
            className={css.buttonPlus}
            onClick={event => handleAddInput(event)}
          >
            <Plus />
          </button>
        </div>
      </div>
      <ul>{renderInputs()}</ul>
    </div>
  );
};

export default RecipeIngredientsFields;
