import Partygamemnbg from '../partygamecmpnts/Partygamemnbg';
import { useEffect, useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Partygamegmplldr from '../partygamecmpnts/Partygamegmplldr';
import Toast from 'react-native-toast-message';
import { useAudio } from '../partygamesstr/partygamecntx';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const partygamecatg = [
  {
    partygamecatgnm: 'Truth or Dare',
    partygametasks: [
      `Who is the weirdest person in the company and why?`,
      `What is your most ridiculous purchase?`,
      'Who would you never trust with a secret?',
      'What is your biggest mistake at school?',
      'Who is the laziest person in the room?',
      'What is the lie you have ever told that you regret?',
      'Who would you choose from the company to go on a trip with?',
      'The strangest dream you remember?',
      'What are you most afraid of?',
      'Who is laughing the loudest here?',
      'What is your biggest guilty pleasure?',
      'What did you do the last time you were left alone at home?',
      'Who would you take to your survival team from the company?',
      'What habit do you want to change about yourself?',
      'What is your most embarrassing childhood photo?',
      'Who do you think is the biggest joker here?',
      'What is the most ridiculous gift you have ever received?',
      'What is your biggest public failure?',
      'Who would be the best show host in the company?',
      'Have you ever fooled anyone in this company?',
      'What is the funniest moment in your life?',
      'Who here makes the most off-topic jokes?',
      'What was your biggest childhood dream?',
      'Who is the first person you call when something happens?',
      'What is your most ridiculous habit?',
    ],
  },
  {
    partygamecatgnm: 'Mix chaos',
    partygametasks: [
      `Everyone simultaneously portrays a chicken.`,
      `The last one to touch the floor - does 3 squats.`,
      'Everyone shows the funniest face.',
      'Everyone simultaneously says a toast.',
      'The first one to laugh - performs a penalty.',
      'Everyone must sing a line from the song together.',
      'Players simultaneously show any emotion.',
      'The first one to raise their hand - comes up with a task for someone else.',
      'Everyone simultaneously makes a strange sound.',
      'The last one to wink - performs an action.',
      'Everyone shows a dance move.',
      'Everyone together comes up with a name for the party.',
      'The first one to touch the wall - wins.',
      'Everyone says any word in chorus.',
      'The first one to snap their fingers - gets a bonus.',
      'Everyone shows any animal.',
      'Everyone together waves their hands.',
      'The last one to laugh - makes a funny move.',
      'Everyone shouts something at the same time.',
      'Whoever shows a heart with their hands first gets a plus.',
      'Everyone portrays a model on a catwalk.',
      'Whoever sits down on the floor first asks someone else a question.',
      'Everyone shows what an evil boss looks like.',
      `Everyone says the host's name together.`,
      'Whoever claps their hands last does a mini-dance.',
    ],
  },
  {
    partygamecatgnm: 'Holiday set',
    partygametasks: [
      `Dance for 10 seconds like you're a robot.`,
      `Sing a song you know.`,
      'Take a funny selfie with the whole group.',
      'Make up a toast and say it.',
      `Pretend you're a news anchor.`,
      'Do 5 sit-ups and laugh at each one.',
      'Sing a line from any rap song.',
      'Show emotions only with facial expressions for 20 seconds.',
      'Come up with a nickname for each player.',
      'Imitate a famous singer or actor.',
      `Play "mirror" - repeat after the person on your left.`,
      'Show what you look like when you wake up in the morning.',
      `Dance like you're at a wedding.`,
      'Make any animal sound.',
      'Show emotions only with your hands for 15 seconds.',
      'Compliment each player.',
      'Come up with a new motto for the party.',
      'Pretend to be a waiter and take “orders” from the players.',
      'Dance in place.',
      'Make a scary face and scare someone.',
      'Say something in the voice of a cartoon character.',
      'Create an “advertisement” for anything around you.',
      'Imitate a cat that wants to eat.',
      'Shout something really pompous, like you’re a superhero.',
      'Act like you won a million.',
    ],
  },
];

const Partygamegmplay = ({ route }) => {
  const partygamenv = useNavigation();
  const [secondsLeft, setSecondsLeft] = useState(30);
  const intervalRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPartyGameQuestIdx, setCurrentPartyGameQuestIdx] = useState(0);
  const [isPartyGameLoading, setIsPartyGameLoading] = useState(true);
  const { cat, players } = route.params;
  const { isEnblPartyGameNot } = useAudio();

  useEffect(() => {
    setTimeout(() => {
      setIsPartyGameLoading(false);
      startTimer();
    }, 4000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const filteredPartyGameByCat = partygamecatg.find(
    partygamecat => partygamecat.partygamecatgnm === cat,
  );

  const switchPartyGamePlayer = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % players.length);
  };

  const switchPartyGameTask = () => {
    setCurrentPartyGameQuestIdx(
      prevIndex =>
        (prevIndex + 1) % filteredPartyGameByCat.partygametasks.length,
    );
  };

  const nextPartyGamePlayer = () => {
    switchPartyGamePlayer();
    startTimer();
    switchPartyGameTask();

    if (isEnblPartyGameNot && Platform.OS === 'android') {
      Toast.show({
        text1: `Task for: ${players[currentIndex]}`,
      });
    }
  };

  const formatPartyGameTime = secs => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const startTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    setSecondsLeft(30);

    intervalRef.current = setInterval(() => {
      setSecondsLeft(prev => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  return (
    <Partygamemnbg>
      {isPartyGameLoading ? (
        <View>
          <Partygamegmplldr />
        </View>
      ) : (
        <>
          <View style={styles.partygamecnt}>
            <View style={styles.partygamehead}>
              <TouchableOpacity
                style={styles.partygamebackbtn}
                activeOpacity={0.6}
                onPress={() => partygamenv.popToTop()}
              >
                <Text style={styles.partygamebackbtntxt}>Home</Text>
              </TouchableOpacity>
              <View
                style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}
              >
                <Image
                  source={require('../../assets/icons/virgingamepac.png')}
                />
                <Text style={styles.partygamehdtxt}>{cat}</Text>
              </View>
            </View>

            <View style={{ alignItems: 'center' }}>
              <View style={{ alignItems: 'center', marginTop: 30 }}>
                <Image
                  source={require('../../assets/images/virgingamegmbg.png')}
                />
                <Image
                  source={require('../../assets/images/virgingametpl.png')}
                  style={{ width: 277, height: 404, position: 'absolute' }}
                />

                <View
                  style={{
                    position: 'absolute',
                    paddingTop: 20,
                    alignItems: 'center',
                  }}
                >
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 10,
                    }}
                  >
                    <Image
                      source={require('../../assets/icons/virgingametime.png')}
                    />
                    <Text style={styles.partygametimertxt}>
                      {formatPartyGameTime(secondsLeft)}
                    </Text>
                  </View>

                  <View style={styles.partygametaskcnt}>
                    <Text style={styles.partygametasktxt}>
                      Task for: {players[currentIndex]}
                    </Text>
                  </View>

                  <Text style={styles.partygametask}>
                    {
                      filteredPartyGameByCat.partygametasks[
                        currentPartyGameQuestIdx
                      ]
                    }
                  </Text>
                </View>
                <Text style={styles.partygamequant}>
                  {currentPartyGameQuestIdx + 1}/
                  {filteredPartyGameByCat.partygametasks.length}
                </Text>
              </View>

              <View style={[styles.partygamewrp]}>
                <View style={styles.partygameimgwrap}>
                  <Image
                    source={require('../../assets/images/partygamewlc1.png')}
                    style={{ width: 97, height: 97, top: 15 }}
                  />
                </View>
                <Image
                  source={require('../../assets/icons/virgingamerarr.png')}
                />
                <Text style={styles.partygamesubttl}>
                  Come on, show some class!
                </Text>
              </View>

              <TouchableOpacity
                style={styles.partygamestartbtn}
                activeOpacity={0.6}
                onPress={nextPartyGamePlayer}
              >
                <Text style={styles.partygamewlcbtntxt}>Next player</Text>
                <Image
                  source={require('../../assets/icons/virgingamenxtarr.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </>
      )}
    </Partygamemnbg>
  );
};

const styles = StyleSheet.create({
  partygamecnt: {
    paddingTop: 80,
    padding: 16,
  },
  partygamehead: { alignItems: 'center', gap: 8 },
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
    width: '30%',
  },
  partygamewlcbtntxt: {
    fontFamily: 'Manrope-ExtraBold',
    fontSize: 24,
    color: '#000',
  },
  partygamestartbtn: {
    width: 224,
    height: 66,
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
    marginTop: 25,
    marginBottom: 44,
  },
  partygamebackbtn: {
    width: 54,
    height: 45,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    top: -5,
  },
  partygamebackbtntxt: {
    fontFamily: 'Manrope-Bold',
    fontSize: 12,
    color: '#fff',
  },
  partygametimertxt: {
    fontFamily: 'Manrope-ExtraBold',
    fontSize: 40,
    color: '#E72922',
    width: 100,
  },
  partygametaskcnt: {
    width: 194,
    paddingVertical: 10,
    paddingHorizontal: 14,
    backgroundColor: '#E72922',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  partygametasktxt: {
    fontFamily: 'Manrope-ExtraBold',
    fontSize: 18,
    color: '#fff',
  },
  partygametask: {
    fontFamily: 'Manrope-ExtraBold',
    fontSize: 18,
    color: '#000',
    width: 220,
    textAlign: 'center',
    marginTop: 40,
  },
  partygamequant: {
    fontFamily: 'Manrope-ExtraBold',
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    bottom: 40,
  },
});

export default Partygamegmplay;
