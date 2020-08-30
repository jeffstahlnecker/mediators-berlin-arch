import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";
import { setColor, media } from "../Style";

export const PureHero = ({ data, children }) => {
  return (
    <Container>
      <BackgroundImage
        fluid={data.file.childImageSharp.fluid}
        className="backgroundImage"
        backgroundColor={setColor.primaryColor}
      >
        {children}
      </BackgroundImage>
    </Container>
  );
};

export const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "chance.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);
  return <PureHero data={data} />;
};

const Container = styled.div`
  .backgroundImage {
    width: 100%;
    background-position: bottom center;
    background-repeat: repeat-y;
    background-size: cover;
    height: 50vh;
    color: ${setColor.primaryColor};
  }
  ${media.portraitTablet`
    .backgroundImage {
    height: 70vh;
  }
	`};
`;

export default Hero;
