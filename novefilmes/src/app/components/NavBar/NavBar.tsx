"use client";

import React from "react";
import Image from "next/image";
import { Box, Grid, Heading } from "@radix-ui/themes";
import Link from "next/link";

export default function NavBar() {
  return (
    <Grid
      className="grid bg-neutral-800 p-2 pl-24 grid-cols-[auto_1fr_auto_auto_auto] items-center gap-8"
      gridArea={"header"}
    >
      {/* Logo container with fixed responsive size */}
      <Box className="relative w-32 h-24 ">
        <Link href="/" passHref>
          <Image
            src="/LOGO_NOVE_QUADRADO_1.png"
            alt="Logo Nove Filmes"
            fill
            className="object-contain cursor-pointer hover:opacity-70 duration-200"
          />
        </Link>
      </Box>

      {/* Spacer - takes remaining space */}
      <Box className="flex-1" />

      {/* Navigation items - consistent sizing */}
      <Box className="flex items-center">
        <Link href="https://novefilmes.estoquenow.site">
          <Heading className="text-2xl text-white hover:text-blue-600 duration-300">
            Equipamentos
          </Heading>
        </Link>
      </Box>

      <Box className="flex items-center">
        <Link href="/quemsomos">
          <Heading className="text-2xl text-white hover:text-blue-600 duration-300">
            Quem Somos
          </Heading>
        </Link>
      </Box>

      <Box className="flex items-center pr-6">
        <Link href="/">
          <Heading className="text-2xl text-white hover:text-blue-600 duration-300">
            Estúdio
          </Heading>
        </Link>
      </Box>
    </Grid>
  );
}
