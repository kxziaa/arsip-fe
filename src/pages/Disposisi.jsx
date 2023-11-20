import React, {useEffect} from 'react'
import TambahDisposisi from '../components/TambahDisposisi.jsx'
import TableDisposisi from '../components/TableDisposisi.jsx'
import Layout from './Layout.jsx'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMe } from '../features/authSlice';

const Disposisi = () => {
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
    {/* <div className='flex flex-col justify-center ml-60 h-screen bg-[#F5F7F8]'>
    <TambahDisposisi />
    <TableDisposisi />
    </div> */}

    <Layout >
        <TambahDisposisi />
        <TableDisposisi />
    </Layout>
    </>
  )
}

export default Disposisi