import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import AddRecipe from "./components/AddRecipe";
import ShowAddForm from "./components/ShowAddForm";

import { useState } from "react";

function App() {
  const [showAddRecipe, setShowAddRecipe] = useState(false);
  const [ingredients, setIngredients] = useState([
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
  const deleteIngredient = (id) => {
    // console.log("delete", id);
    setIngredients(ingredients.filter((ingredient) => ingredient.id !== id));
  };

  // Add ingredient
  const addIngredient = (ingr) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    // console.log(id);
    const newIngredient = {id, ...ingr};
    setIngredients([...ingredients, newIngredient])
  }

  return (
    <div>
      <Header />
      <ShowAddForm onAdd={() => setShowAddRecipe(!showAddRecipe)} />
      {showAddRecipe && (
        <AddRecipe
          ingredients={ingredients}
          deleteIngredient={deleteIngredient}
          addIngredient ={addIngredient}
        />
      )}
    </div>
  );
}

export default App;
