import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { getUser, unloadUser, deleteMember } from '../../modules/admin';
import Member from '../../components/admin/Admin-member';

const AdminMemberContainer =()=>{
    const disPatch = useDispatch()
    const {userlist,member}=useSelector(({admin})=>({
        userlist:admin.userlist,
        member:admin.member
    }))
    useEffect(()=>{
        disPatch(getUser())
        return()=>{
            disPatch(unloadUser())
        }
    },[disPatch])

    useEffect(()=>{
        if(member){
            alert('완료 되었습니다')
        }
    },[member])
    const userDelete =(id)=>{
        
        let check = window.confirm(`정말 회원 ${id}을 정지 하시겠습니까?`)
        if(check){
            disPatch(deleteMember(id))
            alert('정지되었습니다')
        }else{
            alert('취소되었습니다')
        }
    }

    return(
        <>
        <Member user={userlist} userDelete={userDelete}/>
        </>
    )
}

export default AdminMemberContainer