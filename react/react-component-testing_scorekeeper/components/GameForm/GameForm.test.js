import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GameForm from "./index";

jest.mock("next/router", () => ({
  useRouter() {
    return { push: jest.fn() };
  },
}));

test("renders two input fields and a button", () => {
  render(<GameForm />);
  const button = screen.getByRole("button", { name: /create game/i });
  expect(button).toBeInTheDocument();

  const input1 = screen.getByLabelText(/name of game/i);
  expect(input1).toBeInTheDocument();

  const input2 = screen.getByLabelText(/player names, separated by comma/i);
  expect(input2).toBeInTheDocument();
});

test("renders a form with the accessible name 'Create a new game'", () => {
  render(<GameForm />);
  const form = screen.getByRole("form", { name: /create a new game/i });
  expect(form).toBeInTheDocument();
});

test("submits the correct form data when every field is filled out", async () => {});

test("does not submit form if one input field is left empty", async () => {});
