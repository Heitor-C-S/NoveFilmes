"use client";

import React from 'react';
import { Box, ChevronDownIcon, Grid, Heading } from '@radix-ui/themes';
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Link from 'next/link';

export default function EquipamentosDropdown() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Box className="flex justify-center cursor-pointer">
          <Grid className="flex grid-cols-[auto_1fr] items-center gap-1">
            <Heading className="text-xl">Equipamentos</Heading>
            <ChevronDownIcon />
          </Grid>
        </Box>
      </DropdownMenu.Trigger>
      
      <DropdownMenu.Portal>
        <DropdownMenu.Content 
          className="min-w-[14vw] rounded-sm bg-white p-[0.3vw] shadow-[0px_10px_38px_-10px_rgba(22,23,24,0.35),0px_10px_20px_-15px_rgba(22,23,24,0.2)] animate-slide-up-and-fade"
          sideOffset={5}
        >
          <Link href="https://novefilmes.estoquenow.site/Shop/category/61276/01.-camera" passHref>
            <DropdownMenu.Item 
              className="flex h-6 items-center border border-gray-300 rounded-sm pl-6 text-sm leading-none text-black cursor-pointer hover:bg-gray-200 hover:border-gray-300"
            >
              Câmera
            </DropdownMenu.Item>
          </Link>
          <DropdownMenu.Arrow className="fill-white" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
