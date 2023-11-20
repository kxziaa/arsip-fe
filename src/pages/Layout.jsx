import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Layout = ({children}) => {
  return (
    <React.Fragment>
        <Navbar />
        <div className="flex h-screen">
        <div className="w-60 bg-[#022B3A]" >
        <Sidebar />
        </div>
        <div className=" flex-1 overflow-x-hidden overflow-y-auto p-4 bg-[#F5F7F8]">
          <main>{children}</main>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Layout