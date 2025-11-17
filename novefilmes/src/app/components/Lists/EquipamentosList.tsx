"use client";

import React from "react";
import { Grid, Text, Card, Inset } from "@radix-ui/themes";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Equipment = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  detailsUrl: string;
};

type Props = {
  featuredEquipments: Equipment[];
};

export default function EquipamentosList({ featuredEquipments }: Props) {
  if (featuredEquipments.length === 0) return null;

  return (
    <section
      className="
        flex 
        flex-col 
        py-20 
        px-4 
        bg-neutral-900
      "
    >
      <div className="max-w-7xl mx-auto">
        {/* Título da seção */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            text-center 
            mb-16
          "
        >
          <h2
            className="
              text-4xl 
              md:text-5xl 
              font-bold 
              mb-4 
              text-neutral-50
            "
          >
            Equipamentos em Destaque
          </h2>
        </motion.div>

        {/* Grade de cards */}
        <Grid
          className="
            grid 
            md:grid-cols-2 
            lg:grid-cols-3 
            gap-8
          "
        >
          {featuredEquipments.map((equipment, index) => (
            <motion.div
              key={equipment.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link
                href={equipment.detailsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card
                  className="
                    group 
                    bg-white 
                    rounded-xl 
                    overflow-hidden 
                    shadow-md 
                    hover:shadow-2xl 
                    transition-all 
                    duration-300 
                    border 
                    border-transparent 
                    hover:border-blue-300
                  "
                >
                  <Inset
                    clip="padding-box"
                    side="top"
                    className="
                      relative 
                      h-64 
                      overflow-hidden
                    "
                  >
                    <Image
                      src={equipment.imageUrl}
                      alt={equipment.name}
                      fill
                      className="
                        object-cover 
                        group-hover:scale-110 
                        transition-transform 
                        duration-500
                      "
                    />
                  </Inset>

                  <div className="p-6">
                    <Text
                      className="
                        block 
                        mb-2 
                        group-hover:text-blue-600 
                        transition-colors 
                        text-3xl 
                        font-bold
                      "
                    >
                      {equipment.name}
                    </Text>

                    <Text
                      className="
                        text-slate-600 
                        line-clamp-2 
                        mb-4
                      "
                    >
                      {equipment.description}
                    </Text>

                    <span
                      className="
                        text-blue-600 
                        text-xl 
                        font-semibold 
                        group-hover:translate-x-2 
                        transition-transform 
                        inline-block
                      "
                    >
                      Ver detalhes →
                    </span>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </Grid>

        {/* Botão “Ver Todos” */}
        <div
          className="
            flex 
            justify-center 
            mt-16
          "
        >
          <button
            className="
              flex 
              items-center 
              justify-center 
              gap-2 
              px-8 
              py-4 
              text-lg 
              font-semibold 
              text-neutral-50 
              bg-blue-600
              rounded-xl 
              hover:bg-blue-500 
              hover:text-white 
              transition-colors 
              group
            "
          >
            Ver Todos os Equipamentos ->
          </button>
        </div>
      </div>
    </section>
  );
}

