import React, { useEffect } from 'react'
import MessageInput from './MessageInput'
import Messages from './Messages';
import { TiMessages } from "react-icons/ti";import useConversation from '../../Zustand/UseConservation';
import { useAuthContext } from '../../Context/AuthContext';
import { NavLink } from 'react-router-dom';
;

const MessageContainer = () => {
    // const noChatSelected = true;
	const {selectedConversation , setSelectedConversation} = useConversation();

	useEffect(()=>{
		// clear when user is logout 
		return ()=> setSelectedConversation(null);
	},[setSelectedConversation]);
  return (
    <div className="w-full max-h-screen">
	{/* <NavLink to="/sidebar" className=" md:hidden arrow rounded-xl bg-black text-white text-center text-4xl flex justify-center items-center w-12 h-12   ">      ☚</NavLink> */}
      {/* <div className='md:min-w-[450px] flex flex-col'> */}
      <div className='md:min-w-[450px] flex flex-col'>
 				{! selectedConversation  ? <NoChatSelected /> : (
                    <> {/* Header */}
 				<div className='bg-slate-500 px-4 py-2 mb-2'>
 					<span className='label-text'>To:</span> <span className='text-gray-900 font-bold'>{selectedConversation.fullName}</span>
 				</div>

 				<Messages />
 				<MessageInput /> </>
                ) }
 		</div>
    </div>
  )
}


const NoChatSelected = () => {
	const { authUser } = useAuthContext();
	return (
		<div className='flex items-center justify-center w-full h-full my-24'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p>Welcome 👋 {authUser.fullName} ❄</p>
				<p>Select a chat to start messaging</p>
				<TiMessages className='text-3xl md:text-6xl text-center' />
			</div>
		</div>
	);
};



export default MessageContainer
