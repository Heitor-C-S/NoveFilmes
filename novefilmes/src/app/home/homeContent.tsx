import React from "react";
import Image from "next/image";
import { Box, Grid, Text } from "@radix-ui/themes";
import EquipamentosList from "../components/Lists/EquipamentosList";
import ServicesSection from "../components/Services/ServicesSection"; // Keep this

export default function HomeContent() {
  return (
    <div>
      <Box>
        <Grid className="bg-neutral-50 items-center justify-center flex py-20 h-[45vw] grid-cols-[auto_1fr]">
          <Box className="flex flex-col w-82 items-start ml-10">
            <Text className="text-8xl font-bold">nove filmes</Text>
            <Text className="text-3xl">Equipamentos de</Text>
            <Text className="text-3xl font-bold">câmera,</Text>
            <Text className="text-3xl font-bold">luz e</Text>
            <Text className="text-3xl font-bold">maquinaria.</Text>
          </Box>
          <Image
            src="/ImagemEstudioSiteNove.jpg"
            alt="Imagem Estudio"
            width={4459}
            height={2508}
            style={{
              marginLeft: "5vw",
              aspectRatio: "1.778",
              width: "60%",
            }}
          />
        </Grid>

        {/* Services Section - KEEP THIS */}
        <ServicesSection />

        {/* Lista de Equipamentos - KEEP THIS */}
        <EquipamentosList
          featuredEquipments={[
            {
              id: "1",
              name: "Arri Alexa Mini",
              description:
                "Câmera mirrorless profissional com sensor full-frame de alta resolução.",
              imageUrl: "/ARRI_ALEXA_MINI_FOTO.png",
              detailsUrl:
                "https://novefilmes.estoquenow.site/Shop/p/000025/arri-alexa-mini---body--43-arriraw",
            },
            {
              id: "2",
              name: "Arri Alexa 35",
              description:
                "ALEXA 35: Qualidade cinematográfica ARRI para seus projetos mais exigentes",
              imageUrl: "/ARRI_ALEXA_35_FOTO.png",
              detailsUrl:
                "https://novefilmes.estoquenow.site/Shop/p/0000001/alexa-35---4.6k-arri-alev-4-cmos",
            },
            {
              id: "3",
              name: "Aputure 600X",
              description:
                "Aputure 600x Pro: Iluminação bi-color potente e precisa, com controle profissional total.",
              imageUrl: "/APUTURE_600X_PRO_FOTO.png",
              detailsUrl:
                "https://novefilmes.estoquenow.site/Shop/p/000440/aputure-600x-pro---bi-color--2700-a-6500",
            },
          ]}
        />
      </Box>
    </div>
  );
}
