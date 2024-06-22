/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Avatar, Stack, Typography } from "@mui/material";

import {

  Face as FaceIcon,
  AlternateEmail as UserNameIcon,
  CalendarMonth as  CalendarMonthIcon
} from "@mui/icons-material"
import moment from "moment";

const Profile = () => {
  return (
    <Stack spacing="2rem" direction="column" alignItems="center">
      
      <Avatar sx={{
        width: 200,
        height: 200,
        marginBottom: "1rem",
        objectFit:"contain",
        border: "5px solid white"
      }}  />
      <ProfileCard text={"Life of a programmer!"} heading="Bio"  />
      <ProfileCard text={"@mena"} heading="Username" icon={<UserNameIcon />}  />
      <ProfileCard text={"Ananda Gharami"} heading="Name" icon={<FaceIcon />}  />
      <ProfileCard text={moment('2023-11-10T18:30:00.00Z').fromNow()} heading="Join" icon={<CalendarMonthIcon />}  />



      
      </Stack>
  )
}


const ProfileCard = ({text,icon,heading}) => {
  return (
    <Stack direction="row" spacing="1rem" color="white" textAlign="center">
      
      {icon && icon}

      <Typography variant="body1">
        {text}
      </Typography>
      <Typography variant="caption" color="gray">
        {heading}
      </Typography>
    </Stack>
  )
}

export default Profile