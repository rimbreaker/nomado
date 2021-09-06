import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const textbox = screen.getByRole('textbox');
  expect(textbox).toBeInTheDocument();
});
