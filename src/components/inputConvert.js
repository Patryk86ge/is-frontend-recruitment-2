/* eslint-disable */
import React from 'react';

const InputConvert = (props) => {
  const {
    currentOptions,
    selectOptions,
    onChangeCurrency,
    amount,
    onChangeAmount,
  } = props
  return (
    <div className="selectOptions__converter">
        <select className="selectOptions" value={selectOptions} onChange={onChangeCurrency}>
          {
            currentOptions.map((option,i) => {
              return (
                <option key={i} value={option}>{option}</option>
                )
            })
          }
        </select>
        <input className="input" type="number" value={amount} onChange={onChangeAmount}/>
    </div>
  );
};

export default InputConvert;
