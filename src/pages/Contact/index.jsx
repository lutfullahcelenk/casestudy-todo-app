import React from "react";
import { TodoTitle } from "../../components/ToDo/styles";
import { StyledAnchor, StyledContact } from "./styles";

const Contact = () => {
  return (
    <StyledContact>
      <TodoTitle>This is Contact Page...</TodoTitle>

      <StyledAnchor target={"_blank"} href="https://github.com/lutfullahcelenk">
        My Github Page
      </StyledAnchor>

      <StyledAnchor target={"_blank"} href="https://www.linkedin.com/in/lutfullah-celenk/">
        My Linkedin Account
      </StyledAnchor>

    </StyledContact>
  );
};

export default Contact;
