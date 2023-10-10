import {View , Image} from 'react-native';
import perfil from '../estilizar/perfilEstiliza.js';

export default function nav() {
    return(
        <View style={perfil.footer}>
            <Image
                source={require('../assets/tinderLogoFooter.png')}
                style={perfil.tinderFooter}
            />
            <Image  
                source={require('../assets/estrelaFooter.png')}
                style={perfil.estrelaFooter}
            />
            <Image  
                source={require('../assets/searchFooter.png')}
                style={perfil.searchFooter}
            />
            <Image  
                source={require('../assets/comentFooter.png')}
                style={perfil.commentFooter}
            />
            <Image  
                source={require('../assets/personFooter.png')}
                style={perfil.personFooter}
            />

        </View>
    )
}
