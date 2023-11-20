import React, {useState, useEffect} from 'react';
import axios from 'axios';
import * as HiIcons from "react-icons/hi";
import * as MdIcons from "react-icons/md";
import { Link } from 'react-router-dom';


const TableMasuk = () => {
  const [sMasuk, setSMasuk] = useState([]);

  useEffect(()=>{
    getSMasuk();
  },[]);

  const getSMasuk = async() => {
    const response = await axios.get("http://localhost:5000/sm");
    setSMasuk(response.data);
  }

  const formatTanggal = (tanggal) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric'  };
    const dateObject = new Date(tanggal);
    return dateObject.toLocaleDateString(undefined, options);
  };

  const deleteSM = async(sMasukId) =>{
    try {
      await axios.delete(`http://localhost:5000/sm/${sMasukId}`);
      getSMasuk();
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
                    <th scope="col" class="px-6 py-4 font-medium text-gray-900">Asal Surat</th>
                    <th scope="col" class="px-6 py-4 font-medium text-gray-900">Perihal Surat</th>
                    <th scope="col" class="px-6 py-4 font-medium text-gray-900">Tanggal Masuk</th>
                    <th scope="col" class="px-6 py-4 font-medium text-gray-900">Keterangan</th>
                    <th scope="col" class="px-6 py-4 font-medium text-gray-900">File</th>
                    <th scope="col" class="px-6 py-4 font-medium text-gray-900"></th>
                </tr>
            </thead>
            <tbody class="divide-y divide-gray-100 border-t border-gray-100">
              {sMasuk.map((sMasuk)=>(
                <tr class="hover:bg-gray-50" key={sMasuk.id}>
                    <td class="flex gap-3 px-6 py-4 font-normal text-gray-900">
                      <p>{sMasuk.noSM}</p>
                    </td>
                    <td class="px-6 py-4">
                      {sMasuk.asalSM}
                    </td>
                    <td class="px-6 py-4">
                      {sMasuk.perihalSM}
                    </td>
                    <td class="px-6 py-4">
                      {formatTanggal(sMasuk.tanggalSM)}
                    </td>
                    <td class="px-6 py-4">
                      {sMasuk.keteranganSM}
                    </td>
                    <td class="px-6 py-4">
                      <a href={sMasuk.url} target='_blank'>
                        <HiIcons.HiDocumentText size={20}/>
                      </a>
                    </td>
                    <td class="px-6 py-4">
                      <div class="flex justify-end gap-4">
                        <button onClick={()=> deleteSM(sMasuk.id)}>
                          <MdIcons.MdDelete size={20} />
                        </button>
                        <Link to ={`editmasuk/${sMasuk.id}`}>
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

export default TableMasuk