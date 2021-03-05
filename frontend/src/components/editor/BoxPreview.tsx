import React from "react";
import { IWidget } from "../../model";
import { useInteractive } from "../../hooks/useInteractive";
import { Box, Text } from "@chakra-ui/react";
import { useDropComponent } from "../../hooks/useDropComponent";
import PreviewContainer from "./PreviewContainer";

interface Props {
  widget: IWidget;
}

export default function BoxPreview({ widget, ...forwardedProps }: Props) {
  const { drop } = useDropComponent(widget.id);
  const { props, ref } = useInteractive(widget, true);
  const propsElement = {
    ...props,
    ...forwardedProps,
  };

  var children: any;
  if (widget.childrenId && widget.childrenId.length > 0) {
    children = widget.childrenId.map((key: string) => (
      <PreviewContainer key={key} wid={key} />
    ));
    propsElement.p = 4;
  } else {
    children = <Text fontSize="sm">You can drop components here</Text>;
  }

  return (
    <Box
      {...propsElement}
      ref={drop(ref)}
      _hover={{ boxShadow: "#4FD1C5 0px 0px 0px 2px inset" }}
    >
      {children}
    </Box>
  );
}
