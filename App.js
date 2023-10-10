
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './componentes/login';
import FeedScreen from './componentes/feed';
import indexScreen from './componentes/index'; 
import HomeScreen from './componentes/home';
import CadastroScreen from './componentes/cadastro';


const Stack = createNativeStackNavigator();
export default function App(){
  return(
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Index">
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />        
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Cadastro" component={CadastroScreen} options={{ headerShown: false }} /> 
      <Stack.Screen name="Feed" component={FeedScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Index" component={indexScreen} options={{headerShown:false}}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}


