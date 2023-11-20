import React, {useEffect} from 'react'
import Layout from './Layout'
import EditUser from '../components/EditUser.jsx'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMe } from '../features/authSlice';

const HalEditUser = () => {
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
    <Layout>
        <EditUser />
    </Layout>
  )
}

export default HalEditUser