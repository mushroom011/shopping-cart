import { render, screen } from "@testing-library/react";
import Cart from "./Cart";

describe("Cart component", () => {
  it("renders empty cart", () => {
    render(<Cart />);
    expect(screen.getByText(/There's nothing here yet 👻/i)).toBeInTheDocument()
  });
});
