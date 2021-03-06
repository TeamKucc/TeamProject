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

const Member = ({ user, userDelete,userRecover }) => {
  const classes = useStyles();
  console.log(typeof(user))
  if(!user) return null;

    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>고유ID</TableCell>
              <TableCell align="right">회원이름</TableCell>
              <TableCell align="right">이메일</TableCell>
              <TableCell align="right">회원ID</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {user.map((item, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {item._id}
                </TableCell>
                <TableCell align="right">{item.name}</TableCell>
                <TableCell align="right">{item.email}</TableCell>
                <TableCell align="right">{item.userID}</TableCell>
                <TableCell align="right">
                {item.isDelete?(
                    <>
                    <Button color="primary" onClick={() => userRecover(item._id)}>
                     복구
                  </Button>
                    </>
                ):(
                    <>
                    <Button color="primary" onClick={() => userDelete(item._id)}>
                     회원정지
                  </Button>
                  </>
                )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  );
};

export default Member;
