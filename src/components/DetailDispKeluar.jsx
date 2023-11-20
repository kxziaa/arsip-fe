// components/TableBForm.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Input } from "@material-tailwind/react";
import * as HiIcons from "react-icons/hi";

const DetailDispKeluar = () => {

  const navigate = useNavigate();

  const [tujuanDisp, setTujuanDisp] = useState("");
  const [catatan, setCatatan] = useState("")
  const [SMasukId, setSMasukId] = useState("")

  const [disposisi, setDisposisi] = useState([]);
    
  useEffect(()=>{
      getDisposisi();
    },[]);
  
    const getDisposisi = async() => {
      const response = await axios.get("http://localhost:5000/dispMasuk");
      setDisposisi(response.data);
    }

  const saveDisp = async(e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("tujuanDisp", tujuanDisp);
    formData.append("catatan", catatan);
    formData.append("SMasukId", SMasukId);
    try {
        await axios.post("http://localhost:5000/disp", formData, {
            headers:{
                "Content-Type": "multipart/form-data"
            }
        });
        navigate ("/");
    } catch (error) {
        console.log(error);
    }
}


    
    
      
  return (
    <div className='flex flex-row gap-6'>
        <div>
          <form onSubmit={saveDisp}>
            <div className='flex flex-col gap-y-4 py-4 px-4 bg-white'>
            <div>
              <label>
                
                  <select value={SMasukId} onChange={(e) => setSMasukId(e.target.value)}>
                    <option value="">Pilih Surat</option>
                    {disposisi.map((disposisi) => (
                      <option key={disposisi.id} value={disposisi.id}>
                        {disposisi.id}
                      </option>
                    ))}
                  </select>
                </label>
                </div>

            <div>
              <label>
                  <select onChange={(e) => setTujuanDisp(e.target.value)}>
                    <option selected>Tujuan Disposisi</option>
                    <option value="Kadis">
                      Kepala Dinas
                    </option>
                    <option value="Kabid Capil">
                      Kepala Bidang Pencatatan Sipil
                    </option>
                    <option value="Kabid Dafduk">
                      Kepala Bidang Pendaftaran Penduduk
                    </option>
                    <option value="Kabid PIAK">
                      Kepala Bidang PIAK
                    </option>
                    <option value="Kabid PDIP">
                      Kepala Bidang PDIP
                    </option>
                  </select>
                </label>
                </div>
            

            <div>
            <label>
             
              <Input variant="outlined" label="Catatan" type="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" value={catatan} onChange={(e) => setCatatan(e.target.value)}/>
            </label>
            </div>
            

            <button type="submit" className="text-white bg-[#1F7A8C] hover:bg-[#022B3A] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
            </div>
          </form>
        </div>
          
        <div className=' overflow-x-auto'>
        <table className='text-sm min-w-full'>
            <thead class="bg-[#022B3A] text-white">
              <tr className=''>
                    <th scope="col" className=" px-3 py-2 font-medium ">No</th>
                    <th scope="col" className=" px-3 font-medium ">Pengirim</th>
                    <th scope="col" className=" px-3 font-medium ">File</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100 border-t border-gray-100 bg-white">
              {disposisi.map((disposisi)=>(
                <tr className="hover:bg-gray-50" key={disposisi.id}>
                    <td className="text-center text-[#022B3A] py-2">
                      <p>{disposisi.id}</p>
                    </td>
                    <td className="text-center text-gray-600 ">
                      {disposisi.user.name}
                    </td>
                    <td className="text-center text-gray-600">
                    <a href={disposisi.sMasuk.url} target='_blank'>
                        <HiIcons.HiDocumentText size={20}/>
                      </a>
                    </td>                    
                  </tr>
              ))}
                

            </tbody>
          </table>
        </div>
    </div>
  );
};

export default DetailDispKeluar;
