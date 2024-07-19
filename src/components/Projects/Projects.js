import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import singleVendor from "../../Assets/single vendor image.jpg";
import ott from "../../Assets/web tv screenshot.png";
import ecommerce from "../../Assets/ecommerce image.png";
import videoSha from "../../Assets/video-1.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={singleVendor}
              isBlog={false}
              title="Single Vendor Ecommerce Sass"
              description="I developed a Single Vendor E-Commerce Web Application with a focus on security, responsiveness, and efficient state management. Implementing user authentication with role-based access control ensured enhanced security.The user interfaces were crafted using HTML, CSS, Bootstrap, and Tailwind CSS. Redux Toolkit was integrated for state management. I collaborated with a dynamic team to deliver a reliable and user-friendly application, and designed an admin dashboard for comprehensive control. Secure authentication mechanisms were put in place to safeguard user data and privacy. The technologies used included HTML, CSS, JavaScript, Bootstrap, React.js, Tailwind CSS, and Redux Toolkit."
              ghLink=""
              demoLink="Not Deployed"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ott}
              isBlog={false}
              title="WebTv"
              description="WebTv is an OTT streaming platform built with Vite and React.js, utilizing a fake TMDB API to display movie and web series data. It features a user-friendly interface with a home page for popular movies, individual movie pages with details and trailers, and sections for browsing by genre and filters. A search feature helps users find specific titles quickly. Technologies used include Vite, React.js, CSS, Redux Toolkit, Vercel, and the fake TMDB API."
              ghLink=""
              demoLink="https://web-tv-olive.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="Ecommerce Practice App"
              description="I developed an e-commerce web application similar to Amazon and Flipkart, where users can log in, view product listings, and use search, filters, and sorting features. The app includes different pages and routes for login, products, and product details using React Router components like Route, Switch, and Link. User login state is persisted with JWT tokens stored in local storage, sent in headers for API call authorization. Technologies used include React.js, JavaScript, CSS, Bootstrap, React Router, REST API calls, local storage, and JWT tokens."
              ghLink=""
              demoLink="https://ecommercevr.ccbp.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={videoSha}
              isBlog={false}
              title="vidzygram"
              description="I collaborated on developing Vidzgram, a feature-rich video sharing app. Key contributions included implementing user authentication with role-based access control, integrating Redux Toolkit for state management, and using Material UI for a modern user interface. I developed features for posting, viewing, liking, sharing, and commenting on videos, along with real-time chat for user communication. I also designed an admin dashboard for managing user accounts, videos, and comments, ensuring secure authentication to protect user data. Technologies used were HTML, CSS, JavaScript, React.js, Material UI, and Redux Toolkit."
              ghLink=""
              demoLink="Still on development"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
