import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';


import Card from '../index';

const mockComic = {
  id: 'MLA772921213',
  title: 'Moto G',
  price: { currency: 'ARS', amount: 1600 },
  currency: 'ARS',
  amount: 1600,
  picture: 'photo.jpg',
  condition: 'Nuevo',
  state: 'Buenos Aires',
};

const cardProps = { comic: mockComic };

const buildComponent = ({ comic }) => render(<Card comic={comic} />, { wrapper: MemoryRouter });

describe('Card component', () => {
  it('should render component', () => {
    const { getByTestId } = buildComponent(cardProps);

    expect(getByTestId(mockComic.id)).toBeInTheDocument();
  });

  it('should create details url correctly', () => {
    const linkExpected = `http://localhost/quadrinhos/${mockComic.id}`;

    const { getByTestId } = buildComponent(cardProps);

    const linkDetails = getByTestId('link-details').href;

    expect(linkDetails).toBe(linkExpected);
  });
});
