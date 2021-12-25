import React from "react";
import { ROUTES } from "../../constants/routes";
import { StyledLink, StyledNavbar } from "./style";

const Navbar = () => {
  const pages = [
    {
      name: "Home",
      path: ROUTES.HOME,
    },
    {
      name: "About",
      path: ROUTES.ABOUT,
    },
    {
      name: "Contact",
      path: ROUTES.CONTACT,
    },
  ];

  return (
    <StyledNavbar>
      {pages.map((page, index) => (
        <StyledLink to={page.path} key={index}>
          {page.name}
        </StyledLink>
      ))}
    </StyledNavbar>
  );
};

export default Navbar;
