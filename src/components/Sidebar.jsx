import React, { useState } from "react";
import * as AiIcons from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../features/authSlice";

const Sidebar = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <div className=" h-screen w-60 bg-[#022B3A]">
        <div className="mt-2 ">
          <div className="p-2 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-[rgb(31,122,140)] text-white">
            <Link to="/">
              <span class="text-[20px] text-gray-200 font-bold">Beranda</span>
            </Link>
          </div>
          {user && user.role === "admin" && (
            <div>
              <div className="p-2 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-[rgb(31,122,140)] text-white">
                <Link to="/suratmasuk">
                  <span class="text-[20px] text-gray-200 font-bold">
                    Surat Masuk
                  </span>
                </Link>
              </div>
              <div className="p-2 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-[#1F7A8C] text-white">
                <Link to="/suratkeluar">
                  <span class="text-[20px] text-gray-200 font-bold">
                    Surat Keluar
                  </span>
                </Link>
              </div>
              <div className="p-2 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-[rgb(31,122,140)] text-white">
                <Link to="/disposisi">
                  <span class="text-[20px] text-gray-200 font-bold">
                    Disposisi
                  </span>
                </Link>
              </div>
            </div>
          )}

          {user && user.role === "admin" && (
            <div className="p-2 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-[rgb(31,122,140)] text-white">
              <Link to="/users">
                <span class="text-[20px] text-gray-200 font-bold">
                  Pengguna
                </span>
              </Link>
            </div>
          )}

          {user && user.role !== "admin" && (
            <div>
              <div className="flex items-center p-2 px-4 mt-3 text-white duration-300 rounded-md">
                <span class="text-[20px] text-red-200 font-bold">
                  Disposisi
                </span>
              </div>
              <div className="p-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-[rgb(31,122,140)] text-white">
                <Link to="/dispmasuk">
                  <span class="ml-8 text-[20px] text-gray-200 font-bold">
                    Masuk
                  </span>
                </Link>
              </div>
              <div className="p-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-[rgb(31,122,140)] text-white">
                <Link to="/disposisi">
                  <span class="ml-8 text-[20px] text-gray-200 font-bold">
                    Keluar
                  </span>
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
