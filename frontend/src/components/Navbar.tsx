import { Box, DarkMode, Flex, Link, HStack } from "@chakra-ui/react";
import { Link as RRL } from "react-router-dom";
import React from "react";

interface Props {}

export const Navbar = (props: Props) => {
  return (
    <DarkMode>
      <Flex bg="#457b9d" as="header" height="3rem" px="1rem" color="gray.300">
        <Flex
          width="7rem"
          height="100%"
          as="a"
          fontSize="xl"
          flexDirection="row"
          alignItems="center"
          aria-label="Mridasoft"
        >
          <Box fontWeight="bold">Mrida</Box>Soft
        </Flex>
        <HStack spacing={3}>
          <Link as={RRL} to="/">
            Screen Designer
          </Link>
          <Link as={RRL} to="/learning">
            Learning
          </Link>
        </HStack>
      </Flex>
    </DarkMode>
  );
};
