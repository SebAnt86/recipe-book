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
          <Accordion className=" mb-5">
          {recipes.map((recipe) => (
            // <Accordion className="mx-1 mb-5" key={recipe.id}>
              <Accordion.Item eventKey={recipe.id} key={recipe.id}>
                <Accordion.Header>
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
                              <span>{ingr.ingPerServe * recipe.serves}</span>
                              <span className="me-2">{ingr.unit}</span>
                              <span className="mx-2">{ingr.ingName}</span>
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
                  <div className="text-end mt-3">
                    <ImBin
                      className="btn-delete px-2 py-1"
                      title="Delete recipe"
                      onClick={() => deleteRecipe(recipe.id)}
                    />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            // </Accordion>
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
