import React from "react";
import { Box, Text } from "@radix-ui/themes";
import EquipamentosList from "../components/Lists/EquipamentosList";
import ServicesSection from "../components/Services/ServicesSection";
import HeroSection from "../components/Hero/HeroSection";
export default function HomeContent() {
  return (
    <Box>
      {/* Hero Section - Use div for full control */}
      <HeroSection />
      {/* Services Section */}
      <ServicesSection />
      {/* Lista de Equipamentos */}
      <EquipamentosList
        featuredEquipments={[
          {
            id: "1",
            name: "Arri Alexa Mini",
            description:
              "Câmera mirrorless profissional com sensor full-frame de alta resolução.",
            imageUrl: "/ALEXA_MINI_FOTO_2.jpg",
            detailsUrl:
              "https://novefilmes.estoquenow.site/Shop/p/000025/arri-alexa-mini---body--43-arriraw  ",
          },
          {
            id: "2",
            name: "Arri Alexa 35",
            description:
              "ALEXA 35: Qualidade cinematográfica ARRI para seus projetos mais exigentes",
            imageUrl: "/ARRI_ALEXA_35_FOTO.png",
            detailsUrl:
              "https://novefilmes.estoquenow.site/Shop/p/0000001/alexa-35---4.6k-arri-alev-4-cmos  ",
          },
          {
            id: "3",
            name: "Aputure 600X",
            description:
              "Aputure 600x Pro: Iluminação bi-color potente e precisa, com controle profissional total.",
            imageUrl: "/APUTURE_600X_PRO_FOTO2.png",
            detailsUrl:
              "https://novefilmes.estoquenow.site/Shop/p/000440/aputure-600x-pro---bi-color--2700-a-6500  ",
          },
        ]}
      />
    </Box>
  );
}
