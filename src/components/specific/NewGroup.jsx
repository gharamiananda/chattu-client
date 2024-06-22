import { Button, Dialog, DialogTitle, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { SampleNotifications, SmapleChats } from '../../constants/sampleData'
import UserItem from '../shared/UserItem'
import { useInputValidation } from '6pp'

const NewGroup = () => {

  const [members, setMembers] = useState(SmapleChats);
  const [selectedMembers, setselectedMembers] = useState([]);

  const groupName=useInputValidation('');
  const selectMemberHandler=(id)=>{
      setselectedMembers(prev=>(prev.includes(id)?prev.filter(it=>it!==id):[...prev,id]))
    
  
  }

  const submitHandler=()=>{

  }
  return (
    <Dialog open >
    <Stack p={{ xs: "1rem", sm: "3rem" }} width="25rem" spacing="2rem">
        <DialogTitle textAlign="center" variant='h4' >

            New Group
        </DialogTitle>
        <TextField
        label="Group Name"
        value={groupName.value}
        onChange={groupName.changeHandler}
        
        />

        <Typography variant='body1'>Select Members</Typography>

        <Stack>
        {
                    members.map(user => (
                        <UserItem user={user} key={user?._id} handler={selectMemberHandler} handlerIsLoading={false} isAdded={selectedMembers.includes(user?._id)} />

                    ))
                }

                <Stack  direction="row" justifyContent="space-evenly">
                  <Button variant="contained" color="primary" onClick={submitHandler}>Create Group</Button>
                  <Button variant="text" color="error">Cancel</Button>
                </Stack>
        </Stack>

       
    </Stack>
</Dialog>
  )
}

export default NewGroup