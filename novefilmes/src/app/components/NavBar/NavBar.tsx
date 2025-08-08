"use client";

import React from 'react';
import Image from 'next/image';
import { Box, Grid, Heading,} from '@radix-ui/themes';
import EquipamentosDropdown from './EquipamentosDropDown';
import Link from 'next/link';

export default function NavBar() {

  return (
    <div>
        <Grid className="flex bg-white w-[100%] max-h-10 p-[3vw] pl-20 grid-cols-[auto_1fr] items-center gap-5" gridArea={"header"}>
            
            <Box className="h-[100%] w-[auto] pl-[3vw]">
                <Link href="/" passHref>
                    <Image src="/LOGO_NOVE_QUADRADO_1.png" alt='Logo Nove Filmes' width={1671} height={1136} style={{objectFit:'cover',aspectRatio:'auto',width:'6.5vw',}}></Image>
                </Link>
            </Box>
            
            <Box className=" min-w-[50vw] max-w-[50vw] h-8"></Box> 
            
            <EquipamentosDropdown></EquipamentosDropdown>

            <Box className="flex items-center p-[1vw] ">
            <Link href="/quemsomos">
                        <Heading className="text-xl">Quem Somos</Heading>
                </Link>
            </Box>

            <Box className="flex items-center">
                <Link href="/">
                        <Heading className="text-xl">Estúdio</Heading>                    
                </Link>
            </Box>

        </Grid>
    </div>
  )
}

