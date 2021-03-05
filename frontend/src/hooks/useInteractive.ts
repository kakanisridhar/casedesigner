import { useRef, MouseEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useDrag } from 'react-dnd'
import { IWidget } from '../model';
import {getIsSelectedWidget} from '../store/editorSelectors';
import {selectWidget} from '../store/editorSlice';

export const useInteractive = (
  widget: IWidget,
  enableVisualHelper: boolean = false,
) => {
  const dispatch = useDispatch();
  const isComponentSelected = useSelector(getIsSelectedWidget(widget.id));

  const [, drag] = useDrag({
    item: { id: widget.id, type: widget.type.toString() },
  })

  const ref = useRef<HTMLDivElement>(null);
  
  let props:any = {
    onClick: (event: MouseEvent) => {
      event.preventDefault();
      event.stopPropagation();
      dispatch(selectWidget(widget.id));
    }
  }

  if(enableVisualHelper) {
    props = {
      ...props,
      border: `1px dashed #718096`,
      padding: 2
    }
    
  }

  if (isComponentSelected) {
    props = {
      ...props,
      boxShadow: '#4FD1C5 0px 0px 0px 2px inset',
    }
  }

  return { props, ref: drag(ref), drag }
}
