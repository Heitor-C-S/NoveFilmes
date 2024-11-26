import React from 'react';
import { Box, ChevronDownIcon, Grid, Heading,} from '@radix-ui/themes';
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Link from 'next/link';


export default function EquipamentosDropdown() {
    return (
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <Box style={{ display: 'flex', justifyContent: 'center', cursor: 'pointer' }}>
            <Grid
              style={{
                display: 'flex',
                gridTemplateColumns: 'auto 1fr',
                alignItems: 'center',
                gridGap: '0.4rem',
              }}
            >
              <Heading style={{ fontSize: '1.2rem' }}>Equipamentos</Heading>
              <ChevronDownIcon />
            </Grid>
          </Box>
        </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
                <DropdownMenu.Content
                    style={{
                    minWidth: '220px',
                    borderRadius: '8px',
                    backgroundColor: 'white',
                    padding: '5px',
                    boxShadow:
                        '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
                    willChange: 'opacity, transform',
                    animation: 'slideUpAndFade 0.2s ease-out',
                    }}
                    sideOffset={5}
                >
                    <Link href="https://nove-filmes.estoquenow.site/Shop/category/61276/camera" passHref>
                    <DropdownMenu.Item
                        style={{
                            display: 'flex',
                            height: '25px',
                            alignItems: 'center',
                            borderRadius: '3px',
                            paddingLeft: '25px',
                            paddingRight: '5px',
                            fontSize: '13px',
                            lineHeight: '1',
                            color: '#010101', // black
                            cursor: 'pointer',
                        }}
                        // onPointerEnter={(e) => {
                        //     e.currentTarget.style.backgroundColor = '#7C3AED'; // Violet9 background on hover
                        //     e.currentTarget.style.color = '#F4F4F5'; // Violet1 text color on hover
                        // }}
                        // onPointerLeave={(e) => {
                        //     e.currentTarget.style.backgroundColor = 'transparent'; // Reset background
                        //     e.currentTarget.style.color = '#7C3AED'; // Reset text color
                        // }}
                        >
                        Câmera
                    </DropdownMenu.Item>
                    </Link>
                    <Link href="https://nove-filmes.estoquenow.site/Shop/category/61280/lentes" passHref>
                    <DropdownMenu.Item
                        style={{
                            display: 'flex',
                            height: '25px',
                            alignItems: 'center',
                            borderRadius: '3px',
                            paddingLeft: '25px',
                            paddingRight: '5px',
                            fontSize: '13px',
                            lineHeight: '1',
                            color: '#010101', // black
                            cursor: 'pointer',
                        }}
                        // onPointerEnter={(e) => {
                        //     e.currentTarget.style.backgroundColor = '#7C3AED'; // Violet9 background on hover
                        //     e.currentTarget.style.color = '#F4F4F5'; // Violet1 text color on hover
                        // }}
                        // onPointerLeave={(e) => {
                        //     e.currentTarget.style.backgroundColor = 'transparent'; // Reset background
                        //     e.currentTarget.style.color = '#7C3AED'; // Reset text color
                        // }}
                    >
                        Lentes
                    </DropdownMenu.Item>
                    </Link>
                <DropdownMenu.Arrow style={{ fill: 'white' }} />
            </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    );
  }