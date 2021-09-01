import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import AddRecipe from "./components/AddRecipe";
import ShowAddForm from "./components/ShowAddForm";

import { useState } from "react";

function App() {
  const [showAddRecipe, setShowAddRecipe] = useState(false);
  const [ingredients, setIngredients] = useState(
[
  {
    id: 1,
    qty: 100,
    unit: "g",
    ingName: "sugar",
  },
  {
    id: 2,
    qty: 6,
    unit: "",
    ingName: "eggs",
  },
  {
    id: 3,
    qty: 250,
    unit: "g",
    ingName: "mascarpone",
  },
  {
    id: 4,
    qty: 1,
    unit: "cup",
    ingName: "chocolate chips",
  },
]
  );

  return (
    <div>
      <Header />
      <ShowAddForm onAdd={() => setShowAddRecipe(!showAddRecipe)}/>
      { showAddRecipe && <AddRecipe ingredients={ingredients}/>}
    </div>
  );
}

export default App;
