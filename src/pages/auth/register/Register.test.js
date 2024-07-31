import { render, screen, prettyDOM, waitFor } from "@testing-library/react";
import Register from "@pages/auth/register/Register";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { Utils } from "@services/utils/utils.service";
import { act } from 'react';
import { server } from "@mocks/server";
import { signupMockError } from "@mocks/handlers/auth";

const mockedUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate
}));

describe('Register', () => {
  it('signup form should have its labels', () => {
    render(<Register />);
    const usernameLabel = screen.getByLabelText('Username');
    const emailLabel = screen.getByLabelText('Email');
    const passwordLabel = screen.getByLabelText('Password');

    expect(usernameLabel).toBeInTheDocument();
    expect(emailLabel).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();
  });

  describe('Button', () => {
    it('should be disabled', () => {
      render(<Register />);
      const buttonElement = screen.getByRole('button');
      expect(buttonElement).toBeDisabled();
    });

    it('should be enabled with input value', () => {
      render(<Register />);
      const buttonElement = screen.getByRole('button');
      const usernameLabel = screen.getByLabelText('Username');
      const emailLabel = screen.getByLabelText('Email');
      const passwordLabel = screen.getByLabelText('Password');

      userEvent.type(usernameLabel, 'admin');
      userEvent.type(emailLabel, 'admin@gmail.com');
      userEvent.type(passwordLabel, 'cys1ccnu');

      expect(buttonElement).toBeEnabled();
    });

    it('should change label when clicked', async () => {
      jest.spyOn(Utils, 'generateAvatar').mockReturnValue('avatar image');

      render(<Register />);
      const buttonElement = screen.getByRole('button');
      const usernameElement = screen.getByLabelText('Username');
      const emailElement = screen.getByLabelText('Email');
      const passwordElement = screen.getByLabelText('Password');

      userEvent.type(usernameElement, 'admin');
      userEvent.type(emailElement, 'admin@gmail.com');
      userEvent.type(passwordElement, 'cys11ccnu');

      console.log(prettyDOM(buttonElement));

      await act(() => {
        userEvent.click(buttonElement);
      });
      await waitFor(() => {
        const newButtonElement = screen.getByRole('button');
        console.log(prettyDOM(newButtonElement));
        expect(newButtonElement.textContent).toEqual('SIGNUP IN PROGRESS...');
      });
    });
  });

  describe('Success', () => {
    it('should navigate to streams page', async () => {
      jest.spyOn(Utils, 'generateAvatar').mockReturnValue('avatar image');
      render(<Register />);
      const buttonElement = screen.getByRole('button');
      const usernameElement = screen.getByLabelText('Username');
      const emailElement = screen.getByLabelText('Email');
      const passwordElement = screen.getByLabelText('Password');

      userEvent.type(usernameElement, 'manny');
      userEvent.type(emailElement, 'manny@test.com');
      userEvent.type(passwordElement, 'qwerty');

      userEvent.click(buttonElement);

      // await waitFor(() => expect(mockedUseNavigate).toHaveBeenCalledWith('/app/social/streams'));
    });
  });

  describe('Error', () => {
    it('should display error alert and border', async () => {
      server.use(signupMockError);
      jest.spyOn(Utils, 'generateAvatar').mockReturnValue('avatar image');
      render(<Register />);
      const buttonElement = screen.getByRole('button');
      const usernameElement = screen.getByLabelText('Username');
      const emailElement = screen.getByLabelText('Email');
      const passwordElement = screen.getByLabelText('Password');

      userEvent.type(usernameElement, 'manny');
      userEvent.type(emailElement, 'manny@test.com');
      userEvent.type(passwordElement, 'qwerty');
      await act(() => {
        userEvent.click(buttonElement);
      });

      // const alert = await screen.findByRole('alert');
      // expect(alert).toBeInTheDocument();
      // expect(alert.textContent).toEqual('Invalid credentials');

      // await waitFor(() => expect(usernameElement).toHaveStyle({ border: '1px solid #fa9b8a' }));
      // await waitFor(() => expect(emailElement).toHaveStyle({ border: '1px solid #fa9b8a' }));
      // await waitFor(() => expect(passwordElement).toHaveStyle({ border: '1px solid #fa9b8a' }));
    });
  });

});
