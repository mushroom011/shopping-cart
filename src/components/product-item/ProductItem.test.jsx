import { render, screen } from "@testing-library/react";
import ProductItem from "./ProductItem";

describe("ProductItem component", () => {
  it("renders 'Add to Cart' button", () => {
    render(<ProductItem />);
    expect(screen.getByText(/Add to Cart/i)).toBeInTheDocument()
  });
});
