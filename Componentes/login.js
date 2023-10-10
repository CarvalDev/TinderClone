import { View, Text, Image, TextInput, TouchableHighlight  } from "react-native";
import { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import style from './styleLogin';
import Continue from './btnContinue';
import Voltar from '../assets/Images/voltar.png';

export default function LoginScreen({navigation}){
        
    const [numero, setNumero] = useState('')
    const [senha, setSenha] = useState('')

    function verificarAcesso(numero, senha){
        if(numero=="11937331028" && senha=="123"){
            navigation.navigate('Feed');
        }

        
    }
    return(
        <View style={style.cont}>
            <View style={style.barraVoltar}>
                    <TouchableHighlight
                    style={style.touchable}
                    activeOpacity={0.6}
                    underlayColor="#DDDDDD"
                    onPress={() => navigation.navigate('Home')}>
                    <Image source={Voltar} style={style.voltar}/>
                    </TouchableHighlight>
            </View>
            <View style={style.caixa}> 
                <View style={style.titulo}>
                        <Text style={style.textTitulo}>Informe seu número e senha para fazer login:</Text>
                </View>
                <View style={style.inputs}>
                        <TextInput style={style.input} onChangeText={text => setNumero(text) } />
                        <TextInput style={style.input} onChangeText={text => setSenha(text)}/>
                </View>
                <View style={style.infos}>
                        <Text style={style.textInfo}>Esqueceu a senha?</Text>
                </View>
                
                <View style={style.btn}>
                        <TouchableHighlight style={style.touchable}
                         
                         activeOpacity={0.6}
                         underlayColor="#DDDDDD"
                         onPress={() => verificarAcesso(numero, senha)}>
                        <Continue/>
                        </TouchableHighlight>
                </View>

            </View>
        </View>
    )
}