import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ChallengeCard from "./ChallengeCards";
import Particle from "../Particle";

import leaf from "../../Assets/Challenges/leaf.png";
import emotion from "../../Assets/Challenges/emotion.jpeg";
import editor from "../../Assets/Challenges/codeEditor.png";
import chatify from "../../Assets/Challenges/chatify.png";
import suicide from "../../Assets/Challenges/suicide.png";
import bitsOfCode from "../../Assets/Challenges/blog.png";

function Challenges() {
  return (
    <Container fluid className="challenges-section">
      <Particle />
      <Container>
        <h1 className="challenges-heading">
           <strong className="purple">Challenges are here.. </strong>
        </h1>
        {/* <p style={{ color: "white" }}>
          Challenges are following..
        </p> */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="challenges-card">
            <ChallengeCard
              imgPath={chatify}
              needEnviron={false}
              title="EzWeb"
              description="This is a test"
              link="https://github.com/ckx-sec"
            />
          </Col>

          <Col md={4} className="challenges-card">
            <ChallengeCard
              imgPath={leaf}
              needEnviron={false}
              title="EzPwn"
              description="This is a test"
              link="https://github.com/ckx-sec"
            />
          </Col>

          <Col md={4} className="challenges-card">
            <ChallengeCard
              imgPath={editor}
              needEnviron={false}
              title="EzMisc"
              description="This is a test"
              link="https://github.com/ckx-sec"
            />
          </Col>

          <Col md={4} className="challenges-card">
            <ChallengeCard
              imgPath={bitsOfCode}
              needEnviron={false}
              title="EzRe"
              description="This is a test"
              link="https://github.com/ckx-sec"
            />
          </Col>

          <Col md={4} className="challenges-card">
            <ChallengeCard
              imgPath={suicide}
              needEnviron={false}
              title="EzCry"
              description="This is a test"
              link="https://github.com/ckx-sec"
            />
          </Col>

          <Col md={4} className="challenges-card">
            <ChallengeCard
              imgPath={emotion}
              needEnviron={false}
              title="EzBc"
              description="This is a test"
              link="https://github.com/ckx-sec"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Challenges;
