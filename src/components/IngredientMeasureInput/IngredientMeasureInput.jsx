import React, { useState, useEffect, useRef } from 'react';
import { ReactComponent as Arrow } from '../../images/dropdown-arrow-down.svg';
import css from './IngredientMeasureInput.module.css';

const IngredientsMeasureInput = ({ combinedMeasure }) => {
  const [selectedAmount, setSelectedAmount] = useState('');
  const [selectedMeasure, setSelectedMeasure] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);
  const measures = ['tbs', 'tsp', 'kg', 'g', 'l', 'ml'];

  const handleAmount = event => {
    const value = event.target.value;
    setSelectedAmount(value);
  };

  const handleOptionClick = value => {
    setSelectedMeasure(value);
    setIsOpen(false);
  };

  const handleInputClick = () => {
    setIsOpen(true);
  };

  const handleOutsideClick = e => {
    if (inputRef.current && !inputRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    combinedMeasure(`${selectedAmount} ${selectedMeasure}`);
    document.addEventListener('click', handleOutsideClick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedAmount, selectedMeasure]);

  return (
    <div className={css.itemArea}>
      <input
        className={css.inputMeasureValue}
        type="text"
        placeholder="4"
        name="value"
        onChange={handleAmount}
        required
      ></input>
      <div ref={inputRef}>
        <input
          className={css.inputMeasure}
          type="text"
          placeholder="tbs"
          name="measure"
          value={selectedMeasure}
          readOnly
          onFocus={handleInputClick}
          required
        ></input>
        <Arrow className={css.dropdownIcon} onClick={handleInputClick} />
      </div>
      {isOpen && (
        <div className={css.measures}>
          {measures.map((measure, index) => (
            <div key={index} onClick={() => handleOptionClick(measure)}>
              {measure}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default IngredientsMeasureInput;
