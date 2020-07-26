import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import EmptySearch from '../index';

const emptySearchId = 'empty-search-component';

const buildComponent = () => render(<EmptySearch />);

describe('EmptySearch component', () => {
  it('should render component', () => {
    const { getByTestId } = buildComponent();
    expect(getByTestId(emptySearchId)).toBeInTheDocument();
  });
});
