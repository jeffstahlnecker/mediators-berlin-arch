import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image/index";

export const PureRow = ({ data, picture, altText }) => {
  return (
    <Container>
      Row
      <Image>
        <Img
          fluid={picture || data.file.childImageSharp.fluid}
          alt={altText || "Image demonstrating row content"}
        />
      </Image>
    </Container>
  );
};
export const Row = () => {
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
  return <PureRow data={data} />;
};

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const Image = styled.div`
  width: 20vw;
`;

export default Row;
