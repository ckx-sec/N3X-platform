import React from "react";
import { Col, Row } from "react-bootstrap";
import shen from "../../Assets/honor/shen.png"
import dnuctf from "../../Assets/honor/dnuctf.png"
import hitctf from "../../Assets/honor/hitctf.png"
import qw from "../../Assets/honor/qw.png"
import chang from "../../Assets/honor/chang.png"
import Tilt from "react-parallax-tilt";
function Honor() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
            
            <Tilt><img src={shen} alt="about" className="img-fluid" /></Tilt>
            
            </Col>
            <Col xs={4} md={2} className="tech-icons">
            <Tilt><img src={dnuctf} alt="about" className="img-fluid" /></Tilt>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
            <Tilt><img src={hitctf} alt="about" className="img-fluid" /></Tilt>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
            <Tilt><img src={qw} alt="about" className="img-fluid" /></Tilt>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
            <Tilt><img src={chang} alt="about" className="img-fluid" /></Tilt>
            </Col>
            
        
        </Row>
  );
}

export default Honor;
