import { Box,Grid, GridItem } from '@chakra-ui/react'


export function Prob() {


    return (
     
      <div className="App">
           <Box bg='white' w='70%' p={2}  margin='auto' >
          <Grid
            
            templateRows='repeat(2, 1fr)'
            templateColumns='repeat(3, 1fr)'
            gap={4}
            >
           
            <GridItem h='400px' w='400px' colSpan={1} bg='mediumpurple' />
            {/* <GridItem colSpan={2} bg='papayawhip' /> */}
            <GridItem h='610px' w='500px' colSpan={2} rowSpan={2} bg='tomato' />
            <GridItem  h='200px' w='400px' rowSpan={1} bg='lightskyblue' />
          </Grid>
          </Box>
      </div>
     
    )
  }

