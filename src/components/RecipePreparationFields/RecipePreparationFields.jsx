import css from './RecipePreparationFields.module.css';

const RecipePreparationFields = ({ preparation }) => {
  const handlePreparation = event => {
    const value = event.target.value;
    if (value.includes('\n')) {
      const breaks = value.split('\n');
      const filter = breaks.filter(breaks => breaks.trim() !== '');
      preparation(filter);
    } else {
      preparation(value);
    }
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
