import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import tw from "twin.macro";
import Img from "gatsby-image";

export const PureHorizontalCard = ({ data }) => {
  return (
    <Container>
      <Image></Image>
      <Section>
        <Text>
          <Headline></Headline>
          <Paragraph></Paragraph>
        </Text>
      </Section>
    </Container>
  );
};

export const HorizontalCard = ({ props }) => {
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
  return <PureHorizontalCard data={data} {...props} />;
};

const Container = tw.div``;

const Image = tw.div``;

const Section = tw.div`
border-r
border-b
border-l 
border-gray-400 
lg:border-l-0 
lg:border-t 
lg:border-gray-400 
bg-white rounded-b 
lg:rounded-b-none 
lg:rounded-r 
p-4 
flex 
flex-col
justify-between
leading-normal`;

const Text = tw.div`
mb-8`;

const Headline = tw.div`
text-gray-900 font-bold text-xl mb-2`;

const Paragraph = tw.p`
text-gray-700 text-base`;

export default HorizontalCard;
