import React, { ReactElement } from "react";
import { IComponentsByCategory } from "../../model";
import { DragItem } from "./DragItem";

import {
  Box,
  DarkMode,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

interface Props {
  components: IComponentsByCategory;
}

function ComponentAccordion({ components }: Props): ReactElement {
  if (Object.keys(components).length !== 0) {
    return (
      <Accordion>
        {Object.keys(components).map((cat, index) => {
          return (
            <AccordionItem key={index}>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  {cat}
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                {components[cat].map((c, i) => {
                  return (
                    <DragItem key={i} name={c.name} type={c.type}></DragItem>
                  );
                })}
              </AccordionPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    );
  }
  return <div>something went wrong</div>;
}

export default ComponentAccordion;
