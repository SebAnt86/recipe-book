import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import AddRecipe from "./components/AddRecipe";
import ShowAddForm from "./components/ShowAddForm";
import Recipes from "./components/Recipes";

import { useState } from "react";

function App() {
  const [showAddRecipe, setShowAddRecipe] = useState(false);
  const [ingredients, setIngredients] = useState([
    // {
    //   id: 1,
    //   qty: 100,
    //   unit: "g",
    //   ingName: "sugar",
    // },
    // {
    //   id: 2,
    //   qty: 6,
    //   unit: "",
    //   ingName: "eggs",
    // },
    // {
    //   id: 3,
    //   qty: 250,
    //   unit: "g",
    //   ingName: "mascarpone",
    // },
    // {
    //   id: 4,
    //   qty: 1,
    //   unit: "cup",
    //   ingName: "chocolate chips",
    // },
  ]);

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
    //       ingQty: 200,
    //       unit: "ml",
    //       ingName: "tomato",
    //     },
    //     {
    //       ingId: 6,
    //       ingQty: 200,
    //       unit: "g",
    //       ingName: "bechamel",
    //     },
    //     {
    //       ingId: 6,
    //       ingQty: 300,
    //       unit: "g",
    //       ingName: "cheese",
    //     },
    //   ],
    //   method:
    //     "Create a layer of the lasagna with tomato ragú, bechamel and cheese untul the top of the tray.",
    // },
    // {
    //   id: 2,
    //   recipeName: "Lasagna",
    //   prepTime: "20 mins",
    //   cookingTime: "30 mins",
    //   serves: 4,
    //   ingredients: [
    //     {
    //       ingId: 1,
    //       ingQty: 200,
    //       unit: "ml",
    //       ingName: "tomato",
    //     },
    //     {
    //       ingId: 2,
    //       ingQty: 200,
    //       unit: "g",
    //       ingName: "bechamel",
    //     },
    //     {
    //       ingId: 3,
    //       ingQty: 300,
    //       unit: "g",
    //       ingName: "cheese",
    //     },
    //   ],
    //   method:
    //     "Create a layer of the lasagna with tomato ragú, bechamel and cheese untul the top of the tray.",
    // },
    // {
    //   id: 3,
    //   recipeName: "Lasagna",
    //   prepTime: "20 mins",
    //   cookingTime: "30 mins",
    //   serves: 4,
    //   ingredients: [
    //     {
    //       ingId: 7,
    //       ingQty: 200,
    //       unit: "ml",
    //       ingName: "tomato",
    //     },
    //     {
    //       ingId: 8,
    //       ingQty: 200,
    //       unit: "g",
    //       ingName: "bechamel",
    //     },
    //     {
    //       ingId: 9,
    //       ingQty: 300,
    //       unit: "g",
    //       ingName: "cheese",
    //     },
    //   ],
    //   method:
    //     "Create a layer of the lasagna with tomato ragú, bechamel and cheese untul the top of the tray.",
    // },
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
    const newIngredient = { id, ...ingr };
    setIngredients([...ingredients, newIngredient]);
  };

  // Delete recipe
  const deleteRecipe = (id) => {
    //console.log("delete", id);
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  };

  // Add Recipe
  const addRecipe = (recipe) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    // console.log(id);
    const newRecipe = { id, ...recipe };
    setRecipes([...recipes, newRecipe]);
  };

  return (
    <div>
      <Header />
      <ShowAddForm onAdd={() => setShowAddRecipe(!showAddRecipe)} />
      {showAddRecipe && (
        <AddRecipe
          ingredients={ingredients}
          deleteIngredient={deleteIngredient}
          addIngredient={addIngredient}
          addRecipe={addRecipe}
        />
      )}
      <Recipes recipes={recipes} deleteRecipe={deleteRecipe} key={recipes.id} />
    </div>
  );
}

export default App;
