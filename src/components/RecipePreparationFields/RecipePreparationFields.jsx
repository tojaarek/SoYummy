import css from './RecipePreparationFields.module.css';

const RecipePreparationFields = ({ preparation }) => {
  const handlePreparation = event => {
    const value = event.target.value;
    preparation(value);
  };

  return (
    <div className={css.container}>
      <div className={css.headlineContainer}>
        <h2 className={css.headline}>Recipe Preparation</h2>
        <textarea
          name="preparation"
          placeholder="Enter recipe preparation"
          onChange={handlePreparation}
        ></textarea>
      </div>
    </div>
  );
};

export default RecipePreparationFields;
