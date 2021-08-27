import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import AddRecipe from "./components/AddRecipe";
import ShowAddForm from "./components/ShowAddForm";

import { useState } from "react";

function App() {
  const [showAddRecipe, setShowAddRecipe] = useState(false);


  return (
    <div>
      <Header />
      <ShowAddForm onAdd={() => setShowAddRecipe(!showAddRecipe)}/>
      { showAddRecipe && <AddRecipe />}
    </div>
  );
}

export default App;
