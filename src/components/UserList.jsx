import React, {useState,useEffect} from 'react';
import axios from 'axios'; 
import { Link } from 'react-router-dom';
import * as MdIcons from "react-icons/md";

const UserList = () => {
    const [users, setUsers] = useState([]);
    
    useEffect(()=> {
        getUsers();
    }, []);

    const getUsers = async () => {
        const response = await axios.get("http://localhost:5000/users");
        setUsers(response.data);
    };

    const deleteUser = async (userId) =>{
        await axios.delete(`http://localhost:5000/users/${userId}`);
        getUsers();
    }
  return (
    <div className=''>
        <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
        <table class="w-full border-collapse bg-white text-left text-sm text-black">
            <thead class="bg-gray-50">
                <tr>
                    <th scope="col" class="px-6 py-4 font-medium text-gray-900">Nama</th>
                    <th scope="col" class="px-6 py-4 font-medium text-gray-900">Email</th>
                    <th scope="col" class="px-6 py-4 font-medium text-gray-900">Jabatan</th>
                    <th scope="col" class="px-6 py-4 font-medium text-gray-900"></th>
                </tr>
            </thead>
            <tbody class="divide-y divide-gray-100 border-t border-gray-100 text-left px-6">
                {users.map((user)=>(
                    <tr key={user.uuid}>
                        <td className='px-6'>{user.name}</td>
                        <td className='px-6'>{user.email}</td>
                        <td className='px-6'>{user.role}</td>
                        <td class="px-6 py-4">
                      <div class="flex justify-end gap-4">
                        <Link to={`users/edit/${user.uuid}`}>
                        <button>
                          <MdIcons.MdEdit size={20} />
                        </button>
                        </Link>
                        <button onClick={()=> deleteUser(user.uuid)}>
                          <MdIcons.MdDelete size={20} />
                        </button>
                        
                      </div>
                    </td>
                    </tr>
                ))}

        

            </tbody>
  </table>
</div>
    </div>
  )
}

export default UserList