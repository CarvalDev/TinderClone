import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';
import nomeLogin from './styleCadastro';
import { LinearGradient } from 'expo-linear-gradient';
import EsquerdaIcon from '../assets/Images/esquerda.png';



export default function Cadastro() {
   
    
    
    /*const [envia, setEnvia] = useState(0);
    const Pressionar = () => setEnvia(conta => conta + 1); //função que aumenta de 1 em 1 quando clica no botão */

    const [nome, setNome] = useState('');
    
    
    const [mudare, setMudare] = useState('');
    
    function muda(){
        setMudare(nome)
        console.log(mudare)
      }
    

  
    
    return(
        <View style={nomeLogin.container}>
        { mudare==''?(
          <View style={nomeLogin.container2}> 
                <View style={nomeLogin.carrega}>
          
                    <View style={nomeLogin.porcento}>
                    <LinearGradient
                       style={nomeLogin.gradient}
                       colors={['#fd297b', '#ff5864', '#ff655b']}
                       start ={{x: -45, y:45}}
                       end ={{x:45 ,y:0}} >a</LinearGradient></View>
                  </View>
          <View style={nomeLogin.topo}>
            <Image
              style={nomeLogin.img}
              source={EsquerdaIcon}
            />
          </View>
          <View style={nomeLogin.box}>
            <View style={nomeLogin.header}>
              <Text style={nomeLogin.titulo}>Qual é o seu nome?</Text>
            </View>
            <TextInput  
                style={nomeLogin.input}
                value={nome}
                onChangeText={text=>setNome(text)} 
                placeholder='Digite seu primeiro nome'
              /> 
              <View style={StyleSheet.textos}>
               <Text style={nomeLogin.msg}>É assim que vai aparecer no seu perfil.</Text>
               <Text style={nomeLogin.msg1}>Não é possivel alterar isso mais tarde.</Text>
              </View>
          </View>
           

          <View style={nomeLogin.box2}>
            <TouchableOpacity
              style={nomeLogin.butao}
              onPress={() => muda()}
            > 

            <Text style={nomeLogin.butaoT}>Próxima</Text> 
            </TouchableOpacity>
          </View>
          </View>

              ):(

                <View style={nomeLogin.container2}> 
                <View style={nomeLogin.carrega2}>
          
                    <View style={nomeLogin.porcento2}>
                    <LinearGradient
                       style={nomeLogin.gradient}
                       colors={['#fd297b', '#ff5864', '#ff655b']}
                       start ={{x: -45, y:45}}
                       end ={{x:45 ,y:0}} >a</LinearGradient></View>
                  </View>
          <View style={nomeLogin.topo}>
            <Image
              style={nomeLogin.img}
              source={EsquerdaIcon}
            />
          </View>
          <View style={nomeLogin.box}>
            <View style={nomeLogin.header}>
              <Text style={nomeLogin.titulo}>Qual é o seu e-mail?</Text>
            </View>
            <TextInput  
                style={nomeLogin.input}
                value={nome}
                onChangeText={text=>setNome(text)} 
                placeholder='Digite seu primeiro nome'
              /> 
              <View style={StyleSheet.textos}>
               <Text style={nomeLogin.msg}>Verifique seu e-mail para não perder o acesso à sua conta.</Text>

              </View>
          </View>
           

          <View style={nomeLogin.box2}>
            <TouchableOpacity
              style={nomeLogin.butao}
              onPress={() => muda()}
            > 

            <Text style={nomeLogin.butaoT}>Próxima</Text> 
            </TouchableOpacity>
          </View>
          </View>
           )}
        </View>
      
    );
    }
