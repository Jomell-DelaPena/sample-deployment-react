import {Nav, Navbar, NavDropdown, Container} from 'react-bootstrap';
import HeaderImage from "./../images/1.png";
const Heading = () => {
    return ( 
        <div>
            <Navbar bg="warning" variant="light">
                <Container>
                <Navbar.Brand href="#home">
                    React Bootstrap
                </Navbar.Brand>
                </Container>
            </Navbar>
            <img src={HeaderImage} className="w-100" alt="" />
        </div>
    );
}

export default Heading;