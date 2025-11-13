import React from 'react';
import Image from 'next/image';
import {Box,Grid,Text} from '@radix-ui/themes'
import EquipamentosList from '../components/Lists/EquipamentosList';

export default function HomeContent() {

    return(
        <div>
            <Box>
                <Grid className=" bg-neutral-50 items-center justify-center flex py-20 grid-cols-[auto_1fr] ">
                    
                <Box className="flex flex-col w-82 items-start ml-10">
                    <Text className="text-8xl font-bold">nove filmes</Text>
                    <Text className="text-3xl">Equipamentos de</Text>
                    <Text className="text-3xl font-bold">câmera,</Text>
                    <Text className="text-3xl font-bold">luz e</Text>
                    <Text className="text-3xl font-bold">maquinaria.</Text>
                </Box>
                <Image src="/ImagemEstudioSiteNove.jpg" alt="Imagem Estudio" width={4459} height={2508} 
                    style={{
                        marginLeft:'5vw',
                        aspectRatio:'1.778', 
                        width:'60%',
                        }}></Image>
                </Grid>
                <EquipamentosList/>
            </Box>
        </div>
    );
}
