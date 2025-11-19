import React from "react";
import { Box, Text } from "@radix-ui/themes";
import Image from "next/image";

export default function heroSection() {
  return (
    <div className="flex flex-row items-center bg-neutral-50 py-40 px-20 gap-32">
      {/* Left side - Text */}
      <Box className="flex-1 max-w-2xl">
        <Text className="text-8xl font-bold block mb-4">nove filmes</Text>
        <Text className="text-3xl block">Equipamentos de</Text>
        <Text className="text-3xl font-bold block">câmera,</Text>
        <Text className="text-3xl font-bold block">luz e</Text>
        <Text className="text-3xl font-bold block">maquinaria.</Text>
      </Box>

      {/* Right side - Image */}
      <Box className="flex-1 relative aspect-video max-w-4xl">
        <Image
          src="/ImagemEstudioSiteNove.jpg"
          alt="Imagem Estudio"
          fill
          className="object-cover rounded-lg"
        />
      </Box>
    </div>
  );
}
