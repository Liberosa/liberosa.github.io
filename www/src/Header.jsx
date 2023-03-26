import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import ButtonLink from "./ButtonLink";

function Header() {
  return (
    <>
      <Container>
        <nav class="navbar navbar-expand-lg navbar-expnd-md navbar-dark bg-dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">
              Dmitry Volchok
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  {/* <ButtonLink to="/" className="nav-link active">Home</ButtonLink> */}
                  <a class="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  {/* <ButtonLink to="/resume" className="nav-link">Resume</ButtonLink> */}
                  <a class="nav-link" href="/resume">
                    Resume
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <hr />
      </Container>
    </>
  );
}

export default Header;
