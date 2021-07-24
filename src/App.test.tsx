import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  it('render component correctly', () => {
    render(<App />);

    const msg = screen.getByText('Hello World!');
    expect(msg).toBeInTheDocument();
  });
});
