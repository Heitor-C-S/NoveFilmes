"use client";

import React, { ReactNode } from "react";
import { Card, Inset, Text } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";

type Props = {
  children?: ReactNode;
  equipmentName: string;
  equipmentURL: string;
  detailsURL?: string;
};

export default function EquipmentCards({
  children,
  equipmentName,
  equipmentURL,
  detailsURL = "#",
}: Props) {
  return (
    <Link href={detailsURL} target="_blank" rel="noopener noreferrer">
      <Card className="group bg-neutral-100 rounded-xl overflow-hidden shadow-md transition-all duration-300 border-4 border-neutral-50 hover:border-blue-600 hover:shadow-xl h-full">
        <Inset
          clip="padding-box"
          side="top"
          className="relative h-52 overflow-hidden"
        >
          <Image
            src={equipmentURL}
            alt={equipmentName}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </Inset>

        <div className="p-6">
          <Text className="block mb-2 text-3xl font-bold transition-colors group-hover:text-blue-600">
            {equipmentName}
          </Text>

          {children}

          <span className="text-blue-600 text-xl font-semibold inline-block transition-transform group-hover:translate-x-2">
            Ver detalhes →
          </span>
        </div>
      </Card>
    </Link>
  );
}
