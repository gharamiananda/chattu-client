import { Grid, Skeleton, Stack } from "@mui/material"

export const LayoutLoader = () => {
  return (
    <Grid container height="calc(100vh - 4rem)" spacing="1rem">
      <Grid item sx={{
        display: { xs: 'none', sm: "block" }
      }}

        sm={4} md={3}
        height={'100%'} >               <Skeleton variant="rectangular"  height="100vh"  />

      </Grid>
      <Grid item xs={12} sm={8} md={5} lg={6} height={'100%'}  >
        <Stack spacing={'1rem'}>


        {
          Array.from({length:6}).map((_,index)=>(
            <Skeleton key={index} variant="rounded"  height={'5rem'}  />
            
          ))
        }
        </Stack>

      


      </Grid>

      <Grid item
        sx={{
          display: { xs: 'none', md: "block" }
        }}

        md={4} lg={3} height={'100%'} >

        <Skeleton variant="rectangular"  height="100vh"  />

      </Grid>

    </Grid>
  )
}