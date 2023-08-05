import React from "react";
import { render, screen } from "@testing-library/react";
import A11y from "../pages/A11y";

test("renders a the a11y page", () => {
  render(<A11y />);
  const headerText = screen.getByTestId("pagetitle");
  expect(headerText).toBeInTheDocument();
});

test("renders A11y & me heading", () => {
  render(<A11y />);
  const headerText = screen.getByText(/A11y & me/i);
  expect(headerText).toBeInTheDocument();
});

test("renders A11y & promotion heading", () => {
  render(<A11y />);
  const headerText = screen.getByText(/A11y & promotion/i);
  expect(headerText).toBeInTheDocument();
});

test("renders Axe plugin heading", () => {
  render(<A11y />);
  const headerText = screen.getByText(/Axe plugin/i);
  expect(headerText).toBeInTheDocument();
});

test("should match snapshot", () => {
  const { container } = render(<A11y />);
  expect(container).toMatchSnapshot();
});
