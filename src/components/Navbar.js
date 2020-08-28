import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import { setFlex, setColor } from "../Style";

// eslint-disable-next-line react/prop-types
export const PureNavbar = ({ data }) => {
  // Add grid
  // flexbox
  // Add a Logo
  // use React State Hooks to create responsive Navbar
  // import FaBars
  // Create Links Constants
  //
  console.log(data);

  return (
    <Container>
      <Logo>
        <Img
          fixed={data.file.childImageSharp.fixed}
          alt="Chance im Konflikt Logo"
        />
      </Logo>
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
  justify-content: space-between;
  align-items: center;
  background-color: ${setColor.mainWhite};
  min-height: 8vh;
  box-shadow: 5px 3px 5px 0.5px rgba(0, 0, 0, 0.25);
  margin: 0 0 2vh 0;
  padding: 0 2vw 0 2vw;
`;

const Logo = styled.div``;

export default Navbar;
