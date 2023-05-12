import { CssBaseline, ThemeProvider } from "@mui/material";
import { cleanup, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../stores";

import ProductTable from "./ProductTable";

afterEach(cleanup);

describe("ProductTable Component", () => {
  it("should render the Product Table header text", () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={{}}>
          <CssBaseline />
          <ProductTable />
        </ThemeProvider>
      </Provider>
    );

    expect(screen.getByText("Products")).toBeTruthy();
  });

  it("should render the Product Table Head", () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={{}}>
          <CssBaseline />
          <ProductTable />
        </ThemeProvider>
      </Provider>
    );

    expect(screen.getByText("SKU")).toBeTruthy();
    expect(screen.getByText("Name")).toBeTruthy();
    expect(screen.getByText("Price($)")).toBeTruthy();
  });

  it("should render the Product Table Row", () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={{}}>
          <CssBaseline />
          <ProductTable />
        </ThemeProvider>
      </Provider>
    );

    expect(screen.getAllByTestId("productTableRow").length).toBeGreaterThan(0);
  });
});
