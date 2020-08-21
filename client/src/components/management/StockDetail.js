import React, { useState } from 'react';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import { Checkbox } from '@material-ui/core';

const StockDetail = ({ product, onEdit, onDelete }) => {

  window.onbeforeunload = function(e) {
    return alert('정보 작성중')
  };
  const [modal, setModal] = useState(false);

  const onDeleteClick = () => {
    setModal(true);
  };

  const onCancel = () => {
    setModal(false);
  };

  const onConfirm = () => {
    setModal(false);
    onDelete();
  };

  const Modal = ({ visible }) => {
    if (!visible) return null;
    return (
      <div>
        <h2>제품을 삭제하시겠습니까?</h2>
        <Button onClick={onCancel}>취소</Button>
        <Button onClick={onConfirm}>확인</Button>
      </div>
    );
  };

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
            <TableCell>주문수</TableCell>
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
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.discount}</TableCell>
                <TableCell>주문수</TableCell>
                { product.enable === null ? 
                <>
                <TableCell>대기중</TableCell>
                <TableCell>대기중</TableCell>
                </> : 
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
          }
                <TableCell width="5%">
                <Button onClick={onEdit}>수정</Button>
                </TableCell>
                <TableCell width="5%">
                  <Button onClick={onDeleteClick}>삭제</Button>
                </TableCell>
                <Modal visible={modal} />
              </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
};

export default StockDetail;

// import React, { useState } from 'react';
// import { Button, Form, Input } from 'antd';

// const { TextArea } = Input;

// const ProductEdit = ({ onPublish, onChange, product }) => {

//   if (!product) return null;

//   console.log(product)
//   return (
// 		<div style={{ maxWidth: '700px', margin: '2rem auto' }}>
//       <Form onSubmit={onPublish}>
//         <label>제품명</label>
//         <Input onChange={onChange} name="title" value={product.title}/>
//         <br />
//         <br />

//         <label>제품설명</label>
//         <TextArea onChange={onChange} name="description" value={product.description}/>
//         <br />
//         <br />

//         <label>원가</label>
//         <Input onChange={onChange} name="price" value={product.price}/>
//         <br />
//         <br />

//         <label>할인가</label>
//         <Input onChange={onChange} name="discount" value={product.discount}/>
//         <br />
//         <br />

//         <label>할인인원</label>
//         <Input onChange={onChange} name="person" value={product.person}/>
//         <br />
//         <br />

//         <label>재고수량</label>
//         <Input onChange={onChange} name="stock" value={product.stock}/>
//         <br />
//         <br />

//         <label>판매상태</label>
//         <br/>
//         <input type="radio" onChange={onChange} name="enable" value="true" /> 판매 &nbsp;
//         <input type="radio" onChange={onChange} name="enable" value="false" /> 품절
//         <br />
//         <br />

//         <Button onClick={onPublish}>Submit</Button>
//       </Form>
//     </div>
// 	);
// };

// export default ProductEdit;
