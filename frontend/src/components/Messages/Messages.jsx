import React, { useEffect, useRef } from 'react'
import useGetMessages from '../../Hooks/useGetMessages'
import useListenMessages from '../../Hooks/useListenMessages';
import MessageSkeleton from '../skeletons/MessageSkeletons';
import Message from './Message'

const Messages = () => {
	const {loading , messages} = useGetMessages();
	useListenMessages();
	// console.log(useListenMessages);

	const lastMessageRef = useRef();

	useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 10);
	}, [messages]);


  return (
    <div>
       		{/* <div className='px-4 flex-1 overflow-auto h-[26rem]'> */}
       		<div className='px-4 flex-1 overflow-auto '>


			   {!loading && messages.length > 0 && messages.map((message) => (
					<div key={message._id}  ref={lastMessageRef}>
						<Message message={message} />
					</div>
				))}

			    {/* // message skeleton  */}
			   {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}  
			{!loading && messages.length === 0 && (
				<p className=' text-white font-light text-center'>Send a message to start the conversation</p>
			)}


 			{/* <Message />
 			<Message />
 			<Message />
 			<Message />
 			<Message />
 			<Message />
 			<Message />
 			<Message />
 			<Message /> */}


 		</div>
    </div>
  )
}

export default Messages
