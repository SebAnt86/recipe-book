import { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CloseButton from "react-bootstrap/CloseButton";

import { GiKitchenScale, GiFruitBowl } from "react-icons/gi";
import { BiAbacus } from "react-icons/bi";


function Ingredients({
  deleteIngredient,
  addIngredient,
  ingrList,
  servingPpl,
}) {
  const [qty, setQty] = useState("");
  const [unit, setUnit] = useState("");
  const [ingName, setIngName] = useState("");

  //validation states warning messages
  const [qtyValidated, setQtyValidated] = useState(false);
  const [ingNameValidated, setIngNameValidated] = useState(false);

  const onAdd = (e) => {
    e.preventDefault();

    // validation for the ingredients qty and name
    if (!qty || !ingName) {
      setQtyValidated(true);
      setIngNameValidated(true);
    } else {
      const ingPerServe = qty / servingPpl;
      addIngredient(qty, unit, ingName, ingPerServe);

      //reset the ingredients values
      setQty("");
      setUnit("");
      setIngName("");
      setQtyValidated(false);
      setIngNameValidated(false);
    }
  };

  return (
    <>
      <Row className="g-3 mb-1">
        <Form.Label className="mb-0">Ingredients:</Form.Label>

        {/* ingredient name */}
        <Col sm className="mt-1 mb-3">
          <Form.Floating>
            <Form.Control
              id="ing-name"
              type="text"
              className="pb-1"
              value={ingName}
              onChange={(e) => setIngName(e.target.value)}
            />
            <label htmlFor="ing-name" className="pt-2">
              <GiFruitBowl className="pe-1 pb-1"/>
              Ing. Name *
            </label>
          </Form.Floating>
          <div>
            <Form.Label className="m-0 validation-text ps-2">
              Required*
            </Form.Label>
          </div>
          {ingNameValidated && (
            <Form.Label className="m-0 text-danger validation-text ps-2">
              Please add the ingredient name.
            </Form.Label>
          )}
        </Col>

        {/* ingredient qty */}
        <Col sm className="mt-1 mb-3">
          <Form.Floating>
            <Form.Control
              id="qty"
              type="number"
              className="pb-1"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
            />
            <label htmlFor="qty" className="pt-2">
            <BiAbacus className="pe-1 pb-1"/>
              Ing. Quantity *
            </label>
          </Form.Floating>
          <div>
            <Form.Label className="m-0 validation-text ps-2">
              Required*
            </Form.Label>
          </div>
          {qtyValidated && (
            <Form.Label className="m-0 text-danger validation-text ps-2">
              Please add the ingredient quantity.
            </Form.Label>
          )}
        </Col>

        {/* ingredient unit */}
        <Col sm className="mt-1 mb-3">
          <Form.Floating>
            <Form.Control
              id="unit"
              type="text"
              className="pb-1"
              value={unit}
              onChange={(e) => setUnit(e.target.value.toLowerCase())}
            />
            <label htmlFor="ing-name" className="pt-2">
              <GiKitchenScale className="pe-1 pb-1"/>
              Ing. Unit
            </label>
          </Form.Floating>
        </Col>
      </Row>

      <Button variant="success" size="sm" className="mb-3" onClick={onAdd}>
        ADD INGREDIENT
      </Button>

      {ingrList.length > 0 ? (
        <ul className="d-flex  flex-wrap ps-0">
          {ingrList.map((ingr) => (
            <li
              className="ing-item mb-3 d-flex justify-content-between align-items-center px-2 me-2"
              key={ingr.ingId}
            >
              <div>
                <span>{ingr.qty}</span><span>{ingr.unit}</span>{" "}
                <span>{ingr.ingName}</span>
              </div>
              <CloseButton
                className="btn-close ms-2 align-self-start align-self-md-center mt-1"
                onClick={() => deleteIngredient(ingr.ingId)}
                title="Delete ingredient"
              />
            </li>
          ))}
        </ul>
      ) : (
        <p className="mb-5">No Ingredients to Show.</p>
      )}
    </>
  );
}

export default Ingredients;
