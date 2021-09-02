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

function AddRecipe({
  ingredients,
  deleteIngredient,
  addIngredient,
  addRecipe,
}) {
  // Bootstrap validation state
  const [validated, setValidated] = useState(false);

  // Recipe form states
  const [recipeName, setRecipeName] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [servingPpl, setServingPpl] = useState("");
  const [method, setMethod] = useState("");
  const [ingrList, setIngrList] = useState([]);

  const handleSubmit = (event) => {
    // Bootstrap validation
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  // fanction to add and display the new recipe
  const onAdd = (e) => {
    e.preventDefault();

    if(!recipeName || !servingPpl){
        alert("missing recipe name or serves");
    }else{
        addRecipe({
            recipeName,
            prepTime,
            cookingTime,
            serves: servingPpl,
            // ingrList,
            method,
          });
      
          //reset form fields
          setRecipeName("");
          setPrepTime("");
          setCookingTime("");
          setServingPpl("");
          setMethod("");
    }
    
  };

  return (
    <Form
      className="mx-5 mb-5"
      noValidate
      validated={validated}
      onSubmit={onAdd}
    >
      {/* recipe name */}
      <Row className="g-3 mb-3">
        <Col xl={6}>
          <Form.Floating className="mb-3">
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
            {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
            <Form.Control.Feedback type="invalid">
              Please choose a recipe name.
            </Form.Control.Feedback>
          </Form.Floating>
        </Col>

        {/* method time */}
        <Col md>
          <Form.Floating className="mb-3">
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
        <Col md>
          <Form.Floating className="mb-3">
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
        <Col md>
          <Form.Floating className="mb-3">
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
            <Form.Control.Feedback type="invalid">
              Please add the serveing number.
            </Form.Control.Feedback>
          </Form.Floating>
        </Col>
      </Row>

      {/* ingredients */}
      <Ingredients
        key={ingredients.id}
        ingredients={ingredients}
        deleteIngredient={deleteIngredient}
        addIngredient={addIngredient}
        setIngrList={setIngrList}
        ingrList={ingrList}
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
