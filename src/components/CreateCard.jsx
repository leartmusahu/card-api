import React, { useState } from "react";
import axios from "axios";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";

const CreateCard = () => {
  const [cardholderName, setCardholderName] = useState("");
  const [cardType, setCardType] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [balance, setBalance] = useState("");
  const [number, setNumber] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/api/cards", {
        cardholderName,
        cardType,
        expirationDate,
        balance,
      })
      .then((response) => console.log("Card created:", response.data))
      .catch((error) => console.error("Error creating card:", error));
  };

  return (
    <>
      <div className="mt-20">
        <Cards
          number={number}
          name={cardholderName}
          expiry={expirationDate}
          cvc={cvc}
          focused={focus}
        />
        <form onSubmit={handleSubmit} className="p-10 justify-center flex">
          <input
            type="text"
            value={cardholderName}
            onChange={(e) => setCardholderName(e.target.value)}
            placeholder="Cardholder Name"
            required
            onFocus={(e) => setFocus(e.target.name)}
            name="name"
          />
          <input
            type="text"
            value={cardType}
            onChange={(e) => setCardType(e.target.value)}
            placeholder="Card Type"
          />
          <input
            type="text"
            value={expirationDate}
            onChange={(e) => setExpirationDate(e.target.value)}
            placeholder="Expiration Date (MM/YY)"
            onFocus={(e) => setFocus(e.target.name)}
            name="expiry"
          />
          <input
            type="number"
            value={balance}
            onChange={(e) => setBalance(e.target.value)}
            placeholder="Balance"
          />
          <input
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Card Number"
            onFocus={(e) => setFocus(e.target.name)}
            name="number"
          />
          <input
            type="text"
            value={cvc}
            onChange={(e) => setCvc(e.target.value)}
            placeholder="CVC"
            onFocus={(e) => setFocus(e.target.name)}
            name="cvc"
          />
          <button type="submit" className="border rounded-xl p-2 bg-gray-200">
            Create Card
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateCard;
