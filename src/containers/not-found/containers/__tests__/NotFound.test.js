import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import NotFound from '../NotFoundView';

const notFoundId = 'not-found-view';

const buildComponent = () => render(<NotFound />);

describe('NotFound container', () => {
  it('should render container', () => {
    const { getByTestId } = buildComponent();
    expect(getByTestId(notFoundId)).toBeInTheDocument();
  });
});
