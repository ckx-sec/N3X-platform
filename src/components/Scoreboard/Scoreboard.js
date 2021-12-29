import React from "react";
import { Container,Row, Col} from "react-bootstrap";
import ScoreboardCard from "./ScoreboardCard";
import Particle from "../Particle";
import Chart from "./Chart";
import MyRadar from "./Radar";
// import SimChart from "./simChart";
function Scoreboard(){
    return(
    
        <Container fluid className="scoreboard-section">
        <Particle />
        <h1 className="project-heading">
          Team <strong className="purple">Information </strong>
        </h1>
        <h3>Your Team: <strong className="purple">N3X1 </strong></h3>
        <div>
                <Row style={{ justifyContent: "center", padding: "10px" }}>
                <Col >
                <MyRadar />
                </Col>
                <Col>
                <Chart />
                </Col>
                
                </Row>

        </div>
        <h1 className="project-heading">
        Overall<strong className="purple"> Ranking </strong>
        </h1>
        
        <ScoreboardCard />
        
      </Container>
    );
}
export default Scoreboard;