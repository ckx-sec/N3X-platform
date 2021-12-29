import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/nex2.jpg";
import Particle from "../Particle";
import Type from "./Type";
import Honor from "./Honor";
function Home() {
  return (
    <section>
      <Container fluid className="about-section" id="home">
      <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Welcome !
              </h1>

              <h1 className="heading-name">
                
                <strong className="main-name">N3X visitroom </strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={homeLogo} alt="home pic" className="img-fluid" />
            </Col>
          </Row>
          
        </Container>
        <Container className="home-content">
        <h1 style={{ paddingBottom: 15 }} className="heading">
        Our Recent Honor
        </h1>
        
        <Honor />
        
        </Container>
      </Container>
    </section>
  );
}

export default Home;
