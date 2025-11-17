"use client";

import React from "react";
import Image from "next/image";
import { Box, Grid, Heading } from "@radix-ui/themes";
import Link from "next/link";

export default function NavBar() {
  return (
    <div>
      <Grid
        className="flex bg-neutral-800  max-h-10 p-[3vw] pl-20 grid-cols-[auto_1fr] items-center gap-5 hover:backdrop-contrast-50"
        gridArea={"header"}
      >
        <Box className="h-[100%] w-[auto] pl-[3vw]">
          <Link href="/" passHref>
            <Image
              src="/LOGO_NOVE_QUADRADO_1.png"
              alt="Logo Nove Filmes"
              width={1671}
              height={1136}
              style={{
                objectFit: "cover",
                aspectRatio: "auto",
                width: "6.5vw",
              }}
              className="hover:backdrop-contrast-50"
            ></Image>
          </Link>
        </Box>

        <Box className=" min-w-[50vw] max-w-[50vw] h-8"></Box>

        <Box className=" flex items-center">
          <Link href="https://novefilmes.estoquenow.site">
            <Heading className="text-xl text-white hover:text-blue-600 duration-300">
              Equipamentos
            </Heading>
          </Link>
        </Box>

        <Box className="flex items-center p-[1vw] ">
          <Link href="/quemsomos">
            <Heading className="text-xl text-white hover:text-blue-600 duration-300">
              Quem Somos
            </Heading>
          </Link>
        </Box>

        <Box className="flex items-center">
          <Link href="/">
            <Heading className="text-xl text-white hover:text-blue-600 duration-300">
              Estúdio
            </Heading>
          </Link>
        </Box>
      </Grid>
    </div>
  );
}
