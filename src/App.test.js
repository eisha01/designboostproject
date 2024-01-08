import { render, screen } from '@testing-library/react';
import HomePage from './components/Homepage';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders homepage with expected content', () => {
  render(
    <Router>
      <HomePage />
    </Router>
  );

  // Check for the presence of specific text content
  const welcomeText = screen.getByText(
    /Elevate Your Designs with Design Boost/i
  );
  const service2Text = screen.getByText(/Service 2/i);
  expect(service2Text).toBeInTheDocument();

  const service3Text = screen.getByText(/Service 3/i);
  expect(service3Text).toBeInTheDocument();

  // Check for the presence of specific elements
  const sparkImage = screen.getByAltText(/Spark Image/i);
  expect(sparkImage).toBeInTheDocument();

  const arrowImage = screen.getByAltText(/arrow Image/i);
  expect(arrowImage).toBeInTheDocument();

  const boostImage = screen.getByAltText(/boost Image/i);
  expect(boostImage).toBeInTheDocument();
});

// Add more tests for other elements and functionalities as needed
