import React, { useState } from 'react';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import { Checkbox } from '@material-ui/core';

const StockDetail = ({ product, onEdit }) => {
  window.onbeforeunload = function (e) {
    return alert('정보 작성중');
  }

  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>상품코드</TableCell>
            <TableCell>상품명</TableCell>
            <TableCell>원가</TableCell>
            <TableCell>판매가</TableCell>
            {/* <TableCell>재고수정</TableCell> */}
            <TableCell>판매</TableCell>
            <TableCell>품절</TableCell>
            <TableCell></TableCell>
            {/* <TableCell></TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell width="15%">{product._id}</TableCell>
            <TableCell width="20%">{product.title}</TableCell>
            <TableCell>{product.price}</TableCell>zz
            <TableCell>{product.discount}</TableCell>
            {product.enable === null ? (
              <>
                <TableCell>대기중</TableCell>
                <TableCell>대기중</TableCell>
              </>
            ) : (
              <>
                <TableCell>
                  <Checkbox
                    checked={product.enable === true}
                    // onChange={onCheckedChange}
                    value={true}
                    name={product._id}
                    aria-label="판매"
                  />
                </TableCell>
                <TableCell>
                  <Checkbox
                    checked={product.enable === false}
                    // onChange={onCheckedChange}
                    value={false}
                    name={product._id}
                    aria-label="품절"
                  />
                </TableCell>
              </>
            )}
            <TableCell width="5%">
              <Button onClick={onEdit}>수정</Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
};

export default StockDetail;
