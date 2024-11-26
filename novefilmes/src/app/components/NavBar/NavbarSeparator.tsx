import { Box } from "@radix-ui/themes";
import { ReactNode } from "react";

type Props = {
    children?:ReactNode
}

export default function Separator({children}:Props){
    return(
    <Box style={{ width:'1px', height:'2vw',backgroundColor:'Gray'}}>{children}</Box>
    );
}