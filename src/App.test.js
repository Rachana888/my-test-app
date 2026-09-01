import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ZenFlow heading', () => {
  render(<App />);
  expect(screen.getByText(/Find Your Inner Peace/i)).toBeInTheDocument();
});

test('renders yoga categories', () => {
  render(<App />);
  expect(screen.getAllByText(/Yoga Mats/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/Meditation Cushions/i).length).toBeGreaterThan(0);
});

test('renders featured products', () => {
  render(<App />);
  expect(screen.getByText(/Serenity Pro Mat/i)).toBeInTheDocument();
  expect(screen.getByText(/Crystal Singing Bowl/i)).toBeInTheDocument();
});
