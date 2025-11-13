"use client";

import React, { ReactNode } from "react";
import { Grid, Text } from "@radix-ui/themes";
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
      className="flex flex-col items-center justify-between bg-neutral-50 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
      style={{ width: "300px", height: "350px" }}
    >
    
      {/* Nome do equipamento */}
      <Text as="p" weight="medium" className="text-center text-2xl mb-2">
        {equipmentName}
      </Text>
      {/* Imagem */}
      <Image
        src={equipmentURL}
        alt={equipmentName}
        width={250}
        height={250}
        className="object-contain mb-3"
      />


      {/* Link "Ver detalhes →" */}
      <Link
        href={detailsURL}
        target="_blank" // abre em nova aba
        rel="noopener noreferrer" // segurança
        className="text-blue-600 font-semibold text-xl hover:underline focus:outline-none"
      >
        Ver detalhes →
      </Link>

      {/* Caso queira conteúdo extra */}
      {children}
    </Grid>
  );
}

