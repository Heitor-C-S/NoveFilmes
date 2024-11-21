import React from 'react';
import Image from 'next/image';
import { Box, ChevronDownIcon, Grid, Heading,} from '@radix-ui/themes';


export default function NavBar() {

  return (
    <div>
        <Grid style={{backgroundColor:'#ededed',border:'0.2vw solid #bfbfbf',width:'full',height:'8vw',padding:'1.7vw', display:"flex", gridTemplateColumns: 'auto 1fr',alignItems: 'center', gridGap: '1rem',flexGrow:0}} gridArea={"header"}>
            <Box style={{width:'6.5vw',height:'100%',backgroundColor:'#ffffff', display:"flex", justifyContent:'center',alignItems: 'center',flexGrow: 0,flexShrink:0,}}>
                <Image src="/LOGO_NOVE_QUADRADO_1.png" alt='Logo Nove Filmes' width={100} height={100} style={{objectFit:'cover'}}></Image>
            </Box>
            <Box>
                
            </Box>
            <Box style={{display:'flex',justifyContent:"center",}}>
                <Grid style={{display:"flex", gridTemplateColumns: 'auto 1fr',alignItems: 'center', gridGap: '0.4rem',}}>
                <Heading style={{fontSize:'1.2rem'}}>Equipamentos</Heading>
                <ChevronDownIcon></ChevronDownIcon>
                </Grid>
            </Box>
        </Grid>
    </div>
  )
}