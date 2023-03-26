import ButtonLink from "./ButtonLink";
import React from "react";
function NoMatch() {
    return (
      <div class="position-absolute top-50 start-50 translate-middle">
        <h2>Nothing to see here!</h2>
        <p>
          <ButtonLink to="https://youtu.be/dQw4w9WgXcQ">Now Click here!</ButtonLink>
        </p>
      </div>
    );
  }

  export default NoMatch;