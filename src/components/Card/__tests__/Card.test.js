import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';


import Card from '../index';

const mockProduct = {
  id: 'MLA772921213',
  title: 'Moto G',
  price: { currency: 'ARS', amount: 1600 },
  currency: 'ARS',
  amount: 1600,
  picture: 'photo.jpg',
  condition: 'Nuevo',
  state: 'Buenos Aires',
};

const cardProps = { product: mockProduct };

const buildComponent = ({ product }) => render(<Card product={product} />, { wrapper: MemoryRouter });

describe('Card component', () => {
  it('should render component', () => {
    const { getByTestId } = buildComponent(cardProps);

    expect(getByTestId(mockProduct.id)).toBeInTheDocument();
  });

  it('should create details url correctly', () => {
    const linkExpected = `http://localhost/quadrinhos/${mockProduct.id}`;

    const { getByTestId } = buildComponent(cardProps);

    const linkDetails = getByTestId('link-details').href;

    expect(linkDetails).toBe(linkExpected);
  });
});
