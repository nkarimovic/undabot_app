import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Logo from '../assets/undabot_logo.svg';

class Header extends Component {
    render() {
        return (
            <header>
                <Container>
                    <img src={Logo} alt={"undabot"} />
                    <div className="nav">
                        <a href={"/"}>Home</a>
                        <a href={"/contact"}>Contact</a>
                    </div>
                </Container>
            </header>
        );
    }
}

export default Header;