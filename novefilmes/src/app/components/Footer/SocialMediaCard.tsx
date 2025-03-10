import React, { ReactNode } from 'react';
import {Card,Flex,Grid} from '@radix-ui/themes'

type Props = {
    children?:ReactNode;
    bgColor:string;
}

export default function SocialMediaCard ({children, bgColor}:Props) {
    return(
        <Card  className="w-40 h-16 p-4 items-center " style={{backgroundColor:bgColor, borderRadius:'0.8rem'}}>
            <Flex className="items-center">
                <Grid className="flex grid-cols-[auto_1fr] text-white text-[1.3rem] gap-3">
                    {children}
                </Grid> 
            </Flex>
        </Card>
    );
}