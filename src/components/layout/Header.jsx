/* eslint-disable react/prop-types */
import { AppBar, Backdrop, Box, IconButton, Toolbar, Tooltip, Typography } from "@mui/material"
import { orange } from "../../constants/color"
import { Menu as MenuIcon,Search as SearchIcon , Add as AddIcon,Group as GroupIcon,Logout as LogoutIcon, Notifications as NotificationsIcon} from "@mui/icons-material"
import { useNavigate } from "react-router-dom"
import { Suspense, lazy, useState } from "react"
import Notification from "../specific/Notification"
import NewGroup from "../specific/NewGroup"
// import SearchDialog from "../specific/Search";


const SearchDialog=lazy(()=>import("../specific/Search"))

const Header = () => {

    const navigate=useNavigate();

    const handleMobile=()=>{
        
    }
    const openSearchDialog=()=>{
        setIsSearch(prev=>!prev)
    }

    const logoutHandler=()=>{
        
    }
    const manageGroupHandler=()=>{
        navigate('/groups')
    }
const [isMobile, setIsMobile] = useState(false);
const [isSearch, setIsSearch] = useState(false);
const [isNotification, setIsNotification] = useState(false);
const [isNewGroup, setIsNewGroup] = useState(false);

    
    
  return (
    <>
    <Box
    sx={{flexGrow:1}}  height="4rem"
   
     >
        <AppBar  position="static"
        sx={{
            bgcolor:orange
        }}
        >
            <Toolbar>
                <Typography variant="h6"  sx={{
                    display:{
                        xs:"none",sm:"block",
                        cursor:"pointer"
                    }
                }}>
                    Chattu
                </Typography>
                <Box   sx={{
                    display:{
                        xs:"block",sm:"none"
                    }
                }}>
                    <IconButton color="inherit"
                    onClick={handleMobile}
                    >

                        <MenuIcon />
                    </IconButton>
                </Box>
<Box
sx={{
    flexGrow:1
}}
/>
                <Box>


                    <IconBtn  title='Search' onClick={openSearchDialog} icon={ <SearchIcon />}  />
                    <IconBtn  title='New Group' onClick={openSearchDialog} icon={ <AddIcon />}  />
                    <IconBtn  title='Manage Group' onClick={manageGroupHandler} icon={ <GroupIcon />}  />
                    <IconBtn  title='Notifications' onClick={manageGroupHandler} icon={ <NotificationsIcon />}  />

                    <IconBtn  title='Logout' onClick={logoutHandler} icon={ <LogoutIcon />}  />

             

                
                    
                </Box>
            </Toolbar>

        </AppBar>

     </Box>

{isSearch && <Suspense
fallback={<Backdrop open />}
><SearchDialog /></Suspense>  }

{
    isNotification && <Suspense fallback={  <Backdrop open />}>
      
        <Notification />
    </Suspense>
}


{
    isNewGroup && <Suspense fallback={  <Backdrop open />}>
      
        <NewGroup />
    </Suspense>
}


     </>
  )
}



const IconBtn=({title,icon,onClick})=>{


    return (
        <Tooltip title={title}>


<IconButton size="large" color="inherit"
onClick={onClick}
>

    {icon}
</IconButton>
    </Tooltip>
    )

}



export default Header