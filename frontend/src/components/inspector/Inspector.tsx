import { Box } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/rootReducer";
import { getSelectedWidget } from "../../store/editorSelectors";

interface Props {}

export default function Inspector({}: Props): ReactElement {
  const widget = useSelector(getSelectedWidget);

  return <Box bg="white">{widget?.id}</Box>;
}
