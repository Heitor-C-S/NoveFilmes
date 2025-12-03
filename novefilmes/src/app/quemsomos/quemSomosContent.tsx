"use client";

import { Box, Flex, Text } from "@radix-ui/themes";
import React from "react";
import Image from "next/image";
import QuemSomosCard from "../components/Ui/QuemSomosCard";

export default function QuemSomosContent() {
  return (
    <Box className="w-full mx-auto text-center bg-neutral-50 text-neutral-900">
      <Flex className="flex flex-col mx-auto gap-16 bg-gradient-to-br from-slate-300 to-neutral-600 ">
        {/* ---------------------- MISSAO ---------------------- */}
        <Box className="w-full bg-gradient-to-b from-neutral-600 to-neutral-800 py-32 ">
          <Flex className="flex flex-col md:flex-row gap-16 max-w-7xl mx-auto justify-center items-center">
            {/* Conteúdo da esquerda */}
            <Flex className="flex flex-col gap-6 md:w-1/2">
              <Text className="text-7xl font-bold text-indigo-50">
                Nossa Missão
              </Text>

              <Box className="flex flex-col gap-1">
                <Text className="text-2xl leading-relaxed text-neutral-50">
                  Proporcionar soluções de alta qualidade para cinema e vídeo,
                  facilitando e potencializando a realização de obras
                  audiovisuais no mercado regional com excelência e inovação.
                </Text>
                <Text className="text-2xl leading-relaxed text-neutral-50">
                  Nosso compromisso é oferecer os melhores recursos técnicos e
                  suporte especializado para atender às necessidades criativas
                  de nossos clientes, disponibilizando equipamentos de ponta e
                  contribuindo para o desenvolvimento e valorização da indústria
                  audiovisual.
                </Text>
              </Box>
            </Flex>

            {/* Imagem da direita */}
            <Box className="relative aspect-video md:w-3/4 full">
              <Image
                src="/ImagemEstudioSiteNove.jpg"
                alt="Imagem Estudio"
                fill
                className="object-cover rounded-lg"
              />
            </Box>
          </Flex>
        </Box>

        {/* ---------------------- VALORES ---------------------- */}
        <Flex className="flex-col max-w-6xl items-center justify-center mx-auto gap-10">
          <Flex className="flex flex-col mx-auto items-center justify-center ">
            <Text className="mx-auto text-center text-6xl font-bold text-slate-900">
              Nossos Valores
            </Text>
          </Flex>
          <QuemSomosCard />
        </Flex>

        {/* BOTTOM SPACING */}
        <Box className="h-10" />
      </Flex>
    </Box>
  );
}
