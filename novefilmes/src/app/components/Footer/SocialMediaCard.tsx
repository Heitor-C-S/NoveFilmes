"use client";

import React, { ReactNode } from "react";
import { Box, Card, Flex, Grid } from "@radix-ui/themes";

type Props = {
  children?: ReactNode;
  bgColor: string;
  hoverBgColor?: string; // NEW PROP
};

export default function SocialMediaCard({
  children,
  bgColor,
  hoverBgColor,
}: Props) {
  return (
    <Box className="hover:scale-105 duration-200 ">
      <Card
        className="w-40 h-16 p-4 rounded-xl transition-colors hover:shadow-lg duration-200"
        style={{
          backgroundColor: bgColor,
          ...(hoverBgColor && {
            // Inject CSS variable for hover
            ["--hover-bg" as any]: hoverBgColor,
          }),
        }}
        onMouseEnter={(e) => {
          if (hoverBgColor)
            e.currentTarget.style.backgroundColor = hoverBgColor;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = bgColor;
        }}
      >
        <Flex className="items-center h-full">
          <Grid className="grid grid-cols-[auto_1fr] text-white text-[1.3rem] gap-3">
            {children}
          </Grid>
        </Flex>
      </Card>
    </Box>
  );
}
