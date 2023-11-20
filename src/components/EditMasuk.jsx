import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import * as HiIcons from "react-icons/hi"

const EditMasuk = () => {
    
    const [noSM, setNoSM] = useState("");
    const [asalSM, setAsalSM] = useState("");
    const [perihalSM, setPerihalSM] = useState("");
    const [tanggalSM, setTanggalSM] = useState("");
    const [keteranganSM, setKeteranganSM] = useState("");
    const [fileSM, setFileSM] = useState("");
    const [url, setUrlSM] = useState("");

    
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(()=>{
        getSMasukById();
    },[]);

    const getSMasukById = async () => {
        const response = await axios.get(`http://localhost:5000/sm/${id}`);
        setNoSM(response.data.noSM);
        setAsalSM(response.data.asalSM);
        setPerihalSM(response.data.perihalSM);
        setTanggalSM(response.data.tanggalSM);
        setKeteranganSM(response.data.keteranganSM);
        setFileSM(response.data.fileSM);
        setUrlSM(response.data.url);
        
    };

    
    
    const loadFile = (e) => {
        const fileSM = e.target.files[0];
        setFileSM(fileSM);
    };

    const updateSM = async(e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("noSM", noSM);
        formData.append("asalSM", asalSM);
        formData.append("perihalSM", perihalSM);
        formData.append("tanggalSM", tanggalSM);
        formData.append("keteranganSM", keteranganSM);
        formData.append("fileSM", fileSM);
        try {
            await axios.patch(`http://localhost:5000/sm/${id}`, formData, {
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
        <div className='ml-60 h-[100vh] bg-[#F5F7F8] flex justify-around items-center'>
            <div className=" lg:top-[20%]  bg-[#E1E5F2] px-4 pt-4 rounded-2xl pb-4 flex flex-col">
                <div className='flex items-center justify-center'>
                <h1 className='pb-4 text-2xl font-medium item-center'>EDIT SURAT MASUK</h1>
                
                </div>
                <form onSubmit={updateSM}>
                    <div className="grid gap-7 mb-4 md:grid-cols-2">
                        <div>
                            <label for="no_sm" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nomor Surat Masuk </label>
                            <input type="text" id="no_sm" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-[#1F7A8C] w-full lg:w-[28vw] p-2.5" placeholder="Nomor Surat" required
                            value={noSM}
                            onChange={(e) => setNoSM(e.target.value)}/>
                        </div>
                        <div>
                            <label for="pengirim_sm" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Asal Surat  </label>
                            <input type="text" id="asal_sm" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-[#1F7A8C] w-full p-2.5" placeholder="Asal Surat" required
                            value={asalSM}
                            onChange={(e) => setAsalSM(e.target.value)}/>
                        </div>
                        <div>
                            <label for="Perihal Surat" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Perihal </label>
                            <input type="text" id="perihal_sm" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-[#1F7A8C] w-full p-2.5 " placeholder="Perihal" required
                            value={perihalSM}
                            onChange={(e) => setPerihalSM(e.target.value)}/>
                        </div>
                        <div>
                            <label for="tgl_sm" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tanggal Masuk  </label>
                            <input type="date" id="tgl_sm" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-[#1F7A8C] w-full p-2.5" required
                            value={tanggalSM}
                            onChange={(e) => setTanggalSM(e.target.value)}/>

                        </div>
                        <div>
                            <label for="ket_sm" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Keterangan</label>
                            <textarea type="text" id="ket_sm" className="w-full h-[15vh] p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-[#1F7A8C] " placeholder="Keterangan" 
                            value={keteranganSM}
                            onChange={(e) => setKeteranganSM(e.target.value)}/>
                        </div> 
                        <div>  
                             
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_sm">Upload file </label>

                            <div className='mb-4'>
                            <a href={url} className='flex items-center bg-[#1F7A8C] text-white w-fit rounded-xl py-3 gap-1 px-3 text-sm' target='_blank' >
                                Lihat Dokumen Saat Ini
                                <HiIcons.HiDocumentText size={20}/>
                            </a> 
                            </div>  
                            <input className="block w-full text-sm p-2.5 text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 " id="file_sm" type="file"
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

export default EditMasuk