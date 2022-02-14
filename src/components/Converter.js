/* eslint-disable */
import React, { useEffect, useState } from 'react';
import dayJs from 'dayjs';
import InputConvert from './inputConvert';
import HelperBtn from './helperBtn';
import ConversionModal from './conversionModal';

import {URL_BASE,access_key} from './apiKey';

const Converter = () => {
  const [currentOptions, setCurrentOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [exchange, setExchange] = useState();
  const [amount, setAmount] = useState(0);
  const [amountInFromCurrency, SetAmountInFromCurrency] = useState();
  const [reversExchange, setReversExchange] = useState(true);

  let fromAmount, toAmount;
  if (amountInFromCurrency) {
    fromAmount = amount
    toAmount = amount * exchange
  } else {
    toAmount = amount
    fromAmount = amount / exchange
  }
  console.log(toAmount);

  useEffect(() => {
    fetch(`${URL_BASE}${access_key}`)
      .then(res => {
        if (res.ok){
          return res.json()
        }else {
          //todo: add modal Error here
        }
      })
      .then(data => {
        const ferstCurrency = Object.keys(data.rates)[0]
        setCurrentOptions([data.base, ...Object.keys(data.rates)])
        // console.log(data);
        setFromCurrency(data.base)
        setToCurrency(ferstCurrency)
        setExchange(data.rates[ferstCurrency])
      })
      .catch(error => {
        throw(error);
      });
  }, []);

  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      fetch(`${URL_BASE}${access_key}&from=${fromCurrency}&to=${toCurrency}`)
        .then(res => res.json())
        .then(data => setExchange(data.rates[toCurrency]))
    }
  }, [fromCurrency, toCurrency])

  const handleFromAmount = (e) => {
    setAmount(e.target.value);
    SetAmountInFromCurrency(true)

  }
  const handleToAmount = (e) => {
    setAmount(e.target.value);
    SetAmountInFromCurrency(false)

  }

  return (
    <section className="convert__section">
      <div className="convert__box">
        {reversExchange
          ? <div className="convert__boxInput">
            <InputConvert
              currentOptions={currentOptions}
              selectOptions={fromCurrency}
              onChangeCurrency={e => setFromCurrency(e.target.value)}
              amount={fromAmount}
              onChangeAmount={handleFromAmount}
            />
            <div/>
            <InputConvert
              currentOptions={currentOptions}
              selectOptions={toCurrency}
              onChangeCurrency={e => setToCurrency(e.target.value)}
              amount={toAmount}
              onChangeAmount={handleToAmount}
            />
            <div>
              <p>{fromAmount} {fromCurrency} = {toCurrency} {toAmount} as of {`${dayJs().format(`MMM DD YYYY`)}`}</p>
             <HelperBtn
               changeBtn={() => setReversExchange(false)}
              btnText="Reserve Currencies"
             />
            </div>
          </div>

          : <div className="convert__boxInput">
            <InputConvert
              currentOptions={currentOptions}
              selectOptions={toCurrency}
              onChangeCurrency={e => setToCurrency(e.target.value)}
              amount={toAmount}
              onChangeAmount={handleToAmount}
            />
            <div/>
            <InputConvert
              currentOptions={currentOptions}
              selectOptions={fromCurrency}
              onChangeCurrency={e => setFromCurrency(e.target.value)}
              amount={fromAmount}
              onChangeAmount={handleFromAmount}
            />
            <div>
              <p>{fromAmount} {fromCurrency} = {toCurrency} {toAmount} as of {`${dayJs().format(`MMM DD YYYY`)}`}</p>
              <HelperBtn
                changeBtn={() => setReversExchange(true)}
                btnText="Reserve Currencies"
              />
            </div>
          </div>
        }
      </div>
      <ConversionModal />
    </section>
  );
};

export default Converter;
