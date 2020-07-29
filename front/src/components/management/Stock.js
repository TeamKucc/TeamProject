import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';
import { Input } from 'antd';
import { Checkbox } from '@material-ui/core';

// 상품코드, 상품명, 창고재고, 주문대기, 재고수정, 판매, 품절, 수정버튼
const Stock = ({ Products, onChange }) => {
  const onSelectedChange = (e, id) => {
    console.log(e.target.value);
    console.log(id);
  };

  useEffect(() => {});

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
            <TableCell>재고</TableCell>
            <TableCell>주문대기</TableCell>
            <TableCell>재고수정</TableCell>
            <TableCell>판매</TableCell>
            <TableCell>품절</TableCell>
            <TableCell>수정</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Prod.map((product, index) => {
            return (
              <TableRow key={index}>
                <TableCell>{product._id}</TableCell>
                <TableCell>
                  {/* <img src={product.thumbnails} />  */}
                  {product.title}
                </TableCell>
                <TableCell>{product.stock}</TableCell>
                <TableCell>주문대기</TableCell>
                <TableCell>
                  <Input onChange={onChange} name="stock" />
                </TableCell>
                <TableCell>
                  <Checkbox
                    defaultChecked
                    onChange={onSelectedChange}
                    value={true}
                    name={product._id}
                    aria-label="판매"
                  />
                </TableCell>
                <TableCell>
                  <Checkbox
                    onChange={(e) => onSelectedChange(e, product._id)}
                    value={false}
                    name={product._id}
                    aria-label="품절"
                  />
                </TableCell>
                <TableCell>
                  <Button>수정</Button>
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
