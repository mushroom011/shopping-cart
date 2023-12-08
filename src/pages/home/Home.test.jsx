import { render, screen } from "@testing-library/react";
import Home from "./Home";

describe("Home component", () => {
  it("renders correct heading", () => {
    render(<Home />);
    expect(screen.getByRole("heading").textContent).toMatch(/Awesom Collections/i);
  });
});
