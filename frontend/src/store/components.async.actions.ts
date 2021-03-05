import { createAsyncThunk } from '@reduxjs/toolkit';

import {api} from '../api/api-config';

export const getComponentsAction = createAsyncThunk(
  "components/getbygenerator",
  async (generator : string , thunkAPI) => {
    const response = await api.get(`components/${generator}/`);
    return response.data
  }
);
