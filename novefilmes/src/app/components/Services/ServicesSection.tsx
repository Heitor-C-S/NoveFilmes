"use client";

import React from "react";
import { motion } from "framer-motion";
import { Camera, Lightbulb, Boxes, Building2 } from "lucide-react";

const services = [
  {
    icon: Camera,
    title: "Câmeras Cinema & Broadcast",
    description:
      "Arri Alexa Mini, Alexa 35, RED Komodo 6K, Sony A7S III e lentes cinematográficas",
  },
  {
    icon: Lightbulb,
    title: "Iluminação Profissional",
    description:
      "LEDs Aputure, HMIs, fresnels, softboxes e todo controle de luz de estúdio",
  },
  {
    icon: Boxes,
    title: "Maquinaria & Suporte",
    description:
      "Dolly, trilhos, tripés, gimbals, estabilizadores e acessórios especializados",
  },
  {
    icon: Building2,
    title: "Estúdio de Gravação",
    description:
      "Espaço completo para produções com chroma key, iluminação e infraestrutura",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-32 px-4 bg-neutral-200 ">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-slate-600">
            Equipamentos de ponta com suporte técnico especializado
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-xl border-2 border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all cursor-pointer"
            >
              <div className="bg-blue-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-slate-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
