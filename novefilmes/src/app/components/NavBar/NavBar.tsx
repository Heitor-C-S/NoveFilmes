import React from 'react';
import Image from 'next/image';
import Separator from './NavbarSeparator';
import { Box, Grid, Heading,} from '@radix-ui/themes';
import EquipamentosDropdown from './EquipamentosDropDown';
import Link from 'next/link';

export default function NavBar() {

  return (
    <div>
        <Grid style={{backgroundColor:'#fdfdfd',border:'2vw solid #fdfdfd',width:'full',height:'8vw',padding:'3vw', display:"flex", gridTemplateColumns: 'auto 1fr',alignItems: 'center', gridGap: '1rem',}} gridArea={"header"}>
            
            <Box style={{width:'8vw',height:'100%',backgroundColor:'#cdcdcd', display:"flex", justifyContent:'center',alignItems: 'center',marginLeft:'3vw'}}>
                <Link href="/" passHref>
                    <Image src="/LOGO_NOVE_QUADRADO_1.png" alt='Logo Nove Filmes' width={1671} height={1136} style={{objectFit:'cover',aspectRatio:'auto',width:'6.5vw',}}></Image>
                </Link>
            </Box>
            
            <Box style={{width:'55%', }}></Box> 
            
            <EquipamentosDropdown></EquipamentosDropdown>

            <Separator />

            <Box style={{display:'flex',justifyContent:"center",padding:'1vw'}}>
            <Link href="/">
                    <Grid style={{display:"flex", gridTemplateColumns: 'auto 1fr',alignItems: 'center', gridGap: '0.4rem',}}>
                        <Heading style={{fontSize:'1.2rem'}}>Quem Somos</Heading>
                    </Grid>
                </Link>
            </Box>

            <Separator />

            <Box style={{display:'flex',justifyContent:"center",}}>
                <Link href="/">
                    <Grid style={{display:"flex", gridTemplateColumns: 'auto 1fr',alignItems: 'center', gridGap: '0.4rem',}}>
                        <Heading style={{fontSize:'1.2rem'}}>Estúdio</Heading>
                    </Grid>
                </Link>
            </Box>

        </Grid>
    </div>
  )
}

