import React, {useEffect} from 'react'
import TableMasuk from '../components/TableMasuk'
import TambahMasuk from '../components/TambahMasuk'
import Layout from './Layout';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMe } from '../features/authSlice';

const SuratMasuk = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {isError} = useSelector((state => state.auth));

  useEffect(()=>{
    dispatch(getMe());
  }, [dispatch]);

  useEffect(()=>{
    if(isError){
      navigate("/");
    }
  }, [isError, navigate])
  return (
    <>
    <Layout>
    <div className='flex flex-col justify-center h-screen bg-[#F5F7F8]'>
        <TambahMasuk />
        <TableMasuk />
    </div>
    </Layout>
    </>
  )
}

export default SuratMasuk