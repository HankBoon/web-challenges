import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Player from ".";

test("renders player information and two buttons", () => {
  render(<Player />);
  const button1 = screen.getByRole("button", { name: /-/i });
  expect(button1).toBeInTheDocument();
  const button2 = screen.getByRole("button", { name: /+/i });
  expect(button2).toBeInTheDocument();
});

test("calls callbacks when increasing or decreasing score", async () => {});
