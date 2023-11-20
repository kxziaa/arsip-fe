import React, {useEffect} from 'react'
import TableKeluar from '../components/TableKeluar'
import TambahKeluar from '../components/TambahKeluar'
import Layout from './Layout'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMe } from '../features/authSlice';


const SuratKeluar = () => {
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
    <div className='flex flex-col h-screen justify-center bg-[#F5F7F8]'>
        <TambahKeluar/>
        <TableKeluar />
    </div>
    </Layout>
  )
}

export default SuratKeluar