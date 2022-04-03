import Header from "./Header.jsx";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

const user = {
  name: "Dani",
  avatar: "https://eu.ui-avatars.com/api/?name=Dani",
};

const logout = jest.fn();
const login = jest.fn();

describe("Header", () => {
  it("should render the login button when user is null", () => {
    render(<Header user={null} login={login} logout={logout} />);
    const buttonLogin = screen.getByRole("button", { name: "Login" });

    expect(buttonLogin).toBeInTheDocument();
  });

  it("should call login function when click on login button", () => {
    render(<Header user={null} login={login} logout={logout} />);
    const buttonLogin = screen.getByRole("button", { name: "Login" });

    fireEvent.click(buttonLogin);

    expect(login).toHaveBeenCalledTimes(1);
  });

  it("should do not render login button when user is not null", () => {
    render(<Header user={user} login={login} logout={logout} />);
    const buttonLogin = screen.queryByRole("button", { name: "Login" });

    expect(buttonLogin).not.toBeInTheDocument();
  });

  it("should render the user name and user avatar when user is not null", () => {
    render(<Header user={user} login={login} logout={logout} />);
    const userName = screen.getByText(user.name);
    const userAvatar = screen.getByAltText(user.name);

    expect(userName).toBeInTheDocument();
    expect(userAvatar).toBeInTheDocument();
  });

  it("should render the logout button when user is not null", () => {
    render(<Header user={user} login={login} logout={logout} />);
    const buttonLogout = screen.getByRole("button", { name: "Logout" });

    expect(buttonLogout).toBeInTheDocument();
  });
});
