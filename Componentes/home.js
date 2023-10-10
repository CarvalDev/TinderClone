import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from './styles';
import Logo from './logo';
import Tinder from '../assets/Images/logo.png';
import Btn from './botao';
import Google from '../assets/Images/google.png';
import Cadastro from '../assets/Images/cadastro.png';
import Entrar from '../assets/Images/entrar.png';

 export default function HomeScreen({navigation}) {
    return (
      <View style={styles.container}>
        <LinearGradient style={styles.degrade}
          colors={['#e24782','#ff8146']}
          start={{x:0,y:1}}
            end={{x:1,y:0}}
          locations={[.6,0.8]}>
  
          <View style={styles.caixa}>
              <Logo url={Tinder}/>
          </View>
          <View style={styles.caixa}>
              <View style={styles.controlPoliButon}>
                    <View style={styles.areaPolitica}>
                          <Text style={styles.linha1}> Logando, você concorda com os <Text style={styles.underline}>termos de uso</Text>.</Text>
                          <Text style={styles.linha1}> Saiba sobre como lidamos com seus dados</Text>
                          <Text style={styles.linha1}> Em nossa <Text style={styles.underline}>politica de privacidade</Text></Text>
                    </View>
                    <View style={styles.butonns}> 
                    <TouchableHighlight
                        style={styles.touchable}
                        activeOpacity={0.6}
                        underlayColor="#DDDDDD"
                        onPress={() => alert('Pressed!')}>
                          <Btn texto="login com o Google" url={Google}/>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.touchable}
                        activeOpacity={0.6}
                        underlayColor="#DDDDDD"
                        onPress={() => navigation.navigate('Index')}>
                          <Btn texto="Fazer cadastro" url={Cadastro}/>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.touchable}
                        activeOpacity={0.6}
                        underlayColor="#DDDDDD"
                        onPress={() => navigation.navigate('Login')}>
                          <Btn texto="Login" url={Entrar}/>
                    </TouchableHighlight>
                    </View>
  
                    </View>
                    <View style={styles.problemas}>
                      <Text style={styles.textProblemas}>Problemas para logar?</Text>  
                    <View/>
  
           </View>
                
          </View>
        </LinearGradient>
      </View>
    );
  }