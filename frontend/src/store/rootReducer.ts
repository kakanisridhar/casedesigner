import { combineReducers } from '@reduxjs/toolkit';
import editorReducer from './editorSlice';
import componentsReducer from './componentsSlice';


const rootReducer = combineReducers({
    editor: editorReducer,
    components: componentsReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
