import {Grid, GridItem } from '@chakra-ui/react'
import {Box,Heading } from '@chakra-ui/react'


export  function Img() {


    return (
     
      <div className="App">

        <Box bg='white' w='80%' p={2}  margin='auto' >
       
        
        <Grid
        margin='auto'
          h='400px'
          w='1000px'
          // templateRows='repeat(2, 1fr)'
          templateColumns='repeat(5, 1fr)'
          // gap={4}
        >
          <GridItem rowSpan={2} colSpan={1} bg='darkcyan'><Heading as='h2' size='xl' color='white' marginTop='150px'>NAV</Heading></GridItem>
          <GridItem rowSpan={2} colSpan={2} bg='darkorange'> <Heading as='h2' size='xl' color='white' marginTop='150px'>CONTENT</Heading></GridItem>
          <GridItem rowSpan={2} colSpan={1} bg='crimson'> <Heading as='h2' size='xl' color='white' marginTop='150px'>WIDGET</Heading></GridItem>
        </Grid>
        </Box>


       
      </div>
     
    )
  }

 