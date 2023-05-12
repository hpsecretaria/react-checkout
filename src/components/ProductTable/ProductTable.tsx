import React from "react";

import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

import { useAppDispatch } from "../../hooks";
import { addItem } from "../../stores/cart";
import { productData } from "../data";

function ProductTable(): React.ReactElement {
  const dispatch = useAppDispatch();

  return (
    <>
      <Typography variant="h2">Products</Typography>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>SKU</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Price($)</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productData.map((item) => (
              <TableRow
              data-testid="productTableRow"
                key={item.SKU}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {item.SKU}
                </TableCell>
                <TableCell align="right">{item.name}</TableCell>
                <TableCell align="right">{item.price.toFixed(2)}</TableCell>
                <TableCell align="center">
                  <Button
                    variant="contained"
                    type="button"
                    onClick={() => dispatch(addItem(item))}
                  >
                    Add
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default ProductTable;
