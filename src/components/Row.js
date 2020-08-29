import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image/index";
import { setColor, setRem, media } from "../Style";

export const PureRow = ({ data, picture, altText }) => {
  return (
    <Container>
      <div>
        <Headline>Was ist Mediation?</Headline>
        <Line />
      </div>
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
        <p>
          Die Mediation ist eine Methode zur Vermittlung in Konfliktfällen, die
          der gemeinsamen und konstruktiven Lösungsfindung dient. Sie ist ein
          vertrauliches und strukturiertes Verfahren, in dem die beteiligten
          Parteien (Mediant*innen) freiwillig, eigenverantwortlich und
          wertschätzend eine einvernehmliche Beilegung ihres Konflikts
          anstreben.
        </p>
        <p>
          Der*die Mediator*in unterstützt die Mediant*innen hierbei und leitet
          die Gespräche als ergebnisoffenen Prozess. Er*sIe stellt einen
          sicheren und schützenden Rahmen her, in dem die Mediant*innen sich
          offen, ehrlich und kooperativ begegnen können. Der*die Mediator*in ist
          allparteilich, steht also auf der Seite aller Beteiligten. Er*sie
          unterstützt die Mediant*innen bei der Erarbeitung von Lösungsoptionen
          und Vereinbarungen, so dass für alle Parteien eine win-win Situation
          entstehen kann.
        </p>
      </Description>
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
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 10vh 10vw 0 10vw;
  ${media.tablet`
	flex-direction:row;
	`};
`;

const Headline = styled.h3`
  margin: 0 0 1vh 0;
  padding: 0 0 ${setRem(6)} 0;
  font-size: ${setRem(25)};
  text-align: center;
  white-space: nowrap;
`;

const Description = styled.div`
  p {
    margin: 0 0 3vh 0;
    font-size: ${setRem(17)};
  }
`;
const Image = styled.div`
  width: 98%;
  margin: 0 0 5vh 0;
`;

const Line = styled.hr`
  border-width: 1px !important;
  border-top-style: solid !important;
  border-top-width: 2px !important;
  color: ${setColor.primaryColor};
  width: 80%;
  margin: 0 0 4vh 0;
  border: 0;
  ${media.tablet`
	width: 6vw;
	`};
`;

export default Row;
