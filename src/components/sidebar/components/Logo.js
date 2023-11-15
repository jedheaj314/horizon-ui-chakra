import {
  Image,
} from "@chakra-ui/react";
import logoWhite from "assets/img/black-bg-logo.png";
import React from "react";

export default function Logo() {
  return (
    <Image src={logoWhite} w='350px' h='125px' />
  );
}
