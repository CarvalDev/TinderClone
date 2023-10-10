import { View, Text,  TouchableHighlight, StyleSheet } from "react-native";
import style from './styleLogin';
import {LinearGradient} from 'expo-linear-gradient';

export default function BtnContinue(){
    return(
        <View style={style.btnContinue}>
                <LinearGradient style={style.degrade}
                 colors={['#fd346a','#ff5146']}
                 start={{x:0,y:1}}
	            end={{x:1,y:0}}
                locations={[.6,0.8]}>

                    <Text style={style.textBtn}>Login</Text>
        </LinearGradient>
        </View>
    )
}

