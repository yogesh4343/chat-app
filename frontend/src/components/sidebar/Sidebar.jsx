import React from 'react'
import Conversations from './Conversations'
// import Conservations from './Conservations'
import LogoutButton from './LogoutButton'
import SearchInput from './SearchInput'

const Sidebar = () => {
  return (
    <>

    <div className='border-r border-slate-500 p-4 flex flex-col relative'>
    <SearchInput />


    {/* <Conservations /> */}

    <Conversations />
    {/* <LogoutButton /> */}
   <div className="absolute bottom-0 text-4xl bg-black rounded-3xl  w-12 h-12 items-center justify-center flex">  <LogoutButton /> </div>
    </div>
    </>
  )
}

export default Sidebar
