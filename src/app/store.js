import { configureStore } from '@reduxjs/toolkit';
import textInputReducer from 'features/textInput/textInputSlice';
import controlPanelReducer from 'features/mainNavbar/controlPanel/controlPanelSlice';

export default configureStore({
  reducer: {
    textInput: textInputReducer,
    controlPanel: controlPanelReducer
  }
});
