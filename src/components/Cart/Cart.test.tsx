import { CssBaseline, ThemeProvider } from "@mui/material";
import { cleanup, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { Item } from "../../models/item";
import store from "../../stores";
import { addItem, removeItem } from "../../stores/cart";
import { productData } from "../data";

import Cart from "./Cart";

afterEach(cleanup);

describe("Cart Component", () => {
  it("should render the Cart header text", () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={{}}>
          <CssBaseline />
          <Cart />
        </ThemeProvider>
      </Provider>
    );

    expect(screen.getByText("Cart")).toBeTruthy();
  });

  it("should render the 'No Items' Text", () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={{}}>
          <CssBaseline />
          <Cart />
        </ThemeProvider>
      </Provider>
    );

    expect(screen.getByText("No Items")).toBeTruthy();
  });
});

describe("Discount", () => {
  it("should render the applied discount", () => {
    store.dispatch(addItem(productData[0]));
    store.dispatch(addItem(productData[0]));
    store.dispatch(addItem(productData[0]));
    store.dispatch(addItem(productData[0]));
    store.dispatch(addItem(productData[0]));

    render(
      <Provider store={store}>
        <ThemeProvider theme={{}}>
          <CssBaseline />
          <Cart />
        </ThemeProvider>
      </Provider>
    );

    expect(screen.getAllByTestId("cartItemRow").length).toBeGreaterThanOrEqual(
      0
    );
    expect(screen.getByText("5")).toBeTruthy();
    expect(screen.getByText("2749.95")).toBeTruthy();
    expect(screen.getByText("-250")).toBeTruthy();
    expect(screen.getByText("2499.95")).toBeTruthy();
  });
});
