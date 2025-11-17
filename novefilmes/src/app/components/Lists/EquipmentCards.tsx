"use client";

import React, { ReactNode } from "react";
import { Grid, Text, Box } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";

type Props = {
  children?: ReactNode;
  equipmentName: string;
  equipmentURL: string;
  detailsURL?: string; // URL opcional para o link
};

export default function EquipmentCards({
  children,
  equipmentName,
  equipmentURL,
  detailsURL = "#", // valor padrão
}: Props) {
  return (
    <Grid
      className="
        flex 
        flex-col 
        items-center 
        justify-between 
        bg-neutral-500 
        rounded-xl 
        p-4 
        shadow-sm 
        hover:shadow-md 
        transition-shadow
      "
      style={{ width: "300px", height: "350px" }}
    >
      {/* Nome do equipamento */}
      <Text
        as="p"
        weight="medium"
        className="
          text-center 
          text-2xl
        "
      >
        {equipmentName}
      </Text>

      {/* Imagem */}
      <Box
        className="
          items-center 
          align-middle 
          bg-neutral-500 
          px-10 
          py-3 
          rounded-xl
        "
      >
        <Image
          src={equipmentURL}
          alt={equipmentName}
          width={200}
          height={200}
          className="
            object-contain 
            rounded-lg
          "
        />
      </Box>

      {/* Link "Ver detalhes →" */}
      <Link
        href={detailsURL}
        target="_blank"
        rel="noopener noreferrer"
        className="
          text-blue-600 
          font-semibold 
          text-xl 
          hover:underline 
          focus:outline-none
        "
      >
        Ver detalhes →
      </Link>

      {children}
    </Grid>
  );
}
