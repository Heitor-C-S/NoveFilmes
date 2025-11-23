"use client";

import React, { useCallback } from "react";
import { Link } from "@radix-ui/themes";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import EquipmentCards from "./EquipmentCards";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Se não tiver lucide, veja nota abaixo*

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
  // Configuração do Carousel (Loop infinito + Autoplay)
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 5000, stopOnInteraction: true })], // delay in ms
  );

  // Funções de navegação manual
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  if (featuredEquipments.length === 0) return null;

  return (
    <section className="flex flex-col py-20 px-4 md:px-8 bg-gradient-to-b from-zinc-700 to-neutral-900 overflow-hidden">
      <div className="max-w-8xl mx-auto w-full">
        {/* Header com Título e Botões de Navegação */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left w-full md:w-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-2 text-neutral-50">
              Equipamentos em Destaque
            </h2>
            <p className="text-neutral-400 text-lg">
              Tecnologia de ponta para sua produção
            </p>
          </motion.div>
        </div>

        {/* CARROUSEL WRAPPER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-7xl mx-auto relative bg-neutral-600 rounded-xl p-4 "
        >
          {/* NAVIGATION BUTTONS - FLOATING OUTSIDE */}
          <button
            onClick={scrollPrev}
            className=" hidden md:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:bg-blue-600 hover:border-blue-600 shadow-xl shadow-black/30 transition-all duration-300 text-white z-20 "
            aria-label="Anterior"
          >
            <ChevronLeft size={34} strokeWidth={2.5} />
          </button>

          <button
            onClick={scrollNext}
            className=" hidden md:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:bg-blue-600 hover:border-blue-600 shadow-xl shadow-black/30 transition-all duration-300 text-white z-20 "
            aria-label="Próximo"
          >
            <ChevronRight size={34} strokeWidth={2.5} />
          </button>
          {/* Viewport do Embla (Overflow Hidden necessário) */}
          <div
            className="overflow-hidden cursor-grab active:cursor-grabbing"
            ref={emblaRef}
          >
            <div className="flex -ml-6 ">
              {" "}
              {/* Margem negativa para compensar o padding do slide */}
              {featuredEquipments.map((equipment) => (
                <div
                  key={equipment.id}
                  // Classes de responsividade:
                  // pl-6: Cria o espaço entre os cards
                  // basis-full: 1 card por vez (Mobile)
                  // md:basis-1/2: 2 cards (Tablet)
                  // lg:basis-1/3: 3 cards (Desktop)
                  className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_25%] min-w-0 pl-6"
                >
                  <div className="h-full">
                    <EquipmentCards
                      equipmentName={equipment.name}
                      equipmentURL={equipment.imageUrl}
                      detailsURL={equipment.detailsUrl}
                    >
                      <p className="text-slate-800 line-clamp-2 mb-4">
                        {equipment.description}
                      </p>
                    </EquipmentCards>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Botão "Ver Todos" */}
        <div className="flex justify-center mt-16">
          <Link
            href="https://novefilmes.estoquenow.site/"
            className="hover:scale-105 duration-200 no-underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-neutral-50 bg-blue-600 rounded-xl hover:bg-blue-500 transition-colors shadow-lg shadow-blue-900/20">
              Ver Todos os Equipamentos →
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
