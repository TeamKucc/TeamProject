import React, { useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    background:'#ffffff',
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },

}));



export default function Pricing({ onLogout, user }) {
  const classes = useStyles();
  let UserId = null;

  if (user) {
    UserId = user.replace(/['"]+/g, '')
  }
  return (
    <>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
       
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            <Link href="/" style={{ textDecoration: 'none' }}>
            LOGO
            </Link>
          </Typography>
          
          <nav>
              {user?(
            <Link href={`/userInfo/${UserId}`}  color="textPrimary"  className={classes.link}>
              내정보
              </Link>
              ):(
                <div></div>
              )}
          </nav>
          {user ?
          (
            <div>
              <Button color="primary" variant="outlined" className={classes.link} onClick={onLogout}>
                로그아웃
              </Button>
            </div>
          ) : (
            <div>{user}
              <Button href="/login" color="primary" variant="outlined" className={classes.link}>
                로그인
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
     
    </>
  );
}