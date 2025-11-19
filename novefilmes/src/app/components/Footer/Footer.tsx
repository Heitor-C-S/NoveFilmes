import React from "react";
import { Box, Grid, Text } from "@radix-ui/themes";
import Image from "next/image";
import SocialMediaCard from "./SocialMediaCard";
import Link from "next/link";
import FooterForm from "./FooterForm";

export default function Footer() {
  return (
    <Box className="bg-neutral-50">
      <Grid className="flex items-center-top bg-neutral-50 w-full pt-10 p-10 gap-12 grid-cols-[auto_1fr]">
        <Box className="flex flex-col bg-neutral-50 max-w-3xl items-center px-24 py-16">
          <Text style={{ fontSize: "2.5rem" }}>
            Entre em contato com a gente:
          </Text>
          <Grid className="flex flex-row bg-neutral-50 gap-5 p-5">
            <Link href="https://www.instagram.com/novefilmes/" passHref>
              <SocialMediaCard bgColor="#D92D8A" hoverBgColor="#B22470">
                <Image
                  src="/instagram.svg"
                  alt="Instagram icon"
                  width={30}
                  height={30}
                  style={{ color: "#fdfdfd" }}
                />
                <Text>Instagram</Text>
              </SocialMediaCard>
            </Link>
            <Link href="https://web.facebook.com/9Filmes?_rdc=1&_rdr" passHref>
              <SocialMediaCard bgColor="#1877F2" hoverBgColor="#0D5BD9">
                <Image
                  src="/icons8-facebook.svg"
                  alt="Facebook icon"
                  width={30}
                  height={30}
                  style={{ color: "#fdfdfd" }}
                />
                <Text>Facebook</Text>
              </SocialMediaCard>
            </Link>
            <Link href="https://wa.me/5581999537989" passHref>
              <SocialMediaCard bgColor="#25D366" hoverBgColor="#1DA851">
                <Image
                  src="/icons8-whatsapp.svg"
                  alt="Whatsapp icon"
                  width={30}
                  height={30}
                  style={{ color: "#fdfdfd" }}
                />
                <Text>Whatsapp</Text>
              </SocialMediaCard>
            </Link>
          </Grid>
        </Box>
        <Box className="w-full max-w-5xl">
          <FooterForm />
        </Box>
      </Grid>
      <Grid className="flex flex-col text-center bg-neutral-800 text-neutral-50">
        Copyright 2025 - Nove Filmes Produções Ltda.
      </Grid>
    </Box>
  );
}
