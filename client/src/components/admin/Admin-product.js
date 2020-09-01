import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
});

const Product = ({ product, productDelete }) => {
  const classes = useStyles();
  if (!product) return null;
  let prod = Object.keys(product).map(function (key) {
    return product[key];
  });
  console.log(product);
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>고유ID</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">판매자고유ID</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {prod.map((item, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {item._id}
              </TableCell>
              <TableCell align="right">{item.category}</TableCell>
              <TableCell align="right">{item.title}</TableCell>
              <TableCell align="right">{item.seller}</TableCell>
              <TableCell align="right">
                <Button color="primary">삭제하기</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default Product;
