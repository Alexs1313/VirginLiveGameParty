import React, {
  createContext,
  useContext,
  useState as useReactState,
  useEffect as useReactEffect,
  useState,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AudioContext = createContext();

export const PartyGameAudioProvider = ({ children }) => {
  const [soundLevel, updateSoundLevel] = useReactState(1.0);
  const [isEnblPartyGameMus, setIsEnblPartyGameMus] = useState(false);
  const [isEnblPartyGameNot, setIsEnblPartyGameNot] = useState(false);

  useReactEffect(() => {
    (async () => {
      try {
        const fetchedVol = await AsyncStorage.getItem('volume');
        if (fetchedVol !== null && !isNaN(parseFloat(fetchedVol))) {
          updateSoundLevel(parseFloat(fetchedVol));
        }
      } catch (err) {
        console.log('Error retrieving stored volume data:', err);
      }
    })();
  }, []);

  const adjustVolumeLevel = async newLevel => {
    try {
      const stringifiedLevel = `${newLevel}`;
      await AsyncStorage.setItem('volume', stringifiedLevel);
      updateSoundLevel(newLevel);
    } catch (err) {
      console.log('Error while storing volume:', err);
    }
  };

  const contextPayload = {
    volume: soundLevel,
    setVolume: adjustVolumeLevel,
    isEnblPartyGameMus,
    setIsEnblPartyGameMus,
    isEnblPartyGameNot,
    setIsEnblPartyGameNot,
  };

  return (
    <AudioContext.Provider value={contextPayload}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => useContext(AudioContext);
