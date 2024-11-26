import React, { ReactNode } from 'react';
import {Card,Flex,Grid} from '@radix-ui/themes'

type Props = {
    children?:ReactNode;
    bgColor:string;
}

export default function SocialMediaCard ({children, bgColor}:Props) {
    return(
        <Card style={{backgroundColor:bgColor ,width:'10vw',height:'4vw',alignItems:'center',padding:'1vw',borderRadius:'0.8rem'}}>
            <Flex style={{gap:'4' ,alignContent:'center'}}>
                <Grid style={{display:"flex", gridTemplateColumns: 'auto 1fr',}}>
                    {children}
                </Grid>
            </Flex>
        </Card>
    );
}