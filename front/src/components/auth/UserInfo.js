import React from 'react';
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core'
import styled from 'styled-components';

const UserInfoBlock = styled.div`
    position:absolute;
    top:4rem;
    left:0;
    right:0;
    bottom:0;
    background: white;
    display: flex;
    flex-direction: colum;
    justify-content: center;
     align-items: center;
`
const FormBox = styled.div`
padding: 2rem;
width: 360px;
background: white;
boder-radius: 2px;
`

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
        textAlign:'center',
        
    },
}));

const UserInfo = ({ onSubmit, form, user, onChange,error }) => {
    const classes = useStyles()

    return (
        <UserInfoBlock>
            <FormBox>
                <form className={classes.root} noValidate autoComplete="off" onSubmit={onSubmit}>
                    <TextField id="standard-basic" name="userID" label="ID" value={form.userID} onChange={onChange} />
                    <TextField id="standard-basic" name="name" label="Name" value={form.name} onChange={onChange} />
                    <TextField id="standard-basic" name="password" label="password" type="password"  onChange={onChange} />
                    <TextField id="standard-basic" name="passwordConfirm" label="password-confirm" type="password"  onChange={onChange} />
                    <TextField id="standard-basic" name="email" label="Email" value={form.email} onChange={onChange} />
                    <button type="submit">완료</button>
                </form>
                <div>{error}</div>
            </FormBox>
        </UserInfoBlock>
    )
}
export default UserInfo