import { useState } from "react";
import Ingredients from "./Ingredients";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { BsClockHistory } from "react-icons/bs";
import { BsClock } from "react-icons/bs";
import { FaUtensils } from "react-icons/fa";
import { GiCampCookingPot } from "react-icons/gi";

function AddRecipe({ addRecipe }) {
  // validation states
  const [recipeNameValid, setRecipeNameValid] = useState(false);
  const [servesValid, setServesValid] = useState(false);
  const [ingredientsValid, setIngredientsValid] = useState(false);

  // state to clear ingredients list after submitting the form
  const [clearIgredients, setClearIngredients] = useState(false);

  // Recipe form states
  const [recipeName, setRecipeName] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [servingPpl, setServingPpl] = useState("");
  const [method, setMethod] = useState("");

  const [ingrList, setIngrList] = useState([
    // {
    //         ingId: 4,
    //         qty: 200,
    //         unit: "ml",
    //         ingName: "tomato",
    //       },
    //       {
    //         ingId: 8,
    //         qty: 200,
    //         unit: "g",
    //         ingName: "bechamel",
    //       },
    //       {
    //         ingId: 6,
    //         qty: 300,
    //         unit: "g",
    //         ingName: "cheese",
    //       },
  ]);

  // fanction to add and display the new recipe
  const onAdd = (e) => {
    e.preventDefault();

    if (!recipeName || !servingPpl || (ingrList.length <= 0)) {
      setServesValid(true);
      setRecipeNameValid(true);
      setIngredientsValid(true);
    } else {
      addRecipe({
        recipeName,
        prepTime,
        cookingTime,
        serves: servingPpl,
        ingredients: ingrList,
        method,
      });

      //reset form fields
      setRecipeName("");
      setPrepTime("");
      setCookingTime("");
      setServingPpl("");
      setMethod("");
      setServesValid(false);
      setRecipeNameValid(false);
      setIngredientsValid(false);
      setClearIngredients(false);

    }
  };

  // Delete ingredient
  const deleteIngredient = (id) => {
    // console.log("delete", id);
    setIngrList(ingrList.filter((ingredient) => ingredient.ingId !== id));
  };

  // Add ingredient
  const addIngredient = (qty, unit, ingName) => {
    const ingId = Math.floor(Math.random() * 1000) + 1;
    // console.log(id);
    const newIngredient = { ingId, qty, unit, ingName };
    setIngrList([...ingrList, newIngredient]);
  };

  return (
    <Form className="mx-5 mb-5" noValidate onSubmit={onAdd}>
      {/* recipe name */}
      <Row className="g-3 mb-3">
        <Col xl={6} className="mb-3">
          <Form.Floating>
            <Form.Control
              id="recipeName"
              type="text"
              //placeholder="lasagna"
              className="pb-1"
              required
              value={recipeName}
              onChange={(e) => setRecipeName(e.target.value)}
            />
            <label htmlFor="recipeName" className="pt-2">
              Recipe Name *
            </label>
          </Form.Floating>
          <div>
            <Form.Label className="m-0 text-secondary validation-text ps-2">
              Required*
            </Form.Label>
          </div>
          {recipeNameValid && (
            <Form.Label className="m-0 text-danger validation-text ps-2">
              Please add a recipe name.
            </Form.Label>
          )}
        </Col>

        {/* method time */}
        <Col md className="mb-3">
          <Form.Floating>
            <Form.Control
              id="prepTime"
              type="text"
              className="pb-1"
              value={prepTime}
              onChange={(e) => setPrepTime(e.target.value)}
            />
            <label htmlFor="prepTime" className="pt-2">
              <BsClockHistory className="pe-1 pb-1" />
              Preparation Time
            </label>
          </Form.Floating>
        </Col>

        {/* cooking time */}
        <Col md className="mb-3">
          <Form.Floating>
            <Form.Control
              id="cookingTime"
              type="text"
              className="pb-1"
              value={cookingTime}
              onChange={(e) => setCookingTime(e.target.value)}
            />
            <label htmlFor="cookingTime" className="pt-2">
              <BsClock className="pe-1 pb-1" />
              Cooking Time
            </label>
          </Form.Floating>
        </Col>

        {/* serves people */}
        <Col md className="mb-3">
          <Form.Floating>
            <Form.Control
              id="servingPpl"
              type="number"
              className="pb-1"
              required
              value={servingPpl}
              onChange={(e) => setServingPpl(e.target.value)}
            />
            <label htmlFor="servingPpl" className="pt-2">
              <FaUtensils className="pe-1 pb-1" />
              Serves *
            </label>
          </Form.Floating>
          <div>
            <Form.Label className="m-0 text-secondary validation-text ps-2">
              Required*
            </Form.Label>
          </div>
          {servesValid && (
            <Form.Label className="m-0 text-danger validation-text ps-2">
              Please add the serving number.
            </Form.Label>
          )}
        </Col>
      </Row>

      {/* ingredients */}
      {ingredientsValid && (
        <div className="text-center">
          <Form.Label className="m-0 text-danger">
            Please add a ingredients.
          </Form.Label>
        </div>
      )}
      <Ingredients
        key={ingrList.ingId}
        deleteIngredient={deleteIngredient}
        addIngredient={addIngredient}
        ingrList={ingrList}
        clearIgredients={clearIgredients}
        setClearIngredients={setClearIngredients}
      />

      {/* method steps */}
      <Row className="g-3 mb-3">
        <Col>
          <Form.Floating className="mb-3">
            <Form.Control
              id="method"
              as="textarea"
              className="pb-1 textarea"
              value={method}
              onChange={(e) => setMethod(e.target.value)}
            />
            <label htmlFor="method" className="pt-2">
              <GiCampCookingPot className="pe-1 pb-1" />
              Method
            </label>
          </Form.Floating>
        </Col>
      </Row>
      <div className="text-center">
        <Button variant="primary" type="submit" size="lg">
          Save Recipe
        </Button>
      </div>
    </Form>
  );
}

export default AddRecipe;
