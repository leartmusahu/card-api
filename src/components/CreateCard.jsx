// src/components/CreateCard.js
import React, { useState } from "react";
import axios from "axios";

const CreateCard = () => {
  const [cardholderName, setCardholderName] = useState("");
  const [cardType, setCardType] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [balance, setBalance] = useState("");

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={cardholderName}
        onChange={(e) => setCardholderName(e.target.value)}
        placeholder="Cardholder Name"
        required
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
      />
      <input
        type="number"
        value={balance}
        onChange={(e) => setBalance(e.target.value)}
        placeholder="Balance"
      />
      <button type="submit">Create Card</button>
    </form>
  );
};

export default CreateCard;
