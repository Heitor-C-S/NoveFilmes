import React from 'react';
import Image from 'next/image';
import {Box,Grid,Text} from '@radix-ui/themes'

export default function Middle() {

    return(
        <div>
            <Box>
                <Grid style={{backgroundColor:'#fdfdfd',border:'0.2vw solid #cdcdcd',width:'full',height:'40vw',paddingLeft:'5vw',paddingRight:'0vw', display:"flex", gridTemplateColumns: 'auto 1fr',alignItems: 'center', gridGap: '1rem',}} gridArea={'header'}>
                    
                <Box style={{ display: 'flex', flexDirection:"column",}}>
                    <Text style={{ fontSize: '5rem' , fontWeight:"bold" ,}}>nove filmes </Text>
                    <Text style={{ fontSize: '1.5rem', fontWeight:"normal", fontFamily:'sans-serif' }}>Equipamentos de</Text>
                    <Text style={{ fontSize: '1.5rem' , fontWeight:"bold" ,  fontFamily:'sans-serif'}}>câmera,</Text>
                    <Text style={{ fontSize: '1.5rem' , fontWeight:"bold" ,  fontFamily:'sans-serif'}}>luz e</Text>
                    <Text style={{ fontSize: '1.5rem' , fontWeight:"bold" ,  fontFamily:'sans-serif'}}>maquinaria.</Text>
                </Box>
                <Box style={{width:'2', }}></Box>
                <Image src="/ImagemEstudioSiteNove.jpg" alt="Imagem Estudio" width={960} height={540}></Image>
                </Grid>
            </Box>
        </div>
    );
}