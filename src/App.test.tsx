import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders a header welcome to burtware.com', () => {
  render(<App />);
  const headerText = screen.getByText(/welcome to burtware.com/i);
  expect(headerText).toBeInTheDocument();
})
