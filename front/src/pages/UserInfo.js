import React from 'react';
import UserInfoContainer from '../container/auth/UserInfoContainer'
import HeaderContainer from "../container/common/HeaderContainer"

const UserInfo =()=>{
    return(
        <div>
            <HeaderContainer />
            <UserInfoContainer />
        </div>

    )
}

export default UserInfo;