import { Container, Paper } from '@mui/material'
import { useState } from 'react'

const Login = () => {

    const [isLogin,setIsLogin]=useState()
  return (
    <Container component={'main'} maxWidth='sx'>
        


        <Paper
        
        elevation={3}
        sx={{
            padding:4,
            display:"flex",
            flexDirection:"column",
            alignItems:"center"
        }}
        >

        </Paper>
    </Container>
  )
}

export default Login