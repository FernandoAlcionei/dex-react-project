import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import ButtonIcon from '../index';

const buttonIconId = 'button-icon-component';

const buttonIconProps = {
  onClick: () => {},
  imageIcon: '',
  icon: '',
  color: '',
  size: '',
};

const buildComponent = ({ onClick, imageIcon, icon, color, size }) => render(
  <ButtonIcon onClick={onClick} imageIcon={imageIcon} icon={icon} color={color} size={size} />,
);

describe('ButtonIcon component', () => {
  it('should render component', () => {
    const { getByTestId } = buildComponent(buttonIconProps);

    expect(getByTestId(buttonIconId)).toBeInTheDocument();
  });

  it('should render image icon when the property "imageIcon" has value', () => {
    const props = { ...buttonIconProps, imageIcon: 'logo.svg' };

    const { getByTestId } = buildComponent(props);

    expect(getByTestId('image-icon')).toBeInTheDocument();
  });

  it('should render icon when the property "icon" has value', () => {
    const props = { ...buttonIconProps, icon: 'close' };

    const { getByTestId } = buildComponent(props);

    expect(getByTestId('icon-svg')).toBeInTheDocument();
  });

  it('should exec "onClick" when the button is clicked', (done) => {
    const props = { ...buttonIconProps, onClick: () => done() };

    const { getByTestId } = buildComponent(props);

    fireEvent.click(getByTestId(buttonIconId));
  });

  it('should apply styles color and size when the properties has value', () => {
    const size = '20px';
    const color = 'white';

    const props = {
      ...buttonIconProps,
      icon: 'close',
      size,
      color,
    };

    const { getByTestId } = buildComponent(props);
    const { style } = getByTestId('icon-svg');

    expect(style.backgroundColor).toBe(color);
    expect(style.width).toBe(size);
    expect(style.height).toBe(size);
  });
});
