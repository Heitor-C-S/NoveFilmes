"use client";

import React from "react";
import { Grid, Link } from "@radix-ui/themes";
import { motion } from "framer-motion";
import EquipmentCards from "./EquipmentCards";

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
    <section className="flex flex-col py-20 px-8 bg-neutral-900">
      <div className="max-w-8xl mx-auto">
        {/* Título da seção */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-50">
            Equipamentos em Destaque
          </h2>
        </motion.div>

        {/* Grade de cards */}
        <Grid className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-7xl">
          {featuredEquipments.map((equipment, index) => (
            <motion.div
              key={equipment.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <EquipmentCards
                equipmentName={equipment.name}
                equipmentURL={equipment.imageUrl}
                detailsURL={equipment.detailsUrl}
              >
                <p className="text-slate-600 line-clamp-2 mb-4">
                  {equipment.description}
                </p>
              </EquipmentCards>
            </motion.div>
          ))}
        </Grid>

        {/* Botão "Ver Todos" */}
        <div className="flex justify-center mt-16 ">
          <Link
            href="https://novefilmes.estoquenow.site/"
            className="hover:scale-105 duration-200"
          >
            <button className="flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-neutral-50 bg-blue-600 rounded-xl hover:bg-blue-500 hover:text-white transition-colors group duration-200">
              Ver Todos os Equipamentos →
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
