import "./App.css";
import * as React from "react";
import CurrencyInput from "./CurrencyInput";
import { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

function CurrencyConverter() {
  const [amount1, setAmount1] = useState(0);
  const [amount2, setAmount2] = useState(0);
  const [amount3, setAmount3] = useState(0);
  const [currency1, setcurrency1] = useState("ILS");
  const [currency2, setcurrency2] = useState("USD");
  const [currency3, setcurrency3] = useState("EUR");
  const [rates, setRates] = useState([]);

  useEffect(() => {
  fetch("http://data.fixer.io/api/latest?access_key=Qdz7mcEgHFwAJnrPlnufbhovxFXdNcsq&format=1")
    .then((response) => response.json())
    .then((response) => console.log({response}))
    .then((response) => response.data && setRates(response.data.rates));

  }, []);

  function handleAmount1Change(amount1) {
    setAmount2((amount1 * rates[currency2]) / rates[currency1]);
    setAmount3((amount1 * rates[currency3]) / rates[currency1]);
    setAmount1(amount1);
  }

  function handleCurrency1Change(currency1) {
    setAmount2((amount1 * rates[currency2]) / rates[currency1]);
    setAmount3((amount1 * rates[currency3]) / rates[currency1]);
    setcurrency1(currency1);
  }

  function handleAmount2Change(amount2) {
    setAmount1((amount2 * rates[currency1]) / rates[currency2]);
    setAmount3((amount2 * rates[currency3]) / rates[currency2]);
    setAmount2(amount2);
  }

  function handleCurrency2Change(currency2) {
    setAmount1((amount2 * rates[currency1]) / rates[currency2]);
    setAmount3((amount2 * rates[currency3]) / rates[currency2]);
    setcurrency2(currency2);
  }

  function handleAmount3Change(amount3) {
    setAmount1((amount3 * rates[currency1]) / rates[currency3]);
    setAmount2((amount3 * rates[currency2]) / rates[currency3]);
    setAmount3(amount3);
  }

  function handleCurrency3Change(currency3) {
    setAmount1((amount1 * rates[currency1]) / rates[currency3]);
    setAmount2((amount2 * rates[currency2]) / rates[currency3]);
    setcurrency3(currency3);
  }

  return (
    <Container>
      <div>
        <div class="position-absolute top-50 start-50 translate-middle">
          <h2>Online Currency converter</h2>
          <CurrencyInput
            name
            onAmountChange={handleAmount1Change}
            onCurrencyChange={handleCurrency1Change}
            currencies={Object.keys(rates)}
            amount={amount1}
            currency={currency1}
          />

          <CurrencyInput
            onCurrencyChange={handleCurrency2Change}
            onAmountChange={handleAmount2Change}
            currencies={Object.keys(rates)}
            amount={amount2}
            currency={currency2}
          />

          <CurrencyInput
            onCurrencyChange={handleCurrency3Change}
            onAmountChange={handleAmount3Change}
            currencies={Object.keys(rates)}
            amount={amount3}
            currency={currency3}
          />
        </div>
      </div>
    </Container>
  );
}

export default CurrencyConverter;
