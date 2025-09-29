
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Badge from "react-bootstrap/Badge";
import { FaShoppingCart } from "react-icons/fa"; // ícono carrito
import "../css/Navbar.css";

function NavScrollExample() {
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [cartCount, setCartCount] = useState(); // Ejemplo: 3 productos en el carrito

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll) {
        setShow(false); // bajando → ocultar
      } else {
        setShow(true); // subiendo → mostrar
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <Navbar
      expand="lg"
      className={`bg-body-tertiary fixed-top navbar-custom ${
        show ? "show" : "hide"
      }`}
    >
      <Container fluid>
        <Navbar.Brand href="#">Huerto Hogar</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 mb-5"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavDropdown title="H.H" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action1">Blog</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action2">Nosotros</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action3">Mapa</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Catálogo" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action4">Frutas Frescas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Verduras Orgánicas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action6">Productos Orgánicos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action7">Productos Lácteos</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Cuenta" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action7">Inicia Sesión</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action8">Regístrate</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action9">Mi Cuenta</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          {/* Barra de búsqueda */}
          <Form className="d-flex me-3 mb-2">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-primary">Search</Button>
          </Form>

          {/* Carrito */}
          <Button variant="outline-primary" className="position-relative">
            <FaShoppingCart size={20} />
            {cartCount > 0 && (
              <Badge
                bg="danger"
                pill
                className="position-absolute top-0 start-100 translate-middle"
              >
                {cartCount}
              </Badge>
            )}
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;

