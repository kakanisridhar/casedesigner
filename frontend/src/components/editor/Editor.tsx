import { Box } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import PreviewContainer from "./PreviewContainer";
import { useDispatch, useSelector } from "react-redux";
import { getWidgetIdsOnRootPage } from "../../store/editorSelectors";
import { selectWidget } from "../../store/editorSlice";
import { useDropComponent } from "../../hooks/useDropComponent";
import { ROOT } from "../../model";

interface Props {}

const gridStyles = {
  bg: "#edf2f6",
  backgroundImage:
    "linear-gradient(to right, #d9e2e9 1px, transparent 1px),linear-gradient(to bottom, #d9e2e9 1px, transparent 1px);",
  backgroundSize: "20px 20px",
  p: 10,
};

function Editor({}: Props): ReactElement {
  const dispatch = useDispatch();
  const widgets: string[] = useSelector(getWidgetIdsOnRootPage);

  const { drop } = useDropComponent(ROOT);

  const onSelectBackground = () => {
    dispatch(selectWidget(ROOT));
  };

  return (
    <Box
      {...gridStyles}
      height="100%"
      minWidth="10rem"
      width="100%"
      display={widgets.length === 0 ? "flex" : "block"}
      justifyContent="center"
      alignItems="center"
      overflow="auto"
      position="relative"
      flexDir="column"
      ref={drop}
      onClick={onSelectBackground}
    >
      {widgets.length === 0 ? (
        <div>Drag componenets here</div>
      ) : (
        widgets.map((w: string) => <PreviewContainer key={w} wid={w} />)
      )}{" "}
    </Box>
  );
}

export default Editor;
