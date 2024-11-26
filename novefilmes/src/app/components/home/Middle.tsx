import React from 'react';
import Image from 'next/image';
import {Box,Grid,Text} from '@radix-ui/themes'

export default function Middle() {

    return(
        <div>
            <Box>
                <Grid style={{
                    backgroundColor:'#fdfdfd',
                    border:'0.2vw solid #fdfdfd',
                    width:'full',
                    height:'40vw',
                    paddingLeft:'8vw',
                    paddingBottom:'8vw', 
                    display:"flex", 
                    gridTemplateColumns: 'auto 1fr',
                    alignItems: 'center', 
                    gridGap: '2vw',}} 
                    gridArea={'header'}
                >
                    
                <Box style={{ display: 'flex', flexDirection:"column", }}>
                    <Text style={{ fontSize: '5rem' , fontWeight:"bold" ,}}>nove filmes </Text>
                    <Text style={{ fontSize: '1.5rem', fontWeight:"normal", fontFamily:'sans-serif' }}>Equipamentos de</Text>
                    <Text style={{ fontSize: '1.5rem' , fontWeight:"bold" ,  fontFamily:'sans-serif'}}>câmera,</Text>
                    <Text style={{ fontSize: '1.5rem' , fontWeight:"bold" ,  fontFamily:'sans-serif'}}>luz e</Text>
                    <Text style={{ fontSize: '1.5rem' , fontWeight:"bold" ,  fontFamily:'sans-serif'}}>maquinaria.</Text>
                </Box>
                <Box style={{width:'0', padding:'2.5vw' }}></Box>
                <Image src="/ImagemEstudioSiteNove.jpg" alt="Imagem Estudio" width={4459} height={2508} 
                    style={{
                        resize:'block',
                        aspectRatio:'auto', 
                        width:'55vw',
                        }}></Image>
                </Grid>
            </Box>
        </div>
    );
}