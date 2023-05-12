import { cleanup, render, screen } from "@testing-library/react";

import App from "./App";

afterEach(cleanup);

describe("App Component", () => {
  it("should render the App texts", () => {
    render(<App />);

    expect(screen.getByText("Electronic Shop")).toBeTruthy();
    expect(screen.getByText("Products")).toBeTruthy();
    expect(screen.getByText("Cart")).toBeTruthy();
  });
});
