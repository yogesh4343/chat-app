import React from 'react'
import { useAuthContext } from '../../Context/AuthContext'
import { extractTime } from '../../Utils/extractTime';
import useConversation from '../../Zustand/UseConservation';

const Message = ({message}) => {
	// console.log('message' , message );
	const {authUser} = useAuthContext();
	const {selectedConversation } = useConversation();
	const formattedTime = extractTime(message.createdAt)
	const fromMe = message.senderId === authUser._id
const chatClassName = fromMe ? 'chat-end' : 'chat-start';
const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
const bubbleBgColor = fromMe ? `bg-blue-500` : '';
const shakeClass = message.shouldShake ? 'shake' : "";


  return (
    // <div>
      <div className={`chat ${chatClassName}`}>
      <div className={`chat chat-end`}>
			<div className='chat-image avatar'>
				<div className='w-10 rounded-full'>
					<img alt='Tailwind CSS chat bubble component' src={profilePic} />
					{/* <img alt='Tailwind CSS chat bubble component' src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?w=1060&t=st=1707607883~exp=1707608483~hmac=98327f69fc91d39765b8e23ea63b6a27677e4b974e3fe8e3495e916db57e4edb" /> */}
				</div>
			</div>
			<div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2`}>{message.message}</div>
			{/* <div className={`chat-bubble text-white ${bubbleBgColor}  pb-2`}>{message.message}</div> */}
			{/* <div className={`chat-bubble text-white bg-blue-500  pb-2`}>{message.message}</div> */}
			<div className='chat-footer opacity-50 text-white text-xs flex gap-1 items-center'>{formattedTime}</div>
		</div>
    </div>
  )
}

export default Message
