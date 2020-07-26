import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import Alert from '../index';

const mockAlert = {
  id: 'alert-1',
  timeout: 4000,
  title: 'Unavailable service',
  type: 'error',
};

const alertProps = {
  remove: () => {},
  alert: mockAlert,
};

const buildComponent = ({ remove, alert }) => render(
  <Alert remove={remove} alert={alert} />,
);

describe('Alert component', () => {
  it('should render component', () => {
    const { getByTestId } = buildComponent(alertProps);

    expect(getByTestId(mockAlert.id)).toBeInTheDocument();
  });

  it('should close alert when the button "close-alert" is clicked', (done) => {
    const props = { ...alertProps, remove: () => done() };

    const { getByTestId } = buildComponent(props);

    fireEvent.click(getByTestId('close-alert'));
  });

  it('should close alert when over the timeout', (done) => {
    const props = {
      alert: { ...mockAlert, timeout: 500 },
      remove: () => done(),
    };

    buildComponent(props);
  });
});
