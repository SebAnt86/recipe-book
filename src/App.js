import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import AddRecipe from "./components/AddRecipe";
import ShowAddForm from "./components/ShowAddForm";
import Recipes from "./components/Recipes";

import { useState, useEffect } from "react";

function App() {
  const [showAddRecipe, setShowAddRecipe] = useState(false);

  const [recipes, setRecipes] = useState([
    // {
    //   id: 1,
    //   recipeName: "Lasagna",
    //   prepTime: "20 mins",
    //   cookingTime: "30 mins",
    //   serves: 4,
    //   ingredients: [
    //     {
    //       ingId: 4,
    //       qty: 200,
    //       unit: "ml",
    //       ingName: "tomato",
    //     },
    //     {
    //       ingId: 6,
    //       qty: 200,
    //       unit: "g",
    //       ingName: "bechamel",
    //     },
    //     {
    //       ingId: 7,
    //       qty: 300,
    //       unit: "g",
    //       ingName: "cheese",
    //     },
    //   ],
    //   method:
    //     "Create a layer of the lasagna with tomato ragú, bechamel and cheese untul the top of the tray.",
    // },
    // {
    //   id: 2,
    //   recipeName: "Spaghetti",
    //   prepTime: "20 mins",
    //   cookingTime: "30 mins",
    //   serves: 4,
    //   ingredients: [
    //     {
    //       ingId: 1,
    //       qty: 200,
    //       unit: "ml",
    //       ingName: "tomato",
    //     },
    //     {
    //       ingId: 2,
    //       qty: 200,
    //       unit: "g",
    //       ingName: "bechamel",
    //     },
    //     {
    //       ingId: 3,
    //       qty: 300,
    //       unit: "g",
    //       ingName: "cheese",
    //     },
    //   ],
    //   method:
    //     "Create a layer of the lasagna with tomato ragú, bechamel and cheese until the top of the tray.",
    // },
    // {
    //   id: 3,
    //   recipeName: "Gnocchi",
    //   prepTime: "20 mins",
    //   cookingTime: "30 mins",
    //   serves: 4,
    //   ingredients: [
    //     {
    //       ingId: 7,
    //       qty: 200,
    //       unit: "ml",
    //       ingName: "tomato",
    //     },
    //     {
    //       ingId: 8,
    //       qty: 200,
    //       unit: "g",
    //       ingName: "bechamel",
    //     },
    //     {
    //       ingId: 9,
    //       qty: 300,
    //       unit: "g",
    //       ingName: "cheese",
    //     },
    //   ],
    //   method:
    //     "Create a layer of the lasagna with tomato ragú, bechamel and cheese untul the top of the tray.",
    // },
  ]);

  // Only run once the first time the component is rendered
  useEffect(() => {
    if(localStorage.getItem("recipesData")) {
        setRecipes(JSON.parse(localStorage.getItem("recipesData")))
    }
  }, []);

  // Run every time our recipe state changes
  useEffect(() => {
    localStorage.setItem("recipesData", JSON.stringify(recipes));
  }, [recipes]);

  // Delete recipe
  const deleteRecipe = (id) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  };

  // Add Recipe
  const addRecipe = (recipe) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newRecipe = { id, ...recipe };
    setRecipes([...recipes, newRecipe]);
  };

  return (
    <div>
      <Header />
      <ShowAddForm onAdd={() => setShowAddRecipe(!showAddRecipe)}  showAddRecipe={showAddRecipe}/>
      {showAddRecipe && <AddRecipe key={recipes.id} addRecipe={addRecipe} setShowAddRecipe={setShowAddRecipe}/>}
      <Recipes
        recipes={recipes}
        setRecipes={setRecipes}
        deleteRecipe={deleteRecipe}
        key={recipes.id}
      />
    </div>
  );
}

export default App;
