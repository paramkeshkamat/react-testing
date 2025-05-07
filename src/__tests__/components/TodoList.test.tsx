import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import TodoList from "../../components/TodoList";

describe("Testing Counter component", () => {
  it("should render Todo List title", () => {
    render(<TodoList />);
    const heading = screen.getByRole("heading", { name: "Todo List" });
    expect(heading).toBeInTheDocument();
  });

  it("should render input with placeholder Enter todo...", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("Enter todo...");
    expect(input).toBeInTheDocument();
  });

  it("should add a todo to list", async () => {
    render(<TodoList />);
    const todosBefore = screen.queryAllByTestId("todo");
    expect(todosBefore.length).toBe(0);
    const input = screen.getByPlaceholderText("Enter todo...");
    await userEvent.type(input, "Test todo");
    const submitButton = screen.getByRole("button", { name: "Submit" });
    await userEvent.click(submitButton);
    const todosAfter = screen.queryAllByTestId("todo");
    expect(todosAfter.length).toBe(1);
  });

  it("should not add a todo if input is empty", async () => {
    render(<TodoList />);
    const todosBefore = screen.queryAllByTestId("todo");
    expect(todosBefore.length).toBe(0);
    const submitButton = screen.getByRole("button", { name: "Submit" });
    await userEvent.click(submitButton);
    const todosAfter = screen.queryAllByTestId("todo");
    expect(todosAfter.length).toBe(0);
  });

  it("should delete a todo when clicked on delete button", async () => {
    render(<TodoList />);
    const todosBefore = screen.queryAllByTestId("todo");
    expect(todosBefore.length).toBe(0);

    const input = screen.getByPlaceholderText("Enter todo...");
    await userEvent.type(input, "Test todo");

    const submitButton = screen.getByRole("button", { name: "Submit" });
    await userEvent.click(submitButton);

    const todosAfterAdd = screen.queryAllByTestId("todo");
    expect(todosAfterAdd.length).toBe(1);
    
    const deleteButtons = screen.queryAllByTestId("delete-todo");
    await userEvent.click(deleteButtons[0]);
    
    const todosAfterDelete = screen.queryAllByTestId("todo");
    expect(todosAfterDelete.length).toBe(0);
  });
});
