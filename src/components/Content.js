import { Container, Row } from "react-bootstrap";
import GridItems from "./GridItems";
import item1 from "./../images/1.png";
import item2 from "./../images/2.png";
import item3 from "./../images/3.jpg";
import item4 from "./../images/4.png";
import item5 from "./../images/5.png";

const Content = () => {
    return ( 
        <div className="bg-dark text-warning">
            <br></br>
            <Container>
                <h1>Top 5 Animes of the week:</h1>
                <br></br>
                <Row>
                    <GridItems image={item1} title="Demon Slayer" />
                    <GridItems image={item2} title="Haikyuu" />
                    <GridItems image={item3} title="Blue Lock" />
                    <GridItems image={item4} title="Kuroko's Basket" />
                    <GridItems image={item5} title="Tokyo Revengers" />
                </Row>
            </Container>
        </div>
    );
}

export default Content;