import { useState } from "react";
import Ingredients from "./Ingredients";
//import AddRecipe from "./AddRecipe";

import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import { ImBin } from "react-icons/im";
import { IoMdAddCircleOutline } from "react-icons/io";
import { HiOutlineMinusCircle } from "react-icons/hi";

function Recipes({ recipes, setRecipes, deleteRecipe }) {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const [recipeName, setRecipeName] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [serves, setServes] = useState("");
  const [method, setMethod] = useState("");

  const [servesOrigin, setServesOrigin] = useState("");
  const [ingrList, setIngrList] = useState([]);

  const increaseServes = (id) => {
    const updatedRecipe = recipes.map((recipe) => {
      if (recipe.id === id) {
        return { ...recipe, serves: parseInt(recipe.serves) + 1 };
      }
      return recipe;
    });
    setRecipes(updatedRecipe);
  };

  const decreaseServes = (id) => {
    const updatedRecipe = recipes.map((recipe) => {
      if (recipe.id === id) {
        return {
          ...recipe,
          serves: parseInt(recipe.serves) > 1 ? parseInt(recipe.serves) - 1 : 1,
        };
      }
      return recipe;
    });
    setRecipes(updatedRecipe);
  };

  const servesReset = (id) => {
    const updatedRecipe = recipes.map((recipe) => {
      if (recipe.id === id) {
        return { ...recipe, serves: parseInt(recipe.servesOrigin) };
      }
      return recipe;
    });
    setRecipes(updatedRecipe);
  };

  const updateRecipe = (id) => {
    const updatedRecipe = recipes.map((recipe) => {
      if (recipe.id === id) {
        return {
          ...recipe,
          recipeName: !recipeName ? recipe.recipeName : recipeName,
          method: !method ? recipe.method : method,
          prepTime: !prepTime ? recipe.prepTime : prepTime,
          cookingTime: !cookingTime ? recipe.cookingTime : cookingTime,
          serves: !serves ? recipe.serves : serves,
          servesOrigin: !servesOrigin ? recipe.servesOrigin : servesOrigin,
        };
      }
      return recipe;
    });

    console.log(updatedRecipe);

    setRecipes(updatedRecipe);
  };

  return (
    <>
      {recipes.length > 0 ? (
        <Container className="mb-3">
          <Accordion className=" mb-5">
            {recipes.map((recipe) => (
              <Accordion.Item eventKey={recipe.id} key={recipe.id}>
                <Accordion.Header onClick={() => servesReset(recipe.id)}>
                  {recipe.recipeName.toUpperCase()}
                </Accordion.Header>
                <Accordion.Body className="px-3">
                  <div className="d-flex justify-content-between mb-3">
                    <Col className="text-center recipe-info">
                      <Col>Prep</Col>
                      <Col className="f-bold">{recipe.prepTime}</Col>
                    </Col>
                    <Col className="text-center recipe-info">
                      <Col>Cooking</Col>
                      <Col className="f-bold">{recipe.cookingTime}</Col>
                    </Col>
                    <Col className="text-center recipe-info">
                      <Col>Serves</Col>
                      <Col className="f-bold">{recipe.servesOrigin}</Col>
                    </Col>
                  </div>
                  <Row className="mt-4 justify-content-around">
                    <Col md={5} className="p-3 pb-5 mb-3 recipe-sections">
                      <h4 className="f-bold">Ingredients</h4>
                      <Container className="px-0 my-4 d-flex justify-content-between">
                        <h6 className="f-bold">Number of servings</h6>
                        <div>
                          <HiOutlineMinusCircle
                            className="btn-operators"
                            onClick={() => decreaseServes(recipe.id)}
                          />
                          <span className="mx-1 f-bold">{recipe.serves}</span>
                          <IoMdAddCircleOutline
                            className="btn-operators"
                            onClick={() => increaseServes(recipe.id)}
                          />
                        </div>
                      </Container>
                      {recipe.ingredients.map((ingr) => (
                        <Row key={ingr.ingId} className="mx-1 recipe-ing-list">
                          <Col className="recipe-ing p-1">
                            <span>
                              {Math.round(
                                ingr.ingPerServe * recipe.serves * 10
                              ) / 10}
                            </span>
                            <span className="me-2"> {ingr.unit}</span>
                            <span className="">{ingr.ingName}</span>
                          </Col>
                        </Row>
                      ))}
                    </Col>
                    <Col md={5} className="p-3 pb-5 mb-3 recipe-sections">
                      <h4 className="f-bold">Method</h4>
                      <Container className="px-0 mt-4">
                        {recipe.method}
                      </Container>
                    </Col>
                  </Row>
                  <div className="d-flex justify-content-between mt-3">
                    <Button variant="success" onClick={handleShow} size="sm" className="my-1">
                      EDIT
                    </Button>
                    {/* Edit recipe modal starts here */}
                    <Modal
                      show={showModal}
                      onHide={handleClose}
                      backdrop="static"
                      keyboard={false}
                      size="xl"
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>
                          {" "}
                          {recipe.recipeName.toUpperCase()}
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Form>
                          <Row className="mb-3">
                            <Col xl={6} className="mb-3">
                              <Form.Group>
                                <Form.Label>Recipe Name</Form.Label>
                                <Form.Control
                                  type="text"
                                  defaultValue={recipe.recipeName.toUpperCase()}
                                  onChange={(e) =>
                                    setRecipeName(e.target.value)
                                  }
                                />
                              </Form.Group>
                            </Col>

                            <Col xl={2} className="mb-3">
                              <Form.Group>
                                <Form.Label>Preparation Time</Form.Label>
                                <Form.Control
                                  type="text"
                                  defaultValue={recipe.prepTime}
                                  onChange={(e) => setPrepTime(e.target.value)}
                                />
                              </Form.Group>
                            </Col>

                            <Col xl={2} className="mb-3">
                              <Form.Group>
                                <Form.Label>Cooking Time</Form.Label>
                                <Form.Control
                                  type="text"
                                  defaultValue={recipe.cookingTime}
                                  onChange={(e) =>
                                    setCookingTime(e.target.value)
                                  }
                                />
                              </Form.Group>
                            </Col>

                            <Col xl={2} className="mb-3">
                              <Form.Group>
                                <Form.Label>Serves</Form.Label>
                                <Form.Control
                                  type="number"
                                  defaultValue={recipe.servesOrigin}
                                  onChange={(e) => {
                                    setServes(e.target.value);
                                    setServesOrigin(e.target.value);
                                  }}
                                />
                              </Form.Group>
                            </Col>
                          </Row>

                          <Row className="mb-3">
                            <Col>
                              <Form.Group>
                                <Form.Label>Method</Form.Label>
                                <Form.Control
                                  as="textarea"
                                  defaultValue={recipe.method}
                                  onChange={(e) => setMethod(e.target.value)}
                                />
                              </Form.Group>
                            </Col>
                          </Row>
                        </Form>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button
                          variant="success"
                          type="submit"
                          onClick={() => {
                            updateRecipe(recipe.id);
                            handleClose();
                          }}
                        >
                          SAVE
                        </Button>
                      </Modal.Footer>
                    </Modal>
                    {/* Edit recipe modal ends here */}

                    <ImBin
                      className="btn-delete px-2 py-1"
                      title="Delete recipe"
                      onClick={() => deleteRecipe(recipe.id)}
                    />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Container>
      ) : (
        <div className="text-center pt-5">
          <p className="mx-5">No Recipes to Show.</p>
        </div>
      )}
    </>
  );
}

export default Recipes;
