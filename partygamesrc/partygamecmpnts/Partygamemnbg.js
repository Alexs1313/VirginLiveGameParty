import { ImageBackground, ScrollView } from 'react-native';

const Partygamemnbg = ({ children }) => {
  return (
    <ImageBackground
      source={require('../../assets/images/partygamebg.png')}
      style={{ flex: 1 }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>{children}</ScrollView>
    </ImageBackground>
  );
};

export default Partygamemnbg;
