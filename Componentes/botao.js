import { View, Text, Image } from "react-native";
import styles from './styles';

export default function Botao(props){
    return(
        <View style={styles.botao}>
            <Text style={styles.textoBtn}>{props.texto}</Text>
            <View style={styles.viewDaFoto}>
                <View style={styles.icone}>
                    <Image source={props.url} style={styles.imagem}/>
                </View>
            </View>
        </View>
    )
}