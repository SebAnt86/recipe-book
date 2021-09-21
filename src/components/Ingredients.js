import { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//import CloseButton from "react-bootstrap/CloseButton";
import FloatingLabel from "react-bootstrap/FloatingLabel"

import { GiKitchenScale, GiFruitBowl } from "react-icons/gi";
import { BiAbacus } from "react-icons/bi";
import { ImBin } from "react-icons/im";

function Ingredients({
  deleteIngredient,
  addIngredient,
  ingrList,
  servingPpl,
  colSize
}) {
  const [qty, setQty] = useState("");
  const [unit, setUnit] = useState();
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
      const ingPerServe = (qty / servingPpl);
      //console.log("servingPpl:", servingPpl);
      //console.log("ingPerServe:", ingPerServe);
      addIngredient(qty, unit, ingName, ingPerServe);

      //reset the ingredients values
      setQty("");
      setUnit("Select the ingredient unit");
      setIngName("");
      setQtyValidated(false);
      setIngNameValidated(false);
    }
  };

  const unitLabel = (<label htmlFor="ing-name">
  <GiKitchenScale className="pe-1 pb-1 form-icons"/>
  Ing. Unit
</label>);

  return (
    <>
      <Row className="g-3 mb-1 pt-4">
        {/* <Form.Label className="mb-0">Ingredients:</Form.Label> */}

        {/* ingredient name */}
        <Col sm={colSize} className="mt-1 mb-3">
          <Form.Floating>
            <Form.Control
              id="ing-name"
              type="text"
              className="pb-1"
              value={ingName}
              onChange={(e) => setIngName(e.target.value)}
            />
            <label htmlFor="ing-name" className="pt-2">
              <GiFruitBowl className="pe-1 pb-1 form-icons" />
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
        <Col sm={colSize} className="mt-1 mb-3">
          <Form.Floating>
            <Form.Control
              id="qty"
              type="number"
              className="pb-1"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
            />
            <label htmlFor="qty" className="pt-2">
              <BiAbacus className="pe-1 pb-1 form-icons" />
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
        <Col sm={colSize} className="mt-1 mb-3">
          <FloatingLabel controlId="floatingSelect" label={unitLabel}>
            <Form.Select aria-label="Floating label ingredients unit" value={unit}
              onChange={(e) => setUnit(e.target.value)}>
              <option value="">Select the ingredient unit</option>
              <option value="g">gram</option>
              <option value="lb">pound</option>
              <option value="ml">millilitre</option>
              <option value="cups">cup</option>
              <option value="tsp">teaspoon</option>
              <option value="tbs">tablespoon</option>
              <option value=" ">unit</option>
            </Form.Select>
          </FloatingLabel>
          {/* <Form.Floating>
            <Form.Control
              id="unit"
              type="text"
              className="pb-1"
              value={unit}
              onChange={(e) => setUnit(e.target.value.toLowerCase())}
            />
            <label htmlFor="ing-name" className="pt-2">
              <GiKitchenScale className="pe-1 pb-1 form-icons"/>
              Ing. Unit
            </label>
          </Form.Floating> */}
        </Col>
      </Row>

      <Button variant="success" size="sm" className="mb-3" onClick={onAdd}>
        ADD INGREDIENT
      </Button>

      {ingrList.length > 0 ? (
        <ul className="d-flex  flex-wrap ps-0">
          {ingrList.map((ingr) => (
            <li
              className="ing-item mb-3 d-flex justify-content-between align-items-center ps-2 me-1"
              key={ingr.ingId}
            >
              <div className="ingr-display-list">
                <span>{ingr.qty}</span>
                <span> {ingr.unit}</span> <span>{ingr.ingName}</span>
              </div>
              <ImBin
                className="btn-delete-ingr align-self-end mb-1 p-1 ms-2"
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
