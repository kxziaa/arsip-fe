import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditUser = () => {
    const [modal, setModal] = useState(false);
    
    const toggleModal = () => {
        setModal(!modal) 
    }
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [role, setRole] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const getUserById = async () => {
          try {
            const response = await axios.get(`http://localhost:5000/users/${id}`);
            setName(response.data.name);
            setEmail(response.data.email);
            setRole(response.data.role);
          } catch (error) {
            if (error.response) {
              setMsg(error.response.data.msg);
            }
          }
        };
        getUserById();
      }, [id]);

      const updateUser = async (e) => {
        e.preventDefault();
        try {
          await axios.patch(`http://localhost:5000/users/${id}`, {
            name: name,
            email: email,
            password: password,
            confPassword: confPassword,
            role: role,
          });
          navigate("/users");
        } catch (error) {
          if (error.response) {
            setMsg(error.response.data.msg);
          }
        }
      };
    return (
    <>



<div className='flex items-center h-screen justify-center'>
        <div className="bg-[#E1E5F2] px-4 pt-4 rounded-2xl pb-4">
                <h1 className='pb-4 text-2xl font-medium text-center'>EDIT USER</h1>
                <form onSubmit={updateUser}>
                <p>{msg}</p>
                    <div className="grid gap-7 mb-4 md:grid-cols-2">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama<span className=' text-red-600'>*</span> </label>
                            <input 
                                type="text" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-[#1F7A8C] w-full lg:w-[28vw] p-2.5" 
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Nama"/>
                        </div>
                        
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email <span className=' text-red-600'>*</span> </label>
                            <input 
                                type="text"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-[#1F7A8C] w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder="Email" 
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}/>
                        </div>

                        <div>
                            <label for="Jabatan" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Jabatan<span className=' text-red-600'>*</span> </label>
                            <div>
                                <div className="select ">
                                    <select value={role} onChange={(e) => setRole(e.target.value)}>
                                        <option value="kadis">
                                            Kepala Dinas
                                        </option>
                                        <option value="kabidDafduk">
                                            Kepala Bidang Pendaftaran Penduduk
                                        </option>
                                        <option value="kabidCapil">
                                            Kepala Bidang Pencatatan Sipil
                                        </option>
                                        <option value="kabidPDIP">
                                            Kepala Bidang PDIP
                                        </option>
                                        <option value="kabidPIAK">
                                            Kepala Bidang PIAK
                                        </option>
                                        <option value="admin">
                                            Admin
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Kata Sandi<span className=' text-red-600'>*</span> </label>
                            <input 
                                type="text"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-[#1F7A8C] w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder="Kata Sandi" 
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}/>
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Konfirmasi Kata Sandi<span className=' text-red-600'>*</span> </label>
                            <input 
                                type="text" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-[#1F7A8C] w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder="Konfirmasi Kata Sandi" 
                                required
                                value={confPassword}
                                onChange={(e) => setConfPassword(e.target.value)}/>
                        </div>
                    </div>

                    <button type="submit" className="text-white bg-[#1F7A8C] hover:bg-[#022B3A] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Simpan</button>
                </form>
            </div> 
     
    </div>
    
    </>
  )
}

export default EditUser