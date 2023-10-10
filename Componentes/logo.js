import { View, Image } from "react-native";
import styles from './styles';


export default function Logo(props){
    return(
        <View style={styles.areaLogo}>
            <Image source={props.url} style={styles.logo}/>
            
        </View>
    )
    
}