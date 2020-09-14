import { createSlice } from '@reduxjs/toolkit';

const speakingRates = [
  { name: 'Speed 1 ', value: .5 },
  { name: 'Speed 2 ', value: 1 },
  { name: 'Speed 3 ', value: 1.5 },
  { name: 'Speed 4 ', value: 2 },
  { name: 'Speed 5 ', value: 2.5 },
];

export const controlPanelSlice = createSlice({
  name: 'controlPanel',
  initialState: {
    voices: [],
    speakingRates,
    isPlaying: false,
    voice: null,
    speakingRate: speakingRates[1]
  },
  reducers: {
    togglePlay: (state, { payload = false }) => {
      state.isPlaying = payload;
    },
    changeVoice: (state, { payload }) => {
      state.voice = payload;
    },
    changeSpeakingRate: (state, { payload }) => {
      state.speakingRate = payload;
    },
    setVoices: (state, { payload }) => {
      state.voices = payload.filter(voice => voice.languageCodes[0] === 'en-US');
      state.voice = state.voices[0];
    }
  }
});

export const { setVoices, changeVoice, changeSpeakingRate, togglePlay } = controlPanelSlice.actions;
export const selectIsPlaying = state => state.controlPanel.isPlaying;
export const selectVoices = state => state.controlPanel.voices;
export const selectVoice = state => state.controlPanel.voice;
export const selectSpeakingRates = state => state.controlPanel.speakingRates;
export const selectSpeakingRate = state => state.controlPanel.speakingRate;

export default controlPanelSlice.reducer;
