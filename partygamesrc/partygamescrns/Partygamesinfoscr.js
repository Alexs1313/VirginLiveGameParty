import {
  Image,
  Platform,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Partygamemnbg from '../partygamecmpnts/Partygamemnbg';
import { useNavigation } from '@react-navigation/native';

const Partygamerulesscr = () => {
  const partygamenv = useNavigation();

  const sharePartyGameInfo = async () => {
    try {
      await Share.share({
        message: `Virgin Live Game Party is an offline game for a group of friends.
The app has three modes: Truth, Action, and Mix.Complete tasks, laugh together, and create a real party atmosphere. No complicated rules — just drive, laughter, and chaos.`,
      });
    } catch (error) {
      Alert.alert(error.message);
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
          <Text style={styles.partygamehdtxt}>Info</Text>
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
              This isn't just a game - it's a party in your pocket!
            </Text>
          </View>
        </View>

        <View style={styles.partygamerulescnt}>
          {Platform.OS === 'ios' ? (
            <Image
              source={require('../../assets/images/virgingameinflogo.png')}
            />
          ) : (
            <Image
              source={require('../../assets/images/virginspingamelogo.png')}
              style={{ width: 97, height: 100, borderRadius: 12 }}
            />
          )}

          <Text style={styles.partygamerulestxt}>
            {`Virgin Live Game Party is an offline game for a group of friends.

The app has three modes: Truth, Action, and Mix.Complete tasks, laugh together, and create a real party atmosphere. No complicated rules — just drive, laughter, and chaos.`}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 22,
            gap: 18,
          }}
        >
          <TouchableOpacity
            style={styles.partygameshrbtn}
            activeOpacity={0.6}
            onPress={sharePartyGameInfo}
          >
            <Image source={require('../../assets/icons/virgingameshr.png')} />
          </TouchableOpacity>
          {Platform.OS === 'ios' && (
            <TouchableOpacity
              style={styles.partygamestartbtn}
              activeOpacity={0.6}
            >
              <Image source={require('../../assets/icons/virgingamestr.png')} />
              <Text style={styles.partygamewlcbtntxt}>Rate app</Text>
            </TouchableOpacity>
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
    width: 173,
    height: 46,
    backgroundColor: '#E72922',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginBottom: 30,
  },
  partygametasktxt: {
    fontFamily: 'Manrope-ExtraBold',
    fontSize: 18,
    color: '#fff',
  },
  partygamerulestxt: {
    fontFamily: 'Manrope-SemiBold',
    fontSize: 16,
    color: '#000',
    marginTop: 20,
  },
  partygamewlcbtntxt: {
    fontFamily: 'Manrope-ExtraBold',
    fontSize: 24,
    color: '#000',
  },
  partygamestartbtn: {
    width: '75%',
    height: 80,
    borderRadius: 15,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 12,

    shadowColor: '#000',
    shadowOffset: { width: 5, height: 18 },
    shadowOpacity: 0.4,
    shadowRadius: 18,
    elevation: 10,
  },
  partygameshrbtn: {
    width: 80,
    height: 80,
    borderRadius: 15,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 12,

    shadowColor: '#000',
    shadowOffset: { width: 5, height: 18 },
    shadowOpacity: 0.4,
    shadowRadius: 18,
    elevation: 10,
  },
});

export default Partygamerulesscr;
