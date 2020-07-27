import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Header from '../index';

const props = { history: {}, location: {} };

const headerId = 'header-component';

const buildComponent = () => render(
  <Header history={props.history} location={props.location} />, { wrapper: MemoryRouter },
);

describe('Header component', () => {
  it('should render component', () => {
    const { getByTestId } = buildComponent();
    expect(getByTestId(headerId)).toBeInTheDocument();
  });
});
