import Button from "react-bootstrap/Button";

function ShowAddForm({ onAdd, showAddRecipe }) {
  return (
    <div className="d-flex justify-content-center mb-5">
      {/* <Button onClick={onAdd} variant={showAddRecipe ? "danger" : "success"} size="lg">
      {showAddRecipe ? "CLOSE FORM" : "ADD RECIPE"}
      </Button> */}
      {!showAddRecipe && (<Button onClick={onAdd} variant="success" size="lg">
      ADD RECIPE
      </Button>)}
      
    </div>
  );
}

export default ShowAddForm;
