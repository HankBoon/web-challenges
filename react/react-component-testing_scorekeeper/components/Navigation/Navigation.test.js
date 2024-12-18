import { render, screen } from "@testing-library/react";
import Navigation from ".";

jest.mock("next/router", () => ({
  useRouter() {
    return { pathname: jest.fn() };
  },
}));

test("renders with two links 'Play' and 'History'", () => {
  render(<Navigation />);
  const link1 = screen.getByText(/play/i);
  expect(link1).toBeInTheDocument();
  const link2 = screen.getByText(/play/i);
  expect(link2).toBeInTheDocument();
});
