import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Loader from '../index';

const loaderId = 'loader-component';

const buildComponent = ({ show }) => render(<Loader show={show} />);

describe('Loader component', () => {
  it('should render loader when show property is "true"', () => {
    const { getByTestId } = buildComponent({ show: true });
    expect(getByTestId(loaderId)).toBeInTheDocument();
  });

  it('should hide loader when show property is "false"', () => {
    const { queryByTestId } = buildComponent({ show: false });
    expect(queryByTestId(loaderId)).toBeNull();
  });
});
