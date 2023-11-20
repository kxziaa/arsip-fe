import React, {useEffect, useState} from 'react'
import axios from 'axios';
import Layout from './Layout';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMe } from '../features/authSlice';

const Beranda = () => {

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
  }, [isError, navigate])

  // const [recordCount, setRecordCount] = useState(0);

  // useEffect(() => {
  //   const fetchRecordCount = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:5000/countSM');
  //       setRecordCount(response.data);
  //     } catch (error) {
  //       console.error('Error fetching record count:', error);
  //     }
  //   };

  //   fetchRecordCount();
  // }, []);

  return (
    <>
    <Layout >
      <div className='flex  h-screen '>
        <h1>Selamat Datang, <strong>{user && user.name}</strong> </h1>
      </div>
    </Layout>
    </>
  )
}

export default Beranda