import React from 'react';
import styled from 'styled-components'
import Responsive from '../common/Responsive'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '26ch',
        },
        textAlign: 'center',
    },
    link:{
        left:"0"
    }
}));

const AuthForm = ({ form, onChange, onSubmit }) => {
    const classes = useStyles()

    return (
        <>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={onSubmit}>
                <TextField id="standard-required" name="userID" label="ID" value={form.username} onChange={onChange} />
                <TextField
                    id="standard-password-input"
                    name="password"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    value={form.password}
                    onChange={onChange}
                />
                <button >로그인</button>
            </form>
            <Link to="/register" className={classes.link}>회원가입</Link>

        </>
    )
}

export default AuthForm;