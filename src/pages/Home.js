import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Item from "../components/Item";

const Home = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col><Item/></Col>
                    <Col><Item/></Col>
                    <Col><Item/></Col>
                    <Col><Item/></Col>
                </Row>
                <Row>
                    <Col><Item/></Col>
                    <Col><Item/></Col>
                    <Col><Item/></Col>
                    <Col><Item/></Col>
                </Row>
            </Container>
        </div>
    )
};
export default Home;