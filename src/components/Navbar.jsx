import React from 'react'
import LogoDinas from "../assets/img/LogoDinas.svg"
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LogOut, reset} from "../features/authSlice"

const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {user} = useSelector((state) => state.auth);

    const logout = () =>{
        dispatch(LogOut());
        dispatch(reset());
        navigate("/");
    };

    return (
    <>
    <nav class="bg-[#022B3A] border-gray-200 dark:bg-gray-900">
    <div class="flex flex-wrap justify-between items-center mx-4 py-2 max-w-screen-4xl">
    <img src={LogoDinas} alt="" className='w-52 p-2' />
        <div class="flex items-center space-x-6 rtl:space-x-reverse">
            <button className='bg-[#1F7A8C] p-2 px-4 rounded-2xl text-white' onClick={logout}>Keluar</button>
        </div>
    </div>
</nav>

    </>
  )
}

export default Navbar