import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function CustomCarousel() {
  return (
    <Carousel>
      {/* Slide 1: 3 cards */}
      <Carousel.Item>
        <div className="carousel-cards d-flex justify-content-center gap-3 flex-wrap mb-5">
          <Card className="carousel-card">
            <Card.Img variant="top" src="/" />
            <Card.Body>
              <Card.Title>Producto 1</Card.Title>
              <Card.Text>Descripción breve del producto 1.</Card.Text>
              <Button variant="primary">Ver más</Button>
            </Card.Body>
          </Card>

          <Card className="carousel-card">
            <Card.Img variant="top" src="/" />
            <Card.Body>
              <Card.Title>Producto 2</Card.Title>
              <Card.Text>Descripción breve del producto 2.</Card.Text>
              <Button variant="success">Ver más</Button>
            </Card.Body>
          </Card>

          <Card className="carousel-card">
            <Card.Img variant="top" src="/" />
            <Card.Body>
              <Card.Title>Producto 3</Card.Title>
              <Card.Text>Descripción breve del producto 3.</Card.Text>
              <Button variant="warning">Ver más</Button>
            </Card.Body>
          </Card>
        </div>
      </Carousel.Item>

      {/* Slide 2: 3 cards */}
      <Carousel.Item>
        <div className="carousel-cards d-flex justify-content-center gap-3 flex-wrap mb-5">
          <Card className="carousel-card">
            <Card.Img variant="top" src="/" />
            <Card.Body>
              <Card.Title>Producto 4</Card.Title>
              <Card.Text>Descripción breve del producto 4.</Card.Text>
              <Button variant="primary">Ver más</Button>
            </Card.Body>
          </Card>

          <Card className="carousel-card">
            <Card.Img variant="top" src="/" />
            <Card.Body>
              <Card.Title>Producto 5</Card.Title>
              <Card.Text>Descripción breve del producto 5.</Card.Text>
              <Button variant="success">Ver más</Button>
            </Card.Body>
          </Card>

          <Card className="carousel-card">
            <Card.Img variant="top" src="/" />
            <Card.Body>
              <Card.Title>Producto 6</Card.Title>
              <Card.Text>Descripción breve del producto 6.</Card.Text>
              <Button variant="warning">Ver más</Button>
            </Card.Body>
          </Card>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default CustomCarousel;
