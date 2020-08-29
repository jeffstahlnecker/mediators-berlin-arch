import React from "react";
import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { PureNavbar } from "../Navbar";
import { fixedWebpTracedSvg as data } from "../../../test/fixtures";

expect.extend(toHaveNoViolations);

it("should be accessible", async () => {
  const { container } = render(<PureNavbar data={data} />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});

test("Navbar maps Links", () => {
  const { getByText } = render(<PureNavbar data={data} />);
  expect(getByText("Home")).toBeInTheDocument;
  expect(getByText("Mediatoren")).toBeInTheDocument;
});
