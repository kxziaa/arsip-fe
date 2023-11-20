import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import * as HiIcons from "react-icons/hi"

const EditKeluar = () => {
    
    const [noSK, setNoSK] = useState("");
    const [tujuanSK, setTujuanSK] = useState("");
    const [perihalSK, setPerihalSK] = useState("");
    const [tanggalSK, setTanggalSK] = useState("");
    const [keteranganSK, setKeteranganSK] = useState("");
    const [fileSK, setFileSK] = useState("");
    const [urlSK, setUrlSK] = useState("");
    
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(()=>{
        getSKeluarById();
    },[]);

    const getSKeluarById = async () => {
        const response = await axios.get(`http://localhost:5000/sk/${id}`);
        setNoSK(response.data.noSK);
        setTujuanSK(response.data.tujuanSK);
        setPerihalSK(response.data.perihalSK);
        setTanggalSK(response.data.tanggalSK);
        setKeteranganSK(response.data.keteranganSK);
        setFileSK(response.data.fileSK);
        setUrlSK(response.data.urlSK);

    };

    const loadFile = (e) => {
        const fileSK = e.target.files[0];
        setFileSK(fileSK);
    };

    const updateSK = async(e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("noSK", noSK);
        formData.append("tujuanSK", tujuanSK);
        formData.append("perihalSK", perihalSK);
        formData.append("tanggalSK", tanggalSK);
        formData.append("keteranganSK", keteranganSK);
        formData.append("fileSK", fileSK);
        try {
            await axios.patch(`http://localhost:5000/sk/${id}`, formData, {
                headers:{
                    "Content-Type": "multipart/form-data"
                }
            });
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    return (
    <>
        <div className='ml-60 w-[100vw] h-[100vh] bg-[#F5F7F8] top-0 left-0 right-0 bottom-0 fixed flex justify-center items-center '>
            <div className='w-[100vw] h-[100vh] fixed top-0 left-0 right-0 bottom-0'></div>
            <div className="absolute lg:top-[20%] left-[11.5%] bg-[#E1E5F2] px-4 pt-4 rounded-2xl pb-4">
                <h1 className='pb-4 text-2xl font-medium text-center'>EDIT SURAT KELUAR</h1>
                <form onSubmit={updateSK}>
                    <div className="grid gap-7 mb-4 md:grid-cols-2">
                        <div>
                            <label for="no_sm" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nomor Surat Keluar </label>
                            <input type="text" id="no_sm" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-[#1F7A8C] w-full lg:w-[28vw] p-2.5" placeholder="Nomor Surat" required
                            value={noSK}
                            onChange={(e) => setNoSK(e.target.value)}/>
                        </div>
                        <div>
                            <label for="pengirim_sm" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tujuan Surat  </label>
                            <input type="text" id="asal_sm" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-[#1F7A8C] w-full p-2.5" placeholder="Asal Surat" required
                            value={tujuanSK}
                            onChange={(e) => setTujuanSK(e.target.value)}/>
                        </div>
                        <div>
                            <label for="Perihal Surat" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Perihal </label>
                            <input type="text" id="perihal_sm" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-[#1F7A8C] w-full p-2.5 " placeholder="Perihal" required
                            value={perihalSK}
                            onChange={(e) => setPerihalSK(e.target.value)}/>
                        </div>
                        <div>
                            <label for="tgl_sm" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tanggal Keluar </label>
                            <input type="date" id="tgl_sm" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-[#1F7A8C] w-full p-2.5 " required
                            value={tanggalSK}
                            onChange={(e) => setTanggalSK(e.target.value)}/>

                        </div>
                        <div>
                            <label for="ket_sm" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Keterangan</label>
                            <textarea type="text" id="ket_sm" className="w-full h-[15vh] p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-[#1F7A8C] " placeholder="Keterangan" 
                            value={keteranganSK}
                            onChange={(e) => setKeteranganSK(e.target.value)}/>
                        </div> 
                        <div>  
                             
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_sm">Upload file </label>

                            <div className='mb-4'>
                            <a href={urlSK} className='flex items-center bg-[#1F7A8C] text-white w-fit rounded-xl py-3 gap-1 px-3 text-sm' target='_blank' >
                                Lihat Dokumen Saat Ini
                                <HiIcons.HiDocumentText size={20}/>
                            </a> 
                            </div>  
                            <input className="block w-full text-sm p-2.5 text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 " id="file_sk" type="file"
                            onChange={loadFile}
                            title='test'/>
                            
                            
                        </div>
                    </div>
                    <button type="submit" className="text-white bg-[#1F7A8C] hover:bg-[#022B3A] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
                </form>
            </div> 
        </div>
    </>
    )
}

export default EditKeluar