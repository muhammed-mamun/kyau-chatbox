import React from 'react'
import Navbar from './Navbar'
import SIdeBar from './Sidebar'



const Layout = ({children,showSideBar=false}) => {
  return (
    <div className='min-h-screen'>
        <div className='flex'>
         {showSideBar && <SIdeBar/>}   
         <div className='flex-1 flex flex-col'>
            <Navbar/>
            <main className='flex-1 overflow-y-auto'>
                {children}
            </main>
         </div>
        </div>
    </div>
  )
}

export default Layout