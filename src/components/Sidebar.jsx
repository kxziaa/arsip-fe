import React, { useState } from "react";
import * as AiIcons from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../features/authSlice";

const Sidebar = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <div className="flex h-full p-4 bg-white shadow-xl w-72">
        <div className="flex flex-col w-full h-screen space-y-4 overflow-x-hidden transition-transform duration-300 ease-in-out ">
          <Link
            to="/"
            className="px-2 py-2 border-b-2 flex items-center space-x-3 font-medium text-gray-700 transition duration-150 rounded-md hover:bg-[#022B3A] hover:text-white "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M3 6a3 3 0 013-3h2.25a3 3 0 013 3v2.25a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm9.75 0a3 3 0 013-3H18a3 3 0 013 3v2.25a3 3 0 01-3 3h-2.25a3 3 0 01-3-3V6zM3 15.75a3 3 0 013-3h2.25a3 3 0 013 3V18a3 3 0 01-3 3H6a3 3 0 01-3-3v-2.25zm9.75 0a3 3 0 013-3H18a3 3 0 013 3V18a3 3 0 01-3 3h-2.25a3 3 0 01-3-3v-2.25z"
                clipRule="evenodd"
              />
            </svg>

            <div className="text-[20px] hover:text-white font-medium">
              Beranda
            </div>
          </Link>
          {user && user.role === "admin" && (
            <div>
              <div className="px-2 py-2 border-b-2 flex items-center space-x-3 font-medium text-gray-700 transition duration-150 rounded-md hover:bg-[#022B3A] hover:text-white ">
                <Link to="/suratmasuk">
                  <span class="text-[20px]  font-medium">Surat Masuk</span>
                </Link>
              </div>
              <div className="p-2 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-[#1F7A8C] text-white">
                <Link to="/suratkeluar">
                  <span class="text-[20px]  font-medium">Surat Keluar</span>
                </Link>
              </div>
              <div className="px-2 py-2 border-b-2 flex items-center space-x-3 font-medium text-gray-700 transition duration-150 rounded-md hover:bg-[#022B3A] hover:text-white ">
                <Link to="/disposisi">
                  <span class="text-[20px]  font-medium">Disposisi</span>
                </Link>
              </div>
            </div>
          )}

          {user && user.role === "admin" && (
            <div className="px-2 py-2 border-b-2 flex items-center space-x-3 font-medium text-gray-700 transition duration-150 rounded-md hover:bg-[#022B3A] hover:text-white ">
              <Link to="/users">
                <span class="text-[20px]  font-medium">Pengguna</span>
              </Link>
            </div>
          )}

          {user && user.role !== "admin" && (
            <div>
              <div className="flex items-center p-2 px-4 mt-3 text-white duration-300 rounded-md">
                <span class="text-[20px] text-red-200 font-medium">
                  Disposisi
                </span>
              </div>
              <div className="p-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-[rgb(31,122,140)] text-white">
                <Link to="/dispmasuk">
                  <span class="ml-8 text-[20px]  font-medium">Masuk</span>
                </Link>
              </div>
              <div className="p-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-[rgb(31,122,140)] text-white">
                <Link to="/disposisi">
                  <span class="ml-8 text-[20px]  font-medium">Keluar</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
