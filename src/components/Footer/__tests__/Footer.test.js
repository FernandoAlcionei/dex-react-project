import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Footer from '../index';

const footerId = 'footer-component';

const buildComponent = () => render(<Footer />);

describe('Footer component', () => {
  it('should render component', () => {
    const { getByTestId } = buildComponent();
    expect(getByTestId(footerId)).toBeInTheDocument();
  });
});
