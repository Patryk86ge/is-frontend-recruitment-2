/* eslint-disable */
import React, {useEffect, useState} from 'react';
import {URL_BASE,access_key} from "./apiKey"

const ConversionModal = () => {
  const [ala,SetAla] =useState([])

  useEffect(() => {
    fetch(`${URL_BASE}${access_key}&start_date=2022-021-01&end_date=2022-02-11&base=EUR&symbols=USD,AUD,CAD,PLN,MXN&format=1`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
  }, [])
  return (
    <div>
      <h1>{ala}</h1>
    </div>
  );
};


export default ConversionModal;