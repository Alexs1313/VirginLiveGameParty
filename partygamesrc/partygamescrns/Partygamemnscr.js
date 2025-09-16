import Partygamemnbg from '../partygamecmpnts/Partygamemnbg';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useAudio } from '../partygamesstr/partygamecntx';
import Sound from 'react-native-sound';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const Partygamemnscr = () => {
  const partygamenv = useNavigation();
  const {
    volume,
    isEnblPartyGameMus,
    setIsEnblPartyGameMus,
    setIsEnblPartyGameNot,
  } = useAudio();
  const [sound, setSound] = useState(null);
  const [partyGameTrackIdx, setPartyGameTrackIdx] = useState(0);
  const desertEnigmaTracks = ['virgingmamelody.mp3', 'virgingmamelody.mp3'];

  useEffect(() => {
    playDesertEnigmaTrack(partyGameTrackIdx);

    return () => {
      if (sound) {
        sound.stop(() => {
          sound.release();
        });
      }
    };
  }, [partyGameTrackIdx]);

  useEffect(() => {
    if (sound) {
      sound.setVolume(volume);
    }
  }, [volume]);

  const playDesertEnigmaTrack = index => {
    if (sound) {
      sound.stop(() => {
        sound.release();
      });
    }

    const trackPath = desertEnigmaTracks[index];

    const newPartyDareSound = new Sound(trackPath, Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log('❌ Error ', error);
        return;
      }

      newPartyDareSound.setVolume(volume);

      newPartyDareSound.play(success => {
        if (success) {
          setPartyGameTrackIdx(
            prevIndex => (prevIndex + 1) % desertEnigmaTracks.length,
          );
        } else {
          console.log('❌ Error playing track');
        }
      });
      setSound(newPartyDareSound);
    });
  };

  useEffect(() => {
    loadPartyGameMnMusic();
    loadPartyGameNot();
  }, []);

  const loadPartyGameMnMusic = async () => {
    try {
      const partyDareMusicValue = await AsyncStorage.getItem('party_game_mus');

      const isPartyMusicOn = JSON.parse(partyDareMusicValue);
      setIsEnblPartyGameMus(isPartyMusicOn);
      if (sound) {
        sound.setVolume(isPartyMusicOn ? volume : 0);
      }
    } catch (error) {
      console.error('Error loading settings:', error);
    }
  };

  const loadPartyGameNot = async () => {
    try {
      const partyDareMusicValue = await AsyncStorage.getItem('party_game_not');

      const isPartyNotOn = JSON.parse(partyDareMusicValue);
      setIsEnblPartyGameNot(isPartyNotOn);
    } catch (error) {
      console.error('Error loading settings:', error);
    }
  };

  useEffect(() => {
    const setVolumeBasedOnPartydareMusic = async () => {
      try {
        const partyDareMusicValue = await AsyncStorage.getItem(
          'party_game_mus',
        );

        const isPartyMusicOn = JSON.parse(partyDareMusicValue);
        setIsEnblPartyGameMus(isPartyMusicOn);
        if (sound) {
          sound.setVolume(isPartyMusicOn ? volume : 0);
        }
      } catch (error) {
        console.error('Error', error);
      }
    };

    setVolumeBasedOnPartydareMusic();
  }, [sound, volume]);

  useEffect(() => {
    if (sound) {
      sound.setVolume(isEnblPartyGameMus ? volume : 0);
    }
  }, [volume, isEnblPartyGameMus]);

  return (
    <Partygamemnbg>
      <View style={styles.partygamecnt}>
        <View style={styles.partygameimgwrap}>
          <Image
            source={require('../../assets/images/partygamewlc1.png')}
            style={{ width: 191, height: 191, top: 15 }}
          />
        </View>
        <Image source={require('../../assets/icons/virgingamearr.png')} />
        <Text style={styles.partygamesubttl}>
          {`Time to show who the real 
hero of the party is!`}
        </Text>

        <TouchableOpacity
          style={styles.partygamebtn}
          activeOpacity={0.6}
          onPress={() => partygamenv.navigate('Partygamegmscr')}
        >
          <Text style={styles.partygamewlcbtntxt}>Start the game</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.partygametrspbtn}
          activeOpacity={0.6}
          onPress={() => partygamenv.navigate('Partygamerulesscr')}
        >
          <Image source={require('../../assets/icons/virgingamerls.png')} />
          <Text style={styles.partygametrspbtntxt}>Game rules</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.partygametrspbtn}
          activeOpacity={0.6}
          onPress={() => partygamenv.navigate('Partygamesettscr')}
        >
          <Image source={require('../../assets/icons/virgingamesett.png')} />
          <Text style={styles.partygametrspbtntxt}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.partygametrspbtn, { width: 113, height: 70 }]}
          activeOpacity={0.6}
          onPress={() => partygamenv.navigate('Partygamesinfoscr')}
        >
          <View style={styles.partygamelogowrp}>
            {Platform.OS === 'ios' ? (
              <Image
                source={require('../../assets/images/virgingamelgoinf.png')}
                style={{ width: 44, height: 44 }}
              />
            ) : (
              <Image
                source={require('../../assets/images/virginspingamelogo.png')}
                style={{ width: 44, height: 44, borderRadius: 12 }}
              />
            )}
          </View>

          <Text style={styles.partygametrspbtntxt}>Info</Text>
        </TouchableOpacity>
      </View>
    </Partygamemnbg>
  );
};

const styles = StyleSheet.create({
  partygamecnt: {
    paddingTop: 80,
    padding: 16,
    alignItems: 'center',
  },
  partygameimgwrap: {
    alignItems: 'center',
    // boxShadow: '0px 4px 10px rgba(0, 168, 8, 0.5)',
    shadowColor: '#000',
    shadowOffset: { width: 10, height: 26 },
    shadowOpacity: 0.4,
    shadowRadius: 18,
    elevation: 10,
    marginBottom: 38,
  },
  partygamettl: {
    fontFamily: 'Manrope-Bold',
    fontSize: 24,
    color: '#fff',
    marginBottom: 17,
  },
  partygamesubttl: {
    fontFamily: 'Manrope-Medium',
    fontSize: 16,
    color: '#fff',
    marginBottom: 74,
    textAlign: 'center',
    marginTop: 13,
  },
  partygamewlcbtntxt: {
    fontFamily: 'Manrope-ExtraBold',
    fontSize: 24,
    color: '#000',
  },
  partygamebtn: {
    width: 273,
    height: 92,
    borderRadius: 15,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: '#000',
    shadowOffset: { width: 5, height: 18 },
    shadowOpacity: 0.4,
    shadowRadius: 18,
    elevation: 10,
    marginBottom: 17,
  },
  partygametrspbtn: {
    width: 220,
    height: 70,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    flexDirection: 'row',
    gap: 10,
  },
  partygametrspbtntxt: {
    fontFamily: 'Manrope-ExtraBold',
    fontSize: 20,
    color: '#fff',
  },
  partygamelogowrp: {
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 18 },
    shadowOpacity: 0.4,
    shadowRadius: 18,
    elevation: 10,
  },
});

export default Partygamemnscr;
