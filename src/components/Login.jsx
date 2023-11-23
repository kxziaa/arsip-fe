import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser, reset } from "../features/authSlice";
import ToastError from "./toast/ToastError";
import ToastSuccess from "./toast/ToastSuccess";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/beranda");
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginUser({ email, password }));
  };

  return (
    <>
      <div className="flex items-center justify-center w-full min-h-screen mx-auto text-black bg-white">
        {isError && <ToastError message={message} />}
        {isSuccess && <ToastSuccess message={message} />}
        <form onSubmit={Auth}>
          <section className="flex w-[30rem] flex-col space-y-10 shadow-md p-10">
            <div className="text-4xl font-medium text-center">MASUK</div>

            <div className="w-full text-lg duration-300 transform bg-transparent border-b-2 focus-within:border-[rgb(31,122,140)]">
              <input
                type="text"
                placeholder="Email or Username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border-none outline-none focus:outline-none"
              />
            </div>

            <div className="w-full text-lg duration-300 transform bg-transparent border-b-2 focus-within:border-[rgb(31,122,140)]">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent border-none outline-none focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="py-2 font-bold uppercase rounded-md text-white duration-300 transform bg-[#022B3A] hover:bg-[rgb(31,122,140)]"
            >
              {isLoading ? "Memuat..." : "Masuk"}
            </button>
          </section>
        </form>
      </div>
    </>
  );
};

export default Login;
