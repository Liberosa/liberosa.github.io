import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Col, Card } from "react-bootstrap";

function Resume() {
  return (
    <Container className="mt-4">
      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>DMITRY VOLCHOK</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Junior Front-End Developer(react)
              </Card.Subtitle>
              <Card.Text>
                Phone: +972523343350
                <br />
                E-mail: smaragdus46@gmail.com
                <br />
                Skype: https://join.skype.com/invite/itHBKXbszveC
                <br />
                Linkedin: https://www.linkedin.com/in/dmitry-volchok-21715a229/
                <br />
                Telegram: https://t.me/Liberosa
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Title>Skills</Card.Title>
              <Card.Text>
                JavaScript, Typescript, React.js, Redux / MobX, HTML, DOM,
                Bootstrap 5, Material UI, CSS, SCSS, Webpack, OOP / OOD, MVC,
                SQL, Git SCM
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mt-4">
            <Card.Body>
              <Card.Title>Soft Skills</Card.Title>
              <Card.Text>
                Open minded, Communicative, Teamwork, Kind, Leadership, Curious
                quick learner, Great interpersonal relationship skills
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mt-4">
            <Card.Body>
              <Card.Title>Interests</Card.Title>
              <Card.Text>
                Board Games, Literature, Technology, Science, Space, Philosophy
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={12}>
          <Card className="mt-4">
            <Card.Body>
              <Card.Title>Work Experience</Card.Title>
              <Card.Text>
                <ul>
                  <li>
                    June 2016 – January 2021 : E-commerce manager, Stim
                    Optimum,inc
                    <ul>
                      <li>Account management</li>
                      <li>Supply management</li>
                      <li>Reporting on activities</li>
                      <li>Competitors analysis</li>
                      <li>Perform senior manager activities</li>
                      <li>Investigating for development directions</li>
                      <li>Engaged in pricing policy</li>
                      <li>Training of new employees</li>
                      <li>Support</li>
                      <li>Opening and control of new directions of sales</li>
                    </ul>
                  </li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mt-4">
            <Card.Body>
              <Card.Title>Work Experience</Card.Title>
              <Card.Text>
                <ul>
                  <li>
                  March 2022 - July 2022: Junior Front-End developer, Itransition
                   Group
              </li>
              <ul>
                <li>
                  Developing UI components for Weather and Geolocation. Learning
                  company proprietary workflows.
                </li>
                <li>
                  Working with React, Redux, Typescript, Bootstrap 5 and
                  Material UI. Developing using Visual Studio Code, Git, Jira, UI
                  libraries.
                </li>
              </ul>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Resume;
