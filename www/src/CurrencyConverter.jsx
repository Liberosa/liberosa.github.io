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
    setRates(JSON.parse(`{
      "success": true,
      "timestamp": 1679862724,
      "base": "EUR",
      "date": "2023-03-26",
      "rates": {
          "AED": 3.959471,
          "AFN": 93.53199,
          "ALL": 114.856133,
          "AMD": 418.403524,
          "ANG": 1.944762,
          "AOA": 544.258977,
          "ARS": 221.430447,
          "AUD": 1.62031,
          "AWG": 1.940698,
          "AZN": 1.810997,
          "BAM": 1.965508,
          "BBD": 2.178963,
          "BDT": 113.420226,
          "BGN": 1.96011,
          "BHD": 0.405768,
          "BIF": 2244.524114,
          "BMD": 1.078165,
          "BND": 1.43937,
          "BOB": 7.456102,
          "BRL": 5.656706,
          "BSD": 1.07913,
          "BTC": 3.8723301e-5,
          "BTN": 88.974276,
          "BWP": 14.236461,
          "BYN": 2.723803,
          "BYR": 21132.043286,
          "BZD": 2.175184,
          "CAD": 1.481394,
          "CDF": 2212.395389,
          "CHF": 0.990481,
          "CLF": 0.031669,
          "CLP": 873.852197,
          "CNY": 7.404806,
          "COP": 5121.533979,
          "CRC": 582.439076,
          "CUC": 1.078165,
          "CUP": 28.571385,
          "CVE": 110.803705,
          "CZK": 23.681743,
          "DJF": 191.611207,
          "DKK": 7.45532,
          "DOP": 59.20861,
          "DZD": 146.450519,
          "EGP": 33.268369,
          "ERN": 16.172482,
          "ETB": 58.12474,
          "EUR": 1,
          "FJD": 2.391694,
          "FKP": 0.881674,
          "GBP": 0.881214,
          "GEL": 2.776328,
          "GGP": 0.881674,
          "GHS": 13.218002,
          "GIP": 0.881674,
          "GMD": 66.303772,
          "GNF": 9284.861501,
          "GTQ": 8.420043,
          "GYD": 227.682438,
          "HKD": 8.46355,
          "HNL": 26.615464,
          "HRK": 7.566861,
          "HTG": 167.547582,
          "HUF": 385.516429,
          "IDR": 16351.511484,
          "ILS": 3.874823,
          "IMP": 0.881674,
          "INR": 88.784178,
          "IQD": 1571.798145,
          "IRR": 45552.491215,
          "ISK": 150.406803,
          "JEP": 0.881674,
          "JMD": 162.9126,
          "JOD": 0.764848,
          "JPY": 140.751301,
          "KES": 141.670404,
          "KGS": 94.253349,
          "KHR": 4381.377164,
          "KMF": 497.832212,
          "KPW": 970.348649,
          "KRW": 1397.119513,
          "KWD": 0.330102,
          "KYD": 0.899288,
          "KZT": 493.768914,
          "LAK": 18230.270914,
          "LBP": 16196.523515,
          "LKR": 348.591829,
          "LRD": 173.638538,
          "LSL": 19.859332,
          "LTL": 3.183543,
          "LVL": 0.652172,
          "LYD": 5.135366,
          "MAD": 11.054884,
          "MDL": 19.978737,
          "MGA": 4653.532389,
          "MKD": 61.925876,
          "MMK": 2266.024628,
          "MNT": 3807.211841,
          "MOP": 8.724946,
          "MRO": 384.904889,
          "MUR": 49.606225,
          "MVR": 16.60156,
          "MWK": 1108.266222,
          "MXN": 19.860275,
          "MYR": 4.774147,
          "MZN": 68.031195,
          "NAD": 19.8597,
          "NGN": 496.473379,
          "NIO": 39.474982,
          "NOK": 10.431262,
          "NPR": 142.358601,
          "NZD": 1.737326,
          "OMR": 0.414238,
          "PAB": 1.0791,
          "PEN": 4.068733,
          "PGK": 3.8025,
          "PHP": 58.531463,
          "PKR": 305.24621,
          "PLN": 4.686056,
          "PYG": 7751.713515,
          "QAR": 3.92563,
          "RON": 4.932774,
          "RSD": 117.323802,
          "RUB": 83.320492,
          "RWF": 1184.965074,
          "SAR": 4.050129,
          "SBD": 8.841134,
          "SCR": 14.070897,
          "SDG": 639.890522,
          "SEK": 11.22602,
          "SGD": 1.436995,
          "SHP": 1.311858,
          "SLE": 22.398839,
          "SLL": 21293.768075,
          "SOS": 614.016924,
          "SRD": 38.225305,
          "STD": 22315.8485,
          "SVC": 9.442333,
          "SYP": 2708.923227,
          "SZL": 19.683223,
          "THB": 36.897001,
          "TJS": 11.772676,
          "TMT": 3.773579,
          "TND": 3.373597,
          "TOP": 2.535518,
          "TRY": 20.470573,
          "TTD": 7.339709,
          "TWD": 32.706045,
          "TZS": 2525.019352,
          "UAH": 39.851887,
          "UGX": 4071.108771,
          "USD": 1.078165,
          "UYU": 42.076466,
          "UZS": 12310.807813,
          "VEF": 2614956.842084,
          "VES": 25.97912,
          "VND": 25363.842771,
          "VUV": 127.233234,
          "WST": 3.005734,
          "XAF": 659.216381,
          "XAG": 0.046415,
          "XAU": 0.000545,
          "XCD": 2.913796,
          "XDR": 0.808553,
          "XOF": 659.250176,
          "XPF": 121.024476,
          "YER": 269.870317,
          "ZAR": 19.598351,
          "ZMK": 9704.782674,
          "ZMW": 22.854662,
          "ZWL": 347.168843
      }
  }
  `).rates);
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
