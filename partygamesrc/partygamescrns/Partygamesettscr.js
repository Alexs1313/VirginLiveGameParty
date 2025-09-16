import Partygamemnbg from '../partygamecmpnts/Partygamemnbg';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAudio } from '../partygamesstr/partygamecntx';
import Toast from 'react-native-toast-message';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const Partygamesettscr = () => {
  const partygamenv = useNavigation();
  const [] = useState(false);
  const {
    isEnblPartyGameMus,
    setIsEnblPartyGameMus,
    isEnblPartyGameNot,
    setIsEnblPartyGameNot,
  } = useAudio();

  const togglePartyGameMusic = async value => {
    try {
      await AsyncStorage.setItem('party_game_mus', JSON.stringify(value));
      setIsEnblPartyGameMus(value);
    } catch (error) {
      console.log('Error saving music setting:', error);
    }
  };

  const togglePartyGameNotifications = async value => {
    if (isEnblPartyGameNot && Platform.OS === 'android') {
      Toast.show({
        text1: `You’ve turned off notifications`,
      });
    }

    try {
      await AsyncStorage.setItem('party_game_not', JSON.stringify(value));
      setIsEnblPartyGameNot(value);
    } catch (error) {
      console.log('Error saving music setting:', error);
    }
  };

  return (
    <Partygamemnbg>
      <View style={styles.partygamecnt}>
        <View style={styles.partygamehead}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => partygamenv.goBack()}
          >
            <Image
              source={require('../../assets/icons/virgingamebackarr.png')}
              style={{ top: 3 }}
            />
          </TouchableOpacity>
          <Text style={styles.partygamehdtxt}>Settings</Text>
        </View>

        <View style={{ alignItems: 'center' }}>
          <View style={[styles.partygamewrp]}>
            <View style={styles.partygameimgwrap}>
              <Image
                source={require('../../assets/images/partygamewlc1.png')}
                style={{ width: 97, height: 97, top: 15 }}
              />
            </View>
            <Image source={require('../../assets/icons/virgingamerarr.png')} />
            <Text style={styles.partygamesubttl}>
              Here you can turn up the sound for your party.
            </Text>
          </View>
        </View>

        <View style={styles.partygamerulescnt}>
          {Platform.OS === 'ios' ? (
            <View style={styles.partygametaskcnt}>
              <Text style={styles.partygametasktxt}>Background music</Text>

              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => togglePartyGameMusic(!isEnblPartyGameMus)}
                style={styles.partygameselectcnt}
              >
                {isEnblPartyGameMus ? (
                  <>
                    <Text style={styles.partygameselectcnttxt}>ON</Text>
                    <Image
                      source={require('../../assets/icons/virgingameon.png')}
                    />
                  </>
                ) : (
                  <>
                    <Image
                      source={require('../../assets/icons/virgingameoff.png')}
                    />
                    <Text style={styles.partygameselectcnttxt}>OFF</Text>
                  </>
                )}
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.partygametaskcnt}>
              <Text style={styles.partygametasktxt}>Notifications</Text>

              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() =>
                  togglePartyGameNotifications(!isEnblPartyGameNot)
                }
                style={styles.partygameselectcnt}
              >
                {isEnblPartyGameNot ? (
                  <>
                    <Text style={styles.partygameselectcnttxt}>ON</Text>
                    <Image
                      source={require('../../assets/icons/virgingameon.png')}
                    />
                  </>
                ) : (
                  <>
                    <Image
                      source={require('../../assets/icons/virgingameoff.png')}
                    />
                    <Text style={styles.partygameselectcnttxt}>OFF</Text>
                  </>
                )}
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </Partygamemnbg>
  );
};

const styles = StyleSheet.create({
  partygamecnt: {
    paddingTop: 80,
    padding: 16,
  },
  partygamehead: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  partygameimgwrap: {
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 10, height: 26 },
    shadowOpacity: 0.4,
    shadowRadius: 18,
    elevation: 10,
    marginBottom: 38,
  },
  partygamesubttl: {
    fontFamily: 'Manrope-SemiBold',
    fontSize: 16,
    color: '#fff',
    marginLeft: 10,
    width: '40%',
  },
  partygamehdtxt: {
    fontFamily: 'Manrope-ExtraBold',
    fontSize: 24,
    color: '#fff',
  },
  partygamewrp: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginTop: 65,
    marginBottom: 56,
  },
  partygamerulescnt: {
    width: '100%',
    paddingVertical: 28,
    paddingHorizontal: 22,
    backgroundColor: '#fff',
    borderRadius: 15,
  },
  partygametaskcnt: {
    width: '100%',
    height: 70,
    backgroundColor: '#E72922',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 15,
    marginBottom: 20,
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  partygametasktxt: {
    fontFamily: 'Manrope-ExtraBold',
    fontSize: 18,
    color: '#fff',
  },
  partygameselectcnt: {
    width: 70,
    height: 38,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    borderRadius: 15,
  },
  partygameselectcnttxt: {
    fontFamily: 'Manrope-ExtraBold',
    fontSize: 12,
    color: '#000',
  },
});

export default Partygamesettscr;
