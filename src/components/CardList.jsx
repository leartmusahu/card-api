import React, { useEffect, useState } from "react";
import axios from "axios";

const CardList = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/cards")
      .then((response) => setCards(response.data))
      .catch((error) => console.error("Error fetching cards:", error));
  }, []);

  return (
    <div className="mt-20">
      <ul className="border">
        {cards.map((card) => (
          <li className="border" key={card.id}>
            {card.cardholderName} - {card.cardType}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardList;
