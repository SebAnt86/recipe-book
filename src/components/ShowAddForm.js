import Button from "react-bootstrap/Button";

function ShowAddForm({ onAdd }) {
  return (
    <div className="d-flex justify-content-center mb-5">
      <Button onClick={onAdd}>Add Recipe</Button>
    </div>
  );
}

export default ShowAddForm;
