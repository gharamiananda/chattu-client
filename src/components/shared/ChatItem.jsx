/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { memo } from 'react'
import { Link } from '../styles/StyledComponents'
import { Box, Stack, Typography } from '@mui/material'
import AvaterCard from './AvaterCard'

const ChatItem = ({
    avater = [],
    name,
    _id,
    // lastMessage,
    groupChat = false,
    sameSender,
    isOnline,
    newMessageAlert,
    index = 0,
    handleDeleteChatOpen
}) => {
    return (
        <Link
            to={`/chat/${_id}`}
            sx={{
                padding:0
            }}
            onContextMenu={e=>handleDeleteChatOpen(e, _id,groupChat)}
        >
            <div style={{
                display: 'flex',
                alignItems: "center",
                gap: '1rem',
                padding: '1rem',
                backgroundColor: sameSender ? "black" : 'unset',
                color: sameSender ? "white" : 'unset',
                position: "relative"
            }}>


                {/* Avater card  */}
                <AvaterCard avater={avater}   />
                <Stack>
                    <Typography>{name}</Typography>
                    {
                        newMessageAlert
                        && (
                            <Typography>{newMessageAlert?.count} New Message</Typography>


                        )}
                </Stack>

                {
                    isOnline && (
                        <Box
                        sx={{
                            backgroundColor: "green",
                            borderRadius: "50%",
                            width: "10px",
                            height: "10px",
                            position: "absolute",
                            top: "-5px",
                            right: "-5px"
                        }}
                        >


                        </Box>
                    )
                }
            </div>


        </Link>
    )
}

export default  memo(ChatItem)