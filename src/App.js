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
  const [ingrList, setIngrList] = useState([]);

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

  // Delete ingredient from the form
  const deleteIngredient = (id) => {
    // console.log("delete", id);
    setIngrList(ingrList.filter((ingredient) => ingredient.ingId !== id));
  };

  // Add ingredient
  const addIngredient = (qty, unit, ingName, ingPerServe) => {
    const ingId = Math.floor(Math.random() * 1000) + 1;
    // console.log(id);
    const newIngredient = { ingId, qty, unit, ingName, ingPerServe };
    setIngrList([...ingrList, newIngredient]);
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
          ingrList={ingrList}
          setIngrList={setIngrList}
          deleteIngredient={deleteIngredient}
          addIngredient={addIngredient}
        />
      )}
      <div className="main-container">
        <Recipes
          recipes={recipes}
          setRecipes={setRecipes}
          deleteRecipe={deleteRecipe}
          key={recipes.id}
          ingrList={ingrList}
          setIngrList={setIngrList}
          deleteIngredient={deleteIngredient}
          addIngredient={addIngredient}
        />
        <Footer />
      </div>
    </>
  );
}

export default App;
