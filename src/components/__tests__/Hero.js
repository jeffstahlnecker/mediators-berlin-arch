import React from "react";
import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { PureHero } from "../Hero";
import { fluidWebpTracedSvg as data } from "../../../test/fixtures";

expect.extend(toHaveNoViolations);

it("should be accessible", async () => {
  const { container } = render(<PureHero data={data} />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
