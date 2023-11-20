import axios from 'axios';
import React, {useState, useEffect} from 'react'
import * as HiIcons from "react-icons/hi";
import * as MdIcons from "react-icons/md";
import { Link } from 'react-router-dom';
import DetailDisposisi from './DetailDisposisi';

const TambahDisposisi = () => {
    const [modal, setModal] = useState(false);
    
    const toggleModal = () => {
        setModal(!modal) 
    }
    
  //   const [sMasuk, setSMasuk] = useState([]);

  // useEffect(()=>{
  //   getSMasuk();
  // },[]);

  // const getSMasuk = async() => {
  //   const response = await axios.get("http://localhost:5000/sm");
  //   setSMasuk(response.data);
  // }

  // const formatTanggal = (tanggal) => {
  //   const options = { day: 'numeric', month: 'long', year: 'numeric'  };
  //   const dateObject = new Date(tanggal);
  //   return dateObject.toLocaleDateString(undefined, options);
  // };

    return (
    <>
    <button onClick={toggleModal} className='bg-[#1F7A8C] w-32 h-8 ml-5 text-white rounded-xl justify-self-start'>
        Tambah Disposisi
    </button>

    {modal && (
        <div className='ml-60 w-[100vw] h-[100vh] backdrop-blur-sm top-0 left-0 right-0 bottom-0 fixed flex justify-center items-center '>
            <div onClick={toggleModal} className='w-[100vw] h-[100vh] fixed top-0 left-0 right-0 bottom-0'></div>
            <div className="absolute lg:top-[20%] left-[11.5%] bg-[#E1E5F2] px-4 pt-4 rounded-2xl pb-4">
              <h1 className='pb-4 text-2xl font-medium text-center'>TAMBAH DISPOSISI</h1>
              <div>
              <DetailDisposisi />
              </div>

              {/* <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
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
                            <button>
                              Disposisi
                            </button>
                          </div>
                        </td>
                      </tr>
                  ))}
                </tbody>
              </table> */}

            </div> 
        </div>
    )}
    </>
  )
}

export default TambahDisposisi