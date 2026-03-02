
import { SafeAreaView } from 'react-native';
import Cesta from './src/Telas/Cesta';
import { SafeAreaView } from 'react-native-web';
import {
        useFonts,
        Montserrat_400Regular,
        Montserrat_700Bold
      } from '@expo-google-fonts/montserrat';
import {
        useFonte,
        Monda_400Regular,
        Monda_700Bold
      } from '@expo-google-fonts/monda';

export default function App() {
const [fontCarregada] = useFonts({
  "MontserratRegular": Montserrat_400Regular,
  "MontserratBold": Montserrat_700Bold
});

export default function App() {
const [fontDois] = useFonte({
  "MondaRegular": Monda_400Regular,
  "MondaBold": Monda_700Bold
});

if(!fontCarregada){
  return<View />
}

if(!fontDois){
  return<View />
}

  return (
    <SafeAreaView>
      <Cesta />
    </SafeAreaView>
  );
}