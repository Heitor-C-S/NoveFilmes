"use client";

import React from "react";
import { motion } from "framer-motion";

const Valores = [
  {
    /*icon: , */
    title: "Excelência",
    description:
      " Garantir equipamentos de última geração, sempre em perfeitas condições, aliados aos melhores serviços para assegurar o mais alto padrão de qualidade em cada produção.",
  },
  {
    /*icon: , */
    title: "Compromisso com o Cliente",
    description:
      ",Priorizar a satisfação de nossos clientes com atendimento personalizado e soluções adaptadas às suas necessidades, seja nalocação de equipamentos ou no suporte à produção.",
  },
  {
    /*icon: , */
    title: "Inovação",
    description:
      "Estar na vanguarda das tecnologias audiovisuais, atualizando constantemente nosso portfólio de equipamentos, técnicas e processos.",
  },
  {
    /*icon: , */
    title: "Parcerias",
    description:
      "Fomentar colaborações com profissionais e empresas fortalecendo e impulsionando o crescimento da indústria regional.",
  },
  {
    /*icon: , */
    title: "Sustentabilidade",
    description:
      "Promover práticas sustentáveis em nossas operações, minimizando impactos ambientais e incentivando a responsabilidade ecológica em todas as etapas da produção.",
  },
  {
    /*icon: , */
    title: "Profissionalismo",
    description:
      "Atuar com ética, transparência e integridade em cada relação — com clientes, fornecedores, parceiros e colaboradores.",
  },
  {
    /*icon: , */
    title: "Apoio ao Talento Local",
    description:
      "Incentivar e apoiar o desenvolvimento de profissionais da região, oferecendo oportunidades e recursos que fortaleçam o cenário audiovisual local.",
  },
  {
    /*icon: , */
    title: "Cultura",
    description:
      "Valorizar e promover a produção cultural regional, reconhecendo o cinema e o vídeo como expressões artísticas essenciais para a identidade local.",
  },
];
export default function QuemSomosCards() {
  return (
    <section className=" px-10 bg-opacity-80">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        ></motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {Valores.map((valores, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-gradient-to-br from-slate-200 to-slate-400 p-8 rounded-xl border-4 border-slate-300 hover:border-slate-400 hover:shadow-xl hover:shadow-slate-600 transition-all cursor-pointer"
            >
              <h3 className="text-3xl font-bold mb-3 text-slate-800">
                {valores.title}
              </h3>
              <p className="text-slate-800 text-xl">{valores.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
