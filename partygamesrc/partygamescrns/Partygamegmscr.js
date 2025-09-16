import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Partygamemnbg from '../partygamecmpnts/Partygamemnbg';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useAudio } from '../partygamesstr/partygamecntx';
import Toast from 'react-native-toast-message';

const partygamecatg = ['Truth or Dare', 'Mix chaos', 'Holiday set'];

const Partygamegmscr = () => {
  const [partyGameSelectedCat, setPartyGameSelectedCat] = useState('');
  const [showPartyGameInpt, setShowPartyGameInpt] = useState(false);
  const [partyGamePlayerFr, setPartyGamePlayerFr] = useState(false);
  const [partyGamePlayerSec, setPartyGamePlayerSec] = useState(false);
  const [addedPartyGamePlayer, setAddedPartyGamePlayer] = useState(false);
  const partygamenv = useNavigation();
  const { isEnblPartyGameNot } = useAudio();

  useEffect(() => {
    setTimeout(() => {
      if (isEnblPartyGameNot && Platform.OS === 'android') {
        Toast.show({
          text1: `Choose a game mode!`,
        });
      }
    }, 700);
  }, []);

  const handleStartPartyGame = () => {
    partygamenv.navigate('Partygamegmplay', {
      cat: partyGameSelectedCat,
      players: [partyGamePlayerFr, partyGamePlayerSec],
    });
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
          <Text style={styles.partygamehdtxt}>Start the game</Text>
        </View>

        <View
          style={[
            styles.partygamewrp,
            showPartyGameInpt && { marginBottom: 56 },
          ]}
        >
          <View style={styles.partygameimgwrap}>
            <Image
              source={require('../../assets/images/partygamewlc1.png')}
              style={{ width: 97, height: 97, top: 15 }}
            />
          </View>
          <Image source={require('../../assets/icons/virgingamerarr.png')} />
          <Text style={styles.partygamesubttl}>
            {`The brave go into chaos, the cunning into truth, the desperate into action. Who are you today?`}
          </Text>
        </View>
        {showPartyGameInpt ? (
          <View>
            <Text style={styles.partygameinptttl}>Player 1</Text>
            <View style={{ flexDirection: 'row', gap: 20 }}>
              <TextInput
                style={[
                  styles.partygameinpt,
                  partyGamePlayerFr && {
                    fontSize: 16,
                    fontFamily: 'Manrope-Bold',
                  },
                ]}
                placeholder="Enter name"
                placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                value={partyGamePlayerFr}
                onChangeText={setPartyGamePlayerFr}
                maxLength={12}
              />
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  if (addedPartyGamePlayer) setPartyGamePlayerFr('');
                  setAddedPartyGamePlayer(true);
                }}
                style={styles.partygameaddbtn}
              >
                {addedPartyGamePlayer ? (
                  <Image
                    source={require('../../assets/icons/virgingamedel.png')}
                  />
                ) : (
                  <Image
                    source={require('../../assets/icons/virgingameplus.png')}
                  />
                )}
              </TouchableOpacity>
            </View>

            {addedPartyGamePlayer && (
              <>
                <Text style={styles.partygameinptttl}>Player 2</Text>
                <View style={{ flexDirection: 'row', gap: 20 }}>
                  <TextInput
                    style={[
                      styles.partygameinpt,
                      partyGamePlayerSec && {
                        fontSize: 16,
                        fontFamily: 'Manrope-Bold',
                      },
                    ]}
                    placeholder="Enter name"
                    placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                    value={partyGamePlayerSec}
                    onChangeText={setPartyGamePlayerSec}
                    maxLength={12}
                  />
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => {
                      if (partyGamePlayerSec) {
                        setPartyGamePlayerSec('');
                      } else {
                        setAddedPartyGamePlayer(true);
                      }
                    }}
                    style={styles.partygameaddbtn}
                  >
                    {partyGamePlayerSec ? (
                      <Image
                        source={require('../../assets/icons/virgingamedel.png')}
                      />
                    ) : (
                      <Image
                        source={require('../../assets/icons/virgingameplus.png')}
                      />
                    )}
                  </TouchableOpacity>
                </View>

                <View style={{ alignItems: 'center' }}>
                  {partyGamePlayerFr && partyGamePlayerSec && (
                    <TouchableOpacity
                      style={styles.partygamestartbtn}
                      activeOpacity={0.6}
                      onPress={handleStartPartyGame}
                    >
                      <Text style={styles.partygamewlcbtntxt}>Start game</Text>
                    </TouchableOpacity>
                  )}
                </View>
              </>
            )}
          </View>
        ) : (
          <>
            <Text style={styles.partygamettl}>Choose a game mode:</Text>

            <View>
              {partygamecatg.map(cat => (
                <TouchableOpacity
                  key={cat}
                  style={styles.partygamebtn}
                  activeOpacity={0.6}
                  onPress={() => {
                    setPartyGameSelectedCat(cat), setShowPartyGameInpt(true);
                  }}
                >
                  <Text style={styles.partygamewlcbtntxt}>{cat}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </>
        )}
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
  partygamettl: {
    fontFamily: 'Manrope-SemiBold',
    fontSize: 20,
    color: '#fff',
    marginBottom: 41,
  },
  partygamesubttl: {
    fontFamily: 'Manrope-SemiBold',
    fontSize: 16,
    color: '#fff',
    marginLeft: 10,
    width: '60%',
  },
  partygamewlcbtntxt: {
    fontFamily: 'Manrope-ExtraBold',
    fontSize: 24,
    color: '#000',
  },
  partygamebtn: {
    width: '100%',
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
    marginBottom: 20,
  },
  partygamestartbtn: {
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
    marginTop: 110,
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
  partygamehdtxt: {
    fontFamily: 'Manrope-ExtraBold',
    fontSize: 24,
    color: '#fff',
  },
  partygamewrp: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginTop: 75,
    marginBottom: 80,
  },
  partygameinptttl: {
    fontFamily: 'Manrope-SemiBold',
    fontSize: 16,
    color: '#fff',
    marginBottom: 9,
  },
  partygameaddbtn: {
    width: 70,
    height: 70,
    backgroundColor: '#fff',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  partygameinpt: {
    width: '78%',
    height: 70,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 14,
    marginBottom: 22,
    fontFamily: 'Manrope-Regular',
    fontSize: 12,
    color: '#fff',
  },
});

export default Partygamegmscr;
