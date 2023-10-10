import {View , Image} from 'react-native';
import perfil from '../estilizar/perfilEstiliza.js';

export default function nav() {
    return(
        <View style={perfil.nav}>

        <View style={perfil.icon}>
          <Image
            source={require('../assets/fogoTinder.png')}
            style={perfil.fogoTinder}
          />
          <Image
            source={require('../assets/tinder3.png')}
            style={perfil.tinderFoto}
          />
        </View>
        <View style={perfil.icons2}>
          <Image
            source={require('../assets/shield.png')}
            style={perfil.shieldImg}
          />
          <Image
            source={require('../assets/config.png')}
            style={perfil.configImg}
          />
        </View>
      </View>
    )
}