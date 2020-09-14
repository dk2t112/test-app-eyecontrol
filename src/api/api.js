import axios from 'axios';

const api = axios.create({
  baseURL: "https://texttospeech.googleapis.com/v1",
  headers: { "X-Goog-Api-Key": "AIzaSyBUrG7YyqBHH-TcgwACamVt3mlNU2u5dR4" }
});

export const getVoices = () => api.get("/voices");

export const synthesize = (text, voiceName, speakingRate) => api.post("/text:synthesize", {
  input: { text },
  voice: {
    languageCode: "en-US",
    name: voiceName
  },
  audioConfig: {
    audioEncoding: 'MP3',
    speakingRate
  },
});
