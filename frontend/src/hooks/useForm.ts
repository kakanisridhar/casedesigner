import { ChangeEvent, useCallback } from "react";
import { getSelectedWidgetId } from "../store/editorSelectors";
import { useDispatch, useSelector } from "react-redux";
import { updateWidgetProps } from "../store/editorSlice";

export const useForm = () => {
  const dispatch = useDispatch();
  const widgetId = useSelector(getSelectedWidgetId);

  const setValueFromEvent = ({
    target: { name, value },
  }: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setValue(name, value);
  };

  const setValue = useCallback(
    (name: string, value: any) => {
      dispatch(
        updateWidgetProps({
          id: widgetId,
          name,
          value,
        })
      );
    },
    [widgetId, dispatch]
  );

  return { setValue, setValueFromEvent };
};
