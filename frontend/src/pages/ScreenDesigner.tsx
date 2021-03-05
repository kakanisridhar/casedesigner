import React, { ReactElement } from "react";
import { Box, Flex } from "@chakra-ui/react";
import ComponentContainer from "../components/sidebar/ComponentContainer";
import Editor from "../components/editor/Editor";
import Inspector from "../components/inspector/Inspector";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

interface Props {}

export default function ScreenDesigner({}: Props): ReactElement {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <Flex h="calc(100vh - 3rem)">
          <ComponentContainer></ComponentContainer>
          <Box bg="white" flex={1} zIndex={10} position="relative">
            <Editor></Editor>
          </Box>
          <Box
            maxH="calc(100vh - 3rem)"
            flex="0 0 15rem"
            bg="#f7fafc"
            overflowY="auto"
            overflowX="visible"
            borderLeft="1px solid #cad5de"
          >
            <Inspector></Inspector>
          </Box>
        </Flex>
      </DndProvider>
    </>
  );
}
