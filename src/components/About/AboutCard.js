import React from "react";
import Card from "react-bootstrap/Card";
import { ImStarEmpty } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            N.E.X is a <span className="purple"> magic </span>
            and <span className="purple"> fantastic </span>organization in NEU.
            <br />Here, we can talk about <span className="purple">everything</span> in the aspect of <span className="purple">Computer Science</span>. We share the learning tips with teammates every week. 
            <br />Welcome to join us! You can <span className="purple">contact</span> with any members or QQ:2319303283
            <br />We learn these following aspects：
          </p>
          <ul className="skill-list">
            <li className="about-activity">
              <ImStarEmpty /> Reverse
            </li>
            
            <li className="about-activity">
              <ImStarEmpty /> Web
            </li>
            <li className="about-activity">
              <ImStarEmpty /> Pwn
            </li>
            <li className="about-activity">
              <ImStarEmpty /> Blockchain
            </li>
            <li className="about-activity">
              <ImStarEmpty /> Crypto
            </li>
            
            <li className="about-activity">
              <ImStarEmpty /> Misc
            </li>
            
          </ul>
          
          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Great things are done by a series of small things brought together."{" "}
          </p>
          <footer className="blockquote-footer">ckx</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
