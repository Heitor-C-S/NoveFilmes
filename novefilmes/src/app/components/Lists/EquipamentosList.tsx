"use client";

import React from "react";
import { Text, Box, Grid } from "@radix-ui/themes";
import EquipmentCards from "./EquipmentCards";

export default function EquipamentosList() {
  return (
    <Box
      className="
        flex flex-col              
        items-center              
        justify-center           
        bg-neutral-900          
        min-h-screen           
        w-full                
        py-20                
      "
    >
      {/* Título */}
      <Text className="text-5xl text-white font-bold mb-10 text-center">
        Equipamentos em destaque:
      </Text>

      {/* Grid de equipamentos */}
      <Grid
        className="
          grid
          grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          gap-10
          justify-items-center
          w-full max-w-[1200px]    /* largura máxima para o conteúdo */
          px-10
        "
      >
        <EquipmentCards
          equipmentURL="/ARRI_ALEXA_MINI_FOTO.png"
          equipmentName="Arri Alexa Mini"
          detailsURL="https://novefilmes.estoquenow.site/Shop/p/000025/arri-alexa-mini---body--43-arriraw"
        />
        <EquipmentCards
          equipmentURL="/ARRI_ALEXA_35_FOTO.png"
          equipmentName="Arri Alexa 35"
          detailsURL="https://novefilmes.estoquenow.site/Shop/p/921/arri-alexa-35---4k-s35---arriraw--43"
        />
        <EquipmentCards
          equipmentURL="/ARRI_ALEXA_35_FOTO.png"
          equipmentName="Arri Alexa 35"
        />
        <EquipmentCards
          equipmentURL="/ARRI_ALEXA_35_FOTO.png"
          equipmentName="Arri Alexa 35"
        />
        <EquipmentCards
          equipmentURL="/ARRI_ALEXA_35_FOTO.png"
          equipmentName="Arri Alexa 35"
        />
        <EquipmentCards
          equipmentURL="/ARRI_ALEXA_35_FOTO.png"
          equipmentName="Arri Alexa 35"
        />
      </Grid>
    </Box>
  );
}

