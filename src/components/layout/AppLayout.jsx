/* eslint-disable react/display-name */

import { Grid } from "@mui/material"
import Title from "../shared/Title"
import Header from "./Header"
import ChatList from "../specific/ChatList"
import { SmapleChats } from "../../constants/sampleData"
import { useParams } from "react-router-dom"
import Profile from "../specific/Profile"

const AppLayout = () => WrappedComponent => {
    return props => {

        const {chatId}=useParams();
        const handleDeleteChat=(e,id,groupChat)=>{
e.preventDefault()
        }


        return (

            <>

                <Title />
                <Header />

                <Grid container height="calc(100vh - 4rem)">
                    <Grid item sx={{
                        display: { xs: 'none', sm: "block" }
                    }}

                        sm={4} md={3}
                        height={'100%'} >

                            <ChatList  chats={SmapleChats} chatId
                         handleDeleteChat={handleDeleteChat}
                            />
                        </Grid>
                    <Grid item xs={12} sm={8} md={5} lg={6} height={'100%'}  >

                        <WrappedComponent  {...props} />

                    </Grid>

                    <Grid item
                        sx={{
                            display: { xs: 'none', md: "block" },
                            padding: '2rem',
                            bgcolor: "rgba(0,0,0,0.85)"
                        }}

                        md={4} lg={3} height={'100%'} >
                            
                            <Profile />
                        </Grid>

                </Grid>
            </>

        )
    }
}


export default AppLayout