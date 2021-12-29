import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
// import Github from "./Github";
// import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Nexlogo from "../../Assets/nex.jpg";
// import Toolstack from "./Toolstack";
import Memberstack from "./Memberstack"
import MyTreemap from "./Treemap";
import InformationChart from "./InformationChart";
function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
            Hi There! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span><strong className="purple">  N.E.X's </strong> Home 🛖
            </h1>
            
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={Nexlogo} alt="about" className="img-fluid nex-logo" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Team <strong className="purple">Members </strong>
        </h1>
        <Memberstack />
        {/* <h1 className="project-heading">
           <strong className="purple">Tech </strong>We use
        </h1>
        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> We use
        </h1>
        <Toolstack /> */}

        <h1 className="project-heading">
          <strong className="purple"> Tech </strong> We Use
        </h1>
        <Row><Col><InformationChart /></Col><Col><MyTreemap /></Col></Row>
        
      </Container>
    </Container>
  );
}

export default About;
