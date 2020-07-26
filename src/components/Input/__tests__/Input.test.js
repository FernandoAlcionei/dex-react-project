import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import Input from '../index';

const inputId = 'input-component';

const inputProps = {
  value: '',
  onChange: () => {},
};

const buildComponent = ({ value, onChange }) => render(
  <Input value={value} onChange={onChange} />,
);

describe('Input component', () => {
  it('should render component', () => {
    const { getByTestId } = buildComponent(inputProps);

    expect(getByTestId(inputId)).toBeInTheDocument();
  });

  it('should exec "onChange" when typed', () => {
    const valueExpected = 'Moto G';

    let value = '';
    const props = { ...inputProps, onChange: (text) => { value = text; } };

    const { getByTestId } = buildComponent(props);

    fireEvent.change(getByTestId('input-field'), { target: { value: valueExpected } });

    expect(value).toBe(valueExpected);
  });
});
