import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vamsi Renangi </span>
            from <span className="purple">AndhraPradesh, India</span>
            <br />
            I am currently employed as a Frontend Developer at TechbrainsInnovativeSolutions.
            <br />
            I have completed Computer Science Engineering   at Sree Venkateswara College Of Engineering
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Bike riding 
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Youtube
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
