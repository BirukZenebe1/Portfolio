import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the name and contact links', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /biruk zenebe/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /github/i })).toHaveAttribute('href', 'https://github.com/BirukZenebe1');
});
