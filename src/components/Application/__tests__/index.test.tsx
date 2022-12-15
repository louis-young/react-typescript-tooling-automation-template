import { render, screen } from "@testing-library/react";
import { Application } from "..";

describe("<Application />", () => {
  it("renders the application heading", () => {
    render(<Application />);

    const heading = screen.getByRole("heading", { name: "Application" });

    expect(heading).toBeInTheDocument();
  });
});
