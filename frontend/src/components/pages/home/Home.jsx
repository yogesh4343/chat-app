import React from 'react'
import MessageContainer from '../../Messages/MessageContainer'
import Sidebar from '../../sidebar/Sidebar'

const Home = () => {
  return (
    // <div>
		// <div className='flex sm:h-[450px] w-full md:w-[80%] lg:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 gap-12 lg:gap-4 flex-col'>
		<div className='flex h-full  w-full md:w-[80%]  rounded-lg  bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 gap-12 lg:gap-4 flex-col md:flex-row'>

<Sidebar />
<MessageContainer />
		 {/* <div className="hidden md:block"><Sidebar /> </div>	 */}
			 {/* <div className="w-full"><MessageContainer /> </div> */}
		</div>
    // </div>
  )
}

export default Home
