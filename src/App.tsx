import React from "react";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import ProductTable from "./components/ProductTable/ProductTable";
import Cart from "./components/Cart";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./stores";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App(): React.ReactElement {
  return (
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Header />
        <Container component="main">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <ProductTable />
            </Grid>
            <Grid item xs={12} md={6}>
              <Cart />
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
