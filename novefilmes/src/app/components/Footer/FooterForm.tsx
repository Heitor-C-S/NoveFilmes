import React from 'react';
import { Box, Button } from "@radix-ui/themes";
import * as Form from "@radix-ui/react-form";

export default function FooterForm() {

    return(       
      
        <Box className="relative bg-[#fdfdfd] flex flex-col border-2 border-[#fdfdfd] w-[45vw] h-[30vw] items-center -ml-24">
            
            <Form.Root className="w-full flex flex-col items-center ">
                
            <Form.Field className="mb-4 grid w-full relative" name="Nome Completo">
                <div className="group relative">
                    <Form.Control asChild>
                    <input 
                        className="peer h-12 w-full px-3 pt-4 text-lg text-black outline-none shadow-[0_2px_0_rgba(190,190,190,1)] focus:shadow-[0_2px_0_rgba(80,120,255,1)]" 
                        type="text" 
                        placeholder=" "
                        required 
                    />
                    </Form.Control>
                    <Form.Label className="absolute left-0 top-1 -translate-y-1/2 text-xl font-medium text-black transition-transform duration-300 peer-focus:-translate-y-8 peer-placeholder-shown:translate-y-0">
                    Nome Completo *
                    </Form.Label>
                    <Form.Message className="text-sm text-red-400" match="valueMissing">
                    Digite seu nome *
                    </Form.Message>
                </div>
            </Form.Field>
                
                {/* Flex container for two fields side by side */}
                <div className="flex justify-between w-full pt-6 pb-4">
                    
                    {/* Telefone/Celular Field */}
                    <Form.Field className="mb-4 grid w-1/2 relative" name="TelefoneOrCelular">
                        <div className='group relative'>
                            <Form.Control asChild>
                                    <input
                                        className="peer h-12 w-11/12 px-3 pt-4 text-lg text-black outline-none shadow-[0_2px_0_rgba(190,190,190,1)] focus:shadow-[0_2px_0_rgba(80,120,255,1)] "
                                        type="tel"
                                        placeholder=" "
                                        required
                                    />
                            </Form.Control>
                                <Form.Label className="absolute left-0 top-1 -translate-y-1/2 text-xl font-medium text-black transition-transform duration-300 peer-focus:-translate-y-10 peer-placeholder-shown-translate-y-0">
                                    Telefone/Celular *
                                </Form.Label>
                                <Form.Message className="text-sm text-red-400" match="valueMissing">
                                    Digite seu número *
                                </Form.Message>
                        </div>
                    </Form.Field>
                    {/* Email Field */}
                    <Form.Field className="mb-4 grid w-1/2 relative" name="email">
                        <div className="group relative">
                            
                        <Form.Control asChild>
                            <input
                                className="peer h-12 w-full px-3 pt-4 text-lg text-black outline-none shadow-[0_2px_0_rgba(190,190,190,1)] focus:shadow-[0_2px_0_rgba(80,120,255,1)] ]"
                                type="email"
                                placeholder=" "
                                required
                            />
                        </Form.Control>
                            
                            <Form.Label className="absolute left-0 top-1 -translate-y-1/2 text-xl font-medium text-black transition-transform duration-300 peer-focus:-translate-y-10 peer-placeholder-shown-translate-y-0">
                                Email *
                            </Form.Label>
                                <Form.Message className="text-xs text-red-400" match="valueMissing">
                                    Digite seu email *
                                </Form.Message>
                                <Form.Message className="text-xs text-red-400" match="typeMismatch">
                                    Digite um email válido *
                                </Form.Message>
                        </div>
                    </Form.Field>
                </div>

                {/* Mensagem Field */}
                <Form.Field className="mb-4 grid w-full relative" name="Mensagem">
                    <div className="flex items-baseline justify-between">
                        <Form.Control asChild>
                            <textarea
                                className="peer w-full h-40 resize-none px-3 pt-6 text-lg bg-[#fdfdfd] text-black border-[#cdcdcd] outline-none shadow-[0_2px_0_rgba(190,190,190,1)] focus:shadow-[0_2px_0_rgba(80,120,255,1)]"
                                placeholder=""
                            />
                        </Form.Control>
                        <Form.Label className="absolute left-0 top-1 pt-2 -translate-y-1/2 text-xl font-medium text-black transition-transform duration-300 peer-focus:-translate-y-10 peer-placeholder-shown-translate-y-0">
                            Mensagem
                        </Form.Label>
                    </div>
                    
                </Form.Field>

                {/* Submit Button */}
                <Form.Submit asChild>
                  <Button className="mt-2 box-border inline-flex h-[3vw] w-[10vw] items-center justify-center rounded-md p-[1vw] text-2xl font-medium bg-[#3A4AEF] text-[#fdfdfd] border border-[#cdcdcd] shadow-sm">
                    Enviar
                  </Button>
                </Form.Submit>
            </Form.Root>
        </Box>
    );
}
