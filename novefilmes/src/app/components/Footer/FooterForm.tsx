import React from "react";
import { Box, Button } from "@radix-ui/themes";
import * as Form from "@radix-ui/react-form";

export default function FooterForm() {
  return (
    <Box
      className="
        relative 
        bg-neutral-50 
        flex 
        flex-col 
        w-full 
        px-6 
        py-10 
        items-center 
      "
    >
      <Form.Root className="w-full flex flex-col items-center ">
        {/* Nome Completo */}
        <Form.Field className="mb-4 grid w-full relative" name="Nome Completo">
          <div className="group relative">
            <Form.Control asChild>
              <input
                className="peer h-12 w-full bg-neutral-50 px-3 pt-4 text-lg text-black outline-none shadow-[0_2px_0_rgba(190,190,190,1)] focus:shadow-[0_2px_0_rgba(80,120,255,1)]"
                type="text"
                placeholder=" "
                required
              />
            </Form.Control>
            <Form.Label
              className="
                absolute left-0 top-1 -translate-y-1/2 
                text-xl font-medium text-black 
                transition-transform duration-300 
                peer-focus:-translate-y-8 
                peer-placeholder-shown:translate-y-0
              "
            >
              Nome Completo *
            </Form.Label>
            <Form.Message className="text-sm text-red-400" match="valueMissing">
              Digite seu nome *
            </Form.Message>
          </div>
        </Form.Field>

        {/* Linha com Telefone e Email */}
        <div className="flex gap-4 w-full pt-6 pb-4">
          {/* Telefone */}
          <Form.Field
            className="mb-4 grid w-1/2 relative"
            name="TelefoneOrCelular"
          >
            <div className="group relative">
              <Form.Control asChild>
                <input
                  className="peer h-12 bg-neutral-50 w-full px-3 pt-4 text-lg text-black outline-none shadow-[0_2px_0_rgba(190,190,190,1)] focus:shadow-[0_2px_0_rgba(80,120,255,1)]"
                  type="tel"
                  placeholder=" "
                  required
                />
              </Form.Control>
              <Form.Label
                className="
                  absolute left-0 top-1 -translate-y-1/2 
                  text-xl font-medium text-black 
                  transition-transform duration-300 
                  peer-focus:-translate-y-8 
                  peer-placeholder-shown:translate-y-0
                "
              >
                Telefone/Celular *
              </Form.Label>
              <Form.Message
                className="text-sm text-red-400"
                match="valueMissing"
              >
                Digite seu número *
              </Form.Message>
            </div>
          </Form.Field>

          {/* Email */}
          <Form.Field className="mb-4 grid w-1/2 relative" name="email">
            <div className="group relative">
              <Form.Control asChild>
                <input
                  className="peer h-12 w-full px-3 pt-4 bg-neutral-50 text-lg text-black outline-none shadow-[0_2px_0_rgba(190,190,190,1)] focus:shadow-[0_2px_0_rgba(80,120,255,1)]"
                  type="email"
                  placeholder=" "
                  required
                />
              </Form.Control>
              <Form.Label
                className="
                  absolute left-0 top-1 -translate-y-1/2 
                  text-xl font-medium text-black 
                  transition-transform duration-300 
                  peer-focus:-translate-y-8 
                  peer-placeholder-shown:translate-y-0
                "
              >
                Email *
              </Form.Label>
              <Form.Message
                className="text-xs text-red-400"
                match="valueMissing"
              >
                Digite seu email *
              </Form.Message>
              <Form.Message
                className="text-xs text-red-400"
                match="typeMismatch"
              >
                Digite um email válido *
              </Form.Message>
            </div>
          </Form.Field>
        </div>

        {/* Mensagem */}
        <Form.Field className="mb-4 grid w-full relative" name="Mensagem">
          <div className="group relative">
            <Form.Control asChild>
              <textarea
                className="peer w-full h-40 resize-none px-3 pt-6 text-lg bg-neutral-50 text-black outline-none shadow-[0_2px_0_rgba(190,190,190,1)] focus:shadow-[0_2px_0_rgba(80,120,255,1)]"
                placeholder=" "
              />
            </Form.Control>
            <Form.Label
              className="
                absolute left-0 top-1 pt-2 -translate-y-1/2 
                text-xl font-medium text-black 
                transition-transform duration-300 
                peer-focus:-translate-y-10 
                peer-placeholder-shown:translate-y-0
              "
            >
              Mensagem
            </Form.Label>
          </div>
        </Form.Field>

        {/* Enviar */}
        <Form.Submit asChild>
          <Button className="mt-4 h-12 w-40 rounded-md bg-blue-600 text-white text-xl shadow-lg hover:bg-blue-500 hover:scale-105 duration-200">
            Enviar
          </Button>
        </Form.Submit>
      </Form.Root>
    </Box>
  );
}
