import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import Button from '../index';

const buttonId = 'button-component';

const buttonProps = {
  label: 'Comprar',
  onClick: () => {},
};

const buildComponent = ({
  label,
  onClick,
  disable,
}) => render(<Button label={label} onClick={onClick} disable={disable} />);

describe('Button component', () => {
  it('should render component', () => {
    const { getByTestId } = buildComponent(buttonProps);

    expect(getByTestId(buttonId)).toBeInTheDocument();
  });

  it('should render label correctly', () => {
    const { getByText } = buildComponent(buttonProps);

    expect(getByText(buttonProps.label)).toBeInTheDocument();
  });

  it('should exec "onClick" when the button is clicked', (done) => {
    const props = { ...buttonProps, onClick: () => done() };

    const { getByTestId } = buildComponent(props);

    fireEvent.click(getByTestId(buttonId));
  });
});
