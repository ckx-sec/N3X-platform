import React from "react";
import { Col, Row } from "react-bootstrap";
import arcovegle from "../../Assets/people/arcovegle.jpg"
import maxzed from "../../Assets/people/maxzed.jpg"
import melody from "../../Assets/people/melody.jpg"
import pig007 from "../../Assets/people/xx3.jpg"
import jemmy from "../../Assets/people/jemmy.jpg"
import ckx from "../../Assets/people/ckx.jpg"
import ivnm from "../../Assets/people/ivnm.jpg"
import moyu from "../../Assets/people/moyu.jpg"
import wander from "../../Assets/people/wander.jpg"
import wxc from "../../Assets/people/wxc.jpg"
import Tilt from "react-parallax-tilt";
function Memberstack(){
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
            
            <Tilt><img src={arcovegle} alt="about" className="img-fluid" /></Tilt>
            
            </Col>
            <Col xs={4} md={2} className="tech-icons">
            <Tilt><img src={maxzed} alt="about" className="img-fluid" /></Tilt>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
            <Tilt><img src={melody} alt="about" className="img-fluid" /></Tilt>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
            <Tilt><img src={pig007} alt="about" className="img-fluid" /></Tilt>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
            <Tilt><img src={jemmy} alt="about" className="img-fluid" /></Tilt>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
            <Tilt><img src={ckx} alt="about" className="img-fluid" /></Tilt>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
            <Tilt><img src={ivnm} alt="about" className="img-fluid" /></Tilt>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
            <Tilt><img src={moyu} alt="about" className="img-fluid" /></Tilt>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
            <Tilt><img src={wander} alt="about" className="img-fluid" /></Tilt>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
            <Tilt><img src={wxc} alt="about" className="img-fluid" /></Tilt>
            </Col>
            
        
        </Row>
    );
}

export default Memberstack;