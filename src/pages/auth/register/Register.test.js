import { render, screen } from "@testing-library/react";
import Register from "@pages/auth/register/Register";
import { BrowserRouter } from "react-router-dom";

describe('Register', () => {
  it('signup form should have its labels', () => {
    render(<BrowserRouter><Register /></BrowserRouter>);
    const usernameLabel = screen.getByLabelText('Username')
    const emailLabel = screen.getByLabelText('Email')
    const passwordLabel = screen.getByLabelText('Password')

    expect(usernameLabel).toBeInTheDocument();
    expect(emailLabel).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();
  })
})
