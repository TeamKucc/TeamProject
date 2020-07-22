import React from 'react';
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

const ErrorMsg = styled.div`
    color:red;
    text-align:center;
    font-size:0.875rem;
    margin-top:1rem;
`

const RegisterForm = ( {form, onChange, onSubmit, error}) => {
    const classes = useStyles()

    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={onSubmit}>
                <TextField id="standard-basic" name="userID" label="ID" value={form.userID} onChange={onChange} />
                <TextField id="standard-basic" name="name" label="Name" value={form.name} onChange={onChange} />
                <TextField id="standard-basic" name="password" label="password" type="password" value={form.password} onChange={onChange} />
                <TextField id="standard-basic" name="passwordConfirm" label="password-confirm" type="password" value={form.passwordConfirm} onChange={onChange} />
                <TextField id="standard-basic" name="email" label="Email" value={form.email} onChange={onChange} />
                <ErrorMsg>{error}</ErrorMsg>
            <button type="submit">완료</button>
            </form>
        </div>
    )
}

export default RegisterForm;