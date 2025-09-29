import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

function ProductCard() {
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    alert(`Agregaste ${quantity} producto(s) al carrito`);
    // Aquí puedes llamar a tu función para agregar al carrito real
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk
          of the card's content.
        </Card.Text>

        <div className="d-flex align-items-center">
          {/* Input cantidad */}
          <Form.Control
            type="number"
            min={1}
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
            style={{ width: "60px", marginRight: "10px" }}
          />

          {/* Botón agregar */}
          <Button variant="success" onClick={handleAdd}>
            Agregar
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
