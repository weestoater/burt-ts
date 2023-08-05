import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders a header link to burtware.com", () => {
  render(<App />);
  const headerText = screen.getByText(/burtware.com/i);
  expect(headerText).toBeInTheDocument();
});

test("renders car videos heading", () => {
  render(<App />);
  const headerText = screen.getByText(/car videos/i);
  expect(headerText).toBeInTheDocument();
});

test("renders music videos heading", () => {
  render(<App />);
  const headerText = screen.getByText(/music videos/i);
  expect(headerText).toBeInTheDocument();
});

test("should match snapshot", () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});
