import React, { useEffect, useState } from "react";
import axios from "axios";
import * as HiIcons from "react-icons/hi";
import ToastError from "./toast/ToastError";

const TableDispMasuk = () => {
  const [disposisi, setDisposisi] = useState([]);

  useEffect(() => {
    getDisposisi();
  }, []);

  const getDisposisi = async () => {
    const response = await axios.get("http://localhost:5000/dispMasuk");
    setDisposisi(response.data);
  };

  return (
    <>
      <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
        <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                Tujuan Disposisi
              </th>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                Catatan
              </th>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                ID Surat
              </th>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                Pengirim
              </th>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                File
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100 border-t border-gray-100">
            {disposisi.map((disposisi) => (
              <tr class="hover:bg-gray-50" key={disposisi.id}>
                <td class="flex gap-3 px-6 py-4 font-normal text-gray-900">
                  <p>{disposisi.tujuanDisp}</p>
                </td>
                <td class="px-6 py-4">{disposisi.catatan}</td>
                <td class="px-6 py-4">{disposisi.SMasukId}</td>
                <td class="px-6 py-4">{disposisi.user.name}</td>
                <td class="px-6 py-4">
                  <a href={disposisi.sMasuk.url} target="_blank">
                    <HiIcons.HiDocumentText size={20} />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableDispMasuk;
