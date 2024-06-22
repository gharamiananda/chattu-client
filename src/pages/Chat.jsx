import { IconButton, Stack } from '@mui/material'
import AppLayout from '../components/layout/AppLayout'
import { useRef } from 'react'
import { grayColor, orange } from '../constants/color'
import { AttachFile as AttachFileIcon, Send as SendIcon } from '@mui/icons-material'
import { InputBox } from '../components/styles/StyledComponents'
import FileMenu from '../components/dialog/FileMenu'
import { SampleMessages, SampleNotifications } from '../constants/sampleData'
import MessageComponent from '../components/shared/MessageComponent';

const user={
  avater :'randomuser.me/api/portraits/women/1.jpg',
  name:'Programmers',
  _id:'2',
}

const Chat = () => {

  const containerRef=useRef(null);
  const fileref=useRef(null);

  return (
    <>
    <Stack
    boxSizing="border-box"
    padding="1rem"
    
    spacing="1rem"
    bgcolor={grayColor}
    height="90%"
    sx={{
      overflow:'hidden',
      overflowX: 'auto',
    }}
     ref={containerRef}>
      
      {
        SampleMessages.map(message=>(
          <MessageComponent message={message} user={user} key={message?._id} />
        ))
      }
     </Stack>




     <form action=""  style={{
      height:"10%"
     }}>
      <Stack direction="row" height="100%" padding="1rem" alignItems="center" position="relative">
        <IconButton
        sx={{
          rotate:'30deg',
          left:'1.5rem',
          position:'absolute',

        }}
        >
<AttachFileIcon />
        </IconButton>

        <InputBox placeholder='Type Message Here...' />

        <IconButton type='submit' sx={{
          bgcolor:orange,
          rotate:'-30deg',
          color:'white',
          marginLeft:'1rem',
          '&:hover':{
            bgcolor:'error.dark'
          }
        }} >
          <SendIcon />
        </IconButton>
      </Stack>
     </form>


     <FileMenu  />

    </>
  )
}


export default  AppLayout() (Chat)
