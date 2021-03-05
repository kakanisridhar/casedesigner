import { useDrop, DropTargetMonitor } from 'react-dnd'
import { ComponentType, IDroppable } from "../model";
import { useDispatch } from "react-redux";
import {addWidget, moveWidget} from '../store/editorSlice';
import { nanoid } from '@reduxjs/toolkit';


export const useDropComponent = (
  componentId: string,
  canDrop: boolean = true,
) => {
  const dispatch = useDispatch()

  const [{ isOver }, drop] = useDrop({
    accept: [
      ComponentType.Component.toString(),
      ComponentType.FlowContainer.toString(),
      ComponentType.GridContainer.toString()
    ],
    collect: monitor => ({
      isOver: monitor.isOver({ shallow: true }) && monitor.canDrop(),
    }),
    drop: (item: any, monitor: DropTargetMonitor) => {
      if (!monitor.isOver()) {
        return
      }

      if (item.id) {
        dispatch(moveWidget({
          pid: componentId,
          cid: item.id,
        }))
      } else {
        dispatch(addWidget({
          id: nanoid(),
          parentId: componentId,
          type: item.type,
          name: item.name,
          childrenId: []
        }))
      }
    },
    canDrop: () => canDrop,
  })

  return { drop, isOver }
}
