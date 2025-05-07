import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import Hello from "../../components/Hello";

describe("Testing Hello Components", () => {
  test("should render with message Hello World", () => {
    render(<Hello />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Hello World");
  });

  test("should change the text to bye when clicked on button", async () => {
    render(<Hello />);
    const headingBeforeClick = screen.getByRole("heading");
    expect(headingBeforeClick).toHaveTextContent("Hello World");
    const button = screen.getByRole("button", { name: /Click/i });
    await userEvent.click(button);
    const headingAfterClick = screen.getByRole("heading");
    expect(headingAfterClick).toHaveTextContent("Bye World");
  });
});
