import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    cont:{
        height:'100vh',
        width:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },

    barraVoltar:{
        width:'15%',
        height:'10%',
        position:'absolute',
        top:0,
        left:0,
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },

    touchable:{
        width:'100%',
        height:'100%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },

    voltar:{
        width:'60%',
        height:'80%'
    },
    caixa:{
        width:'100%',
        height:'60%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
    titulo:{
        width:'80%',
        height:'22%',
       
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    textTitulo:{
        fontSize:'1.5rem',
        textAlign:'start',
        fontWeight:'bold'
    },
    inputs:{
        width:'95%',
        height:'33%',
        display:'flex',
        justifyContent:'start',
        alignItems:'center',
        gap:20,
    },
    input:{
        width:'80%',
        height:'40%',
        borderBottomWidth:'2px',
        borderColor:'gray'
    },
    infos:{
        width:'100%',
        height:'10%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    textInfo:{
        fontSize:'1rem',
        textDecorationLine:'underline',
        color:'blue'
    },

    btn:{
        height:'12%',
        width:'100%',
       
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginTop:20
    },
    btnContinue:{
        height:'100%',
        width:'80%',
        borderRadius:25
    },
    degrade:{
        height:'100%',
        width:'100%',
        borderRadius:25,
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    textBtn:{
        fontSize:'1.3rem',
        color:'#fff',
        fontWeight:'500'
    }
   

})

export default  style;