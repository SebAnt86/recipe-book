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

function AddRecipe({ ingredients, deleteIngredient , addIngredient }) {
  // Bootstrap validation state
  const [validated, setValidated] = useState(false);

  // Recipe form states
  const [recipeName, setRecipeName] = useState();
  const [prepTime, setPrepTime] = useState();
  const [cookingTime, setCookingTime] = useState();
  const [servingPpl, setServingPpl] = useState();
  const [preparation, setPreparation] = useState();



  const handleSubmit = (event) => {
    // Bootstrap validation
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <Form
      className="mx-5 mb-5"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
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

        {/* preparation time */}
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
      />


      {/* preparation steps */}
      <Row className="g-3 mb-3">
        <Col>
          <Form.Floating className="mb-3">
            <Form.Control
              id="preparation"
              as="textarea"
              className="pb-1 textarea"
              value={preparation}
              onChange={(e) => setPreparation(e.target.value)}
            />
            <label htmlFor="preparation" className="pt-2">
              <GiCampCookingPot className="pe-1 pb-1" />
              Preparation
            </label>
          </Form.Floating>
        </Col>
      </Row>

      <Button variant="primary" type="submit">
        Save Recipe
      </Button>
    </Form>
  );
}

export default AddRecipe;
