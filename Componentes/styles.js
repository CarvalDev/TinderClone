import { StyleSheet } from "react-native-web";

    const styles = StyleSheet.create({
        
        container:{
            display:'flex',
            flexDirection:'column',
            height:'100vh',
            width:'100%',
            
            
        },
        
        degrade: {
            height: '100%', 
	        width: '100%', 
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
	        borderRadius: 5
        },

        caixa:{
            width:'100%',
            height:'50%',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            
        },

        areaLogo:{
            height:'15%',
            width:'44%',
            
        },
        logo:{
            width:'100%',
            height:'100%'
        },

        controlPoliButon:{
            height:'75%',
            width:'100%',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
          
        },
        areaPolitica:{
            width:'100%',
            height:'28%',
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            alignItems:'center',
        },
        butonns:{
            width:'100%',
            height:'72%',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            gap:10
        },
        linha1:{
            width:'100%',
            height:'25%',
            fontSize:'14px',
            textAlign:'center',
            textTransform:'capitalize',
            color:'#fff'
        },
        underline:{
            textDecorationLine:'underline'
        },

        touchable:{
            width:'90%',
            height:'27%',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center'

        },

        botao:{
            width:'100%',
            height:'100%',
            borderRadius:25,
            backgroundColor:'#fff',
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center',
        },
        problemas:{
            width:'100%',
            height:'25%',
           display:'flex',
           alignItems:'center',
           justifyContent:'center'
        },
        textProblemas:{
            color:'#fff',
            fontSize:'1rem',
            fontWeight:'bolder'
        },
        viewDaFoto:{
            
            height:'100%',
            width:'100%',
            position:'absolute',
            backgroundColor:'transparent',
            display:'flex',
            alignItems:'start',
            justifyContent:'center'
            
        },

        icone:{
            width:'10%',
            height:'70%',
            marginLeft:15,
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
        },

        imagem:{
            width:'95%',
            height:'95%'
        },

        textoBtn:{
            fontSize:'1rem',
            textTransform:'uppercase',
            fontWeight:'400'
        }





    })

    export default styles;