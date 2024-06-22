/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Stack } from '@mui/material'
import ChatItem from '../shared/ChatItem'

const ChatList = ({w='100%',chats=[],chatId,onlineUsers=[],newMessagesAlert=[{
    chatId:'',
    count:0
}],handleDeleteChat}) => {
  return (
    <Stack width={w} direction={'column'}>
        
        {chats?.map((data,index)=>{

const {avater,_id, name,groupChat,members}=data;

const newMessageAlert=newMessagesAlert.find(({chatId})=>chatId===_id);

const isOnlie =members?.some((user)=>onlineUsers.includes(_id))
return(
    <ChatItem  newMessageAlert={newMessageAlert}
    key={_id}
    avater={avater}
    name={name}
    _id={_id}
    // lastMessage,
    groupChat={groupChat}
    sameSender={chatId ==_id}
    isOnline={isOnlie}
    index={index}
    handleDeleteChatOpen={handleDeleteChat}
    
    
    />
)
        })}
    </Stack>
  )
}

export default ChatList