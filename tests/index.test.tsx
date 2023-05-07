import Home from "../src/app/(client)/home/page";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Home Page", () => {
  it("should render the home page", () => {
    render(<Home />);
    expect(screen.getByTestId("header")).toBeInTheDocument();
  });
});
