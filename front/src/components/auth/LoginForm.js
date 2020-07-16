import React from 'react';
import styled from 'styled-components'
import Responsive from '../common/Responsive'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom';


const AuthFormBlock = styled(Responsive)`
    display:flex;
    width:517px;
    heigth:132px;
`
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

const AuthForm = ({ form, onChange, onSubmit }) => {
    const classes = useStyles()

    return (
        <>
            <AuthFormBlock>
                <form className={classes.root} noValidate autoComplete="off" onSubmit={onSubmit}>
                    <TextField id="standard-basic" name="userID" label="ID" value={form.username} onChange={onChange}/>
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
            <Link to="/register">회원가입</Link>
            </AuthFormBlock>
        </>
    )
}

export default AuthForm;