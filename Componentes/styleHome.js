import React from 'react';
import { StyleSheet } from 'react-native';

const estiliza = StyleSheet.create({
    container: {
        backgroundColor: '#ff655b',
    },
    box: {
        height: '50vh',
        width: '100vw',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    img: {
        width: 200,
        height: 50,
        marginBottom: 10,
    },
    box2: {
        height: '50vh',
        width: '100vw',
        alignItems: 'center',
        gap: 20,
    },
    termos: {
        marginTop: 10,
        color: 'white',
        textAlign: 'center',
        width: '84vw',
       
    },
    butao: {
        borderRadius: 50,
        width: '80vw',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 14,
    },
    butao2: {
        borderRadius: 50,
        width: '80vw',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderColor: 'white',
        borderWidth: 2,
        padding: 14,
    },
    butaoTexto: {
       
    },
    butaoTexto2: {
        
        color: 'white',
    },
    problemaLogin: {
        width: '80vw',
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 17,
        paddingTop: 10,
       
    },

});

export default estiliza