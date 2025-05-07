import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "../../components/Counter";

describe("Testing Counter component", () => {
  it("should render counter title", () => {
    render(<Counter />);
    const heading = screen.getByRole("heading", { name: "Counter" });
    expect(heading).toBeInTheDocument();
  });

  it("should render count value", () => {
    render(<Counter />);
    const count = screen.getByText("0");
    expect(count).toBeInTheDocument();
  });

  it("should increase the count on clicking on increment button", async () => {
    render(<Counter />);
    const countBeforeIncrement = screen.getByText("0");
    expect(countBeforeIncrement).toBeInTheDocument();
    const incrementButton = screen.getByRole("button", { name: "Inc" });
    await userEvent.click(incrementButton);
    const countAfterIncrement = await screen.findByText("1");
    expect(countAfterIncrement).toBeInTheDocument();
  });

  it("should decrease the count on clicking on decrement button", async () => {
    render(<Counter />);
    const countBeforeIncrement = screen.getByText("0");
    expect(countBeforeIncrement).toBeInTheDocument();
    const incrementButton = screen.getByRole("button", { name: "Inc" });
    await userEvent.click(incrementButton);
    const countAfterIncrement = await screen.findByText("1");
    expect(countAfterIncrement).toBeInTheDocument();
    const decrementButton = screen.getByRole("button", { name: "Dec" });
    await userEvent.click(decrementButton);
    const countAfterDecrement = await screen.findByText("0");
    expect(countAfterDecrement).toBeInTheDocument();
  });

  it("should not decrease the count if count is 0", async () => {
    render(<Counter />);
    const countBeforeDecrement = screen.getByText("0");
    expect(countBeforeDecrement).toBeInTheDocument();
    const decrementButton = screen.getByRole("button", { name: "Dec" });
    await userEvent.click(decrementButton);
    const countAfterDecrement = await screen.findByText("0");
    expect(countAfterDecrement).toBeInTheDocument();
  });
});
