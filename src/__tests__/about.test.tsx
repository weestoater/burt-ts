import React from "react";
import { render, screen } from "@testing-library/react";
import About from "../pages/About";

test("renders a the about page", () => {
  render(<About />);
  const headerText = screen.getByTestId("pagetitle");
  expect(headerText).toBeInTheDocument();
});

test("renders what is burtware.com heading", () => {
  render(<About />);
  const headerText = screen.getByText(/what is burtware.com/i);
  expect(headerText).toBeInTheDocument();
});

test("renders who is burtware heading", () => {
  render(<About />);
  const headerText = screen.getByText(/who is burtware/i);
  expect(headerText).toBeInTheDocument();
});

test("should match snapshot", () => {
  const { container } = render(<About />);
  expect(container).toMatchSnapshot();
});
