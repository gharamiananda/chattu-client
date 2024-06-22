/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { Box, Drawer, Grid, IconButton, Stack, Tooltip, Typography } from '@mui/material'
import { orange } from '../constants/color'
import { KeyboardBackspace as KeyboardBackspaceIcon, Menu as MenuIcon } from '@mui/icons-material'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { memo, useState } from 'react';
import { Link } from '../components/styles/StyledComponents';
import AvaterCard from '../components/shared/AvaterCard';
import { SampleGropus, SampleNotifications } from '../constants/sampleData';


const Groups = () => {
  const [isMObile, setisMObile] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const navigate = useNavigate();
  const handleMobile = () => {
    setisMObile(prev => !prev)
  }

  const chatId=useSearchParams().get('group');
  const IconBtns = <>
    <Box>

      <IconButton
        onClick={handleMobile}
        sx={{
          display: { xs: 'block', sm: "none", position: "fixed", right: "1rem", top: "1rem" }
        }}
      >
        <MenuIcon />
      </IconButton>
    </Box>
    <Tooltip title='back'>

      <IconButton
        onClick={() => navigate('/')}
        sx={{
          position: "absolute",
          left: "2rem",
          top: "2rem",
          color: "white",
          bgcolor: "rgba(0,0,0,0.8)",
          ":hover": {
            bgcolor: "rgba(0,0,0,0.7)",

          }
        }}
      >
        <KeyboardBackspaceIcon />
      </IconButton>
    </Tooltip>
  </>;


const GroupName=<Stack>
{isEdit ? <>  </>: <>Group Name</>}
</Stack>;

  return (
    <Grid container height="100vh">
      <Grid item sx={{
        display: { xs: 'none', sm: "block" }
      }} sm={4}

        bgcolor={'beige'}
      >
<GroupList   myGroups={SampleGropus} chatId={chatId} />

      </Grid>

      <Grid item xs={12} sm={8}

        sx={{
          display: 'flex',
          flexDirection: "column",
          alignItems: 'center',
          position: "relative",
          padding: "1rem 3rem",

        }}
      >
        {IconBtns}
{GroupName}
      </Grid>

      <Drawer
        sx={{
          display: { xs: 'block', sm: "none" },
        }}
        open={isMObile} onClose={() => setisMObile(false)}>

        <GroupList
        
        w='50vw'
        myGroups={SampleGropus} chatId={1} />
      </Drawer>
    </Grid>
  )
}



const GroupList=({w='100%',myGroups=[],chatId})=>{

  console.log('myGroups', myGroups)
  return (
    <Stack width={w}>
      {
        myGroups.length > 0 ?
         (
        myGroups.map((group, index) => (
          <GroupListItem group={group} key={index}  chatId={chatId} />
        )))
        :<Typography textAlign='center' padding='1rem'>No Groups</Typography>

      }
    </Stack>
  )
}


const GroupListItem = memo(({ group,chatId }) => {

  const { name, avater, _id } = group;
  return (
    <Link to={`?group=${_id}`} 
//     onClick={e=>{
//       if(chatId===_id){
// e.preventDefault();
//       }
//     }}
    
    >
      <Stack direction='row' spacing='1rem' alignItems="center">
        <AvaterCard avater={avater} />
        <Typography>{name}</Typography>
      </Stack>
    </Link>
  )
})
export default Groups