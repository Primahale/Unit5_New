import React from "react";
import { SimpleGrid, Box } from "@chakra-ui/react";

function Img3() {
  return (
    <div>
      <div>
        <SimpleGrid
          columns={{
            sm: 1,
            md: 2,
            lg: 2,
          }}
          spacing={5}
        >
          <Box bg="yellow" height="200px"></Box>
          <Box bg="yellow" height="200px"></Box>
        </SimpleGrid>
      </div>
      <br />
      <div>
        <SimpleGrid spacing={5}>
          <Box bg="red" height="200px"></Box>
        </SimpleGrid>
      </div>
      <br />
      <div>
        <SimpleGrid
          columns={{
            sm: 1,
            lg: 3,
          }}
          spacing={5}
        >
          <Box bg="blue" height="200px"></Box>
          <Box bg="blue" height="200px"></Box>
          <Box bg="blue" height="200px"></Box>
        </SimpleGrid>
      </div>
    </div>
  );
}

export default Img3;

