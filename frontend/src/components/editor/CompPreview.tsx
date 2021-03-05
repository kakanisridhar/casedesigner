import React from "react";
import { IWidget } from "../../model";
import { useInteractive } from "../../hooks/useInteractive";
import { Box } from "@chakra-ui/react";

interface Props {
  widget: IWidget;
}

const CompPreview = ({ widget, ...forwardedProps }: Props) => {
  const { props, ref } = useInteractive(widget, true);

  return (
    <Box
      {...props}
      _hover={{ boxShadow: "#4FD1C5 0px 0px 0px 2px inset" }}
      ref={ref}
    >
      {widget.name}
    </Box>
  );
};

export default CompPreview;
