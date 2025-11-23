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
              "Compacta, leve e confiável. A estética orgânica lendária da ARRI em qualquer set.",
            imageUrl: "/ALEXA_MINI_FOTO_2.jpg",
            detailsUrl:
              "https://novefilmes.estoquenow.site/Shop/p/000025/arri-alexa-mini---body--43-arriraw",
          },
          {
            id: "2",
            name: "Arri Alexa 35",
            description:
              "17 stops de alcance dinâmico e ciência de cor REVEAL. O auge da imagem 4K.",
            imageUrl: "/ARRI_ALEXA_35_FOTO.png",
            detailsUrl:
              "https://novefilmes.estoquenow.site/Shop/p/0000001/alexa-35---4.6k-arri-alev-4-cmos",
          },
          {
            id: "3",
            name: "Aputure 600X Pro",
            description:
              "Iluminação bi-color potente e precisa, com controle profissional total.",
            imageUrl: "/APUTURE_600X_PRO_FOTO2.png",
            detailsUrl:
              "https://novefilmes.estoquenow.site/Shop/p/000440/aputure-600x-pro---bi-color--2700-a-6500",
          },
          {
            id: "4",
            name: "Aputure 1200X",
            description:
              "Desempenho de elite. Potência extrema e versatilidade para as demandas mais exigentes.",
            imageUrl: "/APUTURE_1200X.png", // Verifique o nome do arquivo
            detailsUrl:
              "https://novefilmes.estoquenow.site/Shop/p/912/aputure-storm-1200x-bi-color-led",
          },
          {
            id: "5",
            name: "Aputure XT 26",
            description:
              "O LED mais potente do mercado. 2600W Bi-color com ótica de precisão e proteção IP65.",
            imageUrl: "/APUTURE_XT26.png", // Verifique o nome do arquivo
            detailsUrl:
              "https://novefilmes.estoquenow.site/Shop/p/000427/aputure-xt26-lightstorm---bi-color",
          },
          {
            id: "6",
            name: "Aputure 1000C",
            description:
              "Intensidade e cor total. O LED RGBWW definitivo para iluminação criativa de alto nível.",
            imageUrl: "/APUTURE_1000C.png", // Verifique o nome do arquivo
            detailsUrl:
              "https://novefilmes.estoquenow.site/Shop/p/080002/aputure-storm-1000c-blair-led-light",
          },
          {
            id: "7",
            name: "Aputure 400X",
            description:
              "Controle Bi-color preciso em um corpo eficiente. A solução perfeita para setups ágeis.",
            imageUrl: "/APUTURE_400X.png", // Verifique o nome do arquivo
            detailsUrl:
              "https://novefilmes.estoquenow.site/Shop/p/0001002/aputure-storm-400x",
          },
        ]}
      />{" "}
    </Box>
  );
}
