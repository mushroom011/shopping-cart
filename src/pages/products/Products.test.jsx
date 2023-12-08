import { render, screen } from "@testing-library/react";
import ProductList from "./Products";

describe("ProductList component", () => {
  it("renders Products text", () => {
    render(<ProductList />);
    expect(screen.getByText(/Products/i)).toBeInTheDocument()
  });
});
