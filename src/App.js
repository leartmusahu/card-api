import React from "react";
import CardList from "./components/CardList";
import CreateCard from "./components/CreateCard";

const App = () => {
  return (
    <div>
      <CreateCard />
      <CardList />
    </div>
  );
};

export default App;
