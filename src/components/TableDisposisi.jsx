import React, {useState, useEffect} from 'react';
import axios from 'axios';
import * as HiIcons from "react-icons/hi";
import * as FiIcons from "react-icons/fi";
import * as MdIcons from "react-icons/md";
import { Link } from 'react-router-dom';


const TableDisposisi = () => {
  const [disposisi, setDisposisi] = useState([]);

  useEffect(()=>{
    getDisposisi();
  },[]);

  const getDisposisi = async() => {
    const response = await axios.get("http://localhost:5000/disp");
    setDisposisi(response.data);
  }


  
  return (
    <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
        <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
            <thead class="bg-gray-50">
                <tr>
                  
                    <th scope="col" class="px-6 py-4 font-medium text-gray-900">Tujuan Disposisi</th>
                    <th scope="col" class="px-6 py-4 font-medium text-gray-900">Catatan</th>
                    <th scope="col" class="px-6 py-4 font-medium text-gray-900">ID Surat</th>
                    <th scope="col" class="px-6 py-4 font-medium text-gray-900">Pengirim</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-gray-100 border-t border-gray-100">
              {disposisi.map((disposisi)=>(
                <tr class="hover:bg-gray-50" key={disposisi.id}>
                    <td class="flex gap-3 px-6 py-4 font-normal text-gray-900">
                      <p>{disposisi.tujuanDisp}</p>
                    </td>
                    <td class="px-6 py-4">
                      {disposisi.catatan}
                    </td>
                    <td class="px-6 py-4">
                      {disposisi.SMasukId}
                    </td>
                    <td class="px-6 py-4">
                      {disposisi.user.name}
                    </td>
                  </tr>
              ))}
                

            </tbody>
  </table>
</div>
  )
}

export default TableDisposisi