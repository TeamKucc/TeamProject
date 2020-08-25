import React, {useState} from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import { Checkbox } from '@material-ui/core';
import { Link } from 'react-router-dom';

// 상품코드, 상품명, 창고재고, 주문대기, 재고수정, 판매, 품절, 수정버튼
const Stock = ({ Products }) => {
  
  let Prod = Object.keys(Products).map(function (key) {
    return Products[key];
  });

  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>상품코드</TableCell>
            <TableCell>상품명</TableCell>
            <TableCell></TableCell>
            <TableCell>원가</TableCell>
            <TableCell>판매가</TableCell>
            <TableCell>판매</TableCell>
            <TableCell>품절</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Prod.map((product, index) => {
            return (
              <TableRow key={index}>
                <TableCell width="15%">{product._id}</TableCell>
                <TableCell width="20px">
                  {product.thumbnails ? (
                    <img
                      style={{ maxHeight: '100px' }}
                      alt={`productImg-${index}`}
                      src={`${product.thumbnails[0].image.location}`}
                    />
                  ) : (
                    ''
                  )}
                </TableCell>
                <TableCell width="20%">{product.title}</TableCell>
                <TableCell>{product.price}</TableCell>
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
                        value={true}
                        name={product._id}
                        aria-label="판매"
                      />
                    </TableCell>
                    <TableCell>
                      <Checkbox
                        checked={product.enable === false}
                        value={false}
                        name={product._id}
                        aria-label="품절"
                      />
                    </TableCell>
                  </>
                )}
                <TableCell width="5%">
                  <Link to={`/product/upload/${product._id}`}>상세</Link>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default Stock;
