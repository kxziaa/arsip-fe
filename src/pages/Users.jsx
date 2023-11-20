import React, {useEffect} from 'react'
import Layout from './Layout'
import UserList from '../components/UserList'
import TambahUser from '../components/TambahUser'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMe } from '../features/authSlice';


const Users = () => {
    const dispatch = useDispatch();
  const navigate = useNavigate();
  const {isError, user} = useSelector((state => state.auth));

  useEffect(()=>{
    dispatch(getMe());
  }, [dispatch]);

  useEffect(()=>{
    if(isError){
      navigate("/");
    }
    if(user && user.role !== "admin"){
        navigate("/beranda")
    }
  }, [isError, user, navigate])
  return (
    <Layout >
        <div className='flex flex-col h-screen justify-center '>
        <TambahUser />
        <UserList />
        </div>
    </Layout>
  )
}


export default Users