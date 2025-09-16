import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Partygamemnbg from '../partygamecmpnts/Partygamemnbg';
import { useNavigation } from '@react-navigation/native';

const Partygamerulesscr = () => {
  const partygamenv = useNavigation();

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
          <Text style={styles.partygamehdtxt}>Game rules</Text>
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
              Listen carefully, the rules are as simple as two fingers!
            </Text>
          </View>
        </View>

        <View style={styles.partygamerulescnt}>
          <View style={styles.partygametaskcnt}>
            <Text style={styles.partygametasktxt}>Game rules</Text>
          </View>

          <Text style={styles.partygamerulestxt}>
            {`All players take turns drawing a card.

If True, answer the question honestly.

If Action, perform the task.

If Mix, perform the task simultaneously.

Refusal to perform = fine or ridiculous punishment from the company.

The goal of the game is laughter, chaos, and a good mood for the whole party.`}
          </Text>
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
  },
});

export default Partygamerulesscr;
