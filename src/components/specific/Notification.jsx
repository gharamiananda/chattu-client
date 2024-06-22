/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
/* eslint-disable no-unused-vars */
import { Avatar, Button, Dialog, ListItem, Stack, Typography } from '@mui/material'
import React, { memo } from 'react'
import { SampleNotifications } from '../../constants/sampleData'

const Notification = () => {

    const friendRequestHandler=()=>{

    }
    return (
        <Dialog >
            <Stack p={{ xs: "2rem", sm: "2rem" }} width="25rem">
                <Typography>

                    Notification
                </Typography>

                {
                    SampleNotifications.length > 0 ?
                        SampleNotifications.map(notification => (
                            <NotificationItem sender={notification.sender} id={notification?._id}   handler={friendRequestHandler} key={notification?._id} />
                        ))
                        : <Typography variant="body2" textAlign='center'>No Notifications</Typography>
                }
            </Stack>
        </Dialog>
    )
}


const NotificationItem = memo(({ sender,_id,handler }) => {

    return (
        <ListItem   
    
  
    >
        <Stack
        direction="row"
        alignItems="center"
        spacing="1rem"
        width={'100%'}
        
        >
            <Avatar/>
            <Typography variant="body1" 
            sx={{
              flexGrow:1,
              display:"-webkit-box",
              WebkitLineClamp:1,
              WebkitBoxOrient:"vertical",
              overflow:"hidden",
              textOverflow:"ellipsis",
              width:"100%"

            }}
            >{`${sender?.name} send a friend request!`}</Typography>

           <Stack  direction={{
            xs:"column",
            sm:'row'
           }}>
            <Button onClick={()=>handler({_id,'accept':true})}>Accept</Button>
            <Button  color='error' onClick={()=>handler({_id,'accept':false})}>Reject</Button>

           </Stack>

        </Stack>
        
    </ListItem>
    )

})

export default Notification