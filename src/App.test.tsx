import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  it('render component correctly', () => {
    render(<App />);

    const title = screen.getByText('로그인');
    expect(title).toBeInTheDocument();

    const emailLogin = screen.getByText('이메일로 로그인');
    expect(emailLogin).toBeInTheDocument();
  });
});
