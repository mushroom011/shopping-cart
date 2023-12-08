import { render, screen } from "@testing-library/react";
import NavigationBar from "./NavigationBar";
import { BrowserRouter } from "react-router-dom";

describe("NavigationBar component", () => {
  it("renders list of items", () => {
    render(<NavigationBar />, { wrapper: BrowserRouter });
    expect(screen.getAllByRole("listitem")).toHaveLength(3);
  });
});
