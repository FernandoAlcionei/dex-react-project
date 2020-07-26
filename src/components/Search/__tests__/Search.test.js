import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import Search from '../index';

const searchId = 'search-component';

const searchProps = {
  value: '',
  onChangeValue: () => {},
  onClick: () => {},
};

const buildComponent = ({ value, onChangeValue, onClick }) => render(
  <Search value={value} onChangeValue={onChangeValue} onClick={onClick} />,
);

describe('Search component', () => {
  it('should render component', () => {
    const { getByTestId } = buildComponent(searchProps);

    expect(getByTestId(searchId)).toBeInTheDocument();
  });

  it('should exec "onChangeValue" when typed', () => {
    const valueExpected = 'Moto G';

    let value = '';
    const props = { ...searchProps, onChangeValue: (text) => { value = text; } };

    const { getByTestId } = buildComponent(props);

    fireEvent.change(getByTestId('search-input'), { target: { value: valueExpected } });

    expect(value).toBe(valueExpected);
  });

  it('should exec "onClick" when the button "search" is clicked', (done) => {
    const props = { ...searchProps, onClick: () => done() };

    const { getByTestId } = buildComponent(props);

    fireEvent.click(getByTestId('search-btn'));
  });
});
