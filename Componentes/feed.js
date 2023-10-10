import { View, Text, StyleSheet } from "react-native";


    export default function Feed({navigation}){
        return(
            <View style={styles.cont}>
                <Text style={styles.texto}>Login efetuado</Text>
            </View>
        )
    }

    const styles = StyleSheet.create({
            cont:{
                height:'100vh',
                width:'100%',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',

            },
            texto:{
                fontSize:'2rem'
            }
    })