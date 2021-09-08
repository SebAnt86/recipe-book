import Button from "react-bootstrap/Button";

function ShowAddForm({ onAdd, showAddRecipe }) {
  return (
    <div className="d-flex justify-content-center mb-5">
      <Button onClick={onAdd} variant={showAddRecipe ? "danger" : "success"} size="lg">
      {showAddRecipe ? "Close Form" : "Add Recipe"}
      </Button>
    </div>
  );
}

export default ShowAddForm;
