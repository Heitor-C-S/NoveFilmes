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
    <Link
      href={detailsURL}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      <Card className="bg-neutral-100 rounded-xl overflow-hidden shadow-md transition-all duration-300 border-4 border-neutral-50 hover:border-blue-600 h-full">
        <Inset
          clip="padding-box"
          side="top"
          className="relative h-72 overflow-hidden"
        >
          <Image
            src={equipmentURL}
            alt={equipmentName}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </Inset>

        <div className="p-6">
          <Text className="block mb-2 group-hover:text-blue-600 transition-colors text-3xl font-bold">
            {equipmentName}
          </Text>

          {children}

          <span className="text-blue-600 text-xl font-semibold group-hover:translate-x-2 transition-transform inline-block">
            Ver detalhes →
          </span>
        </div>
      </Card>
    </Link>
  );
}
