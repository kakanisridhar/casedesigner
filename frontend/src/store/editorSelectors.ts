import { RootState } from "./rootReducer";

import { createSelector } from "@reduxjs/toolkit";
import { ROOT } from "../model";

export const getWidgetIdsOnRootPage = (state: RootState) =>
  state.editor.childrenId;

export const getWidgetById = (widgetId) => (state: RootState) => {
  return state.editor.widgets[widgetId];
};

export const getIsSelectedWidget = (widgetId) => (state: RootState) => {
  return state.editor.selectedId === widgetId;
};

export const getSelectedWidgetId = (state: RootState) => {
  return state.editor.selectedId;
};

export const getSelectedWidget = (state: RootState) => {
  let id, props;
  if (state.editor.selectedId) {
    if (state.editor.selectedId === ROOT) {
      id = state.editor.id;
      props = state.editor.props;
    } else {
      let w = state.editor.widgets[state.editor.selectedId];
      id = w.id;
      props = w.props;
    }
  }
  return { id, props };
};
