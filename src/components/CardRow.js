import React from "react";
import tw from "twin.macro";
import VerticalCard from "./VerticalCard";

const CardRow = () => {
  return (
    <Container>
      <Section>
        <VerticalCard />
      </Section>
      <Section>
        <VerticalCard />
      </Section>
      <Section>
        <VerticalCard />
      </Section>
      <Section>
        <VerticalCard />
      </Section>
    </Container>
  );
};

const Container = tw.div`
bg-gray-200 flex flex-wrap
`;

const Section = tw.div`
w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-500 flex-1
`;

export default CardRow;
