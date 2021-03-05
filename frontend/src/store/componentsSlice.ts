import { createSlice } from "@reduxjs/toolkit";
import { IComponentsByCategory } from "../model";
import { getComponentsAction } from "./components.async.actions";

const initialState = {
  componentsByCategory: {} as IComponentsByCategory,
  error: "",
  loading: false,
};

export const componentsSlice = createSlice({
  name: "components",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    /* GET ALL */
    builder.addCase(getComponentsAction.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(getComponentsAction.fulfilled, (state, action) => {
      let cbyCat = action.payload;
      //TODO - modify this - limitation of json server, better to use mock responses
      delete cbyCat["id"];
      state.componentsByCategory = cbyCat;
      state.loading = false;
    });

    builder.addCase(getComponentsAction.rejected, (state, action: any) => {
      state.error = action.payload?.message;
      state.loading = false;
    });
  },
});

export default componentsSlice.reducer;
