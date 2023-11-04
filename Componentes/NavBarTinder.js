import {View , Image, TouchableOpacity} from 'react-native';
import perfil from '../estilizar/perfilEstiliza.js';

export default function nav() {
    return(
        <View style={perfil.nav}>

        <View style={perfil.icon}>
          <Image
            source={require('../assets/navTinderLogo.png')}
            style={perfil.logoNav}
          />
          
          <TouchableOpacity>
          <Image
            source={require('../assets/configNav.png')}
            style={perfil.configNav}
          /> 
          </TouchableOpacity>   
          </View>
      </View>
    )
}
