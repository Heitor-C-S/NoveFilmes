import React from "react";
import { Box, Grid, Text, Flex } from "@radix-ui/themes";
import Image from "next/image";
import SocialMediaCard from "./SocialMediaCard";
import Link from "next/link";
import FooterForm from "./FooterForm";

export default function Footer() {
  return (
    <Box className="bg-neutral-50">
      {/* ... (Seção superior de formulário/social mantida igual) ... */}
      <Grid className="flex items-center-top bg-neutral-50 w-full pt-10 p-10 gap-12 grid-cols-[auto_1fr]">
        {/*Social Media section*/}
        <Box className="flex flex-col bg-neutral-50 max-w-3xl items-center px-24 py-16">
          <Text style={{ fontSize: "2.5rem" }}>
            Entre em contato com a gente:
          </Text>
          <Grid className="flex flex-row bg-neutral-50 gap-5 p-5">
            <Link href="https://www.instagram.com/novefilmes/" passHref>
              <SocialMediaCard bgColor="#D92D8A" hoverBgColor="#B22470">
                <Image
                  src="/instagram.svg"
                  alt="Instagram icon"
                  width={30}
                  height={30}
                  style={{ color: "#fdfdfd" }}
                />
                <Text>Instagram</Text>
              </SocialMediaCard>
            </Link>
            <Link
              href="https://web.facebook.com/9Filmes?_rdc=1&_rdr"
              passHref
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialMediaCard bgColor="#1877F2" hoverBgColor="#0D5BD9">
                <Image
                  src="/icons8-facebook.svg"
                  alt="Facebook icon"
                  width={30}
                  height={30}
                  style={{ color: "#fdfdfd" }}
                />
                <Text>Facebook</Text>
              </SocialMediaCard>
            </Link>
            <Link href="https://wa.me/5581999537989" passHref>
              <SocialMediaCard bgColor="#25D366" hoverBgColor="#1DA851">
                <Image
                  src="/icons8-whatsapp.svg"
                  alt="Whatsapp icon"
                  width={30}
                  height={30}
                  style={{ color: "#fdfdfd" }}
                />
                <Text>Whatsapp</Text>
              </SocialMediaCard>
            </Link>
          </Grid>
        </Box>
        <Box className="w-full max-w-5xl">
          <FooterForm />
        </Box>
      </Grid>

      {/*(Conteúdo Principal do Footer)*/}
      <Box className="flex flex-col items-start bg-neutral-800 text-neutral-300 py-12 px-16 gap-8 ">
        {/* 👇 MUDANÇA 1: Aumentei o gap-x para 16 (64px) */}
        <Grid className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-12 gap-x-16 gap-y-10">
          {/* --- Column 1: LOGO + SOCIAL --- */}
          <Flex className="flex flex-col items-center xl:items-start xl:col-span-2">
            {/* Logo - Agora aponta para a Home */}
            <Box className="relative w-40 h-32 mb-4">
              <Link href="/" passHref>
                <Image
                  src="/LOGO_NOVE_QUADRADO_1.png"
                  alt="Logo Nove"
                  fill
                  className="object-contain cursor-pointer hover:opacity-90 duration-200"
                />
              </Link>
            </Box>

            {/* Social icons */}
            <Box className="flex flex-row align-center gap-8 ">
              {/* Facebook */}
              <Link
                href="https://web.facebook.com/9Filmes?_rdc=1&_rdr"
                passHref
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/icons8-facebook.svg"
                  alt="Facebook"
                  width={30}
                  height={30}
                  className="cursor-pointer hover:scale-110 duration-200"
                />
              </Link>

              {/* Whatsapp - Link corrigido (estava vazio antes) */}
              <Link
                href="https://wa.me/5581999537989"
                passHref
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/icons8-whatsapp.svg"
                  alt="Whatsapp"
                  width={30}
                  height={30}
                  className="cursor-pointer hover:scale-110 duration-200"
                />
              </Link>

              {/* Instagram - Link corrigido (estava vazio antes) */}
              <Link
                href="https://www.instagram.com/novefilmes/"
                passHref
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/instagram.svg"
                  alt="Instagram"
                  width={30}
                  height={30}
                  className="cursor-pointer hover:scale-110 duration-200"
                />
              </Link>
            </Box>
          </Flex>
          {/* --- Column 2: Equipamentos (Mantive começando na col 6) --- */}
          {/* Como a logo agora termina na col 2, e Equipamentos começa na 6, */}
          {/* temos as colunas 3, 4 e 5 vazias. É MUITO espaço. */}
          <Grid className="grid grid-cols my-5 gap-2 grid-cols-1 xl:col-start-6 xl:col-span-2">
            <Text className="text-blue-600 duration-200 font-semibold mb-2 text-2xl">
              Equipamentos
            </Text>
            <Text className="hover:text-blue-600 duration-200 text-xl ">
              Câmera
            </Text>
            <Text className="hover:text-blue-600 duration-200 text-xl ">
              Iluminação
            </Text>
            <Text className="hover:text-blue-600 duration-200 text-xl ">
              Maquinaria
            </Text>
            <Text className="hover:text-blue-600 duration-200 text-xl ">
              Gerador
            </Text>
            <Text className="hover:text-blue-600 duration-200 text-xl ">
              Movimento
            </Text>
          </Grid>

          {/* --- Column 3: Contact --- */}
          <Flex className="flex flex-col my-5 gap-2 xl:col-span-3">
            <Text className="text-blue-600 duration-200 font-semibold mb-2 text-2xl">
              Contate-nos
            </Text>

            <Text className="hover:text-blue-600 duration-200 text-xl cursor-pointer">
              (81) 9 9953-7989
            </Text>

            <Text className="hover:text-blue-600 duration-200 text-xl break-words cursor-pointer">
              contato@novefilmes.com.br
            </Text>

            {/* Bloco de Endereço */}
            <Flex className="flex flex-col mt-4 gap-1">
              <Text className="font-semibold text-blue-600 text-xl">
                Endereço:
              </Text>
              <Flex className="flex flex-col">
                <Text className="hover:text-blue-600 duration-200 text-xl cursor-pointer">
                  Rua Jader de Andrade, 148
                </Text>
                <Text className="hover:text-blue-600 duration-200 text-xl cursor-pointer">
                  Casa Forte, Recife - PE
                </Text>
              </Flex>
            </Flex>
          </Flex>

          {/* --- Column 4: Quem Somos --- */}
          <Box className="flex flex-col my-5 gap-2 xl:col-span-2 ">
            <Text className="text-blue-600 duration-200 font-semibold mb-2 text-2xl ">
              Quem Somos
            </Text>
            <Text className="hover:text-blue-600 duration-200 text-xl ">
              Missão
            </Text>
            <Text className="hover:text-blue-600 duration-200 text-xl ">
              Valores
            </Text>
            <Text className="hover:text-blue-600 duration-200 text-xl ">
              Estúdio
            </Text>
          </Box>
        </Grid>
      </Box>
      {/* COPYRIGHT BAR */}
      <Box className="bg-neutral-900 text-neutral-50 text-center py-2 text-xl ">
        <Text>Copyright © 2025 - Nove Filmes Produções Ltda.</Text>
      </Box>
    </Box>
  );
}
