import { render, screen } from "@testing-library/react";
import React from 'react';
import Login from "../component/Login";

test('renders Login component', () => {
  render(<Login />);
  expect(screen.getByText(/Login/)).toBeInTheDocument();
});

test('checking email & password inputs are empty',()=>{
    render(<Login />);
    expect(screen.queryByPlaceholderText('Enter email')).toHaveValue("");
    expect(screen.queryByPlaceholderText('Password')).toHaveValue("");
})
