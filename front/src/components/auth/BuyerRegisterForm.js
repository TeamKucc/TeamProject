import React from 'react';
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

const RegisterForm = (type, form, onChange, onSubmit, error) => {
    const classes = useStyles()

    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={onSubmit}>
                <TextField id="standard-basic" name="userID" label="ID" value={form.userID} onChange={onChange} />
                <TextField id="standard-basic" name="name" label="Name" value={form.name} onChange={onChange} />
                <TextField id="standard-basic" name="password" label="password" value={form.password} onChange={onChange} />
                <TextField id="standard-basic" name="passwordconfirm" label="password-confirm" value={form.confirm} onChange={onChange} />
                <TextField id="standard-basic" name="email" label="Email" value={form.email} onChange={onChange} />
            </form>
            <button type="submit">완료</button>
        </div>
    )
}

export default RegisterForm;