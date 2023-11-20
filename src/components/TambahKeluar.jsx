import axios from 'axios';
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const TambahKeluar = () => {
    const [modal, setModal] = useState(false);
    
    const toggleModal = () => {
        setModal(!modal) 
    }

    const [noSK, setNoSK] = useState("");
    const [tujuanSK, setTujuanSK] = useState("");
    const [perihalSK, setPerihalSK] = useState("");
    const [tanggalSK, setTanggalSK] = useState("");
    const [keteranganSK, setKeteranganSK] = useState("");
    const [fileSK, setFileSK] = useState("");

    const navigate = useNavigate();

    const loadFile = (e) => {
        const fileSK = e.target.files[0];
        setFileSK(fileSK);
    }

    const saveSK = async(e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("noSK", noSK);
        formData.append("tujuanSK", tujuanSK);
        formData.append("perihalSK", perihalSK);
        formData.append("tanggalSK", tanggalSK);
        formData.append("keteranganSK", keteranganSK);
        formData.append("fileSK", fileSK);
        try {
            await axios.post("http://localhost:5000/sk", formData, {
                headers:{
                    "Content-Type": "multipart/form-data"
                }
            });
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }
    return (
    <>
    <button onClick={toggleModal} className='bg-[#1F7A8C] w-32 h-8 ml-5 text-white rounded-xl justify-self-start'>
        Tambah Data
    </button>

    {modal && (
        <div className='ml-60 w-[100vw] h-[100vh] backdrop-blur-sm top-0 left-0 right-0 bottom-0 fixed flex justify-center items-center '>
            <div onClick={toggleModal} className='w-[100vw] h-[100vh] fixed top-0 left-0 right-0 bottom-0'></div>
            <div className="absolute lg:top-[20%] left-[11.5%] bg-[#E1E5F2] px-4 pt-4 rounded-2xl pb-4">
            <h1 className='pb-4 text-2xl font-medium text-center'>TAMBAH SURAT Keluar</h1>
            <form onSubmit={saveSK}>
                <div className="grid gap-7 mb-4 md:grid-cols-2">
                <div>
                    <label for="no_sk" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nomor Surat Keluar<span className=' text-red-600'>*</span> </label>
                    <input type="text" id="no_sm" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-[#1F7A8C] w-full lg:w-[28vw] p-2.5" placeholder="Nomor Surat" required
                    value={noSK}
                    onChange={(e) => setNoSK(e.target.value)}/>
                </div>
                <div>
                    <label for="pengirim_sm" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tujuan Surat <span className=' text-red-600'>*</span> </label>
                    <input type="text" id="asal_sm" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-[#1F7A8C] w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder="Tujuan Surat" required
                    value={tujuanSK}
                    onChange={(e) => setTujuanSK(e.target.value)}/>
                </div>
                <div>
                    <label for="Perihal Surat" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Perihal <span className=' text-red-600'>*</span> </label>
                    <input type="text" id="perihal_sm" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-[#1F7A8C] w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder="Perihal" required
                    value={perihalSK}
                    onChange={(e) => setPerihalSK(e.target.value)}/>
                </div>

                <div>
                    <label for="tgl_sm" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tanggal Keluar <span className=' text-red-600'>*</span> </label>
                    <input type="date" id="tgl_sm" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-[#1F7A8C] w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " required
                    value={tanggalSK}
                    onChange={(e) => setTanggalSK(e.target.value)}/>
                </div>

                <div>
                    <label for="ket_sm" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Keterangan</label>
                    <textarea type="text" id="ket_sm" className="w-full h-[15vh] p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-[#1F7A8C] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder="Keterangan" 
                    value={keteranganSK}
                    onChange={(e) => setKeteranganSK(e.target.value)}/>
                </div>
                
                <div>      
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_sm">Upload file <span className=' text-red-600'>*</span> </label>
                    <input className="block w-full text-sm p-2.5 text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 " id="file_sm" type="file"
                    onChange={loadFile} required />

                </div>
            </div>
            <button type="submit" className="text-white bg-[#1F7A8C] hover:bg-[#022B3A] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
    </form>
    
    </div> 
     
    
    

            
        
        </div>
    )}
    </>
  )
}

export default TambahKeluar