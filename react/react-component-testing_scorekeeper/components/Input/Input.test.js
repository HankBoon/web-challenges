import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
  const onChange = jest.fn();
  render(
    <Input
      labelText="Test"
      placeholder="testPlaceholder"
      name="testName"
      value="testValue"
      onChange={() => {}}
    />
  );
  const inputElement = screen.getByLabelText("Test");
  expect(inputElement).toBeInTheDocument();
  expect(inputElement).toHaveAttribute("name", "testName");
  expect(inputElement).toHaveAttribute("value", "testValue");
});

test("calls callback on every user input", async () => {});
