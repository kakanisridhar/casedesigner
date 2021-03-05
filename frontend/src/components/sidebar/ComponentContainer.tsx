import { Box, DarkMode } from "@chakra-ui/react";
import React, { ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/rootReducer";
import { getComponentsAction } from "../../store/components.async.actions";
import ComponentAccordion from "./ComponentAccordion";

interface Props {}

export default function ComponentContainer({}: Props): ReactElement {
  const dispatch = useDispatch();

  const { componentsByCategory, loading } = useSelector(
    (state: RootState) => state.components
  );

  useEffect(() => {
    dispatch(getComponentsAction("default"));
  }, [dispatch]);

  return (
    <DarkMode>
      <Box
        maxH="calc(100vh - 3rem)"
        overflowY="auto"
        overflowX="visible"
        shadow="xl"
        flex="0 0 14rem"
        p={5}
        m={0}
        as="menu"
        backgroundColor="#2e3748"
        width="15rem"
        color="gray.300"
      >
        {loading ? (
          <h2>Loading.. Please wait..</h2>
        ) : (
          <ComponentAccordion
            components={componentsByCategory}
          ></ComponentAccordion>
        )}
      </Box>
    </DarkMode>
  );
}
