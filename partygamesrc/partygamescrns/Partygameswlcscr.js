import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Partygamemnbg from '../partygamecmpnts/Partygamemnbg';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const partygamewlcmdta = [
  {
    partygameimg: require('../../assets/images/partygamewlc1.png'),
    partygamewlctext: 'Greeting',
    partygamesbttl:
      'Hello, my mischievous ones! I am your host and today we are going to light up the party. Forget about boredom — here is only drive and laughter. Ready to start?',
    partygamewlcbtntxt: 'Let’s go!',
  },
  {
    partygameimg: require('../../assets/images/partygamewlc2.png'),
    partygamewlctext: 'Rules (Truth or Action)',
    partygamesbttl:
      'It’s simple here: a card falls out — and you choose. Answer honestly or perform an action. But remember: if you refuse — it will be even worse!',
    partygamewlcbtntxt: 'Show cards',
  },
  {
    partygameimg: require('../../assets/images/partygamewlc3.png'),
    partygamewlctext: 'Chaos for everyone',
    partygamesbttl:
      'Sometimes the cards choose not one person, but the whole company. This is real chaos, where no one can hide. Everyone is in the game here!',
    partygamewlcbtntxt: 'Start the game',
  },
];

const Partygameswlcscr = () => {
  const [partyGameCurrSlide, setPartyGameCurrSlide] = useState(0);
  const partygamenv = useNavigation();

  return (
    <Partygamemnbg>
      <View style={styles.partygamecnt}>
        <View style={styles.partygamepag}>
          {[1, 2, 3].map((dot, idx) => (
            <View
              style={[
                styles.partygamedot,
                partyGameCurrSlide > idx - 1 && { opacity: 1 },
              ]}
              key={dot}
            />
          ))}
        </View>

        <View style={styles.partygameimgwrap}>
          <Image source={partygamewlcmdta[partyGameCurrSlide].partygameimg} />
        </View>

        <Text style={styles.partygamettl}>
          {partygamewlcmdta[partyGameCurrSlide].partygamewlctext}
        </Text>
        <Text style={styles.partygamesubttl}>
          {partygamewlcmdta[partyGameCurrSlide].partygamesbttl}
        </Text>

        <TouchableOpacity
          style={styles.partygamebtn}
          activeOpacity={0.6}
          onPress={() =>
            partyGameCurrSlide === 2
              ? partygamenv.replace('Partygamemnscr')
              : setPartyGameCurrSlide(partyGameCurrSlide + 1)
          }
        >
          <Text style={styles.partygamewlcbtntxt}>
            {partygamewlcmdta[partyGameCurrSlide].partygamewlcbtntxt}
          </Text>
        </TouchableOpacity>
      </View>
    </Partygamemnbg>
  );
};

const styles = StyleSheet.create({
  partygamecnt: {
    paddingTop: 82,
    padding: 16,
  },
  partygamedot: {
    width: 15,
    height: 15,
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
    opacity: 0.5,
  },
  partygamepag: {
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'center',
    marginBottom: 30,
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
    marginBottom: 39,
    minHeight: 85,
  },
  partygamewlcbtntxt: {
    fontFamily: 'Manrope-ExtraBold',
    fontSize: 24,
    color: '#000',
  },
  partygamebtn: {
    width: 236,
    height: 71,
    borderRadius: 15,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: '#000',
    shadowOffset: { width: 5, height: 18 },
    shadowOpacity: 0.4,
    shadowRadius: 18,
    elevation: 10,
    marginBottom: 38,
  },
});

export default Partygameswlcscr;
