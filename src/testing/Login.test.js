import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import Login from "../component/Login";

test("renders Login component", () => {
  render(<Login />);
  expect(screen.getByText(/Login/)).toBeInTheDocument();
});

test("checking email & password inputs are empty", () => {
  render(<Login />);
  expect(screen.queryByPlaceholderText("Enter email")).toHaveValue("");
  expect(screen.queryByPlaceholderText("Password")).toHaveValue("");
});

test('should update email and password fields', () => {
  render(<Login />);

  const emailInput = screen.getByPlaceholderText('Enter email');
  const passwordInput = screen.getByPlaceholderText('Password');

  //fireEvent.change function changes the value of the input field to 'abcd@gmail.com'.
  fireEvent.change(emailInput, { target: { value: 'abcd@gmail.com' } });
  fireEvent.change(passwordInput, { target: { value: 'abcd123' } });

  //asserts that the value of the email input field is now 'abcd@gmail.com'.
  expect(emailInput).toHaveValue('abcd@gmail.com');
  expect(passwordInput).toHaveValue('abcd123');
});


test('should display "Loading..." message on form submission', () => {
  render(<Login />);

  const emailInput = screen.getByPlaceholderText('Enter email');
  const passwordInput = screen.getByPlaceholderText('Password');
  const submitButton = screen.getByText('Sign in');

  fireEvent.change(emailInput, { target: { value: 'abcd@gmail.com' } });
  fireEvent.change(passwordInput, { target: { value: 'abcd123' } });
  fireEvent.click(submitButton);

  expect(screen.getByText('Loading...')).toBeInTheDocument();
});

//emailInput and passwordInput: These are the input elements selected earlier using screen.getByPlaceholderText.
//{ target: { value: 'abcd@gmail.com' } }: This object represents the new value of the input field.
//target: This simulates the event's target, which is the input element in this case.
//value: This sets the value of the input element to 'abcd@gmail.com' for the email and 'abcd123' for the password.

test('should display "Successfully logged in" message for valid credentials', async () => {
  render(<Login />);

  const emailInput = screen.getByPlaceholderText('Enter email');
  const passwordInput = screen.getByPlaceholderText('Password');
  const submitButton = screen.getByText('Sign in');

  fireEvent.change(emailInput, { target: { value: 'abcd@gmail.com' } });
  fireEvent.change(passwordInput, { target: { value: 'abcd123' } });
  fireEvent.click(submitButton);

  await waitFor(() => {
    expect(screen.getByText('Successfully logged in')).toBeInTheDocument();
  }, { timeout: 4000 });  
});

//waitFor repeatedly checks if the condition inside it is met (i.e., if the text "Successfully logged in" appears in the document).
//await pauses the execution of the test until the condition is met or a timeout occurs.



test('should display "Invalid" message for invalid credentials', async () => {
  render(<Login />);

  const emailInput = screen.getByPlaceholderText('Enter email');
  const passwordInput = screen.getByPlaceholderText('Password');
  const submitButton = screen.getByText('Sign in');

  fireEvent.change(emailInput, { target: { value: 'wrong@gmail.com' } });
  fireEvent.change(passwordInput, { target: { value: 'wrongpassword' } });
  fireEvent.click(submitButton);

  await waitFor(() => {
    expect(screen.getByText('Invalid')).toBeInTheDocument();
  }, { timeout: 4000 });
});
