// components/TableBForm.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Input } from "@material-tailwind/react";

const DetailDisposisi = () => {
  // const [formData, setFormData] = useState({
  //   tujuanDisp: '',
  //   catatan: '',
  //   SMasukId: '',
  // });

  const navigate = useNavigate();

  const [tujuanDisp, setTujuanDisp] = useState("");
  const [catatan, setCatatan] = useState("")
  const [SMasukId, setSMasukId] = useState("")

  const [sMasuk, setSMasuk] = useState([]);

  useEffect(()=>{
    getSMasuk();
  },[]);

  const getSMasuk = async() => {
    const response = await axios.get("http://localhost:5000/sm");
    setSMasuk(response.data);
  }
  // const [tableAData, setTableAData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:5000/sm');
  //       setTableAData(response.data.data);
  //     } catch (error) {
  //       console.error('Error fetching TableA data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // const handleInputChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();



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
                
                  <select name="selectedTableAId" value={SMasukId} onChange={(e) => setSMasukId(e.target.value)}>
                    <option value="">Pilih Surat</option>
                    {sMasuk.map((sMasuk) => (
                      <option key={sMasuk.id} value={sMasuk.id}>
                        {sMasuk.noSM}
                      </option>
                    ))}
                  </select>
                </label>
                </div>

            {/* <div>
            <label className=''>
              <Input variant="outlined" type="text" label="Tujuan Disposisi" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" value={tujuanDisp} onChange={(e) => setTujuanDisp(e.target.value)} />
            </label>
            </div> */}

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
                    <th scope="col" className=" px-3 py-2 font-medium ">No. Surat</th>
                    <th scope="col" className=" px-3 font-medium ">Perihal Surat</th>
                    <th scope="col" className=" px-3 font-medium ">Tanggal Masuk</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100 border-t border-gray-100 bg-white">
              {sMasuk.map((sMasuk)=>(
                <tr className="hover:bg-gray-50" key={sMasuk.id}>
                    <td className="text-center text-[#022B3A] py-2">
                      <p>{sMasuk.noSM}</p>
                    </td>
                    <td className="text-center text-gray-600 ">
                      {sMasuk.perihalSM}
                    </td>
                    <td className="text-center text-gray-600">
                      {sMasuk.tanggalSM}
                    </td>                    
                  </tr>
              ))}
                

            </tbody>
          </table>
        </div>
    </div>
  );
};

export default DetailDisposisi;
