import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { ImBin } from "react-icons/im";


function Recipes({ recipes, deleteRecipe }) {
  return (
    <>
      <Container className="mb-3">
        <Accordion className="mx-1 mb-5">
          {recipes.map((recipe) => (
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
                    <Col>{recipe.serves}</Col>
                  </Col>
                </div>
                <Row className="mt-4 g-3">
                  <Col md={6} className="px-4 mb-3">
                    <h4>Ingredients</h4>
                    <Container className="ps-0 mt-4 d-flex justify-content-between">
                      <h6>Number of servings</h6>
                      <div>+ 4 -</div>
                    </Container>
                    {/* {recipe.ingredients.map((ingr) => (
                      <Row>
                        <Col>
                          <span>{ingr.ingQty}</span>
                          <span className="me-2">{ingr.unit}</span>

                          <span className="mx-2">{ingr.ingName}</span>
                        </Col>
                      </Row>
                    ))} */}
                  </Col>
                  <Col md={6} className="px-4 mb-3">
                  <h4>Method</h4>
                    <Container className="ps-0 mt-4">{recipe.method}</Container>
                  </Col>
                </Row>
                <div className="text-end mt-3">
                    {/* <Button variant="outline-danger"  className="mb-1 "> */}
                        <ImBin className="btn-delete px-2 py-1" title="Delete recipe" onClick={() => deleteRecipe(recipe.id)}/>
                    {/* </Button> */}
                </div>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </>
  );
}

export default Recipes;
