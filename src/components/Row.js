import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image/index";
import { setColor, setRem, media } from "../Style";

export const PureRow = ({ data, picture, altText, heading, description }) => {
  console.log(description);
  return (
    <Container>
      <RowTitle>
        <Headline>{heading}</Headline>
        <Line />
      </RowTitle>
      <RowBody>
        <Image>
          <Img
            fluid={picture || data.file.childImageSharp.fluid}
            alt={altText || "Image demonstrating row content"}
            imgStyle={{
              objectFit: "none",
              objectPosition: "50% 50%",
            }}
          />
        </Image>
        <Description>
          {description.map(item => {
            return <p>{item}</p>;
          })}
        </Description>
      </RowBody>
    </Container>
  );
};
export const Row = props => {
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
  return <PureRow {...props} data={data} />;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 10vh 10vw 0 10vw;
  ${media.tablet`
  display: block;
	`};
`;

const RowBody = styled.div`
  display: flex;
  flex-direction: row;
`;

const Headline = styled.h3`
  margin: 0 0 1vh 0;
  padding: 0 0 ${setRem(6)} 0;
  font-size: ${setRem(25)};
  text-align: center;
  white-space: nowrap;
  ${media.tablet`
  text-align: left;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: flex-start;
	`};
`;
const RowTitle = styled.div`
  ${media.tablet`
  display: flex;
  flex-direction: column;
  min-width: 30vw;
  align-content: flex-start;
  justify-content: flex-start;

	`};
`;
const Description = styled.div`
  p {
    margin: 0 0 3vh 0;
    font-size: ${setRem(17)};
  }
  ${media.tablet`
  margin: 0;
  padding: 0 0 0 5vw;
	`};
`;
const Image = styled.div`
  display: none;
  ${media.tablet`
  display: inline;
  min-width: 30vw;
  
	`};
`;

const Line = styled.hr`
  border-width: 1px !important;
  border-top-style: solid !important;
  border-top-width: 2px !important;
  color: ${setColor.primaryColor};
  width: 80%;
  margin: 0 0 5vh 0;
  border: 0;
  ${media.tablet`
	width: 6vw;
	`};
`;

export default Row;
