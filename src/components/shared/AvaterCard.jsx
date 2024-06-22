/* eslint-disable react/prop-types */
import { Avatar, AvatarGroup, Box, Stack } from '@mui/material'

const AvaterCard = ({avater=[],max=4}) => {

  return (
    <Stack direction="row" spacing="0.5">
        <AvatarGroup max={max}>
<Box  width="5rem" height="3rem">
    {
        avater.map((item, index) => (
            <Avatar key={index} src={item}
            alt={`Avater ${index + 1}`}
            sx={{
                width: "3rem",
                height: "3rem",
                position:"absolute",
                left:{
                    xs:`${index + 0.5}rem`,
                    sm:`${index}rem`
                }
            }}
            />
        ))
    }
</Box>
        </AvatarGroup>
    </Stack>
  )
}

export default AvaterCard