// src/FilterBar.js
import React from 'react';

const FilterBar = ({ onFilterChange }) => {
  const handleButtonClick = (name, value) => {
    onFilterChange(name, value);
  };

  return (
    <div>
      <h2>主問題篩選</h2>
      <button onClick={() => handleButtonClick('main_question', '領養相關')}>領養相關</button>
      <button onClick={() => handleButtonClick('main_question', '狗狗相關')}>狗狗相關</button>
      
      <h2>小問題篩選</h2>
      <button onClick={() => handleButtonClick('small_question', '如何領養')}>如何領養</button>
      <button onClick={() => handleButtonClick('small_question', '領養費用')}>領養費用</button>
      
      <h2>回答篩選</h2>
      <button onClick={() => handleButtonClick('faq_answer', '有')}>有</button>
      <button onClick={() => handleButtonClick('faq_answer', '沒有')}>沒有</button>
    </div>
  );
};

export default FilterBar;
