import React from "react";
import { Box, Grid, Text } from "@radix-ui/themes";

export default function QuemSomosContent() {
  return (
    <div>
      <Box>
        <Grid className=" bg-white items-center justify-center flex grid-cols-[auto_1fr] ">
          <Text className="text-7xl font-bold">nove filmes</Text>
        </Grid>
      </Box>
    </div>
  );
}
