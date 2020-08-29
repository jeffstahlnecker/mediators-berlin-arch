import React, { useState } from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import { FaBars } from "react-icons/fa";
import { setColor, media } from "../Style";
import Links from "./constants/Links";

export const PureNavbar = ({ data }) => {
  const [isOpen, setNav] = useState(false);
  const toggleNav = () => {
    // eslint-disable-next-line no-shadow
    setNav(isOpen => !isOpen);
  };

  return (
    <Container>
      <Fixed>
        <Logo>
          <Img
            fixed={data.file.childImageSharp.fixed}
            alt="Chance im Konflikt Logo"
          />
        </Logo>
        <MobileMenu type="button" onClick={toggleNav} aria-label="Mobile Menu">
          <FaBars size={35} />
        </MobileMenu>
      </Fixed>
      <StyledMenu className={isOpen ? `show` : `hide`}>
        {Links.map(item => {
          return (
            <MenuItem key={item.text}>
              <Link to={item.path}>{item.text}</Link>
            </MenuItem>
          );
        })}
      </StyledMenu>
    </Container>
  );
};

export const Navbar = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 200) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
    }
  `);
  return <PureNavbar data={data} />;
};

PureNavbar.propTypes = {
  data: PropTypes.shape({
    file: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fixed: PropTypes.shape({
          src: PropTypes.string,
          srcWebp: PropTypes.string,
          tracedSVG: PropTypes.string,
          width: PropTypes.number,
          height: PropTypes.number,
          srcSet: PropTypes.string,
          srcSetWebp: PropTypes.string,
        }),
      }),
    }),
  }),
};

const Container = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  width: 100vw;
  justify-content: space-between;
  align-items: center;
  align-content: space-between;
  background-color: ${setColor.mainWhite};
  min-height: 8vh;
  box-shadow: 0px 3px 7px 0.5px rgba(0, 0, 0, 0.25);
  margin: 0 0 2vh 0;
  padding: 0 2vw 0 2vw;
  z-index: 1;
  .show {
    height: 100vh !important;
    transition: all 0.3s linear;
  }

  .hide {
    display: none;
    transition: all 0.3s linear;
    ${media.tablet`
	    display: flex;
	`};
  }
  a {
    text-decoration: none;
    color: ${setColor.mainBlack};
  }
  a:hover {
    color: ${setColor.secondaryColor};
  }
`;

const Fixed = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  flex-direction: row;
  align-content: space-between;
  justify-content: space-between;
  width: 100vw;
  padding: 1vh 2vw 1vh 2vw;
  align-items: center;
  ${media.tablet`
  top: initial;
  `};
`;

const Logo = styled.div``;

const MobileMenu = styled.button`
  background-color: ${setColor.mainWhite};
  border: none;
  outline: none;
  order: 99;
  cursor: pointer;
  ${media.tablet`display:none;`};
`;

const StyledMenu = styled.ul`
  display: flex;
  list-style: none;
  margin: 3rem 0 0 0;
  align-items: center;
  padding: 0;
  justify-content: flex-start;
  flex: 4;
  font-weight: 500;
  flex-direction: column;
  overflow: hidden;
  transition: all 0.3s linear;
  ${media.tablet`
	flex-direction:row;
	height: auto;
	margin: 0 0 0 0;
	justify-content: flex-end;
	`};
`;
export const MenuItem = styled.li`
  padding: 1rem 2rem;
  z-index: 2;
`;

export default Navbar;
