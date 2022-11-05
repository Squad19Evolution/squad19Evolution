import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import './teste.css'

function Menu() {
    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src="img/logo_juice.png"
                        width="55"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Home</Nav.Link>
                        <Nav.Link href="#pricing">Sobre a Orange</Nav.Link>
                        <Nav.Link href="#deets">Trilhas</Nav.Link>
                        <Button variant="outline-success" className='abacate'>Cadastre-se</Button>
                    </Nav>
                    <Button className='abacate' variant="outline-success" >Cadastre-se</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );




}

export default Menu