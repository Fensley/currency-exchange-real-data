// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect, useState } from "react";

export default function App() {
  const [amount, setAmount] = useState(1);
  const [fromCur, setFromCur] = useState("EUR");
  const [toCur, setToCur] = useState("USD");
  const [converted, setConverted] = useState("");
  const [isloading, setIsloading] = useState(false);

  useEffect(
    function () {
      async function convert() {
        setIsloading(true);
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}=100&from=${fromCur}&to=${toCur}`
        );
        const data = await res.json();
        setConverted(data.rates[toCur]);
        setIsloading(false);
      }
      if (fromCur === toCur) return setConverted(amount);
      convert();
    },
    [toCur, fromCur, amount]
  );
  return (
    <div className="container">
      <section>
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          // disabled={isloading}
          placeholder="Enter your amount"
        />

        <select
          value={fromCur}
          onChange={(e) => setFromCur(e.target.value)}
          disabled={isloading}
        >
          <option value="USD">USD</option>
          <option value="IDR">IDR</option>
          <option value="TRY">TRY</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
          <option value="AUD">AUD</option>
          <option value="GBP">GBP</option>
          <option value="BGN">BGN</option>
          <option value="CHF">CHF</option>
          <option value="CNY">CNY</option>
          <option value="HKD">HKD</option>
        </select>

        <select
          value={toCur}
          onChange={(e) => setToCur(e.target.value)}
          disabled={isloading}
        >
          <option value="USD">USD</option>
          <option value="IDR">IDR</option>
          <option value="TRY">TRY</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
          <option value="AUD">AUD</option>
          <option value="GBP">GBP</option>
          <option value="BGN">BGN</option>
          <option value="CHF">CHF</option>
          <option value="CNY">CNY</option>
          <option value="HKD">HKD</option>
        </select>

        <p>
          {converted} {toCur}
        </p>
      </section>
      <main></main>
    </div>
  );
}
