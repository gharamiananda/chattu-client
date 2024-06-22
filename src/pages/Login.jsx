import { CameraAlt } from '@mui/icons-material'
import { Avatar, Button, Container, IconButton, Paper, Stack, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { VisuallyHiddenInput } from '../components/styles/StyledComponents';
import {useFileHandler, useInputValidation, useStrongPassword} from '6pp'
import { usernameValidator } from '../utils/validators';

const Login = () => {

  const [isLogin, setIsLogin] = useState(true);



const name=useInputValidation('');
const bio=useInputValidation('');
const username=useInputValidation('',usernameValidator);
const password=useStrongPassword();
const avatar=useFileHandler('single');


const handleRegisterSubmit=(e)=>{

  e.preventDefault();

}


const handleLoginSubmit=(e)=>{

  e.preventDefault();
  
}





  return (
   <div  style={{
    backgroundImage:'linear-gradient(rgb(255 255 209), rgb(249 159 159))'
   }}>

<Container component={'main'} maxWidth='xs'

sx={{
  height: '100vh',
  display: "flex",
  alignItems: "center",

  justifyContent: "center"
}}
>



<Paper

  elevation={3}
  sx={{
    padding: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }}
>

  {
    isLogin ? <>

      <Typography

        textAlign="center"
        m={'1rem'}
        variant='h5'>Login</Typography>
      <form action="" style={{
        width: "100%",
        marginTop: "1rem"
      }}
      
      
      onSubmit={handleLoginSubmit}
      >
        <TextField 
        
        value={username.value}
        onChange={username.changeHandler}
        required fullWidth label='Username' margin='normal' variant='outlined' />


{
username.error && (

<Typography color="error" variant='caption'>
{username.error}

</Typography>
)
}
        <TextField 
        
        value={password.value}
        onChange={password.changeHandler}
        required fullWidth label='Password' margin='normal' variant='outlined' />




{
password.error && (

<Typography color="error" variant='caption'>
{password.error}

</Typography>
)
}
        <Button

          fullWidth
          variant='contained'
          type='submit'
        >
          Login
        </Button>
        <Typography
          textAlign="center"

        >or</Typography>
        <Button

          fullWidth
          variant='text'
          onClick={() => setIsLogin(false)}
        >
          Sign Up Instead
        </Button>
      </form>
    </>

      : <>
        <Typography

          textAlign="center"
          m={'1rem'}
          variant='h5'>Regsiter</Typography>
        <form action="" style={{
          width: "100%",
          marginTop: "1rem"
        }}
        
        onSubmit={handleRegisterSubmit}
        >


          <Stack position="relative" width={'10rem'} margin={'auto'}>
            <Avatar 
            
            sx={{
              width:"10rem",
              height:"10rem",
              objectFit:"contain"
            }}
            src={avatar.preview}

            />


<IconButton
            
            sx={{
              position:"absolute",
              bottom:"0",
              right:"0",
              color:"white",
              bgcolor:"rgba(0,0,0,0.5)",
              ":hover":{
                bgcolor:"rgba(0,0,0,0.7)",

              }
            }}
            component="label"
            onChange={avatar.changeHandler}
            >
              <>
              <CameraAlt />
              <VisuallyHiddenInput type='file' />
              </>
            </IconButton>
          </Stack>
{
avatar.error && (

<Typography  

display="block"
width="fit-content"
m={'1rem auto'} color="error" variant='caption'>
{avatar.error}

</Typography>
)
}


    
          <TextField
          
          value={username.value}
        onChange={username.changeHandler}
          required fullWidth label='Username' margin='normal' variant='outlined' />


          <TextField
          
          value={name.value}
        onChange={name.changeHandler}
          required fullWidth label='Name' margin='normal' variant='outlined' />
          <TextField 
          
          value={bio.value}
        onChange={bio.changeHandler}
          
          required fullWidth label='Bio' margin='normal' variant='outlined' />
          <TextField
          value={password.value}
          onChange={password.changeHandler}
          
          required fullWidth label='Password' margin='normal' variant='outlined' />



          <Button

            fullWidth
            variant='contained'
            type='submit'
          >
            Sign Up
          </Button>
          <Typography
            textAlign="center"

          >or</Typography>
          <Button

            fullWidth
            variant='text'
            onClick={() => setIsLogin(true)}
          >
            Login Instead ?
          </Button>
        </form>

      </>
  }

</Paper>
</Container>
   </div>
  )
}

export default Login