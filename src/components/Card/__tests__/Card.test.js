import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';


import Card from '../index';

const mockComic = {
  id: 69035,
  title: 'Marvel Super Hero Adventures: Webs and Arrows and Ants, Oh My! (2018) #1',
  thumbnail: {
    path: 'http://i.annihil.us/u/prod/marvel/i/mg/5/30/5b2c12680a12a',
    extension: 'jpg',
  },
  creators: {
    items: [{
      name: 'Dario Brizuela',
      role: 'inker',
    }],
  },
};

const cardProps = { comic: mockComic };

const buildComponent = ({ comic }) => render(<Card comic={comic} />, { wrapper: MemoryRouter });

describe('Card component', () => {
  it('should render component', () => {
    const { getByTestId } = buildComponent(cardProps);

    expect(getByTestId('card-component')).toBeInTheDocument();
  });

  it('should create details url correctly', () => {
    const linkExpected = `http://localhost/comics/${mockComic.id}`;

    const { getByTestId } = buildComponent(cardProps);

    const linkDetails = getByTestId('link-title').href;

    expect(linkDetails).toBe(linkExpected);
  });
});
