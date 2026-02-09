
import { Text, SafeAreaView } from 'react-native';
import Sobrenome from './src/Telas/Sobrenome';

export default function App() {
  return (
    <SafeAreaView>
      <Text>LAura Boeing!</Text>
      <Sobrenome sobrenome='Menegazzo'/>
      <Sobrenome sobrenome='Boeing'/>
    </SafeAreaView>
  );
}