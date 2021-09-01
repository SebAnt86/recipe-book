import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import AddRecipe from "./components/AddRecipe";
import ShowAddForm from "./components/ShowAddForm";

import { useState } from "react";

function App() {
  const [showAddRecipe, setShowAddRecipe] = useState(false);
  const [ingrediants, setIngrediants] = useState([
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
  ]);

  // Delete ingredient

const deleteIngrediant = (id) => {
    // console.log("delete", id);
    setIngrediants(ingrediants.filter((ingrediant) => ingrediant.id !== id))
}


  return (
    <div>
      <Header />
      <ShowAddForm onAdd={() => setShowAddRecipe(!showAddRecipe)} />
      {showAddRecipe && <AddRecipe ingrediants={ingrediants} deleteIngrediant={deleteIngrediant}/>}
    </div>
  );
}

export default App;
