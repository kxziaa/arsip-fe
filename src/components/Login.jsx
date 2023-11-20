import React, { useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LoginUser, reset} from "../features/authSlice"

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user, isError, isSuccess, isLoading, message} = useSelector(
        (state) => state.auth
    );

    useEffect(() => {
        if(user || isSuccess){
            navigate("/beranda");
        }
        dispatch(reset());
    }, [user, isSuccess, dispatch, navigate]);

    const Auth = (e) => {
            e.preventDefault();
            dispatch(LoginUser({email, password }));
    };

    return (
    <>
    <div className='flex items-center h-screen justify-center bg-[#022B3A] '>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col center">
            <form onSubmit={Auth}>
                {isError && <p className='text-center'>{message}</p>}
                <div className="mb-4">
                <label className="block text-grey-darker text-sm font-bold mb-2" for="email">
                    Email
                </label>
                    <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" 
                        type="text" 
                        value={email} 
                        onChange={(e)=>setEmail(e.target.value)} placeholder="Email" 
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-grey-darker text-sm font-bold mb-2" for="password">
                    Kata Sandi
                    </label>
                    <input 
                    className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" 
                    type="password" 
                    value={password} 
                    onChange={(e)=>setPassword(e.target.value)} 
                    placeholder="*************" />
                <p class="text-red text-xs italic">Masukkan Kata Sandi</p>
                </div>
                <div class="flex items-center justify-between">
                    <button class=" bg-[#022B3A] text-white font-bold py-2 px-4 rounded" type="submit">
                        { isLoading ? "Memuat..." : "Masuk"}
                    </button>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default Login