import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IWidget, ROOT } from "../model";

const initialState = {
  id: ROOT,
  name: "",
  props: {},
  childrenId: [],
  widgets: {},
  selectedId: ROOT,
};

export const editorSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    addWidget: (state, action: PayloadAction<IWidget>) => {
      //Add it to widgets map
      state.widgets[action.payload.id] = action.payload;

      //Update parent and child links
      let pid = action.payload.parentId;
      if (pid && state.widgets[pid]) {
        state.widgets[pid].childrenId.push(action.payload.id);
      } else {
        state.childrenId.push(action.payload.id);
      }
    },
    selectWidget: (state, action: PayloadAction<string>) => {
      state.selectedId = action.payload;
    },
    moveWidget: (
      state,
      action: PayloadAction<{ pid: string; cid: string }>
    ) => {
      let { pid, cid } = action.payload;
      let oldPid = state.widgets[cid].parentId;
      // Use some other mechanism to move components
      if (oldPid !== pid) {
        //remove from current parents
        if (oldPid !== ROOT) {
          let cids = state.widgets[oldPid].childrenId;
          state.widgets[oldPid].childrenId = cids.filter((id) => id !== cid);
        } else {
          let cids = state.childrenId;
          state.childrenId = cids.filter((id) => id !== cid);
        }

        //add to new parent
        pid !== ROOT
          ? state.widgets[pid].childrenId.push(cid)
          : state.childrenId.push(cid);

        state.widgets[cid].parentId = pid;
      }
    },
    updateWidgetProps: (
      state,
      action: PayloadAction<{ id: string; name: string; value: any }>
    ) => {
      let { id, name, value } = action.payload;
      if (id === ROOT) {
        state.props[name] = value;
      } else {
        state.widgets[id].props[name] = value;
      }
    },
  },
});

export const {
  addWidget,
  selectWidget,
  moveWidget,
  updateWidgetProps,
} = editorSlice.actions;

export default editorSlice.reducer;
