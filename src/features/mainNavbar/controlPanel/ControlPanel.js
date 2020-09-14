import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import toastr from 'toastr';
import { selectText } from 'features/textInput/textInputSlice';
import {
  selectIsPlaying,
  selectVoices,
  selectVoice,
  selectSpeakingRates,
  selectSpeakingRate,
  setVoices,
  changeVoice,
  changeSpeakingRate,
  togglePlay
} from './controlPanelSlice';
import { Nav, NavDropdown, Button } from 'react-bootstrap';
import './ControlPanel.scss';
import { getVoices, synthesize } from "api/api";


export function ControlPanel() {
  const text = useSelector(selectText);
  const isPlaying = useSelector(selectIsPlaying);
  const voices = useSelector(selectVoices);
  const voice = useSelector(selectVoice);
  const speakingRates = useSelector(selectSpeakingRates);
  const speakingRate = useSelector(selectSpeakingRate);
  const dispatch = useDispatch();
  const [audio, setAudio] = useState(null);

  const fetchAudio = (text, voiceName, speakingRate) => {
    return synthesize(text, voiceName, speakingRate)
      .then(res => new Audio('data:audio/ogg;base64, ' + res.data.audioContent))
      .catch(error => toastr.error('Error', error.toString()));
  };

  const togglePlayAudio = async () => {
    try {
      if (isPlaying) {
        audio.pause();
        dispatch(togglePlay(false));
      } else {
        const newAudio = await fetchAudio(text, voice.name, speakingRate.value);
        newAudio.addEventListener("ended", () => dispatch(togglePlay(false)));
        setAudio(newAudio);
        await newAudio.play();
        dispatch(togglePlay(true));
      }
    } catch (e) {
      toastr.error('Error', e.toString());
    }
  }

  useEffect(() => {
    getVoices()
      .then(res => {
        const fetchedVoices = res.data.voices;
        dispatch(setVoices(fetchedVoices));
      })
      .catch(error => toastr.error('Error', error.toString()));
  }, [dispatch]);

  return (
    <Nav className="mx-auto control-panel">
      <Button variant="primary"
              onClick={togglePlayAudio}
              className="control-panel-item play-btn">
        {isPlaying ? "Stop" : "Play"}
      </Button>

      <NavDropdown title={(voice && voice.name) || "No voice"}
                   id="language-dropdown"
                   className="control-panel-item">
        {voices.map((voice, i) =>
          <NavDropdown.Item href="#"
                            key={i}
                            onClick={() => dispatch(changeVoice(voice))}>
            {voice.name}
          </NavDropdown.Item>)}
      </NavDropdown>

      <NavDropdown title={speakingRate.name}
                   id="speed-dropdown"
                   className="control-panel-item">
        {speakingRates.map((rate, i) =>
          <NavDropdown.Item href="#"
                            key={i}
                            onClick={() => dispatch(changeSpeakingRate(rate))}>
            {rate.name}
          </NavDropdown.Item>)}
      </NavDropdown>
    </Nav>
  );
}
