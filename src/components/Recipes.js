import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//import Button from "react-bootstrap/Button";

import { ImBin } from "react-icons/im";
import { IoMdAddCircleOutline } from "react-icons/io";
import { HiOutlineMinusCircle } from "react-icons/hi";

function Recipes({ recipes, setRecipes, deleteRecipe }) {
  
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

  return (
    <>
      {recipes.length > 0 ? (
        <Container className="mb-3">
          {/* <Accordion className="mx-1 mb-5"> */}
          {recipes.map((recipe) => (
            <Accordion className="mx-1 mb-5">
              <Accordion.Item eventKey={recipe.id}>
                <Accordion.Header>
                  {recipe.recipeName.toUpperCase()}
                </Accordion.Header>
                <Accordion.Body>
                  <div className="d-flex justify-content-between mb-3 ">
                    <Col className="text-center">
                      <Col>Prep</Col>
                      <Col>{recipe.prepTime}</Col>
                    </Col>
                    <Col className="text-center">
                      <Col>Cooking</Col>
                      <Col>{recipe.cookingTime}</Col>
                    </Col>
                    <Col className="text-center">
                      <Col>Serves</Col>
                      <Col>{recipe.servesOrigin}</Col>
                    </Col>
                  </div>
                  <Row className="mt-4 g-3">
                    <Col md={6} className="px-2 mb-3">
                      <h4>Ingredients</h4>
                      <Container className="ps-0 mt-4 d-flex justify-content-between">
                        <h6>Number of servings</h6>
                        <div>
                          <HiOutlineMinusCircle
                            className="btn-operators"
                            onClick={() => decreaseServes(recipe.id)}
                          />
                          <span className="mx-1">{recipe.serves}</span>
                          <IoMdAddCircleOutline
                            className="btn-operators"
                            onClick={() => increaseServes(recipe.id)}
                          />
                        </div>
                      </Container>
                      {recipe.ingredients.length > 0 ? (
                        recipe.ingredients.map((ingr) => (
                          <Row>
                            <Col>
                              <span>{ingr.ingPerServe * recipe.serves}</span>
                              <span className="me-2">{ingr.unit}</span>
                              <span className="mx-2">{ingr.ingName}</span>
                            </Col>
                          </Row>
                        ))
                      ) : (
                        <p className="mb-5 disabled">No Ingredients To Show.</p>
                      )}
                    </Col>
                    <Col md={6} className="px-2 mb-3">
                      <h4>Method</h4>
                      <Container className="ps-0 mt-4">
                        {recipe.method}
                      </Container>
                    </Col>
                  </Row>
                  <div className="text-end mt-3">
                    <ImBin
                      className="btn-delete px-2 py-1"
                      title="Delete recipe"
                      onClick={() => deleteRecipe(recipe.id)}
                    />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          ))}
          {/* </Accordion> */}
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
