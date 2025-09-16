import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Partygameswlcscr from './partygamesrc/partygamescrns/Partygameswlcscr';
import Partygamemnscr from './partygamesrc/partygamescrns/Partygamemnscr';
import Partygamegmscr from './partygamesrc/partygamescrns/Partygamegmscr';
import Partygamegmplay from './partygamesrc/partygamescrns/Partygamegmplay';
import Partygamerulesscr from './partygamesrc/partygamescrns/Partygamerulesscr';
import Partygamesettscr from './partygamesrc/partygamescrns/Partygamesettscr';
import Partygamesinfoscr from './partygamesrc/partygamescrns/Partygamesinfoscr';
import Partygamewlcldr from './partygamesrc/partygamecmpnts/Partygamewlcldr';
import { PartyGameAudioProvider } from './partygamesrc/partygamesstr/partygamecntx';
import { useEffect, useState } from 'react';
import Toast from 'react-native-toast-message';

const Stack = createStackNavigator();

const App = () => {
  const [vsblPartyGameEntScr, setVsblPartyGameEntScr] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVsblPartyGameEntScr(true);
    }, 5000);
  }, []);

  return (
    <NavigationContainer>
      <PartyGameAudioProvider>
        {vsblPartyGameEntScr ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Partygameswlcscr"
              component={Partygameswlcscr}
            />
            <Stack.Screen name="Partygamemnscr" component={Partygamemnscr} />
            <Stack.Screen name="Partygamegmscr" component={Partygamegmscr} />
            <Stack.Screen name="Partygamegmplay" component={Partygamegmplay} />
            <Stack.Screen
              name="Partygamerulesscr"
              component={Partygamerulesscr}
            />
            <Stack.Screen
              name="Partygamesettscr"
              component={Partygamesettscr}
            />
            <Stack.Screen
              name="Partygamesinfoscr"
              component={Partygamesinfoscr}
            />
          </Stack.Navigator>
        ) : (
          <Partygamewlcldr />
        )}
      </PartyGameAudioProvider>
      <Toast position="top" topOffset={50} />
    </NavigationContainer>
  );
};

export default App;
