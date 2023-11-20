import React, {useState, useEffect} from 'react';
import axios from 'axios';
import * as HiIcons from "react-icons/hi";
import * as FiIcons from "react-icons/fi";
import * as MdIcons from "react-icons/md";
import { Link } from 'react-router-dom';


const TableKeluar = () => {
  const [sKeluar, setSKeluar] = useState([]);

  useEffect(()=>{
    getSKeluar();
  },[]);

  const getSKeluar = async() => {
    const response = await axios.get("http://localhost:5000/sk");
    setSKeluar(response.data);
  }

  const formatTanggal = (tanggal) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric'  };
    const dateObject = new Date(tanggal);
    return dateObject.toLocaleDateString(undefined, options);
  };

  const deleteSK = async(sKeluarId) =>{
    try {
      await axios.delete(`http://localhost:5000/sk/${sKeluarId}`);
      getSKeluar();
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
        <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
            <thead class="bg-gray-50">
                <tr>
                    <th scope="col" class="px-6 py-4 font-medium text-gray-900">Nomor Surat</th>
                    <th scope="col" class="px-6 py-4 font-medium text-gray-900">Tujuan Surat</th>
                    <th scope="col" class="px-6 py-4 font-medium text-gray-900">Perihal Surat</th>
                    <th scope="col" class="px-6 py-4 font-medium text-gray-900">Tanggal Keluar</th>
                    <th scope="col" class="px-6 py-4 font-medium text-gray-900">Keterangan</th>
                    <th scope="col" class="px-6 py-4 font-medium text-gray-900">File</th>
                    <th scope="col" class="px-6 py-4 font-medium text-gray-900"></th>
                </tr>
            </thead>
            <tbody class="divide-y divide-gray-100 border-t border-gray-100">
              {sKeluar.map((sKeluar)=>(
                <tr class="hover:bg-gray-50" key={sKeluar.id}>
                    <td class="flex gap-3 px-6 py-4 font-normal text-gray-900">
                      <p>{sKeluar.noSK}</p>
                    </td>
                    <td class="px-6 py-4">
                      {sKeluar.tujuanSK}
                    </td>
                    <td class="px-6 py-4">
                      {sKeluar.perihalSK}
                    </td>
                    <td class="px-6 py-4">
                      {formatTanggal(sKeluar.tanggalSK)}
                    </td>
                    <td class="px-6 py-4">
                      {sKeluar.keteranganSK}
                    </td>
                    <td class="px-6 py-4">
                      <a href={sKeluar.urlSK} target='_blank'>
                        <HiIcons.HiDocumentText size={20}/>
                      </a>
                    </td>
                    <td class="px-6 py-4">
                      <div class="flex justify-end gap-4">
                        <button onClick={()=> deleteSK(sKeluar.id)}>
                          <MdIcons.MdDelete size={20} />
                        </button>
                        <Link to ={`editkeluar/${sKeluar.id}`}>
                        <button>
                          <MdIcons.MdEdit size={20} />
                        </button>
                        </Link>
                      </div>
                    </td>
                  </tr>
              ))}
                

            </tbody>
  </table>
</div>
  )
}

export default TableKeluar