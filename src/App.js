import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import AddRecipe from "./components/AddRecipe";
import ShowAddForm from "./components/ShowAddForm";
import Recipes from "./components/Recipes";
import Footer from "./components/Footer";

import { useState, useEffect } from "react";

function App() {
  const [showAddRecipe, setShowAddRecipe] = useState(false);

  const [recipes, setRecipes] = useState([]);

  // Only run once the first time the component is rendered
  useEffect(() => {
    if (localStorage.getItem("recipesData")) {
      setRecipes(JSON.parse(localStorage.getItem("recipesData")));
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
    <>
      <Header />
      <ShowAddForm
        onAdd={() => setShowAddRecipe(!showAddRecipe)}
        showAddRecipe={showAddRecipe}
      />
      {showAddRecipe && (
        <AddRecipe
          key={recipes.id}
          addRecipe={addRecipe}
          setShowAddRecipe={setShowAddRecipe}
        />
      )}
      <div className="main-container">
        <Recipes
          recipes={recipes}
          setRecipes={setRecipes}
          deleteRecipe={deleteRecipe}
          key={recipes.id}
        />
        <Footer />
      </div>
    </>
  );
}

export default App;
