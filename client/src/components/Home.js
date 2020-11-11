import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Image from "../assets/home_image.png"

class Home extends Component {
    render() {
        return (
            <div className={"home"}>
                <Container>
                    <h1>
                        Homepage for job app assignment
                    </h1>
                    <h3>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum elementum leo. Sed at lacinia nisi.
                        Integer euismod sodales urna, vel iaculis mi lacinia sagittis
                    </h3>
                </Container>

                <section className={"home--image"}>
                    <Container>
                        <img src={Image} alt={"homepage"}/>
                    </Container>
                </section>
            </div>
        );
    }
}

export default Home;