import { View, Text, TextInput, TouchableOpacity, TouchableHighlight, Image } from 'react-native';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import estiliza from './styleHome';
import Tinder1 from '../assets/Images/tinder1.png';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export default function Index({navigation}) {
    
  
      
      
  
       
  
      return(
        <View style={estiliza.container}>
          <LinearGradient
          style={estiliza.gradient}
          colors={[ '#ff5864', '#ff655b']}
          start ={{x: -45, y:45}}
          end ={{x:45 ,y:0}}
          >
          <View style={estiliza.box}>
            <Image
            style={estiliza.img}
            source={Tinder1}
            />
          </View>
  
          <View style={estiliza.box2}>
            <Text style={estiliza.termos}>
              Ao tocar em "Entrar", você concorda com os nossos Termos. Saiba como processamos os seus dados em nossa Política de Privacidade e Política de Cookies.
            </Text>
  
            
  
            <TouchableOpacity
                style={estiliza.butao}
                onPress={() => navigation.navigate('Cadastro')}
            > 
            <Text style={estiliza.butaoTexto}>CRIAR UMA CONTA</Text> 
            </TouchableOpacity>
  
            <TouchableHighlight
                style={estiliza.butao2}
                onPress={()=> navigation.navigate('Home')}
            > 
            <Text style={estiliza.butaoTexto2}>ENTRAR</Text> 
            </TouchableHighlight>
  
            <Text style={estiliza.problemaLogin}>Problemas para fazer o login?</Text>
          </View>
          </LinearGradient>
        </View>
      );
  
  }