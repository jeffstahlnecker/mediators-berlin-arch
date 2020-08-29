import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image/index";
import { setColor, setRem } from "../Style";

export const PureRow = ({ data, picture, altText }) => {
  return (
    <Container>
      <Text>
        <Headline>Welcome to the Headline</Headline>
        <Line />
        <Description>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
            dolorem, expedita libero perspiciatis quibusdam unde veritatis.
            Animi atque corporis deleniti dolores ex harum perspiciatis
            voluptatum! Cupiditate deserunt iusto nihil officiis?
          </p>
          <p>
            A accusamus adipisci aperiam atque beatae corporis, culpa debitis
            dolorem doloribus earum error et in ipsam nam odio perferendis rerum
            sit, soluta tempore temporibus ullam, unde veniam vitae voluptatem
            voluptatibus.
          </p>
        </Description>
      </Text>
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
  justify-content: space-around;
  align-items: center;
  padding: 10vh 10vw 0 10vw;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  width: 40vw;
`;

const Headline = styled.h3`
  margin: 0 0 1vh 0;
  padding: 0 0 ${setRem(6)} 0;
  font-size: ${setRem(30)};
`;

const Description = styled.div`
  p {
    margin: 0 0 3vh 0;
    font-size: ${setRem(17)};
  }
`;
const Image = styled.div`
  width: 20vw;
`;

const Line = styled.hr`
    border-width: 1px !important;
    border-top-style: solid !important;
    border-top-width: 2px !important;
    color: ${setColor.primaryColor};
    width: 6vw;
    margin: 0 0 4vh 0;
    border: 0;
}
`;

export default Row;
