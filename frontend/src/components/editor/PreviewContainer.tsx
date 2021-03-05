import React, { memo } from "react";
import { ComponentType, IWidget } from "../../model";
import { useSelector } from "react-redux";
import { getWidgetById } from "../../store/editorSelectors";
import BoxPreview from "./BoxPreview";
import CompPreview from "./CompPreview";
import GridPreview from "./GridPreview";

interface Props {
  wid: string;
}

function PreviewContainer({ wid, ...forwardedProps }: Props) {
  const widget: IWidget = useSelector(getWidgetById(wid));
  if (widget.type == ComponentType.Component)
    return <CompPreview widget={widget}></CompPreview>;

  if (widget.type == ComponentType.FlowContainer)
    return <BoxPreview widget={widget}></BoxPreview>;

  if (widget.type == ComponentType.GridContainer)
    return <GridPreview widget={widget}></GridPreview>;

  return null;
}

export default memo(PreviewContainer);
