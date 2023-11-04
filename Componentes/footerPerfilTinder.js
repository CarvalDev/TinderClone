import {View , Image, TouchableOpacity} from 'react-native';
import perfil from '../estilizar/perfilEstiliza.js';
import { Button } from 'react-native-web';

export default function nav() {
    return(
        <View style={perfil.footer}>
            <TouchableOpacity>
            <Image
                source={require('../assets/fogoFooter.png')}
                style={perfil.tinderFooter}
            />
            </TouchableOpacity>
            <TouchableOpacity>
            <Image  
                source={require('../assets/searchFooter.png')}
                style={perfil.searchFooter}
            />
            </TouchableOpacity>
            <TouchableOpacity>
            <Image  
                source={require('../assets/starFooter.jpg')}
                style={perfil.estrelaFooter}
            />
            </TouchableOpacity>
            <TouchableOpacity>
            <Image  
                source={require('../assets/commentFooter.png')}
                style={perfil.commentFooter}
            />
            </TouchableOpacity>
            <TouchableOpacity>
            <Image  
                source={require('../assets/personFooter.png')}
                style={perfil.personFooter}
            />
            </TouchableOpacity>

        </View>
    )
}
