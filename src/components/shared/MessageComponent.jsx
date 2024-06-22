/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Box, Typography } from '@mui/material';
import React, { memo } from 'react'
import { lightBlueColor } from '../../constants/color';
import moment from 'moment';
import { fileFormat } from '../../lib/features';
import RenderAttachMent from './RenderAttachMent';

const MessageComponent = ({message,user}) => {


    const {sender,content,attachments=[],createdAt}=message;
    const timeAgo=moment(createdAt).fromNow();
const sameSender=sender?._id===user._id;

  return (
    <div
    style={{
       alignSelf:sameSender? 'flex-end' : 'flex-start',
       backgroundColor:"white",
       color:"black",
       borderRadius:"5px",
       padding:"0.5rem",
    width:"fit-content",
       marginLeft:sameSender? 'auto' : '1rem',
    }}
    
    >
        
        {!sameSender && <Typography color={lightBlueColor} fontWeight='600'  variant='caption'>{sender.name}</Typography>}

        {attachments.length>0 && (
            attachments.map((attachment,index)=>{
                const url=attachment.url;
                const file= fileFormat(url);

                return(
                    <Box key={attachment?.chat}>
<a href={url} target='_blank' download style={{
    color:"black"
}} >
    

    {RenderAttachMent(file,url)}
</a>
                    </Box>
                )
            })
        )}

        {
            content && <Typography>{content}</Typography>
        }
<Typography color="text.secondary" variant='caption'>{timeAgo}</Typography>
    </div>
  )
}

export default memo(MessageComponent)