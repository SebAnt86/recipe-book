import { useState } from "react";
import Ingredients from "./Ingredients";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";

import { BsClockHistory } from "react-icons/bs";
import { BsClock } from "react-icons/bs";
import { FaUtensils } from "react-icons/fa";
import { GiCampCookingPot } from "react-icons/gi";
import { VscBook } from "react-icons/vsc";

function AddRecipe({ addRecipe, setShowAddRecipe }) {
  // validation states
  const [recipeNameValid, setRecipeNameValid] = useState(false);
  const [servesValid, setServesValid] = useState(false);
  const [ingredientsValid, setIngredientsValid] = useState(false);

  // Recipe form states
  const [recipeName, setRecipeName] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [servingPpl, setServingPpl] = useState("");
  const [method, setMethod] = useState("");
  
  const [servesOrigin, setServesOrigin] = useState("");

  const [showAlert, setShowAlert] = useState(false);

  const [ingrList, setIngrList] = useState([]);

  // fanction to add and display the new recipe
  const onAdd = (e) => {
    e.preventDefault();

    if (!recipeName || !servingPpl || (ingrList.length <= 0)) {
      setServesValid(true);
      setRecipeNameValid(true);
      setIngredientsValid(true);
      //alert("Please check the required fields!");
      setShowAlert(true);
    } else {
      setServesOrigin(servingPpl);
      addRecipe({
        recipeName,
        prepTime,
        cookingTime,
        serves: servingPpl,
        ingredients: ingrList,
        method,
        servesOrigin,
      });

      //reset form fields
      setRecipeName("");
      setPrepTime("");
      setCookingTime("");
      setServingPpl("");
      setMethod("");
      setIngrList([]);
      setServesValid(false);
      setRecipeNameValid(false);
      setIngredientsValid(false);
      setShowAddRecipe(false);
      setShowAlert(false);
    }
  };

  // Delete ingredient
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
    <Form className="form-style mx-5 mb-5 p-3" noValidate onSubmit={onAdd}>
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
              <VscBook className="pe-1 pb-1"/>
              Recipe Name *
            </label>
          </Form.Floating>
          <div>
            <Form.Label className="m-0 validation-text ps-2">
              Required*
            </Form.Label>
          </div>
          {recipeNameValid && (
            <Form.Label className="m-0 text-danger validation-text ps-2">
              Please add the recipe name.
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
              onChange={(e) => {
                setServingPpl(e.target.value);
                setServesOrigin(e.target.value);
              }}
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
            Please add ingredients.
          </Form.Label>
        </div>
      )}
      <Ingredients
        key={ingrList.ingId}
        deleteIngredient={deleteIngredient}
        addIngredient={addIngredient}
        ingrList={ingrList}
        servingPpl={servingPpl}
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
      <Alert variant="danger" show={showAlert} >
        Please check the required fields!
      </Alert>
      <div className="text-center">
        <Button variant="success" type="submit" size="lg">
          SAVE RECIPE
        </Button>
      </div>
    </Form>
  );
}

export default AddRecipe;
