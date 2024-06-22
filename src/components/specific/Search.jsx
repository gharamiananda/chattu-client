/* eslint-disable no-unused-vars */
import { useInputValidation } from '6pp'
import { Dialog, DialogTitle, InputAdornment, Stack, TextField } from '@mui/material'
import { Search as SearchIcon } from "@mui/icons-material"
import UserItem from '../shared/UserItem';
import { SmapleChats } from '../../constants/sampleData';



const Search = () => {
    const search = useInputValidation('');
    const addFriendHandler=(id)=>{
        
    }
    const handlerIsLoading=false;
    return (
        <Dialog open>
            <Stack p="2rem" direction="column" width="25rem">
                <DialogTitle>  Search </DialogTitle>
                <TextField label='' value={search.value} onChange={search.changeHandler}

                    variant='outlined'
                    size='small'
                  
                    InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <SearchIcon />
                          </InputAdornment>
                        ),
                      }}
                />

                {
                    SmapleChats.map(user => (
                        <UserItem user={user} key={user?._id} handler={addFriendHandler} handlerIsLoading={handlerIsLoading} />

                    ))
                }
            </Stack>
        </Dialog>
    )
}

export default Search