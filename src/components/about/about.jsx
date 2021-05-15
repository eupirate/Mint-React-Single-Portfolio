import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./about.scss";
// Components
import TeamBox from './teamBox';
import TeamInfo from "./teamInfo";
import Title from "../ui-components/title/title";
// Assets
import Person01 from "../../assets/about/person01.png";
import Person02 from "../../assets/about/person02.png";

const about = () => (
  <div id="about">
    <div className="wrapper">
      <Title title="ABOUT ME." />
      <p className="font12">
        Ingress Augmented Reality (AR) mobile game player, ops planner, ops commander. <br />an adventurer, original creator, visual artist, thinker and doer.
        <br />Ingress uses the mobile device GPS to locate and interact with "portals" which are in proximity to the player's real-world location. The portals are physical points of interest where "human creativity and ingenuity is expressed" often manifesting as public art such as statues and monuments, unique architecture, outdoor murals, historic buildings, local community hubs and other displays of human achievement.[5] The game uses the portals as elements of a science fiction backstory along with a continuous open narrative provided through various forms of media.<br></br>Don’t limit your challenges, challenge your limits!
      </p>
      <Row>
        <Col md={12} lg={4}>
          <TeamBox avatar={Person01} name="Luke Skywalker" job="Across Russica linking art" />
        </Col>
        <Col md={12} lg={4}>
          <TeamBox avatar={Person02} name="Han Solo" job="Multi-layers fielding art" />
        </Col>
        <Col md={12} lg={4}>
          <TeamInfo />
        </Col>
      </Row>
    </div>
  </div>
);

export default about;
