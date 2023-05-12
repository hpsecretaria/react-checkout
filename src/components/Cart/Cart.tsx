import React from "react";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useCart } from "../../hooks/cart";

import { pricingRules } from "../data";

function Cart(): React.ReactElement {
  const { cartItems, removeItem, addItem, total, discounts } =
    useCart(pricingRules);

  return (
    <>
      <Typography variant="h2">Cart</Typography>
      {!cartItems.length && (
        <Typography variant="body1" textAlign="center">
          No Items
        </Typography>
      )}
      {!!cartItems.length && (
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Quantity</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Price($)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cartItems.map(({ item, quantity }) => (
                <TableRow
                  key={item.SKU}
                  data-testid="cartItemRow"
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="baseline"
                    >
                      <Button
                        variant="contained"
                        color="primary"
                        type="button"
                        size="small"
                        onClick={() => addItem(item)}
                      >
                        +
                      </Button>
                      <span>{quantity}</span>
                      <Button
                        variant="contained"
                        color="error"
                        type="button"
                        size="small"
                        onClick={() => removeItem(item)}
                      >
                        -
                      </Button>
                    </Stack>
                  </TableCell>
                  <TableCell align="right">{item.name}</TableCell>
                  <TableCell align="right">
                    {(item.price * quantity).toFixed(2)}
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell colSpan={3} align="center">
                  Discounts
                </TableCell>
              </TableRow>
              {discounts.map((discount, index) => (
                <TableRow key={`discount${index}`}>
                  <TableCell colSpan={2} align="right">
                    {discount.name}
                  </TableCell>
                  <TableCell align="right">{`-${
                    discount.discount || 0
                  }`}</TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell colSpan={2} align="right">
                  Total:{" "}
                </TableCell>
                <TableCell align="right">{total}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
}

export default Cart;
