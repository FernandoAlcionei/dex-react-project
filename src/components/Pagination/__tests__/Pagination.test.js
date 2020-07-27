import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Pagination from '../index';

const props = { history: {}, totalResults: 1, totalPages: 1, currentPage: 1 };

const paginationId = 'pagination-component';

const buildComponent = () => render(
  <Pagination
    history={props.history}
    totalResults={props.totalResults}
    totalPages={props.totalPages}
    currentPage={props.currentPage}
  />,
);

describe('Pagination component', () => {
  it('should render component', () => {
    const { getByTestId } = buildComponent();
    expect(getByTestId(paginationId)).toBeInTheDocument();
  });
});
