import React from "react";
import tw from "twin.macro";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";

const PureCard = ({ data, headline, paragraph, tags, image, alt }) => {
  function setTags(tag) {
    tag.map(tag => {
      return <Tag>{tag}</Tag>;
    });
  }

  return (
    <Container>
      <Image>
        <Img
          fluid={image || data.file.childImageSharp.fluid}
          alt={alt || "VerticalCard Image"}
        />
      </Image>
      <TextSection>
        <Headline>{headline || `Sample Headline`}</Headline>
        <TextSection>
          <Paragraph>
            {paragraph ||
              `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet
              dicta dolor dolore eius esse eveniet facere illo laborum laudantium
              obcaecati reiciendis rerum saepe sed sunt temporibus tenetur vel,
              voluptatum?`}
          </Paragraph>
        </TextSection>
      </TextSection>
      <TagSection>{tags ? setTags(tags) : <Tag>sampleTag</Tag>}</TagSection>
    </Container>
  );
};

export const VerticalCard = ({ ...props }) => {
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
  return <PureCard {...props} data={data} />;
};

const Container = tw.div`
max-w-sm rounded overflow-hidden shadow-lg bg-white
`;

const Image = tw.div`
w-full
`;

const TextSection = tw.div`
px-6 py-4`;

const Headline = tw.div`
font-bold text-xl mb-2`;

const Paragraph = tw.p`
text-gray-700 text-base`;

const TagSection = tw.div`
px-6 pt-4 pb-2`;

const Tag = tw.span`
inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`;

export default VerticalCard;
