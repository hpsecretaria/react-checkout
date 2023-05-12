import { cleanup, render, screen } from "@testing-library/react";

import Header from "./Header";

afterEach(cleanup);

describe("Header Component", () => {
  it("should render the header text", () => {
    render(<Header />);

    expect(screen.getByText("Electronic Shop")).toBeTruthy();
  });
});
